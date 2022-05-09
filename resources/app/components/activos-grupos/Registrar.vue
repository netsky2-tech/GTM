<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Grupo Activos</div>
						<div class="box-description">Formulario para registrar Grupo Activos</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre Grupo Activos</label>
							<input class="form-control" placeholder="Dígite el nombre del Grupo Activos" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Código Grupo Activos</label>
							<input class="form-control" placeholder="Dígite el código del Grupo Activos" v-model="form.codigo">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.codigo" v-text="message"></li>
							</ul>
						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-grupos-activos' }" tag="button">
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
	import grupo from '../../api/activos_grupos'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					codigo: '',
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading=true;
				grupo.registrar(self.form, data => {
					self.loading=false;
					alertify.success("Grupo Activos registrada exitosamente", 5);
					this.$router.push({
						name: 'listado-grupos-activos'
					})
				}, err => {
					self.loading=false;
					alertify.warning("Revise los datos proporcionados", 5);
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		}
    }
</script>