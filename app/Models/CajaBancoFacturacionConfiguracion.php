<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoFacturacionConfiguracion extends Model {

    public $timestamps = false;
	protected $table = 'cjabnco.configuracion_comprobante_factura';
	protected $primaryKey='id_configuracion_factura';

    public function obtener($request)
    {
        $importaciones = $this->select(['*']);
        $importaciones->with('configuracionFacturacuentaContable');
        $importaciones->orderBy('id_configuracion_factura', 'asc');
        return $importaciones->paginate($request->limit);
    }

    public function configuracionFacturacuentaContable()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasContablesVista','id_cuenta_contable')->select('id_cuenta_contable','id_tipo_cuenta','cta_contable','nombre_cuenta','nombre_cuenta_completo');
    }

}