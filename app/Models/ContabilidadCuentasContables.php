<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadCuentasContables extends Model 
{
    protected $table = 'contabilidad.cuentas_contables';
    protected $primaryKey='id_cuenta_contable';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['nombre_cuenta','codigo_cuenta','permite_movimiento','estado'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
  
    /**
     * Obtener Lista de entradas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerCuentasContables($request)
    {
        $cuentas_contables = $this->select(['*']);
        if (!empty($request->search['field'])) {   
           $searchField = $request->search['field'];
           $searchValue = $request->search['value'];
           $statusValue = $request->search['status'];
           $cuentas_contables->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $cuentas_contables->where('estado',1);
            }
       }
       $cuentas_contables->with('cuentaPadre');
       $cuentas_contables->with('cuentaNivel');
       $cuentas_contables->with(['cuentaTipo' => function($query) {
       $query->with('tipoCuentaEstadoFinanciero');
    }]);
    $cuentas_contables->orderBy('id_cuenta_contable');

        return $cuentas_contables->paginate($request->limit);
    }

    /**
     * Buscar cuentas contables
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function buscarCuentasContables($request)
    {
        $cuentas_contables = $this->select(['*','contabilidad.cuentas_contables.nombre_cuenta_completo AS text']);

        if ((!empty($request->q)) && (!empty($request->id_nivel_cuenta)) && (is_numeric($request->id_nivel_cuenta))) {
            $searchValue = $request->q;
            $cuentas_contables->where('contabilidad.v_cuentas_contables.estado', '=', 1);
            $cuentas_contables->where('contabilidad.v_cuentas_contables.id_nivel_cuenta', '=', $request->id_nivel_cuenta);
            $cuentas_contables->with(['cuentaTipo' => function($query) {
                $query->with('tipoCuentaEstadoFinanciero');
            }]);
            $cuentas_contables->where('contabilidad.v_cuentas_contables.nombre_cuenta_completo', 'ILIKE', '%' . $searchValue . '%');
            $cuentas_contables->orderBy('contabilidad.v_cuentas_contables.nombre_cuenta_completo', 'asc');
            return $cuentas_contables->limit(6)->get();
        }else{
            return '';
        }

    }

    public function obtenerCuentaContable($request)
    {   
        $cuenta_contable = $this->select(['*']);
        $cuenta_contable->where('contabilidad.cuentas_contables.id_cuenta_contable', '=', $request->id_cuenta_contable);
       /* $cuenta_contable->whereIn('contabilidad.cuentas_contables.estado', array(2));
        $cuenta_contable->whereIn('contabilidad.cuentas_contables.id_tipo_cuenta', array(1,3));*/
        $cuenta_contable->with('cuentaPadre');
        $cuenta_contable->with('cuentaNivel');
        //$cuenta_contable->with('cuentaAnexo');
        $cuenta_contable->with(['cuentaTipo' => function($query) {
            $query->with('tipoCuentaEstadoFinanciero');
        }]);

        return $cuenta_contable->get();
    }

    public function cuentaPadre()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasContablesVista','id_cuenta_padre');
    }

    public function cuentaNivel()
    {
        return $this->belongsTo('App\Models\ContabilidadNivelesCuenta','id_nivel_cuenta');
    }

    public function cuentaTipo()
    {
        return $this->belongsTo('App\Models\ContabilidadTiposCuenta','id_tipo_cuenta');
    }

   /* public function cuentaAnexo()
    {
        return $this->belongsTo('App\Models\ContabilidadAnexos','id_anexo');
    }*/
    
}