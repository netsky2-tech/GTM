<?php 

namespace App\Http\Controllers;

use Validator,Auth;
use App\Models\PublicDepartamentos;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class PublicDepartamentosController extends Controller
{
    /**
     * Obtener una lista de cargos
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, PublicDepartamentos $departamentos)
    {
        $departamentos = $departamentos->obtenerDepartamentos($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $departamentos->total(), 
                'rows' => $departamentos->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de cargos sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTodosDepartamentos(Request $request, PublicDepartamentos $departamentos)
    {
        $departamentos = PublicDepartamentos::with('municipiosDepartamento')->get();
        return response()->json([
            'status' => 'success',
            'result' => $departamentos,
            'messages' => null
        ]);
    }

    /**
     * obtener tipo de Salida Especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerDepartamento(Request $request)
    {
        $rules = [
            'id_departamento' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $departamento = PublicDepartamentos::find($request->id_departamento);

            if(!empty($departamento)){		
            return response()->json([
                'status' => 'success',
                'result' => $departamento,
                'messages' => null
            ]);

        }
        else{
          return response()->json([
                'status' => 'error',
                'result' => array('id_departamento'=>["Datos no encontrados"]),
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
        $rules = [
            'descripcion' => [
                'required',
                'string',
                'max:20',
                Rule::unique('pgsql.public.departamentos')]
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $departamento = new PublicDepartamentos;
            $departamento->descripcion = $request->descripcion;
            $departamento->save();

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
            'id_departamento' => 'required|integer|min:1',
            'descripcion' => [
                'required',
                'string',
                'max:20',
                Rule::unique('pgsql.public.departamentos')->ignore($request->id_departamento,'id_departamento')]
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $departamento = PublicDepartamentos::find($request->id_departamento);
            $departamento->descripcion = $request->descripcion;
            $departamento->save();

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