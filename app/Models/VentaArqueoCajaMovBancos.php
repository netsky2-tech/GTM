<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class VentaArqueoCajaMovBancos extends Model
{
    public $timestamps=false;
    protected $table = 'venta.arqueo_caja_mov_bancos';
    protected $primaryKey='id_arqueo_mov_banco';

}
