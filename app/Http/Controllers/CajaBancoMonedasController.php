<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CajaBancoMonedas;

class CajaBancoMonedasController extends Controller
{
     /**
     * Obtener listado de monedas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */
    public function buscar()
    {
        $results = CajaBancoMonedas::orderBy('nombre')
            ->when(request('q'), function($query) {
                $query->where('nombre', 'ilike', '%'.request('q').'%')
                    ->orWhere('codigo', 'ilike', '%'.request('q').'%');
            })
            ->limit(6)
            ->get();

            return response()->json([
                'status' => 'success',
                'result' => $results,
                'messages' => null
            ]);
    }

    /**
     * Obtener listado de monedas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerMonedas(Request $request)
    {
        $monedas = CajaBancoMonedas::where('activo',1)->orderBy('id_moneda')->get();
        return response()->json([
            'status' => 'success',
            'result' => $monedas,
            'messages' => null
        ]);
    }
}
