<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\InventarioUnidadMedidaEstandar;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use mysql_xdevapi\Table;
use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\InventarioUnidadMedida;
use Illuminate\Http\Request;

class InventarioUnidadMedidaController extends Controller
{
    /**
     * Obtener una lista de tipos de entrada
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioUnidadMedida $unidades_medida)
    {
        $unidades_medida = $unidades_medida->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $unidades_medida->total(), 
                'rows' => $unidades_medida->items()
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

    public function obtenerTodos(Request $request, InventarioUnidadMedida $unidades_medida)
    {
        $conf = session()->get('id_empresa');
        $unidades_medida = InventarioUnidadMedida::where('id_empresa', '=', $conf)->where('activo',1)->get();
        return response()->json([
            'status' => 'success',
            'result' => $unidades_medida,
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

    public function obtenerUnidadMedida(Request $request)
    {
        $rules = [
            'id_unidad_medida' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $unidad_medida = InventarioUnidadMedida::where('id_unidad_medida',$request->id_unidad_medida)
                ->with('unidadMedidad')->first();
            $unidad_medida->where(function ($query){
                $conf = session()->get('id_empresa');
                $query->where('id_empresa',$conf)
                    ->orwhere('id_empresa',0);
            });

            if(!empty($unidad_medida)){
                return response()->json([
                    'status' => 'success',
                    'result' =>['unidad_medida'=>$unidad_medida],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_unidad_medida'=>["Datos no encontrados"]),
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
     * Crear un nuevo tipo de entrada
     *
     * @access  public
     * @param   
     * @return  json(string)
     */
    public function nuevo(Request $request)
    {
        $rules = [

        ];
        $conf = session()->get('id_empresa');
        $clasificaciones = InventarioUnidadMedidaEstandar::where('estado', 1)->orderby('id_clasificacion_unidad_medida')->select('id_clasificacion_unidad_medida','clasificacion_um')->get();


        return response()->json([
            'status' => 'success',
            'result' => [
                'clasificaciones' => $clasificaciones,
            ],
            'messages' => null
        ]);
    }
    public function registrar(Request $request)
    {
        $rules = [
            'unidad_medida' => [
        'required',
        'string',
        'max:6',
        Rule::unique('pgsql.inventario.unidades_medidas')],
            'descripcion' => [
        'required',
        'string',
        'max:100',
        Rule::unique('pgsql.inventario.unidades_medidas')],
            'clasificacion' => [
                'required',
                'array',
                'min:1',
            ],
        'relacion_um_estandar'=> 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.000001'
       ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $unidad_medida = new InventarioUnidadMedida;
            $unidad_medida->unidad_medida = $request->unidad_medida;
            $unidad_medida->id_clasificacion_unidad_medida = $request->clasificacion['id_clasificacion_unidad_medida'];
            $unidad_medida->descripcion = $request->descripcion;
            $unidad_medida->entrante = $request -> entrante;
            $unidad_medida->saliente = $request-> saliente;
            $unidad_medida->relacion_um_estandar = $request -> relacion_um_estandar;
            $unidad_medida->activo = 1;
            $unidad_medida->u_grabacion = Auth::user()->usuario;
            $unidad_medida->id_empresa = $conf;
            $unidad_medida->save();

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
        $rules = [
            'id_unidad_medida' => 'required|integer|min:1',
            'unidad_medida' => [
                'required',
                'string',
                'max:6',
                ],
            'descripcion' => [
                'required',
                'string',
                'max:100',
                ],
            'clasificacion_unidadMedida' => [
                'required',
                'array',
                'min:1',],
            'relacion_um_estandar'=> 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.000001'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $unidad_medida = InventarioUnidadMedida::find($request->id_unidad_medida);
            $unidad_medida->unidad_medida = $request->unidad_medida;
            $unidad_medida->descripcion = $request->descripcion;
            $unidad_medida->entrante = $request->entrante;
            $unidad_medida->saliente = $request->saliente;
            $unidad_medida->id_clasificacion_unidad_medida = $request->clasificacion_unidadMedida['id_clasificacion_unidad_medida'];
            $unidad_medida->relacion_um_estandar = $request->relacion_um_estandar;
            $unidad_medida->u_modificacion = Auth::user()->usuario;
            $unidad_medida->save();

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
            'id_unidad_medida' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $unidad_medida = InventarioUnidadMedida::find($request->id_unidad_medida);
            $unidad_medida->activo = 0;
            $unidad_medida->u_modificacion = Auth::user()->usuario;
            $unidad_medida->save();

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
            'id_unidad_medida' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $unidad_medida = InventarioUnidadMedida::find($request->id_unidad_medida);
            $unidad_medida->activo = 1;
            $unidad_medida->u_modificacion = Auth::user()->usuario;
            $unidad_medida->save();
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
            $conf = session()->get('id_empresa');
            $nombre_empresa = AdmonAjustes::where('id_empresa', '=',$conf )->where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
            $url = '/var/www/html/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'empresa_nombre' => $nombre_empresa->valor,
                    'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail,
                    'id_empresa' => $conf
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteUnidadMedida.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}