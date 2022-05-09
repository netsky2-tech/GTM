<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar vendedores</div>
						<div class="box-description">Formulario para modificar vendedores</div>
					</div>
					<div class="row">

					<div class="col-sm-4">
						<div class="form-group">
							<label for=""> Descripción</label>
							<input class="form-control" placeholder="Dígite una descripción" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
					</div>

					<div class="col-sm-4">
						<div class="form-group">
							<label for="">Trabajador</label>
							<v-select :options="trabajadores" label="nombre_completo" v-model="form.trabajador_caja"></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.trabajador_caja" v-text="message"></li>
							</ul>
						</div>
					</div>

					<div class="col-sm-4">
						<div class="form-group">
							<label for="">Sucursal</label>
							<v-select :options="sucursales" label="descripcion" v-model="form.sucursal_caja"></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.sucursal_caja" v-text="message"></li>
							</ul>
						</div>
					</div>

				</div>

		<div class="row">

			<div class="col-sm-4">
				<div class="form-group">
					<label for="">Area</label>
					<v-select :options="areas" label="descripcion" v-model="form.area_caja"></v-select>
					<ul class="error-messages">
						<li :key="message" v-for="message in errorMessages.area_caja" v-text="message"></li>
					</ul>
				</div>
			</div>

			<div class="col-sm-4">
				<div class="form-group">
					<label for=""> Monto</label>
					<input class="form-control" type="number" placeholder="Dígite el monto" v-model="form.monto">
					<ul class="error-messages">
						<li :key="message" v-for="message in errorMessages.monto" v-text="message"></li>
					</ul>
				</div>
			</div>

			<div class="col-sm-4">
				<div class="form-group">
					<label for=""> Año</label>
					<input class="form-control" type="number" placeholder="Dígite el año" v-model="form.anio">
					<ul class="error-messages">
						<li :key="message" v-for="message in errorMessages.anio" v-text="message"></li>
					</ul>
				</div>
			</div>
		</div>
					<div class="row">
						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.estado">
									<button @click="desactivar(form.id_caja_chica)" class="btn btn-danger"><i class="fa fa-trash-o">	Inhabilitar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_caja_chica)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-caja' }" tag="button">
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
	import caja from '../../api/caja_chica.js'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					trabajador_caja: [],
					sucursal_caja: [],
					area_caja: [],
					monto: 0,
					anio:0
				},
				trabajadores:[],
				sucursales:[],
				areas:[],
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerCaja() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				caja.obtenerCaja({
					id_caja_chica: this.$route.params.id_caja_chica
				}, data => {
					self.trabajadores = data.trabajadores;
					self.areas = data.areas;
					self.sucursales = data.sucursales;
					self.form = data.caja
					self.loading = false;
				}, err => {
					alertify.error(err.id_caja_chica[0],5);
					this.$router.push({
						name: 'listado-caja'
					});
				})
			},
		actualizar() {
				var self = this
			self.loading = true;
				self.btnAction = 'Guardando, espere......'
					caja.actualizar(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'listado-caja'
					})
				}, err => {
						self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(zonaId) {
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
						//var self = this
						caja.desactivar({
							id_caja_chica: zonaId
						}, data => {
							alertify.warning("Caja desactivada correctamente", 5);
							this.$router.push({
								name: 'listado-caja'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(zonaId) {
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
						caja.activar({
							id_caja_chica: zonaId
						}, data => {
							alertify.success("Caja activado correctamente", 5);
							this.$router.push({
								name: 'listado-caja'
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
			this.obtenerCaja();
		}
    }
</script>