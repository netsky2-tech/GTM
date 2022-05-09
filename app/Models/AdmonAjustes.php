<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class AdmonAjustes extends Model {

	//protected $table = 'admon.ajustes_generales';
    protected $table = 'admon.ajustes';

	protected $primaryKey='id_ajuste';

	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';

}