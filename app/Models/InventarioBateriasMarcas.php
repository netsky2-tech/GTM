<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioBateriasMarcas extends Model
{
    public $timestamps = false;
    protected $table = 'inventario.baterias_marcas';
    protected $primaryKey='id_marca';
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
            $bancos->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $bancos->where('id_empresa',$conf);
            $bancos->orderBy('id_marca', 'asc');
        }
        return $bancos->paginate($request->limit);
    }


    public function marcaSubMarcas()
    {
        return $this->hasMany('App\Models\InventarioBateriasSubMarcas','id_marca')->select('id_submarca','id_marca','descripcion');
    }

}
