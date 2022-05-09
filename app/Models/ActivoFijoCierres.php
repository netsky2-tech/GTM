<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ActivoFijoCierres extends Model
{

    public $timestamps=false;
    protected $table = 'activofijo.cierres_activos';
    protected $primaryKey='id_cierre_activo';

    public function obtenerCierres($request)
    {
        $activos = $this->select(['id_cierre_activo', 'id_sucursal', 'mes', 'anio', 'u_grabacion'
            ,'f_grabacion']);
        $activos->with('cierreSucursal');
        $activos->with(['detallesDepreciacion' => function($query) {
        $query->with('detalleActivo');}]);
        $activos->orderBy('id_cierre_activo', 'asc');

        return $activos->paginate($request->limit);
    }

    public function detallesDepreciacion()
    {
        return $this->hasMany('App\Models\ActivoFijoDepreciaciones','id_cierre_activo');
    }

    public function cierreSucursal()
    {
        return $this->belongsTo('App\Models\PublicSucursales', 'id_sucursal') ->select('id_sucursal','descripcion','serie');
    }
}

