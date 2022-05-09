<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Nueva categoría</div>
						<div class="box-description">Formulario para registrar nueva categoría</div>
					</div>
					<form>
					
						<div class="row">
						<div class="col-sm-6">
						<div class="form-group">
							<label for=""> Nombre Categoría</label>
							<input class="form-control" placeholder="Nombre Categoría" v-model="form.nombre_categoria" >
							<ul class="error-messages">
								<li v-for="message in errorMessages.nombre_categoria" :key="message" v-text="message"></li>
							</ul>
						</div>
						</div>

						<div class="col-sm-6">
						<div class="form-group">
							<label for=""> Descripción Categoría</label>
							<input class="form-control" placeholder="Descripción Categoría" v-model="form.descripcion" >
							<ul class="error-messages">
								<li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
							</ul>
						</div>
						</div>
						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-categorias' }" tag="button">
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
	import categoria from '../../api/categorias'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					nombre_categoria: ''
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
				categoria.registrar(self.form, data => {
					self.loading = false;
					this.$router.push({
						name: 'listado-categorias'
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