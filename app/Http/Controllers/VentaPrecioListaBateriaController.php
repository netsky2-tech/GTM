<?php

namespace App\Http\Controllers;


use App\Models\AdmonAjustes;
use App\Models\CajaBancoAfectaciones;
use App\Models\CajaBancoBancos;
use App\Models\CajaBancoFacturaViaPagos;
use App\Models\CajaBancoMonedas;
use App\Models\CajaBancoProformasSeguimiento;
use App\Models\CajaBancoTasasCambios;
use App\Models\CajaChicaCaja;
use App\Models\CajaChicaSolicitudViatico;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\CuentasXCobrarCuentasXCobrar;
use App\Models\InventarioBaterias;
use App\Models\InventarioBodegas;
use App\Models\InventarioProductosBaterias;
use App\Models\InventarioSalidaProductos;
use App\Models\InventarioSalidas;
use App\Models\PublicDepartamentos;
use App\Models\PublicViaPagos;
use App\Models\PublicZonas;
use App\Models\RRHHTrabajadores;
use App\Models\VentaPrecioListaBateria;
use App\Models\VentaPrecioListaCatalogo;
use App\Models\VentaPrecioListaGrupo;
use App\Models\VentaVendedores;
use Carbon\Carbon;
use DateTime;
use Hash, Validator,Auth;
use App\Models\InventarioBodegaProductos;
use App\Models\CajaBancoProformasProductos;
use App\Models\CajaBancoProformas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class VentaPrecioListaBateriaController extends Controller
{
    /**
     * Get List of Facturas
     *
     * @access  public
     * @param Request $request
     * @param VentaPrecioListaBateria $proformas
     * @return  json(array)
     */

    public function obtener(Request $request, VentaPrecioListaBateria $proformas)
    {
        $proformas = $proformas->obtenerPrecioLista($request);

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $proformas->total(),
                'rows' => $proformas->items()
            ],
            'messages' => null
        ]);
    }

    public function obtenerTodas(Request $request, VentaPrecioListaBateria $lista)
    {
        $lista = VentaPrecioListaBateria::orderby('id_precio_lista_bateria')->with('ListaProducto','ListaCatalogo','ListaGrupo')->first();
        return response()->json([
            'status' => 'success',
            'result' => [
                'lista' => $lista,

            ],
            'messages' => null
        ]);
    }
    /**
     * Get List of Entrada
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerLista(Request $request)
    {
        $rules = [
            'id_precio_lista_catalogo'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            //$lista = VentaPrecioListaBateria->with('ListaGrupo')->first();;
            $bateria = InventarioProductosBaterias::select(['*'])//->get();
            ->join('inventario.productos', 'inventario.baterias_detalles.id_producto', '=', 'inventario.productos.id_producto')->get();
            $grupo = VentaPrecioListaGrupo::select('id_precio_lista_grupos','descripcion')->get();
            $catalogo = VentaPrecioListaCatalogo::where('id_precio_lista_catalogo',$request->id_precio_lista_catalogo)->select('id_precio_lista_catalogo','descripcion','estado')
                 ->with(['ListaProducto' => function($query)
                 { $query->with('ListaGrupo');}])->first();

            if(!empty($catalogo)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                       // 'lista'=> $lista,
                        'bateria' => $bateria,
                        'grupo' => $grupo,
                        'catalogo' => $catalogo,
                    ],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_precio_lista_catalogo'=>["Datos no encontrados"]),
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
     * Registra una nueva requisa
     *
     * @access 	public
     * @param
     * @return 	json(string)
     */

    public function registrar(Request $request)
    {
        $rules = [
                'catalogo * id_precio_lista_catalogo' => 'required|integer',
                'detalleLista * amph' => 'required|integer',
                'detalleLista * placas' => 'required|integer',
                'detalleLista * precio_publico' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
                'detalleLista * precio_distribuidor' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();

                VentaPrecioListaBateria::where('id_precio_lista_bateria',$request->id_precio_lista_bateria)->delete();

                $i = 1;
                foreach ($request->detalleLista as $comprobante_detalle) {

                    $detalles = new VentaPrecioListaBateria;
                    $detalles->id_precio_lista_catalogo = $request['catalogo']['id_precio_lista_catalogo'];
                    $detalles->id_precio_lista_grupo = $comprobante_detalle['grupo']['id_precio_lista_grupos'];
                    $detalles->id_bateria_detalle = $comprobante_detalle['bateria']['id_bateria_detalle'];
                    $detalles->id_producto = $comprobante_detalle['bateria']['id_producto'];
                    $detalles->nombre_comercial = $comprobante_detalle['bateria']['nombre_comercial'];
                    $detalles->bci = $comprobante_detalle['bateria']['bci'];
                    $detalles->cca = $comprobante_detalle['bateria']['cca'];
                    $detalles->amph = $comprobante_detalle['amph'];
                    $detalles->placas = $comprobante_detalle['placas'];
                    $detalles->largo = $comprobante_detalle['bateria']['largo'];
                    $detalles->ancho = $comprobante_detalle['bateria']['ancho'];
                    $detalles->alto = $comprobante_detalle['bateria']['alto'];
                    $detalles->costo_estandar = $comprobante_detalle['bateria']['costo_estandar'];
                    $detalles->precio_publico = $comprobante_detalle['precio_publico'];
                    $detalles->precio_distribuidor = $comprobante_detalle['precio_distribuidor'];
                    $detalles->estado = 1;
                    $detalles->u_grabacion = Auth::user()->usuario;
                    $detalles->save();
                    $i++;
                }

                if(!empty($detalles)){
                $catalogo = VentaPrecioListaCatalogo::where('id_precio_lista_catalogo', $detalles->id_precio_lista_catalogo)->first();
                $catalogo->estado = 2;
                $catalogo->u_modificacion = Auth::user()->usuario;
              //  $catalogo->f_modificacion = Carbon::now()->toDateTimeString();
                $catalogo->save();
                }

                DB::commit();
                return response()->json([
                    'status' => 'success',
                    'result' => '',
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
    public function actualizar(Request $request)
    {
        $rules = [
            'id_precio_lista_catalogo' => 'required|integer|min:1',
            'lista_producto * bci' => 'required|string',
            'lista_producto * cca' => 'required|integer',
            'lista_producto * amph' => 'required|integer',
            'lista_producto * placas' => 'required|integer',
            'lista_producto * largo' => 'required|numeric',
            'lista_producto * ancho' => 'required|numeric',
            'lista_producto * alto' => 'required|numeric',
            'lista_producto * costo_estandar' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/\'',
            'lista_producto * precio_publico' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'lista_producto * precio_distribuidor' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
        ];



        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();

            VentaPrecioListaBateria::where('id_precio_lista_catalogo',$request->id_precio_lista_catalogo)->delete();

            $i = 1;
            foreach ($request->lista_producto as $comprobante_detalle) {
                $detalles = new VentaPrecioListaBateria;
                $detalles->id_precio_lista_catalogo = $request->id_precio_lista_catalogo;
                $detalles->id_precio_lista_grupo = $comprobante_detalle['lista_grupo']['id_precio_lista_grupos'];
                $detalles->id_bateria_detalle = $comprobante_detalle['id_bateria_detalle'];
                $detalles->id_producto = $comprobante_detalle['id_producto'];
                $detalles->nombre_comercial = $comprobante_detalle['nombre_comercial'];
                $detalles->bci = $comprobante_detalle['bci'];
                $detalles->cca = $comprobante_detalle['cca'];
                $detalles->amph = $comprobante_detalle['amph'];
                $detalles->placas = $comprobante_detalle['placas'];
                $detalles->largo = $comprobante_detalle['largo'];
                $detalles->ancho = $comprobante_detalle['ancho'];
                $detalles->alto = $comprobante_detalle['alto'];
                $detalles->costo_estandar = $comprobante_detalle['costo_estandar'];
                $detalles->precio_publico = $comprobante_detalle['precio_publico'];
                $detalles->precio_distribuidor = $comprobante_detalle['precio_distribuidor'];
                $detalles->u_modificacion = Auth::user()->usuario;
                $detalles->save();
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
    public function desactivar(Request $request)
    {
        $rules = [
            'id_precio_lista_grupos' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $lista = VentaPrecioListaGrupo::find($request->id_precio_lista_grupos);
            $lista->activo = 0;
            $lista->save();

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
     * Activa rol
     *
     * @access  public
     * @param
     * @return  json(string)
     */

    public function activar(Request $request)
    {
        $rules = [
            'id_precio_lista_grupos' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $rol = VentaPrecioListaGrupo::find($request->id_precio_lista_grupos);
            $rol->activo = 1;
            $rol->save();

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

        $grupos = VentaPrecioListaGrupo::where('activo',true)->orderby('id_precio_lista_grupos')->get();
        $catalogos = VentaPrecioListaCatalogo::where('estado',1)->orderby('id_precio_lista_catalogo')->get();
        $baterias = InventarioProductosBaterias::select(['*'])//->get();
            ->join('inventario.productos', 'inventario.baterias_detalles.id_producto', '=', 'inventario.productos.id_producto')->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'grupos' => $grupos,
                'catalogos' => $catalogos,
                'baterias' => $baterias,

            ],
            'messages' => null
        ]);

    }


    public function generarReporte($id_precio_lista_catalogo)
    {
        // echo $ext;
        $ext = 'pdf';
        $os = array("xls", "pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteListaPrecio';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteListaPrecio';
            $input = '/var/www/html/resources/reports/ReporteListaPrecio';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteListaPrecio';
            $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
            $url = '/var/www/html/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_precio_lista_catalogo' => $id_precio_lista_catalogo,
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
            /*header('Content-Description: File Transfer');
            header('Content-Type: multipart/form-data;boundary="boundary"');
            header('Content-Disposition: form-data; filename=' . $hora_actual. 'Accesos.' . $ext);
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
            header('Content-Length: ' . filesize($output . '.' . $ext));
            flush();
            readfile($output . '.' . $ext);*/
            // unlink($output . '.' . $ext);

            $headers = [
                'Content-Type' => 'application/pdf',
            ];

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteListaPrecio.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }



}

