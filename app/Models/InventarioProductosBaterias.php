<?php 

namespace App\Models;

use DB, Illuminate\Database\Eloquent\Model;

class InventarioProductosBaterias extends Model
{

    public $timestamps = false;
    protected $table = 'inventario.baterias_detalles';
    protected $primaryKey='id_bateria_detalle';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   // protected $fillable = ['codigo','nombre_producto','descripcion','costo_estandar','precio_sugerido','existencia_Min','existencia_Max','estado'];    protected $primaryKey='id_bateria_detalle';

    public function bateriaMaterial()
    {
        return $this->belongsTo('App\Models\InventarioBateriasMateriales','id_material');
    }

    public function bateriaLineaProducto()
    {
        return $this->belongsTo('App\Models\InventarioBateriasLineas','id_linea_producto');
    }

    public function bateriaSubAplicacion()
    {
        return $this->belongsTo('App\Models\InventarioBateriasSubAplicaciones','id_subaplicacion');
    }

    public function bateriaSubMarca()
    {
        return $this->belongsTo('App\Models\InventarioBateriasSubMarcas','id_submarca');
    }
}