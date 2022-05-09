<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class PublicZonas extends Model
{
    const CREATED_AT = 'f_grabacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'public.zonas';
    protected $primaryKey='id_zona';
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

    public function obtenerCodigoZona()
    {
        $codigo = $this->select([DB::raw("COALESCE(max(codigo::integer),0)+1 as secuencia")]);
        return $codigo->first();
    }

    /**
     * Obtener Listado de Paises
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerZonas($request)
    {
        $zonas = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $zonas->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $zonas->where('activo',true);
            }
            $zonas->orderBy('id_zona', 'asc');
        }
        return $zonas->paginate($request->limit);
    }

    public function zonaCentroCosto()
    {
        return $this->belongsTo('App\Models\ContabilidadCentroCostoIngreso','id_centro_costo')->select('id_centro','descripcion','codigo',DB::raw("concat(codigo,' ',descripcion) as descripcion_completa"));
    }


    public function zonaCentroIngreso()
    {
        return $this->belongsTo('App\Models\ContabilidadCentroCostoIngreso','id_centro_ingreso')->select('id_centro','descripcion','codigo',DB::raw("concat(codigo,' ',descripcion) as descripcion_completa"));
    }


}
