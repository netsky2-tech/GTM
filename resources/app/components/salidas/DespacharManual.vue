<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Salida</div>
						<div class="box-description">Formulario para registrar salida de Baterías Automotrices</div>
					</div>
					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Tipo salida</label>
								<v-select
										:options="tipos_salida"
										label="descripcion"
										v-model="form.tipo_salida"
								></v-select>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.tipo_salida"
											v-text="message"
											v-on:input="limpiarDatos()"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for="">Condición productos:</label>
								<select disabled @change="limpiarDatos" class="form-control" v-model.number="form.condicion">
									<option value="1">Nuevos</option>
									<option value="8">Recuperados</option>
									<option value="6">Obsoletos</option>
								</select>
							</div>
						</div>

						<!--  <div class="col-sm-4">
                            <div class="form-group">
                              <label for>Código salida <small>(Automático)</small></label>
                              <input class="form-control" type="text" v-model="form.codigo_salida">
                              <ul class="error-messages">
                                <li
                                        :key="message"
                                        v-for="message in errorMessages.codigo_salida"
                                        v-text="message"
                                ></li>
                              </ul>
                            </div>
                          </div>-->

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Bodega</label>
								<v-select
										label="descripcion"
										v-model="form.bodega"
										:options="bodegas"
										v-on:input="obtenerProductosBodega()"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
								</ul>
							</div>
						</div>

						<!--<div class="col-sm-4">
							<div class="form-group">
								<label for>Proveedor</label>
								<v-select
										:options="proveedores"
										label="nombre_comercial"
										v-model="form.proveedor"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.proveedor" v-text="message"></li>
								</ul>
							</div>
						</div>-->

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha salida</label>
								<datepicker :language="es" :value="new Date()" v-model="fechax" @selected="onDateSelect"
											:format="format"></datepicker>
								<ul class="error-messages">
									<li
											v-for="message in errorMessages.fecha_salida"
											:key="message"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Número documento de salida</label>
								<input type="text" class="form-control" v-model="form.numero_documento">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.numero_documento"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-9">
							<div class="form-group">
								<label for>Observaciones</label>
								<input type="text" class="form-control" v-model="form.descripcion_salida">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.descripcion_salida"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

					</div>

					<div v-if="!form.bodega">
						<div class="alert alert-info">
							<span>Se requiere que seleccione una bodega para continuar.</span>
						</div>
						<hr>
					</div>

					<br>
					<div class="row">
						<div class="col-sm-12">
							<ul class="error-messages">
								<li
										:key="message"
										v-for="message in errorMessages.detalleProductos"
										v-text="message"
								></li>
							</ul>
							<table class="table table-bordered">
								<thead>
								<tr>
									<th>Producto</th>
									<th>Cantidad</th>
									<!--  <th >Costo Unitario</th>

                                       <th >SubTotal</th>-->

								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in form.detalleProductos">
									<tr>
										<td>
											<input class="form-control" disabled v-model="item.descripcion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalleProductos.${index}.productox.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input class="form-control" type="number" disabled v-model.number="item.cantidad_despachada">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalleProductos.${index}.cantidad_despachada`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<!-- <td>
                                           <input class="form-control" readonly type="number" v-model.number="item.precio_unitario">
                                           <ul class="error-messages">
                                             <li
                                                     :key="message"
                                                     v-for="message in errorMessages[`detalleProductos.${index}.precio_unitario`]"
                                                     v-text="message">
                                             </li>
                                           </ul>
                                         </td>-->

										<!--<td>
                                             <strong>C$ {{sub_total(item)| formatMoney(2)}}</strong>
                                           </td>-->


									</tr>
									<tr></tr>
								</template>
								</tbody>
								<tfoot>

								<tr>
									<td colspan="3"></td>
									<!--<td>Subtotal</td>
                                    <td> <strong>C$ {{total_subt | formatMoney(2)}}</strong></td>-->
								</tr>
								<tr>
									<td class="item-footer" colspan="2"> Total Unidades</td>
									<td class="item-footer">
										<strong>{{total_cantidad}}</strong>
									</td>
									<!-- <td>Total</td>
                                     <td> <strong>C$ {{gran_total | formatMoney(2)}}</strong></td>-->
								</tr>

								</tfoot>
							</table>
						</div>
					</div>
					<br>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'salidas' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button
								:disabled="btnAction != 'Registrar' ? true : false"
								@click="confirmar"
								class="btn btn-primary"
								type="button"
						>{{ btnAction }}
						</button>
					</div>
					<br>
						<div class="alert alert-success">
							<span><strong>Detalle de batería</strong></span>
						</div>
						<div class="row">
							<div class="col-sm-2">
								<div class="form-group">
									<label for>Código Garantía Bateria</label>
									<input @keydown.enter="buscarBateria" class="form-control" ref="bateria"  v-model="detalleForm.bateria_busqueda">
									<ul class="error-messages">
										<li
												:key="message"
												v-for="message in errorMessages.bateria_busqueda"
												v-text="message"
										></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-12">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.detalle_baterias"
											v-text="message"
									></li>
								</ul>
								<table class="table table-bordered"  >
									<thead>
									<tr>
										<th></th>
										<th >Batería</th>
										<th >Código Garantía</th>
									</tr>
									</thead>
									<tbody>
									<template v-for="(item, index) in form.detalle_baterias">
										<tr>
											<td style="width: 2%">
												<button @click="eliminarLinea(item, index)">
													<i class="fa fa-trash"></i>
												</button>
											</td>
											<td>
												<input class="form-control" disabled v-model="item.productox.bateria_producto.descripcion">
												<ul class="error-messages">
													<li
															:key="message"
															v-for="message in errorMessages[`detalle_baterias.${index}.productox.id_producto`]"
															v-text="message">
													</li>
												</ul>
											</td>
											<td>
												<input  disabled  class="form-control" v-model="item.productox.codigo_garantia">
												<ul class="error-messages">
													<li
															:key="message"
															v-for="message in errorMessages[`detalle_baterias.${index}.codigo_garantia`]"
															v-text="message">
													</li>
												</ul>
											</td>
										</tr>
									</template>
									</tbody>
									<tfoot>
									</tfoot>
								</table>
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
	import bodega from "../../api/bodegas";
	import salida from "../../api/salidas";
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import loadingImage from '../../assets/images/block50.gif'
	import bateria from "../../api/baterias";

	export default {
		/*components: {
          Datepicker
        },*/
		data() {
			return {
				loading:true,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				bodegas: [],
				//proveedores: [],
				tipos_salida: [],
				productos: [],
				fechax: new Date(),

				detalleForm: {
					productox: "",
					cantidad: 1,
					precio_unitario: 0,
					subtotal: 0,
					total: 0,
				},

				form: {
					detalle_baterias: [],
					codigo_salida: "",
					descripcion_salida: "",
					fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
					tipo_salida: "",
					proveedor: "",
					bodega: "",
					numero_documento:'',
					detalleProductos: [],
					condicion:1,
				},
				btnAction: "Registrar",
				errorMessages: []
			};
		},
		computed: {

			total_cantidad() {
				return this.form.detalleProductos.reduce((carry, item) => {
					return (carry + Number(item.cantidad_despachada))
				}, 0)
			},
			total_subt() {
				return this.form.detalleProductos.reduce((carry, item) => {
							return (carry + Number(item.subtotal.toFixed(2)));
						}
						, 0)
			},
			gran_total() {
				return this.form.detalleProductos.reduce((carry, item) => {
							return (carry + Number(item.total.toFixed(2)));
						}
						, 0)
			},
		},
		methods: {
			limpiarDatos(){
				var self = this;
				self.form.detalleProductos=[];
				self.detalleForm.productox = '';
				self.detalleForm.cantidad = 0;
			},
			buscarBateria() {
				var self = this;
				self.loading = true;
				var estado_busqueda = 1; //disponibles(nuevas)
				/*if(self.form.tipo_salida.id_tipo_salida === 11 && self.form.bodega.id_tipo_bodega === 4){
					estado_busqueda=3;
				}else if(self.form.tipo_salida.id_tipo_salida === 13){
					estado_busqueda=8;
				}else if(self.form.tipo_salida.id_tipo_salida === 14){
					estado_busqueda=6;
				}*/
				estado_busqueda=self.form.condicion;
				//self.$refs.precio_unitario.focus();
				bateria.buscarCodigo({
					codigo_bateria: self.detalleForm.bateria_busqueda,
					id_bodega: self.form.bodega.id_bodega,
					reservada:false,
					estado: estado_busqueda
				}, data => {
					if(data !== null){
						self.detalleForm.productox = data;
						//self.$refs.agregar.click()
						self.agregarDetalle();
						self.detalleForm.bateria_busqueda = '';
						self.detalleForm.productox = '';
						self.$refs.bateria.focus();

					}else{
						alertify.warning("No se encuentra esta batería.",5);
						self.detalleForm.bateria_busqueda = '';
						self.$refs.bateria.focus();
						self.detalleForm.productox = '';
					}
					self.loading = false;
				}, err => {
					console.log(err);
					if(err.codigo_bateria){
						self.detalleForm.bateria_busqueda = '';
						self.$refs.bateria.focus();
						alertify.warning("No se encuentra esta batería.",5);
						self.detalleForm.productox = '';
					}
					self.loading = false;
				})

			},
			sub_total(itemX) {
				itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad)).toFixed(2));
				itemX.total = itemX.subtotal;
				if (!isNaN(itemX.total)) {
					return itemX.total;
				} else return 0;
			},
			cargar_detalles_producto() {
				var self = this
				if (self.detalleForm.productox)
					self.detalleForm.cantidad = 1;
				self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
				self.$refs.cantidad.focus();
			},
			onDateSelect(date) {
				this.form.fecha_salida = moment(date).format("YYYY-MM-DD"); //
			},
			obtenerTodasBodegasProductos() {
				var self = this;
				bodega.obtenerTodasBodegasProductos(
						data => {
							self.bodegas = data.bodegas;
							self.form.bodega = self.bodegas[0];

							self.productos = [];
							self.form.bodega.productos_bodega.forEach((bodega_producto, key) => {
								self.productos.push({
									codigo_sistema: bodega_producto.producto.codigo_sistema,
									costo_promedio: Number(bodega_producto.producto.costo_promedio),
									descripcion: bodega_producto.producto.descripcion,
									id_producto: bodega_producto.producto.id_producto,
									id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
									nombre_comercial: bodega_producto.producto.nombre_comercial,
									cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
									unidad_medida: bodega_producto.producto.unidad_medida,
									nombre_full: bodega_producto.producto.descripcion + ' - ' + bodega_producto.producto.codigo_barra,
								});
							});

						},
						err => {
							console.log(err);
						}
				);
			},

			obtenerProductosBodega() {
				var self = this;
				self.form.detalleProductos = [];
				self.productos = [];

				self.form.bodega.productos_bodega.forEach((bodega_producto, key) => {

					self.productos.push({
						codigo_sistema: bodega_producto.producto.codigo_sistema,
						costo_promedio: Number(bodega_producto.producto.costo_promedio),
						descripcion: bodega_producto.producto.descripcion,
						id_producto: bodega_producto.producto.id_producto,
						id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
						nombre_comercial: bodega_producto.producto.nombre_comercial,
						cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
						unidad_medida: bodega_producto.producto.unidad_medida,
						nombre_full: bodega_producto.producto.descripcion + ' - ' + bodega_producto.producto.codigo_barra,
					});

				});

			},
			agregarDetalle() {
				var self = this;
				if(self.detalleForm.productox){

					let existeCodigoGarantia= false;
					let existeProducto= false;
					self.form.detalle_baterias.forEach((bateriax, key) => {
						if(self.detalleForm.productox.id_bateria===bateriax.productox.id_bateria){
							existeCodigoGarantia=true;
						}
					});

					if(self.form.detalleProductos){
						self.form.detalleProductos.forEach((productox, key) => {
							if(self.detalleForm.productox.id_producto===productox.id_producto){
								existeProducto=true;
							}
						});
					}
					//console.log('existe prodcuto '+existeProducto);
					//console.log('existe codigo '+existeCodigoGarantia);


				if(!existeCodigoGarantia){
						//console.log('no existe garantia!');
						if(existeProducto){
							//console.log('existe producto!');
							let keyx = -1;
							if(self.form.detalleProductos){
								self.form.detalleProductos.forEach((productox, key) => {
									if(self.detalleForm.productox.id_producto===productox.id_producto){
										keyx = key;
									}
								});
							}

							//if((self.form.detalleProductos[keyx].cantidad_despachada + 1) <= self.form.detalleProductos[keyx].cantidad_saliente){
								if(keyx>=0){
							self.form.detalleProductos[keyx].cantidad_despachada++;
								this.form.detalle_baterias.push({
									productox: this.detalleForm.productox
								});
								alertify.success("Batería agregada!",5);
								}
							/*}else{
								alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
							}*/
						}else{
							//console.log('no existe producto!');
							let keyx = 0;

							self.form.detalleProductos.push({
								descripcion: self.detalleForm.productox.bateria_producto.descripcion,
								id_producto:self.detalleForm.productox.id_producto,
								cantidad_despachada: 1,
								precio_unitario: 0,
								subtotal: 0,
								total: 0,
							});


							//if((self.form.detalleProductos[keyx].cantidad_despachada + 1) <= self.form.detalleProductos[keyx].cantidad_saliente){
								//self.form.detalleProductos[keyx].cantidad_despachada++;
								this.form.detalle_baterias.push({
									productox: this.detalleForm.productox
								});
								alertify.success("Batería agregada!",5);
							/*}else{
								alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
							}*/
						}
					}else{
						alertify.warning("Ya existe ese código de batería en el listado",5);
					}
					this.detalleForm.productox={};
					self.$refs.bateria.focus();
				}else{
					alertify.warning("Debe seleccionar un producto",5);
				}
			},
			eliminarLinea(item, index) {
				if (this.form.detalle_baterias.length >= 1) {
					var self = this;
					let keyx = -1;
					if(self.form.detalleProductos){
						self.form.detalleProductos.forEach((productox, key) => {
							if(item.productox.id_producto===productox.id_producto){
								keyx = key;
							}
						});
					}
					if(keyx>=0){
					self.form.detalleProductos[keyx].cantidad_despachada--;
					if(self.form.detalleProductos[keyx].cantidad_despachada===0){
						this.form.detalleProductos.splice(keyx, 1);
					}
					}

					this.form.detalle_baterias.splice(index, 1);

				} else {
					this.form.detalle_baterias = [];
					this.form.detalleProductos = [];
				}
			},

			confirmar(){
				this.$swal.fire({
					title: 'Esta seguro de confirmar el registro de la salida?',
					text: "Revise bien los datos",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						this.registrar();
					}
				})
			},

			registrar() {
				var self = this;
				self.btnAction = "Registrando, espere....";
				self.loading = true;
				salida.registrarSalidaManual(
						self.form,
						data => {
							self.loading = false;
							this.$router.push({
								name: "salidas"
							});
						},
						err => {
							self.loading = false;
							self.errorMessages = err;
							self.btnAction = "Registrar";
						}
				);
			},

			nueva() {
				var self = this;
				salida.nueva({}, data => {
							self.tipos_salida = data.tipos_salida;
							self.form.tipo_salida = self.tipos_salida[0];
							//self.proveedores = data.proveedores;
							//self.form.proveedor = self.proveedores[0];

							self.bodegas = data.bodegas;
							self.form.bodega = self.bodegas[0];

							self.productos = [];
							self.form.bodega.productos_bodega.forEach((bodega_producto, key) => {
								self.productos.push({
									codigo_sistema: bodega_producto.producto.codigo_sistema,
									costo_promedio: Number(bodega_producto.producto.costo_promedio),
									descripcion: bodega_producto.producto.descripcion,
									id_producto: bodega_producto.producto.id_producto,
									id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
									nombre_comercial: bodega_producto.producto.nombre_comercial,
									cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
									unidad_medida: bodega_producto.producto.unidad_medida,
									nombre_full: bodega_producto.producto.descripcion + ' - ' + bodega_producto.producto.codigo_barra,
								});
							});

							self.loading = false;

						},
						err => {
							console.log(err);
						})

			},

		},
		mounted() {
			this.nueva()
			//this.obtenerTodasBodegasProductos();
			//this.obtenerTodosProveedores();
			//this.obtenerTodosTiposSalida();
		}
	};
</script>
<style>
	.btn-agregar {
		margin-top: 33px;
	}
</style>
