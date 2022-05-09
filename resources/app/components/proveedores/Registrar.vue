<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Nuevo Proveedor</div>
						<div class="box-description">Formulario para registrar nuevo proveedor</div>
					</div>
					<form>
						<div class="row">

							<!--<div class="col-sm-4">
								<div class="form-group">
									<label >Tipo Suplidor</label>
									<select @change="buscarTiposProveedores" class="form-control" v-model.number="form.clasificacion_contable">
										<option value="1">Proveedor</option>
										<option value="2">Acreedor Diverso</option>
									</select>
								</div>
							</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label >Tipo Proveedor</label>
								<v-select
										:options="tipos_proveedores_filtrados"
										label="descripcion"
										v-model="form.tipo_proveedor"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.tipo_proveedor" v-text="message"></li>
								</ul>
							</div>
						</div>-->


							<div class="col-sm-4">
								<div class="form-group">
									<label > Código</label>
									<input class="form-control" placeholder="Código del proveedor"  v-model="form.codigo">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.codigo" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label >Tipo Persona</label>
									<select class="form-control" v-model.number="form.tipo_persona">
										<option value="1">Natural</option>
										<option value="2">Jurídico</option>
									</select>
								</div>
							</div>


							<div class="col-sm-4">
								<div class="form-group">
									<label > Número RUC</label>
									<input class="form-control" v-mask="'A#############'" placeholder="Número RUC" v-model="form.numero_ruc">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.numero_ruc" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label > Número Cédula</label>
									<input class="form-control" v-mask="'#############A'" placeholder="Número Cédula" v-model="form.numero_cedula">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.numero_cedula" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label > Nombre Comercial</label>
									<input class="form-control" placeholder="Nombre Comercial"  v-model="form.nombre_comercial">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.nombre_comercial" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label > Páguese a</label>
									<input class="form-control" placeholder="Páguese a"  v-model="form.paguese_a">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.paguese_a" v-text="message"></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-4">
								<div class="form-group">
									<label > Razón Social</label>
									<input class="form-control" placeholder="Razón Social"  v-model="form.razon_social">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.razon_social" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label > Teléfono</label>
									<input class="form-control" placeholder="Telefono del proveedor" v-model="form.telefono">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.telefono" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label > Contacto</label>
									<input class="form-control" placeholder="Contacto" v-model="form.contacto_proveedor">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.contacto_proveedor" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label > Teléfono Contacto</label>
									<input class="form-control" placeholder="Teléfono Contacto"  v-model="form.telefono_contacto">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.telefono_contacto" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label > Correo Contacto</label>
									<input class="form-control" placeholder="Correo Contacto"  v-model="form.correo_contacto">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.correo_contacto" v-text="message"></li>
									</ul>
								</div>
							</div>

							<!--<div class="col-sm-4">
								<div class="form-group">
									<label > Dirección Entrega</label>
									<input class="form-control" placeholder="Dirección Entrega" v-model="form.direccion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.direccion" v-text="message"></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-4">
								<div class="form-group">
									<label > Días Crédito</label>
									<select class="form-control" v-model.number="form.plazo_credito">
										<option value=0>Contado</option>
										<option value=8>Trámite de Cheque (8 días)</option>
										<option value=15>Crédito (15 días)</option>
										<option value=30>Crédito (30 días)</option>
										<option value=45>Crédito (45 días)</option>
									</select>

									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.plazo_credito" v-text="message"></li>
									</ul>
								</div>
							</div>-->

							<div class="col-sm-4">
								<div class="form-group">
									<label >Departamento</label>
									<v-select
											:options="departamentos"
											label="descripcion"
											v-model="form.departamento"
											v-on:input="obtenerMunicipios()"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.departamento" v-text="message"></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-4">
								<div class="form-group">
									<label >Municipio</label>
									<v-select
											:options="municipios"
											label="descripcion"
											v-model="form.municipio"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.municipio" v-text="message"></li>
									</ul>
								</div>
							</div>

							<!--<div class="col-sm-4">
								<div class="form-group">
									<label class="check-label2"><input type="checkbox"
																	  v-model="form.es_extranjero"> Proveedor Extranjero</label>
								</div>
							</div>-->

							<div class="col-sm-12">
								<div class="form-group">
									<label > Observaciones</label>
									<input class="form-control" placeholder="Observaciones" v-model="form.observaciones">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.observaciones" v-text="message"></li>
									</ul>
								</div>
							</div>


						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'proveedores' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button :disabled="btnAction !== 'Registrar'" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
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
	import proveedor from '../../api/proveedores'
	import tipo from '../../api/tipos_proveedores'
	import departamento from '../../api/departamentos'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				departamentos:[],
				municipios:[],
				tipos_proveedores: [],
				tipos_proveedores_filtrados: [],
				form: {
					municipio:'',
					codigo:'',
					razon_social: '',
					direccion: '',
					contacto_proveedor: '',
					numero_ruc: '',
					tipo_proveedor:'',
					clasificacion_contable: '',
					observaciones:'',
					es_extranjero:false,
					numero_cedula:'',
					nombre_comercial:'',
					telefono:'',
					telefono_contacto:'',
					correo_contacto:'',
					id_municipio:'',
					tipo_persona:2,
					paguese_a:'',
					plazo_credito:0,

				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {

			buscarTiposProveedores(){
				var self = this;
				//self.form.tipo_proveedor = ;

				self.tipos_proveedores_filtrados=[];

				self.tipos_proveedores.forEach((tipox, indice) => {
					if (tipox.clasificacion_contable === self.form.clasificacion_contable) {
						self.tipos_proveedores_filtrados.push(self.tipos_proveedores[indice])
					}
				});

			},

			obtenerTodosDepartamentos() {
				var self = this
				departamento.obtenerTodos(data => {
					self.departamentos = data
					self.form.departamento = self.departamentos[14];
					self.municipios = self.form.departamento.municipios_departamento
					self.form.municipio= self.municipios[5]
				}, err => {
					console.log(err)
				})
			},
			obtenerMunicipios() {
				var self = this
				self.form.municipio= null;
				if(self.form.departamento.municipios_departamento)
					self.municipios = self.form.departamento.municipios_departamento
			},

			obtenerTodosTipos(){
				var self = this;
				tipo.obtenerTodos(
						data => {
							self.tipos_proveedores = data;
							//self.form.tipo_proveedor = self.tipos_proveedores[2];
						},
						err => {
							console.log(err);
						}
				);
			},
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				proveedor.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Proveedor registrado exitosamente", 5);
					this.$router.push({
						name: 'proveedores'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		},
		mounted() {
			this.obtenerTodosTipos();
			this.obtenerTodosDepartamentos();
		}
	}
</script>
<style lang="scss" scoped>
	.check-label2 {
		margin-top: 40px;
	}
</style>