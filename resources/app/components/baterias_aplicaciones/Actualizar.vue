<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Nombre aplicacion</div>
						<div class="box-description">Formulario para modificar Nombre aplicacion</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre aplicacion</label>
							<input class="form-control" placeholder="Dígite el Nombre de la aplicacion" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="row">

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-aplicaciones' }" tag="button">
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
	import aplicacion from '../../api/baterias_aplicaciones'
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
			obtenerAplicacion() {
				var self = this
				aplicacion.obtenerAplicacion({
					id_aplicacion: self.$route.params.id_aplicacion
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					 alertify.error(err.id_aplicacion[0],5);
           this.$router.push({
            	name: 'listado-aplicaciones'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				aplicacion.actualizar(self.form, data => {
					alertify.success("Aplicacion actualizado correctamente",5);
					this.$router.push({
						name: 'listado-aplicaciones'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
		},
		mounted() {
			this.obtenerAplicacion()
		}
    }
</script>