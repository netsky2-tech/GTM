<?php 

namespace App\Models;


use DB, Illuminate\Database\Eloquent\Model;

class InventarioMovimientosProductosVista extends Model {

	public $timestamps = false;
	protected $table = 'inventario.v_movimiento_productos';
	protected $primaryKey='id_movimiento';

    public function obtenerMovimientos($request)
    {
        $movimientos = $this->select(['*']);
        $movimientos->where('id_producto',$request->productoB['id_producto']);
        $conf = session()->get('id_empresa');
        //$movimientos->where('id_empresa',$conf);
        if($request->bodega['id_bodega']>0){
            $movimientos->where('id_bodega',$request->bodega['id_bodega']);
        }
        if($request->presentacion['id_presentacion']>0){
            $movimientos->where('id_presentacion',$request->presentacion['id_presentacion']);
        }

        return $movimientos->get();
    }

}