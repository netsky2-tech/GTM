<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class VentaPrecioListaGrupo extends Model
{
    const CREATED_AT = 'f_grabacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'venta.precios_listas_grupos';
    protected $primaryKey='id_precio_lista_grupos';
    protected $fillable = ['descripcion','activo'];
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

    public function obtenerListaGrupo($request)
    {
        $lista = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $lista->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $lista->where('activo',true);
            }
            $lista->with('ListaTipoProducto');
            $lista->orderBy('id_precio_lista_grupos', 'asc');
        }
        return $lista->paginate($request->limit);
    }

    public function ListaTipoProducto()
    {
        return $this->belongsTo('App\Models\InventarioTiposProductos','id_tipo_producto');
    }


}
