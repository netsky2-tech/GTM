<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Modificar Tipo cuenta</div>
                <div class="box-description">Formulario para modificar Tipo cuenta</div>
            </div>
            <form>

                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Tipo</label>
                            <input class="form-control" v-model="form.descripcion"
                                   placeholder="Digita nombre del anexo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Abreviacion</label>
                            <input class="form-control" v-model="form.tipo_abreviado"
                                   placeholder="Digita nombre del anexo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.tipo_abreviado" :key="message"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="">Estado financiero</label>
                            <v-select
                                    disabled
                                    v-model="form.tipo_cuenta_estado_financiero"
                                    label="nombre_estado_finaciero"
                                    :options="estados_financieros"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.tipo_cuenta_estado_financiero" :key="message"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
            <div class="content-box-footer text-right">
                <router-link tag="button" :to="{ name: 'tipos-cuenta' }">
                    <button type="button" class="btn btn-default">Cancelar</button>
                </router-link>
                <button type="button" class="btn btn-primary" @click="actualizarTipoCuenta"
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
    import tipo_cuenta from '../../api/tipos_cuenta'
    import estados_financieros from '../../api/estados_financieros'
	import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
                form: {
                    tipo: '',
                    tipo_abreviado: ''
                },
                btnAction: 'Guardar',
                errorMessages: [],
                estados_financieros: []
            }
        },
        methods: {
            obtenerTipoCuenta() {
                var self = this
                tipo_cuenta.obtenerTipoCuenta({
                    id_tipo_cuenta: this.$route.params.id_tipo_cuenta
                }, data => {
                    self.form = data
					self.loading = false;
                }, err => {
                    alertify.error(err.id_tipo_cuenta[0], 5);
                    this.$router.push({
                        name: 'tipos-cuenta'
                    });
                })
            },

            obtenerTodosEstadosFinacieros() {
                var self = this;
                estados_financieros.obtenerTodosEstadosFinacieros(
                    data => {
                        self.estados_financieros = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },

            actualizarTipoCuenta() {
                var self = this
				self.loading = true;
                self.btnAction = 'Guardando, espere......'

                tipo_cuenta.actualizar(self.form, data => {
                    alertify.success("Tipo cuenta actualizado correctamente", 5);
                    this.$router.push({
                        name: 'tipos-cuenta'
                    })
                }, err => {
                	self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Guardar'
                })
            }
        },
        mounted() {
            this.obtenerTodosEstadosFinacieros()
            this.obtenerTipoCuenta()
        }
    }
</script>