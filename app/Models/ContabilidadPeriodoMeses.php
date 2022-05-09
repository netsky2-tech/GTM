<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadPeriodoMeses extends Model
{
    protected $table = 'contabilidad.periodos_meses';
    protected $primaryKey='id_periodo_mes';
    protected $fillable = ['descripcion','mes','estado'];
    public $timestamps = false;

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
     * Obtener Lista de Meses
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerMesesPeriodo($request)
    {
        $meses = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $meses->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $meses->with('periodoFiscal');
        return $meses->paginate($request->limit);
    }


    public function periodoFiscal()
    {
        return $this->belongsTo('App\Models\ContabilidadPeriodoFiscal','id_periodo_fiscal');
    }

}
