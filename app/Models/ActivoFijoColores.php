<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ActivoFijoColores extends Model
{
    const CREATED_AT = 'f_grabacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'activofijo.colores';
    protected $dateFormat = 'Y-m-d H:i:s.u';
    protected $primaryKey='id_color';
    protected $fillable = ['descripcion','u_grabacion','activo'];

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
     * Obtener Listado de Colores
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtener($request)
    {
        $bancos = $this->select(['id_color','descripcion','activo']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            if($statusValue == 0){
                $bancos->where('activo',true);
            }
            $bancos->where($searchField, 'ilike', '%' . $searchValue . '%');
            $bancos->orderBy('id_color', 'asc');
        }
        return $bancos->paginate($request->limit);
    }

}
