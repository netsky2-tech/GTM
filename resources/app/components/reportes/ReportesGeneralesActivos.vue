<template>
	<div class="main">
		<div class="simple-welcome-text">
			<div class="text">Reportes Activo fijo</div>
			<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-activos' }"> Módulo activos</router-link>> Reportes</div>
		</div>
		<div class="row">

			<template v-if="reportes.indexOf(460) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Altas de activo</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialAltas" v-model="fechaInicialAltasX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalAltas" v-model="fechaFinalAltasX"></datepicker>
							</div>
						</div>
					<div class="col-sm-4">
						<div class="form-group">
							<label> Formato:</label>
							<select class="form-control" v-model="formatoActivoAltas">
								<option value="pdf">PDF</option>
								<option value="xls">Excel</option>
							</select>
						</div>
					</div>
					<div class="col-sm-4">
						<button
								type="button"
								class="btn btn-primary btn-imprimir"
								@click="descargarReporteAltasActivo"
						>Imprimir
						</button>

					</div>
					</div>
				</div>
			</div>
		</template>

			<template v-if="reportes.indexOf(461) >= 0">
						<div class="col-md-6">
						<div class="content-box">
							<div class="content-box-header">
								<div class="box-title">Bajas de activo</div>
							</div>
							<div class="row">
								<div class="col-sm-4">
									<div class="form-group">
										<label for>Fecha inicial</label>
										<datepicker :format="format" :language="es"
													@selected="seleccionarFechaInicialBajas" v-model="fechaInicialBajasX"></datepicker>
									</div>
								</div>

								<div class="col-sm-4">
									<div class="form-group">
										<label for>Fecha final (Corte)</label>
										<datepicker :format="format" :language="es"
													@selected="seleccionarFechaFinalBajas" v-model="fechaFinalBajasX"></datepicker>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="form-group">
										<label> Formato:</label>
										<select class="form-control" v-model="formatoActivoBajas">
											<option value="pdf">PDF</option>
											<option value="xls">Excel</option>
										</select>
									</div>
								</div>
								<div class="col-sm-4">
									<button
											type="button"
											class="btn btn-primary btn-imprimir"
											@click="descargarReporteBajasActivos"
									>Imprimir
									</button>

									</div>
								</div>
							</div>
						</div>
			</template>

			<template v-if="reportes.indexOf(462) >= 0">
							<div class="col-md-6">
							<div class="content-box">
								<div class="content-box-header">
									<div class="box-title">Activos depreciados</div>
								</div>

								<div class="row">
									<div class="col-sm-4">
										<div class="form-group">
											<label for>Fecha inicial</label>
											<datepicker :format="format" :language="es"
														@selected="seleccionarFechaInicialDepreciando" v-model="fechaInicialDepreciandoX"></datepicker>
										</div>
									</div>

									<div class="col-sm-4">
										<div class="form-group">
											<label for>Fecha final (Corte)</label>
											<datepicker :format="format" :language="es"
														@selected="seleccionarFechaFinalDepreciando" v-model="fechaFinalDepreciandoX"></datepicker>
										</div>
									</div>
									<div class="col-sm-3">
										<div class="form-group">
											<label> Formato:</label>
											<select class="form-control" v-model="formatoActivoDepreciando">
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
										@click="descargarReporteActivosDepreciandose"
								>Imprimir
								</button>
							</div>
							</div>
						</div>
			</template>

			<template v-if="reportes.indexOf(463) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Activo depreciado en uso</div>
					</div>

							<div class="row">
								<div class="col-sm-4">
									<div class="form-group">
										<label for>Fecha inicial</label>
										<datepicker :format="format" :language="es"
													@selected="seleccionarFechaInicialDepreciadoUso" v-model="fechaInicialDepreciadoUsoX"></datepicker>
									</div>
								</div>

								<div class="col-sm-4">
									<div class="form-group">
										<label for>Fecha final (Corte)</label>
										<datepicker :format="format" :language="es"
													@selected="seleccionarFechaFinalDepreciadoUso" v-model="fechaFinalDepreciadoUsoX"></datepicker>
									</div>
								</div>
								<div class="col-sm-3">
									<div class="form-group">
										<label> Formato:</label>
										<select class="form-control" v-model="formatoActivoDepreciadoUso">
											<option value="pdf">PDF</option>
											<option value="xls">Excel</option>
										</select>
									</div>
								</div>


								<div class="col-sm-4">
									<button
											type="button"
											class="btn btn-primary btn-imprimir"
											@click="descargarReporteActivosDepreciadoEnUso"
									>Imprimir
									</button>
								</div>
							</div>
						</div>
				</div>
			</template>
			<template v-if="reportes.indexOf(464) >= 0">
            <div class="col-md-6">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Traslados de activos</div>
                    </div>

                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Fecha inicial</label>
                                <datepicker :format="format" :language="es"
                                            @selected="seleccionarFechaInicialTrasladosActivo" v-model="fechaInicialTrasladosX"></datepicker>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Fecha final (Corte)</label>
                                <datepicker :format="format" :language="es"
                                            @selected="seleccionarFechaFinalTrasladosActivo" v-model="fechaFinalTrasladosX"></datepicker>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label> Formato:</label>
                                <select class="form-control" v-model="formatoTrasladosActivo">
                                    <option value="pdf">PDF</option>
                                    <option value="xls">Excel</option>
                                </select>
                            </div>
                        </div>


                        <div class="col-sm-4">
                            <button
                                    type="button"
                                    class="btn btn-primary btn-imprimir"
                                    @click="descargarReporteTrasladosActivo"
                            >Imprimir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
			</template>
			<template v-if="reportes.indexOf(465) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Consolidado de bienes depreciados</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Año:</label>
								<v-select
										label="periodo"
										v-model="anioDepreciados"
										:options="periodosDepreciados"
										v-on:input="obtenerMesesDepreciados"
								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="label-search">Mes:</label>
								<v-select :style="'margin-left: .5rem!important;'"
										  label="mes_letras"
										  v-model="mesDepreciados"
										  :options="mesesDepreciados"
								></v-select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoDepreciados">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>



						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteConsolidadoDepreciados"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(466) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Valor de adquisición de activos</div>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label for=""> Sucursal</label>
								<select class="form-control" v-model="sucursalAdquisicion">
									<option :key="0" :value="0">{{ 'Todas las sucursales'}} </option>
									<option :key="sucursalDepreciado.descripcion" :value="sucursalDepreciado.id_sucursal" v-for="sucursalDepreciado in sucursalesAdquisicion">{{ sucursalDepreciado.descripcion}}
									</option>
								</select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.sucursalAdquisicion" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialAdquisicion" v-model="fechaInicialAdquisicionX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalAdquisicion" v-model="fechaFinalAdquisicionX"></datepicker>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoAdquisicionActivo">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteAdquisicionActivo"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(467) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Historial de compra de activos</div>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label for=""> Sucursal</label>
								<select class="form-control" v-model="sucursalHistorial">
									<option :key="0" :value="0">{{ 'Todas las sucursales'}} </option>
									<option :key="sucursalHistorial.descripcion" :value="sucursalHistorial.id_sucursal" v-for="sucursalHistorial in sucursalesHistorial">{{ sucursalHistorial.descripcion}}
									</option>
								</select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.sucursalHistorial" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialHistorial" v-model="fechaInicialHistorialX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalHistorial" v-model="fechaFinalHistorialX"></datepicker>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoHistorialActivo">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteHistorialActivo"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(468) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Vida útil de activos</div>
					</div>

					<div class="row">
						<!--<div class="col-sm-6">
							<div class="form-group">
								<label for=""> Sucursal</label>
								<select class="form-control" v-model="sucursalHistorial">
									<option :key="0" :value="0">{{ 'Todas las sucursales'}} </option>
									<option :key="sucursalHistorial.descripcion" :value="sucursalHistorial.id_sucursal" v-for="sucursalHistorial in sucursalesHistorial">{{ sucursalHistorial.descripcion}}
									</option>
								</select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.sucursalHistorial" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>-->
						<!--<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialHistorial" v-model="fechaInicialHistorialX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalHistorial" v-model="fechaFinalHistorialX"></datepicker>
							</div>
						</div>-->
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoVidaUtil">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteVidaUtil"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

            <template v-if="reportes.indexOf(472) >= 0">
                <div class="col-md-6">
                    <div class="content-box">
                        <div class="content-box-header">
                            <div class="box-title">Reporte general de activos</div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for=""> Tipos de activos</label>
                                    <select class="form-control" v-model="tipoActivo">
                                        <option :key="0" :value="0">{{ 'Todos los tipos'}} </option>
                                        <option :key="tipoActivo.descripcion" :value="tipoActivo.id_tipo_activo" v-for="tipoActivo in tipos_activos">{{ tipoActivo.descripcion}}
                                        </option>
                                    </select>
                                    <ul class="error-messages">
                                        <li v-for="message in errorMessages.tipoActivo" :key="message" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label> Formato:</label>
                                    <select class="form-control" v-model="formatoGeneralActivos">
                                        <option value="pdf">PDF</option>
                                        <option value="xls">Excel</option>
                                    </select>
                                </div>
                            </div>


                            <div class="col-sm-4">
                                <button
                                        type="button"
                                        class="btn btn-primary btn-imprimir"
                                        @click="descargarReporteGeneralActivo"
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
	import activo from '../../api/activos_fijos'
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


				formatoActivoAltas:'pdf',
				formatoActivoBajas:'pdf',
				formatoActivoDepreciando:'pdf',
				formatoActivoDepreciadoUso:'pdf',
				formatoTrasladosActivo:'pdf',
				//sucursalesBusquedaURL: "/sucursales/buscar",
			//	bodegasBusquedaURL: "/bodegas/buscar",
				//clientesBusquedaURL: "/ventas/clientes/buscar",
				errorMessages: [],




				//Reporta alta activos
				fechaInicialAltas:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalAltas:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialAltasX:new Date(),
				fechaFinalAltasX:new Date(),

				//Reporta bajas activos
				fechaInicialBajas:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalBajas:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialBajasX:new Date(),
				fechaFinalBajasX:new Date(),

				//Reporta activo depreciandose
				fechaInicialDepreciando:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalDepreciando:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialDepreciandoX:new Date(),
				fechaFinalDepreciandoX:new Date(),

				//Reporta activo depreciado en uso
				fechaInicialDepreciadoUso:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalDepreciadoUso:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialDepreciadoUsoX:new Date(),
				fechaFinalDepreciadoUsoX:new Date(),

                //Reporte traslados activos
                fechaInicialTraslados:moment(new Date()).format("YYYY-MM-DD"),
                fechaFinalTraslados:moment(new Date()).format("YYYY-MM-DD"),
                fechaInicialTrasladosX:new Date(),
                fechaFinalTrasladosX:new Date(),

				//Reporte adquisicion activos
				fechaInicialAdquisicion:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalAdquisicion:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialAdquisicionX:new Date(),
				fechaFinalAdquisicionX:new Date(),
				formatoAdquisicionActivo:'pdf',
				sucursalAdquisicion:'',
				sucursalesAdquisicion:[],

				//Reporte historial de compras
				fechaInicialHistorial:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalHistorial:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialHistorialX:new Date(),
				fechaFinalHistorialX:new Date(),
				formatoHistorialActivo:'pdf',
				sucursalHistorial:'',
				sucursalesHistorial:[],

				//Reporte vida util activos
				formatoVidaUtil:'pdf',

				//Consolidado bienes depreciados
				formatoDepreciados:'pdf',
				periodosDepreciados:[],
				mesesDepreciados:[],
				anioDepreciados:'',
				mesDepreciados:0,
				mes:0,
				anio:0,

                //Reporte general de activos por tipo
                formatoGeneralActivos: 'pdf',
                tipos_activos:[],
                tipoActivo:0,

				reportes: [],
			}
		},
		methods: {
		descargarReporteAltasActivo () {
			if(!this.loading){
				var self=this;
				self.loading=true;
				alertify.success("Descargando datos, espere un momento.....",5);
				axios.post('activosfijos/altas-activos/reporte',
						{
							fechaInicio : self.fechaInicialAltas,
							fechaFinal : self.fechaFinalAltas,
							extension : self.formatoActivoAltas
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoActivoAltas === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'ReporteAltasActivos.'+ self.formatoActivoAltas;
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

			descargarReporteBajasActivos () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('activosfijos/bajas-activos/reporte',
							{
								fechaInicial : self.fechaInicialBajas,
								fechaFinal : self.fechaFinalBajas,
								extension : self.formatoActivoBajas
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoActivoBajas === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteBajasActivos.'+ self.formatoActivoBajas;
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

			descargarReporteActivosDepreciandose () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('activosfijos/activos-depreciandose/reporte',
							{
								fechaInicial : self.fechaInicialDepreciando,
								fechaFinal : self.fechaFinalDepreciando,
								extension : self.formatoActivoDepreciando
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoActivoDepreciando === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteActivoDepreciandose.'+ self.formatoActivoDepreciando;
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
			descargarReporteActivosDepreciadoEnUso () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('activosfijos/activos-depreciado-uso/reporte',
							{
								fechaInicial : self.fechaInicialDepreciadoUso,
								fechaFinal : self.fechaFinalDepreciadoUso,
								extension : self.formatoActivoDepreciadoUso
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoActivoDepreciadoUso === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteActivoDepreciandoEnUso.'+ self.formatoActivoDepreciadoUso;
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
            descargarReporteTrasladosActivo () {
                if(!this.loading){
                    var self=this;
                    self.loading=true;
                    alertify.success("Descargando datos, espere un momento.....",5);
                    axios.post('activosfijos/traslados-activo/reporte',
                        {
                            fechaInicio : self.fechaInicialTraslados,
                            fechaFinal : self.fechaFinalTraslados,
                            extension : self.formatoTrasladosActivo
                        }, { responseType: 'blob' })
                        .then(({ data }) => {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            self.formatoTrasladosActivo === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteTrasladosActivo.'+ self.formatoTrasladosActivo;
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
			descargarReporteAdquisicionActivo () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('activosfijos/valor-adquisicion/reporte',
							{
								fechaInicio : self.fechaInicialAdquisicion,
								fechaFinal : self.fechaFinalAdquisicion,
								extension : self.formatoAdquisicionActivo,
								id_sucursal : self.sucursalAdquisicion
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoAdquisicionActivo === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteAdquisicion.'+ self.formatoAdquisicionActivo;
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
			descargarReporteHistorialActivo () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('activosfijos/historia-compra/reporte',
							{
								fechaInicio : self.fechaInicialHistorial,
								fechaFinal : self.fechaFinalHistorial,
								extension : self.formatoHistorialActivo,
								id_sucursal : self.sucursalHistorial
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoHistorialActivo === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'HistorialComprasActivos.'+ self.formatoHistorialActivo;
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
			descargarReporteConsolidadoDepreciados () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('activosfijos/bienes-depreciados/reporte',
							{
								anio : self.anioDepreciados.periodo,
								mes : self.mesDepreciados.mes,
								extension : self.formatoDepreciados
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoDepreciados === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteConsolidadoDepreciados.'+ self.formatoDepreciados;
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
			descargarReporteVidaUtil () {
				if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('activosfijos/vida-util/reporte',
							{
								extension : self.formatoVidaUtil
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoVidaUtil === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteVidaUtil.'+ self.formatoVidaUtil;
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
			descargarReporteGeneralActivo() {
                if(!this.loading){
                    var self=this;
                    self.loading=true;
                    alertify.success("Descargando datos, espere un momento.....",5);
                    axios.post('activosfijos/general-activos-tipo/reporte',
                        {
                            id_tipo_activo : self.tipoActivo,
                            extension : self.formatoGeneralActivos
                        }, { responseType: 'blob' })
                        .then(({ data }) => {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            self.formatoGeneralActivos === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteGeneralActivos.'+ self.formatoGeneralActivos;
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
			seleccionarFechaInicialAltas(date) {
				this.fechaInicialAltas = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalAltas(date) {
				this.fechaFinalAltas = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaInicialAdquisicion(date) {
				this.fechaInicialAdquisicion = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalAdquisicion(date) {
				this.fechaFinalAdquisicion = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaInicialHistorial(date) {
				this.fechaInicialHistorial = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalHistorial(date) {
				this.fechaFinalHistorial = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaInicialBajas(date) {
				this.fechaInicialBajas = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalBajas(date) {
				this.fechaFinalBajas = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaInicialDepreciando(date) {
				this.fechaInicialDepreciando = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalDepreciando(date) {
				this.fechaFinalDepreciando = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaInicialDepreciadoUso(date) {
				this.fechaInicialDepreciadoUso = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalDepreciadoUso(date) {
				this.fechaFinalDepreciadoUso = moment(date).format("YYYY-MM-DD");
			},
            seleccionarFechaInicialTrasladosActivo(date) {
                this.fechaInicialTraslados = moment(date).format("YYYY-MM-DD");
            },
            seleccionarFechaFinalTrasladosActivo(date) {
                this.fechaFinalTraslados = moment(date).format("YYYY-MM-DD");
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
					self.periodosDepreciados = data.periodos;
					self.anioDepreciados = self.periodos[0];
					self.mesesDepreciados = self.anio.meses_periodo;

					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
            nueva(){
                var self = this
                self.loading = true;
                activo.nuevo({}, data => {
                    self.tipos_activos = data.tipos;
					self.sucursalesAdquisicion = data.sucursales;

					self.sucursalesHistorial = data.sucursales;
                    self.loading = false;
                }, err => {
                    self.loading = false;
                    console.log(err)
                })
            },

			obtenerMesesDepreciados(){
				let self = this;
				self.mesDepreciados = [];
				self.mesesDepreciados = self.anioDepreciados.meses_periodo
				self.mesDepreciados = self.mesesDepreciados[0]
			},
		},
		mounted()
		{
			this.nuevo();
			this.nueva();
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

