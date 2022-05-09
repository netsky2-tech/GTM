<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class VentaArqueoCajaDocumentos extends Model
{
    public $timestamps=false;
    protected $table = 'venta.arqueo_caja_documentos';
    protected $primaryKey='id_arqueo_documento';

}
