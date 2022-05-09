<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadCierresMensuales extends Model
{
    protected $table = 'contabilidad.cierres_mensuales';
    protected $primaryKey='id_cierre_mensual';
    public $timestamps = false;

    /**
     * Replace Field
     *
     * @access 	public
     * @param 	
     * @return 	string
     */


    public function periodoFiscal()
    {
        return $this->belongsTo('App\Models\ContabilidadPeriodoFiscal','id_periodo_fiscal');
    }

}
