<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Tipo Activos</div>
						<div class="box-description">Formulario para registrar Tipo Activos</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre Tipo Activos</label>
							<input class="form-control" placeholder="Dígite el nombre del Tipo Activos" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-tipos-activos' }" tag="button">
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
	import tipo from '../../api/activos_tipos'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					codigo: '',
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
					alertify.success("Tipo Activos registrada exitosamente", 5);
					this.$router.push({
						name: 'listado-tipos-activos'
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