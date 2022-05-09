<?php 

namespace App\Http\Controllers;

use Validator;
use App\Models\ContabilidadNivelesCuenta;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class ContabilidadNivelesCuentaController extends Controller
{
    /**
     * Obtener una lista de Estados Financieros
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtenerNivelesCuenta(Request $request, ContabilidadNivelesCuenta $niveles_cuenta)
    {
        $niveles_cuenta = $niveles_cuenta->obtenerNivelesCuenta($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $niveles_cuenta->total(), 
                'rows' => $niveles_cuenta->items()
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

    public function obtenerTodosNivelesCuenta(Request $request, ContabilidadNivelesCuenta $niveles_cuenta)
    {
        $niveles_cuenta = ContabilidadNivelesCuenta::where('id_nivel_cuenta','>',1)->where('activo','true')->orderBy('id_nivel_cuenta')->get();
        return response()->json([
            'status' => 'success',
            'result' => $niveles_cuenta,
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

    public function obtenerNivelCuenta(Request $request)
    {
        $rules = [
            'id_nivel_cuenta' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $nivel_cuenta = ContabilidadNivelesCuenta::find($request->id_nivel_cuenta);
            if(!empty($nivel_cuenta)){	
            return response()->json([
                'status' => 'success',
                'result' => $nivel_cuenta,
                'messages' => null
            ]);

        }
        else{
          return response()->json([
                'status' => 'error',
                'result' => array('id_nivel_cuenta'=>["Datos no encontrados"]),
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
     * Actualizar Nivel de cuenta existente
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function actualizar(Request $request)
    {
        $rules = [
            'id_nivel_cuenta'  => 'required|integer|min:1',
            'descripcion' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.contabilidad.niveles_cuentas')->ignore($request->id_nivel_cuenta,'id_nivel_cuenta')
            ]
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $nivel_cuenta = ContabilidadNivelesCuenta::find($request->id_nivel_cuenta);
            $nivel_cuenta->descripcion = $request->descripcion;
            $nivel_cuenta->save();

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

}