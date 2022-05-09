<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\DocBlock\ExampleFinder;

class InventarioProductosPresentaciones extends Model
{
    protected $table = 'inventario.productos_presentaciones';
    protected $primaryKey='id_producto_presentacion';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   
    protected $fillable = ['estado'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';


    /**
     * Buscar productos
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtener($request)
    {
        $um = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];

            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            /*$um->where($searchField, 'ilike', '%' . $searchValue . '%');*/
            $um->where(function ($query){
                $conf = session()->get('id_empresa');
                $query->where('id_empresa',$conf)
                    ->orwhere('id_empresa',0);
            });
            if($statusValue == 0){
                $um->where('estado',1);
            }
            $um->with('productoPresentacion');
            $um->with('productoP');
            $um->orderBy('id_producto_presentacion', 'asc');
        }
        return $um->paginate($request->limit);
    }

        public function productoPresentacion(){
            return $this->belongsTo('App\Models\InventarioPresentacion','id_presentacion');
        }

    public function productoP(){
        return $this->belongsTo('App\Models\InventarioProductos','id_producto');
    }



}