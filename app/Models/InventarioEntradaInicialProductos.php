<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioEntradaInicialProductos extends Model {

	protected $table = 'inventario.entradas_inicial_productos';
	protected $primaryKey='id_entrada_inicial_producto';
	public $timestamps = false;

    public function productoSimple()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto')->select('id_producto','codigo_sistema','nombre_comercial',DB::raw("CONCAT( '(',inventario.productos.codigo_sistema,') ', inventario.productos.nombre_comercial) AS text"));
    }
}

