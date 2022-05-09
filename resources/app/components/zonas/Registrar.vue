<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Nuevo Zona</div>
						<div class="box-description">Formulario para registrar Zona</div>
					</div>
					<form>
						<div class="row">
						<div class="col-sm-4">
						<div class="form-group">
							<label for=""> Zona</label>
							<input class="form-control" placeholder="Dígite Zona" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Centro de Costo:</label>
								<multiselect v-model="form.centro_costo" :options="centros_costos"
											 deselect-label="No se puede eliminar este valor"
											 track-by="id_centro"
											 label="descripcion_completa"
											 placeholder="Selecciona un centro"
											 :searchable="true"
											 :show-labels="false"
											 :allow-empty="false"
								></multiselect>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Centro de Ingreso:</label>
								<multiselect v-model="form.centro_ingreso" :options="centros_ingresos"
											 deselect-label="No se puede eliminar este valor"
											 track-by="id_centro"
											 label="descripcion_completa"
											 placeholder="Selecciona un centro"
											 :searchable="true"
											 :show-labels="false"
											 :allow-empty="false"
								></multiselect>
							</div>
						</div>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-zonas' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Registrar' ? true : false" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
					</div>
					<template v-if="loading">
						<BlockUI :message="msg" :url="url"></BlockUI>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import zona from '../../api/zonas'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				centros_costos: [],
				centros_ingresos: [],
				form: {
					descripcion: '',
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			nuevo() {
				var self = this;
				zona.nuevo(
						data => {
							self.centros_ingresos= data.centros_ingresos;
							self.centros_costos = data.centros_costos;
							self.loading=false;
						},
						err => {
							console.log(err);
						}
				);
			},
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				zona.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-zonas'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		},
		mounted() {
			this.nuevo();
		}
	}
</script>