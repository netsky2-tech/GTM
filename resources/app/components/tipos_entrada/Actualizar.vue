<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Tipo de entrada</div>
						<div class="box-description">Formulario para modificar Tipo de entrada</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Tipo de entrada</label>
							<input :disabled='SoloLectura' class="form-control" placeholder="Dígite Tipo de entrada" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
					</form>

					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.estado">
									<button @click="desactivar(form.id_tipo_entrada)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_tipo_entrada)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'tipos-entrada' }" tag="button">
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
	import tipo from '../../api/tipo_entrada'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				SoloLectura:false,
				form: {
					descripcion: ''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerTipoEntrada() {
				var self = this
				//Array(1,2,3,4).includes(Number(self.$route.params.id_tipo_entrada)) ? self.SoloLectura = true : self.SoloLectura = false
				/*console.log(self.$route.params.id_tipo_entrada)
				console.log(Array(1,2,3,4))
				console.log(Array(1,2,3,4).includes(Number(self.$route.params.id_tipo_entrada)))*/
				tipo.obtenerTipoEntrada({
					id_tipo_entrada: self.$route.params.id_tipo_entrada
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					alertify.error(err.id_tipo_entrada[0],5);
					this.$router.push({
						name: 'tipos-entrada'
					});
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
						var self = this
						//if([1,2,3,4].indexOf(tipoId) < 0){
						tipo.desactivar({
							id_tipo_entrada: tipoId
						}, data => {
							alertify.warning("Tipo de entrada desactivado correctamente", 5);
							this.$router.push({
								name: 'tipos-entrada'
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
						var self = this
						tipo.activar({
							id_tipo_entrada: tipoId
						}, data => {
							alertify.success("Tipo de entrada activado correctamente", 5);
							this.$router.push({
								name: 'tipos-entrada'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			
			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'
				if(!self.SoloLectura){
				tipo.actualizar(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'tipos-entrada'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
				}else{
					this.$router.push({
						name: 'tipos-entrada'
					})
					alertify.warning('Lo sentimos este valor esta protegido, si desea cambiar el nombre contacte a los desarrolladores');
				}
			}
		},
		mounted() {
			this.obtenerTipoEntrada()
		}
    }
</script>