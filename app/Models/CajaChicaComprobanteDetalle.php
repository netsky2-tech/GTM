<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaChicaComprobanteDetalle extends Model
{
    public $timestamps = false;
    protected $table = 'cjachica.comprobante_detalles';
    protected $primaryKey='id_comprobante_detalle';
    protected $fillable = ['monto','factura','nombre_comercio','numero_ruc'];
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
