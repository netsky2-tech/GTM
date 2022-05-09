<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ComprasClasificacionCompras extends Model
{
    public $timestamps = false;
    protected $table = 'compra.clasificacion_compra';
    protected $primaryKey='id_clasificacion_servicio';
    protected $fillable=['descripcion','id_cuenta_contable','activo'];

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
     * Obtener lista de Roles
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtener($request)
    {
        $afectaciones = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $afectaciones->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $afectaciones->where('activo',true);
            }
            $afectaciones->with('clasificacionCompraCuentaContable');
            $afectaciones->orderBy('compra.clasificacion_compra.id_clasificacion_servicio', 'asc');
        }
        return $afectaciones->paginate($request->limit);
    }


    public function clasificacionCompraCuentaContable()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasContablesVista','id_cuenta_contable')->select('id_cuenta_contable','cta_contable','nombre_cuenta','nombre_cuenta_completo');
    }


}
