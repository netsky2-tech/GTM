<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;
use App\Models\InventarioProveedores;
class InventarioCompras extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'inventario.entradas';
    protected $primaryKey='id_entrada';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['codigo_entrada','fecha_entrada','descripcion','estado'];

    /**
     * Obtener Lista de entradas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerEntradas($request)
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
       $entradas->with('entradaProductos');
       $entradas->with('entradaProveedor');
       $entradas->with('entradaBodega');
       $entradas->with('entradaTipo');
       $entradas->with('entradaTipoPago');
       $entradas->orderBy('inventario.entradas.id_entrada', 'desc');

        return $entradas->paginate($request->limit);
    }

    public function obtenerEntrada($request)
    {   
        $entrada = $this->select(['*']);
        $entrada->where('inventario.entradas.id_entrada', $request->id_entrada);
        $conf = session()->get('id_empresa');
        $entrada->where('id_empresa',$conf);
        $entrada->with('entradaProductos');

        $entrada->with(['entradaProductos' => function($query) {
            $query->with('bodegaProducto');
        }]);

        $entrada->with('entradaProveedor');
        $entrada->with('entradaBodega');
        $entrada->with('entradaTipo');
        $entrada->with('entradaTipoPago');
        return $entrada->get();
    }

    public function obtenerEntradaPorCodigo($request)
    {   
        $entrada = $this->select(['*']);
        $entrada->where('inventario.entradas.codigo_entrada', '=', $request->codigo_entrada);
        $entrada->whereIn('inventario.entradas.estado', array(2));
        $entrada->whereIn('inventario.entradas.id_tipo_entrada', array(1,3));
        $entrada->whereRaw('(select count(*) from inventario.entradas ie2 where ie2.id_entrada_dev = inventario.entradas.id_entrada and ie2.estado in (1) ) = 0');
        $entrada->with('entradasProductos');
        $entrada->with('entradaProveedor');
        $entrada->with('entradaBodega');
        $entrada->with('entradaTipo');
        $entrada->with('entradaTipoPago');
        $conf = session()->get('id_empresa');
        $entrada->where('id_empresa',$conf);

        return $entrada->get();
    }    

    public function entradaProductos()
    {
        return $this->hasMany('App\Models\InventarioEntradaProductos','id_entrada');
    }

    public function entradaProveedor()
    {
        return $this->belongsTo('App\Models\InventarioProveedores','id_proveedor');
    }

    public function entradaBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega');
    }

    public function entradaTipo()
    {
        return $this->belongsTo('App\Models\InventarioTipoEntrada','id_tipo_entrada');
    }

    public function entradaTipoPago()
    {
        return $this->belongsTo('App\Models\PublicTiposPagos','id_tipo_pago');
    }
}