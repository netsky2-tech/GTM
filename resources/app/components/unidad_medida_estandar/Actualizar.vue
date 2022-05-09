<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Clasificación UM</div>
						<div class="box-description">Formulario para modificar la clasifiacion de Unidad de medida</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Clasificación UM</label>
							<input class="form-control" v-model="form.clasificacion_um" placeholder="Dígite Unidad de medida">
							<ul class="error-messages">
								<li v-for="message in errorMessages.clasificacion_um" :key="message" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> UM Estandar</label>
							<input class="form-control" placeholder="Dígite la descripción" v-model="form.um_estandar">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.um_estandar" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Símbolo UM</label>
							<input class="form-control" placeholder="Dígite la descripción" v-model="form.simbolo_um">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.simbolo_um" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.estado">
									<button @click="desactivar(form.id_clasificacion_unidad_medida)" class="btn btn-danger"><i class="fa fa-trash-o">	Deshabilitar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_clasificacion_unidad_medida)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'unidad-medida-estandar' }" tag="button">
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
	import tipo from '../../api/unidad_medida_estandar'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					unidad_medida: ''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerUnidadMedidaEstandar() {
				var self = this
				tipo.obtenerUnidadMedidaEstandar({
					id_clasificacion_unidad_medida: this.$route.params.id_clasificacion_unidad_medida
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					alertify.error(err.id_clasificacion_unidad_medida[0],5);
					this.$router.push({
						name: 'unidad-medida-estandar'
					});
				})
			},
			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'

				tipo.actualizar(self.form, data => {
					this.$router.push({
						name: 'unidad-medida-estandar'
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
							id_clasificacion_unidad_medida: unidadID
						}, data => {
							alertify.warning("Unidad de medida desactivada correctamente", 5);
							this.$router.push({
								name: 'unidad-medida-estandar'
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
							id_clasificacion_unidad_medida: unidadID
						}, data => {
							alertify.success("Unidad de medida activada correctamente", 5);
							this.$router.push({
								name: 'unidad-medida-estandar'
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
			this.obtenerUnidadMedidaEstandar()
		}
    }
</script>