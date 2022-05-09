<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\InventarioTipoSalida;
use Illuminate\Http\Request;

class InventarioTipoSalidaController extends Controller
{
    /**
     * Obtener una lista de tipos de Salida
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioTipoSalida $tipos_salida)
    {
        $tipos_salida = $tipos_salida->obtenerTiposSalida($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $tipos_salida->total(), 
                'rows' => $tipos_salida->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de tipos de Salida sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodosTiposSalida(Request $request, InventarioTipoSalida $tipos_salida)
    {
        $conf = session()->get('id_empresa');
        $tipos_salida = InventarioTipoSalida::where('id_empresa', '=', $conf)->where('estado', 1)->whereIn('id_tipo_salida', array(2,5,7))->get();
        return response()->json([
            'status' => 'success',
            'result' => $tipos_salida,
            'messages' => null
        ]);
    }

    /**
     * obtener tipo de Salida Especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTipoSalida(Request $request)
    {
        $rules = [
            'id_tipo_salida' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_salida = InventarioTipoSalida::where('id_tipo_salida',$request->id_tipo_salida)
                ->get();
            if(!empty($tipo_salida[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => $tipo_salida[0],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_tipo_salida'=>["Datos no encontrados"]),
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
     * Crear un nuevo tipo de Salida
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $rules = [
            'descripcion' =>  [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.tipos_salidas')],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $tipo_salida = new InventarioTipoSalida;
            $tipo_salida->descripcion = $request->descripcion;
            $tipo_salida->estado = 1;
            $tipo_salida->u_grabacion = Auth::user()->usuario;
            $tipo_salida->id_empresa = $conf;
            $tipo_salida->save();

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
            'id_tipo_salida' => 'required|integer|min:1',
            'descripcion' =>  [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.tipos_salidas')->ignore($request->id_tipo_salida,'id_tipo_salida')],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_salida = InventarioTipoSalida::find($request->id_tipo_salida);
            $tipo_salida->descripcion = $request->descripcion;
            $tipo_salida->u_modificacion = Auth::user()->usuario;
            $tipo_salida->save();

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
            'id_tipo_salida' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_salida = InventarioTipoSalida::find($request->id_tipo_salida); 
            $tipo_salida->estado = 0;
            $tipo_salida->u_modificacion = Auth::user()->usuario;
            $tipo_salida->save();

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
            'id_tipo_salida' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_salida = InventarioTipoSalida::find($request->id_tipo_salida); 
            $tipo_salida->estado = 1;
            $tipo_salida->u_modificacion = Auth::user()->usuario;
            $tipo_salida->save();

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
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteTipoSalidas';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteTipoSalidas';
             $input = '/var/www/html/resources/reports/ReporteTipoSalidas';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteTipoSalidas';
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteTipoSalidas.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}