<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\CajaBancoMonedas;
use App\Models\CajaBancoTasasCambios;
use App\Models\ComprasOrdenCompra;
use App\Models\ComprasOrdenCompraPS;
use App\Models\ComprasSolicitudCompra;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\CuentasXPagarCuentasXPagar;
use App\Models\InventarioBodegaProductos;
use App\Models\InventarioBodegas;
use App\Models\InventarioEntradaProductos;
use App\Models\InventarioEntradaProductosCons;
use App\Models\InventarioEntradas;
use App\Models\InventarioEntradasInicial;
use App\Models\InventarioProveedores;
use Hash, Validator,Auth,DateTime;
use App\Models\ComprasOrdenCompraProductos;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class ComprasOrdenCompraController extends Controller
{

    public function obtenerFacturasCompraProveedor(Request $request)
    {
        $ordenes_compra_baterias = ComprasOrdenCompra::select(DB::RAW('1 as tipo'),'id_orden_compra as identificador',
            'id_proveedor','numero_factura','id_moneda',DB::raw('round(total+iva,2) as total'),DB::raw("CONCAT(numero_factura,' ( Monto: ',(select m.codigo from cjabnco.monedas m where m.id_moneda=compra.ordenes_compras.id_moneda),round(total+iva,2),')') AS text")
        )
            ->where('id_proveedor',$request->id_proveedor)->where('estado',4)->get();

        $ordenes_compra_servicios = ComprasOrdenCompraPS::select(DB::RAW('2 as tipo'),'id_orden_servicio as identificador',
            'id_proveedor','numero_factura','id_moneda', DB::raw('round(total+iva,2) as total'),DB::raw("CONCAT(numero_factura,' ( Monto: ',(select m.codigo from cjabnco.monedas m where m.id_moneda=compra.ordenes_servicios.id_moneda),round(total+iva,2),')') AS text")
    )
        ->where('id_proveedor',$request->id_proveedor)->where('estado',4)->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'ordenes_compra_baterias'=>$ordenes_compra_baterias,
                  'ordenes_compra_servicios'=>$ordenes_compra_servicios,

            ],
            'messages' => null
        ]);
    }

	/**
     * Get List of Entradas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, ComprasOrdenCompra $ordenes)
    {
        $ordenes = $ordenes->obtenerOrdenesCompras($request);

        foreach($ordenes as $orden ){
            //   print_r($orden_compra);
            $items = collect($orden->ordenCompraProductos);

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

    public function buscar(Request $request, ComprasOrdenCompra $ordenes_compra)
    {
        $ordenes_compra = $ordenes_compra->buscar($request);
        return response()->json([
            'results' => $ordenes_compra
        ]);
    }

    public function nueva(Request $request)
    {
        $proveedores = InventarioProveedores::where('activo', 1)->orderby('id_proveedor')->select('id_proveedor','nombre_comercial','numero_ruc','numero_cedula')->get();
        $bodegas = InventarioBodegas::where('activo', 1)->get();
        $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();
        $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();


        if(!empty($request->id_solicitud_compra)){
            $solicitud = ComprasSolicitudCompra::where('id_solicitud_compra',$request->id_solicitud_compra)->with(['solicitudProductos' => function($query) {
                $query->with('solicitudProducto');
            }])->with('solicitudMoneda')->with('solicitudBodega')->first();

            if(!empty($solicitud)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'proveedores' => $proveedores,
                        'bodegas' => $bodegas,
                        'monedas' => $monedas,
                        'solicitud' => $solicitud,
                        'logo_empresa' => $logo_empresa->file_thumbnail
                    ],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_solicitud_compra'=>["Datos no encontrados"]),
                    'messages' => null
                ]);
            }

        }else{
            return response()->json([
                'status' => 'success',
                'result' => [
                    'proveedores' => $proveedores,
                    'logo_empresa' => $logo_empresa->file_thumbnail
                ],
                'messages' => null
            ]);
        }
    }


	
	 /**
     * Get List of Ordenes
     *
     * @access  public
     * @param   
     * @return  json(array)
     */


    public function obtenerOrdenCompra(Request $request, ComprasOrdenCompra $orden)
    {
		$rules = [
            'id_orden_compra' => 'required|integer|min:1',
            'cargar_dependencias' => 'required|boolean',
		];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $orden = $orden->obtenerOrdenCompra($request);

            if(!empty($orden)){

                if($request->cargar_dependencias){
                    $proveedores = InventarioProveedores::where('activo', 1)->orderby('id_proveedor')->get();
                    $bodegas = InventarioBodegas::where('activo', 1)->get();
                    $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();

                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'orden' => $orden,
                            'proveedores' => $proveedores,
                            'bodegas' => $bodegas,
                            'monedas' => $monedas,
                        ],
                        'messages' => null
                    ]);
                }else{
                    return response()->json([
                    'status' => 'success',
                    'result' => [
                        'orden' => $orden
                    ],
                    'messages' => null
                ]);
                }
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_orden_compra'=>["Datos no encontrados"]),
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
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
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
            'f_orden_compra' => 'required|date',

            'total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'porcentaje_iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'plazo_credito'=> 'required|integer|min:0|max:60',

            'direccion' => 'string|max:100|nullable',
            'condicion_envio' => 'string|max:50|nullable',
            'nota' => 'string|max:500|nullable',
            'tiempo_entrega' => 'required|integer|min:1',
            'id_condicion_pago'=> 'required|integer|min:1|max:3',
            'id_medio_pago'=> 'required|integer|min:1|max:6',

            'proveedor' => 'required|array|min:1',
            'proveedor.id_proveedor' =>'required|integer|exists:pgsql.inventario.proveedores,id_proveedor',

            'bodega' => 'nullable|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',

            'moneda' => 'required|array|min:1',
            'moneda.id_moneda' => 'required|integer|min:1',

            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'detalleProductos.*.descuento' => 'required|integer|min:0|max:100',
            'detalleProductos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',

            'tipo_compra'=> 'required|integer|min:1|max:2',

		];

		$validator = Validator::make($request->all(), $rules,$messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
			$orden = new ComprasOrdenCompra;

            $orden->id_proveedor = $request->proveedor['id_proveedor'];
            $orden->id_bodega = $request->bodega['id_bodega'];
            $orden->id_moneda = $request->moneda['id_moneda'];
            $orden->atencion = $request->atencion;
            $orden->email_proveedor = $request->email_proveedor;
            $orden->telefono_proveedor = $request->telefono_proveedor;
            $orden->referencia_solicitud = $request->referencia_solicitud;
            $orden->area_proveedor = $request->area_proveedor;
            $orden->id_solicitud_compra = $request->id_solicitud_compra;
            $orden->f_orden_compra = $request->f_orden_compra;
            $orden->condicion_envio = $request->condicion_envio;
            $orden->direccion = $request->direccion;
            $orden->numero_factura = '';

                $orden->iva = $request->iva;
                $orden->total = $request->total;
                $orden->porcentaje_iva = $request->porcentaje_iva;
                $orden->plazo_credito = $request->plazo_credito;

            $orden->area_proveedor = $request->area_proveedor;

            $orden->nota = $request->nota;
            $orden->tiempo_entrega = $request->tiempo_entrega;

            $orden->id_condicion_pago = $request->id_condicion_pago;
            $orden->id_medio_pago = $request->id_medio_pago;

            $orden->tipo_compra = $request->tipo_compra;

			$orden->u_creacion = Auth::user()->usuario;
            $request->es_borrador == 'true' ? $orden->estado = 99:  $orden->estado = 1;
            $orden->save();

            $i = 1;
			foreach ($request->detalleProductos as $producto) {
                $orden_producto = new ComprasOrdenCompraProductos;
                $orden_producto->numero_item = $i;
				$orden_producto->id_orden_compra = $orden->id_orden_compra;
                $orden_producto->id_producto = $producto['productox']['id_producto'];
                $orden_producto->precio = $producto['precio'];
                $orden_producto->cantidad = $producto['cantidad'];
                $orden_producto->descuento = $producto['descuento'];
                $orden_producto->subtotal = $producto['total'];
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
            'orden_compra_productos.min' => 'Se requiere agregar un producto por lo menos.',
            'orden_compra_productos.*.id_producto.required' => 'Seleccione un producto válido',
            'orden_compra_productos.*.precio.min' => 'El precio debe ser mayor que cero',
            'orden_compra_productos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            'id_orden_compra' => 'required|integer|exists:pgsql.compra.ordenes_compras,id_orden_compra',
            'atencion' => 'string|max:100|nullable',
            'email_proveedor' => 'string|max:100|nullable',
            'telefono_proveedor' => 'string|max:50|nullable',
            'referencia_solicitud' => 'string|max:255|nullable',
            'area_proveedor' => 'string|max:100|nullable',
            'es_borrador' => 'required|boolean',
            'f_orden_compra' => 'required|date',

            'direccion' => 'string|max:100|nullable',
            'condicion_envio' => 'string|max:50|nullable',
            'nota' => 'string|max:500|nullable',
            'tiempo_entrega' => 'required|integer|min:1',

            'id_condicion_pago'=> 'required|integer|min:1|max:2',
            'id_medio_pago'=> 'required|integer|min:1|max:6',

            'orden_compra_bodega' => 'nullable|array|min:1',
            'orden_compra_bodega.id_bodega' => 'required|integer|min:1',

            'total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'porcentaje_iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'plazo_credito'=> 'required|integer|min:0|max:60',

            'orden_compra_moneda' => 'required|array|min:1',
            'orden_compra_moneda.id_moneda' => 'required|integer|min:1',

            'tipo_compra'=> 'required|integer|min:1|max:2',

            'orden_compra_proveedor' => 'required|array|min:1',
            'orden_compra_proveedor.id_proveedor' =>'required|integer|exists:pgsql.inventario.proveedores,id_proveedor',

            'orden_compra_productos' => 'required|array|min:1',
            'orden_compra_productos.*.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'orden_compra_productos.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'orden_compra_productos.*.descuento' => 'required|integer|min:0|max:100',
            'orden_compra_productos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:1',

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{


                DB::beginTransaction();
                $orden = ComprasOrdenCompra::find($request->id_orden_compra);

                if($orden->estado == 99){

                    $orden->id_proveedor = $request->orden_compra_proveedor['id_proveedor'];
                    $orden->id_bodega = $request->orden_compra_bodega['id_bodega'];
                    $orden->id_moneda = $request->orden_compra_moneda['id_moneda'];

                    $orden->atencion = $request->atencion;
                    $orden->email_proveedor = $request->email_proveedor;
                    $orden->telefono_proveedor = $request->telefono_proveedor;
                    $orden->referencia_solicitud = $request->referencia_solicitud;
                    $orden->area_proveedor = $request->area_proveedor;
                    $orden->id_solicitud_compra = $request->id_solicitud_compra;
                    $orden->f_orden_compra = $request->f_orden_compra;

                    $orden->condicion_envio = $request->condicion_envio;
                    $orden->direccion = $request->direccion;
                    $orden->nota = $request->nota;
                    $orden->tiempo_entrega = $request->tiempo_entrega;


                    $orden->iva = $request->iva;
                    $orden->total = $request->total;
                    $orden->porcentaje_iva = $request->porcentaje_iva;
                    $orden->plazo_credito = $request->plazo_credito;

                    $orden->id_condicion_pago = $request->id_condicion_pago;
                    $orden->id_medio_pago = $request->id_medio_pago;

                    $orden->tipo_compra = $request->tipo_compra;

                    $orden->u_creacion = Auth::user()->usuario;
                    $request->es_borrador == 'true' ? $orden->estado = 99:  $orden->estado = 1;
                    $orden->save();

                    ComprasOrdenCompraProductos::where('id_orden_compra', $request->id_orden_compra)->delete();

                    $i = 1;
                    foreach ($request->orden_compra_productos as $producto) {
                        $orden_producto = new ComprasOrdenCompraProductos;
                        $orden_producto->numero_item = $i;
                        $orden_producto->id_orden_compra = $orden->id_orden_compra;
                        $orden_producto->id_producto = $producto['id_producto'];
                        $orden_producto->precio = $producto['precio'];
                        $orden_producto->cantidad = $producto['cantidad'];
                        $orden_producto->descuento = $producto['descuento'];
                        $orden_producto->subtotal = $producto['total'];
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
                        'result' => 'La orden de compra ha sido modificada previamente, no se pueden grabar los cambios',
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
     * @return 	JsonResponse(string)
     */

    public function cambiarEstado(Request $request)
    {

        $messages = [
            'numero_factura.required_if' => 'El campo Número Factura es requerido cuando se confirma facturación',
        ];

        $rules = [
            'id_orden_compra' => 'required|integer|exists:pgsql.compra.ordenes_compras,id_orden_compra',
            'estado' => 'required|integer|min:0',

            'total' => 'required_if:estado,3|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'iva' => 'required_if:estado,3|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.00',
            'id_condicion_pago'=> 'required_if:estado,3|integer|min:1|max:2',
            'plazo_credito'=> 'required_if:estado,3|integer|min:0|max:60',
            'porcentaje_iva' => 'required_if:estado,3|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',

            'numero_factura' => 'required_if:estado,3|string|max:50|nullable',
            'productos' => 'required|array|min:1',
            'productos.*.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'productos.*.id_orden_compra_producto' => 'required|integer',
            'productos.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'productos.*.descuento' => 'required|integer|min:0|max:100',
            'productos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:1',

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {
            $orden = ComprasOrdenCompra::find($request->id_orden_compra);
            $respuesta = response()->json([
                'status' => 'success',
                'result' => null,
                'messages' => null
            ]);
            if($request->estado >= 0 && $request->estado <= 4 && $orden->estado <> $request->estado){

                DB::beginTransaction();
                $estado_org = $orden->estado;

                    if( ($estado_org == 1 && ($request->estado == 2|| $request->estado== 0))
                        || ($estado_org == 2 && ($request->estado == 3|| $request->estado == 0)
                            || ($estado_org == 3 && ($request->estado == 4|| $request->estado == 0))
                                || ($estado_org == 4 && ($request->estado == 5|| $request->estado == 0)))) {


                        try{

                            $orden->estado = $request->estado;
                            $orden->numero_factura = $request->numero_factura;
                            $orden->total = $request->total;
                            $orden->iva = $request->iva;
                            $orden->porcentaje_iva = $request->porcentaje_iva;
                            $orden->id_condicion_pago = $request->id_condicion_pago;
                            $orden->plazo_credito = $request->plazo_credito;
                            $orden->save();

                            if($estado_org == 3 && $request->estado == 4){

                                /*$entrada = new InventarioEntradas;
                                $entrada->codigo_entrada = InventarioEntradas::max('id_entrada') + 1;
                                $entrada->id_tipo_entrada = 1;
                                $entrada->fecha_entrada = date('Y-m-d');
                                $entrada->id_proveedor = null;
                                $entrada->id_bodega = $orden->id_bodega ;
                                $entrada->descripcion_entrada = 'Registramos entrada de productos por Factura de Importación No. ' . $orden->numero_factura;
                                $entrada->u_creacion = Auth::user()->usuario;;
                                $entrada->estado = 1;
                                $entrada->save();*/

                                /*$entrada_inicial = new InventarioEntradasInicial();
                                $entrada_inicial->id_bodega = $orden->id_bodega;
                                $entrada_inicial->fecha_entrada = date("Y-m-d H:i:s");
                                $entrada_inicial->estado = 1;
                                $entrada_inicial->tipo_productos = 3;
                                $entrada_inicial->id_trabajador = Auth::user()->id_empleado;
                                $entrada_inicial->save();*/

                                /*$orden->id_entrada = $entrada->id_entrada;
                                $orden->save();*/

                                /*foreach ($request->productos as $producto) {
                                    //$orden_producto = ComprasOrdenCompraProductos::find($producto['id_orden_compra_producto']);

                                        $entrada_producto = new InventarioEntradaProductos();
                                        $bodega_sub = InventarioBodegaProductos::where('id_bodega', $entrada->id_bodega)->where('id_producto', $producto['id_producto'])->first();
                                        if (!empty($bodega_sub)) {
                                            $entrada_producto->id_bodega_producto = $bodega_sub['id_bodega_producto'];
                                        } else {
                                            $nueva_bodega_sub = new InventarioBodegaProductos;
                                            $nueva_bodega_sub->id_bodega = $entrada->id_bodega;
                                            $nueva_bodega_sub->id_producto = $producto['id_producto'];
                                            $nueva_bodega_sub->cantidad = 0;
                                            $nueva_bodega_sub->u_creacion = $entrada->u_creacion;
                                            $nueva_bodega_sub->save();
                                            $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                                        }
                                        $entrada_producto->id_entrada = $entrada->id_entrada;
                                        $entrada_producto->codigo_producto = $producto['orden_compra_producto']['codigo_sistema'];
                                        $entrada_producto->descripcion_producto = $producto['orden_compra_producto']['descripcion'];
                                        $entrada_producto->unidad_medida = 'UNDS';
                                        $entrada_producto->precio_unitario = 0;
                                        $entrada_producto->cantidad_solicitada = (int)$producto['cantidad'];
                                        $entrada_producto->cantidad_recibida = 0;
                                        $entrada_producto->cantidad_faltante = 0;
                                        $entrada_producto->u_creacion = $entrada->u_creacion;
                                        $entrada_producto->save();

                                    /*$entrada_inicial_product = new InventarioEntradaProductosCons();
                                    $entrada_inicial_product->id_producto = $producto['id_producto'];
                                    $entrada_inicial_product->id_entrada_inicial = $entrada_inicial->id_entrada_inicial;
                                    $entrada_inicial_product->cantidad = (int)$producto['cantidad'];
                                    $entrada_inicial_product->save();*/

                                    /*$orden_producto = ComprasOrdenCompraProductos::find($producto['id_orden_compra_producto']);
                                    $orden_producto->id_entrada_producto = $entrada_producto->id_entrada_producto;
                                    $orden_producto->save();

                                }*/

                                //DB::commit();
                                return $respuesta;


                            }elseif($estado_org == 2 && $request->estado == 3){

                                foreach ($request->productos as $producto) {
                                    $orden_producto = ComprasOrdenCompraProductos::find($producto['id_orden_compra_producto']);
                                    $orden_producto->precio_facturado = $producto['precio'];
                                    $orden_producto->cantidad_facturado = $producto['cantidad'];
                                    $orden_producto->descuento = $producto['descuento'];
                                    $orden_producto->save();
                                }
                                $tasa =1;
                                if($orden->id_moneda != 1){
                                    $tasaObj = CajaBancoTasasCambios::select('tasa')->where('fecha',date("Y-m-d"))->first();
                                    $tasa = $tasaObj->tasa;
                                }

                                //print_r($orden);

                                $cuentas_x_pagar = new CuentasXPagarCuentasXPagar();
                                $cuentas_x_pagar->id_proveedor =$orden->id_proveedor;
                                $cuentas_x_pagar->id_tipo_documento = 2;//Orden de compra baterias
                                $cuentas_x_pagar->no_documento_origen = $orden->numero_factura;
                                $cuentas_x_pagar->es_registro_importado = false;
                                $cuentas_x_pagar->id_moneda = $orden->id_moneda;
                                $cuentas_x_pagar->identificador_origen = $orden->id_orden_compra;
                                $cuentas_x_pagar->fecha_movimiento = $orden->f_orden_compra;

                                $cuentas_x_pagar->monto_movimiento = ($orden->total+$orden->iva)*$tasa*-1;
                                $cuentas_x_pagar->saldo_actual = ($orden->total+$orden->iva)*$tasa;
                                $cuentas_x_pagar->monto_movimiento_org = ($orden->total+$orden->iva)*-1;
                                $cuentas_x_pagar->saldo_actual_org = $orden->total+$orden->iva;

                                $cuentas_x_pagar->fecha_vencimiento = date('Y-m-d', strtotime($orden->f_orden_compra. '  + '.($orden->plazo_credito).' days'));
                                $cuentas_x_pagar->descripcion_movimiento = 'Registro del Monto de la Factura de compra No. '.$orden->numero_factura;
                                $cuentas_x_pagar->usuario_registra =$orden->u_creacion;
                                $cuentas_x_pagar->estado = 1;
                                $cuentas_x_pagar->save();


                                /*INICIA movimiento contable - mercancia en transito*/

                                $documento = new ContabilidadDocumentosContables;
                                $tipo = ContabilidadTiposDocumentos::find(1);
                                $fecha= date("Y-m-d H:i:s");
                                $codigo = $documento->obtenerCodigoDocumento(array('id_tipo_doc'=>1,'fecha_doc'=>$fecha));

                                /*$tasa =1;
                                if($orden->id_moneda != 1){
                                    $tasaObj = CajaBancoTasasCambios::select('tasa')->where('fecha',date("Y-m-d"))->first();
                                    $tasa = $tasaObj->tasa;
                                }*/

                                $nuevo_codigo = json_decode($codigo[0]);

                                date_default_timezone_set('America/Managua');

                                $documento->num_documento = $tipo->prefijo.'-'.$nuevo_codigo->secuencia;
                                $documento->fecha_emision =  date('Y-m-d H:i:s');
                                $documento->codigo_documento = $nuevo_codigo->secuencia;


                                $date = DateTime::createFromFormat("Y-m-d H:i:s", $documento->fecha_emision);

                                $periodo = ContabilidadPeriodoFiscal::where('periodo',$date->format("Y"))->first();

                                if(empty($periodo)){
                                    return response()->json([
                                        'status' => 'error',
                                        'result' =>   array('fecha_emision'=>["El periodo ".$date->format("Y")." no se encuentra registrado, por favor consulte al administrador"]),
                                        'messages' => null
                                    ]);
                                    exit;
                                }

                                if($periodo->estado){
                                    return response()->json([
                                        'status' => 'error',
                                        'result' =>   array('fecha_emision'=>["El periodo ".$date->format("Y")." es inválido, ya que se encuentra en estado COMPLETADO"]),
                                        'messages' => null
                                    ]);
                                    exit;
                                }

                                $periodo_mes = ContabilidadPeriodoMeses::where('id_periodo_fiscal',$periodo->id_periodo_fiscal)->where('mes',$date->format("n"))->first();

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

                                $documento->id_periodo_fiscal = $periodo->id_periodo_fiscal;
                                $documento->id_tipo_doc = 1;
                                $documento->valor = $request->total;
                                $documento->concepto = 'Registramos mercancías en tránsito por orden de compra OC-'.$orden->id_orden_compra.'. Factura proveedor: '.$request->numero_factura;
                                $documento->id_moneda = $orden->id_moneda;
                                $documento->u_creacion = Auth::user()->usuario;
                                $documento->estado = 1;
                                $documento->save();
                                ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');

                                $documento_cuenta_contableMcTr = new ContabilidadDocumentosMovimientos;
                                $documento_cuenta_contableMcTr->id_documento = $documento->id_documento;
                                $documento_cuenta_contableMcTr->id_moneda= $orden->id_moneda;
                                $documento_cuenta_contableMcTr->concepto = $documento->concepto;
                                $documento_cuenta_contableMcTr->debe = ($orden->total+$orden->iva) *$tasa;
                                $documento_cuenta_contableMcTr->haber = 0;
                                $documento_cuenta_contableMcTr->debe_org = ($orden->total+$orden->iva);
                                $documento_cuenta_contableMcTr->haber_org = 0;
                                $documento_cuenta_contableMcTr->id_centro =  null;
                                $documento_cuenta_contableMcTr->id_cuenta_contable = 65;
                                $documento_cuenta_contableMcTr->cta_contable = '1133-00-000';
                                $documento_cuenta_contableMcTr->cta_contable_padre = '1130-00-000';
                                $documento_cuenta_contableMcTr->save();


                                $documento_cuenta_contableProve = new ContabilidadDocumentosMovimientos;
                                $documento_cuenta_contableProve->id_documento = $documento->id_documento;
                                $documento_cuenta_contableProve->id_moneda= $orden->id_moneda;
                                $documento_cuenta_contableProve->concepto = $documento->concepto;
                                $documento_cuenta_contableProve->debe = 0;
                                $documento_cuenta_contableProve->haber =  ($orden->total+$orden->iva) *$tasa;
                                $documento_cuenta_contableProve->debe_org = 0;
                                $documento_cuenta_contableProve->haber_org =  ($orden->total+$orden->iva);
                                $documento_cuenta_contableProve->id_centro =  null;

                                $tipo_proveedor = InventarioProveedores::select('clasificacion_contable')->where('id_proveedor',$orden->id_proveedor)->first();

                                if($tipo_proveedor['clasificacion_contable']===1){ ///PROVEEDORES
                                    $documento_cuenta_contableProve->id_cuenta_contable =74;
                                    $documento_cuenta_contableProve->cta_contable = '2111-00-000';
                                    $documento_cuenta_contableProve->cta_contable_padre = '2110-00-000';
                                }elseif($tipo_proveedor['clasificacion_contable']===2){////ACREEDORES
                                    $documento_cuenta_contableProve->id_cuenta_contable =75;
                                    $documento_cuenta_contableProve->cta_contable = '2112-00-000';
                                    $documento_cuenta_contableProve->cta_contable_padre = '2110-00-000';
                                }

                                $documento_cuenta_contableProve->save();

                                /* TERMINA MOVIMIENTO CONTABLE*/
                                DB::commit();
                                return $respuesta;

                            }elseif($orden->estado ==2 && !empty($orden->id_solicitud_compra) ){
                                $solicitud = ComprasSolicitudCompra::find($orden->id_solicitud_compra);
                                if($solicitud->estado == 3){
                                    $solicitud->estado = 4;
                                    $solicitud->save();
                                }
                                DB::commit();
                                return $respuesta;
                            }else{
                                DB::commit();
                                return $respuesta;
                            }



                        } catch (Exception $e) {
                            DB::rollBack();
                            return response()->json([
                                'status' => 'error',
                                'result' => 'Error de base de datos',
                                'messages' => null
                            ]);
                        }



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


    public function reporte($id_orden_compra)
    {
        // echo $ext;
        $ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp7/htdocs/resources/reports/OrdenDeCompra';
            //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'OrdenDeCompra';
            $input = '/var/www/html/resources/reports/OrdenDeCompra';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'OrdenDeCompra';
             $url = '/var/www/html/resources/reports/';
            //$url = 'C:/xampp7/htdocs/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_orden_compra' => $id_orden_compra,
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

