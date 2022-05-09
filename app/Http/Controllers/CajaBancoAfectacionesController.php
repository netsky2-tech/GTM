<?php 

namespace App\Http\Controllers;

use App\Models\ContabilidadCuentasContables;
use App\Models\ContabilidadCuentasContablesVista;
use Validator;
use App\Models\CajaBancoAfectaciones;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class CajaBancoAfectacionesController extends Controller
{

    public function nuevo(Request $request)
    {
        $cuentas_contables = ContabilidadCuentasContablesVista::orderBy('cta_contable')->where('estado',1)->select('id_cuenta_contable','cta_contable','nombre_cuenta','nombre_cuenta_completo')->get();


        return response()->json([
            'status' => 'success',
            'result' => [
                'cuentas_contables' => $cuentas_contables
            ],
            'messages' => null
        ]);

    }

    /**
     * Obtener una lista de Afectaciones (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, CajaBancoAfectaciones $afectaciones)
    {
        $afectaciones = $afectaciones->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $afectaciones->total(), 
                'rows' => $afectaciones->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de Roles sin paginacion
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodos(Request $request, CajaBancoAfectaciones $afectaciones)
    {
        $afectaciones = CajaBancoAfectaciones::orderby('id_afectacion')->get();
        return response()->json([
            'status' => 'success',
            'result' => $afectaciones,
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

    public function obtenerAfectacion(Request $request)
    {
        $rules = [
            'id_afectacion'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $afectaciones = CajaBancoAfectaciones::where('id_afectacion',$request->id_afectacion)->with('afectacionCuentaContable')->get();
            $cuentas_contables = ContabilidadCuentasContablesVista::orderBy('cta_contable')->where('estado',1)->select('id_cuenta_contable','cta_contable','nombre_cuenta','nombre_cuenta_completo')->get();

            if(!empty($afectaciones)){	
            return response()->json([
                'status' => 'success',
                'result' => [
                    'afectacion' => $afectaciones[0],
                    'cuentas_contables' => $cuentas_contables
                ],
                'messages' => null
            ]);

        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_afectacion'=>["Datos no encontrados"]),
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
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.cjabnco.facturas_afectaciones')/*->ignore($request->id_afectacion,'id_afectacion')*/
            ],
            //'tipo_afectacion' => 'required|integer|min:1|max:3',
            'valor' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'valor_maximo' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|max:100',
            'afectacion_cuenta_contable' => 'required|array|min:1',
            'afectacion_cuenta_contable.id_cuenta_contable' => 'required|integer|min:1',

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $afectacion = new CajaBancoAfectaciones;
            $afectacion->descripcion = $request->descripcion;
            //$afectacion->tipo_afectacion = $request->tipo_afectacion;
            $afectacion->id_cuenta_contable = $request->afectacion_cuenta_contable['id_cuenta_contable'];
            $afectacion->valor = $request->valor;
            $afectacion->activo = true;
            $afectacion->valor_maximo = $request->valor_maximo;
          
            $afectacion->save();

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
            'id_afectacion' => 'required|integer',
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.cjabnco.facturas_afectaciones')->ignore($request->id_afectacion,'id_afectacion')
            ],
            'afectacion_cuenta_contable' => 'required|array|min:1',
            'afectacion_cuenta_contable.id_cuenta_contable' => 'required|integer|min:1',
            'valor' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'valor_maximo' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|max:100',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $afectacion = CajaBancoAfectaciones::find($request->id_afectacion);
            $afectacion->descripcion = $request->descripcion;
            //$afectacion->tipo_afectacion = $request->tipo_afectacion;
            $afectacion->id_cuenta_contable = $request->afectacion_cuenta_contable['id_cuenta_contable'];
            $afectacion->valor = $request->valor;
            $afectacion->valor_maximo = $request->valor_maximo;
            $afectacion->save();

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
            'id_afectacion' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $grupo = CajaBancoAfectaciones::find($request->id_afectacion);
            $grupo->activo = 0;
            $grupo->save();

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
            'id_afectacion' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $grupo = CajaBancoAfectaciones::find($request->id_afectacion);
            $grupo->activo = 1;
            $grupo->save();

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