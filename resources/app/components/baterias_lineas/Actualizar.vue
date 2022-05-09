<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Nombre linea</div>
						<div class="box-description">Formulario para modificar Nombre linea</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre linea</label>
							<input class="form-control" placeholder="Dígite el Nombre de la linea" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="row">

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-lineas' }" tag="button">
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
	import linea from '../../api/baterias_lineas'
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
			obtenerLinea() {
				var self = this
				linea.obtenerLinea({
					id_linea: self.$route.params.id_linea
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					 alertify.error(err.id_linea[0],5);
           this.$router.push({
            	name: 'listado-lineas'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				linea.actualizar(self.form, data => {
					alertify.success("Linea actualizado correctamente",5);
					this.$router.push({
						name: 'listado-lineas'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
		},
		mounted() {
			this.obtenerLinea()
		}
    }
</script>