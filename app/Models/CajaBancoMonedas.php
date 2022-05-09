<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CajaBancoMonedas extends Model
{
    protected $table = 'cjabnco.monedas';
    protected $primaryKey='id_moneda';
   
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';

    protected $fillable = [
        'codigo', 'nombre', 'decimales'
    ];

    protected $hidden = [
        'f_creacion', 'f_modificacion'
    ];

   /* public function obtenerTextoMoneda()
    {
        return $this->attributes['nombre'].' ('.$this->attributes['codigo'].')';
    }

    protected $appends = ['text'];*/
}
