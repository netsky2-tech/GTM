<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class VentaPrecioListaBateria extends Model {

	//public $timestamps = true;
	protected $table = 'venta.precios_listas_baterias';
	protected $primaryKey='id_precio_lista_bateria';
	const CREATED_AT = 'f_grabacion';
    const UPDATED_AT = 'f_modificacion';

    public function obtenerPrecioLista($request)
    {
        $lista = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $lista->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $lista->where('estado',true);
            }
            $lista->orderBy('id_precio_lista_bateria');
        }
        return $lista->paginate($request->limit);
    }

    public function ListaGrupo()
    {
        return $this->BelongsTo('App\Models\VentaPrecioListaGrupo','id_precio_lista_grupo','id_precio_lista_grupos');
    }


}