<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoConciliaciones extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjabnco.conciliaciones';
    protected $primaryKey='id_conciliacion';


    public function obtener($request)
    {
        $conciliaciones = $this->select(['*']);
        if (!empty($request->search['field']) && !empty($request->search['value'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $conciliaciones->where($searchField, $searchValue);
        }
        $statusValue = $request->search['status'];
        if($statusValue == 0){
            $conciliaciones->whereIn('estado',array(1));
        }
        $conciliaciones->with('conciliacionMovimientos');
        $conciliaciones->with('conciliacionEstadoCuenta');
        $conciliaciones->with(['conciliacionEstadoCuenta' => function($query) {
            $query->with('periodoMesEstadoCuenta');
        }]);
        $conciliaciones->with('cuentaBancariaConciliacion');


        $conciliaciones->orderBy('id_conciliacion', 'desc');
        return $conciliaciones->paginate($request->limit);
    }

    public function conciliacionMovimientos()
    {
        return $this->hasMany('App\Models\CajaBancoConciliacionesMovimientos','id_conciliacion');
    }


    public function conciliacionEstadoCuenta()
    {
        return $this->belongsTo('App\Models\CajaBancoEstadoCuentaBanco','id_estado_cuenta_banco');
    }

    public function cuentaBancariaConciliacion()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasBancarias','id_cuenta_bancaria')->select('id_cuenta_bancaria','id_banco','id_moneda','id_cuenta_contable','numeracion_chequera',
            DB::raw("concat((select b.descripcion from cjabnco.bancos b where b.id_banco = contabilidad.cuentas_bancarias.id_banco),' ',(select moned.descripcion 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),'(',(select moned.codigo 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),') ',numero_cuenta) as numero_cuenta")
        );
    }

}
