<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioUnidadMedida extends Model
{
    protected $table = 'inventario.unidades_medidas';
    protected $primaryKey='id_unidad_medida';
    protected $fillable = ['unidad_medida','u_grabacion','activo'];
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
        $users = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $users->where($searchField, 'ilike', '%' . $searchValue . '%');
            $users->where(function ($query){
                $conf = session()->get('id_empresa');
                $query->where('id_empresa',$conf)
                    ->orwhere('id_empresa',0);
            });
            if($statusValue == 0){
                $users->where('activo',true);
            }
            $users->with('unidadMedidad');
            $users->orderBy('id_unidad_medida', 'asc');
        }
        return $users->paginate($request->limit);
    }
    public function unidadMedidad()
    {
        return $this->belongsTo('App\Models\InventarioUnidadMedidaEstandar','id_clasificacion_unidad_medida');
    }

}
