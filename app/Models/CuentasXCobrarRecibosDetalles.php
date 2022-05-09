<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CuentasXCobrarRecibosDetalles extends Model {

	protected $table = 'cuentasxcobrar.recibos_ingresos_detalles';
	protected $primaryKey='id_recibo_detalle';
	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    public $timestamps = false;


	public function cuentaReciboDetalle()
    {
        return $this->belongsTo('App\Models\CuentasXCobrarRecibos','id_recibo');
    }
}