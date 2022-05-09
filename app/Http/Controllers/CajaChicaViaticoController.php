<?php 

namespace App\Http\Controllers;

use App\Models\CajaChicaNormativa;
use App\Models\CajaChicaViaticos;
use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\PublicZonas;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class CajaChicaViaticoController extends Controller
{
    /**
     * Obtener una lista de normativas (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param Request $request
     * @param CajaChicaViaticos $viaticos
     * @return  json(array)
     */

    public function obtener(Request $request, CajaChicaViaticos $viaticos)
    {
        $viaticos = $viaticos->obtenerViatico($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $viaticos->total(), 
                'rows' => $viaticos->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de viaticos sin paginacion
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodas(Request $request, CajaChicaViaticos $viaticos)
    {
        $viaticos = CajaChicaViaticos::orderby('id_viatico')->get();
        return response()->json([
            'status' => 'success',
            'result' => $viaticos,
            'messages' => null
        ]);
    }

    /**
     * obtener viatico Especifica
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerViatico(Request $request)
    {
        $rules = [
            'id_viatico'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $viatico = CajaChicaViaticos::where('id_viatico',$request->id_viatico)->with('normativaViatico')->first();
            $normativas = CajaChicaNormativa::select('id_normativa','concepto','monto_minimo','monto_maximo')->get();

            if(!empty($viatico)){
            return response()->json([
                'status' => 'success',
                'result' => [
                    'normativas' => $normativas,
                    'viatico' => $viatico
                ],
                'messages' => null
            ]);

        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_viatico'=>["Datos no encontrados"]),
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
     * Crear un nuevo viatico
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $rules = [
            'descripcion' => 'required|string|max:100|unique:pgsql.cjachica.viaticos,descripcion',
            'normativa' => 'required|array|min:1',
            'normativa.id_normativa' => 'required|integer|min:1',
            'monto' => 'numeric|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $viaticos = new CajaChicaViaticos;
            $viaticos->descripcion = $request->descripcion;
            $viaticos->id_normativa = $request->normativa['id_normativa'];
            $viaticos->monto = $request->monto;
            $viaticos->u_creacion = Auth::user()->usuario;
            $viaticos->estado = 1;
            $viaticos->save();

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
            'id_viatico' => 'required|integer|min:1',
            'descripcion' => [
                'required',
                'string',
                'max:100',

                Rule::unique('pgsql.cjachica.viaticos')->ignore($request->id_viatico,'id_viatico')
            ],
            'monto' => 'numeric|min:1'

        ];



        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $viaticos = CajaChicaViaticos::find($request->id_viatico);
            $viaticos->descripcion = $request->descripcion;
            $viaticos->id_normativa = $request->normativa_viatico['id_normativa'];
            $viaticos->monto = $request->monto;
            $viaticos->u_modificacion = Auth::user()->usuario;
            $viaticos->save();

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
     * Desactiva normativa
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function desactivar(Request $request)
    {
        $rules = [
            'id_viatico' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $viaticos = CajaChicaViaticos::find($request->id_viatico);
            $viaticos->estado = 0;
            $viaticos->save();

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
     * Activa normativa
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function activar(Request $request)
    {
        $rules = [
            'id_viatico' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $viaticos = CajaChicaViaticos::find($request->id_viatico);
            $viaticos->estado = 1;
            $viaticos->save();

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

    public function nuevo(Request $request)
    {
        $normativa = CajaChicaNormativa::select('id_normativa','concepto','monto_minimo','monto_maximo')->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'normativas' => $normativa,
            ],
            'messages' => null
        ]);

    }

    public function generarReporte($ext)
    {
        // echo $ext;
        // $ext = 'pdf';
        $os = array("xls", "pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/Reporte_Viatico';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'Reporte_Viatico';
             $input = '/var/www/html/resources/reports/Reporte_Viatico';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'Reporte_Viatico';

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

            return response()->download($output . '.' . $ext ,$hora_actual. 'Reporte_Viatico.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}