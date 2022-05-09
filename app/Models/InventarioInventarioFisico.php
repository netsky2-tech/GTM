<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioInventarioFisico extends Model
{
    protected $table = 'inventario.inventarios_fisicos';
    protected $primaryKey='id_inventario_fisico';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['codigo_entrada','fecha_entrada','descripcion','estado'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';

   
    /**
     * Obtener Lista de entradas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener($request)
    {
       // $entradas = InventarioEntradas::with('entradaProveedor');
        $entradas = $this->select(['*']);
        if (!empty($request->search['field'])) {
           
           $searchField = $request->search['field'];
           $searchValue = $request->search['value'];
           $entradas->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $entradas->where('id_empresa',$conf);
       }
       $entradas->with('conteoProductos');
       $entradas->with('conteoSucursal');
       $entradas->with('conteoBodega');
       $entradas->with('conteoArea');
       $entradas->orderBy('f_inventario', 'desc');

        return $entradas->paginate($request->limit);
    }

    public function obtenerConteo($request)
    {
        $inventarioFisico = $this->select(['*']);
        $inventarioFisico->where('id_inventario_fisico', $request->id_inventario_fisico);
        $inventarioFisico->with(['conteoProductos' => function($query) {
            $query->with('producto');
            }]);



        $inventarioFisico->with('conteoSucursal');
        $inventarioFisico->with('conteoBodega');
        $inventarioFisico->with('conteoArea');
        return $inventarioFisico->first();
    }



    public function conteoProductos()
    {
        return $this->hasMany('App\Models\InventarioInventarioFisicoProductos','id_inventario_fisico');
    }

    public function conteoSucursal()
    {
        return $this->belongsTo('App\Models\PublicSucursales','id_sucursal')->select('id_sucursal','descripcion');
    }

    public function conteoBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega')->select('id_bodega','descripcion');
    }


    public function conteoArea()
    {
        return $this->belongsTo('App\Models\PublicAreas','id_area')->select('id_area','descripcion');
    }
}