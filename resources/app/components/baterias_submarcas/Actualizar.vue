<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar SubMarca</div>
						<div class="box-description">Formulario para modificar SubMarca</div>
					</div>

						<div class="row">
							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Descripción</label>
									<input class="form-control" placeholder="Dígite el nombre del submarca" v-model="form.descripcion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Marca</label>
									<v-select
											:options="marcas"
											label="descripcion"
											v-model="form.marca_sub_marca"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.marca" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label class="check-label2"><input type="checkbox"
																	   v-model="form.genera_comision"> Genera Comisión</label>
								</div>
							</div>
						</div>

					<div class="row">
						<div class="col-md-12">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-submarcas' }" tag="button">
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
	import submarca from '../../api/baterias_submarcas'
	import marca from '../../api/baterias_marcas'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				marcas:[],
				form: {
					submarca: '',
					marca_sub_marca:'',
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerTodosMarcas(){
				var self = this;
				marca.obtenerTodos(
						data => {
							//self.form.marca_sub_marca = data;
							self.marcas = data;
							self.loading = false;
						},
						err => {
							console.log(err);
						}
				);

			},
			obtenerSubMarca() {
				var self = this
				submarca.obtenerSubMarca({
					id_submarca: self.$route.params.id_submarca
				}, data => {
					self.form = data
				}, err => {
					alertify.error(err.id_submarca[0],5);
           this.$router.push({
            	name: 'listado-submarcas'
          });
				})

				
			},
			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'
				submarca.actualizar(self.form, data => {
					alertify.success("SubMarca actualizado correctamente",5);
					this.$router.push({
						name: 'listado-submarcas'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
		},
		mounted() {
			this.obtenerTodosMarcas();
			this.obtenerSubMarca();
		}
    }
</script>
<style>

	.check-label2 {
		margin-top: 40px;
	}

</style>