<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioConteoFisicoBaterias extends Model {

	protected $table = 'inventario.conteo_fisico_baterias';
	protected $primaryKey='id_conteo_fisico_bateria';
	public $timestamps = false;

    public function productoSimple()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto')->select('id_producto','nombre_comercial','codigo_sistema',DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text"));
    }
}

