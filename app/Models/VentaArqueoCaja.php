<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class VentaArqueoCaja extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'venta.arqueo_caja';
    protected $primaryKey='id_arqueo';


    public function obtener($request)
    {
        $solicitud = $this->select(['id_arqueo','fecha_arqueo','id_vendedor','estado','monto_ingresos']);
        if (!empty($request->search['field']) && !empty($request->search['value'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $solicitud->where($searchField, $searchValue);
        }
        $statusValue = $request->search['status'];
        if($statusValue == 0){
            $solicitud->whereIn('estado',array(1));
        }
        $solicitud->with('vendedorArqueo');

        $solicitud->orderBy('fecha_arqueo', 'desc');
        return $solicitud->paginate($request->limit);
    }


    public function vendedorArqueo()
    {
        return $this->belongsTo('App\Models\VentaVendedores','id_vendedor')->select('id_vendedor','nombre_completo','id_zona');
    }

}
