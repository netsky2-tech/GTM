<?php 

namespace App\Http\Controllers;

use App\Models\AdmonUsuarios;
use App\Models\CajaBancoMonedas;
use App\Models\ComprasSolicitudCompra;
use App\Models\InventarioBodegas;
use App\Models\InventarioProductos;
use App\Models\InventarioProveedores;
use App\Models\PublicAreas;
use App\Models\PublicSucursales;
use App\Models\RRHHTrabajadores;
use Hash, Validator,Auth;
use App\Models\ComprasSolicitudCompraProductos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class ComprasSolicitudCompraController extends Controller
{

	/**
     * Get List of Entradas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, ComprasSolicitudCompra $solicitudes)
    {
        $solicitudes = $solicitudes->obtenerSolicitudesCompras($request);

        foreach($solicitudes as $solicitud ){
            //   print_r($solicitud_compra);
            $items = collect($solicitud->solicitudProductos);

            $solicitud->tot_unidades = $items->sum(function($item) {
                return $item['cantidad'];
            });
            $solicitud->subtotal = $items->sum(function($item) {
                return $item['precio_info']*$item['cantidad'];
            });
            $solicitud->subtotal_cotizado = $items->sum(function($item) {
                return $item['precio_cotizado']*$item['cantidad_cotizado'];
            });

            $solicitud->total_descuento = $items->sum(function($item) {
                return $item['precio_info']*$item['cantidad']*($item['descuento']/100);
            });

            $solicitud->total_descuento_cotizado = $items->sum(function($item) {
                return $item['precio_cotizado']*$item['cantidad_cotizado']*($item['descuento']/100);
            });

            $solicitud->total = $solicitud->subtotal - $solicitud->total_descuento;
            $solicitud->total_cotizado = $solicitud->subtotal_cotizado - $solicitud->total_descuento_cotizado;
        }

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $solicitudes->total(), 
                'rows' => $solicitudes->items()
            ],
            'messages' => null
        ]);
	}


    public function nueva(Request $request)
    {
        //$sucursales = PublicSucursales::where('activo',1)->orderby('id_sucursal')->get();
        $bodegas = InventarioBodegas::where('activo', 1)->get();
        $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();
        $areas = PublicAreas::where('activo', 1)->orderby('id_area')->get();
        $proveedores = InventarioProveedores::where('activo', 1)->orderby('id_proveedor')->get();
        $productos = InventarioProductos::select(['id_producto','codigo_barra','codigo_consecutivo','codigo_sistema','condicion','precio_compra','descripcion',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_barra,')') AS text")])
            ->where('activo', 1)->whereIn('tipo_producto', array( 1,3))->where('condicion',1)->orderBy('descripcion', 'asc')
            ->get();

        $trabajadores = RRHHTrabajadores::where('activo', 1)->orderby('primer_nombre')->select('id_trabajador',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"))->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                //'sucursales' => $sucursales,
                'monedas' => $monedas,
                'bodegas' => $bodegas,
                'areas' => $areas,
                'proveedores' => $proveedores,
                'productos' => $productos,
                'trabajadores' => $trabajadores
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


    public function obtenerSolicitud(Request $request, ComprasSolicitudCompra $solicitud)
    {
		$rules = [
            'id_solicitud_compra' => 'required|integer|min:1',
            'cargar_dependencias' => 'required|boolean',
		];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $solicitud = $solicitud->obtenerSolicitudCompra($request);

            if(!empty($solicitud[0])){

                if($request->cargar_dependencias){

                    //$sucursales = PublicSucursales::where('activo',1)->orderby('id_sucursal')->get();
                    $bodegas = InventarioBodegas::where('activo', 1)->get();
                    $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();
                    $areas = PublicAreas::where('activo', 1)->orderby('id_area')->get();
                    $proveedores = InventarioProveedores::where('activo', 1)->orderby('id_proveedor')->get();
                    $trabajadores = RRHHTrabajadores::where('activo', 1)->orderby('primer_nombre')->select('id_trabajador',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"))->get();
                    $productos = InventarioProductos::select(['id_producto','codigo_barra','codigo_consecutivo','codigo_sistema','condicion','precio_compra','descripcion',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_barra,')') AS text")])
                        ->where('activo', 1)->whereIn('tipo_producto', array( 1,3))->where('condicion',1)->orderBy('descripcion', 'asc')
                        ->get();

                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'solicitud' => $solicitud[0],
                            'productos' => $productos,
                            'bodegas' => $bodegas,
                            'monedas' => $monedas,
                            'areas' => $areas,
                            'proveedores' => $proveedores,
                            'trabajadores' => $trabajadores
                        ],
                        'messages' => null
                    ]);
                }else{
                    return response()->json([
                    'status' => 'success',
                    'result' => [
                        'solicitud' => $solicitud[0]
                    ],
                    'messages' => null
                ]);
                }
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_solicitud_compra'=>["Datos no encontrados"]),
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
            'detalleProductos.*.precio_info.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];


    	$rules = [
            'observacion' => 'string|max:500|nullable',
            'es_borrador' => 'required|boolean',
            'f_necesidad' => 'required|date',

            'trabajador' => 'required|array|min:1',
            'trabajador.id_trabajador' => 'required|integer|min:1',


            'solicitud_bodega' => 'nullable|array|min:1',
            'solicitud_bodega.id_bodega' => 'required|integer|min:1',

            /*'sucursal' => 'required|array|min:1',
            'sucursal.id_sucursal' => 'required|integer|min:1',*/

            'solicitud_moneda' => 'required|array|min:1',
            'solicitud_moneda.id_moneda' => 'required|integer|min:1',

            'area' => 'required|array|min:1',
            'area.id_area' => 'required|integer|min:1',

            'total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'porcentaje_iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            //'plazo_credito'=> 'required|integer|min:0|max:60',

            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.precio_info' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'detalleProductos.*.descuento' => 'required|integer|min:0|max:100',
            'detalleProductos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'detalleProductos.*.proveedorx.id_proveedor' => 'required|integer|exists:pgsql.inventario.proveedores,id_proveedor',
            'detalleProductos.*.f_necesidad_producto' => 'required|date',

		];

		$validator = Validator::make($request->all(), $rules,$messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
			$solicitud = new ComprasSolicitudCompra;

            $solicitud->id_trabajador = $request->trabajador['id_trabajador'];
            $solicitud->id_bodega = $request->solicitud_bodega['id_bodega'];
            $solicitud->id_moneda = $request->solicitud_moneda['id_moneda'];

            $solicitud->id_area = $request->area['id_area'];

           // $solicitud->id_tipo_compra = $request->id_tipo_compra;
            $solicitud->observacion = $request->observacion;
            $solicitud->f_necesidad = $request->f_necesidad;
            $solicitud->total = $request->total;
            $solicitud->porcentaje_iva = $request->porcentaje_iva;
            $solicitud->iva = $request->iva;
            $solicitud->plazo_credito = 0;

			$solicitud->u_creacion = Auth::user()->usuario;
            $request->es_borrador == 'true' ? $solicitud->estado = 99:  $solicitud->estado = 1;
            $solicitud->save();

            $i = 1;
			foreach ($request->detalleProductos as $producto) {
                $solicitud_producto = new ComprasSolicitudCompraProductos;
                $solicitud_producto->numero_item = $i;
				$solicitud_producto->id_solicitud_compra = $solicitud->id_solicitud_compra;
                $solicitud_producto->id_producto = $producto['productox']['id_producto'];
                $solicitud_producto->id_proveedor = $producto['proveedorx']['id_proveedor'];
                $solicitud_producto->precio_info = $producto['precio_info'];
                $solicitud_producto->cantidad = $producto['cantidad'];
                $solicitud_producto->descuento = $producto['descuento'];
                $solicitud_producto->f_necesidad_producto = $producto['f_necesidad_producto'];
                $solicitud_producto->subtotal = $producto['total'];
                //$solicitud_producto->u_creacion =$solicitud->u_creacion;
				$solicitud_producto->save();
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
            'solicitud_productos.min' => 'Se requiere agregar un producto por lo menos.',
            'solicitud_productos.*.id_producto.required' => 'Seleccione un producto válido',
            'solicitud_productos.*.precio_info.min' => 'El precio debe ser mayor que cero',
            'solicitud_productos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            'id_solicitud_compra' => 'required|integer|exists:pgsql.compra.solicitudes_compras,id_solicitud_compra',
            'observacion' => 'string|max:500|nullable',
            'es_borrador' => 'required|boolean',
            'f_necesidad' => 'required|date',

            'solicitud_trabajador' => 'required|array|min:1',
            'solicitud_trabajador.id_trabajador' => 'required|integer|min:1',

            /*'solicitud_sucursal' => 'required|array|min:1',
            'solicitud_sucursal.id_sucursal' => 'required|integer|min:1',*/

            'solicitud_bodega' => 'nullable|array|min:1',
            'solicitud_bodega.id_bodega' => 'required|integer|min:1',

            'solicitud_moneda' => 'required|array|min:1',
            'solicitud_moneda.id_moneda' => 'required|integer|min:1',

            'solicitud_area' => 'required|array|min:1',
            'solicitud_area.id_area' => 'required|integer|min:1',

            'total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'porcentaje_iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'plazo_credito'=> 'required|integer|min:0|max:60',

            'solicitud_productos' => 'required|array|min:1',
            'solicitud_productos.*.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'solicitud_productos.*.precio_info' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'solicitud_productos.*.descuento' => 'required|integer|min:0|max:100',
            'solicitud_productos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:1',
            'solicitud_productos.*.id_proveedor' => 'required|integer|exists:pgsql.inventario.proveedores,id_proveedor',
            'solicitud_productos.*.f_necesidad_producto' => 'required|date',

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{


                DB::beginTransaction();
                $solicitud = ComprasSolicitudCompra::find($request->id_solicitud_compra);

                if($solicitud->estado == 99){

                    $solicitud->id_trabajador = $request->solicitud_trabajador['id_trabajador'];
                    //$solicitud->id_sucursal = $request->solicitud_sucursal['id_sucursal'];
                    $solicitud->id_area = $request->solicitud_area['id_area'];
                    $solicitud->id_bodega = $request->solicitud_bodega['id_bodega'];
                    $solicitud->id_moneda = $request->solicitud_moneda['id_moneda'];

                    $solicitud->observacion = $request->observacion;
                    $solicitud->f_necesidad = $request->f_necesidad;
                    $solicitud->total = $request->total;
                    $solicitud->iva = $request->iva;
                    $solicitud->porcentaje_iva = $request->porcentaje_iva;
                    $solicitud->plazo_credito = $request->plazo_credito;

                    $solicitud->u_creacion = Auth::user()->usuario;
                    $request->es_borrador == 'true' ? $solicitud->estado = 99:  $solicitud->estado = 1;
                    $solicitud->save();

                    ComprasSolicitudCompraProductos::where('id_solicitud_compra', $request->id_solicitud_compra)->delete();


                    $i = 1;
                    foreach ($request->solicitud_productos as $producto) {
                        $solicitud_producto = new ComprasSolicitudCompraProductos;
                        $solicitud_producto->numero_item = $i;
                        $solicitud_producto->id_solicitud_compra = $solicitud->id_solicitud_compra;
                        $solicitud_producto->id_producto = $producto['id_producto'];
                        $solicitud_producto->id_proveedor = $producto['id_proveedor'];
                        $solicitud_producto->precio_info = $producto['precio_info'];
                        $solicitud_producto->cantidad = $producto['cantidad'];
                        $solicitud_producto->descuento = $producto['descuento'];
                        $solicitud_producto->f_necesidad_producto = $producto['f_necesidad_producto'];
                        $solicitud_producto->subtotal = $producto['total'];
                        $solicitud_producto->save();
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
                        'result' => 'La solicitud de compra ha sido modificada previamente, no se pueden grabar los cambios',
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

        $rules = [
            'id_solicitud_compra' => 'required|integer|exists:pgsql.compra.solicitudes_compras,id_solicitud_compra',
            'estado' => 'required|integer|min:0',

            'productos' => 'required|array|min:1',
            'productos.*.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'productos.*.id_solicitud_compra_producto' => 'required|integer',
            'productos.*.precio_info' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'productos.*.descuento' => 'required|integer|min:0|max:100',
            'productos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $solicitud = ComprasSolicitudCompra::find($request->id_solicitud_compra);
            if($request->estado >= 0 && $request->estado <= 3 && $solicitud->estado <> $request->estado){

                $estado_org = $solicitud->estado;
                $solicitud->estado = $request->estado;

                    if( ($estado_org == 1 && ($request->estado == 2|| $request->estado== 0))
                        || ($estado_org == 2 && ($request->estado == 3|| $request->estado == 0)
                            || ($estado_org == 3 && ($request->estado == 4|| $request->estado == 0)))) {

                        try{

                        DB::beginTransaction();

                        if($estado_org == 1 && $request->estado == 2){
                                foreach ($request->productos as $producto) {
                                    $solicitud_producto = ComprasSolicitudCompraProductos::find($producto['id_solicitud_compra_producto']);

                                    if($solicitud_producto->cantidad>0){
                                        $solicitud_producto->precio_cotizado = $producto['precio_info'];
                                        $solicitud_producto->cantidad_cotizado = $producto['cantidad'];
                                        $solicitud_producto->descuento = $producto['descuento'];
                                        $solicitud_producto->save();
                                    }else{
                                        $solicitud_producto->delete();
                                    }

                                }
                        }

                        $solicitud->save();
                        DB::commit();
                        } catch (Exception $e){
                            DB::rollBack();
                            return response()->json([
                                'status' => 'error',
                                'result' => 'Error de base de datos',
                                'messages' => null
                            ]);
                        }


                    }else{
                        return response()->json([
                            'status' => 'error',
                            'result' => 'Error al cambiar el estado de la solicitud ('. $estado_org.' a '.$request->estado.' )',
                            'messages' => null
                        ]);
                    }

                return response()->json([
                    'status' => 'success',
                    'result' => null,
                    'messages' => null
                ]);
            }else{
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error al cambiar el estado de la solicitud',
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


    public function reporte($id_solicitud_compra)
    {
        // echo $ext;
        $ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp7/htdocs/resources/reports/SolicitudDeCompra';
            //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'SolicitudDeCompra';
            $input = '/var/www/html/resources/reports/SolicitudDeCompra';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'SolicitudDeCompra';
           // $url = '/var/www/html/resources/reports/';
            //$url = 'C:/xampp7/htdocs/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_solicitud_compra' => $id_solicitud_compra,
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'SolicitudDeCompra.' . $ext, $headers);
        }else{
            return '';
        }
    }
    
}

