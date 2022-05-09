<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CuentasXPagarNotaCreditoDetalles extends Model {

	protected $table = 'cuentasxpagar.nota_credito_detalles';
	protected $primaryKey='id_nota_credito_detalle';
	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    public $timestamps = false;


	public function cuentaNotaCreditoDetalles()
    {
        return $this->belongsTo('App\Models\CuentasXPagarNotaCredito','id_nota_credito');
    }

    public function notaCreditoTipo()
    {
        return $this->belongsTo('App\Models\CuentasXPagarTiposNotasCredito','id_tipo_nota_credito');
    }
}