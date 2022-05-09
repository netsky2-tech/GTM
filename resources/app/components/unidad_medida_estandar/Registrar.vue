<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Nueva Clasificación UM</div>
						<div class="box-description">Formulario para registrar nueva clasificación UM</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Clasificación UM</label>
							<input class="form-control" v-model="form.clasificacion_um" placeholder="Dígite Clasificación Unidad de medida">
							<ul class="error-messages">
								<li v-for="message in errorMessages.clasificacion_um" :key="message" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> UM Estandar</label>
							<input class="form-control" placeholder="Dígite la Unidad de Medida Estandar" v-model="form.um_estandar">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.um_estandar" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Símbolo UM</label>
							<input class="form-control" placeholder="Dígite el símbolo de la Unidad de Medida " v-model="form.simbolo_um">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.simbolo_um" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'unidad-medida-estandar' }">
							<button type="button" class="btn btn-default">Cancelar</button>
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
	import tipo from '../../api/unidad_medida_estandar'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					clasificacion_unidades_medidas: '',
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
						name: 'unidad-medida-estandar'
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