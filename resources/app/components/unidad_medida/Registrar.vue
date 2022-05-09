<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Nuevo Unidad de medida</div>
						<div class="box-description">Formulario para registrar nuevo Unidad de medida</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-4 form-group">
								<label for=""> Descripción</label>
								<input class="form-control" v-model="form.descripcion" placeholder="Dígite la descripción">
								<ul class="error-messages">
									<li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
								</ul>
							</div>

							<div class="col-sm-4 form-group">
								<label for=""> Símbolo</label>
								<input class="form-control" placeholder="Dígite Unidad de medida" v-model="form.unidad_medida">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.unidad_medida" v-text="message"></li>
								</ul>
							</div>
								<div class="col-sm-4 form-group">
									<label >Clasificación UM</label>
									<v-select
											:disabled="false"
											v-model="form.clasificacion"
											label="clasificacion_um"
											:options="clasificaciones"
									></v-select>
									<ul class="error-messages">
										<li v-for="message in errorMessages.clasificacion" :key="message" v-text="message"></li>
									</ul>
								</div>
							<div class="col-sm-2 form-group">
								<label class="check-label2"><input v-model="form.entrante" type="checkbox"> Entrante</label>
							</div>
							<div class="col-sm-2 form-group">
								<label class="check-label2"><input v-model="form.saliente" type="checkbox"> Saliente</label>
							</div>
							<div class="col-sm-4 form-group">
								<label for=""> Relación con UM estándar</label>
								<input type="number" step="0.1" min="0" class="form-control" placeholder="Dígite Unidad de medida" v-model="form.relacion_um_estandar">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.relacion_um_estandar" v-text="message"></li>
								</ul>
							</div>
						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'unidad-medida' }">
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
	import tipo from '../../api/unidad_medida'
	import loadingImage from '../../assets/images/block50.gif'
	import bodega from "../../api/bodegas";

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					unidad_medida: '',
					clasificacion: '',
					entrante:'',
					saliente:''
				},
				clasificaciones:[],
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				tipo.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'unidad-medida'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			},
			nuevo() {
				var self = this;
				tipo.nuevo({}, data => {
							self.clasificaciones = data.clasificaciones;

							self.loading = false;
						},
						err => {
							console.log(err);
						})

			},
		},
		mounted() {
			this.nuevo();
		}
	}
</script>
<style>
	.check-label2{
		margin-top: 40px;
		margin-left: 40px;
	}
</style>