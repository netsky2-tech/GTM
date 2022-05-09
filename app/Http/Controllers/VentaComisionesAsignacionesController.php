<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\InventarioBateriasMarcas;
use App\Models\VentaVendedores;
use PHPJasper\PHPJasper;
use Validator,Auth,DB;
use App\Models\VentaComisionesAsignaciones;
use Illuminate\Http\Request;

class VentaComisionesAsignacionesController extends Controller
{

    public function obtener(Request $request, VentaVendedores $vendedores)
    {
        $vendedores = $vendedores->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $vendedores->total(),
                'rows' => $vendedores->items()
            ],
            'messages' => null
        ]);
    }

    public function obtenerComisiones(Request $request)
    {
        $rules = [
            'id_vendedor'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $vendedor = VentaVendedores::select('id_vendedor','nombre_completo','id_zona')
                ->whereHas('comisionesAsignadas')->with(['comisionesAsignadas' => function($query)
                { $query->with('comisionMarca');}])
                ->where('id_vendedor',$request->id_vendedor)->first();

            if(!empty($vendedor)){
                return response()->json([
                    'status' => 'success',
                    'result' => $vendedor,
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_vendedor'=>["Datos no encontrados"]),
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

        $vendedores = VentaVendedores::select('id_vendedor','nombre_completo','id_zona')->whereDoesntHave('comisionesAsignadas')->get();
        $marcas = InventarioBateriasMarcas::select('id_marca','descripcion')->with('marcaSubMarcas')->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'marcas' => $marcas,
                'vendedores' => $vendedores
            ],
            'messages' => null
        ]);

    }


    public function registrar(Request $request)
    {

        $messages = [
            'detalleComisiones.*.porcentaje_comision.max' => 'El campo debe ser menos a 10%',
            'detalleComisiones.*.porcentaje_comision_sobremeta.max' => 'El campo debe ser menos a 10%',
        ];


        $rules = [
            'vendedor' => 'required|array|min:1',
            'vendedor.id_vendedor' => 'required|integer|min:1',
            'detalleComisiones' => 'required|array|min:1',

            'detalleComisiones.*.marcax.id_marca' => 'required|integer|min:1',
            'detalleComisiones.*.tipo_meta' => 'required|integer|min:1',

            'detalleComisiones.*.meta_unidades' => 'required|integer|min:0',
            'detalleComisiones.*.meta_monto' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'detalleComisiones.*.porcentaje_comision' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0|max:10',
            'detalleComisiones.*.porcentaje_comision_sobremeta' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0|max:10',

            ];
        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            foreach ($request->detalleComisiones as $cuenta) {
                $comision = new VentaComisionesAsignaciones();
                $comision->id_vendedor = $request->vendedor['id_vendedor'];
                $comision->id_marca = $cuenta['marcax']['id_marca'];
                $comision->tipo_meta = $cuenta['tipo_meta'];
                $comision->meta_unidades = $cuenta['meta_unidades'];
                $comision->meta_monto = $cuenta['meta_monto'];
                $comision->activo = true;
                $comision->porcentaje_comision = $cuenta['porcentaje_comision'];
                $comision->porcentaje_comision_sobremeta = $cuenta['porcentaje_comision_sobremeta'];
                $comision->save();
            }

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



    public function actualizar(Request $request)
    {

        $messages = [
            'comisiones_asignadas.*.porcentaje_comision.max' => 'El campo debe ser menos a 10%',
            'comisiones_asignadas.*.porcentaje_comision_sobremeta.max' => 'El campo debe ser menos a 10%',
        ];


        $rules = [
            'id_vendedor' => 'required|integer|min:1',
            'comisiones_asignadas' => 'required|array|min:1',

            'comisiones_asignadas.*.id_comision_asignacion' => 'required|integer|min:1',
            'comisiones_asignadas.*.tipo_meta' => 'required|integer|min:1',
            'comisiones_asignadas.*.meta_unidades' => 'required|integer|min:0',
            'comisiones_asignadas.*.meta_monto' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'comisiones_asignadas.*.porcentaje_comision' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0|max:10',
            'comisiones_asignadas.*.porcentaje_comision_sobremeta' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0|max:10',

        ];
        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            foreach ($request->comisiones_asignadas as $cuenta) {
                $comision = VentaComisionesAsignaciones::find($cuenta['id_comision_asignacion']);
                //$comision->id_vendedor = $request->vendedor['id_vendedor'];
                //$comision->id_marca = $cuenta['marcax']['id_marca'];
                $comision->tipo_meta = $cuenta['tipo_meta'];
                $comision->meta_unidades = $cuenta['meta_unidades'];
                $comision->meta_monto = $cuenta['meta_monto'];
                $comision->porcentaje_comision = $cuenta['porcentaje_comision'];
                $comision->porcentaje_comision_sobremeta = $cuenta['porcentaje_comision_sobremeta'];
                $comision->save();
            }

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


    public function generarReporteAsignacionComisiones(Request $request)
    {
        // echo $ext;
        $rules = [
            'extension' => 'required|string|max:4',
            'id_vendedor' => 'required|integer|min:0',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = 'C:/xampp7/htdocs/resources/reports/ReporteAsignacionComisiones';
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'ReporteAsignacionComisiones';
                $input = '/var/www/html/resources/reports/ReporteAsignacionComisiones';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'ReporteAsignacionComisiones';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_vendedorx' => $request->id_vendedor,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteAsignacionComisiones.' . $request->extension, $headers);
                /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/

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

    public function generarReporteVentaPorDepartamento(Request $request)
    {
        // echo $ext;
        $rules = [
            'extension' => 'required|string|max:4',
            'id_departamento' => 'required|integer|min:0',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteVentasPorDepartamentoMunicipio';
                //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteVentasPorDepartamentoMunicipio';
                $input = '/var/www/html/resources/reports/ReporteVentasPorDepartamentoMunicipio';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'ReporteVentasPorDepartamentoMunicipio';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_departamento' => $request->id_departamento,
                        'fechaInicial' => $request->fechaInicial,
                        'fechaFinal' => $request->fechaFinal,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteAsignacionComisiones.' . $request->extension, $headers);
                /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/

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