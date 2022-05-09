<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadDocumentosContables extends Model 
{
    protected $table = 'contabilidad.documentos_contables';
    protected $primaryKey='id_documento';
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
        $documentos_contables = $this->select(['*']);
        if (!empty($request->search['field'])) {   
           $searchField = $request->search['field'];
           $searchValue = $request->search['value'];
           $documentos_contables->where($searchField, 'ilike', '%' . $searchValue . '%');          
       }

       /*$documentos_contables->with(['documentoOrigenFondo' => function($query) {
        $query->with('cuentaContableOrigenFondo');
        $query->with('monedaOrigenFondo');}]);
        */
       $documentos_contables->with('documentoPeriodo');
       $documentos_contables->with('documentoTipo');
      
     /*  $documentos_contables->with(['documentoCuentaBancaria' => function($query) {
        $query->with('bancoCuentasBancarias');
        $query->with('cuentaContableCuentasBancarias');
        $query->with('monedaCuentaBancaria');}]);*/

       $documentos_contables->with(['movimientosCuentas' => function($query) {
       $query->with('cuentaContable')->with('centroCosto'); }]);
       $documentos_contables->orderBy('id_documento','desc');

        return $documentos_contables->paginate($request->limit);
    }

    public function obtenerDocumento($request)
    {   
        $documentos_contables = $this->select(['*']);
        $documentos_contables->where('contabilidad.documentos_contables.id_documento', '=', $request->id_documento);
        $documentos_contables->with(['documentoOrigenFondo' => function($query) {
            $query->with('cuentaContableOrigenFondo');
            $query->with('monedaOrigenFondo');}]);
    
           $documentos_contables->with('documentoPeriodo');
           $documentos_contables->with('documentoTipo');
          
           $documentos_contables->with(['documentoCuentaBancaria' => function($query) {
            $query->with('bancoCuentaBancaria');
            $query->with('cuentaContableCuentaBancaria');
            $query->with('monedaCuentaBancaria');}]);
    
           $documentos_contables->with(['movimientosCuentas' => function($query) {
           $query->with('cuentaContable');}]);
           $documentos_contables->orderBy('id_documento');

        return $documentos_contables->get();
    }


    /**
     * Obtener Num Doc
     *
     * @access 	public
     * @param
     * @return 	json(array)
     */

    public function obtenerCodigoDocumento($request)
    {
        $codigo = $this->select([DB::raw("COALESCE(max(codigo_documento),0)+1 as secuencia")]);
        //print_r($request);
       // echo $request->fecha_doc;
        //echo $request->id_tipo_doc;
        if((!empty($request['fecha_doc']) && !empty($request['id_tipo_doc']))){
            $codigo->whereRaw("(EXTRACT(Month FROM TIMESTAMP '".$request['fecha_doc']."') = EXTRACT(Month FROM fecha_emision))")
            ->where('id_tipo_doc',$request['id_tipo_doc']);
        }
        return $codigo->get();
    }


    public function movimientosCuentas()
    {
        return $this->hasMany('App\Models\ContabilidadDocumentosMovimientos','id_documento')
            ->orderby('haber','asc')->orderby('cta_contable','asc');
    }

    public function documentoPeriodo()
    {
        return $this->belongsTo('App\Models\ContabilidadPeriodoFiscal','id_periodo_fiscal');
    }

    public function documentoTipo()
    {
        return $this->belongsTo('App\Models\ContabilidadTiposDocumentos','id_tipo_doc');
    }

    public function documentoCuentaBancaria()
    {
        return $this->belongsTo('App\Models\ContabilidadCuentasBancarias','id_cuenta_bancaria');
    }

    public function documentoMoneda()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda');
    }

}