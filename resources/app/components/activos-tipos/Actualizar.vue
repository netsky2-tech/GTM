<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Tipo de activo</div>
						<div class="box-description">Formulario para modificar Tipo de activo</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre Tipo de activo</label>
							<input class="form-control" placeholder="Dígite el nombre del tipo de activos" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
						
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_tipo_activo)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_tipo_activo)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-tipos-activos' }" tag="button">
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
	import tipo from '../../api/activos_tipos'
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
			obtenerTipo() {
				var self = this
				tipo.obtenerTipo({
					id_tipo_activo: self.$route.params.id_tipo_activo
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					 alertify.error(err.id_tipo_activo[0],5);
           this.$router.push({
            	name: 'listado-tipos-activos'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				tipo.actualizar(self.form, data => {
					alertify.success("Tipo actualizado correctamente",5);
					this.$router.push({
						name: 'listado-tipos-activos'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
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
						tipo.desactivar({
							id_tipo_activo: tipoId
						}, data => {
							alertify.warning("Tipo desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-tipos-activos'
							})
						}, err => {
							console.log(err)
						});
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
						tipo.activar({
							id_tipo_activo: tipoId
						}, data => {
							alertify.success("Tipo activado correctamente", 5);
							this.$router.push({
								name: 'listado-tipos-activos'
							})
						}, err => {
							console.log(err)
						});
					}else{
						self.btnAction = "Guardar";
					}
				})

			}
	},
		mounted() {
			this.obtenerTipo()
		}
    }
</script>