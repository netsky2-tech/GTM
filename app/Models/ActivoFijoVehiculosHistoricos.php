<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

 class ActivoFijoVehiculosHistoricos extends Model
{
   public $timestamps=false;
    protected $table = 'activofijo.vehiculos_historicos';
    protected $primaryKey='id_vehiculo';

}
