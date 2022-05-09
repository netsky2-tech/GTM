<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CuentasXCobrarNotaDebitoDetalles extends Model {

	protected $table = 'cuentasxcobrar.nota_debito_detalles';
	protected $primaryKey='id_nota_debito_detalle';
	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    public $timestamps = false;


	public function cuentaNotaDebitoDetalles()
    {
        return $this->belongsTo('App\Models\CuentasXCobrarNotaDebito','id_nota_debito');
    }

    public function notaDebitoTipo()
    {
        return $this->belongsTo('App\Models\CuentasXCobrarTiposNotasDebito','id_tipo_nota_debito');
    }
}