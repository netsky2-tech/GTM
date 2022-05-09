<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class RRHHConfiguracionCdPlanilla extends Model {

    public $timestamps = false;
	protected $table = 'rrhh.configuracion_cd_planilla';
	protected $primaryKey='id_configuracion_cd_planilla';

    public function obtener($request)
    {
        $configuracion = $this->select(['*']);
        $configuracion->with('configuracionPlanillaContableAdmin');
        $configuracion->with('configuracionPlanillaContableComercial');
        $configuracion->orderBy('id_configuracion_cd_planilla', 'asc');
        return $configuracion->paginate($request->limit);
    }

    public function configuracionPlanillaContableAdmin()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasContablesVista','id_cuenta_contable_admin')->select('id_cuenta_contable','cta_contable','nombre_cuenta','nombre_cuenta_completo');
    }

    public function configuracionPlanillaContableComercial()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasContablesVista','id_cuenta_contable_comercial')->select('id_cuenta_contable','cta_contable','nombre_cuenta','nombre_cuenta_completo');
    }

}