<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioOrigen extends Model
{
    protected $table = 'inventario.origenes';
    protected $primaryKey='id_origen';
    protected $fillable = ['origen','descripcion'];
    const CREATED_AT = 'f_grabacion';
    const UPDATED_AT = 'f_modificacion';
    protected $dateFormat = 'Y-m-d H:i:s.u';
    /**
     * Replace Field
     *
     * @access 	public
     * @param 	
     * @return 	string
     * @author rsequeira
     */

	public function replaceField($field, $fields = [])
    {
        if (in_array($field, $fields)) {
            return $fields[$field];
        }

        return $field;
    }

    /**
     * Obtener Listado de origenes
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     * @author rsequeira
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
                $um->where('activo',1);
            }
            $um->orderBy('id_origen', 'asc');
        }
        return $um->paginate($request->limit);
    }

}
