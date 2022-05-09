<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Modificar Periodo</div>
                <div class="box-description">Formulario para modificar datos del Periodo</div>
            </div>
            <form>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for=""> Descripción Periodo</label>
                            <input class="form-control" placeholder="Dígite la descripcion del periodo"
                                   v-model="form.descripcion">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for=""> Periodo</label>
                            <input disabled class="form-control" type="number" v-model="form.periodo"
                                   placeholder="Dígite la descripcion del periodo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.periodo" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <!--	<div class="col-sm-3">
                            <div class="form-group">
                                <label for=""> Salario Mensual Techo</label>
                                <input class="form-control" type="number" v-model="form.salario_mensual_techo" placeholder="Costo Estándar">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.salario_mensual_techo" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                            </div>

                            <div class="col-sm-3">
                            <div class="form-group">
                                <label for=""> Porcentaje INSS</label>
                                <input class="form-control" type="number" v-model="form.porcentaje_inss_base" placeholder="Costo Estándar">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.porcentaje_inss_base" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                            </div>


                            <div class="col-sm-3">
                            <div class="form-group">
                                <label for=""> Porcentaje IR</label>
                                <input class="form-control" type="number" v-model="form.porcentaje_ir_base" placeholder="Costo Estándar">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.porcentaje_ir_base" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                            </div>-->


                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for="">Estado</label>
                            <select class="form-control" v-model="form.estado">
                                <option value="0">En progreso</option>
                                <option value="1">Completado</option>
                            </select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.estado" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </form>
            <div class="content-box-footer text-right">
                <router-link tag="button" :to="{ name: 'listado-periodos' }">
                    <button type="button" class="btn btn-default">Cancelar</button>
                </router-link>
                <button type="button" class="btn btn-primary" @click="actualizar"
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
    import periodo from '../../api/periodos'
	import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
                form: {
                    descripcion: '',
                    periodo: 2019,
                    salario_mensual_techo: 0,
                    porcentaje_inss_base: 0,
                    porcentaje_ir_base: 0,
                },
                btnAction: 'Guardar',
                errorMessages: []
            }
        },
        methods: {
            obtenerPeriodo() {
                var self = this
                periodo.obtenerPeriodo({
                    id_periodo_fiscal: self.$route.params.id_periodo_fiscal
                }, data => {
                    self.form = data
					self.loading = false;
                }, err => {
                    alertify.error(err.id_periodo_fiscal[0], 5);
                    this.$router.push({
                        name: 'listado-periodos'
                    });
                })


            },
            actualizar() {
                var self = this
				self.loading = true;
                self.btnAction = 'Guardando, espere......'
                periodo.actualizar(self.form, data => {
                    alertify.success("Periodo actualizado correctamente", 5);
                    this.$router.push({
                        name: 'listado-periodos'
                    })
                }, err => {
                	self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Guardar'
                })
            }
        },
        mounted() {
            this.obtenerPeriodo()
        }
    }
</script>