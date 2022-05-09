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
									<th >Cantidad Saliente</th>
									<th >Cantidad Despachada</th>
									<th >Diferencia</th>
								<!--	<th >Precio Unitario</th>
									<th >SubTotal</th>-->

								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in form.salida_productos">
									<tr>
										<td>
											<input class="form-control" disabled v-model="item.descripcion_producto">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`salida_productos.${index}.id_producto`]"
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
									<td class="item-footer"> Total Unidades</td>
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
								:disabled="btnAction !== 'Despachar Productos'"
								@click="despachar"
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
				btnAction: "Despachar Productos",
				errorMessages: []
			};
		},
			computed: {

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

				buscarBateria() {
					var self = this;
					self.loading = true;
					var estado_busqueda = 1; //disponibles(nuevas)
					if(self.form.id_tipo_salida === 11 && self.form.salida_bodega.id_tipo_bodega === 4){
						estado_busqueda=3;
					}else if(self.form.id_tipo_salida === 13){
						estado_busqueda=8;
					}else if(self.form.id_tipo_salida === 14){
						estado_busqueda=6;
					}
					estado_busqueda=self.form.condicion_productos;
					//self.$refs.precio_unitario.focus();
					bateria.buscarCodigo({
						codigo_bateria: self.detalleForm.bateria_busqueda,
						//id_bodega: self.form.salida_bodega.id_bodega,
						id_bodega: 0,
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

								if((self.form.salida_productos[keyx].cantidad_despachada + 1) <= self.form.salida_productos[keyx].cantidad_saliente){
									self.form.salida_productos[keyx].cantidad_despachada++;
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
						self.form.salida_productos[keyx].cantidad_despachada--;
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
						self.form = data.salida
						if(data.productos.length){
							self.form.contiene_baterias = true;
						}else{
							self.form.contiene_baterias = false;
						}

						if(self.form.estado !== 1){
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

				despachar() {
					var self = this;
					if(self.total_cantidad_despachada === self.total_cantidad_saliente){
					self.form.detalle_baterias = self.detalle_baterias;
					self.btnAction = "Registrando, espere....";
						if(self.form.estado === 1) {


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
											}
									);
								}else{
									self.btnAction = "Despachar Productos";
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