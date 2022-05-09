<?php 

namespace App\Http\Controllers;

use App\Models\AdmonMenus;
use App\Models\CajaBancoTasasCambios;
use App\Models\ContabilidadCentroCostoIngreso;
use App\Models\ContabilidadNivelesCuenta;
use Validator,Auth,DB;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class ContabilidadPeriodoFiscalController extends Controller
{
    /**
     * Obtener
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtener(Request $request, ContabilidadPeriodoFiscal $periodos)
    {
        $periodos = $periodos->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $periodos->total(), 
                'rows' => $periodos->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodos(Request $request, ContabilidadPeriodoFiscal $periodos)
    {
        $niveles_cuenta = ContabilidadNivelesCuenta::where('activo',1)->orderby('id_nivel_cuenta','asc')->get();
        $periodos = ContabilidadPeriodoFiscal::select('id_periodo_fiscal','periodo')->orderby('periodo','desc')->with('mesesPeriodo')->get();
        $centro_costos_ingresos = ContabilidadCentroCostoIngreso::select('id_centro','descripcion')->where('estado',true)->get();

        $listado_reportes = AdmonMenus::select('admon.menus.id_menu')->join('admon.roles_menus','admon.menus.id_menu','admon.roles_menus.id_menu')
            ->join('admon.roles','admon.roles.id_rol','admon.roles_menus.id_rol')
            ->where('admon.roles.id_rol',Auth::user()->id_rol)
            ->where('admon.menus.activo',1)
            ->where('admon.menus.tipo_menu',4)
            ->orderBy('admon.menus.secuencia')
            ->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'niveles_cuenta' => $niveles_cuenta,
                'periodos'=>$periodos,
                'centros'=>$centro_costos_ingresos,
                'lista_reportes'=>$listado_reportes
            ],
            'messages' => null
        ]);
    }

    /**
     * obtener
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerPeriodo(Request $request)
    {
        $rules = [
            'id_periodo_fiscal' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $periodo = ContabilidadPeriodoFiscal::find($request->id_periodo_fiscal);

            if(!empty($periodo)){	
            return response()->json([
                'status' => 'success',
                'result' => $periodo,
                'messages' => null
            ]);

        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_periodo_fiscal'=>["Datos no encontrados"]),
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
     * Registrar
     *
     * @access  public
     * @param   
     * @return  json(string)
     */



    public function registrar(Request $request)
    {
        $rules = [
            'descripcion' => 'required',
            'estado' => 'required|integer|min:0',
            'periodo' => 'required|integer|unique:pgsql.contabilidad.periodos_fiscales,periodo|min:2015|max:2035',
          /*  'salario_mensual_techo' => 'required|regex:/^\d*(\.\d{1,2})?$/|numeric|min:1',
            'porcentaje_inss_base' => 'required|regex:/^\d*(\.\d{1,4})?$/|numeric|min:1',
            'porcentaje_ir_base' => 'required|regex:/^\d*(\.\d{1,4})?$/|numeric|min:1',*/
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            try{
            DB::beginTransaction();
            $periodo = new ContabilidadPeriodoFiscal;
            $periodo->descripcion = $request->descripcion;
            $periodo->periodo = $request->periodo;
           /* $periodo->salario_mensual_techo = $request->salario_mensual_techo;
            $periodo->porcentaje_inss_base = $request->porcentaje_inss_base;
            $periodo->porcentaje_ir_base = $request->porcentaje_ir_base;*/
            $periodo->estado =  $request->estado;
            $periodo->u_creacion = Auth::user()->usuario;
            $periodo->save();

            $meses_periodo1 = new ContabilidadPeriodoMeses;
            $meses_periodo1->descripcion = 'ENERO/'.$request->periodo;
            $meses_periodo1->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo1->mes = 1;
            $meses_periodo1->save();

            $meses_periodo2 = new ContabilidadPeriodoMeses;
            $meses_periodo2->descripcion = 'FEBRERO/'.$request->periodo;
            $meses_periodo2->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo2->mes = 2;
            $meses_periodo2->save();

            $meses_periodo3 = new ContabilidadPeriodoMeses;
            $meses_periodo3->descripcion = 'MARZO/'.$request->periodo;
            $meses_periodo3->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo3->mes = 3;
            $meses_periodo3->save();

            $meses_periodo4 = new ContabilidadPeriodoMeses;
            $meses_periodo4->descripcion = 'ABRIL/'.$request->periodo;
            $meses_periodo4->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo4->mes = 4;
            $meses_periodo4->save();

            $meses_periodo5 = new ContabilidadPeriodoMeses;
            $meses_periodo5->descripcion = 'MAYO/'.$request->periodo;
            $meses_periodo5->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo5->mes = 5;
            $meses_periodo5->save();

            $meses_periodo6 = new ContabilidadPeriodoMeses;
            $meses_periodo6->descripcion = 'JUNIO/'.$request->periodo;
            $meses_periodo6->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo6->mes = 6;
            $meses_periodo6->save();

            $meses_periodo7 = new ContabilidadPeriodoMeses;
            $meses_periodo7->descripcion = 'JULIO/'.$request->periodo;
            $meses_periodo7->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo7->mes = 7;
            $meses_periodo7->save();

            $meses_periodo8 = new ContabilidadPeriodoMeses;
            $meses_periodo8->descripcion = 'AGOSTO/'.$request->periodo;
            $meses_periodo8->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo8->mes = 8;
            $meses_periodo8->save();

            $meses_periodo9 = new ContabilidadPeriodoMeses;
            $meses_periodo9->descripcion = 'SEPTIEMBRE/'.$request->periodo;
            $meses_periodo9->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo9->mes = 9;
            $meses_periodo9->save();

            $meses_periodo10 = new ContabilidadPeriodoMeses;
            $meses_periodo10->descripcion = 'OCTUBRE/'.$request->periodo;
            $meses_periodo10->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo10->mes = 10;
            $meses_periodo10->save();

            $meses_periodo11 = new ContabilidadPeriodoMeses;
            $meses_periodo11->descripcion = 'NOVIEMBRE/'.$request->periodo;
            $meses_periodo11->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo11->mes = 11;
            $meses_periodo11->save();

            $meses_periodo12 = new ContabilidadPeriodoMeses;
            $meses_periodo12->descripcion = 'DICIEMBRE/'.$request->periodo;
            $meses_periodo12->id_periodo_fiscal =  $periodo->id_periodo_fiscal;
            $meses_periodo12->mes = 12;
            $meses_periodo12->save();

             $num_dias = $this->cal_days_in_year($request->periodo);

             $tasas = [];
                for($dia=0;$dia<$num_dias;$dia++){
                    $fecha = date('Y-m-d', strtotime('01/01/'.$request->periodo.' + '.$dia.' days'));

                    array_push($tasas,array('fecha'=>$fecha,'tasa'=>0,'tasa_paralela'=>0));
                }
             CajaBancoTasasCambios::insert($tasas);
             //print_r($tasas);

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

    function cal_days_in_year($year){
        $days=0;
        for($month=1;$month<=12;$month++){
            $days = $days + cal_days_in_month(CAL_GREGORIAN,$month,$year);
        }
        return $days;
    }

    /**
     * Actualizar
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function actualizar(Request $request)
    {
        $rules = [
            'id_periodo_fiscal' => 'required',
            'descripcion' => 'required',
            'estado' => 'required|integer|min:0',
            //'periodo' => 'required|integer|unique:pgsql.contabilidad.periodos_fiscales,periodo|min:2015',
           /* 'salario_mensual_techo' => 'required|regex:/^\d*(\.\d{1,2})?$/|numeric|min:1',
            'porcentaje_inss_base' => 'required|regex:/^\d*(\.\d{1,4})?$/|numeric|min:1',
            'porcentaje_ir_base' => 'required|regex:/^\d*(\.\d{1,4})?$/|numeric|min:1',*/
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $periodo = ContabilidadPeriodoFiscal::find($request->id_periodo_fiscal);
            $periodo->descripcion = $request->descripcion;
            //$periodo->periodo = $request->periodo;
           /* $periodo->salario_mensual_techo = $request->salario_mensual_techo;
            $periodo->porcentaje_inss_base = $request->porcentaje_inss_base;
            $periodo->porcentaje_ir_base = $request->porcentaje_ir_base;*/
            $periodo->estado = $request->estado;
            $periodo->save();

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


    public function cerrarMes(Request $request)
    {
        $rules = [
            'id_periodo' => 'required|integer|min:1',
            'id_mes' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            try{
            DB::beginTransaction();
            $periodo_mes = ContabilidadPeriodoMeses::find($request->id_mes);

            $meses_antes = ContabilidadPeriodoMeses::
            where('mes','<',$periodo_mes->mes)->
            where('estado',1)->
            where('id_periodo_fiscal',$periodo_mes->id_periodo_fiscal)->first();

            //print_r($meses_antes);
            if(empty($meses_antes)){
            $periodo_mes->estado = 2;
            $periodo_mes->save();
             DB::select("SELECT contabilidad.consolidar_saldos(?,?)",[$request->id_periodo,$periodo_mes['mes']]);
            }else{
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Existen meses anteriores que no han sido cerrados',
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

}