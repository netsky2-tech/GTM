<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoFacturasExportacionProductos extends Model {

	public $timestamps = false;
	protected $table = 'cjabnco.facturas_exportacion_detalles';
	protected $primaryKey='id_factura_exportacion_detalle';
	/*const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';*/

    public function bodegaProducto()
    {
        return $this->belongsTo('App\Models\InventarioBodegaProductos','id_bodega_producto');
    }
}