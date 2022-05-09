<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use PHPJasper\PHPJasper;
use Validator,Auth,DB;
use App\Models\CuentasXPagarCuentasXPagar;
use Illuminate\Http\Request;

class CuentasXPagarCuentasXPagarController extends Controller
{
    /**
     * Obtener una lista de Cuentas Por Cpbrar
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtener(Request $request, CuentasXPagarCuentasXPagar $cuenta_x_cobrar)
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

    public function obtenerCuentasProveedor(Request $request, CuentasXPagarCuentasXPagar $cuentas)
    {
        $cuentas = $cuentas->obtenerCuentasProveedor($request);

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
            'id_cuentaxpagar' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cuenta_x_cobrar = CuentasXPagarCuentasXPagar::find($request->id_cuentaxpagar);
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
            'extension' => 'required|string|max:3'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/AntiguedadSaldosProveedores';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'AntiguedadSaldosProveedores';
                $input = '/var/www/html/resources/reports/AntiguedadSaldosProveedores';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'AntiguedadSaldosProveedores';

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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'AntiguedadSaldosProveedores.' . $request->extension, $headers);

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
            'id_proveedor' => 'required|integer|min:1|exists:pgsql.inventario.proveedores,id_proveedor',
            'extension' => 'required|string|max:4'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/EstadoCuentaProveedorDetalle';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'EstadoCuentaProveedorDetalle';
                $input = '/var/www/html/resources/reports/EstadoCuentaProveedorDetalle';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'EstadoCuentaProveedorDetalle';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaCorte' => $request->fechaCorte,
                        'id_proveedor' => $request->id_proveedor,
                        'directorioReports'=>$url,
                        'fechaInicial' => $request->fechaInicial,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'EstadoCuentaProveedorDetalle.' . $request->extension, $headers);

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
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/EstadoCuentaProveedorConsolidado';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'EstadoCuentaProveedorConsolidado';
                $input = '/var/www/html/resources/reports/EstadoCuentaProveedorConsolidado';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'EstadoCuentaProveedorConsolidado';

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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'EstadoCuentaProveedorConsolidado.' . $request->extension, $headers);

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


}