<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Colres de activo</div>
						<div class="box-description">Formulario para modificar Colres de activo</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre Colres de activo</label>
							<input class="form-control" placeholder="Dígite el nombre del color de activos" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
						
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_color)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_color)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-colores-activos' }" tag="button">
									<button class="btn btn-default" type="button">Cancelar</button>
								</router-link>
								<button :disabled="btnAction !== 'Guardar'" @click="actualizar" class="btn btn-primary" type="button">{{ btnAction }}</button>
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
	import color from '../../api/activos_colores'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					codigo: ''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerColor() {
				var self = this
				color.obtenerColor({
					id_color: self.$route.params.id_color
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					 alertify.error(err.id_color[0],5);
           this.$router.push({
            	name: 'listado-colores-activos'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				color.actualizar(self.form, data => {
					alertify.success("Color actualizado correctamente",5);
					this.$router.push({
						name: 'listado-colores-activos'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(colorId) {

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
						color.desactivar({
							id_color: colorId
						}, data => {
							alertify.warning("Color desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-colores-activos'
							})
						}, err => {
							console.log(err)
						});
					}else{
					self.btnAction = "Guardar";
				}
					})
				},

			activar(colorId) {


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
						color.activar({
							id_color: colorId
						}, data => {
							alertify.success("Color activado correctamente", 5);
							this.$router.push({
								name: 'listado-colores-activos'
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
			this.obtenerColor()
		}
    }
</script>