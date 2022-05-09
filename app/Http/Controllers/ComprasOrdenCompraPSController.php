<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\CajaBancoMonedas;
use App\Models\CajaBancoTasasCambios;
use App\Models\ComprasClasificacionCompras;
use App\Models\ComprasOrdenCompraPS;

use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\CuentasXPagarCuentasXPagar;
use App\Models\InventarioProveedores;
use DateTime;
use Hash, Validator,Auth;
use App\Models\ComprasOrdenCompraPSListado;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class ComprasOrdenCompraPSController extends Controller
{

	/**
     * Get List of Entradas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, ComprasOrdenCompraPS $ordenes)
    {
        $ordenes = $ordenes->obtenerOrdenesCompras($request);

        foreach($ordenes as $orden ){
            //   print_r($orden_compra);
            $items = collect($orden->ordenCompraListado);

            $orden->tot_unidades = $items->sum(function($item) {
                return $item['cantidad'];
            });
            $orden->subtotal = $items->sum(function($item) {
                return $item['precio']*$item['cantidad'];
            });

            $orden->total_descuento = $items->sum(function($item) {
                return $item['precio']*$item['cantidad']*($item['descuento']/100);
            });

            $orden->total = $orden->subtotal - $orden->total_descuento;
        }

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $ordenes->total(), 
                'rows' => $ordenes->items()
            ],
            'messages' => null
        ]);
	}


    public function nueva(Request $request)
    {
        $proveedores = InventarioProveedores::where('activo', 1)->orderby('id_proveedor')->select('id_proveedor','nombre_comercial','numero_ruc','numero_cedula','id_tipo_proveedor')->get();
        $clasificaciones = ComprasClasificacionCompras::where('activo',1)
            ->select('id_clasificacion_servicio','descripcion','id_cuenta_contable')
            ->with('clasificacionCompraCuentaContable')
           // ->with(['clasificacionCompraCuentaContable' => function($query) { $query->with('servicioCuentaContable');}])
           ->get();
        $monedas = CajaBancoMonedas::select('id_moneda','descripcion','codigo')->where('activo',1)->orderBy('id_moneda')->get();
        $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();


            return response()->json([
                'status' => 'success',
                'result' => [
                    'proveedores' => $proveedores,
                    'clasificaciones' => $clasificaciones,
                    'monedas' => $monedas,
                    'logo_empresa' => $logo_empresa->file_thumbnail
                ],
                'messages' => null
            ]);

    }


	
	 /**
     * Get List of Ordenes
     *
     * @access  public
     * @param   
     * @return  json(array)
     */


    public function obtenerOrdenCompra(Request $request, ComprasOrdenCompraPS $orden)
    {
		$rules = [
            'id_orden_servicio' => 'required|integer|min:1',
            'cargar_dependencias' => 'required|boolean',
		];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $orden = $orden->obtenerOrdenCompra($request);

            if(!empty($orden[0])){

                if($request->cargar_dependencias){
                    $proveedores = InventarioProveedores::where('activo', 1)->orderby('id_proveedor')->get();
                    $clasificaciones = ComprasClasificacionCompras::where('activo',1)
                        ->select('id_clasificacion_servicio','descripcion','id_cuenta_contable')
                        ->with('clasificacionCompraCuentaContable')
                        // ->with(['clasificacionCompraCuentaContable' => function($query) { $query->with('servicioCuentaContable');}])
                        ->get();
                    $monedas = CajaBancoMonedas::select('id_moneda','descripcion','codigo')->where('activo',1)->orderBy('id_moneda')->get();

                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'orden' => $orden[0],
                            'proveedores' => $proveedores,
                            'clasificaciones' => $clasificaciones,
                            'monedas' => $monedas,
                        ],
                        'messages' => null
                    ]);
                }else{
                    return response()->json([
                    'status' => 'success',
                    'result' => [
                        'orden' => $orden[0]
                    ],
                    'messages' => null
                ]);
                }
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_orden_servicio'=>["Datos no encontrados"]),
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
    
  	 /**
     * Create a New User
     *
     * @access 	public
     * @param 	
     * @return 	json(string)
     */

	public function registrar(Request $request)
	{ 

        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.descripcion.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];


    	$rules = [
            'atencion' => 'string|max:100|nullable',
            'email_proveedor' => 'string|max:100|nullable',
            'telefono_proveedor' => 'string|max:50|nullable',
            'referencia_solicitud' => 'string|max:255|nullable',
            'area_proveedor' => 'string|max:100|nullable',
            'es_borrador' => 'required|boolean',
            'f_orden_servicio' => 'required|date',

            'direccion' => 'string|max:100|nullable',


            'total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'porcentaje_iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'plazo_credito'=> 'required|integer|min:0|max:60',

            'nota' => 'string|max:500|nullable',
            'tiempo_entrega' => 'required|integer|min:1',
            'id_condicion_pago'=> 'required|integer|min:1|max:3',
            'id_medio_pago'=> 'required|integer|min:1|max:6',

            'proveedor' => 'required|array|min:1',
            'proveedor.id_proveedor' =>'required|integer|exists:pgsql.inventario.proveedores,id_proveedor',

            'moneda' => 'required|array|min:1',
            'moneda.id_moneda' =>'required|integer|exists:pgsql.cjabnco.monedas,id_moneda',

            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.clasificacionx.id_clasificacion_servicio' => 'required|integer|exists:pgsql.compra.clasificacion_compra,id_clasificacion_servicio',
            'detalleProductos.*.descripcion' => 'required|string|max:100',
            'detalleProductos.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'detalleProductos.*.descuento' => 'required|integer|min:0|max:100',
            'detalleProductos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',

            'tipo_compra'=> 'required|integer|min:1|max:2',

		];

		$validator = Validator::make($request->all(), $rules,$messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
			$orden = new ComprasOrdenCompraPS;

            $orden->id_proveedor = $request->proveedor['id_proveedor'];
            $orden->id_moneda = $request->moneda['id_moneda'];
            $orden->atencion = $request->atencion;
            $orden->email_proveedor = $request->email_proveedor;
            $orden->telefono_proveedor = $request->telefono_proveedor;
            $orden->referencia_solicitud = $request->referencia_solicitud;
            $orden->area_proveedor = $request->area_proveedor;
            $orden->f_orden_servicio = $request->f_orden_servicio;
            $orden->direccion = $request->direccion;
            $orden->nota = $request->nota;
            $orden->tiempo_entrega = $request->tiempo_entrega;
            $orden->id_condicion_pago = $request->id_condicion_pago;
            $orden->id_medio_pago = $request->id_medio_pago;
            $orden->tipo_compra = $request->tipo_compra;
            $orden->plazo_credito = $request->plazo_credito;
            $orden->total = $request->total;
            $orden->porcentaje_iva = $request->porcentaje_iva;
            $orden->iva = $request->iva;
			$orden->u_creacion = Auth::user()->usuario;
            $request->es_borrador == 'true' ? $orden->estado = 99:  $orden->estado = 1;
            $orden->save();

            $i = 1;
			foreach ($request->detalleProductos as $producto) {
                $orden_producto = new ComprasOrdenCompraPSListado;
                $orden_producto->numero_item = $i;
				$orden_producto->id_orden_servicio = $orden->id_orden_servicio;
                $orden_producto->descripcion = $producto['descripcion'];
                $orden_producto->precio = $producto['precio'];
                $orden_producto->cantidad = $producto['cantidad'];
                $orden_producto->descuento = $producto['descuento'];
                $orden_producto->subtotal = $producto['total'];
                $orden_producto->id_clasificacion_servicio = $producto['clasificacionx']['id_clasificacion_servicio'];
				$orden_producto->save();
				$i++;
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


    public function actualizar(Request $request)
    {
        $messages = [
            'orden_compra_listado.min' => 'Se requiere agregar un producto por lo menos.',
            'orden_compra_listado.*.descripcion.required' => 'Seleccione un producto válido',
            'orden_compra_listado.*.precio.min' => 'El precio debe ser mayor que cero',
            'orden_compra_listado.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            'id_orden_servicio' => 'required|integer|exists:pgsql.compra.ordenes_servicios,id_orden_servicio',
            'atencion' => 'string|max:100|nullable',
            'email_proveedor' => 'string|max:100|nullable',
            'telefono_proveedor' => 'string|max:50|nullable',
            'referencia_solicitud' => 'string|max:255|nullable',
            'area_proveedor' => 'string|max:100|nullable',
            'es_borrador' => 'required|boolean',
            'f_orden_servicio' => 'required|date',

            'direccion' => 'string|max:100|nullable',

            'total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'porcentaje_iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',

            'nota' => 'string|max:500|nullable',
            'tiempo_entrega' => 'required|integer|min:1',

            'id_condicion_pago'=> 'required|integer|min:1|max:2',
            'id_medio_pago'=> 'required|integer|min:1|max:6',

            'tipo_compra'=> 'required|integer|min:1|max:2',
            'plazo_credito'=> 'required|integer|min:0|max:60',

            'orden_compra_proveedor' => 'required|array|min:1',
            'orden_compra_proveedor.id_proveedor' =>'required|integer|exists:pgsql.inventario.proveedores,id_proveedor',

            'orden_compra_moneda' => 'required|array|min:1',
            'orden_compra_moneda.id_moneda' =>'required|integer|exists:pgsql.cjabnco.monedas,id_moneda',

            'orden_compra_listado' => 'required|array|min:1',
            'orden_compra_listado.*.servicio_clasificacion.id_clasificacion_servicio' => 'required|integer|exists:pgsql.compra.clasificacion_compra,id_clasificacion_servicio',
            'orden_compra_listado.*.descripcion' => 'required|string|max:100',
            'orden_compra_listado.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'orden_compra_listado.*.descuento' => 'required|integer|min:0|max:100',
            'orden_compra_listado.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:1',


        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{


                DB::beginTransaction();
                $orden = ComprasOrdenCompraPS::find($request->id_orden_servicio);

                if($orden->estado == 99){

                    $orden->id_proveedor = $request->orden_compra_proveedor['id_proveedor'];
                    $orden->id_moneda = $request->orden_compra_moneda['id_moneda'];
                    $orden->atencion = $request->atencion;
                    $orden->email_proveedor = $request->email_proveedor;
                    $orden->telefono_proveedor = $request->telefono_proveedor;
                    $orden->referencia_solicitud = $request->referencia_solicitud;
                    $orden->area_proveedor = $request->area_proveedor;
                    $orden->f_orden_servicio = $request->f_orden_servicio;
                    $orden->direccion = $request->direccion;
                    $orden->nota = $request->nota;
                    $orden->tiempo_entrega = $request->tiempo_entrega;
                    $orden->id_condicion_pago = $request->id_condicion_pago;
                    $orden->id_medio_pago = $request->id_medio_pago;
                    $orden->tipo_compra = $request->tipo_compra;
                    $orden->plazo_credito = $request->plazo_credito;
                    $orden->iva = $request->iva;
                    $orden->total = $request->total;
                    $orden->porcentaje_iva = $request->porcentaje_iva;
                    $orden->u_creacion = Auth::user()->usuario;
                    $request->es_borrador == 'true' ? $orden->estado = 99:  $orden->estado = 1;
                    $orden->save();

                    ComprasOrdenCompraPSListado::where('id_orden_servicio', $request->id_orden_servicio)->delete();

                    $i = 1;
                    foreach ($request->orden_compra_listado as $producto) {
                        $orden_producto = new ComprasOrdenCompraPSListado;
                        $orden_producto->numero_item = $i;
                        $orden_producto->id_orden_servicio = $orden->id_orden_servicio;
                        $orden_producto->descripcion = $producto['descripcion'];
                        $orden_producto->precio = $producto['precio'];
                        $orden_producto->cantidad = $producto['cantidad'];
                        $orden_producto->descuento = $producto['descuento'];
                        $orden_producto->subtotal = $producto['total'];
                        $orden_producto->id_clasificacion_servicio = $producto['servicio_clasificacion']['id_clasificacion_servicio'];
                        $orden_producto->save();
                        $i++;
                    }

                    DB::commit();
                    return response()->json([
                        'status' => 'success',
                        'result' => null,
                        'messages' => null
                    ]);

                }else{
                    DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => 'La orden de compra ha sido modificada prevamente, no se pueden grabar los cambios',
                        'messages' => null
                    ]);
                }

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

    /**
     * Cambiar Estado Entrada
     *
     * @access 	public
     * @param
     * @return 	json(string)
     */

    public function cambiarEstado(Request $request)
    {

        $messages = [
            'numero_factura.required_if' => 'El número de factura del proveedor | acreedor es requerido',
        ];

        $rules = [
            'id_orden_servicio' => 'required|integer|exists:pgsql.compra.ordenes_servicios,id_orden_servicio',
            'estado' => 'required|integer|min:0',

            'total' => 'required_if:estado,3|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'iva' => 'required_if:estado,3|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'id_condicion_pago'=> 'required_if:estado,3|integer|min:1|max:2',
            'plazo_credito'=> 'required_if:estado,3|integer|min:0|max:60',
            'porcentaje_iva' => 'required_if:estado,3|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',

            'numero_factura' => 'required_if:estado,3|string|max:50|nullable',
            'productos' => 'required|array|min:1',
            'productos.*.descripcion' => 'required|string|max:100',
            'productos.*.id_orden_servicio_detalle' => 'required|integer',
            'productos.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'productos.*.descuento' => 'required|integer|min:0|max:100',
            'productos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:1',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {
            $orden = ComprasOrdenCompraPS::find($request->id_orden_servicio);
            $respuesta = response()->json([
                'status' => 'success',
                'result' => null,
                'messages' => null
            ]);

           //print_r($orden);
            if($request->estado >= 0 && $request->estado <= 4 && $orden->estado <> $request->estado){

                DB::beginTransaction();
                $estado_org = $orden->estado;


                    if( ($estado_org == 1 && ($request->estado == 2|| $request->estado== 0))
                        || ($estado_org == 2 && ($request->estado == 3|| $request->estado == 0)
                            || ($estado_org == 3 && ($request->estado == 4|| $request->estado == 0))
                                || ($estado_org == 4 && ($request->estado == 5|| $request->estado == 0)))) {
                        $orden->estado = $request->estado;
                        $orden->numero_factura = $request->numero_factura;
                        $orden->total = $request->total;
                        $orden->iva = $request->iva;
                        $orden->porcentaje_iva = $request->porcentaje_iva;
                        $orden->id_condicion_pago = $request->id_condicion_pago;
                        $orden->plazo_credito = $request->plazo_credito;

                        $orden->save();

                        if($estado_org == 2 && $request->estado == 3){

                            //$total_descuento = 0;
                        foreach ($request->productos as $producto) {
                            $orden_producto = ComprasOrdenCompraPSListado::find($producto['id_orden_servicio_detalle']);
                            $orden_producto->precio_facturado = $producto['precio'];
                            $orden_producto->cantidad_facturado = $producto['cantidad'];
                            $orden_producto->descuento = $producto['descuento'];
                            $orden_producto->save();
                            //$total_descuento=$total_descuento+(($orden_producto->precio_facturado* $orden_producto->cantidad_facturado)*round($orden_producto->descuento/100,2));
                        }
                            $tasa =1;
                            if($orden->id_moneda != 1){
                                $tasaObj = CajaBancoTasasCambios::select('tasa')->where('fecha',date("Y-m-d"))->first();
                                $tasa = $tasaObj->tasa;
                            }

                            $cuentas_x_pagar = new CuentasXPagarCuentasXPagar();
                            $cuentas_x_pagar->id_proveedor =$orden->id_proveedor;
                            $cuentas_x_pagar->id_tipo_documento = 1;//Orden compra productos y servicios
                            $cuentas_x_pagar->no_documento_origen = $orden->numero_factura;
                            $cuentas_x_pagar->es_registro_importado = false;
                            $cuentas_x_pagar->id_moneda = $orden->id_moneda;
                            $cuentas_x_pagar->identificador_origen = $orden->id_orden_servicio;
                            $cuentas_x_pagar->fecha_movimiento = $orden->f_orden_servicio;
                            $cuentas_x_pagar->monto_movimiento = ($orden->total+$orden->iva)*$tasa*-1;
                            $cuentas_x_pagar->saldo_actual = ($orden->total+$orden->iva)*$tasa;
                            $cuentas_x_pagar->monto_movimiento_org = ($orden->total+$orden->iva)*-1;
                            $cuentas_x_pagar->saldo_actual_org = $orden->total+$orden->iva;
                            $cuentas_x_pagar->fecha_vencimiento = date('Y-m-d', strtotime($orden->f_orden_servicio.' + '.($orden->plazo_credito).' days'));
                            $cuentas_x_pagar->descripcion_movimiento = 'Registro del Monto de la Factura de compra No. '.$orden->numero_factura;
                            $cuentas_x_pagar->usuario_registra =$orden->u_creacion;
                            $cuentas_x_pagar->estado = 1;
                            $cuentas_x_pagar->save();

                        /*INICIA movimiento contable - mercancia en transito*/

                        $documento = new ContabilidadDocumentosContables;
                        $tipo = ContabilidadTiposDocumentos::find(1);
                        $fecha= date("Y-m-d H:i:s");
                        $codigo = $documento->obtenerCodigoDocumento(array('id_tipo_doc'=>1,'fecha_doc'=>$fecha));



                        $nuevo_codigo = json_decode($codigo[0]);

                        date_default_timezone_set('America/Managua');

                        $documento->num_documento = $tipo->prefijo.'-'.$nuevo_codigo->secuencia;
                        $documento->fecha_emision =  date('Y-m-d H:i:s');//$orden->f_orden_servicio;
                        $documento->codigo_documento = $nuevo_codigo->secuencia;
                        $date = DateTime::createFromFormat("Y-m-d H:i:s", $documento->fecha_emision);
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

                        $periodo_mes = ContabilidadPeriodoMeses::where('id_periodo_fiscal',$periodo[0]->id_periodo_fiscal)->where('mes',$date->format("n"))->first();

                        if(empty($periodo_mes)){
                            return response()->json([
                                'status' => 'error',
                                'result' =>   array('fecha_emision'=>["El mes ".$date->format("F")." no se encuentra registrado, por favor consulte al administrador"]),
                                'messages' => null
                            ]);
                            exit;
                        }

                        if($periodo_mes->estado == 2 ){
                            return response()->json([
                                'status' => 'error',
                                'result' =>   array('fecha_emision'=>["El mes ".config('global.meses')[$periodo_mes->mes-1]." es inválido, ya que se encuentra en estado COMPLETADO"]),
                                'messages' => null
                            ]);
                            exit;
                        }

                        $documento->id_periodo_fiscal = $periodo[0]->id_periodo_fiscal;
                        $documento->id_tipo_doc = 1;
                        $documento->valor = $request->total;
                        $documento->concepto = 'Registramos compra a proveedor | acreedor, OC-'.$orden->id_orden_servicio.'. Factura proveedor: '.$request->numero_factura;
                        $documento->id_moneda = 1;
                        $documento->u_creacion = Auth::user()->usuario;
                        $documento->estado = 1;
                        $documento->save();

                        ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');
                        foreach ($request->productos as $producto) {
                            $orden_producto = ComprasOrdenCompraPSListado::find($producto['id_orden_servicio_detalle'])->with('servicioClasificacion')->first();

                            //print_r($orden_producto->servicioClasificacion['id_cuenta_contable']);

                            $documento_cuenta_contableCCompra = new ContabilidadDocumentosMovimientos;
                            $documento_cuenta_contableCCompra->id_documento = $documento->id_documento;
                            $documento_cuenta_contableCCompra->id_moneda = $orden->id_moneda;
                            $documento_cuenta_contableCCompra->concepto = $documento->concepto;
                            $documento_cuenta_contableCCompra->debe = round($producto['subtotal']*round(1-($producto['descuento']/100),2),2) *$tasa;
                            $documento_cuenta_contableCCompra->haber = 0;
                            $documento_cuenta_contableCCompra->debe_org = round($producto['subtotal']*round(1-($producto['descuento']/100),2),2);
                            $documento_cuenta_contableCCompra->haber_org = 0;
                            $documento_cuenta_contableCCompra->id_centro =  null;
                            $documento_cuenta_contableCCompra->id_cuenta_contable = $orden_producto->servicioClasificacion['id_cuenta_contable'];;
                            $documento_cuenta_contableCCompra->cta_contable = '0000-00-000';
                            $documento_cuenta_contableCCompra->cta_contable_padre = '0000-00-000';
                            $documento_cuenta_contableCCompra->save();

                        }

                            $documento_cuenta_contableIVA = new ContabilidadDocumentosMovimientos;
                            $documento_cuenta_contableIVA->id_documento = $documento->id_documento;
                            $documento_cuenta_contableIVA->id_moneda = $orden->id_moneda;
                            $documento_cuenta_contableIVA->concepto = $documento->concepto;
                            $documento_cuenta_contableIVA->debe = $orden->iva *$tasa;
                            $documento_cuenta_contableIVA->haber = 0;
                            $documento_cuenta_contableIVA->debe_org = $orden->iva;
                            $documento_cuenta_contableIVA->haber_org = 0;
                            $documento_cuenta_contableIVA->id_centro =  null;
                            $documento_cuenta_contableIVA->id_cuenta_contable = 128;
                            $documento_cuenta_contableIVA->cta_contable = '1142-01-000';
                            $documento_cuenta_contableIVA->cta_contable_padre = '1142-00-000';


                            $documento_cuenta_contableIVA->save();

                        $documento_cuenta_contableMcTr = new ContabilidadDocumentosMovimientos;
                        $documento_cuenta_contableMcTr->id_documento = $documento->id_documento;
                        $documento_cuenta_contableMcTr->id_moneda = $orden->id_moneda;
                        $documento_cuenta_contableMcTr->concepto = $documento->concepto;
                        $documento_cuenta_contableMcTr->debe = 0;
                        $documento_cuenta_contableMcTr->haber = ($request->total+$orden->iva) *$tasa;
                        $documento_cuenta_contableMcTr->debe_org = 0;
                        $documento_cuenta_contableMcTr->haber_org = $request->total+$orden->iva;
                        $documento_cuenta_contableMcTr->id_centro =  null;
                        $tipo_proveedor = InventarioProveedores::select('clasificacion_contable')->where('id_proveedor',$orden->id_proveedor)->first();

                        if($tipo_proveedor['clasificacion_contable']===1){ ///PROVEEDORES
                            $documento_cuenta_contableMcTr->id_cuenta_contable =74;
                            $documento_cuenta_contableMcTr->cta_contable = '2111-00-000';
                            $documento_cuenta_contableMcTr->cta_contable_padre = '2110-00-000';
                        }elseif($tipo_proveedor['clasificacion_contable']===2){////ACREEDORES
                            $documento_cuenta_contableMcTr->id_cuenta_contable =75;
                            $documento_cuenta_contableMcTr->cta_contable = '2112-00-000';
                            $documento_cuenta_contableMcTr->cta_contable_padre = '2110-00-000';
                        }

                        $documento_cuenta_contableMcTr->save();


                        /* TERMINA MOVIMIENTO CONTABLE*/
                        }

                        DB::commit();
                        return $respuesta;

                    }else{
                        DB::rollBack();
                        $respuesta = response()->json([
                            'status' => 'error',
                            'result' => 'Error al cambiar el estado de la orden de compras ('. $estado_org.' a '.$request->estado.' )',
                            'messages' => null
                        ]);
                    }
            }else{
                $respuesta=  response()->json([
                    'status' => 'error',
                    'result' => 'Error al cambiar el estado de la orden de compras',
                    'messages' => null
                ]);
            }

            return $respuesta;

        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }


    public function reporte($id_orden_servicio)
    {
        // echo $ext;
        $ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            $input = 'C:/xampp7/htdocs/resources/reports/OrdenDeCompra';
            $output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'OrdenDeCompra';
            //$input = '/var/www/html/resources/reports/OrdenDeCompra';
            //$output = '/var/www/html/resources/reports/'.$hora_actual.'OrdenDeCompra';
             $url = '/var/www/html/resources/reports/';
            //$url = 'C:/xampp7/htdocs/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_orden_servicio' => $id_orden_servicio,
                    //  'directorioReports'=>$url
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'OrdenDeCompra.' . $ext, $headers);
        }else{
            return '';
        }
    }
    
}

