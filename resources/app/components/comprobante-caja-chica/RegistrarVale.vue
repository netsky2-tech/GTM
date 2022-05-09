<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear nuevo vale provisional</div>
						<div class="box-description">Formulario para registrar vale provisional</div>
					</div>
					<div class="row">
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
								<label for=""> Por: C$</label>
								<input @change="monto_letras" class="form-control" min="0" placeholder="Dígite una cantidad" type="number" v-model="form.monto_entregado">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.monto_entregado" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Caja chica</label>
								<v-select label="descripcion" v-model="form.caja" :options="cajas"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.caja" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Empleado</label>
								<v-select label="nombre_completo" v-model="form.trabajador" :options="trabajadores"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.trabajador" v-text="message"></li>
								</ul>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="form-group">
								<label for=""> Monto en letras</label>
								<input  :disabled="true" class="form-control" placeholder="Dígite monto en letra" v-model="form.monto_letras">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.monto_letras" v-text="message"></li>
								</ul>
							</div>
						</div>
					<div class="col-sm-12">
						<div class="form-group">
							<label for=""> En concepto de</label>
							<input class="form-control" placeholder="Dígite un concepto" v-model="form.concepto">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.concepto" v-text="message"></li>
							</ul>
						</div>
					</div>
					</div>


					<!--<div class="alert alert-success">
						<span><strong>Detalle de solicitud</strong></span>
					</div>

					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Cantidad</label>
								<input class="form-control" ref="cantidad" type="number" min="0" v-model.number="detalleForm.cantidad">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.cantidad" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Objetivo</label>
								<input class="form-control" placeholder="Dígite el objetivo del viatico" v-model.objetivo="detalleForm.objetivo">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.objetivo" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Viaticos</label>
								<v-select label="descripcion" v-model="detalleForm.viatico" :options="viaticos"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.viatico" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
						<div class="form-group">
							<label for>Monto</label>
							<input class="form-control" ref="monto_viatico" type="number" min="0" :disabled="true" v-model.number="detalleForm.viatico.monto">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.monto_viatico" v-text="message"></li>
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
									<th >Cantidad</th>
									<th >Objetivo</th>
									<th >Descripción viatico</th>
									<th >Monto</th>
									<th >SubTotal</th>
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
											<input  class="form-control" type="number" min="0" v-model.number="item.cantidad">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSolicitud.${index}.cantidad`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="text" v-model.text="item.objetivo">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSolicitud.${index}.objetivo`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="text" :disabled="true" v-model.text="item.viatico.descripcion">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSolicitud.${index}.viatico`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="number" min="0" v-model.number="item.monto_viatico">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSolicitud.${index}.monto_viatico`]" v-text="message"></li>
											</ul>
										</td>
										<td>
										<strong> {{sub_total(item) | formatMoney(2)}}</strong>
										</td>

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
					</div>-->

					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-vales' }" tag="button">
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
	import numberasstring from '../../assets/custom-scripts/NumberAsString'

	export default {
		data() {
			return {
				loading: false,
				msg: 'Guardando los datos, espere un momento',
				url: '/public' + loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				detalleForm: {
					cantidad: 0,
					fecha_viatico: moment(new Date()).format("YYYY-MM-DD"),
					objetivo: '',
					monto_viatico: 0,
					viatico: [],
					moneda: '',
				},
				form: {
					trabajador: [],
					fecha: moment(new Date()).format("YYYY-MM-DD"),
					detalleSolicitud: [],
					concepto: '',
					monto_entregado: 0,
					monto_letras: '',
				},
				fechax: new Date(),
				fechax2: new Date(),
				trabajadores: [],
				cajas: [],
				solicitudes: [],
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		computed: {
			/*calcular_total() {
				this.form.total = this.form.detalleSolicitud.reduce((carry, item) => {
							return (carry + Number(item.subtotal.toFixed(2)));
						}
						, 0)
				return this.form.total;
			},*/
		},
		methods: {

			nuevo() {
				var self = this
				self.loading = true;
				comprobante.nuevo({}, data => {
					self.trabajadores = data.trabajadores;
					self.cajas = data.cajas;
					self.solicitudes = data.solicitudes;
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
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				comprobante.registrarVale(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente", 5);
					this.$router.push({
						name: 'listado-vales'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
					self.btnAction = 'Registrar'
				})
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
				/*if (this.detalleForm.fecha_viatico) {
					let i = 0;
					/*let keyx = 0;
					if (self.form.detalleSolicitud) {
						self.form.detalleSolicitud.forEach((fila, key) => {
							if (self.detalleForm.fecha_viatico === fila.fecha_viatico) {
								i++;
								keyx = key;
							}
						});
					}*/
					if (i === 0) {
						this.form.detalleSolicitud.push({
							cantidad: this.detalleForm.cantidad,
							objetivo: this.detalleForm.objetivo,
							viatico: this.detalleForm.viatico,
							monto_viatico: this.detalleForm.viatico.monto,
							subtotal: 0
						});
						//this.detalleForm.fecha_viatico='';
						this.detalleForm.objetivo = '';
						this.detalleForm.cantidad = 1;
						this.detalleForm.viatico = '';

					} else {
						alertify.warning("Ya existe un registro con la fecha seleccionada", 5);
					}

				/*} else {
					alertify.warning("Debe seleccionar una fecha válida", 5);
				}*/
			},
			eliminarLinea(item, index) {
				if (this.form.detalleSolicitud.length >= 1) {
					this.form.detalleSolicitud.splice(index, 1);

				} else {
					this.form.detalleSolicitud = [];
				}
			},
			sub_total(itemX) {
				itemX.subtotal = Number(itemX.monto_viatico) * Number(itemX.cantidad);

				if (!isNaN(itemX.subtotal)) {
					return itemX.subtotal;
				} else return 0;
			},
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