<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registro de Cliente</div>
						<div class="box-description">Formulario para registrar nuevo Cliente</div>
					</div>

						<div class="row">

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Código del cliente</label>
									<input class="form-control" placeholder="Digite el código del cliente"  v-model="form.codigo">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.codigo" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Tipo Persona</label>
									<select class="form-control" v-model.number="form.tipo_persona">
										<option value="1">Natural</option>
										<option value="2">Jurídico</option>
									</select>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Nombre completo</label>
									<input class="form-control" placeholder="Nombre Comercial"  v-model="form.nombre_completo">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.nombre_comercial" v-text="message"></li>
									</ul>
								</div>
							</div>

							<!--<div class="col-sm-6">
								<div class="form-group">
									<label for=""> Nombre Completo</label>
									<input class="form-control" placeholder="Nombre Completo"  v-model="form.nombre_completo">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.nombre_comercial" v-text="message"></li>
									</ul>
								</div>
							</div>-->

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Razón Social</label>
									<input class="form-control" placeholder="Razón Social"  v-model="form.razon_social">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.nombre_comercial" v-text="message"></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Contacto</label>
									<input class="form-control" placeholder="Contacto" v-model="form.contacto">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.contacto" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Número RUC</label>
									<input class="form-control"  v-mask="'A#############'" placeholder="Número RUC" v-model="form.numero_ruc">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.numero_ruc" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Número Cédula</label>
									<input class="form-control"  v-mask="'#############A'" placeholder="Número Cédula" v-model="form.numero_cedula">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.numero_cedula" v-text="message"></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Dirección</label>
									<input class="form-control" placeholder="Dirección" v-model="form.direccion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.direccion" v-text="message"></li>
									</ul>
								</div>
							</div>
							
							
						<!--<div class="col-sm-3">
							<div class="form-group">
								<label for="">Tipo Cliente</label>
								<v-select
										:options="tipos_clientes"
										label="descripcion"
										v-model="form.tipo_cliente"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.tipo_cliente" v-text="message"></li>
								</ul>
							</div>
						</div>

							<div class="col-sm-3">
							<div class="form-group">
								<label for="">Vendedor</label>
								<v-select :options="vendedores" label="nombre_completo" v-model="form.vendedor"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.vendedor" v-text="message"></li>
								</ul>
							</div>
						</div>-->


							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Teléfono</label>
									<input class="form-control" placeholder="Teléfono" v-model="form.telefono">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.telefono" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Correo Contacto</label>
									<input class="form-control" placeholder="Correo Contacto"  v-model="form.correo">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.correo" v-text="message"></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Departamento</label>
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


							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Municipio</label>
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

							<!--<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Giro del Negocio</label>
									<input class="form-control" placeholder="Giro del Negocio"  v-model="form.giro_negocio">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.giro_negocio" v-text="message"></li>
									</ul>
								</div>
							</div>-->

							<!--<div class="col-sm-3">
								<div class="form-group">
									<label for="">Zona</label>
									<v-select
											:options="zonas"
											label="descripcion"
											v-model="form.zona"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.zona" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Impuesto Valor Agregado</label>
									<v-select
											:options="impuestos"
											label="descripcion"
											v-model="form.impuesto"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.impuesto" v-text="message"></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-3">
							<div class="form-group">
								<label for="">Tipo Contribuyente</label>
						<select class="form-control" v-model.number="form.tipo_contribuyente">
							<option value="1">Pequeños</option>
							<option value="2">Especiales</option>
							<option value="2">Grandes</option>
						</select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.tipo_contribuyente" v-text="message"></li>
								</ul>
							</div>
						</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Clasificación</label>
									<select class="form-control" v-model.number="form.clasificacion">
										<option value="1">Sector Privado</option>
										<option value="2">Sector Público</option>
									</select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.clasificacion" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label class="check-label2"><input v-model="form.retencion_ir" type="checkbox"> Retención IR</label>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="form-group">
									<label class="check-label2"><input v-model="form.retencion_imi" type="checkbox"> Retención IMI</label>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label class="check-label2"><input v-model="form.permite_credito" @input="validarCredito" type="checkbox"> Permite Crédito</label>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Plazo Máximo de Crédito</label>
									<select :disabled="!form.permite_credito" class="form-control" v-model.number="form.plazo_credito">
										<option :disabled="form.permite_credito" value="0">No permite</option>
										<option value="8">8 días</option>
										<option value="15">15 días </option>
										<option value="30">30 días</option>
										<option value="45">45 días</option>
										<option value="60">60 días</option>
									</select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.plazo_credito" v-text="message"></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Límite Crédito C$</label>
									<input :disabled="!form.permite_credito" class="form-control" placeholder="Límite Crédito" type="number" min="0" max="1000000" v-model.number="form.limite_credito">
									<ul class="error-messages">
										<li v-for="message in errorMessages.limite_credito" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Porcentaje Descuento</label>
									<input class="form-control" placeholder="Porcentaje Descuento" type="number" min="0" max="70" v-model.number="form.porcentaje_descuento">
									<ul class="error-messages">
										<li v-for="message in errorMessages.porcentaje_descuento" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Trámite Cheque</label>
									<input class="form-control" placeholder="Trámite Cheque" type="number" min="0" max="60" v-model.number="form.tramite_cheque">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.tramite_cheque" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="form-group">
									<label class="check-label2"><input type="checkbox"
																	   v-model="form.es_deudor"> Es un deudor</label>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<button style="margin-top: 20px;" :disabled="form.aprobacion_consignacion===2" @click="solicitarAutorizacion" :class="form.aprobacion_consignacion===1?claseBotonSolicitado:form.aprobacion_consignacion===2?claseBotonAprobado:claseBotonNoSolicitado">{{form.aprobacion_consignacion===1?'Solicitud consignación enviada':form.aprobacion_consignacion===2?'Solicitud Consignación Aprobada':'Solicitar autorización consignación'}}</button>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label class="check-label2"><input :disabled="form.aprobacion_consignacion !== 2" v-model="form.permite_consignacion" type="checkbox"> Permite Consignación</label>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Número de contrato</label>
									<input :disabled="!form.permite_consignacion" class="form-control" placeholder="Número de contrato de consignación" v-model="form.numero_contrato_consignacion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.numero_contrato_consignacion" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Plazo Máximo de Consignación</label>
									<select :disabled="!form.permite_consignacion" class="form-control" v-model.number="form.plazo_consignacion">
										<option :disabled="form.permite_consignacion" value="0">No permite</option>
										<option value="8">8 días</option>
										<option value="15">15 días </option>
										<option value="30">30 días</option>
										<option value="45">45 días</option>
										<option value="60">60 días</option>
									</select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.plazo_consignacion" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Límite Consignación US$</label>
									<input :disabled="!form.permite_consignacion" class="form-control" placeholder="Límite Consignación" type="number" min="0" max="1000000"  v-model.number="form.monto_max_consignacion">
									<ul class="error-messages">
										<li v-for="message in errorMessages.monto_max_consignacion" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>-->

							<div class="col-sm-12">
								<div class="form-group">
									<label for=""> Observaciones</label>
									<input class="form-control" placeholder="Observaciones" v-model="form.observaciones">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.observaciones" v-text="message"></li>
									</ul>
								</div>
							</div>

						</div>

					<div class="content-box-footer text-right">

						<template v-if="form.es_deudor">
							<router-link tag="button" :to="{ name: 'listado-deudores' }">
								<button type="button" class="btn btn-default">Cancelar</button>
							</router-link>
						</template>
						<template v-else>
							<router-link tag="button" :to="{ name: 'listado-clientes' }">
								<button type="button" class="btn btn-default">Cancelar</button>
							</router-link>
						</template>

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
	import cliente from '../../api/clientes'
	import tipo from '../../api/tipos_clientes'
	import departamento from '../../api/departamentos'
	import impuesto from '../../api/impuestos'
	import zona from '../../api/zonas'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				claseBotonNoSolicitado:'btn mb-2 btn-md-width btn-default btn-rounded',
				claseBotonSolicitado:'btn mb-2 btn-md-width btn-success btn-rounded',
				claseBotonAprobado:'btn mb-2 btn-md-width btn-info btn-rounded',

				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				departamentos:[],
				municipios:[],
				zonas:[],
				impuestos:[],
				tipos_clientes: [],
				vendedores: [],
				form: {
					codigo:'',
					tipo_persona:1,
					nombre_comercial:'',
					nombre_completo:'',
					razon_social:'',
					contacto: '',
					numero_ruc: '',
					numero_cedula:'',
					direccion: '',
					tipo_cliente:'',
					telefono:'',
					correo:'',
					municipio:'',
					giro_negocio:'',
					zona :'',
					impuesto :'',
					tipo_contribuyente:1,
					retencion_ir:true,
					retencion_imi:true,
					clasificacion:1,
					permite_credito :false,
					plazo_credito:0,
					limite_credito:0,
					porcentaje_descuento:0,
					observaciones:'',
					permite_consignacion: false,
					tramite_cheque:15,
					es_deudor:false,
					numero_contrato_consignacion:'',
					plazo_consignacion:0,
					aprobacion_consignacion:0,
					monto_max_consignacion:0
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {

			validarCredito(){

				let self = this;
				self.form.limite_credito=0;
				self.form.plazo_credito = 0;

			},
			obtenerMunicipios() {
				var self = this
				self.form.municipio= null;
				if(self.form.departamento.municipios_departamento)
					self.municipios = self.form.departamento.municipios_departamento
			},
			nuevo(){
				var self = this
				cliente.nuevo({}, data => {
					self.impuestos = data.impuestos;
					self.form.impuesto = self.impuestos[1]
					self.tipos_clientes = data.tipos_cliente;
					self.form.tipo_cliente = self.tipos_clientes[0];
					self.departamentos = data.departamentos;
					self.form.departamento = self.departamentos[9]
					self.municipios = self.form.departamento.municipios_departamento
					self.form.municipio= self.municipios[5]
					self.zonas = data.zonas;
					self.vendedores = data.vendedores;
				}, err => {
					console.log(err)
				})
			},

			solicitarAutorizacion(){
				let self= this;
				if(self.form.aprobacion_consignacion===0){
					self.form.aprobacion_consignacion= 1;
				}else if(self.form.aprobacion_consignacion===1){
					self.form.aprobacion_consignacion= 0;
				}
			},

			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				cliente.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Cliente registrado exitosamente", 5);
					this.$router.push({
						name: 'listado-clientes'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		},
		mounted() {
			/*this.obtenerTodosTipos();
			this.obtenerTodosImpuestos()
			this.obtenerTodasZonas()*/
			this.nuevo();
		}
	}
</script>

<style lang="scss" scoped>
	.check-label2 {
		margin-top: 30px;
	}
</style>