<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear nuevo día en calendario laboral</div>
						<div class="box-description">Formulario para registrar calendario laboral</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-3">
								<div class="form-group">
									<label>Tipo</label>
									<select :disabled="false" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field" v-model="form.tipo">
										<option value="1">Calendario</option>
										<option value="2">Evento</option>
										<option value="3">Feriado</option>
									</select>
								</div>
							</div>
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
									<label for>Fecha</label>
									<datepicker :format="format" :language="es" :value="new Date()" v-model="fechax" @selected="onDateSelect"></datepicker>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.fecha" v-text="message"></li>
									</ul>
								</div>
							</div>
						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-feriado' }" tag="button">
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
	import feriado from '../../api/feriados'
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
					fecha : moment(new Date()).format("YYYY-MM-DD"),
					tipo:0,
				},
				fechax: new Date(),
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				feriado.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-feriado'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			},
			onDateSelect(date) {
				//console.log(date); //
				this.form.fecha = moment(date).format("YYYY-MM-DD"); //
			},
		}
    }
</script>