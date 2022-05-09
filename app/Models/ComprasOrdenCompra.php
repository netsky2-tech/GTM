<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ComprasOrdenCompra extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'compra.ordenes_compras';
    protected $primaryKey='id_orden_compra';


    public function buscar($request)
    {

        $ordenes = $this->select(['id_orden_compra','estado',DB::raw("compra.ordenes_compras.numero_factura AS text")])->with(['ordenCompraProductos' => function($query) {
            $query->with('ordenCompraProductoBateria');
        }])->where('estado',3)->where('tipo_compra',2);

        if ((!empty($request->q))) {
            $searchValue = $request->q;
            $ordenes->where('numero_factura', 'ILIKE', '%' . $searchValue . '%');
            $ordenes->orderBy('numero_factura', 'asc');
            return $ordenes->limit(6)->get();
        }else{
            $ordenes->orderBy('numero_factura', 'asc');
            return $ordenes->limit(6)->get();

        }
    }

    /**
     * Obtener Lista de Ordenes compras
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerOrdenesCompras($request)
    {
        $ordenes = $this->select(['*']);
        if (!empty($request->search['value'])) {
           $searchField = $request->search['field'];
           $searchValue = $request->search['value'];
            $ordenes->where($searchField, 'ilike', '%' . $searchValue . '%');
       }
        $ordenes->with(['ordenCompraProductos' => function($query) {
            $query->with('ordenCompraProducto');
        }]);
        $ordenes->with('ordenCompraProveedor');
        $ordenes->with('ordenCompraSolicitud');
        $ordenes->with('ordenCompraMoneda');
        $ordenes->with('ordenCompraBodega');
        $ordenes->orderBy('f_modificacion', 'desc');

        return $ordenes->paginate($request->limit);
    }

    public function obtenerOrdenCompra($request)
    {
        $ordenes = $this->select(['*']);
        $ordenes->where('id_orden_compra', $request->id_orden_compra);

        $ordenes->with(['ordenCompraProductos' => function($query) {
            $query->with('ordenCompraProducto');
        }]);
        $ordenes->with('ordenCompraProveedor');
        $ordenes->with('ordenCompraSolicitud');
        $ordenes->with('ordenCompraMoneda');
        $ordenes->with('ordenCompraBodega');
        return $ordenes->first();
    }

    public function ordenCompraProductos()
    {
        return $this->hasMany('App\Models\ComprasOrdenCompraProductos','id_orden_compra');
    }

    public function ordenCompraProveedor()
    {
        return $this->belongsTo('App\Models\InventarioProveedores','id_proveedor')->select('id_proveedor','nombre_comercial','numero_ruc','numero_cedula');
    }

    public function ordenCompraSolicitud()
    {
        return $this->belongsTo('App\Models\ComprasSolicitudCompra','id_solicitud_compra');
    }

    public function ordenCompraMoneda()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda')->select('id_moneda','codigo','descripcion');
    }

    public function ordenCompraBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega')->select('id_bodega','descripcion');
    }


}

