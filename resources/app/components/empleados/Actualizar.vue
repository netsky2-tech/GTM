<template>
    <div class="main">
        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Crer nuevo empleado</div>
                <div class="box-description">Formulario de nuevo empleado</div>
            </div>
            <form>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for=""> Nombres</label>
                            <input class="form-control" placeholder="Nombres" v-model="form.nombre">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.nombre" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for=""> Primer apellido</label>
                            <input class="form-control" placeholder="Primer apellido" v-model="form.primer_apellido">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.primer_apellido" :key="message"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for=""> Segundo apellido</label>
                            <input class="form-control" placeholder="Segundo apellido" v-model="form.segundo_apellido">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.segundo_apellido" :key="message"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for=""> Cédula</label>
                            <input class="form-control" placeholder="Ingrese Identificación" v-model="form.cedula">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.cedula" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for=""> Dirección</label>
                            <input class="form-control" placeholder="Ingrese dirección" v-model="form.direccion">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.direccion" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for=""> Teléfono</label>
                            <input class="form-control" placeholder="Ingrese télefono" v-model="form.telefono">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.telefono" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Email</label>
                            <input class="form-control" v-model="form.email" placeholder="Ingrese Email" type="email">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.email" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Código empleado</label>
                            <input class="form-control" placeholder="Código empleado" v-model="form.codigo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.codigo" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Rol Sistema</label>
                            <select class="form-control" v-model="form.id_rol">
                                <option :value="rol.id_rol" v-for="rol in roles" :key="rol.id_rol">{{ rol.descripcion
                                    }}
                                </option>
                            </select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.id_rol" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Usuario</label>
                            <input class="form-control" disabled placeholder="Usuario" v-model="form.usuario">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.usuario" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Contraseña</label>
                            <input class="form-control" v-model="form.password" placeholder="Sin modificar"
                                   type="password">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.password" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="">Confirmar Contraseña</label>
                            <input class="form-control" v-model="form.password_confirmation" placeholder="Sin modificar"
                                   type="password">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.password_confirmation" :key="message"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </form>


            <div class="row">


                <div class="col-md-6">
                    <div class="content-box-footer text-left">
                        <template v-if="form.activo==1">
                            <button class="btn btn-danger" @click="desactivarEmpleado(form.id_empleado)"><i
                                    class="fa fa-trash-o"> Eliminar</i></button>
                        </template>
                        <template v-else>
                            <button class="btn btn-success" @click="activarEmpleado(form.id_empleado)"><i
                                    class="fa fa-check-square"> Habilitar</i></button>
                        </template>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="content-box-footer text-right">
                        <router-link tag="button" :to="{ name: 'empleados' }">
                            <button type="button" class="btn btn-default">Cancelar</button>
                        </router-link>
                        <button type="button" class="btn btn-primary" @click="actualizarEmpleado"
                                :disabled="btnAction != 'Guardar' ? true : false">{{ btnAction }}
                        </button>
                    </div>
                </div>
				<template v-if="loading">
					<BlockUI :message="msg" :url="url"></BlockUI>
				</template>
            </div>


        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    import rol from '../../api/rol'
    import empleado from '../../api/empleados'
	import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
                roles: [],
                form: {
                    nombre: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    id_rol: ''
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
            desactivarEmpleado(userId) {

                var self = this;
                self.$swal.fire({
                    title: 'Esta seguro de cambiar el estado?',
                    text: "",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, confirmar',
                    cancelButtonText:'Cancelar'
                }).then((result) => {
                    if (result.value) {
                        var self = this
                        empleado.desactivarEmpleado({
                            id_empleado: userId
                        }, data => {
                            if (data) {
                                alertify.error(data, 5);
                            } else {
                                alertify.warning("Empleado desactivado correctamente", 5);
                            }
                            this.$router.push({
                                name: 'empleados'
                            })
                        }, err => {
                            console.log(err)
                        });
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },
            activarEmpleado(userId) {

                var self = this;
                self.$swal.fire({
                    title: 'Esta seguro de cambiar el estado?',
                    text: "",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, confirmar',
                    cancelButtonText:'Cancelar'
                }).then((result) => {
                    if (result.value) {
                        var self = this
                        empleado.activarEmpleado({
                            id_empleado: userId
                        }, data => {
                            alertify.success("Empleado activado correctamente", 5);
                            this.$router.push({
                                name: 'empleados'
                            })
                        }, err => {
                            console.log(err)
                        });
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },
            obtenerEmpleado() {
                var self = this
                empleado.obtenerEmpleado({
                    id_empleado: this.$route.params.id_empleado
                }, data => {
                    self.form = data
					self.loading = false;
                }, err => {
                    //console.log(err)
                    alertify.error(err.id[0], 5);
                    this.$router.push({
                        name: 'empleados'
                    });
                })
            },
            actualizarEmpleado() {
                var self = this
				self.loading = true;
                self.btnAction = 'Actualizando, espere...'

                empleado.actualizarEmpleado(self.form, data => {
                    alertify.success("Datos del empleado actualizados", 5);
                    this.$router.push({
                        name: 'empleados'
                    })
                }, err => {
                	self.loading = false;
                    alertify.error("Revise los datos del formulario", 5);
                    self.errorMessages = err
                    self.btnAction = 'Guardar'
                })
            }
        },
        mounted() {
            this.obtenerTodosRoles()
            this.obtenerEmpleado()
        }
    }
</script>