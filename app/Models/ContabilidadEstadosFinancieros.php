<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadEstadosFinancieros extends Model
{
    protected $table = 'contabilidad.estados_financieros';
    protected $primaryKey='id_estado_financiero';
    protected $fillable = ['nombre_estado_finaciero','estado'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';

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

    /**
     * Obtener Lista de Estados Financieros
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerEstadosFinancieros($request)
    {
        $estados_financieros = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $estados_financieros->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        return $estados_financieros->paginate($request->limit);
    }

    public function listadoAnexos()
    {
        return $this->hasMany('App\Models\ContabilidadAnexos','id_estado_financiero');
    }


}
