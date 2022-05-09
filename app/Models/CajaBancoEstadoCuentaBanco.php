<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoEstadoCuentaBanco extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjabnco.estados_cuenta_bancaria';
    protected $primaryKey='id_estado_cuenta_banco';


    public function obtener($request)
    {
        $estado_cuenta = $this->select(['id_estado_cuenta_banco','id_cuenta_bancaria','id_periodo_mes','estado',
            'cantidad_movimientos','total_debitos','total_creditos']);
        if (!empty($request->search['field']) && !empty($request->search['value'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $estado_cuenta->where($searchField, $searchValue);
        }
        $statusValue = $request->search['status'];
        if($statusValue == 0){
            $estado_cuenta->whereIn('estado',array(1));
        }
        $estado_cuenta->with('periodoMesEstadoCuenta');
        $estado_cuenta->with('cuentaBancariaEstadoCuenta');

        $estado_cuenta->orderBy('id_periodo_mes', 'desc');
        return $estado_cuenta->paginate($request->limit);
    }

    public function obtenerEstadoCuenta($request)
    {
        $estado_cuenta = $this->select(['*']);
        $estado_cuenta->where('id_estado_cuenta_banco', $request->id_estado_cuenta_banco);
        $estado_cuenta->with('periodoMesEstadoCuenta');
        $estado_cuenta->with('cuentaBancariaEstadoCuenta');
        $estado_cuenta->with('estadoCuentaMovimientos');

        return $estado_cuenta->first();
    }

    public function estadoCuentaMovimientos()
    {
        return $this->hasMany('App\Models\CajaBancoEstadoCuentaBancoMovimientos','id_estado_cuenta_banco')
            ->select('*', DB::Raw("(select t.descripcion from cjabnco.conciliaciones_tipos_mov t where t.id_conciliacion_tipo_mov=tipomov) as tipomovx") );
    }

    public function periodoMesEstadoCuenta()
    {
        return $this->belongsTo('App\Models\ContabilidadPeriodoMeses','id_periodo_mes')->select('id_periodo_mes','descripcion');
    }
    public function cuentaBancariaEstadoCuenta()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasBancarias','id_cuenta_bancaria')->select('id_cuenta_bancaria','id_banco','id_moneda','id_cuenta_contable','numeracion_chequera',
            DB::raw("concat((select b.descripcion from cjabnco.bancos b where b.id_banco = contabilidad.cuentas_bancarias.id_banco),' ',(select moned.descripcion 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),'(',(select moned.codigo 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),') ',numero_cuenta) as numero_cuenta")
        );
    }

}
