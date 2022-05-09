<?php

namespace App\Http\Controllers;

use App\Models\CajaBancoMonedas;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\AdmonAjustes;
use Illuminate\Http\Request;

class AdmonAjustesController extends Controller
{
	/**
     * Obtener Ajustes Generales
     *
     * @access  public
     * @param
     * @return \Illuminate\Http\JsonResponse
     */

    public function obtenerAjustes(Request $request)
    {
		if (!$request->ajax()) return redirect('/');

      //TODO: CCHAMORRO - ajustar los métodos de Caja Banco Monedas
		$monedas = CajaBancoMonedas::select('id_moneda','descripcion','codigo')->get();

      //   $settings = AdmonAjustes::/*whereIn('id_ajuste',array(1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 26))->*/orderBy('id_ajuste')->get();
        $conf = session()->get('id_empresa');
        $settings = AdmonAjustes::where('id_empresa',$conf)->orderBy('id_ajuste')->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'ajustes' => $settings,
                'monedas' => $monedas
            ],
            'messages' => null
        ]);
	}

	/**
     * Obtener Ajustes Basicos (no requiere usuario autenticado)
     *
     * @access  public
     * @param
     * @return  json(array)
     */
	public function obtenerAjustesBasicos(Request $request)
    {
		if (!$request->ajax()) return redirect('/');
      // $settings = AdmonAjustes::whereIn('id_ajuste',array(2,3,21,22))->orderBy('id_ajuste')->select('id_ajuste','valor')->get();
        $conf = session()->get('id_empresa');
        $company_name = AdmonAjustes::/*where('id_empresa',$conf)->*/where('id_ajuste',2)->select('id_ajuste','valor')->first();
        $logo_left = AdmonAjustes::/*where('id_empresa',$conf)->*/where('id_ajuste',3)->select('id_ajuste','valor')->first();
        $logo_right = AdmonAjustes::/*where('id_empresa',$conf)->*/where('id_ajuste',21)->select('id_ajuste','valor')->first();
        $logo_login = AdmonAjustes::/*where('id_empresa',$conf)->*/where('id_ajuste',22)->select('id_ajuste','valor')->first();
      //$settings = AdmonAjustes::where('id_empresa',$conf)->whereIn('id_ajuste',array(2,3,21,22))->orderBy('id_ajuste')->select('id_ajuste','valor','id_empresa')->get();
        return response()->json([
            'status' => 'success',
            'result' => [
                'company_name' => $company_name,
                'logo_left' => $logo_left,
                'logo_right' => $logo_right,
                'logo_login' => $logo_login,
            ],
            'messages' => null
        ]);
	}

    /**
     * Obtener Ajustes Contabilidad
     *
     * @access  public
     * @param
     * @return  json(array)
     */
    public function obtenerAjustesContabilidad(Request $request)
    {
        if (!$request->ajax()) return redirect('/');
        $conf = session()->get('id_empresa');
        $settings = AdmonAjustes::where('id_empresa',$conf)->whereIn('identificador',array('cuenta_perdida_ganancia'))->orderBy('id_ajuste')->get();
        return response()->json([
            'status' => 'success',
            'result' => $settings,
            'messages' => null
        ]);
    }


    /**
     * Obtener Imagenes (logo)
     *
     * @access  public
     * @param
     * @return  json(array)
     */
	public function obtenerImagenes(Request $request)
    {
		if (!$request->ajax()) return redirect('/');
        $conf = session()->get('id_empresa');
        $settings = AdmonAjustes::where('id_empresa',$conf)->whereIn('id_ajuste',array(21,3))->orderBy('id_ajuste')->select('id_ajuste','valor','id_empresa')->get();
        return response()->json([
            'status' => 'success',
            'result' => $settings,
            'messages' => null
        ]);
	}


	/**
     * Guardar Ajustes del sistema
     *
     * @access 	public
     * @param
     * @return 	json(string)
     */

	public function registrar(Request $request)
	{

		$rules = [
			'app_title' => 'required|string|max:191',
			'company_address' => 'required|string|max:191',
			'company_email' => 'required|email|string|max:191',
			'company_name' => 'required|string|max:50',
			'company_telephone' => 'required|string|max:15',
			'company_website' => 'required|string|max:191',
			'currency_id' => 'required|integer',
			'uploaded_logo' => 'required|string|max:191',
			'uploaded_icon' => 'required|string|max:191',
			'login_img' => 'required|string|max:191',
            'ruc_company' => 'required|string|max:16',

			//'footer' => 'required',
			//'footer_line_1' => 'required',
			//'footer_line_2' => 'required',
			//'footer_line_3' => 'required',
			//'footer-html' => 'required',
			//'global_bcc_email' => 'required',
			//'header' => 'required',
			//'header-html' => 'required',
			//'sent_from_email' => 'required',
			//'sent_from_name' => 'required',
			//'uploaded_logo' => 'required',

		];

		//TODO: CCHAMORRO - Consultar sobre esta implementación

		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
			$setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'app_title')->first();
			$setting->valor = $request->app_title;
			$setting->save();

			$setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'company_address')->first();
			$setting->valor = $request->company_address;
			$setting->save();

			$setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'company_email')->first();
			$setting->valor = $request->company_email;
			$setting->save();

			$setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'company_name')->first();
			$setting->valor = $request->company_name;
			$setting->save();

			$setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'company_telephone')->first();
			$setting->valor = $request->company_telephone;
			$setting->save();

			$setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'company_website')->first();
			$setting->valor = $request->company_website;
			$setting->save();

			$setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'currency_id')->first();
			$setting->valor = $request->currency_id;
			$setting->save();

			$setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'uploaded_logo')->first();
			$setting->valor = $request->uploaded_logo;
			$setting->save();

			$setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'uploaded_icon')->first();
			$setting->valor = $request->uploaded_icon;
			$setting->save();

			$setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'login_img')->first();
			$setting->valor = $request->login_img;
			$setting->save();

         $setting = AdmonAjustes::where('id_empresa',$conf)->where('identificador', 'ruc_company')->first();
         $setting->valor = $request->ruc_company;
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
}
