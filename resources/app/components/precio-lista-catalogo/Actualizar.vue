<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar catalogo de lista de precio</div>
						<div class="box-description">Formulario para modificar catalogo</div>
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
							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Valido desde</label>
									<datepicker :format="format" v-model="fechax" :language="es" :value="new Date()" @selected="onDateSelect"></datepicker>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.fecha_ingreso" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Valido hasta</label>
									<datepicker :format="format" :language="es" v-model="fechax2" :value="new Date()" @selected="onDateSelect2"></datepicker>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.fecha_egreso" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-8">
								<div class="form-group">
									<label for=""> Correo electronico</label>
									<input class="form-control" placeholder="Dígite un correo electronico" v-model="form.correo_electronico">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.correo_electronico" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label for=""> Descuento distribuidor máximo</label>
									<input class="form-control" type="number" min="0" placeholder="Dígite un descuento distribuidor" v-model="form.desc_distribuidor_max">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.desc_distribuidor_max" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label for=""> Descuento publico máximo</label>
									<input class="form-control" type="number" min="0" placeholder="Dígite un descuento publico" v-model="form.desc_publico_max">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.desc_publico_max" v-text="message"></li>
									</ul>
								</div>
							</div>
						</div>
					</form>

					<div class="row">

						<template v-if="form.estado ===1">
						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.estado">
									<button @click="desactivar(form.id_precio_lista_catalogo)" class="btn btn-danger"><i class="fa fa-trash-o">	Desactivar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_precio_lista_catalogo)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>
						</template>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-lista-catalogo' }" tag="button">
									<button class="btn btn-default" type="button">Cancelar</button>
								</router-link>
								<template v-if="form.estado ===1">
								<button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar" class="btn btn-primary" type="button">{{ btnAction }}</button>
								</template>
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
	import listas from '../../api/precio-lista-catalogo'
	import loadingImage from '../../assets/images/block50.gif'
	import es from "vuejs-datepicker/dist/locale/translations/es";

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				form: {
					descripcion: '',
				},
				fechax: new Date(),
				fechax2: new Date(),
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			onDateSelect(date) {
				//console.log(date); //
				this.form.valida_desde = moment(date).format("YYYY-MM-DD"); //
			},
			onDateSelect2(date) {
				//console.log(date); //
				this.form.valido_hasta = moment(date).format("YYYY-MM-DD"); //
			},
			obtenerZona() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				listas.obtenerCatalogo({
					id_precio_lista_catalogo: this.$route.params.id_precio_lista_catalogo
				}, data => {
					self.form = data
					self.fechax = new Date(data.valida_desde);
					self.fechax2 = new Date(data.valido_hasta);
					self.loading = false;
				}, err => {
					alertify.error(err.id_precio_lista_catalogo[0],5);
					this.$router.push({
						name: 'listado-lista-catalogo'
					});
				})
			},
		actualizar() {
				var self = this
			self.loading = true;
				self.btnAction = 'Guardando, espere......'
					listas.actualizar(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'listado-lista-catalogo'
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
						listas.desactivar({
							id_precio_lista_catalogo: zonaId
						}, data => {
							alertify.warning("Catalogo desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-lista-catalogo'
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
						listas.activar({
							id_precio_lista_catalogo: zonaId
						}, data => {
							alertify.success("Catalogo activado correctamente", 5);
							this.$router.push({
								name: 'listado-lista-catalogo'
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
			this.obtenerZona()
		}
    }
</script>