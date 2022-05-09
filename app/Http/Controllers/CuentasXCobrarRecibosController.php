<?php 

namespace App\Http\Controllers;

use App\Models\CajaBancoBancos;
use App\Models\CajaBancoFacturas;
use App\Models\CajaBancoMonedas;
use App\Models\CajaBancoTasasCambios;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\CuentasXCobrarCuentasXCobrar;
use App\Models\CuentasXCobrarReciboViaPagos;
use App\Models\PublicViaPagos;
use DateTime;
use PHPJasper\PHPJasper;
use Validator,Auth;
use Illuminate\Support\Facades\DB;
use App\Models\CuentasXCobrarRecibos;
use App\Models\CuentasXCobrarRecibosDetalles;

use Illuminate\Http\Request;

class CuentasXCobrarRecibosController extends Controller
{
    /**
     * Obtener una lista de Documentos Contables
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtener(Request $request, CuentasXCobrarRecibos $recibos)
    {
        $recibos = $recibos->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $recibos->total(), 
                'rows' => $recibos->items()
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

    public function obtenerRecibo(Request $request)
    {
        $rules = [
            'id_recibo' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $recibo = CuentasXCobrarRecibos::where('id_recibo',$request->id_recibo)->with('reciboDetalles','reciboCliente')->get();
            return response()->json([
                'status' => 'success',
                'result' => $recibo[0],
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

    public function nuevo(Request $request)
    {
        $tasa = CajaBancoTasasCambios::select('tasa_paralela')->where('fecha',date("Y-m-d"))->first();
        $vias_pago = PublicViaPagos::select(['id_via_pago','descripcion'])->where('activo',true)->orderBy('id_via_pago')->get();
        $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();
        $bancos = CajaBancoBancos::select(['id_banco','descripcion'])->where('activo', 1)->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'vias_pago' => $vias_pago,
                'monedas' => $monedas,
                'bancos' => $bancos,
                't_cambio' => $tasa,
            ],
            'messages' => null
        ]);

    }


    /**
     * Crear un nuevo recibo oficial de caja Cliente
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $messages = [
            'detalleCuentasxCobrar.min' => 'Se requiere agregar por lo menos una deuda.',
            'detalleCuentasxCobrar.doc_exoneracion_ir.required_if' => 'El campo documento exoneracion es requerido cuando el recibo aplica Retención IR',
            'detalleCuentasxCobrar.doc_exoneracion_imi.required_if' => 'El campo documento exoneracion es requerido cuando el recibo aplica Retención IMI',
            'recibo_cliente.required' => 'El campo cliente es requerido'
        ];

    	$rules = [
		    'fecha_emision' => 'required|date',
            'recibo_cliente' => 'required|array|min:1',
            'recibo_cliente.id_cliente' => 'required|integer|min:1',
            'nombre_persona' => 'required|string|max:100',
            //'concepto' => 'required|string|max:300',

            'monto_total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'monto_total_me' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'pago_vuelto' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'pago_vuelto_mn' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            't_cambio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'detallePago' => 'required|array|min:1',
            'detallePago.*.via_pagox.id_via_pago' => 'required|integer|min:1',
            'detallePago.*.moneda_x.id_moneda' => 'required|integer|min:1',
            'detallePago.*.monto_me' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detallePago.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detallePago.*.banco_x.id_banco' => 'required_if:detallePago.*.via_pagox.id_via_pago,5|required_if:detallePago.*.via_pagox.id_via_pago,6|integer|min:1|nullable',
            'detallePago.*.numero_minuta' => 'required_if:detallePago.*.via_pagox.id_via_pago,1|string|max:30|nullable',
            'detallePago.*.numero_nota_credito' => 'required_if:detallePago.*.via_pagox.id_via_pago,4|string|max:30|nullable',
            'detallePago.*.numero_cheque' => 'required_if:detallePago.*.via_pagox.id_via_pago,5|string|max:30|nullable',
            'detallePago.*.numero_transferencia' => 'required_if:detallePago.*.via_pagox.id_via_pago,6|string|max:30|nullable',
            'detallePago.*.numero_recibo_pago' => 'required_if:detallePago.*.via_pagox.id_via_pago,7|string|max:30|nullable',

            'detalleCuentasxCobrar' => 'required|array|min:1',
            'detalleCuentasxCobrar.*.cuentax.id_cuentaxcobrar' => 'required|integer|exists:pgsql.cuentasxcobrar.cuentasxcobrar,id_cuentaxcobrar',
            'detalleCuentasxCobrar.*.descripcion_pago' => 'required|string|max:300',
            'detalleCuentasxCobrar.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleCuentasxCobrar.*.monto_me' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'detalleCuentasxCobrar.*.aplicaIR'=> 'required|boolean',
            'detalleCuentasxCobrar.*.aplicaIMI'=> 'required|boolean',

            'detalleCuentasxCobrar.*.monto_retencion_ir' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleCuentasxCobrar.*.monto_retencion_imi' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'detalleCuentasxCobrar.*.doc_exoneracion_ir' => 'required_if:aplicaIR,true|string|max:20|nullable',
            'detalleCuentasxCobrar.*.doc_exoneracion_imi' => 'required_if:aplicaIMI,true|string|max:20|nullable',


		];

		$validator = Validator::make($request->all(), $rules, $messages);
		if (!$validator->fails()) {
			try{

			DB::beginTransaction();
                $recibo = new CuentasXCobrarRecibos;
                $recibo->fecha_emision = $request->fecha_emision;
                $recibo->estado = 1;
                $recibo->id_cliente =  $request->recibo_cliente['id_cliente'];
                $recibo->nombre_persona = $request->nombre_persona;
                $recibo->tipo_recibo = 1;
                $recibo->total_vuelto = $request->pago_vuelto_mn;
                $recibo->concepto = $request->concepto;
                $recibo->monto_total = $request->monto_total;
                $recibo->monto_total_me = $request->monto_total_me;
                $recibo->t_cambio = $request->t_cambio;
                $recibo->no_documento = CuentasXCobrarRecibos::max('no_documento')+1;
                $recibo->u_creacion = Auth::user()->usuario;
                $recibo->save();

                if($recibo->monto_total>0){
                    $cuentas_x_cobrar = new CuentasXCobrarCuentasXCobrar;
                    $cuentas_x_cobrar->id_cliente =$recibo->id_cliente;
                    $cuentas_x_cobrar->id_tipo_documento = 2;
                    $cuentas_x_cobrar->no_documento_origen = $recibo->no_documento;
                    $cuentas_x_cobrar->es_registro_importado = false;
                    $cuentas_x_cobrar->identificador_origen = $recibo->id_recibo;
                    $cuentas_x_cobrar->fecha_movimiento = date("Y-m-d H:i:s");//$recibo->fecha_emision;
                    $cuentas_x_cobrar->monto_movimiento = $recibo->monto_total*-1;
                    $cuentas_x_cobrar->saldo_actual = 0;
                    $cuentas_x_cobrar->fecha_vencimiento = $recibo->fecha_emision;
                    $cuentas_x_cobrar->descripcion_movimiento = 'Registro de Abono del recibo No.  '.$recibo->no_documento;
                    $cuentas_x_cobrar->usuario_registra =$recibo->u_creacion;
                    $cuentas_x_cobrar->estado = 2;
                    $cuentas_x_cobrar->save();
                }

                $total_pago_cordobas = 0;
                $total_pago_dolares = 0;

                foreach ($request->detallePago as $pago) {
                    $recibo_pago = new CuentasXCobrarReciboViaPagos();
                    $recibo_pago->id_recibo= $recibo->id_recibo;
                    $recibo_pago->id_via_pago = $pago['via_pagox']['id_via_pago'];
                    $recibo_pago->id_moneda = $pago['moneda_x']['id_moneda'];
                    $recibo_pago->monto_me = $pago['monto_me'];
                    $recibo_pago->monto = $pago['monto'];
                    if($recibo_pago->id_via_pago == 1 ||$recibo_pago->id_via_pago == 3 ||$recibo_pago->id_via_pago == 5 || $recibo_pago->id_via_pago == 6){
                        $recibo_pago->id_banco = $pago['banco_x']['id_banco'];
                    }
                    $recibo_pago->numero_minuta = $pago['numero_minuta'];
                    $recibo_pago->numero_nota_credito = $pago['numero_nota_credito'];
                    $recibo_pago->numero_cheque = $pago['numero_cheque'];
                    $recibo_pago->numero_transferencia = $pago['numero_transferencia'];
                    $recibo_pago->numero_recibo_pago = $pago['numero_recibo_pago'];

                    //if($recibo_pago->id_moneda==1){
                        $total_pago_cordobas = $total_pago_cordobas + $recibo_pago->monto;
                    //}else{
                      //  $total_pago_dolares = $total_pago_dolares + $recibo_pago->monto_me;
                    //}

                    $recibo_pago->save();
                }

                $total_ir= 0;
                $total_imi = 0;

			foreach ($request->detalleCuentasxCobrar as $recibosDetalles) {
                $recibos_detalles = new CuentasXCobrarRecibosDetalles;
				$recibos_detalles->id_recibo = $recibo->id_recibo;
                $recibos_detalles->descripcion_pago = $recibosDetalles['descripcion_pago'];
                $recibos_detalles->monto = $recibosDetalles['monto'];
                $recibos_detalles->monto_me =  $recibosDetalles['monto_me'];
                $recibos_detalles->id_cuentaxcobrar =  $recibosDetalles['cuentax']['id_cuentaxcobrar'];
                $recibos_detalles->fecha_pago = $recibo->fecha_emision;

                if($recibosDetalles['aplicaIR']){
                    $recibos_detalles->retencion_ir = $recibosDetalles['monto_retencion_ir'];
                    $recibos_detalles->doc_exoneracion_ir = $recibosDetalles['doc_exoneracion_ir'];
                }else{
                    $recibos_detalles->retencion_ir = 0;
                    $recibos_detalles->doc_exoneracion_ir = '';
                }

                if($recibosDetalles['aplicaIMI']){
                    $recibos_detalles->retencion_imi = $recibosDetalles['monto_retencion_imi'];
                    $recibos_detalles->doc_exoneracion_imi = $recibosDetalles['doc_exoneracion_imi'];
                }else{
                    $recibos_detalles->retencion_imi = 0;
                    $recibos_detalles->doc_exoneracion_imi = '';
                }

                $total_imi=$total_imi + $recibos_detalles->retencion_imi;
                $total_ir = $total_ir+ $recibos_detalles->retencion_ir;

                $recibos_detalles->save();

                $cuentas_x_cobrarUpdate = CuentasXCobrarCuentasXCobrar::findOrFail($recibos_detalles->id_cuentaxcobrar);

                $saldoActual = round($cuentas_x_cobrarUpdate->saldo_actual - $recibos_detalles->monto,2);
                /* 0.0018 */
                /*revisar condiciones */
                if( abs($saldoActual) == 0){
                    $cuentas_x_cobrarUpdate->saldo_actual = 0;
                    $cuentas_x_cobrarUpdate->estado = 2;
                }else{
                    $cuentas_x_cobrarUpdate->saldo_actual = $saldoActual;
                }

                $cuentas_x_cobrarUpdate->save();

                if($cuentas_x_cobrarUpdate->id_tipo_documento == 1 && !$recibosDetalles['cuentax']['es_registro_importado']){
                $facturaActualizar = CajaBancoFacturas::where('id_factura',$cuentas_x_cobrarUpdate->identificador_origen)->first();
                $facturaActualizar->saldo_factura = round($facturaActualizar->saldo_factura - $recibos_detalles->monto,4);
                $facturaActualizar->save();
                }
			}


                /*INICIA movimiento contable - recibo*/

                $documento = new ContabilidadDocumentosContables;
                $tipo = ContabilidadTiposDocumentos::find(6);
                $fecha= date("Y-m-d H:i:s");
                $codigo = $documento->obtenerCodigoDocumento(array('id_tipo_doc'=>6,'fecha_doc'=>$fecha));

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

                $documento->id_tipo_doc = 6;
                $documento->valor = $recibo->monto_total;
                $documento->concepto = 'Registramos pago de Recibo No. '.$recibo->no_documento ;
                $documento->id_moneda = 1;
                $documento->u_creacion = Auth::user()->usuario;
                $documento->estado = 1;

                $documento->save();
                ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');

                /*$documento_cuenta_contableCaja = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableCaja->id_documento = $documento->id_documento;
                $documento_cuenta_contableCaja->id_moneda = 1;
                $documento_cuenta_contableCaja->concepto = $documento->concepto;
                $documento_cuenta_contableCaja->debe_org = $recibo->monto_total;
                $documento_cuenta_contableCaja->haber_org = 0;
                $documento_cuenta_contableCaja->debe = $recibo->monto_total;
                $documento_cuenta_contableCaja->haber = 0;
                $documento_cuenta_contableCaja->id_centro =  null;
                $documento_cuenta_contableCaja->id_cuenta_contable = 56;
                $documento_cuenta_contableCaja->cta_contable = '1111-00-000';
                $documento_cuenta_contableCaja->cta_contable_padre = '1110-00-000';
                $documento_cuenta_contableCaja->save();*/

                if($recibo->monto_total>0){
                    $documento_cuenta_contableS1 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS1->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS1->concepto = 'Registramos ingreso de moneda nacional por recibo No. '.$recibo->no_documento;
                    $documento_cuenta_contableS1->debe = $recibo->monto_total - $total_imi - $total_ir;
                    $documento_cuenta_contableS1->haber =  0;
                    $documento_cuenta_contableS1->debe_org = $recibo->monto_total - $total_imi - $total_ir;
                    $documento_cuenta_contableS1->haber_org =  0;
                    $documento_cuenta_contableS1->id_moneda =  1;
                    $documento_cuenta_contableS1->id_centro =  null;
                    $documento_cuenta_contableS1->id_cuenta_contable = 112;
                    $documento_cuenta_contableS1->cta_contable = '1111-01-000';
                    $documento_cuenta_contableS1->cta_contable_padre = '1111-00-000';
                    $documento_cuenta_contableS1->save();
                }

                if($total_ir>0){
                    $documento_cuenta_contableS3 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS3->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS3->concepto = 'Registramos retencion 2% ventas por Recibo No. '.$recibo->no_documento;
                    $documento_cuenta_contableS3->debe = $total_ir;
                    $documento_cuenta_contableS3->haber =  0;
                    $documento_cuenta_contableS3->debe_org = $total_ir;
                    $documento_cuenta_contableS3->haber_org =  0;
                    $documento_cuenta_contableS3->id_moneda =  1;
                    $documento_cuenta_contableS3->id_centro =  null;
                    $documento_cuenta_contableS3->id_cuenta_contable = 129;
                    $documento_cuenta_contableS3->cta_contable = '1142-02-000';
                    $documento_cuenta_contableS3->cta_contable_padre = '1142-00-000';
                    $documento_cuenta_contableS3->save();
                }

                if($total_imi>0){
                    $documento_cuenta_contableS4 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS4->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS4->concepto = 'Registramos retencion alcaldia 1% ventas por Recibo No. '.$recibo->no_documento;
                    $documento_cuenta_contableS4->debe = $total_imi;
                    $documento_cuenta_contableS4->haber =  0;
                    $documento_cuenta_contableS4->debe_org = $total_imi;
                    $documento_cuenta_contableS4->haber_org =  0;
                    $documento_cuenta_contableS4->id_moneda =  1;
                    $documento_cuenta_contableS4->id_centro =  null;
                    $documento_cuenta_contableS4->id_cuenta_contable = 130;
                    $documento_cuenta_contableS4->cta_contable = '1142-03-000';
                    $documento_cuenta_contableS4->cta_contable_padre = '1142-00-000';
                    $documento_cuenta_contableS4->save();
                }

                /*if($total_pago_dolares>0){
                    $documento_cuenta_contableS2 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS2->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS2->concepto = 'Registramos ingreso de moneda extranjera por recibo No. '.$recibo->no_documento;
                    //$documento_cuenta_contableS2->debe = round($total_pago_dolares*$recibo->t_cambio,4);
                    $documento_cuenta_contableS2->debe = $recibo->monto_total - $total_pago_cordobas;
                    $documento_cuenta_contableS2->haber =  0;
                    $documento_cuenta_contableS2->debe_org = $total_pago_dolares;
                    $documento_cuenta_contableS2->haber_org =  0;
                    $documento_cuenta_contableS2->id_moneda =  3;
                    $documento_cuenta_contableS2->id_centro =  null;
                    $documento_cuenta_contableS2->id_cuenta_contable = 113;
                    $documento_cuenta_contableS2->cta_contable = '1111-02-000';
                    $documento_cuenta_contableS2->cta_contable_padre = '1111-00-000';
                    $documento_cuenta_contableS2->save();
                }*/

                /* if(abs($recibo->monto_total - round(round($total_pago_dolares*$recibo->t_cambio,4) + $total_pago_cordobas,4) )> 0.0001){
                     $documento_cuenta_contableDiff = new ContabilidadDocumentosMovimientos;
                     $documento_cuenta_contableDiff->id_documento = $documento->id_documento;
                     $documento_cuenta_contableDiff->id_moneda = 1;
                     $documento_cuenta_contableDiff->concepto = 'Acreditamos diferencial cambiario por pago de Recibo No. '.$recibo->no_documento;
                     $documento_cuenta_contableDiff->debe_org = 0;
                     $documento_cuenta_contableDiff->haber_org =   abs($recibo->monto_total - round(round($total_pago_dolares*$recibo->t_cambio,4) + $total_pago_cordobas,4)) ;//$recibo->monto_total;
                     $documento_cuenta_contableDiff->debe = 0;
                     $documento_cuenta_contableDiff->haber =   abs($recibo->monto_total - round(round($total_pago_dolares*$recibo->t_cambio,4) + $total_pago_cordobas,4) );
                     $documento_cuenta_contableDiff->id_centro =  null;
                     $documento_cuenta_contableDiff->id_cuenta_contable = 60;
                     $documento_cuenta_contableDiff->cta_contable = '1121-00-000';
                     $documento_cuenta_contableDiff->cta_contable_padre = '1120-00-000';
                     $documento_cuenta_contableDiff->save();
                     }
     */

                $documento_cuenta_contableCliente = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableCliente->id_documento = $documento->id_documento;
                $documento_cuenta_contableCliente->id_moneda = 1;
                $documento_cuenta_contableCliente->concepto = $documento->concepto;
                $documento_cuenta_contableCliente->debe_org = 0;
                $documento_cuenta_contableCliente->haber_org =  $recibo->monto_total;
                $documento_cuenta_contableCliente->debe = 0;
                $documento_cuenta_contableCliente->haber =  $recibo->monto_total;
                $documento_cuenta_contableCliente->id_centro =  null;
                $documento_cuenta_contableCliente->id_cuenta_contable = 60;
                $documento_cuenta_contableCliente->cta_contable = '1121-00-000';
                $documento_cuenta_contableCliente->cta_contable_padre = '1120-00-000';
                $documento_cuenta_contableCliente->save();

                /* TERMINA MOVIMIENTO CONTABLE*/



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
     * Crear un nuevo recibo oficial de caja Trabajador
     *
     * @access  public
     * @param
     * @return  json(string)
     */

    public function registrarROCTrabajador(Request $request)
    {
        $messages = [
            'detalleCuentasxCobrar.min' => 'Se requiere agregar por lo menos una deuda.',
            'detalleCuentasxCobrar.doc_exoneracion_ir.required_if' => 'El campo documento exoneracion es requerido cuando el recibo aplica Retención IR',
            'detalleCuentasxCobrar.doc_exoneracion_imi.required_if' => 'El campo documento exoneracion es requerido cuando el recibo aplica Retención IMI',
        ];

        $rules = [
            'fecha_emision' => 'required|date',
            'recibo_trabajador' => 'required|array|min:1',
            'recibo_trabajador.id_trabajador' => 'required|integer|min:1',
            'nombre_persona' => 'required|string|max:100',
            //'concepto' => 'required|string|max:300',

            'monto_total' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            'monto_total_me' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/|min:0',
            //'moneda' => 'required|array|min:1',
            't_cambio' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'detallePago' => 'required|array|min:1',
            'detallePago.*.via_pagox.id_via_pago' => 'required|integer|min:1',
            'detallePago.*.moneda_x.id_moneda' => 'required|integer|min:1',
            'detallePago.*.monto_me' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detallePago.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detallePago.*.banco_x.id_banco' => 'required_if:detallePago.*.via_pagox.id_via_pago,5|required_if:detallePago.*.via_pagox.id_via_pago,6|integer|min:1|nullable',
            'detallePago.*.numero_minuta' => 'required_if:detallePago.*.via_pagox.id_via_pago,1|string|max:30|nullable',
            'detallePago.*.numero_nota_credito' => 'required_if:detallePago.*.via_pagox.id_via_pago,4|string|max:30|nullable',
            'detallePago.*.numero_cheque' => 'required_if:detallePago.*.via_pagox.id_via_pago,5|string|max:30|nullable',
            'detallePago.*.numero_transferencia' => 'required_if:detallePago.*.via_pagox.id_via_pago,6|string|max:30|nullable',
            'detallePago.*.numero_recibo_pago' => 'required_if:detallePago.*.via_pagox.id_via_pago,7|string|max:30|nullable',

            'detalleCuentasxCobrar' => 'required|array|min:1',
            'detalleCuentasxCobrar.*.cuentax.id_cuentaxcobrar' => 'required|integer|exists:pgsql.cuentasxcobrar.cuentasxcobrar,id_cuentaxcobrar',
            'detalleCuentasxCobrar.*.descripcion_pago' => 'required|string|max:300',
            'detalleCuentasxCobrar.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleCuentasxCobrar.*.monto_me' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'detalleCuentasxCobrar.*.aplicaIR'=> 'required|boolean',
            'detalleCuentasxCobrar.*.aplicaIMI'=> 'required|boolean',

            'detalleCuentasxCobrar.*.monto_retencion_ir' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'detalleCuentasxCobrar.*.monto_retencion_imi' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'detalleCuentasxCobrar.*.doc_exoneracion_ir' => 'required_if:aplicaIR,true|string|max:20|nullable',
            'detalleCuentasxCobrar.*.doc_exoneracion_imi' => 'required_if:aplicaIMI,true|string|max:20|nullable',


        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {
            try{

                DB::beginTransaction();
                $recibo = new CuentasXCobrarRecibos;
                $recibo->fecha_emision = $request->fecha_emision;
                $recibo->estado = 1;
                $recibo->id_empleado =  $request->recibo_trabajador['id_trabajador'];
                $recibo->nombre_persona = $request->nombre_persona;
                $recibo->tipo_recibo = 2;
                $recibo->concepto = $request->concepto;
                $recibo->monto_total = $request->monto_total;
                $recibo->monto_total_me = $request->monto_total_me;
                $recibo->t_cambio = $request->t_cambio;
                $recibo->no_documento = CuentasXCobrarRecibos::max('no_documento')+1;
                $recibo->u_creacion = Auth::user()->usuario;
                $recibo->save();

                if($recibo->monto_total>0){
                    $cuentas_x_cobrar = new CuentasXCobrarCuentasXCobrar;
                    $cuentas_x_cobrar->id_trabajador =$recibo->id_empleado;
                    $cuentas_x_cobrar->id_tipo_documento = 6;///Recibo empleado
                    $cuentas_x_cobrar->no_documento_origen = $recibo->no_documento;
                    $cuentas_x_cobrar->es_registro_importado = false;
                    $cuentas_x_cobrar->identificador_origen = $recibo->id_recibo;
                    $cuentas_x_cobrar->fecha_movimiento = date("Y-m-d H:i:s");//$recibo->fecha_emision;
                    $cuentas_x_cobrar->monto_movimiento = $recibo->monto_total*-1;
                    $cuentas_x_cobrar->saldo_actual = 0;
                    $cuentas_x_cobrar->fecha_vencimiento = $recibo->fecha_emision;
                    $cuentas_x_cobrar->descripcion_movimiento = 'Registro de Abono del recibo No.  '.$recibo->no_documento;
                    $cuentas_x_cobrar->usuario_registra =$recibo->u_creacion;
                    $cuentas_x_cobrar->estado = 2;
                    $cuentas_x_cobrar->save();
                }

                $total_pago_cordobas = 0;
                $total_pago_dolares = 0;

                foreach ($request->detallePago as $pago) {
                    $recibo_pago = new CuentasXCobrarReciboViaPagos();
                    $recibo_pago->id_recibo= $recibo->id_recibo;
                    $recibo_pago->id_via_pago = $pago['via_pagox']['id_via_pago'];
                    $recibo_pago->id_moneda = $pago['moneda_x']['id_moneda'];
                    $recibo_pago->monto_me = $pago['monto_me'];
                    $recibo_pago->monto = $pago['monto'];
                    if($recibo_pago->id_via_pago == 1 ||$recibo_pago->id_via_pago == 3 ||$recibo_pago->id_via_pago == 5 || $recibo_pago->id_via_pago == 6){
                        $recibo_pago->id_banco = $pago['banco_x']['id_banco'];
                    }
                    $recibo_pago->numero_minuta = $pago['numero_minuta'];
                    $recibo_pago->numero_nota_credito = $pago['numero_nota_credito'];
                    $recibo_pago->numero_cheque = $pago['numero_cheque'];
                    $recibo_pago->numero_transferencia = $pago['numero_transferencia'];
                    $recibo_pago->numero_recibo_pago = $pago['numero_recibo_pago'];

                    //if($recibo_pago->id_moneda==1){
                    $total_pago_cordobas = $total_pago_cordobas + $recibo_pago->monto;
                    //}else{
                    //  $total_pago_dolares = $total_pago_dolares + $recibo_pago->monto_me;
                    //}

                    $recibo_pago->save();
                }

                $total_ir= 0;
                $total_imi = 0;

                foreach ($request->detalleCuentasxCobrar as $recibosDetalles) {
                    $recibos_detalles = new CuentasXCobrarRecibosDetalles;
                    $recibos_detalles->id_recibo = $recibo->id_recibo;
                    $recibos_detalles->descripcion_pago = $recibosDetalles['descripcion_pago'];
                    $recibos_detalles->monto = $recibosDetalles['monto'];
                    $recibos_detalles->monto_me =  $recibosDetalles['monto_me'];
                    $recibos_detalles->id_cuentaxcobrar =  $recibosDetalles['cuentax']['id_cuentaxcobrar'];
                    $recibos_detalles->fecha_pago = $recibo->fecha_emision;

                    if($recibosDetalles['aplicaIR']){
                        $recibos_detalles->retencion_ir = $recibosDetalles['monto_retencion_ir'];
                        $recibos_detalles->doc_exoneracion_ir = $recibosDetalles['doc_exoneracion_ir'];
                    }else{
                        $recibos_detalles->retencion_ir = 0;
                        $recibos_detalles->doc_exoneracion_ir = '';
                    }

                    if($recibosDetalles['aplicaIMI']){
                        $recibos_detalles->retencion_imi = $recibosDetalles['monto_retencion_imi'];
                        $recibos_detalles->doc_exoneracion_imi = $recibosDetalles['doc_exoneracion_imi'];
                    }else{
                        $recibos_detalles->retencion_imi = 0;
                        $recibos_detalles->doc_exoneracion_imi = '';
                    }

                    $total_imi=$total_imi + $recibos_detalles->retencion_imi;
                    $total_ir = $total_ir+ $recibos_detalles->retencion_ir;

                    $recibos_detalles->save();

                    $cuentas_x_cobrarUpdate = CuentasXCobrarCuentasXCobrar::findOrFail($recibos_detalles->id_cuentaxcobrar);

                    $saldoActual = round($cuentas_x_cobrarUpdate->saldo_actual - $recibos_detalles->monto,2);
                    /* 0.0018 */
                    /*revisar condiciones */
                    if( abs($saldoActual) == 0){
                        $cuentas_x_cobrarUpdate->saldo_actual = 0;
                        $cuentas_x_cobrarUpdate->estado = 2;
                    }else{
                        $cuentas_x_cobrarUpdate->saldo_actual = $saldoActual;
                    }

                    $cuentas_x_cobrarUpdate->save();

                    if($cuentas_x_cobrarUpdate->id_tipo_documento == 1){
                        $facturaActualizar = CajaBancoFacturas::where('id_factura',$cuentas_x_cobrarUpdate->identificador_origen)->first();
                        $facturaActualizar->saldo_factura = round($facturaActualizar->saldo_factura - $recibos_detalles->monto,4);
                        $facturaActualizar->save();
                    }
                }


                /*INICIA movimiento contable - recibo*/

                $documento = new ContabilidadDocumentosContables;
                $tipo = ContabilidadTiposDocumentos::find(6);
                $fecha= date("Y-m-d H:i:s");
                $codigo = $documento->obtenerCodigoDocumento(array('id_tipo_doc'=>6,'fecha_doc'=>$fecha));

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

                $documento->id_tipo_doc = 6;
                $documento->valor = $recibo->monto_total;
                $documento->concepto = 'Registramos pago de Recibo No. '.$recibo->no_documento ;
                $documento->id_moneda = 1;
                $documento->u_creacion = Auth::user()->usuario;
                $documento->estado = 1;

                $documento->save();
                ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');

                if($recibo->monto_total>0){
                    $documento_cuenta_contableS1 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS1->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS1->concepto = 'Registramos ingreso de moneda nacional por recibo No. '.$recibo->no_documento;
                    $documento_cuenta_contableS1->debe = $recibo->monto_total - $total_imi - $total_ir;
                    $documento_cuenta_contableS1->haber =  0;
                    $documento_cuenta_contableS1->debe_org = $recibo->monto_total - $total_imi - $total_ir;
                    $documento_cuenta_contableS1->haber_org =  0;
                    $documento_cuenta_contableS1->id_moneda =  1;
                    $documento_cuenta_contableS1->id_centro =  null;
                    $documento_cuenta_contableS1->id_cuenta_contable = 112;
                    $documento_cuenta_contableS1->cta_contable = '1111-01-000';
                    $documento_cuenta_contableS1->cta_contable_padre = '1111-00-000';
                    $documento_cuenta_contableS1->save();
                }

                if($total_ir>0){
                    $documento_cuenta_contableS3 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS3->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS3->concepto = 'Registramos retencion 2% ventas por Recibo No. '.$recibo->no_documento;
                    $documento_cuenta_contableS3->debe = $total_ir;
                    $documento_cuenta_contableS3->haber =  0;
                    $documento_cuenta_contableS3->debe_org = $total_ir;
                    $documento_cuenta_contableS3->haber_org =  0;
                    $documento_cuenta_contableS3->id_moneda =  1;
                    $documento_cuenta_contableS3->id_centro =  null;
                    $documento_cuenta_contableS3->id_cuenta_contable = 129;
                    $documento_cuenta_contableS3->cta_contable = '1142-02-000';
                    $documento_cuenta_contableS3->cta_contable_padre = '1142-00-000';
                    $documento_cuenta_contableS3->save();
                }

                if($total_imi>0){
                    $documento_cuenta_contableS4 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS4->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS4->concepto = 'Registramos retencion alcaldia 1% ventas por Recibo No. '.$recibo->no_documento;
                    $documento_cuenta_contableS4->debe = $total_imi;
                    $documento_cuenta_contableS4->haber =  0;
                    $documento_cuenta_contableS4->debe_org = $total_imi;
                    $documento_cuenta_contableS4->haber_org =  0;
                    $documento_cuenta_contableS4->id_moneda =  1;
                    $documento_cuenta_contableS4->id_centro =  null;
                    $documento_cuenta_contableS4->id_cuenta_contable = 130;
                    $documento_cuenta_contableS4->cta_contable = '1142-03-000';
                    $documento_cuenta_contableS4->cta_contable_padre = '1142-00-000';
                    $documento_cuenta_contableS4->save();
                }

                $documento_cuenta_contableCliente = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contableCliente->id_documento = $documento->id_documento;
                $documento_cuenta_contableCliente->id_moneda = 1;
                $documento_cuenta_contableCliente->concepto = $documento->concepto;
                $documento_cuenta_contableCliente->debe_org = 0;
                $documento_cuenta_contableCliente->haber_org =  $recibo->monto_total;
                $documento_cuenta_contableCliente->debe = 0;
                $documento_cuenta_contableCliente->haber =  $recibo->monto_total;
                $documento_cuenta_contableCliente->id_centro =  null;
                $documento_cuenta_contableCliente->id_cuenta_contable = 60;
                $documento_cuenta_contableCliente->cta_contable = '1123-00-000';
                $documento_cuenta_contableCliente->cta_contable_padre = '1120-00-000';
                $documento_cuenta_contableCliente->save();

                /* TERMINA MOVIMIENTO CONTABLE*/



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