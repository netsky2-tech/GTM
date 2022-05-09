<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear nueva clasificacion</div>
						<div class="box-description">Formulario para registrar nueva clasificacion</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Clasificación</label>
							<input class="form-control" placeholder="Dígite nombre de la clasificacion" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Cuenta Contable</label>
							<v-select :options="cuentas_contables" label="nombre_cuenta_completo" v-model="form.clasificacion_compra_cuenta_contable"  ></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.clasificacion_compra_cuenta_contable" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'listado-clasificacion' }">
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
	import clasificacion from '../../api/clasificacion_compra'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					tipo_afectacion:'',
					clasificacion_compra_cuenta_contable:[],
					activo:''
				},
				cuentas_contables:[],
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			nuevo() {
				var self = this;
				clasificacion.nuevo({
						}, data => {
							self.cuentas_contables = data.cuentas_contables;
							self.loading= false;
						},
						err => {
							self.loading= false;
							console.log(err);
						})

			},
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				clasificacion.registrar(self.form, data => {
					self.loading = false;
					this.$router.push({
						name: 'listado-clasificacion'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			},
		},
		mounted() {
			this.nuevo();
		}
    }
</script>