<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class VentaTiposCliente extends Model
{
    const CREATED_AT = 'f_grabacion';
    protected $table = 'venta.tipos_clientes';
    protected $primaryKey='id_tipo_cliente';
    protected $fillable = ['descripcion'];

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

    public function obtenerTiposClientes($request)
    {
        $zonas = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $zonas->where($searchField, 'ilike', '%' . $searchValue . '%');
            $zonas->orderBy('id_zona', 'asc');
        }
        return $zonas->paginate($request->limit);
    }

}
