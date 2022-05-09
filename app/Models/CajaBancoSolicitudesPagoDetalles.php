<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoSolicitudesPagoDetalles extends Model {

	protected $table = 'cjabnco.solicitudes_pago_detalles';
	protected $primaryKey='id_solicitud_pago_detalle';
    public $timestamps = false;


	public function cuentaSolicitudDetalle()
    {
        return $this->belongsTo('App\Models\CajaBancoSolicitudesPago','id_solicitud_pago');
    }
}