<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Revisión de Solicitud de Compra</div>
						<div class="box-description">Formulario para revisión de Solicitud de compra</div>
					</div>

					<div class="form-wizard-nav">
						<template v-if="form.estado===1">
							<div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Solicitado</div>
							<div class="step">Cotizado</div>
							<div class="step">Autorizado</div>
							<div class="step">Orden Compra</div>
						</template>
						<template v-if="form.estado===2">
							<div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Solicitado</div>
							<div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Cotizado</div>
							<div class="step">Autorizado</div>
							<div class="step">Orden Compra</div>
						</template>
						<template v-if="form.estado===3">
							<div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Solicitado</div>
							<div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Cotizado</div>
							<div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Autorizado</div>
							<div class="step">Orden Compra</div>
						</template>

					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Usuario Solicitante</label>
								<v-select :disabled="true"
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
								<v-select :disabled="true"
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
								<v-select :disabled="true"
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
										:disabled="true"
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
										:disabled="true"
										label="descripcion"
										v-model="form.solicitud_moneda"
										:options="monedas"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.solicitud_moneda" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Necesidad</label>
								<datepicker :disabled="true" :format="format" :language="es" :value="new Date()" @selected="onDateSelect"></datepicker>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.f_necesidad"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-9">
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
					<!--<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label for>Producto</label>

								<typeahead style="width: 100%;" :initial="detalleForm.productox" :trim="80" :url="productosBusquedaURL" @input="seleccionarProducto"></typeahead>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.productox"
											v-text="message"
									></li>
								</ul>
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
									<div class="input-group-addon">C$
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

					</div>-->

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
									<th >Cantidad {{form.estado === 1||form.estado === 2? 'Cotizado': ''}}</th>
									<th >Precio Unitario {{form.estado === 1 || form.estado === 2? 'Cotizado': ''}}</th>
									<th >Descuento</th>
									<th >SubTotal</th>
								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in form.solicitud_productos">
									<tr>
										<td style="width: 2%">
											<button disabled @click="eliminarLinea(item, index)">
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
											<input  v-mask="'####-##-##'" disabled class="form-control"  v-model="item.f_necesidad_producto" >
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

										<template v-if="form.estado !== 1">

											<td>
												<input :disabled="form.estado !== 1" class="form-control" type="number" v-model.number="item.cantidad_cotizado">
												<ul class="error-messages">
													<li
															:key="message"
															v-for="message in errorMessages[`solicitud_productos.${index}.cantidad`]"
															v-text="message">
													</li>
												</ul>
											</td>


											<td>
												<input  :disabled="form.estado !== 1" class="form-control" type="number" v-model.number="item.precio_cotizado">
												<ul class="error-messages">
													<li
															:key="message"
															v-for="message in errorMessages[`solicitud_productos.${index}.precio_info`]"
															v-text="message">
													</li>
												</ul>
											</td>



										</template>
										<template v-else>

											<td>
												<input :disabled="form.estado !== 1" class="form-control" type="number" v-model.number="item.cantidad">
												<ul class="error-messages">
													<li
															:key="message"
															v-for="message in errorMessages[`solicitud_productos.${index}.cantidad`]"
															v-text="message">
													</li>
												</ul>
											</td>


											<td>
												<input  :disabled="form.estado !== 1" class="form-control" type="number" v-model.number="item.precio_info">
												<ul class="error-messages">
													<li
															:key="message"
															v-for="message in errorMessages[`solicitud_productos.${index}.precio_info`]"
															v-text="message">
													</li>
												</ul>
											</td>

										</template>



										<td>
											<input :disabled="form.estado !== 1" class="form-control" type="number" v-model.number="item.descuento">
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
									<td><input :disabled="form.estado !== 1" class="form-control" min="0" max="99" v-model.number="form.porcentaje_iva"></td>
									<td> <strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{calcular_impuesto | formatMoney(2)}}</strong></td>
								</tr>
								<tr>
									<td colspan="2"></td>
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
						<template v-if="form.estado === 1">
						<button
									:disabled="btnAction !== 'Confirmar'"
									@click="confirmar(2)"
									class="btn btn-primary"
									type="button"
						>Confirmar Cotización</button>
							<button
									:disabled="btnAction !== 'Confirmar'"
									@click="confirmar(0)"
									class="btn btn-danger"
									type="button"
							>Rechazar</button>

						</template>

						<template v-if="form.estado === 2">
							<button
									:disabled="btnAction !== 'Confirmar'"
									@click="confirmar(3)"
									class="btn btn-primary"
									type="button"
							>Autorizar Solicitud</button>
							<button
									:disabled="btnAction !== 'Confirmar'"
									@click="confirmar(0)"
									class="btn btn-danger"
									type="button"
							>Rechazar</button>

						</template>

						<template v-if="loading">
							<BlockUI :message="msg" :url="url"></BlockUI>
						</template>


					</div>
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
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,
				productosBusqueda: {},
				productosBusquedaURL: "/inventario/productos/buscarPS",
				es: es,
				format: "dd-MM-yyyy",
				areas: [],
				proveedores: [],
				productos: [],
				trabajadores: [],
			//	sucursales:[],
				monedas:[],
				bodegas:[],


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

				form: {
					es_borrador:true,
					observacion: "",
					f_necesidad: moment(new Date()).format("YYYY-MM-DD"),
					solicitud_trabajador: "",
					solicitud_sucursal: "",
					solicitud_area: "",
					total: 0,
					iva:0,
					porcentaje_iva:0,
					solicitud_productos: [],
				},
				btnAction: "Confirmar",
				errorMessages: []
			};
		},
			computed: {
				total_cantidad() {
					return this.form.solicitud_productos.reduce((carry, item) => {

						if(this.form.estado !==1){
							return (carry + Number(item.cantidad_cotizado))
						}
						else{
							return (carry + Number(item.cantidad))
						}


					}, 0)
				},
				total_subt() {
					return this.form.solicitud_productos.reduce((carry, item) => {
								if(this.form.estado !==1){
									return(carry + Number( (Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2))));
								}
								else{
									return(carry + Number( (Number(item.cantidad * item.precio_info).toFixed(2))));
								}
							}
							, 0)
				},
				total_descuento() {
					return this.form.solicitud_productos.reduce((carry, item) => {
						if(this.form.estado !==1){
							return(carry + Number( (Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2))* Number(item.descuento/100).toFixed(2)));
						}
						else{
							return(carry + Number( (Number(item.cantidad * item.precio_info).toFixed(2))* Number(item.descuento/100).toFixed(2)));
						}

							}
							, 0)
				},

				calcular_impuesto() {
					//console.log(this.form.estado);
					this.form.iva = Number((this.form.solicitud_productos.reduce((carry, item) => {
								//return(carry + Number(Number(item.subtotal*0.15).toFixed(2)));

								if(this.form.estado > 2){
									return(carry + Number(Number(item.subtotal) * Number(this.form.porcentaje_iva/100)));
								}
								else{
									return(carry + Number( (Number(item.cantidad * item.precio_info).toFixed(2))* (Number(this.form.porcentaje_iva/100))* Number( 1- (item.descuento/100)).toFixed(2)));
								}
							}
							, 0)).toFixed(2));

					return Number((this.form.iva).toFixed(2));
				},

				gran_total() {
					this.form.total =  Number(this.form.solicitud_productos.reduce((carry, item) => {
                            if(this.form.estado > 2){
                                return(carry + Number( (Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2))* Number( 1- (item.descuento/100)).toFixed(2)));
                            }
                            else{
                                return(carry + Number( (Number(item.cantidad * item.precio_info).toFixed(2))* Number( 1- (item.descuento/100)).toFixed(2)));
                            }
							}
							, 0).toFixed(2))

					return this.form.total+this.form.iva;
				},
			},
			methods: {

				confirmar(estadox){
					let titulox = '';
					if(estadox===0){
						titulox='Esta seguro de rechazar ésta solicitud de compra?';
					}else if(estadox===2){
						titulox='Esta seguro de cambiar el estado a Cotizado?';
					}else if(estadox===3) {
						titulox = 'Esta seguro de autorizar esta solicitud de compra?';
					}

					this.$swal.fire({
						title: titulox,
						text: "Revise bien los datos, esta acción no se puede deshacer.",
						type: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Si, confirmar',
						cancelButtonText:'Cancelar'
					}).then((result) => {
						if (result.value) {
							this.cambiarEstado(estadox);
						}
					})
				},

				seleccionarProducto(e) {
					const productoP = e.target.value;
					var self = this;
					self.detalleForm.productox = productoP;

					if(self.detalleForm.productox)
						self.detalleForm.precio_info = self.detalleForm.productox.costo_estandar;

				},
				obtenerSolicitud() {
					var self = this
					solicitud.obtenerSolicitud({
						id_solicitud_compra: self.$route.params.id_solicitud_compra,
						cargar_dependencias: true,
					}, data => {

						//self.sucursales = data.sucursales;
						self.monedas = data.monedas;
						self.bodegas = data.bodegas;
						self.areas= data.areas;
						self.trabajadores= data.trabajadores;
						self.proveedores= data.proveedores;
						self.form = data.solicitud;

						if(self.form.estado === 99 || self.form.estado === 4 || self.form.estado === 0){
							alertify.error("La solicitud no puede ser revisada",5);
							this.$router.push({
								name: "listado-solicitudes-compras"
							});
						}
						self.loading=false;
					})
				},
				sub_total(itemX) {

                    if(this.form.estado !==1){
                        itemX.subtotal= Number((Number(itemX.precio_cotizado)* Number(itemX.cantidad_cotizado)).toFixed(2));
                    }
                    else{
                        itemX.subtotal= Number((Number(itemX.precio_info)* Number(itemX.cantidad)).toFixed(2));
                    }


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
					if(this.detalleForm.productox){
						if(this.detalleForm.cantidad>0 && this.detalleForm.precio_info > 0){
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
							this.detalleForm.proveedorx='';
							this.detalleForm.cantidad=0;
							this.detalleForm.precio_info=0;
							this.detalleForm.subtotal=0;
							this.detalleForm.monto_descuento=0;
							this.detalleForm.descuento=0;
							this.detalleForm.total=0;
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


				cambiarEstado(estadox) {
					var self = this;
					self.loading=true;
					if( (self.form.estado === 1 && (estadox === 2|| estadox === 0)) || (self.form.estado === 2 && (estadox === 3|| estadox === 0) || (self.form.estado === 3 && (estadox === 4|| estadox === 0)))){
					self.btnAction = "Registrando, espere.....";

					solicitud.cambiarEstado({
							id_solicitud_compra:this.$route.params.id_solicitud_compra,
							estado: estadox,
							productos: self.form.solicitud_productos,
							},
							data => {
								if(estadox === 2){
									alertify.success("El estado de la solicitud ha cambiado a Cotizado",5);
								}else if(estadox === 3){
									alertify.success("El estado de la solicitud ha cambiado a Autorizado",5);
								}
								self.loading=false;
								this.$router.push({
									name: "mostrar-solicitud-compra",
									params: { id_solicitud_compra: self.form.id_solicitud_compra }
								});
							},
							err => {
								self.errorMessages = err;
								self.btnAction = "Confirmar";
							}
					);
					}else{
						alertify.error("La solicitud no puede ser actualizada",5);
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