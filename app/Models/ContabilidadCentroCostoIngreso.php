<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadCentroCostoIngreso extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'contabilidad.centros_costos_ingresos';
    protected $primaryKey='id_centro';
    protected $fillable = ['tipo_centro','descripcion','codigo','secuencia','u_creacion','estado'];
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
     * Obtener Listado de centros de costo | ingresos
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerCentroCostoIngreso($request)
    {
        $centros = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $centros->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $centros->where('estado',true);
            }
            $centros->orderBy('tipo_centro', 'asc');
            $centros->orderBy('codigo', 'asc');
        }
        return $centros->paginate($request->limit);
    }

    public function obtenerCodigo($tipo_centro,$ubicacion,$clasificacion_contable)
    {
       //print_r($request);
        $codigo = $this->select([DB::raw("COALESCE(max(secuencia),0)+1 as secuencia")])
            ->where('tipo_centro',$tipo_centro)
            ->where('ubicacion',$ubicacion)
            ->where('clasificacion_contable',$clasificacion_contable);
        return $codigo->first();
    }
}
