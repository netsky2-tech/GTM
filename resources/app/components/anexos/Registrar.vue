<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Crear Nuevo anexo</div>
                        <div class="box-description">Formulario para registrar nuevo anexo</div>
                    </div>
                    <form>
                        <div class="row">

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for=""> Nombre del Anexo</label>
                                    <input class="form-control" v-model="form.nombre_anexo"
                                           placeholder="Digita nombre del anexo">
                                    <ul class="error-messages">
                                        <li v-for="message in errorMessages.nombre_anexo" :key="message"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>


                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Estado financiero</label>
                                    <v-select
                                            placeholder="Seleccione el estado financiero"
                                            v-model="form.anexos_estado_financiero"
                                            label="nombre_estado_finaciero"
                                            :options="estados_financieros"
                                    ></v-select>
                                    <ul class="error-messages">
                                        <li v-for="message in errorMessages.anexos_estado_financiero" :key="message"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="content-box-footer text-right">
                        <router-link tag="button" :to="{ name: 'anexos' }">
                            <button type="button" class="btn btn-default">Cancelar</button>
                        </router-link>
                        <button type="button" class="btn btn-primary" @click="registrar"
                                :disabled="btnAction != 'Registrar' ? true : false">{{ btnAction }}
                        </button>
                    </div>

					<template v-if="loading">
						<BlockUI :message="msg" :url="url"></BlockUI>
					</template>

                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import anexo from '../../api/anexos'
    import estados_financieros from '../../api/estados_financieros'
	import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
                form: {
                    nombre_anexo: '',
                    anexos_estado_financiero: ''
                },
                btnAction: 'Registrar',
                errorMessages: [],
                estados_financieros: []
            }
        },
        methods: {
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
            registrar() {
                var self = this
                self.btnAction = 'Registrando, espere....'
				self.loading = true;
                anexo.registrar(self.form, data => {
                	self.loading = false;
                    alertify.success("Anexo registrado correctamente", 5);
                    this.$router.push({
                        name: 'anexos'
                    })
                }, err => {
					self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Registrar'
                })
            },
        },
        mounted() {
            this.obtenerTodosEstadosFinacieros()
        }
    }
</script>