<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Modificar Nivel Cuenta</div>
                <div class="box-description">Formulario para modificar nivel cuenta</div>
            </div>
            <form>

                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Nombre Nivel</label>
                            <input class="form-control" v-model="form.descripcion" placeholder="Digita nombre de nivel">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
            <div class="content-box-footer text-right">
                <router-link tag="button" :to="{ name: 'niveles-cuenta' }">
                    <button type="button" class="btn btn-default">Cancelar</button>
                </router-link>
                <button type="button" class="btn btn-primary" @click="actualizarNivelCuenta"
                        :disabled="btnAction != 'Guardar' ? true : false">{{ btnAction }}
                </button>
            </div>
			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import nivel_cuenta from '../../api/niveles_cuentas'
	import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
                form: {
                    descripcion: '',
                },
                btnAction: 'Guardar',
                errorMessages: [],
                estados_financieros: []
            }
        },
        methods: {
            obtenerNivelCuenta() {
                var self = this
                nivel_cuenta.obtenerNivelCuenta({
                    id_nivel_cuenta: this.$route.params.id_nivel_cuenta
                }, data => {
                    self.form = data
					self.loading = false;
                }, err => {
                    alertify.error(err.id_nivel_cuenta[0], 5);
                    this.$router.push({
                        name: 'niveles-cuenta'
                    });
                })
            },

            actualizarNivelCuenta() {
                var self = this
				self.loading = true;
                self.btnAction = 'Guardando, espere......'

                nivel_cuenta.actualizar(self.form, data => {
                    alertify.success("Nivel de cuenta actualizado correctamente", 5);
                    this.$router.push({
                        name: 'niveles-cuenta'
                    })
                }, err => {
                	self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Guardar'
                })
            }
        },
        mounted() {
            this.obtenerNivelCuenta()
        }
    }
</script>