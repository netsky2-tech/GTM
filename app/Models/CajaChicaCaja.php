<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaChicaCaja extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjachica.caja_chica';
    protected $primaryKey='id_caja_chica';
    protected $fillable = ['descripcion','anio','monto','estado'];
    protected $dateFormat = 'Y-m-d H:i:s.u';

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
/*
    public function obtenerCodigoZona()
    {
        $codigo = $this->select([DB::raw("COALESCE(max(codigo::integer),0)+1 as secuencia")]);
        return $codigo->first();
    }
*/
    /**
     * Obtener Listado de viaticos
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerCaja($request)
    {
        $caja = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $caja->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $caja->where('estado',true);
            }

            $caja->orderBy('id_caja_chica', 'asc');
        }
        $caja->with('trabajadorCaja');
        $caja->with('sucursalCaja');
        $caja->with('areaCaja');
        return $caja->paginate($request->limit);
    }

    public function trabajadorCaja()
    {
        return $this->belongsTo('App\Models\RRHHTrabajadores','id_trabajador')
            ->select('id_trabajador','primer_apellido','primer_nombre','segundo_apellido','segundo_nombre','codigo','cedula',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo"));
    }

    public function sucursalCaja()
    {
        return $this->belongsTo('App\Models\PublicSucursales','id_sucursal');
    }

    public function areaCaja()
    {
        return $this->belongsTo('App\Models\PublicAreas','id_area');
    }

}
