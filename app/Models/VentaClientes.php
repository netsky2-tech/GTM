<?php

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Expr\Empty_;


class VentaClientes extends Model
{
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    protected $table = 'venta.clientes';
    protected $primaryKey = 'id_cliente';
    protected $fillable = ['nombre_comercial', 'estado'];
    protected $dateFormat = 'Y-m-d H:i:s.u';

    /**
     * Replace Field
     *
     * @access    public
     * @param
     * @return    string
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

        $clientes = $this->select(['id_cliente', 'codigo', 'tipo_persona', 'numero_cedula', 'numero_ruc', 'nombre_comercial', 'plazo_credito', 'id_tipo_cliente', 'limite_credito', 'permite_credito', 'id_vendedor'
            //  ,DB::raw("CONCAT((case venta.clientes.tipo_persona when 1 then venta.clientes.numero_cedula else venta.clientes.numero_ruc end), ' - ',(case venta.clientes.tipo_persona when 1 then venta.clientes.nombre_completo else venta.clientes.razon_social end),' (',venta.clientes.codigo,')') AS text")
            , DB::raw("CONCAT((case venta.clientes.tipo_persona when 1 then venta.clientes.nombre_completo else venta.clientes.razon_social end)) AS text")
            //  ,DB::raw("CONCAT(venta.clientes.nombre_comercial,' (',venta.clientes.codigo,')') AS text")
            , DB::raw("cjabnco.obtener_ventas_cliente(id_cliente) AS total_unidades_compradas")
            , DB::raw("cjabnco.obtener_unidades_bonificables_pendientes(id_cliente) AS total_unidades_bonificables")
            , DB::raw("coalesce(cuentasxcobrar.obtener_monto_credito(id_cliente),0) AS monto_credito_disponible")
        ]);
        $clientes->with('vendedorCliente');

        if ((!empty($request->q))) {
            $searchValue = $request->q;
            $clientes->where('estado', 1);
            $clientes->where('es_deudor', $request->es_deudor);

            $clientes->where(function ($query) use ($searchValue) {
                $query->where('codigo', 'ILIKE', '%' . $searchValue . '%')
                    ->orWhere('nombre_comercial', 'ILIKE', '%' . $searchValue . '%')
                    ->orWhere('nombre_completo', 'ILIKE', '%' . $searchValue . '%')
                    ->orWhere('razon_social', 'ILIKE', '%' . $searchValue . '%')
                    ->orWhere('contacto', 'ILIKE', '%' . $searchValue . '%')
                    ->orWhere('numero_ruc', 'ILIKE', '%' . $searchValue . '%')
                    ->orWhere('numero_cedula', 'ILIKE', '%' . $searchValue . '%');
            });

            $clientes->orderBy('codigo', 'asc');
            return $clientes->limit(6)->get();
        } else {
            $clientes->where('estado', 1);
            $clientes->where('nombre_comercial', 'ILIKE', '%Controls%');
            return $clientes->limit(0)->get();
        }

    }

    public function obtenerCodigoCliente($id_departamento, $id_municipio, $id_zona)
    {
        $codigo = $this->select([DB::raw("COALESCE(max(secuencia_codigo),0)+1 as secuencia")])
            ->join('public.municipios', 'venta.clientes.id_municipio', '=', 'public.municipios.id_municipio');
        if ((!empty($id_departamento)) && (!empty($id_municipio)) && (!empty($id_zona))) {
            $codigo->where('public.municipios.id_departamento', $id_departamento);
            $codigo->where('public.municipios.id_municipio', $id_municipio);
            $codigo->where('id_zona', $id_zona);
        }
        return $codigo->first();
    }

    /**
     * Obtener Lista de Clientes
     *
     * @access    public
     * @param
     * @return    json(array)
     */

    public function obtener($request)
    {
        $conf = session()->get('id_empresa');
        $id_empresa_global = 0;

        $clientes = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $creditType = $request->search['credit'];
            $clientes->where('es_deudor', $request->search['es_deudor']);
            $clientes->whereIn('id_empresa', array($conf, $id_empresa_global));

            if ($statusValue == 0) {
                $clientes->where('estado', 1);
            }
            if ($creditType == 1) {
                $clientes->where('permite_credito', true);
            }

            if (!empty($searchValue)) {
                if ($searchField = 'nombre_comercial' && $creditType == 1) {
                    /*($clientes->where('nombre_comercial', 'ILIKE', '%' . $searchValue . '%')->orWhere('nombre_completo', 'ILIKE', '%' . $searchValue . '%')
                        ->orWhere('razon_social', 'ILIKE', '%' . $searchValue . '%'))->where('permite_credito',true);*/

                    $clientes->where('permite_credito', true);

                    $clientes->Where(function ($query) use ($searchValue) {
                        $query->where('nombre_comercial', 'ILIKE', '%' . $searchValue . '%')
                            ->orWhere('nombre_completo', 'ILIKE', '%' . $searchValue . '%')
                            ->orWhere('razon_social', 'ILIKE', '%' . $searchValue . '%')
                            ->orWhere('numero_cedula', 'ILIKE', '%' . $searchValue . '%')
                            ->orWhere('numero_ruc', 'ILIKE', '%' . $searchValue . '%')
                            ->orWhere('contacto', 'ILIKE', '%' . $searchValue . '%');
                    });

                } else if ($searchField = 'nombre_comercial' && $creditType == 0) {

                    /*$clientes->WhereRaw("upper(nombre_comercial) ILIKE upper(?)",[$searchValue])->orWhereRaw("upper(nombre_completo) ILIKE upper(?)",[$searchValue])
                        ->orWhereRaw("upper(razon_social) ILIKE upper(?)",[$searchValue]);*/
                    $clientes->where('nombre_comercial', 'ILIKE', '%' . $searchValue . '%')
                        ->orWhere('nombre_completo', 'ILIKE', '%' . $searchValue . '%')
                        ->orWhere('razon_social', 'ILIKE', '%' . $searchValue . '%')
                        ->orWhere('numero_cedula', 'ILIKE', '%' . $searchValue . '%')
                        ->orWhere('numero_ruc', 'ILIKE', '%' . $searchValue . '%')
                        ->orWhere('contacto', 'ILIKE', '%' . $searchValue . '%');
                } else {
                    $clientes->where($searchField, 'ilike', '%' . $searchValue . '%');
                }
            }
            //$clientes->where($searchField, 'ilike', '%' . $searchValue . '%');
            $clientes->with('zonaCliente');
            $clientes->with('tipoCliente');
            $clientes->with('municipioCliente');
            $clientes->with('impuestoCliente');
            $clientes->orderBy('nombre_comercial', 'asc');
        }
        return $clientes->paginate($request->limit);
    }

    public function obtenerSolicitudConsignacion($request)
    {
        $clientes = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $statusValue = $request->search['status'];
            $clientes->where('es_deudor', false);
            $clientes->where($searchField, 'ilike', '%' . $searchValue . '%');
            if ($statusValue == 0) {
                $clientes->where('estado', true);
            }
            $clientes->where('aprobacion_consignacion', 1);
            $clientes->with('zonaCliente');
            $clientes->with('tipoCliente');
            $clientes->with('municipioCliente');
            $clientes->with('impuestoCliente');
            $clientes->orderBy('nombre_comercial', 'asc');
        }
        return $clientes->paginate($request->limit);
    }


    public function zonaCliente()
    {
        return $this->belongsTo('App\Models\PublicZonas', 'id_zona')->select('id_zona', 'descripcion');
    }

    public function tipoCliente()
    {
        return $this->belongsTo('App\Models\VentaTiposCliente', 'id_tipo_cliente')->select('id_tipo_cliente', 'descripcion');
    }

    public function municipioCliente()
    {
        return $this->belongsTo('App\Models\PublicMunicipios', 'id_municipio')->select('id_municipio', 'id_departamento', 'descripcion');
    }

    public function impuestoCliente()
    {
        return $this->belongsTo('App\Models\PublicImpuestos', 'id_impuesto')->select('id_impuesto', 'descripcion');
    }

    public function vendedorCliente()
    {
        return $this->belongsTo('App\Models\VentaVendedores', 'id_vendedor')->select('id_vendedor', 'nombre_completo', 'id_zona');
    }

}
