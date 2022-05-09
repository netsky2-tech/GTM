<?php

namespace App\Http\Controllers;


use App\Models\AdmonAjustes;
use App\Models\CajaBancoAfectaciones;
use App\Models\CajaBancoBancos;
use App\Models\CajaBancoFacturaViaPagos;
use App\Models\CajaBancoMonedas;
use App\Models\CajaBancoProformasSeguimiento;
use App\Models\CajaBancoTasasCambios;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\CuentasXCobrarCuentasXCobrar;
use App\Models\InventarioBodegas;
use App\Models\InventarioSalidaProductos;
use App\Models\InventarioSalidas;
use App\Models\PublicDepartamentos;
use App\Models\PublicViaPagos;
use App\Models\PublicZonas;
use App\Models\VentaVendedores;
use DateTime;
use Hash, Validator,Auth;
use App\Models\InventarioBodegaProductos;
use App\Models\CajaBancoProformasProductos;
use App\Models\CajaBancoProformas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class CajaBancoProformasController extends Controller
{
    public function buscar(Request $request, CajaBancoProformas $proformas)
    {
        $proformas = $proformas->buscar($request);
        return response()->json([
            'results' => $proformas
        ]);
    }


    public function obtener(Request $request, CajaBancoProformas $proformas)
    {
        $proformas = $proformas->obtenerProformas($request);

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $proformas->total(),
                'rows' => $proformas->items()
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

    public function obtenerProforma(Request $request, CajaBancoProformas $proforma)
    {
        $rules = [
            'id_proforma' => 'required|integer|min:1',
            'cargar_dependencias' => 'required|boolean',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            // $productos = $proforma->obtenerProductosSalida($request);
            $proforma = $proforma->obtenerProforma($request);

            if(!empty($proforma)){



                if($request->cargar_dependencias){
                    $ajustes_basicos = AdmonAjustes::whereIn('id_ajuste',array(4,5,26))->orderBy('id_ajuste')->select('id_ajuste','valor')->get();

                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'factura' => $proforma,
                            'ajustes_basicos' => $ajustes_basicos,
                        ],
                        'messages' => null
                    ]);
                }else{
                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'factura' => $proforma,
                        ],
                        'messages' => null
                    ]);
                }



            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_proforma'=>["Datos no encontrados"]),
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
        $messages = [
            'detalleProductos.min' => 'Se requiere agregar un producto por lo menos.',
            'detalleProductos.*.productox.id_producto.required' => 'Seleccione un producto válido',
            'detalleProductos.*.precio_unitario.min' => 'El precio debe ser mayor que cero',
            'detalleProductos.*.cantidad.min' => 'La cantidad debe ser mayor que cero',
            'doc_exoneracion.required_if' => 'El campo documento exoneracion es requerido cuando la factura no aplica IVA',
            'doc_exoneracion_ir.required_if' => 'El campo documento exoneracion es requerido cuando la factura aplica Retención IR',
            'doc_exoneracion_imi.required_if' => 'El campo documento exoneracion es requerido cuando la factura aplica Retención IMI',
            'factura_cliente.required_if' => 'El campo cliente es requerido.',
            'nombre_razon.required_if' => 'El campo nombre cliente es requerido.',
            'factura_sucursal.required' => 'El campo sucursal es requerido.',
            'factura_bodega.required' => 'El campo bodega es requerido.',
            'factura_vendedor.required' => 'El campo vendedor es requerido',
        ];

        $rules = [
            // 'no_documento' => 'required|string|max:8',
            'f_factura' => 'required|date',
            //'serie' => 'required|string|max:2',
            // 'factura_moneda' => 'required|array|min:1',
            // 'factura_moneda.id_moneda' => 'required|integer|min:1',
            'id_tipo' => 'required|integer|min:1|max:2',
            'factura_sucursal' => 'required|array|min:1',
            'factura_sucursal.id_sucursal' => 'required|integer|min:1',
            'factura_bodega' => 'required|array|min:1',
            'factura_bodega.id_bodega' => 'required|integer|min:1',
            'tipo_identificacion' => 'required|integer|min:1|max:2',
            'identificacion' => 'required|string|max:18',
            'observacion' => 'nullable|string|max:100',

            'aplicaIVA'=> 'required|boolean',
            'aplicaIR'=> 'required|boolean',
            'aplicaIMI'=> 'required|boolean',
            'es_nuevo'=> 'required|boolean',

            'factura_cliente' => 'required_if:es_nuevo,false|array|min:0',
            'factura_cliente.id_cliente' => 'required_if:es_nuevo,false|integer',

            'nombre_razon' => 'required_if:es_nuevo,true|string|max:100|nullable',


            'factura_vendedor' => 'required|array|min:1',
            'factura_vendedor.id_vendedor' => 'required|integer|min:1',
            't_cambio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'doc_exoneracion' => 'required_if:aplicaIVA,false|string|max:20|nullable',
            'doc_exoneracion_ir' => 'required_if:aplicaIR,true|string|max:20|nullable',
            'doc_exoneracion_imi' => 'required_if:aplicaIMI,true|string|max:20|nullable',

            'mt_retencion' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'mt_retencion_imi' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'mt_impuesto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'mt_descuento' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'mt_ajuste' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',

            'pago_vuelto_mn' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',
            'pago_vuelto' => 'required|numeric|regex:/^\d*(\.\d{1,4})?$/',

            'detalleProductos' => 'required|array|min:1',
            'detalleProductos.*.productox.id_producto' => 'required|integer|exists:pgsql.inventario.productos,id_producto',
            'detalleProductos.*.productox.id_bodega_producto' => 'required|integer|min:0',
            'detalleProductos.*.precio_costo' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.precio_lista' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.precio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleProductos.*.cantidad' => 'required|integer|min:1',
            'detalleProductos.*.productox.codigo_sistema' => 'required|string|max:50',
            'detalleProductos.*.productox.descripcion' => 'required|string|max:100',
            'detalleProductos.*.productox.unidad_medida' => 'required|string|max:100',
            'detalleProductos.*.afectacionx.id_afectacion' => 'required|integer|exists:pgsql.cjabnco.facturas_afectaciones,id_afectacion',
            'detalleProductos.*.afectacionx.valor' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',

        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $proforma = new CajaBancoProformas;
                $nuevo_num = CajaBancoProformas::select([DB::raw("COALESCE(max(no_proforma),0)+1 as no_proforma")])->first();
                $proforma->no_proforma = $nuevo_num['no_proforma'];
                $str = substr("000{$nuevo_num['no_proforma']}", -4);
                $proforma->no_documento = 'COTIZACION-'.$str;
                $proforma->f_proforma = $request->f_factura;
                $proforma->serie = $request->serie;
                $proforma->id_moneda = 1;
                $proforma->observacion = $request->observacion;
                $proforma->id_tipo = $request->id_tipo;
                $proforma->id_sucursal = $request->factura_sucursal['id_sucursal'];
                $proforma->id_bodega = $request->factura_bodega['id_bodega'];
                if(!$request->es_nuevo){
                $proforma->id_cliente = $request->factura_cliente['id_cliente'];
                }else{
                    $proforma->nombre_razon = $request->nombre_razon;
                }
                $proforma->tipo_identificacion = $request->tipo_identificacion;
                $proforma->identificacion = $request->identificacion;
                $proforma->id_vendedor = $request->factura_vendedor['id_vendedor'];
                $proforma->t_cambio = $request->t_cambio;
                $proforma->doc_exoneracion = $request->doc_exoneracion;
                $proforma->doc_exoneracion_ir = $request->doc_exoneracion_ir;
                $proforma->doc_exoneracion_imi = $request->doc_exoneracion_imi;
                $proforma->impuesto_exonerado = !$request->aplicaIVA;

                $proforma->mt_retencion = round($request->mt_retencion,2);
                $proforma->mt_retencion_imi = round($request->mt_retencion_imi,2);
                $proforma->mt_impuesto = round($request->mt_impuesto,2);
                $proforma->mt_descuento = round($request->mt_descuento,2);
                $proforma->mt_ajuste = round($request->mt_ajuste,2);
                $proforma->mt_total = $request->total_final_cordobas;

                $proforma->mt_deuda = $request->pago_pendiente_mn;
                $proforma->pago_vuelto = $request->pago_vuelto_mn;
                $proforma->pago_vuelto_me = $request->pago_vuelto;

                $proforma->saldo_factura =  $request->pago_pendiente_mn;
                $proforma->dias_credito  = $request->dias_credito;
                $proforma->f_vencimiento  =  date('Y-m-d', strtotime($proforma->f_factura. ' + '.$request->dias_credito.' days'));
                $proforma->u_creacion = Auth::user()->usuario;
                $proforma->estado = 1;
                $proforma->save();
                
                foreach ($request->detalleProductos as $producto) {

                    $proforma_producto = new CajaBancoProformasProductos;

                    if($producto['productox']['id_bodega_producto'] > 0 && $producto['productox']['tipo_producto']!=2){

                        $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['productox']['id_bodega_producto'])->first();
                        $proforma_producto->id_bodega_producto = $bodega_sub->id_bodega_producto;
                        $proforma_producto->id_producto = $bodega_sub->id_producto;

                    }else{
                        $proforma_producto->id_bodega_producto = null;
                        $proforma_producto->id_producto = $producto['productox']['id_producto'];
                    }

                    $proforma_producto->id_proforma = $proforma->id_proforma;
                    $proforma_producto->descripcion_producto = $producto['productox']['descripcion'];
                    $proforma_producto->codigo_producto = $producto['productox']['codigo_sistema'];
                    $proforma_producto->unidad_medida = $producto['productox']['unidad_medida'];

                    $proforma_producto->cantidad = $producto['cantidad'];
                    $proforma_producto->precio_lista = round($producto['precio_lista'],2);
                    $proforma_producto->precio = round($producto['p_unitario'],2);

                    $proforma_producto->p_descuento = $producto['p_descuento'];
                    $proforma_producto->p_ajuste = $producto['p_ajuste'];
                    $proforma_producto->p_impuesto = $producto['p_impuesto'];

                    $proforma_producto->m_impuesto = round($producto['mt_impuesto'],2);
                    $proforma_producto->m_descuento = round($producto['mt_descuento'],2);
                    $proforma_producto->m_ajuste = round($producto['mt_ajuste'],2);

                    $proforma_producto->f_creacion = date("Y-m-d H:i:s");
                    $proforma_producto->save();


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



    public function nueva(Request $request)
    {

        $afectaciones = CajaBancoAfectaciones::where('activo',true)->orderby('id_afectacion')->get();
        $tasa = CajaBancoTasasCambios::select('tasa_paralela','tasa')->where('fecha',date("Y-m-d"))->first();
        $vendedores = VentaVendedores::select(['id_vendedor','nombre_completo','id_zona'])->get();
        $departamentos = PublicDepartamentos::with('municipiosDepartamento')->get();
        $vias_pago = PublicViaPagos::select(['id_via_pago','descripcion'])->where('activo',true)->orderBy('id_via_pago')->get();
        $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();
        $zonas = PublicZonas::select(['id_zona','descripcion'])->where('activo',true)->get();
        $bancos = CajaBancoBancos::select(['id_banco','descripcion'])->where('activo', 1)->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'vias_pago' => $vias_pago,
                'monedas' => $monedas,
                'bancos' => $bancos,
                'afectaciones' => $afectaciones,
                'vendedores' => $vendedores,
                'departamentos'=>$departamentos,
                'zonas'=>$zonas,
                't_cambio' => $tasa,
            ],
            'messages' => null
        ]);

    }


    public function cancelarFactura(Request $request, CajaBancoProformas $proforma)
    {
        $rules = [
            'id_proforma' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $proforma = CajaBancoProformas::find($request->id_proforma);

            if(!empty($proforma)&&$proforma->estado==1){

                try{
                    DB::beginTransaction();
                    $proforma->estado=0;
                    $proforma->observacion = $proforma->observacion . ' **Factura cancelada por '.Auth::user()->usuario.' a las '.date("Y-m-d H:i:s");
                    $proforma->save();

                    foreach ($request->factura_productos as $producto) {
                        $bodega_sub = InventarioBodegaProductos::where('id_bodega_producto',$producto['id_bodega_producto'])->first();
                        $bodega_sub->cantidad = $bodega_sub->cantidad+$producto['cantidad_solicitada'];
                        $bodega_sub->save();
                    }

                    DB::commit();

                    return response()->json([
                        'status' => 'success',
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
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_proforma'=>["Datos no encontrados o la solicitud ya autorizada"]),
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

    public function obtenerProformasCliente(Request $request, CajaBancoProformas $proformas)
    {
        $proformas = $proformas->obtenerProformasCliente($request);

        return response()->json([
            'status' => 'success',
            'result' => $proformas,
            'messages' => null
        ]);
    }


    public function reporte($ext,$id_proforma)
    {
        // echo $ext;
        //$ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteFactura';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteFactura';
            $input = '/var/www/html/resources/reports/Factura';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'Factura';
            $url = '/var/www/html/resources/reports/';
            //$url = 'C:/xampp/htdocs/resources/reports/';
            //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/Factura';
            //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'Factura';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_proforma' => $id_proforma,
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

            /* exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
           print_r($output);*/

            $headers = [
                'Content-Type' => 'application/pdf',
            ];

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteFactura.' . $ext, $headers);
        }else{
            return '';
        }
    }



}

