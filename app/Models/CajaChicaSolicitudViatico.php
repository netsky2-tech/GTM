<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaChicaSolicitudViatico extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjachica.solicitud_viatico';
    protected $primaryKey='id_solicitud_viatico';
    protected $fillable = ['fecha_solicitud','monto_total','concepto','estado'];
    protected $dateFormat = 'Y-m-d H:i:s.u';

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
     * Obtener Listado de viaticos
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerSolicitud($request)
    {
        $solicitud = $this->select(['*']);
        if (!empty($request->search['field']) && !empty($request->search['value'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $solicitud->where($searchField, $searchValue);
        }
        $statusValue = $request->search['status'];
        if($statusValue == 0){
            $solicitud->whereIn('estado',array(1,2));
        }
        $solicitud->with('solicitudTrabajador');

        $solicitud->orderBy('id_solicitud_viatico', 'asc');
        return $solicitud->paginate($request->limit);
    }

    /**
     * Solicitud detalle
     */
    /*public function solicitudDetalles()
    {
        return $this->hasMany('App\Models\CajaChicaSolicitudViaticoDetalle','id_solicitud_viatico');
    }*/

    public function solicitudDistribucion()
    {
        return $this->hasMany('App\Models\CajaChicaSolicitudViaticoDistribucion','id_solicitud_viatico');
    }

    public function solicitudTrabajador()
    {
        return $this->belongsTo('App\Models\RRHHTrabajadores','id_trabajador')
            ->select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"));
    }

}
