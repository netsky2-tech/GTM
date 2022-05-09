<?php 

namespace App\Http\Controllers;

use Validator;
use App\Models\ContabilidadEstadosFinancieros;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class ContabilidadEstadosFinancierosController extends Controller
{
    /**
     * Obtener una lista de Estados Financieros
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    
    public function obtenerEstadosFinacieros(Request $request, ContabilidadEstadosFinancieros $estados_financieros)
    {
        $estados_financieros = $estados_financieros->obtenerEstadosFinancieros($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $estados_financieros->total(), 
                'rows' => $estados_financieros->items()
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

    public function obtenerTodosEstadosFinacieros(Request $request, ContabilidadEstadosFinancieros $estado_financieros)
    {
        $estado_financieros = ContabilidadEstadosFinancieros::select(['*'])/*with(['listadoAnexos' => function($query) {
         $query->where('contabilidad.anexos.estado',1)->orderBy('posicion_anexo');}])*/
        ->orderBy('contabilidad.estados_financieros.id_estado_financiero')->get();
        return response()->json([
            'status' => 'success',
            'result' => $estado_financieros,
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

    public function obtenerListaEstadosFinacieros(Request $request, ContabilidadEstadosFinancieros $estado_financieros)
    {
        $estado_financieros = ContabilidadEstadosFinancieros::with(['listadoAnexos' => function($query) {
         $query->where('contabilidad.anexos.estado',1)->orderBy('posicion_anexo');}])
        ->orderBy('contabilidad.estados_financieros.id_estado_financiero')->get();
        return response()->json([
            'status' => 'success',
            'result' => $estado_financieros,
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

    public function obtenerEstadoFinaciero(Request $request)
    {
        $rules = [
            'id_estado_financiero' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $estado_financiero = ContabilidadEstadosFinancieros::find($request->id_estado_financiero);
            if(!empty($estado_financiero)){		
            return response()->json([
                'status' => 'success',
                'result' => $estado_financiero,
                'messages' => null
            ]);

        }
        else{
          return response()->json([
                'status' => 'error',
                'result' => array('id_estado_financiero'=>["Datos no encontrados"]),
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

}