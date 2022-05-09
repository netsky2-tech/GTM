<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Nombre banco</div>
						<div class="box-description">Formulario para modificar Nombre banco</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre banco</label>
							<input class="form-control" v-model="form.descripcion" placeholder="Dígite el Nombre del banco">
							<ul class="error-messages">
								<li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo==1">
									<button @click="desactivar(form.id_banco)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_banco)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-bancos' }" tag="button">
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
	import banco from '../../api/bancos'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: ''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerBanco() {
				var self = this
				banco.obtenerBanco({
					id_banco: self.$route.params.id_banco
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					 alertify.error(err.id_banco[0],5);
           this.$router.push({
            	name: 'listado-bancos'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				banco.actualizar(self.form, data => {
					alertify.success("Banco actualizado correctamente",5);
					this.$router.push({
						name: 'listado-bancos'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(bancoId) {
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
						banco.desactivar({
							id_banco: bancoId
						}, data => {
							alertify.warning("Banco desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-bancos'
							})
						}, err => {
							console.log(err)
						});
					}else{
						self.btnAction = "Guardar";
					}
				})

			},
			activar(bancoId) {

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
						banco.activar({
							id_banco: bancoId
						}, data => {
							alertify.success("Banco activado correctamente", 5);
							this.$router.push({
								name: 'listado-bancos'
							})
						}, err => {
							console.log(err)
						});
					}
				})

			}
		},
		mounted() {
			this.obtenerBanco()
		}
    }
</script>