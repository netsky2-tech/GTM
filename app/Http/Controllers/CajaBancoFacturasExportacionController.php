<?php 

namespace App\Http\Controllers;


use App\Models\AdmonAjustes;
use App\Models\CajaBancoAfectaciones;
use App\Models\CajaBancoBancos;
use App\Models\CajaBancoFacturasExportacionProductos;
use App\Models\CajaBancoFacturasExportacionViaPagos;
use App\Models\CajaBancoFacturaViaPagos;
use App\Models\CajaBancoMonedas;
use App\Models\CajaBancoTasasCambios;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\CuentasXCobrarCuentasXCobrar;
use App\Models\InventarioBodegas;
use App\Models\InventarioConfiguracion;
use App\Models\InventarioConsignacionProductos;
use App\Models\InventarioSalidaProductos;
use App\Models\InventarioSalidas;
use App\Models\PublicDepartamentos;
use App\Models\PublicSucursales;
use App\Models\PublicViaPagos;
use App\Models\PublicZonas;
use App\Models\VentaVendedores;
use DateTime;
use Hash, Validator,Auth;
use App\Models\InventarioBodegaProductos;

use App\Models\CajaBancoFacturasExportacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class CajaBancoFacturasExportacionController extends Controller
{
	/**
     * Get List of Facturasf
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, CajaBancoFacturasExportacion $facturas)
    {
        $facturas = $facturas->obtenerFacturasExportacion($request);

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $facturas->total(), 
                'rows' => $facturas->items()
            ],
            'messages' => null
        ]);
	}
	
		/**
     * Get List of Entrada
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerFactura(Request $request, CajaBancoFacturasExportacion $factura)
    {
		$rules = [
            'id_factura_exportacion' => 'required|integer|min:1',
            'cargar_dependencias' => 'required|boolean',
		];
	
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

           // $productos = $factura->obtenerProductosSalida($request);
            $factura = $factura->obtenerFactura($request);

            if(!empty($factura)){



                if($request->cargar_dependencias){
                    $ajustes_basicos = AdmonAjustes::whereIn('id_ajuste',array(4,5,26))->orderBy('id_ajuste')->select('id_ajuste','valor')->get();

                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'factura' => $factura,
                            'ajustes_basicos' => $ajustes_basicos,
                        ],
                        'messages' => null
                    ]);
                }else{
                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'factura' => $factura,
                        ],
                        'messages' => null
                    ]);
                }



            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_factura_exportacion'=>["Datos no encontrados"]),
                    'messages' => null
                ]);
            }


        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }


	public function registrar(Request $request)
	{ 
        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
            'doc_exoneracion.required_if' => 'El campo documento exoneracion es requerido cuando la factura no aplica IVA',
            'doc_exoneracion_ir.required_if' => 'El campo documento exoneracion es requerido cuando la factura aplica Retención IR',
            'doc_exoneracion_imi.required_if' => 'El campo documento exoneracion es requerido cuando la factura aplica Retención IMI',
            'factura_cliente.required' => 'El campo cliente es requerido.',
            'factura_sucursal.required' => 'El campo sucursal es requerido.',
            'factura_bodega.required' => 'El campo bodega es requerido.',
            'factura_vendedor.required' => 'El campo vendedor es requerido',
        ];
        
    	$rules = [
           // 'no_documento' => 'required|string|max:8',
            'f_factura' => 'required|date',
            'serie' => 'required|string|max:2',
           // 'factura_moneda' => 'required|array|min:1',
           // 'factura_moneda.id_moneda' => 'required|integer|min:1',
            'id_tipo' => 'required|integer|min:1|max:2',
            'factura_sucursal' => 'required|array|min:1',
            'factura_sucursal.id_sucursal' => 'required|integer|min:1',
            'factura_bodega' => 'required|array|min:1',
            'factura_bodega.id_bodega' => 'required|integer|min:1',

            'identificacion' => 'required|string|max:18',
            'observacion' => 'nullable|string|max:100',

            'monto_letras_cordobas' => 'nullable|string|max:250',
            'monto_letras_dolares' => 'nullable|string|max:250',

            'aplicaIVA'=> 'required|boolean',
            'aplicaIR'=> 'required|boolean',
            'aplicaIMI'=> 'required|boolean',

            'factura_cliente' => 'required|array|min:1',
            'factura_cliente.id_cliente' => 'required|integer|min:1',

            'factura_vendedor' => 'required|array|min:1',
            'factura_vendedor.id_vendedor' => 'required|integer|min:1',
            't_cambio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'doc_exoneracion' => 'required_if:aplicaIVA,false|string|max:20|nullable',
            'doc_exoneracion_ir' => 'required_if:aplicaIR,true|string|max:20|nullable',
            'doc_exoneracion_imi' => 'required_if:aplicaIMI,true|string|max:20|nullable',

            'mt_retencion' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'mt_retencion_imi' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'mt_impuesto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'mt_descuento' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'mt_ajuste' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',

            'peso_neto_total' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:1',
            'peso_bruto_total' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:1',
            'cantidad_tarimas' => 'required|integer|min:1',
            'contrato_oc' => 'required|string|max:50',

            'pago_vuelto_mn' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'pago_vuelto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',

            'detallePago' => 'required_if:id_tipo,1|array|nullable',
            'detallePago.*.via_pagox.id_via_pago' => 'required|integer|min:1',
            'detallePago.*.moneda_x.id_moneda' => 'required|integer|min:1',
            'detallePago.*.monto_me' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'detallePago.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'detallePago.*.banco_x.id_banco' => 'required_if:detallePago.*.via_pagox.id_via_pago,5|required_if:detallePago.*.via_pagox.id_via_pago,6|integer|min:1|nullable',
            'detallePago.*.numero_minuta' => 'required_if:detallePago.*.via_pagox.id_via_pago,1|string|max:30|nullable',
            'detallePago.*.numero_nota_credito' => 'required_if:detallePago.*.via_pagox.id_via_pago,4|string|max:30|nullable',
            'detallePago.*.numero_cheque' => 'required_if:detallePago.*.via_pagox.id_via_pago,5|string|max:30|nullable',
            'detallePago.*.numero_transferencia' => 'required_if:detallePago.*.via_pagox.id_via_pago,6|string|max:30|nullable',
            'detallePago.*.numero_recibo_pago' => 'required_if:detallePago.*.via_pagox.id_via_pago,7|string|max:30|nullable',

            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.productox.id_bodega_producto' => 'required|integer|min:0',
            'detalleProductos.*.precio_costo' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.precio_lista' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.peso_unitario' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
            'detalleProductos.*.productox.descripcion' => 'required|string|max:100',
            'detalleProductos.*.productox.unidad_medida' => 'required|string|max:100',

		];

		$validator = Validator::make($request->all(), $rules, $messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
			$factura = new CajaBancoFacturasExportacion;
                $nuevo_num = CajaBancoFacturasExportacion::select([DB::raw("COALESCE(max(no_factura),0)+1 as no_factura")])->where('serie',$request->serie)->first();
                $factura->no_factura = $nuevo_num['no_factura'];
                $factura->no_documento = $request->serie.'-'.$factura->no_factura;
                $factura->f_factura =  date("Y-m-d H:i:s");//$request->f_factura;
                $factura->serie = $request->serie;
                $factura->id_moneda = 1;
                $factura->observacion = $request->observacion;
                $factura->monto_letras_cordobas = $request->monto_letras_cordobas;
                $factura->monto_letras_dolares = $request->monto_letras_dolares;

                $factura->id_tipo = $request->id_tipo;
                $factura->id_sucursal = $request->factura_sucursal['id_sucursal'];
                $factura->id_bodega = $request->factura_bodega['id_bodega'];
                $factura->id_cliente = $request->factura_cliente['id_cliente'];

                $factura->identificacion = $request->identificacion;
                $factura->id_vendedor = $request->factura_vendedor['id_vendedor'];
                $factura->t_cambio = $request->t_cambio;
                $factura->doc_exoneracion = $request->doc_exoneracion;
                $factura->doc_exoneracion_ir = $request->doc_exoneracion_ir;
                $factura->doc_exoneracion_imi = $request->doc_exoneracion_imi;
                $factura->impuesto_exonerado = true;
                $factura->precio_venta_usado = $request->precio_venta_usado;

                $factura->mt_retencion = round($request->mt_retencion,2);
                $factura->mt_retencion_imi = round($request->mt_retencion_imi,2);
                $factura->mt_impuesto = round($request->mt_impuesto,2);
                $factura->mt_descuento = round($request->mt_descuento,2);
                $factura->mt_ajuste = round($request->mt_ajuste,2);
                $factura->mt_total = $request->total_final;
                $factura->mt_total_cordobas = $request->total_final_cordobas;


                $factura->peso_neto_total = $request->peso_neto_total;
                $factura->peso_bruto_total = $request->peso_bruto_total;
                $factura->cantidad_tarimas = $request->cantidad_tarimas;
                $factura->contrato_oc = $request->contrato_oc;

                $factura->mt_deuda = $request->pago_pendiente_mn;
                $factura->pago_vuelto = $request->pago_vuelto_mn;
                $factura->pago_vuelto_me = $request->pago_vuelto;

                $factura->saldo_factura =  $request->pago_pendiente_mn;
                $factura->dias_credito  = $request->dias_credito;
                $factura->f_vencimiento  =  date('Y-m-d', strtotime($factura->f_factura. ' + '.$request->dias_credito.' days'));
                $factura->u_creacion = Auth::user()->usuario;
                $factura->estado = 1;

                $salida = new InventarioSalidas;
                $salida->codigo_salida = InventarioSalidas::max('id_salida')+1;
                $salida->id_tipo_salida = 9;
                $salida->id_cliente = $factura->id_cliente ;
                $salida->numero_documento = $factura->no_documento ;
                $salida->fecha_salida = $factura->f_factura;
                $salida->id_bodega = $factura->id_bodega;
                $salida->descripcion_salida = 'Salida por Factura No.'.$factura->no_documento;
                $salida->u_creacion =  $factura->u_creacion;
                $salida->estado = 1;
                $salida->save();

                $factura->id_salida = $salida->id_salida;
                $factura->save();

                if($factura->id_tipo == 2 && round($factura->mt_deuda,2)>0){
                $cuentas_x_cobrar = new CuentasXCobrarCuentasXCobrar;
                $cuentas_x_cobrar->id_cliente =$factura->id_cliente;
                $cuentas_x_cobrar->id_tipo_documento = 1;
                $cuentas_x_cobrar->no_documento_origen = $factura->no_documento;
                $cuentas_x_cobrar->es_registro_importado = false;

                $cuentas_x_cobrar->identificador_origen = $factura->id_factura_exportacion;
                $cuentas_x_cobrar->fecha_movimiento = date("Y-m-d H:i:s");//$factura->f_factura;
                $cuentas_x_cobrar->monto_movimiento = $factura->mt_deuda;
                $cuentas_x_cobrar->saldo_actual = $factura->mt_deuda;
                $cuentas_x_cobrar->fecha_vencimiento = $factura->f_vencimiento;
                $cuentas_x_cobrar->descripcion_movimiento = 'Registro del Monto de la Factura '.$factura->no_documento;
                $cuentas_x_cobrar->usuario_registra =$factura->u_creacion;
                $cuentas_x_cobrar->estado = 1;
                $cuentas_x_cobrar->save();
                }

                $monto_cordobas = 0;
                $monto_dolares = 0;

           foreach ($request->detallePago as $pago) {
            $factura_pago = new CajaBancoFacturasExportacionViaPagos;
            $factura_pago->id_factura = $factura->id_factura_exportacion;
               $factura_pago->id_via_pago = $pago['via_pagox']['id_via_pago'];
               $factura_pago->id_moneda = $pago['moneda_x']['id_moneda'];
               $factura_pago->monto_me = $pago['monto_me'];
               $factura_pago->monto = $pago['monto'];
               if($factura_pago->id_via_pago == 1 ||$factura_pago->id_via_pago == 5 || $factura_pago->id_via_pago == 6){
                   $factura_pago->id_banco = $pago['banco_x']['id_banco'];
               }
               $factura_pago->numero_minuta = $pago['numero_minuta'];
               $factura_pago->numero_nota_credito = $pago['numero_nota_credito'];
               $factura_pago->numero_cheque = $pago['numero_cheque'];
               $factura_pago->numero_transferencia = $pago['numero_transferencia'];
               $factura_pago->numero_recibo_pago = $pago['numero_recibo_pago'];

               //if($factura_pago->id_moneda==1){
                   $monto_cordobas = $monto_cordobas + $factura_pago->monto;
               //}else{
               //    $monto_dolares = $monto_dolares + $factura_pago->monto_me;
               //}

               $factura_pago->save();
           }

            $total_venta_producto = 0;
            $total_venta_servicios= 0;
            $total_costo_producto = 0;
            $total_costo_servicios= 0;
            $i=0;
			foreach ($request->detalleProductos as $producto) {

                $factura_producto = new CajaBancoFacturasExportacionProductos;

			    if($producto['productox']['id_bodega_producto'] > 0 && $producto['productox']['tipo_producto']!=2){

                $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['productox']['id_bodega_producto'])->first();
                if(($bodega_sub->cantidad-$producto['cantidad'])>=0){
                    $bodega_sub->cantidad = $bodega_sub->cantidad-$producto['cantidad'];
                }else{
                    //$producto['cantidad'] = $bodega_sub->cantidad;
                    //$bodega_sub->cantidad = 0;
                    DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => array('detalleProductos.'.$i.'.cantidad'=>['La cantidad solicitada para este producto no esta disponible']),
                        'messages' => null
                    ]);
                }
                $bodega_sub->save();
                $factura_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                $factura_producto->id_producto = $bodega_sub->id_producto;

			    }else{
                    $factura_producto->id_bodega_producto = null;
                    $factura_producto->id_producto = $producto['productox']['id_producto'];
                }

				$factura_producto->id_factura_exportacion = $factura->id_factura_exportacion;
                $factura_producto->descripcion_producto = $producto['productox']['descripcion'];
                $factura_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                $factura_producto->unidad_medida = $producto['productox']['unidad_medida'];

                $factura_producto->cantidad = $producto['cantidad'];
                $factura_producto->precio_costo = $producto['precio_costo'];
                $factura_producto->precio_lista = round($producto['precio_lista'],2);
                $factura_producto->precio = $request->precio_venta_usado;
                $factura_producto->peso_unitario = $producto['peso_unitario'];

                $factura_producto->p_descuento =0;
                $factura_producto->p_ajuste = 0;
                $factura_producto->p_impuesto = 0;

                $factura_producto->m_impuesto = 0;
                $factura_producto->m_descuento = 0;
                $factura_producto->m_ajuste = 0;

                $factura_producto->f_creacion = date("Y-m-d H:i:s");
				$factura_producto->save();


                if($producto['productox']['tipo_producto']!=2){
                    $productoExiste = InventarioSalidaProductos::where('id_bodega_producto',$bodega_sub->id_bodega_producto)
                        ->where('id_salida',$salida->id_salida)->first();
                    if(!$productoExiste){
                    $salida_producto = new InventarioSalidaProductos;
                    $salida_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                    $salida_producto->id_salida = $salida->id_salida;
                    $salida_producto->descripcion_producto = $producto['productox']['descripcion'];
                    $salida_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                    $salida_producto->unidad_medida = $producto['productox']['unidad_medida'];
                    $salida_producto->precio_unitario = $producto['precio_costo'];
                    $salida_producto->cantidad_saliente = $producto['cantidad'];
                    $salida_producto->cantidad_despachada = 0;
                    $salida_producto->cantidad_faltante = 0;
                    $salida_producto->u_creacion = $salida->u_creacion;
                    $salida_producto->save();
                    }else{
                        $productoExiste->cantidad_saliente = $productoExiste->cantidad_saliente + $producto['cantidad'];
                        $productoExiste->save();
                    }

                    $total_venta_producto = $total_venta_producto + round($factura_producto->precio *$factura_producto->cantidad ,2);
                    $total_costo_producto = $total_costo_producto + round($factura_producto->precio_costo *$factura_producto->cantidad ,6);
                }else{
                    $total_venta_servicios = $total_venta_servicios + round($factura_producto->precio *$factura_producto->cantidad ,2);
                    $total_costo_servicios = $total_costo_servicios + round($factura_producto->precio_costo *$factura_producto->cantidad ,6);
                }

                $i++;

            }


                /*INICIA movimiento contable - Factura*/

                $documento = new ContabilidadDocumentosContables;
                $tipo = ContabilidadTiposDocumentos::find(7);
                $fecha= date("Y-m-d H:i:s");
                $codigo = $documento->obtenerCodigoDocumento(array('id_tipo_doc'=>7,'fecha_doc'=>$fecha));

                $nuevo_codigo = json_decode($codigo[0]);

                date_default_timezone_set('America/Managua');

                $documento->num_documento = $tipo->prefijo.'-'.$nuevo_codigo->secuencia;
                $documento->fecha_emision =  date('Y-m-d');
                $documento->codigo_documento = $nuevo_codigo->secuencia;


                $date = DateTime::createFromFormat("Y-m-d", $documento->fecha_emision);

                $periodo = ContabilidadPeriodoFiscal::where('periodo',$date->format("Y"))->get();

                if(empty($periodo[0])){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_emision'=>["El periodo ".$date->format("Y")." no se encuentra registrado, por favor consulte al administrador"]),
                        'messages' => null
                    ]);
                    exit;
                }

                if($periodo[0]->estado){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_emision'=>["El periodo ".$date->format("Y")." es inválido, ya que se encuentra en estado COMPLETADO"]),
                        'messages' => null
                    ]);
                    exit;
                }

                $periodo_mes = ContabilidadPeriodoMeses::where('id_periodo_fiscal',$periodo[0]->id_periodo_fiscal)->where('mes',$date->format("n"))->get();

                if(empty($periodo_mes[0])){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_emision'=>["El mes ".$date->format("F")." no se encuentra registrado, por favor consulte al administrador"]),
                        'messages' => null
                    ]);
                    exit;
                }

                if($periodo_mes[0]->estado == 2 ){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_emision'=>["El mes ".config('global.meses')[$periodo_mes[0]->mes-1]." es inválido, ya que se encuentra en estado COMPLETADO"]),
                        'messages' => null
                    ]);
                    exit;
                }

                $documento->id_periodo_fiscal = $periodo[0]->id_periodo_fiscal;

                $documento->id_tipo_doc = 7;
                $documento->valor = $factura->mt_total;
                $documento->concepto = 'Registramos venta por factura No. '.$factura->no_documento.'. Monto total C$ '.$factura->mt_total;
                $documento->id_moneda = 1;
                $documento->u_creacion = Auth::user()->usuario;
                $documento->estado = 1;

                $documento->save();
                ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');

                /* Inicio Seccion 1) Moneda Nacional / Extranjera*/

                if($monto_cordobas>0){
                    $documento_cuenta_contableS1 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS1->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS1->concepto = 'Registramos ingreso de moneda nacional por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS1->debe = $request->mt_subtotal - $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi -$factura->mt_descuento;
                    $documento_cuenta_contableS1->haber = 0;
                    $documento_cuenta_contableS1->debe_org = $request->mt_subtotal - $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi -$factura->mt_descuento;
                    $documento_cuenta_contableS1->haber_org =  0;
                    $documento_cuenta_contableS1->id_moneda =  1;
                    $documento_cuenta_contableS1->id_centro =  null;
                    $documento_cuenta_contableS1->id_cuenta_contable = 112;
                    $documento_cuenta_contableS1->cta_contable = '1111-01-000';
                    $documento_cuenta_contableS1->cta_contable_padre = '1111-00-000';
                    $documento_cuenta_contableS1->save();
                }

               /* if($monto_dolares>0){
                    $documento_cuenta_contableS2 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS2->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS2->concepto = 'Registramos ingreso de moneda extranjera por factura No. '.$factura->no_documento;
                    //$documento_cuenta_contableS2->debe = round($monto_dolares*$factura->t_cambio,2);
                    $documento_cuenta_contableS2->debe = $factura->mt_total-$monto_cordobas-$factura->mt_deuda;
                    $documento_cuenta_contableS2->haber =  0;
                    $documento_cuenta_contableS2->debe_org = $monto_dolares;
                    $documento_cuenta_contableS2->haber_org =  0;
                    $documento_cuenta_contableS2->id_moneda =  3;
                    $documento_cuenta_contableS2->id_centro =  null;
                    $documento_cuenta_contableS2->id_cuenta_contable = 113;
                    $documento_cuenta_contableS2->cta_contable = '1111-02-000';
                    $documento_cuenta_contableS2->cta_contable_padre = '1111-00-000';
                    $documento_cuenta_contableS2->save();
                }*/
                /* Fin seccion 1) Moneda Nacional / Extranjera*/


                /* Inicio Seccion 1.2) Cuentas por cobrar */

                if($factura->id_tipo == 2 && round($factura->mt_deuda,2)>0){

                    $documento_cuenta_contableS2a = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS2a->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS2a->concepto = 'Acreditamos cuentas por cobrar por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS2a->debe = $factura->mt_deuda- $factura->mt_retencion - $factura->mt_retencion_imi -$factura->mt_descuento;;
                    $documento_cuenta_contableS2a->haber =  0;
                    $documento_cuenta_contableS2a->debe_org = $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi -$factura->mt_descuento;;
                    $documento_cuenta_contableS2a->haber_org =  0;
                    $documento_cuenta_contableS2a->id_moneda =  1;
                    $documento_cuenta_contableS2a->id_centro =  null;
                    $documento_cuenta_contableS2a->id_cuenta_contable = 60;
                    $documento_cuenta_contableS2a->cta_contable = '1121-00-000';
                    $documento_cuenta_contableS2a->cta_contable_padre = '1120-00-000';
                    $documento_cuenta_contableS2a->save();

                }



                /* Fin seccion 1.2) */


                /* Inicio Seccion 2) Retenciones IR e IMI */

                if($request->aplicaIR && $factura->mt_retencion>0){
                    $documento_cuenta_contableS3 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS3->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS3->concepto = 'Registramos retencion 2% ventas por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS3->debe = $factura->mt_retencion;
                    $documento_cuenta_contableS3->haber =  0;
                    $documento_cuenta_contableS3->debe_org = $factura->mt_retencion;
                    $documento_cuenta_contableS3->haber_org =  0;
                    $documento_cuenta_contableS3->id_moneda =  1;
                    $documento_cuenta_contableS3->id_centro =  null;
                    $documento_cuenta_contableS3->id_cuenta_contable = 129;
                    $documento_cuenta_contableS3->cta_contable = '1142-02-000';
                    $documento_cuenta_contableS3->cta_contable_padre = '1142-00-000';
                    $documento_cuenta_contableS3->save();
                }

                if($request->aplicaIMI && $factura->mt_retencion_imi>0){
                    $documento_cuenta_contableS4 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS4->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS4->concepto = 'Registramos retencion alcaldia 1% ventas por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS4->debe = $factura->mt_retencion_imi;
                    $documento_cuenta_contableS4->haber =  0;
                    $documento_cuenta_contableS4->debe_org = $factura->mt_retencion_imi;
                    $documento_cuenta_contableS4->haber_org =  0;
                    $documento_cuenta_contableS4->id_moneda =  1;
                    $documento_cuenta_contableS4->id_centro =  null;
                    $documento_cuenta_contableS4->id_cuenta_contable = 130;
                    $documento_cuenta_contableS4->cta_contable = '1142-03-000';
                    $documento_cuenta_contableS4->cta_contable_padre = '1142-00-000';
                    $documento_cuenta_contableS4->save();
                }

                /* Fin Seccion 2) */


                /* Inicio Seccion 3) Impuesto al valor agregado */

                if(!$factura->impuesto_exonerado && $factura->mt_impuesto>0){
                    $documento_cuenta_contableS5 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS5->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS5->concepto = 'Registramos Impuesto al valor agregado por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS5->debe =0;
                    $documento_cuenta_contableS5->haber = $factura->mt_impuesto;
                    $documento_cuenta_contableS5->debe_org = 0;
                    $documento_cuenta_contableS5->haber_org =  $factura->mt_impuesto;
                    $documento_cuenta_contableS5->id_moneda =  1;
                    $documento_cuenta_contableS5->id_centro =  null;
                    $documento_cuenta_contableS5->id_cuenta_contable = 78;
                    $documento_cuenta_contableS5->cta_contable = '2131-00-000';
                    $documento_cuenta_contableS5->cta_contable_padre = '2130-00-000';
                    $documento_cuenta_contableS5->save();
                }

                /* Fin Seccion 3) */

                /* Inicio Seccion 4) Ingresos por producto y servicios*/

                if($total_venta_producto>0){

                    $documento_cuenta_contableS6 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS6->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS6->concepto = 'Registramos Ingreso por venta de articulo(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS6->debe =0;
                    $documento_cuenta_contableS6->haber = $total_venta_producto;
                    $documento_cuenta_contableS6->debe_org = 0;
                    $documento_cuenta_contableS6->haber_org =  $total_venta_producto;
                    $documento_cuenta_contableS6->id_moneda =  1;
                    $documento_cuenta_contableS6->id_centro =  1;///cambiar centro de costo ingreso
                    $documento_cuenta_contableS6->id_cuenta_contable = 95;
                    $documento_cuenta_contableS6->cta_contable = '4111-00-000';
                    $documento_cuenta_contableS6->cta_contable_padre = '4110-00-000';
                    $documento_cuenta_contableS6->save();

                }


                if($total_venta_servicios>0){
                    $documento_cuenta_contableS7 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS7->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS7->concepto = 'Registramos Ingreso por venta de servicio(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS7->debe =0;
                    $documento_cuenta_contableS7->haber = $total_venta_servicios;
                    $documento_cuenta_contableS7->debe_org = 0;
                    $documento_cuenta_contableS7->haber_org =  $total_venta_servicios;
                    $documento_cuenta_contableS7->id_moneda =  1;
                    $documento_cuenta_contableS7->id_centro =  1;///cambiar centro de costo ingreso
                    $documento_cuenta_contableS7->id_cuenta_contable = 43;
                    $documento_cuenta_contableS7->cta_contable = '4120-00-000';
                    $documento_cuenta_contableS7->cta_contable_padre = '4100-00-000';
                    $documento_cuenta_contableS7->save();
                }


                /* Fin Seccion 4) */

                /* Inicio Seccion 4.1) - Descuentos en factura*/

                    if($factura->mt_descuento>0){
                        $documento_cuenta_contableS7a = new ContabilidadDocumentosMovimientos;
                        $documento_cuenta_contableS7a->id_documento = $documento->id_documento;
                        $documento_cuenta_contableS7a->concepto = 'Registramos Descuento de venta por factura No. '.$factura->no_documento;
                        $documento_cuenta_contableS7a->debe =$factura->mt_descuento;
                        $documento_cuenta_contableS7a->haber = 0;
                        $documento_cuenta_contableS7a->debe_org = $factura->mt_descuento;
                        $documento_cuenta_contableS7a->haber_org =  0;
                        $documento_cuenta_contableS7a->id_moneda =  1;
                        $documento_cuenta_contableS7a->id_centro =  1;///cambiar centro de costo ingreso
                        $documento_cuenta_contableS7a->id_cuenta_contable = 134;
                        $documento_cuenta_contableS7a->cta_contable = '4132-03-000';
                        $documento_cuenta_contableS7a->cta_contable_padre = '4132-00-000';
                        $documento_cuenta_contableS7a->save();
                    }


                /* Fin Seccion 4.1) */

                /* Inicio seccion 4.2) seccion diferencia ganancia / perdida */

                /*$total_diff = round($monto_dolares*$factura->t_cambio,4)
                    + $monto_cordobas + $factura->mt_deuda + $factura->mt_retencion
                    + $factura->mt_retencion_imi + $factura->mt_descuento
                    -$factura->mt_impuesto -$total_venta_producto-$total_venta_servicios;*/

                /*echo round($monto_dolares*$factura->t_cambio,4)."\n";
                echo $monto_cordobas."\n";
                echo $factura->mt_deuda."\n";
                echo $factura->mt_retencion."\n";
                echo $factura->mt_retencion_imi."\n";
                echo $factura->mt_descuento."\n";
                echo $factura->mt_impuesto."\n";
                echo $total_venta_producto."\n";
                echo $total_venta_servicios."\n";

                echo round($total_diff,4)."\n";*/

               /*if($total_diff >= -1 && $total_diff <= 0.99 && round($total_diff,2)!=0){
                    $documento_cuenta_contableS7b = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS7b->id_documento = $documento->id_documento;

                    if($total_diff>0){
                        $documento_cuenta_contableS7b->concepto = 'Registramos ingreso por diferencial cambiaro por factura No. '.$factura->no_documento;
                        $documento_cuenta_contableS7b->debe =0;
                        $documento_cuenta_contableS7b->haber = round($total_diff,2);
                        $documento_cuenta_contableS7b->debe_org = 0;
                        $documento_cuenta_contableS7b->haber_org =  round($total_diff,2);
                    }else{
                    $documento_cuenta_contableS7b->concepto = 'Registramos egreso por diferencial cambiaro por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS7b->debe =abs(round($total_diff,2));
                    $documento_cuenta_contableS7b->haber = 0;
                    $documento_cuenta_contableS7b->debe_org = abs(round($total_diff,2));
                    $documento_cuenta_contableS7b->haber_org =  0;
                }

                    $documento_cuenta_contableS7b->id_moneda =  1;
                    $documento_cuenta_contableS7b->id_centro =  1;///cambiar centro de costo ingreso
                    $documento_cuenta_contableS7b->id_cuenta_contable = 136;
                    $documento_cuenta_contableS7b->cta_contable = '4211-01-000';
                    $documento_cuenta_contableS7b->cta_contable_padre = '4211-00-000';
                    $documento_cuenta_contableS7b->save();
                }*/

                /* Fin Seccion 4.2)*/


                /* Inicio Seccion 5) Costos por producto y servicios*/

                if($total_costo_producto>0){

                    $documento_cuenta_contableS8 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS8->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS8->concepto = 'Registramos Costo de venta de articulo(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS8->debe =$total_costo_producto;
                    $documento_cuenta_contableS8->haber = 0;
                    $documento_cuenta_contableS8->debe_org = $total_costo_producto;
                    $documento_cuenta_contableS8->haber_org =  0;
                    $documento_cuenta_contableS8->id_moneda =  1;
                    $documento_cuenta_contableS8->id_centro =  1;///cambiar centro de costo ingreso
                    $documento_cuenta_contableS8->id_cuenta_contable = 103;
                    $documento_cuenta_contableS8->cta_contable = '5111-00-000';
                    $documento_cuenta_contableS8->cta_contable_padre = '5110-00-000';
                    $documento_cuenta_contableS8->save();

                }

                if($total_costo_servicios>0){
                    $documento_cuenta_contableS9 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS9->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS9->concepto = 'Registramos Costo de venta de servicio(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS9->debe =$total_costo_servicios;
                    $documento_cuenta_contableS9->haber = 0;
                    $documento_cuenta_contableS9->debe_org = $total_costo_servicios;
                    $documento_cuenta_contableS9->haber_org =  0;
                    $documento_cuenta_contableS9->id_moneda =  1;
                    $documento_cuenta_contableS9->id_centro =  1;///cambiar centro de costo ingreso
                    $documento_cuenta_contableS9->id_cuenta_contable = 104;
                    $documento_cuenta_contableS9->cta_contable = '5121-00-000';
                    $documento_cuenta_contableS9->cta_contable_padre = '5120-00-000';
                    $documento_cuenta_contableS9->save();
                }


                if($total_costo_producto>0){
                    $documento_cuenta_contableS10 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS10->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS10->concepto = 'Registramos debito de productos en bodega por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS10->debe =0;
                    $documento_cuenta_contableS10->haber = $total_costo_producto;
                    $documento_cuenta_contableS10->debe_org = 0;
                    $documento_cuenta_contableS10->haber_org =  $total_costo_producto;
                    $documento_cuenta_contableS10->id_moneda =  1;
                    $documento_cuenta_contableS10->id_centro =  1;///cambiar centro de costo ingreso
                    $documento_cuenta_contableS10->id_cuenta_contable = 63;
                    $documento_cuenta_contableS10->cta_contable = '1131-00-000';
                    $documento_cuenta_contableS10->cta_contable_padre = '1130-00-000';
                    $documento_cuenta_contableS10->save();
                }

                if($total_costo_servicios>0){
                    $documento_cuenta_contableS11 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS11->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS11->concepto = 'Registramos debito del costo de venta de servicios por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS11->debe =0;
                    $documento_cuenta_contableS11->haber = $total_costo_servicios;
                    $documento_cuenta_contableS11->debe_org = 0;
                    $documento_cuenta_contableS11->haber_org =  $total_costo_servicios;
                    $documento_cuenta_contableS11->id_moneda =  1;
                    $documento_cuenta_contableS11->id_centro =  1;///cambiar centro de costo ingreso
                    $documento_cuenta_contableS11->id_cuenta_contable = 104;
                    $documento_cuenta_contableS11->cta_contable = '5121-00-000';
                    $documento_cuenta_contableS11->cta_contable_padre = '5110-00-000';
                    $documento_cuenta_contableS11->save();
                }

                /* Fin Seccion 5) */

            $total_ventax = $total_venta_producto+$total_venta_servicios;
                /* Inicio Seccion 6) Gastos de comercialización */

                   $documento_cuenta_contableS15 = new ContabilidadDocumentosMovimientos;
                   $documento_cuenta_contableS15->id_documento = $documento->id_documento;
                   $documento_cuenta_contableS15->concepto = 'Registramos gastos de comercialización por factura No. '.$factura->no_documento;
                   $documento_cuenta_contableS15->debe = round($total_ventax*0.03,2);
                   $documento_cuenta_contableS15->haber =  0;
                   $documento_cuenta_contableS15->debe_org = round($total_ventax*0.03,2);
                   $documento_cuenta_contableS15->haber_org =  0;
                   $documento_cuenta_contableS15->id_moneda =  1;
                   $documento_cuenta_contableS15->id_centro =  null;
                   $documento_cuenta_contableS15->id_cuenta_contable = 105;
                   $documento_cuenta_contableS15->cta_contable = '1142-02-000';
                   $documento_cuenta_contableS15->cta_contable_padre = '1142-00-000';
                   $documento_cuenta_contableS15->save();

                   $documento_cuenta_contableS16 = new ContabilidadDocumentosMovimientos;
                   $documento_cuenta_contableS16->id_documento = $documento->id_documento;
                   $documento_cuenta_contableS16->concepto = 'Registramos gastos de comercialización por factura No. '.$factura->no_documento;
                   $documento_cuenta_contableS16->debe =0;
                   $documento_cuenta_contableS16->haber = round($total_ventax*0.03,2);
                   $documento_cuenta_contableS16->debe_org = 0;
                   $documento_cuenta_contableS16->haber_org =  round($total_ventax*0.03,2);
                   $documento_cuenta_contableS16->id_moneda =  1;
                   $documento_cuenta_contableS16->id_centro =  null;
                   $documento_cuenta_contableS16->id_cuenta_contable = 79;
                   $documento_cuenta_contableS16->cta_contable = '2131-00-000';
                   $documento_cuenta_contableS16->cta_contable_padre = '2130-00-000';
                   $documento_cuenta_contableS16->save();

                /* Fin Seccion 6) */


                /* Inicio Seccion 7) Pago minimo*/

                $documento_cuenta_contableS13 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS13->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS13->concepto = 'Registramos retencion 2% ventas por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS13->debe = round($total_ventax*0.02,2);
                    $documento_cuenta_contableS13->haber =  0;
                    $documento_cuenta_contableS13->debe_org = round($total_ventax*0.02,2);
                    $documento_cuenta_contableS13->haber_org =  0;
                    $documento_cuenta_contableS13->id_moneda =  1;
                    $documento_cuenta_contableS13->id_centro =  null;
                    $documento_cuenta_contableS13->id_cuenta_contable = 129;
                    $documento_cuenta_contableS13->cta_contable = '1142-02-000';
                    $documento_cuenta_contableS13->cta_contable_padre = '1142-00-000';
                    $documento_cuenta_contableS13->save();

                    $documento_cuenta_contableS14 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS14->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS14->concepto = 'Registramos Impuesto al valor agregado por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS14->debe =0;
                    $documento_cuenta_contableS14->haber = round($total_ventax*0.02,2);
                    $documento_cuenta_contableS14->debe_org = 0;
                    $documento_cuenta_contableS14->haber_org =  round($total_ventax*0.02,2);
                    $documento_cuenta_contableS14->id_moneda =  1;
                    $documento_cuenta_contableS14->id_centro =  null;
                    $documento_cuenta_contableS14->id_cuenta_contable = 78;
                    $documento_cuenta_contableS14->cta_contable = '2131-00-000';
                    $documento_cuenta_contableS14->cta_contable_padre = '2130-00-000';
                    $documento_cuenta_contableS14->save();

                /* Fin Seccion 7) */

                /* TERMINA MOVIMIENTO CONTABLE*/

			DB::commit();
			return response()->json([
				'status' => 'success',
				'result' => '',
				'messages' => null
			]);
        } catch (Exception $e){
			DB::rollBack();
			return response()->json([
				'status' => 'error',
				'result' => 'Error de base de datos',
				'messages' => null
			]);
        }

		
		} else {
			return response()->json([
				'status' => 'error',
				'result' => $validator->messages(),
				'messages' => null
			]);
		}
    }



    public function nueva(Request $request)
    {

        $afectaciones = CajaBancoAfectaciones::where('activo',true)->orderby('id_afectacion')->get();
        $tasa = CajaBancoTasasCambios::select('tasa','tasa_paralela')->where('fecha',date("Y-m-d"))->first();
        $vendedores = VentaVendedores::select(['id_vendedor','nombre_completo','id_zona'])->get();
        $vias_pago = PublicViaPagos::select(['id_via_pago','descripcion'])->where('activo',true)->orderBy('id_via_pago')->get();
        $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();
        $bancos = CajaBancoBancos::select(['id_banco','descripcion'])->where('activo', 1)->get();
        $sucursales = PublicSucursales::select(['id_sucursal','serie','descripcion'])->with('sucursalBodegaUsado')->get();
        $precio_venta_usado = InventarioConfiguracion::where('id_configuracion',2)->select('valor')->first();

        return response()->json([
                'status' => 'success',
                'result' => [
                    'vias_pago' => $vias_pago,
                    'monedas' => $monedas,
                    'bancos' => $bancos,
                    'afectaciones' => $afectaciones,
                    'sucursales' => $sucursales,
                    'vendedores' => $vendedores,
                    't_cambio' => $tasa,
                    'precio_venta_usado'=>$precio_venta_usado->valor
                ],
                'messages' => null
            ]);

    }


    public function cancelarFactura(Request $request, CajaBancoFacturasExportacion $factura)
    {
        $rules = [
            'id_factura_exportacion' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $factura = CajaBancoFacturasExportacion::find($request->id_factura_exportacion);

            if(!empty($factura)&&$factura->estado==1){

                try{
                    DB::beginTransaction();
                    $factura->estado=0;
                    $factura->observacion = $factura->observacion . ' **Factura cancelada por '.Auth::user()->usuario.' a las '.date("Y-m-d H:i:s");
                    $factura->save();

                    foreach ($request->factura_productos as $producto) {
                        $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['id_bodega_producto'])->first();
                        $bodega_sub->cantidad = $bodega_sub->cantidad+$producto['cantidad_solicitada'];
                        $bodega_sub->save();
                    }

                    DB::commit();

                    return response()->json([
                        'status' => 'success',
                        'messages' => null
                    ]);

                } catch (Exception $e){
                    DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => 'Error de base de datos',
                        'messages' => null
                    ]);
                }
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_factura_exportacion'=>["Datos no encontrados o la solicitud ya autorizada"]),
                    'messages' => null
                ]);
            }


        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }

    public function obtenerFacturasCliente(Request $request, CajaBancoFacturasExportacion $facturas)
    {
        $facturas = $facturas->obtenerFacturasCliente($request);

        return response()->json([
            'status' => 'success',
            'result' => $facturas,
            'messages' => null
        ]);
    }


    public function reporte($ext,$id_factura_exportacion)
    {
        // echo $ext;
        //$ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteFactura';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteFactura';
           $input = '/var/www/html/resources/reports/ReporteFacturaExportacion';
           $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteFacturaExportacion';
            $url = '/var/www/html/resources/reports/';
            //$url = 'C:/xampp7/htdocs/resources/reports/';
            //$input = 'C:/xampp7/htdocs/resources/reports/ReporteFacturaExportacion';
            //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'ReporteFacturaExportacion';
            $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'empresa_nombre' => $nombre_empresa->valor,
                    'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail,
                    'id_factura_exportacionx' => $id_factura_exportacion,
                ],
                'db_connection' => [
                    'driver' => 'postgres',
                    'username' => env('DB_USERNAME'),
                    'password' => env('DB_PASSWORD'),
                    'host' => env('DB_HOST'),
                    'database' => env('DB_DATABASE'),
                    'port' => env('DB_PORT')
                ]
            ];

            $jasper = new PHPJasper;

            $jasper->process($input, $output, $options)->execute();

           /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
          print_r($output);*/

            $headers = [
                'Content-Type' => 'application/pdf',
            ];

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteFacturaExportacion.' . $ext, $headers);
        }else{
            return '';
        }
    }



}