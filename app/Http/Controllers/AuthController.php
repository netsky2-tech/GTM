<?php

namespace App\Http\Controllers;

use App\Notifications\TwoFactorCode;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Lang;
use Illuminate\Validation\ValidationException;
use Validator, Auth;
use Illuminate\Http\Request;
use App\Models\AdmonUsuarios;
use App\Models\BitacoraAccesos;
use App\Models\AdmonPermisos;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Hash;
use Illuminate\Auth\Events\PasswordReset;

class AuthController extends Controller
{

    use AuthenticatesUsers;
    protected $maxAttempts = 3;
    protected $decayMinutes = 1;

 /*   use ResetsPasswords, SendsPasswordResetEmails {
        ResetsPasswords::broker insteadof SendsPasswordResetEmails;
    }*/

    /**
     * Validate and Login User
     *
     * @access    public
     * @param
     * @return ResponseFactory|Response
     * @throws ValidationException
     */


	public function login(Request $request)
	{
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);
            return $this->sendLockoutResponse($request);
        }

			$credentials = $request->only('usuario', 'password');
			if ( ! $token = JWTAuth::attempt($credentials)) {
                $this->incrementLoginAttempts($request);

				return response([
					'status' => 'error',
					'error' => 'invalid.credentials',
					'msg' => 'Invalid Credentials.'
				], 400);

			}

        if(Auth::check() ) {
            $user = AdmonUsuarios::with(['rol'])->with('trabajador')->with(['usuario_empresa'])->where('id_usuario', Auth::user()->id_usuario)->first();
            if($user -> two_factor_email_available === true){ //Agregar condicional si 2fa está activo o no
            //Generar codio doble factor para usuario logueado y settear tiempo de expiración
            $user->timestamps = false;
            $user->two_factor_code = rand(100000, 999999);
            $user->two_factor_expires_at = now()->addMinutes(10);
            $user->save();

            $user->notify(new TwoFactorCode());
            } else {
                    //limpiar datos de doble factor
                    $user->timestamps = false;
                    $user->two_factor_code = null;
                    $user->two_factor_expires_at = null;
                    $user->save();
                }

        }

			$acceso = new BitacoraAccesos;
			$acceso->alias = Auth::user()->usuario;
			$acceso->id_empleado  = Auth::user()->id_empleado;
            $conf = session()->get('id_empresa');
			$acceso->id_empresa  = $conf;
			$acceso->direccion_ip  = $this->getUserIpAddr();
			$acceso->f_acceso  = date("Y-m-d H:i:s");
            $acceso->dispositivo =  $request->header('User-agent',null);


           /*$agent = new Agent();
            $agent->setUserAgent( $request->header('User-agent',null));
            $acceso->dispositivo =$agent->platform().' '.$agent->version($agent->platform()) .' '.$agent->browser().' '. (int) $agent->version($agent->browser()).' '. $agent->device();
            */
			$acceso->save();


             $this->clearLoginAttempts($request);
			return response([
					'status' => 'success',
					'result' => 'success',
					'messages' => null
				])
				->header('Authorization', $token);
	}

	public function user(Request $request)
{
    $conf = session()->get('id_empresa');
    if(Auth::check() ){
	    $user = AdmonUsuarios::with(['rol'])->with('trabajador')->with(['usuario_empresa'])->where('id_usuario',Auth::user()->id_usuario)->first();


	    $permisos = AdmonPermisos::where('id_rol',$user->id_rol)->get();
        $user->permisos = $permisos->map(function($permiso, $key) {
		return $permiso['id_menu'];
});

    return response([
            'status' => 'success',
            'data' => $user
		]);
	}
}
public function refresh()
{
    return response([
            'status' => 'success'
        ]);
}

public function logout()
{
    JWTAuth::invalidate();
    return response([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
}

	function getUserIpAddr(){
        if(!empty($_SERVER['HTTP_CLIENT_IP'])){
            //ip from share internet
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
            //ip pass from proxy
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        }else{
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;

    }
    public function authenticated(Request $request, AdmonUsuarios $user)
    {
        $user->generateTwoFactorCode();
        $user->notify(new TwoFactorCode());
    }

    /**
     * Send password reset link.
     */
    public function sendPasswordResetLink(Request $request)
    {
        return $this->sendResetLinkEmail($request);
    }

    /**
     * Get the response for a successful password reset link.
     *
     * @param string $response
     * @return RedirectResponse|JsonResponse
     */
    protected function sendResetLinkResponse($response)
    {
        return response()->json([
            'message' => 'Password reset email sent.',
            'data' => $response
        ]);
    }
    /**
     * Get the response for a failed password reset link.
     *
     * @param Request $request
     * @param  string  $response
     * @return RedirectResponse|JsonResponse
     */
    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        return response()->json(['message' => 'Email could not be sent to this email address.']);
    }
    /**
     * Handle reset password
     */
    public function callResetPassword(Request $request)
    {
        return $this->reset($request);
    }
    /**
     * Reset the given user's password.
     *
     * @param  CanResetPassword  $user
     * @param  string  $password
     * @return void
     */
    protected function resetPassword($user, $password)
    {
        $user->password = Hash::make($password);
        $user->save();
        event(new PasswordReset($user));
    }
    /**
     * Get the response for a successful password reset.
     *
     * @param Request $request
     * @param  string  $response
     * @return RedirectResponse|JsonResponse
     */
    protected function sendResetResponse($response)
    {
        return response()->json(['message' => 'Password reset successfully.']);
    }
    /**
     * Get the response for a failed password reset.
     *
     * @param Request $request
     * @param  string  $response
     * @return RedirectResponse|JsonResponse
     */
    protected function sendResetFailedResponse(Request $request, $response)
    {
        return response()->json(['message' => 'Failed, Invalid Token.']);
    }

    /*public function generateTwoFactorCode()
    {
        if(Auth::check() ) {
            $user = AdmonUsuarios::with(['rol'])->with('trabajador')->with(['usuario_empresa'])->where('id_usuario', Auth::user()->id_usuario)->first();
            //Generar codio doble factor para usuario logueado y settear tiempo de expiración -- Agregar condicional si 2fa está activo o no
            $user->timestamps = false;
            $user->two_factor_code = rand(100000, 999999);
            $user->two_factor_expires_at = now()->addMinutes(10);
            $user->save();

            $user->notify(new TwoFactorCode());

            return response()->json([
                'status' => 'success',
                'result' => '',
                'messages' => null
            ]);
        }else
            {
                return response()->json([
                    'status' => 'error',
                    'result' => '',
                    'messages' => null
                ]);
                $this->logout();
            }
    }*/
}
