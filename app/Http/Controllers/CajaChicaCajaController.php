<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\AdmonMenus;
use App\Models\CajaChicaCaja;
use App\Models\CajaChicaNormativa;
use App\Models\CajaChicaViaticos;
use App\Models\ContabilidadCuentasBancarias;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\PublicAreas;
use App\Models\PublicSucursales;
use App\Models\RRHHTrabajadores;
use PHPJasper\PHPJasper;
use Validator,Auth, DB;
use App\Models\PublicZonas;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class CajaChicaCajaController extends Controller
{
    /**
     * Obtener una lista de normativas (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param Request $request
     * @param CajaChicaCaja $caja
     * @return  json(array)
     */

    public function obtener(Request $request, CajaChicaCaja $caja)
    {
        $caja = $caja->obtenerCaja($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $caja->total(), 
                'rows' => $caja->items()
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

    public function obtenerTodas(Request $request, CajaChicaCaja $caja)
    {
        $caja = CajaChicaCaja::orderby('id_caja_chica')->get();
        return response()->json([
            'status' => 'success',
            'result' => $caja,
            'messages' => null
        ]);
    }

    /**
     * obtener caja Especifica
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerCaja(Request $request)
    {
        $rules = [
            'id_caja_chica'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $caja = CajaChicaCaja::where('id_caja_chica',$request->id_caja_chica)->with('trabajadorCaja','sucursalCaja','areaCaja')->first();
            $trabajador = RRHHTrabajadores::select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"))
                ->get();
            $sucursal = PublicSucursales::select('id_sucursal','descripcion','serie')->get();
            $area = PublicAreas::select('id_area','codigo','descripcion')->get();

            if(!empty($caja)){
            return response()->json([
                'status' => 'success',
                'result' => [
                    'trabajadores' => $trabajador,
                    'sucursales' => $sucursal,
                    'areas' => $area,
                    'caja' => $caja
                ],
                'messages' => null
            ]);

        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_Caja_chica'=>["Datos no encontrados"]),
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

            'trabajador' => 'required|array|min:1',
            'trabajador.id_trabajador' => 'required|integer|min:1',

            'area' => 'required|array|min:1',
            'area.id_area' => 'required|integer|min:1',

            'sucursal' => 'required|array|min:1',
            'sucursal.id_sucursal' => 'required|integer|min:1',

            'descripcion' => 'required| max:250'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $caja = new CajaChicaCaja;
            $caja->descripcion = strtoupper($request ->descripcion);
            $caja->anio = $request->anio;
            $caja->monto = $request->monto;
            $caja->saldo_actual = $request->monto;
            $caja->id_trabajador = $request->trabajador['id_trabajador'];
            $caja->id_sucursal = $request->sucursal['id_sucursal'];
            $caja->id_area = $request->area['id_area'];
            $caja->u_creacion = Auth::user()->usuario;
            $caja->estado = 1;
            $caja->save();

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

            'anio' => 'required|integer',

            'trabajador_caja' => 'required|array|min:1',
            'trabajador_caja.id_trabajador' => 'required|integer|min:1',

            'area_caja' => 'required|array|min:1',
            'area_caja.id_area' => 'required|integer|min:1',

            'sucursal_caja' => 'required|array|min:1',
            'sucursal_caja.id_sucursal' => 'required|integer|min:1',

            'descripcion' => 'required|max:250'

        ];



        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $caja = CajaChicaCaja::find($request->id_caja_chica);
            $caja->descripcion = strtoupper($request ->descripcion);
            $caja->anio = $request->anio;
            $caja->monto = $request->monto;
            $caja->id_trabajador = $request->trabajador_caja['id_trabajador'];
            $caja->id_sucursal = $request->sucursal_caja['id_sucursal'];
            $caja->id_area = $request->area_caja['id_area'];
            $caja->u_modificacion = Auth::user()->usuario;
            $caja->save();

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
     * Desactiva caja
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function desactivar(Request $request)
    {
        $rules = [
            'id_caja_chica' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $caja = CajaChicaCaja::find($request->id_caja_chica);
            $caja->estado = 0;
            $caja->save();

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
     * Activa caja
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function activar(Request $request)
    {
        $rules = [
            'id_caja_chica' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $caja = CajaChicaCaja::find($request->id_caja_chica);
            $caja->estado = 1;
            $caja->save();

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
        $trabajador = RRHHTrabajadores::select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"))->get();
        $sucursal = PublicSucursales::select('id_sucursal','descripcion','serie')->get();
        $area = PublicAreas::select('id_area','codigo','descripcion')->get();

        $periodos = ContabilidadPeriodoFiscal::select('id_periodo_fiscal','periodo')->with('mesesPeriodo')->get();

        $listado_reportes = AdmonMenus::select('admon.menus.id_menu')->join('admon.roles_menus','admon.menus.id_menu','admon.roles_menus.id_menu')
            ->join('admon.roles','admon.roles.id_rol','admon.roles_menus.id_rol')
            ->where('admon.roles.id_rol',Auth::user()->id_rol)
            ->where('admon.menus.activo',1)
            ->where('admon.menus.tipo_menu',4)
            ->orderBy('admon.menus.secuencia')
            ->get();

        $cuentas_bancarias = ContabilidadCuentasBancarias::select('contabilidad.cuentas_bancarias.id_cuenta_bancaria','contabilidad.cuentas_bancarias.id_banco',
            'contabilidad.cuentas_bancarias.id_moneda',
            DB::raw("CONCAT(cjabnco.bancos.descripcion,' (',cjabnco.monedas.descripcion,')') AS cuenta"))
        ->join('cjabnco.bancos','cjabnco.bancos.id_banco','contabilidad.cuentas_bancarias.id_banco')
        ->join('cjabnco.monedas','cjabnco.monedas.id_moneda','contabilidad.cuentas_bancarias.id_moneda')->get();

        $cuentas_bancarias_cordobas = ContabilidadCuentasBancarias::select('contabilidad.cuentas_bancarias.id_cuenta_bancaria','contabilidad.cuentas_bancarias.id_banco',
            'contabilidad.cuentas_bancarias.id_moneda',
            DB::raw("CONCAT(cjabnco.bancos.descripcion,' (',cjabnco.monedas.descripcion,')') AS cuenta"))
            ->join('cjabnco.bancos','cjabnco.bancos.id_banco','contabilidad.cuentas_bancarias.id_banco')
            ->join('cjabnco.monedas','cjabnco.monedas.id_moneda','contabilidad.cuentas_bancarias.id_moneda')
            ->where('contabilidad.cuentas_bancarias.id_moneda',1)->get();

        $cuentas_bancarias_dolares = ContabilidadCuentasBancarias::select('contabilidad.cuentas_bancarias.id_cuenta_bancaria','contabilidad.cuentas_bancarias.id_banco',
            'contabilidad.cuentas_bancarias.id_moneda',
            DB::raw("CONCAT(cjabnco.bancos.descripcion,' (',cjabnco.monedas.descripcion,')') AS cuenta"))
            ->join('cjabnco.bancos','cjabnco.bancos.id_banco','contabilidad.cuentas_bancarias.id_banco')
            ->join('cjabnco.monedas','cjabnco.monedas.id_moneda','contabilidad.cuentas_bancarias.id_moneda')
            ->where('contabilidad.cuentas_bancarias.id_moneda',3)->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'trabajadores' => $trabajador,
                'sucursales' => $sucursal,
                'areas' => $area,
                'periodos' => $periodos,
                'lista_reportes'=>$listado_reportes,
                'cuentas_bancarias' =>$cuentas_bancarias,
                'cuentas_bancarias_cordobas'=>$cuentas_bancarias_cordobas,
                'cuentas_bancarias_dolares'=>$cuentas_bancarias_dolares,
            ],
            'messages' => null
        ]);

    }

    public function generarReporteCaja(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/caja_chica';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'caja_chica';
                $input = '/var/www/html/resources/reports/caja_chica';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'caja_chica';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/caja_chica';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'caja_chica';
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

                  /*exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                  print_r($output);*/

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteCajaChica.' . $request->extension, $headers);

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

    public function generarReporteChequesEmitidos(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'id_cuenta_bancaria'=>'required|integer'
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/caja_chica';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'caja_chica';
                $input = '/var/www/html/resources/reports/ReporteChequesEmitidos';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteChequesEmitidos';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/caja_chica';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'caja_chica';
                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'empresa_nombre' => $nombre_empresa->valor,
                        'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail,
                        'id_cuenta_bancaria' => $request->id_cuenta_bancaria,
                        'fechaInicial' => $request->fechaInicial,
                        'fechaFinal' => $request->fechaFinal,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteChequesEmitidos.' . $request->extension, $headers);

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

    public function generarReporteMinutasDepositos(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'id_cuenta_bancaria'=>'required|integer'
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteMinutasDeposito';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'ReporteMinutasDeposito';
                $input = '/var/www/html/resources/reports/ReporteMinutasDeposito';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteMinutasDeposito';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/caja_chica';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'caja_chica';
                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'empresa_nombre' => $nombre_empresa->valor,
                        'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail,
                        'id_cuenta_bancaria' => $request->id_cuenta_bancaria,
                        'id_sucursal' => $request->id_sucursal,
                        'fechaInicial' => $request->fechaInicial,
                        'fechaFinal' => $request->fechaFinal,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteChequesEmitidos.' . $request->extension, $headers);

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

}