<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioBateriasSubAplicaciones extends Model
{
    public $timestamps = false;
    protected $table = 'inventario.baterias_subaplicaciones';
    protected $primaryKey='id_subaplicacion';

    /**
     * Obtener Lista de Municipios
     *
     * @access 	public
     * @param
     * @return 	json(array)
     */



    public function obtener($request)
    {
        $fields = [
            'descripcion' => 'inventario.baterias_subaplicaciones.descripcion',
            'aplicacion' => 'inventario.baterias_aplicaciones.descripcion',
        ];
        $municipios = $this->select(['inventario.baterias_subaplicaciones.*','inventario.baterias_aplicaciones.descripcion as aplicacion']);
        $municipios->leftJoin('inventario.baterias_aplicaciones', 'inventario.baterias_subaplicaciones.id_aplicacion', '=', 'inventario.baterias_aplicaciones.id_aplicacion');
        if (!empty($request->search['field'])) {
            $searchField = $this->replaceField($request->search['field'], $fields);
            $searchValue = $request->search['value'];
            $municipios->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $municipios->where('id_empresa',$conf);
        }
        //$municipios->with('departamentoMunicipio');
        $municipios->orderby('id_subaplicacion');
        return $municipios->paginate($request->limit);
    }

    /**
     * Replace Field
     *
     * @access 	public
     * @param
     * @return 	string
     */

	public function replaceField($field, $fields = [])
    {
        if (array_key_exists($field, $fields)) {
            return $fields[$field];
        }

        return $field;
    }

    public function aplicacionSubAplicacion()
    {
        return $this->belongsTo('App\Models\InventarioBateriasAplicaciones','id_aplicacion');
    }


}
