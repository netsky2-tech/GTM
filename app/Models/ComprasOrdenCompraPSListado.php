<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ComprasOrdenCompraPSListado extends Model {

	public $timestamps = false;
	protected $table = 'compra.ordenes_servicios_listado';
	protected $primaryKey='id_orden_servicio_detalle';

    public function servicioClasificacion()
    {
        return $this->belongsTo('App\Models\ComprasClasificacionCompras','id_clasificacion_servicio')->select('id_clasificacion_servicio','descripcion','id_cuenta_contable')->with('clasificacionCompraCuentaContable');
    }
}