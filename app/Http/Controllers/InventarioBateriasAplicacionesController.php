<?php 

namespace App\Http\Controllers;

use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\InventarioBateriasAplicaciones;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class InventarioBateriasAplicacionesController extends Controller
{
    /**
     * Obtener una lista de cargos
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioBateriasAplicaciones $aplicaciones)
    {
        $aplicaciones = $aplicaciones->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $aplicaciones->total(), 
                'rows' => $aplicaciones->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de cargos sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodasAplicaciones(Request $request, InventarioBateriasAplicaciones $aplicaciones)
    {
        $aplicaciones = InventarioBateriasAplicaciones::with('aplicacionSubAplicaciones')->get();
        return response()->json([
            'status' => 'success',
            'result' => $aplicaciones,
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

    public function obtenerAplicacion(Request $request)
    {
        $rules = [
            'id_aplicacion' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cargo = InventarioBateriasAplicaciones::find($request->id_aplicacion);

            if(!empty($cargo)){		
            return response()->json([
                'status' => 'success',
                'result' => $cargo,
                'messages' => null
            ]);

        }
        else{
          return response()->json([
                'status' => 'error',
                'result' => array('id_aplicacion'=>["Datos no encontrados"]),
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
                'max:100',
                Rule::unique('pgsql.inventario.baterias_aplicaciones')]
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cargo = new InventarioBateriasAplicaciones;
            $cargo->descripcion = $request->descripcion;
            $conf = session()->get('id_empresa');
            $cargo->id_empresa = $conf;
            $cargo->save();

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
            'id_aplicacion' => 'required|integer|min:1',
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.inventario.baterias_aplicaciones')->ignore($request->id_aplicacion,'id_aplicacion')]
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cargo = InventarioBateriasAplicaciones::find($request->id_aplicacion);
            $cargo->descripcion = $request->descripcion;
            $conf = session()->get('id_empresa');
            $cargo->id_empresa = $conf;
            $cargo->save();

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
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteAplicaciones';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteAplicaciones';
             $input = '/var/www/html/resources/reports/ReporteAplicaciones';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteAplicaciones';

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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteAplicaciones.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }
}