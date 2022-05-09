<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoFacturasExportacionViaPagos extends Model {

	public $timestamps = false;
	protected $table = 'cjabnco.factura_exportacion_via_pagos';
	protected $primaryKey='id_factura_via';

}