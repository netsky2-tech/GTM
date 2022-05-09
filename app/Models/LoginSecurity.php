<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoginSecurity extends Model
{
    protected $table = 'admon.login_securities';
    protected $primaryKey = 'id_login_security';
    const CREATED_AT = 'f_creacion';
    const UPDATED_AT = 'f_modificacion';

    use HasFactory;

    protected $fillable = [
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\AdmonUsuarios');
    }
}
