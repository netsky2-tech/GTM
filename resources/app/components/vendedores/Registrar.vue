<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear nuevo vendedor</div>
						<div class="box-description">Formulario para registrar vendedores</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for="">Trabajador</label>
								<v-select :options="trabajadores" v-on:change="cargar_trabajador" label="nombre_completo" v-model="form.trabajador"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.trabajador" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Nombre completo</label>
								<input class="form-control" type="text" placeholder="Nombre completo del vendedor"  v-model="form.nombre_completo">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.nombre_completo" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Dirección</label>
								<input class="form-control" type="text" placeholder="Dirección del vendedor"  v-model="form.direccion">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.direccion" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Telefono</label>
								<input class="form-control" type="text" placeholder="Telefono del vendedor"  v-model="form.telefono">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.telefono" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Email</label>
								<input class="form-control" type="text" placeholder="Email del vendedor"  v-model="form.email">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.email" v-text="message"></li>
								</ul>
							</div>
						</div>

					</div>

					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-vendedores' }" tag="button">
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
	import vendedor from '../../api/vendedores'
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
					nombre_completo: '',
					direccion: '',
					telefono: '',
					email: '',
					trabajador: [],
				},
				trabajadores:[],
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {

			nuevo(){
				var self = this;
				self.loading = true;
				vendedor.nuevo({}, data => {
					self.trabajadores = data.trabajadores;
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			cargar_trabajador()
			{
				var self = this;
				if(self.form.trabajador)
				{
					self.form.id_trabajador = self.form.trabajador.id_trabajador;
					self.form.nombre_completo = self.form.trabajador.nombre_completo;
					if(self.form.trabajador.trabajador_detalles){
					self.form.direccion = self.form.trabajador.trabajador_detalles.direccion;
					self.form.telefono = self.form.trabajador.trabajador_detalles.telefono;
					self.form.email = self.form.trabajador.trabajador_detalles.email;
					}
				}
			},
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				vendedor.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-vendedores'
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