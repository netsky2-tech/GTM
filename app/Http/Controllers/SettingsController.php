<?php

namespace App\Http\Controllers;

use App\Models\AdmonEmpresas;
use App\Models\AdmonPermisos;
use App\Models\AdmonUsuarios;
use App\Models\AdmonUsuariosEmpresas;
use Illuminate\Support\Facades\DB;
use Validator,Auth;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public $company_id;

    /**
     * Get Settings
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function getSettings(Request $request)
    {
        $settings = Setting::all();
        return response()->json([
            'status' => 'success',
            'result' => $settings,
            'messages' => null
        ]);
    }

	/**
     * Save Settings Changes
     *
     * @access 	public
     * @param
     * @return 	json(string)
     */

	public function save(Request $request)
	{
		$rules = [
			'company_name' => 'required',
			'company_address' => 'required',
			'company_phone_number' => 'required',
			'company_email' => 'required|email'
		];

		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {
			$setting = Setting::where('meta_key', 'company_name')->first();
			$setting->meta_value = $request->company_name;
			$setting->save();

			$setting = Setting::where('meta_key', 'company_address')->first();
			$setting->meta_value = $request->company_address;
			$setting->save();

			$setting = Setting::where('meta_key', 'company_phone_number')->first();
			$setting->meta_value = $request->company_phone_number;
			$setting->save();

			$setting = Setting::where('meta_key', 'company_email')->first();
			$setting->meta_value = $request->company_email;
			$setting->save();

			return response()->json([
	    		'status' => 'success',
	    		'result' => null,
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


    //Cargar compañías asignadas al usuario logueado

    public function loadCompany(Request $request)
    {
        $countCompany = AdmonUsuariosEmpresas::where('id_usuario',Auth::user()->id_usuario)->count();
        /*if($countCompany > 1)
        {*/
            $companies = AdmonEmpresas::join('admon.usuarios_empresas','admon.empresas.id_empresa','admon.usuarios_empresas.id_empresa')
                ->select(['admon.empresas.*'])
                ->where('admon.usuarios_empresas.id_usuario',Auth::user()->id_usuario)->get();
        /*}else
            {
                $companies = AdmonEmpresas::join('admon.usuarios_empresas','admon.empresas.id_empresa','admon.usuarios_empresas.id_empresa')
                    ->select(['admon.empresas.*'])
                    ->where('admon.usuarios_empresas.id_usuario',Auth::user()->id_usuario)->first();
            }*/

        $usuario = AdmonUsuarios::select('*',DB::raw("CONCAT(primer_nombre,' ',segundo_nombre,' ',primer_apellido,' ',segundo_apellido) AS text"))
            ->join('rrhh.trabajadores','admon.usuarios.id_empleado','rrhh.trabajadores.id_trabajador')
            ->where('id_usuario',Auth::user()->id_usuario)->first();

        return response()->json([
            'status' => 'success',
            'result' => [
                'companies' => $companies,
                'usuario' => $usuario,
                'countCompany' => $countCompany
            ],
            'messages' => null
        ]);
    }


    public function __construct(Request $request)
    {
        $rules = [
            'company' => 'required|array'
        ];
        $validator = Validator::make($request->all(), $rules);

        if (!$validator->fails()) {
        //static $company_id ='';

        $this->company_id = $request->company['id_empresa'];
        session()->put('id_empresa',$request->company['id_empresa']);

            return response()->json([
                'status' => 'success',
                'result' => null,
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
