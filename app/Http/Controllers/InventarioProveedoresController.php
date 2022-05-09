<?php 

namespace App\Http\Controllers;

use App\Models\AdmonAjustes;
use App\Models\InventarioTipoProveedor;
use App\Models\PublicDepartamentos;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\InventarioProveedores;
use Illuminate\Http\Request;

class InventarioProveedoresController extends Controller
{


    /**
     * Busqueda de Cuentas Contables
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function buscar(Request $request, InventarioProveedores $proveedores)
    {
        $proveedores = $proveedores->buscar($request);
        return response()->json([
            'results' => $proveedores
        ]);
    }

    public function generarReporte($ext)
    {
        // echo $ext;
       // $ext = 'pdf';
        $os = array("xls", "pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ListadoProveedores';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ListadoProveedores';
             $input = '/var/www/html/resources/reports/ListadoProveedores';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ListadoProveedores';
            $conf = session()->get('id_empresa');
            $nombre_empresa = AdmonAjustes::where('id_empresa', '=',$conf )->where('id_ajuste',4)->select('valor')->first();
            $logo_empresa = AdmonAjustes::where('id_empresa', '=', $conf)->where('id_ajuste',3)->select(DB::raw("substr(valor, 2, length(valor) - 2)::json->>'file_thumbnail' as file_thumbnail"))->first();
            $url = '/var/www/html/resources/reports/';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [
                    'empresa_nombre' => $nombre_empresa->valor,
                    'empresa_logo' =>  env('APP_URL_REPORTS').$logo_empresa->file_thumbnail,
                    'id_empresa' => $conf
                ],
                'db_connection' => [
                    'driver' => 'postgres',
                    'username' => env('DB_USERNAME'),
                    'password' => env('DB_PASSWORD'),
                    'host' => env('DB_HOST'),
                    'database' => env('DB_DATABASE'),
                    'port' => env('DB_PORT')
                ]
            ];

            $jasper = new PHPJasper;

            $jasper->process($input, $output, $options)->execute();
            /*header('Content-Description: File Transfer');
            header('Content-Type: multipart/form-data;boundary="boundary"');
            header('Content-Disposition: form-data; filename=' . $hora_actual. 'Accesos.' . $ext);
            header('Content-Transfer-Encoding: binary');
            header('Expires: 0');
            header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
            header('Content-Length: ' . filesize($output . '.' . $ext));
            flush();
            readfile($output . '.' . $ext);*/
            // unlink($output . '.' . $ext);

            $headers = [
                'Content-Type' => 'application/pdf',
            ];

            return response()->download($output . '.' . $ext ,$hora_actual. 'ListadoProveedores.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

    /**
     * Obtener una lista de Proveedores
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener(Request $request, InventarioProveedores $proveedores)
    {
        $proveedores = $proveedores->obtener($request);
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $tipos_proveedor = InventarioTipoProveedor::whereIn('id_empresa', array($conf,$id_empresa_global))->where('estado', 1)->orderBy('descripcion')->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'tipos_proveedor' => $tipos_proveedor,
                'total' => $proveedores->total(), 
                'rows' => $proveedores->items()
            ],
            'messages' => null
        ]);
    }

     /**
     * Obtener una lista de Proveedores
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerProveedoresProducto(Request $request, InventarioProveedores $proveedores)
    {
        $proveedores = $proveedores->obtenerProveedoresProducto($request);
        return response()->json([
            'status' => 'success',
            'result' => $proveedores,
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

    public function obtenerTodos(Request $request, InventarioProveedores $proveedores)
    {
        $conf = session()->get('id_empresa');
        $proveedores = InventarioProveedores::where('id_empresa', '=', $conf)->where('activo', 1)->orderby('id_proveedor')/*->where('id_proveedor','!=', 1)*/->get();
        return response()->json([
            'status' => 'success',
            'result' => $proveedores,
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de Proveedores de baterias
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerProveedoresBaterias(Request $request, InventarioProveedores $proveedores)
    {
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $proveedores = InventarioProveedores::whereIn('id_empresa', array($conf,$id_empresa_global))->where('activo', 1)->where('id_tipo_proveedor', 1)->orderby('nombre_comercial')->get();
        return response()->json([
            'status' => 'success',
            'result' => $proveedores,
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

    public function obtenerProveedor(Request $request)
    {
        $rules = [
            'id_proveedor' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;

            $proveedor = InventarioProveedores::
            whereIn('id_empresa',array($conf,$id_empresa_global))->where('id_proveedor',$request->id_proveedor)
               ->with('municipioProveedor')->first();

            $departamentos = PublicDepartamentos::with('municipiosDepartamento')->get();

            if(!empty($proveedor)){
                return response()->json([
                    'status' => 'success',
                    'result' => [
                        'proveedor' => $proveedor,
                        'departamentos' => $departamentos
                    ],
                    'messages' => null
                ]);
            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_proveedor'=>["Datos no encontrados"]),
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
        $messages = [
            /*'numero_cedula.required_if' => 'El campo cédula es requerido para tipo de persona Natural',
            'numero_ruc.required_if' => 'El campo RUC es requerido para tipo de persona Juridíca',*/
        ];

        $rules = [
            'razon_social' => 'nullable|string|max:100',
            'codigo' => 'required|string|max:10',
            'direccion' => 'nullable|string|max:200',
            'contacto_proveedor' => 'nullable|string|max:100',
            'tipo_persona' => 'required|integer|min:1|max:2',
           // 'numero_cedula' => 'nullable|required_if:tipo_persona,1|string|max:14',
            //'numero_ruc' => 'nullable||string|max:14',

/*            'numero_ruc' => [
                'nullable',
                'required_if:tipo_persona,2',
                'string',
                'max:14',
                Rule::unique('pgsql.inventario.proveedores')],*/

/*            'numero_cedula' => [
                'nullable',
                'required_if:tipo_persona,1',
                'string',
                'max:14',
                Rule::unique('pgsql.inventario.proveedores')],*/

            //'tipo_proveedor' => 'required|array|min:1',
            //'tipo_proveedor.id_tipo_proveedor' => 'required|integer|min:1',
            //'clasificacion_contable' => 'required|integer|min:1|max:2',
            'nombre_comercial' => 'required|string|max:100',
            'telefono' => 'nullable|string|max:20',
            'telefono_contacto' => 'nullable|string|max:20',
            'correo_contacto' => 'nullable|string|max:50',
            //'paguese_a' => 'required|string|max:100',
            'observaciones' => 'nullable|string|max:100',
            'municipio' => 'required|array|min:1',
            'municipio.id_municipio' => 'required|integer|min:1',
            //'plazo_credito' => 'required|integer|min:0',
            //'es_extranjero' => 'required|boolean',
        ];
        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $proveedor = new InventarioProveedores;
            $proveedor->direccion = $request->direccion;
            $proveedor->contacto_proveedor = $request->contacto_proveedor;

            if( $request->numero_ruc == null){
                $proveedor->numero_ruc = '';
            }else{
                $proveedor->numero_ruc = $request->numero_ruc;
            }
            //$proveedor->es_extranjero = $request->es_extranjero;
            //$proveedor->clasificacion_contable = $request->clasificacion_contable;
            //$proveedor->id_tipo_proveedor = $request->tipo_proveedor['id_tipo_proveedor'];
            $clasificacion_contable = 1;
           /* $codigo_nuevo = $proveedor->obtenerCodigoProveedor($clasificacion_contable);
            $str_length = 4;
            $str_length2= 2;
            $id_tipo_proveedor = 1;
            $es_extranjero = true;
            $str = ($es_extranjero?'I':'N').substr("0{$id_tipo_proveedor}", -$str_length2).substr("000{$codigo_nuevo['secuencia']}", -$str_length);
            $proveedor->secuencia = $codigo_nuevo['secuencia'];
            if($request->clasificacion_contable == 1){
                $proveedor->codigo = 'P'.$str;
            } else if($request->clasificacion_contable == 2){
                $proveedor->codigo = 'A'.$str;
            }*/
            $proveedor->codigo = $request->codigo;
            $proveedor->razon_social = $request->razon_social;

            $proveedor->id_municipio = $request->municipio['id_municipio'];
            $proveedor->numero_cedula = $request->numero_cedula;
            $proveedor->nombre_comercial = $request->nombre_comercial;
            $proveedor->telefono = $request->telefono;
            $proveedor->telefono_contacto = $request->telefono_contacto;
            $proveedor->correo_contacto = $request->correo_contacto;
            $proveedor->paguese_a = $request->paguese_a;

            $proveedor->observaciones = $request->observaciones;
            //$proveedor->tipo_persona = $request->tipo_persona;
            //$proveedor->plazo_credito = $request->plazo_credito;


            $proveedor->u_creacion = Auth::user()->usuario;
            $proveedor->activo = 1;
            $proveedor->id_empresa = $conf;
            $proveedor->save();

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
     * Actualizar Proveedor existente
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function actualizar(Request $request)
    {
        $messages = [
/*            'numero_cedula.required_if' => 'El campo cédula es requerido para tipo de persona Natural',
            'numero_ruc.required_if' => 'El campo RUC es requerido para tipo de persona Juridíca',*/
        ];


        $rules = [
            'id_proveedor' => 'required|integer|min:1',
            'razon_social' => 'nullable|string|max:100',
            'codigo' => 'required|string|max:10',
            'direccion' => 'nullable|string|max:200',
            'contacto_proveedor' => 'nullable|string|max:100',
            //'tipo_persona' => 'required|integer|min:1|max:2',
/*            'numero_cedula' => 'nullable|required_if:tipo_persona,1|string|max:14',
            'numero_ruc' => 'nullable|required_if:tipo_persona,2|string|max:14',*/

            //'clasificacion_contable' => 'required|integer|min:1|max:2',
            'nombre_comercial' => 'required|string|max:100',
            'telefono' => 'nullable|string|max:20',
            'telefono_contacto' => 'nullable|string|max:20',
            'correo_contacto' => 'nullable|string|max:50',
            //'paguese_a' => 'required|string|max:100',
            'observaciones' => 'nullable|string|max:100',
            'municipio_proveedor' => 'required|array|min:1',
            'municipio_proveedor.id_municipio' => 'required|integer|min:1',
            //'plazo_credito' => 'required|integer|min:0',

            //'es_extranjero' => 'required|boolean',
        ];

        $validator = Validator::make($request->all(), $rules, $messages);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $proveedor = InventarioProveedores::find($request->id_proveedor);
            $proveedor->direccion = $request->direccion;
            $proveedor->contacto_proveedor = $request->contacto_proveedor;
            if( $request->numero_ruc == null){
                $proveedor->numero_ruc = '';
            }else{
                $proveedor->numero_ruc = $request->numero_ruc;
            }

            $proveedor->codigo = $request->codigo;
            $proveedor->razon_social = $request->razon_social;
            $proveedor->u_modificacion = Auth::user()->usuario;

            $proveedor->id_municipio = $request->municipio_proveedor['id_municipio'];
            $proveedor->numero_cedula = $request->numero_cedula;
            $proveedor->nombre_comercial = $request->nombre_comercial;
            $proveedor->telefono = $request->telefono;
            $proveedor->telefono_contacto = $request->telefono_contacto;
            $proveedor->correo_contacto = $request->correo_contacto;
            $proveedor->paguese_a = $request->paguese_a;
            $proveedor->observaciones = $request->observaciones;
            $proveedor->tipo_persona = $request->tipo_persona;
            //$proveedor->plazo_credito = $request->plazo_credito;
            //$proveedor->es_extranjero = $request->es_extranjero;

            $proveedor->save();

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
            'id_proveedor' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $proveedor = InventarioProveedores::find($request->id_proveedor);
            $proveedor->activo = 0;
            $proveedor->u_modificacion = Auth::user()->usuario;
            $proveedor->save();

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
            'id_proveedor' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $proveedor = InventarioProveedores::find($request->id_proveedor);
            $proveedor->activo = 1;
            $proveedor->u_modificacion = Auth::user()->usuario;
            $proveedor->save();

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