<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Categoría</div>
						<div class="box-description">Formulario para modificar Categoría</div>
					</div>
					<form>
					
					<div class="row">
						<div class="col-sm-6">
						<div class="form-group">
							<label for=""> Nombre Categoría</label>
							<input class="form-control" placeholder="Nombre Categoría" v-model="form.nombre_categoria" >
							<ul class="error-messages">
								<li v-for="message in errorMessages.nombre_categoria" :key="message" v-text="message"></li>
							</ul>
						</div>
						</div>

						<div class="col-sm-6">
						<div class="form-group">
							<label for=""> Descripción Categoría</label>
							<input class="form-control" placeholder="Descripción Categoría" v-model="form.descripcion" >
							<ul class="error-messages">
								<li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
							</ul>
						</div>
						</div>
						</div>
					</form>

					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_categoria)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_categoria)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-categorias' }" tag="button">
									<button class="btn btn-default" type="button">Cancelar</button>
								</router-link>
								<button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizarCategoria" class="btn btn-primary" type="button">{{ btnAction }}</button>
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
	import categoria from '../../api/categorias'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					nombre_categoria: '',
					descripcion: ''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerCategoria() {
				var self = this
				categoria.obtenerCategoria({
					id_categoria: this.$route.params.id_categoria
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					alertify.error(err.id_categoria[0],5);
					this.$router.push({
						name: 'listado-categorias'
					});
				})
			},
			actualizarCategoria() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'

				categoria.actualizar(self.form, data => {
					this.$router.push({
						name: 'listado-categorias'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(categoriaId) {

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
						categoria.desactivar({
							id_categoria: categoriaId
						}, data => {
							alertify.warning("Categoria desactivada correctamente", 5);
							this.$router.push({
								name: 'listado-categorias'
							})
						}, err => {
							console.log(err)
						});
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(categoriaId) {

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
						categoria.activar({
							id_categoria: categoriaId
						}, data => {
							alertify.success("Categoria activada correctamente", 5);
							this.$router.push({
								name: 'listado-categorias'
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
			this.obtenerCategoria()
		}
    }
</script>