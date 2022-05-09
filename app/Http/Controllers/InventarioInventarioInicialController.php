<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\CajaBancoTasasCambios;
use App\Models\ContabilidadCentroCostoIngreso;
use App\Models\InventarioBaterias;
use App\Models\InventarioBodegaProductos;
use App\Models\InventarioBodegas;
use App\Models\InventarioEntradaInicialProductos;
use App\Models\InventarioEntradaProductoBaterias;
use App\Models\InventarioEntradaProductos;
use App\Models\InventarioEntradaProductosCons;
use App\Models\InventarioEntradas;
use App\Models\InventarioEntradasInicial;
use App\Models\InventarioMovimientosProductos;
use App\Models\InventarioPresentacion;
use App\Models\InventarioProductos;
use App\Models\InventarioProductosPresentaciones;
use App\Models\InventarioUnidadMedida;
use Hash, Validator,Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class InventarioInventarioInicialController extends Controller
{

    public function obtener(Request $request, InventarioEntradasInicial $entradas)
    {
        $entradas = $entradas->obtener($request);

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $entradas->total(),
                'rows' => $entradas->items()
            ],
            'messages' => null
        ]);
    }

    public function obtenerEntradaInvInicial(Request $request, InventarioEntradasInicial $entrada_inicial)
    {
        $rules = [
            'id_entrada_inicial' => 'required|integer|min:1',
            'cargar_dependencias' => 'required|boolean',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $entrada_inicial = $entrada_inicial->obtenerEntradaInvInicial($request);
            $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
            $direccion_empresa = AdmonAjustes::where('id_ajuste',5)->select('valor')->first();

            $consolidado = InventarioEntradaInicialProductos::
            select('id_entrada_inicial','id_producto', DB::Raw('count(*) as cantidad_prod'))
                ->with('productoSimple')
                ->where('id_entrada_inicial',$request->id_entrada_inicial)->orderBy('id_producto', 'desc')
                ->groupBy(array('id_entrada_inicial','id_producto'))
                ->get();

            if(!empty($entrada_inicial)){

                if($request->cargar_dependencias){
                    if($entrada_inicial->tipo_productos==2){
                        $id_empresa_global = 0;
                        $conf = session()->get('id_empresa');
                        $productos  = InventarioProductos::select(['id_producto',
                            DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text")])
                            ->where('activo',1)->whereIn('id_empresa',array($conf,$id_empresa_global))->get();

                    $productos_usados = InventarioProductos::select(['id_producto','codigo_sistema','nombre_comercial',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text")])
                        ->where('activo', 1)->whereIn('tipo_producto',array(1))
                        //->with('unidadMedida')
                        ->orderby('id_producto')->get();

                    $productos_herramientas = InventarioProductos::select('id_producto','id_unidad_medida','codigo_sistema',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text"))
                        ->where('activo', 1)->whereIn('tipo_producto',array(1))
                        //->with('unidadMedida')
                        ->orderby('id_producto')->get();

                        $merged = $productos->merge($productos_herramientas);
                        $bodegas =InventarioBodegas::where('activo', 1)->select('id_bodega','id_tipo_bodega','descripcion')->whereIn('id_tipo_bodega',array(1,2,3,5))->get();
                        $zonas = ContabilidadCentroCostoIngreso::where('estado',1)->where('tipo_centro',2)->whereIn('id_empresa',array($conf,$id_empresa_global))->get();

                        return response()->json([
                            'status' => 'success',
                            'result' => [
                                'entrada_inicial' => $entrada_inicial,
                                'bodegas' => $bodegas,
                                'zonas' => $zonas,
                                'productos' => $productos,
                                'productos_usados' => $productos_usados,
                            ],
                            'messages' => null
                        ]);
                    }else{
                        $id_empresa_global = 0;
                        $conf = session()->get('id_empresa');
                        $productos = InventarioProductos::select('id_producto','nombre_comercial','codigo_sistema',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text"))->where('activo', 1)->whereIn('tipo_producto',array(1))/*->with('unidadMedida')*/->with('productoDetallesBaterias')->orderby('id_producto')->get();
                        $bodegas =InventarioBodegas::where('activo', 1)->select('id_bodega','descripcion')->get();
                        $zonas = ContabilidadCentroCostoIngreso::where('estado',1)->where('tipo_centro',2)->whereIn('id_empresa',array($conf,$id_empresa_global))->get();

                        return response()->json([
                            'status' => 'success',
                            'result' => [
                                'entrada_inicial' => $entrada_inicial,
                                'bodegas' => $bodegas,
                                'zonas' => $zonas,
                                'productos' => $productos,
                            ],
                            'messages' => null
                        ]);
                    }



                }else{
                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'entrada_inicial' => $entrada_inicial,
                            'nombre_empresa'=>$nombre_empresa->valor,
                            'direccion_empresa'=>$direccion_empresa->valor,
                            'consolidado'=>$consolidado
                        ],
                        'messages' => null
                    ]);
                }



            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_entrada_inicial'=>["Datos no encontrados"]),
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

    public function nuevo(Request $request){
        $productos = InventarioProductos::select('id_producto','codigo_barra',DB::raw("CONCAT(inventario.productos.descripcion,' (',inventario.productos.codigo_barra,')') AS text"))
            ->where('activo', 1)->whereIn('tipo_producto',array(3))
            ->with('unidadMedida')
            ->with('productoDetallesBaterias')
            ->whereHas('productoDetallesBaterias', function($q){
                $q->whereNotIn('id_submarca', array(7));
            })
            ->orderby('id_producto')->get();



        $bodegas =InventarioBodegas::where('activo', 1)->select('id_bodega','descripcion')->get();

        $entrada_inicial = new InventarioEntradasInicial();
        $entrada_inicial->id_bodega = null;
        $entrada_inicial->fecha_entrada = date("Y-m-d H:i:s");
        $entrada_inicial->estado = 99;
        $entrada_inicial->id_trabajador = Auth::user()->id_empleado;

        $entrada_inicial->save();

        return response()->json([
            'status' => 'success',
            'result' => [
                'productos' => $productos,
                'bodegas' => $bodegas,
                'id_entrada_inicial' => $entrada_inicial->id_entrada_inicial,
            ],
            'messages' => null
        ]);
    }


    public function nuevoManual(Request $request){
        $id_empresa_global = 0;
        $conf = session()->get('id_empresa');
            $productos_conf  = InventarioProductos::select(['id_producto','codigo_sistema',
                DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text")])
                ->where('activo',1)->whereIn('id_empresa',array($conf,$id_empresa_global))->get();

        $bodegas =InventarioBodegas::where('activo', 1)->select('id_bodega','id_tipo_bodega','descripcion')->whereIn('id_tipo_bodega',array(1,2,3,5))
            ->whereIn('id_empresa',array($id_empresa_global,$conf))->get();

        $zonas = ContabilidadCentroCostoIngreso::where('estado',1)->whereIn('id_empresa',array($conf,$id_empresa_global))->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'productos' => $productos_conf,
                'bodegas' => $bodegas,
                'zonas' => $zonas,
                //'id_entrada_inicial' => $entrada_inicial->id_entrada_inicial,
            ],
            'messages' => null
        ]);
    }
    public function cargarPresentacionesProducto(Request $request){
        $rules =
            [
                //'id_producto' => 'required|integer'
            ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $id_empresa_global = 0;
            $conf = session()->get('id_empresa');
            $presentaciones = InventarioProductosPresentaciones::select(['inventario.productos_presentaciones.id_producto', 'inventario.presentaciones.codigo', 'inventario.presentaciones.id_presentacion',
                'inventario.presentaciones.id_unidad_medida_presentacion', 'inventario.presentaciones.id_unidad_medida_calculo','inventario.unidades_medidas.unidad_medida',
                'inventario.clasificacion_unidades_medidas.simbolo_um','inventario.unidades_medidas.relacion_um_estandar','inventario.presentaciones.escalar'])
                ->join('inventario.presentaciones', 'inventario.presentaciones.id_presentacion', 'inventario.productos_presentaciones.id_presentacion')
                ->join('inventario.unidades_medidas', 'inventario.unidades_medidas.id_unidad_medida', 'inventario.presentaciones.id_unidad_medida_presentacion')
                ->join('inventario.clasificacion_unidades_medidas', 'inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida', 'inventario.presentaciones.id_unidad_medida_calculo')
                ->where('inventario.productos_presentaciones.estado', 1)->whereIn('inventario.productos_presentaciones.id_empresa', array($conf, $id_empresa_global))
                ->where('inventario.productos_presentaciones.id_producto', $request->id_producto)->get();

            if(!empty($presentaciones)) {

                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'presentaciones' => $presentaciones,
                    ],
                    'messages' => null
                ]);
            }else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_producto'=>["Datos no encontrados"]),
                    'messages' => null
                ]);
            }
        }else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);

        }
    }

    public function registrarBateria(Request $request)
    {
        $rules = [
            'id_entrada_inicial' => 'required|integer|min:1',
            'codigo_garantiax' => 'required|string|max:50',
            'codigo_barra' => 'nullable|string|max:50',
            'id_producto' => 'required|integer',
            'id_entrada_inicial_bateria' => 'nullable|integer',
            'estado' => 'required|integer',
            'fecha_activacion' => ['required','string','min:5','max:5'/*,'regex:/0\[1-9]|10|11|12)/[1-9][0-9]/'*/],

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{
                DB::beginTransaction();
                if($request->estado == 0){

                    if(!empty($request->id_entrada_inicial_bateria)){
                        InventarioEntradaInicialProductos::where('id_entrada_inicial_bateria', $request->id_entrada_inicial_bateria)->delete();
                    }

                    DB::commit();
                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'id_entrada_inicial_bateria'=> null,
                        ],
                        'messages' => null
                    ]);

                }else{
                    if(!empty($request->id_entrada_inicial_bateria)){

                        $bateria_individual = InventarioEntradaInicialProductos::find($request->id_entrada_inicial_bateria);
                        $bateria_individual->fecha_activacion = $request->fecha_activacion;
                        $bateria_individual->save();

                        DB::commit();
                        return response()->json([
                            'status' => 'success',
                            'result' => [
                                'id_entrada_inicial_bateria'=> $bateria_individual->id_entrada_inicial_bateria,
                            ],
                            'messages' => null
                        ]);
                    }else{

                    //$bateriaRegistrada = InventarioEntradaInicialProductos::where('codigo_garantia',$request->codigo_garantiax)->where('id_entrada_inicial',$request->id_entrada_inicial)->first();
                      $bateriaRegistrada = InventarioEntradaInicialProductos::WhereRaw("upper(codigo_garantia) = upper(?)",[$request->codigo_garantiax])->where('id_entrada_inicial',$request->id_entrada_inicial)->first();


                    if(!empty($bateriaRegistrada)){
                        InventarioEntradaInicialProductos::where('id_entrada_inicial_bateria', $bateriaRegistrada->id_entrada_inicial_bateria)->delete();
                    }

                        $bateria_individual = new InventarioEntradaInicialProductos();
                        $bateria_individual->id_producto = $request->id_producto;
                        $bateria_individual->id_entrada_inicial = $request->id_entrada_inicial;
                        $bateria_individual->codigo_barras =  $request->codigo_barra;
                        $bateria_individual->codigo_garantia =  $request->codigo_garantiax;
                        $bateria_individual->fecha_activacion =  $request->fecha_activacion;
                        $bateria_individual->estado = 1;
                        $bateria_individual->save();
                        DB::commit();

                        return response()->json([
                            'status' => 'success',
                            'result' => [
                                'id_entrada_inicial_bateria'=> $bateria_individual->id_entrada_inicial_bateria,
                            ],
                            'messages' => null
                        ]);


                    }

                }



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


    public function recibir(Request $request)
    {
        $rules = [
            'id_entrada_inicial' => 'required|integer|exists:pgsql.inventario.entradas_inicial,id_entrada_inicial',
            'bodega' => 'required|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',

            'detalle_baterias' => 'required|array|min:1',
            'detalle_baterias.*.codigo_garantiax' => 'required|string|max:50',
            'detalle_baterias.*.productox.codigo_barra' => 'nullable|string|max:50',
            'detalle_baterias.*.productox.id_producto' => 'required|integer',
            'detalle_baterias.*.id_entrada_inicial_bateria' => 'nullable|integer',
            'detalle_baterias.*.estado' => 'required|integer',
            'detalle_baterias.*.fecha_activacion' => 'required|string|min:5|max:5',

            ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $entrada = InventarioEntradasInicial::find($request->id_entrada_inicial);
                $entrada->id_bodega = $request->bodega['id_bodega'];
                $entrada->estado = 1;
                $entrada->save();



                    foreach ($request->detalle_baterias as $bateria) {

                        if($bateria['estado'] == 0){///Baterias eliminadas

                                if(!empty($bateria['id_entrada_inicial_bateria'])){
                                    InventarioEntradaInicialProductos::where('id_entrada_inicial_bateria', $bateria['id_entrada_inicial_bateria'])->delete();
                                }

                        }else //baterias validas
                            {

                                    if(empty($bateria['id_entrada_inicial_bateria'])){

                                        $bateria_individual = new InventarioEntradaInicialProductos();
                                        $bateria_individual->id_producto = $bateria['productox']['id_producto'];
                                        $bateria_individual->id_entrada_inicial = $entrada->id_entrada_inicial;
                                        $bateria_individual->codigo_barras =   $bateria['productox']['codigo_barra'];
                                        $bateria_individual->codigo_garantia =   $bateria['codigo_garantiax'];
                                        $bateria_individual->fecha_activacion =   $bateria['fecha_activacion'];
                                        $bateria_individual->estado = 1;
                                        $bateria_individual->save();

                                    }else{///actualizar datos de baterias ya registradas
                                        //echo $bateria['id_entrada_inicial_bateria'];
                                        $bateria_individual = InventarioEntradaInicialProductos::find($bateria['id_entrada_inicial_bateria']);
                                        $bateria_individual->fecha_activacion = $bateria['fecha_activacion'];
                                        $bateria_individual->save();
                                    }

                        }
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



    public function actualizar(Request $request)
    {
        $rules = [
            'id_entrada_inicial' => 'required|integer|exists:pgsql.inventario.entradas_inicial,id_entrada_inicial',
            'entrada_bodega' => 'required|array|min:1',
            'entrada_bodega.id_bodega' => 'required|integer|min:1',

            'entrada_baterias' => 'required|array|min:1',
            'entrada_baterias.*.codigo_garantia' => 'required|string|max:50',
            'entrada_baterias.*.producto_simple.codigo_barra' => 'nullable|string|max:50',
            'entrada_baterias.*.producto_simple.id_producto' => 'required|integer',
            'entrada_baterias.*.id_entrada_inicial_bateria' => 'nullable|integer',
            'entrada_baterias.*.estado' => 'required|integer',
            'entrada_baterias.*.fecha_activacion' => 'required|string|min:5|max:5',

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $entrada = InventarioEntradasInicial::find($request->id_entrada_inicial);
                $entrada->id_bodega = $request->entrada_bodega['id_bodega'];
                $entrada->estado = 1;
                $entrada->save();

                foreach ($request->entrada_baterias as $bateria) {

                    if($bateria['estado'] == 0){///Baterias eliminadas

                        //if ($bateria['registrada']){///Baterias registradas
                            if(!empty($bateria['id_entrada_inicial_bateria'])){
                                InventarioEntradaInicialProductos::where('id_entrada_inicial_bateria', $bateria['id_entrada_inicial_bateria'])->delete();
                            }
                        //}

                    }else //baterias validas
                    {
                        if (!$bateria['registrada']){///Baterias no registradas
                            if(empty($bateria['id_entrada_inicial_bateria'])){

                                $bateria_individual = new InventarioEntradaInicialProductos();
                                $bateria_individual->id_producto = $bateria['producto_simple']['id_producto'];
                                $bateria_individual->id_entrada_inicial = $entrada->id_entrada_inicial;
                                $bateria_individual->codigo_barras =   $bateria['producto_simple']['codigo_barra'];
                                $bateria_individual->codigo_garantia =   $bateria['codigo_garantia'];
                                $bateria_individual->fecha_activacion =   $bateria['fecha_activacion'];
                                $bateria_individual->estado = 1;
                                $bateria_individual->save();

                            }else{///actualizar datos de baterias ya registradas
                                $bateria_individual = InventarioEntradaInicialProductos::find($bateria['id_entrada_inicial_bateria']);
                                $bateria_individual->fecha_activacion = $bateria['fecha_activacion'];
                                $bateria_individual->save();
                            }
                        }else{///actualizar datos de baterias ya registradas
                            $bateria_individual = InventarioEntradaInicialProductos::find($bateria['id_entrada_inicial_bateria']);
                            $bateria_individual->fecha_activacion = $bateria['fecha_activacion'];
                            $bateria_individual->save();
                        }
                    }
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


    public function actualizarManual(Request $request)
    {
        $rules = [
            'id_entrada_inicial' => 'required|integer|exists:pgsql.inventario.entradas_inicial,id_entrada_inicial',
            'entrada_bodega' => 'required|array|min:1',
            'entrada_bodega.id_bodega' => 'required|integer|min:1',
            'es_borrador' => 'required|boolean',
            'entrada_productos' => 'required|array|min:1',
            'entrada_productos.*.id_producto' => 'required|integer',
            'entrada_productos.*.cantidad' => 'required|integer',

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{

                $conf = session()->get('id_empresa');
                DB::beginTransaction();
                $entrada_inicial = InventarioEntradasInicial::find($request->id_entrada_inicial);
                $entrada_inicial->id_bodega = $request->entrada_bodega['id_bodega'];
                $entrada_inicial->id_zona_costo = $request->entrada_zona['id_centro'];
                $entrada_inicial->estado = $request->es_borrador==false?2:1;
                $entrada_inicial->num_lote = $request->num_lote;
                $entrada_inicial->fecha_entrada = $request->fecha_entrada;
                $entrada_inicial->fecha_fabricacion = $request->fecha_fabricacion;
                $entrada_inicial->fecha_vencimiento = $request->fecha_vencimiento;
                $entrada_inicial->save();

                //Registrar Entrada
                if($entrada_inicial->estado==2){
                    $entrada = new InventarioEntradas;
                    $entrada->codigo_entrada = InventarioEntradas::max('id_entrada')+1;
                    $entrada->id_tipo_entrada = 1;
                    $entrada->fecha_entrada = $entrada_inicial->fecha_entrada;
                    $entrada->fecha_fabricacion = $entrada_inicial->fecha_fabricacion;
                    $entrada->fecha_vencimiento = $entrada_inicial->fecha_vencimiento;
                    $entrada->id_proveedor = null;
                    $entrada->fecha_recepcion=date("Y-m-d H:i:s");
                    $entrada->id_bodega = $entrada_inicial->id_bodega;
                    $entrada->id_zona_costo = $entrada_inicial->id_zona_costo;
                    $entrada->no_lote = $entrada_inicial->num_lote;
                    $entrada->descripcion_entrada = 'Registramos entrada inicial de productos';
                    $entrada->u_creacion = Auth::user()->usuario;
                    $entrada->estado = 2;
                    $entrada->u_recepcion=Auth::user()->usuario;
                    $entrada->id_empresa = $conf;
                    $entrada->save();

               $entrada_inicial->id_entrada = $entrada->id_entrada;
               $entrada_inicial->save();
                }

                InventarioEntradaProductosCons::where('id_entrada_inicial',$entrada_inicial->id_entrada_inicial)->delete();

                foreach ($request->entrada_productos as $producto) {
                    $entrada_inicial_product = new InventarioEntradaProductosCons();
                    $entrada_inicial_product->id_producto = $producto['entrada_producto']['id_producto'];
                    $entrada_inicial_product->nombre_producto = $producto['entrada_producto']['text'];
                    $entrada_inicial_product->id_presentacion = $producto['entrada_presentacion']['id_presentacion'];
                    $entrada_inicial_product->id_unidad_medida_calculo = $producto['entrada_presentacion']['id_unidad_medida_calculo'];
                    $entrada_inicial_product->id_unidad_medida_presentacion = $producto['entrada_presentacion']['id_unidad_medida_presentacion'];
                    $entrada_inicial_product->codigo_presentacion = $producto['entrada_presentacion']['codigo'];
                    $entrada_inicial_product->id_entrada_inicial = $entrada_inicial->id_entrada_inicial;
                    $entrada_inicial_product->id_zona_costo = $entrada_inicial->id_zona_costo;
                    $entrada_inicial_product->cantidad = $producto['cantidad'];
                    $entrada_inicial_product->escalar = $producto['escalar'];
                    $entrada_inicial_product->conversionx = $producto['conversionx'];
                    $entrada_inicial_product->id_empresa = $conf;
                    $entrada_inicial_product->save();

                    if($entrada_inicial->estado==2){
                    $entrada_producto = new InventarioEntradaProductos;
                    $bodega_sub = InventarioBodegaProductos::where('id_bodega',$entrada->id_bodega)->where('id_producto',$entrada_inicial_product->id_producto)->where('id_presentacion',$entrada_inicial_product->id_presentacion)->where('no_lote',$entrada_inicial->num_lote)->first();
                    if(!empty($bodega_sub)){
                        $entrada_producto->id_bodega_producto = $bodega_sub['id_bodega_producto'];
                        if($entrada_inicial->estado==2) {
                            $bodega_sub->cantidad = $bodega_sub->cantidad + $producto['cantidad'];
                            $bodega_sub->save();
                        }
                    }else{
                        $nueva_bodega_sub = new InventarioBodegaProductos;
                        $nueva_bodega_sub->id_bodega=$entrada->id_bodega;
                        $nueva_bodega_sub->id_producto=$producto['id_producto'];
                        $nueva_bodega_sub->cantidad=$producto['cantidad'];
                        $nueva_bodega_sub->id_empresa=$conf;
                        $nueva_bodega_sub->id_presentacion = $producto['id_presentacion'];
                        $nueva_bodega_sub->codigo_presentacion = $producto['codigo_presentacion'];
                        $nueva_bodega_sub->id_unidad_medida_presentacion = $producto['id_unidad_medida_presentacion'];
                        $nueva_bodega_sub->id_unidad_medida_calculo = $producto['id_unidad_medida_calculo'];
                        $nueva_bodega_sub->escalar = $producto['escalar'];
                        $nueva_bodega_sub->conversionx = $producto['conversionx'];
                        $nueva_bodega_sub->no_lote = $entrada->no_lote;
                        $nueva_bodega_sub->fecha_fabricacion = $entrada->fecha_fabricacion;
                        $nueva_bodega_sub->fecha_vencimiento = $entrada->fecha_vencimiento;
                        $nueva_bodega_sub->u_creacion =$entrada->u_creacion;
                        $nueva_bodega_sub->id_zona_costo = $entrada_inicial_product->id_zona_costo;
                        $nueva_bodega_sub->save();
                        $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                    }

                    $productox = InventarioProductos::find($producto['id_producto']);

                    $unidad_medida = InventarioUnidadMedida::find($productox['id_unidad_medida']);
                    //$tasa = CajaBancoTasasCambios::select('tasa')->where('fecha',date("Y-m-d"))->first();

                    $entrada_producto->id_entrada = $entrada->id_entrada;
                    $entrada_producto->codigo_producto = $productox['codigo_sistema'];
                    $entrada_producto->descripcion_producto = $productox['nombre_comercial'];
                    //$entrada_producto->unidad_medida = $unidad_medida['descripcion'];
                    $entrada_producto->precio_unitario = 0;//$productox['costo_estandar'];
                    $entrada_producto->cantidad_solicitada = $producto['cantidad'];
                    $entrada_producto->cantidad_recibida = $producto['cantidad'];
                    $entrada_producto->cantidad_faltante = 0;
                    $entrada_producto->id_presentacion = $producto['id_presentacion'];
                    $entrada_producto->codigo_presentacion = $producto['codigo_presentacion'];
                    $entrada_producto->id_unidad_medida_presentacion = $producto['id_unidad_medida_presentacion'];
                    $entrada_producto->id_unidad_medida_calculo = $producto['id_unidad_medida_calculo'];
                    $entrada_producto->escalar = $producto['escalar'];
                    $entrada_producto->conversionx = $producto['conversionx'];
                    $entrada_producto->u_creacion =$entrada->u_creacion;
                    $entrada_producto->id_empresa = $conf;
                    $entrada_producto->id_zona_costo = $entrada_inicial_product->id_zona_costo;
                    $entrada_producto->save();

                    $movimiento_producto = new InventarioMovimientosProductos();
                    $movimiento_producto->id_bodega_producto = $entrada_producto->id_bodega_producto ;
                    $movimiento_producto->fecha_movimiento = date("Y-m-d H:i:s");
                    $movimiento_producto->descripcion_movimiento = 'Entrada inicial de productos, No. '.$entrada->codigo_entrada;
                    $movimiento_producto->identificador_origen_movimiento = $entrada->id_entrada;
                    $movimiento_producto->tipo_movimiento = 1;
                    $movimiento_producto->cantidad_movimiento = $entrada_producto->cantidad_recibida;
                    $movimiento_producto->costo = $entrada_producto->precio_unitario;
                    $movimiento_producto->usuario_registra = Auth::user()->usuario;
                    $movimiento_producto->id_presentacion = $producto['id_presentacion'];
                    $movimiento_producto->codigo_presentacion = $producto['codigo_presentacion'];
                    $movimiento_producto->id_unidad_medida_presentacion = $producto['id_unidad_medida_presentacion'];
                    $movimiento_producto->id_unidad_medida_calculo = $producto['id_unidad_medida_calculo'];
                    $movimiento_producto->escalar = $producto['escalar'];
                    $movimiento_producto->conversionx = $producto['conversionx'];
                    $movimiento_producto->id_empresa = $conf;
                    $movimiento_producto->id_zona_costo = $entrada_producto->id_zona_costo;
                    $movimiento_producto->save();
                    }

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

    public function registrar(Request $request)
    {
        $messages = [
            'entrada_baterias.*.codigo_garantia.unique'=> 'Ya se ha registrado una batería con ese código de garantía'
        ];

        $rules = [
            'id_entrada_inicial' => 'required|integer|exists:pgsql.inventario.entradas_inicial,id_entrada_inicial',
            'entrada_bodega' => 'required|array|min:1',
            'entrada_bodega.id_bodega' => 'required|integer|min:1',

            'entrada_baterias' => 'required|array|min:1',
            'entrada_baterias.*.codigo_garantia' => 'required|string|max:50'/*|unique:pgsql.inventario.baterias,codigo_garantia'*/,
            'entrada_baterias.*.producto_simple.codigo_barra' => 'nullable|string|max:50',
            'entrada_baterias.*.producto_simple.id_producto' => 'required|integer',
            'entrada_baterias.*.id_entrada_inicial_bateria' => 'nullable|integer',
            'entrada_baterias.*.estado' => 'required|integer',
            'entrada_baterias.*.fecha_activacion' => 'required|string|min:5|max:5',

            'consolidadoProductosId' => 'required|array|min:1',


        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $entradaIni = InventarioEntradasInicial::find($request->id_entrada_inicial);
                $entradaIni->id_bodega = $request->entrada_bodega['id_bodega'];
                $entradaIni->id_zona_costo = $request->entrada_bodega['id_bodega'];
                $entradaIni->estado = 2;
                $entradaIni->save();


                //Registrar Entrada

                $entrada = new InventarioEntradas;
                $entrada->codigo_entrada = InventarioEntradas::max('id_entrada')+1;
                $entrada->id_tipo_entrada = 1;
                $entrada->fecha_entrada = $entradaIni->fecha_entrada;
                $entrada->id_proveedor = null;
                $entrada->fecha_recepcion=date("Y-m-d H:i:s");
                $entrada->id_bodega = $entradaIni->id_bodega;
                $entrada->descripcion_entrada = 'Registramos entrada inicial de productos';
                $entrada->u_creacion = Auth::user()->usuario;
                $entrada->u_recepcion=Auth::user()->usuario;
                $entrada->estado = 2;
                $entrada->save();

                $entradaIni->id_entrada = $entrada->id_entrada;
                $entradaIni->save();
                //$productosEntradaIni = InventarioEntradaInicialProductos::where('id_entrada_inicial', $entradaIni->id_entrada_inicial)->get();

                ///print_r($productosEntradaIni);
                //$tasa = CajaBancoTasasCambios::select('tasa')->where('fecha',date("Y-m-d"))->first();

                foreach ($request->entrada_baterias as $bateria) {

                    if($bateria['estado'] == 0){///Baterias eliminadas

                        //if ($bateria['registrada']){///Baterias registradas
                        if(!empty($bateria['id_entrada_inicial_bateria'])){
                            InventarioEntradaInicialProductos::where('id_entrada_inicial_bateria', $bateria['id_entrada_inicial_bateria'])->delete();
                        }
                        //}

                    }else //baterias validas
                    {

                        if (!$bateria['registrada']){///Baterias no registradas
                            if(empty($bateria['id_entrada_inicial_bateria'])){

                                $bateria_individual = new InventarioEntradaInicialProductos();
                                $bateria_individual->id_producto = $bateria['producto_simple']['id_producto'];
                                $bateria_individual->id_entrada_inicial = $entradaIni->id_entrada_inicial;
                                $bateria_individual->codigo_barras =   $bateria['producto_simple']['codigo_barra'];
                                $bateria_individual->codigo_garantia =   $bateria['codigo_garantia'];
                                $bateria_individual->fecha_activacion =   $bateria['fecha_activacion'];
                                $bateria_individual->estado = 1;
                                $bateria_individual->save();



                            }else{///actualizar datos de baterias ya registradas
                                $bateria_individual = InventarioEntradaInicialProductos::find($bateria['id_entrada_inicial_bateria']);
                                $bateria_individual->fecha_activacion = $bateria['fecha_activacion'];
                                $bateria_individual->save();
                            }
                        }else{///actualizar datos de baterias ya registradas
                            $bateria_individual = InventarioEntradaInicialProductos::find($bateria['id_entrada_inicial_bateria']);
                            $bateria_individual->fecha_activacion = $bateria['fecha_activacion'];
                            $bateria_individual->save();
                        }
                    }

                }


                ///paso 1
                $productosEntradaIni = InventarioEntradaInicialProductos::where('id_entrada_inicial', $entradaIni->id_entrada_inicial)->get();
                $validacion_unica=true;
                $errores = [];
                $last_contador = 0;
                foreach ($request->consolidadoProductosId as $producto) {

                    $entrada_producto = new InventarioEntradaProductos;
                    $bodega_sub = InventarioBodegaProductos::where('id_bodega',$entrada->id_bodega)->where('id_producto',$producto['id_producto'])->first();
                    if(!empty($bodega_sub)){
                        $entrada_producto->id_bodega_producto = $bodega_sub['id_bodega_producto'];
                        $bodega_sub->cantidad=$bodega_sub->cantidad+$producto['cantidad'];
                        $bodega_sub->save();
                    }else{
                        $nueva_bodega_sub = new InventarioBodegaProductos;
                        $nueva_bodega_sub->id_bodega=$entrada->id_bodega;
                        $nueva_bodega_sub->id_producto=$producto['id_producto'];
                        $nueva_bodega_sub->cantidad=$producto['cantidad'];
                        $nueva_bodega_sub->u_creacion =$entrada->u_creacion;
                        $nueva_bodega_sub->save();
                        $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                    }

                    $productox = InventarioProductos::find($producto['id_producto']);

                    $unidad_medida = InventarioUnidadMedida::find($productox['id_unidad_medida']);

                    $entrada_producto->id_entrada = $entrada->id_entrada;
                    $entrada_producto->codigo_producto = $productox['codigo_sistema'];
                    $entrada_producto->descripcion_producto = $productox['descripcion'];
                    $entrada_producto->unidad_medida = $unidad_medida['descripcion'];
                    $entrada_producto->precio_unitario = $productox['costo_estandar'];
                    $entrada_producto->cantidad_solicitada = $producto['cantidad'];
                    $entrada_producto->cantidad_recibida = $producto['cantidad'];
                    $entrada_producto->cantidad_faltante = 0;
                    $entrada_producto->u_creacion =$entrada->u_creacion;
                    $entrada_producto->save();


                    $contador=$last_contador;
                    foreach ($productosEntradaIni as $bateria) {
                        //print_r($bateria);
                        if($bateria['id_producto'] == $producto['id_producto']){
                            //$bateria_existe = InventarioBaterias::where('codigo_garantia', $bateria['codigo_garantia'])->first();
                            $bateria_existe = InventarioBaterias::WhereRaw("upper(codigo_garantia) = upper(?)",[$bateria['codigo_garantia']])->first();


                            //print_r($bateria_existe);
                            if(empty($bateria_existe)){
                                $bateria_individual = new InventarioBaterias();
                                $bateria_individual->id_producto = $bateria['id_producto'];
                                $bateria_individual->id_bodega_inicial = $entrada->id_bodega;
                                $bateria_individual->id_bodega_actual = $entrada->id_bodega;
                                $bateria_individual->codigo_barras = $bateria['codigo_barras']!=''?$bateria['codigo_barras']:'';
                                $bateria_individual->codigo_garantia = $bateria['codigo_garantia'];
                                $bateria_individual->fecha_activacion = $bateria['fecha_activacion'];
                                $bateria_individual->fecha_ingreso = date("Y-m-d H:i:s");
                                $bateria_individual->estado = 1;
                                $bateria_individual->save();

                                $entrada_baterias = new InventarioEntradaProductoBaterias();
                                $entrada_baterias->id_bateria = $bateria_individual->id_bateria;
                                $entrada_baterias->id_entrada_producto = $entrada_producto->id_entrada_producto;
                                $entrada_baterias->save();
                            }else{

                                if($bateria_existe->estado==7){
                                    if( $bateria_existe->id_producto == $bateria['id_producto']){
                                    $bateria_existe->id_bodega_actual = $entrada->id_bodega;
                                    $bateria_existe->estado = 1;
                                    $bateria_existe->save();

                                    $entrada_baterias = new InventarioEntradaProductoBaterias();
                                    $entrada_baterias->id_bateria = $bateria_existe->id_bateria;
                                    $entrada_baterias->id_entrada_producto = $entrada_producto->id_entrada_producto;
                                    $entrada_baterias->save();
                                    }else{
                                        $validacion_unica = false;
                                        $errores = $errores +['entrada_baterias.'.$contador.'.codigo_garantia'=>['El modelo de la batería no coincide con registros previos del producto']];
                                    }
                                }else{
                                    $validacion_unica = false;
                                    $errores = $errores +['entrada_baterias.'.$contador.'.codigo_garantia'=>['Ya se ha registrado una batería con el código de garantía: '.$bateria_existe->codigo_garantia]];
                                }

                            }
                            $contador++;
                        }

                    }

                    $movimiento_producto = new InventarioMovimientosProductos();
                    $movimiento_producto->id_bodega_producto = $entrada_producto->id_bodega_producto ;
                    $movimiento_producto->fecha_movimiento = date("Y-m-d H:i:s");
                    $movimiento_producto->descripcion_movimiento = 'Entrada inicial de productos, No. '.$entrada->codigo_entrada;
                    $movimiento_producto->identificador_origen_movimiento = $entrada->id_entrada;
                    $movimiento_producto->tipo_movimiento = 1;
                    $movimiento_producto->cantidad_movimiento = $entrada_producto->cantidad_recibida;
                    $movimiento_producto->costo = $entrada_producto->precio_unitario;
                    $movimiento_producto->usuario_registra = Auth::user()->usuario;
                    $movimiento_producto->save();

                    $last_contador = $contador;
                }

                if(!$validacion_unica){
                    DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => $errores,
                        'messages' => null
                    ]);
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

    public function registrarInvManual(Request $request)
    {

        $rules = [
            //'id_entrada_inicial' => 'required|integer|exists:pgsql.inventario.entradas_inicial,id_entrada_inicial',
            'bodega' => 'required|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',
            'zona.id_centro' => 'required|integer|min:1',
            'conteo_productos' => 'required|array|min:1',

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $conf = session()->get('id_empresa');
                $entrada_inicial = new InventarioEntradasInicial();
                $entrada_inicial->id_bodega = $request->bodega['id_bodega'];
                $entrada_inicial->id_zona_costo = $request->zona['id_centro'];
                $entrada_inicial->fecha_entrada = date("Y-m-d H:i:s");
                $entrada_inicial->fecha_fabricacion = $request->fecha_fabricacion;
                $entrada_inicial->fecha_vencimiento = $request->fecha_vencimiento;
                $entrada_inicial->estado = 1;
                $entrada_inicial->tipo_productos = 1;
                $entrada_inicial->num_lote = $request->num_lote;
                $entrada_inicial->id_trabajador = Auth::user()->id_empleado;
                $entrada_inicial->id_empresa = $conf;
                $entrada_inicial->save();

                foreach ($request->conteo_productos as $producto) {

                    $entrada_inicial_product = new InventarioEntradaProductosCons();
                    $entrada_inicial_product->id_producto = $producto['productox']['id_producto'];
                    $entrada_inicial_product->nombre_producto = $producto['productox']['text'];
                    $entrada_inicial_product->codigo = $producto['productox']['codigo_sistema'];
                    $entrada_inicial_product->id_presentacion = $producto['presentacionx']['id_presentacion'];
                    $entrada_inicial_product->id_unidad_medida_calculo = $producto['presentacionx']['id_unidad_medida_calculo'];
                    $entrada_inicial_product->id_unidad_medida_presentacion = $producto['presentacionx']['id_unidad_medida_presentacion'];
                    $entrada_inicial_product->codigo_presentacion = $producto['presentacionx']['codigo'];
                    $entrada_inicial_product->id_entrada_inicial = $entrada_inicial->id_entrada_inicial;
                    $entrada_inicial_product->cantidad = $producto['cantidad'];
                    $entrada_inicial_product->escalar = $producto['escalar'];
                    $entrada_inicial_product->conversionx = $producto['conversionx'];
                    $entrada_inicial_product->id_empresa = $conf;
                    $entrada_inicial_product->id_zona_costo = $entrada_inicial->id_zona_costo;
                    $entrada_inicial_product->save();

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

    public function generarReporteInventarioInicial(Request $request)
    {
        // echo $ext;
        $rules = [
            'id_entrada_inicial' => 'required|integer|min:1',
            'tipo_productos' => 'required|integer|min:1|max:2',
            'extension' => 'required|string|max:4'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/EstadoCuentaClienteDetalle';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'EstadoCuentaClienteDetalle';
                $nombre_repo = $request->tipo_productos==1?'ReporteEntradaInicial':'ReporteEntradaInicialManual';

                $input = '/var/www/html/resources/reports/'.$nombre_repo;
                $output = '/var/www/html/resources/reports/' . $hora_actual . $nombre_repo;

                //$input = 'C:/xampp7/htdocs/resources/reports/'.$nombre_repo;
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . $nombre_repo;

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = 'C:/xampp7/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'entrada' => $request->id_entrada_inicial,
                        'directorioReports'=>$url,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteEntradaInicial.' . $request->extension, $headers);

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

