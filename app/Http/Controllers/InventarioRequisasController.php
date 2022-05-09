<?php 

namespace App\Http\Controllers;

use App\Models\InventarioBodegas;
use App\Models\InventarioProveedores;
use App\Models\InventarioSalidaProductos;
use App\Models\InventarioSalidas;
use App\Models\InventarioTipoSalida;
use App\Models\PublicSucursales;
use Hash, Validator,Auth;
use App\Models\InventarioBodegaProductos;
use App\Models\InventarioRequisaProductos;
use App\Models\InventarioRequisas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class InventarioRequisasController extends Controller
{
	/**
     * Get List of requisas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioRequisas $requisas)
    {
        $requisas = $requisas->obtenerRequisas($request);

        foreach($requisas as $requisa ){
            //   print_r($entrada);
            $items = collect($requisa->requisaProductos);

            $requisa->tot_unidades_solicitadas = $items->sum(function($item) {
                return $item['cantidad_solicitada'];
            });
            $requisa->tot_unidades_autorizadas = $items->sum(function($item) {
                return $item['cantidad_autorizada'];
            });
            $requisa->tot_unidades_recibidas = $items->sum(function($item) {
                return $item['cantidad_recibida'];
            });
           /* $requisa->subtotal = $items->sum(function($item) {
                return $item['precio_unitario']*$item['cantidad_recibida'];
            });*/

           // $requisa->total = $requisa->subtotal;
        }

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $requisas->total(), 
                'rows' => $requisas->items()
            ],
            'messages' => null
        ]);
	}


    /*public function nueva(Request $request)
    {
        $proveedores = InventarioProveedores::where('activo', 1)->orderby('id_proveedor')->select('id_proveedor','nombre_comercial','numero_ruc','numero_cedula')->get();
        $bodegas =InventarioBodegas::where('activo', 1)->with('productosBodega')->get();
        $sucursales =PublicSucursales::where('activo', 1)->get();
            return response()->json([
                'status' => 'success',
                'result' => [
                    'bodegas' => $bodegas,
                    'proveedores' => $proveedores,
                    'sucursales' => $sucursales,
                ],
                'messages' => null
            ]);

    }*/
	
		/**
     * Get List of Entrada
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerRequisa(Request $request, InventarioRequisas $requisa)
    {
		$rules = [
            'id_requisa' => 'required|integer|min:1'
		];
	

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

           // $productos = $requisa->obtenerProductosSalida($request);
            $requisa = $requisa->obtenerRequisa($request);

            if(!empty($requisa[0])){

                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'requisa' => $requisa[0],
                    ],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_requisa'=>["Datos no encontrados"]),
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
     * Registra una nueva requisa
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
            'detalleProductos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];
        
    	$rules = [
            //'codigo_requisa' => 'required|string|max:25',
            'descripcion_requisa' => 'string|max:255|nullable',
            'no_factura' => 'string|max:255|nullable',
            'fecha_solicitud' => 'required|date',
            'requisa_trabajador' => 'required|array|min:1',
            'requisa_trabajador.id_trabajador' => 'required|integer|min:1',
            'requisa_bodega' => 'required|array|min:1',
            'requisa_bodega.id_bodega' => 'required|integer|min:1',
            'requisa_proveedor' => 'required|array|min:1',
            'requisa_proveedor.id_proveedor' => 'required|integer|min:1',
            'requisa_sucursal' => 'required|array|min:1',
            'requisa_sucursal.id_sucursal' => 'required|integer|min:1',
            'requisa_area' => 'required|array|min:1',
            'requisa_area.id_area' => 'required|integer|min:1',
            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.precio_unitario' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
            'detalleProductos.*.productox.descripcion' => 'required|string|max:100',
            'detalleProductos.*.productox.unidad_medida' => 'required|string|max:100',
            //'es_borrador' => 'required|boolean',
		];

		$validator = Validator::make($request->all(), $rules, $messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
			$requisa = new InventarioRequisas;

                $conf = session()->get('id_empresa');
                $requisa->codigo_requisa = InventarioRequisas::max('id_requisa')+1;
                $requisa->descripcion_requisa = $request->descripcion_requisa;
                $requisa->no_factura = $request->no_factura;
                $requisa->fecha_solicitud = $request->fecha_solicitud;
                $requisa->id_trabajador = $request->requisa_trabajador['id_trabajador'];
                $requisa->id_bodega = $request->requisa_bodega['id_bodega'];
                $requisa->id_sucursal = $request->requisa_sucursal['id_sucursal'];
                $requisa->id_area = $request->requisa_area['id_area'];
                $requisa->id_proveedor = $request->requisa_proveedor['id_proveedor'];
                $requisa->u_creacion = Auth::user()->usuario;
                $requisa->id_empresa = $conf;
               // $request->es_borrador == 'true' ? $requisa->estado = 99:
                $requisa->estado = 1;
                $requisa->save();

			foreach ($request->detalleProductos as $producto) {
                $bodega_sub = InventarioBodegaProductos::where('id_empresa', '=', $conf)->where('id_bodega_producto',$producto['productox']['id_bodega_producto'])->first();
                if($bodega_sub->cantidad-$producto['cantidad']>=0){
                    $bodega_sub->cantidad = $bodega_sub->cantidad-$producto['cantidad'];
                }else{
                    $producto['cantidad'] = $bodega_sub->cantidad;
                    $bodega_sub->cantidad = 0;
                    /*DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => 'El monto solicitado para este producto no esta disponible',
                        'messages' => null
                    ]);*/
                }
                $bodega_sub->save();

                $requisa_producto = new InventarioRequisaProductos;
                $conf = session()->get('id_empresa');
                $requisa_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
				$requisa_producto->id_requisa = $requisa->id_requisa;
                $requisa_producto->descripcion_producto = $producto['productox']['descripcion'];
                $requisa_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                $requisa_producto->unidad_medida = $producto['productox']['unidad_medida'];
                $requisa_producto->precio_unitario = $producto['precio_unitario'];
                $requisa_producto->cantidad_solicitada = $producto['cantidad'];
                $requisa_producto->cantidad_autorizada = 0;
                $requisa_producto->cantidad_recibida = 0;
                $requisa_producto->u_creacion = $requisa->u_creacion;
                $requisa_producto->id_empresa = $conf;
                $requisa_producto->estado = 1;
				$requisa_producto->save();

                /*$movimiento_producto = new InventarioMovimientosProductos();
                $movimiento_producto->id_bodega_producto = $requisa_producto->id_bodega_producto;
                $movimiento_producto->fecha_movimiento = date("Y-m-d H:i:s");
                $movimiento_producto->descripcion_movimiento = 'Salida '.$requisa->codigo_requisa;
                $movimiento_producto->identificador_origen_movimiento = $requisa->id_requisa;
                $movimiento_producto->tipo_movimiento = 2;
                $movimiento_producto->cantidad_movimiento = $requisa_producto->cantidad_saliente*-1;
                $movimiento_producto->costo = $requisa_producto->precio_unitario;
                $movimiento_producto->usuario_registra = Auth::user()->usuario;
                $movimiento_producto->save();*/
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


    public function autorizar(Request $request)
    {

        $messages = [
            'requisa_productos.min' => 'Se requiere agregar un producto por lo menos.',
           // 'requisa_productos.*.id_producto.required' => 'Seleccione un producto válido',
            'requisa_productos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'requisa_productos.*.cantidad_autorizada.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            'id_requisa' => 'required|integer|exists:pgsql.inventario.requisas,id_requisa',
            'requisa_productos' => 'required|array|min:1',
            'requisa_productos.*.id_bodega_producto' => 'required|integer|min:1|exists:pgsql.inventario.bodegas_productos,id_bodega_producto',
            'requisa_productos.*.cantidad_autorizada' => 'required|integer|min:0|lte:requisa_productos.*.cantidad_solicitada',
        ];

        /*id_salida integer,*/

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $requisa = InventarioRequisas::find($request->id_requisa);
                $conf = session()->get('id_empresa');

                if($requisa->estado == 1){

                    $requisa->fecha_autorizado=date("Y-m-d H:i:s");

                    $salida = new InventarioSalidas;
                    $salida->codigo_salida = InventarioSalidas::max('id_salida')+1;
                    $salida->id_tipo_salida = 2;
                    $salida->fecha_salida = $requisa->fecha_autorizado;
                    $salida->id_bodega = $requisa->id_bodega;
                    $salida->descripcion_salida = 'Salida de Requisa No. '. $requisa->codigo_requisa;
                    $salida->id_proveedor = $requisa->id_proveedor;
                    $salida->u_creacion = Auth::user()->usuario;
                    $salida->estado = 1;
                    $salida->id_empresa = $conf;
                    $salida->save();

                    $requisa->u_autoriza=Auth::user()->usuario;
                    $requisa->estado=2;
                    $requisa->id_salida= $salida->id_salida;
                    $requisa->save();

                foreach ($request->requisa_productos as $producto) {
                    $requisa_producto = InventarioRequisaProductos::find($producto['id_requisa_producto']);
                    $requisa_producto->cantidad_autorizada = $producto['cantidad_autorizada'];


                    /*$bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['id_bodega_producto'])->first();
                    $bodega_sub->cantidad = $bodega_sub->cantidad-$producto['cantidad_autorizada'];
                    $bodega_sub->save();*/

                    if($requisa_producto->cantidad_autorizada>0){
                    $salida_producto = new InventarioSalidaProductos;
                    $salida_producto->id_bodega_producto = $requisa_producto->id_bodega_producto;
                    $salida_producto->id_salida = $salida->id_salida;
                    $salida_producto->descripcion_producto = $requisa_producto->descripcion_producto;
                    $salida_producto->codigo_producto = $requisa_producto->codigo_producto;
                    $salida_producto->unidad_medida = $requisa_producto->unidad_medida;
                    $salida_producto->precio_unitario = $requisa_producto->precio_unitario;
                    $salida_producto->cantidad_saliente = $requisa_producto->cantidad_autorizada;
                    $salida_producto->cantidad_despachada = 0;
                    $salida_producto->cantidad_faltante = 0;
                    $salida_producto->u_creacion = $salida->u_creacion;
                    $salida_producto->id_empresa = $conf;
                    $salida_producto->save();

                    $requisa_producto->id_salida_producto = $salida_producto->id_salida_producto;
                    }else{
                        $bodega_sub = InventarioBodegaProductos::where('id_empresa', '=', $conf)->where('id_bodega_producto',$producto['id_bodega_producto'])->first();
                        $bodega_sub->cantidad = $bodega_sub->cantidad+$producto['cantidad_solicitada'];
                        $bodega_sub->save();
                    }

                    $requisa_producto->save();
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
                        'result' => 'La requisa ha sido modificada previamente, no se pueden grabar los cambios',
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


    public function cancelarRequisa(Request $request, InventarioRequisas $requisa)
    {
        $rules = [
            'id_requisa' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $requisa = InventarioRequisas::find($request->id_requisa);
            $conf = session()->get('id_empresa');

            if(!empty($requisa)&&$requisa->estado==1){

                try{
                    DB::beginTransaction();
                    $requisa->estado=0;
                    $requisa->descripcion_requisa = $requisa->descripcion_requisa . ' **Solicitud cancelada por '.Auth::user()->usuario.' a las '.date("Y-m-d H:i:s");
                    $requisa->save();

                    foreach ($request->requisa_productos as $producto) {
                        $bodega_sub = InventarioBodegaProductos::where('id_empresa', '=', $conf)->where('id_bodega_producto',$producto['id_bodega_producto'])->first();
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
                    'result' => array('id_requisa'=>["Datos no encontrados o la solicitud ya autorizada"]),
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

