<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\CajaBancoProformas;
use App\Models\CajaBancoProformasSeguimiento;
use App\Models\CajaChicaCaja;
use App\Models\CajaChicaComprobante;
use App\Models\CajaChicaComprobanteDetalle;
use App\Models\CajaChicaSolicitudViatico;
use App\Models\CajaChicaViaticos;
use App\Models\RRHHGruposFamiliares;
use App\Models\RRHHTrabajadores;
use App\Models\VentaVendedores;
use Hash, Validator;
//use App\Models\CajaChicaSolicitudViaticoDetalle;
//use App\Models\AdmonUsuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;

class CajaBancoProformaSeguimientoController extends Controller
{

    /**
     * Busqueda de solicitud
     *
     * @access  public
     * @param Request $request
     * @param CajaChicaComprobante $seguimiento
     * @return  json(array)
     */

    public function buscar(Request $request, CajaBancoProformasSeguimiento $seguimiento)
    {
        $seguimiento = $seguimiento->buscar($request);
        return response()->json([
            'results' => $seguimiento
        ]);
    }

    /**
     * Obtener Lista de comprobante con paginación
     *
     * @access  public
     * @param Request $request
     * @param CajaBancoProformasSeguimiento $seguimiento
     * @return  json(array)
     */

    public function obtener(Request $request, CajaBancoProformasSeguimiento $seguimiento)
    {
        $seguimiento = $seguimiento->obtenerProformas($request);

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $seguimiento->total(),
                'rows' => $seguimiento->items()
            ],
            'messages' => null
        ]);
    }

	
    /**
     * Obtener comprobante especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerSeguimiento(Request $request)
    {
        $rules = [
            'id_proforma'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $seguimiento = CajaBancoProformasSeguimiento::where('id_proforma',$request->id_proforma)->with('proformaSeguimiento','proformaVendedor')->get();
            $vendedores = VentaVendedores::select('*','nombre_completo as text')->get();
            if(!empty($seguimiento)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'seguimiento' => $seguimiento,
                        'vendedores' => $vendedores
                    ],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_comprobante'=>["Datos no encontrados"]),
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
		            //'id_proforma' => 'integer|integer',
                    'proforma_seguimiento.*.nombre_contacto' => 'required|string',
                    'proforma_seguimiento.*.cargo_contacto' => 'required|string',
                    'proforma_seguimiento.*.medio_contacto' => 'required|integer',
                    'proforma_seguimiento.*.correo' => 'required|string',
                    'proforma_seguimiento.*.telefono' => 'required|string',
                    'proforma_seguimiento.*.nota_seguimiento' => 'required|string',
                    'proforma_seguimiento.*.proximo_contacto' => 'required|date',
                    'proforma_seguimiento.*.proforma_vendedor.id_vendedor' => 'required|integer',

		];

		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {

            try {
                DB::beginTransaction();

                CajaBancoProformasSeguimiento::where('id_proforma',$request->id_proforma)->delete();

                $i = 1;
                foreach ($request->proforma as $seguimiento_detalle) {
                    $seguimiento = new CajaBancoProformasSeguimiento();
                    $seguimiento->id_proforma = $request->id_proforma;
                    $seguimiento->id_trabajador_seguimiento = $seguimiento_detalle['proforma_vendedor']['id_vendedor'];
                    $seguimiento->nombre_contacto = $seguimiento_detalle['nombre_contacto'];
                    $seguimiento->cargo_contacto = $seguimiento_detalle['cargo_contacto'];
                    $seguimiento->medio_contacto = $seguimiento_detalle['medio_contacto'];
                    $seguimiento->correo = $seguimiento_detalle['correo'];
                    $seguimiento->telefono = $seguimiento_detalle['telefono'];
                    $seguimiento->nota_seguimiento = $seguimiento_detalle['nota_seguimiento'];
                    $seguimiento->proximo_contacto = $seguimiento_detalle['proximo_contacto'];
                    $seguimiento->u_grabacion = Auth::user()->usuario;
                    $seguimiento->estado = 1;
                    $seguimiento->save();
                    $i++;
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
     * Update Existing comprobante
     *
     * @access 	public
     * @param 	
     * @return 	json(string)
     */

	public function actualizar(Request $request)
	{
		$rules = [
			'id_comprobante' => 'required|integer|min:1',

            'numero' => 'required|integer',
            'fecha' => 'required|date',
            //'fecha_pago' => 'required|date',
            //'a_favor_de' => 'required|string|max:200',
            'monto_entregado' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'monto_en_letra' => 'required|string',
            'concepto' => 'required|string',
            'tipo_comprobante'=>'required|integer',
            'trabajador_comprobante' =>'required|array|min:1',
            'trabajador_comprobante.id_trabajador' =>'required|integer|min:1',

            'comprobante_detalle' => 'required_if:tipo_comprobante,2|array|min:0|nullable',
            'comprobante_detalle.*.monto' => 'required|integer',
            'comprobante_detalle.*.factura' => 'required|integer',
            'comprobante_detalle.*.nombre_comercio' => 'required|string',
            'comprobante_detalle.*.numero_ruc' => 'required|string',
		];
	
		
		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {

			try{
			DB::beginTransaction();

                $seguimiento =  CajaChicaComprobante::findOrFail($request->id_comprobante);
                $seguimiento->id_caja_chica = $request->caja_comprobante['id_caja_chica'];
                $seguimiento->numero = $request->numero;
                $seguimiento->fecha= $request->fecha;
                $seguimiento -> id_trabajador = $request->trabajador_comprobante['id_trabajador'];
                $seguimiento -> a_favor_de = $request-> a_favor_de;
                $seguimiento -> monto_entregado = $request -> monto_entregado;
                $seguimiento -> monto_en_letra = $request -> monto_en_letra;
                $seguimiento -> concepto = $request -> concepto;
               // $seguimiento -> id_solicitud_viatico = $request->solicitud_comprobante['id_solicitud_viatico'];
                $seguimiento->autorizado = $request->autorizado;
                $seguimiento->fecha_pago = $request->fecha_pago;
                $seguimiento-> tipo_comprobante = $request-> tipo_comprobante;
                $seguimiento->u_modificacion = Auth::user()->usuario;
                $seguimiento->estado = $request->estado;
                $seguimiento->save();

                CajaChicaComprobanteDetalle::where('id_comprobante',$seguimiento->id_comprobante)->delete();

                $i = 1;
                foreach ($request->comprobante_detalle as $seguimiento_detalle) {
                    $detalles = new CajaChicaComprobanteDetalle;
                    $detalles->id_comprobante = $seguimiento->id_comprobante;
                    //$detalles->id_viatico = $seguimiento_detalle['viatico']['id_viatico'];
                    $detalles->monto = $seguimiento_detalle['monto'];
                    $detalles->factura = $seguimiento_detalle['factura'];
                    $detalles->nombre_comercio = $seguimiento_detalle['nombre_comercio'];
                    $detalles->numero_ruc = $seguimiento_detalle['numero_ruc'];
                    $detalles->save();
                    $i++;
                }
               /* }else
                    {
                        return response()->json([
                            'status' => 'error',
                            'result' => array('id_solicitud_viatico'=>['El estado de la solicitud a cambiado externamente']),
                            'messages' => null
                        ]);
                    }*/
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
            'id_comprobante' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $seguimiento = CajaChicaComprobante::find($request->id_comprobante);
            $seguimiento->estado = 0;
            $seguimiento->save();

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
            'id_comprobante' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $seguimiento = CajaChicaSolicitudViatico::find($request->id_solicitud_viatico);
            $seguimiento->estado = 1;
            $seguimiento->save();

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

    public function nueva(Request $request)
    {
        //$proforma = CajaBancoProformas::find($request->id_proforma);
        $vendedores = VentaVendedores::select('*','nombre_completo as text')->get();

        if(!empty($request->id_proforma)) {

            $seguimientos = CajaBancoProformasSeguimiento::where('id_proforma',$request->id_proforma)
                ->with('proformaVendedor')->get();

            $proforma = CajaBancoProformas::find($request->id_proforma);

            return response()->json([
                'status' => 'success',
                'result' => [
                    'no_documento' => $proforma->no_documento,
                    'id_proforma' => $proforma->id_proforma,
                    'seguimientos' => $seguimientos,
                    'vendedores' => $vendedores
                ],
                'messages' => null
            ]);
        }

    }

    public function generarReporteVales(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/Vale_provisional';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'Vale_provisional';
                $input = '/var/www/html/resources/reports/Vale_provisional';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'Vale_provisional';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/Vale_provisional';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'Vale_provisional';
                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'empresa_nombre' => $nombre_empresa->valor,
                        'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail
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

                /*  exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                  print_r($output);*/

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteValeProvisional.' . $request->extension, $headers);

            } else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }
        }    else {
            return '';
        }
    }

    public function generarReporteComprobante($id_comprobante)
    {
        // echo $ext;
        $ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteComprobante';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteComprobante';
            $input = '/var/www/html/resources/reports/ReporteComprobante';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteComprobante';
            $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
            $url = '/var/www/html/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_comprobante' => $id_comprobante,
                    'empresa_nombre' => $nombre_empresa->valor,
                    'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail
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

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
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