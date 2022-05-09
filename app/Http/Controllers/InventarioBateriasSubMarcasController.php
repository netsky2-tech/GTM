<?php 

namespace App\Http\Controllers;

use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\InventarioBateriasSubMarcas;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class InventarioBateriasSubMarcasController extends Controller
{
    /**
     * Obtener una lista de Estados Financieros
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtener(Request $request, InventarioBateriasSubMarcas $submarcas)
    {
        $submarcas = $submarcas->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $submarcas->total(), 
                'rows' => $submarcas->items()
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

    public function obtenerTodosSubMarcas(Request $request, InventarioBateriasSubMarcas $submarcas)
    {
        $conf = session()->get('id_empresa');
        $submarcas = InventarioBateriasSubMarcas::where('id_empresa', '=', $conf)->where('activo',true)->orderBy('id_submarca')->get();
        return response()->json([
            'status' => 'success',
            'result' => $submarcas,
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

    public function obtenerSubMarca(Request $request)
    {
        $rules = [
            'id_submarca' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $submarca = InventarioBateriasSubMarcas::
            where('id_submarca',$request->id_submarca)
                ->with('marcaSubMarca')->get();

            if(!empty($submarca[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => $submarca[0],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_submarca'=>["Datos no encontrados"]),
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
                Rule::unique('pgsql.inventario.baterias_submarcas')/*->ignore($request->id_cargo,'id_cargo')*/],
            'marca' => 'required|array|min:1',
            'genera_comision'  => 'required|boolean',
        ];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $submarca = new InventarioBateriasSubMarcas;
            $submarca->descripcion = $request->descripcion;
            $submarca->id_marca = $request->marca['id_marca'];
            $submarca->genera_comision = $request->genera_comision;
            $conf = session()->get('id_empresa');
            $submarca->id_empresa = $conf;
            $submarca->save();

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
          'id_submarca' => 'required|integer|min:1',
          'descripcion' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.baterias_submarcas')->ignore($request->id_submarca,'id_submarca')],
            'marca_sub_marca' => 'required|array|min:1',
            'genera_comision'  => 'required|boolean',

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $submarca = InventarioBateriasSubMarcas::find($request->id_submarca);
            $submarca->descripcion = $request->descripcion;
            $submarca->id_marca = $request->marca_sub_marca['id_marca'];
            $submarca->genera_comision = $request->genera_comision;
            $submarca->save();

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
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteSubMarca';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteSubMarca';
             $input = '/var/www/html/resources/reports/ReporteSubMarca';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteSubMarca';

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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteSubMarca.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}