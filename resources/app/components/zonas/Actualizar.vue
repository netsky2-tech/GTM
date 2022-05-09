<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Zona</div>
						<div class="box-description">Formulario para modificar Zona</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Zona</label>
									<input class="form-control" placeholder="Dígite Zona" v-model="form.descripcion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label for>Centro de Costo:</label>
									<multiselect v-model="form.zona_centro_costo" :options="centros_costos"
												 deselect-label="No se puede eliminar este valor"
												 track-by="id_centro"
												 label="descripcion_completa"
												 placeholder="Selecciona un centro"
												 :searchable="true"
												 :show-labels="false"
												 :allow-empty="false"
									></multiselect>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label for>Centro de Ingreso:</label>
									<multiselect v-model="form.zona_centro_ingreso" :options="centros_ingresos"
												 deselect-label="No se puede eliminar este valor"
												 track-by="id_centro"
												 label="descripcion_completa"
												 placeholder="Selecciona un centro"
												 :searchable="true"
												 :show-labels="false"
												 :allow-empty="false"
									></multiselect>
								</div>
							</div>
						</div>
					</form>

					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_zona)" class="btn btn-danger"><i class="fa fa-trash-o">	Deshabilitar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_zona)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-zonas' }" tag="button">
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
	import zona from '../../api/zonas'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					zona_centro_costo:[],
					zona_centro_ingreso:[]
				},
				btnAction: 'Guardar',
				errorMessages: [],
				centros_costos: [],
				centros_ingresos: [],
			}
		},
		methods: {
			obtenerZona() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				zona.obtenerZona({
					id_zona: this.$route.params.id_zona
				}, data => {
					self.form = data.zona;
					self.centros_costos = data.centros_costos
					self.centros_ingresos = data.centros_ingresos
					self.loading = false;
				}, err => {
					alertify.error(err.id_zona[0],5);
					this.$router.push({
						name: 'listado-zonas'
					});
				})
			},
		actualizar() {
				var self = this
			self.loading = true;
				self.btnAction = 'Guardando, espere......'
					zona.actualizar(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'listado-zonas'
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
						zona.desactivar({
							id_zona: zonaId
						}, data => {
							alertify.warning("Zona desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-zonas'
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
						zona.activar({
							id_zona: zonaId
						}, data => {
							alertify.success("Zona activado correctamente", 5);
							this.$router.push({
								name: 'listado-zonas'
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