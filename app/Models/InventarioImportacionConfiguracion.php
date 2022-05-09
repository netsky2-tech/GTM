<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioImportacionConfiguracion extends Model {

    public $timestamps = false;
	protected $table = 'inventario.configuracion_comprobante_importaciones';
	protected $primaryKey='id_configuracion_importacion';

    public function obtener($request)
    {
        $importaciones = $this->select(['*']);
        $importaciones->with('configuracionImportacioncuentaContable');
        $importaciones->orderBy('id_configuracion_importacion', 'asc');
        $conf = session()->get('id_empresa');
        $importaciones->where('id_empresa',$conf);
        return $importaciones->paginate($request->limit);
    }

    public function configuracionImportacioncuentaContable()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasContablesVista','id_cuenta_contaable')->select('id_cuenta_contable','cta_contable','nombre_cuenta','nombre_cuenta_completo');
    }

}