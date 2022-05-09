<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar SubAplicacion</div>
						<div class="box-description">Formulario para modificar SubAplicacion</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Descripción</label>
									<input class="form-control" placeholder="Dígite el nombre de la subaplicacion" v-model="form.descripcion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Aplicación</label>
									<v-select
											:options="aplicaciones"
											label="descripcion"
											v-model="form.aplicacion_sub_aplicacion"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.aplicacion" v-text="message"></li>
									</ul>
								</div>
							</div>

						</div>
					</form>

					<div class="row">
						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-subaplicaciones' }" tag="button">
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
	import subaplicacion from '../../api/baterias_subaplicaciones'
	import aplicacion from '../../api/baterias_aplicaciones'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				aplicaciones:[],
				form: {
					subaplicacion: '',
					aplicacion_sub_aplicacion:'',
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerTodosDepartamentos(){
				var self = this;
				aplicacion.obtenerTodos(
						data => {
							//self.form.aplicacion_sub_aplicacion = data;
							self.aplicaciones = data;
							self.loading = false;
						},
						err => {
							console.log(err);
						}
				);

			},
			obtenerSubAplicacion() {
				var self = this
				subaplicacion.obtenerSubAplicacion({
					id_subaplicacion: self.$route.params.id_subaplicacion
				}, data => {
					self.form = data
				}, err => {
					alertify.error(err.id_subaplicacion[0],5);
           this.$router.push({
            	name: 'listado-subaplicaciones'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......'
				subaplicacion.actualizar(self.form, data => {
					alertify.success("SubAplicacion actualizado correctamente",5);
					this.$router.push({
						name: 'listado-subaplicaciones'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
		},
		mounted() {
			this.obtenerTodosDepartamentos();
			this.obtenerSubAplicacion();
		}
    }
</script>