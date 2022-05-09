<template>
	<div class="main">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar nuevo usuario</div>
						<div class="box-description">Formulario de nuevo usuario</div>
					</div>
					<form>
						
					<div class="row">

						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Trabajador</label>
								<div class="form-group">
									<typeahead :initial="form.trabajador" :trim="80" :url="trabajadoresBusquedaURL" @input="seleccionarTrabajador" style="width: 100%;"></typeahead>

								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.trabajador" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Rol Sistema</label>

								<select class="form-control" v-model="form.id_rol">
									<option :key="rol.id_rol" :value="rol.id_rol" v-for="rol in roles">{{ rol.descripcion }}</option>
								</select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_rol" v-text="message"></li>
								</ul>
							</div>
						</div>
						
					<div class="col-sm-4">
					<div class="form-group">
							<label for=""> Usuario</label>
							<input class="form-control" placeholder="Usuario" v-model="form.usuario" >
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.usuario" v-text="message"></li>
							</ul>
						</div></div>



					
							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Contraseña</label>
									<input class="form-control" placeholder="Contraseña" type="password" v-model="form.password">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.password" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label for="">Confirmar Contraseña</label>
									<input class="form-control" placeholder="Confirmar Contraseña" type="password" v-model="form.password_confirmation">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.password_confirmation" v-text="message"></li>
									</ul>
								</div>
							</div>
						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-usuarios' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Guardar' ? true : false" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
					</div>
					<template v-if="loading">
					<BlockUI :message="msg" :url="url"></BlockUI>
					</template>
				</div>
			</div>
		
</template>

<script type="text/ecmascript-6">
	import rol from '../../api/rol'
	import loadingImage from '../../assets/images/block50.gif'
	import usuarios from '../../api/usuarios'
	//import trabajadores from '../../api/trabajadores'
	//import Typeahead from '../layout/Typeahead'
	export default {
		/*components: {
			'typeahead':Typeahead
		},*/
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				roles: [],
				trabajadoresBusqueda: {},
				trabajadoresBusquedaURL: "/trabajadores/buscar",
				form: {
					nombres: '',
					email: '',
					password: '',
					password_confirmation: '',
					rol: [],
					trabajador:{}
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			seleccionarTrabajador(e) {
				const trabajador = e.target.value;
				var self = this;
				self.form.trabajador = trabajador;
			},
			obtenerTodosRoles() {
				var self = this
				rol.obtenerTodosRoles(data => {
					self.roles = data
				}, err => {
					console.log(err)
				})
			},

			registrar() {
				var self = this
				self.btnAction = 'Guardando, espere...'
				self.loading = true;
				usuarios.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos del usuario registrados correctamente",5);
					this.$router.push({
						name: 'listado-usuarios'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			}
		},
		mounted() {
			this.obtenerTodosRoles();
		}
    }
</script>