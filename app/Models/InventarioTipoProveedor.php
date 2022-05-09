<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioTipoProveedor extends Model
{
    const CREATED_AT = 'f_grabacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'inventario.tipos_proveedores';
    protected $primaryKey='id_tipo_proveedor';
    protected $fillable = ['descripcion','secuencia','clasificacion_contable','estado'];
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

    public function obtenerTiposProveedor($request)
    {
        $tipoProveedor = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $tipoProveedor->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;
            $tipoProveedor->whereIn('id_empresa',array($conf,$id_empresa_global));
            if($statusValue == 0){
                $tipoProveedor->where('estado',true);
            }
            $tipoProveedor->orderBy('id_tipo_proveedor', 'asc');
        }
        return $tipoProveedor->paginate($request->limit);
    }

}
