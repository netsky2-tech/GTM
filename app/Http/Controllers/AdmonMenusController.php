<?php 

namespace App\Http\Controllers;

use App\Models\AdmonPermisos;
use App\Models\AdmonRoles;
use App\Models\AdmonSecciones;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\AdmonMenus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdmonMenusController extends Controller
{

      /**
     * obtener menu Especifico
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerMenuEspecifico(Request $request)
    {
        $rules = [
            'id_menu' => 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $menus = AdmonMenus::find($request->id_menu);
        	if(!empty($menus)){	
            return response()->json([
                'status' => 'success',
                'result' => $menus,
                'messages' => null
            ]);
        }
		else{
		  return response()->json([
				'status' => 'error',
				'result' => array('id_menu'=>["Datos no encontrados"]),
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
     * Crear un nuevo menu
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function crearMenu(Request $request)
    {
        $rules = [
            'id_menu_padre' => 'required',
            'nombre_menu' => 'required',
            'menu_seccion' => 'required',
            'icon' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $menu = new AdmonMenus;
          /*  $menu->id_menu_padre = $request->id_menu_padre;
            $menu->nombre_menu = $request->nombre_menu;
            $menu->menu_seccion = $request->menu_seccion;
            $menu->nombre_route = $request->nombre_route;
            $menu->icon = $request->icon;*/
            $menu->estado = 1;
            $menu->save();

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
     * Actualizar Menu existente
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function actualizarOrdenMenus(Request $request)
    {
        $rules = [
            'subMenus' => 'required|array|min:1',
            'subMenus.*.id_menu' => 'required|integer|min:1',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
         
            try{
            DB::beginTransaction();

            $contador = 1;
            
            foreach ($request->subMenus as $subMenu) {
                $menu = AdmonMenus::find($subMenu['id_menu']);
                //echo $menu->id_menu.", contador:". $contador." | ";
                $menu->secuencia = $contador;
                $menu->save();
                $contador++;
               // echo  'nombre: '.$menu->nombre_menu .' secuencia: '. $menu->secuencia;
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

    /**
     * Actualizar Menu existente
     *
     * @access  public
     * @param   
     * @return  json(string)
     */

    public function actualizarMenu(Request $request)
    {
        $rules = [
            'id_menu' => 'required|integer',
           // 'id_menu_padre' => 'required',
            'nombre_menu' => 'required|string|max:40',
          //  'menu_seccion' => 'required',
          //  'nombre_route' => 'required',
            'icon' => 'required|string',
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $menu = AdmonMenus::find($request->id_menu);
           // $menu->id_menu_padre = $request->id_menu_padre;
            $menu->nombre_menu = $request->nombre_menu;
           // $menu->menu_seccion = $request->menu_seccion;
           // $menu->nombre_route = $request->nombre_route;
            $menu->icon = $request->icon;
            //$menu->estado = 1;
            $menu->save();

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

    public function desactivaMenu(Request $request)
    {
        $rules = [
            'id_menu' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $menu = AdmonMenus::find($request->id_menu); 
            $menu->estado = 0;
            $menu->save();

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


    public function activaMenu(Request $request)
    {
        $rules = [
            'id_menu' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $menu = AdmonMenus::find($request->id_menu); 
            $menu->estado = 1;
            $menu->save();

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
     * Obtener una lista de Menus (con opcion de busqueda y paginacion)
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerMenus(Request $request, AdmonMenus $menus)
    {
        $menus = $menus->obtenerMenus($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $menus->total(), 
                'rows' => $menus->items()
            ],
            'messages' => null
        ]);
    }

    

       /**
     * Obtener una lista de menus sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerMenusOrdenados(Request $request, AdmonMenus $menus)
    {
       // $menus = AdmonMenus::orderBy('id_menu_padre','asc')->get();
        //$conf = session()->get('id_empresa');
        $menus = AdmonMenus::select(['*'])
        ->where('admon.menus.activo',1)
        //->where('id_empresa',$conf)
        ->whereIn('admon.menus.tipo_menu', array(1))
        ->with(['subMenus' => function($query) {
         $query->with('subMenus')->orderBy('secuencia');}])
        ->orderBy('secuencia')->get();

       /* $rutas = array();
        $arr = array();
        foreach($menus as $key => $item)
        {

            if($item['nombre_route']!=''){
                array_push($rutas, $item['nombre_route']);
            }

        $arr[$item['menu_seccion']][$key] = $item;
        }
        ksort($arr, SORT_NUMERIC);*/

        return response()->json([
            'status' => 'success',
            'result' => $menus,
            'messages' => null
        ]);        
    }

    /**
     * Obtener una lista de menus sin ningun filtro
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerMenusTodos(Request $request, AdmonMenus $menus)
    {
       // $menus = AdmonMenus::orderBy('id_menu_padre','asc')->get();
        //$conf = session()->get('id_empresa');
     $menus = AdmonMenus::where('tipo_menu',1)->with(['menuSecciones' => function($query) {
         $query->with(['seccionMenus' => function($query2) {$query2->with('menuDetalle');}]);
     }])->orderby('secuencia')->get();



     $roles = AdmonRoles::orderby('id_rol')->get();
     /*$menus = AdmonMenus::select('admon.menus.id_menu', 'admon.menus.id_menu_padre','admon.menus.nombre_menu','admon.menus.menu_seccion',
     'admon.menus.nombre_route','admon.menus.icon','admon.menus.f_creacion','admon.menus.f_modificacion','admon.menus.tipo_menu',
     DB::raw('case when id_menu_padre = 0 then null else id_menu_padre end as id_menu_padrex'))
     ->where('admon.menus.activo',1)
     ->whereIn('admon.menus.tipo_menu', array(1,2,3))
     ->orderBy('secuencia')->get();*/

        return response()->json([
            'status' => 'success',
            'result' => ['roles'=>$roles,
                'menus'=>$menus],
            'messages' => null
        ]);        
    }


    public function verificarPermisoVista(Request $request, AdmonMenus $menus)
    {
        if (session()->exists('id_empresa')) {
            $permiso = AdmonPermisos::where('id_menu', $request->id_menu)->where('id_rol', Auth::user()->id_rol)->first();
            //$conf = session()->get('id_empresa');
            //$permiso = AdmonPermisos::where('id_menu',$request->id_menu)->where('id_rol',Auth::user()->id_rol)->first();


            if (!empty($permiso)) {
                return response()->json([
                    'status' => 'success',
                    'result' => '',
                    'messages' => null
                ]);
            } else {
                Auth::logout();
                return response()->json([
                    'status' => 'error',
                    'result' => 'sin permiso',
                    'messages' => null
                ]);
            }
        }else{
            //Si no se encuentra el id_empresa en la sesión, desloguear al usuario
            Auth::logout();
            return response()->json([
                'status' => 'error',
                'result' => 'Sin identificador de empresa',
                'messages' => null
            ]);
        }

    }

    /**
     * Obtener lista de menus por usuario
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerMenusUsuario(Request $request)
    {

        $conf = session()->get('id_empresa');
        $datos_menus = AdmonMenus::
        join('admon.roles_menus','admon.menus.id_menu','=','admon.roles_menus.id_menu')
      ->join('admon.roles','admon.roles.id_rol','=','admon.roles_menus.id_rol')
      ->join('admon.usuarios','admon.usuarios.id_rol','=','admon.roles.id_rol')
      //->join('rrhh.empleados','admon.usuarios.id_empleado','=','rrhh.empleados.id_empleado')
      ->select('admon.menus.id_menu', 'admon.menus.id_menu_padre','admon.menus.nombre_menu','admon.menus.menu_seccion',
      'admon.menus.nombre_route','admon.menus.icon','admon.menus.f_creacion','admon.menus.f_modificacion',
      DB::raw('case when id_menu_padre =0 then null else id_menu_padre end as id_menu_padrex'),
      DB::raw('(select count(*) from admon.menus m where m.id_menu_padre= admon.menus.id_menu) as cantidad_hijos')
      )
      ->where('admon.usuarios.id_usuario',Auth::user()->id_usuario/*$request->id_usuario*/)
      ->where('admon.usuarios.id_empresa',$conf)
      ->where('admon.menus.activo',1)
      //->where('admon.menus.id_empresa',$conf)
      ->where('admon.roles.id_empresa',$conf)
      ->whereIn('admon.menus.tipo_menu', array(1,2))
      ->orderBy('secuencia')
      //->orderBy(DB::raw('COALESCE(case when id_menu_padre = 0 then null else id_menu_padre end, admon.menus.id_menu), case when id_menu_padre =0 then null else id_menu_padre end is not null, admon.menus.id_menu','asc'))
      ->get();

     // print_r($datos_menus);
        $rutas = array();
        $arr = array();
        foreach($datos_menus as $key => $item)
        {

            if($item['nombre_route']!=''){
                array_push($rutas, $item['nombre_route']);
            }

        $arr[$item['menu_seccion']][$key] = $item;
        }
        ksort($arr, SORT_NUMERIC);
        //print_r($arr);
        return response()->json([
            'status' => 'success',
            'result' => $arr,
            'secciones' => $rutas,
            'messages' => null
        ]);
    }


    
    /**
     * Obtener lista de menus padres
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerMenusPadre(Request $request)
    {
        //$conf = session()->get('id_empresa');
        $menu_padres = AdmonMenus::select('id_menu','nombre_menu as menu_padre')->where('id_menu_padre',0)->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'rows' => $menu_padres
            ],
            'messages' => null
        ]);
    }


     
    /**
     * Obtener lista de Secciones
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerSecciones(Request $request)
    {
        //$conf = session()->get('id_empresa');
        $secciones_menus = AdmonMenus::select('menu_seccion')->distinct('menu_seccion')->orderBy('menu_seccion','asc')->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'rows' => $secciones_menus
            ],
            'messages' => null
        ]);
    }


    public function obtenerModulos(Request $request)
    {
        /*$menu_padres = AdmonMenus::select('id_menu','nombre_menu','nombre_route','icon',DB::raw("substr(icon, 2, length(icon) - 2)::json->>'file_thumbnail' as file_thumbnail"))->where('tipo_menu',1)
            ->where('activo',1)->orderby('secuencia')->get();*/

        $conf = session()->get('id_empresa'); $id_empresa_global = 0;
        $menu_padres = AdmonMenus::select('admon.menus.id_menu', 'admon.menus.nombre_menu','admon.menus.nombre_route','admon.menus.icon','admon.menus.f_creacion','admon.menus.f_modificacion',
            DB::raw("substr(admon.menus.icon, 2, length(admon.menus.icon) - 2)::json->>'file_thumbnail' as file_thumbnail")
        )->join('admon.roles_menus','admon.menus.id_menu','admon.roles_menus.id_menu')
            ->join('admon.roles','admon.roles.id_rol','admon.roles_menus.id_rol')
            ->where('admon.roles_menus.id_rol',Auth::user()->id_rol)
            ->where('admon.menus.activo',1)
            ->where('admon.menus.tipo_menu',1)
            //->whereIn('admon.roles.id_empresa',array($id_empresa_global,$conf))
            //->where('admon.menus.id_empresa',$conf)
            ->orderBy('admon.menus.secuencia')
            ->get();



        return response()->json([
            'status' => 'success',
            'result' => [
                'rows' => $menu_padres
            ],
            'messages' => null
        ]);
    }


    public function obtenerSubModulos(Request $request)
    {

        //$conf = session()->get('id_empresa');
        $sub_modulos = AdmonSecciones::with(['seccionMenus' => function($query) {
            $query->with('seccionMenu');
        }])->where('id_menu',$request->id_menu)->where('activo',1)->orderby('secuencia')->get();

        return response()->json([
            'status' => 'success',
            'result' => [
                'rows' => $sub_modulos
            ],
            'messages' => null
        ]);
    }

    public function obtenerListaReportes(Request $request)
    {

        $conf = session()->get('id_empresa');
        $menu_padres = AdmonMenus::select('admon.menus.id_menu')->join('admon.roles_menus','admon.menus.id_menu','admon.roles_menus.id_menu')
            ->join('admon.roles','admon.roles.id_rol','admon.roles_menus.id_rol')
            ->where('admon.roles.id_rol',Auth::user()->id_rol)
            ->where('admon.menus.activo',1)
            ->where('admon.menus.tipo_menu',4)
            ->where('admon.roles.id_empresa', '=', $conf)
            //->where('admon.menus.id_empresa', '=', $conf)
            ->orderBy('admon.menus.secuencia')
            ->get();



        return response()->json([
            'status' => 'success',
            'result' => [
                'rows' => $menu_padres
            ],
            'messages' => null
        ]);
    }



}