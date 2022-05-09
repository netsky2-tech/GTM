<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioSalidaProductoBaterias extends Model {

	public $timestamps = false;
	protected $table = 'inventario.salida_producto_baterias';
	protected $primaryKey='id_salida_producto_bateria';

    public function salida()
    {
        return $this->belongsTo('App\Models\InventarioSalidaProductos','id_salida_producto');
    }

    public function bateria()
    {
        return $this->belongsTo('App\Models\InventarioBaterias','id_bateria');
    }
}