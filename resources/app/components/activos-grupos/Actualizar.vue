<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Grupo de activo</div>
						<div class="box-description">Formulario para modificar Grupo de activo</div>
					</div>
					<form>
						<div class="form-group">
							<label> Nombre Grupo de activo</label>
							<input class="form-control" placeholder="Dígite el nombre del grupo de activos" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>

						<div class="form-group">
							<label for=""> Código Grupo de activo</label>
							<input class="form-control" placeholder="Dígite el código del grupo de activos" v-model="form.codigo">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.codigo" v-text="message"></li>
							</ul>
						</div>
						
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_grupo_activo)" class="btn btn-danger"><i class="fa fa-trash-o">	Deshabilitar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_grupo_activo)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-grupos-activos' }" tag="button">
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
	import grupo from '../../api/activos_grupos'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					codigo: '',
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerGrupo() {
				var self = this
				grupo.obtenerGrupo({
					id_grupo_activo: self.$route.params.id_grupo_activo
				}, data => {
					self.form = data
					self.loading=false;
				}, err => {
					 alertify.error(err.id_grupo_activo[0],5);
           this.$router.push({
            	name: 'listado-grupos-activos'
          });
				})

				
			},
			actualizar() {
				var self = this;
				self.loading=true;
				self.btnAction = 'Guardando, espere......';
				grupo.actualizar(self.form, data => {
					alertify.success("Grupo actualizado correctamente",5);
					this.$router.push({
						name: 'listado-grupos-activos'
					})
				}, err => {
					self.loading=false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(grupoId) {
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
						grupo.desactivar({
							id_grupo_activo: grupoId
						}, data => {
							alertify.warning("Grupo desactivado correctamente",5);
							this.$router.push({
								name: 'listado-grupos-activos'
							})
						}, err => {
							console.log(err)
						});
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(grupoId) {

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
						grupo.activar({
							id_grupo_activo: grupoId
						}, data => {
							alertify.success("Grupo activado correctamente",5);
							this.$router.push({
								name: 'listado-grupos-activos'
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
			this.obtenerGrupo()
		}
    }
</script>