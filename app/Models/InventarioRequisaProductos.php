<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioRequisaProductos extends Model {

	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
	protected $table = 'inventario.requisas_productos';
	protected $primaryKey='id_requisa_producto';

    public function bodegaProducto()
    {
        return $this->belongsTo('App\Models\InventarioBodegaProductos','id_bodega_producto');
    }
}