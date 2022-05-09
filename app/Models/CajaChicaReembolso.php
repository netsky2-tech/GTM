<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaChicaReembolso extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjachica.solicitud_reembolso';
    protected $primaryKey = 'id_solicitud_reembolso';
    protected $fillable = ['descripcion','fecha_solicitud','id_solicitud_pago'];
  //  protected $dateFormat = 'Y-m-d H:i:s.u';

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

    public function obtenerSolicitudReembolso($request)
    {
        $reembolso = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $reembolso->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $reembolso->where('estado',true);
            }

            $reembolso->with('reembolsoCaja');
            $reembolso->orderBy('id_solicitud_reembolso', 'asc');
        }
        return $reembolso->paginate($request->limit);
    }
    /**
     * Reembolso detalle
     */
    public function reembolsoDetalle()
    {
        return $this->hasMany('App\Models\CajaChicaReembolsoDetalle','id_solicitud_reembolso');
    }

    public function reembolsoCaja()
    {
        return $this->belongsTo('App\Models\CajaChicaCaja','id_trabajador','id_trabajador');
    }

    public function monedaReembolso()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda');
    }

}
