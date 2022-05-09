<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear nueva caja</div>
						<div class="box-description">Formulario para registrar caja chica</div>
					</div>
					<div class="row">

					<div class="col-sm-4">
						<div class="form-group">
							<label for=""> Descripción de caja</label>
							<input class="form-control" placeholder="Dígite una descripción" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
					</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for="">Responsable</label>
								<v-select :options="trabajadores" label="nombre_completo" v-model="form.trabajador"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.trabajador" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for="">Sucursal</label>
								<v-select :options="sucursales" label="descripcion" v-model="form.sucursal"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.sucursal" v-text="message"></li>
								</ul>
							</div>
						</div>

					</div>

					<div class="row">

						<div class="col-sm-4">
							<div class="form-group">
								<label for="">Area</label>
								<v-select :options="areas" label="descripcion" v-model="form.area"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.area" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Fondo de caja</label>
								<input class="form-control" type="number" placeholder="Dígite el monto" min="0" v-model="form.monto">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.monto" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Año</label>
								<input class="form-control" type="number" placeholder="Dígite el año" min="0" v-model="form.anio">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.anio" v-text="message"></li>
								</ul>
							</div>
						</div>
					</div>

					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-caja' }" tag="button">
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
	import caja from '../../api/caja_chica'
	import normativa from '../../api/normativas'
	import loadingImage from '../../assets/images/block50.gif'
	import sucursal from "../../api/sucursales";
	import cliente from "../../api/clientes";
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
					trabajador: [],
					sucursal: [],
					area: [],
				},
				trabajadores:[],
				sucursales:[],
				areas:[],
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {

			nuevo(){
				var self = this;
				self.loading = true;
				caja.nuevo({}, data => {
					self.trabajadores = data.trabajadores;
					self.sucursales = data.sucursales;
					self.areas = data.areas;
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			onDateSelect(date) {
				this.form.anio = moment(date).format("YYYY-MM-DD"); //
			},
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				caja.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-caja'
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