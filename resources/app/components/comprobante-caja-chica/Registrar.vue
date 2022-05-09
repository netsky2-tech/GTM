<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear nuevo comprobante</div>
						<div class="box-description">Formulario para registrar comprobante</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label>Tipo de comprobante</label>
								<select class="form-control mb-1 mr-sm-1 mb-sm-0 search-field" v-on:input="limpiar_campos" v-model.number="form.tipo_comprobante">
									<option value="1">Comprobante de viatico</option>
									<option value="2">Comprobante de gastos</option>
									<option value="3">Comprobante de vale</option>
								</select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha</label>
								<datepicker :format="format" :language="es" :value="new Date()" v-model="fechax2" @selected="onDateSelect"></datepicker>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.f_necesidad" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Monto</label>
								<input @change="monto_letras" :disabled="form.tipo_comprobante!==2" class="form-control" placeholder="Dígite una cantidad" type="number" v-model="form.monto_entregado">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.monto_entregado" v-text="message"></li>
								</ul>
							</div>
						</div>

						<template v-if="form.tipo_comprobante ===1">
							<div class="col-sm-3">
								<div class="form-group">
									<label for>Solicitud de viatico</label>
									<v-select label="concepto" v-on:change="cargar_viatico" v-model="form.solicitud" :options="solicitudes"></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.solicitud" v-text="message"></li>
									</ul>
								</div>
							</div>
						</template>
						<template v-if="form.tipo_comprobante ===3">
							<div class="col-sm-3">
								<div class="form-group">
									<label for>Vale provisional</label>
									<v-select label="concepto" v-on:change="cargar_vale" v-model="form.vale" :options="vales"></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.vale" v-text="message"></li>
									</ul>
								</div>
							</div>
						</template>
					</div>

					<div class="row">
					<div class="col-sm-12">
						<div class="form-group">
							<label for>Caja chica</label>
							<v-select label="descripcion" v-model="form.caja" :disabled="form.tipo_comprobante===3" :options="cajas"></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.caja" v-text="message"></li>
							</ul>
						</div>
					</div>
						<template v-if="form.tipo_comprobante === 2">
						<div v-if="form.tipo_comprobante === 2" class="col-sm-3">
							<div class="form-group">
								<label>Tipo de beneficiario</label>
								<select class="form-control mb-1 mr-sm-1 mb-sm-0 search-field" v-model.number="form.tipo_beneficiario">
									<option value="1">Trabajador</option>
									<option value="2">Acreedor</option>
								</select>
							</div>
						</div>
					<div v-if="form.tipo_beneficiario === 1" class="col-sm-9">
						<div class="form-group">
							<label for=""> Trabajador </label>
							<div class="form-group">
								<typeahead :initial="form.trabajador" :trim="80" :url="trabajadoresBusquedaURL" @input="seleccionarTrabajador" style="width: 100%;"></typeahead>
							</div>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.proveedor" v-text="message"></li>
							</ul>
						</div>
					</div>
						<div v-if="form.tipo_beneficiario===2" class="col-sm-9">
							<div class="form-group">
								<label for=""> Acreedor </label>
								<div class="form-group">
									<typeahead :initial="form.proveedor" :trim="80" :url="proveedoresBusquedaURL" @input="seleccionarBeneficiario" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.proveedor" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div v-if="form.tipo_comprobante === 2" class="col-sm-6">
							<div class="form-group">
								<label for=""> Persona que recibe</label>
								<input class="form-control"  placeholder="Dígite el nombre de la persona que recibe el dinero" v-model="form.persona_recibe" >
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.persona_recibe" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div v-if="form.tipo_comprobante === 2" class="col-sm-6">
							<div class="form-group">
								<label for=""> Identificacion</label>
								<input class="form-control"  placeholder="Dígite la identificación de la persona que recibe" v-mask="'#############A'" v-model="form.identificacion_persona_recibe" >
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.identificacion_persona_recibe" v-text="message"></li>
								</ul>
							</div>
						</div>
						</template>
						<template v-if="form.tipo_comprobante !== 2">
						<div class="col-sm-12">
							<div class="form-group">
								<label for>Empleado</label>
								<v-select label="nombre_completo" :disabled="false" v-model="form.trabajador" :options="trabajadores"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.trabajador" v-text="message"></li>
								</ul>
							</div>
						</div>
						</template>
					<div class="col-sm-12">
						<div class="form-group">
							<label for=""> Monto en letras</label>
							<input :disabled="true" class="form-control" placeholder="Dígite monto en letra" v-model="form.monto_letras">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.monto_letras" v-text="message"></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-12">
						<div class="form-group">
							<label for=""> En concepto de</label>
							<input class="form-control" :disabled="false" placeholder="Dígite un concepto" v-model="form.concepto">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.concepto" v-text="message"></li>
							</ul>
						</div>
					</div>
				</div>
					<template v-if="form.tipo_comprobante!==1">
					<div class="alert alert-success">
						<span><strong>Detalle de comprobante</strong></span>
					</div>

					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Nombre comercio</label>
								<input class="form-control" placeholder="Dígite el nombre del comercio" v-model="detalleForm.nombre_comercio">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.nombre_comercio" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Numero RUC</label>

								<input class="form-control"  placeholder="Dígite el objetivo del viatico" v-model="detalleForm.numero_ruc">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.numero_ruc" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Factura</label>
								<input class="form-control" ref="cantidad" type="text" min="0" v-model ="detalleForm.factura">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.factura" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
						<div class="form-group">
							<label for>Monto</label>
							<input class="form-control" ref="monto_viatico" type="number" min="0"  v-model.number="detalleForm.monto">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.monto" v-text="message"></li>
								</ul>
							</div>
						</div>


						<div class="col-sm-3">
							<div class="form-group">
								<label for>&nbsp;</label>
								<button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar detalle</button>
							</div>
						</div>

                        <template v-if="loading">
                            <BlockUI :message="msg" :url="url"></BlockUI>
                        </template>

					</div>

					<div class="row">
						<div class="col-sm-12">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.detalleSolicitud" v-text="message"></li>
							</ul>

							<table class="table table-bordered">
								<thead>
								<tr>
									<th></th>
									<th >Nombre comercio</th>
									<th >RUC</th>
									<th >No.Factura</th>
									<th >Monto</th>
									<th ></th>
								</tr>
								</thead>
								<tbody>
								<template  v-for="(item, index) in form.detalleSolicitud">
									<tr>
										<td style="width: 2%">
											<button @click="eliminarLinea(item, index)">
												<i class="fa fa-trash"></i>
											</button>
										</td>
										<td>
											<input  class="form-control" type="text"  v-model="item.nombre_comercio">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSolicitud.${index}.nombre_comercio`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control"  type="text" v-model.text="item.numero_ruc">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSolicitud.${index}.numero_ruc`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="text" :disabled="true" v-model.text="item.factura">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSolicitud.${index}.factura`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="number" min="0" v-model.number="item.monto">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSolicitud.${index}.monto`]" v-text="message"></li>
											</ul>
										</td>
										<!--<td>
										<strong> {{sub_total(item) | formatMoney(2)}}</strong>
										</td>-->

									</tr>
									<tr></tr>
								</template>
								</tbody>
								<tfoot>
								<tr>
									<td colspan="4"></td>
									<td>Total</td>
									<td> <strong> {{calcular_total | formatMoney(2)}}</strong></td>
								</tr>
								</tfoot>
							</table>
						</div>
					</div>
					</template>


					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-comprobante' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Registrar' ? true : false" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
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
	import comprobante from '../../api/caja-chica-comprobante'
	import normativa from '../../api/normativas'
	import loadingImage from '../../assets/images/block50.gif'
	import sucursal from "../../api/sucursales";
	import cliente from "../../api/clientes";
	import es from "vuejs-datepicker/dist/locale/translations/es";
	import numberasstring from "../../assets/custom-scripts/NumberAsString";

	export default {
		data() {
			return {
				loading:false,
				msg: 'Cargando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				proveedoresBusqueda: {},
				proveedoresBusquedaURL: "/proveedores/buscar",
				trabajadoresBusqueda: {},
				trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
				detalleForm: {
					nombre_comercio:'',
					numero_ruc: '',
					fecha_viatico: moment(new Date()).format("YYYY-MM-DD"),
					factura: '',
					monto:0,
					moneda:''
				},
				form: {
					trabajador: [],
					fecha : moment(new Date()).format("YYYY-MM-DD"),
					total:0,
					detalleSolicitud:[],
					proveedor : {},
					trabajador : {},
					beneficiario:'',
					concepto:'',
					monto_entregado:0,
					monto_letras:'',
					tipo_comprobante:1,
					tipo_beneficiario:1,
					id_solicitud_viatico:'',
					id_comprobante:'',
					vale:[],
					solicitud:[],
					persona_recibe:'',
					identificacion_persona_recibe:'',
				},
				fechax: new Date(),
				fechax2: new Date(),
				trabajadores:[],
				solicitudes:[],
				vales:[],
				cajas:[],
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		computed:{

			calcular_total() {
				this.form.total = this.form.detalleSolicitud.reduce((carry, item) => {
							return(carry + Number(item.monto.toFixed(2)));
						}
						, 0)
				return this.form.total;
			},
		},
		methods: {

			nuevo(){
				var self = this
				self.loading = true;
				comprobante.nuevo({}, data => {
					self.trabajadores = data.trabajadores;
					self.cajas = data.cajas;
					self.solicitudes = data.solicitudes;
					self.vales = data.vales;
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			monto_letras(){
				if(this.form.monto_entregado >0){
					this.form.monto_letras = numberasstring.numberasstring(this.form.monto_entregado,'CORDOBA','CORDOBAS',true);
				}else{
					this.form.monto_letras ='SELECCIONE UN MONTO MAYOR QUE CERO';
				}
				return this.form.monto_letras;
			},
			cargar_identificacion()
			{
				if(this.form.trabajador)
				{
					this.form.persona_recibe = this.form.trabajador.text;
					this.form.identificacion_persona_recibe = this.form.trabajador.cedula;

				}else
				{
					this.form.persona_recibe = '';
					 this.form.identificacion_persona_recibe = '';
				}
			},
			cargar_vale()
			{
				var self = this;
				//self.limpiar_campos();
				if (self.form.vale){

					self.form.id_comprobante = self.form.vale.id_comprobante;
					self.form.monto_entregado = self.form.vale.monto_entregado;
					self.form.concepto = self.form.vale.concepto;
					self.form.trabajador = self.form.vale.trabajador_comprobante;
					self.form.caja = self.form.vale.caja_comprobante;
					self.monto_letras();
				}
			},
			cargar_viatico()
			{
				var self = this;
				//self.limpiar_campos();
				if (self.form.solicitud){
					self.form.id_solicitud_viatico = self.form.solicitud.id_solicitud_viatico;
					self.form.monto_entregado = self.form.solicitud.monto_total;
					self.form.concepto = self.form.solicitud.concepto;
					self.form.trabajador = self.form.solicitud.solicitud_trabajador;
					self.monto_letras();
				}
			},
			limpiar_campos()
			{
				var self = this;
				self.form.id_solicitud_viatico=null;
				self.form.id_comprobante=null;
				self.form.monto_entregado = '';
				self.form.concepto = '';
				self.form.solicitud=null;
				self.form.vale=null;
				//self.form.trabajador = '';
				self.form.monto_letras='';
				self.form.caja='';
			},
			seleccionarBeneficiario(e) {
				const beneficiario = e.target.value;
				var self = this;
				self.form.proveedor = beneficiario;
				self.form.beneficiario = beneficiario.paguese_a;
			},
			seleccionarTrabajador(e) {
				const trabajador = e.target.value;
				var self = this;
				self.form.trabajador = trabajador;
				self.form.beneficiario = trabajador.text;

				self.cargar_identificacion();
			},
			registrar() {
				var self = this;
				var validacion = false;
				if(self.form.tipo_comprobante === 2){
					if ((Number(self.form.monto_entregado) === Number(self.form.total))){
						validacion = true;
					}else
						{
							validacion = false;
						}
				}else{
					validacion = true;
				}
				if (validacion){

				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				comprobante.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-comprobante'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
				}else{alertify.warning("La sumatoria del detalle debe de coincidir con el monto solicitado",5);}
			},
			onDateSelect(date) {
				//console.log(date); //
				this.form.fecha = moment(date).format("YYYY-MM-DD"); //
			},
			onDateSelect2(date) {
				//console.log(date); //
				this.detalleForm.fecha_viatico = moment(date).format("YYYY-MM-DD"); //
			},
			agregarDetalle() {
				let self = this;
				if(this.detalleForm.factura){
						let i = 0;
						let keyx = 0;
						if(self.form.detalleSolicitud){
							self.form.detalleSolicitud.forEach((fila, key) => {
								if(self.detalleForm.fecha_viatico===fila.fecha_viatico){
									i++;
									keyx = key;
								}
							});
						}
						if(i === 0){
							this.form.detalleSolicitud.push({
								nombre_comercio: this.detalleForm.nombre_comercio,
								numero_ruc: this.detalleForm.numero_ruc,
								factura: this.detalleForm.factura,
								monto: this.detalleForm.monto,
								subtotal:0
							});
							//this.detalleForm.fecha_viatico='';
							this.detalleForm.nombre_comercio='';
							this.detalleForm.numero_ruc='';
							this.detalleForm.factura='';
							this.detalleForm.monto='';

						}else{
							alertify.warning("Ya existe un registro con la fecha seleccionada",5);
						}

				}else{
					alertify.warning("Los campos no pueden estar vacíos",5);
				}
			},
			eliminarLinea(item, index) {
				if (this.form.detalleSolicitud.length >= 1) {
					this.form.detalleSolicitud.splice(index, 1);

				}else{
					this.form.detalleSolicitud=[];
				}
			},
			/*sub_total(itemX) {
				itemX.subtotal= Number(itemX.monto) * Number(itemX.cantidad);

				if(!isNaN(itemX.subtotal)){
					return itemX.subtotal;
				}
				else return 0;
			},*/
		},
		mounted() {
			this.nuevo();
		}
	}
</script>

<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>