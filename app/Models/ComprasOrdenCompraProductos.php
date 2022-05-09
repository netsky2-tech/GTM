<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ComprasOrdenCompraProductos extends Model {

	public $timestamps = false;
	protected $table = 'compra.ordenes_compras_productos';
	protected $primaryKey='id_orden_compra_producto';

    public function ordenCompraProducto()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto')->select('id_producto','descripcion','codigo_sistema','id_unidad_medida')->with('unidadMedida');
    }

    public function ordenCompraProductoBateria()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto')->select('id_producto','descripcion','codigo_sistema','id_unidad_medida','dai','isc')->with('unidadMedida')->with('productoDetallesBaterias');
    }

}