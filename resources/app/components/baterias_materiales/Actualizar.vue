<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Nombre material</div>
						<div class="box-description">Formulario para modificar Nombre material</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre material</label>
							<input class="form-control" placeholder="Dígite el Nombre de la material" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="row">

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-materiales' }" tag="button">
									<button class="btn btn-default" type="button">Cancelar</button>
								</router-link>
								<button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar" class="btn btn-primary" type="button">{{ btnAction }}</button>
							</div>
						</div>
						<div v-if="loading">
							<BlockUI :message="msg" :url="url"></BlockUI>
						</div>
					</div>
				</div>
			</div>
	
</template>

<script type="text/ecmascript-6">
	import material from '../../api/baterias_materiales'
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
			obtenerMaterial() {
				var self = this
				material.obtenerMaterial({
					id_material: self.$route.params.id_material
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					 alertify.error(err.id_material[0],5);
           this.$router.push({
            	name: 'listado-materiales'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				material.actualizar(self.form, data => {
					alertify.success("Material actualizado correctamente",5);
					this.$router.push({
						name: 'listado-materiales'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
		},
		mounted() {
			this.obtenerMaterial()
		}
    }
</script>