<?php

namespace App\Http\Controllers;

use App\Models\ContabilidadCuentasContablesVista;
use App\Models\CajaBancoFacturacionConfiguracion;
use Hash, Validator,Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CajaBancoFacturasConfiguracionController extends Controller
{
    /**
     * Get List of Importaciones
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtener(Request $request, CajaBancoFacturacionConfiguracion $importacion_config)
    {
        $cuentas_contables = ContabilidadCuentasContablesVista::orderBy('cta_contable')->where('estado',1)->select('id_cuenta_contable','cta_contable','nombre_cuenta','nombre_cuenta_completo')->get();
        $importacion_config = $importacion_config->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $importacion_config->total(),
                'rows' => $importacion_config->items(),
                'cuentas_contables' => $cuentas_contables
            ],
            'messages' => null
        ]);
    }



    public function actualizar(Request $request)
    {
        $messages = [
            'ajustes.required' => 'Se requiere agregar un producto por lo menos.',
            'ajustes.min' => 'Se requiere agregar un producto por lo menos.',
            'ajustes.*.id_cuenta_contable.required' => 'Seleccione un producto válido',
            'ajustes.*.nombre_seccion.required' => 'Se requiere una descripcion del producto',
        ];

        $rules = [

            'ajustes' => 'required|array|min:5',
            'ajustes.*.id_configuracion_factura' => 'required|integer',
            'ajustes.*.id_cuenta_contable' => 'required|integer|exists:pgsql.contabilidad.cuentas_contables,id_cuenta_contable',
            'ajustes.*.nombre_seccion' => 'required|string|max:100',

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try {

                DB::beginTransaction();

                foreach ($request->ajustes as $configuracion) {
                    $importacion_config = CajaBancoFacturacionConfiguracion::find($configuracion['id_configuracion_factura']);
                    $importacion_config->id_cuenta_contable = $configuracion['configuracion_importacioncuenta_contable']['id_cuenta_contable'];
                    $importacion_config->nombre_seccion = $configuracion['nombre_seccion'];
                    $importacion_config->save();
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

