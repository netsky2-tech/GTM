<template>
	<div class="main">
		<div class="simple-welcome-text">
			<div class="text">Reportes nómina</div>
			<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-nomina' }"> Módulo nómina</router-link>> Reportes</div>
		</div>
		<div class="row">

			<template v-if="reportes.indexOf(451) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de personal</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicioPersonal" v-model="fechaInicioPersonalX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalPersonal" v-model="fechaFinalPersonalX"></datepicker>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarSucursal"
																   v-model="todas_sucursales"> Todas las sucursales</label>
							</div>
						</div>
					</div>
					<div class="row">
						<div v-if="!todas_sucursales" class="col-sm-6">
							<div class="form-group">
								<label> Sucursal</label>
								<div class="form-group">
									<typeahead :disabled="todas_sucursales" :initial="sucursal_reportePersonal"  :trim="80" :url="sucursalesBusquedaURL" @input="seleccionarSucursalReporte" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_bodega_reporteExistencia" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div v-if="todas_sucursales" class="col-sm-6">
							<div class="form-group">
								<label> Sucursal</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoPersonal">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
					</div>

					<div class="col-sm-4">
						<button
								type="button"
								class="btn btn-primary btn-imprimir"
								@click="ReportePersonalSucursal"
						>Imprimir
						</button>

					</div>
				</div>
				</div>
			</template>

			<template v-if="reportes.indexOf(452) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte INSS</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Año:</label>
								<v-select
										label="periodo"
										v-model="anioINSS"
										:options="periodos"
										v-on:input="obtenerMesesINSS"
								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select :style="'margin-left: .5rem!important;'"
										  label="mes_letras"
										  v-model="mesINSS"
										  :options="meses"
								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoINSS">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>



						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteINSS"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(453) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte IR</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Año:</label>
								<v-select
										label="periodo"
										v-model="anioIR"
										:options="periodos"
										v-on:input="obtenerMesesIR"
								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select :style="'margin-left: .5rem!important;'"
										  label="mes_letras"
										  v-model="mesIR"
										  :options="meses"
								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoIR">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>



						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteIR"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(454) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte control entrada y salida de personal</div>
					</div>

					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicioControl" v-model="fechaInicioControlX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalControl" v-model="fechaFinalControlX"></datepicker>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoControl">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="reporteControlEmpleado"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(455) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Constancia de retenciones</div>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label > Trabajador</label>
								<div class="form-group">
									<typeahead :initial="trabajador" :trim="80" :url="trabajadoresBusquedaURL"
											   @input="seleccionarTrabajador" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.trabajador"
										v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoConstancia">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="reporteConstanciaRetenciones"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(456) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Colilla de pago</div>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label > Trabajador</label>
								<div class="form-group">
									<typeahead :initial="trabajadorColilla" :trim="80" :url="trabajadoresBusquedaURL"
											   @input="seleccionarTrabajadorColilla" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.trabajadorColilla"
										v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Año:</label>
								<v-select
										label="periodo"
										v-model="anioColilla"
										:options="periodosColilla"
										v-on:input="obtenerMesesColilla"
								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select :style="'margin-left: .5rem!important;'"
										  label="mes_letras"
										  v-model="mesColilla"
										  :options="mesesColilla"
								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoColilla">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="reporteColillaPago"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(457) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de indemnización por antigüedad</div>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label > Trabajador</label>
								<div class="form-group">
									<typeahead :initial="trabajadorAntiguedad" :trim="80" :url="trabajadoresBusquedaURL"
											   @input="seleccionarTrabajadorAntiguedad" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.trabajadorAntiguedad"
										v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
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
									@click="reporteAntiguedad"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(458) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Proyección de indemnización por antigüedad</div>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label > Trabajador</label>
								<div class="form-group">
									<typeahead :initial="trabajadorAntiguedadProyectada" :trim="80" :url="trabajadoresBusquedaURL"
											   @input="seleccionarTrabajadorAntiguedadProyectada" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.trabajadorAntiguedadProyectada"
										v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
						<div class="form-group">
							<label for>Fecha de corte</label>
							<datepicker :format="format" :language="es" @selected="seleccionarFechaCorteAntiguedad" v-model="fechaCorteAntiguedadX"></datepicker>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoAntiguedadProyectada">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="reporteAntiguedadProyectada"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(459) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de aguinaldo</div>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label > Trabajador</label>
								<div class="form-group">
									<typeahead :initial="trabajadorAguinaldoProyectado" :trim="80" :url="trabajadoresBusquedaURL"
											   @input="seleccionarTrabajadorAguinaldoProyectado" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.trabajadorAguinaldoProyectado"
										v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Periodo:</label>
								<v-select
										label="periodo"
										v-model="anioAguinaldo"
										:options="periodosAguinaldo"
										v-on:input="obtenerMesesAguinaldo"
								></v-select>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha de corte</label>
								<datepicker :format="format" :language="es" @selected="seleccionarFechaCorteAguinaldo" v-model="fechaCorteAguinaldoX"></datepicker>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoAguinaldoProyectado">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="reporteAguinaldoProyectado"
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


				formatoPersonal:'pdf',
				formatoActivoBajas:'pdf',
				sucursalesBusquedaURL: "/sucursales/buscar",
				trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
				trabajador:{
					id_trabajador:0
				},
				trabajadorColilla:{
					id_trabajador:0
				},
				trabajadorAntiguedad:{
					id_trabajador:0
				},

			//	bodegasBusquedaURL: "/bodegas/buscar",
				//clientesBusquedaURL: "/ventas/clientes/buscar",
				errorMessages: [],

				sucursal_reportePersonal:{
					id_sucursal:0
				},
				todas_sucursales: true,



				//Reporta alta activos
				fechaInicioPersonal:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalPersonal:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicioControl:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalControl:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicioPersonalX:new Date(),
				fechaFinalPersonalX:new Date(),
				fechaInicioControlX:new Date(),
				fechaFinalControlX:new Date(),
				anioINSS:'',
				mesINSS:0,
				formatoINSS:'pdf',
				anioIR:'',
				mesIR:0,
				anioColilla:'',
				mesColilla:0,
				formatoColilla:'pdf',
				anioCentro:'',
				mesCentro:0,
				formatoCentro:'pdf',
				anioAntiguedad:'',
				mesAntiguedad:0,
				formatoAntiguedad:'pdf',
				formatoIR:'pdf',
				formatoControl:'pdf',
				formatoConstancia:'pdf',
				periodos:[],
				periodosColilla:[],
				periodosCentro:[],
				meses:[],
				mesesColilla:[],
				mesesCentro:[],
				mes:0,
				anio:0,
				//Antiguedad proyectada
				fechaCorteAntiguedad:moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteAntiguedadX:new Date(),
				formatoAntiguedadProyectada:'pdf',
				trabajadorAntiguedadProyectada:{
					id_trabajador:0
				},
					//Aguinaldo proyectada
					fechaCorteAguinaldo:moment(new Date()).format("YYYY-MM-DD"),
					fechaCorteAguinaldoX:new Date(),
					formatoAguinaldoProyectado:'pdf',
				periodosAguinaldo:[],
				mesesAguinaldo:[],
				anioAguinaldo:'',
				mesAguinaldo:0,
					trabajadorAguinaldoProyectado:{
						id_trabajador:0,
					},
			}
		},
		methods: {
			ReportePersonalSucursal () {
			if(!this.loading){
				var self=this;
				self.loading=true;
				alertify.success("Descargando datos, espere un momento.....",5);
				axios.post('nomina/reportes/personal-sucursal',
						{
							id_sucursal : self.sucursal_reportePersonal.id_sucursal,
							fechaInicio : self.fechaInicioPersonal,
							fechaFinal : self.fechaFinalPersonal,
							extension : self.formatoPersonal
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoPersonal === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'PersonalPorSucursal.'+ self.formatoPersonal;
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
			descargarReporteINSS () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('nomina/reportes/inss',
							{
								anio: self.anioINSS.periodo,
								mes : self.mesINSS.mes,
								extension : self.formatoINSS
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoINSS === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteINSS.'+ self.formatoINSS;
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
			descargarReporteIR () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('nomina/reportes/ir',
							{
								anio: self.anioIR.periodo,
								mes : self.mesIR.mes,
								extension : self.formatoIR
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoIR === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteIR.'+ self.formatoIR;
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
			reporteControlEmpleado () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('nomina/reportes/control-entrada',
							{
								fecha_inicio : self.fechaInicioControl,
								fecha_final : self.fechaFinalControl,
								extension : self.formatoControl
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoControl === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ControlEmpleado.'+ self.formatoControl;
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
			reporteConstanciaRetenciones () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('nomina/reportes/constancia_retencion',
							{
								id_trabajador : self.trabajador.id_trabajador,
								extension : self.formatoConstancia
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoConstancia === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ConstanciaRetencion.'+ self.formatoConstancia;
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
			reporteColillaPago () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('nomina/reportes/colilla-pago',
							{
								id_trabajador : self.trabajadorColilla.id_trabajador,
								extension : self.formatoColilla,
								mes : self.mesColilla.mes,
								anio : self.anioColilla.periodo
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoColilla === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ColillaPago.'+ self.formatoColilla;
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
			reporteAntiguedad () {
				if(!this.loading){
					if(this.trabajadorAntiguedad.fecha_egreso) {
						var self = this;
						self.loading = true;
						alertify.success("Descargando datos, espere un momento.....", 5);
						axios.post('nomina/reportes/antiguedad',
								{
									id_trabajador: self.trabajadorAntiguedad.id_trabajador,
									extension: self.formatoAntiguedad,
								}, {responseType: 'blob'})
								.then(({data}) => {
									let blob = new Blob([data], {type: 'application/pdf'})
									self.formatoAntiguedad === 'xls' ? blob = new Blob([data], {type: 'application/octet-stream'}) : blob = new Blob([data], {type: 'application/pdf'});
									let link = document.createElement('a');
									link.href = window.URL.createObjectURL(blob)
									link.download = 'ReporteAntiguedad.' + self.formatoAntiguedad;
									link.click()
									this.loading = false;
								}).catch(function (error) {
							alertify.error("Error Descargando archivo.....", 5);
							self.loading = false;
						})
					}else{
						alertify.warning("Verifique si el trabajador seleccionado ya no forma parte de la empresa.",5);
					}
				}else{
					alertify.warning("Espere a que se complete la descarga anterior",5);
				}
			},
			reporteAntiguedadProyectada () {
				if(!this.loading){
					if(this.trabajadorAntiguedadProyectada.fecha_ingreso) {
						var self = this;
						self.loading = true;
						alertify.success("Descargando datos, espere un momento.....", 5);
						axios.post('nomina/reportes/antiguedad-proyectada',
								{
									id_trabajador: self.trabajadorAntiguedadProyectada.id_trabajador,
									extension: self.formatoAntiguedadProyectada,
									fecha_corte : self.fechaCorteAntiguedad
								}, {responseType: 'blob'})
								.then(({data}) => {
									let blob = new Blob([data], {type: 'application/pdf'})
									self.formatoAntiguedadProyectada === 'xls' ? blob = new Blob([data], {type: 'application/octet-stream'}) : blob = new Blob([data], {type: 'application/pdf'});
									let link = document.createElement('a');
									link.href = window.URL.createObjectURL(blob)
									link.download = 'ReporteAntiguedadProyectada.' + self.formatoAntiguedadProyectada;
									link.click()
									this.loading = false;
								}).catch(function (error) {
							alertify.error("Error Descargando archivo.....", 5);
							self.loading = false;
						})
					}else{
						alertify.warning("Verifique que el trabajador seleccionado siga formando parte de la empresa.",5);
					}
				}else{
					alertify.warning("Espere a que se complete la descarga anterior",5);
				}
			},
			reporteAguinaldoProyectado () {
				if(!this.loading){
						var self = this;
						self.loading = true;
						alertify.success("Descargando datos, espere un momento.....", 5);
						axios.post('nomina/reportes/aguinaldo-proyectada',
								{
									id_trabajador: self.trabajadorAguinaldoProyectado.id_trabajador,
									extension: self.formatoAguinaldoProyectado,
									fecha_corte : self.fechaCorteAguinaldo,
									periodo : self.anioAguinaldo.periodo
								}, {responseType: 'blob'})
								.then(({data}) => {
									let blob = new Blob([data], {type: 'application/pdf'})
									self.formatoAguinaldoProyectado === 'xls' ? blob = new Blob([data], {type: 'application/octet-stream'}) : blob = new Blob([data], {type: 'application/pdf'});
									let link = document.createElement('a');
									link.href = window.URL.createObjectURL(blob)
									link.download = 'ReporteAguinaldoProyectado.' + self.formatoAguinaldoProyectado;
									link.click()
									this.loading = false;
								}).catch(function (error) {
							alertify.error("Error Descargando archivo.....", 5);
							self.loading = false;
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
				self.sucursal_reportePersonal = sucursal;
				self.id_sucursal_reportePersonal = self.sucursal_reportePersonal.id_sucursal;
			},
			seleccionarCliente(e) {
				const cliente = e.target.value;
				var self = this;
				self.form.cliente = cliente;
				self.form.id_cliente = self.form.cliente.id_cliente;
			},
			seleccionarTrabajador(e) {
				const trabajadorP = e.target.value;
				var self = this;
				self.trabajador = trabajadorP;
				self.id_trabajador = self.trabajador.id_trabajador;
			},
			seleccionarTrabajadorColilla(e) {
				const trabajadorC = e.target.value;
				var self = this;
				self.trabajadorColilla = trabajadorC;
				self.id_trabajador = self.trabajadorColilla.id_trabajador;
			},
			seleccionarTrabajadorAntiguedad(e) {
				const trabajadorA = e.target.value;
				var self = this;
				self.trabajadorAntiguedad = trabajadorA;
				self.id_trabajador = self.trabajadorAntiguedad.id_trabajador;
			},
			seleccionarTrabajadorAguinaldoProyectado(e) {
				const trabajadorAg = e.target.value;
				var self = this;
				self.trabajadorAguinaldoProyectado = trabajadorAg;
				self.id_trabajador = self.trabajadorAguinaldoProyectado.id_trabajador;
			},
			seleccionarTrabajadorAntiguedadProyectada(e) {
				const trabajadorAP = e.target.value;
				var self = this;
				self.trabajadorAntiguedadProyectada = trabajadorAP;
				self.id_trabajador = self.trabajadorAntiguedadProyectada.id_trabajador;
			},
			seleccionarClienteHistorial(e) {
				const clienteHistorial = e.target.value;
				var self = this;
				self.form.clienteHistorial = clienteHistorial;
				self.form.id_cliente_historial = self.form.clienteHistorial.id_cliente;
			},
			cambiarSucursal()
			{
				var self=this;
				if(self.todas_sucursales){
					self.sucursal_reportePersonal = {};
					self.sucursal_reportePersonal.id_sucursal = 0;
				}
			},
			seleccionarFechaInicioPersonal(date) {
				this.fechaInicioPersonal = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalPersonal(date) {
				this.fechaFinalPersonal = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaInicioControl(date) {
				this.fechaInicioControl = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalControl(date) {
				this.fechaFinalControl = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaCorteAntiguedad(date) {
				this.fechaCorteAntiguedad = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaCorteAguinaldo(date) {
				this.fechaCorteAguinaldo = moment(date).format("YYYY-MM-DD");
			},
			obtenerMesesINSS(){
				let self = this;
				self.mesINSS = [];
				self.meses = self.anioINSS.meses_periodo
				self.mesINSS = self.meses[0]
			},
			obtenerMesesIR(){
				let self = this;
				self.mesIR = [];
				self.meses = self.anioIR.meses_periodo
				self.mesIR = self.meses[0]
			},
			obtenerMesesColilla(){
				let self = this;
				self.mesColilla = [];
				self.mesesColilla = self.anioColilla.meses_periodo
				self.mesColilla = self.meses[0]
			},
			obtenerMesesAguinaldo(){
				let self = this;
				self.mesAguinaldo = [];
				self.mesesAguinaldo = self.anioAguinaldo.meses_periodo
				self.mesAguinaldo = self.meses[0]
			},
			obtenerMesesCentro(){
				let self = this;
				self.mesCentro = [];
				self.mesesCentro = self.anioCentro.meses_periodo
				self.mesCentro = self.meses[0]
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

					self.periodosColilla = data.periodos;
					self.anioColilla = self.periodos[0];
					self.mesesColilla = self.anio.meses_periodo;

					self.periodosCentro = data.periodos;
					self.anioCentro = self.periodos[0];
					self.mesesCentro = self.anio.meses_periodo;

					self.periodosAguinaldo = data.periodos;
					self.anioAguinaldo = self.periodos[0];
					self.mesesAguinaldo = self.anio.meses_periodo;

					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},

		},
		mounted()
		{
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

