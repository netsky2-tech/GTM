<?php 

namespace App\Models;


use DB, Illuminate\Database\Eloquent\Model;

class InventarioConsignacionProductosVista extends Model {

	public $timestamps = false;
	protected $table = 'inventario.vista_consignacion_cliente';
	protected $primaryKey='id_cliente';

    public function obtenerPorCliente($request)
    {


        $consignacion = $this->select(['*']);
        $consignacion->where('id_cliente',$request->cliente['id_cliente'])
        //->where('cantidad','>',0)
        ;

        return $consignacion->get();
    }

    public function obtenerTodos($request)
    {

        $consignacion = $this->select(['*']);
        //$consignacion->where('id_cliente',$request->cliente['id_cliente']);
        return $consignacion->get();
    }

}