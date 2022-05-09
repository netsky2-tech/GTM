<template>
	<div class="main">

		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Modificar Bodega</div>
				<div class="box-description">Formulario para modificar Bodega</div>
			</div>
			<form>
				<div class="row">
					<div class="col-sm-4">
						<div class="form-group">
							<label for=""> Descripción</label>
							<input class="form-control" placeholder="Dígite el nombre del bodega" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
					</div>

					<!--<div class="col-sm-4">
						<div class="form-group">
							<label for="">Sucursal</label>
							<v-select
									:options="sucursales"
									label="descripcion"
									v-model="form.sucursal_bodega"
							></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.sucursal" v-text="message"></li>
							</ul>
						</div>
					</div>-->


					<!--<div class="col-sm-4">
						<div class="form-group">
							<label for="">Zona de costo</label>
							<v-select
									:options="centros_costos_ingresos"
									label="descripcion"
									v-model="form.centro_costo_bodega"
							></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.centro_costo_bodega" v-text="message"></li>
							</ul>
						</div>
					</div>
-->
					<div class="col-sm-3">
						<div class="form-group">
							<label for="">Tipo Bodega</label>
							<v-select
									:options="tipos_bodegas"
									label="descripcion"
									v-model="form.tipo_bodega"
							></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.tipo_bodega" v-text="message"></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="row">


					<!--<div class="col-sm-3">
						<div class="form-group">
							<label class="check-label2"><input type="checkbox"
															  v-model="form.permite_venta"> Bodega permite ventas</label>
						</div>
					</div>-->
				</div>

			</form>

			<div class="row">
				<div class="col-md-6">
					<div class="content-box-footer text-left">
						<template v-if="form.activo">
							<button @click="desactivar(form.id_bodega)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
						</template>
						<template v-else>
							<button @click="activar(form.id_bodega)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
						</template>
					</div>
				</div>

				<div class="col-md-6">
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'bodegas' }" tag="button">
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
	import bodega from '../../api/bodegas'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				centros_costos_ingresos:[],
				sucursales:[],
				tipos_bodegas:[],
				form: {
					bodega: '',
					sucursal_bodega:'',
					tipo_bodega:'',
					centro_costo_bodega:''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerBodega() {
				var self = this
				bodega.obtenerBodega({
					id_bodega: self.$route.params.id_bodega
				}, data => {
					self.form = data.bodega,
					self.centros_costos_ingresos = data.centros_costos_ingresos;
					self.tipos_bodegas = data.tipos_bodega;
					self.loading = false;
				}, err => {
					alertify.error(err.id_bodega[0],5);
					this.$router.push({
						name: 'bodegas'
					});
				})

			},
			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'
				bodega.actualizar(self.form, data => {
					alertify.success("Bodega actualizada correctamente",5);
					this.$router.push({
						name: 'bodegas'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
					self.btnAction = 'Guardar'
				})
			},

			desactivar(bodegaId) {

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
						bodega.desactivar({
							id_bodega: bodegaId
						}, data => {
							alertify.warning("Bodega desactivada correctamente", 5);
							this.$router.push({
								name: 'bodegas'
							})
						}, err => {
							console.log(err)
						});
					}else{
						self.btnAction = "Guardar";
					}
				})

			},
			activar(bodegaId) {
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
						bodega.activar({
							id_bodega: bodegaId
						}, data => {
							alertify.success("Bodega activada correctamente", 5);
							this.$router.push({
								name: 'bodegas'
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
			this.obtenerBodega();
		}
	}
</script>
<style>
	.check-label2 {
		margin-top: 40px;
	}
</style>