<?php

namespace App;

//use Tymon\JWTAuth\Contracts\JWTSubject;
//use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\CanResetPassword;

class AdmonUsuarios extends Authenticatable //implements JWTSubject
{
    //use Notifiable;
    protected $table = 'admon.usuarios';
    protected $primaryKey = 'id_usuario';
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';
    /**protected $primaryKey = 'customer_id';
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'usuario', 'password','estado','id_empleado','google2fa_secret'
    ];

    //public $timestamps = false;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function setGoogle2faSecretAttribute($value)
    {
        $this->attributes['google2fa_secret'] = encrypt($value);
    }

    public function getGoogle2faSecretAttribute($value)
    {
        return decrypt($value);
    }
/*
    public function persona(){
        return $this->belongsTo('App\Persona');
    }
use App\Models\AdmonRoles;
*/

    /* comentario github*/

}
