<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar </div>
						<div class="box-description">Formulario para modificar comprobante</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label>Tipo de comprobante</label>
								<select :disabled="true" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field" v-on:input="limpiar_campos" v-model.number="form.tipo_comprobante">
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

						<!--<template v-if="form.tipo_comprobante ===1">
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
						</template>-->
					</div>

					<div class="row">
						<div class="col-sm-12">
							<div class="form-group">
								<label for>Caja chica</label>
								<v-select label="descripcion" v-model="form.caja_comprobante" :disabled="form.tipo_comprobante===3" :options="cajas"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.caja_comprobante" v-text="message"></li>
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
								<div class="col-sm-9">
									<div class="form-group">
										<label for>Trabajador</label>
										<v-select label="nombre_completo" :disabled="false" v-model="form.trabajador_comprobante" :options="trabajadores"></v-select>
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.trabajador" v-text="message"></li>
										</ul>
									</div>
								</div>
							</div>
							<div v-if="form.tipo_beneficiario===2" class="col-sm-9">
								<div class="col-sm-9">
									<div class="form-group">
										<label for>Acreedor</label>
										<v-select label="nombre_comercial" :disabled="false" v-model="form.acreedor_comprobante" :options="proveedores"></v-select>
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.proveedor" v-text="message"></li>
										</ul>
									</div>
								</div>
							</div>
							<div v-if="form.tipo_comprobante === 2" class="col-sm-6">
								<div class="form-group">
									<label for=""> Persona que recibe</label>
									<input class="form-control"  placeholder="Dígite el nombre de la persona que recibe el dinero" v-model="form.persona_recibe">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.persona_recibe" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div v-if="form.tipo_comprobante === 2" class="col-sm-6">
								<div class="form-group">
									<label for=""> Identificacion</label>
									<input class="form-control"  placeholder="Dígite la identificación de la persona que recibe" v-mask="'#############A'" v-model="form.identificacion_persona_recibe">
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
									<v-select label="nombre_completo" :disabled="true" v-model="form.trabajador_comprobante" :options="trabajadores"></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.trabajador_comprobante" v-text="message"></li>
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
								<input class="form-control" :disabled="form.tipo_comprobante!==2" placeholder="Dígite un concepto" v-model="form.concepto">
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
									<input class="form-control" placeholder="Dígite el nombre del comercio" v-model.objetivo="detalleForm.nombre_comercio">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.nombre_comercio" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Numero RUC</label>
									<input class="form-control" v-mask="'A#############'" placeholder="Dígite el objetivo del viatico" v-model.objetivo="detalleForm.numero_ruc">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.numero_ruc" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for>Factura</label>
									<input class="form-control" ref="cantidad" type="text"  v-model="detalleForm.factura">
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
									<li :key="message" v-for="message in errorMessages.comprobante_detalle" v-text="message"></li>
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
									<template  v-for="(item, index) in form.comprobante_detalle">
										<tr>
											<td style="width: 2%">
												<button @click="eliminarLinea(item, index)">
													<i class="fa fa-trash"></i>
												</button>
											</td>
											<td>
												<input  class="form-control" type="text"  v-model.number="item.nombre_comercio">
												<ul class="error-messages">
													<li :key="message" v-for="message in errorMessages[`comprobante_detalle.${index}.nombre_comercio`]" v-text="message"></li>
												</ul>
											</td>
											<td>
												<input  class="form-control" type="text" v-model.text="item.numero_ruc">
												<ul class="error-messages">
													<li :key="message" v-for="message in errorMessages[`comprobante_detalle.${index}.numero_ruc`]" v-text="message"></li>
												</ul>
											</td>
											<td>
												<input  class="form-control" type="text" :disabled="true" v-model.text="item.factura">
												<ul class="error-messages">
													<li :key="message" v-for="message in errorMessages[`comprobante_detalle.${index}.factura`]" v-text="message"></li>
												</ul>
											</td>
											<td>
												<input  class="form-control" type="numeric" min="0" v-model.number="item.monto">
												<ul class="error-messages">
													<li :key="message" v-for="message in errorMessages[`comprobante_detalle.${index}.monto`]" v-text="message"></li>
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
					<div class="row">
					<div class="col-md-6">
						<div class="content-box-footer text-left">
							<template v-if="form.estado===99 || form.estado===1">
								<button @click="desactivar(form.id_comprobante)" class="btn btn-danger"><i class="fa fa-trash-o">	Anular</i></button>
							</template>
						</div>
					</div>
						<div class="col-md-6">
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-comprobante' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<template v-if="form.estado ===1">
						<button :disabled="btnAction !== 'Guardar' ? true : false" @click="actualizar(1)" class="btn btn-primary" type="button">{{ btnAction }}</button>
						<button :disabled="btnActionConf !== 'Confirmar' " @click="actualizar(2)" class="btn btn-success" type="button">{{ btnActionConf }}</button>
						</template>
					</div>
					<template v-if="loading">
						<BlockUI :message="msg" :url="url"></BlockUI>
					</template>
						</div>
					</div>
				</div>
				</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import comprobante from '../../api/caja-chica-comprobante.js'
	import loadingImage from '../../assets/images/block50.gif'
	import es from "vuejs-datepicker/dist/locale/translations/es";
	import numberasstring from "../../assets/custom-scripts/NumberAsString";

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
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
					moneda:'',
				},
				form: {
					trabajador: [],
					fecha : moment(new Date()).format("YYYY-MM-DD"),
					total:0,
					comprobante_detalle:[],
					proveedor : [],
					trabajador : {},
					beneficiario:'',
					concepto:'',
					monto_entregado:0,
					diferencia:0,
					monto_letras:'',
					tipo_comprobante:0,
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
				proveedores:[],
				solicitudes:[],
				vales:[],
				cajas:[],
				btnAction: 'Guardar',
				btnActionConf: 'Confirmar',
				errorMessages: []
			}
		},
		computed:{

			calcular_total() {
				if(this.form.comprobante_detalle) {
					this.form.total = this.form.comprobante_detalle.reduce((carry, item) => {
								return (carry + Number(item.monto));
							}
							, 0)

					return this.form.total;
				}
			},

			calcular_diferencia(){

				this.form.diferencia = Number( (this.form.total - this.form.total_detalle).toFixed(2));

				return this.form.diferencia;
			}
		},
		methods: {
			obtenerComprobante() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				comprobante.obtenerComprobante({
					id_comprobante: this.$route.params.id_comprobante
				}, data => {
					self.trabajadores = data.trabajadores;
					self.viaticos = data.viaticos;
					self.proveedores = data.proveedores;
					self.cajas = data.cajas_chica;
					self.form = data.comprobante;
					self.fechax2 = new Date(data.comprobante.fecha);
					self.monto_letras();
					self.loading = false;
				}, err => {
					alertify.error(err.id_comprobante[0],5);
					this.$router.push({
						name: 'listado-comprobante'
					});
				})
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
				self.form.trabajador = '';
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
			},
			monto_letras(){
				if(this.form.monto_entregado >0){
					this.form.monto_letras = numberasstring.numberasstring(this.form.monto_entregado,'CORDOBA','CORDOBAS',true);
				}else{
					this.form.monto_letras ='SELECCIONE UN MONTO MAYOR QUE CERO';
				}
				return this.form.monto_letras;
			},
			cargar_vale()
			{
				var self = this;
				//self.limpiar_campos();
				if (self.form.vale){

					self.form.id_comprobante = self.form.comprobante.id_comprobante;
					self.form.monto_entregado = self.form.comprobante.monto_entregado;
					self.form.concepto = self.form.comprobante.concepto;
					self.form.trabajador = self.form.comprobante.trabajador_comprobante;
					self.form.caja = self.form.comprobante.caja_comprobante;
					self.monto_letras();
				}
			},
			cargar_viatico()
			{
				var self = this;
				//self.limpiar_campos();
				if (self.form.solicitud){
					self.form.id_solicitud_viatico = self.form.solicitud.id_comprobante;
					self.form.monto_entregado = self.form.solicitud.monto_total;
					self.form.concepto = self.form.solicitud.concepto;
					self.form.trabajador = self.form.solicitud.solicitud_trabajador;
					self.monto_letras();
				}
			},
		actualizar(estado) {
				var self = this
			self.loading = true;
			/*var validacion = false;
			if(self.form.tipo_comprobante === 3 ){
				if ((Number(self.form.monto_entregado) === Number(self.form.total))){
					validacion = true;
				}else
				{
					validacion = false;
				}
			}else{
				validacion = true;
			}*/
			/*if (validacion){*/
				self.btnAction = 'Guardando, espere......'
				self.btnActionConf = 'Guardando, espere......'
				self.form.estado = estado;
			comprobante.actualizar(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'listado-comprobante'

					})
				}, err => {
						self.loading = false;
					self.errorMessages = err
						if(err.id_comprobante) {
							alertify.error(err.id_comprobante, 5)
							this.$router.push({
								name: 'listado-comprobante'
							})
						}
                   	self.btnAction = 'Guardar'
                   	self.btnActionConf = 'Confirmar'
				})
			/*}else{
				self.loading = false;
				alertify.warning("El sumatoria del detalle debe de coincidir con el monto solicitado",5);
			}*/

			},
			onDateSelect(date) {
				//console.log(date); //
				this.form.fecha = moment(date).format("YYYY-MM-DD"); //
			},
			onDateSelect2(date) {
				//console.log(date); //
				this.detalleForm.fecha_viatico = moment(date).format("YYYY-MM-DD");
			},
			agregarDetalle() {
				let self = this;
				if(this.detalleForm.factura){
					let i = 0;
					let keyx = 0;
					if(self.form.comprobante_detalle){
						self.form.comprobante_detalle.forEach((fila, key) => {
							if(self.detalleForm.fecha_viatico===fila.fecha_viatico){
								i++;
								keyx = key;
							}
						});
					}
					if(i === 0){
						this.form.comprobante_detalle.push({
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
				if (this.form.comprobante_detalle.length >= 1) {
					this.form.comprobante_detalle.splice(index, 1);

				}else{
					this.form.comprobante_detalle=[];
				}
			},
		/*	sub_total(itemX) {
				itemX.total= Number(itemX.monto_viatico) * Number(itemX.cantidad);

				if(!isNaN(itemX.total)){
					return itemX.total;
				}
				else return 0;
			},*/
			desactivar(zonaId) {
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
						//var self = this
						comprobante.desactivar({
							id_comprobante: zonaId
						}, data => {
							alertify.warning("Comprobante anulado correctamente", 5);
							this.$router.push({
								name: 'listado-comprobante'
							})
						}, err => {
							console.log(err)
						})
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
						comprobante.activar({
							id_comprobante: zonaId
						}, data => {
							alertify.success("Comprobante activado correctamente", 5);
							this.$router.push({
								name: 'listado-comprobante'
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
			this.obtenerComprobante();
		}
    }
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>