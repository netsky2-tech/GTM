<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar zona de costo</div>
						<div class="box-description">Formulario para modificar zona de costo</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<label for="">Tipo centro</label>
									<select disabled class="form-control" v-model.number="form.tipo_centro">
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
									<select disabled class="form-control" v-model.number="form.clasificacion_contable">
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
									<select disabled class="form-control" v-model.number="form.ubicacion">
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
									<input class="form-control" placeholder="Dígite nombre de la zona de costo" v-model="form.descripcion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
									</ul>
								</div>
							</div>

						</div>
					</form>

					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.estado">
									<button @click="desactivar(form.id_centro)" class="btn btn-danger"><i class="fa fa-trash-o">	Deshabilitar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_centro)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-centro-costo' }" tag="button">
									<button class="btn btn-default" type="button">Cancelar</button>
								</router-link>
								<button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar" class="btn btn-primary" type="button">{{ btnAction }}</button>
							</div>
						</div>
						<template v-if="loading">
							<BlockUI :message="msg" :url="url"></BlockUI>
						</template>
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
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerCentro() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				centro.obtenerCentro({
					id_centro: this.$route.params.id_centro
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					alertify.error(err.id_centro[0],5);
					this.$router.push({
						name: 'listado-centro-costo'
					});
				})
			},
		actualizar() {
				var self = this
			self.loading = true;
				self.btnAction = 'Guardando, espere......'
					centro.actualizar(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'listado-centro-costo'
					})
				}, err => {
						self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(id_centro) {
				var self = this;
				self.$swal.fire({
					title: 'Esta seguro de cambiar el estado?',
					text: "",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						var self = this
						centro.desactivar({
							id_centro: id_centro
						}, data => {
							if (self.form.tipo_centro === 1) {
								alertify.warning("Centro de costo desactivado correctamente", 5);
							} else {
								alertify.warning("Centro de ingreso desactivado correctamente", 5);
							}
							this.$router.push({
								name: 'listado-centro-costo'
							})
						}, err => {
							console.log(err)
						});
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(id_centro) {

				var self = this;
				self.$swal.fire({
					title: 'Esta seguro de cambiar el estado?',
					text: "",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						var self = this
						centro.activar({
							id_centro: id_centro
						}, data => {
							alertify.success("Registro activado correctamente", 5);
							this.$router.push({
								name: 'listado-centro-costo'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			}
		},
		mounted() {
			this.obtenerCentro()
		}
    }
</script>