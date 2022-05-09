<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoBancos extends Model
{
    protected $table = 'cjabnco.bancos';
    protected $primaryKey='id_banco';
    protected $fillable = ['descripcion','u_creacion','activo'];
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
     * Obtener Listado de Bancos
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerBancos($request)
    {
        $bancos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $bancos->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $bancos->where('activo',true);
            }
            $bancos->orderBy('cjabnco.bancos.id_banco', 'asc');
        }
        return $bancos->paginate($request->limit);
    }

    public function cuentasBancariasBanco()
    {
        return $this->hasMany('App\Models\ContabilidadCuentasBancarias','id_banco')
            ->select('id_cuenta_bancaria','id_banco','id_moneda','id_cuenta_contable',
                DB::raw("concat((select b.descripcion from cjabnco.bancos b where b.id_banco = contabilidad.cuentas_bancarias.id_banco),' ',(select moned.descripcion 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),'(',(select moned.codigo 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),') ',numero_cuenta) as numero_cuenta")
                )->where('estado',1);
    }

}
