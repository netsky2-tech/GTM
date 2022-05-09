<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Nuevo Producto</div>
						<div class="box-description">Formulario para registrar nuevo producto</div>
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
							<label for=""> Código</label>
							<input  class="form-control" v-model="form.codigo_sistema" placeholder="Código Sistema">
							<ul class="error-messages">
								<li v-for="message in errorMessages.codigo_sistema" :key="message" v-text="message"></li>
							</ul>
						</div>
						</div>

						<div class="col-sm-3">
						<div class="form-group">
							<label for=""> Nombre producto</label>
							<input class="form-control" v-model="form.nombre_comercial" placeholder="Dígite un nombre de producto">
							<ul class="error-messages">
								<li v-for="message in errorMessages.nombre_comercial" :key="message" v-text="message"></li>
							</ul>
						</div>
						</div>
						<div class="col-sm-2">
						<!--<div class="form-group">
							<label for=""> Unidad de medida</label>
								<v-select  v-model="form.unidad_medida" label="unidad_medida" :options="ums"></v-select>
							<ul class="error-messages">
								<li v-for="message in errorMessages[`unidad_medida.id_unidad_medida`]" :key="message" v-text="message"></li>
							</ul>
						</div>-->
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<barcode v-bind:value="form.codigo_sistema" :height="25" :width="2"  :margin-top="40" format="CODE128">
									Generando Código de Barras
								</barcode>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Imágen</label>
								<div class="uploader">
									<button type="button" class="btn btn-primary" id="uploader-button">Escoger Imágen</button>
								</div>
								<ul class="error-messages">
									<li v-for="message in errorMessages.imagen" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

						</div>
						<div class="alert alert-success">
							<span><strong>Detalle Presentación de Producto</strong></span>
						</div>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<label >Código Presentación</label>
									<multiselect
											:allow-empty="false" :options="presentaciones"
											:searchable="true"
											:showlabel="true"
											select-label="Presione enter para seleccionar el valor"
											deselect-label="No se puede eliminar este valor."
											label="codigo"
											placeholder="Seleciona una Presentación"
											ref="presentacion"
											track-by="id_presentacion"
											v-model="detalleForm.presentacionx"

									></multiselect>
									<ul class="error-messages">
										<li v-for="message in errorMessages.presentacionx" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div></div>
							<div class=	"col-sm-4">
								<div class="form-group">
									<label for> </label>
									<button @click="agregarDetalle" type="button" class="btn btn-info btn-agregar" > Agregar Presentación</button>
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
										<th>Presentación</th>
									</tr>
									</thead>
									<template v-for="(item,index) in form.conteo_productos">
										<tr>
											<td style="width: 2%">
												<button @click="eliminarLinea(item, index)">
													<i class="fa fa-trash"></i>
												</button>
											</td>
											<td>
												<input class="form-control" disabled v-model="item.presentacionx.codigo">
												<ul>
													<il
															:key="message"
															v-for="message in errorMessages['']"
													></il>
												</ul>
											</td>
										</tr>
									</template>
								</table>
							</div>

						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'productos' }">
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
	import producto from '../../api/productos'
	//import rubro from '../../api/rubros'
	//import impuesto from '../../api/impuestos'
	//import um from '../../api/unidad_medida'
	//import bodega from "../../api/bodegas";
	import VueBarcode from 'vue-barcode';
	import loadingImage from '../../assets/images/block50.gif'
	import tipo from "../../api/productopresentacion";

	export default {
		components: {
			'barcode': VueBarcode
		},
		data() {
			return {
				loading:true,
				msg: 'Guardando los datos, espere un momento',
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
				ums: [],
				bodegas: [],
				presentaciones: [],
				form: {
					conteo_productos: [],
					producto:'',
					precio_compra: 0,
					precio_distribuidor: 0,
					codigo_sistema: '',
					codigo_consecutivo: 0,
					nombre_comercial: '',
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
					impuesto_producto:'',
					unidad_medida:'',
					bodega_inicial: "",
				},
				detalleForm: {
					presentacionx:'',


				},
				uploader: [],
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {

			nueva() {
				var self = this;
				producto.nuevo({
						}, data => {
							self.ums = data.unidades_medida;
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
			agregarDetalle() {
				let self = this;
					if(this.detalleForm.presentacionx /*&& this.detalleForm.precio_info > 0*/){


						let i = 0;
						let keyx = 0;
						if(self.form.conteo_productos){
							self.form.conteo_productos.forEach((presentacionx, key) => {

								if(self.detalleForm.presentacionx.id_presentacion===presentacionx.presentacionx.id_presentacion){
									i++;
									keyx = key;
								}
							});
						}

						if(i === 0){
							this.form.conteo_productos.push({
								presentacionx: this.detalleForm.presentacionx
							});
							this.detalleForm.presentacionx=''

						}

					}else{
						alertify.warning("Debe seleccionar una presentación",5);
					}
			},
			eliminarLinea(item, index) {
				if (this.form.conteo_productos.length >= 1) {
					this.form.conteo_productos.splice(index, 1);

				}else{
					this.form.conteo_productos=[];
				}
			},
			nuevo() {
				var self = this;
				tipo.nuevo({}, data => {
							self.productos = data.productos;
							self.presentaciones = data.presentaciones;

							self.loading = false;
						},
						err => {
							console.log(err);
						})

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
			getImages() {
				var imagen = $('input[name="imagen"]').val()
				if (JSON.parse(imagen).length) {
					return imagen
				} else {
					return ''
				}
			},
			registrarProducto() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.form.imagen = this.getImages()
				self.loading = true;
				producto.registrarProducto(self.form, data => {
					self.loading = false;
					this.$router.push({
						name: 'productos'
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
			
		},
		mounted() {
		this.initUploader()
		this.nueva();
		this.nuevo();
		}
		
    }
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>
