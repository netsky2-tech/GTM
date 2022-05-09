<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class PublicRubrosServiciosMateriales extends Model
{
    public  $timestamp = false;
    protected $table = 'public.rubros_servicios_materiales';
    protected $primaryKey='id_rubro';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['codigo','descripcion'];
}