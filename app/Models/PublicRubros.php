<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class PublicRubros extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'public.rubros';
    protected $primaryKey='id_rubro';
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

    public function obtenerRubros($request)
    {
        $bancos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $bancos->where($searchField, 'ilike', '%' . $searchValue . '%');
            $bancos->orderBy('codigo', 'asc');
        }
        return $bancos->paginate($request->limit);
    }

}
