<?php 

namespace App\Http\Controllers;

use Validator;
use App\Models\AdmonRoles;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Auth;
class AdmonRolesController extends Controller
{
    /**
     * Obtener una lista de Roles (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerRoles(Request $request, AdmonRoles $roles)
    {
        $roles = $roles->obtenerRoles($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $roles->total(), 
                'rows' => $roles->items()
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

    public function obtenerTodosRoles(Request $request, AdmonRoles $roles)
    {
        $conf = session()->get('id_empresa');
        $roles = AdmonRoles::where('id_empresa', '=', $conf)->orderby('id_rol')->get();
        return response()->json([
            'status' => 'success',
            'result' => $roles,
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

    public function obtenerRolEspecifico(Request $request)
    {
        $rules = [
            'id_rol'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $roles = AdmonRoles::find($request->id_rol);

            if(!empty($roles)){	
            return response()->json([
                'status' => 'success',
                'result' => $roles,
                'messages' => null
            ]);

        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_rol'=>["Datos no encontrados"]),
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

    public function crearRol(Request $request)
    {
        $rules = [
            'descripcion' => 'required|string|max:100|unique:pgsql.admon.roles,descripcion',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $rol = new AdmonRoles;
            $rol->descripcion = $request->descripcion;
            $rol->activo = 1;
            $rol->id_empresa = $conf;
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

    /**
     * Actualizar Rol existente
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function actualizarRol(Request $request)
    {
        $rules = [
            'id_rol' => 'required|integer',
           // 'descripcion' => 'required|string|max:100|unique:pgsql.admon.roles,descripcion',
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.admon.roles')->ignore($request->id_rol,'id_rol')
            ],
        ];



        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $rol = AdmonRoles::find($request->id_rol);
            $rol->descripcion = $request->descripcion;
            $rol->id_empresa = $conf;
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

    /**
     * Desactiva rol
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function desactivaRol(Request $request)
    {
        $rules = [
            'id_rol' => 'required|integer'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $rol = AdmonRoles::find($request->id_rol); 
            $rol->activo = 0;
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


     /**
     * Activa rol
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function activaRol(Request $request)
    {
        $rules = [
            'id_rol' => 'required|integer'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $rol = AdmonRoles::find($request->id_rol); 
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