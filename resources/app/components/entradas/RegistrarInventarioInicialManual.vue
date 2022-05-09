<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Inventario inicial</div>
						<div class="box-description">Formulario para registrar Inventario inicial de productos</div>
					</div>

					<div class="row">
					<div class="col-sm-4">
						<div class="form-group">
							<label for>Bodega</label>
							<v-select
									label="descripcion"
									v-model="form.bodega"
									:options="bodegas"
									v-on:input="seleccionarBodega"
							></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
							</ul>
						</div>
					</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Zonas de costo</label>
								<v-select
										label="descripcion"
										v-model="form.zona"
										:options="zonas"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Número de lote</label>
								<input class="form-control" type="text" v-model="form.num_lote">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.num_lote" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha fabricación</label>
								<datepicker :format="format" :language="es" :value="new Date()"
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
								<datepicker :format="format" :language="es" :value="new Date()"
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
					</div>

					<div class="alert alert-success">
						<span><strong>Detalle de productos</strong></span>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Producto</label>

								<!--<typeahead style="width: 100%;" :initial="detalleForm.productox" :trim="80" :url="productosBusquedaURL" @input="seleccionarProducto"></typeahead>-->

								<v-select :options="productos" label="text" placeholder="Selecciona un producto" v-model="detalleForm.productox" @change="cargarPresentaciones"></v-select>

								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.productox"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Presentaciones de producto</label>

								<!--<typeahead style="width: 100%;" :initial="detalleForm.productox" :trim="80" :url="productosBusquedaURL" @input="seleccionarProducto"></typeahead>-->

								<v-select :options="form.presentaciones" ref="presentacionx" label="codigo" placeholder="Selecciona una presentacion" v-model="detalleForm.presentacionx"></v-select>

								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.presentacionx"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Cantidad</label>
								<input class="form-control" ref="cantidad" type="number" min="1" v-model.number="detalleForm.cantidad">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.cantidadx"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>



						<div class="col-sm-4">
							<div class="form-group">
								<label for>&nbsp;</label>
								<button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar Producto</button>
							</div>
						</div>

					</div>


					<hr>

					<div class="row">
						<div class="col-sm-12">
							<ul class="error-messages">
								<li
										:key="message"
										v-for="message in errorMessages.conteo_productos"
										v-text="message"
								></li>
							</ul>
							<table class="table table-bordered"  >
								<thead>
								<tr>
									<th></th>
									<th >Producto</th>
									<th >Presentación</th>
									<th >UM</th>
									<th >Cantidad</th>
									<th >UM Estandar</th>
									<th >Escalar</th>
									<th >Conversión</th>

								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in form.conteo_productos">
									<tr>
										<td style="width: 2%">
											<button @click="eliminarLinea(item, index)">
												<i class="fa fa-trash"></i>
											</button>
										</td>
										<td>
											<input class="form-control" disabled v-model="item.productox.text">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`conteo_productos.${index}.productox.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input  class="form-control" disabled v-model.number="item.presentacionx.codigo">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input  class="form-control" disabled v-model.number="item.presentacionx.unidad_medida">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="number" min="1" v-model.number="item.cantidad">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`conteo_productos.${index}.cantidad`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input  class="form-control" disabled v-model.number="item.presentacionx.simbolo_um">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input  class="form-control" disabled v-model.number="item.presentacionx.escalar">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
														v-text="message">
												</li>
											</ul>
										</td>
									<td>
										<strong>{{calcularConversion(item)|formatMoney(2)}}</strong>
									</td>

									</tr>
									<tr></tr>
								</template>
								</tbody>
								<tfoot>


								<tr>
									<td class="item-footer" colspan="4"> Total Unidades</td>
									<td  class="item-footer" colspan="3">
										<strong>{{total_cantidad}}</strong>
									</td>
									<td  class="item-footer">
										<strong>K {{total_conversion}}</strong>
									</td>
								</tr>


								</tfoot>
							</table>
						</div>
					</div>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'entradas-inicial' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button
								:disabled="btnAction !== 'Registrar Entrada Inicial'"
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
	import entrada from "../../api/entradas-inventario-inicial";
	//import es from 'vuejs-datepicker/dist/locale/translations/es'
    import loadingImage from '../../assets/images/block50.gif'
	import tc from "../../api/tasas-cambio";
	import es from "vuejs-datepicker/dist/locale/translations/es";
	export default {
		/*components: {
			Multiselect
		},*/

		data() {
			return {
				es: es,
				format: "dd-MM-yyyy",
				//productoEntradaBusquedaURL: "/entradas/productos/buscar",
				loading:true,
				registrandoBateria:false,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
			 	mascaraCodigo:'X############',
				codigoAutomatico:false,
				total_pendientes:0,
				contador : 1,
				productos: [],
				productos_nuevos: [],
				productos_usados: [],
				sucursales:[],
				bodegas:[],
				zonas:[],
				detalleForm:{
					productox: '',
					presentacionx: '',
					cantidad: 0,
				},
				detalle_baterias: [],
				consolidadoProductos:[],
				form: {
					id_entrada_inicial:'',
					contiene_baterias: true,
					codigo_entrada: "",
					fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
					entrada_tipo: "",
					entrada_proveedor: "",
					entrada_bodega: "",

					conteo_productos: [],
					num_lote:'',
					presentaciones:[],
					conversionx:0,
				},
				btnAction: "Registrar Entrada Inicial",
				errorMessages: []
			};
		},

		methods: {
			cargarPresentaciones() {
				var self = this;
				self.loading = true;
				entrada.cargarPresentacionesProductos({
					id_producto: self.detalleForm.productox.id_producto,
				}, data => {
					if(data.presentaciones !== null){
						self.form.presentaciones = data.presentaciones;
					}else{
						alertify.warning("No se encuentran presentaciones para este producto.",5);
						self.form.presentaciones = [];
					}
					self.loading = false;
				}, err => {
					if(err.id_producto){
						self.form.presentaciones = [];
						alertify.warning(err.id_producto,5);
						self.loading = false;
					}
				})
				//self.$refs.presentacionx.focus();
			},
			seleccionarProducto() {
				var self = this
				if (self.detalleForm.productox)
					self.detalleForm.cantidad = 1;
				self.$refs.cantidad.focus();
			},
			onDateSelectFab(date) {
				//console.log(date); //
				this.form.fecha_fabricacion = moment(date).format("YYYY-MM-DD"); //
			},
			onDateSelectVen(date) {
				//console.log(date); //
				this.form.fecha_vencimiento = moment(date).format("YYYY-MM-DD"); //
			},
			seleccionarBodega() {
				var self = this;
				//self.loading = true;

				/*if(self.form.bodega){

					if(self.form.conteo_productos.length >= 1){
						if(self.form.bodega.id_tipo_bodega===3){
						this.$swal.fire({
							title: 'Al cambiar la bodega el conteo?',
							text: "Revise bien la información",
							type: 'warning',
							showCancelButton: true,
							confirmButtonColor: '#3085d6',
							cancelButtonColor: '#d33',
							confirmButtonText: 'Si, confirmar',
							cancelButtonText:'Cancelar'
						}).then((result) => {
							if (result.value) {
								self.form.conteo_productos[keyx].cantidad = Number(self.form.conteo_productos[keyx].cantidad) + self.detalleForm.cantidad;
								this.detalleForm.productox='';
								this.detalleForm.cantidad=0;
							}
						})
					}else{

					}*/

					self.productos=[];
					self.form.conteo_productos=[];
					if(self.form.bodega.id_tipo_bodega===3){
						self.productos_usados.forEach((producto, key) => {self.productos.push(producto)});
					}else{
						self.productos_nuevos.forEach((producto, key) => {self.productos.push(producto)});
					}

			},


			agregarDetalle() {
				let self = this;
				if(this.detalleForm.productox && this.detalleForm.presentacionx){
					if(this.detalleForm.cantidad>0){
						let i = 0;
						let keyx = 0;
						/*if(self.form.conteo_productos){
							self.form.conteo_productos.forEach((presentacionx, key) => {
								//console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
								if(self.detalleForm.presentacionx.id_presentacion===presentacionx.presentacionx.id_presentacion){
									i++;
									keyx = key;
								}
							});
						}*/

						if(i === 0){
							this.form.conteo_productos.push({
								productox: this.detalleForm.productox,
								presentacionx: this.detalleForm.presentacionx,
								cantidad: this.detalleForm.cantidad,
								escalar: this.detalleForm.presentacionx.escalar,
								conversionx:0
							});
							this.detalleForm.productox='';
							this.detalleForm.presentacionx='';
							this.detalleForm.cantidad = 0;

						}else{
							this.$swal.fire({
								title: 'El producto ya existe en el detalle, desea sumar la nueva cantidad al monto existente?',
								text: "Revise bien la información",
								type: 'warning',
								showCancelButton: true,
								confirmButtonColor: '#3085d6',
								cancelButtonColor: '#d33',
								confirmButtonText: 'Si, confirmar',
								cancelButtonText:'Cancelar'
							}).then((result) => {
								if (result.value) {
									self.form.conteo_productos[keyx].cantidad = Number(self.form.conteo_productos[keyx].cantidad) + self.detalleForm.cantidad;
									this.detalleForm.productox='';
									this.detalleForm.cantidad=0;
								}
							})
						}

					}else{
						alertify.warning("Los valores para cantidad deben ser mayores a cero",5);
					}
				}else{
					alertify.warning("Verifique que tiene seleccionado un producto y una presentación",5);
				}
			},
			eliminarLinea(item, index) {
				if (this.form.conteo_productos.length >= 1) {
					this.form.conteo_productos.splice(index, 1);

				}else{
					this.form.conteo_productos=[];
				}
			},



			confirmar(){
				this.$swal.fire({
					title: 'Esta seguro de confirmar el registro de la entrada?',
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

			cargar_detalles_producto() {
				var self = this
				//  console.log(self.detalleForm.productox)
				self.$refs.bateria.$refs.search.blur()
				self.$refs.codigo.focus();
				if(self.detalleForm.productox){
					if(self.detalleForm.productox.producto_detalles_baterias.id_submarca === 7) {///Caso motobaterias (no tiene codigo de garantia)
						self.$refs.fecha_activacion.focus();
						self.codigoAutomatico = true;
						self.mascaraCodigo='XXXXXXXXXXXXXXXXXXXXXXX';
						self.detalleForm.codigo_garantiax = 'Código Automático '+ self.contador.toString();
						self.contador++;
						let old_activacion = self.detalleForm.codigo_garantiax;
						self.detalleForm.codigo_garantiax= '';
						self.detalleForm.codigo_garantiax= old_activacion;
					}else if(self.detalleForm.productox.producto_detalles_baterias.id_submarca === 3){//Caso Cronos
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

			cambiarFechaActivacion(item) {
				if(item.fecha_activacion !== item.fecha_activacion_org){
				item.registrada = false;
				}
			},

			nuevo() {
				var self = this;
				entrada.nuevoProductosVarios({
						}, data => {
							self.productos_usados = data.productos_usados;
							self.productos_nuevos = data.productos;
							self.productos = data.productos;
							self.bodegas = data.bodegas;
							self.zonas = data.zonas;
							//self.form.id_entrada_inicial =data.id_entrada_inicial;
							//self.agruparProductos();
							self.loading=false;
						},
						err => {
							console.log(err);
						})

			},


			registrar() {
				var self = this;
				//if(self.total_cantidad_recibida > 0){
				self.loading=true;
					self.form.detalle_baterias = self.detalle_baterias;
					self.btnAction = "Registrando, espere....";
					//if(self.form.estado === 1) {
						entrada.registrarManual(
								self.form,
								data => {
									//alertify.success("La entrada fue recibida correctamente",5);
									this.$swal.fire(
											'Entrada Registrada!',
											'La Entrada fue Registrada correctamente.',
											'success'
									)
									self.loading=false;
									this.$router.push({
										name: "entradas-inicial"
									});
								},
								err => {
									alertify.warning('Hubo un problema al registrar los datos, revise la información',10);
									self.errorMessages = err;
									self.btnAction = "Registrar Entrada Inicial";
									self.loading=false;
								}
						);
					/*}else{
						alertify.error("La entrada ya no puede ser recibida",5);
						this.$router.push({
							name: "entradas-inicial"
						});
					}*/
				/*}else{
					alertify.error("Se debe recibir al menos un producto",5);
				}*/
			},
			calcularConversion(itemX) {
				itemX.conversionx= Number((Number(itemX.cantidad)* Number(itemX.escalar)).toFixed(2));
				if(!isNaN(itemX.conversionx)){
					return itemX.conversionx;
				}
				else return 0;
			},
		},


		computed: {

			total_cantidad() {
				return this.form.conteo_productos.reduce((carry, item) => {
					return (carry + Number(item.cantidad))
				}, 0)
			},
			total_conversion() {
				return this.form.conteo_productos.reduce((carry, item) => {
					return (carry + Number(item.conversionx))
				}, 0)
			},

		},
		mounted() {
			this.nuevo();
		},



	};
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>