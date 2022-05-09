<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaChicaSolicitudViaticoDetalle extends Model
{
    public $timestamps = false;
    protected $table = 'cjachica.solicitud_viatico_detalle';
    protected $primaryKey='id_solicitud_viatico_detalle';
    protected $fillable = ['fecha_viatico','objetivo','monto_desayuno','monto_almuerzo','monto_cena','monto_transporte','monto_hospedaje','total'];
    protected $dateFormat = 'Y-m-d H:i:s.u';

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

    public function solicitudViatico()
    {
        return $this->belongsTo('App\Models\CajaChicaViaticos','id_viatico')
            ->select('id_viatico','descripcion','monto');
    }

}
