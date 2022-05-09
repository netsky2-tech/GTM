<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Configuración OPG</div>
						<div class="box-description">Formulario para modificar una configuración</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-2 form-group">
								<label >Origen</label>
								<v-select
										:disabled="false"
										v-model="form.origen"
										label="origen"
										:options="origenes"
								></v-select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.origen" :key="message" v-text="message"></li>
								</ul>
							</div>
							<div class="col-sm-2 form-group">
								<label >UM Presentanción</label>
								<v-select
										:disabled="false"
										v-model="form.unidad_medida"
										label="um_concat"
										:options="unidades_medidas"

								></v-select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.unidad_medida" :key="message" v-text="message"></li>
								</ul>
							</div>
							<div class="col-sm-2 form-group">
								<label for=""> Escalar</label>
								<input class="form-control" placeholder="Dígite la cantidad a ingresar" v-model="form.escalar">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.escalar" v-text="message"></li>
								</ul>
							</div>
							<div class="col-sm-2 form-group">
								<label for=""> UM Cálculo</label>
								<input class="form-control" readonly  v-model="obtenerClasificacionUnidadMedida">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.obtenerClasificacionUnidadMedida" v-text="message"></li>
								</ul>
							</div>
							<div class="col-sm-2 form-group">
								<label >Grado</label>
								<v-select
										:disabled="false"
										v-model="form.grado"
										label="grado"
										:options="grados"
								></v-select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.grado" :key="message" v-text="message"></li>
								</ul>
							</div>
							<div class="form-group">
								<label for=""> Código</label>
								<input class="form-control" readonly v-model="Concatenar">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.codigo" v-text="message"></li>
								</ul>
							</div>
						</div>
					</form>
					<div class="row">


						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.estado">
									<button @click="desactivar(form.id_presentacion)" class="btn btn-danger"><i class="fa fa-trash-o">	Deshabilitar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_presentacion)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'presentacion' }" tag="button">
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
	import tipo from '../../api/presentacion'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					origen: [],
					unidad_medida: [],
					clasificacion: '',
					grado: [],
					codigo: '',
					escalar: '',
					cod_grado:''
				},
				origenes: [],
				unidades_medidas: [],
				grados: [],
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		computed:{
			/**
			 * @return {string}
			 */
			Concatenar(){
				var self = this;
				if(!!(self.form.origen) && !!(self.form.unidad_medida) && self.form.escalar!=='' && !!(self.form.clasificacion) && !!(self.form.grado.grado) ) {
					if(self.form.grado.grado === 'N/A'){
						self.form.cod_grado = '';
						self.form.codigo = self.form.origen.origen + self.form.unidad_medida.unidad_medida + self.form.escalar + self.form.clasificacion + self.form.cod_grado;
						return self.form.codigo;
					}else{
						self.form.cod_grado = self.form.grado.grado;
						self.form.codigo = self.form.origen.origen + self.form.unidad_medida.unidad_medida + self.form.escalar + self.form.clasificacion +'-'+ self.form.cod_grado;
						return self.form.codigo;
					}
				}else{
					self.form.codigo = 'Construyendo codigo..';
					return  self.form.codigo;
				}

			},
			obtenerClasificacionUnidadMedida(){
				var self = this;
				if(self.form.unidad_medida.unidad_medidad){
				self.form.clasificacion = self.form.unidad_medida.unidad_medidad.simbolo_um
				return self.form.clasificacion
				}else{
					self.form.clasificacion = self.form.unidad_medida.simbolo_um;
					return self.form.clasificacion;
				}
			}
		},
		methods: {
			obtenerPresentacion() {
				var self = this
				tipo.obtenerPresentacion({
					id_presentacion: this.$route.params.id_presentacion
				}, data => {
					self.form = data.presentacion;
					self.form.clasificacion = data.presentacion.simbolo_um;
					self.form.cod_grado = data.presentacion.grado.grado;
					self.loading = false;
				}, err => {
					alertify.error(err.id_presentacion,5);
					this.$router.push({
						name: 'presentacion'
					});
				})
			},
			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'

				tipo.actualizar(self.form, data => {
					this.$router.push({
						name: 'presentacion'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			nuevo() {
				var self = this;
				self.loading = true;
				tipo.nuevo({}, data => {
							self.unidades_medidas = data.unidades_medidas;
							self.origenes = data.origenes;
							self.grados = data.grados;

							self.loading = false;
						},
						err => {
							self.loading = false;
							console.log(err);
						})
			},
			desactivar(unidadID) {

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
						tipo.desactivar({
							id_presentacion: unidadID
						}, data => {
							alertify.warning("Presentación desactivada correctamente", 5);
							this.$router.push({
								name: 'presentacion'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
/*			obtenerClasificacionUnidadMedida(){
				var self = this;
				if(self.form.unidad_medida){
					self.form.clasificacion = self.form.unidad_medida.simbolo_um
				}
			},*/
			activar(unidadID) {

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
						tipo.activar({
							id_presentacion: unidadID
						}, data => {
							alertify.success("Presentación activada correctamente", 5);
							this.$router.push({
								name: 'presentacion'
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
			this.obtenerPresentacion();
			this.nuevo();
		}
    }
</script>