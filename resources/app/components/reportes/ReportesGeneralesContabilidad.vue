<template>
	<div class="main">
		<div class="simple-welcome-text">
			<div class="text">Reportes Contabilidad</div>
			<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> Reportes</div>
		</div>

		<template v-if="reportes.indexOf(430) >= 0">

		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Estado de Resultado Comparativo</div>
					</div>

					<div class="row">
						<div class="col-sm-2">
							<div class="form-group">
								<label class="label-search">Periodo Actual:</label>
								<v-select
										:options="parametroEstadoResultado.periodos_fiscales"
										label="periodo"
										v-model="parametroEstadoResultado.periodo"
										v-on:input="obtenerMesesPeriodo()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes Actual:</label>
								<v-select
										:options="parametroEstadoResultado.periodos_meses"
										label="descripcion"
										v-model="parametroEstadoResultado.mes"
										v-on:input="obtenerDiasMes()"
								></v-select>
							</div>
						</div>


						<div class="col-sm-2">
							<div class="form-group">
								<label class="label-search">Periodo Anterior:</label>
								<v-select
										:options="parametroEstadoResultado.periodos_fiscales1"
										label="periodo"
										v-model="parametroEstadoResultado.periodo1"
										v-on:input="obtenerMesesPeriodo1()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes Anterior:</label>
								<v-select
										:options="parametroEstadoResultado.periodos_meses1"
										label="descripcion"
										v-model="parametroEstadoResultado.mes1"
										v-on:input="obtenerDiasMes1()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="parametroEstadoResultado.formato">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>


						<div class="col-sm-3">
							<button
									type="button"
									class="btn btn-primary btn-generar"
									@click="descargarReporteEstadoResultado"
							>Imprimir
							</button>
						</div>


					</div>

				</div>
			</div>
			</div>
		</template>

		<template v-if="reportes.indexOf(431) >= 0">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Libro Diario</div>
					</div>
		<div class="row">
			<div class="col-sm-2">
				<div class="form-group">
					<label class="label-search">Periodo:</label>
					<v-select
							:options="parametroLibroDiario.periodos_fiscales"
							label="periodo"
							v-model="parametroLibroDiario.periodo"
							v-on:input="obtenerMesesPeriodoLD()"
					></v-select>
				</div>
			</div>

			<div class="col-sm-3">
				<div class="form-group">
					<label class="label-search">Mes:</label>
					<v-select
							:options="parametroLibroDiario.periodos_meses"
							label="descripcion"
							v-model="parametroLibroDiario.mes"
							v-on:input="obtenerDiasMesLD()"
					></v-select>
				</div>
			</div>
		
			<div class="col-sm-3">
				<div class="form-group">
					<label> Formato impresión:</label>
					<select class="form-control" v-model="parametroLibroDiario.formato">
						<option value="pdf">PDF</option>
						<option value="xls">Excel</option>
					</select>
				</div>
			</div>

			<div class="col-sm-3">
				<button
						type="button"
						class="btn btn-primary btn-generar"
						@click="descargarReporteLibroDiario"
				>Imprimir
				</button>
			</div>
		</div>
				</div>
			</div>
		</div>
		</template>

		<template v-if="reportes.indexOf(432) >= 0">

		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Libro Mayor</div>
					</div>
					<div class="row">

						<div class="col-sm-2">
							<div class="form-group">
								<label class="label-search">Periodo:</label>
								<v-select
										:options="parametroLibroMayor.periodos_fiscales"
										label="periodo"
										v-model="parametroLibroMayor.periodo"
										v-on:input="obtenerMesesPeriodoLM()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select
										:options="parametroLibroMayor.periodos_meses"
										label="descripcion"
										v-model="parametroLibroMayor.mes"
										v-on:input="obtenerDiasMesLM()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato impresión:</label>
								<select class="form-control" v-model="parametroLibroMayor.formato">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>

						<div class="col-sm-3">
							<button
									type="button"
									class="btn btn-primary btn-generar"
									@click="descargarReporteLibroMayor"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
		</div></template>

		<template v-if="reportes.indexOf(433) >= 0">

		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Estado Cambio Patrimonio</div>
					</div>
					<div class="row">

						<div class="col-sm-2">
							<div class="form-group">
								<label class="label-search">Periodo:</label>
								<v-select
										:options="parametroEstadoCambioPatrimonio.periodos_fiscales"
										label="periodo"
										v-model="parametroEstadoCambioPatrimonio.periodo"
										v-on:input="obtenerMesesPeriodoECP()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select
										:options="parametroEstadoCambioPatrimonio.periodos_meses"
										label="descripcion"
										v-model="parametroEstadoCambioPatrimonio.mes"
										v-on:input="obtenerDiasMesECP()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato impresión:</label>
								<select class="form-control" v-model="parametroEstadoCambioPatrimonio.formato">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>

						<div class="col-sm-3">
							<button
									type="button"
									class="btn btn-primary btn-generar"
									@click="descargarReporteCambioPatrimonio"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		</template>


		<template v-if="reportes.indexOf(434) >= 0">

		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Balanza Comprobación Anual</div>
					</div>
					<div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="">Nivel de cuenta</label>
                                <v-select
                                        v-model="parametroBalanzaAnual.nivel_cuenta"
                                        label="descripcion"
                                        :options="parametroBalanzaAnual.niveles_cuenta">
                                    <!-- v-on:input="obtenerCuentasNivel(form.nivel_cuenta)"-->
                                </v-select>
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.nivel_cuenta" :key="message"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>
						<div class="col-sm-2">
							<div class="form-group">
								<label class="label-search">Periodo:</label>
								<v-select
										:options="parametroBalanzaAnual.periodos_fiscales"
										label="periodo"
										v-model="parametroBalanzaAnual.periodo"
										v-on:input="obtenerMesesPeriodoBCA()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select
										:options="parametroBalanzaAnual.periodos_meses"
										label="descripcion"
										v-model="parametroBalanzaAnual.mes"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato impresión:</label>
								<select class="form-control" v-model="parametroBalanzaAnual.formato">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>

						<div class="col-sm-3">
							<button
									type="button"
									class="btn btn-primary btn-generar"
									@click="descargarReporteBalanzaComprobacionAnual"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		</template>

		<template v-if="reportes.indexOf(435) >= 0">

        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Reporte de Notas</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="form-group">
                                <label class="label-search">Periodo:</label>
                                <v-select
                                        :options="parametroNotas.periodos_fiscales"
                                        label="periodo"
                                        v-model="parametroNotas.periodo"
                                        v-on:input="obtenerMesesPeriodoNEEFF()"
                                ></v-select>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label class="label-search">Mes:</label>
                                <v-select
                                        :options="parametroNotas.periodos_meses"
                                        label="descripcion"
                                        v-model="parametroNotas.mes"
                                ></v-select>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label> Formato impresión:</label>
                                <select class="form-control" v-model="parametroNotas.formato">
                                    <option value="pdf">PDF</option>
                                    <option value="xls">Excel</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <button
                                    type="button"
                                    class="btn btn-primary btn-generar"
                                    @click="descargarReporteNotas"
                            >Imprimir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		</template>

		<template v-if="reportes.indexOf(436) >= 0">

        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Reporte de Anexo Flujo Efectivo</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="form-group">
                                <label class="label-search">Periodo:</label>
                                <v-select
                                        :options="parametroAnexoFlujo.periodos_fiscales"
                                        label="periodo"
                                        v-model="parametroAnexoFlujo.periodo"
                                        v-on:input="obtenerMesesPeriodoAFE()"
                                ></v-select>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label class="label-search">Mes:</label>
                                <v-select
                                        :options="parametroAnexoFlujo.periodos_meses"
                                        label="descripcion"
                                        v-model="parametroAnexoFlujo.mes"
                                ></v-select>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label> Formato impresión:</label>
                                <select class="form-control" v-model="parametroAnexoFlujo.formato">
                                    <option value="pdf">PDF</option>
                                    <option value="xls">Excel</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <button
                                    type="button"
                                    class="btn btn-primary btn-generar"
                                    @click="descargarReporteAFE"
                            >Imprimir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		</template>

		<template v-if="reportes.indexOf(437) >= 0">

        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Reporte de Flujo Efectivo</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="form-group">
                                <label class="label-search">Periodo:</label>
                                <v-select
                                        :options="parametroFlujoEfectivo.periodos_fiscales"
                                        label="periodo"
                                        v-model="parametroFlujoEfectivo.periodo"
                                        v-on:input="obtenerMesesPeriodoFE()"
                                ></v-select>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label class="label-search">Mes:</label>
                                <v-select
                                        :options="parametroFlujoEfectivo.periodos_meses"
                                        label="descripcion"
                                        v-model="parametroFlujoEfectivo.mes"
                                ></v-select>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label> Formato impresión:</label>
                                <select class="form-control" v-model="parametroFlujoEfectivo.formato">
                                    <option value="pdf">PDF</option>
                                    <option value="xls">Excel</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <button
                                    type="button"
                                    class="btn btn-primary btn-generar"
                                    @click="descargarReporteFE"
                            >Imprimir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		</template>

		<template v-if="reportes.indexOf(438) >= 0">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de Centro de Costo</div>
					</div>
					<div class="row">
						<div class="col-sm-2">
							<div class="form-group">
								<label class="label-search">Periodo:</label>
								<v-select
										:options="parametroCentroCosto.periodos_fiscales"
										label="periodo"
										v-model="parametroCentroCosto.periodo"
										v-on:input="obtenerMesesPeriodoMCC()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select
										:options="parametroCentroCosto.periodos_meses"
										label="descripcion"
										v-model="parametroCentroCosto.mes"
								></v-select>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for=""> Centros</label>
								<select class="form-control" v-model="parametroCentroCosto.centro">
									<option :key="0" :value="0">{{ 'Todos los centros'}} </option>
									<option :key="parametroCentroCosto.id_centro" :value="parametroCentroCosto.id_centro" v-for="centrox in parametroCentroCosto.centros">{{ centrox.descripcion}}
									</option>
								</select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.id_centro" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato impresión:</label>
								<select class="form-control" v-model="parametroCentroCosto.formato">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>

						<div class="col-sm-3">
							<button
									type="button"
									class="btn btn-primary btn-generar"
									@click="descargarReporteMCC"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		</template>

		<template v-if="reportes.indexOf(439) >= 0">

		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Comparativo de Razones Financieras</div>
					</div>

					<div class="row">
						<div class="col-sm-2">
							<div class="form-group">
								<label class="label-search">Periodo Actual:</label>
								<v-select
										:options="parametroRFC.periodos_fiscales"
										label="periodo"
										v-model="parametroRFC.periodo"
										v-on:input="obtenerMesesPeriodoRFC()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes Actual:</label>
								<v-select
										:options="parametroRFC.periodos_meses"
										label="descripcion"
										v-model="parametroRFC.mes"
										v-on:input="obtenerDiasMesRFC()"
								></v-select>
							</div>
						</div>


						<div class="col-sm-2">
							<div class="form-group">
								<label class="label-search">Periodo Anterior:</label>
								<v-select
										:options="parametroRFC.periodos_fiscales1"
										label="periodo"
										v-model="parametroRFC.periodo1"
										v-on:input="obtenerMesesPeriodoRFC()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes Anterior:</label>
								<v-select
										:options="parametroRFC.periodos_meses1"
										label="descripcion"
										v-model="parametroRFC.mes1"
										v-on:input="obtenerDiasMesRFC()"
								></v-select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="parametroRFC.formato">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>


						<div class="col-sm-3">
							<button
									type="button"
									class="btn btn-primary btn-generar"
									@click="descargarReporteRFC"
							>Imprimir
							</button>
						</div>


					</div>

				</div>
			</div>
		</div>
		</template>


		<template v-if="loading">
			<BlockUI :message="msg" :url="url"></BlockUI>
		</template>
		</div>
	</template>


<script type="text/ecmascript-6">
	import periodo from '../../api/periodos'
	import loadingImage from "../../assets/images/block50.gif";
	import es from "vuejs-datepicker/dist/locale/translations/es";
	var fecha_actual = new Date();
	fecha_actual.setHours(23,59,59,999);
	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,


				parametroEstadoResultado: {
					periodos_fiscales:[],
					periodos_fiscales1:[],
					periodos_meses:[],
					periodos_meses1:[],
					fecha_finalx:'',
					fecha_finalx1:'',
					periodo:"",
					mes:"",
					periodo1:"",
					mes1:"",
					formato:'pdf',
				},
				es: es,
				format: "d MMMM yyyy",
				parametroLibroDiario: {
					nivel_cuenta: "",
					periodos_fiscales:[],
					periodos_meses:[],
					periodo:"",
					mes:"",
					formato:'pdf',
				},
				parametroLibroMayor: {
					formato:'pdf',
					periodos_fiscales:[],
					periodos_meses:[],
					periodo:"",
					mes:"",
				},
				parametroEstadoCambioPatrimonio: {
					formato:'xls',
					periodos_fiscales:[],
					periodos_meses:[],
					periodo:"",
					mes:"",
				},

				parametroBalanzaAnual: {
					formato:'xls',
					periodos_fiscales:[],
					periodos_meses:[],
					periodo:"",
					mes:"",
					niveles_cuenta:[],
					nivel_cuenta:""
				},

                parametroNotas: {
                    formato:'xls',
                    periodos_fiscales:[],
                    periodos_meses:[],
                    periodo:"",
                    mes:"",
                },

                parametroAnexoFlujo: {
                    formato:'xls',
                    periodos_fiscales:[],
                    periodos_meses:[],
                    periodo:"",
                    mes:"",
                },

                parametroFlujoEfectivo: {
                    formato:'xls',
                    periodos_fiscales:[],
                    periodos_meses:[],
                    periodo:"",
                    mes:"",
                },

				parametroCentroCosto: {
					formato:'xls',
					periodos_fiscales:[],
					centros:[],
					periodos_meses:[],
					periodo:"",
					centro:"",
					mes:"",
				},


				parametroRFC: {
					periodos_fiscales:[],
					periodos_fiscales1:[],
					periodos_meses:[],
					periodos_meses1:[],
					fecha_finalx:'',
					fecha_finalx1:'',
					periodo:"",
					mes:"",
					periodo1:"",
					mes1:"",
					formato:'pdf',
				},
				reportes: [],
				cuentasContables: [],
				errorMessages:[],
				total: 0
			}
		},

		methods: {
			onDateSelect(date) {
				this.parametroLibroDiario.fecha_inicial = moment(date).format("YYYY-MM-DD"); //
			},
			onDateSelect2(date) {
				this.parametroLibroDiario.fecha_final = moment(date).format("YYYY-MM-DD"); //
			},

			descargarReporteLibroMayor() {
				var self=this;
				self.loading=true;
				axios.post('contabilidad/estados-financieros/libro-mayor/reporte',
						{
							periodo: self.parametroLibroMayor.periodo,
							mes:self.parametroLibroMayor.mes,
							extension:self.parametroLibroMayor.formato

						}, { responseType: 'blob' })
						.then(({ data }) => {
							console.log(data);
							if (data.status === 'error') {
								console.log(data);
							} else {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.parametroLibroMayor.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'LibroMayor.'+self.parametroLibroMayor.formato;
								link.click()
							}
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},
			descargarReporteLibroDiario() {
				var self=this;
				self.loading=true;
				axios.post('contabilidad/estados-financieros/libro-diario/reporte',
						{
							periodo: self.parametroLibroDiario.periodo,
							mes:self.parametroLibroDiario.mes,
							extension:self.parametroLibroDiario.formato

						}, { responseType: 'blob' })
						.then(({ data }) => {
							console.log(data);
							if (data.status === 'error') {
								console.log(data);
							} else {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.parametroLibroDiario.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'LibroDiario.'+self.parametroLibroDiario.formato;
							link.click()
							}
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},
			descargarReporteEstadoResultado() {
				var self=this;
				self.loading=true;
				axios.post('contabilidad/estados-financieros/estado-resultado/reporte',
						{
							id_periodox: self.parametroEstadoResultado.periodo.id_periodo_fiscal,
							mesx:self.parametroEstadoResultado.mes.mes,
							id_mesx:self.parametroEstadoResultado.mes.id_periodo_mes,
							id_periodox1: self.parametroEstadoResultado.periodo1.id_periodo_fiscal,
							mesx1:self.parametroEstadoResultado.mes1.mes,
							id_mesx1:self.parametroEstadoResultado.mes1.id_periodo_mes,
							id_nivel_cuenta:3,
							extension:self.parametroEstadoResultado.formato
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.parametroEstadoResultado.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'EstadoResultado.'+self.parametroEstadoResultado.formato;
							link.click()
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},
			descargarReporteCambioPatrimonio() {
				var self=this;
				self.loading=true;
				axios.post('contabilidad/estados-financieros/cambio-patrimonio/reporte',
						{
							periodo: self.parametroEstadoCambioPatrimonio.periodo,
							mes:self.parametroEstadoCambioPatrimonio.mes,
							extension:self.parametroEstadoCambioPatrimonio.formato

						}, { responseType: 'blob' })
						.then(({ data }) => {
							console.log(data);
							if (data.status === 'error') {
								console.log(data);
							} else {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.parametroEstadoCambioPatrimonio.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'EstadoCambioPatrimonio.'+self.parametroEstadoCambioPatrimonio.formato;
								link.click()
							}
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},
			descargarReporteBalanzaComprobacionAnual() {
				var self=this;
				self.loading=true;
				axios.post('contabilidad/estados-financieros/balanza-anual/reporte',
						{
							periodo: self.parametroBalanzaAnual.periodo,
							id_nivel_cuenta: self.parametroBalanzaAnual.nivel_cuenta.id_nivel_cuenta,
							mes:self.parametroBalanzaAnual.mes,
							extension:self.parametroBalanzaAnual.formato

						}, { responseType: 'blob' })
						.then(({ data }) => {
							console.log(data);
							if (data.status === 'error') {
								console.log(data);
							} else {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.parametroBalanzaAnual.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'BalanzaComprobacion.'+self.parametroBalanzaAnual.formato;
								link.click()
							}
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},
            descargarReporteNotas() {
                var self=this;
                self.loading=true;
                axios.post('contabilidad/estados-financieros/notas/reporte',
                    {
                        periodo: self.parametroNotas.periodo,
                        mes:self.parametroNotas.mes,
                        extension:self.parametroNotas.formato

                    }, { responseType: 'blob' })
                    .then(({ data }) => {
                        console.log(data);
                        if (data.status === 'error') {
                            console.log(data);
                        } else {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            self.parametroNotas.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteNotas.'+self.parametroNotas.formato;
                            link.click()
                        }
                        self.loading = false;
                    }).catch(function (error) {
                    console.log(error);
                    alertify.error("Error Descargando archivo.....", 5);
                    self.loading = false;
                });
            },

            descargarReporteAFE() {
                var self=this;
                self.loading=true;
                axios.post('contabilidad/estados-financieros/anexo-flujo/reporte',
                    {
                        periodo: self.parametroAnexoFlujo.periodo,
                        mes:self.parametroAnexoFlujo.mes,
                        extension:self.parametroAnexoFlujo.formato

                    }, { responseType: 'blob' })
                    .then(({ data }) => {
                        console.log(data);
                        if (data.status === 'error') {
                            console.log(data);
                        } else {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            self.parametroAnexoFlujo.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteAnexoFlujo.'+self.parametroAnexoFlujo.formato;
                            link.click()
                        }
                        self.loading = false;
                    }).catch(function (error) {
                    console.log(error);
                    alertify.error("Error Descargando archivo.....", 5);
                    self.loading = false;
                });
            },

            descargarReporteFE() {
                var self=this;
                self.loading=true;
                axios.post('contabilidad/estados-financieros/flujo-efectivo/reporte',
                    {
                        periodo: self.parametroFlujoEfectivo.periodo,
                        mes:self.parametroFlujoEfectivo.mes,
                        extension:self.parametroFlujoEfectivo.formato

                    }, { responseType: 'blob' })
                    .then(({ data }) => {
                        console.log(data);
                        if (data.status === 'error') {
                            console.log(data);
                        } else {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            self.parametroFlujoEfectivo.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteFlujoEfectivo.'+self.parametroFlujoEfectivo.formato;
                            link.click()
                        }
                        self.loading = false;
                    }).catch(function (error) {
                    console.log(error);
                    alertify.error("Error Descargando archivo.....", 5);
                    self.loading = false;
                });
            },

			descargarReporteMCC() {
				var self=this;
				self.loading=true;
				axios.post('contabilidad/estados-financieros/centro-costos/reporte',
						{
							periodo: self.parametroCentroCosto.periodo,
							centro: self.parametroCentroCosto.centro,
							mes:self.parametroCentroCosto.mes,
							extension:self.parametroCentroCosto.formato

						}, { responseType: 'blob' })
						.then(({ data }) => {
							console.log(data);
							if (data.status === 'error') {
								console.log(data);
							} else {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.parametroCentroCosto.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteMovimientosCentroCosto.'+self.parametroCentroCosto.formato;
								link.click()
							}
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},

			descargarReporteRFC() {
				var self=this;
				self.loading=true;
				axios.post('contabilidad/estados-financieros/razones-financieras-comparativo/reporte',
						{
							id_periodox: self.parametroRFC.periodo.id_periodo_fiscal,
							mesx:self.parametroRFC.mes.mes,
							id_mesx:self.parametroRFC.mes.id_periodo_mes,
							id_periodox1: self.parametroRFC.periodo1.id_periodo_fiscal,
							mesx1:self.parametroRFC.mes1.mes,
							id_mesx1:self.parametroRFC.mes1.id_periodo_mes,
							extension:self.parametroRFC.formato
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.parametroRFC.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'RazonesFinancieras.'+self.parametroRFC.formato;
							link.click()
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},

			obtenerMesesPeriodo() {
				var self = this;
				self.parametroEstadoResultado.mes = null;
				if(self.parametroEstadoResultado.periodos_fiscales.meses_periodo)
					self.parametroEstadoResultado.periodos_meses = self.periodos_fiscales.meses_periodo
			},
			obtenerMesesPeriodo1() {
				var self = this;
				self.parametroEstadoResultado.mes1 = null;
				self.parametroEstadoResultado.periodos_meses1 = null;
				if(self.parametroEstadoResultado.periodos_fiscales1.meses_periodo){
					self.parametroEstadoResultado.periodos_meses1 = self.parametroEstadoResultado.periodos_fiscales1.meses_periodo
				}
			},
			obtenerMesesPeriodoLD() {
				var self = this;
				self.parametroLibroDiario.mes = null;
				if(self.parametroLibroDiario.periodos_fiscales.meses_periodo)
					self.parametroLibroDiario.periodos_meses = self.periodos_fiscales.meses_periodo
			},
			obtenerMesesPeriodoLM() {
				var self = this;
				self.parametroLibroMayor.mes = null;
				if(self.parametroLibroMayor.periodos_fiscales.meses_periodo)
					self.parametroLibroMayor.periodos_meses = self.periodos_fiscales.meses_periodo
			},
			obtenerMesesPeriodoECP() {
				var self = this;
				self.parametroEstadoCambioPatrimonio.mes = null;
				if(self.parametroEstadoCambioPatrimonio.periodos_fiscales.meses_periodo)
					self.parametroEstadoCambioPatrimonio.periodos_meses = self.periodos_fiscales.meses_periodo
			},
			obtenerMesesPeriodoBCA() {
				var self = this;
				self.parametroBalanzaAnual.mes = null;
				if(self.parametroBalanzaAnual.periodos_fiscales.meses_periodo)
					self.parametroBalanzaAnual.periodos_meses = self.periodos_fiscales.meses_periodo
			},
            obtenerMesesPeriodoNEEFF() {
                var self = this;
                self.parametroNotas.mes = null;
                if(self.parametroNotas.periodos_fiscales.meses_periodo)
                    self.parametroNotas.periodos_meses = self.periodos_fiscales.meses_periodo
            },
            obtenerMesesPeriodoAFE() {
                var self = this;
                self.parametroAnexoFlujo.mes = null;
                if(self.parametroAnexoFlujo.periodos_fiscales.meses_periodo)
                    self.parametroAnexoFlujo.periodos_meses = self.periodos_fiscales.meses_periodo
            },
            obtenerMesesPeriodoFE() {
                var self = this;
                self.parametroFlujoEfectivo.mes = null;
                if(self.parametroFlujoEfectivo.periodos_fiscales.meses_periodo)
                    self.parametroFlujoEfectivo.periodos_meses = self.periodos_fiscales.meses_periodo
            },
			obtenerMesesPeriodoMCC() {
				var self = this;
				self.parametroCentroCosto.mes = null;
				if(self.parametroCentroCosto.periodos_fiscales.meses_periodo)
					self.parametroCentroCosto.periodos_meses = self.periodos_fiscales.meses_periodo
			},
			obtenerMesesPeriodoRFC() {
				var self = this;
				self.parametroRFC.mes1 = null;
				self.parametroRFC.periodos_meses1 = null;
				if(self.parametroRFC.periodos_fiscales1.meses_periodo){
					self.parametroRFC.periodos_meses1 = self.parametroRFC.periodos_fiscales1.meses_periodo
				}
			},
			obtenerDiasMes() {
				var self = this;
				self.parametroEstadoResultado.fecha_finalx =  moment(new Date(self.parametroEstadoResultado.periodo.periodo,
						self.parametroEstadoResultado.mes.mes-1, self.daysInMonth(self.parametroEstadoResultado.mes.mes,
								self.parametroEstadoResultado.periodo.periodo))).format("DD/MM/YYYY");
			},
			obtenerDiasMes1() {
				var self = this;
				self.parametroEstadoResultado.fecha_finalx1 =  moment(new Date(self.parametroEstadoResultado.periodo1.periodo,
						self.parametroEstadoResultado.mes1.mes-1, self.daysInMonth(self.parametroEstadoResultado.mes1.mes,
								self.parametroEstadoResultado.periodo1.periodo))).format("DD/MM/YYYY");
			},
			obtenerDiasMesLD() {
				var self = this;
				self.parametroLibroDiario.fecha_finalx =  moment(new Date(self.parametroLibroDiario.periodo.periodo,
						self.parametroLibroDiario.mes.mes-1, self.daysInMonth(self.parametroLibroDiario.mes.mes,
								self.parametroLibroDiario.periodo.periodo))).format("DD/MM/YYYY");
			},
			obtenerDiasMesLM() {
				var self = this;
				self.parametroLibroMayor.fecha_finalx =  moment(new Date(self.parametroLibroMayor.periodo.periodo,
						self.parametroLibroMayor.mes.mes-1, self.daysInMonth(self.parametroLibroMayor.mes.mes,
								self.parametroLibroMayor.periodo.periodo))).format("DD/MM/YYYY");
			},
			obtenerDiasMesECP() {
				var self = this;
				self.parametroEstadoCambioPatrimonio.fecha_finalx =  moment(new Date(self.parametroEstadoCambioPatrimonio.periodo.periodo,
						self.parametroEstadoCambioPatrimonio.mes.mes-1, self.daysInMonth(self.parametroEstadoCambioPatrimonio.mes.mes,
								self.parametroEstadoCambioPatrimonio.periodo.periodo))).format("DD/MM/YYYY");
			},

			daysInMonth (month, year) {
				return new Date(year, month, 0).getDate();
			},obtenerTodosPeriodos() {
				let self = this;
				periodo.obtenerTodos(
						data => {

							if(data.lista_reportes.length>0){
							data.lista_reportes.forEach((reportex, key) => {
								self.reportes.push(reportex.id_menu);
							});
							}
							//self.reportes=data.lista_reportes;

							self.parametroEstadoResultado.periodos_fiscales = data.periodos;
							self.parametroEstadoResultado.periodo=data.periodos[0];
							self.parametroEstadoResultado.periodos_meses = data.periodos[0].meses_periodo;
							self.parametroEstadoResultado.mes=data.periodos[0].meses_periodo[0];

							self.parametroEstadoResultado.periodos_fiscales1 = data.periodos;
							self.parametroEstadoResultado.periodo1=data.periodos[0];
							self.parametroEstadoResultado.periodos_meses1 = data.periodos[0].meses_periodo;
							self.parametroEstadoResultado.mes1=data.periodos[0].meses_periodo[0];

							self.parametroLibroDiario.periodos_fiscales = data.periodos;
							self.parametroLibroDiario.periodo=data.periodos[0];
							self.parametroLibroDiario.periodos_meses = data.periodos[0].meses_periodo;
							self.parametroLibroDiario.mes=data.periodos[0].meses_periodo[0];

							self.parametroLibroMayor.periodos_fiscales = data.periodos;
							self.parametroLibroMayor.periodo=data.periodos[0];
							self.parametroLibroMayor.periodos_meses = data.periodos[0].meses_periodo;
							self.parametroLibroMayor.mes=data.periodos[0].meses_periodo[0];

							self.parametroEstadoResultado.periodos_fiscales = data.periodos;
							self.parametroEstadoResultado.periodo=data.periodos[0];
							self.parametroEstadoResultado.periodos_meses = data.periodos[0].meses_periodo;
							self.parametroEstadoResultado.mes=data.periodos[0].meses_periodo[0];

							self.parametroEstadoCambioPatrimonio.periodos_fiscales = data.periodos;
							self.parametroEstadoCambioPatrimonio.periodo=data.periodos[0];
							self.parametroEstadoCambioPatrimonio.periodos_meses = data.periodos[0].meses_periodo;
							self.parametroEstadoCambioPatrimonio.mes=data.periodos[0].meses_periodo[0];

							self.parametroBalanzaAnual.periodos_fiscales = data.periodos;
							self.parametroBalanzaAnual.periodo=data.periodos[0];
							self.parametroBalanzaAnual.periodos_meses = data.periodos[0].meses_periodo;
							self.parametroBalanzaAnual.mes=data.periodos[0].meses_periodo[0];
							self.parametroBalanzaAnual.niveles_cuenta = data.niveles_cuenta;
							self.parametroBalanzaAnual.nivel_cuenta=self.parametroBalanzaAnual.niveles_cuenta[2];

                            self.parametroNotas.periodos_fiscales = data.periodos;
                            self.parametroNotas.periodo=data.periodos[0];
                            self.parametroNotas.periodos_meses = data.periodos[0].meses_periodo;
                            self.parametroNotas.mes=data.periodos[0].meses_periodo[0];

                            self.parametroAnexoFlujo.periodos_fiscales = data.periodos;
                            self.parametroAnexoFlujo.periodo=data.periodos[0];
                            self.parametroAnexoFlujo.periodos_meses = data.periodos[0].meses_periodo;
                            self.parametroAnexoFlujo.mes=data.periodos[0].meses_periodo[0];

                            self.parametroFlujoEfectivo.periodos_fiscales = data.periodos;
                            self.parametroFlujoEfectivo.periodo=data.periodos[0];
                            self.parametroFlujoEfectivo.periodos_meses = data.periodos[0].meses_periodo;
                            self.parametroFlujoEfectivo.mes=data.periodos[0].meses_periodo[0];

							self.parametroCentroCosto.periodos_fiscales = data.periodos;
							self.parametroCentroCosto.periodo=data.periodos[0];
							self.parametroCentroCosto.periodos_meses = data.periodos[0].meses_periodo;
							self.parametroCentroCosto.mes=data.periodos[0].meses_periodo[0];
							self.parametroCentroCosto.centros = data.centros;
							self.parametroCentroCosto.centro=data.centros[0];

							self.parametroRFC.periodos_fiscales = data.periodos;
							self.parametroRFC.periodo=data.periodos[0];
							self.parametroRFC.periodos_meses = data.periodos[0].meses_periodo;
							self.parametroRFC.mes=data.periodos[0].meses_periodo[0];

							self.parametroRFC.periodos_fiscales1 = data.periodos;
							self.parametroRFC.periodo1=data.periodos[0];
							self.parametroRFC.periodos_meses1 = data.periodos[0].meses_periodo;
							self.parametroRFC.mes1=data.periodos[0].meses_periodo[0];


							self.parametroEstadoResultado.fecha_finalx =moment(new Date(self.parametroEstadoResultado.periodo.periodo,
									self.parametroEstadoResultado.mes.mes-1, self.daysInMonth(self.parametroEstadoResultado.mes.mes,
											self.parametroEstadoResultado.periodo.periodo))).format("DD/MM/YYYY");

							self.parametroEstadoResultado.fecha_finalx1 =moment(new Date(self.parametroEstadoResultado.periodo1.periodo,
									self.parametroEstadoResultado.mes1.mes-1, self.daysInMonth(self.parametroEstadoResultado.mes1.mes,
											self.parametroEstadoResultado.periodo1.periodo))).format("DD/MM/YYYY");
							self.loading=false;
						},
						err => {
							self.loading=false;
							console.log(err);
						}
				);
			},
		},

		mounted() {
			this.obtenerTodosPeriodos();
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
	.btn-generar
	 {
		 margin-top: 33px;
	 }

</style>

