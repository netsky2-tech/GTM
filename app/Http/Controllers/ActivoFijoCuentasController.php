<?php 

namespace App\Http\Controllers;

use App\Models\ComprasOrdenCompra;

use App\Models\ContabilidadCuentasContables;
use App\Models\ContabilidadCuentasContablesVista;
use App\Models\ContabilidadDocumentosContables;
use App\Models\ContabilidadDocumentosMovimientos;
use App\Models\ContabilidadPeriodoFiscal;
use App\Models\ContabilidadPeriodoMeses;
use App\Models\ContabilidadTiposDocumentos;
use App\Models\InventarioBodegaProductos;
use App\Models\InventarioBodegas;
use App\Models\InventarioEntradaProductos;
use App\Models\InventarioEntradas;
use App\Models\InventarioImportacionConfiguracion;
use App\Models\InventarioImportacionOrdenesCompra;
use App\Models\InventarioProductos;
use App\Models\InventarioProveedores;
use DateTime;
use Hash, Validator,Auth;

use App\Models\InventarioImportacionProductos;
use App\Models\ActivoFijoCuentas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPJasper\PHPJasper;

class ActivoFijoCuentasController extends Controller
{
	/**
     * Get List of Importaciones
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerCuentasActivos(Request $request, ActivoFijoCuentas $cuentas)
    {
        $cuentas = $cuentas->obtenerCuentasActivos($request);
        $cuentas_contables = ContabilidadCuentasContablesVista::orderBy('cta_contable')->where('estado',1)->select('id_cuenta_contable','cta_contable','nombre_cuenta','nombre_cuenta_completo')->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $cuentas->total(),
                'rows' => $cuentas->items(),
                'cuentas_contables' => $cuentas_contables
            ],
            'messages' => null
        ]);
	}


    public function actualizar(Request $request)
    {
        $messages = [
            'cuentas.required' => 'Se requiere agregar un producto por lo menos.',
            'cuentas.min' => 'Se requiere agregar un producto por lo menos.',
            'cuentas.*.id_cuenta_contable.required' => 'Seleccione un producto válido',
            'cuentas.*.descripcion_movimiento.required' => 'Se requiere una descripcion del producto',
        ];

        $rules = [

            'cuentas' => 'required|array|min:5',
            'cuentas.*.id_cuenta_activo' => 'required|integer',
            'cuentas.*.cuenta_contable.id_cuenta_contable' => 'required|integer|exists:pgsql.contabilidad.cuentas_contables,id_cuenta_contable',
            'cuentas.*.cuenta_contable_depreciado.id_cuenta_contable' => 'required|integer|exists:pgsql.contabilidad.cuentas_contables,id_cuenta_contable',
            'cuentas.*.descripcion' => 'required|string|max:100',

        ];

        $validator = Validator::make($request->all(), $rules,$messages);
        if (!$validator->fails()) {

            try {

                DB::beginTransaction();

                foreach ($request->cuentas as $cuenta) {
                    $cuentax = ActivoFijoCuentas::find($cuenta['id_cuenta_activo']);
                    $cuentax->id_cuenta_depreciacion = $cuenta['cuenta_contable']['id_cuenta_contable'];
                    $cuentax->id_cuenta_depreciado = $cuenta['cuenta_contable_depreciado']['id_cuenta_contable'];
                    $cuentax->descripcion = $cuenta['descripcion'];
                    $cuentax->save();
                }


                DB::commit();
                return response()->json([
                    'status' => 'success',
                    'result' => null,
                    'messages' => null
                ]);


            } catch (Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => 'error',
                    'result' => 'Error de base de datos',
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

