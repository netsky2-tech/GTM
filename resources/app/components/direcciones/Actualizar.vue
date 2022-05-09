<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Dirección</div>
						<div class="box-description">Formulario para modificar Dirección</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre Dirección</label>
							<input class="form-control" placeholder="Dígite el nombre de la dirección" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Código Dirección</label>
							<input class="form-control" placeholder="Dígite el código de la dirección" v-model="form.codigo">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.codigo" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Sucursal</label>
							<v-select v-model="form.direccion_sucursal" label="descripcion" :options="sucursales"></v-select>
							<ul class="error-messages">
								<li v-for="message in errorMessages.direccion_sucursal" :key="message" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label >Clasificación</label>
							<select class="form-control" v-model.number="form.clasificacion_direccion">
								<option value="1">Administración</option>
								<option value="2">Comercialización y otras</option>
							</select>
						</div>
						
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo==1">
									<button @click="desactivar(form.id_direccion)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_direccion)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-direcciones' }" tag="button">
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
	import direccion from '../../api/direcciones'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				sucursales:[],
				form: {
					descripcion: '',
					codigo: '',
					direccion_sucursal: [] ,
					clasificacion_direccion:'',
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerDireccion() {
				var self = this
				direccion.obtenerDireccion({
					id_direccion: self.$route.params.id_direccion
				}, data => {
					self.sucursales = data.sucursal;
					self.form = data.direccion;
					self.loading = false;
				}, err => {
					 alertify.error(err.id_direccion[0],5);
           this.$router.push({
            	name: 'listado-direcciones'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				direccion.actualizar(self.form, data => {
					alertify.success("Direccion actualizado correctamente",5);
					this.$router.push({
						name: 'listado-direcciones'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(direccionId) {
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
						direccion.desactivar({
							id_direccion: direccionId
						}, data => {
							alertify.warning("Direccion desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-direcciones'
							})
						}, err => {
							console.log(err)
						});
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(direccionId) {

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
						direccion.activar({
							id_direccion: direccionId
						}, data => {
							alertify.success("Direccion activado correctamente", 5);
							this.$router.push({
								name: 'listado-direcciones'
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
			this.obtenerDireccion()
		}
    }
</script>