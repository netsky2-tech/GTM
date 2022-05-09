<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoProformas extends Model
{

    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'cjabnco.proformas';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    //protected $fillable = ['codigo_requisa','fecha_solicitud','estado'];    protected $table = 'cjabnco.proformas';
    protected $primaryKey='id_proforma';

    /**
     * Obtener Lista de Salidas
     *
     * @access  public
     * @param   
     * @return  json(array)
     */

    public function obtenerProformas($request)
    {
        $proformas = $this->select(['*']);
        if (!empty($request->search['field'])) {

            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $proformas->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $proformas->with('proformaProductos');
        $proformas->with('proformaMoneda');
        $proformas->with('proformaSucursal');
        $proformas->with('proformaBodega');
        $proformas->with('proformaVendedor');
        $proformas->with('proformaCliente');
        $proformas->with('proformaTipoCliente');
        $proformas->orderBy('f_creacion', 'desc');

        return $proformas->paginate($request->limit);
    }

    public function obtenerProforma($request)
    {
        $proforma = $this->select(['*']);
        $proforma->where('id_proforma', $request->id_proforma);

        $proforma->with(['proformaProductos' => function($query) {
            $query->with(['bodegaProducto' => function($query2) {
                $query2->with('productoSimple');
            }]);
        }]);

        $proforma->with('proformaSucursal');
        $proforma->with('proformaMoneda');

        $proforma->with('proformaBodega');
        $proforma->with('proformaVendedor');
        $proforma->with('proformaCliente');
        $proforma->with('proformaTipoCliente');
        return $proforma->first();
    }


    public function obtenerProformasCliente($request)
    {
        $productos = $this->select([
            'id_proforma',
            'no_documento',
            'f_proforma',
            'id_cliente',
            'impuesto_exonerado',
            'mt_total',
            'saldo_proforma',
            'f_vencimiento',
            'estado',
        ]);
        if ((!empty($request->id_cliente))) {
            $productos->Where('id_cliente', $request->id_cliente);
           // $productos->Where('saldo_actual', '>',0);
            $productos->orderBy('f_proforma', 'asc');
            return $productos->get();
        }else{
            return $productos->limit(0)->get();
        }
    }

    public function buscar($request)
    {

        $proformas = $this->select(['id_proforma','no_documento','id_vendedor','estado',DB::raw("no_documento AS text")])
            ->where('estado',1);

        if ((!empty($request->q))) {
            $searchValue = $request->q;
            $proformas->where('no_documento', 'ILIKE', '%' . $searchValue . '%');
            $proformas->orderBy('no_documento', 'asc');
            return $proformas->limit(6)->get();
        }else{
            $proformas->orderBy('no_documento', 'asc');
            return $proformas->limit(6)->get();

        }
    }


    public function proformaProductos()
    {
        return $this->hasMany('App\Models\CajaBancoProformasProductos','id_proforma');
    }

    public function proformaSeguimiento()
    {
        return $this->hasMany('App\Models\CajaBancoProformasSeguimiento','id_proforma');
    }

    public function proformaMoneda()
    {
        return $this->belongsTo('App\Models\CajaBancoMonedas','id_moneda')->select(['*','descripcion as text']);
    }

    public function proformaSucursal()
    {
        return $this->belongsTo('App\Models\PublicSucursales','id_sucursal')->select(['*','descripcion as text']);
    }

    public function proformaBodega()
    {
        return $this->belongsTo('App\Models\InventarioBodegas','id_bodega')->select(['*','descripcion as text']);
    }

    public function proformaCliente()
    {
        return $this->belongsTo('App\Models\VentaClientes','id_cliente')->select(['*','nombre_comercial as text']);
    }

    public function proformaVendedor()
    {
        return $this->belongsTo('App\Models\VentaVendedores','id_vendedor')->select(['*','nombre_completo as text']);
    }

    public function proformaTipoCliente()
    {
        return $this->belongsTo('App\Models\VentaTiposCliente','id_tipo_cliente')->select(['*','descripcion as text']);
    }

  
}

