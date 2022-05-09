<?php 

namespace App\Http\Controllers;


use App\AdmonUsuarios;
use App\Models\AdmonAjustes;
use App\Models\CajaBancoAfectaciones;
use App\Models\CajaBancoBancos;
use App\Models\CajaBancoFacturaAjustesGarantia;
use App\Models\CajaBancoFacturacionConfiguracion;
use App\Models\CajaBancoFacturaViaPagos;
use App\Models\CajaBancoMonedas;
use App\Models\CajaBancoProformas;
use App\Models\CajaBancoTasasCambios;
use App\Models\ContabilidadCuentasContablesVista;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\CuentasXCobrarCuentasXCobrar;
use App\Models\InventarioBaterias;
use App\Models\InventarioBodegas;
use App\Models\InventarioConsignacionProductos;
use App\Models\InventarioEntradaProductoBaterias;
use App\Models\InventarioEntradaProductos;
use App\Models\InventarioEntradas;
use App\Models\InventarioProductos;
use App\Models\InventarioSalidaProductoBaterias;
use App\Models\InventarioSalidaProductos;
use App\Models\InventarioSalidas;
use App\Models\InventarioUnidadMedida;
use App\Models\PublicDepartamentos;
use App\Models\PublicSucursales;
use App\Models\PublicViaPagos;
use App\Models\PublicZonas;
use App\Models\RRHHTrabajadores;
use App\Models\VentaClientes;
use App\Models\VentaVendedores;
use DateTime;
use Hash, Validator,Auth;
use App\Models\InventarioBodegaProductos;
use App\Models\CajaBancoFacturaProductos;
use App\Models\CajaBancoFacturas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class CajaBancoFacturasController extends Controller
{
	/**
     * Get List of Facturas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, CajaBancoFacturas $facturas)
    {
        $facturas = $facturas->obtenerFacturas($request);

        foreach($facturas as $factura ){
            //   print_r($entrada);
            $items = collect($factura->facturaProductos);

            $factura->tot_unidades = $items->sum(function($item) {
                return $item['cantidad'];
            });
        }

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

    public function obtenerFactura(Request $request, CajaBancoFacturas $factura)
    {
		$rules = [
            'id_factura' => 'required|integer|min:1',
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
                    'result' => array('id_factura'=>["Datos no encontrados"]),
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

    public function registrarFacturaConsignacion(Request $request)
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
            'factura_vendedor.required' => 'El campo vendedor es requerido',
        ];

        $rules = [
            'f_factura' => 'required|date',
            'id_tipo' => 'required|integer|min:1|max:2',
            'tipo_identificacion' => 'required|integer|min:1|max:2',
            'identificacion' => 'required|string|max:18',
            'observacion' => 'nullable|string|max:512',

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

            'pago_vuelto_mn' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'pago_vuelto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',

            'detallePago' => 'required_if:id_tipo,1|array|nullable',
            'detallePago.*.via_pagox.id_via_pago' => 'required|integer|min:1',
            'detallePago.*.moneda_x.id_moneda' => 'required|integer|min:1',
            'detallePago.*.monto_me' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'detallePago.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'detallePago.*.banco_x.id_banco' => 'required_if:detallePago.*.via_pagox.id_via_pago,3|required_if:detallePago.*.via_pagox.id_via_pago,5|required_if:detallePago.*.via_pagox.id_via_pago,6|integer|min:1|nullable',
            'detallePago.*.numero_minuta' => 'required_if:detallePago.*.via_pagox.id_via_pago,1required_if:detallePago.*.via_pagox.id_via_pago,3||string|max:30|nullable',
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
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
            'detalleProductos.*.productox.text' => 'required|string|max:100',
            'detalleProductos.*.productox.unidad_medida' => 'required|string|max:100',
            'detalleProductos.*.afectacionx.id_afectacion' => 'required|integer|exists:pgsql.cjabnco.facturas_afectaciones,id_afectacion',
            'detalleProductos.*.afectacionx.valor' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',

        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $factura = new CajaBancoFacturas;

                $bodegaConsignacion = InventarioBodegas::find(17);
                $sucursalConsignacion = PublicSucursales::find($bodegaConsignacion->id_sucursal);

                /*$nuevo_num = CajaBancoFacturas::select([DB::raw("COALESCE(max(no_factura),0)+1 as no_factura")])->where('serie',$sucursalConsignacion->serie)->first();
                $factura->no_factura = $nuevo_num['no_factura'];*/

                $sucursalx = PublicSucursales::find($sucursalConsignacion->id_sucursal);
                //$nuevo_num = CajaBancoFacturas::select([DB::raw("COALESCE(max(no_factura),0)+1 as no_factura")])->where('serie',$request->serie)->first();
                $factura->no_factura = $sucursalx['numeracion_facturacion']+1;

                $str_length = 8;
                $str = substr("0000000".$factura->no_factura, -$str_length);
                //$factura->no_factura=$str;

                $factura->no_documento = $sucursalConsignacion->serie.'-'.$str;
                $factura->f_factura = date("Y-m-d H:i:s");
                $factura->serie = $sucursalConsignacion->serie;
                $factura->id_moneda = 1;
                $factura->observacion = $request->observacion;
                $factura->id_tipo = $request->id_tipo;
                $factura->id_sucursal = $sucursalConsignacion->id_sucursal;
                $factura->id_bodega = $bodegaConsignacion->id_bodega;
                $factura->id_cliente = $request->factura_cliente['id_cliente'];
                $factura->tipo_identificacion = $request->tipo_identificacion;
                $factura->identificacion = $request->identificacion;
                $factura->id_vendedor = $request->factura_vendedor['id_vendedor'];
                $factura->t_cambio = $request->t_cambio;
                $factura->doc_exoneracion = $request->doc_exoneracion;
                $factura->doc_exoneracion_ir = $request->doc_exoneracion_ir;
                $factura->doc_exoneracion_imi = $request->doc_exoneracion_imi;
                $factura->impuesto_exonerado = !$request->aplicaIVA;

                $factura->mt_retencion = round($request->mt_retencion,2);
                $factura->mt_retencion_imi = round($request->mt_retencion_imi,2);
                $factura->mt_impuesto = round($request->mt_impuesto,2);
                $factura->mt_descuento = round($request->mt_descuento,2);
                $factura->mt_ajuste = round($request->mt_ajuste,2);
                $factura->mt_total = $request->total_final_cordobas;

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
                $salida->id_tipo_salida = 1;
                $salida->id_cliente = $factura->id_cliente ;
                $salida->fecha_salida = $factura->f_factura;
                $salida->id_bodega = $factura->id_bodega;
                $salida->descripcion_salida = $request->factura_cliente['nombre_comercial'].' Fact. No.'.$factura->no_documento;
                $salida->u_creacion =  $factura->u_creacion;
                $salida->estado = 1;
                $salida->save();

                $factura->id_salida = $salida->id_salida;
                $factura->save();

                PublicSucursales::find($factura->id_sucursal)->increment('numeracion_facturacion');

                if($factura->id_tipo == 2 && round($factura->mt_deuda,2)>0){
                    $cuentas_x_cobrar = new CuentasXCobrarCuentasXCobrar;
                    $cuentas_x_cobrar->id_cliente =$factura->id_cliente;
                    $cuentas_x_cobrar->id_tipo_documento = 1;
                    $cuentas_x_cobrar->no_documento_origen = $factura->no_documento;
                    $cuentas_x_cobrar->es_registro_importado = false;

                    $cuentas_x_cobrar->identificador_origen = $factura->id_factura;
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
                    $factura_pago = new CajaBancoFacturaViaPagos;
                    $factura_pago->id_factura = $factura->id_factura;
                    $factura_pago->id_via_pago = $pago['via_pagox']['id_via_pago'];
                    $factura_pago->id_moneda = $pago['moneda_x']['id_moneda'];
                    $factura_pago->monto_me = $pago['monto_me'];
                    $factura_pago->monto = $pago['monto'];
                    if($factura_pago->id_via_pago == 1 ||$factura_pago->id_via_pago == 3 ||$factura_pago->id_via_pago == 5 || $factura_pago->id_via_pago == 6){
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

                    $factura_producto = new CajaBancoFacturaProductos;

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

                    $factura_producto->id_factura = $factura->id_factura;
                    $factura_producto->descripcion_producto = $producto['productox']['text'];
                    $factura_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                    $factura_producto->unidad_medida = $producto['productox']['unidad_medida'];

                    $factura_producto->cantidad = $producto['cantidad'];
                    $factura_producto->precio_costo = $producto['precio_costo'];
                    $factura_producto->precio_lista = round($producto['precio_lista'],2);
                    $factura_producto->precio = round($producto['p_unitario'],2);

                    $factura_producto->p_descuento = $producto['p_descuento'];
                    $factura_producto->p_ajuste = $producto['p_ajuste'];
                    $factura_producto->p_impuesto = $producto['p_impuesto'];

                    $factura_producto->m_impuesto = round($producto['mt_impuesto'],2);
                    $factura_producto->m_descuento = round($producto['mt_descuento'],2);
                    $factura_producto->m_ajuste = round($producto['mt_ajuste'],2);

                    $factura_producto->id_afectacion = $producto['afectacionx']['id_afectacion'];

                    $factura_producto->f_creacion = date("Y-m-d H:i:s");
                    $factura_producto->save();


                    $consignacion_producto = new InventarioConsignacionProductos();
                    $consignacion_producto->id_bodega_producto = $factura_producto->id_bodega_producto;
                    $consignacion_producto->id_producto = $factura_producto->id_producto;
                    $consignacion_producto->id_cliente = $factura->id_cliente;
                    $consignacion_producto->fecha_movimiento = date("Y-m-d H:i:s");//$factura->f_factura;// date("Y-m-d H:i:s");
                    $consignacion_producto->descripcion_movimiento = $salida->descripcion_salida;
                    $consignacion_producto->identificador_origen_movimiento = $salida->id_salida;
                    $consignacion_producto->tipo_movimiento = 2;//1 consignacion 2 venta 3 devolucion
                    $consignacion_producto->cantidad_movimiento = $factura_producto->cantidad*-1;
                    $consignacion_producto->usuario_registra = Auth::user()->usuario;
                    $consignacion_producto->save();



                    if($producto['productox']['tipo_producto']!=2){
                        $productoExiste = InventarioSalidaProductos::where('id_bodega_producto',$bodega_sub->id_bodega_producto)
                            ->where('id_salida',$salida->id_salida)->first();
                        if(!$productoExiste){
                            $salida_producto = new InventarioSalidaProductos;
                            $salida_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                            $salida_producto->id_salida = $salida->id_salida;
                            $salida_producto->descripcion_producto = $producto['productox']['text'];
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

                        $total_venta_producto = $total_venta_producto + round($factura_producto->precio_lista *$factura_producto->cantidad ,2);
                        $total_costo_producto = $total_costo_producto + round($factura_producto->precio_costo *$factura_producto->cantidad ,6);
                    }else{
                        $total_venta_servicios = $total_venta_servicios + round($factura_producto->precio_lista *$factura_producto->cantidad ,2);
                        $total_costo_servicios = $total_costo_servicios + round($factura_producto->precio_costo *$factura_producto->cantidad ,6);
                    }


                    $i++;

                }


                /*INICIA movimiento contable - Factura*/

                $clientex = VentaClientes::select('id_cliente','id_zona')->find($factura->id_cliente);
                $zonax = PublicZonas::select('id_zona','id_centro_costo','id_centro_ingreso')->find($clientex->id_zona);
                $tipos_cuentas = array(4,5,6);

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
                $factura->id_documento_contable= $documento->id_documento;
                $factura->save();

                ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');

                /* Inicio Seccion 1) Moneda Nacional / Extranjera*/

                if($monto_cordobas>0){

                    $nombre_seccion_ingreso_nacional = 'IngresoMonNacional';
                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_ingreso_nacional)->with('configuracionFacturacuentaContable')->first();
                    //print_r($cuentaSeccion);

                    $documento_cuenta_contableS1 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS1->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS1->concepto = 'Registramos ingreso de moneda nacional por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS1->debe = $request->mt_subtotal - $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi -$factura->mt_descuento -$factura->mt_ajuste + $factura->mt_impuesto;
                    $documento_cuenta_contableS1->haber = 0;
                    $documento_cuenta_contableS1->debe_org = $request->mt_subtotal - $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi -$factura->mt_descuento -$factura->mt_ajuste+ $factura->mt_impuesto;;
                    $documento_cuenta_contableS1->haber_org =  0;
                    $documento_cuenta_contableS1->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS1->haber>0){
                                $documento_cuenta_contableS1->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS1->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS1->debe>0){
                                $documento_cuenta_contableS1->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS1->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS1->id_centro =  null;
                    }

                    $documento_cuenta_contableS1->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS1->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS1->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
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

                    $nombre_seccion_cuentas_cobrar = 'CuentasXCobrar';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_cuentas_cobrar)->with('configuracionFacturacuentaContable')->first();

                    $documento_cuenta_contableS2a = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS2a->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS2a->concepto = 'Acreditamos cuentas por cobrar por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS2a->debe = $factura->mt_deuda- $factura->mt_retencion - $factura->mt_retencion_imi /*-$factura->mt_descuento*/;
                    $documento_cuenta_contableS2a->haber =  0;
                    $documento_cuenta_contableS2a->debe_org = $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi /*-$factura->mt_descuento*/;
                    $documento_cuenta_contableS2a->haber_org =  0;
                    $documento_cuenta_contableS2a->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS2a->haber>0){
                                $documento_cuenta_contableS2a->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS2a->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS2a->debe>0){
                                $documento_cuenta_contableS2a->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS2a->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS2a->id_centro =  null;
                    }

                    $documento_cuenta_contableS2a->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS2a->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS2a->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS2a->save();

                }



                /* Fin seccion 1.2) */


                /* Inicio Seccion 2) Retenciones IR e IMI */

                if($request->aplicaIR && $factura->mt_retencion>0){

                    $nombre_seccion_retencion = 'Retencion';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_retencion)->with('configuracionFacturacuentaContable')->first();

                    $documento_cuenta_contableS3 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS3->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS3->concepto = 'Registramos retencion 2% ventas por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS3->debe = $factura->mt_retencion;
                    $documento_cuenta_contableS3->haber =  0;
                    $documento_cuenta_contableS3->debe_org = $factura->mt_retencion;
                    $documento_cuenta_contableS3->haber_org =  0;
                    $documento_cuenta_contableS3->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS3->haber>0){
                                $documento_cuenta_contableS3->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS3->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS3->debe>0){
                                $documento_cuenta_contableS3->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS3->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS3->id_centro =  null;
                    }
                    $documento_cuenta_contableS3->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS3->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS3->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS3->save();
                }

                if($request->aplicaIMI && $factura->mt_retencion_imi>0){

                    $nombre_seccion_retencion_imi = 'RetencionImi';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_retencion_imi)->with('configuracionFacturacuentaContable')->first();

                    $documento_cuenta_contableS4 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS4->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS4->concepto = 'Registramos retencion alcaldia 1% ventas por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS4->debe = $factura->mt_retencion_imi;
                    $documento_cuenta_contableS4->haber =  0;
                    $documento_cuenta_contableS4->debe_org = $factura->mt_retencion_imi;
                    $documento_cuenta_contableS4->haber_org =  0;
                    $documento_cuenta_contableS4->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS4->haber>0){
                                $documento_cuenta_contableS4->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS4->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS4->debe>0){
                                $documento_cuenta_contableS4->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS4->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS4->id_centro =  null;
                    }
                    $documento_cuenta_contableS4->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS4->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS4->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS4->save();
                }

                /* Fin Seccion 2) */


                /* Inicio Seccion 3) Impuesto al valor agregado */

                if(!$factura->impuesto_exonerado && $factura->mt_impuesto>0){

                    $nombre_seccion_iva = 'Iva';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_iva)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS5 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS5->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS5->concepto = 'Registramos Impuesto al valor agregado por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS5->debe =0;
                    $documento_cuenta_contableS5->haber = $factura->mt_impuesto;
                    $documento_cuenta_contableS5->debe_org = 0;
                    $documento_cuenta_contableS5->haber_org =  $factura->mt_impuesto;
                    $documento_cuenta_contableS5->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS5->haber>0){
                                $documento_cuenta_contableS5->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS5->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS5->debe>0){
                                $documento_cuenta_contableS5->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS5->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS5->id_centro =  null;
                    }

                    $documento_cuenta_contableS5->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS5->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS5->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS5->save();
                }

                /* Fin Seccion 3) */

                /* Inicio Seccion 4) Ingresos por producto y servicios*/

                if($total_venta_producto>0){

                    $nombre_seccion_ingreso_productos = 'IngresoProductos';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_ingreso_productos)->with('configuracionFacturacuentaContable')->first();



                    $documento_cuenta_contableS6 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS6->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS6->concepto = 'Registramos Ingreso por venta de articulo(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS6->debe =0;
                    $documento_cuenta_contableS6->haber = $total_venta_producto;
                    $documento_cuenta_contableS6->debe_org = 0;
                    $documento_cuenta_contableS6->haber_org =  $total_venta_producto;
                    $documento_cuenta_contableS6->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS6->haber>0){
                                $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS6->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS6->debe>0){
                                $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS6->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS6->id_centro =  null;
                    }
                    $documento_cuenta_contableS6->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS6->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS6->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS6->save();

                    foreach ($request->detalleProductos as $producto) {
                        if($producto['afectacionx']['id_afectacion'] > 1 && $producto['mt_ajuste']>0){

                            $documento_cuenta_contableS6 = new ContabilidadDocumentosMovimientos;
                            $documento_cuenta_contableS6->id_documento = $documento->id_documento;
                            $documento_cuenta_contableS6->concepto = 'Registramos Ajuste por venta de articulo(s) por factura No. '.$factura->no_documento;
                            $documento_cuenta_contableS6->debe =$producto['mt_ajuste'];
                            $documento_cuenta_contableS6->haber = 0;
                            $documento_cuenta_contableS6->debe_org = $producto['mt_ajuste'];
                            $documento_cuenta_contableS6->haber_org =  0;
                            $documento_cuenta_contableS6->id_moneda =  1;
                            $documento_cuenta_contableS6->id_centro =  1;///cambiar centro de costo ingreso

                            /* revisar */
                            if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                                if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                                    if($documento_cuenta_contableS6->haber>0){
                                        $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_ingreso;
                                    }else{
                                        $documento_cuenta_contableS6->id_centro = $zonax->id_centro_costo;
                                    }
                                }else{
                                    if($documento_cuenta_contableS6->debe>0){
                                        $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_costo;
                                    }else{
                                        $documento_cuenta_contableS6->id_centro = $zonax->id_centro_ingreso;
                                    }
                                }
                            }else{
                                $documento_cuenta_contableS6->id_centro =  null;
                            }

                            $documento_cuenta_contableS6->id_cuenta_contable =  $producto['afectacionx']['id_cuenta_contable'];
                            $documento_cuenta_contableS6->cta_contable = '';
                            $documento_cuenta_contableS6->cta_contable_padre = '';
                            $documento_cuenta_contableS6->save();
                        }
                    }

                }


                if($total_venta_servicios>0){
                    $nombre_seccion_ingreso_ingreso_servicios = 'IngresoServicios';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_ingreso_ingreso_servicios)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS7 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS7->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS7->concepto = 'Registramos Ingreso por venta de servicio(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS7->debe =0;
                    $documento_cuenta_contableS7->haber = $total_venta_servicios;
                    $documento_cuenta_contableS7->debe_org = 0;
                    $documento_cuenta_contableS7->haber_org =  $total_venta_servicios;
                    $documento_cuenta_contableS7->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS7->haber>0){
                                $documento_cuenta_contableS7->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS7->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS7->debe>0){
                                $documento_cuenta_contableS7->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS7->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS7->id_centro =  null;
                    }

                    $documento_cuenta_contableS7->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS7->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7->save();
                }


                /* Fin Seccion 4) */

                /* Inicio sub Seccion 4.1) - Descuentos en factura*/

                if($factura->mt_descuento>0){

                    $nombre_seccion_descuentos = 'DescuentoVenta';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_descuentos)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS7a = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS7a->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS7a->concepto = 'Registramos Descuento de venta por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS7a->debe =$factura->mt_descuento;
                    $documento_cuenta_contableS7a->haber = 0;
                    $documento_cuenta_contableS7a->debe_org = $factura->mt_descuento;
                    $documento_cuenta_contableS7a->haber_org =  0;
                    $documento_cuenta_contableS7a->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS7a->haber>0){
                                $documento_cuenta_contableS7a->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS7a->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS7a->debe>0){
                                $documento_cuenta_contableS7a->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS7a->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS7a->id_centro =  null;
                    }

                    $documento_cuenta_contableS7a->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS7a->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7a->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7a->save();
                }


                /* Fin sub Seccion 4.1) */
                /* Fin Seccion 4) */


                /* Inicio Seccion 5) Costos por producto y servicios*/

                if($total_costo_producto>0){

                    $nombre_seccion_costo_prod = 'CostoProductos';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_costo_prod)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS8 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS8->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS8->concepto = 'Registramos Costo de venta de articulo(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS8->debe =$total_costo_producto;
                    $documento_cuenta_contableS8->haber = 0;
                    $documento_cuenta_contableS8->debe_org = $total_costo_producto;
                    $documento_cuenta_contableS8->haber_org =  0;
                    $documento_cuenta_contableS8->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS8->haber>0){
                                $documento_cuenta_contableS8->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS8->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS8->debe>0){
                                $documento_cuenta_contableS8->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS8->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS8->id_centro =  null;
                    }

                    $documento_cuenta_contableS8->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS8->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS8->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                    $documento_cuenta_contableS8->save();

                }

                if($total_costo_servicios>0){

                    $nombre_seccion_costo_serv = 'CostoServicios';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_costo_serv)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS9 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS9->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS9->concepto = 'Registramos Costo de venta de servicio(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS9->debe =$total_costo_servicios;
                    $documento_cuenta_contableS9->haber = 0;
                    $documento_cuenta_contableS9->debe_org = $total_costo_servicios;
                    $documento_cuenta_contableS9->haber_org =  0;
                    $documento_cuenta_contableS9->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS9->haber>0){
                                $documento_cuenta_contableS9->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS9->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS9->debe>0){
                                $documento_cuenta_contableS9->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS9->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS9->id_centro =  null;
                    }

                    $documento_cuenta_contableS9->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS9->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS9->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                    $documento_cuenta_contableS9->save();
                }


                if($total_costo_producto>0){

                    $nombre_seccion_inventario= 'Inventario';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_inventario)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS10 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS10->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS10->concepto = 'Registramos debito de productos en bodega por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS10->debe =0;
                    $documento_cuenta_contableS10->haber = $total_costo_producto;
                    $documento_cuenta_contableS10->debe_org = 0;
                    $documento_cuenta_contableS10->haber_org =  $total_costo_producto;
                    $documento_cuenta_contableS10->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS10->haber>0){
                                $documento_cuenta_contableS10->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS10->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS10->debe>0){
                                $documento_cuenta_contableS10->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS10->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS10->id_centro =  null;
                    }

                    $documento_cuenta_contableS10->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS10->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS10->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                    $documento_cuenta_contableS10->save();
                }

                if($total_costo_servicios>0){

                    $nombre_seccion_gastos_venta = 'GastosVenta2';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_gastos_venta)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS11 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS11->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS11->concepto = 'Registramos debito del gasto de venta de servicios por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS11->debe =0;
                    $documento_cuenta_contableS11->haber = $total_costo_servicios;
                    $documento_cuenta_contableS11->debe_org = 0;
                    $documento_cuenta_contableS11->haber_org =  $total_costo_servicios;
                    $documento_cuenta_contableS11->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS11->haber>0){
                                $documento_cuenta_contableS11->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS11->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS11->debe>0){
                                $documento_cuenta_contableS11->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS11->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS11->id_centro =  null;
                    }

                    $documento_cuenta_contableS11->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS11->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS11->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS11->save();
                }

                /* Fin Seccion 5) */

                $total_ventax = $total_venta_producto+$total_venta_servicios;
                /* Inicio Seccion 6) Gastos de comercialización */
                $nombre_seccion_gastos_venta = 'GastosVenta';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_gastos_venta)->with('configuracionFacturacuentaContable')->first();

                $documento_cuenta_contableS15 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS15->id_documento = $documento->id_documento;
                $documento_cuenta_contableS15->concepto = 'Registramos gastos de comercialización por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS15->debe = round($total_ventax*0.03,2);
                $documento_cuenta_contableS15->haber =  0;
                $documento_cuenta_contableS15->debe_org = round($total_ventax*0.03,2);
                $documento_cuenta_contableS15->haber_org =  0;
                $documento_cuenta_contableS15->id_moneda =  1;
                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS15->haber>0){
                            $documento_cuenta_contableS15->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS15->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS15->debe>0){
                            $documento_cuenta_contableS15->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS15->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS15->id_centro =  null;
                }

                $documento_cuenta_contableS15->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS15->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS15->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS15->save();


                $nombre_seccion_alcaldia = 'Alcaldias';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_alcaldia)->with('configuracionFacturacuentaContable')->first();

                $documento_cuenta_contableS16 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS16->id_documento = $documento->id_documento;
                $documento_cuenta_contableS16->concepto = 'Registramos gastos de comercialización por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS16->debe =0;
                $documento_cuenta_contableS16->haber = round($total_ventax*0.03,2);
                $documento_cuenta_contableS16->debe_org = 0;
                $documento_cuenta_contableS16->haber_org =  round($total_ventax*0.03,2);
                $documento_cuenta_contableS16->id_moneda =  1;

                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS16->haber>0){
                            $documento_cuenta_contableS16->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS16->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS16->debe>0){
                            $documento_cuenta_contableS16->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS16->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS16->id_centro =  null;
                }

                $documento_cuenta_contableS16->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS16->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS16->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                $documento_cuenta_contableS16->save();

                /* Fin Seccion 6) */


                /* Inicio Seccion 7) Pago minimo*/

                $nombre_seccion_pago_minimo_ir = 'PagoMinimoIR';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_pago_minimo_ir)->with('configuracionFacturacuentaContable')->first();


                $documento_cuenta_contableS13 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS13->id_documento = $documento->id_documento;
                $documento_cuenta_contableS13->concepto = 'Registramos retencion 2% Pago Minimo ventas por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS13->debe = round($total_ventax*0.02,2);
                $documento_cuenta_contableS13->haber =  0;
                $documento_cuenta_contableS13->debe_org = round($total_ventax*0.02,2);
                $documento_cuenta_contableS13->haber_org =  0;
                $documento_cuenta_contableS13->id_moneda =  1;

                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS13->haber>0){
                            $documento_cuenta_contableS13->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS13->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS13->debe>0){
                            $documento_cuenta_contableS13->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS13->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS13->id_centro =  null;
                }

                $documento_cuenta_contableS13->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS13->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS13->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];


                $documento_cuenta_contableS13->save();


                $nombre_seccion_pago_minimo_dgi = 'PagoMinimoDGI';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_pago_minimo_dgi)->with('configuracionFacturacuentaContable')->first();

                $documento_cuenta_contableS14 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS14->id_documento = $documento->id_documento;
                $documento_cuenta_contableS14->concepto = 'Registramos Impuesto al valor agregado Pago Minimo por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS14->debe =0;
                $documento_cuenta_contableS14->haber = round($total_ventax*0.02,2);
                $documento_cuenta_contableS14->debe_org = 0;
                $documento_cuenta_contableS14->haber_org =  round($total_ventax*0.02,2);
                $documento_cuenta_contableS14->id_moneda =  1;

                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS14->haber>0){
                            $documento_cuenta_contableS14->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS14->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS14->debe>0){
                            $documento_cuenta_contableS14->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS14->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS14->id_centro =  null;
                }

                $documento_cuenta_contableS14->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS14->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS14->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

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
            'proformasBusqueda.required_if' => 'El campo es requerido',

        ];

        $rules = [
            // 'no_documento' => 'required|string|max:8',
            'f_factura' => 'required|date',
            'serie' => 'required|string|max:2',
            // 'factura_moneda' => 'required|array|min:1',
            // 'factura_moneda.id_moneda' => 'required|integer|min:1',
            'id_tipo' => 'required|integer|min:1|max:3',
            'tipo_venta' => 'required|integer|min:1|max:4',
            'factura_sucursal' => 'required|array|min:1',
            'factura_sucursal.id_sucursal' => 'required|integer|min:1',
            'factura_bodega' => 'required|array|min:1',
            'factura_bodega.id_bodega' => 'required|integer|min:1',
            'tipo_identificacion' => 'required|integer|min:1|max:2',
            'identificacion' => 'required|string|max:18',
            'observacion' => 'nullable|string|max:512',

            'aplicaIVA'=> 'required|boolean',
            'aplicaIR'=> 'required|boolean',
            'aplicaIMI'=> 'required|boolean',

            'factura_cliente' => 'required|array|min:1',
            'factura_cliente.id_cliente' => 'required|integer|min:1',


            'proforma_especifica'=> 'required|boolean',
            'proformasBusqueda' => 'required_if:proforma_especifica,true|array|min:0|nullable',
            'proformasBusqueda.id_proforma' => 'required_if:proforma_especifica:true,false|integer|min:1|nullable',

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

            'pago_vuelto_mn' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'pago_vuelto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',

            'detallePago' => 'required_if:id_tipo,1|array|nullable',
            'detallePago.*.via_pagox.id_via_pago' => 'required|integer|min:1',
            'detallePago.*.moneda_x.id_moneda' => 'required|integer|min:1',
            'detallePago.*.monto_me' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'detallePago.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'detallePago.*.banco_x.id_banco' => 'required_if:detallePago.*.via_pagox.id_via_pago,3|required_if:detallePago.*.via_pagox.id_via_pago,5|required_if:detallePago.*.via_pagox.id_via_pago,6|integer|min:1|nullable',
            'detallePago.*.numero_minuta' => 'required_if:detallePago.*.via_pagox.id_via_pago,1|required_if:detallePago.*.via_pagox.id_via_pago,3|string|max:30|nullable',
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
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
            'detalleProductos.*.productox.descripcion' => 'required|string|max:100',
            'detalleProductos.*.productox.unidad_medida' => 'required|string|max:100',
            'detalleProductos.*.afectacionx.id_afectacion' => 'required|integer|exists:pgsql.cjabnco.facturas_afectaciones,id_afectacion',
            'detalleProductos.*.afectacionx.valor' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',

        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $factura = new CajaBancoFacturas;
                $sucursalx = PublicSucursales::find($request->factura_sucursal['id_sucursal']);
                //$nuevo_num = CajaBancoFacturas::select([DB::raw("COALESCE(max(no_factura),0)+1 as no_factura")])->where('serie',$request->serie)->first();



                $factura->no_factura = $sucursalx['numeracion_facturacion']+1;
                $str_length = 8;
                $str = substr("0000000".$factura->no_factura, -$str_length);
                $factura->no_documento = $request->serie.'-'.$str;

                $fact_rev = CajaBancoFacturas::where('no_documento',$request->serie.'-'.$str)->first();

                if(!empty($fact_rev)){
                    $sucursalx2 = PublicSucursales::find($request->factura_sucursal['id_sucursal']);
                    $factura->no_factura = $sucursalx2['numeracion_facturacion']+1;
                    $str_length = 8;
                    $str = substr("0000000".$factura->no_factura, -$str_length);
                    $factura->no_documento = $request->serie.'-'.$str;
                }

                $factura->f_factura =  date("Y-m-d H:i:s");//$request->f_factura;
                $factura->serie = $request->serie;
                $factura->tipo_venta = $request->tipo_venta;
                $factura->id_moneda = 1;
                $factura->observacion = $request->observacion;
                if($request->id_tipo==3){
                    $factura->id_tipo = 1;
                }else{
                $factura->id_tipo = $request->id_tipo;
                }
                $factura->id_sucursal = $request->factura_sucursal['id_sucursal'];
                $factura->id_bodega = $request->factura_bodega['id_bodega'];
                $factura->id_cliente = $request->factura_cliente['id_cliente'];
                $factura->tipo_identificacion = $request->tipo_identificacion;
                $factura->identificacion = $request->identificacion;
                $factura->id_vendedor = $request->factura_vendedor['id_vendedor'];
                $factura->t_cambio = $request->t_cambio;
                $factura->doc_exoneracion = $request->doc_exoneracion;
                $factura->doc_exoneracion_ir = $request->doc_exoneracion_ir;
                $factura->doc_exoneracion_imi = $request->doc_exoneracion_imi;
                $factura->impuesto_exonerado = !$request->aplicaIVA;

                $factura->mt_retencion = round($request->mt_retencion,2);
                $factura->mt_retencion_imi = round($request->mt_retencion_imi,2);
                $factura->mt_impuesto = round($request->mt_impuesto,2);
                $factura->mt_descuento = round($request->mt_descuento,2);
                $factura->mt_ajuste = round($request->mt_ajuste,2);
                $factura->mt_total = $request->total_final_cordobas;

                $factura->mt_deuda = $request->pago_pendiente_mn;
                $factura->pago_vuelto = $request->pago_vuelto_mn;
                $factura->pago_vuelto_me = $request->pago_vuelto;

                $factura->saldo_factura =  $request->pago_pendiente_mn;
                $factura->dias_credito  = $request->dias_credito;
                if($request->id_tipo==3){
                    $factura->f_vencimiento  =  date('Y-m-d', strtotime($factura->f_factura. ' + 8 days'));
                }else{
                    $factura->f_vencimiento  =  date('Y-m-d', strtotime($factura->f_factura. ' + '.$request->dias_credito.' days'));
                }

                $factura->u_creacion = Auth::user()->usuario;
                $factura->estado = 1;

                $salida = new InventarioSalidas;
                $salida->codigo_salida = InventarioSalidas::max('id_salida')+1;
                if($factura->tipo_venta === 1){
                    $salida->id_tipo_salida = 1;
                }elseif($factura->tipo_venta === 3){
                    $salida->id_tipo_salida = 13;//salida venta recuperado
                    $salida->condicion_productos = 8;//salida venta recuperado
                }elseif($factura->tipo_venta === 4){
                    $salida->id_tipo_salida = 14;//salida venta obsoleto
                    $salida->condicion_productos = 6;//salida venta recuperado
                }

                $salida->id_cliente = $factura->id_cliente ;
                $salida->fecha_salida = $factura->f_factura;
                $salida->numero_documento = $factura->no_documento;
                $salida->id_bodega = $factura->id_bodega;
                $salida->descripcion_salida = $request->factura_cliente['nombre_comercial'].' Fact. No.'.$factura->no_documento;
                $salida->u_creacion =  $factura->u_creacion;
                $salida->estado = 1;
                $salida->save();

                $factura->id_salida = $salida->id_salida;
                $factura->save();

                PublicSucursales::find($factura->id_sucursal)->increment('numeracion_facturacion');

                if($request->proforma_especifica){
                    $proforma = CajaBancoProformas::find($request->proformasBusqueda['id_proforma']);

                    if(!empty($proforma)){
                        $proforma->id_factura=$factura->id_factura;
                        $proforma->estado=2;///proforma convertida en venta
                        $proforma->save();
                    }
                }

                if($request->id_tipo == 2 && round($factura->mt_deuda,2)>0){
                    $cuentas_x_cobrar = new CuentasXCobrarCuentasXCobrar;
                    $cuentas_x_cobrar->id_cliente =$factura->id_cliente;
                    $cuentas_x_cobrar->id_tipo_documento = 1;
                    $cuentas_x_cobrar->no_documento_origen = $factura->no_documento;
                    $cuentas_x_cobrar->es_registro_importado = false;

                    $cuentas_x_cobrar->identificador_origen = $factura->id_factura;
                    $cuentas_x_cobrar->fecha_movimiento = date("Y-m-d H:i:s");//$factura->f_factura;
                    $cuentas_x_cobrar->monto_movimiento = $factura->mt_deuda;
                    $cuentas_x_cobrar->saldo_actual = $factura->mt_deuda;
                    $cuentas_x_cobrar->fecha_vencimiento = $factura->f_vencimiento;
                    $cuentas_x_cobrar->descripcion_movimiento = 'Registro del Monto de la Factura '.$factura->no_documento;
                    $cuentas_x_cobrar->usuario_registra =$factura->u_creacion;
                    $cuentas_x_cobrar->estado = 1;
                    $cuentas_x_cobrar->save();
                }

                if($request->id_tipo == 3 && round($factura->mt_deuda,2)>0){//contado ficticio
                    $cuentas_x_cobrar = new CuentasXCobrarCuentasXCobrar;
                    $cuentas_x_cobrar->id_cliente =$factura->id_cliente;
                    $cuentas_x_cobrar->id_tipo_documento = 1;
                    $cuentas_x_cobrar->no_documento_origen = $factura->no_documento;
                    $cuentas_x_cobrar->es_registro_importado = false;

                    $cuentas_x_cobrar->identificador_origen = $factura->id_factura;
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
                    $factura_pago = new CajaBancoFacturaViaPagos;
                    $factura_pago->id_factura = $factura->id_factura;
                    $factura_pago->id_via_pago = $pago['via_pagox']['id_via_pago'];
                    $factura_pago->id_moneda = $pago['moneda_x']['id_moneda'];
                    $factura_pago->monto_me = $pago['monto_me'];
                    $factura_pago->monto = $pago['monto'];
                    if($factura_pago->id_via_pago == 1 ||$factura_pago->id_via_pago == 3 ||$factura_pago->id_via_pago == 5 || $factura_pago->id_via_pago == 6){
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
                $contador_productos = 0;
                foreach ($request->detalleProductos as $producto) {

                    $factura_producto = new CajaBancoFacturaProductos;

                    if($producto['productox']['id_bodega_producto'] > 0 && $producto['productox']['tipo_producto']!=2){

                        $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['productox']['id_bodega_producto'])->first();

                        $cantidad_disponible = 0;

                        if($factura->tipo_venta === 1){
                            $cantidad_disponible= $bodega_sub->cantidad;
                        }elseif($factura->tipo_venta === 3){
                            $cantidad_disponible= $bodega_sub->cantidad_recuperadas;//salida venta recuperado
                        }elseif($factura->tipo_venta === 4){
                            $cantidad_disponible= $bodega_sub->cantidad_obsoletas;//salida venta obsoleto
                        }

                        if(($cantidad_disponible-$producto['cantidad'])>=0){

                            if($factura->tipo_venta === 1){
                                $bodega_sub->cantidad = $bodega_sub->cantidad-$producto['cantidad'];
                            }elseif($factura->tipo_venta === 3){
                                $bodega_sub->cantidad_recuperadas = $bodega_sub->cantidad_recuperadas-$producto['cantidad'];//salida venta recuperado
                            }elseif($factura->tipo_venta === 4){
                                $bodega_sub->cantidad_obsoletas = $bodega_sub->cantidad_obsoletas-$producto['cantidad'];//salida venta obsoleto
                            }

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

                    $factura_producto->id_factura = $factura->id_factura;
                    $factura_producto->descripcion_producto = $producto['productox']['descripcion'];
                    $factura_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                    $factura_producto->unidad_medida = $producto['productox']['unidad_medida'];

                    $factura_producto->cantidad = $producto['cantidad'];
                    $factura_producto->precio_costo = round($producto['precio_costo'],2);
                    $factura_producto->precio_lista = round($producto['precio_lista'],2);
                    $factura_producto->precio = round($producto['p_unitario'],2);

                    $factura_producto->p_descuento = $producto['p_descuento'];
                    $factura_producto->p_ajuste = $producto['p_ajuste'];
                    $factura_producto->p_impuesto = $producto['p_impuesto'];

                    $factura_producto->m_impuesto = round($producto['mt_impuesto'],2);
                    $factura_producto->m_descuento = round($producto['mt_descuento'],2);
                    $factura_producto->m_ajuste = round($producto['mt_ajuste'],2);

                    $factura_producto->id_afectacion = $producto['afectacionx']['id_afectacion'];

                    $factura_producto->f_creacion = date("Y-m-d H:i:s");
                    $factura_producto->save();


                    if($producto['productox']['tipo_producto']!=2){
                        $contador_productos++;
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

                        $total_venta_producto = $total_venta_producto + round($factura_producto->precio_lista *$factura_producto->cantidad ,2);
                        $total_costo_producto = $total_costo_producto + round($factura_producto->precio_costo *$factura_producto->cantidad ,6);
                    }else{
                        $total_venta_servicios = $total_venta_servicios + round($factura_producto->precio_lista *$factura_producto->cantidad ,2);
                        $total_costo_servicios = $total_costo_servicios + round($factura_producto->precio_costo *$factura_producto->cantidad ,6);
                    }

                    $i++;

                }

                //Revertir salida si no contiene productos
                    if($contador_productos==0){
                        $salidaDel = InventarioSalidas::find($salida->id_salida)->delete();
                    }

                /*INICIA movimiento contable - Factura*/

                $clientex = VentaClientes::select('id_cliente','id_zona')->find($factura->id_cliente);
                $zonax = PublicZonas::select('id_zona','id_centro_costo','id_centro_ingreso')->find($clientex->id_zona);
                $tipos_cuentas = array(4,5,6);

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
                $factura->id_documento_contable= $documento->id_documento;
                $factura->save();

                ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');

                /* Inicio Seccion 1) Moneda Nacional / Extranjera*/

                if($monto_cordobas>0){

                    $nombre_seccion_ingreso_nacional = 'IngresoMonNacional';
                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_ingreso_nacional)->with('configuracionFacturacuentaContable')->first();
                    //print_r($cuentaSeccion);

                    $documento_cuenta_contableS1 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS1->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS1->concepto = 'Registramos ingreso de moneda nacional por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS1->debe = $request->mt_subtotal - $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi -$factura->mt_descuento -$factura->mt_ajuste + $factura->mt_impuesto;
                    $documento_cuenta_contableS1->haber = 0;
                    $documento_cuenta_contableS1->debe_org = $request->mt_subtotal - $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi -$factura->mt_descuento -$factura->mt_ajuste+ $factura->mt_impuesto;;
                    $documento_cuenta_contableS1->haber_org =  0;
                    $documento_cuenta_contableS1->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS1->haber>0){
                                $documento_cuenta_contableS1->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS1->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS1->debe>0){
                                $documento_cuenta_contableS1->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS1->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS1->id_centro =  null;
                    }

                    $documento_cuenta_contableS1->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS1->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS1->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
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

                if(($request->id_tipo == 2  || $request->id_tipo == 3 )&& round($factura->mt_deuda,2)>0){

                    $nombre_seccion_cuentas_cobrar = 'CuentasXCobrar';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_cuentas_cobrar)->with('configuracionFacturacuentaContable')->first();

                    $documento_cuenta_contableS2a = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS2a->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS2a->concepto = 'Acreditamos cuentas por cobrar por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS2a->debe = $factura->mt_deuda- $factura->mt_retencion - $factura->mt_retencion_imi /*-$factura->mt_descuento*/;
                    $documento_cuenta_contableS2a->haber =  0;
                    $documento_cuenta_contableS2a->debe_org = $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi /*-$factura->mt_descuento*/;
                    $documento_cuenta_contableS2a->haber_org =  0;
                    $documento_cuenta_contableS2a->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS2a->haber>0){
                                $documento_cuenta_contableS2a->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS2a->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS2a->debe>0){
                                $documento_cuenta_contableS2a->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS2a->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS2a->id_centro =  null;
                    }

                    $documento_cuenta_contableS2a->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS2a->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS2a->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS2a->save();

                }



                /* Fin seccion 1.2) */


                /* Inicio Seccion 2) Retenciones IR e IMI */

                if($request->aplicaIR && $factura->mt_retencion>0){

                    $nombre_seccion_retencion = 'Retencion';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_retencion)->with('configuracionFacturacuentaContable')->first();

                    $documento_cuenta_contableS3 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS3->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS3->concepto = 'Registramos retencion 2% ventas por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS3->debe = $factura->mt_retencion;
                    $documento_cuenta_contableS3->haber =  0;
                    $documento_cuenta_contableS3->debe_org = $factura->mt_retencion;
                    $documento_cuenta_contableS3->haber_org =  0;
                    $documento_cuenta_contableS3->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS3->haber>0){
                                $documento_cuenta_contableS3->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS3->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS3->debe>0){
                                $documento_cuenta_contableS3->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS3->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS3->id_centro =  null;
                    }
                    $documento_cuenta_contableS3->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS3->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS3->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS3->save();
                }

                if($request->aplicaIMI && $factura->mt_retencion_imi>0){

                    $nombre_seccion_retencion_imi = 'RetencionImi';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_retencion_imi)->with('configuracionFacturacuentaContable')->first();

                    $documento_cuenta_contableS4 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS4->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS4->concepto = 'Registramos retencion alcaldia 1% ventas por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS4->debe = $factura->mt_retencion_imi;
                    $documento_cuenta_contableS4->haber =  0;
                    $documento_cuenta_contableS4->debe_org = $factura->mt_retencion_imi;
                    $documento_cuenta_contableS4->haber_org =  0;
                    $documento_cuenta_contableS4->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS4->haber>0){
                                $documento_cuenta_contableS4->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS4->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS4->debe>0){
                                $documento_cuenta_contableS4->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS4->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS4->id_centro =  null;
                    }
                    $documento_cuenta_contableS4->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS4->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS4->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS4->save();
                }

                /* Fin Seccion 2) */


                /* Inicio Seccion 3) Impuesto al valor agregado */

                if(!$factura->impuesto_exonerado && $factura->mt_impuesto>0){

                    $nombre_seccion_iva = 'Iva';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_iva)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS5 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS5->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS5->concepto = 'Registramos Impuesto al valor agregado por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS5->debe =0;
                    $documento_cuenta_contableS5->haber = $factura->mt_impuesto;
                    $documento_cuenta_contableS5->debe_org = 0;
                    $documento_cuenta_contableS5->haber_org =  $factura->mt_impuesto;
                    $documento_cuenta_contableS5->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS5->haber>0){
                                $documento_cuenta_contableS5->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS5->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS5->debe>0){
                                $documento_cuenta_contableS5->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS5->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS5->id_centro =  null;
                    }

                    $documento_cuenta_contableS5->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS5->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS5->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS5->save();
                }

                /* Fin Seccion 3) */

                /* Inicio Seccion 4) Ingresos por producto y servicios*/

                if($total_venta_producto>0){

                    $nombre_seccion_ingreso_productos = 'IngresoProductos';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_ingreso_productos)->with('configuracionFacturacuentaContable')->first();



                    $documento_cuenta_contableS6 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS6->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS6->concepto = 'Registramos Ingreso por venta de articulo(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS6->debe =0;
                    $documento_cuenta_contableS6->haber = $total_venta_producto;
                    $documento_cuenta_contableS6->debe_org = 0;
                    $documento_cuenta_contableS6->haber_org =  $total_venta_producto;
                    $documento_cuenta_contableS6->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS6->haber>0){
                                $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS6->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS6->debe>0){
                                $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS6->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS6->id_centro =  null;
                    }
                    $documento_cuenta_contableS6->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS6->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS6->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS6->save();

                    foreach ($request->detalleProductos as $producto) {
                        if($producto['afectacionx']['id_afectacion'] > 1 && $producto['mt_ajuste']>0){

                            $documento_cuenta_contableS6 = new ContabilidadDocumentosMovimientos;
                            $documento_cuenta_contableS6->id_documento = $documento->id_documento;
                            $documento_cuenta_contableS6->concepto = 'Registramos Ajuste por venta de articulo(s) por factura No. '.$factura->no_documento;
                            $documento_cuenta_contableS6->debe =$producto['mt_ajuste'];
                            $documento_cuenta_contableS6->haber = 0;
                            $documento_cuenta_contableS6->debe_org = $producto['mt_ajuste'];
                            $documento_cuenta_contableS6->haber_org =  0;
                            $documento_cuenta_contableS6->id_moneda =  1;
                            $documento_cuenta_contableS6->id_centro =  1;///cambiar centro de costo ingreso

                            /* revisar */
                            if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                                if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                                    if($documento_cuenta_contableS6->haber>0){
                                        $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_ingreso;
                                    }else{
                                        $documento_cuenta_contableS6->id_centro = $zonax->id_centro_costo;
                                    }
                                }else{
                                    if($documento_cuenta_contableS6->debe>0){
                                        $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_costo;
                                    }else{
                                        $documento_cuenta_contableS6->id_centro = $zonax->id_centro_ingreso;
                                    }
                                }
                            }else{
                                $documento_cuenta_contableS6->id_centro =  null;
                            }

                            $documento_cuenta_contableS6->id_cuenta_contable =  $producto['afectacionx']['id_cuenta_contable'];
                            $documento_cuenta_contableS6->cta_contable = '';
                            $documento_cuenta_contableS6->cta_contable_padre = '';
                            $documento_cuenta_contableS6->save();
                        }
                    }

                }


                if($total_venta_servicios>0){
                    $nombre_seccion_ingreso_ingreso_servicios = 'IngresoServicios';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_ingreso_ingreso_servicios)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS7 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS7->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS7->concepto = 'Registramos Ingreso por venta de servicio(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS7->debe =0;
                    $documento_cuenta_contableS7->haber = $total_venta_servicios;
                    $documento_cuenta_contableS7->debe_org = 0;
                    $documento_cuenta_contableS7->haber_org =  $total_venta_servicios;
                    $documento_cuenta_contableS7->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS7->haber>0){
                                $documento_cuenta_contableS7->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS7->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS7->debe>0){
                                $documento_cuenta_contableS7->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS7->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS7->id_centro =  null;
                    }

                    $documento_cuenta_contableS7->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS7->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7->save();
                }


                /* Fin Seccion 4) */

                /* Inicio sub Seccion 4.1) - Descuentos en factura*/

                if($factura->mt_descuento>0){

                    $nombre_seccion_descuentos = 'DescuentoVenta';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_descuentos)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS7a = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS7a->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS7a->concepto = 'Registramos Descuento de venta por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS7a->debe =$factura->mt_descuento;
                    $documento_cuenta_contableS7a->haber = 0;
                    $documento_cuenta_contableS7a->debe_org = $factura->mt_descuento;
                    $documento_cuenta_contableS7a->haber_org =  0;
                    $documento_cuenta_contableS7a->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS7a->haber>0){
                                $documento_cuenta_contableS7a->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS7a->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS7a->debe>0){
                                $documento_cuenta_contableS7a->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS7a->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS7a->id_centro =  null;
                    }

                    $documento_cuenta_contableS7a->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS7a->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7a->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7a->save();
                }


                /* Fin sub Seccion 4.1) */
                /* Fin Seccion 4) */


                /* Inicio Seccion 5) Costos por producto y servicios*/

                if($total_costo_producto>0){

                    $nombre_seccion_costo_prod = 'CostoProductos';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_costo_prod)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS8 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS8->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS8->concepto = 'Registramos Costo de venta de articulo(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS8->debe =$total_costo_producto;
                    $documento_cuenta_contableS8->haber = 0;
                    $documento_cuenta_contableS8->debe_org = $total_costo_producto;
                    $documento_cuenta_contableS8->haber_org =  0;
                    $documento_cuenta_contableS8->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS8->haber>0){
                                $documento_cuenta_contableS8->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS8->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS8->debe>0){
                                $documento_cuenta_contableS8->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS8->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS8->id_centro =  null;
                    }

                    $documento_cuenta_contableS8->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS8->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS8->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                    $documento_cuenta_contableS8->save();

                }

                if($total_costo_servicios>0){

                    $nombre_seccion_costo_serv = 'CostoServicios';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_costo_serv)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS9 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS9->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS9->concepto = 'Registramos Costo de venta de servicio(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS9->debe =$total_costo_servicios;
                    $documento_cuenta_contableS9->haber = 0;
                    $documento_cuenta_contableS9->debe_org = $total_costo_servicios;
                    $documento_cuenta_contableS9->haber_org =  0;
                    $documento_cuenta_contableS9->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS9->haber>0){
                                $documento_cuenta_contableS9->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS9->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS9->debe>0){
                                $documento_cuenta_contableS9->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS9->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS9->id_centro =  null;
                    }

                    $documento_cuenta_contableS9->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS9->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS9->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                    $documento_cuenta_contableS9->save();
                }


                if($total_costo_producto>0){

                    $nombre_seccion_inventario= 'Inventario';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_inventario)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS10 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS10->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS10->concepto = 'Registramos debito de productos en bodega por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS10->debe =0;
                    $documento_cuenta_contableS10->haber = $total_costo_producto;
                    $documento_cuenta_contableS10->debe_org = 0;
                    $documento_cuenta_contableS10->haber_org =  $total_costo_producto;
                    $documento_cuenta_contableS10->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS10->haber>0){
                                $documento_cuenta_contableS10->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS10->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS10->debe>0){
                                $documento_cuenta_contableS10->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS10->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS10->id_centro =  null;
                    }

                    $documento_cuenta_contableS10->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS10->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS10->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                    $documento_cuenta_contableS10->save();
                }

                if($total_costo_servicios>0){

                    $nombre_seccion_gastos_venta = 'GastosVenta2';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_gastos_venta)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS11 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS11->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS11->concepto = 'Registramos debito del gasto de venta de servicios por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS11->debe =0;
                    $documento_cuenta_contableS11->haber = $total_costo_servicios;
                    $documento_cuenta_contableS11->debe_org = 0;
                    $documento_cuenta_contableS11->haber_org =  $total_costo_servicios;
                    $documento_cuenta_contableS11->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS11->haber>0){
                                $documento_cuenta_contableS11->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS11->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS11->debe>0){
                                $documento_cuenta_contableS11->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS11->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS11->id_centro =  null;
                    }

                    $documento_cuenta_contableS11->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS11->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS11->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS11->save();
                }

                /* Fin Seccion 5) */

                $total_ventax = $total_venta_producto+$total_venta_servicios;
                /* Inicio Seccion 6) Gastos de comercialización */
                $nombre_seccion_gastos_venta = 'GastosVenta';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_gastos_venta)->with('configuracionFacturacuentaContable')->first();

                $documento_cuenta_contableS15 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS15->id_documento = $documento->id_documento;
                $documento_cuenta_contableS15->concepto = 'Registramos gastos de comercialización por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS15->debe = round($total_ventax*0.03,2);
                $documento_cuenta_contableS15->haber =  0;
                $documento_cuenta_contableS15->debe_org = round($total_ventax*0.03,2);
                $documento_cuenta_contableS15->haber_org =  0;
                $documento_cuenta_contableS15->id_moneda =  1;
                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS15->haber>0){
                            $documento_cuenta_contableS15->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS15->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS15->debe>0){
                            $documento_cuenta_contableS15->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS15->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS15->id_centro =  null;
                }

                $documento_cuenta_contableS15->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS15->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS15->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS15->save();


                $nombre_seccion_alcaldia = 'Alcaldias';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_alcaldia)->with('configuracionFacturacuentaContable')->first();

                $documento_cuenta_contableS16 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS16->id_documento = $documento->id_documento;
                $documento_cuenta_contableS16->concepto = 'Registramos gastos de comercialización por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS16->debe =0;
                $documento_cuenta_contableS16->haber = round($total_ventax*0.03,2);
                $documento_cuenta_contableS16->debe_org = 0;
                $documento_cuenta_contableS16->haber_org =  round($total_ventax*0.03,2);
                $documento_cuenta_contableS16->id_moneda =  1;

                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS16->haber>0){
                            $documento_cuenta_contableS16->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS16->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS16->debe>0){
                            $documento_cuenta_contableS16->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS16->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS16->id_centro =  null;
                }

                $documento_cuenta_contableS16->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS16->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS16->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                $documento_cuenta_contableS16->save();

                /* Fin Seccion 6) */


                /* Inicio Seccion 7) Pago minimo*/

                $nombre_seccion_pago_minimo_ir = 'PagoMinimoIR';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_pago_minimo_ir)->with('configuracionFacturacuentaContable')->first();


                $documento_cuenta_contableS13 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS13->id_documento = $documento->id_documento;
                $documento_cuenta_contableS13->concepto = 'Registramos retencion 2% Pago Minimo ventas por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS13->debe = round($total_ventax*0.02,2);
                $documento_cuenta_contableS13->haber =  0;
                $documento_cuenta_contableS13->debe_org = round($total_ventax*0.02,2);
                $documento_cuenta_contableS13->haber_org =  0;
                $documento_cuenta_contableS13->id_moneda =  1;

                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS13->haber>0){
                            $documento_cuenta_contableS13->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS13->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS13->debe>0){
                            $documento_cuenta_contableS13->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS13->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS13->id_centro =  null;
                }

                $documento_cuenta_contableS13->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS13->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS13->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];


                $documento_cuenta_contableS13->save();


                $nombre_seccion_pago_minimo_dgi = 'PagoMinimoDGI';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_pago_minimo_dgi)->with('configuracionFacturacuentaContable')->first();

                $documento_cuenta_contableS14 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS14->id_documento = $documento->id_documento;
                $documento_cuenta_contableS14->concepto = 'Registramos Impuesto al valor agregado Pago Minimo por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS14->debe =0;
                $documento_cuenta_contableS14->haber = round($total_ventax*0.02,2);
                $documento_cuenta_contableS14->debe_org = 0;
                $documento_cuenta_contableS14->haber_org =  round($total_ventax*0.02,2);
                $documento_cuenta_contableS14->id_moneda =  1;

                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS14->haber>0){
                            $documento_cuenta_contableS14->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS14->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS14->debe>0){
                            $documento_cuenta_contableS14->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS14->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS14->id_centro =  null;
                }

                $documento_cuenta_contableS14->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS14->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS14->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

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
        $afectaciones = CajaBancoAfectaciones::where('activo',true)->whereNotIn('id_afectacion', array(3,4))->orderby('id_afectacion')->get();
        $tasa = CajaBancoTasasCambios::select('tasa_paralela','tasa')->where('fecha',date("Y-m-d"))->first();
        $vendedores = VentaVendedores::select(['id_vendedor','nombre_completo','id_zona'])->where('activo',true)->get();
       // $sucursales = PublicSucursales::select(['id_sucursal','serie','descripcion'])->with('sucursalBodegaVentas')->get();

        if(Auth::user()->id_sucursal>0){
            $sucursales = PublicSucursales::select(['id_sucursal','serie','descripcion'])->with('sucursalBodegaVentas')
                ->where('id_sucursal',Auth::user()->id_sucursal)
                ->orderby('descripcion')->orderby('descripcion')->get();
        }else{
            $sucursales = PublicSucursales::select(['id_sucursal','serie','descripcion'])->with('sucursalBodegaVentas')->orderby('descripcion')
                ->get();
        }

        $trabajador_actual = AdmonUsuarios::select('id_empleado')->where('usuario',Auth::user()->usuario)->first();
        $vendedor_actual = VentaVendedores::select(['id_vendedor','nombre_completo','id_zona'])->where('id_trabajador',$trabajador_actual['id_empleado'])->where('activo',true)->first();

        $departamentos = PublicDepartamentos::with('municipiosDepartamento')->orderby('id_departamento')->get();
        $vias_pago = PublicViaPagos::select(['id_via_pago','descripcion'])->where('activo',true)->orderBy('id_via_pago')->get();
        $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();
        $zonas = PublicZonas::select(['id_zona','descripcion'])->where('activo',true)->get();
        $bancos = CajaBancoBancos::select(['id_banco','descripcion'])->where('activo', 1)->get();


       // $obtener_cierre = DB::select('SELECT * from venta.cargararqueodiario(?,?)', array(14,'2020-06-10'));

            return response()->json([
                'status' => 'success',
                'result' => [
                    'vias_pago' => $vias_pago,
                    'monedas' => $monedas,
                    'bancos' => $bancos,
                    'afectaciones' => $afectaciones,
                    'vendedores' => $vendedores,
                    'vendedor_actual'=>$vendedor_actual,
                    'departamentos'=>$departamentos,
                    'zonas'=>$zonas,
                    't_cambio' => $tasa,
                    'sucursales'=>$sucursales,
                   // 'obtener_cierre'=>$obtener_cierre
                ],
                'messages' => null
            ]);

    }

    public function obtenerConsecutivo(Request $request)
    {
        $sucursalx = PublicSucursales::find($request->id_sucursal);
        //$nuevo_num = CajaBancoFacturas::select([DB::raw("COALESCE(max(no_factura),0)+1 as no_factura")])->where('serie',$request->serie)->first();



        $no_factura = $sucursalx['numeracion_facturacion']+1;
        $str_length = 8;
        $str = substr("0000000".$no_factura, -$str_length);
        $no_documento = $request->serie.'-'.$str;

        return response()->json([
            'status' => 'success',
            'result' => [
                'no_documento_siguiente' => $no_documento,
            ],
            'messages' => null
        ]);
    }

    public function nuevaFacturaAjuste(Request $request)
    {

        if(Auth::user()->id_sucursal>0){
            $sucursales = PublicSucursales::select(['id_sucursal','serie','descripcion'])->with('sucursalBodegaVentas')->with('sucursalBodegaAjustes')
                ->where('id_sucursal',Auth::user()->id_sucursal)
                ->orderby('descripcion')->get();
        }else{
            $sucursales = PublicSucursales::select(['id_sucursal','serie','descripcion'])->with('sucursalBodegaVentas')->with('sucursalBodegaAjustes')->get();
        }

        /*$usuario_actual = AdmonUsuarios::select('id_empleado')->where('usuario',Auth::user()->usuario)->first();
        $trabajador_actual = RRHHTrabajadores::select(['id_area'])->where('id_trabajador',$usuario_actual['id_empleado'])->where('activo',true)->first();
        $area_actual = PublicSucursales::select('id_area','descripcion','activo')->where('activo', 1)->where('id_area',$trabajador_actual['id_area'])->first();
        */
        $afectaciones = CajaBancoAfectaciones::where('activo',true)->whereIn('id_afectacion', array(3,4))->orderby('id_afectacion')->get();
        $tasa = CajaBancoTasasCambios::select('tasa_paralela','tasa')->where('fecha',date("Y-m-d"))->first();
        $vendedores = VentaVendedores::select(['id_vendedor','nombre_completo','id_zona'])->get();
        $departamentos = PublicDepartamentos::with('municipiosDepartamento')->orderby('id_departamento')->get();
        $vias_pago = PublicViaPagos::select(['id_via_pago','descripcion'])->where('activo',true)->orderBy('id_via_pago')->get();
        $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();
        $zonas = PublicZonas::select(['id_zona','descripcion'])->where('activo',true)->get();
        $bancos = CajaBancoBancos::select(['id_banco','descripcion'])->where('activo', 1)->get();
        $bodegas_ajustes = InventarioBodegas::select('id_bodega','descripcion')->where('activo', 1)->where('id_tipo_bodega',4)->get();

        $productos_todos = InventarioProductos::select('id_producto','precio_sugerido',DB::raw('coalesce(inventario.calcular_costo_promedio(inventario.productos.id_producto),0) as costo_promedio'),'codigo_barra',DB::raw("CONCAT(inventario.productos.descripcion,' (',inventario.productos.codigo_barra,')') AS text"))
            ->where('activo', 1)->whereIn('tipo_producto',array(3))
            ->whereHas('productoDetallesBaterias', function($q){
                $q->whereNotIn('id_submarca', array(7));
            })
            ->orderby('id_producto')->get();

        $productos_motobaterias = InventarioProductos::select('id_producto','precio_sugerido',DB::raw('coalesce(inventario.calcular_costo_promedio(inventario.productos.id_producto),0) as costo_promedio'),'codigo_barra',DB::raw("CONCAT(inventario.productos.descripcion,' (',inventario.productos.codigo_barra,')') AS text"))
            ->where('activo', 1)->whereIn('tipo_producto',array(3))->where('condicion',1)
            ->whereHas('productoDetallesBaterias', function($q){
                $q->whereIn('id_submarca', array(7));
            })
            ->orderby('id_producto')->get();

        /*['id_producto','codigo_sistema','tasa_impuesto','inventario.v_productos_venta.codigo_barra','inventario.v_productos_venta.descripcion','inventario.bodegas_productos.id_bodega_producto'
            ,DB::raw("CONCAT(inventario.v_productos_venta.descripcion,' (',inventario.v_productos_venta.codigo_barra,')') AS text"),
            'inventario.bodegas_productos.cantidad as cantidad_disponible',
            'inventario.v_productos_venta.precio_sugerido','inventario.v_productos_venta.costo_promedio','inventario.v_productos_venta.tipo_producto']
        */
        return response()->json([
            'status' => 'success',
            'result' => [
                'vias_pago' => $vias_pago,
                'monedas' => $monedas,
                'bancos' => $bancos,
                'afectaciones' => $afectaciones,
                'vendedores' => $vendedores,
                'departamentos'=>$departamentos,
                'zonas'=>$zonas,
                't_cambio' => $tasa,
                'sucursales'=>$sucursales,
                'bodegas_ajustes'=>$bodegas_ajustes,
                'productos_todos' => $productos_todos,
                'productos_motobaterias'=>$productos_motobaterias,
            ],
            'messages' => null
        ]);

    }


    public function registrarFacturaAjuste(Request $request)
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
            'tipo_producto' => 'required|integer|min:1|max:2',
            'factura_sucursal' => 'required|array|min:1',
            'factura_sucursal.id_sucursal' => 'required|integer|min:1',
            'factura_bodega' => 'required|array|min:1',
            'factura_bodega.id_bodega' => 'required|integer|min:1',

            'factura_bodega_ajuste' => 'required|array|min:1',
            'factura_bodega_ajuste.id_bodega' => 'required|integer|min:1',

            'tipo_identificacion' => 'required|integer|min:1|max:2',
            'identificacion' => 'required|string|max:18',
            'observacion' => 'nullable|string|max:512',

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
            'total_final_cordobas' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',

            'pago_vuelto_mn' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'pago_vuelto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'detallePago' => 'array|nullable|min:0',
            'detallePago.*.via_pagox.id_via_pago' => 'required|integer|min:1',
            'detallePago.*.moneda_x.id_moneda' => 'required|integer|min:1',
            'detallePago.*.monto_me' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'detallePago.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'detallePago.*.banco_x.id_banco' => 'required_if:detallePago.*.via_pagox.id_via_pago,3|required_if:detallePago.*.via_pagox.id_via_pago,5|required_if:detallePago.*.via_pagox.id_via_pago,6|integer|min:1|nullable',
            'detallePago.*.numero_minuta' => 'required_if:detallePago.*.via_pagox.id_via_pago,1|required_if:detallePago.*.via_pagox.id_via_pago,3|string|max:30|nullable',
            'detallePago.*.numero_nota_credito' => 'required_if:detallePago.*.via_pagox.id_via_pago,4|string|max:30|nullable',
            'detallePago.*.numero_cheque' => 'required_if:detallePago.*.via_pagox.id_via_pago,5|string|max:30|nullable',
            'detallePago.*.numero_transferencia' => 'required_if:detallePago.*.via_pagox.id_via_pago,6|string|max:30|nullable',
            'detallePago.*.numero_recibo_pago' => 'required_if:detallePago.*.via_pagox.id_via_pago,7|string|max:30|nullable',

            'detalleForm' => 'required|array|min:1',
            'detalleForm.productox_factura.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',

            'detalleForm.fecha_venta' =>  'required|date',
            'detalleForm.id_bateria' => 'required|integer|min:0',
            'detalleForm.codigo_garantia' => 'required_if:tipo_producto,1|string|max:30',
            'detalleForm.monto_ajuste_real' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'detalleForm.porcentaje_ajuste' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'detalleForm.porcentaje_ajuste_cliente' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'detalleForm.porcentaje_ajuste_real' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'detalleForm.precio' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'detalleForm.precio_con_ajuste' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'detalleForm.tipo_servicio' => 'required|integer|min:1',


            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.productox.id_bodega_producto' => 'required|integer|min:0',
            'detalleProductos.*.id_bateria' => 'required|integer|min:0',
            'detalleProductos.*.precio_costo' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.precio_lista' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
            'detalleProductos.*.productox.descripcion' => 'required|string|max:100',
            'detalleProductos.*.productox.unidad_medida' => 'required|string|max:100',
            'detalleProductos.*.afectacionx.id_afectacion' => 'required|integer|exists:pgsql.cjabnco.facturas_afectaciones,id_afectacion',
            'detalleProductos.*.afectacionx.valor' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',




        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $factura = new CajaBancoFacturas;
                /*$nuevo_num = CajaBancoFacturas::select([DB::raw("COALESCE(max(no_factura),0)+1 as no_factura")])->where('serie',$request->serie)->first();
                $factura->no_factura = $nuevo_num['no_factura'];*/
                $sucursalx = PublicSucursales::find($request->factura_sucursal['id_sucursal']);
                //$nuevo_num = CajaBancoFacturas::select([DB::raw("COALESCE(max(no_factura),0)+1 as no_factura")])->where('serie',$request->serie)->first();
                $factura->no_factura = $sucursalx['numeracion_facturacion']+1;

                $str_length = 8;
                $str = substr("0000000".$factura->no_factura, -$str_length);

                $factura->no_documento = $request->serie.'-'.$str;

                //$factura->no_documento = $request->serie.'-'.$factura->no_factura;
                $factura->tipo_venta = 2;
                $factura->f_factura =  date("Y-m-d H:i:s");//$request->f_factura;
                $factura->serie = $request->serie;
                $factura->id_moneda = 1;
                $factura->observacion = $request->observacion;
                $factura->id_tipo = $request->id_tipo;
                $factura->id_sucursal = $request->factura_sucursal['id_sucursal'];
                $factura->id_bodega = $request->factura_bodega['id_bodega'];
                $factura->id_cliente = $request->factura_cliente['id_cliente'];
                $factura->tipo_identificacion = $request->tipo_identificacion;
                $factura->identificacion = $request->identificacion;
                $factura->id_vendedor = $request->factura_vendedor['id_vendedor'];
                $factura->t_cambio = $request->t_cambio;
                $factura->doc_exoneracion = $request->doc_exoneracion;
                $factura->doc_exoneracion_ir = $request->doc_exoneracion_ir;
                $factura->doc_exoneracion_imi = $request->doc_exoneracion_imi;
                $factura->impuesto_exonerado = !$request->aplicaIVA;

                $factura->mt_retencion = round($request->mt_retencion,2);
                $factura->mt_retencion_imi = round($request->mt_retencion_imi,2);
                $factura->mt_impuesto = round($request->mt_impuesto,2);
                $factura->mt_descuento = round($request->mt_descuento,2);
                $factura->mt_ajuste = round($request->mt_ajuste,2);
                $factura->mt_total = $request->total_final_cordobas;

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
                $salida->id_tipo_salida = 10;
                $salida->id_cliente = $factura->id_cliente ;
                $salida->fecha_salida = $factura->f_factura;
                $salida->id_bodega = $factura->id_bodega;
                $salida->descripcion_salida = $request->factura_cliente['nombre_comercial'].' Fact. No.'.$factura->no_documento;
                $salida->numero_documento = $factura->no_documento;
                $salida->u_creacion =  $factura->u_creacion;
                $salida->estado = 1;
                $salida->save();

                $entrada = new InventarioEntradas;
                $entrada->codigo_entrada = InventarioEntradas::max('id_entrada') + 1;
                $entrada->id_tipo_entrada = 5;
                $entrada->condicion_productos = 7; //productos vendidos
                $entrada->fecha_entrada = date('Y-m-d');
                $entrada->id_proveedor = null;
                $entrada->id_salida = $salida->id_salida;
                $entrada->id_bodega = $request->factura_bodega_ajuste['id_bodega']; ;
                $entrada->descripcion_entrada = 'Registramos entrada de batería por factura de ajuste No. ' . $factura->no_documento;

                $entrada->u_creacion = Auth::user()->usuario;;
                $entrada->estado = 1;
                $entrada->productos_usados = false;
                $entrada->save();


                $factura->id_salida = $salida->id_salida;
                $factura->save();


                PublicSucursales::find($factura->id_sucursal)->increment('numeracion_facturacion');

                if($factura->id_tipo == 2 && round($factura->mt_deuda,2)>0){
                    $cuentas_x_cobrar = new CuentasXCobrarCuentasXCobrar;
                    $cuentas_x_cobrar->id_cliente =$factura->id_cliente;
                    $cuentas_x_cobrar->id_tipo_documento = 1;
                    $cuentas_x_cobrar->no_documento_origen = $factura->no_documento;
                    $cuentas_x_cobrar->es_registro_importado = false;

                    $cuentas_x_cobrar->identificador_origen = $factura->id_factura;
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

                if((!empty($request->detallePago))){
                foreach ($request->detallePago as $pago) {
                    $factura_pago = new CajaBancoFacturaViaPagos;
                    $factura_pago->id_factura = $factura->id_factura;
                    $factura_pago->id_via_pago = $pago['via_pagox']['id_via_pago'];
                    $factura_pago->id_moneda = $pago['moneda_x']['id_moneda'];
                    $factura_pago->monto_me = $pago['monto_me'];
                    $factura_pago->monto = $pago['monto'];
                    if($factura_pago->id_via_pago == 1 ||$factura_pago->id_via_pago == 3 ||$factura_pago->id_via_pago == 5 || $factura_pago->id_via_pago == 6){
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
                }else{

                    if($request->id_tipo==1 && $request->total_final_cordobas>0){//factura de contado sin detalle de pagos

                        DB::rollBack();
                        return response()->json([
                            'status' => 'error',
                            'result' => array('detallePago'=>['Se debe especificar el pago en una factura de contado']),
                            'messages' => null
                        ]);

                    }

                }

                $total_venta_producto = 0;
                $total_venta_servicios= 0;
                $total_costo_producto = 0;
                $total_costo_servicios= 0;
                $i=0;
                foreach ($request->detalleProductos as $producto) {

                    $factura_producto = new CajaBancoFacturaProductos;

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

                    $factura_producto->id_factura = $factura->id_factura;
                    $factura_producto->descripcion_producto = $producto['productox']['descripcion'];
                    $factura_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                    $factura_producto->unidad_medida = $producto['productox']['unidad_medida'];

                    $factura_producto->cantidad = $producto['cantidad'];
                    $factura_producto->precio_costo = $producto['precio_costo'];
                    $factura_producto->precio_lista = round($producto['precio_lista'],2);
                    $factura_producto->precio = round($producto['p_unitario'],2);

                    $factura_producto->p_descuento = $producto['p_descuento'];
                    $factura_producto->p_ajuste = $producto['p_ajuste'];
                    $factura_producto->p_impuesto = $producto['p_impuesto'];

                    $factura_producto->m_impuesto = round($producto['mt_impuesto'],2);
                    $factura_producto->m_descuento = round($producto['mt_descuento'],2);
                    $factura_producto->m_ajuste = round($producto['mt_ajuste'],2);

                    $factura_producto->id_afectacion = $producto['afectacionx']['id_afectacion'];

                    $factura_producto->f_creacion = date("Y-m-d H:i:s");
                    $factura_producto->save();

                    if($request->tipo_producto==1){
                    if($entrada->id_tipo_entrada == 5){
                        $bateria_individual = InventarioBaterias::find($producto['id_bateria']);
                        //$bateria_individual->id_bodega_actual = null;
                        $bateria_individual->reservada = true; //venda y reservada
                        $bateria_individual->save();
                    }
                    }


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

                        $total_venta_producto = $total_venta_producto + round($factura_producto->precio_lista *$factura_producto->cantidad ,2);
                        $total_costo_producto = $total_costo_producto + round($factura_producto->precio_costo *$factura_producto->cantidad ,6);
                    }else{
                        $total_venta_servicios = $total_venta_servicios + round($factura_producto->precio_lista *$factura_producto->cantidad ,2);
                        $total_costo_servicios = $total_costo_servicios + round($factura_producto->precio_costo *$factura_producto->cantidad ,6);
                    }


                    $entrada_producto = new InventarioEntradaProductos();

                    //print_r($request->detalleForm['productox']['id_producto']);
                    $bodega_subx = InventarioBodegaProductos::where('id_bodega', $entrada->id_bodega)->where('id_producto', $request->detalleForm['productox']['id_producto'])->first();
                    if (!empty($bodega_subx)) {
                        $entrada_producto->id_bodega_producto = $bodega_subx['id_bodega_producto'];
                    } else {
                        $nueva_bodega_sub = new InventarioBodegaProductos;
                        $nueva_bodega_sub->id_bodega = $entrada->id_bodega;
                        $nueva_bodega_sub->id_producto = $request->detalleForm['productox']['id_producto'];
                        $nueva_bodega_sub->cantidad = 0;
                        $nueva_bodega_sub->u_creacion = $entrada->u_creacion;
                        $nueva_bodega_sub->save();
                        $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                    }


                    $productoExiste = InventarioEntradaProductos::where('id_bodega_producto',$entrada_producto->id_bodega_producto)
                        ->where('id_entrada',$entrada->id_entrada)->first();
                    if(!$productoExiste){
                       $producto_detalles = InventarioProductos::find($request->detalleForm['productox']['id_producto']);
                       $unidad_medida = InventarioUnidadMedida::find($producto_detalles['id_unidad_medida']);

                        $entrada_producto->id_entrada = $entrada->id_entrada;
                        $entrada_producto->codigo_producto = $producto_detalles['codigo_sistema'];
                        $entrada_producto->descripcion_producto = $producto_detalles['descripcion'];
                        $entrada_producto->unidad_medida = $unidad_medida['descripcion'];
                        $entrada_producto->precio_unitario = $producto_detalles['costo_estandar'];
                        $entrada_producto->cantidad_solicitada = 1;
                        $entrada_producto->cantidad_recibida = 0;
                        $entrada_producto->cantidad_faltante = 0;
                        $entrada_producto->u_creacion = $entrada->u_creacion;
                        $entrada_producto->save();
                    }else{
                        $productoExiste->cantidad_solicitada = $productoExiste->cantidad_solicitada + (int)$producto['cantidad'];
                        $productoExiste->save();
                    }

                    $detalle_ajuste = new CajaBancoFacturaAjustesGarantia();
                    $detalle_ajuste->fecha_venta=$request->detalleForm['fecha_venta'];

                    if($request->tipo_producto==2){
                        $detalle_ajuste->id_bateria=0;
                    }else{
                        $detalle_ajuste->id_bateria=$request->detalleForm['id_bateria'];
                    }

                    $detalle_ajuste->id_factura=$factura->id_factura;
                    $detalle_ajuste->monto_ajuste_real=$request->detalleForm['monto_ajuste_real'];
                    $detalle_ajuste->porcentaje_ajuste=$request->detalleForm['porcentaje_ajuste'];
                    $detalle_ajuste->porcentaje_ajuste_cliente=$request->detalleForm['porcentaje_ajuste_cliente'];
                    $detalle_ajuste->porcentaje_ajuste_real=$request->detalleForm['porcentaje_ajuste_real'];
                    $detalle_ajuste->precio=$request->detalleForm['precio'];
                    $detalle_ajuste->precio_con_ajuste=$request->detalleForm['precio_con_ajuste'];
                    $detalle_ajuste->tipo_servicio=$request->detalleForm['tipo_servicio'];
                    if($request->tipo_producto == 2)
                    {
                        $detalle_ajuste->codigo_garantia = '';
                    }else{
                    $detalle_ajuste->codigo_garantia = $request->detalleForm['codigo_garantia'];
                    }
                    $detalle_ajuste->estado=1;
                    $detalle_ajuste->save();

                    $i++;
                }


                /*INICIA movimiento contable - Factura*/

                $clientex = VentaClientes::select('id_cliente','id_zona')->find($factura->id_cliente);
                $zonax = PublicZonas::select('id_zona','id_centro_costo','id_centro_ingreso')->find($clientex->id_zona);
                $tipos_cuentas = array(4,5,6);

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
                $factura->id_documento_contable= $documento->id_documento;
                $factura->save();

                ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');

                /* Inicio Seccion 1) Moneda Nacional / Extranjera*/

                if($monto_cordobas>0){

                    $nombre_seccion_ingreso_nacional = 'IngresoMonNacional';
                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_ingreso_nacional)->with('configuracionFacturacuentaContable')->first();
                    //print_r($cuentaSeccion);

                    $documento_cuenta_contableS1 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS1->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS1->concepto = 'Registramos ingreso de moneda nacional por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS1->debe = $request->mt_subtotal - $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi -$factura->mt_descuento -$factura->mt_ajuste + $factura->mt_impuesto;
                    $documento_cuenta_contableS1->haber = 0;
                    $documento_cuenta_contableS1->debe_org = $request->mt_subtotal - $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi -$factura->mt_descuento -$factura->mt_ajuste+ $factura->mt_impuesto;;
                    $documento_cuenta_contableS1->haber_org =  0;
                    $documento_cuenta_contableS1->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS1->haber>0){
                                $documento_cuenta_contableS1->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS1->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS1->debe>0){
                                $documento_cuenta_contableS1->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS1->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS1->id_centro =  null;
                    }

                    $documento_cuenta_contableS1->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS1->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS1->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
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

                if(($request->id_tipo == 2 || $request->id_tipo == 3) && round($factura->mt_deuda,2)>0){

                    $nombre_seccion_cuentas_cobrar = 'CuentasXCobrar';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_cuentas_cobrar)->with('configuracionFacturacuentaContable')->first();

                    $documento_cuenta_contableS2a = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS2a->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS2a->concepto = 'Acreditamos cuentas por cobrar por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS2a->debe = $factura->mt_deuda- $factura->mt_retencion - $factura->mt_retencion_imi /*-$factura->mt_descuento*/;
                    $documento_cuenta_contableS2a->haber =  0;
                    $documento_cuenta_contableS2a->debe_org = $factura->mt_deuda - $factura->mt_retencion - $factura->mt_retencion_imi /*-$factura->mt_descuento*/;
                    $documento_cuenta_contableS2a->haber_org =  0;
                    $documento_cuenta_contableS2a->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS2a->haber>0){
                                $documento_cuenta_contableS2a->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS2a->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS2a->debe>0){
                                $documento_cuenta_contableS2a->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS2a->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS2a->id_centro =  null;
                    }

                    $documento_cuenta_contableS2a->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS2a->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS2a->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS2a->save();

                }



                /* Fin seccion 1.2) */


                /* Inicio Seccion 2) Retenciones IR e IMI */

                if($request->aplicaIR && $factura->mt_retencion>0){

                    $nombre_seccion_retencion = 'Retencion';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_retencion)->with('configuracionFacturacuentaContable')->first();

                    $documento_cuenta_contableS3 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS3->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS3->concepto = 'Registramos retencion 2% ventas por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS3->debe = $factura->mt_retencion;
                    $documento_cuenta_contableS3->haber =  0;
                    $documento_cuenta_contableS3->debe_org = $factura->mt_retencion;
                    $documento_cuenta_contableS3->haber_org =  0;
                    $documento_cuenta_contableS3->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS3->haber>0){
                                $documento_cuenta_contableS3->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS3->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS3->debe>0){
                                $documento_cuenta_contableS3->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS3->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS3->id_centro =  null;
                    }
                    $documento_cuenta_contableS3->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS3->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS3->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS3->save();
                }

                if($request->aplicaIMI && $factura->mt_retencion_imi>0){

                    $nombre_seccion_retencion_imi = 'RetencionImi';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_retencion_imi)->with('configuracionFacturacuentaContable')->first();

                    $documento_cuenta_contableS4 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS4->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS4->concepto = 'Registramos retencion alcaldia 1% ventas por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS4->debe = $factura->mt_retencion_imi;
                    $documento_cuenta_contableS4->haber =  0;
                    $documento_cuenta_contableS4->debe_org = $factura->mt_retencion_imi;
                    $documento_cuenta_contableS4->haber_org =  0;
                    $documento_cuenta_contableS4->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS4->haber>0){
                                $documento_cuenta_contableS4->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS4->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS4->debe>0){
                                $documento_cuenta_contableS4->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS4->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS4->id_centro =  null;
                    }
                    $documento_cuenta_contableS4->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS4->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS4->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS4->save();
                }

                /* Fin Seccion 2) */


                /* Inicio Seccion 3) Impuesto al valor agregado */

                if(!$factura->impuesto_exonerado && $factura->mt_impuesto>0){

                    $nombre_seccion_iva = 'Iva';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_iva)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS5 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS5->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS5->concepto = 'Registramos Impuesto al valor agregado por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS5->debe =0;
                    $documento_cuenta_contableS5->haber = $factura->mt_impuesto;
                    $documento_cuenta_contableS5->debe_org = 0;
                    $documento_cuenta_contableS5->haber_org =  $factura->mt_impuesto;
                    $documento_cuenta_contableS5->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS5->haber>0){
                                $documento_cuenta_contableS5->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS5->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS5->debe>0){
                                $documento_cuenta_contableS5->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS5->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS5->id_centro =  null;
                    }

                    $documento_cuenta_contableS5->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS5->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS5->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS5->save();
                }

                /* Fin Seccion 3) */

                /* Inicio Seccion 4) Ingresos por producto y servicios*/

                if($total_venta_producto>0){

                    $nombre_seccion_ingreso_productos = 'IngresoProductos';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_ingreso_productos)->with('configuracionFacturacuentaContable')->first();



                    $documento_cuenta_contableS6 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS6->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS6->concepto = 'Registramos Ingreso por venta de articulo(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS6->debe =0;
                    $documento_cuenta_contableS6->haber = $total_venta_producto;
                    $documento_cuenta_contableS6->debe_org = 0;
                    $documento_cuenta_contableS6->haber_org =  $total_venta_producto;
                    $documento_cuenta_contableS6->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS6->haber>0){
                                $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS6->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS6->debe>0){
                                $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS6->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS6->id_centro =  null;
                    }
                    $documento_cuenta_contableS6->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS6->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS6->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS6->save();

                    foreach ($request->detalleProductos as $producto) {
                        if($producto['afectacionx']['id_afectacion'] > 1 && $producto['mt_ajuste']>0){

                            $documento_cuenta_contableS6 = new ContabilidadDocumentosMovimientos;
                            $documento_cuenta_contableS6->id_documento = $documento->id_documento;
                            $documento_cuenta_contableS6->concepto = 'Registramos Ajuste por venta de articulo(s) por factura No. '.$factura->no_documento;
                            $documento_cuenta_contableS6->debe =$producto['mt_ajuste'];
                            $documento_cuenta_contableS6->haber = 0;
                            $documento_cuenta_contableS6->debe_org = $producto['mt_ajuste'];
                            $documento_cuenta_contableS6->haber_org =  0;
                            $documento_cuenta_contableS6->id_moneda =  1;
                            $documento_cuenta_contableS6->id_centro =  1;///cambiar centro de costo ingreso

                            /* revisar */
                            if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                                if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                                    if($documento_cuenta_contableS6->haber>0){
                                        $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_ingreso;
                                    }else{
                                        $documento_cuenta_contableS6->id_centro = $zonax->id_centro_costo;
                                    }
                                }else{
                                    if($documento_cuenta_contableS6->debe>0){
                                        $documento_cuenta_contableS6->id_centro =  $zonax->id_centro_costo;
                                    }else{
                                        $documento_cuenta_contableS6->id_centro = $zonax->id_centro_ingreso;
                                    }
                                }
                            }else{
                                $documento_cuenta_contableS6->id_centro =  null;
                            }

                            $documento_cuenta_contableS6->id_cuenta_contable =  $producto['afectacionx']['id_cuenta_contable'];
                            $documento_cuenta_contableS6->cta_contable = '';
                            $documento_cuenta_contableS6->cta_contable_padre = '';
                            $documento_cuenta_contableS6->save();
                        }
                    }

                }


                if($total_venta_servicios>0){
                    $nombre_seccion_ingreso_ingreso_servicios = 'IngresoServicios';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_ingreso_ingreso_servicios)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS7 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS7->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS7->concepto = 'Registramos Ingreso por venta de servicio(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS7->debe =0;
                    $documento_cuenta_contableS7->haber = $total_venta_servicios;
                    $documento_cuenta_contableS7->debe_org = 0;
                    $documento_cuenta_contableS7->haber_org =  $total_venta_servicios;
                    $documento_cuenta_contableS7->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS7->haber>0){
                                $documento_cuenta_contableS7->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS7->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS7->debe>0){
                                $documento_cuenta_contableS7->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS7->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS7->id_centro =  null;
                    }

                    $documento_cuenta_contableS7->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS7->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7->save();
                }


                /* Fin Seccion 4) */

                /* Inicio sub Seccion 4.1) - Descuentos en factura*/

                if($factura->mt_descuento>0){

                    $nombre_seccion_descuentos = 'DescuentoVenta';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_descuentos)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS7a = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS7a->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS7a->concepto = 'Registramos Descuento de venta por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS7a->debe =$factura->mt_descuento;
                    $documento_cuenta_contableS7a->haber = 0;
                    $documento_cuenta_contableS7a->debe_org = $factura->mt_descuento;
                    $documento_cuenta_contableS7a->haber_org =  0;
                    $documento_cuenta_contableS7a->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS7a->haber>0){
                                $documento_cuenta_contableS7a->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS7a->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS7a->debe>0){
                                $documento_cuenta_contableS7a->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS7a->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS7a->id_centro =  null;
                    }

                    $documento_cuenta_contableS7a->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS7a->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7a->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS7a->save();
                }


                /* Fin sub Seccion 4.1) */
                /* Fin Seccion 4) */


                /* Inicio Seccion 5) Costos por producto y servicios*/

                if($total_costo_producto>0){

                    $nombre_seccion_costo_prod = 'CostoProductos';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_costo_prod)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS8 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS8->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS8->concepto = 'Registramos Costo de venta de articulo(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS8->debe =$total_costo_producto;
                    $documento_cuenta_contableS8->haber = 0;
                    $documento_cuenta_contableS8->debe_org = $total_costo_producto;
                    $documento_cuenta_contableS8->haber_org =  0;
                    $documento_cuenta_contableS8->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS8->haber>0){
                                $documento_cuenta_contableS8->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS8->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS8->debe>0){
                                $documento_cuenta_contableS8->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS8->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS8->id_centro =  null;
                    }

                    $documento_cuenta_contableS8->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS8->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS8->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                    $documento_cuenta_contableS8->save();

                }

                if($total_costo_servicios>0){

                    $nombre_seccion_costo_serv = 'CostoServicios';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_costo_serv)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS9 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS9->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS9->concepto = 'Registramos Costo de venta de servicio(s) por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS9->debe =$total_costo_servicios;
                    $documento_cuenta_contableS9->haber = 0;
                    $documento_cuenta_contableS9->debe_org = $total_costo_servicios;
                    $documento_cuenta_contableS9->haber_org =  0;
                    $documento_cuenta_contableS9->id_moneda =  1;

                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS9->haber>0){
                                $documento_cuenta_contableS9->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS9->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS9->debe>0){
                                $documento_cuenta_contableS9->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS9->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS9->id_centro =  null;
                    }

                    $documento_cuenta_contableS9->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS9->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS9->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                    $documento_cuenta_contableS9->save();
                }


                if($total_costo_producto>0){

                    $nombre_seccion_inventario= 'Inventario';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_inventario)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS10 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS10->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS10->concepto = 'Registramos debito de productos en bodega por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS10->debe =0;
                    $documento_cuenta_contableS10->haber = $total_costo_producto;
                    $documento_cuenta_contableS10->debe_org = 0;
                    $documento_cuenta_contableS10->haber_org =  $total_costo_producto;
                    $documento_cuenta_contableS10->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS10->haber>0){
                                $documento_cuenta_contableS10->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS10->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS10->debe>0){
                                $documento_cuenta_contableS10->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS10->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS10->id_centro =  null;
                    }

                    $documento_cuenta_contableS10->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS10->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS10->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                    $documento_cuenta_contableS10->save();
                }

                if($total_costo_servicios>0){

                    $nombre_seccion_gastos_venta = 'GastosVenta2';

                    $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_gastos_venta)->with('configuracionFacturacuentaContable')->first();


                    $documento_cuenta_contableS11 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS11->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS11->concepto = 'Registramos debito del gasto de venta de servicios por factura No. '.$factura->no_documento;
                    $documento_cuenta_contableS11->debe =0;
                    $documento_cuenta_contableS11->haber = $total_costo_servicios;
                    $documento_cuenta_contableS11->debe_org = 0;
                    $documento_cuenta_contableS11->haber_org =  $total_costo_servicios;
                    $documento_cuenta_contableS11->id_moneda =  1;
                    if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                        if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                            if($documento_cuenta_contableS11->haber>0){
                                $documento_cuenta_contableS11->id_centro =  $zonax->id_centro_ingreso;
                            }else{
                                $documento_cuenta_contableS11->id_centro = $zonax->id_centro_costo;
                            }
                        }else{
                            if($documento_cuenta_contableS11->debe>0){
                                $documento_cuenta_contableS11->id_centro =  $zonax->id_centro_costo;
                            }else{
                                $documento_cuenta_contableS11->id_centro = $zonax->id_centro_ingreso;
                            }
                        }
                    }else{
                        $documento_cuenta_contableS11->id_centro =  null;
                    }

                    $documento_cuenta_contableS11->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                    $documento_cuenta_contableS11->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS11->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                    $documento_cuenta_contableS11->save();
                }

                /* Fin Seccion 5) */

                $total_ventax = $total_venta_producto+$total_venta_servicios;
                /* Inicio Seccion 6) Gastos de comercialización */
                $nombre_seccion_gastos_venta = 'GastosVenta';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_gastos_venta)->with('configuracionFacturacuentaContable')->first();

                $documento_cuenta_contableS15 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS15->id_documento = $documento->id_documento;
                $documento_cuenta_contableS15->concepto = 'Registramos gastos de comercialización por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS15->debe = round($total_ventax*0.03,2);
                $documento_cuenta_contableS15->haber =  0;
                $documento_cuenta_contableS15->debe_org = round($total_ventax*0.03,2);
                $documento_cuenta_contableS15->haber_org =  0;
                $documento_cuenta_contableS15->id_moneda =  1;
                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS15->haber>0){
                            $documento_cuenta_contableS15->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS15->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS15->debe>0){
                            $documento_cuenta_contableS15->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS15->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS15->id_centro =  null;
                }

                $documento_cuenta_contableS15->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS15->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS15->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS15->save();


                $nombre_seccion_alcaldia = 'Alcaldias';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_alcaldia)->with('configuracionFacturacuentaContable')->first();

                $documento_cuenta_contableS16 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS16->id_documento = $documento->id_documento;
                $documento_cuenta_contableS16->concepto = 'Registramos gastos de comercialización por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS16->debe =0;
                $documento_cuenta_contableS16->haber = round($total_ventax*0.03,2);
                $documento_cuenta_contableS16->debe_org = 0;
                $documento_cuenta_contableS16->haber_org =  round($total_ventax*0.03,2);
                $documento_cuenta_contableS16->id_moneda =  1;

                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS16->haber>0){
                            $documento_cuenta_contableS16->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS16->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS16->debe>0){
                            $documento_cuenta_contableS16->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS16->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS16->id_centro =  null;
                }

                $documento_cuenta_contableS16->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS16->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS16->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

                $documento_cuenta_contableS16->save();

                /* Fin Seccion 6) */


                /* Inicio Seccion 7) Pago minimo*/

                $nombre_seccion_pago_minimo_ir = 'PagoMinimoIR';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_pago_minimo_ir)->with('configuracionFacturacuentaContable')->first();


                $documento_cuenta_contableS13 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS13->id_documento = $documento->id_documento;
                $documento_cuenta_contableS13->concepto = 'Registramos retencion 2% Pago Minimo ventas por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS13->debe = round($total_ventax*0.02,2);
                $documento_cuenta_contableS13->haber =  0;
                $documento_cuenta_contableS13->debe_org = round($total_ventax*0.02,2);
                $documento_cuenta_contableS13->haber_org =  0;
                $documento_cuenta_contableS13->id_moneda =  1;

                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS13->haber>0){
                            $documento_cuenta_contableS13->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS13->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS13->debe>0){
                            $documento_cuenta_contableS13->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS13->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS13->id_centro =  null;
                }

                $documento_cuenta_contableS13->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS13->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS13->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];


                $documento_cuenta_contableS13->save();


                $nombre_seccion_pago_minimo_dgi = 'PagoMinimoDGI';

                $cuentaSeccion = CajaBancoFacturacionConfiguracion::where('nombre_seccion',$nombre_seccion_pago_minimo_dgi)->with('configuracionFacturacuentaContable')->first();

                $documento_cuenta_contableS14 = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableS14->id_documento = $documento->id_documento;
                $documento_cuenta_contableS14->concepto = 'Registramos Impuesto al valor agregado Pago Minimo por factura No. '.$factura->no_documento;
                $documento_cuenta_contableS14->debe =0;
                $documento_cuenta_contableS14->haber = round($total_ventax*0.02,2);
                $documento_cuenta_contableS14->debe_org = 0;
                $documento_cuenta_contableS14->haber_org =  round($total_ventax*0.02,2);
                $documento_cuenta_contableS14->id_moneda =  1;

                if(in_array($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta'], $tipos_cuentas)) {
                    if($cuentaSeccion->configuracionFacturacuentaContable['id_tipo_cuenta']==4){//cuenta ingreso
                        if($documento_cuenta_contableS14->haber>0){
                            $documento_cuenta_contableS14->id_centro =  $zonax->id_centro_ingreso;
                        }else{
                            $documento_cuenta_contableS14->id_centro = $zonax->id_centro_costo;
                        }
                    }else{
                        if($documento_cuenta_contableS14->debe>0){
                            $documento_cuenta_contableS14->id_centro =  $zonax->id_centro_costo;
                        }else{
                            $documento_cuenta_contableS14->id_centro = $zonax->id_centro_ingreso;
                        }
                    }
                }else{
                    $documento_cuenta_contableS14->id_centro =  null;
                }

                $documento_cuenta_contableS14->id_cuenta_contable = $cuentaSeccion->id_cuenta_contable;
                $documento_cuenta_contableS14->cta_contable = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];
                $documento_cuenta_contableS14->cta_contable_padre = $cuentaSeccion->configuracionFacturacuentaContable['cta_contable'];

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


    public function cancelarFactura(Request $request, CajaBancoFacturas $factura)
    {
        $rules = [
            'id_factura' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $factura = CajaBancoFacturas::find($request->id_factura);

            if(!empty($factura)&&$factura->estado==1){

                try{
                    DB::beginTransaction();
                    $factura->estado=0;
                    $factura->observacion = $factura->observacion . ' **Factura cancelada por '.Auth::user()->usuario.' a las '.date("Y-m-d H:i:s");
                    $factura->save();



                    foreach ($request->factura_productos as $producto) {
                        $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['id_bodega_producto'])->first();
                        //restaurar unidades dependiendo tipo de factura

                            if($factura->tipo_venta === 1){
                                $bodega_sub->cantidad = $bodega_sub->cantidad-$producto['cantidad_solicitada'];
                            }elseif($factura->tipo_venta === 3){
                                $bodega_sub->cantidad_recuperadas = $bodega_sub->cantidad_recuperadas-$producto['cantidad_solicitada'];//salida venta recuperado
                            }elseif($factura->tipo_venta === 4){
                                $bodega_sub->cantidad_obsoletas = $bodega_sub->cantidad_obsoletas-$producto['cantidad_solicitada'];//salida venta obsoleto
                            }

                        //$bodega_sub->cantidad = $bodega_sub->cantidad+$producto['cantidad_solicitada'];
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
                    'result' => array('id_factura'=>["Datos no encontrados o la solicitud ya autorizada"]),
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

    public function obtenerFacturasCliente(Request $request, CajaBancoFacturas $facturas)
    {
        $facturas = $facturas->obtenerFacturasCliente($request);

        return response()->json([
            'status' => 'success',
            'result' => $facturas,
            'messages' => null
        ]);
    }


    public function reporte($ext,$id_factura)
    {
        // echo $ext;
        //$ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteFactura';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteFactura';

           $input = ENV('URL_REPORTES').'FacturaHorizontalLubnica';
           $output = ENV('URL_REPORTES').$hora_actual.'FacturaHorizontalLubnica';
            $url = ENV('URL_REPORTES');
            //$url = 'C:/xampp/htdocs/resources/reports/';
            //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/Invoice';
            //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'Invoice';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_factura' => $id_factura,
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteFactura.' . $ext, $headers);
        }else{
            return '';
        }
    }


    public function anular(Request $request)
    {

        $messages = [
        ];


        $rules = [
            'id_factura' => 'required|integer',
            'causa_anulacion' => 'required|string|max:100',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $factura = CajaBancoFacturas::where('id_factura',$request->id_factura)->with('facturaProductos')->first();
                $factura->estado = 0;
                $factura->observacion = $factura['observacion'] . ' **Factura cancelada por '.Auth::user()->usuario.' a las '.date("Y-m-d H:i:s").' Causa: '.$request->causa_anulacion;
                $factura->save();

                if(!empty($factura->id_salida)){
                    $salida = InventarioSalidas::find($factura->id_salida);
                    $entrada = InventarioEntradas::where('id_salida',$factura->id_salida)->first();
                    //print_r($salida->estado);
                    if($salida->estado == 1){
                        $salida->estado = 0;
                        $salida->save();

                        if($factura->tipo_venta==2 && !empty($entrada)){
                            if($entrada['estado'] == 1 || $entrada['estado']==0){
                                $entrada->estado=0;
                                $entrada->save();
                            }else{
                                DB::rollBack();
                                return response()->json([
                                    'status' => 'error',
                                    'result' => 'No se puede actualizar la factura de ajuste, la entrada ya fue recibida',
                                    'messages' => null
                                ]);
                            }
                        }

                        foreach ($factura->facturaProductos as $producto) {
                            $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['id_bodega_producto'])->first();
                            //restaurar unidades dependiendo tipo de factura
                            //$bodega_sub->cantidad = $bodega_sub->cantidad+$producto['cantidad_solicitada'];

                            if($factura->tipo_venta === 1){
                                $bodega_sub->cantidad = $bodega_sub->cantidad+$producto['cantidad'];
                            }elseif($factura->tipo_venta === 3){
                                $bodega_sub->cantidad_recuperadas = $bodega_sub->cantidad_recuperadas+$producto['cantidad'];//salida venta recuperado
                            }elseif($factura->tipo_venta === 4){
                                $bodega_sub->cantidad_obsoletas = $bodega_sub->cantidad_obsoletas+$producto['cantidad'];//salida venta obsoleto
                            }

                            $bodega_sub->save();
                        }

                        if($factura->id_tipo == 2){//facturas de credito
                            $cuentas_x_cobrar = CuentasXCobrarCuentasXCobrar::where('id_tipo_documento',1)
                                ->where('identificador_origen',$factura->id_factura)->first();
                            $cuentas_x_cobrar->estado =0;
                            $cuentas_x_cobrar->saldo_actual =0;
                            $cuentas_x_cobrar->save();
                        }

                        if(!empty($factura->id_documento_contable)){//facturas con doc contable
                            $documento = ContabilidadDocumentosContables::find($factura->id_documento_contable);
                            $documento->estado =0;
                            $documento->save();
                        }


                        if($factura->tipo_venta == 2){///venta por ajuste

                            $entrada = InventarioEntradas::where('id_salida',$salida->id_salida)->first();
                            $entradas_productos = InventarioEntradaProductos::where('id_entrada',$entrada['id_entrada']);

                            foreach ($entradas_productos as $entrada_producto) {
                                $salida_baterias = InventarioEntradaProductoBaterias::where('id_entrada_producto',$entrada_producto['id_entrada_producto'])->get();
                                foreach ($salida_baterias as $baterias) {
                                    $bateria_individual = InventarioBaterias::find($baterias['id_bateria']);
                                    $bateria_individual->reservada = false; //vendida y reservada
                                    $bateria_individual->save();

                                }
                            }

                        }


                        $proforma = CajaBancoProformas::where('id_factura',$factura->id_factura)->first();

                        if(!empty($proforma)){
                            $proforma->id_factura=null;
                            $proforma->estado=1;///proforma convertida en venta
                            $proforma->save();
                        }


                    }else{
                        DB::rollBack();
                        return response()->json([
                            'status' => 'error',
                            'result' => 'No se puede actualizar la entrada, ya fue recibida',
                            'messages' => null
                        ]);
                    }
                }else{
                    return response()->json([
                        'status' => 'error',
                        'result' => 'Error encontrando factura',
                        'messages' => null
                    ]);
                }

                DB::commit();
                return response()->json([
                    'status' => 'success',
                    'result' => null,
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


}