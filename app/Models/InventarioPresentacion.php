<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioPresentacion extends Model
{
    protected $table = 'inventario.presentaciones';
    protected $primaryKey='id_presentacion';
    protected $fillable = ['presentacion'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $dateFormat = 'Y-m-d H:i:s.u';
    /**
     * Replace Field
     *
     * @access 	public
     * @param 	
     * @return 	string
     * @author rjqueira
     */

	public function replaceField($field, $fields = [])
    {
        if (in_array($field, $fields)) {
            return $fields[$field];
        }

        return $field;
    }

    /**
     * Obtener Listado de presentaciones de productos
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     * @author rsequeira
     */

    public function obtener($request)
    {
        $um = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $um->where($searchField, 'ilike', '%' . $searchValue . '%');
            $um->with('origen');
            $um->with('grado');
            $um->with('unidadMedida');
            $um->where(function ($query){
                $conf = session()->get('id_empresa');
               $query->where('id_empresa',$conf)
                   ->orwhere('id_empresa',0);
            });
            if($statusValue == 0){
                $um->where('estado',1);
            }

            $um->orderBy('id_presentacion', 'asc');
        }
        return $um->paginate($request->limit);
    }

    /**
     * Busqueda de presentación dinámica
     *
     * @access 	public
     * @param
     * @return 	json(array)
     * @author octaviom
     */

    public function buscar($request)
    {
        $proveedores = $this->select(['codigo as text']);

        if ((!empty($request->q))) {
            $searchValue = $request->q;
            $proveedores->where('estado', 1);
            $proveedores->where('codigo', 'ILIKE', '%' . $searchValue . '%');
            $conf = session()->get('id_empresa');
            $proveedores->where('id_empresa',$conf);
            $proveedores->orderBy('codigo', 'asc');
            return $proveedores->limit(3)->get();
        }else{
            $proveedores->where('estado', 1);
            $proveedores->where('codigo',  'ILIKE', '%MEX%');
            return $proveedores->limit(1)->get();
        }
    }

    public function unidadMedida(){
            return $this->belongsTo( 'App\Models\InventarioUnidadMedida','id_unidad_medida_presentacion')
                ->select('id_unidad_medida','descripcion','unidad_medida','inventario.clasificacion_unidades_medidas.simbolo_um','inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida',DB::raw("CONCAT(inventario.unidades_medidas.unidad_medida,' ','(',inventario.unidades_medidas.descripcion,')')AS UM_concat"))
                ->join('inventario.presentaciones','inventario.unidades_medidas.id_unidad_medida','inventario.presentaciones.id_unidad_medida_presentacion')
                ->join('inventario.clasificacion_unidades_medidas','inventario.unidades_medidas.id_clasificacion_unidad_medida','=','inventario.clasificacion_unidades_medidas.id_clasificacion_unidad_medida');
    }
    public function origen(){
        return $this->belongsTo('App\Models\InventarioOrigen','id_origen');
    }
    public function grado(){
        return $this->belongsTo('App\Models\InventarioGrado','id_grado');
    }

}
