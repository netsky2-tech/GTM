<?php 

namespace App\Http\Controllers;

use App\Models\RRHHDatosMedicos;
use App\Models\RRHHParentesco;
use App\Models\VentaPrecioListaCatalogo;
use App\Models\VentaPrecioListaGrupo;
use PHPJasper\PHPJasper;
use Validator,Auth;
use App\Models\RRHHNivelesAcademicos;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
class VentaPrecioListaGrupoController extends Controller
{
    /**
     * Obtener una lista de Roles (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param Request $request
     * @param VentaPrecioListaGrupo $lista
     * @return  json(array)
     */

    public function obtener(Request $request, VentaPrecioListaGrupo $lista)
    {
        $lista = $lista->obtenerListaGrupo($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $lista->total(), 
                'rows' => $lista->items()
            ],
            'messages' => null
        ]);
    }

    /**
     * Obtener una lista de zonas sin paginacion
     *
     * @access  public
     * @param Request $request
     * @param VentaPrecioListaCatalogo $lista
     * @return  json(array)
     */

    public function obtenerTodas(Request $request, VentaPrecioListaGrupo $lista)
    {
        $lista = VentaPrecioListaGrupo::orderby('id_precio_lista_grupos')->get();
        return response()->json([
            'status' => 'success',
            'result' => $lista,
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

    public function obtenerListaBateria(Request $request)
    {
        $rules = [
            'id_precio_lista_grupos'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $lista = VentaPrecioListaGrupo::find($request->id_precio_lista_grupos)->with('ListaTipoProducto')->first();

            if(!empty($lista)){	
            return response()->json([
                'status' => 'success',
                'result' => $lista,
                'messages' => null
            ]);

        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_precio_lista_grupos'=>["Datos no encontrados"]),
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
            'descripcion' => 'required|string|max:100|unique:pgsql.venta.precios_listas_grupos,descripcion',

        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            
            $lista = new VentaPrecioListaGrupo();
            $lista->descripcion = $request->descripcion;
            $lista->id_tipo_producto = $request->tipo['id_tipo_producto'];
            $lista->u_grabacion = Auth::user()->usuario;
            $lista->activo = 1;
            $lista->save();

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
            'id_precio_lista_grupos' => 'required|integer|min:1',
        ];



        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $lista = VentaPrecioListaGrupo::find($request->id_precio_lista_grupos);
            $lista->descripcion = $request->descripcion;
            $lista->id_tipo_producto = $request->lista_tipo_producto['id_tipo_producto'];
            $lista->u_modificacion = Auth::user()->usuario;
            $lista->save();

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
            'id_precio_lista_grupos' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $lista = VentaPrecioListaGrupo::find($request->id_precio_lista_grupos);
            $lista->activo = 0;
            $lista->save();

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
            'id_precio_lista_grupos' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $rol = VentaPrecioListaGrupo::find($request->id_precio_lista_grupos);
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

    public function generarReporte($ext)
    {
        // echo $ext;
        // $ext = 'pdf';
        $os = array("xls", "pdf");
        if (in_array($ext, $os)) {
            $hora_actual = time() ;
            //$input = 'C:/xampp/htdocs/resources/reports/ReporteZonas';
            //$output = 'C:/xampp/htdocs/resources/reports/' .$hora_actual . 'ReporteZonas';
             $input = '/var/www/html/resources/reports/ReporteZonas';
             $output = '/var/www/html/resources/reports/'.$hora_actual.'ReporteZonas';

            $options = [
                'format' => [$ext],
                'locale' => 'en',
                'params' => [],
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

            return response()->download($output . '.' . $ext ,$hora_actual. 'ReporteZonas.' . $ext, $headers);

            /*exec($jasper->process($input,$output,$options)->output().' 2>&1', $output);
               print_r($output);*/
        }
    }

}