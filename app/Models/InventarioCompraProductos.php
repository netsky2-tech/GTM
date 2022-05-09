<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioCompraProductos extends Model {

	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
	protected $table = 'inventario.entradas_productos';
	protected $primaryKey='id_entrada_producto';

    public function bodegaProducto()
    {
        return $this->belongsTo('App\Models\InventarioBodegaProductos','id_bodega_producto');
    }
}