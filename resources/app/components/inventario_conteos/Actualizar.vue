<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Editar Conteo de Inventario Físico</div>
						<div class="box-description"></div>
					</div>
					<div class="row">


						<div class="col-sm-4">
							<div class="form-group">
								<label for>Area Solicitante</label>
								<v-select
										label="descripcion"
										v-model="form.conteo_area"
										:options="areas"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.conteo_area" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Sucursal</label>
								<v-select
										label="descripcion"
										v-model="form.conteo_sucursal"
										:options="sucursales"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.conteo_sucursal" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Bodega</label>
								<v-select
										label="descripcion"
										v-model="form.conteo_bodega"
										:options="bodegas"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.conteo_bodega" v-text="message"></li>
								</ul>
							</div>
						</div>



						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha Conteo</label>
								<datepicker :format="format" :language="es" v-model="fechax" :value="new Date()" @selected="onDateSelect"></datepicker>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.f_inventario"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>



						<div class="col-sm-4">
							<div class="form-group">
								<label for>Hora Inicio</label>
								<input class="form-control" type="time" v-model="form.hora_inicio">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.hora_inicio"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Hora Finalización</label>
								<input class="form-control" type="time" v-model="form.hora_fin">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.hora_fin"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

					</div>

					<div v-if="!form.conteo_bodega">
						<div class="alert alert-info">
							<span>Se requiere que seleccione una area para continuar.</span>
						</div>
						<hr>
					</div>

					<div class="alert alert-success">
						<span><strong>Detalle de productos</strong></span>
					</div>
					<div class="row">
						<div class="col-sm-4">
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
									<th >Cantidad</th>

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
											<input class="form-control" disabled v-model="item.descripcion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`conteo_productos.${index}.productox.id_producto`]"
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

									</tr>
									<tr></tr>
								</template>
								</tbody>
								<tfoot>


								<tr>
									<td class="item-footer" colspan="2"> Total Unidades</td>
									<td  class="item-footer">
										<strong>{{total_cantidad}}</strong>
									</td>
								</tr>


								</tfoot>
							</table>
						</div>
					</div>

					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'listado-conteo-fisico' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button
								:disabled="btnActionDraft !== 'Guardar Borrador'"
								@click="form.es_borrador=true;actualizar()"
								class="btn btn-dark"
								type="button"
						>{{ btnActionDraft }}</button>
						<button
								:disabled="btnAction !== 'Actualizar y Emitir'"
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
	import conteox from "../../api/inventario_conteo";
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				es: es,
				format: "dd-MM-yyyy",
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,

				areas: [],
				productos: [],
				sucursales:[],
				bodegas:[],
				fechax: new Date(),

				detalleForm:{
					productox: '',
					cantidad: 1,
				},

				form: {
					hora_inicio: "",
					hora_fin: "",
					f_inventario: moment(new Date()).format("YYYY-MM-DD"),
					conteo_sucursal: "",
					conteo_bodega:"",
					conteo_area: "",
					conteo_productos: [],
					es_borrador:false
				},

				btnAction: "Actualizar y Emitir",
				btnActionDraft: "Guardar Borrador",
				errorMessages: []
			};
		},
		computed: {

			total_cantidad() {
				return this.form.conteo_productos.reduce((carry, item) => {
					return (carry + Number(item.cantidad))
				}, 0)
			},
		},
			methods: {

				seleccionarProducto() {
					var self = this
					if (self.detalleForm.productox)
						self.detalleForm.cantidad = 1;
					self.detalleForm.precio_info = self.detalleForm.productox.costo_estandar;
					self.$refs.cantidad.focus();
				},

				onDateSelect(date) {
					//console.log(date); //
					this.form.f_inventario = moment(date).format("YYYY-MM-DD"); //
				},


				agregarDetalle() {
					let self = this;
					if(this.detalleForm.productox){
						if(this.detalleForm.cantidad>0 && this.detalleForm.precio_info > 0){


							let i = 0;
							let keyx = 0;
							if(self.form.conteo_productos){
								self.form.conteo_productos.forEach((productox, key) => {
									//console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
									if(self.detalleForm.productox.id_producto===productox.id_producto){
										i++;
										keyx = key;
									}
								});
							}

							if(i === 0){
								this.form.conteo_productos.push({
									productox: this.detalleForm.productox,
									id_producto: this.detalleForm.productox.id_producto,
									codigo_barra: this.detalleForm.productox.codigo_barra,
									descripcion: this.detalleForm.productox.text,
									cantidad: this.detalleForm.cantidad,
								});
								this.detalleForm.productox='';
								this.detalleForm.cantidad=0;

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
										self.form.conteo_productos[keyx].cantidad = Number(self.form.conteo_productos[keyx].cantidad) + self.detalleForm.cantidad;
										this.detalleForm.productox='';
										this.detalleForm.cantidad=0;
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
					if (this.form.conteo_productos.length >= 1) {
						this.form.conteo_productos.splice(index, 1);

					}else{
						this.form.conteo_productos=[];
					}
				},

				obtenerConteo() {
					var self = this
					conteox.obtenerConteo({
						id_inventario_fisico: this.$route.params.id_inventario_fisico,
						cargar_dependencias: true,
					}, data => {

						self.sucursales = data.sucursales;
						self.bodegas = data.bodegas;
						self.areas= data.areas;
						self.productos= data.productos;
						self.form = data.conteo;
						self.loading=false;
						if(self.form.estado !== 99){
							alertify.error("El conteo ya no puede ser actualizado",5);
							this.$router.push({
								name: "listado-conteo-fisico"
							});
						}
					})
				},

				actualizar() {
					var self = this;
					if(self.form.estado === 99 ){
					self.btnAction = "Registrando, espere....";
					self.btnActionDraft = "Registrando, espere....";
						self.loading=true;
					conteox.actualizar(
							self.form,
							data => {
								if(self.form.es_borrador){
									alertify.success("El borrador del conteo fue actualizado correctamente",5);
								}else{
									alertify.success("El conteo de inventario fue actualizado y EMITIDO correctamente",5);
								}
								self.loading=false;
								this.$router.push({
									name: "listado-conteo-fisico"
								});
							},
							err => {
								self.loading=false;
								self.errorMessages = err;
								self.btnAction = "Actualizar y Emitir";
								self.btnActionDraft = "Guardar Borrador";
							}
					);
					}else{
						alertify.error("El conteo de inventario ya no puede ser actualizado",5);
					}
				}
			},
			mounted() {
				this.obtenerConteo();
			}
		};
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>