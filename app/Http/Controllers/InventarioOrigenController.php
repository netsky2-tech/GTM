<?php 

namespace App\Http\Controllers;

use App\Models\InventarioOrigen;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;
use Validator,Auth;
use Illuminate\Http\Request;

class InventarioOrigenController extends Controller
{
    /**
     * Obtener una lista de tipos de entrada
     *
     * @access  public
     * @param   
     * @return  json(array)
     * @author rsequeira
     */

    public function obtener(Request $request, InventarioOrigen $origen)
    {
        $origen = $origen->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $origen->total(),
                'rows' => $origen->items()
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
     * @author rsequeira
     */

    public function obtenerTodos(Request $request, InventarioOrigen $origen)
    {
        $conf = session()->get('id_empresa');
        $origen = InventarioOrigen::where('id_empresa', '=', $conf)->where('activo',1)->get();
        return response()->json([
            'status' => 'success',
            'result' => $origen,
            'messages' => null
        ]);
    }

    /**
     * obtener tipo de origen Especifico
     *
     * @access  public
     * @param   Request
     * @return  json(array)
     * @author rsequeira
     */

    public function obtenerOrigen(Request $request)
    {
        $rules = [
            'id_origen' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $id_empresaGlabal=0;
            $origen = InventarioOrigen::where('id_origen',$request->id_origen)
                ->whereIn('id_empresa',array($conf,$id_empresaGlabal))
                ->first();



            if(!empty($origen)){
                return response()->json([
                    'status' => 'success',
                    'result' => $origen,
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_origen'=>["Datos no encontrados"]),
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
     * @author rsequeira
     */

    public function registrar(Request $request)
    {
        $rules = [
            'origen' => [
        'required',
        'string',
        'max:50',
        Rule::unique('pgsql.inventario.origenes')],
            'descripcion' => [
        'required',
        'string',
        'max:50',
        Rule::unique('pgsql.inventario.origenes')],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $origen = new InventarioOrigen();
            $origen->origen = $request->origen;
            $origen->descripcion = $request->descripcion;
            $origen->activo = 1;
            $origen->u_grabacion = Auth::user()->usuario;
            $origen->id_empresa = $conf;
            $origen->save();

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
     * @author rsequeira
     */

    public function actualizar(Request $request)
    {
        $rules = [
            'id_origen' => 'required|integer|min:1',
            'origen' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.origenes')->ignore($request->id_origen,'id_origen')],
            'descripcion' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.origenes')->ignore($request->id_origen,'id_origen')],

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $origen = InventarioOrigen::find($request->id_origen);
            $origen->origen = $request->origen;
            $origen->descripcion = $request->descripcion;
            $origen->activo = 1;
            $origen->u_modificacion = Auth::user()->usuario;
            $origen->save();

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
     * @author rsequeira
     */

    public function desactivar(Request $request)
    {
        $rules = [
            'id_origen' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $origen = InventarioOrigen::find($request->id_origen);
            $origen->activo = 0;
            $origen->u_modificacion = Auth::user()->usuario;
            $origen->save();

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
            'id_origen' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $origen = InventarioOrigen::find($request->id_origen);
            $origen->activo = 1;
            $origen->u_modificacion = Auth::user()->usuario;
            $origen->save();
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