<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Recibir Entrada</div>
						<div class="box-description">Formulario para recibir entrada de productos</div>
					</div>
					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Tipo entrada</label>
								<input class="form-control" readonly type="text" v-model="form.entrada_tipo.descripcion">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.entrada_tipo"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Código entrada <small>(Automático)</small></label>
								<input class="form-control" readonly type="text" v-model="form.codigo_entrada">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.codigo_entrada"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Bodega</label>
								<input class="form-control" readonly type="text" v-model="form.entrada_bodega.descripcion">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.entrada_bodega" v-text="message"></li>
								</ul>
							</div>
						</div>
						<!--<div class="col-sm-3">
							<div class="form-group">
								<label for>Zona de costo</label>
								<input class="form-control" readonly type="text" v-model="form.entrada_zona.descripcion">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.entrada_zona" v-text="message"></li>
								</ul>
							</div>
						</div>-->
						<div class="col-sm-3 form-group">
							<label >Zona de costo</label>
							<v-select
									:disabled="false"
									v-model="form.entrada_zona"
									label="descripcion"
									:options="zonas"
							></v-select>
							<ul class="error-messages">
								<li v-for="message in errorMessages.origen" :key="message" v-text="message"></li>
							</ul>
						</div>
						<template v-if="form.entrada_proveedor">
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Proveedor</label>
								<input class="form-control" readonly type="text" v-model="form.entrada_proveedor.nombre_comercial">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.entrada_proveedor" v-text="message"></li>
								</ul>
							</div>
						</div>
						</template>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha entrada</label>
								<input class="form-control" readonly type="text" v-model="form.fecha_entrada">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.fecha_entrada"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha recepción</label>
								<datepicker :format="format" :language="es" :value="new Date()" v-model="form.fecha_recepcionx" @selected="onDateSelect"></datepicker>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.fecha_recepcion"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Orden de compra</label>
								<input type="text" class="form-control" v-model="form.orden_compra">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.orden_comra"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Factura</label>
								<input type="text" class="form-control" v-model="form.no_factura">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.no_factura"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>No. lote</label>
								<input type="text" class="form-control" v-model="form.no_lote">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.no_lote"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<label for>Observaciones entrada</label>
								<input class="form-control" type="text" v-model="form.descripcion_entrada">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.descripcion_entrada"
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
										v-for="message in errorMessages.entrada_productos"
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
									<th >Cantidad Solicitada</th>
									<th >Cantidad Recibida</th>
									<th >Diferencia</th>
									<th >Total</th>
									<!--<th >Precio Unitario</th>
									<th >SubTotal</th>-->
								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in form.entrada_productos">
									<tr>
										<td>
											<input class="form-control" disabled v-model="item.text">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_productos.${index}.text`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input class="form-control" disabled type="text" v-model="item.codigo_presentacion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_productos.${index}.codigo_presentacion`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input class="form-control" disabled type="text" v-model="item.entrada_presentacion.unidad_medida">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_presentacion.${index}.unidad_medida`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input class="form-control" disabled type="text" v-model="item.entrada_presentacion.escalar">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_presentacion.${index}.escalar`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input class="form-control" disabled type="text" v-model="item.entrada_presentacion.simbolo_um">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_presentacion.${index}.escalar`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input class="form-control" disabled type="number" v-model.number="item.cantidad_solicitada">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_productos.${index}.cantidad_solicitada`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input :disabled="(item.bodega_producto.producto_simple.tipo_producto===3  && item.bodega_producto.producto_simple.condicion===1&& item.bodega_producto.producto_simple.producto_detalles_baterias.id_submarca!==7)" @change="item.cantidad_recibida = Math.max(Math.min(Math.round(item.cantidad_recibida), item.cantidad_solicitada), 1)" class="form-control" type="number" v-model.number="item.cantidad_recibida">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_productos.${index}.cantidad_recibida`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td>
											{{calcular_diferencia(item.cantidad_solicitada,item.cantidad_recibida)}}
										</td>
										<td>
											<strong>{{calcularConversion(item)|formatMoney(2)}}</strong>
										</td>


										<!--<td>
											<input class="form-control" disabled type="number" v-model.number="item.precio_unitario">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_productos.${index}.precio_unitario`]"
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
										<strong>{{total_cantidad_solicitada}}</strong>
									</td>
									<td  class="item-footer">
										<strong>{{total_cantidad_recibida}}</strong>
									</td>
									<td ></td>
									<!--<td>Total</td>
									<td> <strong>C$ {{gran_total | formatMoney(2)}}</strong></td>-->
								</tr>

								</tfoot>
							</table>
						</div>
					</div>
<br>



<div class="content-box-footer text-right">
						<router-link :to="{ name: 'entradas' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button
								:disabled="btnAction !== 'Recibir Productos'"
								@click="confirmar"
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
	import entrada from "../../api/entradas";
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import bateria from "../../api/baterias";
	import Vue from 'vue'
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
				detalle_baterias: [],
				form: {
					contiene_baterias: false,
					codigo_entrada: "",
					fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
					fecha_recepcion: moment(new Date()).format("YYYY-MM-DD"),
					fecha_recepcionx: new Date(),
					entrada_tipo: "",
					entrada_proveedor: "",
					entrada_bodega: "",
					entrada_zona: "",
					entrada_productos: [],
				},
				zonas:[],
				btnAction: "Recibir Productos",
				errorMessages: []
			};
		},
		computed: {

			total_cantidad_solicitada() {
				return this.form.entrada_productos.reduce((carry, item) => {
					return (carry + Number(item.cantidad_solicitada))
				}, 0)
			},
			total_cantidad_recibida() {
				return this.form.entrada_productos.reduce((carry, item) => {
					return (carry + Number(item.cantidad_recibida))
				}, 0)
			},
			total_subt() {
				return this.form.entrada_productos.reduce((carry, item) => {
							return(carry + Number(item.subtotal.toFixed(2)));
						}
						, 0)
			},
			gran_total() {
				return this.form.entrada_productos.reduce((carry, item) => {
							return (carry + Number(item.total.toFixed(2)));
						}
						, 0)
			},
		},
		methods: {
			onDateSelect(date) {
				//console.log(date); //
				this.form.fecha_recepcion = moment(date).format("YYYY-MM-DD"); //
			},
			calcularConversion(itemX) {
				itemX.conversionx= Number((Number(itemX.cantidad_recibida)* Number(itemX.escalar)).toFixed(2));
				if(!isNaN(itemX.conversionx)){
					return itemX.conversionx;
				}
				else return 0;
			},

			confirmar(){
				this.$swal.fire({
					title: 'Esta seguro de confirmar la recepción de la entrada?',
					text: "Revise bien los datos, esta acción no se puede deshacer.",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						this.recibir();
					}
				})
			},

			buscarBateria() {
				var self = this;
				self.loading = true;
				var estado_busqueda = 1; //En transito
				let bodegax = 0;

				if(self.form.id_salida){
					bodegax = self.form.entrada_salida_bodega.id_bodega;
				}

				/*if(self.form.id_tipo_entrada === 5){
					estado_busqueda = 3; //en garantia
				}*/
				estado_busqueda = self.form.condicion_productos;

				//self.$refs.precio_unitario.focus();
				bateria.buscarCodigo({
					codigo_bateria: self.detalleForm.bateria_busqueda,
					id_bodega: bodegax,
					reservada:true,
					estado: estado_busqueda
				}, data => {
					if(data !== null){
						self.detalleForm.productox = data;
						self.$refs.agregar.click()
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

			obtenerEntrada() {
				var self = this
				entrada.obtenerEntrada({
					id_entrada: this.$route.params.id_entrada
				}, data => {
					this.loading=false;
					self.form = data.entrada;
					self.zonas = data.zonas;
					//console.log(data.traslados);

					if(data.productos.length){
						self.form.contiene_baterias = true;
						self.detalle_baterias = data.traslados;


						data.entrada.entrada_productos.forEach((productox, key1) => {
							//console.log(productox)
							self.detalle_baterias.forEach((bateriax, key2) => {
								if(productox.bodega_producto.id_producto===bateriax.id_producto){
									self.form.entrada_productos[key1].cantidad_recibida++;
								}
							});
						});


					}else{
						self.form.contiene_baterias = false;
					}
					/*data.entrada.productos.forEach((productox, key) => {
						if(self.detalleForm.productox.id_producto===productox.bodega_producto.id_producto){
							existeProducto=true;
						}
					});*/

					//self.detalle_baterias = data.entrada.entrada_productos
					if(self.form.estado !== 1){
						alertify.error("La entrada no puede ser recibida",5);
						this.$router.push({
							name: "entradas"
						});
					}
				})
			},
			sub_total(itemX) {
				itemX.subtotal= Number((Number(itemX.precio_unitario)* Number(itemX.cantidad_solicitada)).toFixed(2));
				itemX.total =itemX.subtotal;
				if(!isNaN(itemX.total)){
					return itemX.total;
				}
				else return 0;
			},

			agregarDetalle() {
				var self = this;
				if(self.detalleForm.productox){
						let existeCodigoGarantia= false;
						let existeProducto= false;
						self.detalle_baterias.forEach((bateriax, key) => {
							if(self.detalleForm.productox.id_bateria===bateriax.id_bateria){
							existeCodigoGarantia=true;
							}
						});

					if(self.form.entrada_productos){
						self.form.entrada_productos.forEach((productox, key) => {
							if(self.detalleForm.productox.id_producto===productox.bodega_producto.id_producto){
								existeProducto=true;
							}
						});
					}

					if(existeProducto){
						if(!existeCodigoGarantia){
						let keyx = 0;
						if(self.form.entrada_productos){
							self.form.entrada_productos.forEach((productox, key) => {
								if(self.detalleForm.productox.id_producto===productox.bodega_producto.id_producto){
									keyx = key;
								}
							});
						}

						if((self.form.entrada_productos[keyx].cantidad_recibida + 1) <= self.form.entrada_productos[keyx].cantidad_solicitada){
							self.form.entrada_productos[keyx].cantidad_recibida++;
							this.detalle_baterias.push({
								//productox: this.detalleForm.productox
								codigo_barra:this.detalleForm.productox.codigo_barras,
								descripcion:this.detalleForm.productox.bateria_producto.descripcion,
								id_producto:this.detalleForm.productox.id_producto,
								id_bateria:this.detalleForm.productox.id_bateria,
								text:this.detalleForm.productox.codigo_garantia,
							});
							alertify.success("Batería agregada!",5);
						}else{
							alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
						}
						}else{
							alertify.warning("Ya existe ese código de batería en el listado",5);
						}
					}else{
						alertify.warning("El código de esta batería pertenece a un producto que no existe en la entrada",5);
					}
					this.detalleForm.productox={};
					this.$refs.bateria.focus();
				}else{
					alertify.warning("Debe seleccionar un producto",5);
				}
			},

			eliminarLinea(item, index) {
				var self = this;
				if (this.detalle_baterias.length >= 1) {

					let keyx = 0;
					if(self.form.entrada_productos){
						self.form.entrada_productos.forEach((productox, key) => {
							if(item.id_producto===productox.bodega_producto.id_producto){
								keyx = key;
							}
						});
					}
						self.form.entrada_productos[keyx].cantidad_recibida--;
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
			recibir() {
				var self = this;
				if(self.total_cantidad_recibida > 0){
					self.form.detalle_baterias = self.detalle_baterias;
					self.btnAction = "Registrando, espere....";
					if(self.form.estado === 1) {
						entrada.recibir(
								self.form,
								data => {
									//alertify.success("La entrada fue recibida correctamente",5);
									this.$swal.fire(
											'Entrada Recibida!',
											'La entrada fue Recibida correctamente.',
											'success'
									)
									this.$router.push({
										name: "entradas"
									});
								},
								err => {
									alertify.error(err,10);
									self.errorMessages = err;
									self.btnAction = "Recibir Productos";
								}
						);
					}else{
						alertify.error("La entrada ya no puede ser recibida",5);
						this.$router.push({
							name: "entradas"
						});
					}
				}else{
					alertify.error("Se debe recibir al menos un producto",5);
				}
			}
		},
		mounted() {
			this.loading=true;
			this.obtenerEntrada();
		}
	};
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>