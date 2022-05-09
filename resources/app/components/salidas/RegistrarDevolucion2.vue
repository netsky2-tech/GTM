<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Devolución de Salida tipo {{form.salida_tipo.descripcion}}</div>
						<div class="box-description">Formulario para registrar devolución de productos</div>
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
								<label for>Bodega Origen</label>
								<input class="form-control" readonly type="text" v-model="form.salida_bodega.descripcion">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.salida_bodega" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Bodega Destino</label>
								<v-select
										label="descripcion"
										v-model="form.bodega"
										:options="bodegas"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
								</ul>
							</div>
						</div>
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
									<th >Cantidad despachada</th>
									<th >Cantidad devuelta</th>
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
											<input class="form-control" disabled v-model="item.codigo_presentacion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_productos.${index}.id_producto`]"
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
											<input disabled
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
											<input :disabled="(item.bodega_producto.producto_simple.tipo_producto===3 && item.bodega_producto.producto_simple.condicion===1&& item.bodega_producto.producto_simple.producto_detalles_baterias.id_submarca!==7)"
													@change="item.cantidad_devuelta = Math.max(Math.min(Math.round(item.cantidad_devuelta), item.cantidad_despachada), 0)" class="form-control" type="number" v-model.number="item.cantidad_devuelta">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_productos.${index}.cantidad_devuelta`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											{{calcular_diferencia(item.cantidad_despachada,item.cantidad_devuelta)}}
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
									<td colspan="4"></td>
									<!--<td>Subtotal</td>
									<td> <strong>C$ {{total_subt | formatMoney(2)}}</strong></td>-->
								</tr>
								<tr>
									<td class="item-footer" colspan="5"> Total Unidades</td>
									<td  class="item-footer">
										<strong>{{total_cantidad_despachada}}</strong>
									</td>
									<td  class="item-footer">
										<strong>{{total_cantidad_devuelta}}</strong>
									</td>
									<td  class="item-footer">
										<strong>{{total_cantidad_diferencia}}</strong>
									</td>
									<td  class="item-footer">
										<strong>{{total_conversion()|formatMoney(2)}}</strong>
									</td>
									<!--<td>Total</td>
									<td> <strong>C$ {{gran_total | formatMoney(2)}}</strong></td>-->
								</tr>

								</tfoot>
							</table>
						</div>
					</div>


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
									</tr>
									</thead>
									<tbody>
									<template v-for="(item, index) in detalle_baterias">
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


					</template>


					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'salidas' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button
								:disabled="btnAction !== 'Recibir Devolución'"
								@click="registrarDevolucion"
								class="btn btn-primary"
								type="button"
						>{{ btnAction }}</button>
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
				bodegas: [],
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
					salida_productos: []
				},
				btnAction: "Recibir Devolución",
				errorMessages: []
			};
		},
			computed: {

				total_cantidad_despachada() {
					return this.form.salida_productos.reduce((carry, item) => {
						return (carry + Number(item.cantidad_despachada))
					}, 0)
				},
				total_cantidad_devuelta() {
					//console.log(this.form.salida_productos);
					return this.form.salida_productos.reduce((carry, item) => {
						//console.log(item);
						return (carry + Number(item.cantidad_devuelta))
					}, 0)
				},
				total_cantidad_diferencia() {
					return this.form.salida_productos.reduce((carry, item) => {
						return (carry + Number(item.cantidad_despachada-item.cantidad_devuelta))
					}, 0)
				},

			},
			methods: {
				total_conversion() {
					return this.form.salida_productos.reduce((carry, item) => {
								return (carry + Number(item.conversionx.toFixed(2)));
							}
							, 0)
				},
				calcularConversion(itemX) {
					itemX.conversionx= Number((Number(itemX.cantidad_devuelta)* Number(itemX.escalar)).toFixed(2));
					if(!isNaN(itemX.conversionx)){
						return itemX.conversionx;
					}
					else return 0;
				},

				buscarBateria() {
					var self = this;
					self.loading = true;
					//self.$refs.precio_unitario.focus();
					bateria.buscarCodigo({
						codigo_bateria: self.detalleForm.bateria_busqueda,
						id_bodega: 0,
						reservada:false,
						estado: 7
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
						if(err.codigo_bateria){
							self.detalleForm.bateria_busqueda = '';
							self.$refs.bateria.focus();
							alertify.warning("No se encuentra esta batería.",5);
							self.detalleForm.productox = '';
						}
						self.loading = false;
					})

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
						self.detalle_baterias.forEach((bateriax, key) => {
							if(self.detalleForm.productox.id_bateria===bateriax.productox.id_bateria){
								existeCodigoGarantia=true;
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

								if((self.form.salida_productos[keyx].cantidad_devuelta + 1) <= self.form.salida_productos[keyx].cantidad_saliente){
									self.form.salida_productos[keyx].cantidad_devuelta++;
									this.detalle_baterias.push({
										productox: this.detalleForm.productox
									});
									alertify.success("Batería agregada!",5);
								}else{
									alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
								}
							}else{
								alertify.warning("Ya existe ese código de batería en el listado",5);
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

				eliminarLinea(item, index) {
					var self = this;
					if (this.detalle_baterias.length >= 1) {

						let keyx = 0;
						if(self.form.salida_productos){
							self.form.salida_productos.forEach((productox, key) => {
								if(item.productox.id_producto===productox.bodega_producto.id_producto){
									keyx = key;
								}
							});
						}
						self.form.salida_productos[keyx].cantidad_devuelta--;
						this.detalle_baterias.splice(index, 1);

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
						data.salida.salida_productos.forEach((productox, key) => {
							data.salida.salida_productos[key].cantidad_devuelta = 0;
						});
						self.form = data.salida
						self.bodegas = data.bodegas_dev;
						if(self.form.estado === 2){
						if(data.productos.length){
							self.form.contiene_baterias = true;
						}else{
							self.form.contiene_baterias = false;
						}

						this.loading=false;
						}else{
							alertify.error("La salida no ha sido despachada",5);
							this.$router.push({
								name: "salidas"
							});
						}
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

				registrarDevolucion() {
					var self = this;
					if(self.total_cantidad_devuelta>0){
					self.form.detalle_baterias = self.detalle_baterias;
					self.btnAction = "Registrando, espere....";
						if(self.form.estado === 2 && (self.form.id_tipo_salida===7 || self.form.id_tipo_salida===1)) {
							self.$swal.fire({
								title: 'Esta seguro de confirmar la devolución de productos de esta salida?',
								text: "Revise detenidamente los datos",
								type: 'warning',
								showCancelButton: true,
								confirmButtonColor: '#3085d6',
								cancelButtonColor: '#d33',
								confirmButtonText: 'Si, confirmar',
								cancelButtonText:'Cancelar'
							}).then((result) => {
								if (result.value) {
									salida.registrarDevolucion(
											self.form,
											data => {
												this.$swal.fire(
														'La devolución ha sido emitida exitosamente!',
														'Se ha registrado la entrada de productos.',
														'success'
												)
												this.$router.push({
													name: "salidas"
												});
											},
											err => {
												self.errorMessages = err;
												self.btnAction = "Recibir Devolución";
											}
									);
								}else{
									self.btnAction = "Recibir Devolución";
								}
							})

						}else{
							alertify.error("La salida ya no puede ser devuelta",5);
							this.$router.push({
								name: "salidas"
							});
						}
					}else{
						alertify.error("Se debe devolver por lo menos un producto",5);
					}
				}
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