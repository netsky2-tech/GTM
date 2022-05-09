<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioBateriasUsadas extends Model {

	public $timestamps = false;
	protected $table = 'inventario.baterias_usadas';
	protected $primaryKey='id_bateria_usada';

    public function obtenerCodigoBateria($id_producto)
    {
        $codigo = $this->select([DB::raw("COALESCE(max(secuencia::integer),0)+1 as secuencia")])->where('id_producto',$id_producto);
        return $codigo->first();
    }

    public function bateriaProducto()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto')->select('id_producto','descripcion');
    }

    public function bateriaBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega');
    }
}