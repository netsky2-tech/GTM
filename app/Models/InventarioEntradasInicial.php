<?php 

namespace App\Models;

use DB,Auth, Illuminate\Database\Eloquent\Model;

class InventarioEntradasInicial extends Model
{
    protected $table = 'inventario.entradas_inicial';
    protected $primaryKey='id_entrada_inicial';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['fecha_entrada','id_bodega','estado'];
    public $timestamps=false;


    public function obtener($request)
    {
        // $entradas = InventarioEntradas::with('entradaProveedor');
        $entradas = $this->select(['*'])->where('estado','<>',0);
        $entradas->Has('entradaProductos');
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;
        $entradas->whereIn('id_empresa',array($conf,$id_empresa_global));

        /*if (!empty($request->search['field'])) {

            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $entradas->where($searchField, 'ilike', '%' . $searchValue . '%');
        }*/
        //$entradas->with('entradaBaterias');
        $entradas->with('trabajadorEntradaInicial');
        $entradas->with('entradaBodega');

        $entradas->orderBy('id_entrada_inicial', 'desc');
        //print_r(Auth::user()->id_empleado);

        return $entradas->paginate($request->limit);
    }

    public function obtenerEntradaInvInicial($request)
    {
        $entrada = $this->select(['*']);
        $entrada->where('id_entrada_inicial', $request->id_entrada_inicial);

        $entrada->with(['entradaProductos' => function($query)
        { $query->with('entradaProducto');
            $query->with('entradaPresentacion');}]);


        $entrada->with(['entradaBaterias' => function($query)
        { $query->with('productoSimple');}]);
        $entrada->with('trabajadorEntradaInicial');
        $entrada->with('entradaBodega');
        $entrada->with('entradaZona');


        return $entrada->first();
    }

    public function entradaBaterias()
    {
        return $this->hasMany('App\Models\InventarioEntradaInicialProductos','id_entrada_inicial');
    }

    public function entradaProductos()
    {
        return $this->hasMany('App\Models\InventarioEntradaProductosCons','id_entrada_inicial');
    }


    public function entradaBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega');
    }
    public function entradaZona()
    {
        return $this->belongsTo('App\Models\ContabilidadCentroCostoIngreso','id_zona_costo','id_centro');
    }
    public function trabajadorEntradaInicial()
    {
        return $this->belongsTo('App\Models\RRHHTrabajadores','id_trabajador')->select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"));
    }



}