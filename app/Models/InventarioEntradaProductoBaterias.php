<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioEntradaProductoBaterias extends Model {

	public $timestamps = false;
	protected $table = 'inventario.entrada_producto_baterias';
	protected $primaryKey='id_entrada_producto_bateria';

    public function entrada()
    {
        return $this->belongsTo('App\Models\InventarioEntradaProductos','id_entrada_producto');
    }

    public function bateria()
    {
        return $this->belongsTo('App\Models\InventarioBaterias','id_bateria');
    }
}