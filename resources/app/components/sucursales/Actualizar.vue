<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar datos sucursal</div>
						<div class="box-description">Formulario para modificar datos de sucursal</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre sucursal</label>
							<input class="form-control" placeholder="Dígite el Nombre del sucursal" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Serie para facturación</label>
							<input class="form-control" placeholder="Dígite la seria para facturación" v-model="form.serie">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.serie" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Numeración actual facturación</label>
							<input class="form-control" placeholder="Dígite la seria para facturación" v-model.number="form.numeracion_facturacion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.numeracion_facturacion" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Télefonos</label>
							<input class="form-control" placeholder="Dígite los télefonos de la sucursal" v-model="form.telefonos">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.telefonos" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Dirección</label>
							<input class="form-control" placeholder="Dígite la dirección de la sucursal" v-model="form.direccion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.direccion" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> No. Autorización</label>
							<input class="form-control" placeholder="Dígite el número de autorización" v-model="form.numero_autorizacion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.numero_autorizacion" v-text="message"></li>
							</ul>
						</div>

					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo==1">
									<button @click="desactivar(form.id_sucursal)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_sucursal)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-sucursales' }" tag="button">
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
	import sucursal from '../../api/sucursales'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					serie:'',
					telefonos:'',
					direcciones:'',
					numero_autorizacion:'',
					numeracion_facturacion:0
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerSucursal() {
				var self = this
				sucursal.obtenerSucursal({
					id_sucursal: self.$route.params.id_sucursal
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					 alertify.error(err.id_sucursal[0],5);
           this.$router.push({
            	name: 'listado-sucursales'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading = true;
				self.btnAction = 'Guardando, espere......';
				sucursal.actualizar(self.form, data => {
					alertify.success("Sucursal actualizado correctamente",5);
					this.$router.push({
						name: 'listado-sucursales'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(sucursalId) {

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
						sucursal.desactivar({
							id_sucursal: sucursalId
						}, data => {
							alertify.warning("Sucursal desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-sucursales'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(sucursalId) {

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
						sucursal.activar({
							id_sucursal: sucursalId
						}, data => {
							alertify.success("Sucursal activado correctamente", 5);
							this.$router.push({
								name: 'listado-sucursales'
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
			this.obtenerSucursal()
		}
    }
</script>