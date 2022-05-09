<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioMovimientosBaterias extends Model {

	public $timestamps = false;
	protected $table = 'inventario.v_movimiento_bateria';
	protected $primaryKey='identificador';
    protected $keyType = 'string';
}