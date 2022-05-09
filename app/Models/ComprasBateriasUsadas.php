<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ComprasBateriasUsadas extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'compra.compra_baterias_usadas';
    protected $primaryKey='id_compra_usado';

    public function obtener($request)
    {
        $compras_usado = $this->select(['*']);
        if (!empty($request->search['value'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $compras_usado->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $compras_usado->with(['compraUsadosProductos' => function($query) {
            $query->with('compraBateriaProducto');
        }]);
        $compras_usado->with('compraUsadosProveedor');
        $compras_usado->with('compraUsadosVendedor');
        $compras_usado->with('compraUsadosBodega');
        $compras_usado->orderBy('f_modificacion', 'desc');

        return $compras_usado->paginate($request->limit);
    }

    public function obtenerCodigoCompraUsado()
    {
        $codigo = $this->select([DB::raw("COALESCE(max(consecutivo::integer),0)+1 as secuencia")]);
        return $codigo->first();
    }

    public function compraUsadosProductos()
    {
        return $this->hasMany('App\Models\ComprasBateriasUsadasProductos','id_compra_usado');
    }

    public function compraUsadosProveedor()
    {
        return $this->belongsTo('App\Models\InventarioProveedores','id_proveedor')->select('id_proveedor','nombre_comercial','numero_ruc','numero_cedula');
    }

    public function compraUsadosVendedor()
    {
        return $this->belongsTo('App\Models\VentaVendedores','id_vendedor')->select('id_vendedor','nombre_completo','id_zona');
    }


    public function compraUsadosBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega')->select('id_bodega','descripcion');
    }


}

