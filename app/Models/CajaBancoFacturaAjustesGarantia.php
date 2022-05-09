<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoFacturaAjustesGarantia extends Model {

	public $timestamps = false;
	protected $table = 'cjabnco.facturas_ajustes_garantia';
	protected $primaryKey='id_factura_ajuste_garantia';
	/*const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';*/

}