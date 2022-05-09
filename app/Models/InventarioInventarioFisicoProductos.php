<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioInventarioFisicoProductos extends Model {

	public $timestamps= false;
	protected $table = 'inventario.inventarios_fisicos_productos';
	protected $primaryKey='id_inventario_fisico_producto';

	public function producto()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto')->select(['id_producto','codigo_consecutivo','codigo_sistema','condicion','costo_estandar','descripcion',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text")]);
    }
}