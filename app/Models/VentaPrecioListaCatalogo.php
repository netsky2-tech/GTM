<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class VentaPrecioListaCatalogo extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'venta.precios_listas_catalogos';
    protected $primaryKey='id_precio_lista_catalogo';
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

    public function obtenerListaCatalogo($request)
    {
        $lista = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $lista->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $lista->whereIn('estado',array(1,2));
            }
           // $lista->with('ListaProducto');
            $lista->orderBy('id_precio_lista_catalogo', 'asc');
        }
        return $lista->paginate($request->limit);
    }


    public function ListaProducto()
    {
        return $this->hasMany('App\Models\VentaPrecioListaBateria','id_precio_lista_catalogo');
    }

}
