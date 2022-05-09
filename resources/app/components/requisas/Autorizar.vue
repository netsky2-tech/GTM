<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Autorizar Requisa</div>
						<div class="box-description">Formulario para Autorizar Requisa</div>
					</div>
					<div class="row">

						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Trabajador solicitante</label>
								<input  readonly class="form-control" v-model="form.requisa_trabajador.text">
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Proveedor</label>
								<input  readonly class="form-control" v-model="form.requisa_proveedor.text">
							</div>
						</div>


						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Sucursal</label>
								<input  readonly class="form-control" v-model="form.requisa_sucursal.text">
							</div>
						</div>


						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Area</label>
								<input  readonly class="form-control" v-model="form.requisa_area.text">
							</div>
						</div>


						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Bodega</label>
								<input  readonly class="form-control" v-model="form.requisa_bodega.text">
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha Solicitud</label>
								<datepicker :disabled="true" :language="es" :value="new Date()" @selected="onDateSelect" :format="format"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>No. Factura</label>
								<input readonly type="text" class="form-control" v-model="form.no_factura">
							</div>
						</div>

						<div class="col-sm-12">
							<div class="form-group">
								<label for>Observaciones Requisa</label>
								<input readonly type="text" class="form-control" v-model="form.descripcion_requisa">
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-12">
							<ul class="error-messages">
								<li
										:key="message"
										v-for="message in errorMessages.detalleProductos"
										v-text="message"
								></li>
							</ul>
							<table class="table table-bordered"  >
								<thead>
								<tr>
									<th></th>
									<th >Producto</th>
									<th >Cantidad Solicitada</th>
									<th >Cantidad Autorizada</th>
									<th >Costo Unitario</th>

									<th >SubTotal</th>

								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in form.requisa_productos">
									<tr>
										<td style="width: 2%">
											<button disabled @click="eliminarLinea(item, index)">
												<i class="fa fa-trash"></i>
											</button>
										</td>
										<td>
											<input class="form-control" disabled v-model="item.bodega_producto.producto_simple.descripcion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`requisa_productos.${index}.productox.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input  readonly class="form-control" type="number" v-model.number="item.cantidad_solicitada">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`requisa_productos.${index}.cantidad_solicitada`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input  @change="item.cantidad_autorizada = Math.max(Math.min(Math.round(item.cantidad_autorizada), item.cantidad_solicitada), 1)" class="form-control" type="number" v-model.number="item.cantidad_autorizada">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`requisa_productos.${index}.cantidad_autorizada`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input class="form-control" readonly type="number" v-model.number="item.precio_unitario">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`requisa_productos.${index}.precio_unitario`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td>
											<strong>C$ {{sub_total(item)| formatMoney(2)}}</strong>
										</td>


									</tr>
									<tr></tr>
								</template>
								</tbody>
								<tfoot>

								<tr>
									<td colspan="4"></td>
									<td>Subtotal</td>
									<td> <strong>C$ {{total_subt | formatMoney(2)}}</strong></td>
								</tr>
								<tr>
									<td class="item-footer" colspan="2"> Total Unidades</td>
									<td  class="item-footer">
										<strong>{{total_cantidad_solicitada}}</strong>
									</td>
									<td  class="item-footer">
										<strong>{{total_cantidad_autorizada}}</strong>
									</td>
									<td>Total</td>
									<td> <strong>C$ {{gran_total | formatMoney(2)}}</strong></td>
								</tr>

								</tfoot>
							</table>
						</div>
					</div>

					<div class="content-box-footer text-right">
						<button
								:disabled="btnActionAnular !== 'Anular'"
								@click="anular"
								class="btn btn-danger"
								type="button"
						>{{ btnActionAnular }}</button>
						<button
								:disabled="btnAction !== 'Autorizar'"
								@click="autorizar"
								class="btn btn-primary"
								type="button"
						>{{ btnAction }}</button>
						<router-link tag="button" :to="{ name: 'requisas' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import requisa from "../../api/requisas";
	import es from 'vuejs-datepicker/dist/locale/translations/es'

	export default {
		data() {
			return {

				es: es,
				format: "dd-MM-yyyy",
				form: {
					codigo_requisa: "",
					descripcion_requisa: "",
					fecha_solicitud: moment(new Date()).format("YYYY-MM-DD"),
					requisa_trabajador: {},
					requisa_proveedor: {},
					requisa_sucursal: {},
					requisa_area: {},
					requisa_bodega: {},
					requisa_productos: []
				},
				btnAction: "Autorizar",
				btnActionAnular: "Anular",
				errorMessages: []
			};
		},
		computed: {

			total_cantidad_solicitada() {
				return this.form.requisa_productos.reduce((carry, item) => {
					return (carry + Number(item.cantidad_solicitada))
				}, 0)
			},
			total_cantidad_autorizada() {
				return this.form.requisa_productos.reduce((carry, item) => {
					return (carry + Number(item.cantidad_autorizada))
				}, 0)
			},

			total_subt() {
				return this.form.requisa_productos.reduce((carry, item) => {
							return 0;//(carry + Number(item.cantidad_solicitada.toFixed(2))*Number(item.precio_unitario.toFixed(2)));
						}
						, 0)
			},
			gran_total() {
				return this.form.requisa_productos.reduce((carry, item) => {
							return 0 //(carry + Number(item.cantidad_solicitada.toFixed(2))*Number(item.precio_unitario.toFixed(2)));
						}
						, 0)
			},
		},
		methods: {
			obtenerRequisa() {
				var self = this
				requisa.obtenerRequisa({
					id_requisa: this.$route.params.id_requisa
				}, data => {
					self.form = data.requisa;
				});

				/*if(self.form.salida_bodega.productos_bodega){
                self.productos = [];
                self.form.salida_bodega.productos_bodega.forEach((bodega_producto, key) => {
                    self.productos.push({
                        codigo_sistema: bodega_producto.producto.codigo_sistema,
                        costo_promedio:  Number(bodega_producto.producto.costo_promedio),
                        descripcion:  bodega_producto.producto.descripcion,
                        id_producto:  bodega_producto.producto.id_producto,
                        id_bodega_producto:  self.form.salida_bodega.productos_bodega[key].id_bodega_producto,
                        nombre_comercial:  bodega_producto.producto.nombre_comercial,
                        cantidad_disponible: Number(self.form.salida_bodega.productos_bodega[key].cantidad),
                        unidad_medida: bodega_producto.producto.unidad_medida,
                    });
                });
                }*/
			},
			sub_total(itemX) {
				itemX.subtotal= Number((Number(itemX.precio_unitario)* Number(itemX.cantidad_solicitada)).toFixed(2));
				itemX.total =itemX.subtotal;
				if(!isNaN(itemX.total)){
					return itemX.total;
				}
				else return 0;
			},


			onDateSelect(date) {
				//console.log(date); //
				this.form.fecha_solicitud = moment(date).format("YYYY-MM-DD"); //
			},
			seleccionarTrabajador(e) {
				const trabajadorP = e.target.value;
				var self = this;
				self.form.requisa_trabajador = trabajadorP;
			},
			seleccionarProveedor(e) {
				const proveedorP = e.target.value;
				var self = this;
				self.form.requisa_proveedor = proveedorP;
			},
			seleccionarSucursal(e) {
				const sucursalP = e.target.value;
				var self = this;
				self.form.requisa_sucursal = sucursalP;

			},
			seleccionarArea(e) {
				const areaP = e.target.value;
				var self = this;
				self.form.requisa_area = areaP;
			},
			seleccionarBodega(e) {
				const bodegaP = e.target.value;
				var self = this;
				self.form.requisa_bodega = bodegaP;
				self.form.requisa_productos = [];
				self.detalleForm.productox = {};
			},
			cargar_detalles_producto(e) {

				const productoP = e.target.value;
				var self = this;
				self.detalleForm.productox = productoP;

				if(self.detalleForm.productox)
					self.detalleForm.cantidad=0;
				self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;

			},
			/*obtenerProductosBodega() {
                var self = this;
                self.productos = [];

                self.form.salida_bodega.productos_bodega.forEach((bodega_producto, key) => {
                    self.productos.push({
                        codigo_sistema: bodega_producto.producto.codigo_sistema,
                        costo_promedio:  Number(bodega_producto.producto.costo_promedio),
                        descripcion:  bodega_producto.producto.descripcion,
                        id_producto:  bodega_producto.producto.id_producto,
                        id_bodega_producto:  self.form.salida_bodega.productos_bodega[key].id_bodega_producto,
                        nombre_comercial:  bodega_producto.producto.nombre_comercial,
                        cantidad_disponible: Number(self.form.salida_bodega.productos_bodega[key].cantidad),
                        unidad_medida: bodega_producto.producto.unidad_medida,
                    });

                });

            },*/
			agregarDetalle() {
				var self = this;
				if(self.detalleForm.productox){
					if(self.detalleForm.cantidad>0 && self.detalleForm.precio_unitario > 0){
						let i = 0;
						let keyx = 0;
						if(self.form.requisa_productos){
							self.form.requisa_productos.forEach((productox, key) => {
								if(self.detalleForm.productox.id_bodega_producto===productox.productox.id_bodega_producto){
									i++;
									keyx = key;
								}
							});
						}
						if(i === 0){
							self.form.requisa_productos.push({
								productox: self.detalleForm.productox,
								cantidad_solicitada: self.detalleForm.cantidad,
								precio_unitario: self.detalleForm.precio_unitario,
								subtotal: 0,
								total: 0,
							});

						}else{
							let nuevo_total = self.form.requisa_productos[keyx].cantidad_solicitada + self.detalleForm.cantidad;
							if(nuevo_total<=self.form.requisa_productos[keyx].cantidad_disponible){
								self.form.requisa_productos[keyx].cantidad_solicitada = self.form.requisa_productos[keyx].cantidad + self.detalleForm.cantidad;
							}else{
								self.form.requisa_productos[keyx].cantidad_solicitada =self.form.requisa_productos[keyx].productox.cantidad_disponible;
							}
						}

						self.detalleForm.productox='';
						self.detalleForm.cantidad=0;
						self.detalleForm.precio_unitario=0;
						self.detalleForm.subtotal=0;
						self.detalleForm.total=0;

					}else{
						alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero",5);
					}
				}else{
					alertify.warning("Debe seleccionar un producto",5);
				}
			},
			eliminarLinea(item, index) {
				if (this.form.requisa_productos.length >= 1) {
					this.form.requisa_productos.splice(index, 1);

				}else{
					this.form.requisa_productos=[];
				}
			},
			autorizar() {
				var self = this;
				self.btnAction = "Registrando, espere....";
				self.btnActionAnular = "Registrando, espere....";

				self.$swal.fire({
					title: 'Esta seguro de autorizar esta solicitud de requisa?',
					text: "Esta acción no se puede deshacer",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText: 'Cancelar'
				}).then((result) => {
					if (result.value) {
						requisa.autorizar(
								self.form,
								data => {
									this.$swal.fire(
											'Requisa Autorizada!',
											'La Requisa fue Autorizada correctamente.',
											'success'
									)
									this.$router.push({
										name: "requisas"
									});
								},
								err => {
									self.errorMessages = err;
									self.btnAction = "Autorizar";
									self.btnActionAnular = "Anular";
								}
						);
					}else{
						self.btnAction = "Autorizar";
						self.btnActionAnular = "Anular";
					}
				})
			},
			anular() {
				var self = this;
				self.btnAction = "Registrando, espere....";
				self.btnActionAnular = "Registrando, espere....";

				self.$swal.fire({
					title: 'Esta seguro de anular esta solicitud de requisa?',
					text: "Esta acción no se puede deshacer",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, anular',
					cancelButtonText: 'Regresar'
				}).then((result) => {
					if (result.value) {
						requisa.cancelar(
								self.form,
								data => {
									this.$swal.fire(
											'Solicitud de Requisa Anulada!',
											'La Requisa fue Anulada correctamente.',
											'success'
									)
									this.$router.push({
										name: "requisas"
									});
								},
								err => {
									self.errorMessages = err;
									self.btnAction = "Autorizar";
									self.btnActionAnular = "Anular";
								}
						);
					}else{
						self.btnAction = "Autorizar";
						self.btnActionAnular = "Anular";
					}
				})
			}
		},
		mounted() {
			this.obtenerRequisa();

		}
	};
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>