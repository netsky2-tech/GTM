<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioTipoBodega extends Model
{
    const CREATED_AT = 'f_grabacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'inventario.tipos_bodegas';
    protected $primaryKey='id_tipo_bodega';
    protected $fillable = ['descripcion','u_grabacion','u_modificacion','estado'];
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
     * Obtener Listado de Tipos de entrada
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerTiposBodega($request)
    {
        $users = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $users->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $users->where('id_empresa',$conf)->orWhere('id_empresa',null);
            if($statusValue == 0){
                $users->where('estado',true);
            }
            $users->orderBy('id_tipo_bodega', 'asc');
        }
        return $users->paginate($request->limit);
    }

}
