<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\InventarioBaterias;
/*use App\Models\InventarioBateriasAplicaciones;*/
/*use App\Models\InventarioBateriasMarcas;*/
/*use App\Models\InventarioBateriasLineas;*/
/*use App\Models\InventarioBateriasMateriales;*/
use App\Models\InventarioBodegaProductos;
use App\Models\InventarioBodegas;
use App\Models\InventarioEntradaProductos;
use App\Models\InventarioEntradas;
/*use App\Models\InventarioMovimientosBaterias;*/
use App\Models\InventarioMovimientosProductos;
/*use App\Models\InventarioProductosBaterias;*/
/*use App\Models\InventarioProductosPresentaciones;*/
/*use App\Models\InventarioProveedores;*/

use App\Models\InventarioPresentacion;
use App\Models\InventarioProductosPresentaciones;
use App\Models\InventarioSalidaProductos;
use App\Models\InventarioSalidas;
use App\Models\InventarioTransformacionDetalle;
use App\Models\InventarioTransformacionDetalleEntrada;
use App\Models\InventarioTransformacion;
use App\Models\InventarioUnidadMedida;
use App\Models\PublicImpuestos;
use App\Models\PublicRubrosServiciosMateriales;
use Hash, Validator,Auth;
use App\Models\InventarioProductos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use mysql_xdevapi\Result;
use PHPJasper\PHPJasper;

class InventarioTransformacionController extends Controller
{

    public function nueva(Request $request)
    {

        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $proveedores = InventarioProveedores::where('id_empresa', '=', $conf)->where('activo', 1)->orderby('id_proveedor')->select('id_proveedor', 'nombre_comercial', 'codigo', 'numero_ruc', 'numero_cedula')->get();
        $bodegas = InventarioBodegas::where('id_empresa', '=', $conf)->where('activo', 1)->select('id_bodega', 'descripcion')->get();
        $impuestos = PublicImpuestos::select(['id_impuesto', 'descripcion'])->get();
        /*        $rubros = PublicRubrosServiciosMateriales::select(['id_rubro','descripcion','codigo','rubro_full'])->orderby('codigo')->get();*/
        $unidades_medida = InventarioUnidadMedida::select('id_unidad_medida', 'unidad_medida', 'descripcion', 'activo')->where('id_empresa', '=', $conf)->where('activo', 1)->get();
        /*        $aplicaciones = InventarioBateriasAplicaciones::select('id_aplicacion','descripcion')->where('id_empresa', '=', $conf)->with('aplicacionSubAplicaciones')->get();*/
        /*        $lineas = InventarioBateriasLineas::select('id_linea','descripcion')->where('id_empresa', '=', $conf)->where('activo',true)->orderBy('id_linea')->get();*/
        /*        $materiales = InventarioBateriasMateriales::select('id_material','descripcion')->where('id_empresa', '=', $conf)->where('activo',true)->orderBy('id_material')->get();*/
        /*        $marcas = InventarioBateriasMarcas::select('id_marca','descripcion')->where('id_empresa', '=', $conf)->with('marcaSubMarcas')->get();*/
        $productos = InventarioProductos::select('id_producto', 'codigo_sistema', 'nombre_comercial')->with('productoPresentacion')->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'proveedores' => $proveedores,
               /* 'bodegas' => $bodegas,*/
                'impuestos' => $impuestos,
                /*'rubros'=> $rubros,*/
                'unidades_medida' => $unidades_medida,
                /*'aplicaciones'=> $aplicaciones,*/
                /*'lineas'=> $lineas,*/
                /*'materiales'=> $materiales,*/
                /*'marcas'=> $marcas,*/
                'productos' => $productos

            ],
            'messages' => null
        ]);
    }

    /**
     * Cargar unidades de medida
     *
     * @access  public
     * @param Request
     * @return  json(array)
     * @author rsequeira
     */
    public function nuevoPS(Request $request)
    {
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $unidades_medidas = InventarioUnidadMedida::select('id_unidad_medida', 'unidad_medida', 'descripcion', 'relacion_um_estandar', 'activo')
            ->whereIn('id_empresa', array($conf, $id_empresa_global))->get();
        $productos = InventarioProductos::where('activo', 1)->orderby('id_producto')->select(['id_producto','codigo_sistema',
            DB::raw("CONCAT('(',inventario.productos.codigo_sistema,')',' ',inventario.productos.nombre_comercial)AS text")])
            ->whereIn('id_empresa', array($conf, $id_empresa_global))->get();
        /*$bodegas = InventarioBodegas::where('activo', true)->orderby('id_bodega')->select('id_bodega', 'descripcion')
            ->whereIn('id_empresa', array($conf, $id_empresa_global))->get();*/
        $presentaciones = InventarioPresentacion::where('estado', 1)->orderby('id_presentacion')->select('id_presentacion', 'codigo','escalar','id_origen')
            ->whereIn('id_empresa', array($conf, $id_empresa_global))->get();

        if(auth::user()->id_sucursal>0){

            $bodegas = InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->whereIn('id_empresa',array($conf,$id_empresa_global))->where('activo',true)->with(['productosBodega'=> function($query){
                $conf = session()->get('id_empresa');
                $id_empresa_global = 0;
                $query->with('producto')->with('presentacion')->whereIn('id_empresa',array($conf,$id_empresa_global))->where('cantidad','>',0);
            }])->whereNotIn('id_tipo_bodega',array(6,4))
                ->where('id_sucursal',Auth::user()->id_sucursal)
                ->orderby('descripcion')->get();
        }else{
            $bodegas = InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->whereIn('id_empresa',array($conf,$id_empresa_global))->where('activo',true)->with(['productosBodega'=> function($query){
                $conf = session()->get('id_empresa');
                $id_empresa_global = 0;
                $query->with('producto')->with('presentacion')->whereIn('id_empresa',array($conf,$id_empresa_global))->where('cantidad','>',0);
            }])->whereNotIn('id_tipo_bodega',array(6,4))->orderby('descripcion')->get();
        }

        return response()->json([
            'status' => 'success',
            'result' => [
                'unidades_medida' => $unidades_medidas,
                'productos' => $productos,
                'bodegas' => $bodegas,
                'presentaciones' => $presentaciones,

            ],
            'messages' => null
        ]);
    }

    public function cargarPresentacionesProducto(Request $request)
    {
        $rules =
            [

            ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $id_empresa_global = 0;
            $conf = session()->get('id_empresa');
            $presentaciones = InventarioProductosPresentaciones::select(['inventario.productos_presentaciones.id_producto','inventario.presentaciones.id_origen','inventario.presentaciones.escalar', 'inventario.presentaciones.codigo', 'inventario.presentaciones.id_presentacion',
                'inventario.presentaciones.id_unidad_medida_presentacion', 'inventario.presentaciones.id_unidad_medida_calculo', 'inventario.unidades_medidas.unidad_medida',
                'inventario.clasificacion_unidades_medidas.simbolo_um', 'inventario.unidades_medidas.relacion_um_estandar','inventario.bodegas_productos.id_producto','inventario.bodegas_productos.cantidad','inventario.bodegas_productos.id_bodega','inventario.bodegas_productos.id_zona_costo','inventario.bodegas_productos.no_lote'])
                ->join('inventario.bodegas_productos','inventario.bodegas_productos.id_producto','inventario.productos_presentaciones.id_producto')
                ->join('inventario.presentaciones', 'inventario.presentaciones.id_presentacion', 'inventario.productos_presentaciones.id_presentacion')
                ->join('inventario.unidades_medidas', 'inventario.unidades_medidas.id_unidad_medida', 'inventario.presentaciones.id_unidad_medida_presentacion')
                ->join('inventario.clasificacion_unidades_medidas', 'inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida', 'inventario.presentaciones.id_unidad_medida_calculo')
                ->where('inventario.productos_presentaciones.estado', 1)->whereIn('inventario.productos_presentaciones.id_empresa', array($conf, $id_empresa_global))
                ->where('inventario.productos_presentaciones.id_producto', $request->id_producto)
                ->where('inventario.bodegas_productos.cantidad','>',0)


                

                /*->where('inventario.presentaciones.id_origen', $request->id_orig

                en)
                ->where('inventario.presentaciones.escalar', $request->escalar)*/->get();


            if (!empty($presentaciones)) {

                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'presentaciones' => $presentaciones,

                    ],
                    'messages' => null
                ]);
            } else {
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_producto' => ["Datos no encontrados"]),
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
    /*public function obtenerProductoPresentacion(Request $request)
{
    $rules = [
        'id_presentacion_producto' => 'required|integer|min:1'
    ];

    $validator = Validator::make($request->all(), $rules);
    if (!$validator->fails()) {
        $conf = session()->get('id_empresa');
        $id_empresaGlabal=0;
        $producto_Presentacion = InventarioProductos::where('id_producto',$request->id_producto_presentacion)
            ->with('productoPresentacion')->whereIn('inventario.presentaciones.id_empresa',array($conf,$id_empresaGlabal))->first();



        if(!empty($producto_Presentacion)){
            return response()->json([
                'status' => 'success',
                'result' => [
                    'presentacion' => $producto_Presentacion],
                'messages' => null
            ]);
        }
        else{
            return response()->json([
                'status' => 'error',
                'result' => array('id_producto_presentacion'=>["Datos no encontrados"]),
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
}*/
    public function nuevo(){
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $presentaciones = InventarioPresentacion::where('estado', 1)->orderby('id_presentacion')->select('id_presentacion','codigo','id_origen')->get();
        $productos = InventarioProductos::where('activo', 1)->orderby('id_producto')->select('id_producto','nombre_comercial')->get();
        $bodegas = InventarioBodegas::where('activo',true)->orderby('id_bodega')->select('id_bodega','descripcion')->get();


        return response()->json([
            'status' => 'success',
            'result' =>[
                'presentaciones' => $presentaciones,
                'productos' => $productos,
                'bodegas'=> $bodegas,
            ],
            'messages' => null
        ]);
    }
    public function nuevaPresentacion(){
        $conf = session()->get('id_empresa');

        $presentaciones = InventarioPresentacion::where('estado', 1)->orderby('id_presentacion')->select('id_presentacion','codigo')->get();
        $productos = InventarioProductos::where('activo', 1)->orderby('id_producto')->select('id_producto','nombre_comercial')->get();


        return response()->json([
            'status' => 'success',
            'result' =>[
                'presentaciones' => $presentaciones,
                'productos' => $productos,
            ],
            'messages' => null
        ]);
    }
    public function buscarBaterias(Request $request, InventarioBaterias $baterias)
    {
        $baterias = $baterias->buscarBaterias($request);
        return response()->json([
            'results' => $baterias
        ]);
    }


    public function buscarProductosBodega(Request $request, InventarioBodegaProductos $productos)
    {
        $productos = $productos->buscarProductosBodega($request);
        return response()->json([
            'results' => $productos
        ]);
    }

    public function buscarProductosBodegaVenta(Request $request, InventarioBodegaProductos $productos)
    {
        $productos = $productos->buscarProductosBodegaVenta($request);
        return response()->json([
            'results' => $productos
        ]);
    }




    /**
     * Busqueda de productos
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function buscarProductos(Request $request, InventarioTranformacion $productos)
    {
        $productos = $productos->buscarProductos($request);
        return response()->json([
            'results' => $productos
        ]);
    }

    public function buscarPS(Request $request, InventarioTranformacion $productos)
    {
        $productos = $productos->buscarPS($request);
        return response()->json([
            'results' => $productos
        ]);
    }

	/**
     * Get List of Productos
     *
     * @access  public
     * @param   
     * @return  json(array)
     * @author rsequeira
     */

	public function obtenerTransformacion (Request $request,InventarioTransformacion $transformaciones){
	    $transformaciones = $transformaciones->obtenerTransformaciones($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $transformaciones->total(),
                'rows' => $transformaciones->items()
            ],
            'messages' => null
        ]);

    }

    public function obtenerTransformacionesEntradas(Request $request, InventarioTransformacionDetalleEntrada $transformaciones_entradas)
    {
        $transformaciones_entradas = $transformaciones_entradas->obtenerTransformaciones($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $transformaciones_entradas->total(),
                'rows' => $transformaciones_entradas->items()
            ],
            'messages' => null
        ]);
	}
	public function obtenerTransformacionesSalidas(Request $request, InventarioTransformacionDetalle $transformaciones_salidas)
    {
        $transformaciones_salidas = $transformaciones_salidas->obtenerTransformaciones($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $transformaciones_salidas->total(),
                'rows' => $transformaciones_salidas->items()
            ],
            'messages' => null
        ]);
	}

   /* public function nuevaBateriaExterna(Request $request)
    {
        $conf = session()->get('id_empresa');
        $productos = InventarioProductos::select(['id_producto','codigo_barra','codigo_consecutivo','codigo_sistema','condicion','costo_estandar','descripcion',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_barra,')') AS text")])
            ->where('id_empresa', '=', $conf)->where('activo', 1)->whereIn('tipo_producto', array(3))->where('condicion',1)->orderBy('descripcion', 'asc')
            ->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'productos' => $productos,
            ],
            'messages' => null
        ]);
    }*/

    /**
     * Get List of Baterias
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerBaterias(Request $request, InventarioTranformacion $productos)
    {
        $productos = $productos->obtenerBaterias($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $productos->total(),
                'rows' => $productos->items()
            ],
            'messages' => null
        ]);
    }
	
	        /**
     * Obtener una lista de productos de una bodega
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerProductosBodega(Request $request, InventarioTranformacion $productos)
    {
        $productos = $productos->obtenerProductosBodega($request);
        return response()->json([
            'status' => 'success',
            'result' => $productos,
            'messages' => null
        ]);
	}

		        /**
     * Obtener una lista de productos de una bodega
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerProductosValidos(Request $request, InventarioTranformacion $productos)
    {
        $productos = $productos->obtenerProductosValidos($request);
        return response()->json([
            'status' => 'success',
            'result' => $productos,
            'messages' => null
        ]);
	}
	

    /**
     * Get Single User
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerProducto(Request $request, InventarioTransformacion $transformacion)
    {
        $rules = [
            'id_transformacion' => 'required|integer|min:1'
		];
	

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;

            $transformacion =  $transformacion->obtenerTransformacion($request);
          /*  $productos = InventarioProductos::where('activo', 1)->orderby('id_producto')->select(['id_producto',
                DB::raw("CONCAT('(',inventario.productos.codigo_sistema,')',' ',inventario.productos.nombre_comercial)AS text")])
                ->whereIn('id_empresa', array($conf, $id_empresa_global))->get();*/
            /*$transformacion = InventarioTransformacion::where('id_transformacion',$request->id_transformacion);
                $transformacion->with(['entradaTransformacion'=> function($query2){
                    $conf = session()->get('id_empresa');
                    $id_empresa_global = 0;
                    $query2->with('productosBodega')
                        ->whereIn('id_empresa',array($conf,$id_empresa_global));
                }]);
                $transformacion->with(['salidaTransformacion'=>function($query){
                    $conf = session()->get('id_empresa');
                    $id_empresa_global = 0;
                    $query->whereIn('id_empresa',array($conf,$id_empresa_global));
                }]);
            $transformacion->whereIn('id_empresa',array($conf,$id_empresa_global))->first();*/


            if(!empty($transformacion)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'transformacion' =>$transformacion,


                    ],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_transformacion'=>["Datos no encontrados"]),
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
     * Get Single User
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerBateria(Request $request, InventarioTranformacion $bateria)
    {
        $rules = [
            'id_producto' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');

            $bateria = $bateria->obtenerBateria($request);
            $impuestos = PublicImpuestos::select(['id_impuesto','descripcion'])->get();
            $rubros = PublicRubrosServiciosMateriales::select(['id_rubro','descripcion','rubro_full'])->orderby('codigo')->get();
            $unidades_medida = InventarioUnidadMedida::select('id_unidad_medida','unidad_medida','descripcion','activo')->where('id_empresa', '=', $conf)->where('activo',1)->get();
            $aplicaciones = InventarioBateriasAplicaciones::select('id_aplicacion','descripcion')->where('id_empresa', '=', $conf)->with('aplicacionSubAplicaciones')->get();
            $lineas = InventarioBateriasLineas::select('id_linea','descripcion')->where('id_empresa', '=', $conf)->where('activo',true)->orderBy('id_linea')->get();
            $materiales = InventarioBateriasMateriales::select('id_material','descripcion')->where('id_empresa', '=', $conf)->where('activo',true)->orderBy('id_material')->get();
            $marcas = InventarioBateriasMarcas::select('id_marca','descripcion')->where('id_empresa', '=', $conf)->with('marcaSubMarcas')->get();



            if(!empty($bateria[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                    'bateria'=> $bateria[0],
                    'impuestos'=> $impuestos,
                    'rubros'=>$rubros,
                    'unidades_medida'=>$unidades_medida,
                        'aplicaciones'=>$aplicaciones,
                        'lineas'=>$lineas,
                        'materiales'=>$materiales,
                        'marcas'=>$marcas,
                    ],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_producto'=>["Datos no encontrados"]),
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
     * Registrar un nuevo Producto
     *
     * @access 	public
     * @param
     * @return 	json(string)
     * @author rsequeira
     */

	public function registrarPS(Request $request)
	{
	        $message =[

	           // 'unidad_medida.id_unid0ad_medida.required_if' => 'El campo unidad de medida es requerido.'
            ];
			$rules = [
                //'conteo_productos' =>'required|array|min:1',
            'bodega' => 'required|array|',
          /*  'productox' => 'required|array|',
            'presentacionx' => 'required|array|',
            'cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'conteo_productos' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',*/
            /*'nombre_comercial' => 'required|string|max:50',
            'imagen' => 'string|max:250|nullable',*/
            /*'unidad_medida' => 'required_if:tipo_producto,1|array|min:1',
            'unidad_medida.id_unidad_medida' => 'required_if:tipo_producto,1|integer|min:1',*/
		];

		$validator = Validator::make($request->all(), $rules,$message);
		if (!$validator->fails()) {

			try{
			DB::beginTransaction();
			    $secuencia = InventarioTransformacion:: max('id_transformacion') +1;
                $conf = session()->get('id_empresa');
			    $transformaciones = new InventarioTransformacion;
                $transformaciones->id_bodega = $request->bodega['id_bodega'];
                $transformaciones->descripcion = $request->bodega['descripcion'];
                $transformaciones->codigo = 'TR-'.$this->zero_fill($secuencia);
                $transformaciones->total_conversiones = $request->totalConversion;
                $transformaciones->estado = 1;// Esstado resgistrado
                $transformaciones->u_creacion = Auth::user()->usuario;
                $transformaciones->id_empresa = $conf;
                $transformaciones->save();


                foreach ($request->conteo_productos as $transformacion) {
                    $detalle_transformacion = new InventarioTransformacionDetalle();
                    $detalle_transformacion -> id_producto = $transformacion['productox']['id_producto'];
                    $detalle_transformacion -> descripcion_producto_salida = $transformacion['productox']['text'];
                    $detalle_transformacion->id_presentacion_salida=$transformacion['productox']['id_presentacion'];
                    $detalle_transformacion->descripcion_presentacion_salida=$transformacion['productox']['codigo_presentacion'];
                    $detalle_transformacion->cantidad_salida=$transformacion['cantidad'];
                    $detalle_transformacion->conversion_salida=$transformacion['conversionx'];
                    $detalle_transformacion->escalar_salida=$transformacion['productox']['escalar'];
                    $detalle_transformacion->codigo = $transformaciones->codigo;
                    $detalle_transformacion->id_bodega_producto = $transformacion['productox']['id_bodega_producto'];
                    $detalle_transformacion->id_bodega = $transformaciones->id_bodega;
                    $detalle_transformacion->id_empresa = $conf;
                    $detalle_transformacion->id_transformacion = $transformaciones->id_transformacion;
                    $detalle_transformacion->estado = 1;
                    $detalle_transformacion->u_creacion=Auth::user()->usuario;
                    $detalle_transformacion->save();
                    }
                foreach ($request->conteo_producto as $transformacionesEntradas){
                    $detalle_transformaciones = new InventarioTransformacionDetalleEntrada();
                    $detalle_transformaciones->escalar_entrada=$transformacionesEntradas['escalarx'];
                    $detalle_transformaciones->descripcion_producto_entrada=$transformacionesEntradas['productox']['text'];
                    $detalle_transformaciones->id_producto_entrada=$transformacionesEntradas['productox']['id_producto'];
                    $detalle_transformaciones->id_presentacion_entrada=$transformacionesEntradas['id_presentacion'];
                    $detalle_transformaciones->descripcion_presentacion_entrada=$transformacionesEntradas['presentacion'];
                    $detalle_transformaciones->cantidad_entrada=$request->cantidadx;
                    $detalle_transformaciones->codigo = $transformaciones->codigo;
                    $detalle_transformaciones->id_bodega_producto = $transformacionesEntradas['id_bodega_producto'];
                    $detalle_transformaciones->id_bodega = $transformaciones->id_bodega;
                    $detalle_transformaciones->id_transformacion = $transformaciones->id_transformacion;
                    $detalle_transformaciones->id_empresa=$conf;
                    $detalle_transformaciones->estado = 1;
                    $detalle_transformaciones->u_creacion = Auth::user()->usuario;
                    $detalle_transformaciones->save();
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


    /**
     * Registrar un nuevo Producto
     *
     * @access 	public
     * @param
     * @return 	json(string)
     */

    public function registrarBateria(Request $request)
    {
        $message =[
            'unidad_medida.id_unidad_medida.required' => 'El campo unidad de medida es requerido.',
            'voltaje_nominal.max'=> 'El campo voltaje nominal debe ser menor que 100'
        ];
        $rules = [
            //'codigo_sistema' => 'required|string|max:50',
            //'codigo_consecutivo'=> 'required|integer|min:1',

            'nombre_comercial' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.productos')],
            'condicion' => 'required|integer|min:1',
            'codigo_barra' => [
                'required_if:condicion,1','nullable',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.productos')],

            'descripcion' => 'required|string|max:100',
            'costo_estandar' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'precio_sugerido' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'precio_compra' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'precio_distribuidor' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'numero_parte' => [
                'nullable',
                'string',
                'max:30',
                Rule::unique('pgsql.inventario.productos')],

            'dai' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'isc' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',

           // 'tipo_producto' => 'required|integer|min:1|max:2',
            'existencia_min' => 'required|integer|min:0',
            'existencia_max' => 'required|integer|min:0',
            'cantidad_inicial' => 'required|integer|min:0',

            'imagen' => 'string|max:250|nullable',
            'proveedor_producto' => 'required|array|min:1',
            'proveedor_producto.id_proveedor' => 'required|integer|min:1',
            'proveedor_producto.codigo' => 'required|integer|min:1',

            'rubro_producto' => 'required|array|min:1',
            'rubro_producto.id_rubro' => 'required|integer|min:1',
            'unidad_medida' => 'required|array|min:1',
            'unidad_medida.id_unidad_medida' => 'required|integer|min:1',
            'impuesto_producto' => 'required|array|min:1',
            'impuesto_producto.id_impuesto' => 'required|integer|min:1',

            'bci' => 'required|string|max:10',
            'largo' => 'required|integer',
            'ancho' => 'required|integer',
            'alto' => 'required|integer',
            'peso_humedo' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'voltaje_nominal' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|max:99.99',

            'cca' => 'required|integer',
            'ca' => 'required|integer',
            'capacidad_reserva' => 'required|integer',
            'garantia' => 'required|integer',
            'rmplzo_sincosto' => 'required|integer',
            'material_bateria' => 'required|array|min:1',
            'material_bateria.id_material' => 'required|integer|min:1',
            'linea_bateria' => 'required|array|min:1',
            'linea_bateria.id_linea' => 'required|integer|min:1',

            'marca_bateria' => 'required|array|min:1',
            'marca_bateria.id_marca' => 'required|integer|min:1',
            'aplicacion_bateria' => 'required|array|min:1',
            'aplicacion_bateria.id_aplicacion' => 'required|integer|min:1',

            'submarca_bateria' => 'required|array|min:1',
            'submarca_bateria.id_submarca' => 'required|integer|min:1',
            'subaplicacion_bateria' => 'required|array|min:1',
            'subaplicacion_bateria.id_subaplicacion' => 'required|integer|min:1',




            'descuento_eficacia' => 'required|numeric|min:0|regex:/^\d*(\.\d{1,2})?$/',
            'cargo_chico_grande' => 'required|numeric|min:0|regex:/^\d*(\.\d{1,2})?$/',

        ];

        $validator = Validator::make($request->all(), $rules,$message);
        if (!$validator->fails()) {

            try{
                DB::beginTransaction();
                $producto = new InventarioProductos;
                $conf = session()->get('id_empresa');

                if($request->condicion == 1){
                    $codigo_nuevo = $producto->generarCodigoBateria($request->proveedor_producto['id_proveedor'],$request->marca_bateria['id_marca'],$request->submarca_bateria['id_submarca'],$request->aplicacion_bateria['id_aplicacion']);
                    $str_length = 5;
                    $str = substr("0000{$codigo_nuevo['secuencia']}", -$str_length);
                    $producto->codigo_consecutivo = $codigo_nuevo['secuencia'];
                    $producto->codigo_sistema = $request->proveedor_producto['codigo'].$request->marca_bateria['id_marca'].$request->submarca_bateria['id_submarca'].$request->aplicacion_bateria['id_aplicacion'].$str;
                }else{
                    $producto->codigo_sistema = 'U'.$request->bci;
                    $producto->codigo_consecutivo = 1;
                }
                $producto->nombre_comercial = $request->nombre_comercial;
                $producto->descripcion = $request->descripcion;
                $producto->numero_parte = $request->numero_parte;
                $producto->isc = $request->isc;
                $producto->dai = $request->dai;
                $producto->condicion = $request->condicion;
                $producto->costo_estandar = $request->costo_estandar;
                $producto->precio_distribuidor = $request->precio_distribuidor;
                $producto->precio_compra = $request->precio_compra;
                $producto->precio_sugerido = $request->precio_sugerido;
                $producto->existencia_min = $request->existencia_min;
                $producto->existencia_max = $request->existencia_max;
                $producto->cantidad_inicial = $request->cantidad_inicial;
                $producto->tipo_producto = 3;
                $producto->u_creacion = Auth::user()->usuario;
                $producto->codigo_barra = $request->codigo_barra;
                if($request->imagen == ''){
                    $producto->imagen = '[{"file_name":"imagenproducto.png","file_size":67892,"file_type":"image/png","file_thumbnail":"/public/product-images/imagenproducto.png"}]';
                }else{
                    $producto->imagen = $request->imagen;
                }
                $producto->id_rubro = $request->rubro_producto['id_rubro'];
                $producto->id_unidad_medida = $request->unidad_medida['id_unidad_medida'];
                $producto->id_proveedor = $request->proveedor_producto['id_proveedor'];

                $producto->id_impuesto = $request->impuesto_producto['id_impuesto'];
                $producto->activo = 1;
                $producto->id_empresa = $conf;
                $producto->save();

                $bateria_detalles = new InventarioProductosBaterias;
                $bateria_detalles->id_producto = $producto->id_producto;
                $bateria_detalles->bci = $request->bci;
                $bateria_detalles->nombre_comercial = $producto->nombre_comercial;
                $bateria_detalles->largo = $request->largo;
                $bateria_detalles->ancho = $request->ancho;
                $bateria_detalles->alto = $request->alto;
                $bateria_detalles->peso_humedo = $request->peso_humedo;
                $bateria_detalles->voltaje_nominal = $request->voltaje_nominal;
                $bateria_detalles->id_material = $request->material_bateria['id_material'];
                $bateria_detalles->cca = $request->cca;
                $bateria_detalles->ca = $request->ca;
                $bateria_detalles->capacidad_reserva = $request->capacidad_reserva;
                $bateria_detalles->garantia = $request->garantia;
                $bateria_detalles->rmplzo_sincosto = $request->rmplzo_sincosto;
                $bateria_detalles->id_linea_producto = $request->linea_bateria['id_linea'];
                $bateria_detalles->id_submarca = $request->submarca_bateria['id_submarca'];
                $bateria_detalles->id_subaplicacion = $request->subaplicacion_bateria['id_subaplicacion'];

                $bateria_detalles->descuento_eficacia = $request->descuento_eficacia;
                $bateria_detalles->cargo_chico_grande = $request->cargo_chico_grande;
                $bateria_detalles->id_empresa = $conf;

                $bateria_detalles->save();

                if($producto->cantidad_inicial > 0){

                    $nueva_bodega_sub = new InventarioBodegaProductos;
                    $nueva_bodega_sub->id_bodega=$request->bodega_inicial['id_bodega'];
                    $nueva_bodega_sub->id_producto=$producto->id_producto;
                    $nueva_bodega_sub->cantidad=0;
                    $nueva_bodega_sub->u_creacion =$producto->u_creacion;
                    $nueva_bodega_sub->id_empresa = $conf;
                    $nueva_bodega_sub->save();

                    $entrada = new InventarioEntradas;
                    $entrada->codigo_entrada = InventarioEntradas::max('id_entrada') + 1;
                    $entrada->id_tipo_entrada = 1;
                    $entrada->fecha_entrada = date('Y-m-d');
                    $entrada->id_proveedor = null;
                    $entrada->id_bodega = $nueva_bodega_sub->id_bodega;
                    $entrada->descripcion_entrada = 'Registramos Inventario Inicial del producto  ' . $producto->nombre_comercial;
                    $entrada->u_creacion = Auth::user()->usuario;;
                    $entrada->estado = 1;
                    $entrada->id_empresa = $conf;
                    $entrada->save();

                    $entrada_producto = new InventarioEntradaProductos;
                    $entrada_producto->id_entrada = $entrada->id_entrada;
                    $entrada_producto->codigo_producto = $producto->codigo_sistema;
                    $entrada_producto->descripcion_producto = $producto->descripcion;
                    $entrada_producto->unidad_medida = 'UNDS';
                    $entrada_producto->precio_unitario = $producto->costo_estandar;
                    $entrada_producto->cantidad_solicitada = $producto->cantidad_inicial;
                    $entrada_producto->cantidad_recibida = 0;
                    $entrada_producto->cantidad_faltante = 0;
                    $entrada_producto->u_creacion = $entrada->u_creacion;
                    $entrada_producto->id_empresa = $conf;
                    $entrada_producto->save();

                /*$movimiento_producto = new InventarioMovimientosProductos();
                $movimiento_producto->id_bodega_producto =$nueva_bodega_sub->id_bodega_producto;
                $movimiento_producto->fecha_movimiento =  date("Y-m-d H:i:s");
                $movimiento_producto->descripcion_movimiento = 'Inventario Inicial ' . $producto->codigo_sistema;
                $movimiento_producto->identificador_origen_movimiento = $producto->id_producto;
                $movimiento_producto->tipo_movimiento = 3;
                $movimiento_producto->cantidad_movimiento = $producto->cantidad_inicial;
                $movimiento_producto->costo = $request->costo_estandar;
                $movimiento_producto->usuario_registra = $producto->u_creacion;
                $movimiento_producto->save();*/
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

    /**
     * obtener Codigo Producto
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerCodigoProducto(Request $request, InventarioProductos $productos)
    {
        $rules = [
            'id_rubro' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $codigo = $productos->obtenerCodigoProducto($request);
            return response()->json([
                'status' => 'success',
                'result' => $codigo[0],
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
     * Update Existing User
     *
     * @access 	public
     * @param
     * @author rsequeira
     * @return 	json(string)
     */

	public function actualizarPS(Request $request)
	{
		$rules = [
			'id_transformacion' => 'required|integer|min:1',
            'estado' => 'required|integer|min:1'

            /*'nombre_comercial' => 'required|string|max:50',
            'imagen' => 'string|max:250|nullable',*/
            /*'unidad_medida' => 'required_if:tipo_producto,1|array|min:1',
            'unidad_medida.id_unidad_medida' => 'required_if:tipo_producto,1|integer|min:1',*/
			];

		
			$validator = Validator::make($request->all(), $rules);
			if (!$validator->fails()) {
	
				try{
				DB::beginTransaction();

                    $conf = session()->get('id_empresa');
                    $transformaciones = InventarioTransformacion :: find($request->id_transformacion);
                    $transformaciones->id_bodega = $request->id_bodega;
                    $transformaciones->total_conversiones = $request->totalConversion;
                    $transformaciones->estado = 2;// Estado borrador
                    $transformaciones->u_modificacion = Auth::user()->usuario;
                    $transformaciones->id_empresa = $conf;
                    $transformaciones->save();

                    InventarioTransformacionDetalle::where('id_transformacion',$request->id_transformacion)->delete();
                    foreach ($request->salida_transformacion as $transformacion) {
                        $detalle_transformacion = new InventarioTransformacionDetalle();
                        $detalle_transformacion -> id_producto = $transformacion['id_producto'];
                        $detalle_transformacion -> descripcion_producto_salida = $transformacion['descripcion_producto_salida'];
                        $detalle_transformacion->id_presentacion_salida=$transformacion['id_presentacion_salida'];
                        $detalle_transformacion->descripcion_presentacion_salida=$transformacion['descripcion_presentacion_salida'];
                        $detalle_transformacion->cantidad_salida=$transformacion['cantidad_salida'];
                        $detalle_transformacion->conversion_salida=$transformacion['conversion_salida'];
                        $detalle_transformacion->escalar_salida=$transformacion['escalar_salida'];
                        $detalle_transformacion->id_bodega_producto = $transformacion['id_bodega_producto'];
                        $detalle_transformacion->id_bodega = $transformaciones->id_bodega;
                        $detalle_transformacion->id_empresa = $conf;
                        $detalle_transformacion->codigo = $transformaciones->codigo;
                        $detalle_transformacion->id_transformacion = $transformaciones->id_transformacion;
                        $detalle_transformacion->estado = 2;
                        $detalle_transformacion->u_creacion=Auth::user()->usuario;
                        $detalle_transformacion->u_modificacion=Auth::user()->usuario;
                        $detalle_transformacion->save();
                    }
                    InventarioTransformacionDetalleEntrada::where('id_transformacion',$request->id_transformacion)->delete();
                    foreach ($request->entrada_transformacion as $transformacionesEntradas){

                        $detalle_transformaciones = new InventarioTransformacionDetalleEntrada();
                        $detalle_transformaciones->escalar_entrada=$transformacionesEntradas['escalar_entrada'];
                        $detalle_transformaciones->descripcion_producto_entrada=$transformacionesEntradas['descripcion_producto_entrada'];
                        $detalle_transformaciones->id_producto_entrada=$transformacionesEntradas['id_producto_entrada'];
                        $detalle_transformaciones->id_presentacion_entrada=$transformacionesEntradas['id_presentacion_entrada'];
                        $detalle_transformaciones->descripcion_presentacion_entrada=$transformacionesEntradas['descripcion_presentacion_entrada'];
                        $detalle_transformaciones->cantidad_entrada=$transformacionesEntradas['cantidadx'];
                        $detalle_transformaciones->codigo = $transformaciones->codigo;
                        $detalle_transformaciones->id_bodega_producto = $transformacionesEntradas['id_bodega_producto'];
                        $detalle_transformaciones->id_bodega = $transformaciones->id_bodega;
                        $detalle_transformaciones->id_transformacion = $transformaciones->id_transformacion;
                        $detalle_transformaciones->id_empresa=$conf;
                        $detalle_transformaciones->estado = 2;
                        $detalle_transformaciones->u_creacion = Auth::user()->usuario;
                        $detalle_transformaciones->u_modificacion = Auth::user()->usuario;
                        $detalle_transformaciones->save();
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

    /**
     * Update Existing User
     *
     * @access 	public
     * @param
     * @author rsequeira
     * @return 	json(string)
     */
    public function emitirTransformacion(Request $request)
    {   $messages =[

    ];
        $rules =[
            'estado' => 'required|integer|min:1'
        ];
        $validator = Validator::make($request->all(),$rules,$messages);
        if(!$validator->fails()){
            try{
                DB::beginTransaction();
                $conf = session()->get('id_empresa');
                $transformaciones = InventarioTransformacion :: find($request->id_transformacion);

                if($transformaciones->estado == 1 || $transformaciones->estado == 2 && $request->estado ==3){

                    $transformaciones->id_bodega = $request->bodega['id_bodega'];
                    $transformaciones->total_conversiones = $request->totalConversion;
                    $transformaciones->estado = 3;// Estado Emitido
                    $transformaciones->u_emite = Auth::user()->usuario;
                    $transformaciones->id_empresa = $conf;
                    $transformaciones->save();

                    $salidas = new InventarioSalidas;
                    $conf = session()->get('id_empresa');
                    $salidas->codigo_salida = InventarioSalidas::max('id_salida')+1;
                    $salidas->id_tipo_salida = 19; //Tipo salida producto por transformación
                    /*$salidas->numero_documento = $transformaciones->codigo;*/
                    $salidas->fecha_salida = date("Y-m-d H:i:s");
                    $salidas->id_bodega = $request->bodega['id_bodega'];
                    $salidas->id_zona_costo = 1;
                    $salidas->id_proveedor = null;
                    $salidas->id_cliente = null;
                    $salidas->descripcion_salida ='Salida por transformacion No. '.$transformaciones->codigo;
                    $salidas->u_creacion = $transformaciones->u_emite;
                    $salidas->estado=1;
                    $salidas->id_empresa = $conf;
                    $salidas->orden_venta = null;
                    $salidas->no_remision = null;
                    $salidas->no_factura = null;
                    $salidas->save();

                    foreach ($request->salida_transformacion as $transformacionSalida){
                        $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$transformacionSalida['id_bodega_producto'])->first();
                        /*$bodega_sub->cantidad = $bodega_sub->cantidad-$transformacionSalida['cantidad_salida'];
                        $bodega_sub->save();*/

                        $salida_transformacion = new InventarioSalidaProductos();
                        $salida_transformacion->id_bodega_producto = $bodega_sub->id_bodega_producto;
                        $salida_transformacion->id_salida = $salidas->id_salida;
                        $salida_transformacion->descripcion_producto = $transformacionSalida['descripcion_producto_salida'];
                        $salida_transformacion->codigo_producto = $transformacionSalida['productos_bodega']['producto']['codigo_sistema'];
                        $salida_transformacion->unidad_medida = $transformacionSalida['productos_bodega']['producto']['unidad_medida'];
                        $salida_transformacion->precio_unitario = 0;
                        $salida_transformacion->cantidad_saliente = $transformacionSalida['cantidad_salida'];
                        $salida_transformacion->cantidad_despachada = 0;
                        $salida_transformacion->cantidad_faltante = 0;
                        $salida_transformacion->u_creacion = $transformaciones->u_emite;
                        $salida_transformacion->id_presentacion = $transformacionSalida['id_presentacion_salida'];
                        $salida_transformacion->codigo_presentacion = $transformacionSalida['descripcion_presentacion_salida'];
                        $salida_transformacion->id_unidad_medida_presentacion = $transformacionSalida['productos_bodega']['id_unidad_medida_presentacion'];
                        $salida_transformacion->id_unidad_medida_calculo = $transformacionSalida['productos_bodega']['id_unidad_medida_calculo'];
                        $salida_transformacion->escalar = $transformacionSalida['escalar_salida'];
                        $salida_transformacion->conversionx = $transformacionSalida['conversion_salida'];
                        $salida_transformacion->id_empresa = $conf;
                        $salida_transformacion->id_zona_costo = 1;
                        $salida_transformacion->save();
                    }
                    $entradas = new InventarioEntradas;
                    $entradas->codigo_entrada = InventarioEntradas::max('id_entrada')+1;
                    $entradas->id_tipo_entrada = 13;// Entrada de productos por transformacion
                    $entradas->fecha_entrada = date("Y-m-d H:i:s");
                    $entradas->fecha_fabricacion = $request->entrada_transformacion[0]['productos_bodega']['fecha_fabricacion'];
                    $entradas->fecha_vencimiento = $request->entrada_transformacion[0]['productos_bodega']['fecha_vencimiento'];
                    $entradas->id_proveedor = null;
                    $entradas->id_bodega = $transformaciones->id_bodega;
                    $entradas->id_zona_costo = 1;
                    $entradas->descripcion_entrada = 'Entrada por transformacion No. '.$transformaciones->codigo;
                    $entradas->orden_compra = null;
                    $entradas->no_lote = $request->entrada_transformacion[0]['productos_bodega']['no_lote'];
                    $entradas->no_factura = null;
                    $entradas->u_creacion = $transformaciones->u_emite;
                    $entradas->id_empresa = $conf;
                    $entradas->estado = 1;
                    $entradas->save();

                    foreach ($request->entrada_transformacion as $transformacionEntrada){
                        $entrada_transformacion = new InventarioEntradaProductos;
                        $bodega_sub= InventarioBodegaProductos::where('id_bodega',$request->bodega['id_bodega'])->where('id_producto',$transformacionEntrada['id_producto_entrada'])->where('id_presentacion',$transformacionEntrada['id_presentacion_entrada'])->where('no_lote',$request->entrada_transformacion[0]['productos_bodega']['no_lote'])->get();
                        if(!empty($bodega_sub[0])){
                            $entrada_transformacion->id_bodega_producto = $bodega_sub[0]['id_bodega_producto'];
                        }else{
                            $nueva_bodega_sub = new InventarioBodegaProductos;
                            $nueva_bodega_sub->id_bodega =  $request->bodega['id_bodega'];
                            $nueva_bodega_sub->id_producto = $transformacionEntrada['id_producto_entrada'];
                            $nueva_bodega_sub->cantidad = $transformacionEntrada['cantidadx'];
                            $nueva_bodega_sub->id_empresa = $conf;
                            $nueva_bodega_sub->id_presentacion = $transformacionEntrada['id_presentacion_entrada'];
                            $nueva_bodega_sub->codigo_presentacion = $transformacionEntrada['descripcion_presentacion_entrada'];
                            $nueva_bodega_sub->id_unidad_medida_presentacion = $transformacionEntrada['productos_bodega']['id_unidad_medida_presentacion'];
                            $nueva_bodega_sub->id_unidad_medida_calculo = $transformacionEntrada['productos_bodega']['id_unidad_medida_calculo'];
                            $nueva_bodega_sub->escalar = $transformacionEntrada['escalar_entrada'];
                            $nueva_bodega_sub->conversionx = $transformacionEntrada['conversion'];
                            $nueva_bodega_sub->no_lote = $transformacionEntrada['productos_bodega']['no_lote'];
                            $nueva_bodega_sub->fecha_fabricacion = $transformacionEntrada['productos_bodega']['fecha_fabricacion'];
                            $nueva_bodega_sub->fecha_vencimiento = $transformacionEntrada['productos_bodega']['fecha_vencimiento'];
                            $nueva_bodega_sub->u_creacion = $transformaciones->u_emite;
                            $nueva_bodega_sub->save();
                            $entrada_transformacion->id_bodega_producto = $nueva_bodega_sub ->id_bodega_producto;
                        }
                        $entrada_transformacion->id_entrada = $entradas->id_entrada;
                        $entrada_transformacion->codigo_producto = $request->entrada_transformacion[0]['productos_bodega']['producto']['codigo_sistema'];
                        $entrada_transformacion->descripcion_producto = $request->entrada_transformacion[0]['productos_bodega']['producto']['nombre_comercial'] ;
                        $entrada_transformacion->unidad_medida = $request->entrada_transformacion[0]['productos_bodega']['producto']['unidad_medida'];
                        $entrada_transformacion->precio_unitario = 0;
                        $entrada_transformacion->cantidad_recibida = 0;
                        $entrada_transformacion->cantidad_solicitada =$transformacionEntrada['cantidadx'];
                        $entrada_transformacion->cantidad_faltante = 0;
                        $entrada_transformacion->id_presentacion = $transformacionEntrada['id_presentacion_entrada'];
                        $entrada_transformacion->codigo_presentacion = $transformacionEntrada['descripcion_presentacion_entrada'];
                        $entrada_transformacion->id_unidad_medida_presentacion = $transformacionEntrada['productos_bodega']['id_unidad_medida_presentacion'];
                        $entrada_transformacion->id_unidad_medida_calculo = $transformacionEntrada['productos_bodega']['id_unidad_medida_calculo'];
                        $entrada_transformacion->escalar = $transformacionEntrada['escalar_entrada'];
                        $entrada_transformacion->conversionx = $transformacionEntrada['conversion'];
                        $entrada_transformacion->id_empresa = $conf;
                        $entrada_transformacion->u_creacion = $transformaciones->u_emite;
                        $entrada_transformacion->save();

                    }
                    DB::commit();
                    return response()->json([
                        'status' => 'success',
                        'result' => null,
                        'messages' => null
                    ]);
                }else{
                    DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => 'La transformación ha sido modificada previamente, no se pueden grabar los cambios',
                        'messages' => null
                    ]);
                }


            }catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }


        } else {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }



    /**
     * Update Existing User
     *
     * @access 	public
     * @param
     * @return 	json(string)
     */

    public function actualizarBateria(Request $request)
    {
        $messages = [
            'producto_detalles_baterias.bateria_sub_aplicacion.required' => 'Se requiere seleccionar una Sub Aplicación',
            'producto_detalles_baterias.bateria_sub_marca.required' => 'Se requiere seleccionar una Sub Marca',
            'producto_detalles_baterias.voltaje_nominal.max'=> 'El campo voltaje nominal debe ser menor que 100'
        ];

        $rules = [
            'id_producto' => 'required|integer|min:1',

            'nombre_comercial' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.productos')->ignore($request->id_producto,'id_producto')],
            'codigo_barra' => [
                'required_if:condicion,1','nullable',
                'string',
                'max:50',
                Rule::unique('pgsql.inventario.productos')->ignore($request->id_producto,'id_producto')],

            'descripcion' => 'required|string|max:100',
            'costo_estandar' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'precio_compra' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'precio_distribuidor' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'precio_sugerido' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            // 'tipo_producto' => 'required|integer|min:1|max:2',
            'existencia_min' => 'required|integer|min:0',
            'existencia_max' => 'required|integer|min:0',

            'imagen' => 'string|max:250|nullable',

            'numero_parte' => 'nullable|string|max:30',

            'dai' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'isc' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',

            'unidad_medida' => 'required|array|min:1',
            'unidad_medida.id_unidad_medida' => 'required|integer|min:1',
            'impuesto_producto' => 'required|array|min:1',
            'impuesto_producto.id_impuesto' => 'required|integer|min:1',

            'producto_detalles_baterias' => 'required|array|min:1',
            'producto_detalles_baterias.id_bateria_detalle' => 'required|integer',

            'producto_detalles_baterias.bci' => 'required|string|max:10',
            'producto_detalles_baterias.largo' => 'required|integer',
            'producto_detalles_baterias.ancho' => 'required|integer',
            'producto_detalles_baterias.alto' => 'required|integer',
            'producto_detalles_baterias.peso_humedo' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'producto_detalles_baterias.voltaje_nominal' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|max:99.99',

            'producto_detalles_baterias.cca' => 'required|integer',
            'producto_detalles_baterias.ca' => 'required|integer',
            'producto_detalles_baterias.capacidad_reserva' => 'required|integer',
            'producto_detalles_baterias.garantia' => 'required|integer',
            'producto_detalles_baterias.rmplzo_sincosto' => 'required|integer',
            'producto_detalles_baterias.bateria_material' => 'required|array|min:1',
            'producto_detalles_baterias.bateria_material.id_material' => 'required|integer|min:1',
            'producto_detalles_baterias.bateria_linea_producto' => 'required|array|min:1',
            'producto_detalles_baterias.bateria_linea_producto.id_linea' => 'required|integer|min:1',
            //'producto_detalles_baterias.bateria_sub_marca' => 'required|array|min:1',
            //'producto_detalles_baterias.bateria_sub_marca.id_submarca' => 'required|integer|min:1',
            //'producto_detalles_baterias.bateria_sub_aplicacion' => 'required|array|min:1',
            //'producto_detalles_baterias.bateria_sub_aplicacion.id_subaplicacion' => 'required|integer|min:1',

            'producto_detalles_baterias.descuento_eficacia' => 'required|numeric|min:0|regex:/^\d*(\.\d{1,2})?$/',
            'producto_detalles_baterias.cargo_chico_grande' => 'required|numeric|min:0|regex:/^\d*(\.\d{1,2})?$/',
        ];




        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{
                DB::beginTransaction();
                $producto = InventarioProductos::findOrFail($request->id_producto);
                $conf = session()->get('id_empresa');

                $producto->nombre_comercial = $request->nombre_comercial;
                $producto->descripcion = $request->descripcion;
                $producto->costo_estandar = $request->costo_estandar;
                $producto->numero_parte = $request->numero_parte;
                $producto->id_unidad_medida = $request->unidad_medida['id_unidad_medida'];

                $producto->isc = $request->isc;
                $producto->dai = $request->dai;
                $producto->precio_sugerido = $request->precio_sugerido;
                $producto->precio_distribuidor = $request->precio_distribuidor;
                $producto->precio_compra = $request->precio_compra;
                $producto->existencia_min = $request->existencia_min;
                $producto->existencia_max = $request->existencia_max;
                $producto->codigo_barra = $request->codigo_barra;
                if($request->imagen == ''){
                    $producto->imagen = '[{"file_name":"imagenproducto.png","file_size":67892,"file_type":"image/png","file_thumbnail":"/public/product-images/imagenproducto.png"}]';
                }else{
                    $producto->imagen = $request->imagen;
                }

                $producto->id_impuesto = $request->impuesto_producto['id_impuesto'];
                $producto->save();

                $bateria_detalles = InventarioProductosBaterias::findOrFail($request->producto_detalles_baterias['id_bateria_detalle']);

                $bateria_detalles->bci = $request->producto_detalles_baterias['bci'];
                $bateria_detalles->nombre_comercial = $producto->nombre_comercial;
                $bateria_detalles->largo = $request->producto_detalles_baterias['largo'];
                $bateria_detalles->ancho = $request->producto_detalles_baterias['ancho'];
                $bateria_detalles->alto = $request->producto_detalles_baterias['alto'];
                $bateria_detalles->peso_humedo = $request->producto_detalles_baterias['peso_humedo'];
                $bateria_detalles->voltaje_nominal = $request->producto_detalles_baterias['voltaje_nominal'];
                $bateria_detalles->id_material = $request->producto_detalles_baterias['bateria_material']['id_material'];
                $bateria_detalles->cca = $request->producto_detalles_baterias['cca'];
                $bateria_detalles->ca = $request->producto_detalles_baterias['ca'];
                $bateria_detalles->capacidad_reserva = $request->producto_detalles_baterias['capacidad_reserva'];
                $bateria_detalles->garantia = $request->producto_detalles_baterias['garantia'];
                $bateria_detalles->rmplzo_sincosto = $request->producto_detalles_baterias['rmplzo_sincosto'];
                $bateria_detalles->id_linea_producto = $request->producto_detalles_baterias['bateria_linea_producto']['id_linea'];
                $bateria_detalles->id_submarca = $request->producto_detalles_baterias['bateria_sub_marca']['id_submarca'];
                $bateria_detalles->id_subaplicacion = $request->producto_detalles_baterias['bateria_sub_aplicacion']['id_subaplicacion'];

                $bateria_detalles->descuento_eficacia = $request->producto_detalles_baterias['descuento_eficacia'];
                $bateria_detalles->cargo_chico_grande = $request->producto_detalles_baterias['cargo_chico_grande'];

                $bateria_detalles->save();

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

		/**
     * Activa Producto
     *
     * @access  public
     * @param   
     * @return  json(string)
     */
    public function activaProducto(Request $request)
    {
        $rules = [
            'id_producto' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $producto = InventarioProductos::find($request->id_producto);
            $producto->activo = true;
            $producto->save();

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
     * Desactiva Producto
     *
     * @access  public
     * @param   
     * @return  json(string)
     */
    public function desactivaProducto(Request $request)
    {
        $rules = [
            'id_producto' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $producto = InventarioProductos::find($request->id_producto);
            $producto->activo = false;
            $producto->save();

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

    public function obtenerBateriaCodigo(Request $request)
    {
        $rules = [
            'codigo_bateria'  => 'required|string|max:50',
            'id_bodega'  => 'required|integer|min:0',
            'reservada'=> 'required|boolean',
            'estado'  => 'required|integer'
        ];
        //echo $request->fecha;
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            if($request->id_bodega == 0){
                $conf = session()->get('id_empresa');
                //$bateria = InventarioBaterias::where('codigo_garantia',$request->codigo_bateria)->where('estado',$request->estado)->where('reservada',$request->reservada)->with('bateriaProducto')->first();
                $bateria = InventarioBaterias::WhereRaw("upper(codigo_garantia) = upper(?)",[$request->codigo_bateria])->where('id_empresa', '=', $conf)->where('estado',$request->estado)->where('reservada',$request->reservada)->with('bateriaProducto')->first();


            }else{
                $conf = session()->get('id_empresa');
                //$bateria = InventarioBaterias::where('codigo_garantia',$request->codigo_bateria)->where('estado',$request->estado)->where('reservada',$request->reservada)->where('id_bodega_actual',$request->id_bodega)->with('bateriaProducto')->first();
                $bateria = InventarioBaterias::WhereRaw("upper(codigo_garantia) = upper(?)",[$request->codigo_bateria])->where('id_empresa', '=', $conf)->where('estado',$request->estado)->where('reservada',$request->reservada)->where('id_bodega_actual',$request->id_bodega)->with('bateriaProducto')->first();

            }

            if(!empty($bateria)){

                return response()->json([
                    'status' => 'success',
                    'result' => $bateria,
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('codigo_bateria'=>["Datos no encontrados"]),
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

    public function obtenerBateriaSalida(Request $request)
    {
        $rules = [
            'codigo_bateria'  => 'required|string|max:50',
            'id_salida'  => 'required|integer',
            'estado'  => 'required|integer'
        ];
        //echo $request->fecha;
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            if($request->id_bodega == 0){
                $conf = session()->get('id_empresa');
                //$bateria = InventarioBaterias::where('codigo_garantia',$request->codigo_bateria)->where('estado',$request->estado)->where('reservada',$request->reservada)->with('bateriaProducto')->first();
                $bateria = InventarioBaterias::WhereRaw("upper(codigo_garantia) = upper(?)",[$request->codigo_bateria])->where('id_empresa', '=', $conf)->where('estado',$request->estado)->where('reservada',$request->reservada)->with('bateriaProducto')->first();
            }else{
                $conf = session()->get('id_empresa');
                //$bateria = InventarioBaterias::where('codigo_garantia',$request->codigo_bateria)->where('estado',$request->estado)->where('reservada',$request->reservada)->where('id_bodega_actual',$request->id_bodega)->with('bateriaProducto')->first();
                $bateria = InventarioBaterias::WhereRaw("upper(codigo_garantia) = upper(?)",[$request->codigo_bateria])->where('id_empresa', '=', $conf)->where('estado',$request->estado)->where('reservada',$request->reservada)->where('id_bodega_actual',$request->id_bodega)->with('bateriaProducto')->first();
            }

            if(!empty($bateria)){

                return response()->json([
                    'status' => 'success',
                    'result' => $bateria,
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('codigo_bateria'=>["Datos no encontrados"]),
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

    public function obtenerBateriaCualquiera(Request $request)
    {
        $messages = [
            'codigo_bateria.exists' => 'No hay registros previos de este código de garantía.',
        ];
        $rules = [
            'codigo_bateria'  => 'required|string|max:50',
        ];
        //echo $request->fecha;
        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
       //89315623
           // 1 Disponible, 3 En Garantía, 5 Usadas, 6 Obsoletas 7 vendida 8 rcuperado
          $bateria = InventarioBaterias::select('inventario.baterias.id_bateria','inventario.baterias.codigo_garantia','inventario.baterias.fecha_activacion','inventario.baterias.fecha_ingreso',
              'inventario.productos.descripcion as descripcion_producto','inventario.productos.id_producto','inventario.productos.nombre_comercial',
              DB::raw("case inventario.baterias.estado when 1 then 'Disponible' when 3 then 'En garantía' when 5 then 'Usada' when 7 then 'Despachada/Vendida' when 8 then 'Recuperada' else 'No disponible' end as estado_bateria"))->
          join('inventario.productos', 'inventario.baterias.id_producto', '=', 'inventario.productos.id_producto')
          ->WhereRaw("upper(codigo_garantia) = upper(?)",[$request->codigo_bateria])->where('inventario.productos.id_empresa', '=', $conf)->first();
            if(!empty($bateria)){
             $movimientos_bateria = InventarioMovimientosBaterias::where('id_empresa', '=', $conf)->WhereRaw("upper(codigo_garantia) = upper(?)",[$request->codigo_bateria])->get();
                if(!empty($movimientos_bateria)){

                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'movimientos_bateria' => $movimientos_bateria,
                        'bateria' => $bateria,
                    ],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('codigo_bateria'=>["Datos no encontrados"]),
                    'messages' => null
                ]);
            }
            }else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('codigo_bateria'=>["No hay registros previos de este código de garantía."]),
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


    public function obtenerBateriaAny(Request $request)
    {
        $messages = [
            'codigo_bateria.exists' => 'No hay registros previos de este código de garantía.',
        ];
        $rules = [
            'codigo_bateria'  => 'required|string|max:50',
        ];
        //echo $request->fecha;
        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');

            $bateria = InventarioBaterias::where('id_empresa', '=', $conf)->WhereRaw("upper(codigo_garantia) = upper(?)",[$request->codigo_bateria])->with('bateriaProducto')->first();
            if(!empty($bateria)){
                return response()->json([
                    'status' => 'success',
                    'result' => $bateria,
                    'messages' => null
                ]);
            }else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('bateria'=>["No hay registros previos de este código de garantía."]),
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


    public function obtenerAjusteBateria(Request $request)
    {
        $rules = [
            'tipo_servicio'  => 'required|integer|min:1',
            'id_producto'  => 'required|integer|min:1',
            'fecha_venta'  => 'required|date',
            'fecha_reclamo'  => 'required|date'
        ];
        //echo $request->fecha;
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $bateria = InventarioProductos::select('id_producto',DB::raw("inventario.obtener_monto_ajuste_garantia(id_producto,'".$request->fecha_venta."',".$request->tipo_servicio.",'" .$request->fecha_reclamo."'".') as porcentaje_ajuste'))->where('id_empresa', '=', $conf)->where('id_producto',$request->id_producto)->first();

            //DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->id_periodo,$periodo_mes['mes']]);
            if(!empty($bateria)){

                return response()->json([
                    'status' => 'success',
                    'result' => $bateria->porcentaje_ajuste,
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('codigo_bateria'=>["Datos no encontrados"]),
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

    public function reporteFichaBateria($id_producto)
    {
        // echo $ext;
        $ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp7/htdocs/resources/reports/DetallesBaterias';
            //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'DetallesBaterias';
            $input = '/var/www/html/resources/reports/DetallesBateriasORG';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'DetallesBateriasORG';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [ 'id_producto' => $id_producto],
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'DetallesBaterias.' . $ext, $headers);
        }else{
            return '';
        }
    }



    public function generarReporte($ext, Request $request)
    {
        // echo $ext;

        $os = array("xls", "pdf");
        //echo gethostname();
        if (in_array($ext, $os)) {
            /*$input = 'C:/xampp7/htdocs/resources/reports/Blank_A4.jrxml';
              echo $input;
              $jasper = new PHPJasper;
              $jasper->compile($input)->execute();
            */
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/CuentasContables';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'CuentasContables';
            $input = '/var/www/html/resources/reports/ListadoProductoServicio';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'ListadoProductoServicio';

            if($ext == 'xls'){
                $input = $input.'XLS.jasper';
            }

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [],
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
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename=' . $hora_actual. 'CuentasContables.' . $ext);
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
            header('Content-Length: ' . filesize($output . '.' . $ext));
            flush();
            readfile($output . '.' . $ext);
            unlink($output . '.' . $ext);*/

            $headers = [
                'Content-Type' => 'application/pdf',
            ];

            return response()->download($output . '.' . $ext ,$hora_actual. 'ListadoProductoServicio.' . $ext, $headers);

            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/
        }
    }


    public function generarReporteFechaActivacion(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'anioInicial' => 'required|integer',
            'anioFinal'=> 'required|integer'
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os))  {
                $hora_actual = time();
               // $input = 'C:/xampp/htdocs/resources/reports/FechaActivacion';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'FechaActivacion';
                 $input = '/var/www/html/resources/reports/FechaActivacion';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'FechaActivacion';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/FechaActivacion';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'FechaActivacion';


                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'AnioInicial' => $request->anioInicial,
                        'AnioFinal' => $request->anioFinal
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

               /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                   print_r($output);*/

                return response()->download($output . '.' . $request->extension, $hora_actual . 'FechaActivacion.' . $request->extension, $headers);
            }else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }
        }else {
            return '';
        }
    }

    public function generarReporteEstadoBateria(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'id_bodega_actual' => 'required|integer'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/ReporteEstadoBateria';
                //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteEstadoBateria';
                $input = '/var/www/html/resources/reports/ReporteEstadoBateria';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'ReporteEstadoBateria';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';


                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',

                    'params' => [
                        'id_bodega_actual' => $request->id_bodega_actual,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteEstadoBateria.' . $request->extension, $headers);

                 /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                    print_r($output);*/
            }  else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }
        }else {
            return '';
        }
    }

    public function generarReporteExistenciaProducto(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
            'id_sucursal' => 'required|integer'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
               // $input = 'C:/xampp/htdocs/resources/reports/ExistenciaPorSucursal';
                //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ExistenciaPorSucursal';
                $input = '/var/www/html/resources/reports/ExistenciaPorSucursal';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'ExistenciaPorSucursal';


                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_sucursal' => $request->id_sucursal,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ExistenciaPorSucursal.' . $request->extension, $headers);

                /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                    print_r($output);*/
            }  else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }
        }else {
            return '';
        }
    }


    public function registrarBateriasExternas(Request $request)
    {
        $messages = [
        ];

        $rules = [
            'detalle_baterias' => 'nullable|required|array|min:0',
            'detalle_baterias.*.codigo_garantiax' => 'required|string|max:50|unique:pgsql.inventario.baterias,codigo_garantia',
            'detalle_baterias.*.fecha_activacion' => 'required|string|min:5|max:5',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $conf = session()->get('id_empresa');
                            foreach ($request->detalle_baterias as $bateria) {

                                    $bateria_individual = new InventarioBaterias();
                                    $bateria_individual->id_producto = $bateria['productox']['id_producto'];
                                    $bateria_individual->id_bodega_inicial = 1;
                                    $bateria_individual->id_bodega_actual = null;
                                    $bateria_individual->codigo_barras = $bateria['productox']['codigo_barra'];
                                    $bateria_individual->codigo_garantia = $bateria['codigo_garantiax'];

                                    $bateria_individual->fecha_activacion = $bateria['fecha_activacion'];
                                    $bateria_individual->fecha_ingreso = date('Y-m-d H:i:s');
                                    $bateria_individual->estado = 7;//vendida
                                    $bateria_individual->id_empresa = $conf;
                                    $bateria_individual->save();

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
    public function zero_fill ($valor, $long = 4){
        return str_pad($valor, $long , 0, STR_PAD_LEFT );
    }

}