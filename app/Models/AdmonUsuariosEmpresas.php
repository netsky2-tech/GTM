<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable,DB;
use Auth;
class AdmonUsuariosEmpresas extends Model
{
    use Notifiable;
    protected $table = 'admon.usuarios_empresas';
    protected $primaryKey = 'id_usuario_empresa';
 /*   const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';*/
    public $timestamps = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_empresa', 'nombre', 'siglas','token','solvente','administrador','estado'
    ];
    
    //public $timestamps = false;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id_empresa', 'nombre', 'siglas','token','solvente','administrador','estado'
    ];

    /**
     * Get List of Users
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtenerUsuariosEmpresas($request)
    {
        $users = $this->select(['*']);
        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $conf = session()->get('id_empresa');
            $users->where('id_empresa', '=', $conf);
            $users->with('usuarios');
            $users->orderBy('usuario', 'asc');
        }
        return $users->paginate($request->limit);
    }

    public function usuarios()
    {
        return $this->hasMany('App\Models\AdmonUsuarios','id_usuario');
    }

    //Obtener empresas asignadas a usuarios

    public function obtenerEmpresasUsuarios()
    {
        return $this->hasMany('App\Models\AdmonEmpresas','id_empresa','id_empresa')
            ->select('admon.empresas.nombre','admon.empresas.siglas');
    }

}
