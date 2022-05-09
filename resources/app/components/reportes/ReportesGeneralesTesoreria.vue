<template>
	<div class="main">
		<div class="simple-welcome-text">
			<div class="text">Reportes de tesorería</div>
			<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-tesoreria' }"> Módulo de tesorería</router-link>> Reportes</div>
		</div>

		<div class="row">
			<template v-if="reportes.indexOf(469) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Vale provisional</div>
					</div>
					<div class="row">
					<div class="col-sm-4">
						<div class="form-group">
							<label> Formato:</label>
							<select class="form-control" v-model="formatoVales">
								<option value="pdf">PDF</option>
								<option value="xls">Excel</option>
							</select>
						</div>
					</div>
					<div class="col-sm-4">
						<button
								type="button"
								class="btn btn-primary btn-imprimir"
								@click="descargarReporteVales"
						>Imprimir
						</button>

					</div>
					</div>
				</div>
			</div>
		</template>
		<template v-if="reportes.indexOf(470) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Listado caja chica</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoCaja">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteCaja"
							>Imprimir
							</button>

						</div>
					</div>
				</div>
			</div>
		</template>


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
			<template v-if="reportes.indexOf(429) >= 0">
				<div class="col-md-6">

					<div class="content-box">
						<div class="content-box-header">
							<div class="box-title">Reporte de cheques emitidos.</div>
						</div>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<label class="check-label2"><input type="checkbox" v-on:change="cambiarCuentas"
																	   v-model="parametrosChequesEmitidos.todas_cuentas"> Todas las cuentas </label>
								</div>
							</div>
							<div class="col-sm-4" v-if="parametrosChequesEmitidos.todas_cuentas">
								<div class="form-group">
									<label class="label-search">Moneda:</label>
									<select class="form-control" v-model.number="parametrosChequesEmitidos.moneda" v-on:change="cambiarMoneda">
										<option value="0">Todas las monedas</option>
										<option value="1">Solo cordobas</option>
										<option value="3">Solo dolares</option>
									</select>
								</div>
							</div>
							<div v-if="parametrosChequesEmitidos.todas_cuentas" class="col-sm-6">
								<div class="form-group">
									<label class="label-search">Cuenta:</label>
									<v-select
											disabled
											label="cuenta"
											v-model="parametrosChequesEmitidos.cuenta"
											:options="parametrosChequesEmitidos.cuentas"
									></v-select>
								</div>
							</div>
                            <div v-if="!parametrosChequesEmitidos.todas_cuentas" class="col-sm-6">
                                <div class="form-group">
                                    <label class="label-search">Cuenta:</label>
                                    <v-select
                                            label="cuenta"
                                            v-model="parametrosChequesEmitidos.cuenta"
                                            :options="parametrosChequesEmitidos.cuentas"
                                    ></v-select>
                                </div>
                            </div>
							<div class="col-sm-4">
								<div class="form-group">
									<label> Formato:</label>
									<select class="form-control" v-model="parametrosChequesEmitidos.formatoChequeEmitido">
										<option value="pdf">PDF</option>
										<option value="xls">Excel</option>
									</select>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label for>Fecha inicial</label>
									<datepicker :format="format" :language="es"
												@selected="seleccionarFechaInicialChequesEmitidos" v-model="parametrosChequesEmitidos.fechaInicialChequesEmitidosX"></datepicker>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label for>Fecha final (Corte)</label>
									<datepicker :format="format" :language="es"
												@selected="seleccionarFechaFinalChequesEmitidos" v-model="parametrosChequesEmitidos.fechaFinalChequesEmitidosX"></datepicker>
								</div>
							</div>
							<div class="col-sm-4">
								<button
										type="button"
										class="btn btn-primary btn-imprimir"
										@click="descargarReporteChequesEmitidos"
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
                            <div class="box-title">Reporte de minutas de depositos.</div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label class="check-label2"><input type="checkbox" v-on:change="cambiarCuentasMinutas"
                                                                       v-model="parametrosMinutasDepositos.todas_cuentas_minutas"> Todas las cuentas </label>
                                </div>
                            </div>
                            <div v-if="parametrosMinutasDepositos.todas_cuentas_minutas" class="col-sm-6">
                                <div class="form-group">
                                    <label class="label-search">Cuenta:</label>
                                    <v-select
                                            disabled
                                            label="cuenta"
                                            v-model="parametrosMinutasDepositos.cuenta_minuta"
                                            :options="parametrosMinutasDepositos.cuentas_minutas"
                                    ></v-select>
                                </div>
                            </div>
                            <div v-if="!parametrosMinutasDepositos.todas_cuentas_minutas" class="col-sm-6">
                                <div class="form-group">
                                    <label class="label-search">Cuenta:</label>
                                    <v-select
                                            label="cuenta"
                                            v-model="parametrosMinutasDepositos.cuenta_minuta"
                                            :options="parametrosMinutasDepositos.cuentas_minutas"
                                    ></v-select>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label class="check-label2"><input type="checkbox" v-on:change="cambiarSucursalesMinutas"
                                                                       v-model="parametrosMinutasDepositos.todas_sucursales_minutas"> Todas las sucursales </label>
                                </div>
                            </div>
                            <div v-if="parametrosMinutasDepositos.todas_sucursales_minutas" class="col-sm-6">
                                <div class="form-group">
                                    <label class="label-search">Sucursal:</label>
                                    <v-select
                                            disabled
                                            label="descripcion"
                                            v-model="parametrosMinutasDepositos.sucursal_minuta"
                                            :options="parametrosMinutasDepositos.sucursales_minutas"
                                    ></v-select>
                                </div>
                            </div>
                            <div v-if="!parametrosMinutasDepositos.todas_sucursales_minutas" class="col-sm-6">
                                <div class="form-group">
                                    <label class="label-search">Sucursal:</label>
                                    <v-select
                                            label="descripcion"
                                            v-model="parametrosMinutasDepositos.sucursal_minuta"
                                            :options="parametrosMinutasDepositos.sucursales_minutas"
                                    ></v-select>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label> Formato:</label>
                                    <select class="form-control" v-model="parametrosMinutasDepositos.formatoMinutasDepositos">
                                        <option value="pdf">PDF</option>
                                        <option value="xls">Excel</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for>Fecha inicial</label>
                                    <datepicker :format="format" :language="es"
                                                @selected="seleccionarFechaInicialMinutasDepositos" v-model="parametrosMinutasDepositos.fechaInicialMinutasDepositosX"></datepicker>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for>Fecha final (Corte)</label>
                                    <datepicker :format="format" :language="es"
                                                @selected="seleccionarFechaFinalMinutasDepositos" v-model="parametrosMinutasDepositos.fechaFinalMinutasDepositosX"></datepicker>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <button
                                        type="button"
                                        class="btn btn-primary btn-imprimir"
                                        @click="descargarReporteMinutasDepositos"
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
	import solicitud from '../../api/solicitud-vacaciones'
	import caja from '../../api/caja_chica'
	import loadingImage from "../../assets/images/block50.gif";
	import es from "vuejs-datepicker/dist/locale/translations/es";
	import menu from "../../api/menu";
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
				reportes:[],

				formatoVales:'pdf',
				formatoCaja:'pdf',

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

				parametrosChequesEmitidos:
						{
							fechaInicialChequesEmitidos:moment(new Date()).format("YYYY-MM-DD"),
							fechaFinalChequesEmitidos:moment(new Date()).format("YYYY-MM-DD"),
							fechaInicialChequesEmitidosX:new Date(),
							fechaFinalChequesEmitidosX:new Date(),
							formatoChequeEmitido:'pdf',
							cuentas:[],
							cuentas_todas:[],
							cuentas_dolares:[],
							cuentas_cordobas:[],
							cuenta:[],
							moneda:0,
							todas_cuentas:false,
						},
                parametrosMinutasDepositos:
                    {
                        fechaInicialMinutasDepositos:moment(new Date()).format("YYYY-MM-DD"),
                        fechaFinalMinutasDepositos:moment(new Date()).format("YYYY-MM-DD"),
                        fechaInicialMinutasDepositosX:new Date(),
                        fechaFinalMinutasDepositosX:new Date(),
                        formatoMinutasDepositos:'pdf',
                        cuentas_minutas:[],
                        cuenta_minuta:[],
                        moneda:0,
                        todas_cuentas_minutas:false,
                        todas_sucursales_minutas:false,
                        sucursales_minutas:[],
                        sucursal_minuta:[],
                    }
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
			seleccionarFechaInicialChequesEmitidos(date) {
				this.parametrosChequesEmitidos.fechaInicialChequesEmitidos = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalChequesEmitidos(date) {
				this.parametrosChequesEmitidos.fechaFinalChequesEmitidos = moment(date).format("YYYY-MM-DD");
			},
            seleccionarFechaInicialMinutasDepositos(date) {
                this.parametrosMinutasDepositos.fechaInicialMinutasDepositos = moment(date).format("YYYY-MM-DD");
            },
            seleccionarFechaFinalMinutasDepositos(date) {
                this.parametrosMinutasDepositos.fechaFinalMinutasDepositos = moment(date).format("YYYY-MM-DD");
            },
			nuevo(){
				var self = this
				self.loading = true;
				caja.nuevo({}, data => {

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

					self.parametrosChequesEmitidos.cuentas_todas = data.cuentas_bancarias;
					self.parametrosChequesEmitidos.cuentas = data.cuentas_bancarias;
					self.parametrosChequesEmitidos.cuentas_cordobas = data.cuentas_bancarias_cordobas;
					self.parametrosChequesEmitidos.cuentas_dolares = data.cuentas_bancarias_dolares;

					self.parametrosMinutasDepositos.cuentas_minutas = data.cuentas_bancarias;
					self.parametrosMinutasDepositos.sucursales_minutas = data.sucursales;

					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			cambiarMoneda()
			{
				let self = this;
				if (self.parametrosChequesEmitidos.moneda === "0")
				{
					self.parametrosChequesEmitidos.cuentas = self.parametrosChequesEmitidos.cuentas_todas;

				} else if(self.parametrosChequesEmitidos.moneda === "1")
				{
					self.parametrosChequesEmitidos.cuentas = self.parametrosChequesEmitidos.cuentas_cordobas;
				} else if(self.parametrosChequesEmitidos.moneda === "3")
				{
					self.parametrosChequesEmitidos.cuentas = self.parametrosChequesEmitidos.cuentas_dolares;
				}else
					{
						self.parametrosChequesEmitidos.cuentas = self.parametrosChequesEmitidos.cuentas_todas;
					}
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

		descargarReporteVales () {
			if(!this.loading){
				var self=this;
				self.loading=true;
				alertify.success("Descargando datos, espere un momento.....",5);
				axios.post('modulo-tesoreria/caja-chica-comprobante/reporte/vale',
						{
							extension : self.formatoVales
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoVales === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'ReporteValeProvisional.'+ self.formatoVales;
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
			descargarReporteCaja () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('cajas/reporte',
							{
								extension : self.formatoCaja
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoCaja === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteCajaChica.'+ self.formatoCaja;
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
			descargarReporteChequesEmitidos () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('tesorería/cheques-emitidos/reporte',
							{
								extension : self.parametrosChequesEmitidos.formatoChequeEmitido,
								id_cuenta_bancaria : self.parametrosChequesEmitidos.cuenta.id_cuenta_bancaria,
								id_moneda : self.parametrosChequesEmitidos.moneda,
								fechaInicial : self.parametrosChequesEmitidos.fechaInicialChequesEmitidos,
								fechaFinal : self.parametrosChequesEmitidos.fechaFinalChequesEmitidos
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.parametrosChequesEmitidos.formatoChequeEmitido === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteCajaChica.'+ self.parametrosChequesEmitidos.formatoChequeEmitido;
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
            descargarReporteMinutasDepositos () {
                if(!this.loading){
                    var self=this;
                    self.loading=true;
                    alertify.success("Descargando datos, espere un momento.....",5);
                    axios.post('tesorería/minutas-depositos/reporte',
                        {
                            extension : self.parametrosMinutasDepositos.formatoMinutasDepositos,
                            id_cuenta_bancaria : self.parametrosMinutasDepositos.cuenta_minuta.id_cuenta_bancaria,
                            id_sucursal : self.parametrosMinutasDepositos.sucursal_minuta.id_sucursal,
                            fechaInicial : self.parametrosMinutasDepositos.fechaInicialMinutasDepositos,
                            fechaFinal : self.parametrosMinutasDepositos.fechaFinalMinutasDepositos
                        }, { responseType: 'blob' })
                        .then(({ data }) => {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            self.parametrosMinutasDepositos.formatoMinutasDepositos === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteCajaChica.'+ self.parametrosMinutasDepositos.formatoMinutasDepositos;
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
			cambiarCuentas()
			{
				var self=this;
				if(self.parametrosChequesEmitidos.todas_cuentas){
					self.parametrosChequesEmitidos.cuenta = {};
					self.parametrosChequesEmitidos.cuenta.id_cuenta_bancaria = 0;
					self.parametrosChequesEmitidos.cuenta.cuenta = 'Todas las cuentas';

					self.parametrosChequesEmitidos.moneda = 0;

				} else if(!self.parametrosChequesEmitidos.todas_cuentas)
					{
						self.parametrosChequesEmitidos.cuenta= self.parametrosChequesEmitidos.cuentas[5];
					}
			},
            cambiarCuentasMinutas()
            {
                var self=this;
                if(self.parametrosMinutasDepositos.todas_cuentas_minutas){
                    self.parametrosMinutasDepositos.cuenta_minuta = {};
                    self.parametrosMinutasDepositos.cuenta_minuta.id_cuenta_bancaria = 0;
                    self.parametrosMinutasDepositos.cuenta_minuta.cuenta = 'Todas las cuentas';
                } else if(!self.parametrosMinutasDepositos.todas_cuentas_minutas)
                {
                    self.parametrosMinutasDepositos.cuenta_minuta = self.parametrosMinutasDepositos.cuentas_minutas[5];
                }
            },
            cambiarSucursalesMinutas()
            {
                var self=this;
                if(self.parametrosMinutasDepositos.todas_sucursales_minutas){
                    self.parametrosMinutasDepositos.sucursal_minuta = {};
                    self.parametrosMinutasDepositos.sucursal_minuta.id_sucursal = 0;
                    self.parametrosMinutasDepositos.sucursal_minuta.descripcion = 'Todas las sucursales';
                } else if(!self.parametrosMinutasDepositos.todas_sucursales_minutas)
                {
                    self.parametrosMinutasDepositos.sucursal_minuta = self.parametrosMinutasDepositos.sucursales_minutas[1];
                }
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
			//this.cargarListaReportes();
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

