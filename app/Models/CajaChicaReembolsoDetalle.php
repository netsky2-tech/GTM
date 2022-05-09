<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaChicaReembolsoDetalle extends Model
{
    public $timestamps = false;
    protected $table = 'cjachica.solicitud_reembolso_detalle';
    protected $primaryKey='id_solicitud_reembolso_detalle';
    protected $fillable = ['no_comprobante','beneficiario','descripcion','valor','total','id_comprobante'];
    //protected $dateFormat = 'Y-m-d H:i:s.u';

    /**
     * Replace Field
     *
     * @access 	public
     * @param 	
     * @return 	string
     */


	public function replaceField($field, $fields = [])
    {
        if (in_array($field, $fields)) {
            return $fields[$field];
        }

        return $field;
    }
}
