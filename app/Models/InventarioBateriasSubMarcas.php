<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioBateriasSubMarcas extends Model
{
    public $timestamps = false;
    protected $table = 'inventario.baterias_submarcas';
    protected $primaryKey='id_submarca';

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
            'descripcion' => 'inventario.baterias_submarcas.descripcion',
            'marca' => 'inventario.baterias_marcas.descripcion',
        ];
        $municipios = $this->select(['inventario.baterias_submarcas.*','inventario.baterias_marcas.descripcion as marca']);
        $municipios->leftJoin('inventario.baterias_marcas', 'inventario.baterias_submarcas.id_marca', '=', 'inventario.baterias_marcas.id_marca');
        if (!empty($request->search['field'])) {
            $searchField = $this->replaceField($request->search['field'], $fields);
            $searchValue = $request->search['value'];
            $municipios->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $municipios->where('id_empresa',$conf);
        }
        //$municipios->with('departamentoMunicipio');
        $municipios->orderby('id_submarca');
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

    public function marcaSubMarca()
    {
        return $this->belongsTo('App\Models\InventarioBateriasMarcas','id_marca');
    }


}
