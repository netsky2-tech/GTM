<?php 

namespace App\Http\Controllers;

use App\Models\InventarioGrado;
use App\Models\InventarioOrigen;
use App\Models\InventarioPresentacion;
use App\Models\InventarioProductos;
use App\Models\InventarioProductosPresentaciones;

use http\Message;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;
use Validator,Auth;
use Illuminate\Http\Request;

class InventarioProductoPresentacionController extends Controller
{
    /**
     * Obtener una lista de tipos de entrada
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioProductosPresentaciones $producto_presentacion)
    {
        $producto_presentacion = $producto_presentacion->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $producto_presentacion->total(),
                'rows' => $producto_presentacion->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de tipos de entrada sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodos(Request $request, InventarioProductosPresentaciones $producto_presentacion)
    {
        $conf = session()->get('id_empresa');
        $producto_presentacion = InventarioProductosPresentaciones::where('id_empresa', '=', $conf)->where('estado',1)->get();
        return response()->json([
            'status' => 'success',
            'result' => $producto_presentacion,
            'messages' => null
        ]);
    }

    /**
     * obtener tipo de entrada Especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerProductoPresentacion(Request $request)
    {
        $rules = [
            'id_presentacion_producto' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $id_empresaGlabal=0;
            $producto_Presentacion = InventarioProductosPresentaciones::where('id_producto_presentacion',$request->id_producto_presentacion)
              ->with('productoPresentacion')->with('productoP ')->whereIn('inventario.presentaciones.id_empresa',array($conf,$id_empresaGlabal))->first();



            if(!empty($producto_Presentacion)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'presentacion' => $producto_Presentacion],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_producto_presentacion'=>["Datos no encontrados"]),
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
    public function nuevo(){
        $conf = session()->get('id_empresa');

        $presentaciones = InventarioPresentacion::where('estado', 1)->orderby('id_presentacion')->select('id_presentacion','codigo')->get();
        $productos = InventarioProductos::where('activo', 1)->orderby('id_producto')->select('id_producto','nombre_comercial')->get();


        return response()->json([
            'status' => 'success',
            'result' =>[
                'presentaciones' => $presentaciones,
                'productos' => $productos,
            ],
            'messages' => null
        ]);
    }
    /**
     * Crear un nuevo tipo de entrada
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $rules = [
            'conteo_productos' => [
        'required',
        'array',
        'min:1'],
            'producto' => [
        'required',
        'array',
        'min:1',
        ],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            try {

                DB::beginTransaction();
            $conf = session()->get('id_empresa');
             foreach ($request->conteo_productos as $presentacion){
                 $producto_presentacion = new InventarioProductosPresentaciones();
                 $producto_presentacion->id_producto = $request->producto['id_producto'];
                 $producto_presentacion->id_presentacion=$presentacion['presentacionx']['id_presentacion'];
                 $producto_presentacion->estado = 1;
                 $producto_presentacion->u_creacion = Auth::user()->usuario;
                 $producto_presentacion->id_empresa = $conf;
                 $producto_presentacion->save();
             }
             DB::commit();
             return response()->json([
                 'status'=>'success',
                 'result'=>'',
                 'messages'=>null
             ]);

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status'=>'error',
                    'result'=>'Error de base de datos',
                    'messages'=>null
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
     * Actualizar Rol existente
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function actualizar(Request $request)
    {
        $rules = [
            'id_presentacion' => 'required|integer|min:1',
            'origen' => [
                'required',
                'array',
                'max:50'],
            'unidad_medida' => [
                'required',
                'array',
                'max:50',
            ],
            'escalar' => [
                'required',
                'integer',

            ],

            'grado' => [
                'required',
                'array',
                'max:50',
            ],
            'codigo' => [
                'required',
                'string',
                'max:50',]
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $presentacion = InventarioPresentacion::find($request->id_presentacion);
            $presentacion->id_origen = $request->origen['id_origen'];
            $presentacion->id_unidad_medida_presentacion = $request->unidad_medida['id_unidad_medida'];
            $presentacion->escalar = $request->escalar;
            $presentacion->id_unidad_medida_calculo = $request->unidad_medida['id_clasificacion_unidad_medida'];
            $presentacion->id_grado = $request->grado['id_grado'];
            $presentacion->codigo = $request->codigo;
            $presentacion->u_modificacion = Auth::user()->usuario;
            $presentacion->save();

            return response()->json([
                'status' => 'success',
                'result' => null,
                'messages' => null
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }

    /**
     * Desactiva rol
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function desactivar(Request $request)
    {
        $rules = [
            'id_presentacion' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $presentacion = InventarioPresentacion::find($request->id_presentacion);
            $presentacion->estado = 0;
            $presentacion->u_modificacion = Auth::user()->usuario;
            $presentacion->save();

            return response()->json([
                'status' => 'success',
                'result' => null,
                'messages' => null
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }


    public function activar(Request $request)
    {
        $rules = [
            'id_presentacion' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $presentacion = InventarioPresentacion::find($request->id_presentacion);
            $presentacion->estado = 1;
            $presentacion->u_modificacion = Auth::user()->usuario;
            $presentacion->save();
            return response()->json([
                'status' => 'success',
                'result' => null,
                'messages' => null
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }

    public function generarReporte($ext)
    {
        // echo $ext;
        // $ext = 'pdf';
        $os = array("xls", "pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteUnidadMedida';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteUnidadMedida';
             $input = '/var/www/html/resources/reports/ReporteUnidadMedida';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteUnidadMedida';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [],
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
            /*header('Content-Description: File Transfer');
            header('Content-Type: multipart/form-data;boundary="boundary"');
            header('Content-Disposition: form-data; filename=' . $hora_actual. 'Accesos.' . $ext);
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
            header('Content-Length: ' . filesize($output . '.' . $ext));
            flush();
            readfile($output . '.' . $ext);*/
            // unlink($output . '.' . $ext);

            $headers = [
                'Content-Type' => 'application/pdf',
            ];

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteUnidadMedida.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}