<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CuentasXCobrarReciboViaPagos extends Model {

	public $timestamps = false;
	protected $table = 'cuentasxcobrar.recibos_via_pagos';
	protected $primaryKey='id_recibo_via';

}