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
							<div class="col-sm-6">
								<div class="form-group">
									<label for=""> Tipo de producto</label>
									<v-select :options="tipos" label="descripcion" v-model="form.lista_tipo_producto"></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.tipo" v-text="message"></li>
									</ul>
								</div>
							</div>
						</div>
					</form>

					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_precio_lista_grupos)" class="btn btn-danger"><i class="fa fa-trash-o">	Desactivar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_precio_lista_grupos)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-niveles-estudios' }" tag="button">
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
	import listas from '../../api/precio-lista-grupo'
	import loadingImage from '../../assets/images/block50.gif'
	import es from "vuejs-datepicker/dist/locale/translations/es";
	import tipo from "../../api/tipos-productos";

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				tipos:[],
				form: {
					descripcion: '',
				},

				btnAction: 'Guardar',
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
			obtenerZona() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				listas.obtenerGrupo({
					id_precio_lista_grupos: this.$route.params.id_precio_lista_grupos
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					alertify.error(err.id_precio_lista_grupos[0],5);
					this.$router.push({
						name: 'listado-lista-grupo'
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
						name: 'listado-lista-grupo'
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
							id_precio_lista_grupos: zonaId
						}, data => {
							alertify.warning("Grupo desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-lista-grupo'
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
							id_precio_lista_grupos: zonaId
						}, data => {
							alertify.success("Grupo activado correctamente", 5);
							this.$router.push({
								name: 'listado-lista-grupo'
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
			this.obtenerTodosTipos()
		}
    }
</script>