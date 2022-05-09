<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Municipio</div>
						<div class="box-description">Formulario para modificar Municipio</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Descripción</label>
									<input class="form-control" placeholder="Dígite el nombre del municipio" v-model="form.descripcion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Departamento</label>
									<v-select
											:options="departamentos"
											label="descripcion"
											v-model="form.departamento_municipio"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.departamento" v-text="message"></li>
									</ul>
								</div>
							</div>

						</div>
					</form>

					<div class="row">
						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-municipios' }" tag="button">
									<button class="btn btn-default" type="button">Cancelar</button>
								</router-link>
								<button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar" class="btn btn-primary" type="button">{{ btnAction }}</button>
							</div>
						</div>
					</div>
					<template v-if="loading">
						<BlockUI :message="msg" :url="url"></BlockUI>
					</template>
				</div>
			</div>
	
</template>

<script type="text/ecmascript-6">
	import municipio from '../../api/municipios'
	import departamento from '../../api/departamentos'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				departamentos:[],
				form: {
					municipio: '',
					departamento_municipio:'',
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerTodasCuentasContables() {
				var self = this;
				cuentas_contables.obtenerTodasCuentasContables(
						data => {
							//self.form.cuenta_contable_municipio = data;
							self.cuentas_contables = data;
						},
						err => {
							console.log(err);
						}
				);

			},

			obtenerTodosDepartamentos(){
				var self = this;
				departamento.obtenerTodos(
						data => {
							//self.form.departamento_municipio = data;
							self.departamentos = data;
						},
						err => {
							console.log(err);
						}
				);

			},
			obtenerMunicipio() {
				var self = this
				municipio.obtenerMunicipio({
					id_municipio: self.$route.params.id_municipio
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					alertify.error(err.id_municipio[0],5);
           this.$router.push({
            	name: 'listado-municipios'
          });
				})

				
			},
			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'
				municipio.actualizar(self.form, data => {
					alertify.success("Municipio actualizado correctamente",5);
					this.$router.push({
						name: 'listado-municipios'
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
			this.obtenerMunicipio();
		}
    }
</script>