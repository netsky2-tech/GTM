<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioBateriasAplicaciones extends Model
{
    public $timestamps = false;
    protected $table = 'inventario.baterias_aplicaciones';
    protected $primaryKey='id_aplicacion';
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

    public function obtener($request)
    {
        $bancos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $conf = session()->get('id_empresa');
            $bancos->where($searchField, 'ilike', '%' . $searchValue . '%');
            $bancos->where('id_empresa',$conf);
            $bancos->orderBy('id_aplicacion', 'asc');
        }
        return $bancos->paginate($request->limit);
    }


    public function aplicacionSubAplicaciones()
    {
        return $this->hasMany('App\Models\InventarioBateriasSubAplicaciones','id_aplicacion')->select('id_subaplicacion','id_aplicacion','descripcion');
    }

}
