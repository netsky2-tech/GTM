<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use PHPJasper\PHPJasper;
use Validator,Auth,DB;
use App\Models\CuentasXCobrarCuentasXCobrar;
use Illuminate\Http\Request;

class CuentasXCobrarCuentasXCobrarController extends Controller
{
    /**
     * Obtener una lista de Cuentas Por Cpbrar
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtener(Request $request, CuentasXCobrarCuentasXCobrar $cuenta_x_cobrar)
    {
        $cuenta_x_cobrar = $cuenta_x_cobrar->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $cuenta_x_cobrar->total(), 
                'rows' => $cuenta_x_cobrar->items()
            ],
            'messages' => null
        ]);
    }

    public function obtenerCuentasCliente(Request $request, CuentasXCobrarCuentasXCobrar $cuentas)
    {
        $cuentas = $cuentas->obtenerCuentasCliente($request);

        return response()->json([
            'status' => 'success',
            'result' => $cuentas,
            'messages' => null
        ]);
    }


    public function obtenerCuentasTrabajador(Request $request, CuentasXCobrarCuentasXCobrar $cuentas)
    {
        $cuentas = $cuentas->obtenerCuentasTrabajador($request);

        return response()->json([
            'status' => 'success',
            'result' => $cuentas,
            'messages' => null
        ]);
    }



    /**
     * obtener Cuenta Por Cpbrar
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerCuentasXCobrar(Request $request)
    {
        $rules = [
            'id_cuentaxcobrar' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cuenta_x_cobrar = CuentasXCobrarCuentasXCobrar::find($request->id_cuentaxcobrar);
            return response()->json([
                'status' => 'success',
                'result' => $cuenta_x_cobrar,
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



    public function generarReporteAntiguedad(Request $request)
    {
        // echo $ext;
        $rules = [
            'fechaCorte' => 'required|date',
            'id_zona' => 'required|integer',
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

        $os = array("xls", "pdf");
        //echo gethostname();
        if (in_array($request->extension, $os)) {

            $hora_actual = time();
            //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/AntiguedadSaldos';
            //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'AntiguedadSaldos';
            //$input = 'C:/xampp/htdocs/resources/reports/AntiguedadSaldos';
            //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'AntiguedadSaldos';
            $input = '/var/www/html/resources/reports/AntiguedadSaldos';
            $output = '/var/www/html/resources/reports/' . $hora_actual . 'AntiguedadSaldos';
            $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
            $url = '/var/www/html/resources/reports/';

            $options = [
                'format' => [$request->extension],
                'locale' => 'en',
                'params' => [
                 'fechaCorte' => $request->fechaCorte,
                    'id_zona' => $request->id_zona,
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
            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }





    public function generarReporteEstadoCuentadetallado(Request $request)
    {
        // echo $ext;
        $rules = [
            'fechaCorte' => 'required|date',
            'fechaInicial' => 'required|date',
            'id_cliente' => 'required|integer|min:1|exists:pgsql.venta.clientes,id_cliente',
            'extension' => 'required|string|max:4'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/EstadoCuentaClienteDetalle';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'EstadoCuentaClienteDetalle';

                $input = '/var/www/html/resources/reports/EstadoCuentaClienteDetalle';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'EstadoCuentaClienteDetalle';

                //$input = 'C:/xampp7/htdocs/resources/reports/EstadoCuentaClienteDetalle';
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'EstadoCuentaClienteDetalle';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = 'C:/xampp7/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaCorte' => $request->fechaCorte,
                        'id_cliente' => $request->id_cliente,
                        'fechaInicial' => $request->fechaInicial,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'EstadoCuentaClienteDetalle.' . $request->extension, $headers);

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


    public function generarReporteEstadoCuentaConsolidado(Request $request)
    {
        // echo $ext;
        $rules = [
            'fechaCorte' => 'required|date',
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/EstadoCuentaClienteConsolidado';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'EstadoCuentaClienteConsolidado';
                $input = '/var/www/html/resources/reports/EstadoCuentaClienteConsolidado';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'EstadoCuentaClienteConsolidado';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaCorte' => $request->fechaCorte,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'EstadoCuentaClienteConsolidado.' . $request->extension, $headers);

            }
            else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }
            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }




    public function generarReporteEstadoCuentaDetalladoEmpleado(Request $request)
    {
        // echo $ext;
        $rules = [
            'fechaCorte' => 'required|date',
            'fechaInicial' => 'required|date',
            'id_trabajador' => 'required|integer|min:1|exists:pgsql.rrhh.trabajadores,id_trabajador',
            'extension' => 'required|string|max:4'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/EstadoCuentaEmpleadoDetalle';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'EstadoCuentaEmpleadoDetalle';
                $input = '/var/www/html/resources/reports/EstadoCuentaEmpleadoDetalle';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'EstadoCuentaEmpleadoDetalle';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';


                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaCorte' => $request->fechaCorte,
                        'id_trabajador' => $request->id_trabajador,
                        'fechaInicial' => $request->fechaInicial,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'EstadoCuentaEmpleadoDetalle.' . $request->extension, $headers);

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




    public function generarReporteEstadoCuentaConsolidadoEmpleado(Request $request)
    {
        // echo $ext;
        $rules = [
            'fechaCorte' => 'required|date',
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/EstadoCuentaEmpleadoConsolidado';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'EstadoCuentaEmpleadoConsolidado';
                $input = '/var/www/html/resources/reports/EstadoCuentaEmpleadoConsolidado';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'EstadoCuentaEmpleadoConsolidado';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaCorte' => $request->fechaCorte,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'EstadoCuentaEmpleadoConsolidado.' . $request->extension, $headers);

            }
            else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }
            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }




    public function generarReporteEstadoCuentadetalladoOCC(Request $request)
    {
        // echo $ext;
        $rules = [
            'fechaCorte' => 'required|date',
            'fechaInicial' => 'required|date',
            'id_cliente' => 'required|integer|min:1|exists:pgsql.venta.clientes,id_cliente',
            'extension' => 'required|string|max:4'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/EstadoCuentaClienteDetalleOtras';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'EstadoCuentaClienteDetalleOtras';
                $input = '/var/www/html/resources/reports/EstadoCuentaClienteDetalleOtras';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'EstadoCuentaClienteDetalleOtras';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaCorte' => $request->fechaCorte,
                        'id_cliente' => $request->id_cliente,
                        'fechaInicial' => $request->fechaInicial,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'EstadoCuentaClienteDetalleOtras.' . $request->extension, $headers);

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


    public function generarReporteEstadoCuentaConsolidadoOCC(Request $request)
    {
        // echo $ext;
        $rules = [
            'fechaCorte' => 'required|date',
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/EstadoCuentaClienteConsolidadoOtras';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'EstadoCuentaClienteConsolidadoOtras';
                $input = '/var/www/html/resources/reports/EstadoCuentaClienteConsolidadoOtras';
                $output = '/var/www/html/resources/reports/'.$hora_actual .'EstadoCuentaClienteConsolidadoOtras';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaCorte' => $request->fechaCorte,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'EstadoCuentaClienteConsolidadoOtras.' . $request->extension, $headers);

            }
            else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }
            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }else{
            return '';
        }
    }

    public function reporteRecibos(Request $request)
    {
        // echo $ext;
        $rules = [
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteReciboPago';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteReciboPago';
                $input = '/var/www/html/resources/reports/ReporteReciboPago';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'ReporteReciboPago';
                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(\Illuminate\Support\Facades\DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fecha_inicio' => $request->fechaInicio,
                        'fecha_final' => $request->fechaFinal,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteReciboPagoAsociados.' . $request->extension, $headers);
            } else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }
        } else {
            return '';
        }
    }



}