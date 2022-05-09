<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\InventarioBaterias;
use App\Models\InventarioBateriasAplicaciones;
use App\Models\InventarioBateriasLineas;
use App\Models\InventarioBateriasMarcas;
use App\Models\InventarioBateriasMateriales;
use App\Models\InventarioBodegaProductos;
use App\Models\InventarioBodegas;
use App\Models\InventarioEntradaProductos;
use App\Models\InventarioEntradas;
use App\Models\InventarioMovimientosBaterias;
use App\Models\InventarioMovimientosProductos;
use App\Models\InventarioProductosBaterias;
use App\Models\InventarioProductosPresentaciones;
use App\Models\InventarioProveedores;
use App\Models\InventarioUnidadMedida;
use App\Models\PublicImpuestos;
use App\Models\PublicRubrosServiciosMateriales;
use Hash, Validator,Auth;
use App\Models\InventarioProductos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;

class InventarioProductosController extends Controller
{

    public function nueva(Request $request)
    {

        $conf = session()->get('id_empresa');
        $proveedores = InventarioProveedores::where('id_empresa', '=', $conf)->where('activo', 1)->orderby('id_proveedor')->select('id_proveedor','nombre_comercial','codigo','numero_ruc','numero_cedula')->get();
        $bodegas =InventarioBodegas::where('id_empresa', '=', $conf)->where('activo', 1)->select('id_bodega','descripcion')->get();
        $impuestos = PublicImpuestos::select(['id_impuesto','descripcion'])->get();
        $rubros = PublicRubrosServiciosMateriales::select(['id_rubro','descripcion','codigo','rubro_full'])->orderby('codigo')->get();
        $unidades_medida = InventarioUnidadMedida::select('id_unidad_medida','unidad_medida','descripcion','activo')->where('id_empresa', '=', $conf)->where('activo',1)->get();
        $aplicaciones = InventarioBateriasAplicaciones::select('id_aplicacion','descripcion')->where('id_empresa', '=', $conf)->with('aplicacionSubAplicaciones')->get();
        $lineas = InventarioBateriasLineas::select('id_linea','descripcion')->where('id_empresa', '=', $conf)->where('activo',true)->orderBy('id_linea')->get();
        $materiales = InventarioBateriasMateriales::select('id_material','descripcion')->where('id_empresa', '=', $conf)->where('activo',true)->orderBy('id_material')->get();
        $marcas = InventarioBateriasMarcas::select('id_marca','descripcion')->where('id_empresa', '=', $conf)->with('marcaSubMarcas')->get();


                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'proveedores' => $proveedores,
                        'bodegas'=> $bodegas,
                        'impuestos'=> $impuestos,
                        'rubros'=> $rubros,
                        'unidades_medida'=> $unidades_medida,
                        'aplicaciones'=> $aplicaciones,
                        'lineas'=> $lineas,
                        'materiales'=> $materiales,
                        'marcas'=> $marcas,

                    ],
                    'messages' => null
                ]);
    }

    /**
     * Cargar unidades de medida
     *
     * @access  public
     * @param request
     * @return  json(array)
     * @author octaviom
     */
    public function nuevoPS(Request $request)
    {
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $unidades_medida = InventarioUnidadMedida::select('id_unidad_medida','unidad_medida','descripcion','activo')
            ->whereIn('id_empresa',array($conf,$id_empresa_global))->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'unidades_medida'=> $unidades_medida,
            ],
            'messages' => null
        ]);
    }public function obtenerProductoPresentacion(Request $request)
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
}
    public function nuevo(){
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

    public function buscarProductos(Request $request, InventarioProductos $productos)
    {
        $productos = $productos->buscarProductos($request);
        return response()->json([
            'results' => $productos
        ]);
    }

    public function buscarPS(Request $request, InventarioProductos $productos)
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
     */

    public function obtenerProductos(Request $request, InventarioProductos $productos)
    {
        $productos = $productos->obtenerProductos($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $productos->total(), 
                'rows' => $productos->items()
            ],
            'messages' => null
        ]);
	}

    public function nuevaBateriaExterna(Request $request)
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
    }

    /**
     * Get List of Baterias
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerBaterias(Request $request, InventarioProductos $productos)
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

    public function obtenerProductosBodega(Request $request, InventarioProductos $productos)
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

    public function obtenerProductosValidos(Request $request, InventarioProductos $productos)
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

    public function obtenerProducto(Request $request, InventarioProductos $productos)
    {
        $rules = [
            'id_producto' => 'required|integer|min:1'
		];
	

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
		  
			$productos = $productos->obtenerProducto($request);

            if(!empty($productos[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => $productos[0],
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
     * Get Single User
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerBateria(Request $request, InventarioProductos $bateria)
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
     * @param 	Request
     * @return 	json(string)
     * @author octaviom
     */

	public function registrarPS(Request $request)
	{
	        $message =[
	           // 'unidad_medida.id_unidad_medida.required_if' => 'El campo unidad de medida es requerido.'
            ];
			$rules = [
                //'conteo_productos' =>'required|array|min:1',
            'codigo_sistema' => 'required|string|max:50',
            'nombre_comercial' => 'required|string|max:50',
            'imagen' => 'string|max:250|nullable',
            /*'unidad_medida' => 'required_if:tipo_producto,1|array|min:1',
            'unidad_medida.id_unidad_medida' => 'required_if:tipo_producto,1|integer|min:1',*/
		];

		$validator = Validator::make($request->all(), $rules,$message);
		if (!$validator->fails()) {

			try{
			DB::beginTransaction();
                $conf = session()->get('id_empresa');
			    $producto = new InventarioProductos;
                $producto->codigo_sistema = $request->codigo_sistema;
                $producto->nombre_comercial = $request->nombre_comercial;
                $producto->tipo_producto = 1; //1-tipo producto
                $producto->u_creacion =Auth::user()->usuario;
                if($request->imagen == ''){
                    $producto->imagen = '[{"file_name":"imagenproducto.png","file_size":67892,"file_type":"image/png","file_thumbnail":"/public/product-images/imagenproducto.png"}]';
                }else{
                    $producto->imagen = $request->imagen;
                }
                $producto->id_rubro = 155; // productos químicos
                //$producto->id_unidad_medida = $request->unidad_medida['id_unidad_medida'];
                $producto->id_impuesto = 6; //id_impuesto 6- N/A
                $producto->activo = 1;
                $producto->id_empresa = $conf;
                $producto->save();

                foreach ($request->conteo_productos as $presentacion) {

                    $producto_presentacion = new InventarioProductosPresentaciones();
                    $producto_presentacion -> id_producto = $producto->id_producto;
                    $producto_presentacion -> descripcion_producto = $producto->nombre_comercial;
                    $producto_presentacion->id_presentacion=$presentacion['presentacionx']['id_presentacion'];
                    $producto_presentacion->descripcion_presentacion=$presentacion['presentacionx']['codigo'];
                    $producto_presentacion->id_empresa = $conf;
                    $producto_presentacion->estado = 1;
                    $producto_presentacion->u_creacion=Auth::user()->usuario;
                    $producto_presentacion->save();
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
     * @return 	json(string)
     */

	public function actualizarPS(Request $request)
	{
		$rules = [
			'id_producto' => 'required|integer|min:1',

            'nombre_comercial' => 'required|string|max:50',
            'imagen' => 'string|max:250|nullable',
            /*'unidad_medida' => 'required_if:tipo_producto,1|array|min:1',
            'unidad_medida.id_unidad_medida' => 'required_if:tipo_producto,1|integer|min:1',*/
			];

		
			$validator = Validator::make($request->all(), $rules);
			if (!$validator->fails()) {
	
				try{
				DB::beginTransaction();
				$producto = InventarioProductos::findOrFail($request->id_producto);
                    $conf = session()->get('id_empresa');

                    $producto->codigo_sistema = $request->codigo_sistema;
                    $producto->nombre_comercial = $request->nombre_comercial;
                    if($request->imagen == ''){
                    $producto->imagen = '[{"file_name":"imagenproducto.png","file_size":67892,"file_type":"image/png","file_thumbnail":"/public/product-images/imagenproducto.png"}]';
                    }else{
                    $producto->imagen = $request->imagen;
                    }
/*                    if($producto->tipo_producto == 1){
                        $producto->id_unidad_medida = 8;
                    }*/
                    $producto->id_empresa = $conf;
                    $producto->u_modificacion = Auth::user()->usuario;
				    $producto->save();

                    InventarioProductosPresentaciones::where('id_producto',$request->id_producto)->delete();

                    foreach ($request->presentaciones_producto as $presentacion) {

                        $producto_presentacion = new InventarioProductosPresentaciones();
                        $producto_presentacion -> id_producto = $producto->id_producto;
                        $producto_presentacion -> descripcion_producto = $producto->nombre_comercial;
                        $producto_presentacion->id_presentacion = $presentacion['id_presentacion'];
                        $producto_presentacion->descripcion_presentacion = $presentacion['descripcion_presentacion'];
                        $producto_presentacion->id_empresa = $conf;
                        $producto_presentacion->estado = 1;
                        $producto_presentacion->u_modificacion=Auth::user()->usuario;
                        $producto_presentacion->save();
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
            $conf = session()->get('id_empresa');
            $nombre_empresa = AdmonAjustes::where('id_empresa', '=',$conf )->where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
            $url = '/var/www/html/resources/reports/';

            if($ext == 'xls'){
                $input = $input.'XLS.jasper';
            }

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
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename=' . $hora_actual. 'CuentasContables.' . $ext);
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
            header('Content-Length: ' . filesize($output . '.' . $ext));
            flush();
            readfile($output . '.' . $ext);
            unlink($output . '.' . $ext);*/
/*
            exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
            print_r($output);*/

            $headers = [
                'Content-Type' => 'application/pdf',
            ];

            return response()->download($output . '.' . $ext ,$hora_actual. 'ListadoProductoServicio.' . $ext, $headers);

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

}