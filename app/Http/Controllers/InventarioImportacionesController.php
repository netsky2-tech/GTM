<?php 

namespace App\Http\Controllers;

use App\Models\ComprasOrdenCompra;

use App\Models\ContabilidadCuentasContables;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\InventarioBodegaProductos;
use App\Models\InventarioBodegas;
use App\Models\InventarioEntradaProductos;
use App\Models\InventarioEntradas;
use App\Models\InventarioImportacionConfiguracion;
use App\Models\InventarioImportacionOrdenesCompra;
use App\Models\InventarioProductos;
use App\Models\InventarioProveedores;
use DateTime;
use Hash, Validator,Auth;

use App\Models\InventarioImportacionProductos;
use App\Models\InventarioImportaciones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class InventarioImportacionesController extends Controller
{
	/**
     * Get List of Importaciones
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioImportaciones $importaciones)
    {
        $importaciones = $importaciones->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $importaciones->total(),
                'rows' => $importaciones->items()
            ],
            'messages' => null
        ]);
	}
	
		/**
     * Get List of Importaciones
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerImportacion(Request $request, InventarioImportaciones $importacion)
    {
		$rules = [
            'id_importacion' => 'required|integer|min:1'
		];
	

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
		  
           $importacion = $importacion->obtenerImportacion($request);
           $proveedores = InventarioProveedores::where('activo', 1)->orderby('id_proveedor')->select('id_proveedor','nombre_comercial','numero_ruc','numero_cedula')->get();
            $productos = InventarioProductos::where('activo', 1)->whereIn('tipo_producto',array(1,3))->with('unidadMedida')->with('impuestoProducto')->with('productoDetallesBaterias')->orderby('id_producto')->get();
            $bodegas =InventarioBodegas::where('activo', 1)->select('id_bodega','descripcion')->get();
            if(!empty($importacion[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'bodegas'=>$bodegas,
                        'productos' => $productos,
                        'proveedores' => $proveedores,
                        'importacion' => $importacion[0],
                    ],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_importacion'=>["Datos no encontrados"]),
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


    public function nueva(Request $request)
    {
        $proveedores = InventarioProveedores::where('activo', 1)->orderby('id_proveedor')->select('id_proveedor','nombre_comercial','numero_ruc','numero_cedula')->get();
        $productos = InventarioProductos::where('activo', 1)->whereIn('tipo_producto',array(1,3))->with('unidadMedida')->with('impuestoProducto')->with('productoDetallesBaterias')->orderby('id_producto')->get();

        $bodegas =InventarioBodegas::where('activo', 1)->select('id_bodega','descripcion')->get();

        if(!empty($request->id_orden_compra)){
            $orden_compra = ComprasOrdenCompra::where('id_orden_compra',$request->id_orden_compra)->with(['ordenCompraProductos' => function($query) {
                $query->with('ordenCompraProductoBateria');
            }])->with('ordenCompraMoneda')->with('ordenCompraBodega')->with('ordenCompraProveedor')->where('tipo_compra',2)->get();



            if(!empty($orden_compra[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'productos' => $productos,
                        'proveedores' => $proveedores,
                        'bodegas'=> $bodegas,
                        'orden' => $orden_compra[0],
                    ],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_orden_compra'=>["Datos no encontrados"]),
                    'messages' => null
                ]);
            }

        }else{
            return response()->json([
                'status' => 'success',
                'result' => [
                 //   'proveedores' => $proveedores,
                ],
                'messages' => null
            ]);
        }
    }




	public function registrar(Request $request)
	{

        $messages = [
            'detalleProductos.required' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.valor_unitario.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
            'detalleProductos.*.peso.min' => 'El peso debe ser mayor que cero',
            'detalleProductos.*.productox.descripcion.required' => 'Se requiere una descripcion del producto',
            'tasa_cambio.tasa.required'=> 'Debe seleccionar una fecha con una tasa de cambio válida',
            'tasa_cambio.tasa.min'=> 'Debe seleccionar una fecha con una tasa de cambio válida',

        ];

    	$rules = [
            'numero_importacion' => 'required|string|max:100',
            'proveedor' => 'required|array|min:1',
            'proveedor.id_proveedor' => 'required|integer|min:1',

            'proveedor_transporte' => 'nullable|array|min:1',
            'proveedor_transporte.id_proveedor' => 'required|integer|min:1',

            'proveedor_agencia' => 'nullable|array|min:1',
            'proveedor_agencia.id_proveedor' => 'required|integer|min:1',

            'bodega' => 'nullable|array|min:1',
            'bodega.id_bodega' => 'required|integer|min:1',

            'numero_poliza' => 'required|string|max:50',
            'flete' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'seguro' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'fecha_pago_aduana' => 'required|date',
            'tasa_cambio' => 'required|array|min:1',
            'tasa_cambio.tasa'=> 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:33',
            'ssa' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'spe' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'tsi' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'dai' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'isc' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'iva' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'costo_transporte' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'nota_debito_transporte' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',

            'no_factura_agencia_aduanera' => 'required|string|max:100',
            'no_factura_proveedor_transporte' => 'required|string|max:100',

            'fecha_factura_agencia_aduanera' => 'date',
            'subtotal_agencia_aduanera' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'iva_agencia_aduanera' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'nota_credito_agencia' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',


            'detallOrdenesCompras' => 'required|array|min:1',
            'detallOrdenesCompras.*.id_orden_compra' => 'required|integer|exists:pgsql.compra.ordenes_compras,id_orden_compra',
            'detallOrdenesCompras.*.no_factura_proveedor' => 'required|string|max:50',

            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.productox.descripcion' => 'required|string|max:100',
            'detalleProductos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0.01',
            'detalleProductos.*.peso' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0.01',
            'detalleProductos.*.valor_unitario' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'detalleProductos.*.porcentaje_descuento' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0|max:99',
            'detalleProductos.*.cargo_chico_grande' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'detalleProductos.*.daix' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'detalleProductos.*.iscx' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',

            'detalleProductos.*.valor_fobx' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'detalleProductos.*.total_cargox' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'detalleProductos.*.valor_total_fobx' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'detalleProductos.*.fletex' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.segurox' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.cif_totalx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.descuento_eox' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.costo_nuevo_dolx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.costo_nuevo_cordx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.costo_transportex' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.nota_debito_transportex' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.costo_nuevo_con_transportex' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.ssax' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.spex' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.tsix' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.dai_cordx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.isc_cordx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.costo_agenciax' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.otros_gastos_agenciax' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.total_cordobasx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.costo_unitario_cordobasx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'detalleProductos.*.costo_unitario_dolaresx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',

		];

		$validator = Validator::make($request->all(), $rules,$messages);
		if (!$validator->fails()) {

			try{

			DB::beginTransaction();
			$importacion = new InventarioImportaciones;
                $importacion->numero_importacion = $request->numero_importacion;
                $importacion->id_proveedor = $request->proveedor['id_proveedor'];
                $importacion->id_proveedor_agencia = $request->proveedor_agencia['id_proveedor'];
                $importacion->id_proveedor_transporte = $request->proveedor_transporte['id_proveedor'];
                $importacion->descripcion_proveedor = $request->proveedor['nombre_comercial'];
                //$importacion->no_factura_proveedor = $request->no_factura_proveedor;
                $importacion->numero_poliza = $request->numero_poliza;
                $importacion->flete = $request->flete;
                $importacion->seguro = $request->seguro;

                $importacion->id_bodega = $request->bodega['id_bodega'];

                //$importacion->id_orden_compra = $request->id_orden_compra;
                $importacion->fecha_pago_aduana = $request->fecha_pago_aduana;
                $importacion->tasa_cambio = $request->tasa_cambio['tasa'];
                $importacion->ssa = $request->ssa;
                $importacion->spe = $request->spe;
                $importacion->tsi = $request->tsi;
                $importacion->dai = $request->dai;
                $importacion->isc = $request->isc;
                $importacion->iva = $request->iva;
                $importacion->no_factura_agencia_aduanera = $request->no_factura_agencia_aduanera;
                $importacion->no_factura_proveedor_transporte = $request->no_factura_proveedor_transporte;

                $importacion->fecha_factura_agencia_aduanera = $request->fecha_factura_agencia_aduanera;
                $importacion->subtotal_agencia_aduanera = $request->subtotal_agencia_aduanera;
                $importacion->iva_agencia_aduanera = $request->iva_agencia_aduanera;
                $importacion->nota_credito_agencia = $request->nota_credito_agencia;
                $importacion->costo_transporte = $request->costo_transporte;
                $importacion->nota_debito_transporte = $request->nota_debito_transporte;
                $importacion->u_creacion = Auth::user()->usuario;
                $importacion->estado = 1;
                $importacion->save();
               $numeros_facturas = 'No.';
               $contador = 0;

                foreach ($request->detallOrdenesCompras as $ordenCompra) {
                    $orden_compra= new InventarioImportacionOrdenesCompra();
                    $orden_compra->id_importacion = $importacion->id_importacion;
                    $orden_compra->id_proveedor = $request->proveedor['id_proveedor'];
                    $orden_compra->id_orden_compra = $ordenCompra['id_orden_compra'];
                    $orden_compra->no_factura_proveedor = $ordenCompra['no_factura_proveedor'];
                        if($contador>0){
                            $numeros_facturas = ' | '.$numeros_facturas.$ordenCompra['no_factura_proveedor'];
                        }else{
                            $numeros_facturas = $numeros_facturas.$ordenCompra['no_factura_proveedor'];
                        }

                    $contador++;
                    $orden_compra->save();
                }
                $importacion->numeros_facturas = $numeros_facturas;
                $importacion->save();

			foreach ($request->detalleProductos as $producto) {
                $importacion_producto = new InventarioImportacionProductos;
				$importacion_producto->id_importacion = $importacion->id_importacion;
                $importacion_producto->id_producto = $producto['productox']['id_producto'];
                $importacion_producto->descripcion_producto = $producto['productox']['descripcion'];
                $importacion_producto->cantidad = $producto['cantidad'];
                $importacion_producto->peso = $producto['peso'];
                $importacion_producto->valor_unitario = $producto['valor_unitario'];
                $importacion_producto->porcentaje_descuento = $producto['porcentaje_descuento'];
                $importacion_producto->cargo_chico_grande = $producto['cargo_chico_grande'];
                $importacion_producto->valor_fobx = $producto['valor_fobx'];
                $importacion_producto->total_cargox = $producto['total_cargox'];
                $importacion_producto->valor_total_fobx = $producto['valor_total_fobx'];
                $importacion_producto->fletex = $producto['fletex'];
                $importacion_producto->segurox = $producto['segurox'];
                $importacion_producto->cif_totalx = $producto['cif_totalx'];
                $importacion_producto->descuento_eox = $producto['descuento_eox'];
                $importacion_producto->costo_nuevo_dolx = $producto['costo_nuevo_dolx'];
                $importacion_producto->costo_nuevo_cordx = $producto['costo_nuevo_cordx'];
                $importacion_producto->costo_transportex = $producto['costo_transportex'];
                $importacion_producto->nota_debito_transportex = $producto['nota_debito_transportex'];
                $importacion_producto->costo_nuevo_con_transportex = $producto['costo_nuevo_con_transportex'];
                $importacion_producto->ssax = $producto['ssax'];
                $importacion_producto->spex = $producto['spex'];
                $importacion_producto->tsix = $producto['tsix'];
                $importacion_producto->daix = $producto['daix'];
                $importacion_producto->iscx = $producto['iscx'];
                $importacion_producto->dai_cordx = $producto['dai_cordx'];
                $importacion_producto->isc_cordx = $producto['isc_cordx'];
                $importacion_producto->costo_agenciax = $producto['costo_agenciax'];
                $importacion_producto->otros_gastos_agenciax = $producto['otros_gastos_agenciax'];
                $importacion_producto->total_cordobasx = $producto['total_cordobasx'];
                $importacion_producto->costo_unitario_cordobasx = $producto['costo_unitario_cordobasx'];
                $importacion_producto->costo_unitario_dolaresx = $producto['costo_unitario_dolaresx'];
				$importacion_producto->save();
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
            'importacion_productos.required' => 'Se requiere agregar un producto por lo menos.',
            'importacion_productos.min' => 'Se requiere agregar un producto por lo menos.',
            'importacion_productos.*.id_producto.required' => 'Seleccione un producto válido',
            'importacion_productos.*.valor_unitario.min' => 'El precio debe ser mayor que cero',
            'importacion_productos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
            'importacion_productos.*.peso.min' => 'El peso debe ser mayor que cero',
            'importacion_productos.*.descripcion_producto.required' => 'Se requiere una descripcion del producto',
            'tasa_cambio.required'=> 'Debe seleccionar una fecha con una tasa de cambio válida',
            'tasa_cambio.min'=> 'Debe seleccionar una fecha con una tasa de cambio válida',
        ];

        $rules = [
            'id_importacion' => 'required|integer|exists:pgsql.inventario.importaciones,id_importacion',
            'numero_importacion' => 'required|string|max:100',

            'importacion_proveedor_transporte' => 'nullable|array|min:1',
            'importacion_proveedor_transporte.id_proveedor' => 'required|integer|min:1',

            'importacion_proveedor_aduana' => 'nullable|array|min:1',
            'importacion_proveedor_aduana.id_proveedor' => 'required|integer|min:1',

            'importacion_bodega' => 'nullable|array|min:1',
            'importacion_bodega.id_bodega' => 'required|integer|min:1',

            'numero_poliza' => 'required|string|max:50',
            'flete' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'seguro' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'fecha_pago_aduana' => 'required|date',
            'tasa_cambio'=> 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:33',
            'ssa' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'spe' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'tsi' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'dai' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'isc' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'iva' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'costo_transporte' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'nota_debito_transporte' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',

            'estado' => 'required|integer|min:1|max:3',

            'no_factura_agencia_aduanera' => 'required|string|max:100',
            'no_factura_proveedor_transporte' => 'required|string|max:100',

            'fecha_factura_agencia_aduanera' => 'date',
            'subtotal_agencia_aduanera' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'iva_agencia_aduanera' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'nota_credito_agencia' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'importacion_productos' => 'required|array|min:1',
            'importacion_productos.*.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'importacion_productos.*.descripcion_producto' => 'required|string|max:100',
            'importacion_productos.*.cantidad' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0.01',
            'importacion_productos.*.peso' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0.01',
            'importacion_productos.*.valor_unitario' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0.01',
            'importacion_productos.*.porcentaje_descuento' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0|max:99',
            'importacion_productos.*.cargo_chico_grande' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'importacion_productos.*.daix' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'importacion_productos.*.iscx' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',

            'importacion_productos.*.valor_fobx' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'importacion_productos.*.total_cargox' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'importacion_productos.*.valor_total_fobx' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'importacion_productos.*.segurox' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.fletex' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.cif_totalx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.descuento_eox' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.costo_nuevo_dolx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.costo_nuevo_cordx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.costo_transportex' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.nota_debito_transportex' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.costo_nuevo_con_transportex' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.ssax' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.spex' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.tsix' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.dai_cordx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.isc_cordx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.costo_agenciax' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.otros_gastos_agenciax' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.total_cordobasx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.costo_unitario_cordobasx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',
            'importacion_productos.*.costo_unitario_dolaresx' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:0',

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try {


                $importacion = InventarioImportaciones::find($request->id_importacion);

                if($importacion->estado!=3 && $importacion->estado!=0) {

                    DB::beginTransaction();

                    $importacion->numero_importacion = $request->numero_importacion;
                    $importacion->id_proveedor_agencia = $request->importacion_proveedor_aduana['id_proveedor'];
                    $importacion->id_proveedor_transporte = $request->importacion_proveedor_transporte['id_proveedor'];
                    $importacion->numero_poliza = $request->numero_poliza;
                    $importacion->flete = $request->flete;
                    $importacion->seguro = $request->seguro;
                    $importacion->fecha_pago_aduana = $request->fecha_pago_aduana;
                    $importacion->tasa_cambio = $request->tasa_cambio;
                    $importacion->ssa = $request->ssa;
                    $importacion->spe = $request->spe;
                    $importacion->tsi = $request->tsi;
                    $importacion->dai = $request->dai;
                    $importacion->isc = $request->isc;
                    $importacion->iva = $request->iva;

                    $importacion->estado = $request->estado;

                    $importacion->no_factura_proveedor_transporte = $request->no_factura_proveedor_transporte;
                    $importacion->no_factura_agencia_aduanera = $request->no_factura_agencia_aduanera;
                    $importacion->fecha_factura_agencia_aduanera = $request->fecha_factura_agencia_aduanera;
                    $importacion->subtotal_agencia_aduanera = $request->subtotal_agencia_aduanera;
                    $importacion->iva_agencia_aduanera = $request->iva_agencia_aduanera;
                    $importacion->nota_credito_agencia = $request->nota_credito_agencia;
                    $importacion->costo_transporte = $request->costo_transporte;
                    $importacion->nota_debito_transporte = $request->nota_debito_transporte;
                    $importacion->save();


                    $numeros_facturas = '';
                    $contador = 0;

                    InventarioImportacionOrdenesCompra::where('id_importacion', $request->id_importacion)->delete();

                    foreach ($request->importacion_ordenes_compras as $ordenCompra) {
                        $orden_compra = new InventarioImportacionOrdenesCompra();
                        $orden_compra->id_importacion = $importacion->id_importacion;
                        $orden_compra->id_proveedor = $importacion->id_proveedor;
                        $orden_compra->id_orden_compra = $ordenCompra['id_orden_compra'];
                        $orden_compra->no_factura_proveedor = $ordenCompra['no_factura_proveedor'];
                        if ($contador > 0) {
                            $numeros_facturas = $numeros_facturas . ' | No. ' . $ordenCompra['no_factura_proveedor'];
                        } else {
                            $numeros_facturas = 'No. ' . $numeros_facturas . $ordenCompra['no_factura_proveedor'];
                        }

                        $contador++;
                        $orden_compra->save();
                    }
                    $importacion->numeros_facturas = $numeros_facturas;
                    $importacion->id_bodega = $request->importacion_bodega['id_bodega'];
                    $importacion->save();



                        $entrada = new InventarioEntradas;
                        $entrada->codigo_entrada = InventarioEntradas::max('id_entrada') + 1;
                        $entrada->id_tipo_entrada = 1;
                        $entrada->fecha_entrada = date('Y-m-d');
                        $entrada->id_proveedor = $importacion->id_proveedor;
                        $entrada->id_bodega = $request->importacion_bodega['id_bodega'];
                        $entrada->descripcion_entrada = 'Registramos entrada de productos por Importación No. ' . $importacion->numero_importacion;
                        $entrada->u_creacion = Auth::user()->usuario;;
                        $entrada->estado = 1;
                    if ($request->estado === 3) {
                        $entrada->save();
                    }


                    InventarioImportacionProductos::where('id_importacion', $request->id_importacion)->delete();//update(['activo' => false]);

                    $total_inventario = 0;
                    $total_iva_acreditable = ($request->iva + $request->iva_agencia_aduanera) * $request->tasa_cambio;
                    $total_descuento_eo = 0;
                    $total_seguro = $request->seguro * $request->tasa_cambio;
                    //$total_mercancia_transito = 0;

                    foreach ($request->importacion_productos as $producto) {
                        $importacion_producto = new InventarioImportacionProductos;
                        $importacion_producto->id_importacion = $importacion->id_importacion;
                        $importacion_producto->id_producto = $producto['id_producto'];
                        $importacion_producto->descripcion_producto = $producto['descripcion_producto'];
                        $importacion_producto->cantidad = $producto['cantidad'];
                        $importacion_producto->peso = $producto['peso'];
                        $importacion_producto->valor_unitario = $producto['valor_unitario'];
                        $importacion_producto->porcentaje_descuento = $producto['porcentaje_descuento'];
                        $importacion_producto->cargo_chico_grande = $producto['cargo_chico_grande'];
                        $importacion_producto->valor_fobx = $producto['valor_fobx'];
                        $importacion_producto->total_cargox = $producto['total_cargox'];
                        $importacion_producto->valor_total_fobx = $producto['valor_total_fobx'];
                        $importacion_producto->fletex = $producto['fletex'];
                        $importacion_producto->segurox = $producto['segurox'];
                        $importacion_producto->cif_totalx = $producto['cif_totalx'];
                        $importacion_producto->descuento_eox = $producto['descuento_eox'];
                        $importacion_producto->costo_nuevo_dolx = $producto['costo_nuevo_dolx'];
                        $importacion_producto->costo_nuevo_cordx = $producto['costo_nuevo_cordx'];
                        $importacion_producto->costo_transportex = $producto['costo_transportex'];
                        $importacion_producto->nota_debito_transportex = $producto['nota_debito_transportex'];
                        $importacion_producto->costo_nuevo_con_transportex = $producto['costo_nuevo_con_transportex'];
                        $importacion_producto->ssax = $producto['ssax'];
                        $importacion_producto->spex = $producto['spex'];
                        $importacion_producto->tsix = $producto['tsix'];
                        $importacion_producto->daix = $producto['daix'];
                        $importacion_producto->iscx = $producto['iscx'];
                        $importacion_producto->dai_cordx = $producto['dai_cordx'];
                        $importacion_producto->isc_cordx = $producto['isc_cordx'];
                        $importacion_producto->costo_agenciax = $producto['costo_agenciax'];
                        $importacion_producto->otros_gastos_agenciax = $producto['otros_gastos_agenciax'];
                        $importacion_producto->total_cordobasx = $producto['total_cordobasx'];
                        $importacion_producto->costo_unitario_cordobasx = $producto['costo_unitario_cordobasx'];
                        $importacion_producto->costo_unitario_dolaresx = $producto['costo_unitario_dolaresx'];
                        $importacion_producto->save();

                        $total_inventario = $total_inventario + $producto['total_cordobasx'];
                        $total_descuento_eo = $total_descuento_eo + $producto['descuento_eox'] * $request->tasa_cambio;

                        if ($request->estado === 3) {
                            $entrada_producto = new InventarioEntradaProductos;
                            $bodega_sub = InventarioBodegaProductos::where('id_bodega', $entrada->id_bodega)->where('id_producto', $producto['id_producto'])->get();
                            if (!empty($bodega_sub[0])) {
                                $entrada_producto->id_bodega_producto = $bodega_sub[0]['id_bodega_producto'];
                            } else {
                                $nueva_bodega_sub = new InventarioBodegaProductos;
                                $nueva_bodega_sub->id_bodega = $entrada->id_bodega;
                                $nueva_bodega_sub->id_producto = $producto['id_producto'];
                                $nueva_bodega_sub->cantidad = 0;
                                $nueva_bodega_sub->u_creacion = $entrada->u_creacion;
                                $nueva_bodega_sub->save();
                                $entrada_producto->id_bodega_producto = $nueva_bodega_sub->id_bodega_producto;
                            }
                            $entrada_producto->id_entrada = $entrada->id_entrada;
                            $entrada_producto->codigo_producto = $producto['producto']['codigo_sistema'];
                            $entrada_producto->descripcion_producto = $producto['producto']['descripcion'];
                            $entrada_producto->unidad_medida = 'UNDS';
                            $entrada_producto->precio_unitario = $producto['costo_unitario_cordobasx'];
                            $entrada_producto->cantidad_solicitada = $producto['cantidad'];
                            $entrada_producto->cantidad_recibida = 0;
                            $entrada_producto->cantidad_faltante = 0;
                            $entrada_producto->u_creacion = $entrada->u_creacion;
                            $entrada_producto->save();

                        }
                    }

                    /*INICIA movimiento contable*/
                    if ($request->estado === 3) {

                        if($total_inventario>0){

                        $documento = new ContabilidadDocumentosContables;
                        $tipo = ContabilidadTiposDocumentos::find(8);
                        $fecha = date("Y-m-d H:i:s");
                        $codigo = $documento->obtenerCodigoDocumento(array('id_tipo_doc' => 8, 'fecha_doc' => $fecha));

                        $nuevo_codigo = json_decode($codigo[0]);

                        date_default_timezone_set('America/Managua');

                        $documento->num_documento = $tipo->prefijo . '-' . $nuevo_codigo->secuencia;
                        $documento->fecha_emision = date('Y-m-d');
                        $documento->codigo_documento = $nuevo_codigo->secuencia;

                        $date = DateTime::createFromFormat("Y-m-d", $documento->fecha_emision);

                        $periodo = ContabilidadPeriodoFiscal::where('periodo', $date->format("Y"))->get();

                        if (empty($periodo[0])) {
                            return response()->json([
                                'status' => 'error',
                                'result' => array('fecha_emision' => ["El periodo " . $date->format("Y") . " no se encuentra registrado, por favor consulte al administrador"]),
                                'messages' => null
                            ]);
                            exit;
                        }

                        if ($periodo[0]->estado) {
                            return response()->json([
                                'status' => 'error',
                                'result' => array('fecha_emision' => ["El periodo " . $date->format("Y") . " es inválido, ya que se encuentra en estado COMPLETADO"]),
                                'messages' => null
                            ]);
                            exit;
                        }

                        $periodo_mes = ContabilidadPeriodoMeses::where('id_periodo_fiscal', $periodo[0]->id_periodo_fiscal)->where('mes', $date->format("n"))->get();

                        if (empty($periodo_mes[0])) {
                            return response()->json([
                                'status' => 'error',
                                'result' => array('fecha_emision' => ["El mes " . $date->format("F") . " no se encuentra registrado, por favor consulte al administrador"]),
                                'messages' => null
                            ]);
                            exit;
                        }

                        if ($periodo_mes[0]->estado == 2) {
                            return response()->json([
                                'status' => 'error',
                                'result' => array('fecha_emision' => ["El mes " . $date->format("F") . " es inválido, ya que se encuentra en estado COMPLETADO"]),
                                'messages' => null
                            ]);
                            exit;
                        }

                        $documento->id_periodo_fiscal = $periodo[0]->id_periodo_fiscal;
                        $documento->id_tipo_doc = $tipo->id_tipo_doc;
                        $documento->valor = $request->total;
                        $documento->concepto = 'Contabilización de importación No. ' . $importacion->numero_importacion;
                        $documento->id_moneda = 1;
                        $documento->u_creacion = Auth::user()->usuario;
                        $documento->valor = $total_inventario + $total_iva_acreditable + $total_descuento_eo;
                        $documento->estado = 1;
                        $documento->save();

                        ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');
                        $total_mercancia_transito = $total_inventario + $total_iva_acreditable + $total_descuento_eo - $total_seguro;

                            /* INICIA MOVIMIENTO INVENTARIO*/
                            $cuenta_inventario = InventarioImportacionConfiguracion::find(1);
                            $cuenta_contable_inventario = ContabilidadCuentasContables::find($cuenta_inventario->id_cuenta_contaable);
                            $cuenta_contable_inventario_padre = ContabilidadCuentasContables::find($cuenta_contable_inventario->id_cuenta_padre);

                            $documento_cuenta_contableInventario = new ContabilidadDocumentosMovimientos;
                            $documento_cuenta_contableInventario->id_documento = $documento->id_documento;
                            $documento_cuenta_contableInventario->concepto = $cuenta_inventario['descripcion_movimiento'] . $importacion->numero_importacion;
                            $documento_cuenta_contableInventario->id_moneda = 1;

                            if ($cuenta_inventario->debe_haber == 1) {
                                $documento_cuenta_contableInventario->debe = $total_inventario;
                                $documento_cuenta_contableInventario->haber = 0;
                                $documento_cuenta_contableInventario->debe_org = $total_inventario;
                                $documento_cuenta_contableInventario->haber_org = 0;
                            } else {
                                $documento_cuenta_contableInventario->debe = 0;
                                $documento_cuenta_contableInventario->haber = $total_inventario;
                                $documento_cuenta_contableInventario->debe_org = 0;
                                $documento_cuenta_contableInventario->haber_org = $total_inventario;
                            }

                            $documento_cuenta_contableInventario->id_centro = null;
                            $documento_cuenta_contableInventario->id_cuenta_contable = $cuenta_contable_inventario->id_cuenta_contable;
                            $documento_cuenta_contableInventario->cta_contable = $cuenta_contable_inventario->cta_contable;
                            $documento_cuenta_contableInventario->cta_contable_padre = $cuenta_contable_inventario_padre->cta_contable;
                            $documento_cuenta_contableInventario->save();
                            /*TERMINA MOVIMIENTO INVENTARIO*/


                            /* INICIA MOVIMIENTO IVA ACREDITABLE*/
                            $cuenta_iva_acreditable = InventarioImportacionConfiguracion::find(2);
                            $cuenta_contable_iva_acreditable = ContabilidadCuentasContables::find($cuenta_iva_acreditable->id_cuenta_contaable);
                            $cuenta_contable_iva_padre = ContabilidadCuentasContables::find($cuenta_contable_iva_acreditable->id_cuenta_padre);

                            $documento_cuenta_contableIVA = new ContabilidadDocumentosMovimientos;
                            $documento_cuenta_contableIVA->id_documento = $documento->id_documento;
                            $documento_cuenta_contableIVA->concepto = $cuenta_iva_acreditable['descripcion_movimiento'] . $importacion->numero_importacion;
                            $documento_cuenta_contableIVA->id_moneda = 1;

                            if ($cuenta_iva_acreditable->debe_haber == 1) {
                                $documento_cuenta_contableIVA->debe = $total_iva_acreditable;
                                $documento_cuenta_contableIVA->haber = 0;
                                $documento_cuenta_contableIVA->debe_org = $total_iva_acreditable;
                                $documento_cuenta_contableIVA->haber_org = 0;
                            } else {
                                $documento_cuenta_contableIVA->debe = 0;
                                $documento_cuenta_contableIVA->haber = $total_iva_acreditable;
                                $documento_cuenta_contableIVA->debe_org = 0;
                                $documento_cuenta_contableIVA->haber_org = $total_iva_acreditable;
                            }

                            $documento_cuenta_contableIVA->id_centro = null;
                            $documento_cuenta_contableIVA->id_cuenta_contable = $cuenta_contable_iva_acreditable->id_cuenta_contable;
                            $documento_cuenta_contableIVA->cta_contable = $cuenta_contable_iva_acreditable->cta_contable;
                            $documento_cuenta_contableIVA->cta_contable_padre = $cuenta_contable_iva_padre->cta_contable;
                            $documento_cuenta_contableIVA->save();
                            /*TERMINA IVA ACREDITABLE*/


                            /* INICIA DESCUENTO EFICACIA OPERATIVA*/
                            $cuenta_descuento_eo = InventarioImportacionConfiguracion::find(3);
                            $cuenta_contable_descuento_eo = ContabilidadCuentasContables::find($cuenta_descuento_eo->id_cuenta_contaable);
                            $cuenta_contable_descuento_eo_padre = ContabilidadCuentasContables::find($cuenta_contable_descuento_eo->id_cuenta_padre);

                            $documento_cuenta_contableEO = new ContabilidadDocumentosMovimientos;
                            $documento_cuenta_contableEO->id_documento = $documento->id_documento;
                            $documento_cuenta_contableEO->concepto = $cuenta_descuento_eo['descripcion_movimiento'] . $importacion->numero_importacion;
                            $documento_cuenta_contableEO->id_moneda = 1;

                            if ($cuenta_descuento_eo->debe_haber == 1) {
                                $documento_cuenta_contableEO->debe = $total_descuento_eo;
                                $documento_cuenta_contableEO->haber = 0;
                                $documento_cuenta_contableEO->debe_org = $total_descuento_eo;
                                $documento_cuenta_contableEO->haber_org = 0;
                            } else {
                                $documento_cuenta_contableEO->debe = 0;
                                $documento_cuenta_contableEO->haber = $total_descuento_eo;
                                $documento_cuenta_contableEO->debe_org = 0;
                                $documento_cuenta_contableEO->haber_org = $total_descuento_eo;
                            }

                            $documento_cuenta_contableEO->id_centro = null;
                            $documento_cuenta_contableEO->id_cuenta_contable = $cuenta_contable_descuento_eo->id_cuenta_contable;
                            $documento_cuenta_contableEO->cta_contable = $cuenta_contable_descuento_eo->cta_contable;
                            $documento_cuenta_contableEO->cta_contable_padre = $cuenta_contable_descuento_eo_padre->cta_contable;
                            $documento_cuenta_contableEO->save();
                            /*TERMINA DESCUENTO EFICACIA OPERATIVA*/


                            /* INICIA MERCANCIA TRANSITO*/
                            $cuenta_mercancia_transito = InventarioImportacionConfiguracion::find(4);
                            $cuenta_contable_mercancia_transito = ContabilidadCuentasContables::find($cuenta_mercancia_transito->id_cuenta_contaable);
                            $cuenta_contable_mercancia_transito_padre = ContabilidadCuentasContables::find($cuenta_contable_mercancia_transito->id_cuenta_padre);

                            $documento_cuenta_contableMET = new ContabilidadDocumentosMovimientos;
                            $documento_cuenta_contableMET->id_documento = $documento->id_documento;
                            $documento_cuenta_contableMET->concepto = $cuenta_mercancia_transito['descripcion_movimiento'] . $importacion->numero_importacion;
                            $documento_cuenta_contableMET->id_moneda = 1;

                            if ($cuenta_mercancia_transito->debe_haber == 1) {
                                $documento_cuenta_contableMET->debe = $total_mercancia_transito;
                                $documento_cuenta_contableMET->haber = 0;
                                $documento_cuenta_contableMET->debe_org = $total_mercancia_transito;
                                $documento_cuenta_contableMET->haber_org = 0;
                            } else {
                                $documento_cuenta_contableMET->debe = 0;
                                $documento_cuenta_contableMET->haber = $total_mercancia_transito;
                                $documento_cuenta_contableMET->debe_org = 0;
                                $documento_cuenta_contableMET->haber_org = $total_mercancia_transito;
                            }

                            $documento_cuenta_contableMET->id_centro = null;
                            $documento_cuenta_contableMET->id_cuenta_contable = $cuenta_contable_mercancia_transito->id_cuenta_contable;
                            $documento_cuenta_contableMET->cta_contable = $cuenta_contable_mercancia_transito->cta_contable;
                            $documento_cuenta_contableMET->cta_contable_padre = $cuenta_contable_mercancia_transito_padre->cta_contable;
                            $documento_cuenta_contableMET->save();
                            /*TERMINA MERCANCIA TRANSITO*/



                            /* INICIA Gastos Por Seguro*/
                            $cuenta_gastos = InventarioImportacionConfiguracion::find(5);
                            $cuenta_contable_seguro = ContabilidadCuentasContables::find($cuenta_gastos->id_cuenta_contaable);
                            $cuenta_contable_seguro_padre = ContabilidadCuentasContables::find($cuenta_contable_seguro->id_cuenta_padre);

                            $documento_cuenta_contableSG = new ContabilidadDocumentosMovimientos;
                            $documento_cuenta_contableSG->id_documento = $documento->id_documento;
                            $documento_cuenta_contableSG->concepto = $cuenta_gastos['descripcion_movimiento'] . $importacion->numero_importacion;
                            $documento_cuenta_contableSG->id_moneda = 1;

                            if ($cuenta_gastos->debe_haber == 1) {
                                $documento_cuenta_contableSG->debe = $total_seguro;
                                $documento_cuenta_contableSG->haber = 0;
                                $documento_cuenta_contableSG->debe_org = $total_seguro;
                                $documento_cuenta_contableSG->haber_org = 0;
                            } else {
                                $documento_cuenta_contableSG->debe = 0;
                                $documento_cuenta_contableSG->haber = $total_seguro;
                                $documento_cuenta_contableSG->debe_org = 0;
                                $documento_cuenta_contableSG->haber_org = $total_seguro;
                            }

                            $documento_cuenta_contableSG->id_centro = null;
                            $documento_cuenta_contableSG->id_cuenta_contable = $cuenta_contable_seguro->id_cuenta_contable;
                            $documento_cuenta_contableSG->cta_contable = $cuenta_contable_seguro->cta_contable;
                            $documento_cuenta_contableSG->cta_contable_padre = $cuenta_contable_seguro_padre->cta_contable;
                            $documento_cuenta_contableSG->save();
                            /*TERMINA Gastos Por Seguro*/




                    }/*else{


                        }*/

                }/*else{
                        return response()->json([
                            'status' => 'error',
                            'result' => 'Los valores no son validos',
                            'messages' => null
                        ]);
                    }*/
                    /* TERMINA MOVIMIENTO CONTABLE*/


                DB::commit();
                return response()->json([
                    'status' => 'success',
                    'result' => null,
                    'messages' => null
                ]);

            }else{
                    return response()->json([
                        'status' => 'error',
                        'result' => 'La importación ya ha sido modificada previamente',
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


    public function generarReporte($ext,$id_importacion)
    {
        // echo $ext;
        //$ext = 'xls';
        $os = array("xls", "pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/FormatoImportacion2';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'FormatoImportacion2';
             $input = '/var/www/html/resources/reports/FormatoImportacion2';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'FormatoImportacion2';
            //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/FormatoImportacion2';
            //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/'.$hora_actual.'FormatoImportacion2';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [ 'id_importacion' => $id_importacion],
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'FormatoImportacion.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}

