<template>
	<div class="main">
		<div class="simple-welcome-text">
			<div class="text">Reportes Caja y Banco</div>
			<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo caja y banco</router-link>> Reportes</div>
		</div>
		<div class="row">

			<template v-if="reportes.indexOf(425) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de retenciones</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialRetenciones" v-model="fechaInicialRetencionesX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalRetenciones" v-model="fechaFinalRetencionesX"></datepicker>
							</div>
						</div>
					<div class="col-sm-4">
						<div class="form-group">
							<label> Formato:</label>
							<select class="form-control" v-model="formatoRetenciones">
								<option value="pdf">PDF</option>
								<option value="xls">Excel</option>
							</select>
						</div>
					</div>
					<div class="col-sm-4">
						<button
								type="button"
								class="btn btn-primary btn-imprimir"
								@click="descargarReporteRetenciones"
						>Imprimir
						</button>

					</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(426) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte generales de cheques.</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialCheques" v-model="fechaInicialChequesX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalCheques" v-model="fechaFinalChequesX"></datepicker>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoCheques">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteCheques"
							>Imprimir
							</button>

						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(427) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Estado de solicitudes de cheque.</div>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Año:</label>
								<v-select
										label="periodo"
										v-model="anio"
										:options="periodos"
										v-on:input="obtenerMeses"

								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select :style="'margin-left: .5rem!important;'"
										  label="mes_letras"
										  v-model="mes"
										  :options="meses"
										  v-on:input="cambiarFechas"
								></v-select>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoChequesEstados">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteChequesEstados"
							>Imprimir
							</button>

						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(428) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de pago a beneficiarios.</div>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Año:</label>
								<v-select
										label="periodo"
										v-model="anioBeneficiario"
										:options="periodosBeneficiario"
										v-on:input="obtenerMesesBeneficiario"

								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select :style="'margin-left: .5rem!important;'"
										  label="mes_letras"
										  v-model="mesBeneficiario"
										  :options="mesesBeneficiario"
										  v-on:input="cambiarFechasBeneficiario"
								></v-select>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoBeneficiario">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteBeneficiario"
							>Imprimir
							</button>

						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(429) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte solicitudes de cheques anulados.</div>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Año:</label>
								<v-select
										label="periodo"
										v-model="anioChequeAnulado"
										:options="periodosChequesAnulados"
										v-on:input="obtenerMesesChequesAnulados"

								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select :style="'margin-left: .5rem!important;'"
										  label="mes_letras"
										  v-model="mesChequeAnulado"
										  :options="mesesChequesAnulados"
										  v-on:input="cambiarFechasChequesAnulado"
								></v-select>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoChequeAnulado">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteChequesAnulados"
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
	import solicitud from '../../api/solicitud-vacaciones'
	import loadingImage from "../../assets/images/block50.gif";
	import es from "vuejs-datepicker/dist/locale/translations/es";
	var fecha_actual = new Date();
	fecha_actual.setHours(23,59,59,999);

	var fecha_actual_beneficiario = new Date();
	fecha_actual_beneficiario.setHours(23,59,59,999);

	var fecha_actual_cheque_anulado = new Date();
	fecha_actual_cheque_anulado.setHours(23,59,59,999);
	export default {
		data() {
			return {
				loading: false,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,
				es: es,
				format: "dd-MM-yyyy",
				descargando:false,
				reportes: [],


				formatoRetenciones:'pdf',
				formatoCheques:'pdf',
				//sucursalesBusquedaURL: "/sucursales/buscar",
			//	bodegasBusquedaURL: "/bodegas/buscar",
				//clientesBusquedaURL: "/ventas/clientes/buscar",
				errorMessages: [],

				//Reporte retenciones
				fechaInicialRetenciones:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalRetenciones:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialRetencionesX:new Date(),
				fechaFinalRetencionesX:new Date(),

				//Reporte de chequest
				fechaInicialCheques:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalCheques:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialChequesX:new Date(),
				fechaFinalChequesX:new Date(),
				//Reporte estado cheques
				disabledDates: {
					to: '',//new Date(2020, 0, 1), // Disable all dates up to specific date 31/12/2019
					from: fecha_actual, // Disable all dates after specific date 01/02/2020
				},
				periodos:[],
				meses:[],
				mes:0,
				anio:0,
				primero_dia_mes_cheque:moment(new Date()).format("YYYY-MM-DD"),
				ultimo_dia_mes_cheque:moment(new Date()).format("YYYY-MM-DD"),
				formatoChequesEstados:'pdf',

				//Reporte pago beneficiario
				disabledDatesBeneficiario: {
					to: '',//new Date(2020, 0, 1), // Disable all dates up to specific date 31/12/2019
					from: fecha_actual_beneficiario, // Disable all dates after specific date 01/02/2020
				},
				periodosBeneficiario:[],
				mesesBeneficiario:[],
				mesBeneficiario:0,
				anioBeneficiario:0,
				primero_dia_mes_beneficiario:moment(new Date()).format("YYYY-MM-DD"),
				ultimo_dia_mes_beneficiario:moment(new Date()).format("YYYY-MM-DD"),
				formatoBeneficiario:'pdf',

				//Reporte cheques anulados
				disabledDatesChequesAnulados: {
					to: '',//new Date(2020, 0, 1), // Disable all dates up to specific date 31/12/2019
					from: fecha_actual_cheque_anulado, // Disable all dates after specific date 01/02/2020
				},
				periodosChequesAnulados:[],
				mesesChequesAnulados:[],
				mesChequeAnulado:0,
				anioChequeAnulado:0,
				primero_dia_mes_anulado:moment(new Date()).format("YYYY-MM-DD"),
				ultimo_dia_mes_anulado:moment(new Date()).format("YYYY-MM-DD"),
				formatoChequeAnulado:'pdf',
			}
		},
		methods: {
		descargarReporteRetenciones () {
			if(!this.loading){
				var self=this;
				self.loading=true;
				alertify.success("Descargando datos, espere un momento.....",5);
				axios.post('caja-banco/reportes/retenciones',
						{
							fechaInicio : self.fechaInicialRetenciones,
							fechaFinal : self.fechaFinalRetenciones,
							extension : self.formatoRetenciones
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoRetenciones === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'ReporteRetenciones.'+ self.formatoRetenciones;
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
			descargarReporteCheques () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('caja-banco/reportes/cheques',
							{
								fechaInicio : self.fechaInicialCheques,
								fechaFinal : self.fechaFinalCheques,
								extension : self.formatoCheques
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoCheques === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteCheques.'+ self.formatoCheques;
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
			descargarReporteChequesEstados () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('caja-banco/reportes/cheques-estado',
							{
								fechaInicio : self.primero_dia_mes_cheque,
								fechaFinal : self.ultimo_dia_mes_cheque,
								extension : self.formatoChequesEstados
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoChequesEstados === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteChequesEstados.'+ self.formatoChequesEstados;
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
			descargarReporteBeneficiario () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('caja-banco/reportes/pago-beneficiario',
							{
								fechaInicio : self.primero_dia_mes_beneficiario,
								fechaFinal : self.ultimo_dia_mes_beneficiario,
								extension : self.formatoBeneficiario
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoBeneficiario === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReportePagoBeneficiario.'+ self.formatoBeneficiario;
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
			descargarReporteChequesAnulados () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('caja-banco/reportes/cheques-anulados',
							{
								fechaInicio : self.primero_dia_mes_anulado,
								fechaFinal : self.ultimo_dia_mes_anulado,
								extension : self.formatoChequeAnulado
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoChequeAnulado === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteChequesAnulados.'+ self.formatoChequeAnulado;
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
			seleccionarBodegaReporte(e) {
				const bodega = e.target.value;
				var self = this;
				self.bodega_reporteEstadoBateria = bodega;
				self.id_bodega_reporteEstadoBateria = self.bodega_reporteEstadoBateria.id_bodega;
			},
			seleccionarSucursalReporte(e) {
				const sucursal = e.target.value;
				var self = this;
				self.sucursal_reporteExistencia = sucursal;
				self.id_sucursal_reporteExistencia = self.sucursal_reporteExistencia.id_sucursal;
			},
			seleccionarCliente(e) {
				const cliente = e.target.value;
				var self = this;
				self.form.cliente = cliente;
				self.form.id_cliente = self.form.cliente.id_cliente;
			},
			seleccionarClienteHistorial(e) {
				const clienteHistorial = e.target.value;
				var self = this;
				self.form.clienteHistorial = clienteHistorial;
				self.form.id_cliente_historial = self.form.clienteHistorial.id_cliente;
			},
			cambiarClientes()
			{
				var self=this;
				if(self.todos_clientes){
					self.form.clienteHistorial = {};
					self.form.clienteHistorial.id_cliente_historial = 0;
				}
			},
			seleccionarFechaInicialRetenciones(date) {
				this.fechaInicialRetenciones = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalRetenciones(date) {
				this.fechaFinalRetenciones = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaInicialCheques(date) {
				this.fechaInicialCheques = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalCheques(date) {
				this.fechaFinalCheques = moment(date).format("YYYY-MM-DD");
			},
			nuevo(){
				var self = this
				self.loading = true;
				solicitud.nuevo({}, data => {

					if(data.lista_reportes.length>0){
						data.lista_reportes.forEach((reportex, key) => {
							self.reportes.push(reportex.id_menu);
						});
					}

					self.periodos = data.periodos;
					self.anio = self.periodos[0];
					self.meses = self.anio.meses_periodo;

					self.periodosBeneficiario = data.periodos;
					self.anioBeneficiario = self.periodos[0];
					self.mesesBeneficiario = self.anioBeneficiario.meses_periodo;

					self.periodosChequesAnulados = data.periodos;
					self.anioChequeAnulado = self.periodos[0];
					self.mesesChequesAnulados = self.anioBeneficiario.meses_periodo;

					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			obtenerMeses(){
				let self = this;
				self.mes = [];
				self.meses = self.anio.meses_periodo
				self.mes = self.meses[0]
			},
			obtenerMesesBeneficiario(){
				let self = this;
				self.mesBeneficiario = [];
				self.mesesBeneficiario = self.anioBeneficiario.meses_periodo
				self.mesBeneficiario = self.mesesBeneficiario[0]
			},
			obtenerMesesChequesAnulados(){
				let self = this;
				self.mesChequeAnulado = [];
				self.mesesChequesAnulados = self.anioChequeAnulado.meses_periodo
				self.mesChequeAnulado = self.mesesChequesAnulados[0]
			},
			cambiarFechas(){

				let self = this;

				self.disabledDates.to = new Date(self.anio.periodo, self.mes.mes-1, 1);
				self.disabledDates.from = new Date(self.mes.ultimo_dia_mes);
				self.disabledDates.from.setTime( self.disabledDates.from.getTime() + 86400000 );
				//self.fechax1 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);

				self.primero_dia_mes_cheque = moment(self.disabledDates.to).format("YYYY-MM-DD"); //
				self.ultimo_dia_mes_cheque = moment(self.disabledDates.from).format("YYYY-MM-DD"); //
			},
			cambiarFechasBeneficiario(){

				let self = this;

				self.disabledDatesBeneficiario.to = new Date(self.anioBeneficiario.periodo, self.mesBeneficiario.mes-1, 1);
				self.disabledDatesBeneficiario.from = new Date(self.mesBeneficiario.ultimo_dia_mes);
				self.disabledDatesBeneficiario.from.setTime( self.disabledDatesBeneficiario.from.getTime() + 86400000 );
				//self.fechax1 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);

				self.primero_dia_mes_beneficiario = moment(self.disabledDatesBeneficiario.to).format("YYYY-MM-DD"); //
				self.ultimo_dia_mes_beneficiario = moment(self.disabledDatesBeneficiario.from).format("YYYY-MM-DD"); //
			},
			cambiarFechasChequesAnulado(){

				let self = this;

				self.disabledDatesChequesAnulados.to = new Date(self.anioChequeAnulado.periodo, self.mesChequeAnulado.mes-1, 1);
				self.disabledDatesChequesAnulados.from = new Date(self.mesChequeAnulado.ultimo_dia_mes);
				self.disabledDatesChequesAnulados.from.setTime( self.disabledDatesChequesAnulados.from.getTime() + 86400000 );
				//self.fechax1 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);

				self.primero_dia_mes_anulado = moment(self.disabledDatesChequesAnulados.to).format("YYYY-MM-DD"); //
				self.ultimo_dia_mes_anulado = moment(self.disabledDatesChequesAnulados.from).format("YYYY-MM-DD"); //
			},
		},
		mounted() {
			this.nuevo();
		}
    }
</script>
<style>
	.btn-imprimir {
		margin-top: 33px;
	}
	.check-label2 {
		margin-top: 40px;
	}

</style>

