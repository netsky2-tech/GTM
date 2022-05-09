<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Conteo por códigos de garantía</div>
						<div class="box-description">Formulario para registrar conteo por códigos de garantía</div>
					</div>

					<div class="row">
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
					</div>

					<div class="alert alert-success">
						<span><strong>Consolidado de productos</strong></span>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<ul class="error-messages">
								<li
										:key="message"
										v-for="message in errorMessages.detalleProductos"
										v-text="message"
								></li>
							</ul>
							<table class="table table-bordered">
								<thead>
								<tr>
									<th>Producto</th>
									<th>Cantidad</th>
									<!--  <th >Costo Unitario</th>

                                       <th >SubTotal</th>-->

								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in form.detalleProductos">
									<tr>
										<td>
											<input class="form-control" disabled v-model="item.descripcion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalleProductos.${index}.productox.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input class="form-control" type="number" disabled v-model.number="item.cantidad">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalleProductos.${index}.cantidad`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<!-- <td>
                                           <input class="form-control" readonly type="number" v-model.number="item.precio_unitario">
                                           <ul class="error-messages">
                                             <li
                                                     :key="message"
                                                     v-for="message in errorMessages[`detalleProductos.${index}.precio_unitario`]"
                                                     v-text="message">
                                             </li>
                                           </ul>
                                         </td>-->

										<!--<td>
                                             <strong>C$ {{sub_total(item)| formatMoney(2)}}</strong>
                                           </td>-->


									</tr>
									<tr></tr>
								</template>
								</tbody>
								<tfoot>

								<tr>
									<td colspan="3"></td>
									<!--<td>Subtotal</td>
                                    <td> <strong>C$ {{total_subt | formatMoney(2)}}</strong></td>-->
								</tr>
								<tr>
									<td class="item-footer"> Total Unidades</td>
									<td class="item-footer">
										<strong>{{total_cantidad}}</strong>
									</td>
									<!-- <td>Total</td>
                                     <td> <strong>C$ {{gran_total | formatMoney(2)}}</strong></td>-->
								</tr>

								</tfoot>
							</table>
						</div>
					</div>
					<br>

					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-conteo-fisico-1' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button
								:disabled="btnAction !== 'Registrar Conteo'"
								@click="confirmar"
								class="btn btn-primary"
								type="button"
						>{{ btnAction }}</button>
					</div>

					<hr>

					<div class="alert alert-success">
						<span><strong>Detalle de baterías</strong></span>
					</div>

					<div class="row">
						<!--<div class="col-sm-3">
							<div class="form-group">
								<label for>Bateria</label>
								<typeahead  ref="bateria" :params="{id_entrada: form.id_entrada}" style="width: 100%;" :initial="detalleForm.productox" :trim="80" :url="productoEntradaBusquedaURL" @input="seleccionarProducto"></typeahead>
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.productox"
										Administrar Entradas de productos por inventario Inicial	v-text="message"
									></li>
								</ul>
							</div>
						</div>-->
						<!--<div class="col-sm-4">
							<div class="form-group">
								<label for>Producto</label>
							<multiselect v-model="detalleForm.productox" :options="productos"
										deselect-label="No se puede eliminar este valor"
										track-by="id_producto"
										label="text"
										placeholder="Selecciona un producto"
										:searchable="true"
										:show-labels="false"
										:allow-empty="false"
										 ref="bateria"
										 @input= "cargar_detalles_producto"
							></multiselect>

							</div>
						</div>-->

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Código Garantía</label>
								<input @focus="$event.target.select()" @keydown.enter="buscarBateria" class="form-control"  ref="bateria"  v-model="detalleForm.codigo_garantia" >

								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.codigo_garantia"
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
									<th >Batería</th>
									<th >Código Garantía</th>
									<th class="text-center" >Estado</th>
								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in filteredItems">
									<template v-if="item.estado===1">
									<tr>

										<td>
											<input class="form-control" disabled v-model="item.descripcion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalle_baterias.${index}.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input  disabled  class="form-control" v-model="item.codigo_garantia">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalle_baterias.${index}.codigo_garantia`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td class="text-center">
											<div v-if="item.registrada">
												<i v-tooltip="'Bateria registrada'" aria-hidden="true" class="fa fa-check" :style="'color:green;'">  Guardada</i>
											</div>
											<div v-else>
												<!--<i @click="registrarBateria(item)" v-tooltip="'Registrar bateria manualmente'"
												   aria-hidden="true" class="fa fa-save" :style="'color:blue;'"></i>-->
												<i @click="registrarBateria(item)" v-tooltip="'Registrar bateria manualmente'" aria-hidden="true" class="fa fa-save" :style="'color:blue;'">{{item.guardadoEnProgreso?'  Guardando....':'  Pendiente'}}</i>
											</div>
										</td>
									</tr>
								</template>
								</template>
								</tbody>
								<tfoot>
								</tfoot>
							</table>

							<br>

							<div class="col-sm-12">
								<div class="form-group">
									<button  @click="cambiarPaginacion(-999)" class="btn btn-info btn-agregar" >Mostrar Primeros 10</button>
									<button  @click="cambiarPaginacion(10)" class="btn btn-primary btn-agregar">Mostrar Más</button>
									<button  @click="cambiarPaginacion(-10)" class="btn btn-danger btn-agregar">Mostrar Menos</button>
									<button  @click="cambiarPaginacion(999)" class="btn btn-info btn-agregar" >Mostrar Todos</button>
								</div>
							</div>

						</div>

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
	import entrada from "../../api/conteo-fisico";
	//import es from 'vuejs-datepicker/dist/locale/translations/es'
    import loadingImage from '../../assets/images/block50.gif'
	export default {
		/*components: {
			Multiselect
		},*/

		data() {
			return {
				//productoEntradaBusquedaURL: "/entradas/productos/buscar",
				loading:true,
				registrandoBateria:false,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
			 	mascaraCodigo:'X############',
				codigoAutomatico:false,
				total_pendientes:0,
				contador : 1,
				inicio_paginacion:0,
				limite_paginacion:10,
				productos: [],
				bodegas: [],
				detalleForm:{
					codigo_garantia: ''
				},
				detalle_baterias: [],
				consolidadoProductos:[],
				form: {
					id_conteo_fisico:'',
					conteo_bodega: "",
					detalleProductos: [],
				},
				btnAction: "Registrar Conteo",
				errorMessages: []
			};
		},
		methods: {

			agruparProductos(){
				let self = this;

				var counts = self.detalle_baterias.reduce((p, c) => {
					var name = c.descripcion;

					if (!p.hasOwnProperty(name)) {
						p[name] = 0;
					}
					if(c.estado===1){
						p[name]++;
					}
					return p;
				}, {});

				self.consolidadoProductos = Object.keys(counts).map(k => {
					return {nombre_producto: k, cantidad: counts[k]}; });
			},
			cambiarPaginacion(limite){

				var self = this;
				if(self.detalle_baterias.length>=1){
					if(limite === 999){//mostrar todos
						self.inicio_paginacion=0;
						self.limite_paginacion=self.detalle_baterias.length;
					}else if(limite === -999){
						self.inicio_paginacion=0;
						self.limite_paginacion=10;
					}else{
						self.inicio_paginacion=0;
						self.limite_paginacion=self.limite_paginacion+limite;
					}
				}

			},

			confirmar(){
				this.$swal.fire({
					title: 'Esta seguro de confirmar el registro del conteo?',
					text: "Revise bien los datos proporcionados.",
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


			nuevo() {
				var self = this;
				entrada.nuevo({
						}, data => {
							self.productos = data.productos;
							self.bodegas = data.bodegas;
							self.form.id_conteo_fisico =data.id_conteo_fisico;
							//self.agruparProductos();
							self.loading=false;
						},
						err => {
							console.log(err);
						})

			},



			registrarBateria(bateria) {
				var self = this;
				if(!self.registrandoBateria && !bateria.registrada /*&& bateria.estado===1*/){
					//self.registrandoBateria = true;
					bateria.guardadoEnProgreso = true;
				entrada.registrarBateria(
						{
							id_conteo_fisico:self.form.id_conteo_fisico,
						codigo_garantia:bateria.codigo_garantia,
						id_producto:bateria.id_producto,
							id_bateria:bateria.id_bateria,
							id_conteo_fisico_bateria:	bateria.id_conteo_fisico_bateria,
						estado:	bateria.estado,
						},
						data => {
							//self.form = data.orden;
							bateria.registrada  = true;
							bateria.id_conteo_fisico_bateria = data.id_conteo_fisico_bateria;
							//self.registrandoBateria = false;
							bateria.guardadoEnProgreso = false;
						},
						err => {
							bateria.registrada  = false;
							console.log(err);
							//self.registrandoBateria = false;
							bateria.guardadoEnProgreso = false;
						}
				);
				}
			},


			eliminarLinea(item, index) {
				var self = this;
				if (this.detalle_baterias.length >= 1) {
					//self.form.entrada_productos[keyx].cantidad_recibida--;
					this.detalle_baterias[index].estado = 0;
					this.detalle_baterias[index].registrada = false;

					self.agruparProductos();
					/*if(item.id_entrada_inicial_bateria){

						this.detalle_baterias.splice(index, 1);
					}*/


					//guardadoEnProgreso: false,
					//		estado: 0,

				}else{
					this.detalle_baterias=[];
				}
			},

			buscarBateria() {
				var self = this;
				self.loading = true;
				let cod_bat = self.detalleForm.codigo_garantia;
				self.detalleForm.codigo_garantia='';
				var existeCodigoGarantia=false;
				let existeProducto= false;
				//console.log(self.detalleForm.codigo_garantiax.toUpperCase());

				self.detalle_baterias.forEach((bateriax, key) => {
					//console.log(self.detalleForm.codigo_garantiax.toUpperCase());
					//console.log(bateriax.codigo_garantia.toUpperCase());
					if(cod_bat.toUpperCase() === bateriax.codigo_garantia.toUpperCase()){
						existeCodigoGarantia=true;
					}
				});

				if(!existeCodigoGarantia){
				//self.$refs.precio_unitario.focus();
				entrada.buscarCodigoBateriaAny({
					codigo_bateria: cod_bat,
				}, data => {
					//self.detalleForm.codigo_garantia='';
					self.$refs.bateria.focus();
					if(data !== null){

						if(self.form.detalleProductos){
							self.form.detalleProductos.forEach((productox, key) => {
								if(data.id_producto===productox.id_producto){
									existeProducto=true;
								}
							});
						}


						if(existeProducto){
							//console.log('existe producto!');
							let keyx = -1;
							if(self.form.detalleProductos){
								self.form.detalleProductos.forEach((productox, key) => {
									if(data.id_producto===productox.id_producto){
										keyx = key;
									}
								});
							}

							//if((self.form.detalleProductos[keyx].cantidad_despachada + 1) <= self.form.detalleProductos[keyx].cantidad_saliente){
							if(keyx>=0){

								let verificacion2 = false;
								self.detalle_baterias.forEach((bateriax, key) => {
									//console.log(self.detalleForm.codigo_garantiax.toUpperCase());
									//console.log(bateriax.codigo_garantia.toUpperCase());
									if(data.codigo_garantia.toUpperCase() === bateriax.codigo_garantia.toUpperCase()){
										verificacion2=true;
									}
								});

								if(!verificacion2){
								self.form.detalleProductos[keyx].cantidad++;
								this.detalle_baterias.unshift({
									id_bateria:data.id_bateria,
									id_producto:data.id_producto,
									id_conteo_fisico_bateria:null,
									codigo_garantia:data.codigo_garantia,
								//	fecha_activacion:data.fecha_activacion,
									descripcion:data.bateria_producto.descripcion,
									estado:1,
									registrada:false
								});
								}
								alertify.success("Batería agregada!",5);


								if(self.cantidad_sin_registrar()>=5){
									self.detalle_baterias.forEach((bateriax, key) => {
										if(!bateriax.registrada){
											self.registrarBateria(bateriax)
										}
									});
								}
								self.cantidad_sin_registrar();
								self.$refs.bateria.focus();
							}
							/*}else{
								alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
							}*/
						}else{
							//console.log('no existe producto!');
							self.form.detalleProductos.push({
								descripcion:data.bateria_producto.descripcion,
								id_producto:data.id_producto,
								cantidad: 1,
							});


							//if((self.form.detalleProductos[keyx].cantidad_despachada + 1) <= self.form.detalleProductos[keyx].cantidad_saliente){
							//self.form.detalleProductos[keyx].cantidad_despachada++;
							this.detalle_baterias.unshift({
								id_bateria:data.id_bateria,
								id_producto:data.id_producto,
								id_conteo_fisico_bateria:null,
								codigo_garantia:data.codigo_garantia,
								//fecha_activacion:data.fecha_activacion,
								descripcion:data.bateria_producto.descripcion,
								estado:1,
								registrada:false
							});


							if(self.cantidad_sin_registrar()>=5){
								self.detalle_baterias.forEach((bateriax, key) => {
									if(!bateriax.registrada){
										self.registrarBateria(bateriax)
									}
								});
							}
							self.cantidad_sin_registrar();
							self.$refs.bateria.focus();
							/*}else{
								alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
							}*/
						}

						//self.agregarDetalle();
						/*
						self.codigo_garantia = data[0].codigo_garantia;
						self.reservada = data[0].reservada;
						self.estado_bateria = data[0].estado_bateria;
						self.descripcion_producto = data[0].descripcion_producto;
						self.nombre_comercial = data[0].nombre_comercial;
						self.fecha_activacion = data[0].fecha_activacion;
						self.fecha_ingreso = data[0].fecha_ingreso;
						*/

					}else{
						alertify.warning("No se encuentra esta batería.",5);
						//self.detalleForm.codigo_garantia='';
						self.$refs.bateria.focus();
					}
					self.errorMessages=[];
					self.loading = false;
				}, err => {
					//console.log(err);
					self.errorMessages=err;
					//self.detalleForm.codigo_garantia='';
					if(err.codigo_bateria){
						self.$refs.bateria.focus();
						//self.detalleForm.codigo_garantia='';
						alertify.warning("No se encuentra esta batería.",5);
					}
					self.loading = false;
				})

				}else{
					self.loading = false;
					self.$refs.bateria.focus();
					//self.detalleForm.codigo_garantia='';
					alertify.warning("Ya existe ese código de garantía.",5);
				}

			},


			agregarDetalle() {
				var self = this;
				if(self.detalleForm.codigo_garantia){
					let existeCodigoGarantia= false;
					let existeProducto= false;
					let estadoExistente=0;
					self.detalle_baterias.forEach((bateriax, key) => {
						if(self.detalleForm.codigo_garantia.toUpperCase() === bateriax.codigo_garantia.toUpperCase()){
							existeCodigoGarantia=true;
							estadoExistente=bateriax.estado;
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
									estado:1,
									id_producto: self.detalleForm.productox.id_producto,
									id_salida_producto_bateria: 0,
									id_bateria: this.detalleForm.productox.id_bateria,
									codigo_garantia: this.detalleForm.productox.codigo_garantia,
									id_salida_producto: 0,
									id_salida: this.form.id_salida,
									descripcion: this.detalleForm.productox.bateria_producto.descripcion,
									registrada:false,
									guardadoEnProgreso: false
								});
								alertify.success("Batería agregada!",5);


								if(self.cantidad_sin_registrar()>=5){
									self.detalle_baterias.forEach((bateriax, key) => {
										if(!bateriax.registrada){
											self.registrarBateria(bateriax)
										}
									});
								}
								self.cantidad_sin_registrar();


							}else{
								alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
							}
						}else{
							if(!estadoExistente){
								alertify.warning("Ya existe ese código de batería en el listado",5);
							}else{

							}
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

			registrar() {
				var self = this;
				//if(self.total_cantidad_recibida > 0){
				self.loading=true;
					self.form.detalle_baterias = self.detalle_baterias;
					self.btnAction = "Registrando, espere....";
					//if(self.form.estado === 1) {
						entrada.registrar(
								self.form,
								data => {
									//alertify.success("La entrada fue recibida correctamente",5);
									this.$swal.fire(
											'Conteo Registrado!',
											'El conteo fue registrado correctamente.',
											'success'
									)
									self.loading=false;
									this.$router.push({
										name: "listado-conteo-fisico-1"
									});
								},
								err => {
									alertify.error('Error Actualizando los datos',10);
									self.errorMessages = err;
									self.btnAction = "Registrar Conteo";
									self.loading=false;
								}
						);
					/*}else{
						alertify.error("La entrada ya no puede ser recibida",5);
						this.$router.push({
							name: "listado-conteo-fisico-1"
						});
					}*/
				/*}else{
					alertify.error("Se debe recibir al menos un producto",5);
				}*/
			},
			cantidad_sin_registrar() {
				var self = this;
				if(self.detalle_baterias){
					let i = 0;

					self.detalle_baterias.forEach((bateriax, key) => {
						if(!bateriax.registrada){
							i++;
						}
					});

					self.total_pendientes = i;

					return self.total_pendientes
				}else{
					return 0;
				}
			},
		},


		computed: {

			filteredItems: function () {
				return this.detalle_baterias.slice(this.inicio_paginacion, this.limite_paginacion)
			},

			total_cantidad() {
				return this.form.detalleProductos.reduce((carry, item) => {
					return (carry + Number(item.cantidad))
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