<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadPeriodoFiscal extends Model
{
    protected $table = 'contabilidad.periodos_fiscales';
    protected $primaryKey='id_periodo_fiscal';
    protected $fillable = ['id_periodo_fiscal','descripcion', 'periodo','estado'];
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
     * Obtener Periodos contables
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtener($request)
    {
        $periodos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $periodos->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $periodos->with('mesesPeriodo');
        $periodos->orderby('periodo','desc');
        return $periodos->paginate($request->limit);
    }

    public function mesesPeriodo()
    {
        return $this->hasMany('App\Models\ContabilidadPeriodoMeses','id_periodo_fiscal')
            ->select('id_periodo_fiscal','descripcion','id_periodo_mes','mes','estado',
            DB::raw("contabilidad.ultimo_dia_mes(id_periodo_mes)"),
                DB::raw("case when mes=1 then 'Enero' when mes=2 then 'Febrero' when mes=3 then 'Marzo' when mes=4 then 'Abril'
                 when mes=5 then 'Mayo' when mes=6 then 'Junio' when mes=7 then 'Julio' when mes=8 then 'Agosto' 
                  when mes=9 then 'Septiembre' when mes=10 then 'Octubre' when mes=11 then 'Noviembre' when mes=12 then 'Diciembre' end as mes_letras"))->orderby('mes');
    }
}
