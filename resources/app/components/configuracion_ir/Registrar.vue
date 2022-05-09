<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Configuracion IR</div>
						<div class="box-description">Formulario para administrar IR</div>
					</div>
					<form>
						<div class="row">
							<div class="col-md-2">
								<div class="form-group">
									<label for=""> Monto inicial</label>
									<input class="form-control" placeholder="Dígite un monto inicial"  type="number" min="0" v-model="form.monto_inicial">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.monto_inicial" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-md-2">
								<div class="form-group">
									<label for=""> Monto final</label>
									<input class="form-control" placeholder="Dígite un monto final"  type="number" min="0" v-model="form.monto_final">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.monto_final" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-md-2">
								<div class="form-group">
									<label for=""> Impuesto base</label>
									<input class="form-control" placeholder="Dígite un impuesto base"  type="number" min="0" v-model="form.impuesto_base">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.impuesto_base" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-md-2">
								<div class="form-group">
									<label for=""> Porcentaje</label>
									<input class="form-control" placeholder="Dígite un porcentaje"  type="number" min="0" v-model="form.porcentaje">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.porcentaje" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-md-2">
								<div class="form-group">
									<label for=""> Sobre exceso</label>
									<input class="form-control" placeholder="Dígite una sobre exceso"  type="number" min="0" v-model="form.sobre_exceso">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.sobre_exceso" v-text="message"></li>
									</ul>
								</div>
							</div>

						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-configuracion-ir' }" tag="button">
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
	import loadingImage from '../../assets/images/block50.gif'
	import configuracion from '../../api/configuracion-ir'
	import es from "vuejs-datepicker/dist/locale/translations/es";

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				cuentas_contables:[],
				form: {
					monto_inicial: '',
					monto_final: '',
					impuesto_base: '',
					porcentaje: '',
					sobre_exceso: '',
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
				configuracion.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-configuracion-ir'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		},
		mounted() {

		}
    }
</script>
<style>
	.check-label2 {
		margin-top: 40px;
	}
</style>