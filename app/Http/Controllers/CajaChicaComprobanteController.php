<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\CajaChicaCaja;
use App\Models\CajaChicaComprobante;
use App\Models\CajaChicaComprobanteDetalle;
use App\Models\CajaChicaSolicitudViatico;
use App\Models\CajaChicaViaticos;
use App\Models\InventarioProveedores;
use App\Models\RRHHTrabajadores;
use Hash, Validator;
//use App\Models\CajaChicaSolicitudViaticoDetalle;
//use App\Models\AdmonUsuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;

class CajaChicaComprobanteController extends Controller
{

    /**
     * Busqueda de solicitud
     *
     * @access  public
     * @param Request $request
     * @param CajaChicaComprobante $comprobante
     * @return  json(array)
     */

    public function buscar(Request $request, CajaChicaComprobante $comprobante)
    {
        $comprobante = $comprobante->buscar($request);
        return response()->json([
            'results' => $comprobante
        ]);
    }

    /**
     * Obtener Lista de comprobante con paginación
     *
     * @access  public
     * @param Request $request
     * @param CajaChicaComprobante $comprobante
     * @return  json(array)
     */

    public function obtenerComprobantes(Request $request, CajaChicaComprobante $comprobante)
    {
        $comprobante = $comprobante->obtenercomprobantes($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $comprobante->total(), 
                'rows' => $comprobante->items()
            ],
            'messages' => null
        ]);
	}

	
    /**
     * Obtener comprobante especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerComprobante(Request $request)
    {
        $rules = [
            'id_comprobante'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $comprobante = CajaChicaComprobante::where('id_comprobante',$request->id_comprobante)->with('trabajadorComprobante','cajaComprobante','solicitudComprobante','comprobanteDetalle','acreedorComprobante')->first();
            $trabajador = RRHHTrabajadores::select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"))->get();
            $caja_chica = CajaChicaCaja::select('id_caja_chica','descripcion','monto','anio')->get();
            $solicitud = CajaChicaSolicitudViatico::select('id_solicitud_viatico','fecha_solicitud','monto_total','concepto')->get();
            $proveedores = InventarioProveedores::select('*')->where('clasificacion_contable',2)->get();

            if(!empty($comprobante)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'trabajadores' => $trabajador,
                        'cajas_chica' => $caja_chica,
                        'solicitudes' => $solicitud,
                        'comprobante' => $comprobante,
                        'proveedores' => $proveedores
                    ],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_comprobante'=>["Datos no encontrados"]),
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
     * Registrar nuevo comprobante
     *
     * @access 	public
     * @param 	
     * @return 	json(string)
     */

	public function registrar(Request $request)
	{
		$rules = [
			//'numero' => 'required|integer',
            'fecha' => 'required|date',
           // 'fecha_pago' => 'required|date',
			//'a_favor_de' => 'required|string|max:200',
            'monto_entregado' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
          //  'monto_en_letra' => 'required|string',
            'concepto' => 'required|string',
            'tipo_beneficiario' => 'required_if:tipo_comprobante,2|integer',
            'tipo_comprobante'=>'required|integer',
            //'trabajador' =>'required_if:tipo_beneficiario,1|array|min:1',
            'trabajador.id_trabajador' =>'required_if:tipo_beneficiario,1|integer|min:1',
            //'proveedor' =>'required_if:tipo_beneficiario,2|array|min:1',
            'proveedor.id_proveedor' =>'required_if:tipo_beneficiario,2|integer|min:1',

            'detalleSolicitud' => 'required_if:tipo_comprobante,2|array|min:0|nullable',
            'detalleSolicitud.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'detalleSolicitud.*.factura' => 'required|string',
            'detalleSolicitud.*.nombre_comercio' => 'required|string',
            'detalleSolicitud.*.numero_ruc' => 'required|string',

		];

		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {

			try{
			DB::beginTransaction();

                $comprobante = new CajaChicaComprobante();
                if ($request->tipo_comprobante == 1){ //Tipo comprobante viatico
                    $comprobante-> tipo_comprobante =  $request->tipo_comprobante;
                    $viatico = CajaChicaSolicitudViatico::find($request->id_solicitud_viatico);
                    $viatico->estado = 3;
                    $viatico->save();
                }else if ($request-> tipo_comprobante ==2)  //tipo comprobante gastos
                {
                    $comprobante->tipo_comprobante=2;

                }else{ //tipo comprobante vale
                    $comprobante->tipo_comprobante=2;
                    $vale = CajaChicaComprobante::find($request->id_comprobante);
                    $vale->estado =3;
                    $vale->save();
                }

                $codigo_nuevo= $comprobante->obtenerNumeroComprobante($comprobante->tipo_comprobante);
                $comprobante->id_caja_chica = $request->caja['id_caja_chica'];
                $comprobante->numero = $codigo_nuevo['secuencia'];
                //$comprobante->numero = 8719;
                $comprobante->fecha= $request->fecha;
                $comprobante -> tipo_beneficiario = $request-> tipo_beneficiario;
                if($comprobante->tipo_beneficiario === 1){
                $comprobante -> id_trabajador = $request->trabajador['id_trabajador'];
                }else if ($comprobante->tipo_beneficiario === 2){
                $comprobante -> id_proveedor = $request->proveedor['id_proveedor'];
                }
                $comprobante -> a_favor_de = $request-> a_favor_de;
                $comprobante -> monto_entregado = $request -> monto_entregado;
                $comprobante -> monto_en_letra = $request -> monto_letras;
                $comprobante -> concepto = $request -> concepto;
                $comprobante -> persona_recibe = $request -> persona_recibe;
                $comprobante -> identificacion_persona_recibe = $request -> identificacion_persona_recibe;
                $comprobante -> total_detalle = $request -> total;
                $comprobante -> id_solicitud_viatico = $request->id_solicitud_viatico;
                $comprobante->autorizado = $request->autorizado;
                $comprobante->fecha_pago = $request->fecha_pago;

                $comprobante->u_creacion = Auth::user()->usuario;
                $comprobante->id_moneda = 1;
                $comprobante->estado = 1;
                $comprobante->save();

                if ( $comprobante-> tipo_comprobante!=1){
                    $i = 1;
                    foreach ($request->detalleSolicitud as $comprobante_detalle) {
                    $detalles = new CajaChicaComprobanteDetalle();
                    $detalles->id_comprobante = $comprobante->id_comprobante;
                    //$detalles->id_viatico = $comprobante_detalle['viatico']['id_viatico'];
                    $detalles->monto = $comprobante_detalle['monto'];
                    $detalles->factura = $comprobante_detalle['factura'];
                    $detalles->nombre_comercio = $comprobante_detalle['nombre_comercio'];
                    $detalles->numero_ruc = $comprobante_detalle['numero_ruc'];
                    $detalles->save();
                      $i++;
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

    public function registrarVale(Request $request)
    {
        $rules = [
            //'numero' => 'required|integer',
            'fecha' => 'required|date',
            //'fecha_pago' => 'required|date',
            //'a_favor_de' => 'required|string|max:200',
            'monto_entregado' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:1',
            //'monto_en_letra' => 'required|string',
            'concepto' => 'required|string',
           // 'tipo_comprobante'=>'required|integer',
            'trabajador' =>'required|array|min:1',
            'trabajador.id_trabajador' =>'required|integer|min:1',
            'caja'=> 'required|array|min:1',
            'caja.id_caja_chica'=>'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{
                DB::beginTransaction();

                $vale = new CajaChicaComprobante();
                $codigo_nuevo= $vale->obtenerNumeroComprobante(3);
                $vale->id_caja_chica = $request->caja['id_caja_chica'];
                $vale->numero = $codigo_nuevo['secuencia'];
                $vale->fecha= $request->fecha;
                $vale -> id_trabajador = $request->trabajador['id_trabajador'];
                $vale -> a_favor_de = $request-> a_favor_de;
                $vale -> monto_entregado = $request -> monto_entregado;
                $vale -> monto_en_letra = $request -> monto_letras;
                $vale -> concepto = $request -> concepto;
                //$vale -> id_solicitud_viatico = $request->solicitud['id_solicitud_viatico']; no aplica en vales
                $vale->autorizado = $request->autorizado;
                $vale->fecha_pago = $request->fecha_pago;
                $vale-> tipo_comprobante = 3;
                //$vale->tipo_beneficiario = 1;
                $vale->u_creacion = Auth::user()->usuario;
                $vale->id_moneda = 1;
                $vale->estado = 1;
                $vale->save();

              /*  $i = 1;
                foreach ($request->detalleComprobante as $comprobante_detalle) {
                    $detalles = new CajaChicaComprobanteDetalle;
                    $detalles->id_comprobante = $comprobante->id_comprobante;
                    //$detalles->id_viatico = $comprobante_detalle['viatico']['id_viatico'];
                    $detalles->monto = $comprobante_detalle['monto'];
                    $detalles->factura = $comprobante_detalle['factura'];
                    $detalles->nombre_comercio = $comprobante_detalle['nombre_comercio'];
                    $detalles->numero_ruc = $comprobante_detalle['numero_ruc'];
                    $detalles->save();
                    $i++;
                }*/
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
     * Update Existing comprobante
     *
     * @access 	public
     * @param 	
     * @return 	json(string)
     */

	public function actualizar(Request $request)
	{
		$rules = [
			'id_comprobante' => 'required|integer|min:1',

            'numero' => 'required|integer',
            'fecha' => 'required|date',
            //'fecha_pago' => 'required|date',
            //'a_favor_de' => 'required|string|max:200',
            'monto_entregado' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'monto_en_letra' => 'required|string',
            'concepto' => 'required|string',
            'tipo_comprobante'=>'required|integer',
            'tipo_beneficiario' => 'required_if:tipo_comprobante,2|integer|nullable',
            //'tipo_comprobante'=>'required|integer',
            //'trabajador' =>'required_if:tipo_beneficiario,1|array|min:1',
            'trabajador_comprobante.id_trabajador' =>'required_if:tipo_beneficiario,1|integer|min:1',
            //'proveedor' =>'required_if:tipo_beneficiario,2|array|min:1',
            'acreedor_comprobante.id_proveedor' =>'required_if:tipo_beneficiario,2|integer|min:1',

            'comprobante_detalle' => 'required_if:tipo_comprobante,2|array|min:0|nullable',
            'comprobante_detalle.*.monto' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'comprobante_detalle.*.factura' => 'required|string',
            'comprobante_detalle.*.nombre_comercio' => 'required|string',
            'comprobante_detalle.*.numero_ruc' => 'required|string',
		];
	
		
		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {

			try{
			DB::beginTransaction();

                $comprobante =  CajaChicaComprobante::findOrFail($request->id_comprobante);
                $comprobante->id_caja_chica = $request->caja_comprobante['id_caja_chica'];
                $comprobante->numero = $request->numero;
                $comprobante->fecha= $request->fecha;
                if($request->tipo_beneficiario == 1){
                    $comprobante -> id_trabajador = $request->trabajador_comprobante['id_trabajador'];
                }else if ($request->tipo_beneficiario == 2){
                    $comprobante -> id_proveedor = $request->acreedor_comprobante['id_proveedor'];
                }
                $comprobante -> a_favor_de = $request-> a_favor_de;
                $comprobante -> tipo_beneficiario = $request-> tipo_beneficiario;
                $comprobante -> monto_entregado = $request -> monto_entregado;
                $comprobante -> monto_en_letra = $request -> monto_en_letra;
                $comprobante -> concepto = $request -> concepto;
                $comprobante -> persona_recibe = $request -> persona_recibe;
                $comprobante -> identificacion_persona_recibe = $request -> identificacion_persona_recibe;
               // $comprobante -> id_solicitud_viatico = $request->solicitud_comprobante['id_solicitud_viatico'];
                $comprobante->autorizado = $request->autorizado;
                $comprobante->fecha_pago = $request->fecha_pago;
                $comprobante -> total_detalle = $request -> total;
                $comprobante-> tipo_comprobante = $request-> tipo_comprobante;
                $comprobante->u_modificacion = Auth::user()->usuario;
                $comprobante->estado = $request->estado;
                $comprobante->save();

                if($request->estado == 2) {
                    $cajachica = CajaChicaCaja::find($comprobante->id_caja_chica);
                    //print_r($cajachica);
                    if (!empty($cajachica)) {
                        //echo 'cajachica saldo_actual '.$cajachica->saldo_actual;
                        //echo 'comprobante monto_entregado '.$comprobante->monto_entregado;
                        if($comprobante->monto_entregado>$comprobante->total_detalle){
                            if($request -> tipo_comprobante !== 1) {
                                $cajachica->saldo_actual = $cajachica->saldo_actual + ($comprobante->monto_entregado - $comprobante->total_detalle);
                                $cajachica->save();

                                $comprobante->monto_entregado = $comprobante->total_detalle;
                                $comprobante->save();
                            }else {
                                $cajachica->saldo_actual = $cajachica->saldo_actual - ($comprobante->monto_entregado);
                                $cajachica->save();
                            }
                        }

                    }
                }
              

                CajaChicaComprobanteDetalle::where('id_comprobante',$comprobante->id_comprobante)->delete();

                $i = 1;
                foreach ($request->comprobante_detalle as $comprobante_detalle) {
                    $detalles = new CajaChicaComprobanteDetalle;
                    $detalles->id_comprobante = $comprobante->id_comprobante;
                    //$detalles->id_viatico = $comprobante_detalle['viatico']['id_viatico'];
                    $detalles->monto = $comprobante_detalle['monto'];
                    $detalles->factura = $comprobante_detalle['factura'];
                    $detalles->nombre_comercio = $comprobante_detalle['nombre_comercio'];
                    $detalles->numero_ruc = $comprobante_detalle['numero_ruc'];
                    $detalles->save();



                    $i++;
                }
               /* }else
                    {
                        return response()->json([
                            'status' => 'error',
                            'result' => array('id_solicitud_viatico'=>['El estado de la solicitud a cambiado externamente']),
                            'messages' => null
                        ]);
                    }*/
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

    public function actualizarVale(Request $request)
    {
        $rules = [

            'numero' => 'required|integer',
            'fecha' => 'required|date',
            //'fecha_pago' => 'required|date',
           // 'a_favor_de' => 'required|string|max:200',
            'monto_entregado' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'monto_en_letra' => 'required|string',
            'concepto' => 'required|string',
            'tipo_comprobante'=>'required|integer',
            'trabajador_comprobante' =>'required|array|min:1',
            'trabajador_comprobante.id_trabajador' =>'required|integer|min:1',

        ];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{
                DB::beginTransaction();

                $comprobante =  CajaChicaComprobante::findOrFail($request->id_comprobante);
                $comprobante->id_caja_chica = $request->caja_comprobante['id_caja_chica'];
                $comprobante->numero = $request->numero;
                $comprobante->fecha= $request->fecha;
                $comprobante -> id_trabajador = $request->trabajador_comprobante['id_trabajador'];
                $comprobante -> a_favor_de = $request-> a_favor_de;
                $comprobante -> monto_entregado = $request -> monto_entregado;
                $comprobante -> monto_en_letra = $request -> monto_en_letra;
                $comprobante -> concepto = $request -> concepto;
               // $comprobante -> id_solicitud_viatico = $request->solicitud_comprobante['id_solicitud_viatico'];
                $comprobante->autorizado = $request->autorizado;
                $comprobante->fecha_pago = $request->fecha_pago;
                $comprobante-> tipo_comprobante = $request-> tipo_comprobante;
                $comprobante-> tipo_beneficiario = $request-> tipo_beneficiario;
                $comprobante->u_modificacion = Auth::user()->usuario;
                $comprobante->estado = $request->estado;
                $comprobante->save();

                if($comprobante->estado == 2) {

                    $cajachica = CajaChicaCaja::find($comprobante->id_caja_chica);
                    if (!empty($cajachica)) {
                        if (($cajachica->saldo_actual - $comprobante->monto_entregado) >= 0) {
                            $cajachica->saldo_actual = $cajachica->saldo_actual - $comprobante->monto_entregado;
                            $cajachica->save();
                        } else {

                            DB::rollBack();
                            return response()->json([
                                'status' => 'error',
                                'result' =>['id_comprobante'=>['Saldo insuficiente en caja chica']],
                                'messages' => null
                            ]);

                        }
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

    public function desactivar(Request $request)
    {
        $rules = [
            'id_comprobante' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $comprobante = CajaChicaComprobante::find($request->id_comprobante);
            $comprobante->estado = 0;
            $comprobante->save();

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


    public function activar(Request $request)
    {
        $rules = [
            'id_comprobante' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $comprobante = CajaChicaSolicitudViatico::find($request->id_solicitud_viatico);
            $comprobante->estado = 1;
            $comprobante->save();

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

    public function nuevo(Request $request)
    {
        $trabajadores = RRHHTrabajadores::select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"))->get();
        $cajas = CajaChicaCaja::select('id_caja_chica','descripcion','monto')->where('id_trabajador',Auth::user()->id_empleado)->get();

       $solicitudes = CajaChicaSolicitudViatico::select('id_solicitud_viatico','fecha_solicitud','monto_total','concepto','id_trabajador')->with('solicitudTrabajador')->where('estado',2)->get();
       $vales = CajaChicaComprobante::select('id_comprobante','concepto','monto_entregado','fecha','tipo_comprobante','monto_en_letra','id_trabajador','id_caja_chica')->where('tipo_comprobante',3)->where('estado',2)->with('cajaComprobante')->with('trabajadorComprobante')->get();

        if(!empty($request->id_solicitud_viatico))
        {
            $solicitud = CajaChicaSolicitudViatico::where('id_solicitud_viatico',$request->id_solicitud_viatico)->with('solicitudTrabajador')->first();
            return response()->json([
                'status' => 'success',
                'result' => [
                    'trabajadores' => $trabajadores,
                    'cajas' => $cajas,
                    'solicitudes' => $solicitudes,
                    'solicitud' => $solicitud,

                ],
                'messages' => null
            ]);
        }else if(!empty($request->id_comprobante))
        {
            $vale=CajaChicaComprobante::where('id_comprobante',$request->id_comprobante)->where('tipo_comprobante',3)->with('trabajadorComprobante')->with('cajaComprobante')->first();
            return response()->json([
                'status' => 'success',
                'result' => [
                    'trabajadores' => $trabajadores,
                    'cajas' => $cajas,
                    'solicitudes' => $solicitudes,
                    'vale' => $vale,

                ],
                'messages' => null
            ]);
        }
        else{
        return response()->json([
            'status' => 'success',
            'result' => [
                'trabajadores' => $trabajadores,
                'cajas' => $cajas,
                'solicitudes' => $solicitudes,
                'vales'=>$vales
            ],
            'messages' => null
        ]);
        }
    }

    public function generarReporteVales(Request $request)
    {
        $rules = [
            'extension' => 'required|string|max:3',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $os = array("pdf", "xls");
            if (in_array($request->extension, $os)) {
                $hora_actual = time();
                //$input = 'C:/xampp/htdocs/resources/reports/Vale_provisional';
                //$output = 'C:/xampp/htdocs/resources/reports/' . $hora_actual . 'Vale_provisional';
                $input = '/var/www/html/resources/reports/Vale_provisional';
                $output = '/var/www/html/resources/reports/'.$hora_actual.'Vale_provisional';
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/Vale_provisional';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'Vale_provisional';
                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
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

                /*  exec($jasper->process($input, $output, $options)->output() . ' 2>&1', $output);
                  print_r($output);*/

                $headers = [
                    'Content-Type' => 'application/pdf',
                ];

                return response()->download($output . '.' . $request->extension, $hora_actual . 'ReporteValeProvisional.' . $request->extension, $headers);

            } else {
                return response()->json([
                    'status' => 'error',
                    'result' => $validator->messages(),
                    'messages' => null
                ]);
            }
        }    else {
            return '';
        }
    }

    public function generarReporteComprobante($id_comprobante)
    {
        // echo $ext;
        $ext = 'pdf';
        $os = array("pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteComprobante';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteComprobante';
            $input = '/var/www/html/resources/reports/ReporteComprobante';
            $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteComprobante';
            $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
            $url = '/var/www/html/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'id_comprobante' => $id_comprobante,
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

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
          print_r($output);*/

            $headers = [
                'Content-Type' => 'application/pdf',
            ];

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteComprobante.' . $ext, $headers);
        }else{
            return '';
        }
    }

}