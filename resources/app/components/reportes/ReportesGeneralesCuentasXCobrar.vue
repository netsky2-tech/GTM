<template>
	<div class="main">

		<div class="simple-welcome-text">
			<div class="text">Reportes Cuentas por Cobrar</div>
			<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-cuentas-cobrar' }"> Módulo Cuentas por Cobrar</router-link>> Reportes</div>
		</div>

		<div class="row">
			<template v-if="reportes.indexOf(440) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Antigüedad de Saldos Clientes</div>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label class="label-search">Zona: </label>
								<select class="form-control" label="descripcion" v-model="zona">
									<option :key="0" :value="0">{{ 'TODAS LAS ZONAS'}} </option>
									<option :key="zona.id_zona" :value="zona.id_zona" v-for="zona in zonas">{{ zona.descripcion}}</option>
								</select>
							</div>
						</div>
					<div class="col-sm-4">
						<div class="form-group">
							<label for>Fecha Corte</label>
							<datepicker :format="format" :language="es"
										@selected="seleccionarFechaCorteAntiguedad" v-model="fechaCorteAntiguedadX"></datepicker>
						</div>
					</div>

					<div class="col-sm-2">
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

			<template v-if="reportes.indexOf(441) >= 0">
				<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Estado Cuenta Detallado Clientes</div>
					</div>

					<div class="row">

						<div class="col-sm-6">
							<div class="form-group">
								<label> Cliente</label>
								<div class="form-group">
									<typeahead :initial="cliente_estadocuentadetallado" :params="{es_deudor: false}" :trim="80" :url="clientesBusquedaURL" @input="seleccionarClienteEstadoCuentaDetallado" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_cliente_estadocuentadetallado" v-text="message"></li>
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

			<template v-if="reportes.indexOf(442) >= 0">
				<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Estado de Cuenta Consolidado Clientes</div>
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


			<template v-if="reportes.indexOf(443) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Estado de Cuenta Consolidado Empleados</div>
					</div>

					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha Corte</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaCorteEstadoCuentaConsolidadoEmpleado" v-model="fechaCorteEstadoCuentaConsolidadoEmpleadoX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoEstadoCuentaConsolidadoEmpleado">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteEstadoCuentaConsolidadoEmpleado"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
            </div>
			</template>
			<template v-if="reportes.indexOf(444) >= 0">
            <div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Estado Cuenta Detallado Empleados</div>
					</div>

					<div class="row">

						<div class="col-sm-6">
							<div class="form-group">
								<label> Empleado</label>
								<div class="form-group">
									<typeahead :initial="empleado_estadocuentadetalladoEmpleado" :trim="80" :url="trabajadoresBusquedaURL" @input="seleccionarEmpleadoEstadoCuentaDetallado" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_empleado_estadocuentadetalladoEmpleado" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialEstadoCuentaDetalladoEmpleado" v-model="fechaInicialEstadoCuentaDetalladoEmpleadoX"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaCorteEstadoCuentaDetalladoEmpleado" v-model="fechaCorteEstadoCuentaDetalladoEmpleadoX"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoEstadoCuentaDetalladoEmpleado">
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
									@click="descargarReporteEstadoCuentaDetalladoEmpleado"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(445) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Estado Cuenta Detallado Otras Cuentas</div>
					</div>

					<div class="row">

						<div class="col-sm-6">
							<div class="form-group">
								<label> Cliente</label>
								<div class="form-group">
									<typeahead :initial="cliente_estadocuentadetalladoOCC" :params="{es_deudor: true}" :trim="80" :url="clientesBusquedaURL" @input="seleccionarClienteEstadoCuentaDetalladoOCC" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_cliente_estadocuentadetalladoOCC" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialEstadoCuentaDetalladoOCC" v-model="fechaInicialEstadoCuentaDetalladoOCCX"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaCorteEstadoCuentaDetalladoOCC" v-model="fechaCorteEstadoCuentaDetalladoOCCX"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoEstadoCuentaDetalladoOCC">
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
									@click="descargarReporteEstadoCuentaDetalladoOCC"
							>Imprimir
							</button>
							</div>
						</div>
					</div>
				</div>
			</template>

			<template v-if="reportes.indexOf(446) >= 0">
			<div class="col-md-6">
			<div class="content-box">
				<div class="content-box-header">
					<div class="box-title">Reporte Estado de Cuenta Consolidado Otras Cuentas</div>
				</div>

				<div class="row">
					<div class="col-sm-4">
						<div class="form-group">
							<label for>Fecha Corte</label>
							<datepicker :format="format" :language="es"
										@selected="seleccionarFechaCorteEstadoCuentaConsolidadoOCC" v-model="fechaCorteEstadoCuentaConsolidadoOCCX"></datepicker>
						</div>
					</div>

					<div class="col-sm-4">
						<div class="form-group">
							<label> Formato:</label>
							<select class="form-control" v-model="formatoEstadoCuentaConsolidadoOCC">
								<option value="pdf">PDF</option>
								<option value="xls">Excel</option>
							</select>
						</div>
					</div>


					<div class="col-sm-4">
						<button
								type="button"
								class="btn btn-primary btn-imprimir"
								@click="descargarReporteEstadoCuentaConsolidadoOCC"
						>Imprimir
						</button>
						</div>

					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(447) >= 0">
            <div class="col-md-6">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Reporte recibos pagos asociados</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Fecha inicial</label>
                                <datepicker :format="format" :language="es"
                                            @selected="seleccionarFechaInicialRecibos" v-model="fechaInicialRecibosX"></datepicker>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Fecha final (Corte)</label>
                                <datepicker :format="format" :language="es"
                                            @selected="seleccionarFechaFinalRecibos" v-model="fechaFinalRecibosX"></datepicker>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label> Formato:</label>
                                <select class="form-control" v-model="formatoRecibos">
                                    <option value="pdf">PDF</option>
                                    <option value="xls">Excel</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <button
                                    type="button"
                                    class="btn btn-primary btn-imprimir"
                                    @click="descargarReporteRecibos"
                            >Imprimir
                            </button>

                        </div>
                    </div>
                </div>
            </div>
			</template>



			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
			</div>
		</div>
</template>


<script type="text/ecmascript-6">
	import loadingImage from '../../assets/images/block50.gif'
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import menu from '../../api/menu'
	import zona from '../../api/zonas'
	import periodo from "../../api/periodos";
	import solicitud from "../../api/solicitud-vacaciones";
	export default {
		data() {
			return {
				loading: true,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,
				es: es,
				format: "dd-MM-yyyy",
				clientesBusquedaURL: "/ventas/clientes/buscar",
				trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
				errorMessages: [],
				reportes: [],

				//Reporte antiguedad saldos clientes
				fechaCorteAntiguedad: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteAntiguedadX: new Date(),
				formatoAntiguedad:'pdf',
				zona:'',
				zonas:[],

				//Reporte estado cuenta detallado
				fechaCorteEstadoCuentaDetallado: moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialEstadoCuentaDetallado: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteEstadoCuentaDetalladoX: new Date(),
				fechaInicialEstadoCuentaDetalladoX: new Date(),
				formatoEstadoCuentaDetallado:'pdf',
				cliente_estadocuentadetallado:{},
				id_cliente_estadocuentadetallado:'',


				//Reporte estado cuenta consolidado
				fechaCorteEstadoCuentaConsolidado: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteEstadoCuentaConsolidadoX: new Date(),
				formatoEstadoCuentaConsolidado:'pdf',



				//Reporte estado cuenta detallado
				fechaCorteEstadoCuentaDetalladoEmpleado: moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialEstadoCuentaDetalladoEmpleado: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteEstadoCuentaDetalladoEmpleadoX: new Date(),
				fechaInicialEstadoCuentaDetalladoEmpleadoX: new Date(),
				formatoEstadoCuentaDetalladoEmpleado:'pdf',
				empleado_estadocuentadetalladoEmpleado:{},
				id_empleado_estadocuentadetalladoEmpleado:'',


				//Reporte estado cuenta consolidado Empleado
				fechaCorteEstadoCuentaConsolidadoEmpleado: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteEstadoCuentaConsolidadoEmpleadoX: new Date(),
				formatoEstadoCuentaConsolidadoEmpleado:'pdf',




				//Reporte estado cuenta detallado OCC
				fechaCorteEstadoCuentaDetalladoOCC: moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialEstadoCuentaDetalladoOCC: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteEstadoCuentaDetalladoOCCX: new Date(),
				fechaInicialEstadoCuentaDetalladoOCCX: new Date(),
				formatoEstadoCuentaDetalladoOCC:'pdf',
				cliente_estadocuentadetalladoOCC:{},
				id_cliente_estadocuentadetalladoOCC:'',


				//Reporte estado cuenta consolidado
				fechaCorteEstadoCuentaConsolidadoOCC: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteEstadoCuentaConsolidadoOCCX: new Date(),
				formatoEstadoCuentaConsolidadoOCC:'pdf',

                //Reporte de recibos
                fechaInicialRecibos:moment(new Date()).format("YYYY-MM-DD"),
                fechaFinalRecibos:moment(new Date()).format("YYYY-MM-DD"),
                fechaInicialRecibosX:new Date(),
                fechaFinalRecibosX:new Date(),
                formatoRecibos:'pdf',

			}


		},
		methods: {

			seleccionarFechaCorteAntiguedad(date) {
				this.fechaCorteAntiguedad = moment(date).format("YYYY-MM-DD"); //
			},
			descargarReporteAntiguedad() {
			var self=this;
				self.loading=true;
				axios.post('cuentas-cobrar/reportes/antiguedad',
						{
							fechaCorte: this.fechaCorteAntiguedad,
							extension:this.formatoAntiguedad,
							id_zona:this.zona
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

//
			seleccionarFechaCorteEstadoCuentaDetallado(date) {
				this.fechaCorteEstadoCuentaDetallado = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarFechaInicialEstadoCuentaDetallado(date) {
				this.fechaInicialEstadoCuentaDetallado = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarClienteEstadoCuentaDetallado(e) {
				const clienteP = e.target.value;
				var self = this;
				self.cliente_estadocuentadetallado = clienteP;
				self.id_cliente_estadocuentadetallado = self.cliente_estadocuentadetallado.id_cliente;
			},
			descargarReporteEstadoCuentaDetallado() {
				var self=this;
				if(self.id_cliente_estadocuentadetallado){
				self.loading=true;
				axios.post('cuentas-cobrar/reportes/estado-cuenta-detallado',
						{
							fechaInicial: self.fechaInicialEstadoCuentaDetallado,
							fechaCorte: self.fechaCorteEstadoCuentaDetallado,
							extension:self.formatoEstadoCuentaDetallado,
							id_cliente:self.id_cliente_estadocuentadetallado
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
							link.download = 'EstadoCuentaClienteDetalle.'+self.formatoEstadoCuentaDetallado;
							link.click()
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
				}else{
					alertify.warning("No ha seleccionado un cliente válido.....", 5);
				}
			},


			seleccionarFechaCorteEstadoCuentaConsolidado(date) {
				this.fechaCorteEstadoCuentaConsolidado = moment(date).format("YYYY-MM-DD"); //
			},
			descargarReporteEstadoCuentaConsolidado() {
				var self=this;
				self.loading=true;
				axios.post('cuentas-cobrar/reportes/estado-cuenta-consolidado',
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




			seleccionarFechaCorteEstadoCuentaDetalladoEmpleado(date) {
				this.fechaCorteEstadoCuentaDetalladoEmpleado = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarFechaInicialEstadoCuentaDetalladoEmpleado(date) {
				this.fechaInicialEstadoCuentaDetalladoEmpleado = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarEmpleadoEstadoCuentaDetallado(e) {
				const empleadoP = e.target.value;
				var self = this;
				self.empleado_estadocuentadetalladoEmpleado = empleadoP;
				self.id_empleado_estadocuentadetalladoEmpleado = self.empleado_estadocuentadetalladoEmpleado.id_trabajador;
			},
			descargarReporteEstadoCuentaDetalladoEmpleado() {
				var self=this;
				if(self.id_empleado_estadocuentadetalladoEmpleado){
					self.loading=true;
					axios.post('cuentas-cobrar/reportes/estado-cuenta-detallado-trabajador',
							{
								fechaInicial: self.fechaInicialEstadoCuentaDetalladoEmpleado,
								fechaCorte: self.fechaCorteEstadoCuentaDetalladoEmpleado,
								extension:self.formatoEstadoCuentaDetalladoEmpleado,
								id_trabajador:self.id_empleado_estadocuentadetalladoEmpleado
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoEstadoCuentaDetalladoEmpleado === 'xls' ?
										blob = new Blob([data], { type: 'application/octet-stream' }) :
										self.formatoEstadoCuentaDetalladoEmpleado === 'pdf' ?
												blob = new Blob([data], { type: 'application/pdf' }):
												blob = new Blob([data], { type: 'text/html' });
								let link = document.createElement('a');
								link.setAttribute('target', '_blank');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'EstadoCuentaDetalladoEmpleado.'+self.formatoEstadoCuentaDetalladoEmpleado;
								link.click()
								self.loading = false;
							}).catch(function (error) {
						console.log(error);
						alertify.error("Error Descargando archivo.....", 5);
						self.loading = false;
					});
				}else{
					alertify.warning("No ha seleccionado un trabajador válido.....", 5);
				}
			},





			seleccionarFechaCorteEstadoCuentaConsolidadoEmpleado(date) {
				this.fechaCorteEstadoCuentaConsolidadoEmpleado = moment(date).format("YYYY-MM-DD"); //
			},
			descargarReporteEstadoCuentaConsolidadoEmpleado() {
				var self=this;
				self.loading=true;
				axios.post('cuentas-cobrar/reportes/estado-cuenta-consolidado-trabajador',
						{
							fechaCorte: this.fechaCorteEstadoCuentaConsolidadoEmpleado,
							extension:this.formatoEstadoCuentaConsolidadoEmpleado
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoEstadoCuentaConsolidadoEmpleado === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'EstadoCuentaConsolidadoEmpleado.'+self.formatoEstadoCuentaConsolidadoEmpleado;
							link.click()
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},







			seleccionarFechaCorteEstadoCuentaDetalladoOCC(date) {
				this.fechaCorteEstadoCuentaDetalladoOCC = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarFechaInicialEstadoCuentaDetalladoOCC(date) {
				this.fechaInicialEstadoCuentaDetalladoOCC = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarClienteEstadoCuentaDetalladoOCC(e) {
				const clienteP = e.target.value;
				var self = this;
				self.cliente_estadocuentadetalladoOCC = clienteP;
				self.id_cliente_estadocuentadetalladoOCC = self.cliente_estadocuentadetalladoOCC.id_cliente;
			},
			descargarReporteEstadoCuentaDetalladoOCC() {
				var self=this;
				if(self.id_cliente_estadocuentadetalladoOCC){
					self.loading=true;
					axios.post('cuentas-cobrar/reportes/estado-cuenta-detallado-occ',
							{
								fechaInicial: self.fechaInicialEstadoCuentaDetalladoOCC,
								fechaCorte: self.fechaCorteEstadoCuentaDetalladoOCC,
								extension:self.formatoEstadoCuentaDetalladoOCC,
								id_cliente:self.id_cliente_estadocuentadetalladoOCC
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoEstadoCuentaDetalladoOCC === 'xls' ?
										blob = new Blob([data], { type: 'application/octet-stream' }) :
										self.formatoEstadoCuentaDetalladoOCC === 'pdf' ?
												blob = new Blob([data], { type: 'application/pdf' }):
												blob = new Blob([data], { type: 'text/html' });
								let link = document.createElement('a');
								link.setAttribute('target', '_blank');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'EstadoCuentaClienteDetalle.'+self.formatoEstadoCuentaDetalladoOCC;
								link.click()
								self.loading = false;
							}).catch(function (error) {
						console.log(error);
						alertify.error("Error Descargando archivo.....", 5);
						self.loading = false;
					});
				}else{
					alertify.warning("No ha seleccionado un cliente válido.....", 5);
				}
			},


			seleccionarFechaCorteEstadoCuentaConsolidadoOCC(date) {
				this.fechaCorteEstadoCuentaConsolidadoOCC = moment(date).format("YYYY-MM-DD"); //
			},
			descargarReporteEstadoCuentaConsolidadoOCC() {
				var self=this;
				self.loading=true;
				axios.post('cuentas-cobrar/reportes/estado-cuenta-consolidado-occ',
						{
							fechaCorte: this.fechaCorteEstadoCuentaConsolidadoOCC,
							extension:this.formatoEstadoCuentaConsolidadoOCC
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoEstadoCuentaConsolidadoOCC === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'EstadoCuentaConsolidadoOCC.'+self.formatoEstadoCuentaConsolidadoOCC;
							link.click()
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},
            descargarReporteRecibos () {
                if(!this.loading){
                    var self=this;
                    self.loading=true;
                    alertify.success("Descargando datos, espere un momento.....",5);
                    axios.post('cuentas-cobrar/reportes/recibos',
                        {
                            fechaInicio : self.fechaInicialRecibos,
                            fechaFinal : self.fechaFinalRecibos,
                            extension : self.formatoRecibos
                        }, { responseType: 'blob' })
                        .then(({ data }) => {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            self.formatoCheques === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteRecibosPagoAsociados.'+ self.formatoRecibos;
                            link.click()
                            this.loading=false;
                        }) .catch(function (error) {
                        alertify.error("Error Descargando archivo.....",5);
                        self.loading=false;
                    })
                }else{
                    alertify.warning("Espere a que se complete la descarga anterior",5);
                }
            },

            seleccionarFechaInicialRecibos(date) {
                this.fechaInicialRecibos = moment(date).format("YYYY-MM-DD");
            },
            seleccionarFechaFinalRecibos(date) {
                this.fechaFinalRecibos = moment(date).format("YYYY-MM-DD");
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
			},
			obtenerZonas(){
				var self = this
				self.loading = true;
				zona.obtenerZonas( data => {
					self.zonas = data.zonas;
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},

		},
		mounted() {
			this.cargarListaReportes();
			this.obtenerZonas();
		}

	}
</script>
<style>
	.btn-imprimir {
		margin-top: 33px;
	}
</style>

