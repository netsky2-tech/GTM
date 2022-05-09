<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ComprasSolicitudCompraPSListado extends Model {

	public $timestamps = false;
	protected $table = 'compra.solicitudes_servicios_detalles';
	protected $primaryKey='id_solicitud_servicio_detalle';
}