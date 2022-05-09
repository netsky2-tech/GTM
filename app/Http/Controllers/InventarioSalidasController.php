<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\CajaBancoFacturas;
use App\Models\CajaBancoFacturasExportacion;
use App\Models\ContabilidadCentroCostoIngreso;
use App\Models\InventarioBaterias;
use App\Models\InventarioBodegas;
use App\Models\InventarioConsignacionProductos;
use App\Models\InventarioEntradaProductoBaterias;
use App\Models\InventarioEntradaProductos;
use App\Models\InventarioEntradas;
use App\Models\InventarioMovimientosProductos;
use App\Models\InventarioProductos;
use App\Models\InventarioProductosPresentaciones;
use App\Models\InventarioProductosVistaVenta;
use App\Models\InventarioProveedores;
use App\Models\InventarioRequisaProductos;
use App\Models\InventarioRequisas;
use App\Models\InventarioSalidaProductoBaterias;
use App\Models\InventarioTipoSalida;
use App\Models\InventarioUnidadMedida;
use App\Models\VentaClientes;
use Hash, Validator,Auth;
use App\Models\InventarioBodegaProductos;
use App\Models\InventarioSalidaProductos;
use App\Models\InventarioSalidas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class InventarioSalidasController extends Controller
{
	/**
     * Get List of salidas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioSalidas $salidas)
    {
        $salidas = $salidas->obtenerSalidas($request);

        foreach($salidas as $salida ){
            //   print_r($entrada);
            $items = collect($salida->salidaProductos);

            $salida->tot_unidades = $items->sum(function($item) {
                return $item['cantidad_saliente'];
            });

            $salida->tot_unidades_despachadas = $items->sum(function($item) {
                return $item['cantidad_despachada'];
            });

            $salida->subtotal = $items->sum(function($item) {
                return $item['precio_unitario']*$item['cantidad_saliente'];
            });

            $salida->total = $salida->subtotal;
        }

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $salidas->total(), 
                'rows' => $salidas->items()
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

    public function obtenerSalida(Request $request, InventarioSalidas $salida)
    {
		$rules = [
            'id_salida' => 'required|integer|min:1'
		];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');

            $productos = $salida->obtenerProductosSalida($request);
            $salida = $salida->obtenerSalida($request);
            $proveedores = InventarioProveedores::all();
            $tipos_salidas = InventarioTipoSalida::all();

            $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
            $direccion_empresa = AdmonAjustes::where('id_ajuste',5)->select('valor')->first();

            $bodegas =InventarioBodegas::where('id_empresa', '=', $conf)->
            where('activo', 1)->with(['productosBodega' => function($query) {
                $conf = session()->get('id_empresa');
                $query->with('producto')->where('id_empresa', '=', $conf)->
                where('cantidad','>',0);
            }])->get();


            if(Auth::user()->id_sucursal>0){
                $conf = session()->get('id_empresa');
                $bodegas_dev =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->where('id_empresa', '=', $conf)->
                where('activo', 1)->whereIn('id_tipo_bodega',array(1,2))
                    ->where('id_sucursal',Auth::user()->id_sucursal)
                    ->orderby('descripcion')->get();
            }else{
                $conf = session()->get('id_empresa');
                $bodegas_dev = InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->where('id_empresa', '=', $conf)->
                where('activo', 1)->whereIn('id_tipo_bodega',array(1,2))->orderby('descripcion')->get();
            }

            if(!empty($salida)){

                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'salida' => $salida,
                        'productos'=> $productos,
                        'bodegas' => $bodegas,
                        'tipos_salidas' => $tipos_salidas,
                        'proveedores' => $proveedores,
                        'bodegas_dev'=>$bodegas_dev,
                        'nombre_empresa'=>$nombre_empresa->valor,
                        'direccion_empresa'=>$direccion_empresa->valor
                    ],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_salida'=>["Datos no encontrados"]),
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

    public function obtenerSalidaPorCodigo(Request $request, InventarioSalidas $salida)
    {
		$rules = [
            'codigo_salida' => 'required'
		];
	

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
		  
            $salida = $salida->obtenerSalidaPorCodigo($request);
          
           if(!$salida->isEmpty()){
        //print_r($entrada);
           $items = collect($salida[0]->salidaProductos);
           $salida[0]->sub_total = $items->sum(function($item) {
                return $item['cantidad'] * $item['precio_unitario'];
            });
    
            $salida[0]->total = $items->sum(function($item) {
                return $item['cantidad'] * $item['precio_unitario'];
            });

            $salida[0]->cant_inicial = 0;

            return response()->json([
                'status' => 'success',
                'result' => $salida[0],
                'messages' => null
            ]);
        }else {
            return response()->json([
                'status' => 'error',
                'result' => "No se han encontrado resultados para el código de entrada: ".$request->codigo_salida,
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
     * Registra una (nueva) salida
     *
     * @access 	public
     * @param
     * @return 	json(string)
     */

	public function registrar(Request $request)
	{ 
        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];
        
    	$rules = [

            //'codigo_salida' => 'required|string|max:25',
            //'numero_documento' => 'required|string|max:50',
            'descripcion_salida' => 'string|max:255|nullable',
            'fecha_salida' => 'required|date',
            'tipo_salida' => 'required|array|min:1',
            'tipo_salida.id_tipo_salida' => 'required|integer|min:1',
            'bodega' => 'required|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',
            /*'proveedor' => 'required|array|min:1',
            'proveedor.id_proveedor' => 'required|integer|min:1',*/
            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            //'detalleProductos.*.precio_unitario' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
           // 'detalleProductos.*.productox.descripcion' => 'required|string|max:100',
           // 'detalleProductos.*.productox.unidad_medida' => 'required|string|max:100',

		];

		$validator = Validator::make($request->all(), $rules, $messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
			$salida = new InventarioSalidas;
                $conf = session()->get('id_empresa');

            $salida->codigo_salida = InventarioSalidas::max('id_salida')+1;
			$salida->id_tipo_salida = $request->tipo_salida['id_tipo_salida'];
			$salida->fecha_salida = $request->fecha_salida;
			$salida->id_bodega = $request->bodega['id_bodega'];
			$salida->id_zona_costo = $request->zona['id_centro'];
			$salida->descripcion_salida = $request->descripcion_salida;
            $salida->id_proveedor = null;
            $salida->id_cliente = $request->cliente['id_cliente'];
			$salida->u_creacion = Auth::user()->usuario;
            $salida->estado = 1;
            $salida->id_empresa = $conf;
            $salida->orden_venta = $request->orden_venta;
            $salida->no_factura = $request->no_factura;
            $salida->no_remision = $request->no_remision;
            $salida->save();

			foreach ($request->detalleProductos as $producto) {
                $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['productox']['id_bodega_producto'])->first();
                $bodega_sub->cantidad = $bodega_sub->cantidad-$producto['cantidad'];
                $bodega_sub->save();

                $salida_producto = new InventarioSalidaProductos;
                $salida_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
				$salida_producto->id_salida = $salida->id_salida;
                $salida_producto->descripcion_producto = $producto['productox']['nombre_comercial'];
                $salida_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                $salida_producto->unidad_medida = $producto['productox']['unidad_medida'];
                $salida_producto->precio_unitario = 0;
                $salida_producto->cantidad_saliente = $producto['cantidad'];
                $salida_producto->cantidad_despachada = 0;
                $salida_producto->cantidad_faltante = 0;
                $salida_producto->u_creacion = $salida->u_creacion;
                $salida_producto->id_presentacion = $producto['presentacionx']['id_presentacion'];
                $salida_producto->codigo_presentacion = $producto['presentacionx']['codigo'];
                $salida_producto->id_unidad_medida_presentacion =  $producto['presentacionx']['id_unidad_medida_presentacion'];
                $salida_producto->id_unidad_medida_calculo = $producto['presentacionx']['id_unidad_medida_calculo'];
                $salida_producto->escalar = $producto['presentacionx']['escalar'];
                $salida_producto->conversionx = $producto['conversionx'];
                $salida_producto->id_empresa = $conf;
                $salida_producto->id_zona_costo = $salida->id_zona_costo;
				$salida_producto->save();
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

    
    public function nueva(Request $request){
        $conf = session()->get('id_empresa');
        $id_empresa_global=0;
        //$bodegas =InventarioBodegas::where('activo', 1)->select('id_bodega','descripcion')->get();
        //$proveedores = InventarioProveedores::where('activo', 1)->orderby('id_proveedor')->select('id_proveedor','nombre_comercial','numero_ruc','numero_cedula')->get();
        $tipos_salida = InventarioTipoSalida::whereIn('id_empresa',array( $conf))->where('estado', 1)->select('id_tipo_salida','descripcion')->whereNotIn('id_tipo_salida',array(4))->orderby('id_tipo_salida')/*->whereIn('id_tipo_salida', array(2,5,7))*/->get();

        if(Auth::user()->id_sucursal>0){

            $bodegas =InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->whereIn('id_empresa',array( $conf, $id_empresa_global))->where('activo', 1)->with(['productosBodega' => function($query) {
                $conf = session()->get('id_empresa');
                $id_empresa_global=0;
                $query->with('producto')->whereIn('id_empresa',array( $conf, $id_empresa_global))->where('cantidad','>',0);
            }])->whereNotIn('id_tipo_bodega',array(6,4))
                ->where('id_sucursal',Auth::user()->id_sucursal)
                ->orderby('descripcion')->get();
        }else{
            $bodegas = InventarioBodegas::select('id_bodega','descripcion','activo','id_tipo_bodega')->whereIn('id_empresa',array( $conf, $id_empresa_global))->where('activo', 1)->with(['productosBodega' => function($query) {
                $conf = session()->get('id_empresa');
                $id_empresa_global=0;
                $query->with('producto')->whereIn('id_empresa',array( $conf, $id_empresa_global))->where('cantidad','>',0);
            }])->whereNotIn('id_tipo_bodega',array(6,4))->orderby('descripcion')->get();
        }

        $clientes = VentaClientes::where('estado',1)->whereIn('id_empresa',array($conf,$id_empresa_global))->get();
        $zonas = ContabilidadCentroCostoIngreso::where('estado',1)->whereIn('id_empresa',array($conf,$id_empresa_global))->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'bodegas' => $bodegas,
                'zonas' => $zonas,
                //'proveedores' => $proveedores,
                'tipos_salida' => $tipos_salida,
                'clientes' => $clientes,
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
                ->where('inventario.productos_presentaciones.id_producto', $request->id_producto)->where('inventario.productos_presentaciones.id_presentacion',$request->id_presentacion)->first();

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



    public function registrarSalidaManual(Request $request)
    {
        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [

            'numero_documento' => 'required|string|max:50',
            'descripcion_salida' => 'string|max:255|nullable',
            'fecha_salida' => 'required|date',
            'tipo_salida' => 'required|array|min:1',
            'tipo_salida.id_tipo_salida' => 'required|integer|min:1',
            'bodega' => 'required|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',

            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.precio_unitario' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.cantidad_despachada' => 'required|integer|min:1',

            'detalle_baterias' => 'required|array|min:1',
            'detalle_baterias.*.productox.id_bateria' => 'required|integer|exists:pgsql.inventario.baterias,id_bateria',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $salida = new InventarioSalidas;

                $conf = session()->get('id_empresa');
                $salida->codigo_salida = InventarioSalidas::max('id_salida')+1;
                $salida->id_tipo_salida = $request->tipo_salida['id_tipo_salida'];
                $salida->numero_documento = $request->numero_documento;
                $salida->fecha_salida = $request->fecha_salida;
                $salida->id_bodega = $request->bodega['id_bodega'];
                $salida->descripcion_salida = $request->descripcion_salida;
                $salida->id_proveedor = $request->proveedor['id_proveedor'];
                $salida->u_creacion = Auth::user()->usuario;
                $salida->fecha_despacho=date("Y-m-d H:i:s");
                $salida->u_despacho=Auth::user()->usuario;
                $salida->estado=2;
                $salida->id_empresa = $conf;
                $salida->save();

                foreach ($request->detalleProductos as $producto) {
                    $bodega_sub = InventarioBodegaProductos::where('id_producto',$producto['id_producto'])->where('id_bodega',$salida->id_bodega)->first();
                    $bodega_sub->cantidad = $bodega_sub->cantidad-$producto['cantidad_despachada'];
                    $bodega_sub->save();

                    $productox = InventarioProductosVistaVenta::find($producto['id_producto']);

                    $salida_producto = new InventarioSalidaProductos;
                    $conf = session()->get('id_empresa');
                    $salida_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                    $salida_producto->id_salida = $salida->id_salida;
                    $salida_producto->descripcion_producto = $productox['descripcion'];
                    $salida_producto->codigo_producto = $productox['codigo_sistema'];
                    $salida_producto->unidad_medida = $productox['unidad_medida'];
                    $salida_producto->precio_unitario = $productox['costo_promedio'];
                    $salida_producto->cantidad_saliente = $producto['cantidad_despachada'];
                    $salida_producto->cantidad_despachada = $producto['cantidad_despachada'];
                    $salida_producto->cantidad_faltante = 0;
                    $salida_producto->u_creacion = $salida->u_creacion;
                    $salida_producto->id_empresa = $conf;
                    $salida_producto->save();


                    foreach ($request->detalle_baterias as $bateria) {
                        if($bateria['productox']['id_producto'] == $bodega_sub->id_producto){
                            //1 Disponible, 2 Rotación, 3 En Garantía, 4 Mal estado, 5 Usadas, 6 Obsoletas 7 vendida
                            $salida_baterias = new InventarioSalidaProductoBaterias();
                            $salida_baterias->id_bateria = $bateria['productox']['id_bateria'];
                            $salida_baterias->id_salida_producto = $salida_producto->id_salida_producto;
                            $salida_baterias->id_empresa = $conf;
                            $salida_baterias->save();

                            //venta de nuevas, recuperadas y obsoletas
                            if($salida->id_tipo_salida == 1 || $salida->id_tipo_salida == 7 || $salida->id_tipo_salida == 13 || $salida->id_tipo_salida == 14){
                                $bateria_individual = InventarioBaterias::find($salida_baterias->id_bateria);
                                if($bateria_individual->estado!=7){
                                //$bateria_individual->id_bodega_actual = null;
                                $bateria_individual->reservada = false;
                                $bateria_individual->estado = 7; //Vendida
                                $bateria_individual->save();
                                    }else{
                                    DB::rollBack();
                                    return response()->json([
                                        'status' => 'error',
                                        'result' => ['detalle_baterias'=>['Hay baterias en el listado que ya han sido despachadas']],
                                        'messages' => null
                                    ]);
                                }
                            }

                            //traslado de baterias
                            if($salida->id_tipo_salida == 4  || $salida->id_tipo_salida == 8){
                                $bateria_individual = InventarioBaterias::find($salida_baterias->id_bateria);
                                //$bateria_individual->id_bodega_actual = null;
                                //$bateria_individual->estado = 2; //En transito
                                $bateria_individual->reservada = true; //Reservada
                                $bateria_individual->save();
                            }

                            if($salida->id_tipo_salida == 11){
                                $bateria_individual = InventarioBaterias::find($salida_baterias->id_bateria);
                                $bateria_individual->estado = 5; //usado
                                $bateria_individual->reservada = false;
                                $bateria_individual->save();
                            }


                        }
                    }

                    $costo_promediox = InventarioProductos::select(
                        DB::raw('coalesce(inventario.calcular_costo_promedio(inventario.productos.id_producto),0) as costo_promedio'))
                        ->where('id_producto',$producto['id_producto'])->first();

                    $movimiento_producto = new InventarioMovimientosProductos();
                    $movimiento_producto->id_bodega_producto = $salida_producto->id_bodega_producto;
                    $movimiento_producto->fecha_movimiento = $salida->fecha_despacho;// date("Y-m-d H:i:s");
                    $movimiento_producto->descripcion_movimiento = $request->tipo_salida['descripcion'].' No. '.$salida->numero_documento;
                    $movimiento_producto->identificador_origen_movimiento = $salida->id_salida;
                    $movimiento_producto->tipo_movimiento = 2;
                    $movimiento_producto->cantidad_movimiento =  $producto['cantidad_despachada']*-1;
                    $movimiento_producto->costo = $costo_promediox['costo_promedio'];
                    $movimiento_producto->usuario_registra = Auth::user()->usuario;
                    $movimiento_producto->id_empresa = $conf;
                    $movimiento_producto->save();

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

    public function anular(Request $request)
    {
        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            'id_salida' => 'required|integer|exists:pgsql.inventario.salidas,id_salida',
            'causa_anulacion' => 'required|string|max:255',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{
                $conf = session()->get('id_empresa');

                DB::beginTransaction();
                $salida = InventarioSalidas::find($request->id_salida);

                if($salida->estado==2){

                    if($salida->id_tipo_salida==7){
                        $entrada = InventarioEntradas::where('id_empresa', '=', $conf)->where('id_salida',$salida->id_salida)->where('estado','<>',0)->first();
                        if(empty($entrada)){
                        //$salida->causa_anulacion = $request->causa_anulacion;
                        $salida->estado=0;
                        $salida->save();
                        }else{
                            DB::rollBack();
                            return response()->json([
                                'status' => 'error',
                                'result' => 'La salida no se puede anular ya que existe una devolución vinculada.',
                                'messages' => null
                            ]);
                        }
                    }elseif($salida->id_tipo_salida==4){

                        $entrada = InventarioEntradas::where('id_empresa', '=', $conf)->where('id_salida',$salida->id_salida)->first();
                        if($entrada->estado==1){
                            $salida->estado=0;
                            $salida->save();

                            $entrada->estado=0;
                            $entrada->save();
                        }else{
                            DB::rollBack();
                            return response()->json([
                                'status' => 'error',
                                'result' => 'El traslado ya fue recibido en la otra bodega, no se puede anular.',
                                'messages' => null
                            ]);
                        }
                    }
                }else if($salida->estado==1){
                    if($salida->id_tipo_salida==7 || $salida->id_tipo_salida==4|| $salida->id_tipo_salida==15){
                        $salida->estado=0;
                        $salida->save();
                    }
                    /*if($salida->id_tipo_salida=4||$salida->id_tipo_salida=8){
                        $salida->estado=0;
                        $salida->save();
                    }*/
                }else{

                    DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => 'No se puede anular esta salida',
                        'messages' => null
                    ]);
                }

                $salidas_productos = InventarioSalidaProductos::where('id_empresa', '=', $conf)->where('id_salida',$salida->id_salida)->with('salidaProductoBaterias')->get();
                   // print_r($salidas_productos);

                foreach ($salidas_productos as $salida_producto) {
                    $bodega_sub = InventarioBodegaProductos::find($salida_producto->id_bodega_producto);
                    if($salida->condicion_productos==8){
                        $bodega_sub->cantidad_recuperadas = $bodega_sub->cantidad_recuperadas+$salida_producto['cantidad_saliente'];
                    }elseif($salida->condicion_productos==6){
                        $bodega_sub->cantidad_obsoletas = $bodega_sub->cantidad_obsoletas+$salida_producto['cantidad_saliente'];
                    }else{
                        $bodega_sub->cantidad = $bodega_sub->cantidad+$salida_producto['cantidad_saliente'];
                    }
                    $bodega_sub->save();
                    if($salida->estado=2){
                    foreach ($salida_producto['salidaProductoBaterias'] as $bateria) {

                        //1 Disponible, 2 Rotación, 3 En Garantía, 4 Mal estado, 5 Usadas, 6 Obsoletas 7 vendida 8 recuperada
                        $bateria_individual = InventarioBaterias::find($bateria['id_bateria']);
                        //print_r($bateria_individual);
                        //venta de nuevas, recuperadas y obsoletas
                        if ($salida->id_tipo_salida == 1 || $salida->id_tipo_salida == 7 || $salida->id_tipo_salida == 13 || $salida->id_tipo_salida == 14) {
                            $bateria_individual->reservada = false;
                            $bateria_individual->estado = 1; //Vendida

                        }

                        //traslado de baterias
                        if ($salida->id_tipo_salida == 4 || $salida->id_tipo_salida == 8) {
                            $bateria_individual->estado = 1; //En transito
                            $bateria_individual->reservada = false; //Reservada
                        }

                        if ($salida->id_tipo_salida == 11) {
                            //  $bateria_individual = InventarioBaterias::find($bateria['id_bateria']);
                            $bateria_individual->estado = 1; //usado
                            $bateria_individual->reservada = false;
                        }
                        $bateria_individual->save();
                    }
                    }

                    if($salida->estado=2) {
                        InventarioMovimientosProductos::where('id_empresa', '=', $conf)->where('identificador_origen_movimiento', $salida->id_salida)
                            ->where('id_bodega_producto', $salida_producto->id_bodega_producto)
                            ->where('tipo_movimiento', 2)
                            ->delete();
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

    public function despachar(Request $request)
    {

        $messages = [
            'salida_productos.min' => 'Se requiere agregar un producto por lo menos.',
           // 'salida_productos.*.id_producto.required' => 'Seleccione un producto válido',
            'salida_productos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'salida_productos.*.cantidad_solicitada.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            'id_salida' => 'required|integer|exists:pgsql.inventario.salidas,id_salida',
            'salida_productos' => 'required|array|min:1',
           // 'salida_productos.*.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'salida_productos.*.id_bodega_producto' => 'required|integer|min:1|exists:pgsql.inventario.bodegas_productos,id_bodega_producto',
            'salida_productos.*.cantidad_saliente' => 'required|integer|min:1',
            'salida_productos.*.cantidad_faltante' => 'required|integer|min:0|lte:salida_productos.*.cantidad_saliente',
            'salida_productos.*.cantidad_despachada' => 'required|integer|min:1|lte:salida_productos.*.cantidad_saliente',

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $salida = InventarioSalidas::find($request->id_salida);
                $conf = session()->get('id_empresa');

                if($salida->estado == 1 || $salida->estado == 99){

                $salida->fecha_despacho=date("Y-m-d H:i:s");
                $salida->u_despacho=Auth::user()->usuario;
                $salida->estado=2;
                $salida->save();

                    $entrada = new InventarioEntradas;

                if($salida->id_tipo_salida == 4 || $salida->id_tipo_salida == 15){ //Traslado interno

                    $entrada->codigo_entrada = $salida->codigo_salida;//InventarioEntradas::max('id_entrada')+1;
                    $entrada->id_tipo_entrada = 7;
                    $entrada->condicion_productos = $salida->condicion_productos;
                    $entrada->fecha_entrada = $request->fecha_salida;
                    $entrada->numero_documento = $salida->numero_documento;
                    $entrada->id_proveedor = $salida->id_proveedor;
                    $entrada->id_bodega = $salida->id_bodega_entrante;
                    $entrada->id_salida = $salida->id_salida;
                    $entrada->id_zona_costo = $salida->id_zona_costo;
                    $entrada->descripcion_entrada = $request->descripcion_salida;
                    $entrada->u_creacion = $salida->u_creacion;
                    $entrada->estado = 1;
                    $entrada->id_empresa = $conf;
                    $entrada->save();
                }elseif($salida->id_tipo_salida == 1 || $salida->id_tipo_salida == 10 || $salida->id_tipo_salida == 13 || $salida->id_tipo_salida == 14) {
                    /*$factura = CajaBancoFacturas::where('id_salida',$salida->id_salida)->whereNotNull('id_salida')->first();
                    $factura->estado = 2;
                    $factura->save();*/
                }elseif($salida->id_tipo_salida == 2) {
                    $requisa = InventarioRequisas::where('id_salida',$salida->id_salida)->whereNotNull('id_salida')->first();
                    if (!empty($requisa)&&$requisa->estado == 2) {
                        $requisa->estado = 3;
                        $requisa->save();
                    }
                }elseif($salida->id_tipo_salida ==9) {
                    $factura = CajaBancoFacturasExportacion::where('id_salida',$salida->id_salida)->whereNotNull('id_salida')->first();
                    if(!empty($factura)){
                    $factura->estado = 2;
                    $factura->save();
                    }
                }elseif($salida->id_tipo_salida == 8){
                    $entrada->codigo_entrada = $salida->codigo_salida;//InventarioEntradas::max('id_entrada')+1;
                    $entrada->id_tipo_entrada = 2;
                    $entrada->condicion_productos = $salida->condicion_productos;
                    $entrada->fecha_entrada = $request->fecha_salida;
                    $entrada->id_proveedor = $salida->id_proveedor;
                    $entrada->numero_documento = $salida->numero_documento;
                    $entrada->id_bodega = $salida->id_bodega_entrante;
                    $entrada->id_salida = $salida->id_salida;
                    $entrada->descripcion_entrada = $request->descripcion_salida;
                    $entrada->u_creacion = $salida->u_creacion;
                    $entrada->estado = 1;
                    $entrada->id_empresa = $conf;
                    $entrada->save();
                }
                /*elseif($salida->id_tipo_salida == 12){//Traslado interno BATERIAS recuperadas

                    $entrada->codigo_entrada = $salida->codigo_salida;//InventarioEntradas::max('id_entrada')+1;
                    $entrada->id_tipo_entrada = 7;
                    $entrada->fecha_entrada = $request->fecha_salida;
                    $entrada->id_proveedor = $salida->id_proveedor;
                    $entrada->id_bodega = $salida->id_bodega_entrante;
                    $entrada->id_salida = $salida->id_salida;
                    $entrada->descripcion_entrada = $request->descripcion_salida;
                    $entrada->u_creacion = $salida->u_creacion;
                    $entrada->estado = 1;
                    $entrada->save();
                }*/



                foreach ($request->salida_productos as $producto) {
                   // print_r($producto);
                    if($salida->id_tipo_salida == 4 || $salida->id_tipo_salida == 8 || $salida->id_tipo_salida == 15){
                    $entrada_producto = new InventarioEntradaProductos;
                    $id_empresa_global = 0;
                    $bodega_sub = InventarioBodegaProductos::whereIn('id_empresa', array($conf,$id_empresa_global))->where('id_bodega',$salida->id_bodega_entrante)
                        ->where('id_producto',$producto['bodega_producto']['id_producto'])
                        ->where('id_presentacion',$producto['salida_presentacion']['id_presentacion'])
                        ->where('id_zona_costo', $salida->id_zona_costo)
                        ->where('no_lote',$producto['bodega_producto']['no_lote'])
                        ->orderBy('fecha_vencimiento')->first();

                    if(!empty($bodega_sub)){
                        $entrada_producto->id_bodega_producto = $bodega_sub['id_bodega_producto'];
                    }else{
                        $nueva_bodega_sub = new InventarioBodegaProductos;
                        $nueva_bodega_sub->id_bodega=$salida->id_bodega_entrante;
                        $nueva_bodega_sub->id_producto=$producto['bodega_producto']['id_producto'];
                        $nueva_bodega_sub->cantidad=0;
                        $nueva_bodega_sub->id_presentacion = $producto['salida_presentacion']['id_presentacion'];
                        $nueva_bodega_sub->codigo_presentacion = $producto['salida_presentacion']['codigo'];
                        $nueva_bodega_sub->id_unidad_medida_presentacion = $producto['salida_presentacion']['id_unidad_medida_presentacion'];
                        $nueva_bodega_sub->id_unidad_medida_calculo = $producto['salida_presentacion']['id_unidad_medida_calculo'];
                        $nueva_bodega_sub->escalar = $producto['escalar'];
                        $nueva_bodega_sub->conversionx = $producto['conversionx'];
                        $nueva_bodega_sub->no_lote = $producto['bodega_producto']['no_lote'];
                        $nueva_bodega_sub->fecha_fabricacion = $salida->fecha_fabricacion;
                        $nueva_bodega_sub->fecha_vencimiento = $salida->fecha_vencimiento;
                        $nueva_bodega_sub->id_empresa = $conf;
                        $nueva_bodega_sub->u_creacion = $salida->u_creacion;
                        $nueva_bodega_sub->id_zona_costo=$salida->id_zona_costo;
                        $nueva_bodega_sub->save();
                        $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                    }

                    $entrada_producto->id_entrada = $entrada->id_entrada;
                    $entrada_producto->codigo_producto = $producto['codigo_producto'];
                    $entrada_producto->descripcion_producto = $producto['descripcion_producto'];
                    $entrada_producto->unidad_medida = $producto['unidad_medida'];
                    $entrada_producto->precio_unitario = $producto['precio_unitario'];
                    $entrada_producto->cantidad_solicitada = $producto['cantidad_saliente'];
                    $entrada_producto->cantidad_recibida = 0;
                    $entrada_producto->cantidad_faltante = 0;
                    $entrada_producto->u_creacion =$entrada->u_creacion;
                    $entrada_producto->id_presentacion = $producto['id_presentacion'];
                    $entrada_producto->codigo_presentacion = $producto['codigo_presentacion'];
                    $entrada_producto->id_unidad_medida_presentacion = $producto['id_unidad_medida_presentacion'];
                    $entrada_producto->id_unidad_medida_calculo = $producto['id_unidad_medida_calculo'];
                    $entrada_producto->escalar = $producto['escalar'];
                    $entrada_producto->conversionx = $producto['conversionx'];
                    $entrada_producto->id_empresa = $conf;
                    $entrada_producto->id_zona_costo = $entrada->id_zona_costo;
                    $entrada_producto->save();
                    }

                    //$bodega_sub2 = InventarioBodegaProductos::whereIn('id_empresa',array($conf,$id_empresa_global))->where('id_bodega_producto',$producto['id_bodega_producto'])->first();
                    //print_r($bodega_sub);
                    //$bodega_sub2->cantidad = $bodega_sub2->cantidad-$producto['cantidad_despachada'];
                    //$bodega_sub2->save();

                    $salida_producto = InventarioSalidaProductos::find($producto['id_salida_producto']);
                    $salida_producto->cantidad_despachada = $producto['cantidad_despachada'];
                    $salida_producto->cantidad_faltante = $producto['cantidad_faltante'];
                    $salida_producto->save();


                    if($salida->id_tipo_salida == 2){
                        $requisa_producto = InventarioRequisaProductos::where('id_empresa', '=', $conf)->where('id_salida_producto',$salida_producto->id_salida_producto)->first();
                        if(!empty( $requisa_producto)){
                            $requisa_producto->cantidad_recibida = $producto['cantidad_despachada'];
                            $requisa_producto->save();
                        }
                    }

                    $id_empresa_global = 0;
                    $costo_promediox = InventarioProductos::select(
                        DB::raw('coalesce(inventario.calcular_costo_promedio(inventario.productos.id_producto),0) as costo_promedio'))
                        ->where('id_empresa', '=', $conf)->where('id_producto',$producto['bodega_producto']['id_producto'])->first();

             /*       $bodega_sub = InventarioBodegaProductos::whereIn('id_empresa', array($conf,$id_empresa_global))->where('id_bodega',$producto['bodega_producto']['id_bodega'])
                        ->where('id_producto',$producto['bodega_producto']['id_producto'])
                        ->where('id_presentacion',$producto['bodega_producto']['id_presentacion'])
                        ->where('id_zona_costo',$producto['id_zona_costo'])
                        ->orderBy('fecha_vencimiento')->first();*/

                    $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['id_bodega_producto'])->first();

                    $movimiento_producto = new InventarioMovimientosProductos();
                    $movimiento_producto->id_bodega_producto = $bodega_sub['id_bodega_producto'];
                    $movimiento_producto->fecha_movimiento = $salida->fecha_despacho;// date("Y-m-d H:i:s");
                    $movimiento_producto->descripcion_movimiento = $request->salida_tipo['descripcion'].' No. '.$salida->codigo_salida;
                    $movimiento_producto->identificador_origen_movimiento = $salida->id_salida;
                    $movimiento_producto->tipo_movimiento = 2;
                    $movimiento_producto->cantidad_movimiento =  $producto['cantidad_despachada']*-1;
                    $movimiento_producto->costo = $costo_promediox['costo_promedio'];
                    $movimiento_producto->usuario_registra = Auth::user()->usuario;
                    $movimiento_producto->id_presentacion = $producto['id_presentacion'];
                    $movimiento_producto->codigo_presentacion = $producto['codigo_presentacion'];
                    $movimiento_producto->id_unidad_medida_presentacion = $producto['id_unidad_medida_presentacion'];
                    $movimiento_producto->id_unidad_medida_calculo = $producto['id_unidad_medida_calculo'];
                    $movimiento_producto->escalar = $producto['escalar'];
                    $movimiento_producto->conversionx = $producto['conversionx'];
                    $movimiento_producto->id_empresa = $conf;
                    $movimiento_producto->id_zona_costo = $salida->id_zona_costo;
                    $movimiento_producto->save();


                    if($salida->id_tipo_salida == 15 && !empty($salida->id_cliente)) {//nuevo tipo 15 traslado consignacion antes 4
                        $consignacion_producto = new InventarioConsignacionProductos();
                        $consignacion_producto->id_bodega_producto = $entrada_producto->id_bodega_producto;
                        $consignacion_producto->id_producto = $producto['bodega_producto']['id_producto'];
                        $consignacion_producto->id_cliente = $salida->id_cliente;
                        $consignacion_producto->fecha_movimiento = $salida->fecha_despacho;// date("Y-m-d H:i:s");
                        $consignacion_producto->descripcion_movimiento = $request->salida_tipo['descripcion'] . ' No. ' . $salida->codigo_salida;
                        $consignacion_producto->identificador_origen_movimiento = $entrada->id_entrada;
                        $consignacion_producto->tipo_movimiento = 1;//1 consignacion 2 venta 3 devolucion
                        $consignacion_producto->cantidad_movimiento = $producto['cantidad_despachada'];
                        $consignacion_producto->usuario_registra = Auth::user()->usuario;
                        $consignacion_producto->id_empresa = $conf;
                        $consignacion_producto->save();
                    }


                    if($salida->id_tipo_salida == 8 && !empty($salida->id_cliente)) {
                        $consignacion_producto = new InventarioConsignacionProductos();
                        $consignacion_producto->id_bodega_producto = $producto['id_bodega_producto'];
                        $consignacion_producto->id_producto = $producto['bodega_producto']['id_producto'];
                        $consignacion_producto->id_cliente = $salida->id_cliente;
                        $consignacion_producto->fecha_movimiento = $salida->fecha_despacho;// date("Y-m-d H:i:s");
                        $consignacion_producto->descripcion_movimiento = $request->salida_tipo['descripcion'] . ' No. ' . $salida->codigo_salida;
                        $consignacion_producto->identificador_origen_movimiento = $salida->id_salida;
                        $consignacion_producto->tipo_movimiento = 3;//1 consignacion 2 venta 3 devolucion
                        $consignacion_producto->cantidad_movimiento = $producto['cantidad_despachada']*-1;
                        $consignacion_producto->usuario_registra = Auth::user()->usuario;
                        $consignacion_producto->id_empresa = $conf;
                        $consignacion_producto->save();
                    }


                }

                DB::commit();
               // DB::rollBack();
                return response()->json([
                    'status' => 'success',
                    'result' => null,
                    'messages' => null
                ]);

                }else{
                    DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => 'La salida ha sido modificada previamente, no se pueden grabar los cambios',
                        'messages' => null
                    ]);
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




    public function guardarSalida(Request $request)
    {

        $messages = [
            'salida_productos.min' => 'Se requiere agregar un producto por lo menos.',
            // 'salida_productos.*.id_producto.required' => 'Seleccione un producto válido',
            'salida_productos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'salida_productos.*.cantidad_solicitada.min' => 'La cantidad debe ser mayor que cero',
        ];


        $rules = [
            'id_salida' => 'required|integer|exists:pgsql.inventario.salidas,id_salida',
            'salida_productos' => 'required|array|min:1',
            // 'salida_productos.*.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'salida_productos.*.id_bodega_producto' => 'required|integer|min:1|exists:pgsql.inventario.bodegas_productos,id_bodega_producto',
            'salida_productos.*.cantidad_saliente' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:1',
            'salida_productos.*.cantidad_faltante' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0|lte:salida_productos.*.cantidad_saliente',
            'salida_productos.*.cantidad_despachada' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0|lte:salida_productos.*.cantidad_saliente',

            'detalle_baterias' => 'nullable|required_if:contiene_baterias,true|array|min:0',
            'detalle_baterias.*.id_bateria' => 'nullable|required_if:contiene_baterias,true|integer|exists:pgsql.inventario.baterias,id_bateria',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $salida = InventarioSalidas::find($request->id_salida);

                if($salida->estado == 1 || $salida->estado == 99){//despacho en progreso

                    $salida->fecha_despacho=date("Y-m-d H:i:s");
                    $salida->u_despacho=Auth::user()->usuario;
                    $salida->estado=99;
                    $salida->save();


                    foreach ($request->salida_productos as $producto) {

                        $bodega_sub2 = InventarioBodegaProductos::where('id_bodega_producto',$producto['id_bodega_producto'])->first();


                        $salida_producto = InventarioSalidaProductos::find($producto['id_salida_producto']);
                        $salida_producto->cantidad_despachada = $producto['cantidad_despachada'];
                        $salida_producto->cantidad_faltante = $producto['cantidad_faltante'];
                        $salida_producto->save();


                        if($request->contiene_baterias){
                            foreach ($request->detalle_baterias as $bateria) {

                                if($bateria['estado'] == 0){

                                    if(!empty($bateria['id_salida_producto_bateria'])){
                                        $conf = session()->get('id_empresa');
                                        InventarioSalidaProductoBaterias::where('id_empresa', '=', $conf)->where('id_salida_producto_bateria', $bateria['id_salida_producto_bateria'])->delete();


                                        if(!empty($bateria['id_bateria'])){
                                            $bateria_individual = InventarioBaterias::find($bateria['id_bateria']);
                                            if($bateria_individual && $bateria_individual->reservada){
                                                $bateria_individual->reservada = false;
                                                $bateria_individual->save();
                                            }
                                        }

                                    }


                                }else{

                                if($bateria['id_producto'] == $bodega_sub2->id_producto){
                                    //1 Disponible, 2 Rotación, 3 En Garantía, 4 Mal estado, 5 Usadas, 6 Obsoletas 7 vendida
                                    if(empty($bateria['id_salida_producto_bateria'])){
                                    $salida_baterias = new InventarioSalidaProductoBaterias();
                                    $salida_baterias->id_bateria = $bateria['id_bateria'];
                                    $salida_baterias->id_salida_producto = $salida_producto->id_salida_producto;
                                    $salida_baterias->save();



                                        $bateria_individual = InventarioBaterias::find($bateria['id_bateria']);
                                        if($bateria_individual->estado==1){
                                            $bateria_individual->reservada = true;
                                            $bateria_individual->save();
                                        }else{
                                            DB::rollBack();
                                            return response()->json([
                                                'status' => 'error',
                                                'result' => 'La salida contiene baterías que han sido despachadas previamente',
                                                'messages' => null
                                            ]);
                                        }


                                }else{
                                    if($bateria['estado']==0){
                                        $conf = session()->get('id_empresa');
                                        $id_empresa_global = 0;
                                        InventarioSalidaProductoBaterias::where('id_empresa', array($conf,$id_empresa_global))->where('id_salida_producto_bateria', $bateria['id_salida_producto_bateria'])->delete();

                                        if(!empty($bateria['id_bateria'])){
                                            $bateria_individual = InventarioBaterias::find($bateria['id_bateria']);
                                            if($bateria_individual && $bateria_individual->reservada){
                                                $bateria_individual->reservada = false;
                                                $bateria_individual->save();
                                            }
                                        }
                                    }
                                }
                                }
                                }
                                }
                            }


                    }

                    DB::commit();
                    // DB::rollBack();
                    return response()->json([
                        'status' => 'success',
                        'result' => null,
                        'messages' => null
                    ]);

                }else{
                    DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => 'La salida ha sido modificada previamente, no se pueden grabar los cambios',
                        'messages' => null
                    ]);
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


    public function crearSalidaPorDevolucion(Request $request)
	{ 
     //print_r($request->entrada_original);

     $messages = [
        'salida_original.salida_productos.min' => 'Se requiere agregar un producto por lo menos.',
        'salida_original.salida_productos.required' => 'Se requiere agregar un producto por lo menos.',
        'salida_original.salida_productos.*.id_bodega_producto.required' => 'Seleccione un producto válido',
        'salida_original.salida_productos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
        'salida_original.salida_productos.*.cantidad_dev.min' => 'La cantidad debe ser mayor que cero',
        'salida_original.salida_productos.*.cantidad_dev.required' => 'La cantidad es requerida',
    ];

        $rules = [
		'salida_original.codigo_salida' => 'required',
		'salida_original.fecha_salida' => 'required',
		'salida_original.id_tipo_salida' => 'required',
		'salida_original.id_bodega_salida' => 'required',
        'salida_original.descripcion_salida' => 'required',
        'salida_original.salida_productos' => 'required|array|min:1',
        'salida_original.salida_productos.*.id_bodega_producto' => 'required|integer|exists:pgsql.inventario.bodegas_productos,id_bodega_producto',
        'salida_original.salida_productos.*.precio_unitario' => 'required|numeric|min:0.01',
        'salida_original.salida_productos.*.cantidad_dev' => 'required|numeric|min:1',
		];

		$validator = Validator::make($request->all(), $rules,$messages);
		if (!$validator->fails()) {

			try{

                $conf = session()->get('id_empresa');
            DB::beginTransaction();
            date_default_timezone_set('America/Managua');
			$salidaPorDevolucion = new InventarioSalidas;
            $salidaPorDevolucion->codigo_salida = counter()->next('salida_devolucion').'-'.$request->salida_original['codigo_salida'];
			$salidaPorDevolucion->id_tipo_salida = 2;
			$salidaPorDevolucion->fecha_salida = date('Y-m-d');
			$salidaPorDevolucion->descripcion_salida = 'Registro de devolución de productos de la Salida: '.$request->salida_original['codigo_salida'];
			$salidaPorDevolucion->id_bodega_salida = $request->salida_original['id_bodega_salida'];
            $salidaPorDevolucion->usuario_registra = Auth::user()->usuario;
            $salidaPorDevolucion->id_salida_dev = $request->salida_original['id_salida'];
            $salidaPorDevolucion->estado = 1;

            $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
            $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
            $log['fecha_log'] = $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') .' a las '.date('h:i:s A');
            $log['registro'] = 'Registro de salida por devolución en sistema por '.$salidaPorDevolucion->usuario_registra;
            $salidaPorDevolucion->log_salida = '['.json_encode($log).']'; 

            $salidaPorDevolucion->save();
            counter()->increment('salida_devolucion');

            //print_r($salidaPorDevolucion);
            //print_r($request->entrada_original['entradas_productos']);
            $unidadesDiferencia = 0;
			foreach ($request->salida_original['salida_productos'] as $producto) {

                if($producto['cantidad_dev']>0){

                $salida_productoPorDevolucion = new InventarioSalidaProductos;
                $salida_productoPorDevolucion->id_bodega_producto = $producto['id_bodega_producto'];
				$salida_productoPorDevolucion->id_salida = $salidaPorDevolucion->id_salida;
                $salida_productoPorDevolucion->descripcion_producto = $producto['descripcion_producto'];
                $salida_productoPorDevolucion->codigo_producto = $producto['codigo_producto'];
                $salida_productoPorDevolucion->unidad_medida = $producto['unidad_medida'];
                $salida_productoPorDevolucion->precio_unitario = $producto['precio_unitario'];
                $salida_productoPorDevolucion->cantidad = $producto['cantidad_dev']*-1;
                $salida_productoPorDevolucion->cantidad_faltante = 0;
                $salida_productoPorDevolucion->id_salida_producto_dev = $producto['id_salida_producto'];
                $salida_productoPorDevolucion->id_empresa = $conf;
                $salida_productoPorDevolucion->save();

                $salida_productoOriginal = InventarioSalidaProductos::findOrFail($producto['id_salida_producto']);
                $salida_productoOriginal->cantidad_faltante = $salida_productoOriginal->cantidad_faltante + $producto['cantidad_dev'];
                $unidadesDiferencia = $unidadesDiferencia + $salida_productoOriginal->cantidad - $salida_productoOriginal->cantidad_faltante;
                $salida_productoOriginal->save();
            }
               //print_r($entrada_producto);
            }
            
            $salidaOriginal = InventarioSalidas::findOrFail($request->salida_original['id_salida']);
            $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
            $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
            $log['fecha_log'] = $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') .' a las '.date('h:i:s A');
            $log['registro'] = 'Se ha registrado una devolución para esta salida con código: '. $salidaPorDevolucion->codigo_salida.' por el usuario '.Auth::user()->usuario; 
               
            $log_actual = Array(json_decode($salidaOriginal->log_salida));
            array_push($log_actual[0],$log);
            $salidaOriginal->log_salida = json_encode($log_actual[0]);
            $salidaOriginal->save();

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
     * Registra una nueva salida
     *
     * @access 	public
     * @param
     * @return 	json(string)
     */

    public function registrarTraslado(Request $request)
    {
        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
           //'codigo_salida' => 'required|string|max:25',
            'numero_documento' => 'required|string|max:50',
            'descripcion_salida' => 'string|max:255|nullable',
            'fecha_salida' => 'required|date',
            'condicion' => 'required|integer|min:1|max:8',
            'bodega_saliente' => 'required|array|min:1',
            'bodega_saliente.id_bodega' => 'required|integer|min:1',
            'bodega_entrante' => 'required|array|min:1',
            'bodega_entrante.id_bodega' => 'required|integer|min:1',
            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            /*'detalleProductos.*.precio_unitario' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',*/
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
            'detalleProductos.*.productox.nombre_comercial' => 'required|string|max:100',
            /*'detalleProductos.*.productox.unidad_medida' => 'required|string|max:100',*/

        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $conf = session()->get('id_empresa');
                $salida = new InventarioSalidas;

                $salida->codigo_salida = InventarioSalidas::max('id_salida')+1;
                $salida->numero_documento = $request->numero_documento;
                $salida->id_tipo_salida = 4;
                $salida->condicion_productos = $request->condicion;
                $salida->fecha_salida = $request->fecha_salida;
                $salida->id_bodega = $request->bodega_saliente['id_bodega'];
                $salida->id_bodega_entrante = $request->bodega_entrante['id_bodega'];
                $salida->id_bodega_entrante = $request->bodega_entrante['id_bodega'];
                $salida->descripcion_salida = $request->descripcion_salida;
                $salida->u_creacion = Auth::user()->usuario;
                $salida->estado = 1;
                $salida->id_empresa = $conf;
                $salida->save();


                /*$entrada = new InventarioEntradas;
                $entrada->codigo_entrada = InventarioEntradas::max('id_entrada')+1;
                $entrada->id_tipo_entrada = 7;
                $entrada->fecha_entrada = $request->fecha_salida;
                $entrada->id_proveedor = $salida->id_proveedor;
                $entrada->id_bodega = $request->bodega_entrante['id_bodega'];
                $entrada->descripcion_entrada = $request->descripcion_salida;
                $entrada->u_creacion = $salida->u_creacion;
                $entrada->estado = 1;
                $entrada->save();*/
                $id_empresa_global = 0;

                foreach ($request->detalleProductos as $producto) {
                    /*$bodega_sub = InventarioBodegaProductos::whereIn('id_empresa', array($conf,$id_empresa_global))->where('id_producto',$producto['productox']['id_producto'])
                        ->where('id_presentacion',$producto['presentacionx']['id_presentacion'])->where('id_bodega',$producto['productox']['id_producto'])->orderBy('fecha_vencimiento')->first();*/
                    $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['productox']['id_bodega_producto'])->first();
                   if($salida->condicion_productos==8){
                       $bodega_sub->cantidad_recuperadas = $bodega_sub->cantidad_recuperadas-$producto['cantidad'];
                   }elseif($salida->condicion_productos==6){
                       $bodega_sub->cantidad_obsoletas = $bodega_sub->cantidad_obsoletas-$producto['cantidad'];
                   }else{
                       //printf($bodega_sub);
                       $bodega_sub->cantidad = $bodega_sub->cantidad - $producto['cantidad'];
                   }

                    $bodega_sub->save();

                    $salida_producto = new InventarioSalidaProductos;
                    $salida_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                    $salida_producto->id_salida = $salida->id_salida;
                    $salida_producto->descripcion_producto = $producto['productox']['nombre_comercial'];
                    $salida_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                    $salida_producto->unidad_medida = $producto['productox']['unidad_medida'];
                    $salida_producto->precio_unitario = 0;
                    $salida_producto->cantidad_saliente = $producto['cantidad'];
                    $salida_producto->cantidad_despachada = 0;
                    $salida_producto->cantidad_faltante = 0;
                    $salida_producto->u_creacion = $salida->u_creacion;
                    $salida_producto->id_presentacion = $producto['presentacionx']['id_presentacion'];
                    $salida_producto->codigo_presentacion = $producto['presentacionx']['codigo'];
                    $salida_producto->id_unidad_medida_presentacion =  $producto['presentacionx']['id_unidad_medida_presentacion'];
                    $salida_producto->id_unidad_medida_calculo = $producto['presentacionx']['id_unidad_medida_calculo'];
                    $salida_producto->escalar = $producto['presentacionx']['escalar'];
                    $salida_producto->conversionx = $producto['conversionx'];
                    $salida_producto->id_empresa = $conf;
                    $salida_producto->save();

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


    public function registrarTrasladoConsignacion(Request $request)
    {
        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            //'codigo_salida' => 'required|string|max:25',
            'descripcion_salida' => 'string|max:255|nullable',
            'fecha_salida' => 'required|date',
            'bodega_saliente' => 'required|array|min:1',
            'bodega_saliente.id_bodega' => 'required|integer|min:1',
            'cliente_salida' => 'required|array|min:1',
            'cliente_salida.id_cliente' => 'required|integer|min:1',
            'bodega_entrante' => 'required|array|min:1',
            'bodega_entrante.id_bodega' => 'required|integer|min:1',
            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.precio_unitario' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
            'detalleProductos.*.productox.descripcion' => 'required|string|max:100',
            'detalleProductos.*.productox.unidad_medida' => 'required|string|max:100',

        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $salida = new InventarioSalidas;
                $conf = session()->get('id_empresa');

                $salida->codigo_salida = InventarioSalidas::max('id_salida')+1;
                $salida->id_tipo_salida = 15;//4 ahora traslado por consignacion;
                $salida->fecha_salida = $request->fecha_salida;
                $salida->id_bodega = $request->bodega_saliente['id_bodega'];
                $salida->id_cliente = $request->cliente_salida['id_cliente'];
                $salida->id_bodega_entrante = $request->bodega_entrante['id_bodega'];
                $salida->descripcion_salida = $request->descripcion_salida;
                $salida->u_creacion = Auth::user()->usuario;
                $salida->estado = 1;
                $salida->id_empresa = $conf;
                $salida->save();


                /*$entrada = new InventarioEntradas;
                $entrada->codigo_entrada = InventarioEntradas::max('id_entrada')+1;
                $entrada->id_tipo_entrada = 7;
                $entrada->fecha_entrada = $request->fecha_salida;
                $entrada->id_proveedor = $salida->id_proveedor;
                $entrada->id_bodega = $request->bodega_entrante['id_bodega'];
                $entrada->descripcion_entrada = $request->descripcion_salida;
                $entrada->u_creacion = $salida->u_creacion;
                $entrada->estado = 1;
                $entrada->save();*/

                foreach ($request->detalleProductos as $producto) {
                    $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['productox']['id_bodega_producto'])->first();
                    $bodega_sub->cantidad = $bodega_sub->cantidad-$producto['cantidad'];
                    $bodega_sub->save();

                    $salida_producto = new InventarioSalidaProductos;
                    $salida_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                    $salida_producto->id_salida = $salida->id_salida;
                    $salida_producto->descripcion_producto = $producto['productox']['descripcion'];
                    $salida_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                    $salida_producto->unidad_medida = $producto['productox']['unidad_medida'];
                    $salida_producto->precio_unitario = $producto['precio_unitario'];
                    $salida_producto->cantidad_saliente = $producto['cantidad'];
                    $salida_producto->cantidad_despachada = 0;
                    $salida_producto->cantidad_faltante = 0;
                    $salida_producto->u_creacion = $salida->u_creacion;
                    $salida_producto->id_empresa = $conf;
                    $salida_producto->save();

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



    public function registrarDevolucionConsignacion(Request $request)
    {
        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            //'codigo_salida' => 'required|string|max:25',
            'descripcion_salida' => 'string|max:255|nullable',
            'fecha_salida' => 'required|date',
            'cliente_salida' => 'required|array|min:1',
            'cliente_salida.id_cliente' => 'required|integer|min:1',
            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.precio_unitario' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
            'detalleProductos.*.productox.text' => 'required|string|max:100',
            'detalleProductos.*.productox.unidad_medida' => 'required|string|max:100',

        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $salida = new InventarioSalidas;
                $conf = session()->get('id_empresa');
                $salida->codigo_salida = InventarioSalidas::max('id_salida')+1;
                $salida->id_tipo_salida = 8;
                $salida->fecha_salida = $request->fecha_salida;
                $salida->id_bodega = 17;
                $salida->id_cliente = $request->cliente_salida['id_cliente'];
                $salida->id_bodega_entrante = 1;
                $salida->descripcion_salida = $request->descripcion_salida;
                $salida->u_creacion = Auth::user()->usuario;
                $salida->estado = 1;
                $salida->id_empresa = $conf;
                $salida->save();


                /*$entrada = new InventarioEntradas;
                $entrada->codigo_entrada = InventarioEntradas::max('id_entrada')+1;
                $entrada->id_tipo_entrada = 7;
                $entrada->fecha_entrada = $request->fecha_salida;
                $entrada->id_proveedor = $salida->id_proveedor;
                $entrada->id_bodega = $request->bodega_entrante['id_bodega'];
                $entrada->descripcion_entrada = $request->descripcion_salida;
                $entrada->u_creacion = $salida->u_creacion;
                $entrada->estado = 1;
                $entrada->save();*/

                foreach ($request->detalleProductos as $producto) {
                    $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['productox']['id_bodega_producto'])->first();
                    $bodega_sub->cantidad = $bodega_sub->cantidad-$producto['cantidad'];
                    $bodega_sub->save();

                    $salida_producto = new InventarioSalidaProductos;
                    $salida_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                    $salida_producto->id_salida = $salida->id_salida;
                    $salida_producto->descripcion_producto = $producto['productox']['text'];
                    $salida_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                    $salida_producto->unidad_medida = $producto['productox']['unidad_medida'];
                    $salida_producto->precio_unitario = $producto['precio_unitario'];
                    $salida_producto->cantidad_saliente = $producto['cantidad'];
                    $salida_producto->cantidad_despachada = 0;
                    $salida_producto->cantidad_faltante = 0;
                    $salida_producto->u_creacion = $salida->u_creacion;
                    $salida_producto->id_empresa = $conf;
                    $salida_producto->save();


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

    
    public function obtenerNumeroSalida()
    {   
        $num['Numero'] = counter()->next('salida');
       // $num['Fecha'] = date('Y-m-d');
        return response()->json([
            'status' => 'success',
            'result' => $num,
            'messages' => null
        ]);
    }


    public function nuevaSalidaRecuperados(Request $request)
    {
        $conf = session()->get('id_empresa');
        $bodegas = InventarioBodegas::where('id_empresa', '=', $conf)->where('activo', 1)->whereIn('id_tipo_bodega',array(1,2))->get();
        $bodegas_garantia = InventarioBodegas::where('activo', 1)->where('id_tipo_bodega',4)->get();
        $productos = InventarioProductos::
        select(['inventario.productos.id_producto','codigo_barra','codigo_consecutivo','inventario.baterias_detalles.bci','codigo_sistema','condicion','costo_estandar','descripcion',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text")])
            ->leftJoin('inventario.baterias_detalles', 'inventario.baterias_detalles.id_producto','inventario.productos.id_producto')
            ->where('id_empresa', '=', $conf)->where('activo', 1)->whereIn('tipo_producto', array(3))->where('condicion',1)->orderBy('descripcion', 'asc')
            ->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'bodegas' => $bodegas,
                'bodegas_garantia' => $bodegas_garantia,
                'productos' => $productos,
            ],
            'messages' => null
        ]);
    }


    public function registrarTrasladoRecuperado(Request $request)
    {

        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.producto_garantiax.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];


        $rules = [

            'bodega' => 'nullable|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',

            'bodega_garantia' => 'nullable|array|min:1',
            'bodega_garantia.id_bodega' => 'required|integer|min:1',
            'estado' => 'required|integer|min:1',

            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.estado' => 'required|integer|min:1|max:8',
            'detalleProductos.*.id_bateria' => 'required|integer|exists:pgsql.inventario.baterias,id_bateria',

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();

                $salida = new InventarioSalidas;
                $conf = session()->get('id_empresa');

                $salida->codigo_salida = InventarioSalidas::max('id_salida')+1;
                $salida->id_tipo_salida = 4;
                $salida->condicion_productos = 3;//salen productos en garantia (3)
                $salida->fecha_salida = date("Y-m-d H:i:s");
                $salida->id_bodega = $request->bodega_garantia['id_bodega'];
                $salida->id_bodega_entrante = $request->bodega['id_bodega'];
                $salida->descripcion_salida = $request->descripcion_salida;
                $salida->u_creacion = Auth::user()->usuario;
                $salida->fecha_despacho=date("Y-m-d H:i:s");
                $salida->u_despacho=Auth::user()->usuario;
                $salida->estado=2;
                $salida->id_empresa = $conf;
                $salida->save();

                $entrada = new InventarioEntradas;
                $entrada->codigo_entrada = $salida->codigo_salida;//InventarioEntradas::max('id_entrada')+1;
                $entrada->id_tipo_entrada = 9;///TRASLADO BATERIAS RECUPERADAS
                $entrada->condicion_productos = $request->estado;//entran con estado
                $entrada->fecha_entrada = $salida->fecha_salida;
                $entrada->id_proveedor = $salida->id_proveedor;
                $entrada->id_bodega = $salida->id_bodega_entrante;
                $entrada->id_salida = $salida->id_salida;
                $entrada->descripcion_entrada = $request->descripcion_salida;
                $entrada->u_creacion = $salida->u_creacion;
                $entrada->estado = 1;
                $entrada->id_empresa = $conf;
                $entrada->save();


                foreach ($request->detalleProductos as $producto) {


                    $bodega_sub = InventarioBodegaProductos::where('id_producto',$producto['productox']['id_producto'])
                        ->where('id_bodega',$request->bodega_garantia['id_bodega'])->first();
                    $bodega_sub->cantidad = $bodega_sub->cantidad-1;
                    $bodega_sub->save();


                    $productoExiste = InventarioSalidaProductos::where('id_bodega_producto',$bodega_sub->id_bodega_producto)
                        ->where('id_salida',$salida->id_salida)->first();

                    $salida_baterias = new InventarioSalidaProductoBaterias();
                    $salida_baterias->id_bateria = $producto['id_bateria'];

                    $bateria_individual = InventarioBaterias::find($salida_baterias->id_bateria);
                    $bateria_individual->estado =  $entrada->condicion_productos; //1 nuevo 8 recuperada?
                    $bateria_individual->reservada = true;
                    $bateria_individual->save();

                    $entrada_producto = new InventarioEntradaProductos;

                    $bodega_sub2 = InventarioBodegaProductos::where('id_bodega',$salida->id_bodega_entrante)->where('id_producto',$producto['productox']['id_producto'])->first();

                    if(!empty($bodega_sub2)){
                        $entrada_producto->id_bodega_producto = $bodega_sub2['id_bodega_producto'];
                    }else{
                        $nueva_bodega_sub = new InventarioBodegaProductos;
                        $nueva_bodega_sub->id_bodega=$salida->id_bodega_entrante;
                        $nueva_bodega_sub->id_producto=$producto['productox']['id_producto'];
                        $nueva_bodega_sub->cantidad=0;
                        $nueva_bodega_sub->u_creacion = $salida->u_creacion;
                        $nueva_bodega_sub->save();
                        $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                    }

                    $productoExisteEntrada = InventarioEntradaProductos::where('id_bodega_producto',$entrada_producto->id_bodega_producto)
                        ->where('id_entrada',$entrada->id_entrada)->first();

                    if(!$productoExiste && !$productoExisteEntrada){
                        $salida_producto = new InventarioSalidaProductos;
                        $productoxx = InventarioProductos::select('id_producto','id_unidad_medida')->find($producto['productox']['id_producto']);
                        $unidad_medida = InventarioUnidadMedida::find($productoxx['id_unidad_medida']);
                        $salida_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                        $salida_producto->id_salida = $salida->id_salida;
                        $salida_producto->descripcion_producto = $producto['productox']['descripcion'];
                        $salida_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                        $salida_producto->unidad_medida = $unidad_medida['descripcion'];
                        $salida_producto->precio_unitario = $producto['productox']['costo_estandar'];
                        $salida_producto->cantidad_saliente = 1;
                        $salida_producto->cantidad_despachada = 1;
                        $salida_producto->cantidad_faltante = 0;
                        $salida_producto->u_creacion = $salida->u_creacion;
                        $salida_producto->id_empresa = $conf;
                        $salida_producto->save();

                        $costo_promediox = InventarioProductos::select(
                            DB::raw('coalesce(inventario.calcular_costo_promedio(inventario.productos.id_producto),0) as costo_promedio'))
                            ->where('id_producto',$productoxx['id_producto'])->first();

                        $movimiento_producto = new InventarioMovimientosProductos();
                        $movimiento_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                        $movimiento_producto->fecha_movimiento = $salida->fecha_despacho;// date("Y-m-d H:i:s");
                        $movimiento_producto->descripcion_movimiento = 'Salida por Traslado de baterías en garantía a ventas No. '.$salida->codigo_salida;
                        $movimiento_producto->identificador_origen_movimiento = $salida->id_salida;
                        $movimiento_producto->tipo_movimiento = 2;
                        $movimiento_producto->costo = $costo_promediox['costo_promedio'];
                        $movimiento_producto->usuario_registra = Auth::user()->usuario;
                        $movimiento_producto->cantidad_movimiento =  $salida_producto->cantidad_saliente*-1;
                        $movimiento_producto->id_empresa = $conf;
                        $movimiento_producto->save();

                        $entrada_producto->id_entrada = $entrada->id_entrada;
                        $entrada_producto->codigo_producto = $salida_producto->codigo_producto;
                        $entrada_producto->descripcion_producto =  $salida_producto->descripcion_producto;
                        $entrada_producto->unidad_medida = $salida_producto->unidad_medida;
                        $entrada_producto->precio_unitario = $salida_producto->precio_unitario;
                        $entrada_producto->cantidad_solicitada = 1;
                        $entrada_producto->cantidad_recibida = 0;
                        $entrada_producto->cantidad_faltante = 0;
                        $entrada_producto->u_creacion =$entrada->u_creacion;
                        $entrada_producto->id_empresa = $conf;
                        $entrada_producto->save();


                        if($producto['productox']['id_producto'] == $bodega_sub->id_producto) {
                            $salida_baterias->id_salida_producto = $salida_producto->id_salida_producto;
                            $salida_baterias->save();
                        }



                    }else{
                        $productoExiste->cantidad_saliente = $productoExiste->cantidad_saliente + 1;
                        $productoExiste->cantidad_despachada = $productoExiste->cantidad_despachada + 1;
                        $productoExiste->save();

                        $productoExisteEntrada->cantidad_solicitada = $productoExisteEntrada->cantidad_solicitada +1;
                        $productoExisteEntrada->save();

                        $salida_baterias->id_salida_producto = $productoExiste->id_salida_producto;
                        $salida_baterias->save();

                        $movimiento_productox = InventarioMovimientosProductos::
                        where('id_empresa', '=', $request->id_empresa)->where('id_bodega_producto',$productoExiste->id_bodega_producto)
                            ->where('identificador_origen_movimiento',$productoExiste->id_salida)->where('tipo_movimiento',2)->first();
                        $movimiento_productox->cantidad_movimiento =  $productoExiste->cantidad_despachada*-1;
                        $movimiento_productox->save();
                    }

                }

                //DB::rollBack();
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
     * Cambiar Estado Salida
     *
     * @access 	public
     * @param 	
     * @return 	json(string)
     */

	public function cambiarEstado(Request $request)
	{ 
        
        $rules = [
            'id_salida' => 'required',
            'estado' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $salida = InventarioSalidas::find($request->id_salida);
                   
            if($salida->es_editable && $request->estado >= 0 && $request->estado <= 2 && $salida->estado <> $request->estado){

                $estado_org = $salida->estado;
                $salida->estado = $request->estado;
    
                if($request->estado==0 || $request->estado==2){
                $salida->es_editable = 0 ;
                }

            $estados[0] = 'Cancelada';
            $estados[1] = 'Emitida';
            $estados[2] = 'Aprobada';

            date_default_timezone_set('America/Managua');
            $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
            $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
            $log['fecha_log'] = $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') .' a las '.date('h:i:s A');
            $log['registro'] = 'Cambiado el estado de la salida de '. $estados[$estado_org].' a estado '.$estados[$request->estado].' por usuario '.Auth::user()->usuario; 
            $log_actual = Array(json_decode($salida->log_salida));
           // print_r($log);
           // print_r($log_actual[0]);
            array_push($log_actual[0],$log);
            $salida->log_salida = json_encode($log_actual[0]);
           // echo $entrada->log_entrada;

            $salida->save();

            return response()->json([
                'status' => 'success',
                'result' => null,
                'messages' => null
            ]);

        }else{
            return response()->json([
                'status' => 'error',
                'result' => 'Error al cambiar el estado de la salida, revise si la salida esta bloqueada',
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

    public function reporte(Request $request)
    {
        $rules = [
            'id_salida' =>'required|integer|min:1',
            'extension' => 'required|string|max:3',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp7/htdocs/resources/reports/ReporteSalidas';
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'ReporteSalidas';
                $input = '/var/www/html/resources/reports/ReporteSalidas';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteSalidas';
                $nombre_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_empresa', '=', $request->id_empresa)->where('id_ajuste',3)->select(\Illuminate\Support\Facades\DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'salida' => $request->id_salida,
                        'empresa_nombre' => $nombre_empresa->valor,
                        'directorioReports'=>$url,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteSalida.' . $request->extension, $headers);

                /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
                print_r($output);*/

            }else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }
            /*  exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
              print_r($output);*/
        } else {
            return '';
        }
    }



    public function registrarDevolucion(Request $request)
    {

        $messages = [
            'salida_productos.min' => 'Se requiere agregar un producto por lo menos.',
        ];

        $rules = [
            'id_salida' => 'required|integer|exists:pgsql.inventario.salidas,id_salida',
            'salida_productos' => 'required|array|min:1',
            'bodega' => 'required|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',
            // 'salida_productos.*.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'salida_productos.*.id_bodega_producto' => 'required|integer|min:1|exists:pgsql.inventario.bodegas_productos,id_bodega_producto',
            'salida_productos.*.cantidad_despachada' => 'required|integer',
            'salida_productos.*.cantidad_devuelta' => 'required|integer|min:0|lte:salida_productos.*.cantidad_despachada',
             ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $salida = InventarioSalidas::find($request->id_salida);
                $conf = session()->get('id_empresa');

                if($salida->estado == 2){

                        $entrada = new InventarioEntradas;
                        $entrada->codigo_entrada = $salida->codigo_salida;//InventarioEntradas::max('id_entrada')+1;
                        $entrada->id_tipo_entrada = 2;//TIPO DEVOLUCION
                        $entrada->condicion_productos = $salida->condicion_productos;
                        $entrada->fecha_entrada = date("Y-m-d H:i:s");
                        $entrada->fecha_recepcion=date("Y-m-d H:i:s");
                        $entrada->numero_documento = 'DEV-'.$salida->codigo_salida;
                        $entrada->id_proveedor = $salida->id_proveedor;
                        $entrada->id_bodega = $request->bodega['id_bodega'];
                        $entrada->id_salida = $salida->id_salida;
                        $entrada->descripcion_entrada = $request->descripcion_salida;
                        $entrada->u_creacion = $salida->u_creacion;
                        $entrada->u_recepcion=Auth::user()->usuario;
                        $entrada->id_empresa = $conf;
                        $entrada->estado = 2;
                        $entrada->save();
                    //}



                    foreach ($request->salida_productos as $producto) {
                        // print_r($producto);
                        if($producto['cantidad_devuelta']>0){
                            $bodega_sub = InventarioBodegaProductos::where('id_empresa', '=', $request->id_empresa)->where('id_bodega',$entrada->id_bodega)->where('id_producto',$producto['bodega_producto']['id_producto'])->first();

                            if($salida->id_tipo_salida == 7 || $salida->id_tipo_salida == 1){
                            $entrada_producto = new InventarioEntradaProductos;
                            if(!empty($bodega_sub)){
                                $entrada_producto->id_bodega_producto = $bodega_sub['id_bodega_producto'];
                                $bodega_sub->cantidad=$bodega_sub->cantidad+$producto['cantidad_devuelta'];
                                $bodega_sub->save();
                            }else{
                                $nueva_bodega_sub = new InventarioBodegaProductos;
                                $nueva_bodega_sub->id_bodega= $entrada->id_bodega;
                                $nueva_bodega_sub->id_producto=$producto['bodega_producto']['id_producto'];
                                $nueva_bodega_sub->cantidad=$producto['cantidad_devuelta'];
                                $nueva_bodega_sub->u_creacion = $salida->u_creacion;
                                $nueva_bodega_sub->id_empresa = $conf;
                                $nueva_bodega_sub->save();
                                $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                            }
                            $producto_detalles = InventarioProductos::find($producto['bodega_producto']['id_producto']);
                            $unidad_medida = InventarioUnidadMedida::find($producto_detalles['id_unidad_medida']);

                            $entrada_producto->id_entrada = $entrada->id_entrada;
                            $entrada_producto->codigo_producto = $producto_detalles['codigo_sistema'];
                            $entrada_producto->descripcion_producto = $producto_detalles['nombre_comercial'];
                            $entrada_producto->unidad_medida = $unidad_medida['descripcion'];
                            //$entrada_producto->precio_unitario = $producto_detalles['costo_estandar'];
                            $entrada_producto->cantidad_solicitada = $producto['cantidad_devuelta'];
                            $entrada_producto->cantidad_recibida = $producto['cantidad_devuelta'];
                            $entrada_producto->cantidad_faltante = 0;
                            $entrada_producto->u_creacion =$entrada->u_creacion;
                            $entrada_producto->id_empresa = $conf;
                            $entrada_producto->save();

                        }
                        if($request->detalle_baterias){
                            foreach ($request->detalle_baterias as $bateria) {
                                if($bateria['productox']['bateria_producto']['id_producto'] == $producto['bodega_producto']['id_producto']){

                                    $entrada_baterias = new InventarioEntradaProductoBaterias();
                                    $entrada_baterias->id_bateria = $bateria['productox']['id_bateria'];
                                    $entrada_baterias->id_entrada_producto = $entrada_producto->id_entrada_producto;
                                    $entrada_baterias->id_empresa = $conf;
                                    $entrada_baterias->save();

                                        $bateria_individual = InventarioBaterias::find($bateria['productox']['id_bateria']);
                                        $bateria_individual->id_bodega_actual=$entrada->id_bodega;
                                        $bateria_individual->estado = 1; //disponible
                                        $bateria_individual->reservada = false;
                                        $bateria_individual->save();

                                }
                            }
                        }

                        $costo_promediox = InventarioProductos::select(
                            DB::raw('coalesce(inventario.calcular_costo_promedio(inventario.productos.id_producto),0) as costo_promedio'))
                            ->where('id_producto',$producto['bodega_producto']['id_producto'])->first();

                        $movimiento_producto = new InventarioMovimientosProductos();
                        $movimiento_producto->id_bodega_producto = $entrada_producto->id_bodega_producto;
                        $movimiento_producto->fecha_movimiento = date("Y-m-d H:i:s");
                        $movimiento_producto->descripcion_movimiento = 'Devolución No. '.$entrada->codigo_entrada;
                        $movimiento_producto->identificador_origen_movimiento = $entrada->id_entrada;
                        $movimiento_producto->tipo_movimiento = 1;
                        $movimiento_producto->cantidad_movimiento =  $producto['cantidad_devuelta'];
                        $movimiento_producto->costo = $costo_promediox['costo_promedio'];
                        $movimiento_producto->usuario_registra = Auth::user()->usuario;
                        $movimiento_producto->id_empresa = $conf;
                        $movimiento_producto->id_presentacion = $producto['id_presentacion'];
                        $movimiento_producto->codigo_presentacion = $producto['codigo_presentacion'];
                        $movimiento_producto->id_unidad_medida_presentacion = $producto['id_unidad_medida_presentacion'];
                        $movimiento_producto->id_unidad_medida_calculo = $producto['id_unidad_medida_calculo'];
                        $movimiento_producto->escalar = $producto['escalar'];
                        $movimiento_producto->conversionx = $producto['conversionx'];
                        $movimiento_producto->save();
                        }
                    }

                    $salida->estado = 0;
                    $salida->save();
                    DB::commit();
                    //DB::rollBack();
                    return response()->json([
                        'status' => 'success',
                        'result' => null,
                        'messages' => null
                    ]);

                }else{
                    DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => 'La salida ha sido modificada previamente, no se pueden grabar los cambios',
                        'messages' => null
                    ]);
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



    public function registrarBateria(Request $request)
    {
        $rules = [
            'id_salida' => 'required|integer|min:1',
            'id_producto' => 'required|integer',
            //'id_bodega_producto' => 'required|integer',
            'id_bodega' => 'required|integer',
            'id_salida_producto_bateria' => 'integer|min:0',
            'id_bateria' => 'nullable|integer',
            'estado' => 'required|integer',
            //'fecha_activacion' => ['required','string','min:5','max:5'/*,'regex:/0\[1-9]|10|11|12)/[1-9][0-9]/'*/],

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{
                DB::beginTransaction();
                $conf = session()->get('id_empresa');
                if($request->estado == 0){

                    if(!empty($request->id_salida_producto_bateria)){
                        InventarioSalidaProductoBaterias::where('id_empresa', '=', $conf)->where('id_salida_producto_bateria', $request->id_salida_producto_bateria)->delete();


                        if(!empty($request->id_bateria)){
                        $bateria_individual = InventarioBaterias::find($request->id_bateria);
                        if($bateria_individual && $bateria_individual->reservada){
                            $bateria_individual->reservada = false;
                            $bateria_individual->save();

                            $bodega_producto = InventarioBodegaProductos::where('id_empresa', '=', $conf)->where('id_bodega',$request->id_bodega)
                                ->where('id_producto',$request->id_producto)->first();

                            $salida_productox= InventarioSalidaProductos::where('id_empresa', '=', $conf)->where('id_bodega_producto',$bodega_producto['id_bodega_producto'])
                                ->where('id_salida',$request->id_salida)->first();

                            $salida_productox->cantidad_despachada = $salida_productox->cantidad_despachada-1;
                            //$salida_productox->cantidad_faltante = $salida_productox->cantidad_faltante+1;
                            $salida_productox->save();
                        }
                        }

                    }

                    DB::commit();
                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'id_salida_producto_bateria'=> null,
                        ],
                        'messages' => null
                    ]);

                }else{
                    if(empty($request->id_salida_producto_bateria)){

                        $salida_baterias = new InventarioSalidaProductoBaterias();
                        $salida_baterias->id_bateria = $request->id_bateria;

                        $bodega_producto = InventarioBodegaProductos::where('id_empresa', '=', $conf)->where('id_bodega',$request->id_bodega)
                            ->where('id_producto',$request->id_producto)->first();

                        $salida_productox= InventarioSalidaProductos::where('id_empresa', '=', $conf)->where('id_bodega_producto',$bodega_producto['id_bodega_producto'])
                        ->where('id_salida',$request->id_salida)->first();


                        $salida_baterias->id_salida_producto = $salida_productox['id_salida_producto'];
                        $salida_baterias->save();

                        //$salida_producto = InventarioSalidaProductos::find($salida_productox['id_salida_producto']);
                        $salida_productox->cantidad_despachada = $salida_productox->cantidad_despachada+1;
                        //$salida_productox->cantidad_faltante = $salida_productox->cantidad_faltante-1;
                        $salida_productox->save();


                        $bateria_individual = InventarioBaterias::find($request->id_bateria);
                        if($bateria_individual && !$bateria_individual->reservada){
                            $bateria_individual->reservada = true;
                            $bateria_individual->save();
                        }else{
                            DB::rollBack();
                            //print_r($bateria_individual);
                            return response()->json([
                                'status' => 'error',
                                'result' => 'Error de base de datos',
                                'messages' => null
                            ]);
                        }

                        DB::commit();
                        return response()->json([
                            'status' => 'success',
                            'result' => [
                                'id_salida_producto_bateria'=> $salida_baterias->id_salida_producto_bateria,
                            ],
                            'messages' => null
                        ]);
                    }else{
                        return response()->json([
                            'status' => 'success',
                            'result' => [
                                'id_salida_producto_bateria'=> $request->id_salida_producto_bateria,
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



}

