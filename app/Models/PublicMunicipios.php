<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class PublicMunicipios extends Model
{
    public $timestamps = false;
    protected $table = 'public.municipios';
    protected $primaryKey='id_municipio';
    protected $fillable = ['descripcion'];

    /**
     * Obtener Lista de Municipios
     *
     * @access 	public
     * @param
     * @return 	json(array)
     */



    public function obtener($request)
    {
        /*$municipios = $this->select(['users.*', 'groups.group_name']);*/
        $fields = [
            'descripcion' => 'public.municipios.descripcion',
            'departamento' => 'public.departamentos.descripcion',
        ];
        $municipios = $this->select(['public.municipios.*','public.departamentos.descripcion as departamento']);
        $municipios->leftJoin('public.departamentos', 'public.municipios.id_departamento', '=', 'public.departamentos.id_departamento');
        if (!empty($request->search['field'])) {
            //echo $this->replaceField($request->search['field'], $fields);
            $searchField = $this->replaceField($request->search['field'], $fields);
            $searchValue = $request->search['value'];
            //$searchField = $request->search['field'];
            //$searchValue = $request->search['value'];
            $municipios->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        //$municipios->with('departamentoMunicipio');
        $municipios->orderby('id_municipio');
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

    public function departamentoMunicipio()
    {
        return $this->belongsTo('App\Models\PublicDepartamentos','id_departamento');
    }


}
