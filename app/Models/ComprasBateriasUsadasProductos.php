<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ComprasBateriasUsadasProductos extends Model {

	public $timestamps = false;
	protected $table = 'compra.compra_baterias_usadas_productos';
	protected $primaryKey='id_compra_usado_producto';


    public function compraBateriaProducto()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto')->select('id_producto','descripcion','codigo_sistema','id_unidad_medida','dai','isc')->with('unidadMedida')->with('productoDetallesBaterias');
    }

}