<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Nuevo tipo de proveedor</div>
						<div class="box-description">Formulario para registrar tipo de proveedores</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Descripcion</label>
							<input class="form-control" placeholder="Dígite el tipo de proveedor" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Clasificación</label>
							<select class="form-control col-md-5" name="clasificacion_contable" v-model="form.clasificacion_contable">
								<option value="1">Proveedores</option>
								<option value="2">Acreedores</option>
							</select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.clasificacion_contable" v-text="message"></li>
							</ul>
						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-tipo-proveedor' }" tag="button">
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
	import tipo from '../../api/tipos_proveedores'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					clasificacion_contable : 0,
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
				tipo.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-tipo-proveedor'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		}
    }
</script>