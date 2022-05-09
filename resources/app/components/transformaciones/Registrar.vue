<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Nueva Transformación</div>
						<div class="box-description">Formulario para registrar nueva transformacion</div>
					</div>
					<form>
					<div class="row">

						<!--<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Tipo:</label>
						<select v-model.number="form.tipo_producto" class="form-control" @change="seleccionaTipo()">
							<option value="1">Producto</option>
							<option value="2">Servicio</option>
							<option value="4">Bienes</option>
						</select>
							</div>
						</div>-->

						<!--<div class="col-sm-6">
							<div class="form-group">
								<label for=""> Grupo:</label>
								<v-select v-model="form.rubro_producto" label="rubro_full" :options="rubros"  v-on:input="obtenerCodigo"></v-select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.rubro_producto" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>-->
							<div class="col-sm-3">
								<div class="form-group">
									<label >Bodega</label>
									<v-select
											label="descripcion"
											v-model="form.bodega"
											placeholder="Seleccione una bodega"
											:options="bodegas"
											v-on:input="obtenerProductosBodega()"
									></v-select>
									<ul class="error-messages">
										<li v-for="message in errorMessages.bodega" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>


						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="alert alert-success">
									<span><strong>Producto Origen</strong></span>
								</div>
									<div class="row">
										<div class="col-sm-10">
											<div class="form-group">
												<label >Producto</label>
													<v-select
														:options="productos"
														label="text"
														placeholder="Seleccione un producto"
														v-model="form.productox"
													></v-select>
													<ul class="error-messages">
														<li v-for="message in errorMessages.productox" :key="message" v-text="message"></li>
													</ul>
											</div>
										</div>
										<!--<div class="col-sm-5">
											<div class="form-group">
												<label >Código Presentación</label>
												<v-select
												:options="form.presentaciones"
												ref="presentacionx"
												label="codigo"
												placeholder="Seleccione una presentación"
												v-model="detalleForm.presentacionx"
												></v-select>
												<ul class="error-messages">
													<li v-for="message in errorMessages.presentacionx" :key="message" v-text="message"></li>
												</ul>
											</div>
										</div>-->
										<div class="col-sm-2">
											<div class="form-group">
												<label>Cantidad</label>
												<input @change="detalleForm.cantidad = Math.max(Math.min(Math.round(detalleForm.cantidad), form.productox.cantidad_disponible), 1)"
														class="form-control" ref="cantidad"type="number" min="1"  v-model.number="detalleForm.cantidad">
												<ul class="error-message">
													<li
														:key="message"
														v-for="message in errorMessages.cantidad"
														v-text="message"
													></li>
												</ul>
											</div>
										</div>

							<div></div>
							<div class=	"col-sm-4">
								<div class="form-group">
									<label for> </label>
									<button @click="agregarDetalle" type="button" class="btn btn-info btn-agregar" > Agregar producto</button>
								</div>
							</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-sm-12">
								<ul>
									<li :key="message"
										v-for="message in errorMessages.conteo_productos"
										v-text="message"
									></li>
								</ul>
								<table class="table table-bordered">
									<thead>
									<tr>
										<th></th>
										<th>Producto</th>
										<th>Presentación</th>
										<th>Cantidad</th>
										<th>Escalar</th>
										<th>Conversión</th>
									</tr>
									</thead>
									<tbody>
									<template v-for="(item,index) in form.conteo_productos">
										<tr>
											<td style="width: 2%">
												<button @click="eliminarLinea(item, index)">
													<i class="fa fa-trash"></i>
												</button>
											</td>
											<td>
												<input class="form-control" disabled v-model="item.productox.text">
												<ul class="error-message">
													<li
													:key="message"
													v-for="message in errorMessages[`conteo_productos.${index}.productox.id_producto`]"
													v-text="message"
													></li>
												</ul>
											</td>
											<td>
												<input class="form-control" disabled v-model="item.productox.codigo_presentacion">
												<ul>
													<il
															:key="message"
															v-for="message in errorMessages[`conteo_produtos.${index}.presentacionx.id_presentacion`]"
															v-text="message"
													></il>
												</ul>
											</td>
											<td>
												<input class="form-control" disabled  type="number" min="1" v-model.number="item.cantidad">
												<ul class="error-message">
													<li
														:key="message"
														v-for="message in errorMessages[`conteo_producto.${index}.cantidad`]"
														v-text="message"
													></li>
												</ul>
											</td>
											<!--<td>
												<input class="form-control" disabled v-model.number="item.presentacionx.simbolo_um">
												<ul	class="error-message">
													<li
														:key="message"
														v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
														v-text="message"
													></li>
												</ul>
											</td>-->
											<td>
											<input class="form-control" disabled v-model.number="item.productox.escalar">
											<ul class="error-message">
												<li
													:key="message"
													v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
												></li>
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
										<td class="item-footer" colspan="3">Total Unidades</td>
										<td class="item-footer" colspan="2">
											<strong>{{total_cantidad}}</strong>
										</td>
										<td class="item-footer">
											<strong>k {{total_conversion|formatMoney(2)}}</strong>
										</td>
									</tr>
									</tfoot>
								</table>
							</div>
							</div>

						</div>
							<div class="col-sm-6">
						<div class="alert alert-success">
							<span><strong>Productos Transformados</strong></span>
						</div>
						<div class="row">
							<div class="col-sm-10">
								<div class="form-group">
									<label >Producto</label>
									<v-select
											:options="productos"
											label="text"
											placeholder="Seleccione un producto"
											v-model="form.producto"
									></v-select>
									<ul class="error-messages">
										<li v-for="message in errorMessages.productox" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>
							<!--<div class="col-sm-5">
								<div class="form-group">
									<label >Nueva Presentación</label>
									<v-select
										label="codigo"
										placeholder="Seleccione una nueva presentación"
										:options="form.presentaciones"
										v-model="form.presentacion"
									></v-select>
									<ul class="error-messages">
										<li v-for="message in errorMessages.presentacion" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>-->

							<div></div>
							<div class=	"col-sm-4">
								<div class="form-group">
									<label for> </label>
									<button @click="agregarDetalleEntrada" type="button" class="btn btn-info btn-agregar" > Agregar Transformación</button>
								</div>
							</div>
						</div>
						<hr>
						<div class="row">
							<div class="col-sm-12">
								<ul>
									<li :key="message"
										v-for="message in errorMessages.conteo_producto"
										v-text="message"
									></li>
								</ul>
								<table class="table table-bordered">
									<thead>
									<tr>
										<th></th>
										<th>producto</th>
										<th>Nueva Presentación</th>
										<th>Cantidad</th>
										<th>Conversión</th>
									</tr>
									</thead>
									<template v-for="(item,index) in form.conteo_producto">
										<tr>
											<td style="width: 2%">
												<button @click="eliminarLineaConversion(item, index)">
													<i class="fa fa-trash"></i>
												</button>
											</td>
											<td>
												<input class="form-control" disabled v-model="item.productox.text">
											</td>
											<td>
												<input class="form-control" disabled v-model="item.presentacion">
												<ul>
													<il
															:key="message"
															v-for="message in errorMessages['']"
													></il>
												</ul>
											</td>
											<td>
												<strong>{{TcantidadNuevaPresentacion|formatMoney(2)}}</strong>
												<!--<strong>{{calcularTotalCantidadEntrada|formatMoney(2)}}</strong>-->
											</td>
											<td>
												<strong>{{calcularConversionEntrada(item)|formatMoney(2)}}</strong>
											</td>
										</tr>
									</template>
								</table>
							</div>
							</div>

						</div>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'transformaciones' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button type="button" class="btn btn-primary" @click="registrarProducto" :disabled="btnAction != 'Registrar' ? true : false">{{ btnAction }}</button>
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
	import transformaciones from '../../api/transformaciones'
	import bodega from '../../api/bodegas'
	//import rubro from '../../api/rubros'
	//import impuesto from '../../api/impuestos'
	//import um from '../../api/unidad_medida'
	//import bodega from "../../api/bodegas";
	import VueBarcode from 'vue-barcode';
	import loadingImage from '../../assets/images/block50.gif'
	import isNumber from "../../assets/plugins/moment/src/lib/utils/is-number";
	import presentacion from "../../api/presentacion";
/*
	import tipo from "../../api/productopresentacion";
*/

	export default {
		components: {
			'barcode': VueBarcode
		},
		data() {
			return {
				loading:true,
				msg: 'Cargando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				textPositionx:'center',
				heightx:25,
				widthx:2,
				marginTopx:40,
				elementTag:'svg',
				formatx:'EAN',
				tipoProducto:true,
				rubros: [],
				impuestos: [],
				unidades_medidas: [],
				bodegas: [],
				productos: [],
				presentaciones: [],
				detalleForm:{
					presentacionx:'',
					cantidad:0,
				},
				form: {
					productox: '',
					producto: '',
					conversion: 0,
					totalConversion: 0,
					totalEscalar: 0,
					totalCantidad:0,
					totalCantidadNuevaPresentacion:0,
					TCantidadNuevaPresentacion:0,
					cantidadx:0,
					presentacion: '',
					detalleProductos: [],
					presentaciones: [],
					presentacionest:[],
					precio_compra: 0,
					precio_distribuidor: 0,
					codigo_sistema: '',
					bodega:'',
					codigo_consecutivo: 0,
					nombre_comercial: '',
					producto: '',
					descripcion: '',
					costo_estandar: 0,
					precio_sugerido: 0,
					existencia_min: 1,
					existencia_max: 1,
					cantidad_inicial: 0,
					tipo_producto:1,
					codigo_barra:'',
					imagen: '',
					rubro_producto:'',
					conteo_productos: [],
					conteo_producto: [],
					impuesto_producto:'',
					unidad_medida:'',
					bodega_inicial: "",
					conversionx: 0,
				},
				uploader: [],
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			/*cargarPresentaciones(){
				var self = this;
				self.loading = true;
				transformaciones.cargarPresentacionesProductos({
					id_producto: self.form.productox.id_producto,
				},data=>{
					if(data.presentaciones !== null){
						self.form.presentaciones = data.presentaciones;
					}else{
						alertify.warning("No se encuentran presentaciones para este producto.",5);
						self.form.presentaciones = [];
					}
					self.loading = false;
				},err =>{
							if(err.id_producto){
									self.form.presentaciones = [];
									alertify.warning(err.id_producto,5);
									self.loading = false;
							}
						}
				)
			},*/
			agregarDetalle() {
				let self = this;
					if(this.form.productox && this.form.producto /* > 0*/){
						if(this.detalleForm.cantidad > 0) {
							if(this.form.producto){


							let i = 0;
							let keyx = 0;
							if (self.form.conteo_productos) {
								self.form.conteo_productos.forEach((presentacion, key) => {

									if (self.form.productox.id_presentacion === presentacion.productox.id_presentacion) {
										i++;
										keyx = key;



									}
								});
							}

							if (i === 0) {
								this.form.conteo_productos.push({
									presentacionx: this.form.productox.codigo_presentacion,
									productox: this.form.productox,
									cantidad: this.detalleForm.cantidad,
									escalar: this.form.productox.escalar,
									origen: this.form.productox.id_origen,
									conversionx: this.form.conversionx,
									codigo_sistema: this.form.productox.codigo_sistema
								});
								/*this.detalleForm.presentacionx = '',*/
										/*this.form.productox = '',*/
										this.detalleForm.cantidad = 0

							} else {
								this.$swal.fire({
									title: 'El producto ya agrego al detalle, ¿Desea sumar la nueva cantidad al monto existente?',
									text: "Revise bien la información",
									type: 'warning',
									showCancelButton: true,
									confirmButtonColor: '#3085d6',
									cancelButtonColor: '#d33',
									confirmButtonText: 'Sí, confirmar',
									cancelButtonText: 'Cancelar'
								}).then((result) => {
									if (result.value) {
										self.form.conteo_productos[keyx].cantidad = Number(self.form.conteo_productos[keyx].cantidad) + self.detalleForm.cantidad;
										this.form.productox = '';
										this.detalleForm.cantidad = 0;
									}
								})
							}
						}else{
								alertify.warning("Verifique que seleccionó una nueva presentación");
							}
						}else {
							alertify.warning("Los valores para la cantidad deben ser mayores a cero", 5);
						}
					}else{
						alertify.warning("Verifique que seleccionó un producto y una configuración",5);
					}

			},

			agregarDetalleEntrada(){
				let self = this;
				if(this.form.productox && this.form.conteo_productos!=0){
					if(this.form.conteo_producto.length < 1){
					if (this.form.producto.id_origen == this.form.productox.id_origen){

						let i = 0;
						let keyx = 0;
						if(self.form.conteo_producto){
							self.form.conteo_producto.forEach((presentacion,key)=>{
								if(self.from.producto.id_presentacion===presentacion.producto.id_presentacion){
									i++;
									keyx = key;
								}
							});
						}
						if(this.form.producto.escalar < this.form.productox.escalar){
						if(i===0){
							this.form.conteo_producto.push({
								productox: this.form.productox,
								presentacion: this.form.producto.codigo_presentacion,
								id_presentacion:this.form.producto.id_presentacion,
								id_bodega_producto:this.form.producto.id_bodega_producto,
								escalarx: this.form.producto.escalar,
								origenx: this.form.producto.id_origen,
								conversionx: this.form.conversionx,
								/*relacion_um_estandar: this.form.presentacion.relacion_um_estandar,*/
								cantidadx: this.form.cantidadx ,
								conversion: this.form.conversion
/*
								cantidadx: Number((Number(this.detalleForm.cantidad) / Number(this.form.presentacion.escalar)).toFixed(2)) ,
*/
							});
							this.form.productox = '';
							this.form.presentacion = '';
							this.form.cantidadx='';
						}else {
							this.$swal.fire({
								title: 'El producto ya se agrego al detalle, ¿Desea agregar la nueva presentación al producto existente?',
								text: "Revise bien la información",
								type: 'warning',
								confirmButtonColor: '#3085d6',
								cancelButtonColor: '#d33',
								confirmButtonText: 'Sí, confirmar',
								cancelButtonText: 'cancelar'
							})
						}
						}else{
						alertify.warning("Verifique que el escalar de la presentación origen sea menor al escalar de la nueva presentación");
					}
					}else{
						alertify.warning("Verifique que el origen de las presentaciones coincidan");
					}
					}
					else {
						alertify.warning("La tabla de productos transformados ya contiene datos",5);
					}
						}
				else {
					alertify.warning("Verifique que tiene seleccionado un producto y la tabla de producto origen contenga datos",5);
				}
				},

			eliminarLinea(item, index) {
				if (this.form.conteo_productos.length >= 1) {
					this.form.conteo_productos.splice(index, 1);

				}else{
					this.form.conteo_productos=[];
				}
			},
			eliminarLineaConversion(item, index){
				if(this.form.conteo_producto.length >= 1) {
					this.form.conteo_producto.splice(index,1);
				}else{
					this.form.conteo_producto = [];
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

			obtenerProductosBodega(){
			var self = this;
			self.form.productox = [];
			self.form.producto = [];
			self.productos = [];

			self.form.bodega.productos_bodega.forEach((bodega_producto, key) =>{

				self.productos.push({
					codigo_sistema: bodega_producto.producto.codigo_sistema,
					costo_promedio: Number(bodega_producto.producto.costo_promedio),
					descripcion: bodega_producto.producto.descripcion,
					id_producto: bodega_producto.producto.id_producto,
					id_bodega_producto: bodega_producto.id_bodega_producto,
					nombre_comercial: bodega_producto.producto.nombre_comercial,
					cantidad_disponible: bodega_producto.cantidad,
					unidad_medida: bodega_producto.producto.unidad_medida,
					text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial+ '-' + bodega_producto.codigo_presentacion+' ( ' + bodega_producto.no_lote + ' ) ',
					codigo_presentacion: bodega_producto.presentacion.codigo,
					escalar: bodega_producto.escalar,
					id_origen: bodega_producto.presentacion.id_origen,
					id_presentacion: bodega_producto.id_presentacion,
				});
			});

			},
			registrar() {
				var self = this
				/*self.form.conteo_productos = self.form.conteo_productos;*/
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				producto.registrarProducto(self.form, data => {
					this.$swal.fire(
							'Presentación Registrada',
							'La Presentación fue registrada correctamente',
							'success'
					)
					self.loading = false;
					/*alertify.success("Datos registrados correctamente",5);*/
					this.$router.push({
						name: 'producto-presentacion'
					})
				}, err => {
					alertify.warning('Hubo un problema al registrar los datos, revise la información',10);
					self.loading = false;
					self.errorMessages = err
					self.btnAction = 'Registrar'
				})
			},
			/*seleccionarBodega(){
			var self = this;
				self.productos=[];
				self.conteo_productos=[];
				self.productos.forEach((producto, key) => {self.productos.push(producto)});
			},*/
			nuevo() {
				var self = this;
				transformaciones.nuevo({}, data => {
							/*self.presentaciones = data.presentaciones;*/

							self.bodegas = data.bodegas;
							self.form.bodega = self.bodegas[0];
							self.form.bodega.productos_bodega.forEach((bodega_producto, key) =>{

								self.productos.push({
									codigo_sistema: bodega_producto.producto.codigo_sistema,
									costo_promedio: Number(bodega_producto.producto.costo_promedio),
									descripcion: bodega_producto.producto.descripcion,
									id_producto: bodega_producto.id_producto,
									id_bodega_producto: bodega_producto.id_bodega_producto,
									nombre_comercial: bodega_producto.producto.nombre_comercial,
									cantidad_disponible: bodega_producto.cantidad,
									unidad_medida: bodega_producto.producto.unidad_medida,
									text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial+ '-' + bodega_producto.codigo_presentacion+' ( ' + bodega_producto.no_lote + ' ) ',
									codigo_presentacion: bodega_producto.presentacion.codigo ,
									id_origen: bodega_producto.presentacion.id_origen,
									escalar: bodega_producto.escalar,
									id_presentacion: bodega_producto.id_presentacion,
								});
							});
							self.unidades_medidas = data.unidades_medidas;


							self.loading = false;
						},
						err => {
							console.log(err);
						})

			},

			seleccionaTipo() {
				var self = this;
				if(self.form.tipo_producto === 1){
					self.tipoProducto = true;
					self.form.costo_estandar= 0;
					self.form.precio_sugerido= 0;
					self.form.existencia_min= 0;
					self.form.existencia_max= 1;
					self.form.cantidad_inicial= 0;
					self.form.codigo_barra='N/A';
					self.form.imagen= '';
					self.form.rubro_producto='';
					self.form.impuesto_producto='';
					self.form.unidad_medida='';
				}else if(self.form.tipo_producto === 2){
					self.tipoProducto = false;
					self.form.costo_estandar= 0;
					self.form.precio_sugerido= 0;
					self.form.existencia_min= 1;
					self.form.existencia_max= 1;
					self.form.cantidad_inicial= 0;
					self.form.codigo_barra='';
					self.form.imagen= '';
					self.form.rubro_producto='';
					self.form.impuesto_producto='';
					self.form.unidad_medida='';
					self.ums.forEach((umx, indice) => {
						if (umx.id_unidad_medida === 11) {
							self.form.unidad_medida = self.ums[indice];
						}
					});
				}else{
					self.tipoProducto = true;
					self.form.costo_estandar= 0;
					self.form.precio_sugerido= 0;
					self.form.existencia_min= 0;
					self.form.existencia_max= 1;
					self.form.cantidad_inicial= 0;
					self.form.codigo_barra='N/A';
					self.form.imagen= '';
					self.form.rubro_producto='';
					self.form.impuesto_producto='';
					self.form.unidad_medida='';
				}
			},
			/*obtenerTodasBodegas() {
				var self = this;
				bodega.obtenerTodasBodegas(
						data => {
							self.bodegas = data;
							self.form.bodega_inicial=self.bodegas[0];
						},
						err => {
							console.log(err);
						}
				);
			},*/
			/*obtenerConcatenarCodigo() {
				var self = this;
				self.form.codigo_sistema = self.form.rubro_producto.codigo +'-'+ self.form.codigo_consecutivo;
			},*/
			/*obtenerTodosRubrosPS() {
				var self = this
				rubro.obtenerTodosRubrosPS(data => {
					self.rubros = data
				}, err => {
					console.log(err)
				})
			},
			obtenerTodosImpuestos() {
				var self = this
				impuesto.obtenerTodosImpuestos(data => {
					self.impuestos = data
				}, err => {
					console.log(err)
				})
			},
			obtenerTodosUnidadMedida() {
				var self = this
				um.obtenerTodas(data => {
					self.ums = data
				}, err => {
					console.log(err)
				})
			},*/
			/*getImages() {
				var imagen = $('input[name="imagen"]').val()
				if (JSON.parse(imagen).length) {
					return imagen
				} else {
					return ''
				}
			},*/
			registrarProducto() {
				var self = this
				self.btnAction = 'Registrando, espere....'
			/*	self.form.imagen = this.getImages()*/
				self.loading = true;
				transformaciones.registrarProducto(self.form, data => {
					self.loading = true;
					this.$router.push({
						name: 'transformaciones'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			},
			initUploader() {
				var self = this
				this.uploader = $('#uploader-button').uploader({
					upload_url: window.location.origin + '/public/media/upload',
					file_picker_url: window.location.origin + '/public/media/get-files',
					input_name: 'imagen',
					maximum_total_files: 1,
					maximum_file_size: 5000000,
					file_types_allowed: ['image/jpeg', 'image/png'],
					on_before_upload: function() {
						self.btnAction = 'Subiendo imágenes...'
					},
					on_success_upload: function() {
						self.btnAction = 'Guardar'
					},
					on_error: function(err) {
						console.log(err)
					}
				})
			},
			/*initSelect2() {
				$('.select2').select2()
			}*/
			calcularConversion(itemX){
				itemX.conversionx = Number((Number(itemX.cantidad)*Number(itemX.escalar)).toFixed(2));
				if(!isNaN(itemX.conversionx)){
					return itemX.conversionx;
				}else return 0;
			},

			calcularConversionEntrada(itemx){
				var self = this;
				itemx.conversion = Number((Number(this.form.cantidadx)*Number(itemx.escalarx)).toFixed(2));
				if(!isNaN(itemx.conversion)){
					return itemx.conversion;
				}else return 0;
			},

			calcularTotalCantidadEntrada(itemX){
				var self = this;
				itemX.cantidadx = Number((Number(itemX.conversionx)/Number(itemX.escalarx)).toFixed(2));
				if(!isNaN(itemX.cantidadx)){
					return itemX.cantidadx;
				}
			},

		},



		computed: {
			total_cantidad(){
				var self = this;
				return this.form.conteo_productos.reduce((carry, item) =>{
					return self.form.totalCantidad=(carry + Number(item.cantidad))
				}, 0)
			},
			total_conversion(){
				var self = this;
				return this.form.conteo_productos.reduce((carry, item)=>{
					return self.form.totalConversion=(carry + Number(item.conversionx))
				}, 0)
			},
			total_escalar(){
				var self = this;
				return this.form.conteo_productos.reduce((carry, item)=>{
					return self.form.totalEscalar = (carry + Number(item.escalar))
				},0)
			},
			TcantidadNuevaPresentacion(){
			var self = this;
				/*	itemx.cantidadx = Number((Number(self.form.totalConversion) / Number(itemx.escalarx)).toFixed(2))*/
				return this.form.conteo_producto.reduce((carry, item)=>{
					return self.form.cantidadx=(carry +Number(( Number(this.form.totalConversion)/Number(item.escalarx)).toFixed(2)))
				},0)
			},
		},

		mounted() {
		this.initUploader()
		/*this.nueva();*/
		this.nuevo();
		}

    }
</script>
<style>
	.check-label2{
		margin-top: 40px;
		margin-left: 40px;
	}
	.btn-agregar{
		margin-top: 33px;
	}
</style>