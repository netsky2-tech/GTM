<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoEstadoCuentaBancoMovimientos extends Model
{
    public $timestamps=false;
    protected $table = 'cjabnco.estados_cuenta_bancaria_movimientos';
    protected $primaryKey='id_estado_cuenta_banco_mov';

}
