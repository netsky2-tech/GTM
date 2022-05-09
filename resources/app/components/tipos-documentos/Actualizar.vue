<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Modificar Tipo Documentos</div>
                <div class="box-description">Formulario para modificar Tipo Documentos</div>
            </div>
            <form>

                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for=""> Tipo</label>
                            <input class="form-control" v-model="form.descripcion"
                                   placeholder="Digita el tipo de documento">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for=""> Prefijo</label>
                            <input class="form-control" placeholder="Digita el prefijo del tipo de documento"
                                   v-model="form.prefijo">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.prefijo" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for=""> Secuencia actual</label>
                            <input class="form-control" disabled placeholder="Digita el tipo de documento"
                                   v-model="form.secuencia">
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="check-label2"><input type="checkbox"
                                                              v-model="form.permite_registro_manual"> Tipo documento
                                permite registros manuales</label>
                        </div>
                    </div>
                </div>
            </form>

            <div class="row">


                <div class="col-md-6">
                    <div class="content-box-footer text-left">
                        <template v-if="form.estado">
                            <button @click="desactivar(form.id_tipo_doc)" class="btn btn-danger"><i
                                    class="fa fa-trash-o"> Eliminar</i></button>
                        </template>
                        <template v-else>
                            <button @click="activar(form.id_tipo_doc)" class="btn btn-success"><i
                                    class="fa fa-check-square"> Habilitar</i></button>
                        </template>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'tipos-documentos' }" tag="button">
                            <button class="btn btn-default" type="button">Cancelar</button>
                        </router-link>
                        <button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizarTipoDocumento"
                                class="btn btn-primary" type="button">{{ btnAction }}
                        </button>
                    </div>
                </div>

				<template v-if="loading">
					<BlockUI :message="msg" :url="url"></BlockUI>
				</template>

            </div>
            <br>
            <div class="alert alert-info">
                <span>Nota: Modificar el prefijo del documento, no afecta los códigos de documentos registrados previamente.</span>
            </div>
            <hr>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import tipo_documento from '../../api/tipos_documentos'
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
            }
        },
        methods: {
            obtenerTipoDocumento() {
                var self = this
                tipo_documento.obtenerTipoDocumento({
                    id_tipo_doc: this.$route.params.id_tipo_doc
                }, data => {
                    self.form = data
					self.loading = false;
                }, err => {
                    alertify.error(err.id_tipo_doc[0], 5);
                    this.$router.push({
                        name: 'tipos-documentos'
                    });
                })
            },


            actualizarTipoDocumento() {
                var self = this
				self.loading = true;
                self.btnAction = 'Guardando, espere......'

                tipo_documento.actualizar(self.form, data => {
                    alertify.success("Tipo de documento actualizado correctamente", 5);
                    this.$router.push({
                        name: 'tipos-documentos'
                    })
                }, err => {
                	self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Guardar'
                })
            }
            ,
            desactivar(tipoId) {

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
                        tipo_documento.desactivar({
                            id_tipo_doc: tipoId
                        }, data => {
                            alertify.warning("Tipo de documento desactivado correctamente", 5);
                            this.$router.push({
                                name: 'tipos-documentos'
                            })
                        }, err => {
                            console.log(err)
                        })
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },
            activar(tipoId) {

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
                        tipo_documento.activar({
                            id_tipo_doc: tipoId
                        }, data => {
                            alertify.success("Tipo de documento activado correctamente", 5);
                            this.$router.push({
                                name: 'tipos-documentos'
                            })
                        }, err => {
                            console.log(err)
                        })
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            }
        },
        mounted() {
            this.obtenerTipoDocumento()
        }
    }
</script>
<style lang="scss" scoped>
    .check-label2 {
        margin-top: 40px;
    }
</style>