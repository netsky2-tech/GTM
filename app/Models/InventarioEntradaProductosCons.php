<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioEntradaProductosCons extends Model {

	protected $table = 'inventario.entradas_inicial_productos';
	protected $primaryKey='id_entrada_inicial_producto';
	public $timestamps=false;


    public function entradaInicial()
    {
        return $this->belongsTo('App\Models\InventarioEntradasInicial','id_entrada_inicial');
    }

    public function entradaProducto()
    {
        return $this->belongsTo('App\Models\InventarioProductos','id_producto')->select(['id_producto','codigo_sistema',
           DB::raw("CONCAT(inventario.productos.nombre_comercial,' (',inventario.productos.codigo_sistema,')') AS text")]);
    }
    public function entradaPresentacion()
    {
        return $this->belongsTo('App\Models\InventarioPresentacion','id_presentacion')
            ->join('inventario.clasificacion_unidades_medidas', 'inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida', 'inventario.presentaciones.id_unidad_medida_calculo')
            ->join('inventario.unidades_medidas', 'inventario.unidades_medidas.id_unidad_medida', 'inventario.presentaciones.id_unidad_medida_presentacion');
    }
}