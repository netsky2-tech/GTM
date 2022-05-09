<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class VentaComisionesAsignaciones extends Model
{
    public $timestamps = false;
    protected $table = 'venta.comisiones_asignaciones';
    protected $primaryKey='id_comision_asignacion';

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

    public function comisionMarca()
    {
        return $this->belongsTo('App\Models\InventarioBateriasMarcas','id_marca');
    }

}
