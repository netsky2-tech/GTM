<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioBaterias extends Model {

	public $timestamps = false;
	protected $table = 'inventario.baterias';
	protected $primaryKey='id_bateria';

    /**
     * Buscar baterias
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function buscarBaterias($request)
    {
        $baterias = $this->select(['inventario.baterias.id_bateria','inventario.productos.descripcion','inventario.baterias.id_producto','inventario.baterias.codigo_barras','inventario.baterias.estado','inventario.baterias.codigo_garantia AS text']);
        $baterias->leftJoin('inventario.productos', 'inventario.productos.id_producto', 'inventario.baterias.id_producto');

        //if ((!empty($request->q))) {
            $searchValue = $request->q;
            //$baterias->where('codigo_garantia',$searchValue);
            $baterias->WhereRaw("upper(codigo_garantia) = upper(?)",[$searchValue]);


        //}
        $baterias->orderBy('inventario.productos.codigo_sistema', 'asc');
        //$baterias->where('estado', 1);
        return $baterias->limit(10)->get();
    }

    public function bateriaProducto()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto')->select('id_producto','descripcion');
    }

    public function bateriaBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega');
    }

    public function movimientoBateria()
    {
        return $this->hasMany('App\Models\InventarioMovimientosBaterias','id_bateria');
    }
}