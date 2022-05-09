<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar impuesto</div>
						<div class="box-description">Formulario para modificar impuestos</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Descripción</label>
							<input class="form-control" placeholder="Dígite descripcion del impuesto" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Tasa</label>
							<input class="form-control" placeholder="Dígite la tasa" type="number" v-model.number="form.tasa">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.tasa" v-text="message"></li>
							</ul>
						</div>
					</form>

					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.estado">
									<button @click="desactivar(form.id_impuesto)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_impuesto)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-impuestos' }" tag="button">
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
	import impuesto from '../../api/impuestos'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					tasa: 0,
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerImpuesto() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				impuesto.obtenerImpuesto({
					id_impuesto: this.$route.params.id_impuesto
				}, data => {
					self.form = data
					self.loading = false;
				}, err => {
					alertify.error(err.id_impuesto[0],5);
					this.$router.push({
						name: 'listado-impuestos'
					});
				})
			},
		actualizar() {
				var self = this
			self.loading = true;
				self.btnAction = 'Guardando, espere......'
					impuesto.actualizar(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'listado-impuestos'
					})
				}, err => {
						self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(zonaId) {
				//var self = this
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
						impuesto.desactivar({
							id_impuesto: zonaId
						}, data => {
							alertify.warning("Impuesto desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-impuestos'
							})
						}, err => {
							console.log(err)
						});
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
						impuesto.activar({
							id_impuesto: zonaId
						}, data => {
							alertify.success("Impuesto activado correctamente", 5);
							this.$router.push({
								name: 'listado-impuestos'
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
			this.obtenerImpuesto()
		}
    }
</script>