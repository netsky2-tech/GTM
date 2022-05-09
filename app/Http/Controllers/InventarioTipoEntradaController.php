<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\InventarioTipoEntrada;
use Illuminate\Http\Request;

class InventarioTipoEntradaController extends Controller
{
    /**
     * Obtener una lista de tipos de entrada
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioTipoEntrada $tipos_entrada)
    {
        $tipos_entrada = $tipos_entrada->obtenerTiposEntrada($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $tipos_entrada->total(), 
                'rows' => $tipos_entrada->items()
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

    public function obtenerTodosTiposEntrada(Request $request, InventarioTipoEntrada $tipos_entrada)
    {
        $conf = session()->get('id_empresa');
        $id_global_company =0;
        $tipos_entrada = InventarioTipoEntrada::whereIn('id_empresa', array($conf,$id_global_company))->where('estado', 1)->get();
        return response()->json([
            'status' => 'success',
            'result' => $tipos_entrada,
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

    public function obtenerTipoEntrada(Request $request)
    {
        $rules = [
            'id_tipo_entrada' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;
            $tipo_entrada = InventarioTipoEntrada::whereIn('id_empresa',array($conf,$id_empresa_global))->where('id_tipo_entrada',$request->id_tipo_entrada)
                ->get();
            if(!empty($tipo_entrada[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => $tipo_entrada[0],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_tipo_entrada'=>["Datos no encontrados"]),
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

    public function registrar(Request $request)
    {
        $rules = [
            'descripcion' =>  [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.tipos_entradas')],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $tipo_entrada = new InventarioTipoEntrada;
            $tipo_entrada->descripcion = $request->descripcion;
            $tipo_entrada->estado = 1;
            $tipo_entrada->u_grabacion = Auth::user()->usuario;
            $tipo_entrada->id_empresa = $conf;
            $tipo_entrada->save();

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
            'id_tipo_entrada' => 'required|integer|min:1',
            'descripcion' =>  [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.tipos_entradas')->ignore($request->id_tipo_entrada,'id_tipo_entrada')],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_entrada = InventarioTipoEntrada::find($request->id_tipo_entrada);
            $tipo_entrada->descripcion = $request->descripcion;
            $tipo_entrada->u_modificacion = Auth::user()->usuario;
            $tipo_entrada->save();

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
            'id_tipo_entrada' =>  'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_entrada = InventarioTipoEntrada::find($request->id_tipo_entrada); 
            $tipo_entrada->estado = 0;
            $tipo_entrada->u_modificacion = Auth::user()->usuario;
            $tipo_entrada->save();

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
            'id_tipo_entrada' =>  'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_entrada = InventarioTipoEntrada::find($request->id_tipo_entrada); 
            $tipo_entrada->estado = 1;
            $tipo_entrada->save();

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
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteTipoEntrada';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteTipoEntrada';
             $input = '/var/www/html/resources/reports/ReporteTipoEntrada';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteTipoEntrada';
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteTipoEntrada.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}