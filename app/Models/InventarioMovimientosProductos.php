<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioMovimientosProductos extends Model {

	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
	protected $table = 'inventario.movimientos_productos';
	protected $primaryKey='id_movimiento';

}