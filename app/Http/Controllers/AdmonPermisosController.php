<?php 

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\AdmonPermisos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class AdmonPermisosController extends Controller
{
    /**
     * Obtener permisos por rol seleccionado
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerPermisos(Request $request)
	{
        $rules = [
            'id_rol' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
           // $conf = session()->get('id_empresa');
            //$permisos = AdmonPermisos::where('id_rol', '=', Auth::user()->id_rol)->get();
            $permisos = AdmonPermisos::where('id_rol', '=', $request->id_rol)->where('admon.menus.activo',true)
                ->join('admon.menus','admon.menus.id_menu','admon.roles_menus.id_menu')->get();
            $permisos = $permisos->map(function($permiso, $key) {
                return (int)$permiso['id_menu'];
            });

            return response()->json([
                'status' => 'success',
                'result' => $permisos,
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
     * Guardar permisos para el rol seleccionado
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

	public function guardarPermiso(Request $request)
	{
        $rules = [
            'id_rol' => 'required|integer|min:1'
        ];

        try{
        DB::beginTransaction();
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            //RRHHGruposFamiliares::where('id_trabajador',$trabajador->id_trabajador)->delete();
            AdmonPermisos::where('id_rol', '=', $request->id_rol)->delete();


            foreach ($request->menus as $id_menu) {
                $permisos = new AdmonPermisos;     
                $permisos->id_rol = $request->id_rol;
                $permisos->id_menu  = $id_menu;
                //$conf = session()->get('id_empresa');
                //$permisos->id_empresa = $conf;
                $permisos->save();
            }
            if(AdmonPermisos::where('id_menu',1)->where('id_rol',$request->id_rol)->exists()){
                DB::commit();
            }else{
                $permisos_principal = new AdmonPermisos;
                $permisos_principal->id_rol = $request->id_rol;
                $permisos_principal->id_menu  = 1;
                $permisos_principal->save();
                DB::commit();
            }

            DB::commit();


            return response()->json([
                'status' => 'success',
                'result' => null,
                'messages' => null
            ]);

        } else {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }

    } catch (Exception $e){
        DB::rollBack();
        return response()->json([
            'status' => 'error',
            'result' => 'Error de base de datos',
            'messages' => null
        ]);
    }
	}
}