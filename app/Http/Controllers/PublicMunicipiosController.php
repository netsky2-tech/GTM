<?php 

namespace App\Http\Controllers;

use Validator,Auth;
use App\Models\PublicMunicipios;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class PublicMunicipiosController extends Controller
{
    /**
     * Obtener una lista de Estados Financieros
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtener(Request $request, PublicMunicipios $municipios)
    {
        $municipios = $municipios->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $municipios->total(), 
                'rows' => $municipios->items()
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

    public function obtenerTodosMunicipios(Request $request, PublicMunicipios $municipios)
    {
        $municipios = PublicMunicipios::all();
        return response()->json([
            'status' => 'success',
            'result' => $municipios,
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

    public function obtenerMunicipio(Request $request)
    {
        $rules = [
            'id_municipio' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $municipio = PublicMunicipios::
            where('id_municipio',$request->id_municipio)
                ->with('departamentoMunicipio')->get();

            if(!empty($municipio[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => $municipio[0],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_municipio'=>["Datos no encontrados"]),
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
                'max:50',
                Rule::unique('pgsql.public.areas')/*->ignore($request->id_cargo,'id_cargo')*/],
            'departamento' => 'required|array|min:1',
        ];


        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $municipio = new PublicMunicipios;
            $municipio->descripcion = $request->descripcion;
            $municipio->id_departamento = $request->departamento['id_departamento'];
            
            $municipio->save();

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


    public function actualizar(Request $request)
    {
        $rules = [
          'id_municipio' => 'required|integer|min:1',
          'descripcion' => [
                'required',
                'string',
                'max:50',
                Rule::unique('pgsql.public.municipios')->ignore($request->id_municipio,'id_municipio')],
            'departamento_municipio' => 'required|array|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $municipio = PublicMunicipios::find($request->id_municipio);
            $municipio->descripcion = $request->descripcion;
            $municipio->id_departamento = $request->departamento_municipio['id_departamento'];
            $municipio->save();

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