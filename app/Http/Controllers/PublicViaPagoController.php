<?php

namespace App\Http\Controllers;

use App\Models\PublicViaPagos;
use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\PublicZonas;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class PublicViaPagoController extends Controller
{
    /**
     * Obtener una lista de Roles (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtener(Request $request, PublicViaPagos $viaPago)
    {
        $viaPago = $viaPago->obtenerViaPagos($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $viaPago->total(),
                'rows' => $viaPago->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de zonas sin paginacion
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerTodas(Request $request, PublicViaPagos $viaPago)
    {
        $viaPago = PublicViaPagos::orderby('id_via_pago')->get();
        return response()->json([
            'status' => 'success',
            'result' => $viaPago,
            'messages' => null
        ]);
    }

    /**
     * obtener Rol Especifico
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerViaPago(Request $request)
    {
        $rules = [
            'id_via_pago'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $viaPago = PublicViaPagos::find($request->id_via_pago);

            if(!empty($viaPago)){
                return response()->json([
                    'status' => 'success',
                    'result' => $viaPago,
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_via_pago'=>["Datos no encontrados"]),
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
     * Crear un nuevo rol
     *
     * @access  public
     * @param
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $rules = [
            'descripcion' => 'required|string|max:100|unique:pgsql.public.via_pagos,descripcion'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $viaPago = new PublicViaPagos();
            $viaPago->descripcion = $request->descripcion;
           // $viaPago->u_grabacion = Auth::user()->usuario;
            $viaPago->activo = 1;
            $viaPago->save();

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
     * Actualizar Rol existente
     *
     * @access  public
     * @param
     * @return  json(string)
     */

    public function actualizar(Request $request)
    {
        $rules = [
            'id_via_pago' => 'required|integer|min:1',
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.public.via_pagos')->ignore($request->id_via_pago,'id_via_pago')
            ],
        ];



        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $viaPago = PublicViaPagos::find($request->id_via_pago);
            $viaPago->descripcion = $request->descripcion;
           // $viaPago->u_modificacion = Auth::user()->usuario;
            $viaPago->save();

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

    public function desactivar(Request $request)
    {
        $rules = [
            'id_via_pago' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $viaPago = PublicViaPagos::find($request->id_via_pago);
            $viaPago->activo = 0;
            $viaPago->save();

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
     * Activa rol
     *
     * @access  public
     * @param
     * @return  json(string)
     */

    public function activar(Request $request)
    {
        $rules = [
            'id_via_pago' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $viaPago = PublicViaPagos::find($request->id_via_pago);
            $viaPago->activo = 1;
            $viaPago->save();

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

    public function generarReporte($ext)
    {
        // echo $ext;
        // $ext = 'pdf';
        $os = array("xls", "pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteViaPagos';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteViaPagos';
             $input = '/var/www/html/resources/reports/ReporteViaPagos';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteViaPagos';

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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteViaPagos.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}
