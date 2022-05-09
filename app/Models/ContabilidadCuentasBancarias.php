<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadCuentasBancarias extends Model
{
    protected $table = 'contabilidad.cuentas_bancarias';
    protected $primaryKey='id_cuenta_bancaria';
    protected $fillable = ['numero_cuenta','estado'];
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

    public function obtenerCuentasBancarias($request)
    {
        $cuentasBancarias = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $cuentasBancarias->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $cuentasBancarias->where('estado',true);
            }
        }
        $cuentasBancarias->with('bancoCuentaBancaria');
        $cuentasBancarias->with('cuentaContableCuentaBancaria');
        $cuentasBancarias->with('monedaCuentaBancaria');
        $cuentasBancarias->orderby('id_cuenta_bancaria');
        return $cuentasBancarias->paginate($request->limit);
    }

    public function bancoCuentaBancaria()
    {
        return $this->belongsTo('App\Models\CajaBancoBancos','id_banco')->select('id_banco','descripcion');
    }

    public function cuentaContableCuentaBancaria()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasContablesVista','id_cuenta_contable')->select('id_cuenta_contable','cta_contable','nombre_cuenta_completo');
    }

    public function monedaCuentaBancaria()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda')->select('id_moneda','descripcion','codigo','descripcion_singular');
    }
}
