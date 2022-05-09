<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioProductoProveedor extends Model {

	protected $table = 'inventario.productos_proveedores';
	protected $primaryKey='id_producto_proveedor';
	public $timestamps = false;

	public function proveedores()
    {
        return $this->belongsTo('App\Models\InventarioProveedores','id_proveedor');
    }
}