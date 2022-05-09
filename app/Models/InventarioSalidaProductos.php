<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioSalidaProductos extends Model {

	protected $table = 'inventario.salidas_productos';
	protected $primaryKey='id_salida_producto';
	const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';

    public function bodegaProducto()
    {
        return $this->belongsTo('App\Models\InventarioBodegaProductos','id_bodega_producto');
    }

    public function salidaProductoBaterias()
    {
        return $this->hasMany('App\Models\InventarioSalidaProductoBaterias','id_salida_producto');
    }

    public function salidaPresentacion()
    {
        return $this->belongsTo('App\Models\InventarioPresentacion','id_presentacion')
            ->join('inventario.clasificacion_unidades_medidas', 'inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida', 'inventario.presentaciones.id_unidad_medida_calculo')
            ->join('inventario.unidades_medidas', 'inventario.unidades_medidas.id_unidad_medida', 'inventario.presentaciones.id_unidad_medida_presentacion');
    }
}