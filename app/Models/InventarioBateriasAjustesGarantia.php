<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioBateriasAjustesGarantia extends Model
{
    public $timestamps = false;
    protected $table = 'inventario.baterias_ajustes';
    protected $primaryKey='id_bateria_ajuste';

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

    public function obtener($request)
    {
        $bancos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $bancos->where($searchField, 'ilike', '%' . $searchValue . '%');
            $bancos->orderBy('id_bateria_ajuste', 'asc');
        }
        return $bancos->paginate($request->limit);
    }


    /*public function marcaSubMarcas()
    {
        return $this->hasMany('App\Models\InventarioBateriasSubMarcas','id_marca');
    }*/

}
