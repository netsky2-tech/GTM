<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ActivoFijoVehiculos extends Model
{
   public $timestamps=false;
    protected $table = 'activofijo.vehiculos';
    protected $primaryKey='id_vehiculo';

}
