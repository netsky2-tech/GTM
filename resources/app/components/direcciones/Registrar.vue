<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Dirección</div>
						<div class="box-description">Formulario para registrar Dirección</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre Dirección</label>
							<input class="form-control" placeholder="Dígite el nombre de la dirección" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Código Dirección</label>
							<input class="form-control" placeholder="Dígite el código de la dirección" v-model="form.codigo">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.codigo" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Sucursal</label>
							<v-select v-model="form.sucursal" label="descripcion" :options="sucursales"></v-select>
							<ul class="error-messages">
								<li v-for="message in errorMessages.sucursal" :key="message" v-text="message"></li>
							</ul>
						</div>

							<div class="form-group">
								<label >Clasificación</label>
								<select class="form-control" v-model.number="form.clasificacion_direccion">
									<option value="1">Administración</option>
									<option value="2">Comercialización y otras</option>
								</select>
							</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-direcciones' }" tag="button">
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
	import direccion from '../../api/direcciones'
	import loadingImage from '../../assets/images/block50.gif'
	import cliente from "../../api/clientes";

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				sucursales : [],
				form: {
					descripcion: '',
					codigo: '',
					clasificacion_direccion:1,
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				direccion.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Dirección registrada exitosamente", 5);
					this.$router.push({
						name: 'listado-direcciones'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			},
			nuevo(){
				var self = this
				direccion.nuevo({}, data => {
					self.sucursales = data.sucursales;
				}, err => {
					console.log(err)
				})
			},
		},
		mounted() {
			this.nuevo();
		}
	}
</script>