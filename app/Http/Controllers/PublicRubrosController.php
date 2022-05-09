<?php 

namespace App\Http\Controllers;


use Validator;
use App\Models\PublicRubros;
use App\Models\PublicRubrosServiciosMateriales;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class PublicRubrosController extends Controller
{
    /**
     * Obtener una lista de Roles (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, PublicRubros $rubros)
    {
        $rubros = $rubros->obtenerRubros($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $rubros->total(), 
                'rows' => $rubros->items()
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

    public function obtenerTodosPS(Request $request, PublicRubrosServiciosMateriales $rubros)
    {
        $rubros = PublicRubrosServiciosMateriales::orderby('codigo')->get();
        return response()->json([
            'status' => 'success',
            'result' => $rubros,
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

    public function obtenerRubro(Request $request)
    {
        $rules = [
            'id_rubro'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $rubros = PublicRubros::find($request->id_rubro);

            if(!empty($rubros)){	
            return response()->json([
                'status' => 'success',
                'result' => $rubros,
                'messages' => null
            ]);

        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_rubro'=>["Datos no encontrados"]),
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
            'descripcion' => 'required|string|max:100|unique:pgsql.public.rubros,descripcion',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $sucursal = new PublicRubros;
            $sucursal->descripcion = $request->descripcion;
            $sucursal->u_creacion = Auth::user()->usuario;
            $sucursal->activo = 1;
            $sucursal->save();

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
            'id_rubro' => 'required|integer|min:1',
           // 'descripcion' => 'required|string|max:100|unique:pgsql.admon.roles,descripcion',
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.public.rubros')->ignore($request->id_rubro,'id_rubro')
            ],
        ];



        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $sucursal = PublicRubros::find($request->id_rubro);
            $sucursal->descripcion = $request->descripcion;
            $sucursal->u_modificacion = Auth::user()->usuario;
            $sucursal->save();

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
            'id_rubro' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $sucursal = PublicRubros::find($request->id_rubro);
            $sucursal->activo = 0;
            $sucursal->save();

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
            'id_rubro' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $rol = PublicRubros::find($request->id_rubro);
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