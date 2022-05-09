<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CuentasXCobrarRecibos extends Model
{
    protected $table = 'cuentasxcobrar.recibos_ingresos';
    protected $primaryKey='id_recibo';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    //protected $fillable = ['num_documento','beneficiario','valor','estado'];

    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
  
    /**
     * Obtener Lista de entradas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtener($request)
    {
        $recibos = $this->select(['*']);
        if (!empty($request->search['field'])) {   
           $searchField = $request->search['field'];
           $searchValue = $request->search['value'];
           $recibos->where($searchField, 'ilike', '%' . $searchValue . '%');          
       }
        $recibos->where('tipo_recibo',$request->search['type']);
        if($request->search['type']==1){
            $recibos->with('reciboDetalles','reciboCliente');
        }

        if($request->search['type']==2){
            $recibos->with('reciboDetalles','reciboTrabajador');
        }

        $recibos->orderBy('id_recibo','desc');

        return $recibos->paginate($request->limit);
    }


    public function reciboDetalles()
    {
        return $this->hasMany('App\Models\CuentasXCobrarRecibosDetalles','id_recibo');
    }

    public function reciboCliente()
    {
        return $this->belongsTo('App\Models\VentaClientes','id_cliente')->select('id_cliente','tipo_persona','nombre_comercial','numero_ruc','numero_cedula');
    }

    public function reciboTrabajador()
    {
        return $this->belongsTo('App\Models\RRHHTrabajadores','id_trabajador')->select('id_trabajador','primer_nombre','primer_apellido','segundo_nombre','segundo_apellido');
    }

    /*public function reciboMoneda()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda');
    }*/

}