<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class CajaBancoSolicitudesPago extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjabnco.solicitudes_pago';
    protected $primaryKey='id_solicitud_pago';
    /*protected $hidden = [
        'f_creacion', 'f_modificacion'
    ];*/


    /**
     * Obtener Lista de solicitudes
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtener($request)
    {
        $solicitudes = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $solicitudes->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $solicitudes->with('monedaSolicitud');
        $solicitudes->with('tipoSolicitud');
        $solicitudes->orderBy('id_solicitud_pago','desc');

        return $solicitudes->paginate($request->limit);
    }

    public function obtenerSolicitudesAprobacion($request)
    {
        $solicitudes = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $solicitudes->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $solicitudes->whereIn('estado',array(1,2));
        $solicitudes->with('monedaSolicitud');
        $solicitudes->orderBy('id_solicitud_pago');

        return $solicitudes->paginate($request->limit);
    }

    public function solicitudCuentaBancaria()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasBancarias','id_cuenta_bancaria')->select('id_cuenta_bancaria','id_banco','id_moneda','id_cuenta_contable','numeracion_chequera',
            DB::raw("concat((select b.descripcion from cjabnco.bancos b where b.id_banco = contabilidad.cuentas_bancarias.id_banco),' ',(select moned.descripcion 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),'(',(select moned.codigo 
                from cjabnco.monedas moned where moned.id_moneda = contabilidad.cuentas_bancarias.id_moneda),') ',numero_cuenta) as numero_cuenta")
        );
    }

    public function solicitudDetalles()
    {
        return $this->hasMany('App\Models\CajaBancoSolicitudesPagoDetalles','id_solicitud_pago');
    }

    public function tipoSolicitud()
    {
        return $this->belongsTo('App\Models\CajaBancoTiposSolicitudesPago','id_tipo_solicitud');
    }

    public function monedaSolicitud()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda');
    }

    public function monedaAprobadaSolicitud()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda_pago');
    }

    public function documentoSolicitud()
    {
        return $this->belongsTo('App\Models\ContabilidadDocumentosContables','id_documento_contable');
    }

    public function usuarioRegistra()
    {
        return $this->belongsTo('App\Models\AdmonUsuarios','u_creacion','usuario')->select(array('id_usuario', 'id_empleado','usuario'));
    }

    public function usuarioRevisa()
    {
        return $this->belongsTo('App\Models\AdmonUsuarios','u_revision','usuario')->select(array('id_usuario', 'id_empleado','usuario'));
    }

    public function usuarioAprueba()
    {
        return $this->belongsTo('App\Models\AdmonUsuarios','u_aprobacion','usuario')->select(array('id_usuario', 'id_empleado','usuario'));
    }

    public function usuarioEmite()
    {
        return $this->belongsTo('App\Models\AdmonUsuarios','u_emision','usuario')->select(array('id_usuario', 'id_empleado','usuario'));
    }
    public function usuarioAnula()
    {
        return $this->belongsTo('App\Models\AdmonUsuarios','u_anulacion','usuario')->select(array('id_usuario', 'id_empleado','usuario'));
    }

}
