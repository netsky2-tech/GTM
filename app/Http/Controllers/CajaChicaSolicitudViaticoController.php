<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\CajaChicaSolicitudViatico;
use App\Models\CajaChicaSolicitudViaticoDistribucion;
use App\Models\CajaChicaViaticos;
use App\Models\RRHHTrabajadores;
use Hash, Validator;
//use App\Models\CajaChicaSolicitudViaticoDetalle;
//use App\Models\AdmonUsuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;

class CajaChicaSolicitudViaticoController extends Controller
{

    /**
     * Busqueda de solicitud
     *
     * @access  public
     * @param Request $request
     * @param CajaChicaSolicitudViatico $solicitud
     * @return  json(array)
     */

    public function buscar(Request $request, CajaChicaSolicitudViatico $solicitud)
    {
        $solicitud = $solicitud->buscar($request);
        return response()->json([
            'results' => $solicitud
        ]);
    }

	/**
     * Obtener Lista de solicitud de viaticos con paginación
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, CajaChicaSolicitudViatico $solicitud)
    {
        $solicitud = $solicitud->obtenerSolicitud($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $solicitud->total(), 
                'rows' => $solicitud->items()
            ],
            'messages' => null
        ]);
	}
	
    /**
     * Obtener solicitud especifica
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerSolicitud(Request $request)
    {
        $rules = [
            'id_solicitud_viatico'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $solicitud = CajaChicaSolicitudViatico::where('id_solicitud_viatico',$request->id_solicitud_viatico)->with('solicitudDistribucion')->with('solicitudTrabajador')
                /*->with(['solicitudDetalles' => function($query){$query->with('solicitudViatico');}])*/->first();
            $trabajador = RRHHTrabajadores::select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"))
                ->get();
            $viatico_desayuno = CajaChicaViaticos::select('id_viatico','descripcion','monto','id_normativa',DB::raw("CONCAT(descripcion,'( ',monto,')') AS viatico_con_monto"))->where('id_normativa',1)->get();
            $viatico_almuerzo = CajaChicaViaticos::select('id_viatico','descripcion','monto','id_normativa',DB::raw("CONCAT(descripcion,'( ',monto,')') AS viatico_con_monto"))->where('id_normativa',2)->get();
            $viatico_cena = CajaChicaViaticos::select('id_viatico','descripcion','monto','id_normativa',DB::raw("CONCAT(descripcion,'( ',monto,')') AS viatico_con_monto"))->where('id_normativa',3)->get();
            $viatico_transporte = CajaChicaViaticos::select('id_viatico','descripcion','monto','id_normativa',DB::raw("CONCAT(descripcion,'( ',monto,')') AS viatico_con_monto"))->where('id_normativa',4)->get();
            $viatico_hospedaje = CajaChicaViaticos::select('id_viatico','descripcion','monto','id_normativa',DB::raw("CONCAT(descripcion,'( ',monto,')') AS viatico_con_monto"))->where('id_normativa',5)->get();
            $viaticos = CajaChicaViaticos::select('id_viatico','descripcion','monto')->get();

            if(!empty($solicitud)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'trabajadores' => $trabajador,
                        'solicitud' => $solicitud,
                        'viaticos' => $viaticos,
                        'viatico_desayuno' => $viatico_desayuno,
                        'viatico_almuerzo' => $viatico_almuerzo,
                        'viatico_cena' => $viatico_cena,
                        'viatico_transporte' => $viatico_transporte,
                        'viatico_hospedaje' => $viatico_hospedaje,
                    ],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_solicitud_viatico'=>["Datos no encontrados"]),
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
     * Registrar nueva solicitud
     *
     * @access 	public
     * @param 	
     * @return 	json(string)
     */

	public function registrar(Request $request)
	{
		$rules = [
			'fecha_solicitud' => 'required|date',
            'total' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
			'concepto' => '|string|max:200',
            'trabajador' =>'required|array|min:1',
            'trabajador.id_trabajador' =>'required|integer|min:1',


            'cantidad' => 'required|integer',
          //  'total' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',

            'distribucionSolicitud' => 'required|array|min:1',
            'distribucionSolicitud.*.fecha_viatico' => 'required|date',
            'distribucionSolicitud.*.id_viatico_desayuno' => 'nullable|integer',
            'distribucionSolicitud.*.id_viatico_almuerzo' => 'nullable|integer',
            'distribucionSolicitud.*.id_viatico_cena' => 'nullable|integer',
            'distribucionSolicitud.*.id_viatico_transporte' => 'nullable|integer',
            'distribucionSolicitud.*.id_viatico_hospedaje' => 'nullable|integer',
            'distribucionSolicitud.*.monto_desayuno' => 'numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'distribucionSolicitud.*.monto_almuerzo' => 'numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'distribucionSolicitud.*.monto_cena' => 'numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'distribucionSolicitud.*.monto_transporte' => 'numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'distribucionSolicitud.*.monto_hospedaje' => 'numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'distribucionSolicitud.*.total' => 'numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',

		];

		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {

			try {
                DB::beginTransaction();

                $solicitud = new CajaChicaSolicitudViatico;
                $solicitud->fecha_solicitud = $request->fecha_solicitud;
                $solicitud->monto_total = $request->total;
                $solicitud->concepto = strtoupper($request->concepto);
                $solicitud->id_trabajador = $request->trabajador['id_trabajador'];
                $solicitud->u_creacion = Auth::user()->usuario;
                $solicitud->estado = 1;
                $solicitud->save();

                $j = 1;
                foreach ($request->distribucionSolicitud as $solicitud_distribucion) {
                    $distribucion = new CajaChicaSolicitudViaticoDistribucion;
                    $distribucion->id_solicitud_viatico = $solicitud->id_solicitud_viatico;
                    $distribucion->fecha_viatico = $solicitud_distribucion['fecha_viatico'];

                    if($solicitud_distribucion['id_viatico_desayuno'] == null){
                        $distribucion->id_viatico_desayuno = 0;
                        $distribucion->monto_desayuno = 0;
                    }else
                        {
                            $distribucion->id_viatico_desayuno = $solicitud_distribucion['id_viatico_desayuno'];
                            $distribucion->monto_desayuno = $solicitud_distribucion['monto_desayuno'];
                        }

                    if($solicitud_distribucion['id_viatico_almuerzo'] == null)
                    {
                        $distribucion->id_viatico_almuerzo = 0;
                        $distribucion->monto_almuerzo = 0;
                    }else
                        {
                            $distribucion->id_viatico_almuerzo = $solicitud_distribucion['id_viatico_almuerzo'];
                            $distribucion->monto_almuerzo = $solicitud_distribucion['monto_almuerzo'];
                        }

                    if($solicitud_distribucion['id_viatico_cena'] == null)
                    {
                        $distribucion->id_viatico_cena = 0;
                        $distribucion->monto_cena = 0;
                    }else
                        {
                            $distribucion->id_viatico_cena = $solicitud_distribucion['id_viatico_cena'];
                            $distribucion->monto_cena = $solicitud_distribucion['monto_cena'];
                        }

                    if($solicitud_distribucion['id_viatico_transporte'] == null)
                    {
                        $distribucion->id_viatico_transporte = 0;
                        $distribucion->monto_transporte = 0;
                    }else
                        {
                            $distribucion->id_viatico_transporte = $solicitud_distribucion['id_viatico_transporte'];
                            $distribucion->monto_transporte = $solicitud_distribucion['monto_transporte'];
                        }

                    if($solicitud_distribucion['id_viatico_hospedaje'] == null){

                        $distribucion->id_viatico_hospedaje = 0;
                        $distribucion->monto_hospedaje = 0;
                    }else
                        {
                            $distribucion->id_viatico_hospedaje = $solicitud_distribucion['id_viatico_hospedaje'];
                            $distribucion->monto_hospedaje = $solicitud_distribucion['monto_hospedaje'];
                        }

                    $distribucion->total = $solicitud_distribucion['subtotal'];
                    $distribucion->save();
                    $j++;
                }

			DB::commit();
			return response()->json([
				'status' => 'success',
				'result' => null,
				'messages' => null
			]);
        } catch (Exception $e){
			DB::rollBack();
			return response()->json([
				'status' => 'error',
				'result' => 'Error de base de datos',
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
     * Update Existing User
     *
     * @access 	public
     * @param 	
     * @return 	json(string)
     */

	public function actualizar(Request $request)
	{
		$rules = [
			'id_solicitud_viatico' => 'required|integer|min:1',

            'fecha_solicitud' => 'required|date',
            'total' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'concepto' => '|string|max:200',
            'solicitud_trabajador' =>'required|array|min:1',
            'solicitud_trabajador.id_trabajador' =>'required|integer|min:1',


            'cantidad' => 'required|integer',

            'solicitud_distribucion' => 'required|array|min:1',
            'solicitud_distribucion.*.fecha_viatico' => 'required|date',
            'solicitud_distribucion.*.id_viatico_desayuno' => 'integer',
            'solicitud_distribucion.*.id_viatico_almuerzo' => 'integer',
            'solicitud_distribucion.*.id_viatico_cena' => 'integer',
            'solicitud_distribucion.*.id_viatico_transporte' => 'integer',
            'solicitud_distribucion.*.id_viatico_hospedaje' => 'integer',
            'solicitud_distribucion.*.monto_desayuno' => 'numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'solicitud_distribucion.*.monto_almuerzo' => 'numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'solicitud_distribucion.*.monto_cena' => 'numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'solicitud_distribucion.*.monto_transporte' => 'numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'solicitud_distribucion.*.monto_hospedaje' => 'numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'solicitud_distribucion.*.total' => 'numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
		];
	
		
		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {

			try{
			DB::beginTransaction();


			    $solicitud = CajaChicaSolicitudViatico::findOrFail($request->id_solicitud_viatico);
                if($solicitud->estado == 1 || $solicitud->estado ==2){
                $solicitud->monto_total = $request->total;
                $solicitud->concepto= strtoupper($request->concepto);
                $solicitud -> id_trabajador = $request->solicitud_trabajador['id_trabajador'];
                $solicitud->u_modificacion = Auth::user()->usuario;
                $solicitud->estado = $request->estado;
                $solicitud->save();

                //CajaChicaSolicitudViaticoDetalle::where('id_solicitud_viatico',$solicitud->id_solicitud_viatico)->delete();

                    //$detalles = new CajaChicaSolicitudViaticoDetalle;
                    //$detalles->id_solicitud_viatico = $solicitud->id_solicitud_viatico;
                    //$detalles->cantidad = $request->cantidad;
                    //$detalles->total = $request->total_monto;
                    //$detalles->save();

                    $j = 1;

                    CajaChicaSolicitudViaticoDistribucion::where('id_solicitud_viatico', $solicitud->id_solicitud_viatico)->delete();//update(['activo' => false]);


                    foreach ($request->solicitud_distribucion as $solicitud_distribucion) {
                        $distribucion = new CajaChicaSolicitudViaticoDistribucion;
                        $distribucion->id_solicitud_viatico = $solicitud->id_solicitud_viatico;
                        $distribucion->fecha_viatico = $solicitud_distribucion['fecha_viatico'];
                        $distribucion->id_viatico_desayuno = $solicitud_distribucion['id_viatico_desayuno'];
                        $distribucion->monto_desayuno = $solicitud_distribucion['monto_desayuno'];
                        $distribucion->id_viatico_almuerzo = $solicitud_distribucion['id_viatico_almuerzo'];
                        $distribucion->monto_almuerzo = $solicitud_distribucion['monto_almuerzo'];
                        $distribucion->id_viatico_cena = $solicitud_distribucion['id_viatico_cena'];
                        $distribucion->monto_cena = $solicitud_distribucion['monto_cena'];
                        $distribucion->id_viatico_transporte = $solicitud_distribucion['id_viatico_transporte'];
                        $distribucion->monto_transporte = $solicitud_distribucion['monto_transporte'];
                        $distribucion->id_viatico_hospedaje = $solicitud_distribucion['id_viatico_hospedaje'];
                        $distribucion->monto_hospedaje = $solicitud_distribucion['monto_hospedaje'];
                        $distribucion->total = $solicitud_distribucion['subtotal'];
                        $distribucion->save();
                        $j++;

                    }
                }else
                    {
                        return response()->json([
                            'status' => 'error',
                            'result' => array('id_solicitud_viatico'=>['El estado de la solicitud a cambiado externamente']),
                            'messages' => null
                        ]);
                    }
			DB::commit();
			return response()->json([
				'status' => 'success',
				'result' => null,
				'messages' => null
			]);
        } catch (Exception $e){
			DB::rollBack();
			return response()->json([
				'status' => 'error',
				'result' => 'Error de base de datos',
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

    public function desactivar(Request $request)
    {
        $rules = [
            'id_solicitud_viatico' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $solicitud = CajaChicaSolicitudViatico::find($request->id_solicitud_viatico);
            $solicitud->estado = 0;
            $solicitud->save();

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
            'id_solicitud_viatico' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $solicitud = CajaChicaSolicitudViatico::find($request->id_solicitud_viatico);
            $solicitud->estado = 1;
            $solicitud->save();

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
        $trabajadores = RRHHTrabajadores::select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"))->get();
        $viatico_desayuno = CajaChicaViaticos::select('id_viatico','descripcion','monto','id_normativa',DB::raw("CONCAT(descripcion,'( ',monto,')') AS viatico_con_monto"))->where('id_normativa',1)->get();
        $viatico_almuerzo = CajaChicaViaticos::select('id_viatico','descripcion','monto','id_normativa',DB::raw("CONCAT(descripcion,'( ',monto,')') AS viatico_con_monto"))->where('id_normativa',2)->get();
        $viatico_cena = CajaChicaViaticos::select('id_viatico','descripcion','monto','id_normativa',DB::raw("CONCAT(descripcion,'( ',monto,')') AS viatico_con_monto"))->where('id_normativa',3)->get();
        $viatico_transporte = CajaChicaViaticos::select('id_viatico','descripcion','monto','id_normativa',DB::raw("CONCAT(descripcion,'( ',monto,')') AS viatico_con_monto"))->where('id_normativa',4)->get();
        $viatico_hospedaje = CajaChicaViaticos::select('id_viatico','descripcion','monto','id_normativa',DB::raw("CONCAT(descripcion,'( ',monto,')') AS viatico_con_monto"))->where('id_normativa',5)->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'trabajadores' => $trabajadores,
                'viatico_desayuno' => $viatico_desayuno,
                'viatico_almuerzo' => $viatico_almuerzo,
                'viatico_cena' => $viatico_cena,
                'viatico_transporte' => $viatico_transporte,
                'viatico_hospedaje' => $viatico_hospedaje,
            ],
            'messages' => null
        ]);

    }

    public function generarReporte($ext,$id_solicitud_viatico)
    {
        // echo $ext;
        //$ext = 'xls';
        $os = array("xls", "pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/Solicitud_viatico';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'Solicitud_viatico';
            $input = '/var/www/html/resources/reports/Solicitud_viatico';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'Solicitud_viatico';
            //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/Solicitud_viatico';
            //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'Solicitud_viatico';
            $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
            $url = '/var/www/html/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_solicitud_viatico' => $id_solicitud_viatico,
                    'empresa_nombre' => $nombre_empresa->valor,
                    'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail],
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'FormatoSolicitudViatico.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}