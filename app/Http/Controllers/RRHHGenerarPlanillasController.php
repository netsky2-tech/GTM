<?php 

namespace App\Http\Controllers;

use App\Models\ContabilidadCuentasContables;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\RRHHConfiguracionCdPlanilla;
use App\Models\RRHHContratoTipos;
use App\Models\RRHHDatosMedicos;
use App\Models\RRHHGenerarPlanilla;
use App\Models\RRHHPlanillaControl;
use App\Models\RRHHPlanillaHistorico;
use App\Models\RRHHPlanillasControles;
use Illuminate\Http\JsonResponse;
use PHPJasper\PHPJasper;
use Validator,Auth,DB;
use App\Models\RRHHNivelesAcademicos;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use DateTime;
class RRHHGenerarPlanillasController extends Controller
{

    /**
     * obtener planilla especifica con parametros
     *
     * @access  public
     * @param Request $request
     * @param RRHHGenerarPlanilla $planilla
     * @return JsonResponse
     */

    public function obtenerPlanilla(Request $request, RRHHGenerarPlanilla $planilla)
    {
        $rules = [
            'id_planilla_control'=> 'required|integer|min:1',
            //'id_nomina'=> 'required|integer|min:1'
        ];

        $planilla = $planilla->obtenerPlanilla($request);
        return response()->json([
            'status' => 'success',
            'result' => $planilla,
            'messages' => null
        ]);
    }

    public function obtenerPlanillaProcesar(Request $request)
    {
        $rules = [
            'id_planilla_control'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $planilla = RRHHGenerarPlanilla::where('id_planilla_control', $request->id_planilla_control)->get();
            $control_planilla = RRHHPlanillasControles::where('id_planilla_control',$request->id_planilla_control)->first();

            $total_salarios_administrativo = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_salarios"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',4)->get(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/

            $total_salarios_comercial = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_salarios"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',4)->get(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/

            $total_inss_administrativo = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_inss"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',1)->get(); /*id_cat_ingreso_deduccion = 1 ~ inss*/

            $total_inss_comercial = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_inss"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',1)->get(); /*id_cat_ingreso_deduccion = 1 ~ inss*/

            $total_ir_administrativo = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_ir"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',2)->get(); /*id_cat_ingreso_deduccion = 2 ~ ir*/

            $total_ir_comercial = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_ir"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',2)->get(); /*id_cat_ingreso_deduccion = 2 ~ ir*/

            $total_inatec_administrativo = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_inatec"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',3)->get(); /*id_cat_ingreso_deduccion = 3 ~ inatec*/

            $total_inatec_comercial = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_inatec"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',3)->get(); /*id_cat_ingreso_deduccion = 3 ~ inatec*/

            $total_vacaciones_administrativo = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_vacaciones"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',10)->get(); /*id_cat_ingreso_deduccion = 10 ~ vacaciones*/

            $total_vacaciones_comercial = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_vacaciones"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',10)->get(); /*id_cat_ingreso_deduccion = 10 ~ vacaciones*/

            $total_treceavomes_administrativo = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_treceavomes"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',11)->get(); /*id_cat_ingreso_deduccion = 11 ~ treceavomes*/

            $total_treceavomes_comercial = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_treceavomes"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',11)->get(); /*id_cat_ingreso_deduccion = 11 ~ treceavomes*/

            $total_comisiones_administrativo = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_comisiones"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',12)->get(); /*id_cat_ingreso_deduccion = 12 ~ treceavomes*/

            $total_comisiones_comercial = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as total_comisiones"))
                ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$request->id_planilla_control)
                ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',12)->get(); /*id_cat_ingreso_deduccion = 12 ~ treceavomes*/

            $total_general = RRHHGenerarPlanilla::select(DB::raw("SUM(monto) as monto_neto"))->where('id_planilla_control',$request->id_planilla_control)->get();

            if(!empty($planilla)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'planilla' => $planilla,
                        'control_planilla' => $control_planilla,
                        'total_salarios_administrativos' => $total_salarios_administrativo,
                        'total_salarios_comercial' => $total_salarios_comercial,
                        'total_inss_administrativo' => $total_inss_administrativo,
                        'total_inss_comercial' => $total_inss_comercial,
                        'total_ir_administrativo' => $total_ir_administrativo,
                        'total_ir_comercial' => $total_ir_comercial,
                        'total_inactec_administrativo' => $total_inatec_administrativo,
                        'total_inactec_comercial' => $total_inatec_comercial,
                        'total_vacaciones_administrativo' => $total_vacaciones_administrativo,
                        'total_vacaciones_comercial' => $total_vacaciones_comercial,
                        'total_treceavomes_administrativo' => $total_treceavomes_administrativo,
                        'total_treceavomes_comercial' => $total_treceavomes_comercial,
                        'total_comisiones_administrativo' => $total_comisiones_administrativo,
                        'total_comisiones_comercial' => $total_comisiones_comercial,
                        'total_general' => $total_general,
                    ],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_planilla_control'=>["Datos no encontrados"]),
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

    public function registrar(Request $request) //Guardar datos de la planilla generada
    {
        $rules = [
            'id_planilla_control'=> 'required|integer|min:1',
            /*'id_sucursal' => 'required|integer|min:1',
            'anio' => 'required|integer|min:1',
            'mes' => 'required|integer|min:1',
            'id_trabajador' => 'required|integer|min:1',
            'id_cat_ingreso_deduccion_trabajador' => 'required|integer|min:1',
            'fecha_desde' => 'required|date',
            'fecha_hasta' => 'required|date',
            'monto' => 'required|numeric'*/
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails())
        {
            try{
                DB::beginTransaction();
                //Cambio de estado al control de planillas de "activo" a "planilla generada"
                $control_de_planilla = RRHHPlanillasControles::select('id_planilla_control','anio_proceso','mes_proceso','f_desde','f_hasta')->where('id_planilla_control',$request->id_planilla_control)->first();
                $control_de_planilla->estado = 2;
                $control_de_planilla->u_modificacion = Auth::user()->usuario;
                $control_de_planilla->save();

                //Si ya existen datos de la planilla a generar, eliminar los anteriores y sobreescribir los nuevos
                RRHHGenerarPlanilla::where('id_planilla_control',$request->id_planilla_control)->delete();
                $planillaX = new RRHHGenerarPlanilla();
                $num_quincena = $planillaX->obtenerNumQuincena($control_de_planilla['anio_proceso'],$control_de_planilla['mes_proceso']);
                //Guardar datos de la planilla
                foreach ($request->planilla as $planillax) {

                    $planilla =  new RRHHGenerarPlanilla();
                    $planilla_control = RRHHPlanillasControles::select('id_planilla_control','anio_proceso','mes_proceso','f_desde','f_hasta')->where('id_planilla_control',$request->id_planilla_control)->first();

                    
                    $planilla->id_sucursal = $planillax['id_sucursal'];
                    $planilla->anio = $planilla_control['anio_proceso'];
                    $planilla->mes = $planilla_control['mes_proceso'];
                    $planilla->id_trabajador = $planillax['id_trabajador'];
                    $planilla->id_cat_ingreso_deduccion_trabajador = $planillax['id_cat_ingreso_deduccion'];
                    $planilla->fecha_desde = $planilla_control['f_desde'];
                    $planilla->fecha_hasta = $planilla_control['f_hasta'];
                    $planilla->monto = $planillax['monto'];
                    $planilla->u_grabacion = Auth::user()->usuario;
                    $num_colilla_nuevo = $planilla->obtenerCodigo($planillax['id_trabajador']);
                    $planilla->num_colilla = $num_colilla_nuevo['secuencia'];
                    $planilla->num_quincena = $num_quincena['secuencia'];
                    $planilla->id_planilla_control = $planilla_control['id_planilla_control'];
                    $planilla->save();


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
        }else
            {
                return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
                ]);
            }
    }

    public function procesarPlanilla(Request $request) //procesar planilla, grabando en historico y creación de documento contable
    {
        $rules = [
            'id_planilla_control'=> 'required|integer|min:1',

        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails())
        {
            try {

                DB::beginTransaction();
                //Cambio de estado a la planilla de generada -> procesada
                $control_de_planilla = RRHHPlanillasControles::select('id_planilla_control','estado','u_modificacion')->where('id_planilla_control',$request->id_planilla_control)->first();
                $control_de_planilla->estado = 3;
                $control_de_planilla->u_modificacion = Auth::user()->usuario;
                $control_de_planilla->save();

                //Grabar información de planilla en la tabla de historicos
                foreach ($request->planilla as $planillax) {

                    $planilla_historico =  new RRHHPlanillaHistorico();
                    $planilla_control = RRHHPlanillasControles::select('id_planilla_control','anio_proceso','mes_proceso','f_desde','f_hasta')->where('id_planilla_control',$request->id_planilla_control)->first();

                    $planilla_historico->id_sucursal = $planillax['id_sucursal'];
                    $planilla_historico->anio = $planillax['anio'];
                    $planilla_historico->mes = $planillax['mes'];
                    $planilla_historico->id_trabajador = $planillax['id_trabajador'];
                    $planilla_historico->id_cat_ingreso_deduccion_trabajador = $planillax['id_cat_ingreso_deduccion_trabajador'];
                    $planilla_historico->fecha_desde = $planillax['fecha_desde'];
                    $planilla_historico->fecha_hasta = $planillax['fecha_hasta'];
                    $planilla_historico->monto = $planillax['monto'];
                    $planilla_historico->u_grabacion = Auth::user()->usuario;
                    $planilla_historico->num_colilla = $planillax['num_colilla'];
                    $planilla_historico->id_planilla_control = $planillax['id_planilla_control'];
                    $planilla_historico->id_planilla = $planillax['id_planilla'];
                    $planilla_historico->save();


                }

                //creación del documento contable
                /*INICIA movimiento contable - planilla*/

                $documento = new ContabilidadDocumentosContables;
                $tipo = ContabilidadTiposDocumentos::find(14);
                $fecha= date("Y-m-d H:i:s");
                $codigo = $documento->obtenerCodigoDocumento(array('id_tipo_doc'=>14,'fecha_doc'=>$fecha));

                //DB::commit();

                $nuevo_codigo = json_decode($codigo[0]);

                date_default_timezone_set('America/Managua');

                $documento->num_documento = $tipo->prefijo.'-'.$nuevo_codigo->secuencia;
                $documento->fecha_emision =  date('Y-m-d H:i:s');
                $documento->codigo_documento = $nuevo_codigo->secuencia;


                $date = DateTime::createFromFormat("Y-m-d H:i:s", $documento->fecha_emision);

                $periodo = ContabilidadPeriodoFiscal::where('periodo',$date->format("Y"))->first();

                if(empty($periodo)){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_emision'=>["El periodo ".$date->format("Y")." no se encuentra registrado, por favor consulte al administrador"]),
                        'messages' => null
                    ]);
                    exit;
                }

                if($periodo->estado){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_emision'=>["El periodo ".$date->format("Y")." es inválido, ya que se encuentra en estado COMPLETADO"]),
                        'messages' => null
                    ]);
                    exit;
                }

                $periodo_mes = ContabilidadPeriodoMeses::where('id_periodo_fiscal',$periodo->id_periodo_fiscal)->where('mes',$date->format("n"))->first();
                if(empty($periodo_mes)){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_emision'=>["El mes ".$date->format("F")." no se encuentra registrado, por favor consulte al administrador"]),
                        'messages' => null
                    ]);
                    exit;
                }

                if($periodo_mes->estado == 2 ){
                    return response()->json([
                        'status' => 'error',
                        'result' =>   array('fecha_emision'=>["El mes ".config('global.meses')[$periodo_mes->mes-1]." es inválido, ya que se encuentra en estado COMPLETADO"]),
                        'messages' => null
                    ]);
                    exit;
                }

                /*-----------------------------------Obtener gastos administrativos de planilla--------------------------*/

                $sueldos_salarios_administrativo = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',4)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_suelos_salarios_admon = $sueldos_salarios_administrativo['total_salarios']?$sueldos_salarios_administrativo['total_salarios']:0;

                $horas_extras_administrativo = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',9)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_horas_extras_admon = $horas_extras_administrativo['total_salarios']?$horas_extras_administrativo['total_salarios']:0;

                $vacaciones_administrativo = RRHHGenerarPlanilla::select(DB::raw("coalesce(round((sum(p.monto)/12),2),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',4)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_vacaciones_admon = $vacaciones_administrativo['total_salarios']?$vacaciones_administrativo['total_salarios']:0;

                $decimo_tercer_mes_administrativo = RRHHGenerarPlanilla::select(DB::raw("coalesce(round((sum(monto)/12),2),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',4)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_decimo_tercer_mes_admon = $decimo_tercer_mes_administrativo['total_salarios']?$decimo_tercer_mes_administrativo['total_salarios']:0;

                $inss_patronal_administrativo = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',13)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_inss_patronal_admon = $inss_patronal_administrativo['total_salarios']?$inss_patronal_administrativo['total_salarios']:0;

                $inatec_administrativo = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',1)->where('id_cat_ingreso_deduccion_trabajador',3)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_inatec_admon = $inatec_administrativo['total_salarios']?$inatec_administrativo['total_salarios']:0;

                $total_gastos_admon = $total_suelos_salarios_admon + $total_horas_extras_admon + $total_vacaciones_admon + $total_decimo_tercer_mes_admon + $total_inss_patronal_admon + $total_inatec_admon;

                /*-----------------------------------Obtener gastos comercialización de planilla--------------------------*/

                $sueldos_salarios_comercializacion = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',4)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_suelos_salarios_comercial = $sueldos_salarios_comercializacion['total_salarios']?$sueldos_salarios_comercializacion['total_salarios']:0;

                $horas_extras_comercializacion = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',9)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_horas_extras_comercial = $horas_extras_comercializacion['total_salarios']?$horas_extras_comercializacion['total_salarios']:0;

                $vacaciones_comercializacion = RRHHGenerarPlanilla::select(DB::raw("coalesce(round((sum(p.monto)/12),2),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',4)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_vacaciones_comercial = $vacaciones_comercializacion['total_salarios']?$vacaciones_comercializacion['total_salarios']:0;

                $decimo_tercer_mes_comercializacion = RRHHGenerarPlanilla::select(DB::raw("coalesce(round((sum(monto)/12),2),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',4)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_decimo_tercer_mes_comercial = $decimo_tercer_mes_comercializacion['total_salarios']?$decimo_tercer_mes_comercializacion['total_salarios']:0;

                $inss_patronal_comercializacion = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',13)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_inss_patronal_comercial = $inss_patronal_comercializacion['total_salarios']?$inss_patronal_comercializacion['total_salarios']:0;

                $inatec_comercializacion = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('rrhh.trabajadores.id_nomina',2)->where('id_cat_ingreso_deduccion_trabajador',3)
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/
                $total_inatec_comercial = $inatec_comercializacion['total_salarios']?$inatec_comercializacion['total_salarios']:0;

                $total_gastos_comercializacion = $total_suelos_salarios_comercial + $total_horas_extras_comercial + $total_vacaciones_comercial + $total_decimo_tercer_mes_comercial + $total_inss_patronal_comercial + $total_inatec_comercial;

                /*----------------------------------------------------Gastos acumulados por pagar----------------------*/

                $comisiones_generales = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('id_cat_ingreso_deduccion_trabajador',12)->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))
                    ->where('rrhh.trabajadores.activo',true)->first();
                $total_general_comisiones = $comisiones_generales['total_salarios']?$comisiones_generales['total_salarios']:0;

                $vacaciones_generales = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('id_cat_ingreso_deduccion_trabajador',10)->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))
                    ->where('rrhh.trabajadores.activo',true)->first();
                $total_general_vacaciones = $vacaciones_generales['total_salarios']?$vacaciones_generales['total_salarios']:0;

                $total_gastos_acumulados_por_pagar = $total_general_comisiones + $total_general_vacaciones;/* + $total_vacaciones_admon + $total_vacaciones_comercial;*/

                /*---------------------------------------------------Total debe comprobante contable------------------------*/

                $total__debe = $total_gastos_admon + $total_gastos_comercializacion + $total_gastos_acumulados_por_pagar;


                /*-------------------------------------------------------anticipo a funcionarios------------------------------*/

                $anticipos_generales = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->whereIn('id_cat_ingreso_deduccion_trabajador',array(14,15))->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))
                    ->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/

                $total_general_anticipos_empleados = $anticipos_generales['total_salarios']?$anticipos_generales['total_salarios']:0;

                /*-------------------------------------------------------Retenciones por pagar------------------------------*/

                $ir_generales = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('id_cat_ingreso_deduccion_trabajador',2)->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))
                    ->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/

                $total_general_ir = $ir_generales['total_salarios']?$ir_generales['total_salarios']:0;

                $inss_generales = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('id_cat_ingreso_deduccion_trabajador',1)->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))
                    ->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/

                $total_general_inss = $inss_generales['total_salarios']?$inss_generales['total_salarios']:0;

                $total_general_retenciones_pagar = $total_general_ir + $total_general_inss;

                /*-------------------------------------------------------Aportes por pagar------------------------------------*/

                $inss_patronal_generales = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('id_cat_ingreso_deduccion_trabajador',13)->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))
                    ->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/

                $total_general_inss_patronal = $inss_patronal_generales['total_salarios']?$inss_patronal_generales['total_salarios']:0;

                $inatec_generales = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->where('id_cat_ingreso_deduccion_trabajador',3)->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))
                    ->where('rrhh.trabajadores.activo',true)->first(); /*id_cat_ingreso_deduccion = 4 ~ Salario básico*/

                $total_general_inatec = $inatec_generales['total_salarios']?$inatec_generales['total_salarios']:0;

                $total_general_aportes_pagar = $total_general_inss_patronal + $total_general_inatec;

                /*------------------------------------------gastos acumulados por pagar-------------------------------------*/

                $ingresos_pago_cheque = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->whereIn('id_cat_ingreso_deduccion_trabajador',array(8,9,10,12,4))
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.tipo_pago',2)
                    ->where('rrhh.trabajadores.activo',true)->first();

                $total_ingresos_pago_cheque = $ingresos_pago_cheque['total_salarios']?$ingresos_pago_cheque['total_salarios']:0;

                $deducciones_pago_cheque = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->whereIn('id_cat_ingreso_deduccion_trabajador',array(1,2,14,15))
                    ->whereNotIn('rrhh.trabajadores.id_trabajador',array(2,4))->where('rrhh.trabajadores.tipo_pago',2)
                    ->where('rrhh.trabajadores.activo',true)->first();

                $total_deducciones_pago_cheque = $deducciones_pago_cheque['total_salarios']?$deducciones_pago_cheque['total_salarios']:0;

                $nomina_a_pagar = $total_ingresos_pago_cheque - $total_deducciones_pago_cheque;
                $total_vacaciones_acumulados_pagar = $total_vacaciones_admon + $total_vacaciones_comercial;
                $total_decimo_tercer_mes_acumulados_pagar = $total_decimo_tercer_mes_admon + $total_decimo_tercer_mes_comercial;

                $total_general_gastos_acumulados_pagar = $nomina_a_pagar + $total_vacaciones_acumulados_pagar+$total_decimo_tercer_mes_acumulados_pagar;

                /*-------------------------------------------------monto tipo de pago transferencia---------------------------*/
                $ingresos_pago_trasnferencia = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->whereIn('id_cat_ingreso_deduccion_trabajador',array(8,9,10,12,4))->where('rrhh.trabajadores.tipo_pago',1)
                    ->where('rrhh.trabajadores.activo',true)->first();

                $total_ingresos_pago_transferencia = $ingresos_pago_trasnferencia['total_salarios']?$ingresos_pago_trasnferencia['total_salarios']:0;

                $deducciones_pago_transferencia = RRHHGenerarPlanilla::select(DB::raw("coalesce(SUM(monto),0) as total_salarios"))
                    ->join('rrhh.trabajadores','rrhh.planillas.id_trabajador','rrhh.trabajadores.id_trabajador')->where('id_planilla_control',$planillax['id_planilla_control'])
                    ->whereIn('id_cat_ingreso_deduccion_trabajador',array(1,2,14,15))->where('rrhh.trabajadores.tipo_pago',1)
                    ->where('rrhh.trabajadores.activo',true)->first();

                $total_deducciones_pago_transferencia = $deducciones_pago_transferencia['total_salarios']?$deducciones_pago_transferencia['total_salarios']:0;

                $transferencia_a_pagar = $total_ingresos_pago_transferencia - $total_deducciones_pago_transferencia;
                /*--------------------------------------------------fin de los calculos--------------------------------------*/

                $total_general = $total_gastos_admon+$total_gastos_comercializacion+$total_gastos_acumulados_por_pagar;

                $documento->id_periodo_fiscal = $periodo->id_periodo_fiscal;
                $documento->id_tipo_doc = 14;
                $documento->valor = $total_general;
                $documento->concepto = 'Registramos planilla con fecha '.$planilla_control->mes_proceso.'/'.$planilla_control->anio_proceso;
                $documento->id_moneda = 1;
                $documento->u_creacion = Auth::user()->usuario;
                $documento->estado = 1;
                $documento->save();
                ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');

                //Documento cuenta contable sueldos y salarios ~ Area administrativa

                $cuenta_suelos_salarios_admin = RRHHConfiguracionCdPlanilla::find(1);
                $cuenta_contable_sueldos_salarios_admin = ContabilidadCuentasContables::find($cuenta_suelos_salarios_admin->id_cuenta_contable_admin);
                $cuenta_contable_sueldos_salarios_padre_admin = ContabilidadCuentasContables::find($cuenta_contable_sueldos_salarios_admin->id_cuenta_padre);

                $documento_cuenta_contable_suelos = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_suelos->id_documento = $documento->id_documento;
                $documento_cuenta_contable_suelos->id_moneda= 1;
                $documento_cuenta_contable_suelos->concepto = $cuenta_suelos_salarios_admin['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_suelos->debe = $total_suelos_salarios_admon;
                $documento_cuenta_contable_suelos->haber = 0;
                $documento_cuenta_contable_suelos->debe_org = $total_suelos_salarios_admon;
                $documento_cuenta_contable_suelos->haber_org = 0;
                $documento_cuenta_contable_suelos->id_centro =  null;
                $documento_cuenta_contable_suelos->id_cuenta_contable = $cuenta_contable_sueldos_salarios_admin -> id_cuenta_contable;
                $documento_cuenta_contable_suelos->cta_contable = $cuenta_contable_sueldos_salarios_admin -> cta_contable;
                $documento_cuenta_contable_suelos->cta_contable_padre = $cuenta_contable_sueldos_salarios_padre_admin -> cta_contable;
                $documento_cuenta_contable_suelos->save();

                //Documento cuenta contable horas extras ~ Area administrativa

                $cuenta_horas_extras_admin = RRHHConfiguracionCdPlanilla::find(2);
                $cuenta_contable_horas_extras_admin = ContabilidadCuentasContables::find($cuenta_horas_extras_admin->id_cuenta_contable_admin);
                $cuenta_contable_horas_extras_padre_admin = ContabilidadCuentasContables::find($cuenta_contable_horas_extras_admin->id_cuenta_padre);

                $documento_cuenta_contable_horas_extras = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_horas_extras->id_documento = $documento->id_documento;
                $documento_cuenta_contable_horas_extras->id_moneda= 1;
                $documento_cuenta_contable_horas_extras->concepto = $cuenta_horas_extras_admin['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_horas_extras->debe = $total_horas_extras_admon;
                $documento_cuenta_contable_horas_extras->haber = 0;
                $documento_cuenta_contable_horas_extras->debe_org = $total_horas_extras_admon;
                $documento_cuenta_contable_horas_extras->haber_org = 0;
                $documento_cuenta_contable_horas_extras->id_centro =  null;
                $documento_cuenta_contable_horas_extras->id_cuenta_contable = $cuenta_contable_horas_extras_admin -> id_cuenta_contable;
                $documento_cuenta_contable_horas_extras->cta_contable = $cuenta_contable_horas_extras_admin->cta_contable;
                $documento_cuenta_contable_horas_extras->cta_contable_padre = $cuenta_contable_horas_extras_padre_admin->cta_contable;
                $documento_cuenta_contable_horas_extras->save();

                //Documento cuenta contable vacaciones ~ Area administrativa

                $cuenta_vacaciones_admin = RRHHConfiguracionCdPlanilla::find(3);
                $cuenta_contable_vacaciones_admin = ContabilidadCuentasContables::find($cuenta_vacaciones_admin->id_cuenta_contable_admin);
                $cuenta_contable_vacaciones_padre_admin = ContabilidadCuentasContables::find($cuenta_contable_vacaciones_admin->id_cuenta_padre);

                $documento_cuenta_contable_vacaciones = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_vacaciones->id_documento = $documento->id_documento;
                $documento_cuenta_contable_vacaciones->id_moneda= 1;
                $documento_cuenta_contable_vacaciones->concepto = $cuenta_vacaciones_admin['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_vacaciones->debe = $total_vacaciones_admon;
                $documento_cuenta_contable_vacaciones->haber = 0;
                $documento_cuenta_contable_vacaciones->debe_org = $total_vacaciones_admon;
                $documento_cuenta_contable_vacaciones->haber_org = 0;
                $documento_cuenta_contable_vacaciones->id_centro =  null;
                $documento_cuenta_contable_vacaciones->id_cuenta_contable = $cuenta_contable_vacaciones_admin->id_cuenta_contable;
                $documento_cuenta_contable_vacaciones->cta_contable = $cuenta_contable_vacaciones_admin -> cta_contable;
                $documento_cuenta_contable_vacaciones->cta_contable_padre = $cuenta_contable_vacaciones_padre_admin -> cta_contable;
                $documento_cuenta_contable_vacaciones->save();

                //Documento cuenta contable treceavo mes ~ Area administrativa

                $cuenta_decimo_tercer_mes_admin = RRHHConfiguracionCdPlanilla::find(4);
                $cuenta_contable_decimo_tercer_mes_admin = ContabilidadCuentasContables::find($cuenta_decimo_tercer_mes_admin->id_cuenta_contable_admin);
                $cuenta_contable_decimo_tercer_mes_padre_admin = ContabilidadCuentasContables::find($cuenta_contable_decimo_tercer_mes_admin->id_cuenta_padre);

                $documento_cuenta_contable_treceavomes = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_treceavomes->id_documento = $documento->id_documento;
                $documento_cuenta_contable_treceavomes->id_moneda= 1;
                $documento_cuenta_contable_treceavomes->concepto = $cuenta_decimo_tercer_mes_admin['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_treceavomes->debe = $total_decimo_tercer_mes_admon;
                $documento_cuenta_contable_treceavomes->haber = 0;
                $documento_cuenta_contable_treceavomes->debe_org = $total_decimo_tercer_mes_admon;
                $documento_cuenta_contable_treceavomes->haber_org = 0;
                $documento_cuenta_contable_treceavomes->id_centro =  null;
                $documento_cuenta_contable_treceavomes->id_cuenta_contable = $cuenta_contable_decimo_tercer_mes_admin->id_cuenta_contable;
                $documento_cuenta_contable_treceavomes->cta_contable = $cuenta_contable_decimo_tercer_mes_admin->id_cuenta_contable;
                $documento_cuenta_contable_treceavomes->cta_contable_padre = $cuenta_contable_decimo_tercer_mes_padre_admin->id_cuenta_contable;
                $documento_cuenta_contable_treceavomes->save();

                //Documento cuenta contable inss patronal ~ Area administrativa

                $cuenta_inss_patronal_admin = RRHHConfiguracionCdPlanilla::find(5);
                $cuenta_contable_inss_patronal_admin = ContabilidadCuentasContables::find($cuenta_inss_patronal_admin->id_cuenta_contable_admin);
                $cuenta_contable_inss_patronal_padre_admin = ContabilidadCuentasContables::find($cuenta_contable_inss_patronal_admin->id_cuenta_padre);

                $documento_cuenta_contable_inss = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_inss->id_documento = $documento->id_documento;
                $documento_cuenta_contable_inss->id_moneda= 1;
                $documento_cuenta_contable_inss->concepto = $cuenta_inss_patronal_admin['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_inss->debe = $total_inss_patronal_admon;
                $documento_cuenta_contable_inss->haber = 0;
                $documento_cuenta_contable_inss->debe_org = $total_inss_patronal_admon;
                $documento_cuenta_contable_inss->haber_org = 0;
                $documento_cuenta_contable_inss->id_centro =  null;
                $documento_cuenta_contable_inss->id_cuenta_contable = $cuenta_contable_inss_patronal_admin->id_cuenta_contable;
                $documento_cuenta_contable_inss->cta_contable = $cuenta_contable_inss_patronal_admin->cta_contable;
                $documento_cuenta_contable_inss->cta_contable_padre = $cuenta_contable_inss_patronal_padre_admin->cta_contable;
                $documento_cuenta_contable_inss->save();

                //Documento cuenta contable inatec ~ Area administrativa

                $cuenta_inatec_admin = RRHHConfiguracionCdPlanilla::find(6);
                $cuenta_contable_inatec_admin = ContabilidadCuentasContables::find($cuenta_inatec_admin->id_cuenta_contable_admin);
                $cuenta_contable_inatec_padre_admin = ContabilidadCuentasContables::find($cuenta_contable_inatec_admin->id_cuenta_padre);

                $documento_cuenta_contable_inatec = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_inatec->id_documento = $documento->id_documento;
                $documento_cuenta_contable_inatec->id_moneda= 1;
                $documento_cuenta_contable_inatec->concepto = $cuenta_inatec_admin['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_inatec->debe = $total_inatec_admon;
                $documento_cuenta_contable_inatec->haber = 0;
                $documento_cuenta_contable_inatec->debe_org = $total_inatec_admon;
                $documento_cuenta_contable_inatec->haber_org = 0;
                $documento_cuenta_contable_inatec->id_centro =  null;
                $documento_cuenta_contable_inatec->id_cuenta_contable = $cuenta_contable_inatec_admin->id_cuenta_contable;
                $documento_cuenta_contable_inatec->cta_contable = $cuenta_contable_inatec_admin->cta_contable;
                $documento_cuenta_contable_inatec->cta_contable_padre = $cuenta_contable_inatec_padre_admin->cta_contable;
                $documento_cuenta_contable_inatec->save();

                /*----------------Documento cuenta contable sueldos y salarios ~ Area comercial-------------------*/

                $cuenta_sueldos_salarios_comercial = RRHHConfiguracionCdPlanilla::find(1);
                $cuenta_contable_suelos_salarios_comercial = ContabilidadCuentasContables::find($cuenta_sueldos_salarios_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_sueldos_salarios_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_suelos_salarios_comercial->id_cuenta_padre);

                $documento_cuenta_contable_suelos_comercial = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_suelos_comercial->id_documento = $documento->id_documento;
                $documento_cuenta_contable_suelos_comercial->id_moneda= 1;
                $documento_cuenta_contable_suelos_comercial->concepto = $cuenta_contable_suelos_salarios_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_suelos_comercial->debe = $total_suelos_salarios_comercial;
                $documento_cuenta_contable_suelos_comercial->haber = 0;
                $documento_cuenta_contable_suelos_comercial->debe_org = $total_suelos_salarios_comercial;
                $documento_cuenta_contable_suelos_comercial->haber_org = 0;
                $documento_cuenta_contable_suelos_comercial->id_centro =  null;
                $documento_cuenta_contable_suelos_comercial->id_cuenta_contable = $cuenta_contable_suelos_salarios_comercial->id_cuenta_contable;
                $documento_cuenta_contable_suelos_comercial->cta_contable = $cuenta_contable_suelos_salarios_comercial->cta_contable;
                $documento_cuenta_contable_suelos_comercial->cta_contable_padre = $cuenta_contable_sueldos_salarios_padre_comercial->cta_contable;
                $documento_cuenta_contable_suelos_comercial->save();

                //Documento cuenta contable horas extras ~ Area comercial

                $cuenta_horas_extras_comercial = RRHHConfiguracionCdPlanilla::find(2);
                $cuenta_contable_horas_extras_comercial = ContabilidadCuentasContables::find($cuenta_horas_extras_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_horas_extras_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_horas_extras_comercial->id_cuenta_padre);

                $documento_cuenta_contable_horas_extras_comercial = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_horas_extras_comercial->id_documento = $documento->id_documento;
                $documento_cuenta_contable_horas_extras_comercial->id_moneda= 1;
                $documento_cuenta_contable_horas_extras_comercial->concepto = $cuenta_horas_extras_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_horas_extras_comercial->debe = $total_horas_extras_comercial;
                $documento_cuenta_contable_horas_extras_comercial->haber = 0;
                $documento_cuenta_contable_horas_extras_comercial->debe_org = $total_horas_extras_comercial;
                $documento_cuenta_contable_horas_extras_comercial->haber_org = 0;
                $documento_cuenta_contable_horas_extras_comercial->id_centro =  null;
                $documento_cuenta_contable_horas_extras_comercial->id_cuenta_contable = $cuenta_contable_horas_extras_comercial->id_cuenta_contable;
                $documento_cuenta_contable_horas_extras_comercial->cta_contable = $cuenta_contable_horas_extras_comercial->cta_contable;
                $documento_cuenta_contable_horas_extras_comercial->cta_contable_padre = $cuenta_contable_horas_extras_padre_comercial->cta_contable;
                $documento_cuenta_contable_horas_extras_comercial->save();

                //Documento cuenta contable vacaciones ~ Area comercial

                $cuenta_vacaciones_comercial = RRHHConfiguracionCdPlanilla::find(3);
                $cuenta_contable_vacaciones_comercial = ContabilidadCuentasContables::find($cuenta_vacaciones_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_vacaciones_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_vacaciones_comercial->id_cuenta_padre);

                $documento_cuenta_contable_vacaciones_comercial = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_vacaciones_comercial->id_documento = $documento->id_documento;
                $documento_cuenta_contable_vacaciones_comercial->id_moneda= 1;
                $documento_cuenta_contable_vacaciones_comercial->concepto = $cuenta_vacaciones_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_vacaciones_comercial->debe = $total_vacaciones_comercial;
                $documento_cuenta_contable_vacaciones_comercial->haber = 0;
                $documento_cuenta_contable_vacaciones_comercial->debe_org = $total_vacaciones_comercial;
                $documento_cuenta_contable_vacaciones_comercial->haber_org = 0;
                $documento_cuenta_contable_vacaciones_comercial->id_centro =  null;
                $documento_cuenta_contable_vacaciones_comercial->id_cuenta_contable = $cuenta_contable_vacaciones_comercial -> id_cuenta_contable;
                $documento_cuenta_contable_vacaciones_comercial->cta_contable = $cuenta_contable_vacaciones_comercial->cta_contable;
                $documento_cuenta_contable_vacaciones_comercial->cta_contable_padre = $cuenta_contable_vacaciones_padre_comercial->cta_contable;
                $documento_cuenta_contable_vacaciones_comercial->save();

                //Documento cuenta contable treceavo mes ~ Area comercial

                $cuenta_treceavo_mes_comercial = RRHHConfiguracionCdPlanilla::find(4);
                $cuenta_contable_treceavo_mes_comercial = ContabilidadCuentasContables::find($cuenta_treceavo_mes_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_treceavo_mes_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_treceavo_mes_comercial->id_cuenta_padre);

                $documento_cuenta_contable_treceavomes_comercial = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_treceavomes_comercial->id_documento = $documento->id_documento;
                $documento_cuenta_contable_treceavomes_comercial->id_moneda= 1;
                $documento_cuenta_contable_treceavomes_comercial->concepto = $cuenta_treceavo_mes_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_treceavomes_comercial->debe = $total_decimo_tercer_mes_comercial;
                $documento_cuenta_contable_treceavomes_comercial->haber = 0;
                $documento_cuenta_contable_treceavomes_comercial->debe_org = $total_decimo_tercer_mes_comercial;
                $documento_cuenta_contable_treceavomes_comercial->haber_org = 0;
                $documento_cuenta_contable_treceavomes_comercial->id_centro =  null;
                $documento_cuenta_contable_treceavomes_comercial->id_cuenta_contable = $cuenta_contable_treceavo_mes_comercial->id_cuenta_contable;
                $documento_cuenta_contable_treceavomes_comercial->cta_contable = $cuenta_contable_treceavo_mes_comercial->cta_contable;
                $documento_cuenta_contable_treceavomes_comercial->cta_contable_padre = $cuenta_contable_treceavo_mes_padre_comercial->cta_contable;
                $documento_cuenta_contable_treceavomes_comercial->save();

                //Documento cuenta contable inss patronal ~ Area comercial

                $cuenta_inss_patronal_comercial = RRHHConfiguracionCdPlanilla::find(5);
                $cuenta_contable_inss_patronal_comercial = ContabilidadCuentasContables::find($cuenta_inss_patronal_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_inss_patronal_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_inss_patronal_comercial->id_cuenta_padre);

                $documento_cuenta_contable_inss_comercial = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_inss_comercial->id_documento = $documento->id_documento;
                $documento_cuenta_contable_inss_comercial->id_moneda= 1;
                $documento_cuenta_contable_inss_comercial->concepto = $cuenta_inss_patronal_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_inss_comercial->debe = $total_inss_patronal_comercial;
                $documento_cuenta_contable_inss_comercial->haber = 0;
                $documento_cuenta_contable_inss_comercial->debe_org = $total_inss_patronal_comercial;
                $documento_cuenta_contable_inss_comercial->haber_org = 0;
                $documento_cuenta_contable_inss_comercial->id_centro =  null;
                $documento_cuenta_contable_inss_comercial->id_cuenta_contable = $cuenta_contable_inss_patronal_comercial->id_cuenta_contable;
                $documento_cuenta_contable_inss_comercial->cta_contable = $cuenta_contable_inss_patronal_comercial->cta_contable;
                $documento_cuenta_contable_inss_comercial->cta_contable_padre = $cuenta_contable_inss_patronal_padre_comercial->cta_contable;
                $documento_cuenta_contable_inss_comercial->save();

                //Documento cuenta contable inatec ~ Area comercial

                $cuenta_inatec_comercial = RRHHConfiguracionCdPlanilla::find(5);
                $cuenta_contable_inatec_comercial = ContabilidadCuentasContables::find($cuenta_inatec_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_inatec_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_inatec_comercial->id_cuenta_padre);

                $documento_cuenta_contable_inatec_comercial = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_inatec_comercial->id_documento = $documento->id_documento;
                $documento_cuenta_contable_inatec_comercial->id_moneda= 1;
                $documento_cuenta_contable_inatec_comercial->concepto = $cuenta_inatec_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_inatec_comercial->debe = $total_inatec_comercial;
                $documento_cuenta_contable_inatec_comercial->haber = 0;
                $documento_cuenta_contable_inatec_comercial->debe_org = $total_inatec_comercial;
                $documento_cuenta_contable_inatec_comercial->haber_org = 0;
                $documento_cuenta_contable_inatec_comercial->id_centro =  null;
                $documento_cuenta_contable_inatec_comercial->id_cuenta_contable = $cuenta_contable_inatec_comercial->id_cuenta_contable;
                $documento_cuenta_contable_inatec_comercial->cta_contable = $cuenta_contable_inatec_comercial->cta_contable;
                $documento_cuenta_contable_inatec_comercial->cta_contable_padre = $cuenta_contable_inatec_padre_comercial->cta_contable;
                $documento_cuenta_contable_inatec_comercial->save();

                //Documento cuenta contable gastos acumulados por pagar ~ vacaciones

                $cuenta_vacaciones_consolidado_comercial = RRHHConfiguracionCdPlanilla::find(3);
                $cuenta_contable_vacaciones_consolidado_comercial = ContabilidadCuentasContables::find($cuenta_vacaciones_consolidado_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_vacaciones_consolidado_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_vacaciones_consolidado_comercial->id_cuenta_padre);


                $documento_cuenta_contable_gastos_acumulados_vacaciones = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_gastos_acumulados_vacaciones->id_documento = $documento->id_documento;
                $documento_cuenta_contable_gastos_acumulados_vacaciones->id_moneda= 1;
                $documento_cuenta_contable_gastos_acumulados_vacaciones->concepto = 'Registramos vacaciones acumuladas sobre documento No.' . $documento->num_documento;
                $documento_cuenta_contable_gastos_acumulados_vacaciones->debe = $total_general_vacaciones;
                $documento_cuenta_contable_gastos_acumulados_vacaciones->haber = 0;
                $documento_cuenta_contable_gastos_acumulados_vacaciones->debe_org = $total_general_vacaciones;
                $documento_cuenta_contable_gastos_acumulados_vacaciones->haber_org = 0;
                $documento_cuenta_contable_gastos_acumulados_vacaciones->id_centro =  null;
                $documento_cuenta_contable_gastos_acumulados_vacaciones->id_cuenta_contable = 82;
                $documento_cuenta_contable_gastos_acumulados_vacaciones->cta_contable = '2143-00-000';
                $documento_cuenta_contable_gastos_acumulados_vacaciones->cta_contable_padre = '2143-00-000';
                $documento_cuenta_contable_gastos_acumulados_vacaciones->save();

                //Documento cuenta contable gastos acumulados por pagar ~ comisiones sobre venta

                $cuenta_comisiones_consolidado_comercial = RRHHConfiguracionCdPlanilla::find(7);
                $cuenta_contable_comisiones_consolidado_comercial = ContabilidadCuentasContables::find($cuenta_comisiones_consolidado_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_comisiones_consolidado_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_comisiones_consolidado_comercial->id_cuenta_padre);

                $documento_cuenta_contable_gastos_acumulados_comisiones = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_gastos_acumulados_comisiones->id_documento = $documento->id_documento;
                $documento_cuenta_contable_gastos_acumulados_comisiones->id_moneda= 1;
                $documento_cuenta_contable_gastos_acumulados_comisiones->concepto = $cuenta_comisiones_consolidado_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_gastos_acumulados_comisiones->debe = $total_general_comisiones;
                $documento_cuenta_contable_gastos_acumulados_comisiones->haber = 0;
                $documento_cuenta_contable_gastos_acumulados_comisiones->debe_org = $total_general_comisiones;
                $documento_cuenta_contable_gastos_acumulados_comisiones->haber_org = 0;
                $documento_cuenta_contable_gastos_acumulados_comisiones->id_centro =  null;
                $documento_cuenta_contable_gastos_acumulados_comisiones->id_cuenta_contable = 81;
                $documento_cuenta_contable_gastos_acumulados_comisiones->cta_contable = '2142-00-000';
                $documento_cuenta_contable_gastos_acumulados_comisiones->cta_contable_padre = '2142-00-000';
                $documento_cuenta_contable_gastos_acumulados_comisiones->save();

                //Documento cuenta contable anticipo a empleados

                $cuenta_anticipo_consolidado_comercial = RRHHConfiguracionCdPlanilla::find(9);
                $cuenta_contable_anticipo_consolidado_comercial = ContabilidadCuentasContables::find($cuenta_anticipo_consolidado_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_anticipo_consolidado_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_anticipo_consolidado_comercial->id_cuenta_padre);

                $documento_cuenta_contable_anticipo_empleados = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_anticipo_empleados->id_documento = $documento->id_documento;
                $documento_cuenta_contable_anticipo_empleados->id_moneda= 1;
                $documento_cuenta_contable_anticipo_empleados->concepto = $cuenta_anticipo_consolidado_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_anticipo_empleados->debe = 0;
                $documento_cuenta_contable_anticipo_empleados->haber = $total_general_anticipos_empleados;
                $documento_cuenta_contable_anticipo_empleados->debe_org = 0;
                $documento_cuenta_contable_anticipo_empleados->haber_org = $total_general_anticipos_empleados;
                $documento_cuenta_contable_anticipo_empleados->id_centro =  null;
                $documento_cuenta_contable_anticipo_empleados->id_cuenta_contable = $cuenta_contable_anticipo_consolidado_comercial->id_cuenta_contable;
                $documento_cuenta_contable_anticipo_empleados->cta_contable = $cuenta_contable_anticipo_consolidado_comercial->cta_contable;
                $documento_cuenta_contable_anticipo_empleados->cta_contable_padre = $cuenta_contable_anticipo_consolidado_padre_comercial->cta_contable;
                $documento_cuenta_contable_anticipo_empleados->save();

                //Documento cuenta contable retenciones por pagar

                $cuenta_retenciones_consolidado_comercial = RRHHConfiguracionCdPlanilla::find(10);
                $cuenta_contable_retenciones_consolidado_comercial = ContabilidadCuentasContables::find($cuenta_retenciones_consolidado_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_retenciones_consolidado_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_retenciones_consolidado_comercial->id_cuenta_padre);

                $documento_cuenta_contable_retenciones_pagar = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_retenciones_pagar->id_documento = $documento->id_documento;
                $documento_cuenta_contable_retenciones_pagar->id_moneda= 1;
                $documento_cuenta_contable_retenciones_pagar->concepto = $cuenta_retenciones_consolidado_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_retenciones_pagar->debe = 0;
                $documento_cuenta_contable_retenciones_pagar->haber = $total_general_retenciones_pagar;
                $documento_cuenta_contable_retenciones_pagar->debe_org = 0;
                $documento_cuenta_contable_retenciones_pagar->haber_org = $total_general_retenciones_pagar;
                $documento_cuenta_contable_retenciones_pagar->id_centro =  null;
                $documento_cuenta_contable_retenciones_pagar->id_cuenta_contable = $cuenta_contable_retenciones_consolidado_comercial->id_cuenta_contable;
                $documento_cuenta_contable_retenciones_pagar->cta_contable = $cuenta_contable_retenciones_consolidado_comercial->cta_contable;
                $documento_cuenta_contable_retenciones_pagar->cta_contable_padre = $cuenta_contable_retenciones_consolidado_padre_comercial->cta_contable;
                $documento_cuenta_contable_retenciones_pagar->save();

                //Documento cuenta contable aportes por pagar


                $cuenta_aportes_pagar_consolidado_comercial = RRHHConfiguracionCdPlanilla::find(11);
                $cuenta_contable_aportes_pagar_consolidado_comercial = ContabilidadCuentasContables::find($cuenta_aportes_pagar_consolidado_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_aportes_pagar_consolidado_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_aportes_pagar_consolidado_comercial->id_cuenta_padre);

                $documento_cuenta_contable_aportes_pagar = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_aportes_pagar->id_documento = $documento->id_documento;
                $documento_cuenta_contable_aportes_pagar->id_moneda= 1;
                $documento_cuenta_contable_aportes_pagar->concepto = $cuenta_aportes_pagar_consolidado_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_aportes_pagar->debe = 0;
                $documento_cuenta_contable_aportes_pagar->haber = $total_general_aportes_pagar;
                $documento_cuenta_contable_aportes_pagar->debe_org = 0;
                $documento_cuenta_contable_aportes_pagar->haber_org = $total_general_aportes_pagar;
                $documento_cuenta_contable_aportes_pagar->id_centro =  null;
                $documento_cuenta_contable_aportes_pagar->id_cuenta_contable = $cuenta_contable_aportes_pagar_consolidado_comercial->id_cuenta_contable;
                $documento_cuenta_contable_aportes_pagar->cta_contable = $cuenta_aportes_pagar_consolidado_comercial->cta_contable;
                $documento_cuenta_contable_aportes_pagar->cta_contable_padre = $cuenta_contable_aportes_pagar_consolidado_padre_comercial->cta_contable;
                $documento_cuenta_contable_aportes_pagar->save();


                //Documento cuenta contable gastos acumulados por pagar


                $cuenta_gastos_pagar_consolidado_comercial = RRHHConfiguracionCdPlanilla::find(12);
                $cuenta_contable_gastos_pagar_consolidado_comercial = ContabilidadCuentasContables::find($cuenta_gastos_pagar_consolidado_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_gastos_pagar_consolidado_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_gastos_pagar_consolidado_comercial->id_cuenta_padre);

                $documento_cuenta_contable_gastos_pagar = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_gastos_pagar->id_documento = $documento->id_documento;
                $documento_cuenta_contable_gastos_pagar->id_moneda= 1;
                $documento_cuenta_contable_gastos_pagar->concepto = $cuenta_gastos_pagar_consolidado_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_gastos_pagar->debe = 0;
                $documento_cuenta_contable_gastos_pagar->haber = $total_general_gastos_acumulados_pagar;
                $documento_cuenta_contable_gastos_pagar->debe_org = 0;
                $documento_cuenta_contable_gastos_pagar->haber_org = $total_general_gastos_acumulados_pagar;
                $documento_cuenta_contable_gastos_pagar->id_centro =  null;
                $documento_cuenta_contable_gastos_pagar->id_cuenta_contable = $cuenta_contable_gastos_pagar_consolidado_comercial->id_cuenta_contable;
                $documento_cuenta_contable_gastos_pagar->cta_contable = $cuenta_gastos_pagar_consolidado_comercial->cta_contable;
                $documento_cuenta_contable_gastos_pagar->cta_contable_padre = $cuenta_contable_gastos_pagar_consolidado_padre_comercial->cta_contable;
                $documento_cuenta_contable_gastos_pagar->save();

                //Documento contable cuenta bancaria transferencias

                $cuenta_banco_consolidado_comercial = RRHHConfiguracionCdPlanilla::find(13);
                $cuenta_contable_banco_consolidado_comercial = ContabilidadCuentasContables::find($cuenta_banco_consolidado_comercial->id_cuenta_contable_comercial);
                $cuenta_contable_banco_consolidado_padre_comercial = ContabilidadCuentasContables::find($cuenta_contable_banco_consolidado_comercial->id_cuenta_padre);

                $documento_cuenta_contable_banco = new ContabilidadDocumentosMovimientos;
                $documento_cuenta_contable_banco->id_documento = $documento->id_documento;
                $documento_cuenta_contable_banco->id_moneda= 1;
                $documento_cuenta_contable_banco->concepto = $cuenta_banco_consolidado_comercial['concepto'] . $documento->num_documento;
                $documento_cuenta_contable_banco->debe = 0;
                $documento_cuenta_contable_banco->haber = $transferencia_a_pagar;
                $documento_cuenta_contable_banco->debe_org = 0;
                $documento_cuenta_contable_banco->haber_org = $transferencia_a_pagar;
                $documento_cuenta_contable_banco->id_centro =  null;
                $documento_cuenta_contable_banco->id_cuenta_contable = $cuenta_contable_banco_consolidado_comercial->id_cuenta_contable;
                $documento_cuenta_contable_banco->cta_contable = $cuenta_contable_banco_consolidado_comercial->cta_contable;
                $documento_cuenta_contable_banco->cta_contable_padre = $cuenta_contable_banco_consolidado_padre_comercial->cta_contable;
                $documento_cuenta_contable_banco->save();

                DB::commit();

                return response()->json([
                    'status' => 'success',
                    'result' => null,
                    'messages' => null
                ]);
            }catch (Exception $e){

                DB::rollBack();

                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
                    'messages' => null
                ]);
            }
        }else
        {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }

    public function nuevo(Request $request)
    {
        $planillas_controles = RRHHPlanillaControl::select(['id_planilla_control','codigo_planilla','tipo_planilla','descripcion','anio_proceso','mes_proceso','estado'])->whereIn('estado',array(1,2))->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'planillas_controles' => $planillas_controles,
            ],
            'messages' => null
        ]);

    }

    public function generarReporte($ext)
    {
        // echo $ext;
        // $ext = 'pdf';
        $os = array("xls", "pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteZonas';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteZonas';
             $input = '/var/www/html/resources/reports/ReporteZonas';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteZonas';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [],
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteZonas.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}