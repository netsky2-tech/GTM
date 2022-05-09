<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoFacturasExportacion extends Model
{

    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjabnco.facturas_exportacion';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    //protected $fillable = ['codigo_requisa','fecha_solicitud','estado'];    protected $table = 'cjabnco.facturas';
    protected $primaryKey='id_factura_exportacion';

    /**
     * Obtener Lista de Salidas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerFacturasExportacion($request)
    {
        $facturas = $this->select(['*']);
        if (!empty($request->search['field'])) {

            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $facturas->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $facturas->with('facturaProductos');
        $facturas->with('facturaMoneda');
        $facturas->with('facturaSucursal');
        $facturas->with('facturaBodega');
        $facturas->with('facturaVendedor');
        $facturas->with('facturaCliente');
        //$facturas->with('facturaTipoCliente');
        $facturas->orderBy('f_creacion', 'desc');

        return $facturas->paginate($request->limit);
    }

    public function obtenerFacturaExportacion($request)
    {
        $factura = $this->select(['*']);
        $factura->where('id_factura', $request->id_factura);

        $factura->with(['facturaProductos' => function($query) {
            $query->with(['bodegaProducto' => function($query2) {
                $query2->with('productoSimple');
            }]);
        }]);

        $factura->with('facturaSucursal');
        $factura->with('facturaMoneda');

        $factura->with('facturaBodega');
        $factura->with('facturaVendedor');
        $factura->with('facturaCliente');
        $factura->with('facturaTipoCliente');
        return $factura->first();
    }

    public function facturaSucursal()
    {
        return $this->belongsTo('App\Models\PublicSucursales','id_sucursal')->select(['*','descripcion as text']);
    }

    public function facturaProductos()
    {
        return $this->hasMany('App\Models\CajaBancoFacturasExportacionProductos','id_factura_exportacion');
    }

    public function facturaMoneda()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda')->select(['*','descripcion as text']);
    }

    public function facturaBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega')->select(['*','descripcion as text']);
    }

    public function facturaCliente()
    {
        return $this->belongsTo('App\Models\VentaClientes','id_cliente')->select(['*','nombre_comercial as text']);
    }

    public function facturaVendedor()
    {
        return $this->belongsTo('App\Models\VentaVendedores','id_vendedor')->select(['*','nombre_completo as text']);
    }

  
}

