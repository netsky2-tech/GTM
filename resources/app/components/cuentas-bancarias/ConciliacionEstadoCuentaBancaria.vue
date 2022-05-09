<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Conciliación Bancaria</div>
				<div class="box-description">Importar Plantilla</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo caja y banco</router-link>> Cuentas bancarias</div>
			</div>


			<div class="row">
				<div class="col-md-12">
						<div class="row">
							<div class="col-sm-3">
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
					<div class="form-group">
						<label class="label-search">Año:</label>
						<v-select
								label="periodo"
								v-model="form.anio"
								:options="periodos"
								v-on:input="obtenerMeses"
						></v-select>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="form-group">
						<label class="label-search">Mes:</label>
						<v-select :style="'margin-left: .5rem!important;'"
								  label="descripcion"
								  v-model="form.mes"
								  :options="meses"
								  v-on:input="validarFechas"
						></v-select>
					</div>
				</div>

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
				<span><strong>Resumen de archivo y cuentas bancarias</strong></span>
			</div>

			<div class="row">
				<div class="col-sm-12">
						<table class="table table-bordered">
							<thead>
							<tr>
								<td><strong>No. Hoja Excel</strong></td>
								<td><strong>Banco</strong></td>
								<td><strong>Cuenta Bancaria</strong></td>
								<td><strong>Saldo Inicial Según Banco</strong></td>
								<td><strong>Cantidad Movimientos</strong></td>
								<td><strong>Total Débitos</strong></td>
								<td><strong>Total Créditos</strong></td>
								<td><strong>Sobreescribir</strong></td>
							</tr>
							</thead>
							<tbody>
							<template v-for="(item, index) in form.resumen_archivo">
								<tr>
									<td>
										Hoja {{item.hojax}}
									</td>

									<td>
									<v-select
											:options="bancos"
											label="descripcion"
											ref="banco"
											v-model="item.banco"
											v-on:input="obtenerCuentasBancarias(item)"
									></v-select>
									</td>
									<td>
									<v-select
											:options="item.cuentas_bancariasx"
											label="numero_cuenta"
											v-model="item.cuenta_bancaria"
											v-on:input="seleccionarCuenta(item)"
									></v-select>
										<ul class="error-messages">
											<li
													:key="message"
													v-for="message in errorMessages[`resumen_archivo.${index}.cuenta_bancaria`]"
													v-text="message">
											</li>
										</ul>
									</td>
									<td>
										<input type="number" min="0" class="form-control" @change="item.saldo_inicial =Math.max(Math.min(Number(Number(item.saldo_inicial).toFixed(2)),10000000), 0)" v-model.number="item.saldo_inicial">
									</td>
									<td>
										{{item.cantidad_movimientos}}
									</td>
									<td>
										{{item.total_debitos|formatMoney(2)}}
									</td>
									<td>
										{{item.total_creditos|formatMoney(2)}}
									</td>
									<td><label class="check-label"><input v-model="item.sobreescribir"
																		  type="checkbox"> Sobreescribir</label>
									</td>
								</tr>
							</template>
							</tbody>
							<tfoot>
							</tfoot>
						</table>
					</div>
			</div>
<br>
			<div class="alert alert-success">
				<span><strong>Detalles del archivo de conciliación</strong></span>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<table class="table table-bordered"  >
						<thead>
						<tr>
							<th >Cuenta Bancaria</th>
							<th >Fecha (Dia/Mes/Año)</th>
							<th >Tipo Movimiento</th>
							<th >No. Referencia</th>
							<th >No. Cheque</th>
							<th >Descripción</th>
							<th >Debitos</th>
							<th >Creditos</th>
						</tr>
						</thead>
						<tbody>
						<template v-for="(item, index) in form.datos_archivo">
								<tr>
									<td>
										{{item.nombre_cuenta}}

										<ul class="error-messages">
											<li
													:key="message"
													v-for="message in errorMessages[`datos_archivo.${index}.nombre_cuenta`]"
													v-text="message">
											</li>
										</ul>
									</td>
									<td>
										{{item.fecha}}
										<ul class="error-messages">
											<li
													:key="message"
													v-for="message in errorMessages[`datos_archivo.${index}.fecha`]"
													v-text="message">
											</li>
										</ul>
									</td>
									<td>
										<select class="form-control" v-model.number="item.tipomov">
											<option value="1">CHEQUE</option>
											<option value="2">DEPOSITO</option>
											<option value="3">TRANSFERENCIA ENTRANTE</option>
											<option value="4">NOTA DE CREDITO/TC</option>
											<option value="5">NOTA DE CREDITO</option>
											<option value="6">NOTA DE DEBITO</option>
											<option value="7">TRANSFERENCIA SALIENTE</option>
										</select>
										<ul class="error-messages">
											<li
													:key="message"
													v-for="message in errorMessages[`datos_archivo.${index}.tipomov`]"
													v-text="message">
											</li>
										</ul>
									</td>
									<td>
										<input  disabled  class="form-control" v-model="item.referencia">
										<ul class="error-messages">
											<li
													:key="message"
													v-for="message in errorMessages[`datos_archivo.${index}.referencia`]"
													v-text="message">
											</li>
										</ul>
									</td>
									<td>
										<input  :disabled="item.tipomov!==1"  class="form-control" v-model="item.numcheque">
										<ul class="error-messages">
											<li
													:key="message"
													v-for="message in errorMessages[`datos_archivo.${index}.numcheque`]"
													v-text="message">
											</li>
										</ul>
									</td>
									<td>
										<input  disabled  class="form-control" v-model="item.descripcion">
										<ul class="error-messages">
											<li
													:key="message"
													v-for="message in errorMessages[`datos_archivo.${index}.descripcion`]"
													v-text="message">
											</li>
										</ul>
									</td>
									<td>
										<input  disabled  class="form-control" v-model.number="item.debitos">
										<ul class="error-messages">
											<li
													:key="message"
													v-for="message in errorMessages[`datos_archivo.${index}.debitos`]"
													v-text="message">
											</li>
										</ul>
									</td>
									<td>
										<input  disabled  class="form-control" v-model.number="item.creditos">
										<ul class="error-messages">
											<li
													:key="message"
													v-for="message in errorMessages[`datos_archivo.${index}.creditos`]"
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
			</div>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>

</template>

<script type="text/ecmascript-6">
	import conciliacion from '../../api/conciliacion_bancaria'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading: true,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,   //It is important to import the loading image then use here
				form:{
					file: '',
					cuenta_bancaria: [],
					numero_hojas:0,
					resumen_archivo:[],
					datos_archivo:[],
					mes:[],
					anio:[]
				},
				file: '',

				successAlert: false,
				errorAlert: false,
				uploadedImage: '',
				periodos:[],
				meses:[],
				bancos:[],
				cuentas_bancarias: [],
				cantidad_no_validos:0,

				banco:[],
				btnAction: 'Registrar',
				errorMessages:[],
			}

		},
		methods: {
			validarFechas(){
				let self = this;
				if(self.form.datos_archivo){
					self.cantidad_no_validos=0;
					self.form.datos_archivo.forEach((fila, key) => {
						var dt = new Date( fila.fecha);
						if(self.form.mes){
							if(self.form.mes.mes !== (dt.getMonth()+1)){
								self.errorMessages[`datos_archivo.${key}.fecha`] = ['Fecha no coincide con periodo/mes'];
								self.form.datos_archivo[key].fecha_valida=false;
								self.cantidad_no_validos++;
							}else{
								self.errorMessages[`datos_archivo.${key}.fecha`] = '';
								self.form.datos_archivo[key].fecha_valida=true;
							}
						}

					});
				}
			},
			obtenerMeses(){
				let self = this;
				self.form.mes = [];
				self.meses = self.form.anio.meses_periodo
				self.form.mes = self.meses[0]
			},
			seleccionarCuenta(item){
				var self = this;
				self.loading=true;
				let existe = false;

				if(self.form.resumen_archivo){
				self.form.resumen_archivo.forEach((fila, key) => {

				if(fila.cuenta_bancaria){
					//console.log('fila '+fila.cuenta_bancaria.id_cuenta_bancaria);
					//console.log('item '+item.cuenta_bancaria.id_cuenta_bancaria);
				if((fila.cuenta_bancaria.id_cuenta_bancaria===item.cuenta_bancaria.id_cuenta_bancaria) &&(item.hojax!==fila.hojax)){
					existe=true;
				}
				}
				});
				}

				if(!existe){
				if(self.form.datos_archivo){
					self.form.datos_archivo.forEach((filaArchivo, key) => {
						if(item.hojax===filaArchivo.numero_hoja){
							self.form.datos_archivo[key].id_cuenta_bancaria=item.cuenta_bancaria.id_cuenta_bancaria;
							self.form.datos_archivo[key].nombre_cuenta=item.cuenta_bancaria.numero_cuenta;
						}
					});

					item.cantidad_movimientos = Number(this.form.datos_archivo.reduce((carry, item2) => {
						return (carry + Number(item2.numero_hoja===item.hojax?1:0))
					}, 0));

					item.total_debitos = Number(this.form.datos_archivo.reduce((carry, item2) => {
						return (carry + Number(item2.numero_hoja===item.hojax?item2.debitos:0))
					}, 0).toFixed(2));

					item.total_creditos = Number(this.form.datos_archivo.reduce((carry, item2) => {
						return (carry + Number(item2.numero_hoja===item.hojax?item2.creditos:0))
					}, 0).toFixed(2));
				}

					self.loading=false;
				}else{
					item.cuenta_bancaria=null;
					item.cuenta_bancaria=[];
					self.loading=false;
					alertify.warning('Ya se ha seleccionado esta cuenta bancaria, seleccione otra',10);
				}

			},
			obtenerCuentasBancarias(item) {
				var self = this
				item.cuenta_bancaria=[];
				item.cuentas_bancariasx=[];
				if(item.banco.cuentas_bancarias_banco)
					item.cuentas_bancariasx = item.banco.cuentas_bancarias_banco
			},
			nueva() {
				var self = this;
				conciliacion.nueva({
						}, data => {
							self.bancos = data.bancos;
							self.periodos = data.periodos;
							self.form.anio = self.periodos[0];
							self.meses = self.form.anio.meses_periodo;
							self.loading = false;
						},
						err => {
							console.log(err);
							self.loading = false;
						})

			},
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
				self.form.numero_hojas=0;
				self.form.file = self.file;
				formData.append('file', self.file);
				//formData.append('id_cuenta_bancaria', self.form.cuenta_bancaria.id_cuenta_bancaria);
				//formData.append('nombre_cuenta', self.form.cuenta_bancaria.numero_cuenta);

				conciliacion.subirExcel(formData,data=> {
					self.form.datos_archivo=data.datos;
					self.form.numero_hojas=data.numero_hojas;
							for(var x=1;x<=self.form.numero_hojas;x+=1){
								self.form.resumen_archivo.push({
									hojax: x,
									cantidad_movimientos: 0,
									saldo_inicial:0,
									cuentas_bancariasx:[],
									cuenta_bancaria: '',
									banco: '',
									total_debitos: 0,
									total_creditos: 0,
									sobreescribir: false,
									fecha_valida: false,
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
				if(self.cantidad_no_validos===0){
				self.btnAction = "Registrando, espere....";
				/*if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {
					alertify.warning("El monto del recibo deber ser pagado en su totalidad", 5);
					//self.errorMessages.serie = Array('Error serie');
					self.btnAction = "Registrar";
				} else if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {

				} else {*/
					self.$swal.fire({
						title: 'Esta seguro de registrar estos estados de cuenta?',
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
							conciliacion.registrarEstadoCuenta(
									self.form,
									data => {
										this.$swal.fire(
												'Estado de cuenta registrado!',
												'El Estado de cuenta fue registrado correctamente',
												'success'
										);
										this.$router.push({
											name: "listado-estados-cuentas-bancarias"
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
					alertify.warning("Existen "+self.cantidad_no_validos+" registros con fechas inválidas, por favor revise", 5);
				}
			},

		},

		mounted() {
			this.nueva()
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