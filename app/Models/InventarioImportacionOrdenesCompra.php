<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioImportacionOrdenesCompra extends Model {

    public $timestamps = false;
	protected $table = 'inventario.importaciones_ordenes_compras';
	protected $primaryKey='id_importacion_orden_compra';

}