<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Importación de cuentas por cobrar</div>
				<div class="box-description">Importar archivo</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-importacion-datos' }"> Módulo de importación de datos</router-link>> Cuentas por cobrar</div>
			</div>


			<div class="row">
				<div class="col-md-12">
						<div class="row">
							<div class="col-sm-5">
								<div class="form-group">
									<label >Seleccionar Archivo Excel</label>
									<input class="form-control"  type="file" ref="file"/>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.file" v-text="message"></li>
									</ul>
							</div>
							</div>

							<div class="col-md-2">
								<button type="button" @click="uploadImage" class="btn btn-primary btn-agregar">Importar</button>
							</div>
						</div>
						<br />
						<br />
					</div>
				</div>

			<div class="row">
				<div class="col-sm-4">
					<button
							:disabled="btnAction !== 'Registrar'"
							@click="registrar()"
							class="btn btn-primary btn-agregar"
							type="button"
					>{{ btnAction }}</button>
				</div>
			</div>

			<br>

			<div class="alert alert-success">
				<span><strong>Resumen del archivo cargado</strong></span>
			</div>

			<div class="row">
				<div class="col-sm-12">
						<table class="table table-bordered">
							<thead>
							<tr>
								<td><strong>No. Documento</strong></td>
								<td><strong>Tipo de documento</strong></td>
								<td><strong>Fecha movimiento</strong></td>
								<td><strong>Debe</strong></td>
								<td><strong>Haber</strong></td>
								<td><strong>Código del cliente</strong></td>
							</tr>
							</thead>
							<tbody>
							<template v-for="(item, index) in filteredItems">
							<!--<template v-for="(item, index) in form.datos_archivo">-->
								<tr>

									<td>
										{{item.no_documento}}
									</td>
									<td>
										{{item.tipo_documento}}

									</td>
									<td>
										{{formatDate(item.fecha_movimiento.date)}}
									</td>
									<td>
										{{item.debe|formatMoney(2)}}
									</td>
									<td>
										{{item.haber|formatMoney(2)}}
									</td>
									<td>
										{{item.codigo_cliente}}
									</td>
								</tr>
							<!--</template>-->
							</template>
							</tbody>
							<tfoot>
							</tfoot>
						</table>
					</div>
				<div class="col-sm-6">
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

</template>

<script type="text/ecmascript-6">
	import cuentasxcobrar from '../../api/cuentas_por_cobrar'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading: false,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,   //It is important to import the loading image then use here
				inicio_paginacion:0,
				limite_paginacion:10,
				form:{
					file: '',
					numero_importado:0,
					numero_fallido:0,
					total_registros:0,
					resumen_archivo:[],
					datos_archivo:[],
				},
				file: '',

				successAlert: false,
				errorAlert: false,
				uploadedImage: '',
				btnAction: 'Registrar',
				errorMessages:[],
			}

		},
		methods: {
			formatDate(date) {
				return moment(date).format('YYYY-MM-DD')
			},
			uploadImage:function(){
				let self = this;
				self.file = self.$refs.file.files[0];

				var formData = new FormData();
				self.loading=true;
				self.form.datos_archivo=[];
				self.form.resumen_archivo=[];
				self.form.numero_importado=0;
				self.form.file = self.file;
				formData.append('file', self.file);
				//formData.append('id_cuenta_bancaria', self.form.cuenta_bancaria.id_cuenta_bancaria);
				//formData.append('nombre_cuenta', self.form.cuenta_bancaria.numero_cuenta);

				cuentasxcobrar.subirExcel(formData,data=> {
					self.form.datos_archivo=data.datos;
					self.form.numero_importado=data.numero_importado;
					self.form.numero_fallido=data.numero_fallido;
					self.form.total_registros=data.total_registros;
							for(var x=1;x<=self.form.numero_hojas;x+=1){
								self.form.resumen_archivo.push({
									hojax: x,
								});
							}
					//console.log(data.numero_hojas);
					self.loading=false;
					alertify.success("Datos cargados",5);
				},
						err => {
							console.log(err);
							self.errorMessages = err
							self.loading = false;
				});
			},
			registrar() {
				var self = this;
				if(self.form.numero_fallido===0){
				self.btnAction = "Registrando, espere....";
				/*if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {
					alertify.warning("El monto del recibo deber ser pagado en su totalidad", 5);
					//self.errorMessages.serie = Array('Error serie');
					self.btnAction = "Registrar";
				} else if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {

				} else {*/
					self.$swal.fire({
						title: 'Esta seguro de registrar estos datos?',
						text: "Revise bien la información ",
						type: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Si, registrar',
						cancelButtonText: 'Cancelar'
					}).then((result) => {
						if (result.value) {
							self.loading=true;
							cuentasxcobrar.registrarCuentasxCobrar(
									self.form,
									data => {
										this.$swal.fire(
												'Importación de datos registrada correctamente!',
												'Los datos han sido guardados',
												'success'
										);
										this.$router.push({
											name: "pagina-principal-importacion-datos"
										});
									},
									err => {
										self.loading=false;
										self.errorMessages = err;
										alertify.warning("Por favor revise los datos faltantes", 5);
										self.btnAction = "Registrar";
									}
							);
						} else {
							self.btnAction = "Registrar";
						}
					})

				}else{
					alertify.warning("Existen "+self.form.numero_fallido+" registros con fechas inválidas, por favor revise", 5);
				}
			},
			cambiarPaginacion(limite){

				var self = this;
				if(self.form.datos_archivo.length>=1){
					if(limite === 999){//mostrar todos
						self.inicio_paginacion=0;
						self.limite_paginacion=self.form.datos_archivo.length;
					}else if(limite === -999){
						self.inicio_paginacion=0;
						self.limite_paginacion=10;
					}else{
						self.inicio_paginacion=0;
						self.limite_paginacion=self.limite_paginacion+limite;
					}
				}

			},

		},

		computed: {
			filteredItems: function () {
				return this.form.datos_archivo.slice(this.inicio_paginacion, this.limite_paginacion)
			},
		},

		mounted() {
		}
	}
</script>

<style lang="scss" scoped>
    .search-field {
    	min-width: 120px;
    }
    .table {
	    a {
		    color: #2675dc;
	    }
	    .table-number {
    	    width: 60px;
        }
        .action {
    	    width: 100px;
        }
    }

	 .btn-agregar {
		 margin-top:33px;
	 }

</style>