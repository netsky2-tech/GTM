<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioBodegas extends Model
{
    protected $table = 'inventario.bodegas';
    protected $primaryKey='id_bodega';
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $dateFormat = 'Y-m-d H:i:s.u';

    protected $fillable = ['unidad_medida','u_grabacion','activo'];

    public function buscar($request)
    {
        $sucusales = $this->select(['id_bodega',DB::raw("descripcion AS text")]);
        $sucusales->where('activo', 1);

        if (!empty($request->q)) {
            $searchValue = $request->q;
            $sucusales->where('descripcion', 'ILIKE', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $sucusales->where('id_empresa',$conf);
        }
        $sucusales->orderBy('id_bodega', 'asc');
        return $sucusales->limit(6)->get();
    }

    /**
     * Replace Field
     *
     * @access 	public
     * @param 	
     * @return 	string
     */

	public function replaceField($field, $fields = [])
    {
        if (in_array($field, $fields)) {
            return $fields[$field];
        }

        return $field;
    }

    /**
     * Get List of Groups
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtener($request)
    {
        $bodegas = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $bodegas->where($searchField, 'ilike', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $id_empresa_global = 0;
            $bodegas->whereIn('id_empresa',array($conf,$id_empresa_global));
            if($statusValue == 0){
                $bodegas->where('activo',true);
            }
            $bodegas->orderBy('id_bodega', 'asc');
        }
        $bodegas->with('centroCostoBodega');
        $bodegas->with('sucursalBodega');
        $bodegas->with('tipoBodega');
        return $bodegas->paginate($request->limit);
    }

    public function centroCostoBodega()
    {
        return $this->belongsTo('App\Models\ContabilidadCentroCostoIngreso','id_centro')->select('id_centro','descripcion');
    }

    public function sucursalBodega()
    {
        return $this->belongsTo('App\Models\PublicSucursales','id_sucursal')->select(['id_sucursal','descripcion']);
    }

    public function tipoBodega()
    {
        return $this->belongsTo('App\Models\InventarioTipoBodega','id_tipo_bodega')->select(['id_tipo_bodega','descripcion']);
    }

    /*public function productosBodega()
    {
        return $this->hasMany('App\Models\InventarioBodegas', 'inventario.bodegas_productos', 'id_bodega', 'id_producto')->using('App\Models\InventarioBodegaProductos');
    }*/

    public function productosBodega()
    {
        return $this->hasMany('App\Models\InventarioBodegaProductos','id_bodega')
            ->orderBy('fecha_vencimiento')
            ->orderBy('id_producto')
            ->orderBy('id_presentacion');
    }

}
