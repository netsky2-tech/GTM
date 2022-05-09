<?php

namespace App\Http\Controllers;

use Validator,Auth;
use App\Models\ActivoFijoPropietarios;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class ActivoFijoPropietariosController extends Controller
{
    /**
     * Obtener una lista de propietarios
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtener(Request $request, ActivoFijoPropietarios $propietarios)
    {
        $propietarios = $propietarios->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $propietarios->total(),
                'rows' => $propietarios->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de propietarios sin ningun filtro
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerTodos(Request $request, ActivoFijoPropietarios $propietarios)
    {
        $propietarios = ActivoFijoPropietarios::where('activo', 1)->get();
        return response()->json([
            'status' => 'success',
            'result' => $propietarios,
            'messages' => null
        ]);
    }

    /**
     * obtener propietario Especifico
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerPropietario(Request $request)
    {
        $rules = [
            'id_propietario' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $propietario = ActivoFijoPropietarios::find($request->id_propietario);

            if(!empty($propietario)){
                return response()->json([
                    'status' => 'success',
                    'result' => $propietario,
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_propietario'=>["Datos no encontrados"]),
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
     * Crear un nuevo propietario
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
                Rule::unique('pgsql.activofijo.propietarios')/*->ignore($request->id_propietario,'id_propietario')*/
            ]
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $propietario = new ActivoFijoPropietarios;
           // $propietario->id_propietario = $request->id_propietario;
            $propietario->descripcion = $request->descripcion;
            $propietario->activo = 1;
            $propietario->u_creacion = Auth::user()->usuario;
            $propietario->save();


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
     * Actualizar propietario existente
     *
     * @access  public
     * @param
     * @return  json(string)
     */

    public function actualizar(Request $request)
    {
        $rules = [
            'id_propietario' =>  'required|integer|min:1',
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.activofijo.propietarios')->ignore($request->id_propietario,'id_propietario')
            ]
        ];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $propietario = ActivoFijoPropietarios::find($request->id_propietario);
          //  $propietario->id_propietario = $request->id_propietario;
            $propietario->descripcion = $request->descripcion;
            $propietario->u_modificacion = Auth::user()->usuario;
            $propietario->save();

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
     * Desactiva propietario
     *
     * @access  public
     * @param
     * @return  json(string)
     */

    public function desactivar(Request $request)
    {
        $rules = [
            'id_propietario' =>  'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $propietario = ActivoFijoPropietarios::find($request->id_propietario);
            $propietario->activo = 0;
            $propietario->u_modificacion = Auth::user()->usuario;
            $propietario->save();

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
     * Activa propietario
     *
     * @access  public
     * @param
     * @return  json(string)
     */
    public function activar(Request $request)
    {
        $rules = [
            'id_propietario' =>  'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $propietario = ActivoFijoPropietarios::find($request->id_propietario);
            $propietario->activo = 1;
            $propietario->u_modificacion = Auth::user()->usuario;
            $propietario->save();

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