<template>
	<div class="main">

		<div class="simple-welcome-text">
			<div class="text">Reportes Cuentas por Pagar</div>
			<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-cuentas-pagar' }"> Módulo Cuentas por Pagar</router-link>> Reportes</div>
		</div>

		<div class="row">
			<template v-if="reportes.indexOf(448) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Antigüedad de Saldos</div>
					</div>

					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha Corte</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaCorteAntiguedad" v-model="fechaCorteAntiguedadX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoAntiguedad">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteAntiguedad"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(449) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Estado Cuenta Detallado</div>
					</div>

					<div class="row">

						<div class="col-sm-6">
							<div class="form-group">
								<label> Proveedor | Acreedor</label>
								<div class="form-group">
									<typeahead :initial="proveedor_estadocuentadetallado" :trim="80" :url="proveedoresBusquedaURL" @input="seleccionarProveedorEstadoCuentaDetallado" style="width: 100%;"></typeahead>

								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_proveedor_estadocuentadetallado" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialEstadoCuentaDetallado" v-model="fechaInicialEstadoCuentaDetalladoX"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaCorteEstadoCuentaDetallado" v-model="fechaCorteEstadoCuentaDetalladoX"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoEstadoCuentaDetallado">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
									<option value="html">HTML</option>
								</select>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteEstadoCuentaDetallado"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(450) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Estado de Cuenta Consolidado</div>
					</div>

					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha Corte</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaCorteEstadoCuentaConsolidado" v-model="fechaCorteEstadoCuentaConsolidadoX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoEstadoCuentaConsolidado">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteEstadoCuentaConsolidado"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			</div>


			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>
</template>


<script type="text/ecmascript-6">
	import loadingImage from '../../assets/images/block50.gif'
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import menu from "../../api/menu";
	export default {
		data() {
			return {
				loading: false,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,
				es: es,
				format: "dd-MM-yyyy",
				proveedoresBusquedaURL: "/proveedores/buscar",
				errorMessages: [],
				reportes: [],

				//Reporte antiguedad saldos
				fechaCorteAntiguedad: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteAntiguedadX: new Date(),
				formatoAntiguedad:'pdf',

				//Reporte estado cuenta detallado
				fechaCorteEstadoCuentaDetallado: moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialEstadoCuentaDetallado: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteEstadoCuentaDetalladoX: new Date(),
				fechaInicialEstadoCuentaDetalladoX: new Date(),
				formatoEstadoCuentaDetallado:'pdf',
				proveedor_estadocuentadetallado:{},
				id_proveedor_estadocuentadetallado:'',


				//Reporte estado cuenta consolidado
				fechaCorteEstadoCuentaConsolidado: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteEstadoCuentaConsolidadoX: new Date(),
				formatoEstadoCuentaConsolidado:'pdf',

			}


		},
		methods: {

			seleccionarFechaCorteAntiguedad(date) {
				this.fechaCorteAntiguedad = moment(date).format("YYYY-MM-DD"); //
			},
			descargarReporteAntiguedad() {
				var self=this;
				self.loading=true;
				axios.post('cuentas-pagar/reportes/antiguedad',
						{
							fechaCorte: this.fechaCorteAntiguedad,
							extension:this.formatoAntiguedad
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoAntiguedad === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'ReporteAntiguedad.'+self.formatoAntiguedad;
							link.click()
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},


			seleccionarFechaCorteEstadoCuentaDetallado(date) {
				this.fechaCorteEstadoCuentaDetallado = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarFechaInicialEstadoCuentaDetallado(date) {
				this.fechaInicialEstadoCuentaDetallado = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarProveedorEstadoCuentaDetallado(e) {
				const clienteP = e.target.value;
				var self = this;
				self.proveedor_estadocuentadetallado = clienteP;
				self.id_proveedor_estadocuentadetallado = self.proveedor_estadocuentadetallado.id_proveedor;
			},
			descargarReporteEstadoCuentaDetallado() {
				var self=this;
				if(self.id_proveedor_estadocuentadetallado){
				self.loading=true;
				axios.post('cuentas-pagar/reportes/estado-cuenta-detallado',
						{
							fechaInicial: self.fechaInicialEstadoCuentaDetallado,
							fechaCorte: self.fechaCorteEstadoCuentaDetallado,
							extension:self.formatoEstadoCuentaDetallado,
							id_proveedor:self.id_proveedor_estadocuentadetallado
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoEstadoCuentaDetallado === 'xls' ?
									blob = new Blob([data], { type: 'application/octet-stream' }) :
									self.formatoEstadoCuentaDetallado === 'pdf' ?
											blob = new Blob([data], { type: 'application/pdf' }):
											blob = new Blob([data], { type: 'text/html' });
							let link = document.createElement('a');
							link.setAttribute('target', '_blank');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'EstadoCuentaProveedorDetalle.'+self.formatoEstadoCuentaDetallado;
							link.click()
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
				}else{
					alertify.warning("No ha seleccionado un proveedor válido.....", 5);
				}
			},


			seleccionarFechaCorteEstadoCuentaConsolidado(date) {
				this.fechaCorteEstadoCuentaConsolidado = moment(date).format("YYYY-MM-DD"); //
			},
			descargarReporteEstadoCuentaConsolidado() {
				var self=this;
				self.loading=true;
				axios.post('cuentas-pagar/reportes/estado-cuenta-consolidado',
						{
							fechaCorte: this.fechaCorteEstadoCuentaConsolidado,
							extension:this.formatoEstadoCuentaConsolidado
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoEstadoCuentaConsolidado === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'EstadoCuentaConsolidado.'+self.formatoEstadoCuentaConsolidado;
							link.click()
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},
			cargarListaReportes(){

				let self = this;
				menu.obtenerListaReportes(
						data => {
							if(data.rows.length>0){
								data.rows.forEach((reportex, key) => {
									self.reportes.push(reportex.id_menu);
								});
							}
							self.loading=false;
						},
						err => {
							self.loading=false;
							console.log(err);
						}
				);
			}

		},
		mounted() {
			this.cargarListaReportes();
		}
    }
</script>
<style>
	.btn-imprimir {
		margin-top: 33px;
	}
</style>

