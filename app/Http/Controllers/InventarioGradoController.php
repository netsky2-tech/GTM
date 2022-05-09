<?php 

namespace App\Http\Controllers;

use App\Models\InventarioGrado;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;
use Validator,Auth;
use Illuminate\Http\Request;

class InventarioGradoController extends Controller
{
    /**
     * Obtener una lista de tipos de entrada
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioGrado $grado)
    {
        $grado = $grado->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $grado->total(),
                'rows' => $grado->items()
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

    public function obtenerTodos(Request $request, InventarioGrado $grado)
    {
        $conf = session()->get('id_empresa');
        $grado = InventarioGrado::where('id_empresa', '=', $conf)->where('estado',1)->get();
        return response()->json([
            'status' => 'success',
            'result' => $grado,
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

    public function obtenerGrado(Request $request)
    {
        $rules = [
            'id_grado' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $grado = InventarioGrado::where('id_grado',$request->id_grado)->first();
            $grado->where(function ($query){
                $conf = session()->get('id_empresa');
                $query->where('id_empresa',$conf)
                    ->orwhere('id_empresa',0);
            });


            if(!empty($grado)){
                return response()->json([
                    'status' => 'success',
                    'result' => $grado,
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
            'grado' => [
        'required',
        'string',
        'max:50',
        Rule::unique('pgsql.inventario.grados')],
            'descripcion' => [
        'required',
        'string',
        'max:50',
        Rule::unique('pgsql.inventario.grados')],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $grado = new InventarioGrado();
            $grado->grado = $request->grado;
            $grado->descripcion = $request->descripcion;
            $grado->estado = 1;
            $grado->u_creacion = Auth::user()->usuario;
            $grado->id_empresa = $conf;
            $grado->save();

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
            'id_grado' => 'required|integer|min:1',
            'grado' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.grados')->ignore($request->id_grado,'id_grado')],
            'descripcion' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.grados')->ignore($request->id_grado,'id_grado')],

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $grado = InventarioGrado::find($request->id_grado);
            $grado->grado = $request->grado;
            $grado->descripcion = $request->descripcion;
            $grado->estado = 1;
            $grado->u_modificacion = Auth::user()->usuario;
            $grado->save();

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
            'id_grado' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $grado = InventarioGrado::find($request->id_grado);
            $grado->estado = 0;
            $grado->u_modificacion = Auth::user()->usuario;
            $grado->save();

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
            'id_grado' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $grado = InventarioGrado::find($request->id_grado);
            $grado->estado = 1;
            $grado->u_modificacion = Auth::user()->usuario;
            $grado->save();
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