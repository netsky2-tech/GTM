<template>
	<div class="main">

		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Modificar configuración de IR</div>
				<div class="box-description">Formulario para Configuración de IR</div>
			</div>
			<form>
				<div class="row">
					<div class="col-md-2">
						<div class="form-group">
							<label for=""> Monto inicial</label>
							<input class="form-control" placeholder="Dígite un monto inicial"  type="number" min="0" v-model="form.monto_inicial">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.monto_inicial" v-text="message"></li>
							</ul>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label for=""> Monto final</label>
							<input class="form-control" placeholder="Dígite un monto final"  type="number" min="0" v-model="form.monto_final">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.monto_final" v-text="message"></li>
							</ul>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label for=""> Impuesto base</label>
							<input class="form-control" placeholder="Dígite un impuesto base"  type="number" min="0" v-model="form.impuesto_base">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.impuesto_base" v-text="message"></li>
							</ul>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label for=""> Porcentaje</label>
							<input class="form-control" placeholder="Dígite un porcentaje"  type="number" min="0" v-model="form.porcentaje">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.porcentaje" v-text="message"></li>
							</ul>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label for=""> Sobre exceso</label>
							<input class="form-control" placeholder="Dígite una sobre exceso"  type="number" min="0" v-model="form.sobre_exceso">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.sobre_exceso" v-text="message"></li>
							</ul>
						</div>
					</div>

				</div>
			</form>

			<div class="row">
				<div class="col-md-6">
					<div class="content-box-footer text-left">
						<template v-if="form.estado===1">
							<button @click="desactivar(form.id_configuracion_ir)" class="btn btn-danger"><i
									class="fa fa-trash-o"> Eliminar</i></button>
						</template>
						<template v-else>
							<button @click="activar(form.id_configuracion_ir)" class="btn btn-success"><i
									class="fa fa-check-square"> Habilitar</i></button>
						</template>
					</div>
				</div>

				<div class="col-md-6">
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-configuracion-ir' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar"
								class="btn btn-primary" type="button">{{ btnAction }}
						</button>
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
	import configuracion from '../../api/configuracion-ir'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading: true,
				msg: 'Cargando contenido, espere un momento',
				url: '/public' + loadingImage,   //It is important to import the loading image then use here
				cuentas_contables:[],
				bancos:[],
				monedas:[],
				form: {
					ingreso: '',
					cve_ingreso_deduccion: '',
					moneda_cuenta_bancaria: '',
					cuenta_contable_cuenta_bancaria: ''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerConfiguracionIr() {
				var self = this
				configuracion.obtenerConfiguracion({
					id_configuracion_ir: self.$route.params.id_configuracion_ir
				}, data => {
					self.form = data.configuracion;
					self.loading = false;
				}, err => {
					alertify.error(err.id_configuracion_ir[0], 5);
					this.$router.push({
						name: 'listado-configuracion-ir'
					});
				})


			},
			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'
				configuracion.actualizar(self.form, data => {
					alertify.success("Registro actualizado correctamente", 5);
					this.$router.push({
						name: 'listado-configuracion-ir'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
					self.btnAction = 'Guardar'
				})
			},

			desactivar(cuentabancariaId) {

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
						configuracion.desactivar({
							id_configuracion_ir: cuentabancariaId
						}, data => {
							alertify.warning("Registro desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-configuracion-ir'
							})
						}, err => {
							console.log(err)
						});
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(cuentabancariaId) {
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
						configuracion.activar({
							id_configuracion_ir: cuentabancariaId
						}, data => {
							alertify.success("Registro activado correctamente", 5);
							this.$router.push({
								name: 'listado-configuracion-ir'
							})
						}, err => {
							console.log(err)
						});
					}else{
						self.btnAction = "Guardar";
					}
				})
			}
		},
		mounted() {
			this.obtenerConfiguracionIr()
		}
	}
</script>
<style>
	.check-label2 {
		margin-top: 40px;
	}
</style>