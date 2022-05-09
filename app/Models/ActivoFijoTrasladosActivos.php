<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ActivoFijoTrasladosActivos extends Model
{

    //const CREATED_AT = 'f_creacion';
    //const UPDATED_AT = 'f_modificacion';
    public $timestamps= false;
    protected $table = 'activofijo.traslados_activos';
    protected $primaryKey='id_traslado_activo';

    public function obtenerTraslados($request)
    {
        $activos = $this->select(['id_traslado_activo', 'id_activo', 'id_area_origen', 'id_area_destino',
            'id_trabajador_origen', 'id_trabajador_destino', 'fecha_traslado','tipo_traslado']);

        $activos->with('activoTraslado');
        $activos->with('activoAreaOrigen');
        $activos->with('activoAreaDestino');
        $activos->with('activoTrabajadorOrigen');
        $activos->with('activoTrabajadorDestino');
        $activos->orderBy('fecha_traslado', 'desc');

        return $activos->paginate($request->limit);
    }

    public function activoTraslado()
    {
        return $this->belongsTo('App\Models\ActivoFijoActivos','id_activo')->select(['id_activo','id_sucursal','codigo','descripcion','id_area','id_trabajador','marca',
            'serie','fecha_adquisicion','valor_adquisicion','depreciacion_mensual','depreciacion_acumulada','valor_libro','id_fondo','estado',
            'id_grupo_activo','id_tipo_activo','meses_depreciarse','mes_depreciado','anio_depreciado','id_color','activo']);
    }

    public function activoAreaOrigen()
    {
        return $this->belongsTo('App\Models\PublicAreas','id_area_origen')->select(['id_area','descripcion']);
    }

    public function activoAreaDestino()
    {
        return $this->belongsTo('App\Models\PublicAreas','id_area_destino')->select(['id_area','descripcion']);
    }

    public function activoTrabajadorOrigen()
    {
        return $this->belongsTo('App\Models\RRHHTrabajadores','id_trabajador_origen')->select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"));
    }

    public function activoTrabajadorDestino()
    {
        return $this->belongsTo('App\Models\RRHHTrabajadores','id_trabajador_destino')->select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"));
    }

}

