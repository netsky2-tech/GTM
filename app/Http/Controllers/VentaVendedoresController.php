<?php 

namespace App\Http\Controllers;

use App\Models\CajaChicaCaja;
use App\Models\CajaChicaComprobante;
use App\Models\CajaChicaSolicitudViatico;
use App\Models\RRHHTrabajadores;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Validator,Auth;
use App\Models\VentaVendedores;
use Illuminate\Http\Request;

class VentaVendedoresController extends Controller
{


    /**
     * Busqueda de Clientes
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function buscar(Request $request, VentaVendedores $vendedores)
    {
        $vendedores = $vendedores->buscar($request);
        return response()->json([
            'results' => $vendedores
        ]);
    }

    /**
     * Obtener una lista de Clientes
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, VentaVendedores $vendedores)
    {
        $vendedores = $vendedores->obtenerVendedores($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $vendedores->total(), 
                'rows' => $vendedores->items()
            ],
            'messages' => null
        ]);
    }


    /**
     * obtener Cliente Especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerCliente(Request $request)
    {
        $rules = [
            'id_cliente' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $cliente = VentaVendedores::
            where('id_cliente',$request->id_cliente)
               ->with('zonaCliente')->with('tipoCliente')->with('municipioCliente')->with('impuestoCliente')->get();

            $departamentos = PublicDepartamentos::with('municipiosDepartamento')->get();
            $zonas = PublicZonas::select(['id_zona','descripcion'])->get();
            $impuestos = PublicImpuestos::select(['id_impuesto','descripcion'])->get();
            $tipos_clientes = VentaTiposCliente::select(['id_tipo_cliente','descripcion'])->get();

            if(!empty($cliente[0])){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'cliente' => $cliente[0],
                        'departamentos' => $departamentos,
                        'impuestos' => $impuestos,
                        'tipos_clientes' => $tipos_clientes,
                        'zonas' => $zonas
                    ],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_cliente'=>["Datos no encontrados"]),
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
     * Crear un nuevo proveedor
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function registrar(Request $request)
    {

        $rules = [
            'id_trabajador' => [
                'required',
                'integer',
                'min:1',
                Rule::unique('pgsql.venta.vendedores')/*->ignore($request->id_tipo_activo,'id_tipo_activo')*/
            ],
            'nombre_completo' => 'required|string|max:100',
            'direccion' => 'nullable|string|max:100',
            'telefono' => 'nullable|integer',
            'email' => 'nullable|string|max:50',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            try{
                DB::beginTransaction();

            $cliente = new VentaVendedores();
            $cliente->id_trabajador = $request->id_trabajador;
            $cliente->nombre_completo = $request->nombre_completo;
            $cliente->direccion = $request->direccion;
            $cliente->email = $request->email;
            $cliente->telefono = $request->telefono;
            $cliente->u_creacion = Auth::user()->usuario;
            $cliente->activo = 1;
            $cliente->save();

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

    /**
     * Actualizar Proveedor existente
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function actualizar(Request $request)
    {
        $messages = [
            'numero_cedula.required_if' => 'El campo cédula es requerido para tipo de persona Natural',
            'numero_ruc.required_if' => 'El campo RUC es requerido para tipo de persona Juridíca',
        ];


        $rules = [
            'id_cliente' => 'required|integer|min:1',
            'tipo_persona' => 'required|integer|min:1|max:2',
            'nombre_comercial' => 'required|string|max:100',
            'contacto' => 'nullable|string|max:100',
            'numero_ruc' => 'nullable|required_if:tipo_persona,2|string|max:50',
            'numero_cedula' => 'nullable|required_if:tipo_persona,1|string|max:50',
            'direccion' => 'nullable|string|max:200',
            'tipo_cliente' => 'required|array|min:1',
            'tipo_cliente.id_tipo_cliente' => 'required|integer|min:1',
            'telefono' => 'nullable|string|max:20',
            'correo' => 'nullable|string|max:50',
            'departamento_cliente' => 'required|array|min:1',
            'departamento_cliente.id_departamento' => 'required|integer|min:1',
            'municipio_cliente' => 'required|array|min:1',
            'municipio_cliente.id_municipio' => 'required|integer|min:1',
            'giro_negocio' => 'nullable|string|max:100',
            'zona_cliente' => 'required|array|min:1',
            'zona_cliente.id_zona' => 'required|integer|min:1',
            'impuesto_cliente' => 'required|array|min:1',
            'impuesto_cliente.id_impuesto' => 'required|integer|min:1',
            'tipo_contribuyente' => 'required|integer|min:1|max:3',
            'retencion_ir' => 'required|boolean',
            'retencion_imi' => 'required|boolean',
            'clasificacion' => 'required|integer|min:1|max:2',
            'permite_credito' => 'required|boolean',
            'plazo_credito' => 'required_if:permite_credito,true|integer|min:0',
            'limite_credito' => 'required_if:permite_credito,true|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0',
            'porcentaje_descuento' => 'required|numeric|regex:/^\d*(\.\d{1,2})?$/|min:0|max:50',
            'observaciones' => 'nullable|string|max:100',
            'permite_consignacion' => 'required|boolean',
            'tramite_cheque' => 'required|integer|min:0',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {
            $cliente = VentaVendedores::find($request->id_cliente);

            $cliente->tipo_persona = $request->tipo_persona;
            $cliente->nombre_comercial = $request->nombre_comercial;
            $cliente->contacto = $request->contacto;
            if( $request->numero_ruc == null){
                $cliente->numero_ruc = '';
            }else{
                $cliente->numero_ruc = $request->numero_ruc;
            }
            $cliente->numero_cedula = $request->numero_cedula;
            $cliente->direccion = $request->direccion;
            $cliente->id_tipo_cliente = $request->tipo_cliente['id_tipo_cliente'];
            $cliente->telefono = $request->telefono;
            $cliente->correo = $request->correo;
            $cliente->id_municipio = $request->municipio_cliente['id_municipio'];
            $cliente->giro_negocio = $request->giro_negocio;
            $cliente->id_zona = $request->zona_cliente['id_zona'];
            $cliente->id_impuesto = $request->impuesto_cliente['id_impuesto'];
            $cliente->tipo_contribuyente = $request->tipo_contribuyente;
            $cliente->retencion_ir = $request->retencion_ir;
            $cliente->retencion_imi = $request->retencion_imi;
            $cliente->clasificacion = $request->clasificacion;
            if($request->permite_credito){
                $cliente->plazo_credito = $request->plazo_credito;
                $cliente->limite_credito = $request->limite_credito;
            }else{
                $cliente->plazo_credito =0;
                $cliente->limite_credito =0;
            }
            $cliente->porcentaje_descuento = $request->porcentaje_descuento;
            $cliente->observaciones = $request->observaciones;
            $cliente->permite_consignacion = $request->permite_consignacion;
            $cliente->tramite_cheque = $request->tramite_cheque;

            $cliente->save();

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
     * Desactiva Proveedor
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function desactivar(Request $request)
    {
        $rules = [
            'id_vendedor' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cliente = VentaVendedores::find($request->id_vendedor);
            $cliente->activo = 0;
            $cliente->u_modificacion = Auth::user()->usuario;
            $cliente->save();

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
            'id_vendedor' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $cliente = VentaVendedores::find($request->id_vendedor);
            $cliente->activo = 1;
            $cliente->u_modificacion = Auth::user()->usuario;
            $cliente->save();

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

    public function nuevo(Request $request)
    {
        $trabajadores = RRHHTrabajadores::select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"))->with('trabajadorDetalles')->get();

        if(!empty($request->id_trabajador))
        {
            $trabajador = RRHHTrabajadores::where('id_trabajador',$request->id_trabajador)->select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"))->with('trabajadorDetalles')->first();
            return response()->json([
                'status' => 'success',
                'result' => [
                    'trabajadores' => $trabajadores,
                    'trabajador' => $trabajador,

                ],
                'messages' => null
            ]);
        }
        else{
            return response()->json([
                'status' => 'success',
                'result' => [
                    'trabajadores' => $trabajadores,
                ],
                'messages' => null
            ]);
        }
    }

}