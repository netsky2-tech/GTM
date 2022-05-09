<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear grupo de lista de precio</div>
						<div class="box-description">Formulario para registrar grupo</div>
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
							<div class="col-sm-6">
								<div class="form-group">
									<label for=""> Tipo de producto</label>
									<v-select :options="tipos" label="descripcion" v-model="form.tipo"></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.tipo" v-text="message"></li>
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
	import lista from '../../api/precio-lista-grupo'
	import loadingImage from '../../assets/images/block50.gif'
	import es from "vuejs-datepicker/dist/locale/translations/es";
	import tipo from "../../api/tipos-productos";

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				tipos:[],
				form: {
					descripcion: '',
					tipo: '',
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			obtenerTodosTipos() {
				var self = this
				tipo.obtenerTodas(data => {
					self.tipos = data
				}, err => {
					console.log(err)
				})
			},
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				lista.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-lista-grupo'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		},
		mounted() {
			this.obtenerTodosTipos();
		}
	}
</script>