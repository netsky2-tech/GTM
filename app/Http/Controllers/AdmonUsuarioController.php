<?php

namespace App\Http\Controllers;

use App\Models\AdmonRoles;
use App\Models\AdmonUsuariosEmpresas;
use App\Models\PublicSucursales;
use Hash, Validator, Auth;
use App\Models\AdmonUsuarios;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdmonUsuarioController extends Controller
{

    public function obtenerUsuario(Request $request)
    {
        $rules = [
            'id_usuario'=> 'required|integer|min:1'
        ];

        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $usuario = AdmonUsuarios::where('id_usuario',$request->id_usuario)->with('trabajador')->first();
            $sucursales = PublicSucursales::select(['id_sucursal','descripcion'])->get();
            $roles = AdmonRoles::select(['id_rol','descripcion'])->orderby('id_rol')->get();
            if(!empty($usuario)){
                return response()->json([
                    'status' => 'success',
                    'result' => ['usuario'=>$usuario,'sucursales'=>$sucursales,'roles'=>$roles],
                    'messages' => null
                ]);

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_usuario'=>["Datos no encontrados"]),
                    'messages' => null
                ]);
            }

        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }

    /**
     * Actualizar contraseña de usuario - usuario con menor privilegio
     * @access 	public
     * @param
     * @return JsonResponse
     */

    public function obtenerUserLogin(Request $request)
    {
        $rules = [
        ];
        $validator = Validator::make($request->all(), $rules);
        if (!$validator->fails()) {
            $conf = session()->get('id_empresa');
            $usuario = AdmonUsuarios::where('id_usuario',Auth::user()->id_usuario)->with('trabajador')->with('loginSecurity')->first();
            $roles = AdmonRoles::select(['id_rol','descripcion'])->orderby('id_rol')->get();
            if(Auth::user()->two_factor_secret){
            $qr_code = Auth::user()->twoFactorQrCodeSvg();
            $twoFactorEnabled = json_encode(auth()->user()->twoFactorAuthEnabled());
            }else{ $qr_code = ''; }
            if(!empty($usuario)){
                if(!empty($twoFactorEnabled)){
                    return response()->json([
                        'status' => 'success',
                        'result' => ['usuario'=>$usuario,
                            'roles'=>$roles,
                            'qr_code' => $qr_code,
                            'two_factor_enabled' => $twoFactorEnabled],
                        'messages' => null
                    ]);
                }else {
                    return response()->json([
                        'status' => 'success',
                        'result' => ['usuario' => $usuario,
                            'roles' => $roles,
                            'qr_code' => $qr_code,
                            ],
                        'messages' => null
                    ]);
                }

            }
            else{
                return response()->json([
                    'status' => 'error',
                    'result' => array('id_usuario'=>["Datos no encontrados"]),
                    'messages' => null
                ]);
            }

        } else {
            return response()->json([
                'status' => 'error',
                'result' => $validator->messages(),
                'messages' => null
            ]);
        }
    }
	/**
     * Registrar Nuevo Usuario
     *
     * @access 	public
     * @param
     * @return 	json(string)
     */

	public function registrar(Request $request)
	{
		$rules = [
            'id_rol'=>'required|integer|min:1',
		    'trabajador'=>'required|array|min:1',
            'usuario' => 'required|string|max:50|unique:pgsql.admon.usuarios,usuario',
            'password' => 'required|confirmed|string|max:60'
		];

		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {
            $usuario = new AdmonUsuarios;
            $usuario->password = Hash::make($request->password);
            $usuario->usuario = $request->usuario;
            $usuario->id_rol = $request->id_rol;
            $usuario->token = str_random(10);
            $usuario->remember_token = str_random(10);
            $usuario->id_empleado = $request->trabajador['id_trabajador'];
            $usuario->email = $request->trabajador['email'];
            $usuario->estado = 1;
            //$usuario->id_empresa = $request->id_empresa;
            $usuario->save();

            $usuario_empresa = new AdmonUsuariosEmpresas;
            $usuario_empresa->id_empresa = 5;
            $usuario_empresa->id_usuario = $usuario->id_usuario;
            $usuario_empresa->save();

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


    /**
     * Obtener Lista de Usuarios
     *
     * @access  public
     * @param
     * @return  json(array)
     */

    public function obtener(Request $request, AdmonUsuarios $user)
    {
        $users = $user->obtenerUsuarios($request);
        return response()->json([
            'status' => 'success',
            'result' => [
                'total' => $users->total(),
                'rows' => $users->items()
            ],
            'messages' => null
        ]);
    }

	/**
     * Cambiar Contrasena de usuario
     *
     * @access 	public
     * @param
     * @return 	json(string)
     */

	public function cambiarContrasena(Request $request)
	{
		$rules = [
			'id_usuario' => 'required|integer|exists:pgsql.admon.usuarios,id_usuario',
            'cambiar_contrasena' => 'required|boolean',
            'password' => 'required_if:cambiar_contrasena,true|confirmed|string|max:60|nullable',
/*            'id_rol' => 'required|integer',
            'id_sucursal' => 'required|integer',*/
		];

		$validator = Validator::make($request->all(), $rules);
		if (!$validator->fails()) {
			$user = AdmonUsuarios::find($request->id_usuario);
			if($request->cambiar_contrasena){

                    $user->password = Hash::make($request->password);

            }
            $user->id_rol = $request->id_rol;
            $user->id_sucursal = $request->id_sucursal;
			$user->save();

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
