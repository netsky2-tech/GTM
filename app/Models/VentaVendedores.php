<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class VentaVendedores extends Model
{
    public $timestamps = false;
    protected $table = 'venta.vendedores';
    //protected $fillable = ['nombre_comercial','estado'];
    protected $primaryKey='id_vendedor';

    public function obtener($request)
    {
        $vendedores = $this->select('id_vendedor','nombre_completo','id_zona');
            $vendedores->whereHas('comisionesAsignadas');

        $vendedores->with(['comisionesAsignadas' => function($query)
        { $query->with('comisionMarca');}]);
        //$vendedores->with('trabajadorVendedor');

            $vendedores->orderBy('nombre_completo', 'asc');

        return $vendedores->paginate($request->limit);
    }

    public function obtenerVendedores($request)
    {
        $vendedores = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $vendedores->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $vendedores->where('activo',true);
            }
        }

        $vendedores->orderby('id_vendedor','asc');
        return $vendedores->paginate($request->limit);
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
     * Buscar clientes
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function buscar($request)
    {

        $vendedores = $this->select(['id_vendedor','nombre_completo','nombre_completo AS text']);
        if ((!empty($request->q))) {
            $searchValue = $request->q;
            $vendedores->where('activo', 1);
            $vendedores->where('nombre_completo', 'ILIKE', '%' . $searchValue . '%');
                /*->orWhere('nombre_comercial', 'ILIKE', '%' . $searchValue . '%')
                ->orWhere('contacto', 'ILIKE', '%' . $searchValue . '%')
                ->orWhere('numero_ruc', 'ILIKE', '%' . $searchValue . '%')
                ->orWhere('numero_cedula', 'ILIKE', '%' . $searchValue . '%');*/
            $vendedores->orderBy('nombre_completo', 'asc');
            return $vendedores->limit(10)->get();
        }else{
            $vendedores->where('activo', 1);
            return $vendedores->limit(6)->get();
        }

    }

    public function comisionesAsignadas()
    {
        return $this->hasMany('App\Models\VentaComisionesAsignaciones','id_vendedor');
    }

    public function trabajadorVendedor()
    {
        return $this->belongsTo('App\Models\RRHHTrabajadores','id_trabajador');
    }

   /* public function zonaCliente()
    {
        return $this->belongsTo('App\Models\PublicZonas','id_zona')->select('id_zona','descripcion');
    }

    public function tipoCliente()
    {
        return $this->belongsTo('App\Models\VentaTiposCliente','id_tipo_cliente')->select('id_tipo_cliente','descripcion');
    }

    public function municipioCliente()
    {
        return $this->belongsTo('App\Models\PublicMunicipios','id_municipio')->select('id_municipio','id_departamento','descripcion');
    }

    public function impuestoCliente()
    {
        return $this->belongsTo('App\Models\PublicImpuestos','id_impuesto')->select('id_impuesto','descripcion');
    }*/

}
