<template>
	<div class="main">
		<div class="row">
			<div class="col-md-6">
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
								<li v-for="message in errorMessages.descripcion" :key="message" v-text="message">{{ message }}</li>
							</ul>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'roles' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button type="button" class="btn btn-primary" @click="crearRol" :disabled="btnAction != 'Registrar' ? true : false">{{ btnAction }}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import menu from '../../api/menu'

	export default {
		data() {
			return {
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

				group.crearRol(self.form, data => {
					this.$router.push({
						name: 'roles'
					})
				}, err => {
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			},
				obtenerSecciones(){
				var self = this
				menu.obtenerSecciones(self.filter, data => {
					self.secciones = data.rows
				}, err => {
					console.log(err)
				})
		 }
		}
    }
</script>