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
								<v-select
										:options="tipos_entrada"
										label="descripcion"
										v-model="form.entrada_tipo"
								></v-select>
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
								<v-select
										:options="bodegas"
										label="descripcion"
										v-model="form.entrada_bodega"
										v-on:input="actualizar_listado_productos()"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.entrada_bodega"
										v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Zonas de costo</label>
								<v-select
										label="descripcion"
										v-model="form.entrada_zona"
										:options="zonas"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Proveedor</label>
								<v-select
										:options="proveedores"
										label="nombre_comercial"
										v-model="form.entrada_proveedor"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.entrada_proveedor"
										v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha entrada</label>
								<datepicker :format="format" :language="es" :value="new Date()"
											@selected="onDateSelect"></datepicker>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.fecha_entrada"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<!--<div class="col-sm-3">
                            <div class="form-group">
                                <label for>Número documento de entrada</label>
                                <input type="text" class="form-control" v-model="form.numero_documento">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.numero_documento"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>-->
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
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha fabricación</label>
								<datepicker :format="format" :language="es" :value="new Date()" v-model="form.fecha_fabricacionx"
											@selected="onDateSelectFab"></datepicker>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.fecha_fabricacion"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha vencimiento</label>
								<datepicker :format="format" :language="es" :value="new Date()" v-model="form.fecha_vencimientox"
											@selected="onDateSelectVen"></datepicker>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.fecha_vencimiento"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
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

					<div class="alert alert-success">
						<span><strong>Detalle de batería</strong></span>
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
									<th >UM Presentación</th>
									<th >Cantidad Solicitada</th>
									<th >Cantidad Recibida</th>
									<th >Diferencia</th>
									<!--<th >Precio Unitario</th>
									<th >SubTotal</th>-->
								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in form.entrada_productos">
									<tr>
										<td>
											<input class="form-control" disabled v-model="item.descripcion_producto">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_productos.${index}.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input class="form-control" disabled type="text" v-model.number="item.entrada_presentacion.unidad_medida">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_productos.${index}.cantidad_solicitada`]"
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
									<td class="item-footer" > Total Unidades</td>
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
	//import es from 'vuejs-datepicker/dist/locale/translations/es'
    import loadingImage from '../../assets/images/block50.gif'
	import es from "vuejs-datepicker/dist/locale/translations/es";
	import proveedor from "../../api/proveedores";
	import bodega from "../../api/bodegas";
	import tipo from "../../api/tipo_entrada";
	import producto from "../../api/productos";
	export default {
		/*components: {
			Multiselect
		},*/

		data() {
			return {
				//productoEntradaBusquedaURL: "/entradas/productos/buscar",
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				proveedores: [],
				tipos_entrada: [],
				productos: [],
				bodegas: [],
				zonas: [],
			 	mascaraCodigo:'X############',
				codigoAutomatico:false,
				contador : 1,
				es: es,
				format: "dd-MM-yyyy",
				productos: {},
				detalleForm:{
					fecha_activacion: '',
					productox: {},
					codigo_garantiax: ''
				},
				detalle_baterias: [],
				form: {
					contiene_baterias: false,
					codigo_entrada: "",
					fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
					fecha_fabricacion: moment(new Date()).format("YYYY-MM-DD"),
					fecha_vencimiento: moment(new Date()).format("YYYY-MM-DD"),
					fecha_fabricacionx: new Date(),
					fecha_vencimientox: new Date(),
					entrada_tipo: "",
					entrada_proveedor: "",
					entrada_bodega: "",
					entrada_productos: [],
				},
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

			cargar_detalles_producto() {
				var self = this
				//  console.log(self.detalleForm.productox)
				self.$refs.bateria.$refs.search.blur()
				self.$refs.codigo.focus();
				if(self.detalleForm.productox){
					if(self.detalleForm.productox.id_submarca === 7) {///Caso motobaterias (no tiene codigo de garantia)
						self.$refs.fecha_activacion.focus();
						self.codigoAutomatico = true;
						self.mascaraCodigo='XXXXXXXXXXXXXXXXXXXXXXX';
						self.detalleForm.codigo_garantiax = 'Código Automático '+ self.contador.toString();
						self.contador++;
						let old_activacion = self.detalleForm.codigo_garantiax;
						self.detalleForm.codigo_garantiax= '';
						self.detalleForm.codigo_garantiax= old_activacion;
					}else if(self.detalleForm.productox.id_submarca === 3){//Caso Cronos
						self.$refs.codigo.focus();
						self.detalleForm.codigo_garantiax ='';
						self.mascaraCodigo='X############';
						self.codigoAutomatico = false;

					}else{//casos lth
						self.$refs.codigo.focus();
						self.detalleForm.codigo_garantiax ='';
						self.mascaraCodigo='XXXXXXXXXXXXXXXXXXXXXXX';
						self.codigoAutomatico = false;
					}
				}
				//self.$refs.codigo.focus();
			},

			codigoGarantiaEvento() {
				var self = this;
				if(self.detalleForm.codigo_garantiax !== ''){
					//self.$refs.agregar.click()
					this.$refs.fecha_activacion.focus();
				}else{
					self.$refs.codigo.focus();
				}
			},

			fechaActivacionEvento() {
				var self = this;
				if(self.detalleForm.fecha_activacion !== ''){
					self.$refs.agregar.click()
				}else{
					self.$refs.fecha_activacion.focus();
				}
			},

			obtenerEntrada() {
				var self = this
				entrada.obtenerEntrada({
					id_entrada: this.$route.params.id_entrada
				}, data => {
					self.form = data.entrada;
					self.form.fecha_fabricacionx = data.entrada.fecha_fabricacion;
					self.form.fecha_vencimientox = data.entrada.fecha_vencimiento;
					self.form.contiene_baterias = data.productos.length>0;
					self.productos = data.productos;
					if(self.form.estado !== 1 && self.form.id_tipo_entrada !== 1 ){
						alertify.error("La entrada no puede ser recibida",5);
						this.$router.push({
							name: "entradas"
						});
					}
					self.loading=false;
				}, err => {
					console.log(err)
						alertify.error("Hubo un problema al cargar la información",5);
						this.$router.push({
							name: "entradas"
						});
				})
			},
			onDateSelect(date) {
				//console.log(date); //
				this.form.fecha_entrada = moment(date).format("YYYY-MM-DD"); //
			},
			onDateSelectFab(date) {
				//console.log(date); //
				this.form.fecha_fabricacion = moment(date).format("YYYY-MM-DD"); //
			},
			onDateSelectVen(date) {
				//console.log(date); //
				this.form.fecha_vencimiento = moment(date).format("YYYY-MM-DD"); //
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
					if(self.detalleForm.codigo_garantiax!=='' && self.detalleForm.fecha_activacion!==''){
						let existe= false;
						let validacion = true;
						self.detalle_baterias.forEach((bateriax, key) => {
							if(self.detalleForm.codigo_garantiax===bateriax.codigo_garantiax){
							existe=true;
							}
						});

						if(!existe){
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
								productox: this.detalleForm.productox,
								codigo_garantiax: this.detalleForm.codigo_garantiax,
								fecha_activacion: this.detalleForm.fecha_activacion,
							});
						}else{
							alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
							validacion=false;
						}
						}else{
							alertify.warning("Ya existe ese código de batería en el listado",5);
							validacion=false;
						}

						if(validacion){
						if(self.detalleForm.productox.id_submarca === 7){//Caso Motobaterias
							//self.contador++;
							self.detalleForm.codigo_garantiax = 'Código Automático '+ self.contador.toString();
							self.detalleForm.productox='';
							self.$refs.bateria.$el.focus()
						}else if(self.detalleForm.productox.id_submarca === 3){//Caso Cronos
							self.detalleForm.codigo_garantiax ='';
							self.$refs.codigo.focus();
						}else{
							self.detalleForm.codigo_garantiax ='';
							self.detalleForm.productox='';
							///self.$refs.bateria.$refs.search.blur()
							self.$refs.bateria.$el.focus()
						}
						}else{
							self.detalleForm.codigo_garantiax ='';
							self.detalleForm.productox='';
							self.$refs.bateria.$el.focus()
						}

						//this.detalleForm.fecha_activacion='';

					}else{
						alertify.warning("Debe definir un código unico de garantía",5);
					}
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
							if(item.productox.id_producto===productox.bodega_producto.id_producto){
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
			obtenerTodosProveedores() {
				var self = this;
				proveedor.obtenerTodosProveedores(
						data => {
							self.proveedores = data;
						},
						err => {
							console.log(err);
						}
				);
			},
			obtenerTodasBodegas() {
				var self = this;
				bodega.obtenerTodasBodegas(
						data => {
							self.bodegas = data.bodegas;
							self.zonas = data.zonas;
						},
						err => {
							console.log(err);
						}
				);
			},
			obtenerTodosTiposEntrada() {
				var self = this;
				tipo.obtenerTodosTiposEntrada(
						data => {
							self.tipos_entrada = data;
						},
						err => {
							console.log(err);
						}
				);
			},
			obtenerProductosValidos() {
				var self = this;
				producto.obtenerProductosValidos(
						data => {
							self.productos = data;
						},
						err => {
							console.log(err);
						}
				);
			},
			recibir() {
				var self = this;
				if(self.total_cantidad_recibida > 0){
					self.form.detalle_baterias = self.detalle_baterias;
					self.btnAction = "Registrando, espere....";
					if(self.form.estado === 1) {
						entrada.recibirCompra(
								self.form,
								data => {
									//alertify.success("La entrada fue recibida correctamente",5);
									this.$swal.fire(
											'Entrada Recibida!',
											'La Entrada fue Recibida correctamente.',
											'success'
									)
									this.$router.push({
										name: "entradas"
									});
								},
								err => {
									alertify.error('Error Actualizando los datos',10);
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
			},
			leaving: function () {
				alert("Leaving...");
			},
		},
		mounted() {
			this.obtenerEntrada();
		},
	};
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>