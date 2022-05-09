<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\InventarioBateriasMarcas;
use App\Models\VentaVendedores;
use PHPJasper\PHPJasper;
use Validator,Auth,DB;
use App\Models\VentaComisionesGerencias;
use Illuminate\Http\Request;

class VentaComisionesGerenciasController extends Controller
{


    public function obtenerComisiones(Request $request)
    {
        $rules = [
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $comisiones_gerencia = VentaComisionesGerencias::select(
                'id_comision_gerencia_politica',
                'descripcion',
                'porcentaje_inicial',
                'porcentaje_final',
                'meta_inicio',
                'meta_fin',
                'porcentaje_comision',
                'u_grabacion',
                'f_grabacion',
                'activo',
                'tipo_meta'
            )->get();

            return response()->json([
                'status' => 'success',
                'result' => $comisiones_gerencia,
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
            'comisiones_asignadas.*.meta_fin.min' => 'El campo debe ser mayor que cero',
            'comisiones_asignadas.*.meta_inicio.required' => 'El campo es requerido',
            'comisiones_asignadas.*.descripcion.required' => 'Se debe definir una descripción',
        ];


        $rules = [
            'comisiones_asignadas' => 'required|array|min:1',
            'comisiones_asignadas.*.id_comision_gerencia_politica' => 'required|integer|min:0',
            'comisiones_asignadas.*.descripcion' => 'required|string',
            'comisiones_asignadas.*.tipo_meta' => 'required|integer|min:1',
            'comisiones_asignadas.*.meta_inicio' => 'required|integer|min:0',
            'comisiones_asignadas.*.meta_fin' => 'required|integer|min:1',
            'comisiones_asignadas.*.porcentaje_comision' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0|max:10',
            'comisiones_asignadas.*.activo' => 'required|boolean',

        ];
        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            foreach ($request->comisiones_asignadas as $cuenta) {
                if($cuenta['activo']){
                    if($cuenta['id_comision_gerencia_politica']>0){
                        $comision = VentaComisionesGerencias::find($cuenta['id_comision_gerencia_politica']);
                        $comision->tipo_meta = $cuenta['tipo_meta'];
                        $comision->meta_inicio = $cuenta['meta_inicio'];
                        $comision->meta_fin = $cuenta['meta_fin'];
                        $comision->descripcion = $cuenta['descripcion'];
                        $comision->porcentaje_comision = $cuenta['porcentaje_comision'];
                        $comision->activo = true;
                        $comision->save();
                    }else{
                        $comision = new VentaComisionesGerencias;
                        $comision->tipo_meta = $cuenta['tipo_meta'];
                        $comision->meta_inicio = $cuenta['meta_inicio'];
                        $comision->meta_fin = $cuenta['meta_fin'];
                        $comision->descripcion = $cuenta['descripcion'];
                        $comision->porcentaje_comision = $cuenta['porcentaje_comision'];
                        $comision->activo = true;
                        $comision->u_grabacion = Auth::user()->usuario;
                        $comision->f_grabacion= date('Y-m-d H:i:s');
                        $comision->save();
                    }
                }else{
                    if($cuenta['id_comision_gerencia_politica']>0){
                        $comision = VentaComisionesGerencias::find($cuenta['id_comision_gerencia_politica']);
                        $comision->activo = false;
                        $comision->save();
                    }
                }
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

}