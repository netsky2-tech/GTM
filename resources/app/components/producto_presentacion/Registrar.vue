<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Nueva Presentación de Producto</div>
						<div class="box-description">Formulario para registrar nueva Presentación de Producto</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-4 form-group">
								<label >Código Producto</label>
								<v-select
										:disabled="false"
										v-model="form.producto"
										label="nombre_comercial"
										:options="productos"
								></v-select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.producto" :key="message" v-text="message"></li>
								</ul>
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
						<router-link tag="button" :to="{ name: 'producto-presentacion' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Registrar' ? true : false" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
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
	import tipo from '../../api/productopresentacion'
	import loadingImage from '../../assets/images/block50.gif'
	import bodega from "../../api/bodegas";

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				detalleForm: {
					presentacionx:'',


				},
				presentaciones: [],

				productos: [],
				form: {
					conteo_productos: [],
					producto:'',
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			seleccionarCodigo() {
				var self = this;
					self.presentaciones;
			},

			agregarDetalle() {
				let self = this;
				if(this.form.producto){
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
				}else{
					alertify.warning("Debe seleccionar una producto",5);
				}
			},

			eliminarLinea(item, index) {
				if (this.form.conteo_productos.length >= 1) {
					this.form.conteo_productos.splice(index, 1);

				}else{
					this.form.conteo_productos=[];
				}
			},
			registrar() {
				var self = this
				/*self.form.conteo_productos = self.form.conteo_productos;*/
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				tipo.registrar(self.form, data => {
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
		},
		mounted() {
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