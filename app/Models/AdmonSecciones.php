<?php

namespace App\Models;

use Auth;
use DB, Illuminate\Database\Eloquent\Model;

class AdmonSecciones extends Model
{
    protected $table = 'admon.secciones';
    protected $primaryKey='id_seccion';

   public $timestamps=false;

    public function seccionMenus()
    {
        //return $this->hasMany('App\Models\AdmonSeccionesMenus','id_seccion');

        return $this->hasMany('App\Models\AdmonSeccionesMenus','id_seccion')
            ->select('admon.secciones_menu.id_seccion_menu','admon.secciones_menu.id_seccion','admon.secciones_menu.id_menu',
                'admon.menus.nombre_menu','admon.menus.secuencia')
            ->leftJoin('admon.menus', 'admon.secciones_menu.id_menu','admon.menus.id_menu')
            /*->where('admon.menus.activo',true)*/
            //->where('admon.menus.id_empresa', 'admon.empresas.id_empresa')
            //->where('admon.secciones.id_empresa', 'admon.empresas.id_empresa')
            ->orderby('admon.menus.secuencia');

             //   DB::raw("(select m.secuencia from admon.menus m where m.id_menu=admon.secciones_menu.id_menu) as secuencia"))
            //->orderBy('secuencia');

    }

}
