<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadTiposCuenta extends Model
{
    protected $table = 'contabilidad.tipos_cuentas';
    protected $primaryKey='id_tipo_cuenta';
    protected $fillable = ['descripcion','tipo_abreviado','estado'];
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
     * Obtener Lista de Tipos Cuenta
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerTiposCuenta($request)
    {
        $tiposCuenta = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $tiposCuenta->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $tiposCuenta->with('tipoCuentaEstadoFinanciero');
        $tiposCuenta->orderBy('contabilidad.tipos_cuentas.id_tipo_cuenta');
        return $tiposCuenta->paginate($request->limit);
    }

    public function tipoCuentaEstadoFinanciero()
    {
        return $this->belongsTo('App\Models\ContabilidadEstadosFinancieros','id_estado_financiero');
    }


}
