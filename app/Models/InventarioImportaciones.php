<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioImportaciones extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'inventario.importaciones';
    protected $primaryKey='id_importacion';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['numero_poliza','flete','seguro','estado'];

    /**
     * Obtener Lista de entradas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener($request)
    {
        $importaciones = $this->select(['*']);
        if (!empty($request->search['field'])) {
           $searchField = $request->search['field'];
           $searchValue = $request->search['value'];
           $importaciones->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $importaciones->where('id_empresa',$conf);
       }
        $importaciones->with('importacionProductos');

       $importaciones->orderBy('id_importacion', 'desc');

        return $importaciones->paginate($request->limit);
    }

    public function obtenerImportacion($request)
    {   
        $importacion = $this->select(['*']);
        $importacion->where('id_importacion',$request->id_importacion);
        $importacion->with(['importacionProductos' => function($query) {$query->with('producto');}]) ->with('importacionOrdenesCompras')
            ->with('importacionProveedorTransporte')->with('importacionProveedorAduana')->with('importacionBodega');
        return $importacion->get();
    }


    public function importacionProductos()
    {
        return $this->hasMany('App\Models\InventarioImportacionProductos','id_importacion');
    }

    public function importacionOrdenesCompras()
    {
        return $this->hasMany('App\Models\InventarioImportacionOrdenesCompra','id_importacion');
    }

    public function importacionProveedorTransporte()
    {
        return $this->belongsTo('App\Models\InventarioProveedores','id_proveedor_transporte')->select('id_proveedor','nombre_comercial','numero_ruc');
    }

    public function importacionProveedorAduana()
    {
        return $this->belongsTo('App\Models\InventarioProveedores','id_proveedor_agencia')->select('id_proveedor','nombre_comercial','numero_ruc');
    }

    public function importacionBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega')->select('id_bodega','descripcion');
    }
}