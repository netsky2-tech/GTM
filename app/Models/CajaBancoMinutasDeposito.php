<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoMinutasDeposito extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjabnco.minutas_deposito';
    protected $primaryKey='id_minuta_deposito';
    protected $fillable = ['no_referencia','u_creacion','estado'];

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
     * Obtener Listado de Bancos
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerMinutas($request)
    {
        $miutas = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $miutas->where($searchField, 'ilike', '%' . $searchValue . '%');
            $miutas->with(['cuentaBancariaMinuta']);
            $miutas->with(['sucursalMinuta']);
            $miutas->orderBy('id_minuta_deposito', 'asc');
        }
        return $miutas->paginate($request->limit);
    }

    public function cuentaBancariaMinuta()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasBancarias','id_cuenta_bancaria');
    }

    public function sucursalMinuta()
    {
        return $this->belongsTo('App\Models\PublicSucursales','id_sucursal');
    }


}
