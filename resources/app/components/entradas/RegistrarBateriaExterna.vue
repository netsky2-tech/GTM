<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Datos de Batería</div>
						<div class="box-description">Formulario para registrar datos de batería externa</div>
					</div>

					<div class="alert alert-success">
						<span><strong>Detalle de batería</strong></span>
					</div>

					<div class="row">
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
										 v-on:input="cargar_detalles_producto()"
							></multiselect>

							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Código Garantía</label>
								<input  v-mask="mascaraCodigo" class="form-control" ref="codigo" v-model="detalleForm.codigo_garantiax"  @keyup.enter="codigoGarantiaEvento">
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
											<input  disabled  class="form-control" v-model="item.codigo_garantiax">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalle_baterias.${index}.codigo_garantiax`]"
														v-text="message">
												</li>
											</ul>
										</td>

										<td>
											<input   class="form-control"  v-mask="'##/##'" v-model="item.fecha_activacion">
											<ul class="error-messages">
												<li
														:key="message"
														v-for="message in errorMessages[`detalle_baterias.${index}.fecha_activacion`]"
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


					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'pagina-principal-inventario' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button
								:disabled="btnAction !== 'Registrar Batería'"
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
	import baterias from "../../api/baterias";
    import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				//productoEntradaBusquedaURL: "/entradas/productos/buscar",
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
			 	mascaraCodigo:'X############',
				contador : 1,
				productos: [],
				detalleForm:{
					fecha_activacion: '',
					productox: [],
					codigo_garantiax: ''
				},
				form:{
					baterias_nuevas:[]
				},
				detalle_baterias: [],
				btnAction: "Registrar Batería",
				errorMessages: []
			};
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

					}else{//casos lth
						self.$refs.codigo.focus();
						self.detalleForm.codigo_garantiax ='';
						self.mascaraCodigo='XXXXXXXXXXXXXXXXXXXXXXX';
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

					self.detalle_baterias.forEach((bateriax, key) => {
						if(self.detalleForm.codigo_garantiax===bateriax.codigo_garantiax){
							existeCodigoGarantia=true;
						}
					});

						if(!existeCodigoGarantia){

							this.detalle_baterias.push({
								productox: this.detalleForm.productox,
								codigo_garantiax: this.detalleForm.codigo_garantiax,
								fecha_activacion: this.detalleForm.fecha_activacion,
							});
								alertify.success("Batería agregada!",5);
						}else{
							alertify.warning("Ya existe ese código de batería en el listado",5);
						}

					this.detalleForm.productox=[];

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
				if(self.detalle_baterias.length > 0){
					self.form.detalle_baterias = self.detalle_baterias;
					self.btnAction = "Registrando, espere....";
						baterias.registrarBateriaExterna(
								self.form,
								data => {
									//alertify.success("La entrada fue recibida correctamente",5);
									this.$swal.fire(
											'Batería Externa Registrada!',
											'Las Baterías Externas fueron registradas correctamente.',
											'success'
									)
									this.$router.push({
										name: "pagina-principal-inventario"
									});
								},
								err => {
									alertify.error('Error Actualizando los datos',10);
									self.errorMessages = err;
									self.btnAction = "Registrar Batería";
								}
						);

				}else{
					alertify.error("Se debe recibir al menos un producto",5);
				}
			},
			leaving: function () {
				alert("Leaving...");
			},
			nuevaBateriaExterna() {
				var self = this;
				baterias.nuevaBateriaExterna({}, data => {
							self.productos = [];
							self.productos = data.productos;
							self.loading = false;
						},
						err => {
							console.log(err);
						})
			},
		},
		mounted() {
			this.nuevaBateriaExterna()
		},
	};
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>