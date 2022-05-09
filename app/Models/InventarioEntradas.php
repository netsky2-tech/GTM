<?php 

namespace App\Models;

use DB,Auth, Illuminate\Database\Eloquent\Model;

class InventarioEntradas extends Model 
{
    protected $table = 'inventario.entradas';
    protected $primaryKey='id_entrada';
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

    public function obtenerEntradas($request)
    {
       // $entradas = InventarioEntradas::with('entradaProveedor');
        $entradas = $this->select(['*']);
        if (!empty($request->search['field'])) {
           $searchField = $request->search['field'];
           $searchValue = $request->search['value'];
           $entradas->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $entradas->where('id_empresa',5);
       }
      if(Auth::user()->id_sucursal>0){
      $entradas->whereRaw('(select b.id_sucursal from inventario.bodegas b where b.id_bodega = inventario.entradas.id_bodega) = '.Auth::user()->id_sucursal);
      }

       $entradas->with('entradaProductos');
       $entradas->with('entradaProveedor');
       $entradas->with('entradaBodega');
       $entradas->with('entradaTipo');



       //$entradas->orderBy('fecha_entrada', 'desc');
        $entradas->orderBy('id_entrada', 'desc');

        return $entradas->paginate($request->limit);
    }

    public function obtenerEntrada($request)
    {
        $entrada = $this->select(['*']);
        $entrada->where('id_entrada', $request->id_entrada);
       $entrada->with(['entradaProductos' => function($query) {
                $query->with(['bodegaProducto' => function($query2) {
                    $query2->with(['productoSimple'=> function($query3) {
                        $query3->with('productoDetallesBaterias');
                    }]);
                }]);
            $query->with(['entradaProductoBaterias' => function($query2) {
                $query2->with('bateria');
            }]);
        }])->with('entradaSalidaBodega');




        $entrada->with('entradaProveedor');
        $entrada->with('entradaBodega');
        $entrada->with('entradaZona');
        $entrada->with('entradaTipo');
        return $entrada->get();
    }

    public function obtenerBateriasEntradaTraslado($request)
    {
        $productos = $this->select(['inventario.productos.id_producto','inventario.productos.nombre_comercial','inventario.baterias.id_bateria',
            'inventario.baterias.codigo_garantia AS text']);
        $productos->Join('inventario.salidas', 'inventario.salidas.id_salida', 'inventario.entradas.id_salida');
        $productos->leftJoin('inventario.salidas_productos', 'inventario.salidas_productos.id_salida', 'inventario.salidas.id_salida');
        $productos->leftJoin('inventario.salida_producto_baterias', 'inventario.salida_producto_baterias.id_salida_producto', 'inventario.salidas_productos.id_salida_producto');
        $productos->leftJoin('inventario.baterias', 'inventario.baterias.id_bateria','inventario.salida_producto_baterias.id_bateria');
        $productos->leftJoin('inventario.productos', 'inventario.productos.id_producto','inventario.baterias.id_producto');
        $productos->Where('inventario.entradas.id_entrada', $request->id_entrada);
        $productos->Where('inventario.productos.tipo_producto', 3);
        $productos->orderBy('inventario.productos.id_producto', 'asc');
        return $productos->get();

    }


    public function obtenerProductosEntrada($request)
    {
        $productos = $this->select(['inventario.productos.id_producto','inventario.productos.nombre_comercial'
            ,DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text")]);
        $productos->leftJoin('inventario.entradas_productos', 'inventario.entradas_productos.id_entrada', 'inventario.entradas.id_entrada');
        $productos->leftJoin('inventario.bodegas_productos', 'inventario.bodegas_productos.id_bodega_producto','inventario.entradas_productos.id_bodega_producto');
        $productos->leftJoin('inventario.productos', 'inventario.productos.id_producto','inventario.bodegas_productos.id_producto');
        $productos->leftJoin('inventario.baterias_detalles', 'inventario.productos.id_producto','inventario.baterias_detalles.id_producto');
        $productos->leftJoin('inventario.baterias_submarcas', 'inventario.baterias_detalles.id_submarca','inventario.baterias_submarcas.id_submarca');
        $productos->leftJoin('inventario.baterias_marcas', 'inventario.baterias_marcas.id_marca','inventario.baterias_submarcas.id_marca');

        $productos->Where('inventario.entradas.id_entrada', $request->id_entrada);
        $productos->Where('inventario.productos.tipo_producto', 3)->where('inventario.baterias_detalles.id_submarca','<>',7);
        if ((!empty($request->q))) {
            $searchValue = $request->q;
            $productos->where(function($query) use($searchValue) {
                $query->where('inventario.productos.nombre_comercial', 'ILIKE', '%' . $searchValue . '%')
                    ->orWhere('inventario.productos.codigo_sistema', 'ILIKE', '%' . $searchValue . '%');
            });
        }
        $productos->orderBy('inventario.productos.codigo_sistema', 'asc');
            return $productos->limit(10)->get();

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

        return $entrada->get();
    }    

    public function entradaProductos()
    {
        return $this->hasMany('App\Models\InventarioEntradaProductos','id_entrada')
            ->select(['*', DB::raw("CONCAT(descripcion_producto,' (',codigo_producto,')') AS text")])
            ->with('entradaPresentacion');
    }

    public function entradaSalidaBodega()
    {
        return $this->belongsTo('App\Models\InventarioSalidas','id_salida')->select('id_salida','id_bodega');
    }

    public function entradaProveedor()
    {
        return $this->belongsTo('App\Models\InventarioProveedores','id_proveedor');
    }

    public function entradaBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega');
    }
    public function entradaZona()
    {
        return $this->belongsTo('App\Models\ContabilidadCentroCostoIngreso','id_zona_costo','id_centro');
    }

    public function entradaTipo()
    {
        return $this->belongsTo('App\Models\InventarioTipoEntrada','id_tipo_entrada')->select('id_tipo_entrada','descripcion');
    }

}