<?php

namespace App\Http\Controllers;

use App\Models\AdmonUsuarios;
use App\Models\User;
use App\Notifications\TwoFactorCode;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Laravel\Fortify\Actions\DisableTwoFactorAuthentication;
use Laravel\Fortify\Actions\EnableTwoFactorAuthentication;
use Laravel\Fortify\Contracts\TwoFactorAuthenticationProvider;
use Symfony\Component\HttpFoundation\Response;

class TwoFactorAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'twofactor']);
    }

    public function index()
    {
        return view('auth.twoFactor');
    }

    public function store(Request $request)
    {
        $rules = [
            'two_factor_code' => 'required|integer',
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {

            $user = auth()->user();

            if ($request->two_factor_code == $user->two_factor_code) {

                $user->resetTwoFactorCode();
                $user->timestamps = false;
                $user->two_factor_code = rand(100000, 999999);
                $user->two_factor_expires_at = now()->addMinutes(10);
                $user->save();

                return response([
                    'status' => 'success',
                    'data' => '',
                    'message' => 'Código ingresado correctamente.'
                ]);
            }

            return response([
                'status' => 'error',
                'data' => '',
                'message' => 'El código ingresado no coincide con el enviado al correo.'
            ]);
        }else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }

    public function resend()
    {
        $user = auth()->user();
        $user->generateTwoFactorCode();
        $user->notify(new TwoFactorCode());

        return redirect()->back()->withMessage('The two factor code has been sent again');
    }
}
