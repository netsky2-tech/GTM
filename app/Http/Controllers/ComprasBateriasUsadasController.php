<?php 

namespace App\Http\Controllers;


use App\AdmonUsuarios;
use App\Models\AdmonAjustes;
use App\Models\ComprasBateriasUsadas;

use App\Models\ComprasOrdenCompraProductos;
use App\Models\ComprasSolicitudCompra;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\CuentasXPagarCuentasXPagar;
use App\Models\InventarioBodegaProductos;
use App\Models\InventarioBodegas;
use App\Models\InventarioConfiguracion;
use App\Models\InventarioEntradaProductos;
use App\Models\InventarioEntradas;
use App\Models\InventarioProductos;
use App\Models\InventarioProveedores;
use App\Models\InventarioSalidaProductos;
use App\Models\InventarioSalidas;
use App\Models\RRHHTrabajadores;
use App\Models\VentaVendedores;
use Hash, Validator,Auth,DateTime;
use App\Models\ComprasBateriasUsadasProductos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;

class ComprasBateriasUsadasController extends Controller
{

    public function obtener(Request $request, ComprasBateriasUsadas $ordenes)
    {
        $ordenes = $ordenes->obtener($request);

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $ordenes->total(), 
                'rows' => $ordenes->items()
            ],
            'messages' => null
        ]);
	}

    public function nueva(Request $request)
    {
        $proveedores = InventarioProveedores::where('id_tipo_proveedor',2)->where('activo', 1)->orderby('id_proveedor')->select('id_proveedor','tipo_persona','nombre_comercial','numero_ruc','numero_cedula')->get();
        $bodegas = InventarioBodegas::where('activo', 1)->where('id_tipo_bodega',3)->get();
        $bodegas_garantia = InventarioBodegas::where('activo', 1)->where('id_tipo_bodega',4)->get();
        $productos = InventarioProductos::
        select(['inventario.productos.id_producto','codigo_barra','codigo_consecutivo','inventario.baterias_detalles.bci','codigo_sistema','condicion','costo_estandar','descripcion',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text")])
         ->leftJoin('inventario.baterias_detalles', 'inventario.baterias_detalles.id_producto','inventario.productos.id_producto')
            ->where('activo', 1)->whereIn('tipo_producto', array(3))->where('condicion',2)->orderBy('descripcion', 'asc')
            ->get();
        $precio_compra_usado = InventarioConfiguracion::where('id_configuracion',1)->select('valor')->first();
        $vendedores = VentaVendedores::select(['id_vendedor','nombre_completo','id_zona'])->get();

        $trabajador_actual = AdmonUsuarios::select('id_empleado')->where('usuario',Auth::user()->usuario)->first();
        $vendedor_actual = VentaVendedores::select(['id_vendedor','nombre_completo','id_zona'])->where('id_trabajador',$trabajador_actual['id_empleado'])->where('activo',true)->first();

        return response()->json([
                'status' => 'success',
                'result' => [
                    'proveedores' => $proveedores,
                    'bodegas' => $bodegas,
                    'bodegas_garantia' => $bodegas_garantia,
                    'productos' => $productos,
                    'precio_compra_usado' => $precio_compra_usado['valor'],
                    'vendedores'=>$vendedores,
                    'vendedor_actual'=>$vendedor_actual
                ],
                'messages' => null
            ]);
    }


	public function registrar(Request $request)
	{

        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];


    	$rules = [


            'fecha_compra' => 'required|date',

            'mt_subtotal' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'mt_retencion' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'mt_retencion_imi' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',

            'id_proveedor' =>'required|integer|min:0',
            'tipo_persona' => 'required|integer|min:1|max:2',
            'numero_ruc' => [
                'nullable',
                'required_if:tipo_persona,2',
                'string',
                'max:14',
                Rule::unique('pgsql.inventario.proveedores')->ignore($request->id_proveedor,'id_proveedor')],

            'numero_cedula' => [
                'nullable',
                'required_if:tipo_persona,1',
                'string',
                'max:14',
                Rule::unique('pgsql.inventario.proveedores')->ignore($request->id_proveedor,'id_proveedor')],
            'nombre_proveedor' => 'required|string|max:100',

            'bodega' => 'nullable|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',

            'numero_recibo' => 'required|integer|min:1',
            'serie' => 'required|string|max:2',

            'vendedor' => 'nullable|array|min:1',
            'vendedor.id_vendedor' => 'required|integer|min:1',

            'aplicaIR'=> 'required|boolean',
            'aplicaIMI'=> 'required|boolean',
            'doc_exoneracion_ir' => 'required_if:aplicaIR,true|string|max:20|nullable',
            'doc_exoneracion_imi' => 'required_if:aplicaIMI,true|string|max:20|nullable',


            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'detalleProductos.*.peso'  => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.subtotal'  => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',

		];

		$validator = Validator::make($request->all(), $rules,$messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
           $compra_usado = new ComprasBateriasUsadas;

			if($request->id_proveedor==0){
			    /*crear nuevo proveedor*/

                $proveedor = new InventarioProveedores;
                $proveedor->direccion = '';
                $proveedor->contacto_proveedor = $request->nombre_proveedor;
                $proveedor->tipo_persona = $request->tipo_persona;

                if( $request->numero_ruc == null){
                    $proveedor->numero_ruc = '';
                }else{
                    $proveedor->numero_ruc = $request->numero_ruc;
                }

                $codigo_nuevo = $proveedor->obtenerCodigoProveedor(2);
                $proveedor->codigo = $codigo_nuevo['secuencia'];
                $proveedor->razon_social = $request->nombre_proveedor;
                $proveedor->clasificacion_contable = 1; //tipo proveedor
                $proveedor->id_tipo_proveedor = 2;//proveedor bateria usadas

                $proveedor->id_municipio = 83;
                $proveedor->numero_cedula = $request->numero_cedula;
                $proveedor->nombre_comercial = $request->nombre_proveedor;
                $proveedor->telefono = '';
                $proveedor->telefono_contacto = '';
                $proveedor->correo_contacto = '';
                $proveedor->paguese_a = $request->nombre_proveedor;

                $proveedor->observaciones = '';
                $proveedor->plazo_credito = 0;
                $proveedor->es_extranjero = false;

                $proveedor->u_creacion = Auth::user()->usuario;
                $proveedor->activo = 1;
                $proveedor->save();

                $compra_usado->id_proveedor = $proveedor->id_proveedor;

            }else{
                $compra_usado->id_proveedor = $request->id_proveedor;
            }

            $compra_usado->id_bodega = $request->bodega['id_bodega'];
            $compra_usado->id_vendedor = $request->vendedor['id_vendedor'];

            $compra_usado->nombre_proveedor = $request->nombre_proveedor;
            $compra_usado->numero_ruc = $request->numero_ruc;
            $compra_usado->numero_cedula = $request->numero_cedula;
            $compra_usado->fecha_compra = $request->fecha_compra;

            $compra_usado->mt_subtotal = $request->mt_subtotal;
            $compra_usado->mt_retencion = $request->mt_retencion;
            $compra_usado->mt_retencion_imi = $request->mt_retencion_imi;
            $compra_usado->mt_total = $request->total;

            $compra_usado->doc_exoneracion_ir = $request->doc_exoneracion_ir;
            $compra_usado->doc_exoneracion_imi = $request->doc_exoneracion_imi;

            //$codigo_nuevo = $compra_usado->obtenerCodigoCompraUsado();
            $compra_usado->serie =   $request->serie;
            $compra_usado->consecutivo =   $request->numero_recibo;
            $compra_usado->codigo_compra =  $request->serie.'-'.$request->numero_recibo;

			$compra_usado->u_creacion = Auth::user()->usuario;
            $compra_usado->estado = 1;
            $compra_usado->save();


                $entrada = new InventarioEntradas;
                $entrada->codigo_entrada = InventarioEntradas::max('id_entrada') + 1;
                $entrada->id_tipo_entrada = 8;//tipo compra de usado
                $entrada->fecha_entrada = date('Y-m-d');
                $entrada->id_proveedor = $compra_usado->id_proveedor;
                $entrada->id_bodega = $compra_usado->id_bodega ;
                $entrada->descripcion_entrada = 'Registramos entrada de productos por Compra de Baterias Usadas, Recibo No. ' . $compra_usado->codigo_compra;
                $entrada->u_creacion = Auth::user()->usuario;;
                $entrada->estado = 1;
                $entrada->productos_usados = true;
                $entrada->save();

                $compra_usado->id_entrada = $entrada->id_entrada;
                $compra_usado->save();


            $i = 1;
			foreach ($request->detalleProductos as $producto) {
                $compra_producto = new ComprasBateriasUsadasProductos;
                $compra_producto->numero_item = $i;
				$compra_producto->id_compra_usado = $compra_usado->id_compra_usado;
                $compra_producto->id_producto = $producto['productox']['id_producto'];
                $compra_producto->precio = $producto['precio'];
                $compra_producto->cantidad = $producto['cantidad'];
                $compra_producto->peso = $producto['peso'];
                $compra_producto->subtotal = $producto['subtotal'];
				$compra_producto->save();
				$i++;
                $entrada_producto = new InventarioEntradaProductos();
                $bodega_sub = InventarioBodegaProductos::where('id_bodega', $entrada->id_bodega)->where('id_producto', $compra_producto->id_producto)->first();
                if (!empty($bodega_sub)) {
                    $entrada_producto->id_bodega_producto = $bodega_sub['id_bodega_producto'];
                } else {
                    $nueva_bodega_sub = new InventarioBodegaProductos;
                    $nueva_bodega_sub->id_bodega = $entrada->id_bodega;
                    $nueva_bodega_sub->id_producto = $compra_producto->id_producto;
                    $nueva_bodega_sub->cantidad = 0;
                    $nueva_bodega_sub->u_creacion = $entrada->u_creacion;
                    $nueva_bodega_sub->save();
                    $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                }

               /* $orden_producto = ComprasOrdenCompraProductos::find($producto['id_orden_compra_producto']);
                $orden_producto->id_entrada_producto = $entrada_producto->id_entrada_producto;
                $orden_producto->save();*/

                    $productoExiste = InventarioEntradaProductos::where('id_bodega_producto',$entrada_producto->id_bodega_producto)
                        ->where('id_entrada',$entrada->id_entrada)->first();
                    if(!$productoExiste){
                        $entrada_producto->id_entrada = $entrada->id_entrada;
                        $entrada_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                        $entrada_producto->descripcion_producto = $producto['productox']['descripcion'];
                        $entrada_producto->unidad_medida = 'KG';
                        $entrada_producto->precio_unitario = $producto['precio'];
                        $entrada_producto->cantidad_solicitada = (int)$producto['cantidad'];
                        $entrada_producto->cantidad_recibida = 0;
                        $entrada_producto->cantidad_faltante = 0;
                        $entrada_producto->u_creacion = $entrada->u_creacion;
                        $entrada_producto->save();
                    }else{
                        $productoExiste->cantidad_solicitada = $productoExiste->cantidad_solicitada + (int)$producto['cantidad'];
                        $productoExiste->save();
                    }
			}

			/* cuentas por pagar a proveedores */

			/*inicia comprobante contable*/




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



    public function registrarReciboGarantia(Request $request)
    {

        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.producto_garantiax.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
        ];


        $rules = [


            'fecha_compra' => 'required|date',

            'mt_subtotal' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'mt_retencion' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'mt_retencion_imi' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',

            'id_proveedor' =>'required|integer|min:1',
            'tipo_persona' => 'required|integer|min:1|max:2',
            'numero_ruc' => [
                'nullable',
                'required_if:tipo_persona,2',
                'string',
                'max:14',
                //Rule::unique('pgsql.inventario.proveedores')->ignore($request->id_proveedor,'id_proveedor')
                ],

            'numero_cedula' => [
                'nullable',
                'required_if:tipo_persona,1',
                'string',
                'max:14',
               // Rule::unique('pgsql.inventario.proveedores')->ignore($request->id_proveedor,'id_proveedor')
                ],
            'nombre_proveedor' => 'required|string|max:100',

            'bodega' => 'nullable|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',

            'bodega_garantia' => 'nullable|array|min:1',
            'bodega_garantia.id_bodega' => 'required|integer|min:1',

            'vendedor' => 'nullable|array|min:1',
            'vendedor.id_vendedor' => 'required|integer|min:1',

            'aplicaIR'=> 'required|boolean',
            'aplicaIMI'=> 'required|boolean',
            'doc_exoneracion_ir' => 'required_if:aplicaIR,true|string|max:20|nullable',
            'doc_exoneracion_imi' => 'required_if:aplicaIMI,true|string|max:20|nullable',
            'numero_recibo' => 'required|integer|min:1',
            'serie' => 'required|string|max:2',

            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.producto_garantiax.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'detalleProductos.*.peso'  => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.subtotal'  => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $compra_usado = new ComprasBateriasUsadas;
                $compra_usado->id_proveedor = $request->id_proveedor;


                $compra_usado->id_bodega = $request->bodega['id_bodega'];
                $compra_usado->id_vendedor = $request->vendedor['id_vendedor'];


                $compra_usado->nombre_proveedor = $request->nombre_proveedor;
                $compra_usado->numero_ruc = $request->numero_ruc;
                $compra_usado->numero_cedula = $request->numero_cedula;
                $compra_usado->fecha_compra = $request->fecha_compra;

                $compra_usado->mt_subtotal = $request->mt_subtotal;
                $compra_usado->mt_retencion = $request->mt_retencion;
                $compra_usado->mt_retencion_imi = $request->mt_retencion_imi;
                $compra_usado->mt_total = $request->total;

                $compra_usado->doc_exoneracion_ir = $request->doc_exoneracion_ir;
                $compra_usado->doc_exoneracion_imi = $request->doc_exoneracion_imi;

                //$codigo_nuevo = $compra_usado->obtenerCodigoCompraUsado();
                $compra_usado->serie =   $request->serie;
                $compra_usado->consecutivo =   $request->numero_recibo;
                $compra_usado->codigo_compra =  $request->serie.'-'.$request->numero_recibo;

                $compra_usado->u_creacion = Auth::user()->usuario;
                $compra_usado->estado = 1;
                $compra_usado->save();

                $entrada = new InventarioEntradas;
                $entrada->codigo_entrada = InventarioEntradas::max('id_entrada') + 1;
                $entrada->id_tipo_entrada = 8;//tipo compra de usado
                $entrada->fecha_entrada = date('Y-m-d');
                $entrada->id_proveedor = $compra_usado->id_proveedor;
                $entrada->id_bodega = $compra_usado->id_bodega ;
                $entrada->descripcion_entrada = 'Registramos entrada de productos por Compra de Baterias Usadas, Recibo No. ' . $compra_usado->codigo_compra;
                $entrada->u_creacion = Auth::user()->usuario;;
                $entrada->estado = 1;
                $entrada->productos_usados = true;
                $entrada->save();

                $salida = new InventarioSalidas;
                $salida->codigo_salida = InventarioSalidas::max('id_salida')+1;
                $salida->id_tipo_salida = 11;//Salida por auto compra de usado
                $salida->condicion_productos = 3;//productos en garantia
                $salida->id_cliente = null;
                $salida->fecha_salida = $entrada->fecha_entrada;
                $salida->id_bodega = $request->bodega_garantia['id_bodega'];;
                $salida->descripcion_salida = 'Salida por Traslado de baterías en garantía a usadas No. Recibo '. $compra_usado->codigo_compra;
                $salida->u_creacion = $entrada->u_creacion;
                $salida->estado = 1;
                $salida->save();

                $compra_usado->id_entrada = $entrada->id_entrada;
                $compra_usado->save();


                $i = 1;
                foreach ($request->detalleProductos as $producto) {
                    $compra_producto = new ComprasBateriasUsadasProductos;
                    $compra_producto->numero_item = $i;
                    $compra_producto->id_compra_usado = $compra_usado->id_compra_usado;
                    $compra_producto->id_producto = $producto['productox']['id_producto'];
                    $compra_producto->precio = $producto['precio'];
                    $compra_producto->cantidad = $producto['cantidad'];
                    $compra_producto->peso = $producto['peso'];
                    $compra_producto->subtotal = $producto['subtotal'];
                    $compra_producto->save();
                    $i++;

                    /*ENTRADA DE BATERIAS USADAS*/
                    $entrada_producto = new InventarioEntradaProductos();
                    $bodega_sub = InventarioBodegaProductos::where('id_bodega', $entrada->id_bodega)->where('id_producto', $compra_producto->id_producto)->first();
                    if (!empty($bodega_sub)) {
                        $entrada_producto->id_bodega_producto = $bodega_sub['id_bodega_producto'];
                    } else {
                        $nueva_bodega_sub = new InventarioBodegaProductos;
                        $nueva_bodega_sub->id_bodega = $entrada->id_bodega;
                        $nueva_bodega_sub->id_producto = $compra_producto->id_producto;
                        $nueva_bodega_sub->cantidad = 0;
                        $nueva_bodega_sub->u_creacion = $entrada->u_creacion;
                        $nueva_bodega_sub->save();
                        $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                    }

                    /*SALIDA DE BATERIAS EN GARANTIA*/
                    $salida_producto = new InventarioSalidaProductos;
                    $bodega_sub_salida = InventarioBodegaProductos::where('id_bodega_producto',$producto['producto_garantiax']['id_bodega_producto'])->first();
                    if(($bodega_sub_salida->cantidad-$producto['cantidad'])>=0){
                        $bodega_sub_salida->cantidad = $bodega_sub_salida->cantidad-$producto['cantidad'];
                    }else{
                        //$producto['cantidad'] = $bodega_sub->cantidad;
                        //$bodega_sub->cantidad = 0;
                        DB::rollBack();
                        return response()->json([
                            'status' => 'error',
                            'result' => array('detalleProductos.'.$i.'.cantidad'=>['La cantidad solicitada para este producto no esta disponible']),
                            'messages' => null
                        ]);
                    }
                    $bodega_sub_salida->save();

                    /* $orden_producto = ComprasOrdenCompraProductos::find($producto['id_orden_compra_producto']);
                     $orden_producto->id_entrada_producto = $entrada_producto->id_entrada_producto;
                     $orden_producto->save();*/

                    $productoExiste = InventarioEntradaProductos::where('id_bodega_producto',$entrada_producto->id_bodega_producto)
                        ->where('id_entrada',$entrada->id_entrada)->first();
                    if(!$productoExiste){
                        $entrada_producto->id_entrada = $entrada->id_entrada;
                        $entrada_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                        $entrada_producto->descripcion_producto = $producto['productox']['descripcion'];
                        $entrada_producto->unidad_medida = 'KG';
                        $entrada_producto->precio_unitario = $producto['precio'];
                        $entrada_producto->cantidad_solicitada = (int)$producto['cantidad'];
                        $entrada_producto->cantidad_recibida = 0;
                        $entrada_producto->cantidad_faltante = 0;
                        $entrada_producto->u_creacion = $entrada->u_creacion;
                        $entrada_producto->save();
                    }else{
                        $productoExiste->cantidad_solicitada = $productoExiste->cantidad_solicitada + (int)$producto['cantidad'];
                        $productoExiste->save();
                    }

                    $productoExisteSalida = InventarioSalidaProductos::where('id_bodega_producto',$bodega_sub_salida->id_bodega_producto)
                        ->where('id_salida',$salida->id_salida)->first();
                    if(!$productoExisteSalida){
                        $salida_producto->id_bodega_producto = $bodega_sub_salida->id_bodega_producto;
                        $salida_producto->id_salida = $salida->id_salida;
                        $salida_producto->descripcion_producto = $producto['producto_garantiax']['descripcion'];
                        $salida_producto->codigo_producto = $producto['producto_garantiax']['codigo_sistema'];
                        $salida_producto->unidad_medida = $producto['producto_garantiax']['unidad_medida'];
                        $salida_producto->precio_unitario = $producto['precio'];
                        $salida_producto->cantidad_saliente = (int)$producto['cantidad'];
                        $salida_producto->cantidad_despachada = 0;
                        $salida_producto->cantidad_faltante = 0;
                        $salida_producto->u_creacion = $salida->u_creacion;
                        $salida_producto->save();
                    }else{
                        $productoExisteSalida->cantidad_saliente = $productoExisteSalida->cantidad_saliente + (int)$producto['cantidad'];
                        $productoExisteSalida->save();
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



    public function anular(Request $request)
    {

        $messages = [
        ];


        $rules = [
            'id_compra_usado' => 'required|integer',
            'causa_anulacion' => 'required|string|max:100',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $compra_usado = ComprasBateriasUsadas::find($request->id_compra_usado);
                $compra_usado->estado = 0;
                $compra_usado->causa_anulacion = $request->causa_anulacion;


                if(!empty($compra_usado->id_entrada)){
                    $entrada = InventarioEntradas::find($compra_usado->id_entrada);
                    if($entrada->estado == 1){
                        $entrada->estado = 0;
                        $entrada->save();
                        $compra_usado->save();
                    }elseif($entrada->estado == 2){
                        DB::rollBack();
                        return response()->json([
                            'status' => 'error',
                            'result' => 'No se puede actualizar la entrada, ya fue recibida',
                            'messages' => null
                        ]);
                    }
                }else{
                    return response()->json([
                        'status' => 'error',
                        'result' => 'Error encontrando recibo',
                        'messages' => null
                    ]);
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
    public function generarReporte(Request $request)
    {
        // echo $ext;
        $rules = [
            'id_compra_usado' => 'required|integer|min:0',
            'extension' => 'required|string|max:4',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();

                $input = '/var/www/html/resources/reports/ReporteReciboCompraUsado';
                $output = '/var/www/html/resources/reports/' .$hora_actual .'ReporteReciboCompraUsado';

                //$input = 'C:/xampp7/htdocs/resources/reports/ReporteReciboCompraUsado';
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual .'ReporteReciboCompraUsado';


                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = 'C:/xampp7/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_compra_usadox' => $request->id_compra_usado,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteNotaDebito'.'.' . $request->extension, $headers);

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


    public function generarReporteCodigos(Request $request)
    {
        // echo $ext;
        $rules = [
            'id_entrada' => 'required|integer|min:0',
            'extension' => 'required|string|max:4',
        ];

        $validator = Validator::make($request->all(), $rules);

        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();

                $input = '/var/www/html/resources/reports/ReporteCodigosBateriaUsados';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'ReporteCodigosBateriaUsados';

                //$input = 'C:/xampp7/htdocs/resources/reports/ReporteCodigosBateriaUsados';
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'ReporteCodigosBateriaUsados';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = 'C:/xampp7/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_entradax' => $request->id_entrada,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteCodigosBateriaUsados.' . $request->extension, $headers);

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

