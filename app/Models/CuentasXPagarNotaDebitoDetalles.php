<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CuentasXPagarNotaDebitoDetalles extends Model {

	protected $table = 'cuentasxpagar.nota_debito_detalles';
	protected $primaryKey='id_nota_debito_detalle';
	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    public $timestamps = false;


	public function cuentaNotaDebitoDetalles()
    {
        return $this->belongsTo('App\Models\CuentasXPagarNotaDebito','id_nota_debito');
    }

    public function notaDebitoTipo()
    {
        return $this->belongsTo('App\Models\CuentasXPagarTiposNotasDebito','id_tipo_nota_debito');
    }
}