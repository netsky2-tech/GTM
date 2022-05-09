<?php 

namespace App\Http\Controllers;


use App\Models\AdmonAjustes;
use App\Models\CajaBancoTasasCambios;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\CuentasXCobrarCuentasXCobrar;
use App\Models\CuentasXCobrarTiposNotasDebito;
use DateTime;
use PHPJasper\PHPJasper;
use Validator,Auth;
use Illuminate\Support\Facades\DB;
use App\Models\CuentasXCobrarNotaDebito;
use App\Models\CuentasXCobrarNotaDebitoDetalles;

use Illuminate\Http\Request;

class CuentasXCobrarNotaDebitoController extends Controller
{
    /**
     * Obtener una lista de Documentos Contables
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtener(Request $request, CuentasXCobrarNotaDebito $notas_debito)
    {
        $notas_debito = $notas_debito->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $notas_debito->total(), 
                'rows' => $notas_debito->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * obtener Estado Finaciero Especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerNotaDebito(Request $request)
    {
        $rules = [
            'id_nota_debito' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $nota_debito = CuentasXCobrarNotaDebito::where('id_nota_debito',$request->id_nota_debito)->with('notaDebitoDetalles','notaDebitoCliente')->get();
            return response()->json([
                'status' => 'success',
                'result' => $nota_debito[0],
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
        $tasa = CajaBancoTasasCambios::select('tasa')->where('fecha',date("Y-m-d"))->first();
        $tiposND= CuentasXCobrarTiposNotasDebito::select('id_tipo_nota_debito','descripcion','id_cuenta_contable')->with('tipoCuentaContable')->where('estado',1)->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                't_cambio' => $tasa,
                'tipos_notas' => $tiposND,
            ],
            'messages' => null
        ]);
    }


    /**
     * Crear un nuevo recibo oficial de caja
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    { 
        $messages = [
            'detalleFacturas.min' => 'Se requiere agregar por lo menos una deuda.',
        ];

    	$rules = [
		    'fecha_emision' => 'required|date',

            'nota_debito_cliente' => 'required|array|min:1',
            'nota_debito_cliente.id_cliente' => 'required|integer|min:1',

            'concepto' => 'required|string|max:300',
            't_cambio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'subtotal' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'monto_total_iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'monto_total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',


            'detalleFacturas' => 'required|array|min:1',
            'detalleFacturas.*.nota_debito_factura' => 'required|array|min:1',
            'detalleFacturas.*.nota_debito_factura.id_factura' => 'required|integer|min:1',
            'detalleFacturas.*.nota_debito_tipo' => 'required|array|min:1',
            'detalleFacturas.*.nota_debito_tipo.id_tipo_nota_debito' => 'required|integer|min:1',
            'detalleFacturas.*.descripcion' => 'required|string|max:300',
            'detalleFacturas.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleFacturas.*.subtotal' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleFacturas.*.monto_iva' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

        ];

		$validator = Validator::make($request->all(), $rules, $messages);
		if (!$validator->fails()) {
			try{

			DB::beginTransaction();
                if($request->monto_total>0){
                $nota_debito = new CuentasXCobrarNotaDebito;
                $nota_debito->fecha_emision = $request->fecha_emision;
                $nota_debito->fecha_vencimiento  =  date('Y-m-d', strtotime($nota_debito->fecha_emision. ' + 365 days'));
                $nota_debito->estado = 1;
                $nota_debito->id_cliente =  $request->nota_debito_cliente['id_cliente'];

                $nota_debito->concepto = $request->concepto;
                $nota_debito->monto_subtotal = $request->subtotal;
                $nota_debito->monto_iva = $request->monto_total_iva;
                $nota_debito->monto_total = $request->monto_total;

                $nota_debito->t_cambio = $request->t_cambio;
                $nota_debito->secuencia = CuentasXCobrarNotaDebito::max('secuencia')+1;
                $nota_debito->no_documento = 'ND-'.$nota_debito->secuencia;
                $nota_debito->u_creacion = Auth::user()->usuario;
                $nota_debito->save();

                    foreach ($request->detalleFacturas as $NotaDebitoDetalles) {
                        $recibos_detalles = new CuentasXCobrarNotaDebitoDetalles;
                        $recibos_detalles->id_factura = $NotaDebitoDetalles['nota_debito_factura']['id_factura'];
                        $recibos_detalles->id_tipo_nota_debito =  $NotaDebitoDetalles['nota_debito_tipo']['id_tipo_nota_debito'];
                        $recibos_detalles->id_nota_debito = $nota_debito->id_nota_debito;
                        $recibos_detalles->descripcion = $NotaDebitoDetalles['descripcion'];
                        $recibos_detalles->precio = $NotaDebitoDetalles['subtotal'];
                        $recibos_detalles->subtotal = $NotaDebitoDetalles['monto'];
                        $recibos_detalles->iva = $NotaDebitoDetalles['monto_iva'];
                        $recibos_detalles->cantidad = 1;
                        $recibos_detalles->save();
                    }


                    $cuentas_x_cobrar = new CuentasXCobrarCuentasXCobrar;
                    $cuentas_x_cobrar->id_cliente =$nota_debito->id_cliente;
                    $cuentas_x_cobrar->id_tipo_documento = 4; //Tipo 3: N/D
                    $cuentas_x_cobrar->no_documento_origen = $nota_debito->no_documento;
                    $cuentas_x_cobrar->es_registro_importado = false;
                    $cuentas_x_cobrar->identificador_origen = $nota_debito->id_nota_debito;
                    $cuentas_x_cobrar->fecha_movimiento = date("Y-m-d H:i:s");//$nota_debito->fecha_emision;
                    $cuentas_x_cobrar->monto_movimiento = $nota_debito->monto_total;
                    $cuentas_x_cobrar->saldo_actual = 0;
                    $cuentas_x_cobrar->fecha_vencimiento = $nota_debito->fecha_emision;
                    $cuentas_x_cobrar->descripcion_movimiento = 'Debitamos saldo por Nota de Débito No. '.$nota_debito->no_documento;
                    $cuentas_x_cobrar->usuario_registra =$nota_debito->u_creacion;
                    $cuentas_x_cobrar->estado = 1;
                    $cuentas_x_cobrar->save();

                    /*INICIA movimiento contable - recibo*/

                    $documento = new ContabilidadDocumentosContables;
                    $tipo = ContabilidadTiposDocumentos::find(1);
                    $fecha= date("Y-m-d H:i:s");
                    $codigo = $documento->obtenerCodigoDocumento(array('id_tipo_doc'=>1,'fecha_doc'=>$fecha));

                    $nuevo_codigo = json_decode($codigo[0]);

                    date_default_timezone_set('America/Managua');

                    $documento->num_documento = $tipo->prefijo.'-'.$nuevo_codigo->secuencia;
                    $documento->fecha_emision =  date('Y-m-d');
                    $documento->codigo_documento = $nuevo_codigo->secuencia;


                    $date = DateTime::createFromFormat("Y-m-d", $documento->fecha_emision);

                    $periodo = ContabilidadPeriodoFiscal::where('periodo',$date->format("Y"))->get();

                    if(empty($periodo[0])){
                        return response()->json([
                            'status' => 'error',
                            'result' =>   array('fecha_emision'=>["El periodo ".$date->format("Y")." no se encuentra registrado, por favor consulte al administrador"]),
                            'messages' => null
                        ]);
                        exit;
                    }

                    if($periodo[0]->estado){
                        return response()->json([
                            'status' => 'error',
                            'result' =>   array('fecha_emision'=>["El periodo ".$date->format("Y")." es inválido, ya que se encuentra en estado COMPLETADO"]),
                            'messages' => null
                        ]);
                        exit;
                    }

                    $periodo_mes = ContabilidadPeriodoMeses::where('id_periodo_fiscal',$periodo[0]->id_periodo_fiscal)->where('mes',$date->format("n"))->get();

                    if(empty($periodo_mes[0])){
                        return response()->json([
                            'status' => 'error',
                            'result' =>   array('fecha_emision'=>["El mes ".$date->format("F")." no se encuentra registrado, por favor consulte al administrador"]),
                            'messages' => null
                        ]);
                        exit;
                    }

                    if($periodo_mes[0]->estado == 2 ){
                        return response()->json([
                            'status' => 'error',
                            'result' =>   array('fecha_emision'=>["El mes ".config('global.meses')[$periodo_mes[0]->mes-1]." es inválido, ya que se encuentra en estado COMPLETADO"]),
                            'messages' => null
                        ]);
                        exit;
                    }

                    $documento->id_periodo_fiscal = $periodo[0]->id_periodo_fiscal;

                    $documento->id_tipo_doc = 1;
                    $documento->valor = $nota_debito->monto_total;
                    $documento->concepto = 'Registramos nota de débito No. '.$nota_debito->no_documento ;
                    $documento->id_moneda = 1;
                    $documento->u_creacion = Auth::user()->usuario;
                    $documento->estado = 1;

                    $documento->save();
                    ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');


                    foreach ($request->detalleFacturas as $NotaDebitoDetalles) {
                        $documento_cuenta_contableCliente = new ContabilidadDocumentosMovimientos;
                        $documento_cuenta_contableCliente->id_documento = $documento->id_documento;
                        $documento_cuenta_contableCliente->id_moneda = 1;
                        $documento_cuenta_contableCliente->concepto = $documento->concepto.' . Por factura No. '.$NotaDebitoDetalles['nota_debito_factura']['no_documento'];
                        $documento_cuenta_contableCliente->debe = 0;
                        $documento_cuenta_contableCliente->haber =  $NotaDebitoDetalles['subtotal'];
                        $documento_cuenta_contableCliente->debe_org = 0;
                        $documento_cuenta_contableCliente->haber_org =  $NotaDebitoDetalles['subtotal'];
                        $documento_cuenta_contableCliente->id_centro =  null;
                        $documento_cuenta_contableCliente->id_cuenta_contable = $NotaDebitoDetalles['nota_debito_tipo']['id_cuenta_contable'];
                        $documento_cuenta_contableCliente->cta_contable = $NotaDebitoDetalles['nota_debito_tipo']['tipo_cuenta_contable']['cta_contable'];
                        $documento_cuenta_contableCliente->cta_contable_padre = $NotaDebitoDetalles['nota_debito_tipo']['tipo_cuenta_contable']['cta_contable'];
                        $documento_cuenta_contableCliente->save();
                    }

                    if($nota_debito->monto_iva>0){
                        $documento_cuenta_contableS5 = new ContabilidadDocumentosMovimientos;
                        $documento_cuenta_contableS5->id_documento = $documento->id_documento;
                        $documento_cuenta_contableS5->concepto = 'Registramos Impuesto al valor agregado por nota de debito No. '.$nota_debito->no_documento;
                        $documento_cuenta_contableS5->id_moneda = 1;
                        $documento_cuenta_contableS5->debe =0;
                        $documento_cuenta_contableS5->haber = $nota_debito->monto_iva;
                        $documento_cuenta_contableS5->debe_org = 0;
                        $documento_cuenta_contableS5->haber_org =  $nota_debito->monto_iva;
                        $documento_cuenta_contableS5->id_moneda =  1;
                        $documento_cuenta_contableS5->id_centro =  null;
                        $documento_cuenta_contableS5->id_cuenta_contable = 78;
                        $documento_cuenta_contableS5->cta_contable = '2131-00-000';
                        $documento_cuenta_contableS5->cta_contable_padre = '2130-00-000';
                        $documento_cuenta_contableS5->save();
                    }

                    $documento_cuenta_contableCaja = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableCaja->id_documento = $documento->id_documento;
                    $documento_cuenta_contableCaja->concepto = $documento->concepto;
                    $documento_cuenta_contableCaja->id_moneda = 1;
                    $documento_cuenta_contableCaja->debe = $nota_debito->monto_total;
                    $documento_cuenta_contableCaja->haber = 0;
                    $documento_cuenta_contableCaja->debe_org = $nota_debito->monto_total;
                    $documento_cuenta_contableCaja->haber_org = 0;
                    $documento_cuenta_contableCaja->id_centro=  null;
                    $documento_cuenta_contableCaja->id_cuenta_contable = 60;
                    $documento_cuenta_contableCaja->cta_contable = '1121-00-000';
                    $documento_cuenta_contableCaja->cta_contable_padre = '1120-00-000';
                    $documento_cuenta_contableCaja->save();
                    /* TERMINA MOVIMIENTO CONTABLE*/
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
            'id_nota_debito' => 'required|integer|min:0',
            'extension' => 'required|string|max:4',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();

                $input = '/var/www/html/resources/reports/ReporteNotaDebito';
                $output = '/var/www/html/resources/reports/' .$hora_actual .'ReporteNotaDebito';

                //$input = 'C:/xampp7/htdocs/resources/reports/ReporteNotaDebito';
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual .'ReporteNotaDebito';


                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = 'C:/xampp7/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_nota_debitox' => $request->id_nota_debito,
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



}