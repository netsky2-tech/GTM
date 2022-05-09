<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\ContabilidadNivelesCuenta;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposCuenta;
use PHPJasper\PHPJasper;
use Validator,Auth,DB;
use Illuminate\Http\Request;

class ContabilidadReportesFinancierosController extends Controller
{

    /**
     * Obtener Balanza Comprobación
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerBalanzaComprobacion(Request $request)
    {
        $rules = [
            'nivel_cuenta' => 'required|array|min:1',
            'nivel_cuenta.id_nivel_cuenta' => 'required|integer|min:1',
            'fecha_inicial' => 'required|date',
            'fecha_final' => 'required|date',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $balanza=DB::select("SELECT * from contabilidad.balanza_comprobacion_cc(?,?,?)",[$request->nivel_cuenta['id_nivel_cuenta'], $request->fecha_inicial, $request->fecha_final]);
            return response()->json([
                'status' => 'success',
                'result' => $balanza,
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
     * Obtener Balance General
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerBalanceGeneral(Request $request)
    {

        $rules = [
            'nivel_cuenta' => 'required|array|min:1',
            'nivel_cuenta.id_nivel_cuenta' => 'required|integer|min:1',
            'mes' => 'required|array|min:1',
            'mes.mes' => 'required|integer|min:1',
            'mes.id_periodo_mes' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
        ];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{
                DB::beginTransaction();
                $mes = ContabilidadPeriodoMeses::find($request->mes['id_periodo_mes']);
                if((!empty($mes))&& $mes->estado == 1){
                DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->periodo['id_periodo_fiscal'],$request->mes['mes']]);
                }
                $balance['activos']=DB::select("SELECT * from contabilidad.balance_general_activos(?,?,?)",[$request->periodo['id_periodo_fiscal'],$request->nivel_cuenta['id_nivel_cuenta'], $request->mes['mes']]);
                $balance['pasivo_capital']=DB::select("SELECT * from contabilidad.balance_general_pasivo_capital(?,?,?)",[$request->periodo['id_periodo_fiscal'],$request->nivel_cuenta['id_nivel_cuenta'], $request->mes['mes']]);
                DB::commit();
                return response()->json([
                    'status' => 'success',
                    'result' => $balance,
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
     * Obtener Estado de Resultados
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerEstadoResultados(Request $request)
    {

        $rules = [
            'mes' => 'required|array|min:1',
            'mes.mes' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
            'mes1' => 'required|array|min:1',
            'mes1.mes' => 'required|integer|min:1',
            'periodo1' => 'required|array|min:1',
            'periodo1.id_periodo_fiscal' => 'required|integer|min:1',
        ];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{
                DB::beginTransaction();
                DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->periodo['id_periodo_fiscal'],$request->mes['mes']]);
                $estado_resultados=DB::select("SELECT * from contabilidad.estado_resultados_comparativo(?,?,?,?)",[$request->periodo['id_periodo_fiscal'],$request->mes['mes'],$request->periodo1['id_periodo_fiscal'],$request->mes1['mes']]);
                DB::commit();
                return response()->json([
                    'status' => 'success',
                    'result' => $estado_resultados,
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


    public function obtenerBalanceGeneralReporte(Request $request)
    {
        // echo $ext;
        $rules = [
            'id_periodox' => 'required|integer',
            'mesx' => 'required|integer',
            'id_mesx' => 'required|integer',
            'id_nivel_cuenta' => 'required|integer',
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {


            try{
                DB::beginTransaction();
                $mes = ContabilidadPeriodoMeses::find($request->id_mesx);
                if((!empty($mes))&& $mes->estado == 1){
                    DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->id_periodox,$request->mesx]);
                }
                DB::commit();


                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $input = ENV('URL_REPORTES').'EstadoSituacionFinanciera';
                    $output = ENV('URL_REPORTES'). $hora_actual . 'EstadoSituacionFinanciera';
                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mesx,
                            'id_periodox' => $request->id_periodox,
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

                    return response()->download($output . '.' . $request->extension, $hora_actual . 'AntiguedadSaldos.' . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }


    public function obtenerEstadoResultadoReporte(Request $request)
    {
        // echo $ext;
        $rules = [
            'id_periodox' => 'required|integer',
            'mesx' => 'required|integer',
            'id_mesx' => 'required|integer',
            'id_periodox1' => 'required|integer',
            'mesx1' => 'required|integer',
            'id_mesx1' => 'required|integer',
            'id_nivel_cuenta' => 'required|integer',
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {


            try{
                DB::beginTransaction();
                $mes = ContabilidadPeriodoMeses::find($request->id_mesx);
                if((!empty($mes))&& $mes->estado == 1){
                    DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->id_periodox,$request->mesx]);
                }
                DB::commit();


                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $input = ENV('URL_REPORTES').'EstadoResultado';
                    $output = ENV('URL_REPORTES'). $hora_actual . 'EstadoResultado';

                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mesx,
                            'id_periodox' => $request->id_periodox,
                            'mesx1' => $request->mesx1,
                            'id_periodox1' => $request->id_periodox1,
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

                    /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                    print_r($output);*/

                    return response()->download($output . '.' . $request->extension, $hora_actual . 'EstadoResultado.' . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }

        public function obtenerDependenciasBalanzaComprobacion(){

            $niveles_cuenta = ContabilidadNivelesCuenta::where('activo',1)->orderby('id_nivel_cuenta','asc')->get();
            $periodos = ContabilidadPeriodoFiscal::select('id_periodo_fiscal','periodo')->orderby('periodo','desc')->with('mesesPeriodo')->get();

            return response()->json([
                    'status' => 'success',
                    'result' => [
                        'niveles_cuenta' => $niveles_cuenta,
                        'periodos'=>$periodos,
                    ],
                    'messages' => null
                ]);
        }

    public function obtenerBalanzaComprobacionRta91(Request $request)
    {
        $rules = [
            'nivel_cuenta' => 'required|array|min:1',
            'nivel_cuenta.id_nivel_cuenta' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
            'fecha_inicial' => 'required|date',
            'fecha_final' => 'required|date',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $balanza=DB::select("SELECT * from contabilidad.balanza_comprobacion(?,?,?) where id_periodo= ?",
                [$request->nivel_cuenta['id_nivel_cuenta'], $request->fecha_inicial, $request->fecha_final/*,$request->nivel_cuenta['id_nivel_cuenta']*/,
                    $request->periodo['id_periodo_fiscal']]);



            return response()->json([
                'status' => 'success',
                'result' => $balanza,
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



    public function obtenerReporteBalanzaComprobacion(Request $request)
    {
        // echo $ext;
        $rules = [
            'id_periodox' => 'required|integer',
            'id_mesx' => 'required|integer',
            'id_nivel_cuenta' => 'required|integer',
            'tipo_reporte' => 'required|integer',
            'extension' => 'required|string|max:3',
            'fechaInicio' => 'required|date',
            'fechaFinal' => 'required|date',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            try{
                DB::beginTransaction();
                $mes = ContabilidadPeriodoMeses::find($request->id_mesx);
                if((!empty($mes))&& $mes->estado == 1){
                    DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->id_periodox,$mes->mes]);
                }
                DB::commit();


                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $nombre_reporte = $request->tipo_reporte==1?'BalanzaComprobacionConsolidada':'BalanzaComprobacionDetallada';

                    $input = ENV('URL_REPORTES').$nombre_reporte;
                    $output = ENV('URL_REPORTES'). $hora_actual . $nombre_reporte;


                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'fechaInicial' => $request->fechaInicio,
                            'fechaFinal' => $request->fechaFinal,
                            'id_nivelx' => $request->id_nivel_cuenta,
                            'id_periodox' => $request->id_periodox,
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

                    return response()->download($output . '.' . $request->extension, $hora_actual . $nombre_reporte . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }


    public function obtenerLibroDiarioReporte(Request $request)
    {
        // echo $ext;
        $rules = [
            'mes' => 'required|array|min:1',
            'mes.mes' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {


            try{

                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $input = ENV('URL_REPORTES').'LibroDiario';
                    $output = ENV('URL_REPORTES'). $hora_actual . 'LibroDiario';


                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mes['mes'],
                            'id_periodox' => $request->periodo['id_periodo_fiscal'],
                            'aniox' => $request->periodo['periodo'],
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

                    /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                    print_r($output);*/

                    return response()->download($output . '.' . $request->extension, $hora_actual . 'LibroDiario.' . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }



    public function obtenerLibroMayorReporte(Request $request)
    {
        // echo $ext;
        $rules = [
            'mes' => 'required|array|min:1',
            'mes.mes' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {


            try{

                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $input = ENV('URL_REPORTES').'LibroMayor';
                    $output = ENV('URL_REPORTES'). $hora_actual . 'LibroMayor';


                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mes['mes'],
                            'id_periodox' => $request->periodo['id_periodo_fiscal'],
                           // 'aniox' => $request->periodo['periodo'],
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

                    /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                    print_r($output);*/

                    return response()->download($output . '.' . $request->extension, $hora_actual . 'LibroMayor.' . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }


    public function reporteCambioPatrimonio(Request $request)
    {
        // echo $ext;
        $rules = [
            'mes' => 'required|array|min:1',
            'mes.mes' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {


            try{

                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $input = ENV('URL_REPORTES').'EstadoCambioPatrimonio';
                    $output = ENV('URL_REPORTES'). $hora_actual . 'EstadoCambioPatrimonio';

                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mes['mes'],
                            'id_periodox' => $request->periodo['id_periodo_fiscal'],
                          //'aniox' => $request->periodo['periodo'],
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

                    /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                    print_r($output);*/

                    return response()->download($output . '.' . $request->extension, $hora_actual . 'LibroMayor.' . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }


    public function reporteBalanzaComprobacionAnual(Request $request)
    {
        // echo $ext;
        $rules = [
            'mes' => 'required|array|min:1',
            'mes.mes' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
            'id_nivel_cuenta' => 'required|integer',
            'extension' => 'required|string|max:3',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            try{
                DB::beginTransaction();
                $mes = ContabilidadPeriodoMeses::find($request->mes['id_periodo_mes']);
                if((!empty($mes))&& $mes->estado == 1){
                    DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->periodo['id_periodo_fiscal'],$request->mes['id_periodo_mes']]);
                }
                DB::commit();


                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $nombre_reporte = 'BalanzaComprobacionConsolidadaAnual';

                    $input = ENV('URL_REPORTES').$nombre_reporte;
                    $output = ENV('URL_REPORTES'). $hora_actual . $nombre_reporte;


                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mes['mes'],
                            'id_periodox' => $request->periodo['id_periodo_fiscal'],
                            'id_nivelx' => $request->id_nivel_cuenta,
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

                    return response()->download($output . '.' . $request->extension, $hora_actual . $nombre_reporte . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }


    public function reporteNotasBGER(Request $request)
    {
        // echo $ext;
        $rules = [
            'mes' => 'required|array|min:1',
            'mes.mes' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
            'extension' => 'required|string|max:3',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            try{
                DB::beginTransaction();
                $mes = ContabilidadPeriodoMeses::find($request->mes['id_periodo_mes']);
                if((!empty($mes))&& $mes->estado == 1){
                    DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->periodo['id_periodo_fiscal'],$request->mes['id_periodo_mes']]);
                }
                DB::commit();


                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $nombre_reporte = 'ReporteNotas';

                    $input = ENV('URL_REPORTES').$nombre_reporte;
                    $output = ENV('URL_REPORTES'). $hora_actual . $nombre_reporte;


                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mes['mes'],
                            'id_periodox' => $request->periodo['id_periodo_fiscal'],
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

                  /*  exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
            print_r($output);*/

                    $headers = [
                        'Content-Type' => 'application/pdf',
                    ];

                    return response()->download($output . '.' . $request->extension, $hora_actual . $nombre_reporte . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }


    public function reporteAnexoFlujo(Request $request)
    {
        // echo $ext;
        $rules = [
            'mes' => 'required|array|min:1',
            'mes.mes' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
            'extension' => 'required|string|max:3',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            try{
                DB::beginTransaction();
                $mes = ContabilidadPeriodoMeses::find($request->mes['id_periodo_mes']);
                if((!empty($mes))&& $mes->estado == 1){
                    DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->periodo['id_periodo_fiscal'],$request->mes['id_periodo_mes']]);
                }
                DB::commit();


                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $nombre_reporte = 'AnexoFlujoEfectivo';

                    $input = ENV('URL_REPORTES').$nombre_reporte;
                    $output = ENV('URL_REPORTES'). $hora_actual . $nombre_reporte;

                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mes['mes'],
                            'id_periodox' => $request->periodo['id_periodo_fiscal'],
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

                    /*  exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
              print_r($output);*/

                    $headers = [
                        'Content-Type' => 'application/pdf',
                    ];

                    return response()->download($output . '.' . $request->extension, $hora_actual . $nombre_reporte . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }



    public function reporteFlujoEfectivo(Request $request)
    {
        // echo $ext;
        $rules = [
            'mes' => 'required|array|min:1',
            'mes.mes' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
            'extension' => 'required|string|max:3',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            try{
                DB::beginTransaction();
                $mes = ContabilidadPeriodoMeses::find($request->mes['id_periodo_mes']);
                if((!empty($mes))&& $mes->estado == 1){
                    DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->periodo['id_periodo_fiscal'],$request->mes['id_periodo_mes']]);
                }
                DB::commit();


                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $nombre_reporte = 'FlujoEfectivo';

                    $input = ENV('URL_REPORTES').$nombre_reporte;
                    $output = ENV('URL_REPORTES'). $hora_actual . $nombre_reporte;

                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mes['mes'],
                            'id_periodox' => $request->periodo['id_periodo_fiscal'],
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

                    /*  exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
              print_r($output);*/

                    $headers = [
                        'Content-Type' => 'application/pdf',
                    ];

                    return response()->download($output . '.' . $request->extension, $hora_actual . $nombre_reporte . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }



    public function reporteMovimientosCentroCosto(Request $request)
    {
        // echo $ext;
        $rules = [
            'mes' => 'required|array|min:1',
            'mes.mes' => 'required|integer|min:1',
            'periodo' => 'required|array|min:1',
            'periodo.id_periodo_fiscal' => 'required|integer|min:1',
            'centro' => 'required|integer|min:0',
            'extension' => 'required|string|max:3',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            try{
                DB::beginTransaction();
                $mes = ContabilidadPeriodoMeses::find($request->mes['id_periodo_mes']);
                if((!empty($mes))&& $mes->estado == 1){
                    DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->periodo['id_periodo_fiscal'],$request->mes['id_periodo_mes']]);
                }
                DB::commit();


                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $nombre_reporte = 'MovimientosCentroCostos';

                    $input = ENV('URL_REPORTES').$nombre_reporte;
                    $output = ENV('URL_REPORTES'). $hora_actual . $nombre_reporte;

                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mes['mes'],
                            'id_periodox' => $request->periodo['id_periodo_fiscal'],
                            'id_centrox' => $request->centro,
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

                    /*  exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
              print_r($output);*/

                    $headers = [
                        'Content-Type' => 'application/pdf',
                    ];

                    return response()->download($output . '.' . $request->extension, $hora_actual . $nombre_reporte . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }


    public function reporteRFC(Request $request)
    {
        // echo $ext;
        $rules = [
            'id_periodox' => 'required|integer',
            'mesx' => 'required|integer',
            'id_mesx' => 'required|integer',
            'id_periodox1' => 'required|integer',
            'mesx1' => 'required|integer',
            'id_mesx1' => 'required|integer',
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {


            try{
                DB::beginTransaction();
                $mes = ContabilidadPeriodoMeses::find($request->id_mesx);
                if((!empty($mes))&& $mes->estado == 1){
                    DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->id_periodox,$request->mesx]);
                }
                DB::commit();


                $os = array("xls", "pdf");
                //echo gethostname();
                if (in_array($request->extension, $os)) {

                    $hora_actual = time();

                    $nombre_reporte = 'RazonesFinancieras';
                    $input = ENV('URL_REPORTES').$nombre_reporte;
                    $output = ENV('URL_REPORTES'). $hora_actual . $nombre_reporte;


                    $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                    $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                    $url = ENV('URL_REPORTES');

                    $options = [
                        'format' => [$request->extension],
                        'locale' => 'en',
                        'params' => [
                            'mesx' => $request->mesx,
                            'id_periodox' => $request->id_periodox,
                            'mesx1' => $request->mesx1,
                            'id_periodox1' => $request->id_periodox1,
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

                    /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                    print_r($output);*/

                    return response()->download($output . '.' . $request->extension, $hora_actual . 'RazonesFinancieras.' . $request->extension, $headers);

                }
                else {
                    return response()->json([
                        'status' => 'error',
                        'result' => $validator->messages(),
                        'messages' => null
                    ]);
                }

            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }



            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }

}