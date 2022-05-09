<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;
use App\Models\InventarioProveedores;
class ComprasSolicitudCompra extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'compra.solicitudes_compras';
    protected $primaryKey='id_solicitud_compra';

    /**
     * Obtener Lista de Solicitudes compras
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerSolicitudesCompras($request)
    {
        $solicitud = $this->select(['*']);
        if (!empty($request->search['value'])) {
           $searchField = $request->search['field'];
           $searchValue = $request->search['value'];
            $solicitud->where($searchField, 'ilike', '%' . $searchValue . '%');
       }

        if (!empty($request->search['autorizadas']) && $request->search['autorizadas'] ==true ) {
            $solicitud->whereIn('estado',array(3,4));
        }


        $solicitud->with(['solicitudProductos' => function($query) {
            $query->with('solicitudProducto');
        }]);
        $solicitud->with('solicitudTrabajador');
        $solicitud->with('solicitudArea');
        //$solicitud->with('solicitudSucursal');
        $solicitud->with('solicitudMoneda');
        $solicitud->with('solicitudBodega');

        $solicitud->orderBy('f_modificacion', 'desc');

        return $solicitud->paginate($request->limit);
    }

    public function obtenerSolicitudCompra($request)
    {
        $solicitud = $this->select(['*']);
        $solicitud->where('id_solicitud_compra', $request->id_solicitud_compra);

        $solicitud->with(['solicitudProductos' => function($query) {
            $query->with('solicitudProducto');
            $query->with('solicitudProveedor');
        }]);
        $solicitud->with('solicitudTrabajador');
        $solicitud->with('solicitudArea');
        $solicitud->with('solicitudMoneda');
        $solicitud->with('solicitudBodega');
        //$solicitud->with('solicitudSucursal');
        return $solicitud->get();
    }

    public function solicitudProductos()
    {
        return $this->hasMany('App\Models\ComprasSolicitudCompraProductos','id_solicitud_compra');
    }

    public function solicitudTrabajador()
    {
        return $this->belongsTo('App\Models\RRHHTrabajadores','id_trabajador')->select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"));
    }


    public function solicitudArea()
    {
        return $this->belongsTo('App\Models\PublicAreas','id_area')->select('id_area','descripcion');
    }

    /*public function solicitudSucursal()
    {
        return $this->belongsTo('App\Models\PublicSucursales','id_sucursal')->select('id_sucursal','descripcion');
    }*/

    public function solicitudMoneda()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda')->select('id_moneda','codigo','descripcion');
    }

    public function solicitudBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega')->select('id_bodega','descripcion');
    }

}

