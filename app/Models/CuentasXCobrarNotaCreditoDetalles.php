<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CuentasXCobrarNotaCreditoDetalles extends Model {

	protected $table = 'cuentasxcobrar.nota_credito_detalles';
	protected $primaryKey='id_nota_credito_detalle';
	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    public $timestamps = false;


	public function cuentaNotaCreditoDetalles()
    {
        return $this->belongsTo('App\Models\CuentasXCobrarNotaCredito','id_nota_credito');
    }

    public function notaCreditoTipo()
    {
        return $this->belongsTo('App\Models\CuentasXCobrarTiposNotasCredito','id_tipo_nota_credito');
    }
}