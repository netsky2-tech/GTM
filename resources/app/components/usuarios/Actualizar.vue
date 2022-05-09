<template>
    <div class="main">
        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Actualizar usuario</div>
                <div class="box-description">Formulario de actualizar usuario</div>
            </div>
            <form>

                <div class="row">
                    <template v-if="form.trabajador">
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for=""> Colaborador</label>
                                <div class="form-group">
                                    {{form.trabajador.primer_nombre + ' ' +(form.trabajador.segundo_nombre?form.trabajador.segundo_nombre:' ')+ ' '+form.trabajador.primer_apellido}}
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.trabajador"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>
                    </template>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for=""> Rol Sistema</label>

                            <select class="form-control" v-model="form.id_rol">
                                <option :key="rol.id_rol" :value="rol.id_rol" v-for="rol in roles">{{ rol.descripcion}}
                                </option>
                            </select>
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.id_rol" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <!--<div class="col-sm-3">
                        <div class="form-group">
                            <label for=""> Sucursal Asignada</label>

                            <select class="form-control" v-model="form.id_sucursal">
                                <option :key="0" :value="0">{{ 'Todas las sucursales'}} </option>
                                <option :key="sucursal.id_sucursal" :value="sucursal.id_sucursal" v-for="sucursal in sucursales">{{ sucursal.descripcion}}
                                </option>
                            </select>
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.id_rol" v-text="message"></li>
                            </ul>
                        </div>
                    </div>-->

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for=""> Usuario</label>
                            <input class="form-control" disabled placeholder="Usuario" v-model="form.usuario">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.usuario" v-text="message"></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Nueva Contraseña</label>
                            <input class="form-control" placeholder="Nueva Contraseña" type="password"
                                   v-model="form.password">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.password" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="">Confirmar Nueva Contraseña</label>
                            <input class="form-control" placeholder="Confirmar Nueva Contraseña" type="password"
                                   v-model="form.password_confirmation">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.password_confirmation"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </form>
            <div class="content-box-footer text-right">
                <router-link :to="{ name: 'listado-usuarios' }" tag="button">
                    <button class="btn btn-default" type="button">Cancelar</button>
                </router-link>
                <button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizarUsuario"
                        class="btn btn-primary" type="button">{{ btnAction }}
                </button>
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
            obtenerTodosRoles() {
                var self = this
                rol.obtenerTodosRoles(data => {
                    self.roles = data
                }, err => {
                    console.log(err)
                })
            },
            actualizarUsuario() {
                var self = this
				self.loading = true;
                self.btnAction = 'Actualizando, espere...';

                if(self.form.password !== '' || self.form.password_confirmation !== ''){
                    self.form.cambiar_contrasena=true;
                }else{
                    self.form.cambiar_contrasena=false;
                }

                usuarios.cambiarContrasena(self.form, data => {
                    alertify.success("Datos del usuario actualizados", 5);
                    this.$router.push({
                        name: 'listado-usuarios'
                    })
                }, err => {
                	self.loading = false;
                    alertify.error("Revise los datos del formulario", 5);
                    self.errorMessages = err
                    self.btnAction = 'Guardar'
                })
            },
            obtenerUsuario() {
                var self = this
                usuarios.obtenerUsuario({
                    id_usuario: this.$route.params.id_usuario
                }, data => {
                    self.form = data.usuario;
                    self.roles = data.roles;
                    self.sucursales = data.sucursales;
                    self.form.password= '';
                    self.form.password_confirmation='';
                    self.form.cambiar_contrasena=false;
					self.loading = false;
                }, err => {
                    //console.log(err)
                    alertify.error(err.id_usuario[0], 5);
                    this.$router.push({
                        name: 'listado-usuarios'
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