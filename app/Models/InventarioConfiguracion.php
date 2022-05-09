<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioConfiguracion extends Model {

	public $timestamps = false;
    protected $table = 'inventario.configuracion';

	protected $primaryKey='id_configuracion';

}