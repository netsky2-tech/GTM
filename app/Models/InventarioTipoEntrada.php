<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioTipoEntrada extends Model
{
    protected $table = 'inventario.tipos_entradas';
    protected $primaryKey='id_tipo_entrada';
    protected $fillable = ['tipo_entrada','u_registra','estado'];
    const CREATED_AT = 'f_grabacion';
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
     * Obtener Listado de Tipos de entrada
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerTiposEntrada($request)
    {
        $users = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $users->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;
            $users->whereIn('id_empresa',array($conf,$id_empresa_global));
            if($statusValue == 0){
                $users->where('estado',true);
            }
            $users->orderBy('id_tipo_entrada', 'asc');
        }
        return $users->paginate($request->limit);
    }

}
