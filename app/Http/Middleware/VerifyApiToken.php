<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\AdmonUsuarios;
use Illuminate\Cookie\Middleware\EncryptCookies as Middleware;
use Illuminate\Support\Facades\Auth;
use Exception;

class VerifyApiToken extends Middleware
{

	/**
	 * 1	Administrador
	 * 2	Responsable Bodega
	 * 3	Facturador
	 * 4	Compras y suministros
	 * 5	Gerente Financiero
	 * 6	Contador
	 * 7	Agente de ventas
	 */
    public function handle($request, Closure $next) {
		//echo $request->token;
		$usuario = AdmonUsuarios::where('token', $request->token)->first();
		try{
		if(Auth::check()){
		if (!empty($usuario)) {
				$request->merge(['id_usuario' => $usuario->id_usuario]);
				return $next($request);			
    	} else {
    		return response()->json([
                'status' => 'error',
                'result' => null,
                'messages' => 'Missing Authentication Token'
            ]);
		}
	}else{
		return response()->json([
			'status' => 'logout',
			'result' => null,
			'messages' => 'Sesion cerrada'
		]);
		}

        }catch (Exception $ex){
            return response()->json([
                'status' => 'error',
                'result' => null,
                'messages' => 'Token no autorizado'
            ]);
        }
    }
}

