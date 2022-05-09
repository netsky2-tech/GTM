<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Fortify\TwoFactorAuthenticationProvider;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable,DB;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Auth;

class AdmonUsuarios extends Authenticatable implements JWTSubject, MustVerifyEmail
{
    use Notifiable, TwoFactorAuthenticatable;
    protected $table = 'admon.usuarios';
    protected $primaryKey = 'id_usuario';
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'usuario', 'password','estado','id_empleado','id_bodega','id_empresa','two_factor_code','two_factor_expires_date'
    ];

    //public $timestamps = false;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token','token','f_creacion','f_modificacion','id_empleado','id_empresa,','two_factor_recovery_codes',
        'two_factor_secret',
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
        $conf = session()->get('id_empresa');
        $users = $this->select(['*']);
        $users->join('admon.usuarios_empresas','admon.usuarios.id_usuario','admon.usuarios_empresas.id_usuario');
        $users->where('admon.usuarios_empresas.id_empresa','=',$conf);

        if (!empty($request->search['field'])) {
            $searchField = $request->search['field'];
            $searchValue = $request->search['value'];
            $users->where($searchField, 'ilike', '%' . $searchValue . '%');
            $users->with('trabajador');
            $users->with('sucursal');
            $users->with('rol');
            $users->with('empresa');
            $users->with('usuario_empresa');
            $users->orderBy('usuario', 'asc');
        }
        return $users->paginate($request->limit);
    }

    public function twoFactorAuthEnabled()
    {
        return !is_null($this->two_factor_secret);
    }

    public function rol(){
        return $this->belongsTo('App\Models\AdmonRoles','id_rol');
    }

    public function empresa(){
        return $this->belongsTo('App\Models\AdmonEmpresas','id_empresa');
    }

    public function usuario_empresa(){
        return $this->belongsTo('App\Models\AdmonUsuariosEmpresas','id_usuario','id_usuario')
            ->join('admon.empresas','admon.usuarios_empresas.id_empresa','=','admon.empresas.id_empresa')
            ->select('admon.empresas.nombre');
    }

    public function empleado(){
        return $this->belongsTo('App\Models\RRHHEmpleados','id_empleado');
    }

    public function trabajador()
    {
        return $this->belongsTo('App\Models\RRHHTrabajadores','id_empleado')->select(['*',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS nombre_completo")]);
    }

    public function sucursal()
    {
        return $this->belongsTo('App\Models\PublicSucursales','id_sucursal')->select('id_sucursal','descripcion');
    }

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * Override the mail body for reset password notification mail.
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new \App\Notifications\MailResetPasswordNotification($token));
    }

    public function loginSecurity()
    {
        return $this->hasOne('App\Models\LoginSecurity','id_user','id_usuario');
    }

    public function generateTwoFactorCode()
    {
        $this->timestamps = false;
        $this->two_factor_code = rand(100000,999999);
        $this->two_factor_expires_at = now()->addMinutes(10);
        $this->save();
    }

    public function resetTwoFactorCode()
    {
        $this->timestamps = false;
        $this->two_factor_code = null;
        $this->two_factor_expires_at = null;
        $this->save();
    }

}
