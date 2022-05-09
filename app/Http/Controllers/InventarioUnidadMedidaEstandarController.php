<?php 

namespace App\Http\Controllers;

use App\Models\InventarioUnidadMedidaEstandar;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;
use Validator,Auth;
use Illuminate\Http\Request;

class InventarioUnidadMedidaEstandarController extends Controller
{
    /**
     * Obtener una lista de tipos de entrada
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioUnidadMedidaEstandar $unidades_medida)
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

    public function obtenerTodos(Request $request, InventarioUnidadMedidaEstandar $unidades_medida)
    {
        $conf = session()->get('id_empresa');
        $unidades_medida = InventarioUnidadMedidaEstandar::where('id_empresa', '=', $conf)->where('estado',1)->get();
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

    public function obtenerUnidadMedidaEstandar(Request $request)
    {
        $rules = [
            'id_clasificacion_unidad_medida' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $unidad_medida = InventarioUnidadMedidaEstandar::where('id_clasificacion_unidad_medida',$request->id_clasificacion_unidad_medida)->first();
            $unidad_medida->where(function ($query){
                $conf = session()->get('id_empresa');
                $query->where('id_empresa',$conf)
                    ->orwhere('id_empresa',null);
            });


            if(!empty($unidad_medida)){
                return response()->json([
                    'status' => 'success',
                    'result' => $unidad_medida,
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_clasificacion_unidad_medida'=>["Datos no encontrados"]),
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
            'clasificacion_um' => [
        'required',
        'string',
        'max:50',
        Rule::unique('pgsql.inventario.clasificacion_unidades_medidas')],
            'um_estandar' => [
        'required',
        'string',
        'max:50',
        Rule::unique('pgsql.inventario.clasificacion_unidades_medidas')],
            'simbolo_um' => [
        'required',
        'string',
        'max:5',
        Rule::unique('pgsql.inventario.clasificacion_unidades_medidas')],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $clasificacion_unidades_medidas = new InventarioUnidadMedidaEstandar;
            $clasificacion_unidades_medidas->clasificacion_um = $request->clasificacion_um;
            $clasificacion_unidades_medidas->um_estandar = $request->um_estandar;
            $clasificacion_unidades_medidas->simbolo_um = $request->simbolo_um;
            $clasificacion_unidades_medidas->estado = 1;
            $clasificacion_unidades_medidas->u_creacion = Auth::user()->usuario;
            $clasificacion_unidades_medidas->id_empresa = $conf;
            $clasificacion_unidades_medidas->save();

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
            'id_clasificacion_unidad_medida' => 'required|integer|min:1',
            'clasificacion_um' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.clasificacion_unidades_medidas')->ignore($request->id_clasificacion_unidad_medida,'id_clasificacion_unidad_medida')],
            'um_estandar' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.clasificacion_unidades_medidas')->ignore($request->id_clasificacion_unidad_medida,'id_clasificacion_unidad_medida')],
            'simbolo_um' => [
                'required',
                'string',
                'max:5',
                Rule::unique('pgsql.inventario.clasificacion_unidades_medidas')->ignore($request->id_clasificacion_unidad_medida,'id_clasificacion_unidad_medida')],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $clasificacion_unidad_medida = InventarioUnidadMedidaEstandar::find($request->id_clasificacion_unidad_medida);
            $clasificacion_unidad_medida->clasificacion_um = $request->clasificacion_um;
            $clasificacion_unidad_medida->um_estandar = $request->um_estandar;
            $clasificacion_unidad_medida->simbolo_um = $request->simbolo_um;
            $clasificacion_unidad_medida->estado = 1;
            $clasificacion_unidad_medida->u_modificacion = Auth::user()->usuario;
            $clasificacion_unidad_medida->save();

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
            'id_clasificacion_unidad_medida' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $clasificacion_unidad_medida = InventarioUnidadMedidaEstandar::find($request->id_clasificacion_unidad_medida);
            $clasificacion_unidad_medida->estado = 0;
            $clasificacion_unidad_medida->u_modificacion = Auth::user()->usuario;
            $clasificacion_unidad_medida->save();

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
            'id_clasificacion_unidad_medida' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $clasificacion_unidad_medida = InventarioUnidadMedidaEstandar::find($request->id_clasificacion_unidad_medida);
            $clasificacion_unidad_medida->estado = 1;
            $clasificacion_unidad_medida->u_modificacion = Auth::user()->usuario;
            $clasificacion_unidad_medida->save();
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