<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaChicaComprobante extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjachica.comprobantes';
    protected $primaryKey = 'id_comprobante';
    protected $fillable = ['id_comprobante','numero', 'fecha', 'a_favor_de', 'monto_entregado', 'monto_en_letra', 'concepto', 'estado', 'autorizado', 'fecha_pago', 'tipo_comprobante'];
    protected $dateFormat = 'Y-m-d H:i:s.u';

    /**
     * Replace Field
     *
     * @access    public
     * @param
     * @return    string
     */


    public function replaceField($field, $fields = [])
    {
        if (in_array($field, $fields)) {
            return $fields[$field];
        }

        return $field;
    }

    /**
     * Obtener Listado de comprobante
     *
     * @access    public
     * @param
     * @return    json(array)
     */

    public function obtenercomprobantes($request)
    {
        $vale = $this->select(['*']);
        if (!empty($request->search['field']) && !empty($request->search['value'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $vale->where($searchField, $searchValue);
        }
        $statusValue = $request->search['status'];
        if ($statusValue == 0) {
            $vale->whereIn('estado', array(1, 2));///cuando lo registrar supongo q tiene estado 1, q son estados 2 y 3?
        }else{
            $vale->whereIn('estado', array(0,1, 2,4,3));
        }
        $tipoComprobante = $request->search['tipo'];
        if ($tipoComprobante == 1) { //Tipo comprobante 1 incluye comp. viatico y gastos
            $vale->whereIn('tipo_comprobante', array(1, 2));
        } else {
            $vale->where('tipo_comprobante', 3);
        }
        $vale->with('trabajadorComprobante');
        $vale->with('cajaComprobante');
        $vale->with('solicitudComprobante');
        $vale->with('monedaComprobante');
        $vale->with('acreedorComprobante');

        $vale->orderBy('id_comprobante', 'desc');
        return $vale->paginate($request->limit);
    }

    public function obtenerNumeroComprobante($id_tipo_comprobante)
    {
        $codigo = $this->select([DB::raw("COALESCE(max(numero),0)+1 as secuencia")]);
        if((!empty($id_tipo_comprobante))){
            if ($id_tipo_comprobante == 3){
            $codigo->where('tipo_comprobante',$id_tipo_comprobante);
            }else{
                $codigo->whereIn('tipo_comprobante',array(1,2));
            }
        }
        return $codigo->first();
    }

    /**
     * Comprobante_detalle
     */
    public function comprobanteDetalle()
    {
        return $this->hasMany('App\Models\CajaChicaComprobanteDetalle','id_comprobante');
    }

    public function trabajadorComprobante()
    {
        return $this->belongsTo('App\Models\RRHHTrabajadores','id_trabajador')
            ->select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"));
    }

    public function cajaComprobante()
    {
        return $this->belongsTo('App\Models\CajaChicaCaja','id_caja_chica')->with('trabajadorCaja');
    }

    public function solicitudComprobante()
    {
        return $this->hasMany('App\Models\CajaChicaSolicitudViatico','id_solicitud_viatico');
    }

    public function monedaComprobante()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda');
    }
    public function acreedorComprobante()
    {
        return $this->belongsTo('App\Models\InventarioProveedores','id_proveedor');
    }

}
