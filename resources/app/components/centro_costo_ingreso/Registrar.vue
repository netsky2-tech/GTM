<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear nueva zona de costo</div>
						<div class="box-description">Formulario para registrar zonas de costo</div>
					</div>


					<form>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<label for="">Tipo centro</label>
									<select @change="cambiarTipo" class="form-control" v-model.number="form.tipo_centro">
										<!--<option value="1">Centro de Ingresos</option>-->
										<option value="2">Zona de Costo</option>
									</select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.tipo_centro" v-text="message"></li>
									</ul>
								</div>
							</div>

							<!--<div class="col-sm-4">
								<div class="form-group">
									<label for="">Clasificación Contable</label>
									<select :disabled="form.tipo_centro!==2" class="form-control" v-model.number="form.clasificacion_contable">
										<option :disabled="form.tipo_centro===2" value="0">N/A</option>
										<option value="1">Comercialización</option>
										<option value="2">Administración</option>
										<option value="3">Empleado</option>
									</select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.clasificacion_contable" v-text="message"></li>
									</ul>
								</div>
							</div>-->

							<div class="col-sm-4">
								<div class="form-group">
									<label for="">Ubicación</label>
									<select class="form-control" v-model.number="form.ubicacion">
										<option value="1">General</option>
										<!--<option value="2">Foráneo</option>-->
									</select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.ubicacion" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Descripción</label>
									<input class="form-control" placeholder="Dígite el nombre de la zona de costo " v-model="form.descripcion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
									</ul>
								</div>
							</div>

						</div>
					</form>

					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-centro-costo' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction !== 'Registrar'" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
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
	import centro from '../../api/centro_costo'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					tipo_centro : 2,
					ubicacion:1,
					clasificacion_contable:0
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			cambiarTipo(){

				let self= this;
				if(self.form.tipo_centro === 1){
					self.form.clasificacion_contable=0;
				}else{
					self.form.clasificacion_contable=1;
				}

			},
			registrar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Registrando, espere....'
				centro.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-centro-costo'
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