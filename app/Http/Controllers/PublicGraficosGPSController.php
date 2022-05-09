<?php 

namespace App\Http\Controllers;

use Validator,Auth,DB;

use Illuminate\Http\Request;

class PublicGraficosGPSController extends Controller
{

    public function obtenerDatosExcesoVelocidad(Request $request)
    {
        $rules = [
            'fecha_inicio' => 'required|date',
            'fecha_final' => 'required|date',
            'limite' => 'required|integer|min:1',
            'alias' => 'required|string|min:5',
            'velocidad' => 'required|integer|min:0',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $datos_grafico = DB::select('SELECT alias as x,cantidad as y from public.obtener_consolidado_excesos(?,?,?,?,?)',
                array($request->velocidad, $request->fecha_inicio, $request->fecha_final, $request->alias, $request->limite));

            $alias = DB::select('SELECT distinct(alias) as alias from public.bddealertas order by alias');

            //$tipos_alertas = DB::select('SELECT distinct(tipo_alerta) as tipo_alerta from public.bddealertas order by tipo_alerta');

            /*$lista_x=[];
            $lista_y=[];
            foreach ($datos_grafico as $value){
                $lista_x[] = $value->x;
                $lista_y[] = $value->y;
            }*/

            return response()->json([
                'status' => 'success',
                'result'=> ['full'=>$datos_grafico,'alias'=> $alias],
                'messages' => null
            ]);

        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }


    public function obtenerDatosConsolidadoAlertas(Request $request)
    {
        $rules = [
            'fecha_inicio' => 'required|date',
            'fecha_final' => 'required|date',
            'limite' => 'required|integer|min:1',
            'tipo_alerta' => 'required|string|min:5',
            'alias' => 'required|string|min:5',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $datos_grafico = DB::select('SELECT tipo_alerta as x,cantidad as y from public.obtener_consolidado_alertas(?,?,?,?,?)',
                array($request->tipo_alerta, $request->fecha_inicio, $request->fecha_final, $request->alias, $request->limite));

            $alias = DB::select('SELECT distinct(alias) as alias from public.bddealertas order by alias');

            $tipos_alertas = DB::select('SELECT distinct(tipo_alerta) as tipo_alerta from public.bddealertas order by tipo_alerta');

            $lista_x=[];
            $lista_y=[];
            foreach ($datos_grafico as $value){
                $lista_x[] = $value->x;
                $lista_y[] = $value->y;
            }

            return response()->json([
                'status' => 'success',
                'result'=> ['full'=>$datos_grafico,'alias'=> $alias,'tipos_alertas'=> $tipos_alertas,'lista_x'=>$lista_x,'lista_y'=>$lista_y],
                'messages' => null
            ]);

        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }



    public function obtenerDatosConsolidadoOtros(Request $request)
    {
        $rules = [
            'fecha_inicio' => 'required|date',
            'fecha_final' => 'required|date',
            'limite' => 'required|integer|min:1',
            'alias' => 'required|string|min:5',
            'tipo_alerta' => 'required|string|min:5',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $datos_grafico = DB::select('SELECT alias as x,cantidad as y from public.obtener_consolidado_alertas_otros(?,?,?,?,?)',
                array($request->fecha_inicio, $request->fecha_final, $request->alias, $request->limite, $request->tipo_alerta));

            $alias = DB::select('SELECT distinct(alias) as alias from public.bddealertas order by alias');

            $tipos_alertas = DB::select('SELECT distinct(tipo_alerta) as tipo_alerta from public.bddealertas order by tipo_alerta');

            /*$lista_x=[];
            $lista_y=[];
            foreach ($datos_grafico as $value){
                $lista_x[] = $value->x;
                $lista_y[] = $value->y;
            }*/

            return response()->json([
                'status' => 'success',
                'result'=> ['full'=>$datos_grafico,'alias'=> $alias,'tipos_alertas'=>$tipos_alertas],
                'messages' => null
            ]);

        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }

    public function obtenerDatosConsolidadoVisitas(Request $request)
    {
        $rules = [
            'fecha_inicio' => 'required|date',
            'fecha_final' => 'required|date',
            'limite' => 'required|integer|min:1',
            'alias' => 'required|string|min:5',
            'tipo_alerta' => 'required|string|min:5',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $datos_grafico = DB::select('SELECT * from public.obtener_consolidado_visitas_zonas(?,?,?,?,?)',
                array($request->alias, $request->fecha_inicio, $request->fecha_final, $request->limite, $request->tipo_alerta));

            $alias = DB::select('SELECT distinct(alias) as alias from public.bddealertas order by alias');

            $tipos_alertas = DB::select('SELECT distinct(tipo_alerta) as tipo_alerta from public.bddealertas order by tipo_alerta');

            $d1=[];
            $d2=[];
            $d3=[];
            $d4=[];
            $d5=[];
            $d6=[];
            $d7=[];
            $alias_l=[];
            foreach ($datos_grafico as $value){
                $alias_l[] = $value->alias;
                $d1[] = $value->distrito1;
                $d2[] = $value->distrito2;
                $d3[] = $value->distrito3;
                $d4[] = $value->distrito4;
                $d5[] = $value->distrito5;
                $d6[] = $value->distrito6;
                $d7[] = $value->distrito7;
            }

            return response()->json([
                'status' => 'success',
                'result'=> ['alias'=> $alias,'alias_l'=>$alias_l,'d1'=>$d1,'d2'=>$d2,'d3'=>$d3,'d4'=>$d4
                ,'d5'=>$d5,'d6'=>$d6,'d7'=>$d7,'tipos_alertas'=>$tipos_alertas],
                'messages' => null
            ]);

        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }


}