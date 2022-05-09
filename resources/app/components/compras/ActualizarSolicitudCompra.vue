<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Solicitud</div>
						<div class="box-description">Formulario para registrar Solicitud de compra</div>
					</div>
					<div class="row">

						<!--< <div class="col-sm-4">
                           <div class="form-group">
                             <label for>Tipo Compra</label>
                             <select class="form-control" v-model.number="form.id_tipo_compra">
                               <option value="1">Local</option>
                               <option value="2">Internacional</option>
                             </select>
                             <ul class="error-messages">
                               <li
                                       :key="message"
                                       v-for="message in errorMessages.id_tipo_compra"
                                       v-text="message"
                               ></li>
                             </ul>
                           </div>
                         </div>-->

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Usuario Solicitante</label>
								<v-select
										label="nombre_completo"
										v-model="form.solicitud_trabajador"
										:options="trabajadores"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.solicitud_area" v-text="message"></li>
								</ul>
							</div>
						</div>





						<div class="col-sm-3">
							<div class="form-group">
								<label for>Area Solicitante</label>
								<v-select
										label="descripcion"
										v-model="form.solicitud_area"
										:options="areas"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.solicitud_area" v-text="message"></li>
								</ul>
							</div>
						</div>

						<!--<div class="col-sm-4">
							<div class="form-group">
								<label for>Sucursal</label>
								<v-select
										label="descripcion"
										v-model="form.solicitud_sucursal"
										:options="sucursales"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.solicitud_sucursal" v-text="message"></li>
								</ul>
							</div>
						</div>-->
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Bodega</label>
								<v-select
										label="descripcion"
										v-model="form.solicitud_bodega"
										:options="bodegas"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.solicitud_bodega" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Moneda</label>
								<v-select
										label="descripcion"
										v-model="form.solicitud_moneda"
										:options="monedas"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.solicitud_moneda" v-text="message"></li>
								</ul>
							</div>
						</div>



						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha Necesidad</label>
								<datepicker :format="format" :language="es" :value="new Date()" @selected="onDateSelect"></datepicker>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.f_necesidad"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-8">
							<div class="form-group">
								<label for>Observaciones solicitud</label>
								<input class="form-control" type="text" v-model="form.observacion">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.observacion"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

					</div>

					<div v-if="!form.solicitud_area">
						<div class="alert alert-info">
							<span>Se requiere que seleccione una area para continuar.</span>
						</div>
						<hr>
					</div>

					<div class="alert alert-success">
						<span><strong>Detalle de productos</strong></span>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Producto</label>

								<!--<typeahead style="width: 100%;" :initial="detalleForm.productox" :trim="80" :url="productosBusquedaURL" @input="seleccionarProducto"></typeahead>-->

								<multiselect :allow-empty="false" :options="productos"
											 :searchable="true"
											 :show-labels="false"
											 deselect-label="No se puede eliminar este valor"
											 label="text"
											 placeholder="Selecciona un producto"
											 ref="producto"
											 track-by="id_producto"
											 v-model="detalleForm.productox"
											 v-on:input="seleccionarProducto"
								></multiselect>

								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.productox"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Proveedor</label>
								<v-select
										label="nombre_comercial"
										v-model="detalleForm.proveedorx"
										:options="proveedores"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.proveedorx" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Cantidad</label>
								<input class="form-control" ref="cantidad" type="number" v-model.number="detalleForm.cantidad">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.cantidadx"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>



						<div class="col-sm-3">
							<div class="form-group">
								<label for>Precio Info</label>
								<div class="input-group">
									<div class="input-group-addon">{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}}
									</div>
									<input class="form-control" type="number" v-model.number="detalleForm.precio_info">
								</div>

								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.precio_infox"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>


						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Necesidad</label>
								<datepicker :format="format" :language="es" :value="new Date()" @selected="onDateSelect2"></datepicker>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.f_necesidad_productox"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>



						<div class="col-sm-3">
							<div class="form-group">
								<label for>&nbsp;</label>
								<button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar Producto</button>
							</div>
						</div>

					</div>

					<div class="row">
						<div class="col-sm-12">
							<ul class="error-messages">
								<li
										:key="message"
										v-for="message in errorMessages.solicitud_productos"
										v-text="message"
								></li>
							</ul>
							<table class="table table-bordered"  >
								<thead>
								<tr>
									<th></th>
									<th >Producto</th>
									<th >Fecha Necesidad</th>
									<th >Proveedor</th>
									<th >Cantidad</th>
									<th >Precio Unitario</th>
									<th >Descuento</th>
									<th >SubTotal</th>


								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in form.solicitud_productos">
									<tr>
										<td style="width: 2%">
											<button @click="eliminarLinea(item, index)">
												<i class="fa fa-trash"></i>
											</button>
										</td>
										<td>
											<input class="form-control" disabled v-model="item.solicitud_producto.descripcion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`solicitud_productos.${index}.solicitud_producto.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td>
											<input  v-mask="'####-##-##'" class="form-control"  v-model="item.f_necesidad_producto" >
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`solicitud_productos.${index}.f_necesidad_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td>
											<input class="form-control" disabled v-model="item.solicitud_proveedor.nombre_comercial">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalleProductos.${index}.solicitud_proveedor.id_proveedor`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td>
											<input  class="form-control" type="number" v-model.number="item.cantidad">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`solicitud_productos.${index}.cantidad`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input  class="form-control" type="number" v-model.number="item.precio_info">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`solicitud_productos.${index}.precio_info`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="number" v-model.number="item.descuento">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`solicitud_productos.${index}.descuento`]"
														v-text="message">
												</li>
											</ul>
										</td>
										<td>
											<strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{sub_total(item)| formatMoney(2)}}</strong>
										</td>
									</tr>
									<tr></tr>
								</template>
								</tbody>
								<tfoot>
								<tr>
									<td colspan="6"></td>
									<td>Subtotal</td>
									<td> <strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{total_subt | formatMoney(2)}}</strong></td>
								</tr>
								<tr>
									<td colspan="6"></td>
									<td>Descuento</td>
									<td> <strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{total_descuento | formatMoney(2)}}</strong></td>
								</tr>
								<tr>
									<td colspan="5"></td>
									<td>I.V.A.</td>
									<td><input class="form-control" min="0" max="99" v-model.number="form.porcentaje_iva"></td>
									<td> <strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{calcular_impuesto | formatMoney(2)}}</strong></td>
								</tr>
								<tr>
									<td></td>
									<td></td>
									<td class="item-footer" colspan="2"> Total Unidades</td>
									<td  class="item-footer">
										<strong>{{total_cantidad}}</strong>
									</td>
									<td></td>
									<td>Total</td>
									<td> <strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{gran_total | formatMoney(2)}}</strong></td>
								</tr>

								</tfoot>
							</table>
						</div>
					</div>

					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'listado-solicitudes-compras' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button
								:disabled="btnActionDraft !== 'Guardar Borrador'"
								@click="form.es_borrador=true;actualizar()"
								class="btn btn-dark"
								type="button"
						>{{ btnActionDraft }}</button>
						<button
								:disabled="btnAction !== 'Actualizar y Solicitar'"
								@click="form.es_borrador=false;actualizar()"
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
	import solicitud from "../../api/solicitudes_compras";
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				productosBusqueda: {},
				productosBusquedaURL: "/inventario/productos/buscarPS",
				es: es,
				format: "dd-MM-yyyy",
				areas: [],
				proveedores: [],
				productos: [],
				trabajadores: [],
				//sucursales:[],
				monedas:[],
				bodegas:[],
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,
				detalleForm:{
					productox: {},
					proveedorx: "",
					cantidad: 1,
					monto_descuento:0,
					precio_info: 0,
					subtotal: 0,
					total: 0,
					f_necesidad_producto: moment(new Date()).format("YYYY-MM-DD"),
				},

				total_cantidadx:0,
				total_subtotalx:0,
				total_ivax:0,
				total_descuentox:0,
				total_finalx:0,

				form: {
					es_borrador:true,
					observacion: "",
					f_necesidad: moment(new Date()).format("YYYY-MM-DD"),
					solicitud_trabajador: "",
					solicitud_sucursal: "",
					solicitud_area: "",
					total: 0,
					porcentaje_iva:0,
					iva:0,
					solicitud_productos: [],
				},
				btnAction: "Actualizar y Solicitar",
				btnActionDraft: "Guardar Borrador",
				errorMessages: []
			};
		},
			computed: {
				total_cantidad() {
					this.total_cantidadx= this.form.solicitud_productos.reduce((carry, item) => {
						return (carry + Number(item.cantidad))
					}, 0)
					return this.total_cantidadx;
				},
				total_subt() {
					this.total_subtotalx= Number(this.form.solicitud_productos.reduce((carry, item) => {
								return(carry + Number(Number(item.subtotal).toFixed(2)));
							}
							, 0).toFixed(2))
					return this.total_subtotalx;
				},
				total_descuento() {
					this.total_descuentox= Number(this.form.solicitud_productos.reduce((carry, item) => {
								return(carry + Number( (Number(item.cantidad * item.precio_info).toFixed(2))* Number(item.descuento/100).toFixed(2)));
							}
							, 0).toFixed(2))
					return this.total_descuentox;
				},
				calcular_impuesto() {
					this.form.iva =  Number((Number(this.total_subtotalx -this.total_descuentox) * Number(this.form.porcentaje_iva/100)).toFixed(2));
					this.total_ivax= this.form.iva;
					return this.form.iva;
				},

				gran_total() {

					this.form.total =  Number(Number(this.total_subtotalx -this.total_descuentox).toFixed(2));
					this.total_finalx=this.form.total;
					return Number(this.total_finalx.toFixed(2))+Number(this.total_ivax.toFixed(2));
				},
			},
			methods: {
				seleccionarProducto() {
					var self = this
					if (self.detalleForm.productox)
						self.detalleForm.cantidad = 1;
					self.detalleForm.precio_info = self.detalleForm.productox.precio_compra;
					self.$refs.cantidad.focus();
				},
				/*seleccionarProducto(e) {
					const productoP = e.target.value;
					var self = this;
					self.detalleForm.productox = productoP;

					if(self.detalleForm.productox)
						self.detalleForm.precio_info = self.detalleForm.productox.precio_compra;

				},*/
				obtenerSolicitud() {
					var self = this
					solicitud.obtenerSolicitud({
						id_solicitud_compra: this.$route.params.id_solicitud_compra,
						cargar_dependencias: true,
					}, data => {

						//self.sucursales = data.sucursales;
						self.monedas = data.monedas;
						self.bodegas = data.bodegas;
						self.areas= data.areas;
						self.trabajadores= data.trabajadores;
						self.proveedores= data.proveedores;
						self.productos= data.productos;
						self.form = data.solicitud;
						self.loading=false;
						if(self.form.estado !== 99){
							alertify.error("La solicitud ya no puede ser actualizada",5);
							this.$router.push({
								name: "listado-solicitudes-compras"
							});
						}
					})
				},
				sub_total(itemX) {
					itemX.subtotal= Number((Number(itemX.precio_info)* Number(itemX.cantidad)).toFixed(2));
					itemX.monto_descuento= Number(Number(itemX.subtotal* Number(itemX.descuento/100)).toFixed(2));
					itemX.total =itemX.subtotal - itemX.monto_descuento;
					if(!isNaN(itemX.total)){
						return itemX.total;
					}
					else return 0;
				},

				onDateSelect(date) {
					this.form.f_necesidad = moment(date).format("YYYY-MM-DD"); //
				},
				onDateSelect2(date) {
					this.detalleForm.f_necesidad_producto = moment(date).format("YYYY-MM-DD"); //
					console.log( this.detalleForm.f_necesidad_producto);
				},
				agregarDetalle() {
					let self = this;
					if(this.detalleForm.productox){
						if(this.detalleForm.cantidad>0 && this.detalleForm.precio_info > 0){

							let i = 0;
							let keyx = 0;
							if(self.form.solicitud_productos){
								self.form.solicitud_productos.forEach((productox, key) => {
									//console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
									if(self.detalleForm.productox.id_producto===productox.solicitud_producto.id_producto){
										i++;
										keyx = key;
									}
								});
							}

							if(i === 0){
								this.detalleForm.productox.descripcion = this.detalleForm.productox.text;
								this.form.solicitud_productos.push({
									solicitud_producto: this.detalleForm.productox,
									solicitud_proveedor: this.detalleForm.proveedorx,
									id_producto: this.detalleForm.productox.id_producto,
									id_proveedor: this.detalleForm.proveedorx.id_proveedor,
									cantidad: this.detalleForm.cantidad,
									precio_info: this.detalleForm.precio_info,
									f_necesidad_producto: this.detalleForm.f_necesidad_producto,
									descuento: 0,
									monto_descuento:Number(0),
									subtotal: 0,
									total: 0,
								});
								this.detalleForm.productox={};
								//this.detalleForm.proveedorx='';
								this.detalleForm.cantidad=0;
								this.detalleForm.precio_info=0;
								this.detalleForm.subtotal=0;
								this.detalleForm.monto_descuento=0;
								this.detalleForm.descuento=0;
								this.detalleForm.total=0;

							}else{
								this.$swal.fire({
									title: 'El producto ya existe en el detalle, desea sumar la nueva cantidad al monto existente?',
									text: "También se sobreescribirá el costo unitario",
									type: 'warning',
									showCancelButton: true,
									confirmButtonColor: '#3085d6',
									cancelButtonColor: '#d33',
									confirmButtonText: 'Si, confirmar',
									cancelButtonText:'Cancelar'
								}).then((result) => {
									if (result.value) {
										self.form.solicitud_productos[keyx].cantidad = Number(self.form.solicitud_productos[keyx].cantidad) + self.detalleForm.cantidad;
										self.form.solicitud_productos[keyx].precio_info = self.detalleForm.precio_info;
										this.detalleForm.productox={};
										this.detalleForm.proveedorx='';
										this.detalleForm.cantidad=0;
										this.detalleForm.precio_info=0;
										this.detalleForm.subtotal=0;
										this.detalleForm.monto_descuento=0;
										this.detalleForm.descuento=0;
										this.detalleForm.total=0;
									}
								})
							}

						}else{
							alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero",5);
						}
					}else{
						alertify.warning("Debe seleccionar un producto",5);
					}
				},
				eliminarLinea(item, index) {
					if (this.form.solicitud_productos.length >= 1) {
						this.form.solicitud_productos.splice(index, 1);

					}else{
						this.form.solicitud_productos=[];
					}
				},

				actualizar() {
					var self = this;
					if(self.form.estado === 99 ){
					self.btnAction = "Registrando, espere....";
						self.loading=true;
					solicitud.actualizar(
							self.form,
							data => {
								if(self.form.es_borrador){
									alertify.success("El borrador de la solicitud fue actualizado correctamente",5);
								}else{
									alertify.success("La solicitud fue actualizada y SOLICITADA correctamente",5);
								}
								self.loading=false;
								this.$router.push({
									name: "listado-solicitudes-compras"
								});
							},
							err => {
								self.loading=false;
								self.errorMessages = err;
								self.btnAction = "Actualizar y Solicitar";
								self.btnActionDraft = "Guardar Borrador";
							}
					);
					}else{
						alertify.error("La solicitud ya no puede ser actualizada",5);
					}
				}
			},
			mounted() {
				this.obtenerSolicitud();
			}
		};
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>