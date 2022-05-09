<?php 

namespace App\Models;

use Auth;
use DB, Illuminate\Database\Eloquent\Model;

class AdmonSeccionesMenus extends Model {

    public $table = 'admon.secciones_menu';
    protected $primaryKey = 'id_seccion_menu';
	public $timestamps = false;

    public function seccionMenu()
    {
        return $this->belongsTo('App\Models\AdmonMenus','id_menu')
            ->select('admon.menus.id_menu','admon.menus.secuencia','admon.menus.tipo_menu','admon.menus.nombre_menu','admon.menus.nombre_route',
                DB::raw("substr(admon.menus.icon, 2, length(admon.menus.icon) - 2)::json->>'file_thumbnail' as file_thumbnail"))
            ->join('admon.roles_menus','admon.menus.id_menu','admon.roles_menus.id_menu')
            ->join('admon.roles','admon.roles.id_rol','admon.roles_menus.id_rol')
            ->where('admon.roles.id_rol',Auth::user()->id_rol)
            ->where('admon.menus.activo',1)
            //->where('admon.menus.id_empresa', '=', $request->id_empresa)
            //->where('admon.roles_menus.id_empresa', '=', $request->id_empresa)
            //->where('admon.roles.id_empresa', '=', $request->id_empresa)
            ->whereIn('admon.menus.tipo_menu',array(2))
            ->orderBy('admon.menus.secuencia');
    }

    public function listaMenus()
    {
        return $this->hasMany('App\Models\AdmonMenus','id_menu');
    }

    public function menuDetalle()
    {
        return $this->belongsTo('App\Models\AdmonMenus','id_menu')->with(['menuSecciones' => function($query) {$query->with('seccionMenus');}])->orderby('secuencia');;
    }

}

