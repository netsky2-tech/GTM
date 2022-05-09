<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\ComprasBateriasUsadas;
use App\Models\ContabilidadCentroCostoIngreso;
use App\Models\InventarioBaterias;
use App\Models\InventarioBateriasUsadas;
use App\Models\InventarioBodegas;
use App\Models\InventarioEntradaProductoBaterias;
use App\Models\InventarioMovimientosProductos;
use Hash, Validator,Auth;
use App\Models\InventarioBodegaProductos;
use App\Models\InventarioEntradaProductos;
use App\Models\InventarioEntradas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class InventarioEntradasController extends Controller
{

    public function buscarProductos(Request $request, InventarioEntradas $productos_entrada)
    {
        $productos_entrada = $productos_entrada->obtenerProductosEntrada($request);
        return response()->json([
            'results' => $productos_entrada
        ]);
    }


    public function reporte(Request $request)
    {
        $rules = [
            'id_entrada' =>'required|integer|min:1',
            'extension' => 'required|string|max:3',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp7/htdocs/resources/reports/ReporteEntradas';
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'ReporteEntradas';
                $input = '/var/www/html/resources/reports/ReporteEntradas';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteEntradas';
                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(\Illuminate\Support\Facades\DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = 'C:/xampp7/htdocs/resources/reports/';
                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'salida' => $request->id_entrada,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteEntradas.' . $request->extension, $headers);

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


    /**
     * Get List of Entradas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioEntradas $entradas)
    {
        $entradas = $entradas->obtenerEntradas($request);

        foreach($entradas as $entrada ){
         //   print_r($entrada);
            $items = collect($entrada->entradaProductos);

            $entrada->tot_unidades = $items->sum(function($item) {
                return $item['cantidad_solicitada'];
            });
            $entrada->subtotal = $items->sum(function($item) {
                return $item['precio_unitario']*$item['cantidad_solicitada'];
            });

            $entrada->total = $entrada->subtotal;
        }

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $entradas->total(), 
                'rows' => $entradas->items()
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


    public function obtenerEntrada(Request $request, InventarioEntradas $entrada)
    {
		$rules = [
            'id_entrada' => 'required|integer|min:1'
		];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;

            $productos = $entrada->obtenerProductosEntrada($request);

            $traslados = $entrada->obtenerBateriasEntradaTraslado($request);
            $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
            $direccion_empresa = AdmonAjustes::where('id_ajuste',5)->select('valor')->first();
            $entrada = $entrada->obtenerEntrada($request);
            $zonas = ContabilidadCentroCostoIngreso::where('estado',1)->whereIn('id_empresa',array($conf,$id_empresa_global))->get();

            if(!empty($entrada[0])){

                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'entrada' => $entrada[0],
                        'productos' => $productos,
                        'traslados' => $traslados,
                        'nombre_empresa'=>$nombre_empresa->valor,
                        'direccion_empresa'=>$direccion_empresa->valor,
                        'zonas' => $zonas
                    ],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_entrada'=>["Datos no encontrados"]),
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


    public function obtenerEntradaPorCodigo(Request $request, InventarioEntradas $entrada)
    {
		$rules = [
            'codigo_entrada' => 'required|string|max:25'
		];
	

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
		  
            $entrada = $entrada->obtenerEntradaPorCodigo($request);
          
           if(!$entrada->isEmpty()){
        //print_r($entrada);
           $items = collect($entrada[0]->entradasProductos);
           $entrada[0]->sub_total = $items->sum(function($item) {
                return $item['cantidad'] * $item['precio_unitario'];
            });
    
            $entrada[0]->total = $items->sum(function($item) {
                return $item['cantidad'] * $item['precio_unitario'];
            });

            $entrada[0]->cant_inicial = 0;

            return response()->json([
                'status' => 'success',
                'result' => $entrada[0],
                'messages' => null
            ]);
        }else {
            return response()->json([
                'status' => 'error',
                'result' => "No se han encontrado resultados para el código de entrada: ".$request->codigo_entrada,
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

    public function pdf($id, Request $request)
    { 
       // $data = InventarioEntradas::with(['items.product', 'items.taxes', 'client', 'currency', 'invoiceable'])->findOrFail($id);
        $data = InventarioEntradas::with(['entradasProductos', 'entradaProveedor', 'entradaBodega', 'entradaTipo'])->findOrFail($id);

        $items = collect($data->entradasProductos);
        $data->sub_total = $items->sum(function($item) {
            return $item['cantidad'] * $item['precio_unitario'];
        });

        $data->total = $items->sum(function($item) {
            return $item['cantidad'] * $item['precio_unitario'];
        });

        $data->log_registro = json_decode($data->log_entrada);

        $doc  = 'docs.entrada';
        //print_r($data);
        //return $this->f_pdf($doc, $data);
        return pdf($doc, $data,strtoupper('Entrada '.$data->codigo_entrada));
    }

  	 /**
     * Create a New User
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
           //'codigo_entrada' => 'required|string|max:25',
            'descripcion_entrada' => 'string|max:255|nullable',
            'es_borrador' => 'required|boolean',
            'fecha_entrada' => 'required|date',
            'fecha_fabricacion' => 'required|date',
            'fecha_vencimiento' => 'required|date',
            'no_factura' => 'nullable|string|max:50',
            'orden_compra' => 'nullable|string|max:50',
            'no_lote' => 'required|string|max:50',
            'tipo_entrada' => 'required|array|min:1',
            'tipo_entrada.id_tipo_entrada' => 'required|integer|min:1',

            'bodega' => 'required|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',

            'zona' => 'required|array|min:1',
            'zona.id_centro' => 'required|integer|min:1',

            /*'proveedor' => 'required|array|min:1',
            'proveedor.id_proveedor' => 'required|integer|min:1',*/

            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
            'detalleProductos.*.productox.nombre_comercial' => 'required|string|max:100',
		];

		$validator = Validator::make($request->all(), $rules,$messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
			$entrada = new InventarioEntradas;
                $conf = session()->get('id_empresa');
            $entrada->codigo_entrada = InventarioEntradas::max('id_entrada')+1;
            //$entrada->codigo_entrada = InventarioEntradas::select(DB::raw('coalesce(max(codigo_entrada::integer),0)+1'))->first();

            $entrada->id_tipo_entrada = $request->tipo_entrada['id_tipo_entrada'];
            $entrada->fecha_entrada = $request->fecha_entrada;
            $entrada->fecha_fabricacion = $request->fecha_fabricacion;
            $entrada->fecha_vencimiento = $request->fecha_vencimiento;
            $entrada->id_proveedor = $request->proveedor['id_proveedor'];
            $entrada->id_bodega = $request->bodega['id_bodega'];
            $entrada->id_zona_costo = $request->zona['id_centro'];
            $entrada->descripcion_entrada = $request->descripcion_entrada;
            $entrada->orden_compra = $request->orden_compra;
            $entrada->no_lote = $request->no_lote;
            $entrada->no_factura = $request->no_factura;
			$entrada->u_creacion = Auth::user()->usuario;
			$entrada->id_empresa = $conf;
            $request->es_borrador == 'true' ? $entrada->estado = 99:  $entrada->estado = 1;
            $entrada->save();

			foreach ($request->detalleProductos as $producto) {
                $entrada_producto = new InventarioEntradaProductos;
                $bodega_sub = InventarioBodegaProductos::where('id_bodega',$request->bodega['id_bodega'])->where('id_producto',$producto['productox']['id_producto'])->where('id_presentacion',$producto['presentacionx']['id_presentacion'])->where('id_zona_costo', $request->zona['id_centro'])->where('no_lote',$entrada->no_lote)->get();
                if(!empty($bodega_sub[0])){
                $entrada_producto->id_bodega_producto = $bodega_sub[0]['id_bodega_producto'];
                }else{
                    $nueva_bodega_sub = new InventarioBodegaProductos;
                    $nueva_bodega_sub->id_bodega=$request->bodega['id_bodega'];
                    $nueva_bodega_sub->id_producto=$producto['productox']['id_producto'];
                    $nueva_bodega_sub->cantidad=$producto['cantidad'];
                    $nueva_bodega_sub->id_empresa=$conf;
                    $nueva_bodega_sub->id_presentacion = $producto['presentacionx']['id_presentacion'];
                    $nueva_bodega_sub->codigo_presentacion = $producto['presentacionx']['codigo'];
                    $nueva_bodega_sub->id_unidad_medida_presentacion = $producto['presentacionx']['id_unidad_medida_presentacion'];
                    $nueva_bodega_sub->id_unidad_medida_calculo = $producto['presentacionx']['id_unidad_medida_calculo'];
                    $nueva_bodega_sub->escalar = $producto['escalar'];
                    $nueva_bodega_sub->conversionx = $producto['conversionx'];
                    $nueva_bodega_sub->no_lote = $entrada->no_lote;
                    $nueva_bodega_sub->fecha_fabricacion = $entrada->fecha_fabricacion;
                    $nueva_bodega_sub->fecha_vencimiento = $entrada->fecha_vencimiento;
                    $nueva_bodega_sub->id_empresa = $conf;
                    $nueva_bodega_sub->u_creacion =$entrada->u_creacion;
                    $nueva_bodega_sub->id_zona_costo = $entrada->id_zona_costo;
                    $nueva_bodega_sub->save();
                    $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                }
				$entrada_producto->id_entrada = $entrada->id_entrada;
                $entrada_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                $entrada_producto->descripcion_producto = $producto['productox']['nombre_comercial'];
                $entrada_producto->unidad_medida = 'K';
                $entrada_producto->precio_unitario = 0;
                $entrada_producto->cantidad_solicitada = $producto['cantidad'];
                $entrada_producto->cantidad_recibida = 0;
                $entrada_producto->cantidad_faltante = 0;
                $entrada_producto->id_presentacion = $producto['presentacionx']['id_presentacion'];
                $entrada_producto->codigo_presentacion = $producto['presentacionx']['codigo'];
                $entrada_producto->id_unidad_medida_presentacion =  $producto['presentacionx']['id_unidad_medida_presentacion'];
                $entrada_producto->id_unidad_medida_calculo = $producto['presentacionx']['id_unidad_medida_calculo'];
                $entrada_producto->escalar = $producto['escalar'];
                $entrada_producto->conversionx = $producto['conversionx'];
                $entrada_producto->id_empresa = $conf;
                $entrada_producto->id_zona_costo = $entrada->id_zona_costo;
                $entrada_producto->u_creacion =$entrada->u_creacion;
				$entrada_producto->save();
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
        $messages = [
            'entrada_productos.min' => 'Se requiere agregar un producto por lo menos.',
            'entrada_productos.*.id_producto.required' => 'Seleccione un producto válido',
            'entrada_productos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'entrada_productos.*.cantidad_solicitada.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            'id_entrada' => 'required|integer|exists:pgsql.inventario.entradas,id_entrada',
            'es_borrador' => 'required|boolean',
            'fecha_entrada' => 'required|date',
            'descripcion_entrada' => 'string|max:255|nullable',
            //'numero_documento' => 'required|string|max:50',
            'entrada_tipo' => 'required|array|min:1',
            'entrada_tipo.id_tipo_entrada' => 'required|integer|min:1',

            'entrada_bodega' => 'required|array|min:1',
            'entrada_bodega.id_bodega' => 'required|integer|min:1',


            'entrada_proveedor' => 'required|array|min:1',
            'entrada_proveedor.id_proveedor' => 'required|integer|min:1',

            'entrada_productos' => 'required|array|min:1',
            'entrada_productos.*.id_bodega_producto' => 'required|integer|min:0',
            'entrada_productos.*.id_producto' => 'required_if:id_bodega_producto,0|integer|exists:pgsql.inventario.productos,id_producto',
            /*'entrada_productos.*.precio_unitario' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',*/
            'entrada_productos.*.cantidad_solicitada' => 'required|integer|min:1',
            'entrada_productos.*.codigo_producto' => 'required|string|max:50',
            'entrada_productos.*.descripcion_producto' => 'required|string|max:100',
           /* 'entrada_productos.*.unidad_medida' => 'required|string|max:50',*/

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{


                DB::beginTransaction();
                $entrada = InventarioEntradas::find($request->id_entrada);

                if($entrada->estado == 99){

                $entrada->id_tipo_entrada = $request->entrada_tipo['id_tipo_entrada'];
                $entrada->fecha_entrada = $request->fecha_entrada;
                $entrada->descripcion_entrada = $request->descripcion_entrada;
                $entrada->numero_documento;
                $entrada->id_proveedor = $request->entrada_proveedor['id_proveedor'];
                $entrada->id_bodega = $request->entrada_bodega['id_bodega'];
                $entrada->id_zona_costo = $request->entrada_zona['id_centro'];



                $request->es_borrador == 'true' ? $entrada->estado = 99:  $entrada->estado = 1;

                $entrada->save();

                InventarioEntradaProductos::where('id_entrada', $request->id_entrada)->delete();//update(['activo' => false]);


                foreach ($request->entrada_productos as $producto) {
                    $entrada_producto = new InventarioEntradaProductos;
                    if($producto['id_bodega_producto']==0){
                        if(!empty($producto['bodega_producto'])){
                            $bodega_sub = InventarioBodegaProductos::where('id_bodega',$request->entrada_bodega['id_bodega'])->where('id_producto',$producto['bodega_producto']['id_producto'])->where('id_presentacion',$producto['bodega_producto']['id_presentacion'])->where('no_lote',$producto['bodega_producto']['no_lote'])->where('id_zona_costo',$request->entrada_bodega['id_zona_costo'])->get();
                        }else{
                            $bodega_sub = InventarioBodegaProductos::where('id_bodega',$request->entrada_bodega['id_bodega'])->where('id_producto',$producto['id_producto'])->where('id_presentacion',$producto['id_presentacion'])->where('no_lote',$producto['bodega_producto']['no_lote'])->where('id_zona_costo',$request->entrada_bodega['id_zona_costo'])->get();
                        }

                    }else{
                    $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['id_bodega_producto'])->get();
                    }
                    if(!empty($bodega_sub[0])){
                        $entrada_producto->id_bodega_producto = $bodega_sub[0]['id_bodega_producto'];
                    }else{
                        $nueva_bodega_sub = new InventarioBodegaProductos;
                        $nueva_bodega_sub->id_bodega=$request->entrada_bodega['id_bodega'];
                        if($producto['id_bodega_producto']==0 && !empty($producto['bodega_producto'])){
                            $nueva_bodega_sub->id_producto=$producto['bodega_producto']['id_producto'];
                            $nueva_bodega_sub->id_presentacion=$producto['bodega_producto']['id_presentacion'];
                            $nueva_bodega_sub->no_lote=$producto['bodega_producto']['no_lote'];
                            $nueva_bodega_sub->id_zona_costo=$producto['bodega_producto']['id_zona_costo'];
                        }else{
                            $nueva_bodega_sub->id_producto=$producto['id_producto'];
                            $nueva_bodega_sub->id_presentacion=$producto['id_presentacion'];
                            $nueva_bodega_sub->no_lote=$producto['bodega_producto']['no_lote'];
                            $nueva_bodega_sub->id_zona_costo=$producto['bodega_producto']['id_zona_costo'];
                        }
                        $nueva_bodega_sub->cantidad=0;
                        $nueva_bodega_sub->u_creacion =$entrada->u_creacion;
                        $nueva_bodega_sub->save();
                        $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                    }
                    $entrada_producto->id_entrada = $entrada->id_entrada;
                    $entrada_producto->codigo_producto = $producto['codigo_producto'];
                    $entrada_producto->descripcion_producto = $producto['descripcion_producto'];
                    $entrada_producto->unidad_medida = $producto['unidad_medida'];
                    $entrada_producto->precio_unitario = 0;
                    $entrada_producto->cantidad_solicitada = $producto['cantidad_solicitada'];
                    $entrada_producto->cantidad_recibida = 0;
                    $entrada_producto->cantidad_faltante = 0;
                    $entrada_producto->id_presentacion = $producto['entrada_presentacion']['id_presentacion'];
                    $entrada_producto->codigo_presentacion = $producto['entrada_presentacion']['codigo'];
                    $entrada_producto->id_unidad_medida_presentacion =  $producto['entrada_presentacion']['id_unidad_medida_presentacion'];
                    $entrada_producto->id_unidad_medida_calculo = $producto['entrada_presentacion']['id_unidad_medida_calculo'];
                    $entrada_producto->escalar = $producto['escalar'];
                    $entrada_producto->conversionx = $producto['conversionx'];
                    $entrada_producto->id_zona_costo = $entrada->id_zona_costo;
                    $entrada_producto->u_creacion =$entrada->u_creacion;
                    $entrada_producto->save();

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
                        'result' => 'La entrada ha sido modificada previamente, no se pueden grabar los cambios',
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

    public function recibirCompra(Request $request)
    {
        $messages = [
            'entrada_productos.min' => 'Se requiere agregar un producto por lo menos.',
            'entrada_productos.*.id_producto.required' => 'Seleccione un producto válido',
            'entrada_productos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'entrada_productos.*.cantidad_solicitada.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            'id_entrada' => 'required|integer|exists:pgsql.inventario.entradas,id_entrada',
            'entrada_productos' => 'required|array|min:1',
            'entrada_productos.*.id_entrada_producto' => 'required|integer|min:1|exists:pgsql.inventario.entradas_productos,id_entrada_producto',
            'entrada_productos.*.id_bodega_producto' => 'required|integer|min:1|exists:pgsql.inventario.bodegas_productos,id_bodega_producto',
            'entrada_productos.*.cantidad_solicitada' => 'required|integer|min:1',
            'entrada_productos.*.cantidad_faltante' => 'required|integer|min:0|lte:entrada_productos.*.cantidad_solicitada',
            'entrada_productos.*.cantidad_recibida' => 'required|integer|min:1|lte:entrada_productos.*.cantidad_solicitada',

            'detalle_baterias' => 'nullable|required_if:contiene_baterias,true|array|min:0',
            'detalle_baterias.*.codigo_garantiax' => 'nullable|required_if:contiene_baterias,true|string|max:50|unique:pgsql.inventario.baterias,codigo_garantia',
            'detalle_baterias.*.fecha_activacion' => 'nullable|required_if:contiene_baterias,true|string|min:5|max:5',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                $conf = session()->get('id_empresa');
                DB::beginTransaction();
                $entrada = InventarioEntradas::find($request->id_entrada);
                if($entrada->estado == 1){
                $entrada->fecha_recepcion=date("Y-m-d H:i:s");
                $entrada->u_recepcion=Auth::user()->usuario;
                $entrada->estado=2;
                $entrada->save();

                foreach ($request->entrada_productos as $producto) {
                    $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['id_bodega_producto'])->first();
                    // print_r($bodega_sub);
                    $bodega_sub->cantidad = $bodega_sub->cantidad+$producto['cantidad_recibida'];
                    $bodega_sub->save();

                    $entrada_producto = InventarioEntradaProductos::find($producto['id_entrada_producto']);
                    $entrada_producto->cantidad_recibida = $producto['cantidad_recibida'];
                    $entrada_producto->cantidad_faltante = $producto['cantidad_faltante'];
                    $entrada_producto->save();


                    if($request->contiene_baterias){
                    foreach ($request->detalle_baterias as $bateria) {

                        if($bateria['productox']['id_producto'] == $bodega_sub->id_producto){

                            $bateria_individual = new InventarioBaterias();
                            $bateria_individual->id_producto = $bateria['productox']['id_producto'];
                            $bateria_individual->id_bodega_inicial = $entrada->id_bodega;
                            $bateria_individual->id_bodega_actual = $entrada->id_bodega;
                            $bateria_individual->codigo_barras = $bateria['productox']['codigo_barra'];
                            //if($bateria['productox']['id_marca']==2){
                            //    $bateria_individual->codigo_garantia = 1000+InventarioBaterias::max('id_bateria')+1;
                            //}else{
                                $bateria_individual->codigo_garantia = $bateria['codigo_garantiax'];
                            //}

                            $bateria_individual->fecha_activacion = $bateria['fecha_activacion'];
                            $bateria_individual->fecha_ingreso = $entrada->fecha_recepcion;
                            $bateria_individual->estado = 1;//Disponible
                            $bateria_individual->save();

                            $entrada_baterias = new InventarioEntradaProductoBaterias();
                            $entrada_baterias->id_bateria = $bateria_individual->id_bateria;
                            $entrada_baterias->id_entrada_producto = $entrada_producto->id_entrada_producto;
                            $entrada_baterias->save();
                        }
                    }
                    }


                    $movimiento_producto = new InventarioMovimientosProductos();
                    $movimiento_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                    $movimiento_producto->fecha_movimiento = date("Y-m-d H:i:s");
                    $movimiento_producto->descripcion_movimiento = $request->entrada_tipo['descripcion'].' No. '.$entrada->codigo_entrada;
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
                    $movimiento_producto->save();

                }



                    /*crear codigos de productos usados*/
                    if( $entrada->id_compra_usado == 8){
                        $compra_usado = ComprasBateriasUsadas::where('id_entrada',$entrada->id_entrada)
                            ->with(['compraUsadosProductos' => function($query) {
                                $query->with('compraBateriaProducto');
                            }])
                            ->first();
                        foreach ($compra_usado->compraUsadosProductos as $bateria) {
                            for ($x = 1; $x <= $bateria->cantidad; $x++) {
                                $bateria_individual_usada = new InventarioBateriasUsadas();
                                $bateria_individual_usada->id_producto = $bateria['id_producto'];
                                $bateria_individual_usada->peso = $bateria['peso'];
                                $bateria_individual_usada->id_bodega_inicial = $entrada->id_bodega;
                                $bateria_individual_usada->id_bodega_actual = $entrada->id_bodega;

                                $bateria_individual_usada->id_compra_usado = $compra_usado->id_compra_usado;

                                /* codigo de bateria ya existe*/
                                $bateria_individual_usada_2 =  InventarioBateriasUsadas::select('secuencia')
                                    ->where('id_producto',$bateria_individual_usada->id_producto)
                                    ->where('peso',round($bateria_individual_usada->peso))->first();

                                if(!empty($bateria_individual_usada_2->secuencia)){
                                    $secuencia = $bateria_individual_usada_2->secuencia;
                                }else{
                                    $codigo_nuevo = $bateria_individual_usada
                                        ->obtenerCodigoBateria($bateria_individual_usada->id_producto);
                                    $secuencia=  $codigo_nuevo['secuencia'];
                                }

                                $str_length = 5;
                                $str = $bateria->compraBateriaProducto['codigo_sistema'] . '-' . substr("00000{$secuencia}", -$str_length);
                                $bateria_individual_usada->codigo_barras = $str;
                                $bateria_individual_usada->secuencia = $secuencia;
                                $bateria_individual_usada->fecha_ingreso = $entrada->fecha_recepcion;
                                $bateria_individual_usada->estado = 1;//bateria estado 1 disponible, 2 vendida, 3 perdida
                                $bateria_individual_usada->save();
                            }
                        }
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
                        'result' => 'La entrada ha sido modificada previamente, no se pueden grabar los cambios',
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

    public function recibir(Request $request)
    {
        $messages = [
            'entrada_productos.min' => 'Se requiere agregar un producto por lo menos.',
            'entrada_productos.*.id_producto.required' => 'Seleccione un producto válido',
            'entrada_productos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'entrada_productos.*.cantidad_solicitada.min' => 'La cantidad debe ser mayor que cero',
        ];

        $rules = [
            'id_entrada' => 'required|integer|exists:pgsql.inventario.entradas,id_entrada',
            'entrada_productos' => 'required|array|min:1',
            'entrada_productos.*.id_entrada_producto' => 'required|integer|min:1|exists:pgsql.inventario.entradas_productos,id_entrada_producto',
            'entrada_productos.*.id_bodega_producto' => 'required|integer|min:1|exists:pgsql.inventario.bodegas_productos,id_bodega_producto',
            'entrada_productos.*.cantidad_solicitada' => 'required|integer|min:1',
            'entrada_productos.*.cantidad_faltante' => 'required|integer|min:0|lte:entrada_productos.*.cantidad_solicitada',
            'entrada_productos.*.cantidad_recibida' => 'required|integer|min:1|lte:entrada_productos.*.cantidad_solicitada',

            'detalle_baterias' => 'nullable|required_if:contiene_baterias,true|array|min:0',
            'detalle_baterias.*.id_bateria' => 'nullable|required_if:contiene_baterias,true|integer|exists:pgsql.inventario.baterias,id_bateria',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                $conf = session()->get('id_empresa');
                DB::beginTransaction();
                $entrada = InventarioEntradas::find($request->id_entrada);
                if($entrada->estado == 1){
                $entrada->fecha_recepcion=$request->fecha_recepcion;//date("Y-m-d H:i:s");
                $entrada->u_recepcion=Auth::user()->usuario;
                $entrada->estado=2;
                $entrada->save();


                foreach ($request->entrada_productos as $producto) {
                    $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['id_bodega_producto'])->first();
                   // print_r($bodega_sub);
                    //restaurar unidades dependiendo tipo de entrada
                    //$tipos_entrada_nuevas = array(1, 2, 6, 7, 8);
                    //$tipos_entrada_recuperadas = array(5, 9);

                    /*if (in_array($entrada->id_tipo_entrada, $tipos_entrada_nuevas)) {
                        $bodega_sub->cantidad = $bodega_sub->cantidad + $producto['cantidad_recibida'];
                    }*/

                    //$bodega_sub->cantidad = $bodega_sub->cantidad + $producto['cantidad_recibida'];

                    if($entrada->condicion_productos==8){
                        $bodega_sub->cantidad_recuperadas = $bodega_sub->cantidad_recuperadas+$producto['cantidad_recibida'];
                    }elseif($entrada->condicion_productos==6){
                        $bodega_sub->cantidad_obsoletas = $bodega_sub->cantidad_obsoletas+$producto['cantidad_recibida'];
                    }else{
                        $bodega_sub->cantidad = $bodega_sub->cantidad+$producto['cantidad_recibida'];
                    }

                    $entrada_producto = InventarioEntradaProductos::find($producto['id_entrada_producto']);
                    $entrada_producto->cantidad_recibida = $producto['cantidad_recibida'];
                    $entrada_producto->cantidad_faltante = $producto['cantidad_faltante'];
                    $entrada_producto->save();

                    $bodega_sub->save();

                    $movimiento_producto = new InventarioMovimientosProductos();
                    $movimiento_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                    $movimiento_producto->fecha_movimiento = date("Y-m-d H:i:s");
                    $movimiento_producto->descripcion_movimiento = $request->entrada_tipo['descripcion'].' No. '.$entrada->codigo_entrada;
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
                    $movimiento_producto->id_zona_costo = $entrada_producto->id_zona_costo;
                    $movimiento_producto->id_empresa = $conf;
                    $movimiento_producto->save();

                }

                    /*crear codigos de productos usados*/
                    if( $entrada->id_tipo_entrada == 8){
                        $compra_usado = ComprasBateriasUsadas::where('id_entrada',$entrada->id_entrada)
                            ->with(['compraUsadosProductos' => function($query) {
                                $query->with('compraBateriaProducto');
                            }])
                            ->first();
                        foreach ($compra_usado->compraUsadosProductos as $bateria) {
                            for ($x = 1; $x <= $bateria->cantidad; $x++) {
                                $bateria_individual_usada = new InventarioBateriasUsadas();
                                $bateria_individual_usada->id_producto = $bateria['id_producto'];
                                $bateria_individual_usada->peso = $bateria['peso'];
                                $bateria_individual_usada->id_bodega_inicial = $entrada->id_bodega;
                                $bateria_individual_usada->id_bodega_actual = $entrada->id_bodega;

                                $bateria_individual_usada->id_compra_usado = $compra_usado->id_compra_usado;

                                /* codigo de bateria ya existe*/
                                $bateria_individual_usada_2 =  InventarioBateriasUsadas::select('secuencia')
                                    ->where('id_producto',$bateria_individual_usada->id_producto)
                                    ->where('peso',round($bateria_individual_usada->peso))->first();

                                if(!empty($bateria_individual_usada_2->secuencia)){
                                    $secuencia = $bateria_individual_usada_2->secuencia;
                                }else{
                                    $codigo_nuevo = $bateria_individual_usada
                                        ->obtenerCodigoBateria($bateria_individual_usada->id_producto);
                                    $secuencia=  $codigo_nuevo['secuencia'];
                                }

                                $str_length = 5;
                                $str = $bateria->compraBateriaProducto['codigo_sistema'] . '-' . substr("00000{$secuencia}", -$str_length);
                                $bateria_individual_usada->codigo_barras = $str;
                                $bateria_individual_usada->secuencia = $secuencia;
                                $bateria_individual_usada->fecha_ingreso = $entrada->fecha_recepcion;
                                $bateria_individual_usada->estado = 1;//bateria estado 1 disponible, 2 vendida, 3 perdida
                                $bateria_individual_usada->save();
                            }
                        }
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
                        'result' => 'La entrada ha sido modificada previamente, no se pueden grabar los cambios',
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

    public function obtenerNumeroEntrada()
    {   
        $num['Numero'] = counter()->next('entrada');
       // $num['Fecha'] = date('Y-m-d');
        return response()->json([
            'status' => 'success',
            'result' => $num,
            'messages' => null
        ]);
    }

    public function crearEntradaPorDevolucion(Request $request)
	{ 
        $messages = [
            'entrada_original.entradas_productos.min' => 'Se requiere agregar un producto por lo menos.',
            'entrada_original.entradas_productos.required' => 'Se requiere agregar un producto por lo menos.',
            'entrada_original.entradas_productos.*.id_bodega_producto.required' => 'Seleccione un producto válido',
            'entrada_original.entradas_productos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'entrada_original.entradas_productos.*.cantidad_dev.min' => 'La cantidad debe ser mayor que cero',
            'entrada_original.entradas_productos.*.cantidad_dev.required' => 'La cantidad es requerida',
        ];

        $rules = [
		'entrada_original.codigo_entrada' => 'required',
		'entrada_original.fecha_entrada' => 'required',
		'entrada_original.id_tipo_entrada' => 'required',
		'entrada_original.id_bodega' => 'required',
        'entrada_original.id_proveedor' => 'required',
        'entrada_original.entradas_productos' => 'required|array|min:1',
        'entrada_original.entradas_productos.*.id_bodega_producto' => 'required|integer|exists:pgsql.inventario.bodegas_productos,id_bodega_producto',
        'entrada_original.entradas_productos.*.precio_unitario' => 'required|numeric|min:0.01',
        'entrada_original.entradas_productos.*.cantidad_dev' => 'required|numeric|min:1',
		];

		$validator = Validator::make($request->all(), $rules,$messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
			$entradaPorDevolucion = new InventarioEntradas;
            $entradaPorDevolucion->codigo_entrada = counter()->next('entrada_devolucion').'-'.$request->entrada_original['codigo_entrada'];
			$entradaPorDevolucion->id_tipo_entrada = 2;
			$entradaPorDevolucion->fecha_entrada = $request->entrada_original['fecha_entrada'];
			$entradaPorDevolucion->id_proveedor = $request->entrada_original['id_proveedor'];
			$entradaPorDevolucion->id_bodega = $request->entrada_original['id_bodega'];
            $entradaPorDevolucion->usuario_registra = Auth::user()->usuario;
            $entradaPorDevolucion->id_entrada_dev = $request->entrada_original['id_entrada'];
            $entradaPorDevolucion->estado = 1;

            date_default_timezone_set('America/Managua');
            $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
            $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
            $log['fecha_log'] = $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') .' a las '.date('h:i:s A');
            $log['registro'] = 'Registro de entrada por devolución en sistema por '.$entradaPorDevolucion->usuario_registra;
            $entradaPorDevolucion->log_entrada = '['.json_encode($log).']'; 

            $entradaPorDevolucion->save();
            counter()->increment('entrada_devolucion');

            //print_r($entradaPorDevolucion);
            //print_r($request->entrada_original['entradas_productos']);
            $unidadesDiferencia = 0;
			foreach ($request->entrada_original['entradas_productos'] as $producto) {

                if($producto['cantidad_dev']>0){

                $entrada_productoPorDevolucion = new InventarioEntradaProductos;
                $entrada_productoPorDevolucion->id_bodega_producto = $producto['id_bodega_producto'];
				$entrada_productoPorDevolucion->id_entrada = $entradaPorDevolucion->id_entrada;
                $entrada_productoPorDevolucion->descripcion_producto = $producto['descripcion_producto'];
                $entrada_productoPorDevolucion->codigo_producto = $producto['codigo_producto'];
                $entrada_productoPorDevolucion->unidad_medida = $producto['unidad_medida'];
                $entrada_productoPorDevolucion->precio_unitario = $producto['precio_unitario'];
                $entrada_productoPorDevolucion->cantidad = $producto['cantidad_dev']*-1;
                $entrada_productoPorDevolucion->cantidad_faltante = 0;
                $entrada_productoPorDevolucion->id_entrada_producto_dev = $producto['id_entrada_producto'];
                $entrada_productoPorDevolucion->save();

                $entrada_productoOriginal = InventarioEntradaProductos::findOrFail($producto['id_entrada_producto']);
                $entrada_productoOriginal->cantidad_faltante = $entrada_productoOriginal->cantidad_faltante + $producto['cantidad_dev'];
                $unidadesDiferencia = $unidadesDiferencia + $entrada_productoOriginal->cantidad - $entrada_productoOriginal->cantidad_faltante;
                $entrada_productoOriginal->save();
            }
               //print_r($entrada_producto);
            }
            
            $entradaOriginal = InventarioEntradas::findOrFail($request->entrada_original['id_entrada']);
            $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
            $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
            $log['fecha_log'] = $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') .' a las '.date('h:i:s A');
            $log['registro'] = 'Se ha registrado una devolución para esta entrada con código: '. $entradaPorDevolucion->codigo_entrada.' por el usuario '.Auth::user()->usuario; 
               
            $log_actual = Array(json_decode($entradaOriginal->log_entrada));
            array_push($log_actual[0],$log);
            $entradaOriginal->log_entrada = json_encode($log_actual[0]);
            $entradaOriginal->save();

           /* $entradaPorDevolucionChS = InventarioEntradas::findOrFail( $entradaPorDevolucion->id_entrada);
            $entradaPorDevolucionChS->estado = 2;
            $entradaPorDevolucionChS->save();
            */
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
     * Cambiar Estado Entrada
     *
     * @access 	public
     * @param 	
     * @return 	json(string)
     */

	public function cambiarEstado(Request $request)
	{ 
        
        $rules = [
            'id_entrada' => 'required',
            'estado' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $entrada = InventarioEntradas::find($request->id_entrada);
            if($entrada->es_editable && $request->estado >= 0 && $request->estado <= 2 && $entrada->estado <> $request->estado){

            $estado_org = $entrada->estado;
            $entrada->estado = $request->estado;

            if($request->estado==0 || $request->estado==2){
            $entrada->es_editable = 0 ;
            }

            $estados[0] = 'Cancelada';
            $estados[1] = 'Emitida';
            $estados[2] = 'Aprobada';

            date_default_timezone_set('America/Managua');
            $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
            $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
            $log['fecha_log'] = $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') .' a las '.date('h:i:s A');
            $log['registro'] = 'Cambiado el estado de la entrada de '. $estados[$estado_org].' a estado '.$estados[$request->estado].' por usuario '.Auth::user()->usuario; 
            $log_actual = Array(json_decode($entrada->log_entrada));
           // print_r($log);
           // print_r($log_actual[0]);
            array_push($log_actual[0],$log);
            $entrada->log_entrada = json_encode($log_actual[0]);
           // echo $entrada->log_entrada;
            $entrada->save();

            return response()->json([
                'status' => 'success',
                'result' => null,
                'messages' => null
            ]);
        }else{
            return response()->json([
                'status' => 'error',
                'result' => 'Error al cambiar el estado de la entrada, revise si la entrada esta bloqueada',
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

