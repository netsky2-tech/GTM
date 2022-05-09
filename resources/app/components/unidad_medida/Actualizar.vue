<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Unidad de medida</div>
						<div class="box-description">Formulario para modificar Unidad de medida</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-4 form-group">
								<label for=""> Descripción</label>
								<input class="form-control" v-model="form.descripcion" placeholder="Dígite Unidad de medida">
								<ul class="error-messages">
									<li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
								</ul>
							</div>
							<div class="col-sm-4 form-group">
								<label for=""> Símbolo UM</label>
								<input class="form-control" placeholder="Dígite la descripción" v-model="form.unidad_medida">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.unidad_medida" v-text="message"></li>
								</ul>
							</div>
							<div class="col-sm-4 form-group">
							<label >Clasificación UM</label>
							<v-select
									:disabled="false"
									v-model="form.clasificacion_unidadMedida"
									label="clasificacion_um"
									:options="clasificaciones"
							></v-select>
							<ul class="error-messages">
								<li v-for="message in errorMessages.clasificacion_unidadMedida" :key="message" v-text="message"></li>
							</ul>
							</div>
							<div class="col-sm-2 form-group">
								<label class="check-label2"><input v-model="form.entrante" type="checkbox"> Entrante</label>
							</div>
							<div class="col-sm-2 form-group">
								<label class="check-label2"><input v-model="form.saliente" type="checkbox"> Saliente</label>
							</div>
							<div class="col-sm-4 form-group">
								<label for=""> Relación con UM estándar</label>
								<input type="number" step="0.1" min="0" class="form-control" placeholder="Dígite Unidad de medida" v-model="form.relacion_um_estandar">
								<ul class="error-messages">
									<li v-for="message in errorMessages.relacion_um_estandar" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_unidad_medida)" class="btn btn-danger"><i class="fa fa-trash-o">	Deshabilitar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_unidad_medida)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'unidad-medida' }" tag="button">
									<button class="btn btn-default" type="button">Cancelar</button>
								</router-link>
								<button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar" class="btn btn-primary" type="button">{{ btnAction }}</button>
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
	import tipo from '../../api/unidad_medida'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					unidad_medida: '',
					clasificacion_unidadMedida: []

				},
				btnAction: 'Guardar',
				errorMessages: [],
				clasificaciones: []
			}
		},
		methods: {
			obtenerUnidadMedida() {
				var self = this
				tipo.obtenerUnidadMedida({
					id_unidad_medida: this.$route.params.id_unidad_medida
				}, data => {
					self.form = data.unidad_medida;
					self.form.clasificacion_unidadMedida = data.unidad_medida.unidad_medidad;
					self.loading = false;
				}, err => {
					alertify.error(err.id_unidad_medida[0],5);
					this.$router.push({
						name: 'unidad-medida'
					});
				})
			},
			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'

				tipo.actualizar(self.form, data => {
					this.$router.push({
						name: 'unidad-medida'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(unidadID) {

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
						tipo.desactivar({
							id_unidad_medida: unidadID
						}, data => {
							alertify.warning("Unidad de medida desactivada correctamente", 5);
							this.$router.push({
								name: 'unidad-medida'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(unidadID) {

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
						tipo.activar({
							id_unidad_medida: unidadID
						}, data => {
							alertify.success("Unidad de medida activada correctamente", 5);
							this.$router.push({
								name: 'unidad-medida'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			nuevo() {
				var self = this;
				tipo.nuevo({}, data => {
							self.clasificaciones = data.clasificaciones;

							self.loading = false;
						},
						err => {
							console.log(err);
						})

			},
		},
		mounted() {
			this.obtenerUnidadMedida()
			this.nuevo()
		}
    }
</script>
<style>
	.check-label2{
		margin-top: 40px;
		margin-left: 40px;
	}
</style>