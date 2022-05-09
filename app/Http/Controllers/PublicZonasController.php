<?php 

namespace App\Http\Controllers;

use App\Models\CajaChicaViaticos;
use App\Models\ContabilidadCentroCostoIngreso;
use App\Models\RRHHTrabajadores;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\PublicZonas;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class PublicZonasController extends Controller
{
    /**
     * Obtener una lista de Roles (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, PublicZonas $zonas)
    {
        $zonas = $zonas->obtenerZonas($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $zonas->total(), 
                'rows' => $zonas->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de zonas sin paginacion
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerZonas(Request $request, PublicZonas $zonas)
    {
        $zonas = PublicZonas::select('id_zona','descripcion','activo')->where('activo',1)->get();
        return response()->json([
            'status' => 'success',
            'result' => ['zonas' => $zonas],
            'messages' => null
        ]);
    }

    /**
     * obtener Rol Especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerZona(Request $request)
    {
        $rules = [
            'id_zona'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $zona = PublicZonas::with('zonaCentroCosto')->with('zonaCentroIngreso')->where('id_zona',$request->id_zona)->first();

            $centros_ingresos = ContabilidadCentroCostoIngreso::select('id_centro','descripcion','codigo',DB::raw("concat(codigo,' ',descripcion) as descripcion_completa"))
                ->where('estado',1)->where('tipo_centro',2)->orderby('codigo')->get();

            $centros_costos = ContabilidadCentroCostoIngreso::select('id_centro','descripcion','codigo',DB::raw("concat(codigo,' ',descripcion) as descripcion_completa"))
                ->where('estado',1)->where('tipo_centro',1)->orderby('codigo')->get();
            if(!empty($zona)){
            return response()->json([
                'status' => 'success',
                'result' => [
                    'zona'=>$zona,
                    'centros_costos'=>$centros_costos,
                    'centros_ingresos'=>$centros_ingresos,
                ],
                'messages' => null
            ]);

        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_zona'=>["Datos no encontrados"]),
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
     * Crear un nuevo rol
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $rules = [
            'descripcion' => 'required|string|max:100|unique:pgsql.public.zonas,descripcion',
            'centro_costo'=>'required|array|min:1',
            'centro_costo.id_centro'=>'required|integer|min:1',
            'centro_ingreso'=>'required|array|min:1',
            'centro_ingreso.id_centro'=>'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $zona = new PublicZonas;
            $zona->descripcion = $request->descripcion;

            $zona->id_centro_ingreso = $request->centro_ingreso['id_centro'];
            $zona->id_centro_costo = $request->centro_costo['id_centro'];

            $codigo_nuevo = $zona->obtenerCodigoZona();
            $str_length = 3;
            $str = substr("00{$codigo_nuevo['secuencia']}", -$str_length);

            $zona->codigo = $str;

            $zona->u_grabacion = Auth::user()->usuario;
            $zona->activo = 1;
            $zona->save();

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
            'id_zona' => 'required|integer|min:1',
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.public.zonas')->ignore($request->id_zona,'id_zona')
            ],
            'zona_centro_costo'=>'required|array|min:1',
            'zona_centro_costo.id_centro'=>'required|integer|min:1',
            'zona_centro_ingreso'=>'required|array|min:1',
            'zona_centro_ingreso.id_centro'=>'required|integer|min:1',
        ];



        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $zona = PublicZonas::find($request->id_zona);
            $zona->descripcion = $request->descripcion;
            $zona->u_modificacion = Auth::user()->usuario;

            $zona->id_centro_ingreso = $request->zona_centro_ingreso['id_centro'];
            $zona->id_centro_costo = $request->zona_centro_costo['id_centro'];

            $zona->save();

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
            'id_zona' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $zona = PublicZonas::find($request->id_zona);
            $zona->activo = 0;
            $zona->save();

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
     * Activa rol
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function activar(Request $request)
    {
        $rules = [
            'id_zona' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $rol = PublicZonas::find($request->id_zona);
            $rol->activo = 1;
            $rol->save();



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
    public function nuevo(Request $request)/*cambiar esta chuchada : nota: ya no, ya lo hice*/
    {
        $centros_ingresos = ContabilidadCentroCostoIngreso::select('id_centro','descripcion','codigo',DB::raw("concat(codigo,' ',descripcion) as descripcion_completa"))
            ->where('estado',1)->where('tipo_centro',2)->orderby('codigo')->get();

        $centros_costos = ContabilidadCentroCostoIngreso::select('id_centro','descripcion','codigo',DB::raw("concat(codigo,' ',descripcion) as descripcion_completa"))
            ->where('estado',1)->where('tipo_centro',1)->orderby('codigo')->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'centros_costos' => $centros_costos,
                'centros_ingresos' => $centros_ingresos,
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
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteZonas';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteZonas';
             $input = '/var/www/html/resources/reports/ReporteZonas';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteZonas';

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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteZonas.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}