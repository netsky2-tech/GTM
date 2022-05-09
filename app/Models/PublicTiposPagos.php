<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class PublicTiposPagos extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'public.tipos_pagos';
    protected $primaryKey='id_tipo_pago';
    protected $fillable = ['descripcion','estado'];
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

    /**
     * Obtener Listado de Paises
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerTiposPago($request)
    {
        $tipos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $tipos->where($searchField, 'ilike', '%' . $searchValue . '%');
            $tipos->orderBy('id_tipo_pago', 'asc');
        }
        return $tipos->paginate($request->limit);
    }

}
