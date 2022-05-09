<?php 

namespace App\Http\Controllers;

use App\Models\ContabilidadCuentasBancarias;
use App\Models\ContabilidadCuentasContables;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use Validator,Auth,DB;
use App\Models\CajaBancoMinutasDeposito;
use Illuminate\Http\Request;
use DateTime;
class CajaBancoMinutasDepositoController extends Controller
{
    /**
     * Obtener una listado de minutas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, CajaBancoMinutasDeposito $minutas)
    {
        $minutas = $minutas->obtenerMinutas($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $minutas->total(), 
                'rows' => $minutas->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * obtener minuta Especifica
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerMinuta(Request $request)
    {
        $rules = [
            'id_minuta_deposito' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $minuta = CajaBancoMinutasDeposito::where('id_minuta_deposito',$request->id_minuta_deposito)
               ->with(['cuentaBancariaMinuta' => function($query) {
                     $query->with('monedaCuentaBancaria');
                 }])
                ->with('sucursalMinuta')->first();

            if(!empty($minuta)){		
            return response()->json([
                'status' => 'success',
                'result' => $minuta,
                'messages' => null
            ]);

        }
        else{
          return response()->json([
                'status' => 'error',
                'result' => array('id_minuta'=>["Datos no encontrados"]),
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
     * Crear una nueva minuta
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $message = [
            'no_referencia.required' => 'El campo número de referencia es requerido.'
        ];
        $rules = [
            'no_referencia' => 'required|string|max:100',
            'fecha_deposito' => 'required|date',
            'concepto' => 'required|string|max:256',
            'cuenta_bancaria' => 'required|array|min:1',
            'cuenta_bancaria.id_cuenta_bancaria' => 'required|integer|min:1',
            'sucursal' => 'required|array|min:1',
            'sucursal.id_sucursal' => 'required|integer|min:1',
            'tasa_cambio'=> 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:33',
            'monto_cordobas' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0.01',
            'monto_dolares' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0.01',
        ];

        $validator = Validator::make($request->all(), $rules,$message);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
            $minuta = new CajaBancoMinutasDeposito;
            $minuta->no_referencia = $request->no_referencia;
            $minuta->fecha_deposito = $request->fecha_deposito;
            $minuta->concepto = $request->concepto;
            $minuta->id_cuenta_bancaria = $request->cuenta_bancaria['id_cuenta_bancaria'];
            $minuta->id_sucursal = $request->sucursal['id_sucursal'];
            $minuta->tasa_cambio = $request->tasa_cambio;
            $minuta->monto_cordobas = $request->monto_cordobas;
            $minuta->monto_dolares = $request->monto_dolares;
            $minuta->u_creacion = Auth::user()->usuario;
            $minuta->estado = 1;
            $minuta->save();



                /*INICIA movimiento contable - Factura*/

                $documento = new ContabilidadDocumentosContables;
                $tipo = ContabilidadTiposDocumentos::find(5);
                //$fecha= date("Y-m-d H:i:s");
                $codigo = $documento->obtenerCodigoDocumento(array('id_tipo_doc'=>5,'fecha_doc'=>$minuta->fecha_deposito));

                $nuevo_codigo = json_decode($codigo[0]);

                date_default_timezone_set('America/Managua');


                $documento->num_documento = $tipo->prefijo.'-'.$nuevo_codigo->secuencia;
                $documento->fecha_emision =  $request->fecha_deposito;
                $documento->codigo_documento = $nuevo_codigo->secuencia;


                $date = DateTime::createFromFormat("Y-m-d", $documento->fecha_emision);
                $meses = config('global.meses');

                $periodo = ContabilidadPeriodoFiscal::where('periodo',$date->format("Y"))->first();

                if(empty($periodo)){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_deposito'=>["El periodo ".$date->format("Y")." no se encuentra registrado, por favor consulte al administrador"]),
                        'messages' => null
                    ]);
                    exit;
                }

                if($periodo->estado){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_deposito'=>["El periodo ".$date->format("Y")." es inválido, ya que se encuentra en estado COMPLETADO"]),
                        'messages' => null
                    ]);
                    exit;
                }

                $periodo_mes = ContabilidadPeriodoMeses::where('id_periodo_fiscal',$periodo->id_periodo_fiscal)->where('mes',$date->format("n"))->first();

                if(empty($periodo_mes)){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_deposito'=>["El mes ".$date->format("F")." no se encuentra registrado, por favor consulte al administrador"]),
                        'messages' => null
                    ]);
                    exit;
                }

                if($periodo_mes->estado == 2 ){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_deposito'=>["El mes ".$meses[$periodo_mes->mes-1]." es inválido, ya que se encuentra en estado COMPLETADO"]),
                        'messages' => null
                    ]);
                    exit;
                }

                $documento->id_periodo_fiscal = $periodo->id_periodo_fiscal;

                $documento->id_tipo_doc = 5;
                $documento->valor = $minuta->monto_cordobas;
                $documento->concepto = 'Contabilizando depósitos del '. $minuta->fecha_deposito .'. No referencia: '.$minuta->no_referencia;
                $documento->id_moneda = 1;
                $documento->u_creacion = Auth::user()->usuario;
                $documento->estado = 1;



                $documento->save();

                $minuta->id_documento_contable= $documento->id_documento;
                $minuta->save();

                ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');

                /* Inicio Seccion 1) Moneda Nacional / Extranjera*/

                $cuenta_contable_banco = ContabilidadCuentasContables::find($request->cuenta_bancaria['id_cuenta_contable']);
                $cuenta_contable_banco_padre = ContabilidadCuentasContables::find($cuenta_contable_banco->id_cuenta_padre);
                $cuenta_bancaria = ContabilidadCuentasBancarias::find($request->cuenta_bancaria['id_cuenta_bancaria']);

                    $documento_cuenta_contableS1 = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS1->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS1->concepto = $documento->concepto;
                    $documento_cuenta_contableS1->debe = $minuta->monto_cordobas;
                    if($cuenta_bancaria->id_moneda==1){
                        $documento_cuenta_contableS1->debe_org = $minuta->monto_cordobas;
                    }
                    if($cuenta_bancaria->id_moneda==3){
                        $documento_cuenta_contableS1->debe_org = $minuta->monto_dolares;
                    }
                    $documento_cuenta_contableS1->haber = 0;
                    $documento_cuenta_contableS1->haber_org =  0;
                    $documento_cuenta_contableS1->id_moneda =  $cuenta_bancaria->id_moneda;
                    $documento_cuenta_contableS1->id_centro =  null;
                    $documento_cuenta_contableS1->id_cuenta_contable = $cuenta_contable_banco->id_cuenta_contable;
                    $documento_cuenta_contableS1->cta_contable = $cuenta_contable_banco->cta_contable;
                    $documento_cuenta_contableS1->cta_contable_padre = $cuenta_contable_banco_padre->cta_contable;
                    $documento_cuenta_contableS1->save();

                    $cuenta_contable_banco2 = ContabilidadCuentasContables::find(157);
                    if($cuenta_bancaria->id_moneda==3){
                        $cuenta_contable_banco2 = ContabilidadCuentasContables::find(158);
                    }
                    $cuenta_contable_banco_padre2 = ContabilidadCuentasContables::find($cuenta_contable_banco2->id_cuenta_padre);

                    $documento_cuenta_contableS2a = new ContabilidadDocumentosMovimientos;
                    $documento_cuenta_contableS2a->id_documento = $documento->id_documento;
                    $documento_cuenta_contableS2a->concepto = $documento->concepto;
                    $documento_cuenta_contableS2a->debe = 0;
                    $documento_cuenta_contableS2a->haber =  $minuta->monto_cordobas;
                    $documento_cuenta_contableS2a->debe_org = 0;

                    $documento_cuenta_contableS2a->id_moneda =  $cuenta_bancaria->id_moneda;
                    if($cuenta_bancaria->id_moneda==1){
                        $documento_cuenta_contableS2a->haber_org = $minuta->monto_cordobas;
                    }
                    if($cuenta_bancaria->id_moneda==3){
                        $documento_cuenta_contableS2a->haber_org = $minuta->monto_dolares;
                    }


                    $documento_cuenta_contableS2a->id_centro =  null;
                    $documento_cuenta_contableS2a->id_cuenta_contable = $cuenta_contable_banco2->id_cuenta_contable;
                    $documento_cuenta_contableS2a->cta_contable = $cuenta_contable_banco2->cta_contable;
                    $documento_cuenta_contableS2a->cta_contable_padre = $cuenta_contable_banco_padre2->cta_contable;
                    $documento_cuenta_contableS2a->save();

                /* TERMINA MOVIMIENTO CONTABLE*/



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

    /**
     * Actualizar minuta existente
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function actualizar(Request $request)
    {
        $rules = [
            'id_minuta_deposito' => 'required|integer|min:1',
            'no_referencia' => 'required|string|max:100',
            'concepto' => 'required|string|max:256',
            'fecha_deposito' => 'required|date',
            'sucursal_minuta' => 'required|array|min:1',
            'sucursal_minuta.id_sucursal' => 'required|integer|min:1',
            'cuenta_bancaria_minuta' => 'required|array|min:1',
            'cuenta_bancaria_minuta.id_cuenta_bancaria' => 'required|integer|min:1',
            'tasa_cambio'=> 'required|numeric|regex:/^\d*(\.\d{1,4})?$/|min:32',
            'monto_cordobas' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0.01',
            'monto_dolares' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0.01',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $minuta = CajaBancoMinutasDeposito::find($request->id_minuta_deposito);
            $minuta->no_referencia = $request->no_referencia;
            $minuta->concepto = $request->concepto;
            $minuta->fecha_deposito = $request->fecha_deposito;
            $minuta->id_cuenta_bancaria = $request->cuenta_bancaria_minuta['id_cuenta_bancaria'];
            $minuta->id_sucursal = $request->sucursal_minuta['id_sucursal'];
            $minuta->tasa_cambio = $request->tasa_cambio;
            $minuta->monto_cordobas = $request->monto_cordobas;
            $minuta->monto_dolares = $request->monto_dolares;
            $minuta->save();

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
     * Desactiva rol
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function anular(Request $request)
    {
        $messages = [
        ];


        $rules = [
            'id_minuta_deposito' => 'required|integer',
            'causa_anulacion' => 'required|string|max:100',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $minuta = CajaBancoMinutasDeposito::find($request->id_minuta_deposito);
                $minuta->estado = 0;
                $minuta->causa_anulacion = ' **Minuta anulada por '.Auth::user()->usuario.' a las '.date("Y-m-d H:i:s").' Causa: '.$request->causa_anulacion;
                $minuta->save();

                    if(!empty($minuta->id_documento_contable)) {//minutas con doc contable
                        $documento = ContabilidadDocumentosContables::find($minuta->id_documento_contable);
                        $documento->estado = 0;
                        $documento->save();
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