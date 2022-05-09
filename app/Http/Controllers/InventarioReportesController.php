<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\AdmonMenus;
use App\Models\InventarioBodegas;
use App\Models\InventarioProductos;
use App\Models\InventarioTipoEntrada;
use App\Models\InventarioTipoSalida;
use Hash, Validator,Auth;
use App\Models\InventarioKardex;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class InventarioReportesController extends Controller
{
    /**
     * Get List of salidas
     *
     * @access  public
     * @param
     * @return  json(array)
     */


    public function reporteKardex(Request $request, InventarioKardex $kardex)
    {
        $rules = [
            'id_bodega_producto' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $kardex = $kardex->reporteKardex($request);

            return response()->json([
                'status' => 'success',
                'result' => $kardex,
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

    public function reporteSalidaPorTipo(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'id_tipo_salida' => 'required|integer',
            'fechaInicio' => 'required|date',
            'fechaFinal' => 'required|date',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'E:/xampp/htdocs/resources/reports/ReporteSalidaPorTipo';
                //$output = 'E:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteSalidaPorTipo';
                $input = '/var/www/html/resources/reports/ReporteSalidaPorTipo';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteSalidaPorTipo';
                $conf = session()->get('id_empresa');
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaInicio' => $request->fechaInicio,
                        'fechaFinal' => $request->fechaFinal,
                        'id_tipo_salida' => $request->id_tipo_salida,
                        'id_empresa' => $conf,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteSalidaPorTipo.' . $request->extension, $headers);

                /*exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                print_r($output);*/

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
    public function reporteEntradaPorTipo(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'id_tipo_entrada' => 'required|integer',
            'fechaInicio' => 'required|date',
            'fechaFinal' => 'required|date',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'E:/xampp/htdocs/resources/reports/ReporteEntradaPorTipo';
                //$output = 'E:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteEntradaPorTipo';
                $input = '/var/www/html/resources/reports/ReporteEntradaPorTipo';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteEntradaPorTipo';
                $conf = session()->get('id_empresa');
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaInicio' => $request->fechaInicio,
                        'fechaFinal' => $request->fechaFinal,
                        'id_tipo_entrada' => $request->id_tipo_entrada,
                        'id_empresa' => $conf,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteSalidaPorTipo.' . $request->extension, $headers);

                /*exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                print_r($output);*/

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
    public function reporteExistenciaLote(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'no_lote' => 'required|string',
            'id_bodega' => 'required|integer',
            'id_producto' => 'required|integer',
            'id_presentacion' => 'required|integer',

        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                $input = 'E:/xampp/htdocs/resources/reports/ExistenciasPorLote';
                $output = 'E:/xampp/htdocs/resources/reports/' . $hora_actual . 'ExistenciasPorLote';
                //$input = '/var/www/html/resources/reports/ExistenciasPorLote';
                //$output = '/var/www/html/resources/reports/'.$hora_actual.'ExistenciasPorLote';
                $conf = session()->get('id_empresa');
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_bodega' => $request->id_bodega,
                        'id_producto' => $request->id_producto,
                        'id_presentacion' => $request->id_presentacion,
                        'no_lote' => $request->no_lote,
                        'id_empresa' => $conf,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteExistenciaPorLote.' . $request->extension, $headers);

                /*exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                print_r($output);*/

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


    public function pdf($id, Request $request)
    {
        $data = InventarioSalidas::where('id_empresa', '=', $request->id_empresa)->with(['salidaProductos', 'salidaBodega', 'salidaTipo'])->findOrFail($id);

        $items = collect($data->salidaProductos);
        $data->sub_total = $items->sum(function ($item) {
            return $item['cantidad'] * $item['precio_unitario'];
        });

        $data->total = $items->sum(function ($item) {
            return $item['cantidad'] * $item['precio_unitario'];
        });

        $data->log_registro = json_decode($data->log_salida);

        $doc = 'docs.salida';
        //print_r($data);
        return pdf($doc, $data, strtoupper('Salida ' . $data->codigo_salida));
    }


    public function reporteInventarioFisico(Request $request)
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
                //$input = 'C:/xampp/htdocs/resources/reports/FormatoInventarioFisico';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'FormatoInventarioFisico';
                $input = '/var/www/html/resources/reports/FormatoInventarioFisico';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'FormatoInventarioFisico';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
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

                /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
              print_r($output);*/

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download($output . '.' . $request->extension, $hora_actual . 'FormatoInventarioFisico.' . $request->extension, $headers);
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


    public function reporteInventarioExistencias(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3'
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ProductoExistencia';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ProductoExistencia';
                $input = '/var/www/html/resources/reports/ProductoExistencia';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ProductoExistencia';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/ProductoExistencia';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'ProductoExistencia';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                //echo $logo_empresa->file_thumbnail;
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_bodega' => $request->id_bodega,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'FormatoExistencia.' . $request->extension, $headers);

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
    public function reporteHerramientaExistencias(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3'
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'E:/xampp/htdocs/resources/reports/herramientrasExistencia';
                //$output = 'E:/xampp/htdocs/resources/reports/' . $hora_actual . 'herramientrasExistencia';
                $input = '/var/www/html/resources/reports/herramientrasExistencia';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'herramientrasExistencia';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/herramientrasExistencia';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'herramientrasExistencia';
                $conf = session()->get('id_empresa');
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=',$conf )->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_bodega' => $request->id_bodega,
                        'empresa_nombre' => $nombre_empresa->valor,
                        'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail,
                        'id_empresa' => $conf
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'herramientrasExistencia.' . $request->extension, $headers);

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

    public function reporteExistenciaPorCategoria(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3'
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteExistenciaPorCategoria';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteExistenciaPorCategoria';
                $input = '/var/www/html/resources/reports/ReporteExistenciaPorCategoria';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteExistenciaPorCategoria';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/ReporteExistenciaPorCategoria';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'ReporteExistenciaPorCategoria';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'categoria' => $request->categoria,
                        'id_bodega' => $request->id_bodega,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'herramientrasExistencia.' . $request->extension, $headers);

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

    public function reporteRequisasBodegas(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'id_bodega' => 'required|integer',
            'fechaInicio' => 'required|date',
            'fechaFinal' => 'required|date',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteRequisas';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteRequisas';
                $input = '/var/www/html/resources/reports/ReporteRequisas';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteRequisas';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/ReporteRequisas';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'ReporteRequisas';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaInicio' => $request->fechaInicio,
                        'fechaFinal' => $request->fechaFinal,
                        'id_bodega' => $request->id_bodega,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteRequisas.' . $request->extension, $headers);

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
    public function reporteSalidaProducto(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            /*'id_bodega' => 'required|integer',*/
            'fechaInicio' => 'required|date',
            'fechaFinal' => 'required|date',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'E:/xampp/htdocs/resources/reports/ReporteSalidaporProducto';
                //$output = 'E:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteSalidaporProducto';
                $input = '/var/www/html/resources/reports/ReporteSalidaporProducto';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteSalidaporProducto';
                $conf = session()->get('id_empresa');
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = 'C:/xampp/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaInicio' => $request->fechaInicio,
                        'fechaFinal' => $request->fechaFinal,
                        'id_empresa' => $conf,
                        /*'id_bodega' => $request->id_bodega,*/
                        'empresa_nombre' => $nombre_empresa->valor,
                        /*'directorioReports' => $url,*/
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

                  /*exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                  print_r($output);*/

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteSalidaProducto.' . $request->extension, $headers);

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

    public function reporteSalidaTraslado(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            /*'id_bodega' => 'required|integer',*/
            'fechaInicio' => 'required|date',
            'fechaFinal' => 'required|date',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteTrasladoProductosporBodega';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteTrasladoProductosporBodega';
                $input = '/var/www/html/resources/reports/ReporteTrasladoProductosporBodega';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteTrasladoProductosporBodega';
                $conf = session()->get('id_empresa');
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = 'C:/xampp/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fechaInicio' => $request->fechaInicio,
                        'fechaFinal' => $request->fechaFinal,
                        /*'id_bodega' => $request->id_bodega,*/
                        'id_empresa' => $conf,
                        'empresa_nombre' => $nombre_empresa->valor,
                        /*'directorioReports' => $url,*/
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

                /*exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                print_r($output);*/

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteSalidasConsolidado.' . $request->extension, $headers);

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

    public function reporteDetallesProductos(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'fecha_entrada' => 'required|date',

        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                $nombre_reporte=$request->extension=='xls'?'ReporteDetalleProductosXLS':'ReporteDetalleProductos';
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteDetalleProductos';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteDetalleProductos';
                $input = '/var/www/html/resources/reports/'.$nombre_reporte;
                $output = '/var/www/html/resources/reports/'.$hora_actual.$nombre_reporte;
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/ReporteDetalleProductos';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'ReporteDetalleProductos';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'fecha_entrada' => $request->fecha_entrada,
                        'empresa_nombre' => $nombre_empresa->valor,
                        'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail,
                        'directorioReports' => $url,
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

                 /*exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                  print_r($output);*/

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteDetalleProductos.' . $request->extension, $headers);

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
    public function reporteConsolidadoActivacion(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'id_bodega' => 'required|integer',

        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ConsolidadoProductosFechaActivacion';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ConsolidadoProductosFechaActivacion';
                $input = '/var/www/html/resources/reports/ConsolidadoProductosFechaActivacion';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ConsolidadoProductosFechaActivacion';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/ConsolidadoProductosFechaActivacion';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'ConsolidadoProductosFechaActivacion';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                // $url = '/var/www/html/resources/reports/';
                $url = 'C:/xampp/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_bodega' => $request->id_bodega,
                        'empresa_nombre' => $nombre_empresa->valor,
                        'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail,
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

                /*exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                 print_r($output);*/

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ConsolidadoProductosFechaActivacion.' . $request->extension, $headers);

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

    public function reporteGeneralArticulo(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            //'id_bodega' => 'required|integer',
            //'fechaInicio' => 'required|date',
            //'fechaFinal' => 'required|date',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteGeneralArticulos';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteGeneralArticulos';
                $input = '/var/www/html/resources/reports/ReporteGeneralArticulos';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteGeneralArticulos';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/ReporteGeneralArticulos';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'ReporteGeneralArticulos';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        //'fechaInicio' => $request->fechaInicio,
                        //'fechaFinal' => $request->fechaFinal,
                        //'id_bodega' => $request->id_bodega,
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

                  /*exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                  print_r($output);*/

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteGeneralArticulos.' . $request->extension, $headers);

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

    public function reporteGeneralArticuloPorTipo(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            //'id_bodega' => 'required|integer',
            //'fechaInicio' => 'required|date',
            //'fechaFinal' => 'required|date',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
               // $input = 'C:/xampp/htdocs/resources/reports/ReporteGeneralArticulosPorTipo';
               // $output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteGeneralArticulosPorTipo';
                $input = '/var/www/html/resources/reports/ReporteGeneralArticulosPorTipo';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteGeneralArticulosPorTipo';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/ReporteGeneralArticulosPorTipo';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'ReporteGeneralArticulosPorTipo';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        //'fechaInicio' => $request->fechaInicio,
                        //'fechaFinal' => $request->fechaFinal,
                        //'id_bodega' => $request->id_bodega,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteGeneralArticulosPorTipo.' . $request->extension, $headers);

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

    public function reporteGeneralServicios(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            //'id_bodega' => 'required|integer',
            //'fechaInicio' => 'required|date',
            //'fechaFinal' => 'required|date',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteGeneralServicios';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteGeneralServicios';
                $input = '/var/www/html/resources/reports/ReporteGeneralServicios';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteGeneralServicios';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/ReporteGeneralServicios';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'ReporteGeneralServicios';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        //'fechaInicio' => $request->fechaInicio,
                        //'fechaFinal' => $request->fechaFinal,
                        //'id_bodega' => $request->id_bodega,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteGeneralServicios.' . $request->extension, $headers);

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

    public function reporteGeneralServiciosTipos(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            //'id_bodega' => 'required|integer',
            //'fechaInicio' => 'required|date',
            //'fechaFinal' => 'required|date',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteGeneralServiciosPorTipo';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteGeneralServiciosPorTipo';
                $input = '/var/www/html/resources/reports/ReporteGeneralServiciosPorTipo';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteGeneralServiciosPorTipo';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/ReporteGeneralServiciosPorTipo';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'ReporteGeneralServiciosPorTipo';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        //'fechaInicio' => $request->fechaInicio,
                        //'fechaFinal' => $request->fechaFinal,
                        //'id_bodega' => $request->id_bodega,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteGeneralServiciosPorTipo.' . $request->extension, $headers);

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

    public function selectCategoria()
    {
        $conf = session()->get('id_empresa');

        $categorias = DB::select(DB::raw("select distinct(case when p.tipo_producto=3 and bd.id_submarca in (7) then
                         (select sm.descripcion from inventario.baterias_submarcas sm where sm.id_submarca=bd.id_submarca)
                     when p.tipo_producto=3 and bd.id_submarca not in (7) then
                         (select m.descripcion from inventario.baterias_marcas m
                                                        left join inventario.baterias_submarcas sm on sm.id_marca=m.id_marca
                          where sm.id_submarca=bd.id_submarca)
                     when p.tipo_producto=1 then 'Herramientas y accesorios'
                     else 'Otro' end   ) as marca_tipo from inventario.productos p
         left join inventario.baterias_detalles bd on bd.id_producto=p.id_producto
where p.tipo_producto in (1,3) and p.activo =1
order by marca_tipo;"));

//        $bodegas = InventarioBodegas::select(['id_bodega',DB::raw("descripcion AS text")])->get();
        $bodegas = InventarioBodegas::select(['id_bodega',DB::raw("descripcion AS text")])->where('activo', 1)->whereIn('id_tipo_bodega',array(1,2))->get();

        $tipos_salidas = InventarioTipoSalida::where('estado',1)->where('id_empresa',$conf)->whereNotIn('id_tipo_salida',array(4))->get();
        $tipos_entradas = InventarioTipoEntrada::where('estado',1)->where('id_empresa',$conf)->whereNotIn('id_tipo_entrada',array(7))->get();

        $productos = InventarioProductos::select(['id_producto','codigo_sistema','nombre_comercial',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text")])
            ->where('activo', 1)->whereIn('tipo_producto', array( 1,3))->orderBy('nombre_comercial', 'asc')
            ->get();

        $listado_reportes = AdmonMenus::select('admon.menus.id_menu')->join('admon.roles_menus','admon.menus.id_menu','admon.roles_menus.id_menu')
            ->join('admon.roles','admon.roles.id_rol','admon.roles_menus.id_rol')
            ->where('admon.roles.id_rol',Auth::user()->id_rol)
            ->where('admon.menus.activo',1)
            ->where('admon.menus.tipo_menu',4)
            //->where('admon.menus.id_empresa', '=', $request->id_empresa)
            //->where('admon.roles.id_empresa', '=', $request->id_empresa)
            ->orderBy('admon.menus.secuencia')
            ->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'categorias' => $categorias,
                'bodegas' => $bodegas,
                'tipos_salidas' => $tipos_salidas,
                'tipos_entradas' => $tipos_entradas,
                'productos' => $productos,
                'lista_reportes'=>$listado_reportes

            ],
            'messages' => null
        ]);

    }

}



