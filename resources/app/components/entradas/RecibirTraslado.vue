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

						<div class="col-sm-4">
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

						<div class="col-sm-4">
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

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Bodega</label>
								<input class="form-control" readonly type="text" v-model="form.entrada_bodega.descripcion">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.entrada_bodega" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Proveedor</label>
								<input class="form-control" readonly type="text" v-model="form.entrada_proveedor.nombre_comercial">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.entrada_proveedor" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
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
											<input :disabled="item.bodega_producto.producto_simple.tipo_producto===3" @change="item.cantidad_recibida = Math.max(Math.min(Math.round(item.cantidad_recibida), item.cantidad_solicitada), 1)" class="form-control" type="number" v-model.number="item.cantidad_recibida">
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
										<!--<<td>
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
									<!--<<td>Subtotal</td>
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
					<br>
					<template v-if="form.contiene_baterias">
					<div class="alert alert-success">
						<span><strong>Detalle de batería</strong></span>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Código Garantía Bateria</label>
								<typeahead  ref="bateria" style="width: 100%;" :initial="detalleForm.productox" :trim="80" :url="bateriasBusquedaURL" @input="seleccionarProducto"></typeahead>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.productox"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-2">
							<div class="form-group">
								<label for>Estado</label>
								<input class="form-control" readonly ref="fecha_activacion" v-model="detalleForm.fecha_activacion"  @keyup.enter="fechaActivacionEvento">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.fecha_activacion"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>&nbsp;</label>
								<button  @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar Batería</button>
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
								<template v-for="(item, index) in detalle_baterias">
									<tr>
										<td style="width: 2%">
											<button @click="eliminarLinea(item, index)">
												<i class="fa fa-trash"></i>
											</button>
										</td>
										<td>
											<input class="form-control" disabled v-model="item.productox.descripcion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalle_baterias.${index}.productox.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input  disabled  class="form-control" v-model="item.productox.text">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalle_baterias.${index}.text`]"
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
						<router-link :to="{ name: 'entradas' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button
								:disabled="btnAction !== 'Recibir Productos'"
								@click="recibir"
								class="btn btn-primary"
								type="button"
						>{{ btnAction }}</button>
					</div>


				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import entrada from "../../api/entradas";
	import es from 'vuejs-datepicker/dist/locale/translations/es'

	export default {
		data() {
			return {
				bateriasBusquedaURL: "/productos/baterias/buscar",
				es: es,
				format: "dd-MM-yyyy",
				contador : 0,
				productos: {},
				detalleForm:{
					productox: {},
				},
				detalle_baterias: [],
				form: {
					contiene_baterias: false,
					codigo_entrada: "",
					fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
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
			seleccionarProducto(e) {
				const productoP = e.target.value;
				var self = this;
				self.detalleForm.productox = productoP;
				this.$refs.fecha_activacion.focus();
			},
			fechaActivacionEvento() {

				var self = this;
				self.detalleForm.fecha_activacion = 'Cargando';
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

					if(data.productos.length){
						self.form.contiene_baterias = true;
					}else{
						self.form.contiene_baterias = false;
					}
					self.productos = data.productos
					if(self.form.estado !== 1 && self.form.id_tipo_entrada !== 7 ){
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
							if(self.detalleForm.productox.id_bateria===bateriax.productox.id_bateria){
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
								productox: this.detalleForm.productox
							});
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
					this.$refs.bateria.open();
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

			recibir() {
				var self = this;
				if(self.total_cantidad_recibida > 0){
					self.form.detalle_baterias = self.detalle_baterias;
					self.btnAction = "Registrando, espere....";
					if(self.form.estado === 1 && self.form.id_tipo_entrada === 7 ){
						self.$swal.fire({
							title: 'Esta seguro de guardar y emitir la entrada?',
							text: "Esta acción no se puede deshacer",
							type: 'warning',
							showCancelButton: true,
							confirmButtonColor: '#3085d6',
							cancelButtonColor: '#d33',
							confirmButtonText: 'Si, confirmar',
							cancelButtonText:'Cancelar'
						}).then((result) => {
							if (result.value) {
								entrada.recibir(
										self.form,
										data => {
											this.$swal.fire(
													'Entrada por traslado recibida exitosamente!',
													'La Entrada fue recibida correctamente.',
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
								self.btnAction = "Recibir Productos";
							}
						})


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
			this.obtenerEntrada();
		}
	};
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>