<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Configuración OPG</div>
						<div class="box-description">Formulario para registrar nueva configuración</div>
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
											v-on:change="obtenerClasificacionUnidadMedida"
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
								<input class="form-control" readonly  v-model="form.clasificacion">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.clasificacion" v-text="message"></li>
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
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'presentacion' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Registrar' ? true : false" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
					</div>
					<template v-if="loading">
						<BlockUI :message="msg" :url="url"></BlockUI>
					</template>
				</div>
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
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					origen: [],
					unidad_medida: [],
					clasificacion: '',
					grado: [],
					codigo: '',
					escalar: '',
					cod_grado : ''
				},
				origenes: [],
				unidades_medidas: [],
				grados: [],
				btnAction: 'Registrar',
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

			}
		},
		methods: {
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				tipo.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'presentacion'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
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
			obtenerClasificacionUnidadMedida(){
				var self = this;
				if(self.form.unidad_medida){
					self.form.clasificacion = self.form.unidad_medida.simbolo_um;
				}
			},
			/*Concatenar(){
				var self = this;
				if(!!(self.form.origen) && !!(self.form.unidad_medida) && self.form.escalar!=='' && !!(self.form.clasificacion) && !!(self.form.grado.grado) ) {
					self.form.codigo = self.form.origen.origen + self.form.unidad_medida.unidad_medida + self.form.escalar + self.form.clasificacion +'-'+ self.form.grado.grado
					return self.form.codigo;
				}else{
					self.form.codigo = 'N/A';
					return  self.form.codigo;
				}

			}*/

		},
		mounted() {
			this.nuevo();
		}

	}
</script>