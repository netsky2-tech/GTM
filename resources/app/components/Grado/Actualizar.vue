<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Grado</div>
						<div class="box-description">Formulario para modificar un grado</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Grado</label>
							<input class="form-control" v-model="form.grado" placeholder="Dígite el grado ">
							<ul class="error-messages">
								<li v-for="message in errorMessages.grado" :key="message" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Descripción</label>
							<input class="form-control" placeholder="Dígite la descripción" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.estado">
									<button @click="desactivar(form.id_grado)" class="btn btn-danger"><i class="fa fa-trash-o">	Deshabilitar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_grado)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'grado' }" tag="button">
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
	import tipo from '../../api/grado'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					grado: ''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerGrado() {
				var self = this
				tipo.obtenerGrado({
					id_grado: this.$route.params.id_grado
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					alertify.error(err.id_grado[0],5);
					this.$router.push({
						name: 'grado'
					});
				})
			},
			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'

				tipo.actualizar(self.form, data => {
					this.$router.push({
						name: 'grado'
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
							id_grado: unidadID
						}, data => {
							alertify.warning("Grado desactivado correctamente", 5);
							this.$router.push({
								name: 'grado'
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
							id_grado: unidadID
						}, data => {
							alertify.success("Grado activado correctamente", 5);
							this.$router.push({
								name: 'grado'
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
			this.obtenerGrado()
		}
    }
</script>