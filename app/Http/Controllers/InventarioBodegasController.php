<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\ContabilidadCentroCostoIngreso;
use App\Models\InventarioProductos;
use App\Models\InventarioProductosVistaVenta;
use App\Models\InventarioTipoBodega;
use App\Models\PublicSucursales;
use App\Models\VentaClientes;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;
use Validator,Auth,DB;
use App\Models\InventarioBodegas;
use App\Models\InventarioBodegaProductos;

use Illuminate\Http\Request;

class InventarioBodegasController extends Controller
{
    public function buscar(Request $request, InventarioBodegas $bodegas)
    {
        $bodegas = $bodegas->buscar($request);
        return response()->json([
            'results' => $bodegas
        ]);
    }
    /**
     * Obtener una lista de bodegas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioBodegas $bodegas)
    {
        $bodegas = $bodegas->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $bodegas->total(), 
                'rows' => $bodegas->items()
            ],
            'messages' => null
        ]);
    }

            /**
     * Obtener una lista de Roles sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodas(Request $request, InventarioBodegas $bodegas)
    {
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $bodegas = InventarioBodegas::whereIn('id_empresa',array($id_empresa_global, $conf))->where('activo', 1)->get();
        $zonas = ContabilidadCentroCostoIngreso::where('estado',1)->whereIn('id_empresa',array($conf,$id_empresa_global))->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'bodegas' => $bodegas,
                'zonas' => $zonas
                ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de Roles sin ningun filtro
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerBodegaProductos(Request $request)
    {

        /*if(Auth::user()->id_sucursal>0){
            $bodegas_entrantes =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->where('activo', 1)->with(['productosBodega' => function($query) {
                $query->with('producto')->where('cantidad','>',0);
            }])  //->where('id_sucursal',Auth::user()->id_sucursal)->orWhere('id_bodega',1)
                ->whereNotIn('id_tipo_bodega',array(6,3))->orderby('descripcion')->get();
        }else{
            $bodegas_entrantes =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->where('activo', 1)->with(['productosBodega' => function($query) {
                $query->with('producto')->where('cantidad','>',0);
            }])->whereNotIn('id_tipo_bodega',array(6,3))->orderby('descripcion')->get();
        }

        if(Auth::user()->id_sucursal>0){
            $bodegas =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->where('activo', 1)->with(['productosBodega' => function($query) {
                $query->with('producto')->where('cantidad','>',0);
            }])->whereNotIn('id_tipo_bodega',array(6,4,3))
                ->where('id_sucursal',Auth::user()->id_sucursal)

                ->orderby('descripcion')->get();
        }else{
            $bodegas =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->where('activo', 1)->with(['productosBodega' => function($query) {
                $query->with('producto')->where('cantidad','>',0);
            }])->whereNotIn('id_tipo_bodega',array(6,4,3))->get();
        }*/

        if(Auth::user()->id_sucursal>0){
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;
            $bodegas =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->whereIn('id_empresa', array($conf,$id_empresa_global))->where('activo', 1)->with(['productosBodega' => function($query) {
                $conf = session()->get('id_empresa');
                $id_empresa_global = 0;
                $query->with('producto')->whereIn('id_empresa', array($conf,$id_empresa_global))->where('cantidad','>',0);
            }])  //->where('id_sucursal',Auth::user()->id_sucursal)->orWhere('id_bodega',1)
            ->whereNotIn('id_tipo_bodega',array(6,4,3))->orderby('descripcion')->get();
        }else{
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;
            $bodegas =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->whereIn('id_empresa',array($conf,$id_empresa_global))->where('activo', 1)->with(['productosBodega' => function($query) {
                $conf = session()->get('id_empresa');
                $id_empresa_global = 0;
                $query->with('producto')->whereIn('id_empresa',array($conf,$id_empresa_global))->where('cantidad','>',0);
            }])->whereNotIn('id_tipo_bodega',array(6,4,3))->orderby('descripcion')->get();
        }

        if(Auth::user()->id_sucursal>0){
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;
            $bodegas_entrantes =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->where('id_empresa', '=', $request->id_empresa)->where('activo', 1)->with(['productosBodega' => function($query) {
                $conf = session()->get('id_empresa');
                $id_empresa_global = 0;
                $query->with('producto')->whereIn('id_empresa', array($conf,$id_empresa_global))->where('cantidad','>',0);
            }])->whereNotIn('id_tipo_bodega',array(6,3))
                ->where('id_sucursal',Auth::user()->id_sucursal)

                ->orderby('descripcion')->get();
        }else{
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;
            $bodegas_entrantes =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->whereIn('id_empresa',array($conf,$id_empresa_global))->where('activo', 1)->with(['productosBodega' => function($query) {
                $conf = session()->get('id_empresa');
                $id_empresa_global = 0;
                $query->with('producto')->whereIn('id_empresa', array($conf,$id_empresa_global))->where('cantidad','>',0);
            }])->whereNotIn('id_tipo_bodega',array(6,3))->get();
        }

        $conf = session()->get('id_empresa');

        //$bodegasConsigna =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->where('id_empresa', '=', $conf)->where('activo', 1)->where('id_tipo_bodega',6)->get();

        $clientes = VentaClientes::select(['id_cliente','estado','codigo','tipo_persona','numero_cedula','numero_ruc','nombre_comercial','plazo_credito','permite_consignacion',
            'aprobacion_consignacion','id_vendedor'
        ])->where('id_empresa', '=', $conf)->where('estado',1)->where('aprobacion_consignacion',2)->where('permite_consignacion',true)->get();

        return response()->json([
            'status' => 'success',
            'result' =>[
              'bodegas' => $bodegas,
              //'bodegas_consigna' => $bodegasConsigna,
              'bodegas_entrantes' => $bodegas_entrantes,
              'clientes'=> $clientes
            ] ,
            'messages' => null
        ]);
    }

    public function obtenerBodegaProductosGarantia(Request $request, InventarioBodegaProductos $productos)
    {


          $productos = $productos->productosBodegaGarantia($request);


        return response()->json([
            'status' => 'success',
            'result' => [
                'productos' => $productos,
            ],
            'messages' => null
        ]);

        return response()->json([
            'status' => 'success',
            'result' => [
                'productos' => $productos,
            ],
            'messages' => null
        ]);
    }

    public function obtenerBodegaProductosVenta(Request $request, InventarioBodegaProductos $productos)
    {

       $productos = $productos->productosBodegaVenta($request);
       $servicios = new InventarioProductosVistaVenta();
       $servicios = $servicios->serviciosVenta($request);


        return response()->json([
            'status' => 'success',
            'result' => [

                'productos' => $productos,
                'servicios' => $servicios
            ],
            'messages' => null
        ]);
    }

    public function obtenerBodegaProductosRecuperados(Request $request, InventarioBodegaProductos $productos)
    {

        $productos = $productos->productosBodegaRecuperados($request);

        return response()->json([
            'status' => 'success',
            'result' => [
                'productos' => $productos,
            ],
            'messages' => null
        ]);
    }


    public function obtenerBodegaProductosObsoletos(Request $request, InventarioBodegaProductos $productos)
    {

        $productos = $productos->productosBodegaObsoletos($request);

        return response()->json([
            'status' => 'success',
            'result' => [
                'productos' => $productos,
            ],
            'messages' => null
        ]);
    }


    public function productosBodegaConsignacionCliente(Request $request, InventarioBodegaProductos $productos)
    {

        $productos = $productos->productosBodegaConsignacionCliente($request);
        $servicios = new InventarioProductosVistaVenta();

       // $servicios = $servicios->serviciosVenta($request);

        return response()->json([
            'status' => 'success',
            'result' => [
                'productos' => $productos,
           //     'servicios' => $servicios
            ],
            'messages' => null
        ]);
    }


    /**
     * obtener bodega Especifica
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerBodega(Request $request)
    {
        $rules = [
            'id_bodega' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;
            $bodega = InventarioBodegas::whereIn('id_empresa', array($conf,$id_empresa_global))->where('id_bodega',$request->id_bodega)
                ->with('centroCostoBodega')
                ->with('sucursalBodega')
                ->with('tipoBodega')
                ->first();
            $centro_costos_ingresos = ContabilidadCentroCostoIngreso::select('id_centro','descripcion')->whereIn('id_empresa', array($conf,$id_empresa_global))->where('estado',true)->get();
            $sucursales = PublicSucursales::select(['id_sucursal','descripcion'])->get();
            $tipos_bodega = InventarioTipoBodega::select(['id_tipo_bodega','descripcion'])->whereIn('id_empresa', array($conf,$id_empresa_global))->where('estado', 1)->get();


            if(!empty($bodega)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'bodega' => $bodega,
                        'centros_costos_ingresos' => $centro_costos_ingresos,
                        'sucursales' => $sucursales,
                         'tipos_bodega' => $tipos_bodega
                    ],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_bodega'=>["Datos no encontrados"]),
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
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $centro_costos_ingresos = ContabilidadCentroCostoIngreso::select('id_centro','descripcion')->where('estado',true)->get();
        $sucursales = PublicSucursales::select(['id_sucursal','descripcion'])->get();
        $tipos_bodega = InventarioTipoBodega::select(['id_tipo_bodega','descripcion'])->whereIn('id_empresa',array($conf,$id_empresa_global))->where('estado', 1)->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'centros_costos_ingresos'=>$centro_costos_ingresos,
                'sucursales'=>$sucursales,
                'tipos_bodega'=>$tipos_bodega,
            ],
            'messages' => null
        ]);

    }

    public function obtenerBodegasConsignacion(Request $request)
    {
        $clientes = VentaClientes::select(['id_cliente','estado','codigo','tipo_persona','numero_cedula','numero_ruc','nombre_comercial','plazo_credito','permite_consignacion','aprobacion_consignacion','id_vendedor'
        ])->where('estado',1)->where('aprobacion_consignacion',2)->where('permite_consignacion',true)->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'clientes'=>$clientes,
            ],
            'messages' => null
        ]);

    }


    /**
     * Crear un nuevo rol
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $rules = [
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.inventario.bodegas')],
           /* 'centros_costos_ingresos' => 'required|array|min:1',
            'centros_costos_ingresos.id_centro' => 'required|integer|min:1',*/
            'tipo_bodega' => 'required|array|min:1',
            'tipo_bodega.id_tipo_bodega' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $bodega = new InventarioBodegas;
            $bodega->id_tipo_bodega = $request->tipo_bodega['id_tipo_bodega'];
            $bodega->permite_venta = $request->permite_venta;
            $bodega->descripcion = $request->descripcion;
            $bodega->id_centro = 1;
            $bodega->id_sucursal = $request->sucursal['id_sucursal'];
            $bodega->u_creacion = Auth::user()->usuario;
            $bodega->id_empresa = $conf;
            $bodega->activo = 1;
            $bodega->save();

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
            'id_bodega'  => 'required|integer|min:1',
            'tipo_bodega' => 'required|array|min:1',
            'tipo_bodega.id_tipo_bodega' => 'required|integer|min:1',
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.inventario.bodegas')->ignore($request->id_bodega,'id_bodega')],
            /*'centro_costo_bodega' => 'required|array|min:1',*/
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $bodega = InventarioBodegas::find($request->id_bodega);
            $bodega->id_tipo_bodega = $request->tipo_bodega['id_tipo_bodega'];
            $bodega->permite_venta = $request->permite_venta;
            $bodega->descripcion = $request->descripcion;
            $bodega->id_centro = $request->centro_costo_bodega['id_centro'];
            $bodega->id_sucursal = $request->sucursal_bodega['id_sucursal'];
            $bodega->u_modificacion = Auth::user()->usuario;
            $bodega->save();

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
     * Desactiva rol
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function desactivar(Request $request)
    {
        $rules = [
            'id_bodega' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $bodega = InventarioBodegas::find($request->id_bodega);
            $bodega->activo = 0;
            $bodega->u_modificacion = Auth::user()->usuario;
            $bodega->save();

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


    public function activar(Request $request)
    {
        $rules = [
            'id_bodega' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $bodega = InventarioBodegas::find($request->id_bodega);
            $bodega->activo = 1;
            $bodega->u_modificacion = Auth::user()->usuario;
            $bodega->save();

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
    public function generarReporte($ext)
    {
        // echo $ext;
        // $ext = 'pdf';
        $os = array("xls", "pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteBodega';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteBodega';
             $input = '/var/www/html/resources/reports/ReporteBodega';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteBodega';
            $conf = session()->get('id_empresa');
            $nombre_empresa = AdmonAjustes::where('id_empresa', '=',$conf )->where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
            $url = '/var/www/html/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteBodega.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }


}