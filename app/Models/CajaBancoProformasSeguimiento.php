<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class CajaBancoProformasSeguimiento extends Model {

	public $timestamps = false;
	protected $table = 'cjabnco.cotizaciones_seguimientos';
	protected $primaryKey='id_proforma_seguimiento';
	const CREATED_AT = 'f_grabacion';
    const UPDATED_AT = 'f_modificacion';


    public function obtenerProformas($request)
    {
        $proformas = $this->select(['*']);
        if (!empty($request->search['field'])) {

            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $proformas->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $proformas->with('proformaVendedor');

        $proformas->orderBy('id_proforma', 'desc');

        return $proformas->paginate($request->limit);
    }

    public function proformaSeguimiento()
    {
        return $this->belongsTo('App\Models\CajaBancoProformas','id_proforma');
    }

    public function proformaVendedor()
    {
        return $this->belongsTo('App\Models\VentaVendedores','id_trabajador_seguimiento','id_vendedor')->select(['*','nombre_completo as text']);
    }
}