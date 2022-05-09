<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\CajaBancoSolicitudesPago;
use App\Models\CajaChicaCaja;
use App\Models\CajaChicaComprobante;
use App\Models\CajaChicaComprobanteDetalle;
use App\Models\CajaChicaReembolso;
use App\Models\CajaChicaReembolsoDetalle;
use App\Models\CajaChicaSolicitudViatico;
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

class CajaChicaReembolsoController extends Controller
{

    /**
     * Busqueda de solicitud
     *
     * @access  public
     * @param Request $request
     * @param CajaChicaComprobante $reembolso
     * @return  json(array)
     */

    public function buscar(Request $request, CajaChicaComprobante $reembolso)
    {
        $reembolso = $reembolso->buscar($request);
        return response()->json([
            'results' => $reembolso
        ]);
    }

    /**
     * Obtener Lista de comprobante con paginación
     *
     * @access  public
     * @param Request $request
     * @param CajaChicaComprobante $reembolso
     * @return  json(array)
     */

    public function obtenerReembolsos(Request $request, CajaChicaReembolso $reembolso)
    {
        $reembolso = $reembolso->obtenerSolicitudReembolso($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $reembolso->total(), 
                'rows' => $reembolso->items()
            ],
            'messages' => null
        ]);
	}

	
    /**
     * Obtener comprobantes con estado 3 para reembolso
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerSolicitudReembolso(Request $request)
    {
        $rules = [
            //'id_comprobante'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
           // $reembolso = CajaChicaComprobante::where('id_comprobante',$request->id_comprobante)->with('trabajadorComprobante','cajaComprobante','solicitudComprobante','comprobanteDetalle')->first();
            $reembolso = CajaChicaComprobante::select('id_comprobante','monto_entregado','concepto','numero','id_trabajador','id_caja_chica','id_solicitud_viatico')
                ->with('trabajadorComprobante','cajaComprobante','solicitudComprobante','comprobanteDetalle')
                ->where('estado',2)->get();
            $cajas = CajaChicaCaja::select('id_caja_chica','descripcion','monto','id_trabajador')->where('id_trabajador',Auth::user()->id_empleado)->with('trabajadorCaja')->get();

            if(!empty($reembolso)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'comprobante' => $reembolso,
                        'cajas' => $cajas
                    ],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_solicitud_reembolso'=>["Datos no encontrados"]),
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

    public function obtenerComp(Request $request)
    {
        $rules = [
            'id_caja_chica' => 'required|integer',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $comp = CajaChicaComprobante::where('id_caja_chica',$request->id_caja_chica)->where('estado',2)->with('trabajadorComprobante','cajaComprobante','solicitudComprobante','comprobanteDetalle')->get();

            if(!empty($comp)){

                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'comp' => $comp,
                    ],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_trabajador'=>["Datos no encontrados"]),
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
     * Registrar nuevo comprobante
     *
     * @access 	public
     * @param 	
     * @return 	json(string)
     */

	public function registrar(Request $request)
	{
		$rules = [
            'fecha_solicitud' => 'required|date',
           // 'monto_entregado' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'descripcion' => 'required|string',

            'comprobante' => 'required',
            'comprobante.*.numero' => 'required|integer',
            'comprobante.*.concepto' => 'required|string',
            'comprobante.*.monto_entregado' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'comprobante.*.trabajador_comprobante' => 'required|array|min:1',
            'comprobante.*.id_trabajador' => 'required|integer|min:1',

		];

		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {
			try{
			    
			DB::beginTransaction();
			
                $reembolso = new CajaChicaReembolso;
                $reembolso->descripcion = $request->descripcion;
                $reembolso->id_trabajador = $request['caja']['trabajador_caja']['id_trabajador'];
                $reembolso->fecha_solicitud = $request->fecha_solicitud;
                $reembolso->u_creacion = Auth::user()->usuario;
                $reembolso->estado = 1;
                $reembolso->save();

                $i = 1;
                foreach ($request->comprobante as $reembolso_detalle) {
                    $detalles = new CajaChicaReembolsoDetalle();
                    $detalles->id_solicitud_reembolso = $reembolso->id_solicitud_reembolso;
                    $detalles->id_comprobante = $reembolso_detalle['id_comprobante'];
                    $detalles->no_comprobante = $reembolso_detalle['numero'];
                    $detalles->beneficiario = $reembolso_detalle['trabajador_comprobante']['id_trabajador'];
                    $detalles->descripcion = $reembolso_detalle['concepto'];
                    $detalles->valor = $reembolso_detalle['monto_entregado'];
                    $detalles->total = $request->total;

                    $comprobante = (CajaChicaComprobante::find($detalles->id_comprobante));
                    $comprobante->estado = 3;
                    $comprobante->save();


                    $detalles->save();
                    $i++;
                }

                //Código para guardar solicitud de pago
                $solicitudPago = new CajaBancoSolicitudesPago;
                //print_r( $comprobante->trabajador_comprobante);
                $solicitudPago->beneficiario = $request['caja']['trabajador_caja']['nombre_completo']; //Nombre completo de empleado vinculado con caja
                $solicitudPago->id_moneda = 1; //Moneda de la caja o moneda seteada en 1 para cordobas
                $solicitudPago->numero_ruc = '';///vacio, no aplica para empleados
                $solicitudPago->numero_cedula = $request['caja']['trabajador_caja']['cedula'];///sacar del maestro de trabajadores
                $solicitudPago->id_trabajador = $request['caja']['trabajador_caja']['id_trabajador'];//identificador del trabajador
                $solicitudPago->id_tipo_beneficiario = 3;//tipo beneficiario 3 es tipo trabajador, tabla cjabnco.tipos_beneficiarios
                $solicitudPago->id_tipo_solicitud = 2;//tipo solicitud reembolso caja chica
                $solicitudPago->concepto = $request->descripcion;//concepto de la solicitud de reembolso
                $solicitudPago->fecha_solicitud = $request->fecha_solicitud;//fecha de la solicitud de reembolso
                $solicitudPago->monto = $request->total;/// monto de la solicitud
                $solicitudPago->monto_letras = $request->monto_letras;///agregar monto en letra
                $solicitudPago->estado = 1;//por defecto estado 1, registrado
                $solicitudPago->u_creacion = Auth::user()->usuario;///usuario
                $solicitudPago->save();///pues guardar!

                $reembolso->id_solicitud_pago = $solicitudPago->id_solicitud_pago;
                $reembolso->save();
  
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

    public function generarReporteReembolso($id_comprobante)
    {
        // echo $ext;
        $ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteSolicitudReembolso';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteSolicitudReembolso';
            $input = '/var/www/html/resources/reports/ReporteSolicitudReembolso';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteSolicitudReembolso';
            $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
            $url = '/var/www/html/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_solicitud_reembolso' => $id_comprobante,
                    'empresa_nombre' => $nombre_empresa->valor,
                    'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail,
                    'directorioReports' => $url
                ],
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

           /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
          print_r($output);*/

            $headers = [
                'Content-Type' => 'application/pdf',
            ];

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteComprobante.' . $ext, $headers);
        }else{
            return '';
        }
    }


}