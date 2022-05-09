<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable,DB;
class AdmonEmpresas extends Model
{
    use Notifiable;
    protected $table = 'admon.empresas';
    protected $primaryKey = 'id_empresa';
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'siglas','token','solvente','administrador','estado'
    ];

    //public $timestamps = false;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'siglas','token','solvente','administrador','estado'
    ];

    /**
     * Get List of Users
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerUsuarios($request)
    {
        $users = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $conf = session()->get('id_empresa');
            $users->where($searchField, 'ilike', '%' . $searchValue . '%')->where('id_empresa', '=', $conf);
            $users->with('trabajador');
            $users->with('sucursal');
            $users->with('rol');
            $users->orderBy('usuario', 'asc');
        }
        return $users->paginate($request->limit);
    }
    /*public function empresasUsuarios()
    {
        return $this->belongsTo('App\Models\AdmonUsuarioEmpresas');
    }*/

}
