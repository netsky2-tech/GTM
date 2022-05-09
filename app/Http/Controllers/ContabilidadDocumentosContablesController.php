<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\CajaBancoFacturas;
use App\Models\CajaBancoMinutasDeposito;
use App\Models\CajaBancoMonedas;
use App\Models\CajaBancoSolicitudesPago;
use App\Models\CajaBancoTasasCambios;
use App\Models\ContabilidadCentroCostoIngreso;
use App\Models\ContabilidadCuentasContablesVista;
use App\Models\CuentasXCobrarRecibos;
use PHPJasper\PHPJasper;
use Validator,Auth,DB,DateTime;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use Illuminate\Http\Request;

class ContabilidadDocumentosContablesController extends Controller
{
    /**
     * Obtener una lista de Documentos Contables
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, ContabilidadDocumentosContables $documentos_contables)
    {
        $documentos_contables = $documentos_contables->obtener($request);
        foreach($documentos_contables as $documento ){
            $items = collect($documento->movimientosCuentas);
            $documento->total_debe = $items->sum(function($item) {
                 return $item['debe'];
             });
             $documento->total_haber = $items->sum(function($item) {
                 return $item['haber'];
             });
        }
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $documentos_contables->total(), 
                'rows' => $documentos_contables->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de Roles sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodos(Request $request, ContabilidadDocumentosContables $documentos_contables)
    {
        $documentos_contables = ContabilidadDocumentosContables::all();
        return response()->json([
            'status' => 'success',
            'result' => $documentos_contables,
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

    public function obtenerDocumentoContable(Request $request)
    {
        $rules = [
            'id_documento' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $documento_contable = ContabilidadDocumentosContables::find($request->id_documento);
            return response()->json([
                'status' => 'success',
                'result' => $documento_contable,
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
     * obtener Codigo Documento
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerCodigoDocumento(Request $request, ContabilidadDocumentosContables $documentos_contables)
    {
        $rules = [
            'id_tipo_doc' => 'required|integer',
            'fecha_doc' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $codigo = $documentos_contables->obtenerCodigoDocumento($request);
            $tasa = CajaBancoTasasCambios::select('tasa')->where('fecha',$request->fecha_doc)->first();
            return response()->json([
                'status' => 'success',
                'result' => [
                    'codigo' => $codigo[0],
                    't_cambio' => $tasa,
                ],
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
     * Crear un nuevo tipo de Salida
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    { 
        $messages = [
            'detalleMovimientos.min' => 'Se requiere agregar dos movimientos por lo menos.',
            'detalleMovimientos.*.cuentaContable.id_cuenta_contable.required' => 'Seleccione una cuenta contable válida',
            'detalleMovimientos.*.debe.min' => 'El precio debe ser mayor que cero',
            'detalleMovimientos.*.haber.min' => 'La cantidad debe ser mayor que cero',
            'detalleMovimientos.*.concepto.required' => 'Se debe definir un concepto',
            'detalleMovimientos.*.centro_costo_ingreso.id_centro.required_if'=>'Se debe definir un centro de costo para estos movimientos'
        ];

    	$rules = [
		'fecha_emision' => 'required|date',
		'num_documento' => 'required|string|max:15',
        'codigo_documento' => 'required|integer|min:1',
        'valor' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
      //  'moneda' => 'required|array|min:1',
        'concepto' => 'required|string|max:200',
        'tipoDocumento' => 'required|array|min:1',
        'detalleMovimientos' => 'required|array|min:2',
        'detalleMovimientos.*.cuentaContable.id_cuenta_contable' => 'required|integer|exists:pgsql.contabilidad.cuentas_contables,id_cuenta_contable',
        'detalleMovimientos.*.debe' => 'required|numeric|min:0',
        'detalleMovimientos.*.haber' => 'required|numeric|min:0',

        'detalleMovimientos.*.monedaMov' => 'required|array|min:1',
        'detalleMovimientos.*.monedaMov.id_moneda' => 'required|integer|min:1',

        'detalleMovimientos.*.debeORG' => 'required|numeric|min:0',
        'detalleMovimientos.*.haberORG' => 'required|numeric|min:0',
        'detalleMovimientos.*.concepto' => 'required|string|max:100',
        'detalleMovimientos.*.centro_costo_ingreso_deshabilitada' => 'required|boolean',
//        'detalleMovimientos.*.centro_costo_ingreso' => 'required_if:centro_costo_ingreso_deshabilitada,false|array',
        'detalleMovimientos.*.centro_costo_ingreso.id_centro' => 'required_if:detalleMovimientos.*.centro_costo_ingreso_deshabilitada,false|integer|min:0',


		];

		$validator = Validator::make($request->all(), $rules, $messages);
		if (!$validator->fails()) {
			try{

			DB::beginTransaction();
			$documento = new ContabilidadDocumentosContables;
            $tipo = ContabilidadTiposDocumentos::find($request->tipoDocumento['id_tipo_doc']);

            $codigo = $documento->obtenerCodigoDocumento(array('id_tipo_doc'=>$request->tipoDocumento['id_tipo_doc'],'fecha_doc'=>$request->fecha_emision));

            $nuevo_codigo = json_decode($codigo[0]);

            $documento->num_documento = $tipo->prefijo.'-'.$nuevo_codigo->secuencia;
            $documento->fecha_emision = $request->fecha_emision;
            $documento->codigo_documento = $nuevo_codigo->secuencia;
            $documento->id_moneda =1 ;
           
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
            
            $documento->id_tipo_doc = $request->tipoDocumento['id_tipo_doc'];
            $documento->valor = $request->valor;
            $documento->concepto = $request->concepto;

			$documento->u_creacion = Auth::user()->usuario;
            $documento->estado = 1;

           /* date_default_timezone_set('America/Managua');
            $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
            $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
            $log['fecha_log'] = $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') .' a las '.date('h:i:s A');
            $log['registro'] = 'Registro de salida en sistema por '.$documento->u_creacion;
            $documento->log_salida = '['.json_encode($log).']';  */
            $documento->save();
            ContabilidadTiposDocumentos::find($documento->id_tipo_doc)->increment('secuencia');

           //print_r($request->detalleMovimientos);
			foreach ($request->detalleMovimientos as $movimientoCuenta) {

			    if($movimientoCuenta['debeORG']>0  || $movimientoCuenta['haberORG'] >0){
                $documento_cuenta_contable = new ContabilidadDocumentosMovimientos;

				$documento_cuenta_contable->id_documento = $documento->id_documento;
                $documento_cuenta_contable->concepto = $movimientoCuenta['concepto'];
                $documento_cuenta_contable->debe = $movimientoCuenta['debe'];
                $documento_cuenta_contable->haber =  $movimientoCuenta['haber'];
                $documento_cuenta_contable->debe_org = $movimientoCuenta['debeORG'];
                $documento_cuenta_contable->haber_org =  $movimientoCuenta['haberORG'];
                $documento_cuenta_contable->id_moneda =  $movimientoCuenta['monedaMov']['id_moneda'];


                $documento_cuenta_contable->id_centro =  (!$movimientoCuenta['centro_costo_ingreso_deshabilitada'])?$movimientoCuenta['centro_costo_ingreso']['id_centro']:null;
                //print_r($documento_cuenta_contable->id_centro );
                $documento_cuenta_contable->id_cuenta_contable = $movimientoCuenta['cuentaContable']['id_cuenta_contable'];
                $documento_cuenta_contable->cta_contable = $movimientoCuenta['cuentaContable']['cta_contable'];
                $documento_cuenta_contable->cta_contable_padre = $movimientoCuenta['cuentaContable']['cta_contable'];
				$documento_cuenta_contable->save();
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


    public function actualizar(Request $request)
    {

    }

    public function nuevo(Request $request)
    {
        $tasa = CajaBancoTasasCambios::select('tasa')->where('fecha',date("Y-m-d"))->first();
        $tipos_documentos = ContabilidadTiposDocumentos::select(['id_tipo_doc','prefijo','descripcion'])->where('estado',true)->where('permite_registro_manual',true)->orderBy('id_tipo_doc')->get();
        $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();
        $cuentas_contables = ContabilidadCuentasContablesVista::orderBy('cta_contable')->where('estado',1)->select('id_cuenta_contable','cta_contable','nombre_cuenta','id_tipo_cuenta','nombre_cuenta_completo')->get();

        $centro_costos_ingresos = ContabilidadCentroCostoIngreso::select('id_centro','descripcion')->where('estado',true)->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'tipos_documentos' => $tipos_documentos,
                'centro_costos_ingresos'=>$centro_costos_ingresos,
                'cuentas_contables'=>$cuentas_contables,
                'monedas' => $monedas,
                't_cambio' => $tasa,
            ],
            'messages' => null
        ]);

    }

    /*
     *

            obtenerSucursalesTodas() {
                var self = this;
                centro_costo_ingreso.obtenerTodos(
                    data => {
                        self.centros_costos_ingresos = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
     * */

     /**
     * Cambiar Estado
     *
     * @access 	public
     * @param 	
     * @return 	json(string)
     */

	public function cambiarEstado(Request $request)
	{ 
        
        $rules = [
            'id_documento' => 'required',
            'estado' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $documento = ContabilidadDocumentosContables::find($request->id_documento);
                   
            if($documento->es_editable && $request->estado >= 0 && $request->estado <= 2 && $documento->estado <> $request->estado){

                $estado_org = $documento->estado;
                $documento->estado = $request->estado;
    
                if($request->estado==0 || $request->estado==2){
                $documento->es_editable = 0 ;
                }

            $estados[0] = 'Cancelado';
            $estados[1] = 'Emitido';
            $estados[2] = 'Aprobado';

            /*date_default_timezone_set('America/Managua');
            $dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
            $meses = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
            $log['fecha_log'] = $dias[date('w')]." ".date('d')." de ".$meses[date('n')-1]. " del ".date('Y') .' a las '.date('h:i:s A');
            $log['registro'] = 'Cambiado el estado de la salida de '. $estados[$estado_org].' a estado '.$estados[$request->estado].' por usuario '.Auth::user()->usuario; 
            $log_actual = Array(json_decode($salida->log_salida));
           // print_r($log);
           // print_r($log_actual[0]);
            array_push($log_actual[0],$log);
            $salida->log_salida = json_encode($log_actual[0]);
           // echo $entrada->log_entrada;
            */
            $documento->save();

            return response()->json([
                'status' => 'success',
                'result' => null,
                'messages' => null
            ]);

        }else{
            return response()->json([
                'status' => 'error',
                'result' => 'Error al cambiar el estado del documento, revise si el documento esta bloqueada',
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
     * Generar Reporte Jasper
     *
     * @access  public
     * @param
     */
    public function generarReporte($ext, $id_documento)
    {
        // echo $ext;

        $os = array("xls", "pdf");
        //echo gethostname();
        if (in_array($ext, $os)) {
            /*$input = 'C:/xampp7/htdocs/resources/reports/Blank_A4.jrxml';
              echo $input;
              $jasper = new PHPJasper;
              $jasper->compile($input)->execute();
            */
            $hora_actual = time() ;

            //if(env('AMBIENTE') == 'MACOS'){
                //$input = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/DocumentoContablePDF';
                //$output = '/Applications/XAMPP/xamppfiles/htdocs/resources/reports/' .$hora_actual . 'DocumentoContablePDF';
            //}elseif(env('AMBIENTE') == 'WINDOWS'){

            //}elseif(env('AMBIENTE') == 'UBUNTU'){
                $input = '/var/www/html/resources/reports/DocumentoContablePDF';
                $output = '/var/www/html/resources/reports/'.time().'DocumentoContablePDF';
            //}

            if($ext == 'xls'){
                $input = $input.'XLS.jasper';
            }

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [ 'id_documento' => $id_documento],
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
            header('Content-Description: File Transfer');
            header('Content-Type: multipart/form-data;boundary="boundary"');
            header('Content-Disposition: form-data; filename=' . $hora_actual. 'DocumentoContablePDF.' . $ext);
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
            header('Content-Length: ' . filesize($output . '.' . $ext));
            flush();
            readfile($output . '.' . $ext);
            unlink($output . '.' . $ext);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

    public function generarReporteNuevo(Request $request)
    {
        // echo $ext;
        $rules = [
            'id_documento' => 'required|integer|min:1',
            'extension' => 'required|string|max:4'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $os = array("xls", "pdf","html");
            //echo gethostname();
            if (in_array($request->extension, $os)) {

                $hora_actual = time();

                $input = '/var/www/html/resources/reports/DocumentoContablePDF';
                $output = '/var/www/html/resources/reports/' . $hora_actual . 'DocumentoContablePDF';

                //$input = 'C:/xampp7/htdocs/resources/reports/DocumentoContablePDF';
                //$output = 'C:/xampp7/htdocs/resources/reports/' .$hora_actual . 'DocumentoContablePDF';

                $nombre_empresa = AdmonAjustes::where('id_ajuste',4)->select('valor')->first();
                $logo_empresa = AdmonAjustes::where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
                $url = '/var/www/html/resources/reports/';
                //$url = 'C:/xampp7/htdocs/resources/reports/';

                $options = [
                    'format' => [$request->extension],
                    'locale' => 'en',
                    'params' => [
                        'id_documento' => $request->id_documento,
                        //'directorioReports'=>$url,
                        //'empresa_nombre' => $nombre_empresa->valor,
                        //'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail
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

                return response()->download($output . '.' . $request->extension, $hora_actual . 'DocumentoContablePDF.' . $request->extension, $headers);

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



    public function anular(Request $request)
    {

        $messages = [
        ];


        $rules = [
            'id_documento' => 'required|integer',
            'causa_anulacion' => 'required|string|max:100',
        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try{

                DB::beginTransaction();
                $documento = ContabilidadDocumentosContables::find($request->id_documento);
                $documento->estado = 0;
                //$documento->observacion = $factura['observacion'] . ' **Factura cancelada por '.Auth::user()->usuario.' a las '.date("Y-m-d H:i:s").' Causa: '.$request->causa_anulacion;
                $documento->u_modificacion = Auth::user()->usuario;
                $documento->save();

                if($documento->id_tipo_doc==3 || $documento->id_tipo_doc==4){
                    //cheques
                    $cheque = CajaBancoSolicitudesPago::where('id_documento_contable',$documento->id_documento)->first();
                    if(!empty($cheque)){
                    if($cheque->estado == 3){
                        $cheque->estado=0;
                        $cheque->save();
                    }else{
                        DB::rollBack();
                        return response()->json([
                            'status' => 'error',
                            'result' => 'No se puede actualizar la solicitud de pago, ya fue recibida',
                            'messages' => null
                        ]);
                    }
                    }
                }

                if($documento->id_tipo_doc==5){
                    //minutas de deposito
                    $minuta = CajaBancoMinutasDeposito::where('id_documento_contable',$documento->id_documento)->first();
                    if(!empty($minuta)){
                        if($minuta->estado == 1){
                            $minuta->estado=0;
                            $minuta->save();
                        }else{
                            DB::rollBack();
                            return response()->json([
                                'status' => 'error',
                                'result' => 'No se puede actualizar la minuta, ya fue recibida',
                                'messages' => null
                            ]);
                        }
                    }
                }

                if($documento->id_tipo_doc==6){
                    //recibos (falta unir tabla)
                    $recibos = CuentasXCobrarRecibos::where('id_documento_contable',$documento->id_documento)->first();
                    if(!empty($minuta)){
                        if($recibos->estado == 1){
                            $recibos->estado=0;
                            $recibos->save();
                        }else{
                            DB::rollBack();
                            return response()->json([
                                'status' => 'error',
                                'result' => 'No se puede actualizar la minuta, ya fue recibida',
                                'messages' => null
                            ]);
                        }
                    }
                }

                if($documento->id_tipo_doc==7){
                    //facturas
                    $factura = CajaBancoFacturas::where('id_documento_contable',$documento->id_documento)->first();
                    if(!empty($factura)){
                        if($factura->estado == 1){
                            $factura->estado=0;
                            $factura->save();
                        }else{
                            DB::rollBack();
                            return response()->json([
                                'status' => 'error',
                                'result' => 'No se puede actualizar la minuta, ya fue recibida',
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
    
}