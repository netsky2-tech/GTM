<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioCategoriasProductos extends Model
{
    protected $table = 'inventario.categorias_productos';
    protected $primaryKey='id_categoria';
    protected $fillable = ['nombre_categoria', 'descripcion', 'activo'];
    protected $dateFormat = 'Y-m-d H:i:s.u';
    
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';

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
     * Obtener Lista de Proveedores
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtener($request)
    {
        $categorias = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $categorias->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $categorias->where('id_empresa',$conf);
            if($statusValue == 0){
                $categorias->where('activo',true);
            }
            $categorias->orderBy('id_categoria', 'asc');
        }
        return $categorias->paginate($request->limit);
    }

}
