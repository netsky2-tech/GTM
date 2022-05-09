<?php 

namespace App\Http\Controllers;

use Illuminate\Validation\Rule;
use Validator,Auth;
use App\Models\VentaTiposCliente;
use Illuminate\Http\Request;

class VentaTipoClienteController extends Controller
{
    /**
     * Obtener una lista de tipos de tipos proveedores
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, VentaTiposCliente $tipos_cliente)
    {
        $tipos_cliente = $tipos_cliente->obtenerTiposClientes($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $tipos_cliente->total(), 
                'rows' => $tipos_cliente->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de tipos de tipos proveedores sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodos(Request $request, VentaTiposCliente $tipos_cliente)
    {
        $tipos_cliente = VentaTiposCliente::all();
        return response()->json([
            'status' => 'success',
            'result' => $tipos_cliente,
            'messages' => null
        ]);
    }

    /**
     * obtener tipo de tipos proveedores Especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTipoCliente(Request $request)
    {
        $rules = [
            'id_tipo_cliente' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_cliente = VentaTiposCliente::find($request->id_tipo_cliente)
                ->get();
            if(!empty($tipo_cliente[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => $tipo_cliente[0],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_tipo_cliente'=>["Datos no encontrados"]),
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
     * Crear un nuevo tipo de tipos proveedores
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    {
        $rules = [
            'descripcion' =>  [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.public.tipos_clientes')],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_cliente = new VentaTiposCliente;
            $tipo_cliente->descripcion = $request->descripcion;
            $tipo_cliente->activo = 1;
            $tipo_cliente->u_creacion = Auth::user()->usuario;
            $tipo_cliente->save();

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
            'id_tipo_cliente' => 'required|integer|min:1',
            'descripcion' =>  [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.public.tipos_clientes')->ignore($request->id_tipo_cliente,'id_tipo_cliente')],
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_cliente = VentaTiposCliente::find($request->id_tipo_cliente);
            $tipo_cliente->descripcion = $request->descripcion;
            $tipo_cliente->save();

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
            'id_tipo_cliente' =>  'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_cliente = VentaTiposCliente::find($request->id_tipo_cliente); 
            $tipo_cliente->activo = 0;
            $tipo_cliente->save();

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
            'id_tipo_cliente' =>  'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $tipo_cliente = VentaTiposCliente::find($request->id_tipo_cliente); 
            $tipo_cliente->activo = 1;
            $tipo_cliente->save();

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