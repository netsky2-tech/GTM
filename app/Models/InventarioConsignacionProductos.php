<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioConsignacionProductos extends Model {

	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
	protected $table = 'inventario.consignacion_productos';
	protected $primaryKey='id_consignacion';

}