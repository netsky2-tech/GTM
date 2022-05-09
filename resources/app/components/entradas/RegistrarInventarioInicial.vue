<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Inventario inicial</div>
						<div class="box-description">Formulario para registrar Inventario inicial de baterías</div>
					</div>

					<div class="row">
					<div class="col-sm-4">
						<div class="form-group">
							<label for>Bodega</label>
							<v-select
									label="descripcion"
									v-model="form.bodega"
									:options="bodegas"
							></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
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
										v-for="message in errorMessages.entrada_productos"
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
											<input class="form-control" disabled v-model="item.nombre_producto">
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
						<div class="col-sm-4">
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
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Código Garantía</label>
								<input :disabled="codigoAutomatico"  v-mask="mascaraCodigo" class="form-control" ref="codigo" v-model="detalleForm.codigo_garantiax"  @keyup.enter="codigoGarantiaEvento">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages.codigo_garantiax"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-2">
							<div class="form-group">
								<label for>Fecha Activación</label>
								<input class="form-control" type="text" placeholder="MM/YY"
									   v-mask="'##/##'"
									   ref="fecha_activacion" v-model="detalleForm.fecha_activacion"  @keyup.enter="fechaActivacionEvento">

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
									<th >Fecha Activación</th>
									<th class="text-center" >Estado</th>
								</tr>
								</thead>
								<tbody>
								<template v-for="(item, index) in filteredItems">
									<template v-if="item.estado===1">
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
														v-for="message in errorMessages[`detalle_baterias.${index}.productox.id_producto`]"
														v-text="message">
												</li>
											</ul>
										</td>


										<td>
											<input  disabled  class="form-control" v-model="item.codigo_garantiax">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`filteredItems.${index}.codigo_garantiax`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td>
											<input  @change="cambiarFechaActivacion(item)" class="form-control"  v-mask="'##/##'" v-model="item.fecha_activacion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalle_baterias.${index}.fecha_activacion`]"
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
						</div>
						<br>
						<div class="col-sm-6">
							<div class="form-group">
								<button  @click="cambiarPaginacion(-999)" class="btn btn-info btn-agregar" >Mostrar Primeros 10</button>
								<button  @click="cambiarPaginacion(10)" class="btn btn-primary btn-agregar">Mostrar Más</button>
								<button  @click="cambiarPaginacion(-10)" class="btn btn-danger btn-agregar">Mostrar Menos</button>
								<button  @click="cambiarPaginacion(999)" class="btn btn-info btn-agregar" >Mostrar Todos</button>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group text-right">
								<router-link :to="{ name: 'entradas-inicial' }" tag="button">
									<button class="btn btn-default btn-agregar" type="button">Cancelar</button>
								</router-link>
								<button
										:disabled="btnAction !== 'Registrar Entrada Inicial'"
										@click="confirmar"
										class="btn btn-primary btn-agregar"
										type="button"
								>{{ btnAction }}</button>
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
	import entrada from "../../api/entradas-inventario-inicial";
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
					fecha_activacion: '',
					productox: {},
					codigo_garantiax: ''
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
					entrada_productos: [],
				},
				btnAction: "Registrar Entrada Inicial",
				errorMessages: []
			};
		},
		methods: {
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
			agruparProductos(){
				let self = this;

				var counts = self.detalle_baterias.reduce((p, c) => {
					var name = c.productox.text;

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
				entrada.nuevo({
						}, data => {
							self.productos = data.productos;
							self.bodegas = data.bodegas;
							self.form.id_entrada_inicial =data.id_entrada_inicial;
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
						id_entrada_inicial:self.form.id_entrada_inicial,
						codigo_garantiax:bateria.codigo_garantiax,
						codigo_barra:bateria.productox.codigo_barra,
						id_producto:bateria.productox.id_producto,
						fecha_activacion:bateria.fecha_activacion,
						id_entrada_inicial_bateria:	bateria.id_entrada_inicial_bateria,
						estado:	bateria.estado,
						},
						data => {
							//self.form = data.orden;
							bateria.registrada  = true;
							bateria.id_entrada_inicial_bateria = data.id_entrada_inicial_bateria;
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


			agregarDetalle() {
				var self = this;
				if(self.detalleForm.productox){
					if(self.detalleForm.codigo_garantiax!=='' && self.detalleForm.fecha_activacion!==''){
						var re = new RegExp("(0[1-9]|10|11|12)/[1-9][0-9]$");
						if (re.test(this.detalleForm.fecha_activacion)) {
							//console.log("fecha valida");

						let existe= false;
						let validacion = true;
						self.detalle_baterias.forEach((bateriax, key) => {
							if(self.detalleForm.codigo_garantiax===bateriax.codigo_garantiax &&(bateriax.estado === 1) ){
							existe=true;
							}
						});

						if(!existe){

						let keyx = 0;
							this.detalle_baterias.unshift({
								productox: this.detalleForm.productox,
								codigo_garantiax: this.detalleForm.codigo_garantiax,
								fecha_activacion: this.detalleForm.fecha_activacion,
								fecha_activacion_org: this.detalleForm.fecha_activacion,
								registrada: false,
								guardadoEnProgreso: false,
								estado: 1,
								id_entrada_inicial_bateria:null
							});

						}else{
							alertify.warning("Ya existe ese código de batería en el listado",5);
							validacion=false;
						}

						if(validacion){
						if(self.detalleForm.productox.producto_detalles_baterias.id_submarca === 7){//Caso Motobaterias
							//self.contador++;
							self.detalleForm.codigo_garantiax = 'Código Automático '+ self.contador.toString();
							self.detalleForm.productox='';
							self.$refs.bateria.$el.focus()
						}else if(self.detalleForm.productox.producto_detalles_baterias.id_submarca === 3){//Caso Cronos
							self.detalleForm.codigo_garantiax ='';
							self.$refs.codigo.focus();
						}else{
							self.detalleForm.codigo_garantiax ='';
							self.detalleForm.productox='';
							///self.$refs.bateria.$refs.search.blur()
							self.$refs.bateria.$el.focus()
						}
						}else{
							if(self.detalleForm.productox.producto_detalles_baterias.id_submarca === 3){//Caso Cronos
								self.detalleForm.codigo_garantiax ='';
								self.$refs.codigo.focus();
							}else{
							self.detalleForm.codigo_garantiax ='';
							self.detalleForm.productox='';
							self.$refs.bateria.$el.focus()
							}
						}

						if(self.cantidad_sin_registrar()>=5){
							self.detalle_baterias.forEach((bateriax, key) => {
								if(!bateriax.registrada){
									self.registrarBateria(bateriax)
								}
							});
						}
						self.cantidad_sin_registrar();
						self.agruparProductos();

						} else {
							alertify.warning("El formato de la fecha no es valido",5);
							self.$refs.fecha_activacion.focus()
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
					//self.form.entrada_productos[keyx].cantidad_recibida--;
					if(this.detalle_baterias[index].id_entrada_inicial_bateria > 0){
						this.detalle_baterias[index].estado = 0;
						this.detalle_baterias[index].registrada = false;
					}else{
						this.detalle_baterias.splice(index, 1);
					}

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

			registrar() {
				var self = this;
				//if(self.total_cantidad_recibida > 0){
				self.loading=true;
					self.form.detalle_baterias = self.detalle_baterias;
					self.btnAction = "Registrando, espere....";
					//if(self.form.estado === 1) {
						entrada.recibir(
								self.form,
								data => {
									//alertify.success("La entrada fue recibida correctamente",5);
									this.$swal.fire(
											'Entrada Recibida!',
											'La Entrada fue Recibida correctamente.',
											'success'
									)
									self.loading=false;
									this.$router.push({
										name: "entradas-inicial"
									});
								},
								err => {
									alertify.error('Error Actualizando los datos',10);
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
			total_unidades() {
				return this.consolidadoProductos.reduce((carry, item) => {
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