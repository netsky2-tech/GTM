<?php 

namespace App\Http\Controllers;

use Validator;
use App\Models\PublicTiposPagos;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class PublicTiposPagosController extends Controller
{
    /**
     * Obtener una lista de Roles (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, PublicTiposPagos $tipos)
    {
        $tipos = $tipos->obtenerTiposPago($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $tipos->total(), 
                'rows' => $tipos->items()
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

    public function obtenerTodos(Request $request, PublicTiposPagos $tipos)
    {
        $tipos = PublicTiposPagos::orderby('id_tipo_pago')->get();
        return response()->json([
            'status' => 'success',
            'result' => $tipos,
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

    public function obtenerImpuesto(Request $request)
    {
        $rules = [
            'id_tipo_pago'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipos = PublicTiposPagos::find($request->id_tipo_pago);

            if(!empty($tipos)){	
            return response()->json([
                'status' => 'success',
                'result' => $tipos,
                'messages' => null
            ]);

        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_tipo_pago'=>["Datos no encontrados"]),
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
            'descripcion' => 'required|string|max:50|unique:pgsql.public.tipos_pagos,descripcion',
            'plazo_dias' => 'required|integer|min:0',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipos = new PublicTiposPagos;
            $tipos->descripcion = $request->descripcion;
            $tipos->plazo_dias =$request->plazo_dias;
            $tipos->u_creacion = Auth::user()->usuario;
            $tipos->activo = 1;
            $tipos->save();

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
            'id_tipo_pago' => 'required|integer|min:1',
            'plazo_dias' => 'required|integer|min:0',
            'descripcion' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.public.tipos_pagos')->ignore($request->id_tipo_pago,'id_tipo_pago')
            ],
        ];



        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipos = PublicTiposPagos::find($request->id_tipo_pago);
            $tipos->descripcion = $request->descripcion;
            $tipos->u_modificacion = Auth::user()->usuario;
            $tipos->save();

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
            'id_tipo_pago' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipos = PublicTiposPagos::find($request->id_tipo_pago);
            $tipos->activo = 0;
            $tipos->save();

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
            'id_tipo_pago' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $rol = PublicTiposPagos::find($request->id_tipo_pago);
            $rol->activo = 1;
            $rol->save();

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