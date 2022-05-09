<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ActivoFijoGrupos extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'activofijo.grupos_activos';
    protected $primaryKey='id_grupo_activo';
    protected $fillable = ['descripcion','u_creacion','activo'];
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
     * Obtener Listado de Grupos de activo
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtener($request)
    {
        $grupos_activos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $grupos_activos->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
            $grupos_activos->where('activo',true);
            }
            $grupos_activos->orderBy('id_grupo_activo', 'asc');
        }
        return $grupos_activos->paginate($request->limit);
    }

}
