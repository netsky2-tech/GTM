<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioEntradaProductos extends Model {

	protected $table = 'inventario.entradas_productos';
	protected $primaryKey='id_entrada_producto';
	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';


    public function bodegaProducto()
    {
        return $this->belongsTo('App\Models\InventarioBodegaProductos','id_bodega_producto');
    }

    public function entradaProductoBaterias()
    {
        return $this->hasMany('App\Models\InventarioEntradaProductoBaterias','id_entrada_producto');
    }
    public function entradaPresentacion()
    {
        return $this->belongsTo('App\Models\InventarioPresentacion','id_presentacion')
            ->join('inventario.clasificacion_unidades_medidas', 'inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida', 'inventario.presentaciones.id_unidad_medida_calculo')
            ->join('inventario.unidades_medidas', 'inventario.unidades_medidas.id_unidad_medida', 'inventario.presentaciones.id_unidad_medida_presentacion');
    }
}