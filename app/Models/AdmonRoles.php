<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;
use Auth;
use App\Http\Controllers\SettingsController;

class AdmonRoles extends Model
{
    protected $table = 'admon.roles';
    protected $primaryKey='id_rol';
    protected $fillable = ['descripcion','activo','id_empresa'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';

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
     * Obtener lista de Roles
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */


    public function obtenerRoles($request)
    {
        $roles = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $conf = session()->get('id_empresa');
            $roles->where('id_empresa', '=', $conf)->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $roles->where('activo',true);
            }
            $roles->orderBy('admon.roles.id_rol', 'asc');
        }
        return $roles->paginate($request->limit);
    }

    /* RELACION ROLES - PERMISOS */
    public function permisos()
    {
        return $this->hasMany('App\Models\AdmonPermisos','id_rol');
    }

}
