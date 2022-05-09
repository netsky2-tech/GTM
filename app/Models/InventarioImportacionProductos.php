<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioImportacionProductos extends Model {

	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
	protected $table = 'inventario.importaciones_producto';
	protected $primaryKey='id_importacion_producto';

	public function producto()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto');
    }
}