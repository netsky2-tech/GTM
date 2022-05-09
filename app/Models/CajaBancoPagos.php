<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CajaBancoPagos extends Model
{
    public $timestamps = false;
    protected $table = 'cjabnco.ingresos_egresos';
    protected $primaryKey='id_ingreso_egreso';
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
        $solicitudes->orderBy('id_solicitud_pago');

        return $solicitudes->paginate($request->limit);
    }


    public function monedaSolicitud()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda');
    }

    public function documentoSolicitud()
    {
        return $this->belongsTo('App\Models\ContabilidadDocumentosContables','id_documento_contable');
    }

}
