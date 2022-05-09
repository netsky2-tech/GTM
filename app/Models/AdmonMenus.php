<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;
use Auth;

class AdmonMenus extends Model {

	protected $table = 'admon.menus';
    protected $primaryKey='id_menu';
    protected $fillable = ['id_menu', 'id_menu_padre','nombre_menu', 'menu_seccion', 'nombre_route', 'icon','estado','id_empresa'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $dateFormat = 'Y-m-d H:i:s.u';
       /**
     * Replace Field
     *
     * @access 	public
     * @param 	
     * @return 	string
     */

	public function replaceField($field, $fields = [])
    {
        if (in_array($field, $fields)) {
            return $fields[$field];
        }

        return $field;
    }

     /**
     * Obtener lista de Menus
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerMenus($request)
    {
        $menus = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $conf = session()->get('id_empresa');
            $menus->where($searchField, 'ilike', '%' . $searchValue . '%');
            //$menus->where('admon.menus.activo',1);
            $menus->whereIn('admon.menus.tipo_menu', array(1,2));
            $menus->orderBy('admon.menus.id_menu', 'asc');
        }
        return $menus->paginate($request->limit);
    }

    /* RELACION MENU - PERMISOS */
/*	public function permisos()
    {
        return $this->hasMany('App\Models\AdmonPermisos');
    }*/

      /* RELACION MENU - Menu padre */
	public function subMenus()
    {
        return $this->hasMany('App\Models\AdmonMenus','id_menu_padre');
    }

    public function menuSecciones()
    {
        return $this->hasMany('App\Models\AdmonSecciones','id_menu');
    }

}