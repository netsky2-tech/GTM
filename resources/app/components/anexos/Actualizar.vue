<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Anexo</div>
						<div class="box-description">Formulario para modificar Anexo</div>
					</div>
					<form>

						<div class="row">
							<div class="col-sm-6">
						<div class="form-group">
							<label for=""> Nombre del Anexo</label>
							<input class="form-control" v-model="form.nombre_anexo" placeholder="Digita nombre del anexo">
							<ul class="error-messages">
								<li v-for="message in errorMessages.nombre_anexo" :key="message" v-text="message"></li>
							</ul>
						</div>
            </div>

						<div class="col-sm-6">
              <div class="form-group">
                <label for="">Estado financiero</label>
               <v-select
							 disabled
                  v-model="form.anexos_estado_financiero"
                  label="nombre_estado_finaciero"              
                  :options="estados_financieros"
                ></v-select>
                <ul class="error-messages">
                  <li v-for="message in errorMessages.anexos_estado_financiero" :key="message" v-text="message"></li>
                </ul>
              </div>
            </div>
 </div>
					</form>
					<div class="row">


							<div class="col-md-6">
					<div class="content-box-footer text-left">
								<template v-if="form.estado==1">
							 <button class="btn btn-danger" @click="desactivarAnexo(form.id_anexo)"><i class="fa fa-trash-o">	Eliminar</i></button>
                </template>
                <template v-else>
								<button class="btn btn-success" @click="activarAnexo(form.id_anexo)"><i class="fa fa-check-square">	Habilitar</i></button>
                </template>	
					</div>
					</div>

							<div class="col-md-6">
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'anexos' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button type="button" class="btn btn-primary" @click="actualizarAnexo" :disabled="btnAction != 'Guardar' ? true : false">{{ btnAction }}</button>
					</div>
						</div>

					</div>

				</div>
			</div>
	
</template>

<script type="text/ecmascript-6">
	import anexo from '../../api/anexos'
	import estados_financieros from '../../api/estados_financieros'

	export default {
		data() {
			return {
				anexos: [],
				form: {
					nombre_anexo: ''
				},
				btnAction: 'Guardar',
				errorMessages: [],
				estados_financieros:[]
			}
		},
		methods: {
			  desactivarAnexo(anexoID) {
            	var self = this
				anexo.desactivarAnexo({
					id_anexo: anexoID
				}, data => {
					alertify.warning("Anexo desactivado correctamente",5);
					this.$router.push({
						name: 'anexos'
					})
				}, err => {
					console.log(err)
				})
			},
			activarAnexo(anexoID) {
            	var self = this
				anexo.activarAnexo({
					id_anexo: anexoID
				}, data => {
					alertify.success("Anexo activado correctamente",5);
						this.$router.push({
						name: 'anexos'
					})
				}, err => {
					console.log(err)
				})
            },
			obtenerAnexo() {
				var self = this
				anexo.obtenerAnexo({
					id_anexo: this.$route.params.id_anexo
				}, data => {
					self.form = data
					 //self.obtenerTodosEstadosFinacieros(self.form.cuenta_tipo);
				}, err => {
					//console.log(err)
					 alertify.error(err.id_anexo[0],5);
           this.$router.push({
            	name: 'anexos'
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

			actualizarAnexo() {
				var self = this
				self.btnAction = 'Guardando, espere......'

				anexo.actualizar(self.form, data => {
					alertify.success("Anexo actualizado correctamente",5);
					this.$router.push({
						name: 'anexos'
					})
				}, err => {
					self.errorMessages = err
          self.btnAction = 'Guardar'
				})
			}
		},
		mounted() {
			this.obtenerTodosEstadosFinacieros()
			this.obtenerAnexo()
		}
    }
</script>