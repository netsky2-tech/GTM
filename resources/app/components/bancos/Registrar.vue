
<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Banco</div>
						<div class="box-description">Formulario para registrar Banco</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre banco</label>
							<input class="form-control" v-model="form.descripcion" placeholder="Dígite el nombre del banco">
							<ul class="error-messages">
								<li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'listado-bancos' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button type="button" class="btn btn-primary" @click="registrar" :disabled="btnAction != 'Registrar' ? true : false">{{ btnAction }}</button>
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
	import banco from '../../api/bancos'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
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
				banco.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Banco registrado exitosamente", 5);
					this.$router.push({
						name: 'listado-bancos'
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