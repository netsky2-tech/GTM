<?php 

namespace App\Http\Controllers;

use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\InventarioBateriasSubAplicaciones;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class InventarioBateriasSubAplicacionesController extends Controller
{
    /**
     * Obtener una lista de Estados Financieros
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtener(Request $request, InventarioBateriasSubAplicaciones $subaplicaciones)
    {
        $subaplicaciones = $subaplicaciones->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $subaplicaciones->total(), 
                'rows' => $subaplicaciones->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de Roles sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodosSubAplicaciones(Request $request, InventarioBateriasSubAplicaciones $subaplicaciones)
    {
        $conf = session()->get('id_empresa');
        $subaplicaciones = InventarioBateriasSubAplicaciones::where('id_empresa', '=', $conf)->where('activo',true)->orderBy('id_subaplicacion')->get();
        return response()->json([
            'status' => 'success',
            'result' => $subaplicaciones,
            'messages' => null
        ]);
    }   

    /**
     * obtener Estado Finaciero Especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerSubAplicacion(Request $request)
    {
        $rules = [
            'id_subaplicacion' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $subaplicacion = InventarioBateriasSubAplicaciones::
            where('id_empresa', '=', $conf)->where('id_subaplicacion',$request->id_subaplicacion)
                ->with('aplicacionSubAplicacion')->get();

            if(!empty($subaplicacion[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => $subaplicacion[0],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_subaplicacion'=>["Datos no encontrados"]),
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
            'descripcion' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.baterias_subaplicaciones')/*->ignore($request->id_cargo,'id_cargo')*/],
            'aplicacion' => 'required|array|min:1',
        ];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $subaplicacion = new InventarioBateriasSubAplicaciones;
            $subaplicacion->descripcion = $request->descripcion;
            $subaplicacion->id_aplicacion = $request->aplicacion['id_aplicacion'];
            $conf = session()->get('id_empresa');
            $subaplicacion->id_empresa = $conf;
            
            $subaplicacion->save();

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


    public function actualizar(Request $request)
    {
        $rules = [
          'id_subaplicacion' => 'required|integer|min:1',
          'descripcion' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.baterias_subaplicaciones')->ignore($request->id_subaplicacion,'id_subaplicacion')],
            'aplicacion_sub_aplicacion' => 'required|array|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $subaplicacion = InventarioBateriasSubAplicaciones::find($request->id_subaplicacion);
            $subaplicacion->descripcion = $request->descripcion;
            $subaplicacion->id_aplicacion = $request->aplicacion_sub_aplicacion['id_aplicacion'];
            $subaplicacion->save();

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
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteSubAplicaciones';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteSubAplicaciones';
             $input = '/var/www/html/resources/reports/ReporteSubAplicaciones';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteSubAplicaciones';

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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteSubAplicaciones.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}