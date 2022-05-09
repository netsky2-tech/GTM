<?php 

namespace App\Http\Controllers;

use App\Models\AdmonUsuarios;
use App\Models\CajaBancoMonedas;
use App\Models\InventarioInventarioFisico;
use App\Models\InventarioBodegas;
use App\Models\InventarioProductos;
use App\Models\InventarioProveedores;
use App\Models\PublicAreas;
use App\Models\PublicSucursales;
use App\Models\RRHHTrabajadores;
use Hash, Validator,Auth;
use App\Models\InventarioInventarioFisicoProductos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class InventarioFisicoController extends Controller
{

	/**
     * Get List of Entradas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioInventarioFisico $inventarioFisico)
    {
        $inventarioFisico = $inventarioFisico->obtener($request);
        

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $inventarioFisico->total(), 
                'rows' => $inventarioFisico->items()
            ],
            'messages' => null
        ]);
	}


    public function nuevo(Request $request)
    {
        $conf = session()->get('id_empresa');
        $sucursales = PublicSucursales::select(['id_sucursal','serie','descripcion'])->with('sucursalBodegasTodas')->get();
        $bodegas = InventarioBodegas::where('id_empresa', '=', $conf)->where('activo', 1)->get();
        $areas = PublicAreas::select('id_area','descripcion','activo')->where('id_empresa', '=', $conf)->orWhere('id_empresa',null)->where('activo', 1)->orderby('id_area')->get();
        $productos = InventarioProductos::select(['id_producto','codigo_barra','codigo_consecutivo','codigo_sistema','condicion','costo_estandar','descripcion',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_barra,')') AS text")])
            ->where('id_empresa', '=', $conf)->where('activo', 1)->whereIn('tipo_producto', array( 1,3))->where('condicion',1)->orderBy('descripcion', 'asc')
            ->get();
        $productos_usados = InventarioProductos::select(['id_producto','codigo_barra','codigo_consecutivo','codigo_sistema','condicion','costo_estandar','descripcion',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text")])
            ->where('id_empresa', '=', $conf)->orWhere('id_empresa',null)->where('activo', 1)->whereIn('tipo_producto', array(3))->where('condicion',2)->orderBy('descripcion', 'asc')
            ->get();

        $usuario_actual = AdmonUsuarios::select('id_empleado')->where('usuario',Auth::user()->usuario)->first();
        $trabajador_actual = RRHHTrabajadores::select(['id_area'])->where('id_trabajador',$usuario_actual['id_empleado'])->where('activo',true)->first();
        $area_actual = PublicAreas::select('id_area','descripcion','activo')->where('id_empresa', '=', $conf)->where('activo', 1)->where('id_area',$trabajador_actual['id_area'])->first();

        return response()->json([
            'status' => 'success',
            'result' => [
                'sucursales' => $sucursales,
                'bodegas' => $bodegas,
                'areas' => $areas,
                'productos' => $productos,
                'productos_usados' => $productos_usados,
                'area_actual'=>$area_actual
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


    public function obtenerConteo(Request $request, InventarioInventarioFisico $inventarioFisico)
    {
		$rules = [
            'id_inventario_fisico' => 'required|integer|min:1',
            'cargar_dependencias' => 'required|boolean',
		];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $inventarioFisico = $inventarioFisico->obtenerConteo($request);
            $conf = session()->get('id_empresa');

            if(!empty($inventarioFisico)){

                if($request->cargar_dependencias){

                    $sucursales = PublicSucursales::where('activo',1)->orderby('id_sucursal')->get();
                    $bodegas = InventarioBodegas::where('id_empresa', '=', $conf)->where('activo', 1)->get();
                    $areas = PublicAreas::where('id_empresa', '=', $conf)->where('activo', 1)->orderby('id_area')->get();
                    $productos = InventarioProductos::select(['id_producto','codigo_barra','codigo_consecutivo','codigo_sistema','condicion','costo_estandar','descripcion',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_barra,')') AS text")])
                        ->where('id_empresa', '=', $conf)->where('activo', 1)->whereIn('tipo_producto', array( 1,3))->orderBy('descripcion', 'asc')
                        ->get();

                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'conteo' => $inventarioFisico,
                            'productos' => $productos,
                            'sucursales' => $sucursales,
                            'bodegas' => $bodegas,
                            'areas' => $areas,
                         ],
                        'messages' => null
                    ]);
                }else{
                    return response()->json([
                    'status' => 'success',
                    'result' => [
                        'conteo' => $inventarioFisico
                    ],
                    'messages' => null
                ]);
                }
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_inventario_fisico'=>["Datos no encontrados"]),
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


        /* timestamp without time zone,
         character varying COLLATE pg_catalog."default",
         character varying COLLATE pg_catalog."default",
        num_conteo smallint,
        u_creacion character varying(30) COLLATE pg_catalog."default",
        u_modificacion character varying(30) COLLATE pg_catalog."default",
        f_creacion timestamp with time zone,
        f_modificacion timestamp without time zone,
        estado smallint,
        */

        $messages = [
            'conteo_productos.min' => 'Se requiere agregar un producto por lo menos.',
            'conteo_productos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'conteo_productos.*.precio_info.min' => 'El precio debe ser mayor que cero',
            'conteo_productos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
            'hora_fin.required_if' => 'Se debe definir una hora de finalización para emitir el conteo',
        ];


    	$rules = [
            'hora_inicio' => 'string|max:50',
            'hora_fin' => 'required_if:es_borrador,false|string|max:50|nullable',
            'es_borrador' => 'required|boolean',
            'f_inventario' => 'required|date',

            'conteo_bodega' => 'nullable|array|min:1',
            'conteo_bodega.id_bodega' => 'required|integer|min:1',

            'conteo_sucursal' => 'required|array|min:1',
            'conteo_sucursal.id_sucursal' => 'required|integer|min:1',

            'conteo_area' => 'required|array|min:1',
            'conteo_area.id_area' => 'required|integer|min:1',
            
            'conteo_productos' => 'required|array|min:1',
            'conteo_productos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'conteo_productos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',

		];

		$validator = Validator::make($request->all(), $rules,$messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
			$inventarioFisico = new InventarioInventarioFisico;
                $conf = session()->get('id_empresa');

            $inventarioFisico->id_bodega = $request->conteo_bodega['id_bodega'];
            $inventarioFisico->id_sucursal = $request->conteo_sucursal['id_sucursal'];

            $inventarioFisico->id_area = $request->conteo_area['id_area'];

            $inventarioFisico->hora_inicio = $request->hora_inicio;
            $inventarioFisico->hora_fin = $request->hora_fin;
            $inventarioFisico->f_inventario = $request->f_inventario;
            $inventarioFisico->id_empresa = $conf;

			$inventarioFisico->u_creacion = Auth::user()->usuario;
            $request->es_borrador == 'true' ? $inventarioFisico->estado = 99:  $inventarioFisico->estado = 1;
            $inventarioFisico->save();

            $i = 1;
			foreach ($request->conteo_productos as $producto) {
                $inventarioFisico_producto = new InventarioInventarioFisicoProductos;
                $inventarioFisico_producto->posicion = $i;
				$inventarioFisico_producto->id_inventario_fisico = $inventarioFisico->id_inventario_fisico;
                $inventarioFisico_producto->id_producto = $producto['productox']['id_producto'];
                $inventarioFisico_producto->descripcion = $producto['productox']['text'];
                $inventarioFisico_producto->u_medida = 'UNDS';
                if(!empty($producto['productox']['codigo_barra'])){
                    $inventarioFisico_producto->codigo_barra = $producto['productox']['codigo_barra'];
                }else{
                    $inventarioFisico_producto->codigo_barra = '';
                }
                $inventarioFisico_producto->cantidad = $producto['cantidad'];
                $inventarioFisico_producto->id_empresa = $conf;
                $inventarioFisico_producto->save();
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
            'conteo_productos.min' => 'Se requiere agregar un producto por lo menos.',
            'conteo_productos.*.id_producto.required' => 'Seleccione un producto válido',
            'conteo_productos.*.precio_info.min' => 'El precio debe ser mayor que cero',
            'conteo_productos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
            'hora_fin.required_if' => 'Se debe definir una hora de finalización para emitir el conteo',
            'hora_fin.string' => 'Se debe definir una hora de finalización',
        ];

        $rules = [
            'id_inventario_fisico' => 'required|integer|exists:pgsql.inventario.inventarios_fisicos,id_inventario_fisico',
            'hora_inicio' => 'string|max:50',
            'hora_fin' => 'string|max:50|required_if:es_borrador,false',
            'es_borrador' => 'required|boolean',
            'f_inventario' => 'required|date',

            'conteo_bodega' => 'nullable|array|min:1',
            'conteo_bodega.id_bodega' => 'required|integer|min:1',

            'conteo_sucursal' => 'required|array|min:1',
            'conteo_sucursal.id_sucursal' => 'required|integer|min:1',

            'conteo_area' => 'required|array|min:1',
            'conteo_area.id_area' => 'required|integer|min:1',

            'conteo_productos' => 'required|array|min:1',
            'conteo_productos.*.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'conteo_productos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{


                DB::beginTransaction();
                $inventarioFisico = InventarioInventarioFisico::find($request->id_inventario_fisico);
                $conf = session()->get('id_empresa');

                if($inventarioFisico->estado == 99){

                    $inventarioFisico->id_sucursal = $request->conteo_sucursal['id_sucursal'];
                    $inventarioFisico->id_area = $request->conteo_area['id_area'];
                    $inventarioFisico->id_bodega = $request->conteo_bodega['id_bodega'];

                    $inventarioFisico->hora_inicio = $request->hora_inicio;
                    $inventarioFisico->hora_fin = $request->hora_fin;
                    $inventarioFisico->f_inventario = $request->f_inventario;

                    $inventarioFisico->u_modificacion = Auth::user()->usuario;
                    $request->es_borrador == 'true' ? $inventarioFisico->estado = 99:  $inventarioFisico->estado = 1;
                    $inventarioFisico->save();

                    InventarioInventarioFisicoProductos::where('id_empresa', '=', $conf)->where('id_inventario_fisico', $request->id_inventario_fisico)->delete();

                    $i = 1;
                    foreach ($request->conteo_productos as $producto) {
                        $inventarioFisico_producto = new InventarioInventarioFisicoProductos;
                        $inventarioFisico_producto->posicion = $i;
                        $inventarioFisico_producto->id_inventario_fisico = $inventarioFisico->id_inventario_fisico;
                        $inventarioFisico_producto->id_producto = $producto['id_producto'];
                        $inventarioFisico_producto->descripcion = $producto['descripcion'];
                        $inventarioFisico_producto->u_medida = 'UNDS';
                        $inventarioFisico_producto->codigo_barra = $producto['codigo_barra'];
                        $inventarioFisico_producto->cantidad = $producto['cantidad'];
                        $inventarioFisico_producto->id_empresa = $conf;
                        $inventarioFisico_producto->save();
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
                        'result' => 'El conteo de inventario ha sido modificado previamente, no se pueden grabar los cambios',
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


    public function reporte($id_inventario_fisico)
    {
        // echo $ext;
        $ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp7/htdocs/resources/reports/InventarioFisico';
            //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'InventarioFisico';
            $input = '/var/www/html/resources/reports/InventarioFisico';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'InventarioFisico';
           // $url = '/var/www/html/resources/reports/';
            //$url = 'C:/xampp7/htdocs/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_inventario_fisico' => $id_inventario_fisico,
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'InventarioFisico.' . $ext, $headers);
        }else{
            return '';
        }
    }


    public function reporteComparativo($id_inventario_fisico)
    {
        // echo $ext;
        $ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
           $input = '/var/www/html/resources/reports/FormatoInventarioFisicoComparativo';
           $output = '/var/www/html/resources/reports/'.$hora_actual.'FormatoInventarioFisicoComparativo';
            //$input = 'C:/xampp7/htdocs/resources/reports/FormatoInventarioFisicoComparativo';
            //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'FormatoInventarioFisicoComparativo';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_inventario_fisico' => $id_inventario_fisico,
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteInventarioFisicoComparativo.' . $ext, $headers);
        }else{
            return '';
        }
    }
    
}

