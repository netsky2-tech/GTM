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
										v-for="message in errorMessages.conteo_productos"
										v-text="message"
								></li>
							</ul>
							<table class="table table-bordered"  >
								<thead>
								<tr>
									<th >Producto</th>
									<th >Cantidad Recibida</th>
								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in consolidadoProductos">
									<tr v-if="item.cantidad>0">
										<td>
											<input class="form-control" disabled v-model="item.descripcion">
										</td>
										<td>
											<input class="form-control" disabled type="number" v-model.number="item.cantidad">
										</td>
									</tr>
									<tr></tr>
								</template>
								</tbody>
								<tfoot>
								<tr>
									<td class="text-right">
										Total Unidades
									</td>
									<td class="text-left">
										{{total_unidades}}
									</td>
								</tr>


								</tfoot>
							</table>
						</div>
					</div>

					<hr>

					<div class="alert alert-success">
						<span><strong>Detalle de baterías</strong></span>
					</div>

					<div class="row">


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



						<div class="col-sm-12">
							<ul class="error-messages">
								<li
										:key="message"
										v-for="message in errorMessages.entrada_baterias"
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
											<input class="form-control" disabled v-model="item.producto_simple.descripcion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_baterias.${index}.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input  disabled  class="form-control" v-model="item.codigo_garantia">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`entrada_baterias.${index}.codigo_garantia`]"
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

					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-conteo-fisico-1' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button
								:disabled="btnAction !== 'Actualizar Conteo'"
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
				consolidadoProductos:[],
				form: {
					consolidadoProductosId:[],
					id_conteo_fisico:'',
					contiene_baterias: true,
					codigo_entrada: "",
					fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
					entrada_tipo: "",
					entrada_proveedor: "",
					conteo_bodega: "",
					entrada_baterias: [],
				},
				btnAction: "Actualizar Conteo",
				btnActionEmi: "Emitir Entrada",
				errorMessages: []
			};
		},
		methods: {

			confirmar(){
				this.$swal.fire({
					title: 'Esta seguro de confirmar el registro de la entrada?',
					text: "Revise bien los datos, es posible editar la entrada luego de guardar.",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						//this.actualizar();
						this.actualizar();
					}
				})
			},

			buscarBateria() {
				var self = this;
				self.loading = true;
				let cod_bat = self.detalleForm.codigo_garantia;
				self.detalleForm.codigo_garantia='';
				var existeCodigoGarantia=false;
				let existeProducto= false;
				//console.log(self.detalleForm.codigo_garantiax.toUpperCase());

				self.form.conteo_baterias.forEach((bateriax, key) => {
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

							if(self.consolidadoProductos){
								self.consolidadoProductos.forEach((productox, key) => {
									if(data.id_producto===productox.id_producto){
										existeProducto=true;
									}
								});
							}

							if(existeProducto){

								let keyx = -1;
								if(self.consolidadoProductos){
									self.consolidadoProductos.forEach((productox, key) => {
										if(data.id_producto===productox.id_producto){
											keyx = key;
										}
									});
								}

								if(keyx>=0){

									let verificacion2 = false;
									self.form.conteo_baterias.forEach((bateriax, key) => {
										if(data.codigo_garantia.toUpperCase() === bateriax.codigo_garantia.toUpperCase()){
											verificacion2=true;
										}
									});

									if(!verificacion2){
										self.consolidadoProductos[keyx].cantidad++;
										this.form.conteo_baterias.unshift({
											id_bateria:data.id_bateria,
											id_producto:data.id_producto,
											id_conteo_fisico_bateria:null,
											codigo_garantia:data.codigo_garantia,
											fecha_activacion:data.fecha_activacion,
											producto_simple:data.bateria_producto,
											estado:1,
											registrada:false
										});
									}
									alertify.success("Batería agregada!",5);


									if(self.cantidad_sin_registrar()>=5){
										self.form.conteo_baterias.forEach((bateriax, key) => {
											if(!bateriax.registrada){
												self.registrarBateria(bateriax)
											}
										});
									}
									self.cantidad_sin_registrar();
									//self.agruparProductos();
									self.$refs.bateria.focus();

									}
							}else{

								self.consolidadoProductos.push({
									descripcion:data.bateria_producto.descripcion,
									id_producto:data.id_producto,
									cantidad: 1,
								});

								this.form.conteo_baterias.unshift({
									id_bateria:data.id_bateria,
									id_producto:data.id_producto,
									id_conteo_fisico_bateria:null,
									codigo_garantia:data.codigo_garantia,
									fecha_activacion:data.fecha_activacion,
									producto_simple:data.bateria_producto,
									estado:1,
									registrada:false
								});


								if(self.cantidad_sin_registrar()>=5){
									self.form.conteo_baterias.forEach((bateriax, key) => {
										if(!bateriax.registrada){
											self.registrarBateria(bateriax)
										}
									});
								}
								self.cantidad_sin_registrar();
							//	self.agruparProductos();
								self.$refs.bateria.focus();

							}

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

			confirmarEmision(){
				this.$swal.fire({
					title: 'Esta seguro de confirmar la emisión de la entrada?',
					text: "Revisa los datos, ya no se podrá editar la entrada, y se afectará el inventario",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						//this.actualizar();
						this.registrar();
					}
				})
			},


			codigoGarantiaEvento() {
				var self = this;
				if(self.detalleForm.codigo_garantia !== ''){
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

			obtenerEntrada() {
				var self = this
				entrada.obtenerConteoFisico({
					id_conteo_fisico: this.$route.params.id_conteo_fisico,
                    cargar_dependencias:true,
				}, data => {
					data.conteo_fisico.conteo_baterias.forEach((conteo_bateriasx, key) => {
						data.conteo_fisico.conteo_baterias[key].registrada = true;
						data.conteo_fisico.conteo_baterias[key].guardadoEnProgreso = false;
					});
					self.form = data.conteo_fisico;

					data.consolidado.forEach((conteo_bateriasx, key) => {
						console.log(conteo_bateriasx);
						self.consolidadoProductos.push({
							descripcion:conteo_bateriasx.producto_simple.descripcion,
							id_producto:conteo_bateriasx.id_producto,
							cantidad: conteo_bateriasx.cantidad_prod,
						});
					});



					//self.productos = data.productos;
					self.bodegas = data.bodegas;

					//self.agruparProductos();

					self.loading=false;


					/*if (self.form.estado !== 99) {
						alertify.error("La entrada ya no puede ser actualizada", 5);
						this.$router.push({
							name: "entradas"
						});
					}*/
				}
						, err => {
							self.loading = false;
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
				if (this.form.entrada_baterias.length >= 1) {
					//self.form.entrada_productos[keyx].cantidad_recibida--;
					this.form.entrada_baterias[index].estado = 0;
					this.form.entrada_baterias[index].registrada = false;
					self.agruparProductos();

					/*if(item.id_entrada_inicial_bateria){

						this.entrada_baterias.splice(index, 1);
					}*/


					//guardadoEnProgreso: false,
					//		estado: 0,

				}else{
					this.form.entrada_baterias=[];
				}
			},

			actualizar() {
				var self = this;
				//if(self.total_cantidad_recibida > 0){
				self.loading=true;
				self.form.consolidadoProductos = self.consolidadoProductos;
				self.btnAction = "Registrando, espere....";
				//if(self.form.estado === 1) {
				entrada.actualizar(
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
							self.btnAction = "Actualizar Conteo";
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
				if(self.form.conteo_baterias){
					let i = 0;

					self.form.conteo_baterias.forEach((bateriax, key) => {
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
			cambiarPaginacion(limite){

				var self = this;
				if(self.form.conteo_baterias.length>=1){
					if(limite === 999){//mostrar todos
						self.inicio_paginacion=0;
						self.limite_paginacion=self.form.conteo_baterias.length;
					}else if(limite === -999){
						self.inicio_paginacion=0;
						self.limite_paginacion=10;
					}else{
						self.inicio_paginacion=0;
						self.limite_paginacion=self.limite_paginacion+limite;
					}
				}

			},
			agruparProductos(){
				let self = this;

				var counts = self.form.conteo_baterias.reduce((p, c) => {
					var name = c.producto_simple.descripcion;

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

				/*self.form.consolidadoProductosId = Object.keys(counts2).map(k => {
					return {id_producto: k, cantidad: counts2[k]}; });*/
			},
		},

		mounted() {
			this.obtenerEntrada();
		},

		computed: {
			filteredItems: function () {
				if(this.form.conteo_baterias){
					return this.form.conteo_baterias.slice(this.inicio_paginacion, this.limite_paginacion)
				}
			},

			total_unidades() {
				return this.consolidadoProductos.reduce((carry, item) => {
					return (carry + Number(item.cantidad))
				}, 0)
			},
		},
	};
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>