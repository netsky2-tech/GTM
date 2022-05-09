<?php 

namespace App\Http\Controllers;



use App\Models\AdmonAjustes;
use App\Models\CajaBancoBancos;
use App\Models\CajaBancoConciliaciones;
use App\Models\CajaBancoConciliacionesMovimientos;
use App\Models\CajaBancoEstadoCuentaBanco;
use App\Models\CajaBancoEstadoCuentaBancoMovimientos;
use App\Models\ContabilidadCuentasBancarias;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use Hash, Validator,Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel as Excel;
use PHPJasper\PHPJasper;

class CajaBancoConciliacionController extends Controller
{


    public function nueva(Request $request)
    {

        $bancos = CajaBancoBancos::where('activo', 1) ->with(['cuentasBancariasBanco' => function($query) {
            $query->with('monedaCuentaBancaria');}])->get();
        $periodos = ContabilidadPeriodoFiscal::select('id_periodo_fiscal','periodo')->orderby('periodo','desc')->with('mesesPeriodo')->get();


        return response()->json([
                'status' => 'success',
                'result' => [
                    'bancos' => $bancos,
                    'periodos' => $periodos,
                ],
                'messages' => null
            ]);

    }

    public function obtenerEstadosCuenta(Request $request, CajaBancoEstadoCuentaBanco $estado_cuenta)
    {
        $estado_cuenta = $estado_cuenta->obtener($request);
        $cuentas_bancarias = ContabilidadCuentasBancarias::select('id_cuenta_bancaria','id_banco','id_moneda','id_cuenta_contable',
            DB::raw("concat((select b.descripcion from cjabnco.bancos b where b.id_banco = contabilidad.cuentas_bancarias.id_banco),' ',(select moned.descripcion 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),'(',(select moned.codigo 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),') ',numero_cuenta) as numero_cuenta")
        )->where('estado', 1)->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $estado_cuenta->total(),
                'rows' => $estado_cuenta->items(),
                'cuentas_bancarias'=>$cuentas_bancarias,
            ],
            'messages' => null
        ]);
    }

    public function obtenerConciliaciones(Request $request, CajaBancoConciliaciones $conciliaciones)
    {
        $conciliaciones = $conciliaciones->obtener($request);
        $cuentas_bancarias = ContabilidadCuentasBancarias::select('id_cuenta_bancaria','id_banco','id_moneda','id_cuenta_contable',
            DB::raw("concat((select b.descripcion from cjabnco.bancos b where b.id_banco = contabilidad.cuentas_bancarias.id_banco),' ',(select moned.descripcion 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),'(',(select moned.codigo 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),') ',numero_cuenta) as numero_cuenta")
        )->where('estado', 1)->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $conciliaciones->total(),
                'rows' => $conciliaciones->items(),
                'cuentas_bancarias'=>$cuentas_bancarias,
            ],
            'messages' => null
        ]);
    }

    public function obtenerEstadoCuenta(Request $request)
    {
        $rules = [
            'id_estado_cuenta_banco' => 'required|integer|min:1',
            'cargar_dependencias' => 'required|boolean',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            //$estado_cuenta = $estado_cuenta->obtenerEstadoCuenta($request);

            $estado_cuenta = CajaBancoEstadoCuentaBanco::select(['*'])
                ->where('id_estado_cuenta_banco', $request->id_estado_cuenta_banco)
                ->with('periodoMesEstadoCuenta')
            ->with('cuentaBancariaEstadoCuenta')
            ->with('estadoCuentaMovimientos')->first();


            $periodo_mes = ContabilidadPeriodoMeses::select(DB::Raw("concat((select contabilidad.periodos_fiscales.periodo 
            from contabilidad.periodos_fiscales 
            where contabilidad.periodos_fiscales.id_periodo_fiscal=contabilidad.periodos_meses.id_periodo_fiscal),'-',
            contabilidad.periodos_meses.mes,'-01')::date as primer_dia"),
                DB::raw('contabilidad.ultimo_dia_mes(contabilidad.periodos_meses.id_periodo_mes) as ultimo_dia_mes'))
                ->where('id_periodo_mes',$estado_cuenta['id_periodo_mes'])
                ->first();
                //'contabilidad.ultimo_dia_mes(contabilidad.periodos_meses.id_periodo_mes) as ultimo_dia_mes')->where('contabilidad.periodos_meses.id_periodo_mes',$estado_cuenta['id_periodo_mes'])->first();

           // print_r($periodo_mes['ultimo_dia_mes']);
                $movimientos_contables = ContabilidadDocumentosMovimientos::
                select(['contabilidad.documentos_cuentas.id_documento','contabilidad.documentos_cuentas.id_documento_cuenta','contabilidad.documentos_cuentas.concepto as descripcion',
                    'contabilidad.documentos_cuentas.debe_org','contabilidad.documentos_cuentas.haber_org',
                    DB::RAW("(case when contabilidad.documentos_cuentas.haber_org > 0 
                    then concat('Crédito: C$',round(contabilidad.documentos_cuentas.haber_org,2)) else
                    concat('Débito: C$',round(contabilidad.documentos_cuentas.debe_org,2)) end) as desc_mov"),
                    DB::RAW("(case when contabilidad.documentos_cuentas.haber_org > 0 then 
                    concat(
                    (select dc.num_documento from contabilidad.documentos_contables dc where dc.id_documento=contabilidad.documentos_cuentas.id_documento),
                    ' Crédito: C$',round(contabilidad.documentos_cuentas.haber_org,2)) else
                    concat(
                    (select dc.num_documento from contabilidad.documentos_contables dc where dc.id_documento=contabilidad.documentos_cuentas.id_documento),
                    ' Débito: C$',round(contabilidad.documentos_cuentas.debe_org,2)) end) as descripcion_corta"),


                 ])
                ->leftJoin('contabilidad.cuentas_contables', 'contabilidad.documentos_cuentas.id_cuenta_contable', '=', 'contabilidad.cuentas_contables.id_cuenta_contable')
                ->leftJoin('contabilidad.cuentas_bancarias', 'contabilidad.cuentas_bancarias.id_cuenta_contable', '=', 'contabilidad.cuentas_contables.id_cuenta_contable')
                ->leftJoin('contabilidad.documentos_contables', 'contabilidad.documentos_cuentas.id_documento', '=', 'contabilidad.documentos_contables.id_documento')
                ->where('contabilidad.cuentas_bancarias.id_cuenta_bancaria', '=', $estado_cuenta['id_cuenta_bancaria'])
                ->where('contabilidad.documentos_contables.estado', '=', 1)
                ->whereBetween('contabilidad.documentos_contables.fecha_emision',
                    [$periodo_mes['primer_dia'], $periodo_mes['ultimo_dia_mes']])
                ->get();


            if(!empty($estado_cuenta)){
                if($request->cargar_dependencias){
                    $ajustes_basicos = AdmonAjustes::whereIn('id_ajuste',array(4,5,26))->orderBy('id_ajuste')->select('id_ajuste','valor')->get();

                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'estado_cuenta' => $estado_cuenta,
                            'ajustes_basicos' => $ajustes_basicos,
                        ],
                        'messages' => null
                    ]);
                }else{
                    return response()->json([
                        'status' => 'success',
                        'result' => [
                            'estado_cuenta' => $estado_cuenta,
                            'movimientos_contables' => $movimientos_contables,
                        ],
                        'messages' => null
                    ]);
                }
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_estado_cuenta_banco'=>["Datos no encontrados"]),
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

    public function importar(Request $request)
    {

        $messages = [
            'file.required' => 'Debe seleccionar un archivo válido.',
            //'id_cuenta_bancaria.integer' => 'Debe seleccionar una cuenta bancaria válida.',
            //'id_cuenta_bancaria.required' => 'Debe seleccionar una cuenta bancaria válida.',
        ];
        $rules = [
            'file'  => 'required|mimes:xls,xlsx',
            //'id_cuenta_bancaria' => 'required|integer|exists:pgsql.contabilidad.cuentas_bancarias,id_cuenta_bancaria',
            //'nombre_cuenta' => 'string|max:100',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            $path = $request->file('file')->getRealPath();

            $data = Excel::load($path)->get();
            $total_registros=0;
            $numero_importado=0;
            $numero_fallido=0;

            //print_r($data->toArray());
            $numero_hojax= 1;
            if($data->count() > 0)
            {
                foreach($data->toArray() as $hoja => $datosHoja)
                {
                    foreach($datosHoja as $value)
                    {
                    //echo '(!empty($value[fecha]))'. $value['fecha'];
                    if(((!empty($value['referencia']))|| (int)$value['referencia']>=0 )
                        && (!empty($value['fecha']))
                        //&& (!empty($value['tipomov']))
                        && (!empty($value['descripcion']))
                        //&& (($value['creditos']>0||$value['debitos']>0))
                        && ((($value['creditos']==0||$value['creditos']=='')&&abs($value['debitos'])>0) || ($value['debitos']==0&&abs($value['creditos'])>0))
                    ){
                        //print_r($value);
                        //calcular creditos/debitos
                        $creditos=$value['creditos']?$value['creditos']:0;
                        $debitos=$value['debitos']?$value['debitos']:0;
                        if($creditos< 0){
                            $debitos = abs($creditos);
                            $creditos =0;
                        }

                        if($debitos<0){
                            $creditos =abs($debitos);
                            $debitos = 0;
                        }

                        //definir tipo de movimiento
                        $tipo_movimiento = 0;

                        //cuando tiene codigo
                        if(!empty(trim($value['tipomov']))){

                            $cheques = array("CK");
                            if (in_array(trim($value['tipomov']), $cheques) && $debitos > 0) {
                                $tipo_movimiento = 1;
                            }

                            $depositos = array("DP","A3","BM","DC");
                            if (in_array(trim($value['tipomov']), $depositos) && $creditos > 0) {
                                $tipo_movimiento = 2;
                            }

                            $transferencias = array("BL","TB","TU","TF");
                            if (in_array(trim($value['tipomov']), $transferencias)) {
                                if($debitos > 0){
                                    $tipo_movimiento = 7;
                                }
                                if($creditos > 0){
                                    $tipo_movimiento = 3;
                                }
                            }

                            $otros = array("CS","PP","TS","PE");
                            if (in_array(trim($value['tipomov']), $otros)) {
                                if($debitos > 0){
                                    $tipo_movimiento = 7;
                                }
                                if($creditos > 0){
                                    $tipo_movimiento = 3;
                                }
                            }
                        }else{

                            if($tipo_movimiento==0){
                                $primeros_digitos = substr(trim($value['descripcion']), 0,3);
                                //echo $primeros_digitos;
                                if($primeros_digitos == 'CK-'){
                                    $tipo_movimiento = 1;
                                    $value['numcheque']=(int)trim($value['referencia']);
                                }

                                if($primeros_digitos == 'CS-'){
                                    $tipo_movimiento = 6;///confirmar
                                }

                                elseif($primeros_digitos == 'DE-'){
                                    $tipo_movimiento = 2;
                                }

                                elseif($primeros_digitos == 'NC-'){
                                    $tipo_movimiento = 5;
                                    if (strpos(trim($value['descripcion']), '(LIQ. NO.') !== false) {
                                        $tipo_movimiento = 4;
                                    }
                                }
                                elseif($primeros_digitos == 'ND-'){
                                    $tipo_movimiento = 6;
                                }
                                elseif($primeros_digitos == 'TI-'){
                                    if($debitos > 0){
                                        $tipo_movimiento = 7;
                                    }
                                    if($creditos > 0){
                                        $tipo_movimiento = 3;
                                    }
                                }
                            }

                            if($tipo_movimiento==0) {

                                if (strpos(trim($value['descripcion']), 'Debitar cheque propio en efectivo') !== false) {
                                    $tipo_movimiento = 1;
                                }

                                if ((strpos(trim($value['descripcion']), 'Cheque Propio Depositado a Cuenta') !== false)
                                || (strpos(trim($value['descripcion']), 'Depósito en Efectivo')!== false)
                                ) {
                                    $tipo_movimiento = 2;
                                }

                                if ((strpos(trim($value['descripcion']), 'Transferencia Nacional Entrante') !== false)
                                    || (strpos(trim($value['descripcion']), 'Transferencias entre Cuentas')!== false)
                                ) {
                                    if($debitos > 0){
                                        $tipo_movimiento = 7;
                                    }
                                    if($creditos > 0){
                                        $tipo_movimiento = 3;
                                    }
                                }

                            }
                        }

                    $fechax=substr(trim($value['fecha']), 0,10);
                        //echo 'lengt '.strlen($fechax);
                        if(strlen($fechax)===10){
                        if (strpos($fechax, '-') !== false) {

                            $dia = substr($fechax, 0,2);
                            $mes = substr($fechax, 3,2);
                            $anio = substr($fechax, 6,4);


                            if(substr($fechax, 2, 1)==='-'){
                               // echo $fechax;
                            $dia = substr($fechax, 0,2);
                            $mes = substr($fechax, 3,2);
                            $anio = substr($fechax, 6,4);

                            }

                            if(substr($fechax, 1, 1)==='-'){
                                // echo $fechax;
                                $dia = substr($fechax, 0,1);
                                $mes = substr($fechax, 2,1);
                                $anio = substr($fechax, 4,4);

                            }

                            if(substr($fechax, 4, 1)=='-'){
                                //echo $fechax.' ';
                                $anio = substr($fechax, 0,4);
                                $mes = substr($fechax, 5,2);
                                $dia= substr($fechax, 8,2);
                                //echo $mes.'/'.$dia.'/'.$anio . '  ';
                            }

                            /*echo ' fechaorg: '.$fechax;
                            echo 'dia: '.$dia;
                            echo 'mes: '.$mes;
                            echo 'ani: '.$anio;
*/
                            $fechax=$mes.'/'.$dia.'/'.$anio;
                            //echo ' fechax '.$fechax2;
                        }else {
                            //echo $fechax.' | '.$value['descripcion'];
                            //echo substr(trim($value['fecha']), 3, 1) . ' divisor';
                            //echo $fechax.' ';
                            //if (trim($value['descripcion']) == '35750789') {
                            $dia = substr(trim($value['fecha']), 0,2);
                            $mes = substr(trim($value['fecha']), 3,2);
                            $anio = substr(trim($value['fecha']), 6,4);
                            $fechax=$mes.'/'.$dia.'/'.$anio;
                        //}
                        }
                        }elseif(strlen($fechax)===8){
                            $mes = substr($fechax, 0,2);
                            $dia = substr($fechax, 3,2);
                            $anio = substr($fechax, 6,4);
                            //echo $fechax. ' ';
                            $fechax=$mes.'/'.$dia.'/'.(((int)$anio)+2000);
                            //echo $fechax. ' ';
                        }

                        /*
                         *
    tipo 1 cheques
    CK	CHEQUE	DEBITO

    tipo 2 depositos
    DP	DEPOSITO                      	CREDITO
    A3	DEPOSITO                      	CREDITO
    BM	DEPOSITO                      	CREDITO
    DP	Depósitos	                    CREDITO
    DC	DEPOSITO	CREDITO

    tipo 3 y 7 transferencias entradas y salida
    BL	TRANSFERENCIA ENTRANTE Y SALIENTE	DEBITO/CREDITO
    TB	TRANSFERENCIA ENTRANTE	CREDITO
    TU	TRANSFERENCIA ENTRANTE	CREDITO
    TF	Transferencia de Fondos	DEBITO/CREDITO

    otros
    CS	Fianza en Efectivo	DEBITO
    PP	Pago Proveedores	CREDITO
    TS	Transferencias por SINPE	CREDITO
    PE	Pagos de Planilla	CREDITO
    */
                        /*$existe = false;
                        if(!empty($insert_data)){
                        foreach($insert_data as $fila)
                        {
                            if(
                                $fila['tipomov']==$tipo_movimiento &&
                                $fila['referencia']==trim($value['referencia'])&&
                                $fila['creditos']==$creditos&&
                                $fila['debitos']==$debitos&&
                                $fila['fecha']==$fechax&&
                                $fila['numcheque']==($tipo_movimiento==1?(int)trim($value['numcheque']):'')
                            ){
                                $existe=true;
                            }
                        }
                        }*/

                        //if(!$existe){
                        $insert_data[] = array(
                            'fecha'  => $fechax,
                            'creditos'   => $creditos?$creditos:0,
                            'debitos'   => $debitos?$debitos:0,
                            'referencia'  => trim($value['referencia']),
                            'tipomov'  => $tipo_movimiento,
                            'numcheque'  => $tipo_movimiento==1?(int)trim($value['numcheque']):'',
                            'descripcion'  => trim($value['descripcion']),
                            'id_cuenta_bancaria'  => 0,
                            'nombre_cuenta'  => 'N/D',
                            'numero_hoja'  => $numero_hojax,
                            //'Estado'   => (($value['debitos']&&$value['creditos'])&&($value['debitos']>0&&$value['creditos']>0))?'Inválido':'Válido',
                        );
                        $numero_importado++;
                        /*}else{
                            $numero_fallido++;
                        }*/
                    }else{
                        $numero_fallido++;
                    }

                        $total_registros++;
                }
                    $numero_hojax++;
                }

                if(!empty($insert_data))
                {
                    $response = response()->json([
                        'status' => 'success',
                        'result' =>[
                            'datos'=> $insert_data,
                            'numero_hojas'=>$numero_hojax-1,
                            'numero_importado'=>$numero_importado,
                            'numero_fallido'=>$numero_fallido,
                            'total_registros'=>$total_registros
                        ],
                        'messages' => null
                    ]);
                }else{
                    $response = response()->json([
                        'status' => 'error',
                        'result' => 'Los datos del archivo no son validos',
                        'messages' => null
                    ]);
                }
            }else{
                $response = response()->json([
                    'status' => 'error',
                    'result' => 'El archivo no contiene datos validos',
                    'messages' => null
                ]);
            }

        } else {
            $response =  response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }

        return $response;
    }


    public function registrarEstadosCuentaBancos(Request $request)
    {
        $messages = [
        ];

        $rules = [

            'mes' => 'required|array|min:1',
            'mes.id_periodo_mes' => 'required|integer|min:1',

            'resumen_archivo' => 'required|array|min:1',
            'resumen_archivo.*.cuenta_bancaria' => 'required|array|min:1',
            'resumen_archivo.*.cuenta_bancaria.id_cuenta_bancaria' => 'required|integer',
            'resumen_archivo.*.cantidad_movimientos' => 'required|integer',
            'resumen_archivo.*.hojax' => 'required|integer',
            'resumen_archivo.*.sobreescribir' => 'required|boolean',
            'resumen_archivo.*.saldo_inicial' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/',
            'resumen_archivo.*.total_creditos' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'resumen_archivo.*.total_debitos' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',

            'datos_archivo' => 'required|array|min:1',
            'datos_archivo.*.id_cuenta_bancaria' => 'required|integer|min:1',
            'datos_archivo.*.creditos' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'datos_archivo.*.debitos' => 'required|numeric|regex:/^\d*(\.\d{1,6})?$/',
            'datos_archivo.*.descripcion' => 'required|string|max:300',
            'datos_archivo.*.referencia' => 'required|string|max:100',
            'datos_archivo.*.nombre_cuenta' => 'required|string|max:100',
            'datos_archivo.*.tipomov' => 'required|integer|min:1',
            'datos_archivo.*.numcheque' => 'required_if:tipomov,1|integer|min:1|nullable',
            'datos_archivo.*.numero_hoja' => 'required|integer|min:1',
            'datos_archivo.*.fecha' => 'required|date',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();

                $pos=0;
                foreach ($request->resumen_archivo as $estado_cuentax) {

                    $estado_cuenta_anterior = CajaBancoEstadoCuentaBanco::where('estado',1)->
                    where('id_cuenta_bancaria',$estado_cuentax['cuenta_bancaria']['id_cuenta_bancaria'])->
                    where('id_periodo_mes',$request->mes['id_periodo_mes'])->first();

                    if(empty($estado_cuenta_anterior) || ((!empty($estado_cuenta_anterior))&&$estado_cuentax['sobreescribir'])){

                        if((!empty($estado_cuenta_anterior))&&$estado_cuentax['sobreescribir']){
                            $estado_cuenta_anterior->estado=0;
                            $estado_cuenta_anterior->save();
                        }

                    $estado_cuenta = new CajaBancoEstadoCuentaBanco();
                    $estado_cuenta->cantidad_movimientos = $estado_cuentax['cantidad_movimientos'];
                    $estado_cuenta->id_cuenta_bancaria = $estado_cuentax['cuenta_bancaria']['id_cuenta_bancaria'];
                 // $estado_cuenta->hojax = $estado_cuentax['hojax'];
                    $estado_cuenta->id_periodo_mes = $request->mes['id_periodo_mes'];
                    $estado_cuenta->total_creditos = $estado_cuentax['total_creditos'];
                    $estado_cuenta->total_debitos = $estado_cuentax['total_debitos'];
                    $estado_cuenta->saldo_inicial = $estado_cuentax['saldo_inicial'];

                    $estado_cuenta->observaciones = '';
                    $estado_cuenta->u_creacion=Auth::user()->usuario;
                    $estado_cuenta->estado = 1;
                    $estado_cuenta->save();

                    foreach ($request->datos_archivo as $detalle) {
                        $estado_cuenta_detalle = new CajaBancoEstadoCuentaBancoMovimientos();
                        if($estado_cuenta->id_cuenta_bancaria==$detalle['id_cuenta_bancaria']/*$detalle['hojax']==$estado_cuenta->hojax*/){
                            //$estado_cuenta_detalle->id_cuenta_bancaria = $detalle['id_cuenta_bancaria'];
                            //$estado_cuenta_detalle->hojax = $estado_cuentax->hojax;
                            $estado_cuenta_detalle->creditos = $detalle['creditos'];
                            $estado_cuenta_detalle->debitos = $detalle['debitos'];
                            $estado_cuenta_detalle->descripcion = $detalle['descripcion'];
                            $estado_cuenta_detalle->referencia = $detalle['referencia'];
                            //$estado_cuenta_detalle->nombre_cuenta = $detalle['nombre_cuenta'];
                            $estado_cuenta_detalle->tipomov = $detalle['tipomov'];
                            if($detalle['tipomov']==1){
                            $estado_cuenta_detalle->numcheque = $detalle['numcheque'];
                            //$estado_cuenta_detalle->numero_hoja = $detalle['numero_hoja'];
                            }else{
                                $estado_cuenta_detalle->numcheque = 0;
                            }
                            $estado_cuenta_detalle->fecha = $detalle['fecha'];
                            $estado_cuenta_detalle->id_estado_cuenta_banco = $estado_cuenta->id_estado_cuenta_banco;
                            $estado_cuenta_detalle->save();
                        }
                    }
                    }elseif(((!empty($estado_cuenta_anterior))&&$estado_cuentax['sobreescribir'])==false) {
                        DB::rollBack();
                        return response()->json([
                            'status' => 'error',
                            'result' => array('resumen_archivo.'.$pos.'.cuenta_bancaria' => ["Ya existen registros para esta cuenta bancaria y este mes"]),
                            'messages' => null
                        ]);
                    }
                    $pos++;
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


    public function registrarConciliacion(Request $request)
    {
        $messages = [
        ];

        $rules = [

            'id_estado_cuenta_banco' => 'required|integer',

            'registros_contabilidad' => 'array|min:0|nullable',
            'registros_contabilidad.*.id_documento_cuenta' => 'required|integer',
            'registros_contabilidad.*.causa' => 'required|integer',
            'registros_contabilidad.*.$isDisabled' => 'required|boolean',


            'registros_estado_cuenta' => 'required|array|min:1',
            'registros_estado_cuenta.*.conciliado' => 'required|boolean',
            'registros_estado_cuenta.*.registro_contabilidadx' => 'required_if:conciliado,true|array|min:0|nullable',
            'registros_estado_cuenta.*.registro_contabilidadx.id_documento_cuenta' => 'required_if:conciliado,true|integer|min:1|nullable',
            'registros_estado_cuenta.*.causa' => 'required|integer|min:1',

        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();

                $pos=0;
                $conciliacion = new CajaBancoConciliaciones();

                $estado_cuentaxy = CajaBancoEstadoCuentaBanco::find($request->id_estado_cuenta_banco);
                $conciliacion->id_estado_cuenta_banco = $request->id_estado_cuenta_banco;
                $conciliacion->id_cuenta_bancaria = $estado_cuentaxy['id_cuenta_bancaria'];
                $conciliacion->fecha = date('Y-m-d');
                $conciliacion->estado = 1;
                $conciliacion->u_creacion = Auth::user()->usuario;
                $conciliacion->save();

                foreach ($request->registros_estado_cuenta as $estado_cuentax) {
                    if($estado_cuentax['conciliado']){
                        $conciliacion_detalle = new CajaBancoConciliacionesMovimientos();
                        $conciliacion_detalle->id_conciliacion =$conciliacion->id_conciliacion;
                        $conciliacion_detalle->id_estado_cuenta_banco_mov = $estado_cuentax['id_estado_cuenta_banco_mov'];
                        $conciliacion_detalle->id_documento_cuenta =$estado_cuentax['registro_contabilidadx']['id_documento_cuenta'];
                        $conciliacion_detalle->estado = 1;
                        $conciliacion_detalle->save();
                    }else{
                            $conciliacion_detalle = new CajaBancoConciliacionesMovimientos();
                            $conciliacion_detalle->id_conciliacion =$conciliacion->id_conciliacion;
                            $conciliacion_detalle->id_estado_cuenta_banco_mov = $estado_cuentax['id_estado_cuenta_banco_mov'];
                            $conciliacion_detalle->id_documento_cuenta =null;
                            $conciliacion_detalle->estado = $estado_cuentax['causa'];
                            $conciliacion_detalle->save();
                    }
                }
                foreach ($request->registros_contabilidad as $registro_contabilidadx) {
                    if($registro_contabilidadx['$isDisabled']==false){
                        $conciliacion_detalle = new CajaBancoConciliacionesMovimientos();
                        $conciliacion_detalle->id_conciliacion =$conciliacion->id_conciliacion;
                        $conciliacion_detalle->id_estado_cuenta_banco_mov = null;
                        $conciliacion_detalle->id_documento_cuenta =$registro_contabilidadx['id_documento_cuenta'];
                        $conciliacion_detalle->estado = 1;
                        $conciliacion_detalle->save();
                    }
                }
                    $pos++;


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

    public function anular(Request $request)
    {

        $messages = [
        ];


        $rules = [
            'id_estado_cuenta_banco' => 'required|integer',
            'observaciones' => 'required|string|max:100',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $estado_cuenta = CajaBancoEstadoCuentaBanco::find($request->id_estado_cuenta_banco);
                if($estado_cuenta->estado !== 2){
                $estado_cuenta->estado = 0;
                $estado_cuenta->observaciones = $request->observaciones;
                $estado_cuenta->save();
                }else{
                    DB::rollBack();
                    return response()->json([
                        'status' => 'error',
                        'result' => 'Error de base de datos',
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


    public function generarReporteConciliacion(Request $request)
    {
        // echo $ext;
        $rules = [
            'id_conciliacion' => 'required|integer|min:1',
            'extension' => 'required|string|max:4'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();

                $input = '/var/www/html/resources/reports/ConciliacionBancaria';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'ConciliacionBancaria';

                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/ConciliacionBancaria';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'ConciliacionBancaria';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_conciliacion' => $request->id_conciliacion,
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ConciliacionBancaria.' . $request->extension, $headers);

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