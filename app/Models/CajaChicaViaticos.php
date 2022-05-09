<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaChicaViaticos extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjachica.viaticos';
    protected $primaryKey='id_viatico';
    protected $fillable = ['descripcion','monto','estado'];
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
     * Obtener Listado de viaticos
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerViatico($request)
    {
        $normativas = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $normativas->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $normativas->where('estado',true);
            }

            $normativas->orderBy('id_viatico', 'asc');
        }
        $normativas->with('normativaViatico');
        return $normativas->paginate($request->limit);
    }

    public function normativaViatico()
    {
        return $this->belongsTo('App\Models\CajaChicaNormativa','id_normativa');
    }

}
