<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Propietario activos</div>
						<div class="box-description">Formulario para modificar Propietario activos</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Código Propietario Activo</label>
							<input disabled class="form-control" placeholder="Dígite el código del Propietario Activo" v-model="form.id_propietario">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.id_propietario" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Nombre Propietario activos</label>
							<input class="form-control" placeholder="Dígite el nombre del propietario de activos" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_propietario)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_propietario)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-propietarios-activos' }" tag="button">
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
	import propietario from '../../api/activos_propietarios'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					codigo: ''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerPropietario() {
				var self = this
				propietario.obtenerPropietario({
					id_propietario: self.$route.params.id_propietario
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					alertify.error(err.id_propietario[0], 5);
					this.$router.push({
						name: 'listado-propietarios-activos'
					});
				})


			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				propietario.actualizar(self.form, data => {
					alertify.success("Grupo actualizado correctamente", 5);
					this.$router.push({
						name: 'listado-propietarios-activos'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
					self.btnAction = 'Guardar'
				})
			},
			desactivar(propietarioId) {
				var self = this;
				self.$swal.fire({
					title: 'Esta seguro de cambiar el estado?',
					text: "",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText: 'Cancelar'
				}).then((result) => {
					if (result.value) {
						propietario.desactivar({
							id_propietario: propietarioId
						}, data => {
							alertify.warning("Grupo desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-propietarios-activos'
							})
						}, err => {
							console.log(err)
						});
					} else {
						self.btnAction = "Guardar";
					}
				})
			},
			activar(propietarioId) {

				propietario.activar({
					id_propietario: propietarioId
				}, data => {
					alertify.success("Grupo activado correctamente", 5);
					this.$router.push({
						name: 'listado-propietarios-activos'
					})
				}, err => {
					console.log(err)
				})
			},
		},
		mounted(){
			this.obtenerPropietario()
			}
	}
</script>