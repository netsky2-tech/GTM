<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Salida por {{form.salida_tipo.descripcion}}</div>
						<div class="box-description">Formulario para despachar salida de productos</div>
					</div>
					<div class="row">

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Tipo salida</label>
								<input class="form-control" readonly type="text" v-model="form.salida_tipo.descripcion">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.salida_tipo"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Código salida <small>(Automático)</small></label>
								<input class="form-control" readonly type="text" v-model="form.codigo_salida">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.codigo_salida"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Bodega</label>
								<input class="form-control" readonly type="text" v-model="form.salida_bodega.descripcion">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.salida_bodega" v-text="message"></li>
								</ul>
							</div>
						</div>
						<template v-if="form.salida_proveedor">
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Proveedor</label>

								<input class="form-control" readonly type="text" v-model="form.salida_proveedor.nombre_comercial">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.salida_proveedor" v-text="message"></li>
								</ul>


							</div>
						</div>
						</template>
							<template v-if="form.salida_cliente">
								<div class="col-sm-4">
									<div class="form-group">
										<label for>Nombre Cliente</label>

										<input class="form-control" readonly type="text" v-model="form.salida_cliente.nombre_completo">
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.nombre_completo" v-text="message"></li>
										</ul>


									</div>
								</div>
								<div class="col-sm-4">
									<div class="form-group">
										<label for>Razón Social</label>

										<input class="form-control" readonly type="text" v-model="form.salida_cliente.razon_social">
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.nombre_completo" v-text="message"></li>
										</ul>


									</div>
								</div>
							</template>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha salida</label>
								<input class="form-control" readonly type="text" v-model="form.fecha_salida">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.fecha_salida"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Orden de venta</label>
								<input type="text" readonly class="form-control" v-model="form.orden_venta">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.orden_venta"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Factura</label>
								<input type="text" readonly class="form-control" v-model="form.no_factura">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.no_factura"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Remisión</label>
								<input type="text" readonly class="form-control" v-model="form.no_remision">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.no_factura"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-12">
							<div class="form-group">
								<label for>Observaciones Salida</label>
								<input class="form-control" readonly type="text" v-model="form.descripcion_salida">
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
					<div class="row">
						<div class="col-sm-12">
							<ul class="error-messages">
								<li
										:key="message"
										v-for="message in errorMessages.salida_productos"
										v-text="message"
								></li>
							</ul>
							<table class="table table-bordered"  >
								<thead>
								<tr>
									<th >Producto</th>
									<th >Presentación</th>
									<th >UM</th>
									<th >Escalar</th>
									<th >UM Estandar</th>
									<th >Cantidad Saliente</th>
									<th >Cantidad Despachada</th>
									<th >Diferencia</th>
									<th >Total</th>
								<!--	<th >Precio Unitario</th>
									<th >SubTotal</th>-->

								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in form.salida_productos">
									<tr>
										<td>
											<input class="form-control" disabled v-model="item.text">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_productos.${index}.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input class="form-control" disabled type="text" v-model="item.codigo_presentacion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_productos.${index}.codigo_presentacion`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input class="form-control" disabled type="text" v-model="item.salida_presentacion.unidad_medida">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_presentacion.${index}.unidad_medida`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input class="form-control" disabled type="text" v-model="item.salida_presentacion.escalar">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_presentacion.${index}.escalar`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input class="form-control" disabled type="text" v-model="item.salida_presentacion.simbolo_um">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_presentacion.${index}.simbolo_um`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input class="form-control" disabled type="number" v-model.number="item.cantidad_saliente">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_productos.${index}.cantidad_saliente`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td>
											<input :disabled="(item.bodega_producto.producto_simple.tipo_producto===3 && item.bodega_producto.producto_simple.condicion===1&& item.bodega_producto.producto_simple.producto_detalles_baterias.id_submarca!==7)"
													 @change="item.cantidad_despachada = Math.max(Math.min(Math.round(item.cantidad_despachada), item.cantidad_saliente), 1)" class="form-control" type="number" v-model.number="item.cantidad_despachada">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_productos.${index}.cantidad_despachada`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td>
											{{calcular_diferencia(item.cantidad_saliente,item.cantidad_despachada)}}
										</td>

										<td>
											<strong>{{calcularConversion(item)|formatMoney(2)}}</strong>
										</td>


										<!--<td>
											<input class="form-control" disabled type="number" v-model.number="item.precio_unitario">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_productos.${index}.precio_unitario`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td>
											<strong>C$ {{sub_total(item)| formatMoney(2)}}</strong>
										</td>-->


									</tr>
									<tr></tr>
								</template>
								</tbody>
								<tfoot>

								<tr>
									<td colspan="5"></td>
									<!--<td>Subtotal</td>
									<td> <strong>C$ {{total_subt | formatMoney(2)}}</strong></td>-->
								</tr>
								<tr>
									<td class="item-footer" colspan="5"> Total Unidades</td>
									<td  class="item-footer">
										<strong>{{total_cantidad_saliente}}</strong>
									</td>
									<td  class="item-footer">
										<strong>{{total_cantidad_despachada}}</strong>
									</td>
									<td  class="item-footer">
										<strong>{{total_cantidad_diferencia}}</strong>
									</td>
									<!--<td>Total</td>
									<td> <strong>C$ {{gran_total | formatMoney(2)}}</strong></td>-->
								</tr>

								</tfoot>
							</table>
						</div>
					</div>

					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'salidas' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button
								:disabled="btnAction2 !== 'Guardar Cambios'"
								@click="guardarCambios"
								class="btn btn-primary"
								type="button"
						>{{ btnAction2 }}</button>
						<button
								:disabled="btnAction !== 'Despachar Productos'"
								@click="despachar"
								class="btn btn-success"
								type="button"
						>{{ btnAction }}</button>
					</div>

					<br>

					<template v-if="form.contiene_baterias">
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

							<!--<div class="col-sm-3">
								<div class="form-group">
									<label for>&nbsp;</label>
									<button  @click="buscarBateria" class="btn btn-info btn-agregar" ref="agregar">Agregar Batería</button>
								</div>
							</div>-->

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
										<th> Opciones</th>
									</tr>
									</thead>
									<tbody>
									<template v-for="(item, index) in filteredItems">
										<template v-if="item.estado===1">
										<tr>
											<td style="width: 2%">
												<button @click="eliminarLinea(item, index)">
													<i class="fa fa-trash"></i>
												</button>
											</td>
											<td>
												<input class="form-control" disabled v-model="item.descripcion">
												<ul class="error-messages">
													<li
															:key="message"
															v-for="message in errorMessages[`detalle_baterias.${index}.id_producto`]"
															v-text="message">
													</li>
												</ul>
											</td>
											<td>
												<input  disabled  class="form-control" v-model="item.codigo_garantia">
												<ul class="error-messages">
													<li
															:key="message"
															v-for="message in errorMessages[`detalle_baterias.${index}.codigo_garantia`]"
															v-text="message">
													</li>
												</ul>
											</td>
											<td class="text-center">
												<div v-if="item.registrada">
													<i v-tooltip="'Bateria registrada'" aria-hidden="true" class="fa fa-check" :style="'color:green;'">  Guardada</i>
												</div>
												<div v-else>
													<!--<i @click="registrarBateria(item)" v-tooltip="'Registrar bateria manualmente'"
                                                       aria-hidden="true" class="fa fa-save" :style="'color:blue;'"></i>-->
													<i @click="registrarBateria(item)" v-tooltip="'Registrar bateria manualmente'" aria-hidden="true" class="fa fa-save" :style="'color:blue;'">{{item.guardadoEnProgreso?'  Guardando....':'  Pendiente'}}</i>
												</div>
											</td>
										</tr>
										</template>
									</template>
									</tbody>
									<tfoot>
									</tfoot>
								</table>
								<br>

								<div class="col-sm-12">
									<div class="form-group">
										<button  @click="cambiarPaginacion(-999)" class="btn btn-info btn-agregar" >Mostrar Primeros 10</button>
										<button  @click="cambiarPaginacion(10)" class="btn btn-primary btn-agregar" >Mostrar Más</button>
										<button  @click="cambiarPaginacion(-10)" class="btn btn-danger btn-agregar" >Mostrar Menos</button>
										<button  @click="cambiarPaginacion(999)" class="btn btn-info btn-agregar" >Mostrar Todos</button>
									</div>
								</div>
							</div>

						</div>


					</template>


				<template v-if="loading">
					<BlockUI :message="msg" :url="url"></BlockUI>
				</template>


				</div>
			</div>
		</div>


	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue'
	import salida from "../../api/salidas";
	import bateria from "../../api/baterias";
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import BlockUI from 'vue-blockui'
	Vue.use(BlockUI);
	export default {
		data() {
			return {
				loading:false,
				msg: 'Cargando el contenido espere un momento',
				url : '',   //It is important to import the loading image then use here
				inicio_paginacion:0,
				limite_paginacion:10,
				bateriasBusquedaURL: "/productos/baterias/buscar",
				es: es,
				format: "dd-MM-yyyy",
				detalleForm:{
					productox: {},
				},
				productos: [],
				detalle_baterias: [],
				form: {
					contiene_baterias: false,
					codigo_salida: "",
					fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
					salida_tipo: "",
					salida_proveedor: "",
					salida_bodega: "",
					salida_productos: [],
					no_remision:'',
					descripcion_salida:''
				},
				btnAction: "Despachar Productos",
				btnAction2: "Guardar Cambios",
				errorMessages: []
			};
		},
			computed: {
				filteredItems: function () {
					if(this.detalle_baterias){
						return this.detalle_baterias.slice(this.inicio_paginacion, this.limite_paginacion)
					}
				},

				total_cantidad_saliente() {
					return this.form.salida_productos.reduce((carry, item) => {
						return (carry + Number(item.cantidad_saliente))
					}, 0)
				},
				total_cantidad_despachada() {
					return this.form.salida_productos.reduce((carry, item) => {
						return (carry + Number(item.cantidad_despachada))
					}, 0)
				},
				total_cantidad_diferencia() {
					return this.form.salida_productos.reduce((carry, item) => {
						return (carry + Number(item.cantidad_saliente-item.cantidad_despachada))
					}, 0)
				},
				total_subt() {
					return this.form.salida_productos.reduce((carry, item) => {
								return(carry + Number(item.subtotal.toFixed(2)));
							}
							, 0)
				},
				gran_total() {
					return this.form.salida_productos.reduce((carry, item) => {
								return (carry + Number(item.total.toFixed(2)));
							}
							, 0)
				},
			},
			methods: {
				calcularConversion(itemX) {
					itemX.conversionx= Number((Number(itemX.cantidad_despachada)* Number(itemX.escalar)).toFixed(2));
					if(!isNaN(itemX.conversionx)){
						return itemX.conversionx;
					}
					else return 0;
				},
				cambiarPaginacion(limite){

					var self = this;
					if(self.detalle_baterias.length>=1){
						if(limite === 999){//mostrar todos
							self.inicio_paginacion=0;
							self.limite_paginacion=self.detalle_baterias.length;
						}else if(limite === -999){
							self.inicio_paginacion=0;
							self.limite_paginacion=10;
						}else{
							self.inicio_paginacion=0;
							self.limite_paginacion=self.limite_paginacion+limite;
						}
					}

				},

				buscarBateria() {
					var self = this;
					self.loading = true;
					var estado_busqueda = 1;
					let cod_bat = self.detalleForm.bateria_busqueda;
					self.detalleForm.bateria_busqueda='';
					var existeCodigoGarantia=false;

					//console.log(self.detalleForm.codigo_garantiax.toUpperCase());

					self.detalle_baterias.forEach((bateriax, key) => {
						if(cod_bat.toUpperCase() === bateriax.codigo_garantia.toUpperCase()){
							existeCodigoGarantia=true;
						}
					});
					if(!existeCodigoGarantia) {
						estado_busqueda = self.form.condicion_productos;
						//self.$refs.precio_unitario.focus();
						bateria.buscarCodigo({
							codigo_bateria: cod_bat,
							id_bodega: self.form.salida_bodega.id_bodega,
							reservada: false,
							estado: estado_busqueda
						}, data => {
							if (data !== null) {
								self.detalleForm.productox = data;
								//self.$refs.agregar.click()

								self.agregarDetalle();


								self.detalleForm.productox = '';
								self.$refs.bateria.focus();

							} else {
								alertify.warning("No se encuentra esta batería.", 5);
								//self.detalleForm.bateria_busqueda = '';
								self.$refs.bateria.focus();
								self.detalleForm.productox = '';
							}
							self.loading = false;
						}, err => {
							if (err.codigo_bateria) {
								//self.detalleForm.bateria_busqueda = '';
								self.$refs.bateria.focus();
								alertify.warning("No se encuentra esta batería.", 5);
								self.detalleForm.productox = '';
							}
							self.loading = false;
						})
					}else{
						self.loading = false;
						self.$refs.bateria.focus();
						//self.detalleForm.codigo_garantia='';
						alertify.warning("Ya existe ese código de garantía.",5);
					}
				},

				/*seleccionarProducto(e) {
					const productoP = e.target.value;
					var self = this;
					self.detalleForm.productox = productoP;
					this.$refs.fecha_activacion.focus();
				},*/

				agregarDetalle() {
					var self = this;
					if(self.detalleForm.productox){
						let existeCodigoGarantia= false;
						let existeProducto= false;
						let estadoExistente=0;
						self.detalle_baterias.forEach((bateriax, key) => {
							if(self.detalleForm.productox.id_bateria===bateriax.id_bateria){
								existeCodigoGarantia=true;
								estadoExistente=bateriax.estado;
							}
						});

						if(self.form.salida_productos){
							self.form.salida_productos.forEach((productox, key) => {
								if(self.detalleForm.productox.id_producto===productox.bodega_producto.id_producto){
									existeProducto=true;
								}
							});
						}

						if(existeProducto){
							if(!existeCodigoGarantia){
								let keyx = 0;
								if(self.form.salida_productos){
									self.form.salida_productos.forEach((productox, key) => {
										if(self.detalleForm.productox.id_producto===productox.bodega_producto.id_producto){
											keyx = key;
										}
									});
								}

								if((self.form.salida_productos[keyx].cantidad_despachada + 1) <= self.form.salida_productos[keyx].cantidad_saliente){
									self.form.salida_productos[keyx].cantidad_despachada++;
									this.detalle_baterias.unshift({
										estado:1,
										id_producto: self.detalleForm.productox.id_producto,
										id_salida_producto_bateria: 0,
										productox: this.detalleForm.productox,
										id_bateria: this.detalleForm.productox.id_bateria,
										codigo_garantia: this.detalleForm.productox.codigo_garantia,
										id_salida_producto: 0,
										id_salida: this.form.id_salida,
										descripcion: this.detalleForm.productox.bateria_producto.descripcion,
										registrada:false,
										guardadoEnProgreso: false
									});
									alertify.success("Batería agregada!",5);


									if(self.cantidad_sin_registrar()>=5){
										self.detalle_baterias.forEach((bateriax, key) => {
											if(!bateriax.registrada){
												self.registrarBateria(bateriax)
											}
										});
									}
									self.cantidad_sin_registrar();


								}else{
									alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
								}
							}else{
								if(!estadoExistente){
									alertify.warning("Ya existe ese código de batería en el listado",5);
								}else{

								}
							}
						}else{
							alertify.warning("El código de esta batería pertenece a un producto que no existe en la salida",5);
						}
						this.detalleForm.productox={};
						self.$refs.bateria.focus();
					}else{
						alertify.warning("Debe seleccionar un producto",5);
					}
				},

				cantidad_sin_registrar() {
					var self = this;
					if(self.detalle_baterias){
						let i = 0;

						self.detalle_baterias.forEach((bateriax, key) => {
							if(!bateriax.registrada && !bateriax.guardadoEnProgreso){
								i++;
							}
						});

						self.total_pendientes = i;

						return self.total_pendientes
					}else{
						return 0;
					}
				},
				eliminarLinea(item, index) {
					var self = this;
					if (this.detalle_baterias.length >= 1) {

						let keyx = -1;
						if(self.form.salida_productos){
							self.form.salida_productos.forEach((productox, key) => {
								if(item.id_producto===productox.bodega_producto.id_producto){
									keyx = key;
								}
							});
						}
						self.form.salida_productos[keyx].cantidad_despachada--;
						if(this.detalle_baterias[index].id_salida_producto_bateria){
							this.detalle_baterias[index].estado = 0;
							this.detalle_baterias[index].registrada = false;
						}else{
							this.detalle_baterias.splice(index, 1);
						}


					}else{
						this.detalle_baterias=[];
					}
				},

				
				calcular_diferencia(solicitado,recibido) {
					let diff = solicitado - recibido;
					if(!isNaN(diff) && diff > 0){
						return diff;
					}
					else return 0;
				},
				obtenerSalida() {
					var self = this
					self.loading = true;
					salida.obtenerSalida({
						id_salida: this.$route.params.id_salida
					}, data => {
						self.form = data.salida;
						if(data.productos.length){
							self.form.contiene_baterias = true;
						}else{
							self.form.contiene_baterias = false;
						}

						self.form.salida_productos.forEach((salidabatex, key) => {
							//console.log(salidabatex);

							if((salidabatex.bodega_producto.producto_simple.tipo_producto===3
									&& salidabatex.bodega_producto.producto_simple.condicion===1
									&& salidabatex.bodega_producto.producto_simple.producto_detalles_baterias.id_submarca!==7)){

							self.form.salida_productos[key].cantidad_despachada=0;
							salidabatex.salida_producto_baterias.forEach((batesx, key2) => {
								self.form.salida_productos[key].cantidad_despachada=self.form.salida_productos[key].cantidad_despachada+1;
								//console.log(batesx);
								this.detalle_baterias.push({
									estado:1,
									id_salida_producto_bateria: batesx.id_salida_producto_bateria,
									productox: {id_bateria:batesx.id_bateria,id_producto:salidabatex.bodega_producto.id_producto},
									id_bateria: batesx.id_bateria,
									codigo_garantia: batesx.bateria.codigo_garantia,
									id_salida_producto: batesx.id_salida_producto,
									id_salida: this.form.id_salida,
									descripcion: salidabatex.descripcion_producto,
									id_producto: salidabatex.bodega_producto.id_producto,
									registrada:true,
									guardadoEnProgreso: false
								});
							});
							}
						});


						if(self.form.estado !== 1 && self.form.estado !== 99){
							alertify.error("La salida ya no puede ser despachada",5);
							this.$router.push({
								name: "salidas"
							});
						}
						this.loading=false;
					});
				},
				sub_total(itemX) {
					itemX.subtotal= Number((Number(itemX.precio_unitario)* Number(itemX.cantidad_saliente)).toFixed(2));
					itemX.total =itemX.subtotal;
					if(!isNaN(itemX.total)){
						return itemX.total;
					}
					else return 0;
				},

				guardarCambios() {
					var self = this;
						self.loading=true;
						self.form.detalle_baterias = self.detalle_baterias;
						self.btnAction = "Registrando, espere....";
						self.btnAction2 = "Registrando, espere....";

						if(self.form.estado === 99 || self.form.estado === 1) {

									salida.guardar(
											self.form,
											data => {
											alertify.success('Cambios guardados correctamente');
											self.btnAction = "Despachar Productos";
												self.btnAction2 = "Guardar Cambios";

												self.detalle_baterias.forEach((bateriax, key) => {
													self.detalle_baterias[key].registrada=true;
												});
											self.loading=false;
											},

											err => {
												self.errorMessages = err;
												self.btnAction = "Despachar Productos";
												self.btnAction2 = "Guardar Cambios";
												self.loading=false;
											}
									);

						}else{
							alertify.error("La salida ya no puede ser despachada",5);
							this.$router.push({
								name: "salidas"
							});
						}

				},

				despachar() {
					var self = this;
					if(self.total_cantidad_despachada === self.total_cantidad_saliente){
					self.form.detalle_baterias = self.detalle_baterias;
					self.btnAction = "Registrando, espere....";
						self.btnAction2 = "Registrando, espere....";
						if(self.form.estado === 1 || self.form.estado===99) {


							self.$swal.fire({
								title: 'Esta seguro de confirmar el despacho de la salida?',
								text: "Esta acción no se puede deshacer",
								type: 'warning',
								showCancelButton: true,
								confirmButtonColor: '#3085d6',
								cancelButtonColor: '#d33',
								confirmButtonText: 'Si, confirmar',
								cancelButtonText:'Cancelar'
							}).then((result) => {
								if (result.value) {
									salida.despachar(
											self.form,
											data => {
												this.$swal.fire(
														'Salida ha sido despachada exitosamente!',
														'La Salida fue despachada correctamente.',
														'success'
												)
												this.$router.push({
													name: "salidas"
												});
											},
											err => {
												self.errorMessages = err;
												self.btnAction = "Despachar Productos";
												self.btnAction2 = "Guardar Cambios";
											}
									);
								}else{
									self.btnAction = "Despachar Productos";
									self.btnAction2 = "Guardar Cambios";
								}
							})

						}else{
							alertify.error("La salida ya no puede ser despachada",5);
							this.$router.push({
								name: "salidas"
							});
						}
					}else{
						alertify.error("Se debe despachar la misma cantidad que fue solicitada",5);
					}
				},

				registrarBateria(bateria) {
					var self = this;
					if(!self.registrandoBateria && !bateria.registrada /*&& bateria.estado===1*/){
						//self.registrandoBateria = true;
						bateria.guardadoEnProgreso = true;
						//console.log(bateria);
						salida.registrarBateria(
								{
									id_salida:self.form.id_salida,
									id_bateria:bateria.id_bateria,
									id_producto:bateria.id_producto,
									id_bodega:self.form.id_bodega,
									id_salida_producto_bateria:bateria.id_salida_producto_bateria,
									estado:	bateria.estado,
								},
								data => {
									//self.form = data.orden;
									bateria.registrada  = true;
									bateria.id_salida_producto_bateria = data.id_salida_producto_bateria;
									//self.registrandoBateria = false;
									bateria.guardadoEnProgreso = false;
								},
								err => {
									bateria.registrada  = false;
									console.log(err);
									//self.registrandoBateria = false;
									bateria.guardadoEnProgreso = false;
								}
						);
					}
				},

			},
			mounted() {
				//this.loading=true;
				this.obtenerSalida();

			},
	};
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>