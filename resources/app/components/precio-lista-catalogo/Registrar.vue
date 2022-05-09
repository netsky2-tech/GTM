<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear catalogo de lista de precio</div>
						<div class="box-description">Formulario para registrar catalogo</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
								<label for=""> Descripción</label>
								<input class="form-control" placeholder="Dígite una descripción" v-model="form.descripcion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Valido desde</label>
									<datepicker :format="format" v-model="form.valida_desde" :language="es" :value="new Date()" @selected="onDateSelect"></datepicker>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.fecha_ingreso" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Valido hasta</label>
									<datepicker :format="format" :language="es" v-model="form.valido_hasta" :value="new Date()" @selected="onDateSelect2"></datepicker>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.fecha_egreso" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-8">
								<div class="form-group">
									<label for=""> Correo electronico</label>
									<input class="form-control" placeholder="Dígite un correo electronico" v-model="form.correo_electronico">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.correo_electronico" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label for=""> Descuento distribuidor máximo</label>
									<input class="form-control" type="number" min="0" placeholder="Dígite % descuento máximo" v-model="form.desc_distribuidor_max">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.desc_distribuidor_max" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label for=""> Descuento publico máximo</label>
									<input class="form-control" type="number" min="0" placeholder="Dígite % descuento máximo" v-model="form.desc_publico_max">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.desc_publico_max" v-text="message"></li>
									</ul>
								</div>
							</div>
						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-lista-catalogo' }" tag="button">
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
	import lista from '../../api/precio-lista-catalogo'
	import loadingImage from '../../assets/images/block50.gif'
	import es from "vuejs-datepicker/dist/locale/translations/es";

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				form: {
					descripcion: '',
					valida_desde: moment(new Date()).format("YYYY-MM-DD"),
					valido_hasta: moment(new Date()).format("YYYY-MM-DD"),
					correo_electronico: '',
					desc_distribuidor_max: '',
					desc_publico_max: '',
				},
				fechax: new Date(),
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			onDateSelect(date) {
				//console.log(date); //
				this.form.valida_desde = moment(date).format("YYYY-MM-DD"); //
			},
			onDateSelect2(date) {
				//console.log(date); //
				this.form.valido_hasta = moment(date).format("YYYY-MM-DD"); //
			},
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				lista.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-lista-catalogo'
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