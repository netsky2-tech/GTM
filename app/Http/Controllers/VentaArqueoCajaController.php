<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\CajaBancoBancos;
use App\Models\CajaBancoTasasCambios;
use App\Models\PublicDepartamentos;
use App\Models\PublicImpuestos;
use App\Models\PublicZonas;
use App\Models\VentaArqueoCaja;
use App\Models\VentaArqueoCajaDocumentos;
use App\Models\VentaArqueoCajaMovBancos;
use App\Models\VentaTiposCliente;
use App\Models\VentaVendedores;
use PHPJasper\PHPJasper;
use Validator,Auth,DB;
use App\Models\VentaClientes;
use Illuminate\Http\Request;

class VentaArqueoCajaController extends Controller
{

    public function registrar(Request $request)
    {
        $rules = [
            'fecha_arqueo' => 'required|date',
            'vendedor' => 'required|array|min:1',
            'vendedor.id_vendedor' => 'required|integer|min:1',
            'observaciones'=>'nullable|string|max:300',

            'cantidad_mil' => 'required|integer|min:0',
            'cantidad_quinientos' => 'required|integer|min:0',
            'cantidad_doscientos' => 'required|integer|min:0',
            'cantidad_cien' => 'required|integer|min:0',
            'cantidad_cincuenta' => 'required|integer|min:0',
            'cantidad_veinte' => 'required|integer|min:0',
            'cantidad_diez' => 'required|integer|min:0',
            'cantidad_cinco' => 'required|integer|min:0',
            'cantidad_uno' => 'required|integer|min:0',
            'cantidad_cincuenta_centavos' => 'required|integer|min:0',
            'cantidad_cien_dol' => 'required|integer|min:0',
            'cantidad_cincuenta_dol' => 'required|integer|min:0',
            'cantidad_veinte_dol' => 'required|integer|min:0',
            'cantidad_diez_dol' => 'required|integer|min:0',
            'cantidad_cinco_dol' => 'required|integer|min:0',
            'cantidad_uno_dol' => 'required|integer|min:0',

            'tasa_cambio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'total_retencion' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'monto_pagado_minuta' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'monto_pagado_efectivo' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'monto_pagado_tarjeta' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'monto_pagado_cheque' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'monto_pagado_transferencia' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'monto_pagado' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'monto_credito' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'monto_ingreso' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',

            'total_a_depositar' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'sobrante_faltante' => 'required|numeric',

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            try{

                DB::beginTransaction();

                $arqueo = new VentaArqueoCaja();
                $arqueo->observaciones = $request->observaciones;
                $arqueo->fecha_arqueo = $request->fecha_arqueo;
                $arqueo->u_creacion = Auth::user()->usuario;

                $arqueo->id_vendedor=$request->vendedor['id_vendedor'];

                $arqueo->cantidad_mil=$request->cantidad_mil;
                $arqueo->cantidad_quinientos=$request->cantidad_quinientos;
                $arqueo->cantidad_doscientos=$request->cantidad_doscientos;
                $arqueo->cantidad_cien=$request->cantidad_cien;
                $arqueo->cantidad_cincuenta=$request->cantidad_cincuenta;
                $arqueo->cantidad_veinte=$request->cantidad_veinte;
                $arqueo->cantidad_diez=$request->cantidad_diez;
                $arqueo->cantidad_cinco=$request->cantidad_cinco;
                $arqueo->cantidad_uno=$request->cantidad_uno;
                $arqueo->cantidad_cincuenta_centavos=$request->cantidad_cincuenta_centavos;

                $arqueo->cantidad_cien_dol=$request->cantidad_cien_dol;
                $arqueo->cantidad_cincuenta_dol=$request->cantidad_cincuenta_dol;
                $arqueo->cantidad_veinte_dol=$request->cantidad_veinte_dol;
                $arqueo->cantidad_diez_dol=$request->cantidad_diez_dol;
                $arqueo->cantidad_cinco_dol=$request->cantidad_cinco_dol;
                $arqueo->cantidad_uno_dol=$request->cantidad_uno_dol;

                $arqueo->tasa_cambio=$request->tasa_cambio;
                $arqueo->total_retencion=$request->total_retencion;
                $arqueo->monto_pagado_minuta=$request->monto_pagado_minuta;
                $arqueo->monto_pagado_efectivo=$request->monto_pagado_efectivo;
                $arqueo->monto_pagado_tarjeta=$request->monto_pagado_tarjeta;
                $arqueo->monto_pagado_cheque=$request->monto_pagado_cheque;
                $arqueo->monto_pagado_transferencia=$request->monto_pagado_transferencia;
                $arqueo->monto_pagado=$request->monto_pagado;
                $arqueo->monto_credito=$request->monto_credito;
                $arqueo->monto_ingresos=$request->monto_ingreso;

                $arqueo->total_a_depositar=$request->total_a_depositar;
                $arqueo->sobrante_faltante=$request->sobrante_faltante;
                $arqueo->entregado_por='';
                $arqueo->recibido_por='';
                $arqueo->revisado_por='';
                $arqueo->observaciones=$request->observaciones;
                $arqueo->estado = 1;
                $arqueo->save();

                foreach ($request->detalleFacturas as $documento) {

                    $arqueo_doc= new VentaArqueoCajaDocumentos();
                    $arqueo_doc->id_arqueo=$arqueo->id_arqueo;
                    $arqueo_doc->f_factura=$documento['f_factura'];
                    $arqueo_doc->no_documento=$documento['no_documento']==null?'':$documento['no_documento'];
                    $arqueo_doc->no_recibo=$documento['no_recibo']==null?'':$documento['no_recibo'];
                    $arqueo_doc->doc_exonera=$documento['doc_exonera'];
                    $arqueo_doc->mt_retencion=$documento['mt_retencion'];
                    $arqueo_doc->monto_pagado_minuta=$documento['monto_pagado_minuta'];
                    $arqueo_doc->monto_pagado_efectivo=$documento['monto_pagado_efectivo'];
                    $arqueo_doc->monto_pagado_tarjeta=$documento['monto_pagado_tarjeta'];

                    $arqueo_doc->monto_pagado_cheque=$documento['monto_pagado_cheque'];
                    $arqueo_doc->monto_pagado_transferencia=$documento['monto_pagado_transferencia'];
                    $arqueo_doc->monto_pagado=$documento['monto_pagado'];
                    $arqueo_doc->mt_total=$documento['mt_total'];
                    $arqueo_doc->mt_deuda=$documento['mt_deuda'];
                    $arqueo_doc->estado=$documento['estado'];
                    $arqueo_doc->id_factura=$documento['id_factura'];
                    $arqueo_doc->id_recibo=$documento['id_recibo'];
                    $arqueo_doc->tipo_doc=$documento['tipo_doc'];
                    $arqueo_doc->estadox=$documento['estadox'];
                    $arqueo_doc->save();

                }


                foreach ($request->bancos_montos as $documento) {

                    $arqueo_doc= new VentaArqueoCajaMovBancos();
                    $arqueo_doc->id_arqueo=$arqueo->id_arqueo;
                    $arqueo_doc->id_banco=$documento['id_banco'];
                    $arqueo_doc->descripcion=$documento['descripcion'];
                    $arqueo_doc->monto_tran_cordobas=$documento['monto_cheque_banco'];
                    $arqueo_doc->monto_tran_dolares=0;
                    $arqueo_doc->tipo=1;
                    $arqueo_doc->save();
                }

                foreach ($request->bancos_montos_trans as $documento) {

                    $arqueo_doc= new VentaArqueoCajaMovBancos();
                    $arqueo_doc->id_arqueo=$arqueo->id_arqueo;
                    $arqueo_doc->id_banco=$documento['id_banco'];
                    $arqueo_doc->descripcion=$documento['descripcion'];
                    $arqueo_doc->monto_tran_cordobas=$documento['monto_tran_cordobas'];
                    $arqueo_doc->monto_tran_dolares=$documento['monto_tran_dolares'];
                    $arqueo_doc->tipo=2;
                    $arqueo_doc->save();
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

    public function obtener(Request $request, VentaArqueoCaja $solicitud)
    {
        $solicitud = $solicitud->obtener($request);
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
     * Obtener una lista de facturas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerDatosArqueo(Request $request)
    {
        $rules = [
            'fecha_arqueo' => 'required|date',
            'id_vendedor' => 'required|integer|min:1',
    ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $arqueo = DB::select('SELECT * from venta.cargararqueodiario(?,?)', array($request->id_vendedor, $request->fecha_arqueo));
            $bancos_cheques = CajaBancoBancos::select('id_banco','descripcion'
                ,DB::raw("venta.cargarMontoChequesArqueoDiario(".$request->id_vendedor.",'".$request->fecha_arqueo."',5,id_banco) AS monto_cheque_banco")
            )->orderby('descripcion')->get();

            $bancos_min_transf = CajaBancoBancos::select('id_banco','descripcion'
                ,DB::raw("venta.cargarMontoTranfMinutasArqueoDiario(".$request->id_vendedor.",'".$request->fecha_arqueo."',1,id_banco) AS monto_tran_cordobas")
                ,DB::raw("venta.cargarMontoTranfMinutasArqueoDiario(".$request->id_vendedor.",'".$request->fecha_arqueo."',3,id_banco) AS monto_tran_dolares")
            )->orderby('descripcion')->get();

            $arqueox = VentaArqueoCaja::where('fecha_arqueo',$request->fecha_arqueo)->where('id_vendedor',$request->id_vendedor)->where('estado',1)->first();

            //$existe_arqueo=false;
            (!empty($arqueox))?$existe_arqueo=true:$existe_arqueo=false;

            return response()->json([
                'status' => 'success',
                'result'=> ['arqueo'=> $arqueo,'bancos'=>$bancos_cheques,'bancos_min_transf'=>$bancos_min_transf,'existe_arqueo'=>$existe_arqueo],
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


    public function anular(Request $request)
    {

        $messages = [
        ];


        $rules = [
            'id_arqueo' => 'required|integer',
            'causa_anulacion' => 'required|string|max:100',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $compra_usado = VentaArqueoCaja::find($request->id_arqueo);
                $compra_usado->estado = 0;
                $compra_usado->causa_anulacion = $request->causa_anulacion;
                $compra_usado->save();

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

   


    public function nuevo(Request $request)
    {
        $vendedores = VentaVendedores::select('id_vendedor','nombre_completo','id_zona')->get();
        $tasaObj = CajaBancoTasasCambios::select('tasa','tasa_paralela')->where('fecha',date("Y-m-d"))->first();

        $tasa_cambio = $tasaObj->tasa;
        $tasa_paralela = $tasaObj->tasa_paralela;
        return response()->json([
            'status' => 'success',
            'result' => [
                'vendedores' => $vendedores,
                'tasa_cambio'=>$tasa_cambio,
                'tasa_paralela'=>$tasa_paralela
            ],
            'messages' => null
        ]);

    }


//generarReporteEstadoCuentadetallado
    public function generarReporteArqueo(Request $request)
    {
        // echo $ext;
        $rules = [
            'id_arqueo' => 'required|integer|min:1|exists:pgsql.venta.arqueo_caja,id_arqueo',
            'extension' => 'required|string|max:4'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();

                $input = '/var/www/html/resources/reports/ArqueoCaja';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'ArqueoCaja';

                //$input = 'C:/xampp7/htdocs/resources/reports/ArqueoCaja';
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'ArqueoCaja';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = 'C:/xampp7/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_arqueo' => $request->id_arqueo,
                        'directorioReports'=>$url,
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

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                if($request->extension == 'html'){
                    $headers = [
                        'Content-Type' => 'text/html',
                    ];
                }

                /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ArqueoCaja.' . $request->extension, $headers);

            }
            else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }

        }else{
            return '';
        }
    }



}