<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar clasificación</div>
						<div class="box-description">Formulario para modificar clasificación</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Tipo de clasificación</label>
							<input class="form-control" placeholder="Dígite Tipo de Clasificación" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Cuenta Contable</label>
							<v-select :options="cuentas_contables" label="nombre_cuenta_completo" v-model="form.clasificacion_compra_cuenta_contable"  ></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.clasificacion_compra_cuenta_contable" v-text="message"></li>
							</ul>
						</div>
					</form>

					<div class="row">
						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_clasificacion_servicio)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_clasificacion_servicio)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-clasificacion' }" tag="button">
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
	import clasificacion from '../../api/clasificacion_compra'
	import loadingImage from '../../assets/images/block50.gif'
	import impuesto from "../../api/impuestos";

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				cuentas_contables:[],
				form: {
					descripcion: '',
					tipo_afectacion:'',
					id_cuenta_contable:'',
					activo:''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerClasificacion() {
				var self = this
				clasificacion.obtenerClasificacion({
					id_clasificacion_servicio: self.$route.params.id_clasificacion_servicio
				}, data => {
					self.form = data.clasificacion
					self.cuentas_contables = data.cuentas_contables
					self.loading = false;
				}, err => {
					self.loading = false;
					alertify.error(err.id_clasificacion_servicio[0], 5);
					this.$router.push({
						name: 'listado-clasificacion'
					});
				})


			},

			desactivar(tipoId) {
				//var self = this
				var self = this;
				self.$swal.fire({
					title: 'Esta seguro de cambiar el estado?',
					text: "",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText: 'Cancelar'
				}).then((result) => {
					if (result.value) {
						clasificacion.desactivar({
							id_clasificacion_servicio: tipoId
						}, data => {
							alertify.warning("Clasificación desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-clasificacion'
							})
						}, err => {
							console.log(err)
						});
					} else {
						self.btnAction = "Guardar";
					}
				})
			},
			activar(tipoId) {
				var self = this;
				self.$swal.fire({
					title: 'Esta seguro de cambiar el estado?',
					text: "",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText: 'Cancelar'
				}).then((result) => {
					if (result.value) {
						var self = this
						clasificacion.activar({
							id_clasificacion_servicio: tipoId
						}, data => {
							alertify.success("Clasificación activada correctamente", 5);
							this.$router.push({
								name: 'listado-clasificacion'
							})
						}, err => {
							console.log(err)
						});
					} else {
						self.btnAction = "Guardar";
					}
				})
			},

			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'
				clasificacion.actualizar(self.form, data => {
					self.loading = false;
					alertify.success("Datos actualizados correctamente", 5);
					this.$router.push({
						name: 'listado-clasificacion'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
					self.btnAction = 'Guardar'
				})
			},
		},
		mounted() {
			this.obtenerClasificacion()
		}
    }
</script>