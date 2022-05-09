<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioGrado extends Model
{
    protected $table = 'inventario.grados';
    protected $primaryKey='id_grado';
    protected $fillable = ['grado'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
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
     * Obtener Listado de unidad de medida
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtener($request)
    {
        $um = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $um->where($searchField, 'ilike', '%' . $searchValue . '%');
            $um->where(function ($query){
                $conf = session()->get('id_empresa');
               $query->where('id_empresa',$conf)
                   ->orwhere('id_empresa',0);
            });
            if($statusValue == 0){
                $um->where('estado',1);
            }
            $um->orderBy('id_grado', 'asc');
        }
        return $um->paginate($request->limit);
    }

}
