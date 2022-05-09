<?php 

namespace App\Http\Controllers;

use App\Models\CajaBancoBancos;
use App\Models\CajaBancoMonedas;
use App\Models\ContabilidadCuentasContablesVista;
use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\ContabilidadCuentasBancarias;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class ContabilidadCuentasBancariasController extends Controller
{
    /**
     * Obtener una lista de Estados Financieros
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtenerCuentasBancarias(Request $request, ContabilidadCuentasBancarias $cuentas_bancarias)
    {
        $cuentas_bancarias = $cuentas_bancarias->obtenerCuentasBancarias($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $cuentas_bancarias->total(), 
                'rows' => $cuentas_bancarias->items()
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

    public function obtenerTodasCuentasBancarias(Request $request, ContabilidadCuentasBancarias $cuentas_bancarias)
    {
        $cuentas_bancarias = ContabilidadCuentasBancarias::where('estado', 1)->get();
        return response()->json([
            'status' => 'success',
            'result' => $cuentas_bancarias,
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

    public function obtenerCuentaBancaria(Request $request)
    {
        $rules = [
            'id_cuenta_bancaria' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cuenta_bancaria = ContabilidadCuentasBancarias::
            where('id_cuenta_bancaria',$request->id_cuenta_bancaria)
                ->with('bancoCuentaBancaria')
                ->with('cuentaContableCuentaBancaria')
                ->with('monedaCuentaBancaria')->first();
            $monedas = CajaBancoMonedas::select('id_moneda','descripcion','codigo')->get();
            $cuentas_contables = ContabilidadCuentasContablesVista::select('id_cuenta_contable','cta_contable','nombre_cuenta_completo')->get();
            $bancos = CajaBancoBancos::select('id_banco','descripcion')->get();

            if(!empty($cuenta_bancaria)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'cuenta_bancaria' => $cuenta_bancaria,
                        'monedas' => $monedas,
                        'cuentas_contables' => $cuentas_contables,
                        'bancos' => $bancos,
                    ],
                    'messages' => null


                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_cuenta_bancaria'=>["Datos no encontrados"]),
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
     * Crear un nuevo tipo de Salida
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $message = [

            'id_moneda.required' => 'El campo moneda es requerido.'
        ];
        $rules = [
            'numero_cuenta' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.contabilidad.cuentas_bancarias')/*->ignore($request->id_anexo,'id_anexo')*/
            ],
            'numeracion_chequera' => 'required|integer|min:1',
            'tipo_cuenta' => 'required|integer|min:1',
            'cuenta_contable' => 'required|array|min:1',
            'banco' => 'required|array|min:1',
            'id_moneda' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules,$message);
        if (!$validator->fails()) {
            $cuenta_bancaria = new ContabilidadCuentasBancarias;
            $cuenta_bancaria->numero_cuenta = $request->numero_cuenta;
            $cuenta_bancaria->id_cuenta_contable = $request->cuenta_contable['id_cuenta_contable'];
            $cuenta_bancaria->id_banco = $request->banco['id_banco'];
            $cuenta_bancaria->id_moneda = $request->id_moneda;
            $cuenta_bancaria->tipo_cuenta = $request->tipo_cuenta;
            $cuenta_bancaria->numeracion_chequera = $request->numeracion_chequera;
            $cuenta_bancaria->estado = 1;
            $cuenta_bancaria->u_creacion = Auth::user()->usuario;
            $cuenta_bancaria->save();

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


    public function actualizar(Request $request)
    {   // 'descripcion' => 'required|string|max:100|unique:pgsql.admon.roles,descripcion',
        $rules = [
            'id_cuenta_bancaria' => 'required|integer',

            'numero_cuenta' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.contabilidad.cuentas_bancarias')->ignore($request->id_cuenta_bancaria,'id_cuenta_bancaria')
            ],

            'cuenta_contable_cuenta_bancaria' => 'required|array|min:1',
            'cuenta_contable_cuenta_bancaria.id_cuenta_contable' => 'required|integer|min:1',

            'moneda_cuenta_bancaria' => 'required|array|min:1',
            'moneda_cuenta_bancaria.id_moneda' => 'required|integer|min:1',

            'numeracion_chequera' => 'required|integer|min:1',
            'tipo_cuenta' => 'required|integer|min:1',
            'banco_cuenta_bancaria' => 'required|array|min:1',
            'banco_cuenta_bancaria.id_banco' => 'required|integer|min:1',

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cuenta_bancaria = ContabilidadCuentasBancarias::find($request->id_cuenta_bancaria);
            $cuenta_bancaria->numero_cuenta = $request->numero_cuenta;
            $cuenta_bancaria->numeracion_chequera = $request->numeracion_chequera;
            $cuenta_bancaria->id_cuenta_contable = $request->cuenta_contable_cuenta_bancaria['id_cuenta_contable'];
            $cuenta_bancaria->id_banco = $request->banco_cuenta_bancaria['id_banco'];
            $cuenta_bancaria->id_moneda = $request->moneda_cuenta_bancaria['id_moneda'];
            $cuenta_bancaria->tipo_cuenta = $request->tipo_cuenta;
            $cuenta_bancaria->save();

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


    public function desactivar(Request $request)
    {
        $rules = [
            'id_cuenta_bancaria' => 'required|integer'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $banco = ContabilidadCuentasBancarias::find($request->id_cuenta_bancaria); 
            $banco->estado = 0;
            $banco->save();

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
            'id_cuenta_bancaria' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $banco = ContabilidadCuentasBancarias::find($request->id_cuenta_bancaria); 
            $banco->estado = 1;
            $banco->save();

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

    public function nueva(Request $request)
    {

        $monedas = CajaBancoMonedas::select('id_moneda','descripcion','codigo')->where('activo',1)->orderBy('id_moneda')->get();
        $cuentas_contables = ContabilidadCuentasContablesVista::select('id_cuenta_contable','cta_contable','nombre_cuenta_completo')->get();
        $bancos = CajaBancoBancos::select('id_banco','descripcion')->get();


        return response()->json([
            'status' => 'success',
            'result' => [
                'monedas' => $monedas,
                'cuentas_contables' => $cuentas_contables,
                'bancos' => $bancos,
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
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteCuentasBancarias';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteCuentasBancarias';
             $input = '/var/www/html/resources/reports/ReporteCuentasBancarias';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteCuentasBancarias';

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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteCuentasBancarias.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}