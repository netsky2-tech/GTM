<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoFacturaViaPagos extends Model {

	public $timestamps = false;
	protected $table = 'cjabnco.factura_via_pagos';
	protected $primaryKey='id_factura_via';

}