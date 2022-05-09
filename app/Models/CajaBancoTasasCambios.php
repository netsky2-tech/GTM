<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class CajaBancoTasasCambios extends Model
{
    protected $table = 'cjabnco.tasas_cambios';
    protected $primaryKey='id_tasa_cambio';
    protected $fillable = ['fecha','tasa','tasa_paralela'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    //protected $dateFormat = 'Y-m-d H:i:s.u';
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
     * Obtener Listado de Tasas de cambio
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerTasasCambio($request)
    {
        $tasas = $this->select(['*']);

        if((!empty($request->search['anio'])) && (!empty($request->search['mes'])) && $request->search['anio']!=0 && $request->search['mes']!=0){


            $tasas->whereRaw("cast(EXTRACT(month FROM fecha) as INTEGER) =".$request->search['mes']['mes']);
            $tasas->whereRaw("cast(EXTRACT( year FROM fecha) as INTEGER) = ".$request->search['anio']['periodo']);

        }

        $tasas->orderBy('cjabnco.tasas_cambios.fecha', 'desc');

        return $tasas->paginate($request->limit);
    }

     /**
     * Obtener Lista de Tasas de cambio
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerTasasReporte($request)
    {
        $tasas = $this->select(['*']);

        if((!empty($request->search['fecha_inicial'])) && (!empty($request->search['fecha_final'])) && $request->search['fecha_inicial']!='Invalid date' && $request->search['fecha_final']!='Invalid date'){
            
            $fechafinal = Carbon::parse($request->search['fecha_final'])->addDay(); 
            $tasas->whereBetween('fecha', [$request->search['fecha_inicial'], $fechafinal]);
        }

        $tasas->orderBy('cjabnco.tasas_cambios.fecha', 'desc');

        return $tasas->get();
    }


      /**
     * Obtener Listado de Tasas de cambio
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerMesAnioPendiente($request)
    {   
        $mes_anio = $this->select(
        DB::raw("EXTRACT(MONTH FROM DATE(max(fecha) + INTERVAL '1' DAY)) as mes"),
        DB::raw("EXTRACT(YEAR FROM DATE(max(fecha) + INTERVAL '1' DAY)) as anio")
        )->where('tasa','>',0);
        return $mes_anio->get();
    }

}
