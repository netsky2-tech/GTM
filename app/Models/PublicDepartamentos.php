<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class PublicDepartamentos extends Model
{
    protected $table = 'public.departamentos';
    protected $primaryKey='id_departamento';
    protected $fillable = ['descripcion'];
    public $timestamps = false;
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

    public function obtenerDepartamentos($request)
    {
        $bancos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $bancos->where($searchField, 'ilike', '%' . $searchValue . '%');
            $bancos->orderBy('id_departamento', 'asc');
        }
        return $bancos->paginate($request->limit);
    }


    public function municipiosDepartamento()
    {
        return $this->hasMany('App\Models\PublicMunicipios','id_departamento')->orderby('id_municipio');
    }

}
