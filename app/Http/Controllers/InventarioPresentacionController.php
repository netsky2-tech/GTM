<?php 

namespace App\Http\Controllers;
use App\Models\AdmonAjustes;
use DB;
use App\Models\InventarioGrado;
use App\Models\InventarioOrigen;
use App\Models\InventarioPresentacion;
use App\Models\InventarioUnidadMedida;
use http\Message;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;
use Validator,Auth;
use Illuminate\Http\Request;

class InventarioPresentacionController extends Controller
{
    /**
     * Obtener una lista presentaciones
     *
     * @access  public
     * @param Request $request
     * @param InventarioPresentacion $presentacion
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioPresentacion $presentacion)
    {
        $presentacion = $presentacion->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $presentacion->total(),
                'rows' => $presentacion->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Busqueda dinámica de presentaciones
     *
     * @access  public
     * @param Request $request
     * @param InventarioPresentacion $presentaciones
     * @return \Illuminate\Http\JsonResponse
     * @author octaviom
     */


    public function buscar(Request $request, InventarioPresentacion $presentaciones)
    {
        $presentaciones = $presentaciones->buscar($request);
        return response()->json([
            'results' => $presentaciones
        ]);
    }

    /**
     * Obtener una lista de tipos de entrada sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodos(Request $request, InventarioPresentacion $presentacion)
    {
        $conf = session()->get('id_empresa');
        $presentacion = InventarioPresentacion::where('id_empresa', '=', $conf)->where('estado',1)->get();
        return response()->json([
            'status' => 'success',
            'result' => $presentacion,
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

    public function obtenerPresentacion(Request $request)
    {
        $rules = [
            'id_presentacion' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $id_empresaGlabal=0;
            $presentacion = InventarioPresentacion::select('id_presentacion','codigo','id_grado','id_unidad_medida_presentacion','id_origen','escalar','inventario.presentaciones.estado','id_unidad_medida_calculo','inventario.clasificacion_unidades_medidas.simbolo_um','inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida')
                ->join('inventario.clasificacion_unidades_medidas','inventario.presentaciones.id_unidad_medida_calculo','=','inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida')->where('id_presentacion',$request->id_presentacion)->with('origen')->with('grado')->with('unidadMedida')
                ->whereIn('inventario.presentaciones.id_empresa',array($conf,$id_empresaGlabal))->first();



            if(!empty($presentacion)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'presentacion' => $presentacion],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_presentacion'=>["Datos no encontrados"]),
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
    public function obtenerCodigo(Request $request){
        $rules = [
            'origen' => 'required|string|',
            'unidad_medida' => 'required|string|',
            'escalar' => 'required|integer|',
            'clasificacion' => 'required|string|',
            'grado' => 'required|string|',
        ];

        $validator = Validator::make($request->all(), $rules);
    }

    public function nuevo(){
        $conf = session()->get('id_empresa');
        $id_empresaGlabal=0;
        $unidades_medidas = InventarioUnidadMedida::where('activo',1)->whereIn('inventario.unidades_medidas.id_empresa',array($conf,$id_empresaGlabal))->orderby('id_unidad_medida')->select('id_unidad_medida','descripcion','unidad_medida','inventario.clasificacion_unidades_medidas.simbolo_um','inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida',DB::raw("CONCAT(inventario.unidades_medidas.unidad_medida,' ','(',inventario.unidades_medidas.descripcion,')')AS UM_concat"))
                  ->join('inventario.clasificacion_unidades_medidas','inventario.unidades_medidas.id_clasificacion_unidad_medida','=','inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida')->get();
        $grados = InventarioGrado::where('estado',1)->orderby('id_grado')->select('id_grado','grado','descripcion')->whereIn('id_empresa',array($conf,$id_empresaGlabal))->get();
        $origenes= InventarioOrigen::where('activo',1)->orderby('id_origen')->select('id_origen','origen')->whereIn('id_empresa',array($conf,$id_empresaGlabal))->get();

        return response()->json([
            'status' => 'success',
            'result' =>[
                'unidades_medidas' => $unidades_medidas,
                'grados' => $grados,
                'origenes' =>$origenes,
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
        $messages = [
            'codigo.unique' => 'Ya existe un registro con este codigo.',
        ];
        $rules = [
            'origen' => [
        'required',
        'array',
        ],
            'unidad_medida' => [
        'required',
        'array',

        ],
            'escalar' => [
        'required',
        'integer',
        'min:1',
        ],
            'clasificacion' => [
        'required',
        'string',

        ],
            'grado' => [
        'array',

        ],
            'codigo' => [
        'required',
        'string',
        'min:1',
                Rule::unique('pgsql.inventario.presentaciones')
        ],
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $presentacion = new InventarioPresentacion();
            $presentacion->id_origen = $request->origen['id_origen'];
            $presentacion->id_unidad_medida_presentacion = $request->unidad_medida['id_unidad_medida'];
            $presentacion->escalar = $request->escalar;
            $presentacion->id_unidad_medida_calculo = $request->unidad_medida['id_clasificacion_unidad_medida'];
            $presentacion->id_grado = $request->grado['id_grado'];
            $presentacion->codigo = $request->codigo;
            $presentacion->estado = 1;
            $presentacion->u_creacion = Auth::user()->usuario;
            $presentacion->id_empresa = $conf;
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
     * Actualizar Rol existente
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function actualizar(Request $request)
    {
        $messages = [
            'codigo.unique' => 'Ya existe un registro con este codigo.',
        ];
        $rules = [
            'id_presentacion' => 'required|integer|min:1',
            'origen' => [
                'required',
                'array',
                ],
            'unidad_medida' => [
                'required',
                'array',

            ],
            'escalar' => [
                'required',
                'integer',

            ],

            'grado' => [
                'required',
                'array',

            ],
            'codigo' => [
                'required',
                'string',
                'min:1',
                Rule::unique('pgsql.inventario.presentaciones')->ignore($request->id_presentacion,'id_presentacion')]
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
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
             $input = '/var/www/html/resources/reports/ListadoOPG';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ListadoOPG';
            $conf = session()->get('id_empresa');
            $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(\Illuminate\Support\Facades\DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_empresa' => $conf,
                    'empresa_nombre' => $nombre_empresa->valor,
                    'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteListadoOPG.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}