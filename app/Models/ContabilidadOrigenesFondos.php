<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadOrigenesFondos extends Model
{
    protected $table = 'contabilidad.origen_fondo';
    protected $primaryKey='id_of';
    protected $fillable = ['origen','estado'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
     
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
     * Obtener Lista de cuentasBancarias
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtener($request)
    {
        $origen_fondo = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $origen_fondo->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $origen_fondo->with('cuentaContableOrigenFondo');
        $origen_fondo->with('monedaOrigenFondo');
        return $origen_fondo->paginate($request->limit);
    }

    public function cuentaContableOrigenFondo()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasContablesVista','id_cuenta_contable');
    }

    public function monedaOrigenFondo()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda');
    }


}
