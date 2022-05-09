<?php

namespace App\Http\Controllers;

use Validator,Auth;
use App\Models\ActivoFijoGrupos;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class ActivoFijoGruposController extends Controller
{
    /**
     * Obtener una lista de grupos de activo
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtener(Request $request, ActivoFijoGrupos $grupos)
    {
        $grupos = $grupos->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $grupos->total(),
                'rows' => $grupos->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de grupos de activo sin ningun filtro
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerTodos(Request $request, ActivoFijoGrupos $grupos)
    {
        $grupos = ActivoFijoGrupos::where('activo', 1)->get();
        return response()->json([
            'status' => 'success',
            'result' => $grupos,
            'messages' => null
        ]);
    }

    /**
     * obtener Grupo activo Especifica
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerGrupo(Request $request)
    {
        $rules = [
            'id_grupo_activo' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $grupo = ActivoFijoGrupos::find($request->id_grupo_activo);

            if(!empty($grupo)){
                return response()->json([
                    'status' => 'success',
                    'result' => $grupo,
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_grupo_activo'=>["Datos no encontrados"]),
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
     * Crear un nueva direccion
     *
     * @access  public
     * @param
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $rules = [
            'codigo' => [
                'required',
                'string',
                'max:4',
                Rule::unique('pgsql.activofijo.grupos_activos')/*->ignore($request->id_grupo_activo,'id_grupo_activo')*/
            ],
            'descripcion' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.activofijo.grupos_activos')/*->ignore($request->id_grupo_activo,'id_grupo_activo')*/
            ]
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $grupo = new ActivoFijoGrupos;
            $grupo->descripcion = $request->descripcion;
            $grupo->codigo = $request->codigo;
            $grupo->activo = 1;
            $grupo->u_creacion = Auth::user()->usuario;
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

    /**
     * Actualizar Grupo activo existente
     *
     * @access  public
     * @param
     * @return  json(string)
     */

    public function actualizar(Request $request)
    {
        $rules = [
            'id_grupo_activo' =>  'required|integer|min:1',
            'codigo' => [
                'required',
                'string',
                'max:4',
                Rule::unique('pgsql.activofijo.grupos_activos')->ignore($request->id_grupo_activo,'id_grupo_activo')
            ],
            'descripcion' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.activofijo.grupos_activos')->ignore($request->id_grupo_activo,'id_grupo_activo')
            ]
        ];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $grupo = ActivoFijoGrupos::find($request->id_grupo_activo);
            $grupo->descripcion = $request->descripcion;
            $grupo->codigo = $request->codigo;
            $grupo->u_modificacion = Auth::user()->usuario;
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
            'id_grupo_activo' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $grupo = ActivoFijoGrupos::find($request->id_grupo_activo);
            $grupo->activo = 0;
            $grupo->u_modificacion = Auth::user()->usuario;
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
            'id_grupo_activo' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $grupo = ActivoFijoGrupos::find($request->id_grupo_activo);
            $grupo->activo = 1;
            $grupo->u_modificacion = Auth::user()->usuario;
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