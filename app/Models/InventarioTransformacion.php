<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioTransformacion extends Model
{
    protected $table = 'inventario.transformaciones';
    protected $primaryKey='id_transformacion';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   
    protected $fillable = ['','nombre_producto','descripcion','costo_estandar','precio_sugerido','existencia_Min','activo'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';


    /**
     * Buscar productos
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function buscarProductos($request)
    {
        $productos = $this->select(['*','descripcion AS text']);
        $searchValue = $request->q;
        $productos->where('activo', 1);
        $productos->where('descripcion', 'ILIKE', '%' . $searchValue . '%');
        $conf = session()->get('id_empresa');
        $productos->where('id_empresa',$conf);
        $productos->orderBy('descripcion', 'asc');
        return $productos->limit(10)->get();
    }


    public function buscarPS($request)
    {
        $productos = $this->select(['id_producto','codigo_barra','codigo_consecutivo','codigo_sistema','condicion','costo_estandar','descripcion AS text']);
        $searchValue = $request->q;
        $productos->where('activo', 1);
        $productos->whereIn('tipo_producto', array( 1,3));
        $productos->where('descripcion', 'ILIKE', '%' . $searchValue . '%')
        ->Orwhere('codigo_barra', $searchValue)->Orwhere('codigo_sistema', $searchValue);
        $productos->orderBy('descripcion', 'asc');
        return $productos->limit(10)->get();
    }



    public function obtenerProductosEntrada($request)
    {
        $productos = $this->select(['*','descripcion AS text']);
        $searchValue = $request->q;
        $productos->where('activo', 1);
        $productos->where('descripcion', 'ILIKE', '%' . $searchValue . '%');
        $productos->orderBy('descripcion', 'asc');
        return $productos->limit(10)->get();
    }




    public function generarCodigoBateria($id_proveedor,$id_marca,$id_submarca,$id_aplicacion)
    {
        $codigo = $this->select([DB::raw("COALESCE(max(codigo_consecutivo),0)+1 as secuencia")])
            ->join('inventario.baterias_detalles', 'inventario.productos.id_producto', '=', 'inventario.baterias_detalles.id_producto')
            ->join('inventario.baterias_submarcas', 'inventario.baterias_detalles.id_submarca', '=', 'inventario.baterias_submarcas.id_submarca')
            ->join('inventario.baterias_subaplicaciones', 'inventario.baterias_detalles.id_subaplicacion', '=', 'inventario.baterias_subaplicaciones.id_subaplicacion');
        if((!empty($id_proveedor))&&(!empty($id_marca))&&(!empty($id_submarca))&&(!empty($id_aplicacion))){
            $codigo->where('condicion',1);
            $codigo->where('id_proveedor',$id_proveedor);
            $codigo->where('inventario.baterias_submarcas.id_marca',$id_marca);
            $codigo->where('inventario.baterias_submarcas.id_submarca',$id_submarca);
            $codigo->where('inventario.baterias_subaplicaciones.id_aplicacion',$id_aplicacion);
        }
        return $codigo->first();
    }

    /**
     * Obtener Lista de productos
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerTransformaciones($request)
    {
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $transformacion = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $transformacion->where($searchField, 'ilike', '%' . $searchValue . '%');

            if($statusValue == 0)
            {
                $transformacion -> whereIn('estado',array(1,2))
                    ->whereIn('id_empresa',array($conf,$id_empresa_global));;
            }else
            {
                $transformacion -> whereIn('estado',array(1,2,3))
                 ->whereIn('id_empresa', array($conf,$id_empresa_global));
            }
            //$productos->where('activo',true);
            //$productos->whereIn('id_producto',array(2, 4, 7, 8, 10, 11, 12, 13, 18, 21, 22, 24, 25, 26, 27, 28, 29, 59, 65, 118, 135, 142, 143, 144, 145, 146, 147, 148, 149, 158, 161, 162, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175));
            /*$productos->whereIn('tipo_producto',array(4));*/
            /*$transformacion->with('unidadMedida');*/
            /*$transformacion->with('rubroProducto');*/
            $transformacion->with('productos');
            $transformacion->with('salidaTransformacion');
            $transformacion->with('entradaTransformacion');
            $transformacion->with('productosBodega');
            $transformacion->orderBy('id_transformacion', 'asc');
        }
        return $transformacion->paginate($request->limit);

    }

    public function obtenerTransformacion($request)
    {
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $transformacion = $this->select(['*']);
        $transformacion->where('id_transformacion',$request->id_transformacion)
            ->whereIn('id_empresa',array($conf,$id_empresa_global));

            $transformacion->with(['entradaTransformacion' => function($query){
            $query->with(['productosBodega'=> function($query2){
                $query2->with(['producto']);
            }]);
            $query->with(['productosEntrada']);
            $query->with(['presentacionEntrada']);

        }]);
        $transformacion->with(['salidaTransformacion' => function($query){
            $query->with(['productosBodega' => function($query2)
            {
                $query2->with(['producto']);
            }]);
            $query->with(['productosSalida']);
            $query->with(['presentacionSalida']);
        }]);
        $transformacion->with(['bodegaRegistrada'=> function($query){
            $query->with(['productosBodega' => function($query2){
                $query2->with(['producto']);
                $query2->with(['presentacion']);
            }]);
        }]);

        return $transformacion->first();
    }

    /**
     * Obtener Lista de productos
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerBaterias($request)
    {
        $productos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $productos->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $productos->where('activo',true);
            }

            $productos->whereIn('tipo_producto',array(3));
          //  $productos->where('activo',true);
            $productos->with('unidadMedida');
            $productos->with('rubroProducto');

            $productos->with(['productoDetallesBaterias' => function($query) {
            $query->with('bateriaMaterial');
            $query->with('bateriaLineaProducto');
            $query->with('bateriaSubAplicacion');
            $query->with('bateriaSubMarca');
            }]);

            $productos->orderBy('codigo_sistema', 'asc');
        }
        return $productos->paginate($request->limit);
    }



    /**
     * Obtener Num Producto
     *
     * @access 	public
     * @param
     * @return 	array
     */

    public function obtenerCodigoProducto($request)
    {
        $codigo = $this->select([DB::raw("COALESCE(max(codigo_consecutivo),0)+1 as codigo_siguiente")]);
        if((!empty($request->id_rubro))){
            $codigo->where('id_rubro',$request->id_rubro);
        }
        return $codigo->get();
    }

    public function obtenerProducto($request)
    {   
        $productos = $this->select(['*']);
        $productos->where('id_producto', $request->id_producto);
        /*$productos->with(['proveedoresLista' => function($query) {
            $query->with('proveedores');
        }]);*/
        $productos->with('unidadMedida');
        $productos->with('rubroProducto');
        $productos->with('impuestoProducto');
        $productos->with('productos');
        $productos->with('productoPresentacion');
        $productos->with('presentacion');
        return $productos->get();
    }

    public function obtenerBateria($request)
    {
        $productos = $this->select(['*']);
        $productos->where('id_producto', $request->id_producto);

        $productos->with('unidadMedida');
        $productos->with('rubroProducto');
        $productos->with('impuestoProducto');

        $productos->with(['productoDetallesBaterias' => function($query) {
            $query->with('bateriaMaterial');
            $query->with('bateriaLineaProducto');
            $query->with('bateriaSubAplicacion');
            $query->with('bateriaSubMarca');
        }]);

        return $productos->get();
    }

    public function obtenerProductosBodega($request)
    {   
        $productos = $this->select(['inventario.productos.codigo_sistema','inventario.productos.id_unidad_medida','inventario.productos.nombre_comercial as nom_prod','inventario.productos.id_producto',
        'inventario.bodegas_productos.id_bodega_producto as id_bodega_producto','inventario.productos.costo_estandar as precio_sugerido',
        DB::raw("concat(inventario.productos.codigo_sistema,' - ',inventario.productos.nombre_comercial) as nombre_producto"),
        DB::raw("(SELECT COALESCE(sum(iep.cantidad_recibida),0) as entradas FROM inventario.entradas_productos iep  left join inventario.entradas ie on ie.id_entrada=iep.id_entrada
        where ie.estado in (2) and iep.id_bodega_producto = inventario.bodegas_productos.id_bodega_producto) -(SELECT COALESCE(sum(isp.cantidad_despachada),0) as salidas FROM inventario.salidas_productos isp
        left join inventario.salidas ie on ie.id_salida=isp.id_salida where ie.estado in (2) and isp.id_bodega_producto = inventario.bodegas_productos.id_bodega_producto) as inventario")
        ]);
        $productos->leftJoin('inventario.bodegas_productos', 'inventario.productos.id_producto', '=', 'inventario.bodegas_productos.id_producto');
        $productos->where('inventario.bodegas_productos.id_bodega', '=', $request->id_bodega);
        $productos->where('inventario.productos.activo', '=', 1);
        $productos->groupBy('inventario.productos.codigo_sistema','inventario.productos.id_unidad_medida', 'inventario.productos.nombre_comercial','inventario.productos.id_producto','inventario.bodegas_productos.id_bodega_producto');
        //$productos->having('inventario', '>', 0);
        $productos->havingRaw('(SELECT COALESCE(sum(iep.cantidad_recibida),0) as entradas FROM inventario.entradas_productos iep  left join inventario.entradas ie on ie.id_entrada=iep.id_entrada
        where ie.estado in (2) and iep.id_bodega_producto = inventario.bodegas_productos.id_bodega_producto) -(SELECT COALESCE(sum(isp.cantidad_despachada),0) as salidas FROM inventario.salidas_productos isp
        left join inventario.salidas ie on ie.id_salida=isp.id_salida where ie.estado in (2) and isp.id_bodega_producto = inventario.bodegas_productos.id_bodega_producto) > 0');
        
        $productos->with('unidadMedida');

        return $productos->get();
    }
     
    public function obtenerProductosValidos($request)
    {
       $productos = $this->select(['*']);
       $productos->where('activo', 1)->whereIn('tipo_producto',array(1,3))->with('unidadMedida')->with('impuestoProducto')->with('productoDetallesBaterias')->orderby('id_producto');
       return $productos->get();
    }

    /*public function proveedoresLista()
    {
        return $this->hasMany('App\Models\InventarioProductoProveedor','id_producto');
    }*/

    public function entradasProductos()
    {
        return $this->hasMany('App\Models\InventarioEntradaProductos','id_producto');
    }

  /*  public function productoDetallesBaterias()
    {
        return $this->hasOne('App\Models\InventarioProductosBaterias','id_producto');
    }*/
    public function productos(){
        return $this->belongsTo('App\Models\InventarioProductos','id_producto');
    }

    public function unidadMedida()
    {
        return $this->belongsTo('App\Models\InventarioUnidadMedida','id_unidad_medida')->select('id_unidad_medida','unidad_medida','descripcion','simbolo','relacion_um_estandar');
    }

    /*public function rubroProducto()
    {
        return $this->belongsTo('App\Models\PublicRubros','id_rubro');
    }*/

   /* public function impuestoProducto()
    {
        return $this->belongsTo('App\Models\PublicImpuestos','id_impuesto');
    }*/

    public function productosEnBodega()
    {
        //return $this->hasMany('App\Models\InventarioBodegaProductos','id_producto');
        return $this->belongsToMany('App\Models\InventarioProductos', 'inventario.bodegas_productos', 'id_producto', 'id_bodega')->using('App\Models\InventarioBodegaProductos');
    }
    public function productoPresentacion(){
        return $this->hasMany('App\Models\InventarioProductosPresentaciones','id_producto');
    }
    public function presentacion(){
        return $this->hasMany('App\Models\InventarioPresentacion','id_presentacion');
    }
    public function productosBodega(){
        return $this->belongsTo('App\Models\InventarioBodegaProductos','id_bodega_producto');
    }
    public function entradaBodega(){
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega');
    }
    public function salidaTransformacion(){
        return $this->hasMany('App\Models\InventarioTransformacionDetalle','id_transformacion');
    }
    public function entradaTransformacion(){
        return $this->hasMany('App\Models\InventarioTransformacionDetalleEntrada','id_transformacion');
    }
    public function bodegaRegistrada(){
        return $this->hasMany('App\Models\InventarioBodegas','id_bodega','id_bodega');
    }
    public function productoRegistrado(){
        return $this->hasMany('App\Models\InventarioProductos');
    }
}