<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoConciliacionesMovimientos extends Model
{
    public $timestamps=false;
    protected $table = 'cjabnco.conciliaciones_movimientos';
    protected $primaryKey='id_conciliacion_movimiento';

}
