<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Nueva Batería</div>
						<div class="box-description">Formulario para registrar nueva Batería</div>
					</div>
					<form>
						<div class="alert alert-success">
							<span><strong>Datos Generales</strong></span>
						</div>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Rubro:</label>
									<v-select :options="rubros" label="rubro_full" v-model="form.rubro_producto"  ></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.id_rubro" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label for="">Condición:</label>
									<select class="form-control" v-model.number="form.condicion">
										<option value="1">Nuevo</option>
										<option value="2">Usado</option>
									</select>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Proveedor:</label>
									<v-select :options="proveedores" label="nombre_comercial" v-model="form.proveedor_producto" ></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.id_rubro" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Modelo Batería</label>
									<input class="form-control" placeholder="Nombre Batería" v-model="form.nombre_comercial">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.nombre_comercial" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Descripción</label>
									<input class="form-control" placeholder="Descripción batería" v-model="form.descripcion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Unidad de medida</label>
									<v-select  :options="ums" label="unidad_medida" v-model="form.unidad_medida"></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.unidad_medida" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Código Barras</label>
									<input class="form-control" placeholder="Código Barras" v-model="form.codigo_barra">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.codigo_barra" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Impuesto</label>
									<v-select :options="impuestos" label="descripcion" v-model="form.impuesto_producto"></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.impuesto_producto" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Porcentaje DAI</label>
									<input class="form-control" placeholder="DAI" type="number" min="0" v-model.number="form.dai">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.dai" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Porcentaje ISC</label>
									<input class="form-control" placeholder="ISC" min="0" type="number" v-model.number="form.isc">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.isc" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Existencia Mínima</label>
									<input class="form-control" placeholder="Existencia Mínima" min="0" type="number" v-model.number="form.existencia_min">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.existencia_min" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Existencia Máxima</label>
									<input class="form-control"  placeholder="Existencia Máxima" min="0" type="number" v-model.number="form.existencia_max">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.existencia_max" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Costo Inicial C$</label>
									<input class="form-control" placeholder="Costo Inicial" min="0" type="number" v-model.number="form.costo_estandar">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.costo_estandar" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Precio de compra $</label>
									<input class="form-control" placeholder="Costo de compra" min="0" type="number" v-model.number="form.precio_compra">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.precio_compra" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Precio de venta $</label>
									<input class="form-control" placeholder="Precio de venta" min="1" type="number" v-model.number="form.precio_sugerido">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.precio_sugerido" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Precio de venta a Distribuidor $</label>
									<input class="form-control" placeholder="Precio de venta distribuidor" min="1" type="number" v-model.number="form.precio_distribuidor">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.precio_distribuidor" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Inventario Inicial</label>
									<input class="form-control" placeholder="Inventario Inicial" min="0" type="number" v-model.number="form.cantidad_inicial">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.cantidad_inicial" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for>Bodega</label>
									<v-select
											:options="bodegas"
											label="descripcion"
											v-model="form.bodega_inicial"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.bodega_inicial" v-text="message"></li>
									</ul>
								</div>
							</div>

						</div>
						<br>
						<div class="alert alert-success">
							<span><strong>Detalles Batería</strong></span>
						</div>
						<div class="row">


							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> BCI</label>
									<input class="form-control" placeholder="BCI" v-model="form.bci">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.bci" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Largo</label>
									<input class="form-control" placeholder="Largo" type="number" min="0" v-model.number="form.largo">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.largo" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Ancho</label>
									<input class="form-control" placeholder="Ancho" type="number" min="0" v-model.number="form.ancho">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.ancho" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Alto</label>
									<input class="form-control" placeholder="Alto" type="number" min="0" v-model.number="form.alto">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.alto" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Peso Humedo</label>
									<input class="form-control" placeholder="Peso Humedo" type="number" min="0" v-model.number="form.peso_humedo">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.peso_humedo" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Voltaje Nominal</label>
									<input class="form-control" placeholder="Peso Humedo" type="number" min="0" v-model.number="form.voltaje_nominal">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.voltaje_nominal" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Capacidad Arranque Frio</label>
									<input class="form-control" placeholder="Capacidad Arranque Frio" min="0" type="number" v-model.number="form.cca">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.cca" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Capacidad de arranque</label>
									<input class="form-control" placeholder="Capacidad de arranque" min="0" type="number" v-model.number="form.ca">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.ca" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Capacidad de reserva</label>
									<input class="form-control" placeholder="Capacidad de reserva" type="number" min="0" v-model.number="form.capacidad_reserva">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.capacidad_reserva" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Meses de garantía</label>
									<input class="form-control" placeholder=" Meses de garantía" type="number" min="0" v-model.number="form.garantia">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.garantia" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Reemplazo sin Costo</label>
									<input class="form-control" placeholder="Reemplazo sin Costo" type="number" min="0" v-model.number="form.rmplzo_sincosto">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.rmplzo_sincosto" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Material</label>
									<v-select
											:options="materiales"
											label="descripcion"
											v-model="form.material_bateria"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.material_bateria" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Tipo Batería</label>
									<v-select
											:options="lineas"
											label="descripcion"
											v-model="form.linea_bateria"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.linea_bateria" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Marca</label>
									<v-select
											:options="marcas"
											label="descripcion"
											v-model="form.marca_bateria"
											v-on:input="obtenerSubMarcas()"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.marca_bateria" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Sub Marcas</label>
									<v-select
											:options="sub_marcas"
											label="descripcion"
											v-model="form.submarca_bateria"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.submarca_bateria" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Aplicación</label>
									<v-select
											:options="aplicaciones"
											label="descripcion"
											v-model="form.aplicacion_bateria"
											v-on:input="obtenerSubAplicaciones()"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.aplicacion_bateria" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for="">Sub Aplicación</label>
									<v-select
											:options="sub_aplicaciones"
											label="descripcion"
											v-model="form.subaplicacion_bateria"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.subaplicacion_bateria" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Descuento Eficacia Operativa</label>
									<input class="form-control" placeholder="Descuento Eficacia Operativa" type="number" min="0" v-model.number="form.descuento_eficacia">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descuento_eficacia" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Cargo Chico/Grande</label>
									<input class="form-control" placeholder="Cargo Chico/Grande" type="number" min="0" v-model.number="form.cargo_chico_grande">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.cargo_chico_grande" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label for=""> Número Parte</label>
									<input class="form-control" placeholder="Número Parte" v-model="form.numero_parte">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.numero_parte" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Imágen</label>
									<div class="uploader">
										<button class="btn btn-primary" id="uploader-button" type="button">Escoger Imágen</button>
									</div>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.imagen" v-text="message"></li>
									</ul>
								</div>
							</div>
						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-baterias' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction !== 'Registrar'" @click="registrarBateria" class="btn btn-primary" type="button">{{ btnAction }}</button>
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
	import bateria from '../../api/baterias'
	/*import proveedor from '../../api/proveedores'
	import rubro from '../../api/rubros'
	import impuesto from '../../api/impuestos'
	import um from '../../api/unidad_medida'
	import aplicacion from '../../api/baterias_aplicaciones'
	import material from '../../api/baterias_materiales'
	import marca from '../../api/baterias_marcas'
	import linea from '../../api/baterias_lineas'
	import bodega from "../../api/bodegas";*/
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				rubros: [],
				impuestos: [],
				ums: [],
				aplicaciones:[],
				sub_aplicaciones: [],
				materiales:[],
				marcas:[],
				sub_marcas: [],
				lineas:[],
				bodegas: [],
				proveedores:[],
				form: {
					numero_parte:'',
					codigo_sistema: '',
					codigo_consecutivo: 0,
					nombre_comercial: '',
					descripcion: '',
					isc: 0,
					dai: 0,
					costo_estandar: 0,
					precio_compra: 0,
					precio_distribuidor: 0,
					precio_sugerido: 0,
					existencia_min: 1,
					existencia_max: 1,
					cantidad_inicial: 0,
					codigo_barra:'',
					imagen: '',
					rubro_producto:'',
					impuesto_producto:'',
					proveedor_producto:'',
					unidad_medida:[],
					bodega_inicial: "",
					condicion:1,
					bci:'',
					largo:0,
					ancho:0,
					alto:0,
					peso_humedo:0,
					voltaje_nominal:0,
					cca:0,
					ca:0,
					capacidad_reserva:0,
					garantia:0,
					rmplzo_sincosto:0,
					material_bateria:[],
					linea_bateria:[],
					marca_bateria:[],
					submarca_bateria:[],
					aplicacion_bateria:[],
					subaplicacion_bateria:[],
					descuento_eficacia:2,
					cargo_chico_grande:2
				},
				uploader: [],
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {

			nueva() {
				var self = this;
				bateria.nueva({
						}, data => {
							self.aplicaciones = data.aplicaciones;
							self.bodegas = data.bodegas;
							self.form.bodega_inicial=self.bodegas[0];
							self.proveedores = data.proveedores;
							self.form.proveedor_producto=self.proveedores[0];
							self.marcas = data.marcas;
							self.lineas = data.lineas;
							self.materiales = data.materiales;
							self.rubros = data.rubros;
							self.form.rubro_producto = self.rubros[109];
							self.impuestos = data.impuestos;
							self.ums = data.unidades_medida;

							self.loading = false;
						},
						err => {
							console.log(err);
						})

			},

			obtenerSubAplicaciones() {
				var self = this
				self.form.subaplicacion_bateria = null;
				if(self.form.aplicacion_bateria.aplicacion_sub_aplicaciones)
					self.sub_aplicaciones = self.form.aplicacion_bateria.aplicacion_sub_aplicaciones
			},

			obtenerSubMarcas() {
				var self = this
				self.form.submarca_bateria = null;
				if(self.form.marca_bateria.marca_sub_marcas)
					self.sub_marcas = self.form.marca_bateria.marca_sub_marcas
			},
			obtenerCodigo() {
				var self = this;
				bateria.obtenerCodigoBateria({
					id_rubro:  self.form.rubro_producto.id_rubro
				}, data => {
					//console.log(data);
					self.form.codigo_consecutivo=data.codigo_siguiente;
					self.obtenerConcatenarCodigo();
				}, err => {
					alertify.error(err,5);
				})
			},
			obtenerConcatenarCodigo() {
				var self = this;
				self.form.codigo_sistema = self.form.rubro_producto.codigo +'-'+ self.form.codigo_consecutivo;
			},

			getImages() {
				var imagen = $('input[name="imagen"]').val()
				if (JSON.parse(imagen).length) {
					return imagen
				} else {
					return ''
				}
			},
			registrarBateria() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.form.imagen = this.getImages()
				self.msg = 'Guardando datos, espere un momento';
				self.loading = true;
				bateria.registrar(self.form, data => {
					self.loading = false;
					this.$router.push({
						name: 'listado-baterias'
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

		},
		mounted() {
			this.initUploader();
			this.nueva();

/*			this.obtenerTodosProveedores();
			this.obtenerTodasBodegas();
			this.obtenerTodosImpuestos()
			this.obtenerTodosRubrosPS()
			this.obtenerTodosUnidadMedida()
			this.obtenerTodosAplicaciones()
			this.obtenerTodasLineas()
			this.obtenerTodosMateriales()
			this.obtenerTodasMarcas()
*/
		}

	}
</script>
