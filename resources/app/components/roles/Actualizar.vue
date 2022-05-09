<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Modificar Rol</div>
                <div class="box-description">Formulario para modificar rol</div>
            </div>

                <div class="form-group">
                    <label for=""> Nombre del rol</label>
                    <input class="form-control" v-model="form.descripcion" placeholder="Digita nombre del rol">
                    <ul class="error-messages">
                        <li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
                    </ul>
                </div>

            <div class="row">


                <div class="col-md-6">
                    <div class="content-box-footer text-left">
                        <template v-if="form.activo">
                            <button :disabled="form.id_rol === 1" class="btn btn-danger"
                                    @click="desactivarRol(form.id_rol)"><i class="fa fa-trash-o"> Eliminar</i></button>
                        </template>
                        <template v-else>
                            <button :disabled="form.id_rol === 1" class="btn btn-success"
                                    @click="activarRol(form.id_rol)"><i class="fa fa-check-square"> Habilitar</i>
                            </button>
                        </template>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="content-box-footer text-right">
                        <router-link tag="button" :to="{ name: 'roles' }">
                            <button type="button" class="btn btn-default">Cancelar</button>
                        </router-link>
                        <button type="button" class="btn btn-primary" @click="actualizarRol"
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
	import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
                roles: [],
                form: {
                    descripcion: ''
                },
                btnAction: 'Guardar',
                errorMessages: []
            }
        },
        methods: {
            desactivarRol(rolId) {
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
                        rol.desactivarRol({
                            id_rol: rolId
                        }, data => {
                            alertify.warning("Rol desactivado correctamente", 5);
                            this.$router.push({
                                name: 'roles'
                            })
                        }, err => {
                            console.log(err)
                        })
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },
            activarRol(rolId) {

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
                        rol.activarRol({
                            id_rol: rolId
                        }, data => {
                            alertify.success("Rol activado correctamente", 5);
                            this.$router.push({
                                name: 'roles'
                            })
                        }, err => {
                            console.log(err)
                        })
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },
            obtenerRolEspecifico() {
                var self = this
                rol.obtenerRolEspecifico({
                    id_rol: this.$route.params.id_rol
                }, data => {
                    self.form = data
					self.loading = false;
                }, err => {
                    //console.log(err)
                    alertify.error(err.id_rol[0], 5);
                    this.$router.push({
                        name: 'roles'
                    });
                })
            },
            actualizarRol() {
                var self = this
				self.loading = true;
                self.btnAction = 'Guardando, espere......'

                rol.actualizarRol(self.form, data => {
                    alertify.success("Rol actualizado correctamente", 5);
                    this.$router.push({
                        name: 'roles'
                    })
                }, err => {
                	self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Guardar'
                })
            }
        },
        mounted() {
            this.obtenerRolEspecifico()
        }
    }
</script>