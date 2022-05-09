<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Nombre departamento</div>
						<div class="box-description">Formulario para modificar Nombre departamento</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre departamento</label>
							<input class="form-control" placeholder="Dígite el Nombre del departamento" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="row">

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-departamentos' }" tag="button">
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
	import departamento from '../../api/departamentos'
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
			obtenerDepartamento() {
				var self = this
				departamento.obtenerDepartamento({
					id_departamento: self.$route.params.id_departamento
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					 alertify.error(err.id_departamento[0],5);
           this.$router.push({
            	name: 'listado-departamentos'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				departamento.actualizar(self.form, data => {
					alertify.success("Departamento actualizado correctamente",5);
					this.$router.push({
						name: 'listado-departamentos'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
		},
		mounted() {
			this.obtenerDepartamento()
		}
    }
</script>