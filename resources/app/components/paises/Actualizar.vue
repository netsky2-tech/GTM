<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar País</div>
						<div class="box-description">Formulario para modificar País</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre País</label>
							<input class="form-control" placeholder="Dígite el nombre de la dirección" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Código País</label>
							<input class="form-control" placeholder="Dígite el código de la dirección" v-model="form.codigo">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.codigo" v-text="message"></li>
							</ul>
						</div>
						
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.estado==1">
									<button @click="desactivar(form.id_pais)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_pais)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-paises' }" tag="button">
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
	import pais from '../../api/paises'
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
			obtenerPais() {
				var self = this
				pais.obtenerPais({
					id_pais: self.$route.params.id_pais
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					 alertify.error(err.id_pais[0],5);
           this.$router.push({
            	name: 'listado-paises'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				pais.actualizar(self.form, data => {
					alertify.success("Pais actualizado correctamente",5);
					this.$router.push({
						name: 'listado-paises'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(paisId) {

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
						pais.desactivar({
							id_pais: paisId
						}, data => {
							alertify.warning("Pais desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-paises'
							})
						}, err => {
							console.log(err)
						});
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(paisId) {

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
						pais.activar({
							id_pais: paisId
						}, data => {
							alertify.success("Pais activado correctamente", 5);
							this.$router.push({
								name: 'listado-paises'
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
			this.obtenerPais()
		}
    }
</script>