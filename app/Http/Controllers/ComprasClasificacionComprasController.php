<?php 

namespace App\Http\Controllers;

use App\Models\ComprasClasificacionCompras;
use App\Models\ContabilidadCuentasContables;
use App\Models\ContabilidadCuentasContablesVista;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class ComprasClasificacionComprasController extends Controller
{

    public function nuevo(Request $request)
    {
        $cuentas_contables = ContabilidadCuentasContablesVista::orderBy('cta_contable')->where('estado', 1)->select('id_cuenta_contable', 'cta_contable', 'nombre_cuenta', 'nombre_cuenta_completo')->get();


        return response()->json([
            'status' => 'success',
            'result' => [
                'cuentas_contables' => $cuentas_contables
            ],
            'messages' => null
        ]);

    }

    /**
     * Obtener una lista de Afectaciones (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param Request $request
     * @param ComprasClasificacionCompras $clasificacion
     * @return  json(array)
     */

    public function obtener(Request $request, ComprasClasificacionCompras $clasificacion)
    {
        $clasificacion = $clasificacion->obtener($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $clasificacion->total(),
                'rows' => $clasificacion->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de Roles sin paginacion
     *
     * @access  public
     * @param Request $request
     * @param ComprasClasificacionCompras $clasificacion
     * @return  json(array)
     */

    public function obtenerClasificaciones(Request $request, ComprasClasificacionCompras $clasificacion)
    {
        $clasificacion = ComprasClasificacionCompras::orderby('id_clasificacion_servicio')->get();
        return response()->json([
            'status' => 'success',
            'result' => $clasificacion,
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

    public function obtenerClasificacion(Request $request)
    {
        $rules = [
            'id_clasificacion_servicio'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $clasificacion = ComprasClasificacionCompras::where('id_clasificacion_servicio',$request->id_clasificacion_servicio)->with('clasificacionCompraCuentaContable')->get();
            $cuentas_contables = ContabilidadCuentasContablesVista::orderBy('cta_contable')->where('estado',1)->select('id_cuenta_contable','cta_contable','nombre_cuenta','nombre_cuenta_completo')->get();

            if(!empty($clasificacion)){	
            return response()->json([
                'status' => 'success',
                'result' => [
                    'clasificacion' => $clasificacion[0],
                    'cuentas_contables' => $cuentas_contables
                ],
                'messages' => null
            ]);

        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_clasificacion_servicio'=>["Datos no encontrados"]),
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
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.compra.clasificacion_compra')/*->ignore($request->id_afectacion,'id_afectacion')*/
            ],
            //'tipo_afectacion' => 'required|integer|min:1|max:3',
            'clasificacion_compra_cuenta_contable' => 'required|array|min:1',
            'clasificacion_compra_cuenta_contable.id_cuenta_contable' => 'required|integer|min:1',

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $clasificacion = new ComprasClasificacionCompras();
            $clasificacion->descripcion = $request->descripcion;
            $clasificacion->id_cuenta_contable = $request->clasificacion_compra_cuenta_contable['id_cuenta_contable'];
            $clasificacion->activo = true;
          
            $clasificacion->save();

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
            'id_clasificacion_servicio' => 'required|integer',
            'descripcion' => [
                'required',
                'string',
                'max:100',
                Rule::unique('pgsql.compra.clasificacion_compra')->ignore($request->id_clasificacion_servicio,'id_clasificacion_servicio')
            ],
            'clasificacion_compra_cuenta_contable' => 'required|array|min:1',
            'clasificacion_compra_cuenta_contable.id_cuenta_contable' => 'required|integer|min:1',

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $clasificacion = ComprasClasificacionCompras::find($request->id_clasificacion_servicio);
            $clasificacion->descripcion = $request->descripcion;
            $clasificacion->id_cuenta_contable = $request->clasificacion_compra_cuenta_contable['id_cuenta_contable'];
            $clasificacion->save();

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

    public function desactivar(Request $request)
    {
        $rules = [
            'id_clasificacion_servicio' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $clasificacion = ComprasClasificacionCompras::find($request->id_clasificacion_servicio);
            $clasificacion->activo = 0;
            $clasificacion->save();

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
            'id_clasificacion_servicio' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $clasificacion = ComprasClasificacionCompras::find($request->id_clasificacion_servicio);
            $clasificacion->activo = 1;
            $clasificacion->save();

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