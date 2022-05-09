<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ComprasSolicitudCompraProductos extends Model {

	public $timestamps = false;
	protected $table = 'compra.solicitudes_compras_productos';
	protected $primaryKey='id_solicitud_compra_producto';

    public function solicitudProducto()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto')->select('id_producto','descripcion','codigo_sistema','id_unidad_medida')->with('unidadMedida');
    }

    public function solicitudProveedor()
    {
        return $this->belongsTo('App\Models\InventarioProveedores','id_proveedor')->select('id_proveedor','nombre_comercial');
    }
}