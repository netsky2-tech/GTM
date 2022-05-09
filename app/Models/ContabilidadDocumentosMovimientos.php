<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadDocumentosMovimientos extends Model {

	protected $table = 'contabilidad.documentos_cuentas';
	protected $primaryKey='id_documento_cuenta';
	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    public $timestamps = false;


	public function cuentaContable()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasContablesVista','id_cuenta_contable');
    }

    public function centroCosto()
    {
        return $this->belongsTo('App\Models\ContabilidadCentroCostoIngreso','id_centro')->select('id_centro','codigo','descripcion');
    }
}