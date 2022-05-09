<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadAnexos extends Model
{
    protected $table = 'contabilidad.anexos';
    protected $primaryKey='id_anexo';
    protected $fillable = ['nombre_anexo','posicion_anexo','estado'];
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
     * Obtener Lista de Anexos
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerAnexos($request)
    {
        $anexos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $anexos->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $anexos->with('anexosEstadoFinanciero');
        $anexos->orderBy('contabilidad.anexos.id_anexo');
        return $anexos->paginate($request->limit);
    }

    public function anexosEstadoFinanciero()
    {
        return $this->belongsTo('App\Models\ContabilidadEstadosFinancieros','id_estado_financiero');
    }

}
