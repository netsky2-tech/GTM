<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CuentasXCobrarCuentasXCobrarImportData extends Model {

	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
	protected $table = 'cuentasxcobrar.cuentasxcobrar_import_data';
	protected $primaryKey='id_cuentasxcobrar_import';


}