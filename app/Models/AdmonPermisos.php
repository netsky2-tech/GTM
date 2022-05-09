<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class AdmonPermisos extends Model {

    public $table = 'admon.roles_menus';
    protected $primaryKey = 'id_rol_menu';
	public $timestamps = false;

}
