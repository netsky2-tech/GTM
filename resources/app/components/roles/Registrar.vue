<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Nuevo Rol</div>
						<div class="box-description">Formulario para registrar nuevo rol de usuario</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre del rol</label>
							<input class="form-control" v-model="form.descripcion" placeholder="Dígite descripción del rol" type="email">
							<ul class="error-messages">
								<li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'roles' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button type="button" class="btn btn-primary" @click="crearRol" :disabled="btnAction != 'Registrar' ? true : false">{{ btnAction }}</button>
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
	import rol from '../../api/rol'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				roles: [],
				form: {
					descripcion: '',
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			crearRol() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				rol.crearRol(self.form, data => {
					self.loading = false;
					//alertify.set('notifier','position', 'top-right');
					alertify.success("Rol registrado correctamente",5);
					this.$router.push({
						name: 'roles'
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