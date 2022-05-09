<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar </div>
						<div class="box-description">Formulario para modificar vale provisional</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha</label>
								<datepicker :format="format" :disabled="true" :language="es" v-model="fechax" @selected="onDateSelect"></datepicker>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.fecha" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Por: C$</label>
								<input @change="monto_letras" class="form-control" placeholder="Dígite una cantidad" type="number" v-model="form.monto_entregado">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.monto_entregado" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Caja chica</label>
								<v-select label="descripcion" v-model="form.caja_comprobante" :options="cajas"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.caja" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Nombre</label>
								<v-select label="nombre_completo" v-model="form.trabajador_comprobante" :options="trabajadores"></v-select>
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
							<input :disabled="true" class="form-control" placeholder="Dígite monto en letra" v-model="form.monto_en_letra">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.monto_en_letra" v-text="message"></li>
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
								<li :key="message" v-for="message in errorMessages.solicitud_detalles" v-text="message"></li>
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
								<template  v-for="(item, index) in form.solicitud_detalles">
									<tr>
										<td style="width: 2%">
											<button @click="eliminarLinea(item, index)">
												<i class="fa fa-trash"></i>
											</button>
										</td>
										<td>
											<input  class="form-control" type="number" min="0" v-model.number="item.cantidad">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`solicitud_detalles.${index}.cantidad`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="text" v-model.text="item.objetivo">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`solicitud_detalles.${index}.objetivo`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="text" :disabled="true" v-model.text="item.solicitud_viatico.descripcion">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`solicitud_detalles.${index}.viatico`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="number" min="0" :disabled="true" v-model.number="item.monto_viatico">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`solicitud_detalles.${index}.monto_viatico`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<strong>{{sub_total(item)| formatMoney(2)}}</strong>
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
						<router-link :to="{ name: 'listado-vales' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<template v-if="form.estado ===1">
						<button :disabled="btnAction !== 'Guardar' " @click="actualizar(1)" class="btn btn-primary" type="button">{{ btnAction }}</button>
						<button :disabled="btnActionConf !== 'Confirmar' " @click="actualizar(2)" class="btn btn-success" type="button">{{ btnActionConf }}</button>
						</template>
					</div>
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
				fechax: new Date(),
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
					fecha: '',
					detalleSolicitud: [],
					concepto: '',
					monto_entregado: 0,
					monto_en_letra: '',
				},
				fechax2: new Date(),
				trabajadores: [],
				cajas: [],
				solicitudes: [],
				btnAction: 'Guardar',
				btnActionConf: 'Confirmar',
				errorMessages: []
			}
		},
		computed:{

			/*calcular_total() {
				this.form.monto_total = this.form.solicitud_detalles.reduce((carry, item) => {
							return(carry + Number(item.total));
						}
						, 0)
				return this.form.monto_total;
			},*/
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
					self.cajas = data.cajas_chica;
					self.form = data.comprobante;
					self.fechax = new Date(data.comprobante.fecha);
					self.monto_letras();
					self.loading = false;
				}, err => {
					alertify.error(err.id_comprobante[0],5);
					this.$router.push({
						name: 'listado-vales'
					});
				})
			},
		actualizar(estado) {
				var self = this
			self.loading = true;
				self.btnAction = 'Guardando, espere......'
				self.btnActionConf = 'Guardando, espere......'
				self.form.estado = estado;
					comprobante.actualizarVale(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'listado-vales'
					})
				}, err => {
						self.loading = false;
						console.log(err);
					self.errorMessages = err
						if(err.id_comprobante[0])
						{
							alertify.error(err.id_comprobante[0],10)
							this.$router.push({
								name: 'listado-vales'
							})
						}
                   	self.btnAction = 'Guardar'
                   	self.btnActionConf = 'Confirmar'
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
			monto_letras(){
				if(this.form.monto_entregado >0){
					this.form.monto_en_letra = numberasstring.numberasstring(this.form.monto_entregado,'CORDOBA','CORDOBAS',true);
				}else{
					this.form.monto_en_letra ='SELECCIONE UN MONTO MAYOR QUE CERO';
				}
				return this.form.monto_letras;
			},
			agregarDetalle() {
				let self = this;
				if(this.detalleForm.fecha_viatico){
					let i = 0;
					let keyx = 0;
					if(self.form.solicitud_detalles){
						self.form.solicitud_detalles.forEach((fila, key) => {
							if(self.detalleForm.fecha_viatico===fila.fecha_viatico){
								i++;
								keyx = key;
							}
						});
					}
					if(i === 0){
						this.form.solicitud_detalles.push({
							cantidad: this.detalleForm.cantidad,
							objetivo: this.detalleForm.objetivo,
							solicitud_viatico: this.detalleForm.viatico,
							monto_viatico: this.detalleForm.viatico.monto,
							total:0
						});
						//this.detalleForm.fecha_viatico='';
						this.detalleForm.objetivo='';
						this.detalleForm.cantidad=1;
						this.detalleForm.viatico='';

					}else{
						alertify.warning("Ya existe un registro con la fecha seleccionada",5);
					}

				}else{
					alertify.warning("Debe seleccionar una fecha válida",5);
				}
			},
			eliminarLinea(item, index) {
				if (this.form.solicitud_detalles.length >= 1) {
					this.form.solicitud_detalles.splice(index, 1);

				}else{
					this.form.solicitud_detalles=[];
				}
			},
			/*sub_total(itemX) {
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
							alertify.warning("Vale provisional anulado correctamente", 5);
							this.$router.push({
								name: 'listado-vales'
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
							alertify.success("Vale activado correctamente", 5);
							this.$router.push({
								name: 'listado-vales'
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