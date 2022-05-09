<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class ContabilidadNivelesCuenta extends Model
{
    protected $table = 'contabilidad.niveles_cuentas';
    protected $primaryKey='id_nivel_cuenta';
    protected $fillable = ['descripcion','codigo_maximo', 'usuario_registra','estado'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';

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
     * Obtener Lista de Tipos Cuenta
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtenerNivelesCuenta($request)
    {
        $nivelesCuenta = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $nivelesCuenta->where($searchField, 'ilike', '%' . $searchValue . '%');
        }
        $nivelesCuenta->orderBy('id_nivel_cuenta');
        return $nivelesCuenta->paginate($request->limit);
    }
}
