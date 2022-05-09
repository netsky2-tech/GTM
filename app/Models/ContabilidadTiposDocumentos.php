<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;
use Exception;

class ContabilidadTiposDocumentos extends Model
{
    protected $table = 'contabilidad.tipos_documentos';
    protected $primaryKey='id_tipo_doc';
    protected $fillable = ['descripcion','estado'];
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';


    /**
     * Get next counter value for the provided key
     *
     * @param  string $key
     * @return string
     */
    public function codigoSiguiente($id_tipo_documento)
    {
        $tipo = $this->select(['*'])->where('id_tipo_doc', $id_tipo_documento)->first();

        if(!$tipo) {
            throw new Exception('No record for counter found');
        }
        return $tipo->prefijo.$tipo->secuencia;
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
     * Obtener Lista de Tipos Cuenta
     *
     * @access 	public
     * @param 	
     * @return 	json(array)
     */

    public function obtener($request)
    {
        $tipos = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $tipos->where($searchField, 'ilike', '%' . $searchValue . '%');
            if($statusValue == 0){
                $tipos->where('estado',true);
            }
        }
        $tipos->orderBy('contabilidad.tipos_documentos.id_tipo_doc');
        return $tipos->paginate($request->limit);
    }

}
