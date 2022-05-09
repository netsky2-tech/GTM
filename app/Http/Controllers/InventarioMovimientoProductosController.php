<?php

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\InventarioBaterias;
use App\Models\InventarioMovimientosProductosVista;
use PHPJasper\PHPJasper;
use Validator,Auth,DB;
use Illuminate\Http\Request;

class InventarioMovimientoProductosController extends Controller
{

    public function obtenerListadoBaterias(Request $request, InventarioMovimientosProductosVista $movimientos)
    {
        $rules = [
            'productoB' => 'required|array|min:1',
            'productoB.id_producto' => 'required|integer|min:1|exists:pgsql.inventario.productos,id_producto',
            'bodega.id_bodega' => 'required|integer|min:0',
            //'bodega.id_bodega' => 'required|integer|min:0',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $conf = session()->get('id_empresa');

            if($request->bodega['id_bodega']>0){
                $codigos_baterias = InventarioBaterias::select('id_bateria','codigo_garantia','fecha_activacion','id_producto')->where('id_empresa', '=', $conf)->where('id_producto',$request->productoB['id_producto'])
                    ->where('estado',1)->where('reservada',false)->with('bateriaProducto')->orderby('fecha_activacion')->where('id_bodega_actual',$request->bodega['id_bodega'])->paginate($request->limit);
            }else{
                $codigos_baterias = InventarioBaterias::select('id_bateria','codigo_garantia','fecha_activacion','id_producto')->where('id_empresa', '=', $conf)->where('id_producto',$request->productoB['id_producto'])
                    ->where('estado',1)->where('reservada',false)->with('bateriaProducto')->orderby('fecha_activacion')->paginate($request->limit);
            }
            //$codigos_baterias;

            return response()->json([
                'status' => 'success',
                'result' => [
                    'total' => $codigos_baterias->total(),
                    'rows' => $codigos_baterias->items()
                ],
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
     * Obtener Movimientos Productos
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerMovimientosPorProducto(Request $request, InventarioMovimientosProductosVista $movimientos)
    {
        $rules = [
            'productoB' => 'required|array|min:1',
            'productoB.id_producto' => 'required|integer|min:1|exists:pgsql.inventario.productos,id_producto',
            'bodega.id_bodega' => 'required|integer|min:0',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $movimientos = $movimientos->obtenerMovimientos($request);

            return response()->json([
                'status' => 'success',
                'result' => $movimientos,
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


    public function reporteMovimiento(Request $request)
    {
        $rules = [
            'id_bodega' => 'required|integer|min:0',
            'id_producto' => 'required|integer|min:1',
            'id_presentacion' => 'required|integer|min:0',
            'extension' => 'required|string|max:4',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {
            $hora_actual = time() ;
           //$input = 'E:/xampp/htdocs/resources/reports/MovimientoProductos';
           //$output = 'E:/xampp/htdocs/resources/reports/' .$hora_actual . 'MovimientoProductos';
            $input = '/var/www/html/resources/reports/MovimientoProductos';
           $output = '/var/www/html/resources/reports/'.$hora_actual.'MovimientoProductos';
                $conf = session()->get('id_empresa');
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();

            $options = [
                'format' => [$request->extension],
                'locale' => 'en',
                'params' => [
                    'id_producto' => $request->id_producto,
                    'id_presentacion' => $request->id_presentacion,
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
/*            exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
            print_r($output);*/

            $headers = [
                'Content-Type' => 'application/pdf',
            ];

            return response()->download($output . '.' . $request->extension ,$hora_actual. 'MovimientoProductos.' . $request->extension, $headers);
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



    public function reporteMovimientoContable(Request $request)
    {
        $rules = [
            'id_bodega' => 'required|integer|min:0',
            'id_producto' => 'required|integer|min:1',
            'extension' => 'required|string|max:4',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {
                $hora_actual = time() ;
                //$input = 'C:/xampp7/htdocs/resources/reports/MovimientoProductosContable';
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'MovimientoProductosContable';
                $input = '/var/www/html/resources/reports/MovimientoProductosContable';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'MovimientoProductosContable';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_producto' => $request->id_producto,
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

                /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
              print_r($output);*/

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download($output . '.' . $request->extension ,$hora_actual. 'MovimientoProductosContable.' . $request->extension, $headers);
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