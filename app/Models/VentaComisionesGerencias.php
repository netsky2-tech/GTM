<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class VentaComisionesGerencias extends Model
{
    public $timestamps = false;
    protected $table = 'venta.comisiones_gerencias_politicas';
    protected $primaryKey='id_comision_gerencia_politica';

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
