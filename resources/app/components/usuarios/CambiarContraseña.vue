<template>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100" style="margin-left: auto;margin-right: auto;display: table;padding: 63px 130px 34px 130px">

                <form @keydown.enter.prevent.stop>
                    <span class="login100-form-title">Cambiar contraseña
					</span>
                    <div class="wrap-input100 validate-input" style="text-align: center">
                        <label for=""> Usuario</label>
                        <input class="input100" style="text-align: center;padding: 0;background: #a69d9d;color: #ffffff" disabled placeholder="Usuario" v-model="form.usuario">
                        <span class="focus-input100"></span>
                    </div>
                    <template v-if="form.trabajador">
                        <div class="wrap-input100 validate-input" style="text-align: center">
                            <label for="">Nombre completo</label>
                                <input class="input100" style="text-align: center;padding: 0;background: #a69d9d;color: #ffffff" disabled placeholder="Nombre completo" v-model="form.trabajador.nombre_completo">
                                <span class="focus-input100"></span>
                        </div>
                    </template>
                    <template v-if="form.trabajador">
                        <div class="wrap-input100 validate-input" style="text-align: center">
                            <label for="">Correo</label>
                                <input class="input100" style="text-align: center;padding: 0;background: #a69d9d;color: #ffffff" disabled placeholder="Correo electronico" v-model="form.email">
                                <span class="focus-input100"></span>

                        </div>
                    </template>
                    <div class="wrap-input100 validate-input" style="text-align: center">
                        <label for=""> Nueva contraseña</label>
                        <input  class="input100" style="text-align: center;padding: 0px" placeholder="Nueva contraseña" type="password" v-model="form.password">
                        <span class="focus-input100"></span>
                        <ul class="error-messages">
                            <li :key="message" v-for="message in errorMessages.password" v-text="message"></li>
                        </ul>

                    </div>
                    <div class="wrap-input100 validate-input" style="text-align: center">
                        <label for=""> Repetir contraseña</label>
                        <input class="input100" style="text-align: center;padding: 0px" placeholder="Repetir contraseña" type="password" v-model="form.password_confirmation">
                        <span class="focus-input100"></span>
                        <ul class="error-messages">
                            <li :key="message" v-for="message in errorMessages.password_confirmation" v-text="message"></li>
                        </ul>

                    </div>
                    <div class="content-box-footer text-center" style="text-align: center;padding-top: 16px">
                        <router-link :to="{ name: 'pagina-principal-administracion' }" tag="button">
                            <button class="btn btn-default" type="button">Cancelar</button>
                        </router-link>
                        <button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizarUsuario"
                                class="btn btn-primary" type="button">{{ btnAction }}
                        </button>
                    </div>

                </form>
            </div>


            <template v-if="loading">
                <BlockUI :message="msg" :url="url"></BlockUI>
            </template>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    import rol from '../../api/rol'
    import usuarios from '../../api/usuarios'
	import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
                roles: [],
                sucursales: [],
                form: {
                    nombres: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    rol: [],
                    trabajador: {},
                    cambiar_contrasena:false,
                },
                btnAction: 'Guardar',
                errorMessages: []
            }
        },
        methods: {
            actualizarUsuario() {
                var self = this
				self.loading = true;
                self.btnAction = 'Actualizando, espere...';

                if(self.form.password !== '' || self.form.password_confirmation !== ''){
                    self.form.cambiar_contrasena=true;
                }else{
                    self.form.cambiar_contrasena=false;
                }

                if(this.form.password === this.form.password_confirmation && this.form.cambiar_contrasena === true) {
                    usuarios.cambiarContrasena(self.form, data => {
                        alertify.success("Datos del usuario actualizados", 5);
                        this.$router.push({
                            name: 'pagina-principal-administracion'
                        })
                    }, err => {
                        self.loading = false;
                        alertify.error("Revise los datos del formulario", 5);
                        self.errorMessages = err
                        self.btnAction = 'Guardar'
                    })
                }else
                    {
                        self.loading = false;
                        alertify.error("Verifique que las contraseñas ingresadas son iguales.", 5);
                        self.btnAction = 'Guardar'
                    }
            },
            obtenerUsuario() {
                var self = this
                usuarios.obtenerUserLogin({
                }, data => {
                    self.form = data.usuario;
                    self.form.password= '';
                    self.form.password_confirmation='';
                    self.form.cambiar_contrasena=false;
					self.loading = false;
                }, err => {
                    //console.log(err)
                    alertify.error(err.id_usuario[0], 5);
                    this.$router.push({
                        name: 'pagina-principal-administracion'
                    });
                })
            },
        },
        mounted() {
            //this.obtenerTodosRoles()
            this.obtenerUsuario()
        }
    }
</script>