<?php 

namespace App\Http\Controllers;

use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\InventarioBateriasLineas;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class InventarioBateriasLineasController extends Controller
{
    /**
     * Obtener una lista de cargos
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioBateriasLineas $lineas)
    {
        $lineas = $lineas->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $lineas->total(), 
                'rows' => $lineas->items()
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

    public function obtenerTodas(Request $request, InventarioBateriasLineas $lineas)
    {
        $conf = session()->get('id_empresa');
        $lineas = InventarioBateriasLineas::where('id_empresa', '=', $conf)->where('activo',true)->orderBy('id_linea')->get();
        return response()->json([
            'status' => 'success',
            'result' => $lineas,
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

    public function obtenerLinea(Request $request)
    {
        $rules = [
            'id_linea' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cargo = InventarioBateriasLineas::find($request->id_linea);

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
                'result' => array('id_linea'=>["Datos no encontrados"]),
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
                Rule::unique('pgsql.inventario.baterias_lineas')]
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cargo = new InventarioBateriasLineas;
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
            'id_linea' => 'required|integer|min:1',
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.inventario.baterias_lineas')->ignore($request->id_linea,'id_linea')]
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cargo = InventarioBateriasLineas::find($request->id_linea);
            $cargo->descripcion = $request->descripcion;
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
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteLineasBaterias';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteLineasBaterias';
             $input = '/var/www/html/resources/reports/ReporteLineasBaterias';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteLineasBaterias';

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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteLineasBaterias.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }
}