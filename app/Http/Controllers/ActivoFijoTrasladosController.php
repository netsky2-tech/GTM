<?php 

namespace App\Http\Controllers;

use App\Models\ActivoFijoTrasladosActivos;
use Illuminate\Http\Request;
class ActivoFijoTrasladosController extends Controller
{
    
    public function obtenerTraslados(Request $request, ActivoFijoTrasladosActivos $traslados)
    {
        $traslados = $traslados->obtenerTraslados($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $traslados->total(), 
                'rows' => $traslados->items()
            ],
            'messages' => null
        ]);
    }
}