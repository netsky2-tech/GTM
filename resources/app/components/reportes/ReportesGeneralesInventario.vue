<template>
	<div class="main">
		<div class="simple-welcome-text">
			<div class="text">Reportes Inventario</div>
			<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo inventario</router-link>> Reportes</div>
		</div>
		<div class="row">
			<template v-if="reportes.indexOf(406) >= 0">
						<div class="col-md-6">
						<div class="content-box">
							<div class="content-box-header">
								<div class="box-title">Reporte de existencias de baterias por bodega</div>
							</div>
							<div class="row">
								<div class="col-sm-3">
									<div class="form-group">
										<label class="check-label2"><input type="checkbox" v-on:change="cambiarBodega"
																		   v-model="todas_bodegas"> Todos las bodegas</label>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="form-group">
										<label> Formato:</label>
										<select class="form-control" v-model="formatoInventarioExistencias">
											<option value="pdf">PDF</option>
											<option value="xls">Excel</option>
										</select>
									</div>
								</div>
								<div class="col-sm-4">
									<button
											type="button"
											class="btn btn-primary btn-imprimir"
											@click="descargarReporteExistencias"
									>Imprimir
									</button>

								</div>
								<div v-if="!todas_bodegas" class="col-sm-10">
									<div class="form-group">
										<label> Bodega</label>
										<div class="form-group">
											<typeahead :disabled="todas_bodegas" :initial="bodega_reporteExistencia"  :trim="80" :url="bodegasBusquedaURL" @input="seleccionarBodegaReporteExistencia" style="width: 100%;"></typeahead>
										</div>
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.id_bodega_reporteExistencia" v-text="message"></li>
										</ul>
									</div>
								</div>
								<div v-if="todas_bodegas" class="col-sm-10">
									<div class="form-group">
										<label> Bodega</label>
										<div class="form-group">
											<input type="text" class="form-control" disabled>
										</div>
									</div>
								</div>

						</div>
						</div>
						</div>
			</template>
			<template v-if="reportes.indexOf(407) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de existencias de otros articulos por bodega</div>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarBodegaArticulo"
																   v-model="todas_bodegas_articulo"> Todos las bodegas</label>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoArticuloExistencias">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteExistenciasArticulo"
							>Imprimir
							</button>

						</div>
						<div v-if="!todas_bodegas_articulo" class="col-sm-10">
							<div class="form-group">
								<label> Bodega</label>
								<div class="form-group">
									<typeahead :disabled="todas_bodegas_articulo" :initial="bodega_reporteExistenciaArticulo"  :trim="80" :url="bodegasBusquedaURL" @input="seleccionarBodegaReporteExistenciaArticulo" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_bodega_reporteExistenciaArticulo" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div v-if="todas_bodegas_articulo" class="col-sm-10">
							<div class="form-group">
								<label> Bodega</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(408) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Estado baterias por bodegas</div>
					</div>

							<div class="row">
								<div class="col-sm-3">
									<div class="form-group">
										<label class="check-label2"><input type="checkbox" v-on:change="cambiarBodegaEstado"
																		   v-model="todas_bodegas_estado"> Todos las bodegas</label>
									</div>
								</div>
								<div class="col-sm-3">
									<div class="form-group">
										<label> Formato:</label>
										<select class="form-control" v-model="formatoEstadoBaterias">
											<option value="pdf">PDF</option>
											<option value="xls">Excel</option>
										</select>
									</div>
								</div>
								<div class="col-sm-4">
									<button
											type="button"
											class="btn btn-primary btn-imprimir"
											@click="descargarReporteEstadoBateria"
									>Imprimir
									</button>
								</div>
								<div v-if="!todas_bodegas_estado" class="col-sm-10">
									<div class="form-group">
										<label> Bodega</label>
										<div class="form-group">
											<typeahead :initial="bodega_reporteEstadoBateria"  :trim="80" :url="bodegasBusquedaURL" @input="seleccionarBodegaReporte" style="width: 100%;"></typeahead>
										</div>
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.id_bodega_reporteEstadoBateria" v-text="message"></li>
										</ul>
									</div>
								</div>
								<div v-if="todas_bodegas_estado" class="col-sm-10">
									<div class="form-group">
										<label> Bodega</label>
										<div class="form-group">
											<input type="text" class="form-control" disabled>
										</div>
									</div>
								</div>
						</div>
					</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(409) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Existencia minima por sucursal</div>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="form-group">
								<label> Sucursal</label>
								<div class="form-group">
									<typeahead :initial="sucursal_reporteExistencia"  :trim="80" :url="sucursalesBusquedaURL" @input="seleccionarSucursalReporte" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_sucursal_reporteExistencia" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoExistenciaMinima">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteExistenciaBateria"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(410) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de existencia por categorias</div>
					</div>

					<div class="row">
						<div class="col-sm-5">
							<div class="form-group">
								<label for>Categoria</label>
								<select class="form-control" v-model="form.marca_tipo">
									<option :key="'TODOS_TIPOS'" :value="'TODOS_TIPOS'">{{ 'Todas las categorias'}} </option>
									<option :key="categoria.marca_tipo" :value="categoria.marca_tipo" v-for="categoria in form.categorias">{{ categoria.marca_tipo}}
									</option>
								</select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.categoria" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-5">
							<div class="form-group">
								<label for>Bodega</label>
								<select class="form-control" v-model="parametrosReporteExistenciaCategoria.bodega">
									<option :key="0" :value="0">{{ 'Todas las bodegas'}} </option>
									<option :key="bodega.text" :value="bodega.id_bodega" v-for="bodega in parametrosReporteExistenciaCategoria.bodegas">{{ bodega.text}}
									</option>
								</select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoExistenciaCategoria">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>

						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarExistenciaCategoria"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(411) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte consolidado de entrada inicial</div>
					</div>

					<div class="row">
						<!--<div class="col-sm-6">
							<div class="form-group">
								<label> Bodega</label>
								<div class="form-group">
									<typeahead :initial="bodega_reporteRequisas"  :trim="80" :url="bodegasBusquedaURL" @input="seleccionarBodegaReporteRequisas" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_bodega_reporteRequisas" v-text="message"></li>
								</ul>
							</div>
						</div>-->
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialDetallesProductos" v-model="fechaInicialProductoDetallesX"></datepicker>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoDetalleProductos">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>


						<!--<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalRequisas" v-model="fechaFinalRequisasX"></datepicker>
							</div>
						</div>-->


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteDetallesProductos"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(412) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de salida por producto</div>
					</div>

					<div class="row">
						<!--<div class="col-sm-5">
							<div class="form-group">
								<label for>Bodega</label>
								<select class="form-control" v-model="form.bodegaEntrada">
									<option :key="0" :value="0">{{ 'Todas las bodegas'}} </option>
									<option :key="bodegaEntrada.text" :value="bodegaEntrada.id_bodega" v-for="bodegaEntrada in form.bodegasEntrada">{{ bodegaEntrada.text}}
									</option>
								</select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
								</ul>
							</div>
						</div>-->
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoSalidaProducto">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialSalidaProducto" v-model="fechaInicialSalidaProductoX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalSalidaProducto" v-model="fechaFinalSalidaProductoX"></datepicker>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteSalidaProducto"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(413) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de traslado por bodegas</div>
					</div>

					<div class="row">
						<!--<div class="col-sm-5">
							<div class="form-group">
								<label for>Bodega</label>
								<select class="form-control" v-model="form.bodegaSalida">
									<option :key="0" :value="0">{{ 'Todas las bodegas'}} </option>
									<option :key="bodegaSalida.text" :value="bodegaSalida.id_bodega" v-for="bodegaSalida in form.bodegasSalida">{{ bodegaSalida.text}}
									</option>
								</select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bodegaSalida" v-text="message"></li>
								</ul>
							</div>
						</div>-->
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoSalidaTraslado">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialSalidaTraslado" v-model="fechaInicialSalidaTrasladoX"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalSalidaTraslado" v-model="fechaFinalSalidaTrasladoX"></datepicker>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteSalidaTraslado"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(414) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de salida por tipo</div>
					</div>

					<div class="row">
						<div class="col-sm-5">
							<div class="form-group">
								<label for>Tipos de salida</label>
								<select class="form-control" v-model="parametrosReporteSalidaTipo.tipo_salida">
									<option :key="0" :value="0">{{ 'Todos los tipos'}} </option>
									<option :key="tipo_salida.descripcion" :value="tipo_salida.id_tipo_salida" v-for="tipo_salida in parametrosReporteSalidaTipo.tipos_salidas">{{ tipo_salida.descripcion}}
									</option>
								</select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.tipo_salida" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="parametrosReporteSalidaTipo.formato">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											v-model="parametrosReporteSalidaTipo.fechaInicialX" @selected="seleccionarFechaInicialReporteSalidaTipo"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalReporteSalidaTipo" v-model="parametrosReporteSalidaTipo.fechaFinalX"></datepicker>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteSalidaTipo"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(415) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de entradas por tipo</div>
					</div>

					<div class="row">
						<div class="col-sm-5">
							<div class="form-group">
								<label for>Tipos de entrada</label>
								<select class="form-control" v-model="parametrosReporteEntradaTipo.tipo_entrada">
									<option :key="0" :value="0">{{ 'Todos los tipos'}} </option>
									<option :key="tipo_entrada.descripcion" :value="tipo_entrada.id_tipo_entrada" v-for="tipo_entrada in parametrosReporteEntradaTipo.tipos_entradas">{{ tipo_entrada.descripcion}}
									</option>
								</select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.tipo_salida" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="parametrosReporteEntradaTipo.formato">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha inicial</label>
								<datepicker :format="format" :language="es"
											v-model="parametrosReporteEntradaTipo.fechaInicialX" @selected="seleccionarFechaInicialReporteEntradaTipo"></datepicker>
							</div>
						</div>

						<div class="col-sm-4">
							<div class="form-group">
								<label for>Fecha final (Corte)</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalReporteEntradaTipo" v-model="parametrosReporteEntradaTipo.fechaFinalX"></datepicker>
							</div>
						</div>


						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteEntradatipo"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>


			<template v-if="reportes.indexOf(416) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte general de artículos</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoArticulo">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>

						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteArticulo"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(417) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte general de servicios</div>
					</div>

					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoServicio">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>

						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteServicio"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<!--<template v-if="reportes.indexOf(418) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Consolidado de productos con fecha de activación</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarBodegaActivacion"
																   v-model="todas_bodegas_consolidado"> Todos las bodegas</label>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoConsolidadoActivacion">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteConsolidadoActivacion"
							>Imprimir
							</button>
						</div>
						<div v-if="!todas_bodegas_consolidado" class="col-sm-10">
							<div class="form-group">
								<label> Bodega</label>
								<div class="form-group">
									<typeahead :initial="bodega_reporteConsolidadoActivacion"  :trim="80" :url="bodegasBusquedaURL" @input="seleccionarBodegaConsolidadoActivacion" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bodega_reporteConsolidadoActivacion" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div v-if="todas_bodegas_consolidado" class="col-sm-10">
							<div class="form-group">
								<label> Bodega</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</template>-->
			<template v-if="reportes.indexOf(419) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte existencias por lote</div>
					</div>

					<div class="row">
						<!--Seleccion de bodega-->
						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarBodegaExistenciaLote"
																   v-model="parametrosReporteExistenciaLote.todas_bodegas"> Todos las bodegas</label>
							</div>
						</div>
						<div v-if="!parametrosReporteExistenciaLote.todas_bodegas" class="col-sm-9">
							<div class="form-group">
								<label> Bodega</label>
								<div class="form-group">
									<typeahead :initial="parametrosReporteExistenciaLote.bodega"  :trim="80" :url="bodegasBusquedaURL" @input="seleccionarBodegaExistenciaLote" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div v-if="parametrosReporteExistenciaLote.todas_bodegas" class="col-sm-9">
							<div class="form-group">
								<label> Bodega</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>
						<!-- ----------------------------Seleccion de producto---------------------------------------------------------->
						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarProductoExistenciaLote"
																   v-model="parametrosReporteExistenciaLote.todos_productos"> Todos los productos</label>
							</div>
						</div>
						<div v-if="!parametrosReporteExistenciaLote.todos_productos" class="col-sm-9">
							<div class="form-group">
								<label> Producto</label>
								<div class="form-group">
									<typeahead :initial="parametrosReporteExistenciaLote.producto"  :trim="80" :url="productosBusquedaURL" @input="seleccionarProductoExistenciaLote" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.producto" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div v-if="parametrosReporteExistenciaLote.todos_productos" class="col-sm-9">
							<div class="form-group">
								<label> Producto</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>
						<!------------------------------------seleccionar presentaciones------------------------------------->
						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarPresentacionExistenciaLote"
																   v-model="parametrosReporteExistenciaLote.todas_presentaciones"> Todas las presentaciones</label>
							</div>
						</div>
						<div v-if="!parametrosReporteExistenciaLote.todas_presentaciones" class="col-sm-9">
							<div class="form-group">
								<label> Presentación</label>
								<div class="form-group">
									<v-select :options="form.presentaciones" ref="presentacionx" label="codigo" placeholder="Selecciona una presentacion" v-model="parametrosReporteExistenciaLote.presentacion"></v-select>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.presentacion" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div v-if="parametrosReporteExistenciaLote.todas_presentaciones" class="col-sm-9">
							<div class="form-group">
								<label> Presentación</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>
						<!------------------------------------Seleccionar No. lote------------------------------------->
						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarLoteExistenciaLote"
																   v-model="parametrosReporteExistenciaLote.todos_lotes"> Todos los lotes</label>
							</div>
						</div>
						<div v-if="!parametrosReporteExistenciaLote.todos_lotes" class="col-sm-9">
							<div class="form-group">
								<label for=""> No. lote</label>
								<input class="form-control" placeholder="Digitar el numero de lote" v-model="parametrosReporteExistenciaLote.no_lote">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.no_lote" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div v-if="parametrosReporteExistenciaLote.todos_lotes" class="col-sm-9">
							<div class="form-group">
								<label> No. lote</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="parametrosReporteExistenciaLote.formatoReporteExistenciaLote">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteExistenciaLote"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>
			<template v-if="reportes.indexOf(420) >= 0">
			<div class="col-md-6">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Códigos de fecha de activación</div>
					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Año Inicial:</label>
								<select class="form-control" v-model.number="anioInicial">
									<option value="2019">2019</option>
									<option value="2020">2020</option>
									<option value="2021">2021</option>
									<option value="2022">2022</option>
									<option value="2023">2023</option>
									<option value="2024">2024</option>
									<option value="2025">2025</option>
									<option value="2026">2026</option>
									<option value="2027">2027</option>
									<option value="2028">2028</option>
									<option value="2029">2029</option>
									<option value="2030">2030</option>
								</select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Año Final:</label>
								<select class="form-control" v-model.number="anioFinal">
									<option value="2019">2019</option>
									<option value="2020">2020</option>
									<option value="2021">2021</option>
									<option value="2022">2022</option>
									<option value="2023">2023</option>
									<option value="2024">2024</option>
									<option value="2025">2025</option>
									<option value="2026">2026</option>
									<option value="2027">2027</option>
									<option value="2028">2028</option>
									<option value="2029">2029</option>
									<option value="2030">2030</option>
								</select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoCodigoActivacion">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>



						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteFechas"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(421) >= 0">
            <div class="col-md-6">

                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Consignación general</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label> Formato:</label>
                                <select class="form-control" v-model="formatoConsignacionGeneral">
                                    <option value="pdf">PDF</option>
                                    <option value="xls">Excel</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <button
                                    type="button"
                                    class="btn btn-primary btn-imprimir"
                                    @click="descargarConsignacionGeneral"
                            >Imprimir
                            </button>

                        </div>
                    </div>
                </div>
            </div>
			</template>

			<template v-if="reportes.indexOf(422) >= 0">
            <div class="col-md-6">

                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Consolidado de clientes consignatarios</div>
                    </div>
                    <div class="row">
						<div class="col-sm-8" v-if="!todos_clientes_consignatario">
							<div class="form-group">
								<label> Cliente</label>
								<div class="form-group">
									<typeahead :initial="form.cliente"  :trim="80" :url="clientesBusquedaURL" :params="{es_deudor: false}" @input="seleccionarCliente" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_cliente" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-8" v-if="todos_clientes_consignatario">
							<div class="form-group">
								<label> Cliente</label>
								<div class="form-group">
									<input class="form-control" type="text" disabled>
								</div>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarClientesConsignatario"
																   v-model="todos_clientes_consignatario"> Todos los clientes</label>
							</div>
						</div>

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label> Formato:</label>
                                <select class="form-control" v-model="formatoConsignacionCliente">
                                    <option value="pdf">PDF</option>
                                    <option value="xls">Excel</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <button
                                    type="button"
                                    class="btn btn-primary btn-imprimir"
                                    @click="descargarConsignacionCliente"
                            >Imprimir
                            </button>

                        </div>
                    </div>
                </div>
            </div>
			</template>

			<template v-if="reportes.indexOf(423) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Historico de inventario consignado</div>
					</div>
					<div class="row">
						<div class="col-sm-6" v-if="!todos_clientes">
							<div class="form-group">
								<label> Cliente</label>
								<div class="form-group">
									<typeahead :initial="form.clienteHistorial"  :trim="80" :url="clientesBusquedaURL" :params="{es_deudor: false}" @input="seleccionarClienteHistorial" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_cliente_historial" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-6" v-if="todos_clientes">
							<div class="form-group">
								<label>Cliente</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarClientes"
																   v-model="todos_clientes"> Todos los clientes</label>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoHistorial">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarConsignacionClienteHistorial"
							>Imprimir
							</button>

						</div>
					</div>
				</div>
			</div>
			</template>

			<template v-if="reportes.indexOf(424) >= 0">
			<div class="col-md-6">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Formato inventario fisico</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoInventariofisico">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
								</select>
							</div>
						</div>
						<div class="col-sm-4">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteFisico"
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
	import inventario from "../../api/reportes_inventario";
	import loadingImage from "../../assets/images/block50.gif";
	import es from "vuejs-datepicker/dist/locale/translations/es";
	import comprobante from "../../api/caja-chica-comprobante";
	import entradaIni from "../../api/entradas-inventario-inicial";

	export default {
		data() {
			return {
				loading: false,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,
				es: es,
				format: "dd-MM-yyyy",
				reportes: [],
				descargando:false,
				anioInicial:2020,
				anioFinal:2020,
				id_bodega_actual:'',
				id_sucursal:1,
				formatoInventariofisico:'pdf',
				formatoInventarioExistencias:'pdf',
				formatoArticuloExistencias:'pdf',
				formatoCodigoActivacion:'pdf',
				formatoEstadoBaterias:'pdf',
				formatoRequisas:'pdf',
				formatoExistenciaMinima:'pdf',
				formatoConsignacionGeneral:'pdf',
				formatoConsignacionCliente:'pdf',
				formatoHistorial:'pdf',
				//Reporte de existencia por categoria
				formatoExistenciaCategoria:'pdf',
				existenciaCategoria:'LTH',

				sucursalesBusquedaURL: "/sucursales/buscar",
				bodegasBusquedaURL: "/bodegas/buscar",
				clientesBusquedaURL: "/ventas/clientes/buscar",
				productosBusquedaURL: "/inventario/productos/buscarPS",
				errorMessages: [],
				//Estado baterias
				bodega_reporteEstadoBateria:{
					id_bodega:0
				},
				bodega_reporteConsolidadoActivacion:{
					id_bodega:0
				},
				bodega_reporteExistencia:{
					id_bodega:0
				},
				bodega_reporteExistenciaArticulo:{
					id_bodega:0
				},
				id_bodega_reporteEstadoBateria:'',
				id_bodega_reporteConsolidadoActivacion:'',
				todas_bodegas:true,
				todas_bodegas_articulo:true,
				todas_bodegas_estado:true,
				todas_bodegas_consolidado:true,
				id_bodega_reporteExistencia:'',
				id_bodega_reporteExistenciaArticulo:'',
				//Reporte existencias
				sucursal_reporteExistencia:{},
				id_sucursal_reporteExistencia:'',

				//Parametros para reporte de existencias por lote
				parametrosReporteExistenciaLote: {
					id_producto:0,
					bodegas: [],
					bodega:{id_bodega:0},
					producto:{id_producto:0},
					presentacion:[],
					id_presentacion:0,
					no_lote:"TODOS_LOTES",
					todas_bodegas:true,
					todos_productos:true,
					todas_presentaciones:false,
					todos_lotes:true,
					formatoReporteExistenciaLote : 'pdf'
				},

				//reporte articulos
				fechaInicialArticulo:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalArticulo:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialArticuloX:new Date(),
				fechaFinalArticuloX:new Date(),
				formatoArticulo:'pdf',

				//reporte articulos por tipo
				fechaInicialArticuloTipo:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalArticuloTipo:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialArticuloTipoX:new Date(),
				fechaFinalArticuloTipoX:new Date(),
				formatoArticuloTipo:'pdf',

				//reporte servicio
				fechaInicialServicio:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalServicio:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialServicioX:new Date(),
				fechaFinalServicioX:new Date(),
				formatoServicio:'pdf',

				//reporte servicio tipo
				fechaInicialServicioTipo:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalServicioTipo:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialServicioTipoX:new Date(),
				fechaFinalServicioTipoX:new Date(),
				formatoServicioTipo:'pdf',

				//reporte detalles producto
				fechaInicialProductoDetalles:moment(new Date()).format("YYYY-MM-DD"),
				//fechaFinalServicioTipo:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialProductoDetallesX:new Date(),
				//fechaFinalServicioTipoX:new Date(),
				formatoDetalleProductos:'pdf',

				//reporte productos fecha activacion
				fechaInicialConsolidadoActivacion:moment(new Date()).format("YYYY-MM-DD"),
				//fechaFinalServicioTipo:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialConsolidadoActivacionX:new Date(),
				//fechaFinalServicioTipoX:new Date(),
				formatoConsolidadoActivacion:'pdf',

				//reporte de entrada por bodegas
				fechaInicialSalidaProducto:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalSalidaProducto:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialSalidaProductoX:new Date(),
				fechaFinalSalidaProductoX:new Date(),
				formatoSalidaProducto:'pdf',

				//reporte de salida por bodegas
				fechaInicialSalidaTraslado:moment(new Date()).format("YYYY-MM-DD"),
				fechaFinalSalidaTraslado:moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialSalidaTrasladoX:new Date(),
				fechaFinalSalidaTrasladoX:new Date(),
				formatoSalidaTraslado:'pdf',

				form:{
					cliente: {
						id_cliente:0,
					},

					clienteHistorial: {
						id_cliente:0,
					},
					id_cliente_historial:0,
					id_cliente:0,

					categorias:[],
					bodegasEntrada:[],
					bodegasSalida:[],
					categoria:'',
					bodegaEntrada:0,
					bodegaSalida:0,
					marca_tipo:'',

				},
				todos_clientes:true,
				todos_clientes_consignatario:true,


				parametrosReporteSalidaTipo:{
					tipos_salidas:[],
					tipo_salida:0,
					formato:'pdf',
					fechaInicial:moment(new Date()).format("YYYY-MM-DD"),
					fechaFinal:moment(new Date()).format("YYYY-MM-DD"),
					fechaInicialX:new Date(),
					fechaFinalX:new Date(),
				},

				parametrosReporteExistenciaCategoria:{
					bodegas:[],
					bodega:0,
				},
				parametrosReporteEntradaTipo:{
					tipos_entradas:[],
					tipo_entrada:0,
					formato:'pdf',
					fechaInicial:moment(new Date()).format("YYYY-MM-DD"),
					fechaFinal:moment(new Date()).format("YYYY-MM-DD"),
					fechaInicialX:new Date(),
					fechaFinalX:new Date(),
				},
			}
		},
		methods: {
		descargarReporteFisico () {
			if(!this.loading){
				var self=this;
				self.loading=true;
				alertify.success("Descargando datos, espere un momento.....",5);
				axios.post('inventario/reportes/inventario-fisico',
						{
							extension : self.formatoInventariofisico
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoInventariofisico === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'ReporteInventarioFisico.'+ self.formatoInventariofisico;
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
			cambiarBodega()
			{
				var self=this;
				if(self.todas_bodegas){
					self.bodega_reporteExistencia = {};
					self.bodega_reporteExistencia.id_bodega = 0;
				}
			},
			cambiarBodegaArticulo()
			{
				var self=this;
				if(self.todas_bodegas_articulo){
					self.bodega_reporteExistenciaArticulo = {};
					self.bodega_reporteExistenciaArticulo.id_bodega = 0;
				}
			},
			cambiarBodegaEstado()
			{
				var self=this;
				if(self.todas_bodegas_estado){
					self.bodega_reporteEstadoBateria = {};
					self.bodega_reporteEstadoBateria.id_bodega = 0;
				}
			},
			cambiarBodegaExistenciaLote()
			{
				var self=this;
				if(self.parametrosReporteExistenciaLote.todas_bodegas){
					self.parametrosReporteExistenciaLote.bodega = {};
					self.parametrosReporteExistenciaLote.bodega = 0;
				}
			},
			cambiarPresentacionExistenciaLote()
			{
				var self=this;
				if(self.parametrosReporteExistenciaLote.todas_presentaciones){
					self.parametrosReporteExistenciaLote.presentacion = {};
					self.parametrosReporteExistenciaLote.presentacion.id_presentacion = 0;
				}
			},
			cambiarLoteExistenciaLote() //Cambiar entre todos los lotes o uno en especifico
			{
				var self=this;
				if(self.parametrosReporteExistenciaLote.todos_lotes){
					self.parametrosReporteExistenciaLote.no_lote = 'TODOS_LOTES';
				}else{
					self.parametrosReporteExistenciaLote.no_lote = '';
				}
			},
			cambiarProductoExistenciaLote()
			{
				var self=this;
				if(self.parametrosReporteExistenciaLote.todos_productos){
					self.parametrosReporteExistenciaLote.producto = {};
					self.parametrosReporteExistenciaLote.producto = 0;
				}
			},

			descargarReporteExistencias () {
				//if(!this.loading){
					var self=this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/inventario-existencia',
							{
								id_bodega : self.bodega_reporteExistencia.id_bodega,
								extension:self.formatoInventarioExistencias
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoInventarioExistencias === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteInventarioExistencias.'+self.formatoInventarioExistencias;
								link.click()
								self.loading=false;
							}) .catch(function (error) {
						alertify.error("Error Descargando archivo.....",5);
						self.loading=false;
					})
				/*}else{
					alertify.warning("Espere a que se complete la descarga anterior",5);
				}*/
			},
			descargarExistenciaCategoria () {
				if(this.form.marca_tipo){
				var self=this;
				self.loading=true;
				alertify.success("Descargando datos, espere un momento.....",5);
				axios.post('inventario/reportes/existencia-categoria',
						{
							categoria : self.form.marca_tipo,
							extension:self.formatoExistenciaCategoria,
							id_bodega : self.parametrosReporteExistenciaCategoria.bodega
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoExistenciaCategoria === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'ReporteExistenciaPorCategoria.'+self.formatoExistenciaCategoria;
							link.click()
							self.loading=false;
						}) .catch(function (error) {
					alertify.error("Error Descargando archivo.....",5);
					self.loading=false;
				})
				}else{
					alertify.warning("Por favor seleccione una categoria.",5);
				}
			},
			descargarReporteExistenciasArticulo () {
				//if(!this.loading){
				var self=this;
				self.loading=true;
				alertify.success("Descargando datos, espere un momento.....",5);
				axios.post('inventario/reportes/herramienta-existencia',
						{
							id_bodega : self.bodega_reporteExistenciaArticulo.id_bodega,
							extension:self.formatoInventarioExistencias
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formatoInventarioExistencias === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'ReporteInventarioExistencias.'+self.formatoInventarioExistencias;
							link.click()
							self.loading=false;
						}) .catch(function (error) {
					alertify.error("Error Descargando archivo.....",5);
					self.loading=false;
				})
				/*}else{
					alertify.warning("Espere a que se complete la descarga anterior",5);
				}*/
			},

			descargarReporteEstadoBateria () {
				if(!this.loading){
                    var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/estado-baterias/reporte',
                        {
                            id_bodega_actual : self.bodega_reporteEstadoBateria.id_bodega,
                            extension : self.formatoEstadoBaterias,

                        }, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
                                self.formatoEstadoBaterias === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteEstadoBateria.' + self.formatoEstadoBaterias;
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
			descargarReporteConsolidadoActivacion () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/consolidado-fecha-activacion',
							{
								id_bodega : self.bodega_reporteConsolidadoActivacion.id_bodega,
								extension : self.formatoConsolidadoActivacion,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoConsolidadoActivacion === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteConsolidadoFechaActivacion.' + self.formatoConsolidadoActivacion;
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
			descargarReporteExistenciaBateria () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/existencia-producto',
							{
								id_sucursal : self.id_sucursal_reporteExistencia,
								extension : self.formatoExistenciaMinima,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoExistenciaMinima === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteExistencias.' + self.formatoExistenciaMinima;
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

			descargarReporteFechas () {
				if(!this.loading){
                    if(this.anioInicial <= this.anioFinal){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/fechas-activacion/reporte',
							{
								anioInicial : self.anioInicial,
								anioFinal: self.anioFinal,
								extension : self.formatoCodigoActivacion,
							} ,{ responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoCodigoActivacion === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteFechasActivacion.' + self.formatoCodigoActivacion;
								link.click()
								this.loading=false;
							}) .catch(function (error) {
						alertify.error("Error Descargando archivo.....",5);
						self.loading=false;
					})}else{
                        alertify.warning("Debe seleccionar un rango válido",5);
                    }
				}else{
					alertify.warning("Espere a que se complete la descarga anterior",5);
				}
			},
			descargarConsignacionGeneral () {
				var self = this;
				//self.loading = true;
				//if(!this.descargando) {
				self.loading = true;
				alertify.success("Descargando datos, espere un momento.....", 5);
				axios.post('inventario/consignacion/reporte/general',
						{
							extension : self.formatoConsignacionGeneral,

						},{responseType: 'blob'})
						.then(({data}) => {
							let blob = new Blob([data], {type: 'application/pdf'})
							self.formatoConsignacionGeneral === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'ReporteConsignacion.'+self.formatoConsignacionGeneral;
							link.click()
							self.loading = false;
							//this.descargando = false;
						}).catch(function (error) {
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				})

				/*}else{
                    alertify.warning("Espere a que se complete la descarga anterior",5);
                }*/
			},
			descargarConsignacionCliente () {
				var self = this;
				//self.loading = true;
				//if(!this.descargando) {
				//if (self.form.cliente.id_cliente) {
					let url = 'inventario/consignacion/reporte/cliente/'+self.form.cliente.id_cliente;
					self.loading = true;
					alertify.success("Descargando datos, espere un momento.....", 5);
					axios.post('inventario/consignacion/reporte/cliente',
							{
								id_cliente : self.form.id_cliente,
								extension : self.formatoConsignacionCliente
							},{responseType: 'blob'})
							.then(({data}) => {
								let blob = new Blob([data], {type: 'application/pdf'})
								self.formatoConsignacionCliente === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteConsignacionCliente.'+ self.formatoConsignacionCliente;
								link.click()
								self.loading = false;
								//this.descargando = false;
							}).catch(function (error) {
						alertify.error("Error Descargando archivo.....", 5);
						self.loading = false;
					})
			 /*	}else{
					alertify.warning("Seleccione un cliente!",5);
					self.loading = false;
				}*/

				/*}else{
					alertify.warning("Espere a que se complete la descarga anterior",5);
				}*/
			},
			descargarConsignacionClienteHistorial() {
				var self=this;
				if(self.form.clienteHistorial.id_cliente >= 0){
					self.loading=true;
					axios.post('inventario/consignacion/reporte/historial',
							{
								id_cliente:self.form.id_cliente_historial,
								extension:self.formatoHistorial,
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoHistorial === 'xls' ?
										blob = new Blob([data], { type: 'application/octet-stream' }) :
										self.formatoHistorial === 'pdf' ?
												blob = new Blob([data], { type: 'application/pdf' }):
												blob = new Blob([data], { type: 'text/html' });
								let link = document.createElement('a');
								link.setAttribute('target', '_blank');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'HistorialConsignacion.'+self.formatoHistorial;
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
			descargarReporteExistenciaLote () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/existencia-por-lote',
							{
								id_bodega : self.parametrosReporteExistenciaLote.bodega.id_bodega,
								id_producto : self.parametrosReporteExistenciaLote.producto.id_producto,
								id_presentacion : self.parametrosReporteExistenciaLote.presentacion.id_presentacion,
								no_lote : self.parametrosReporteExistenciaLote.no_lote,
								extension : self.parametrosReporteExistenciaLote.formatoReporteExistenciaLote,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.parametrosReporteEntradaTipo.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteExistenciasPorLote.' + self.parametrosReporteExistenciaLote.formatoReporteExistenciaLote;
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
			descargarReporteSalidaProducto () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/salida-producto',
							{
								fechaInicio : self.fechaInicialSalidaProducto,
								fechaFinal : self.fechaFinalSalidaProducto,
								/*id_bodega : self.form.bodegaEntrada,*/
								extension : self.formatoSalidaProducto,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoSalidaProducto === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteSalidas.' + self.formatoSalidaProducto;
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
			descargarReporteSalidaTraslado () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/salida-traslado',
							{
								fechaInicio : self.fechaInicialSalidaTraslado,
								fechaFinal : self.fechaFinalSalidaTraslado,
								/*id_bodega : self.form.bodegaSalida,*/
								extension : self.formatoSalidaTraslado,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoSalidaTraslado === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteSalidaTraslado.' + self.formatoSalidaTraslado;
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
			descargarReporteDetallesProductos () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/detalles-productos',
							{
								fecha_entrada : self.fechaInicialProductoDetalles,
								//fechaFinal : self.fechaFinalRequisas,
								//id_bodega : self.id_bodega_reporteRequisas,
								extension : self.formatoDetalleProductos,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoDetalleProductos === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteDetallesProductos.' + self.formatoDetalleProductos;
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
			descargarReporteArticulo () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/articulo',
							{
								//fechaInicio : self.fechaInicialRequisas,
								//fechaFinal : self.fechaFinalRequisas,
								//id_bodega : self.id_bodega_reporteRequisas,
								extension : self.formatoArticulo,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoArticulo === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteGeneralArticulo.' + self.formatoArticulo;
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
			descargarReporteArticuloPorTipo () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/articulo-tipo',
							{
								//fechaInicio : self.fechaInicialRequisas,
								//fechaFinal : self.fechaFinalRequisas,
								//id_bodega : self.id_bodega_reporteRequisas,
								extension : self.formatoArticuloTipo,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoArticuloTipo === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteGeneralArticuloPorTipo.' + self.formatoArticuloTipo;
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
			descargarReporteServicio () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/servicios',
							{
								//fechaInicio : self.fechaInicialRequisas,
								//fechaFinal : self.fechaFinalRequisas,
								//id_bodega : self.id_bodega_reporteRequisas,
								extension : self.formatoServicio,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoServicio === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteGeneralServicios.' + self.formatoServicio;
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
			descargarReporteServicioTipo () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reportes/servicios-tipo',
							{
								//fechaInicio : self.fechaInicialRequisas,
								//fechaFinal : self.fechaFinalRequisas,
								//id_bodega : self.id_bodega_reporteRequisas,
								extension : self.formatoServicioTipo,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoServicioTipo === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteGeneralServiciosTipo.' + self.formatoServicioTipo;
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
			descargarReporteSalidaTipo () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reporte-salida-tipo',
							{
								fechaInicio : self.parametrosReporteSalidaTipo.fechaInicial,
								fechaFinal : self.parametrosReporteSalidaTipo.fechaFinal,
								id_tipo_salida : self.parametrosReporteSalidaTipo.tipo_salida,
								extension : self.parametrosReporteSalidaTipo.formato,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.parametrosReporteSalidaTipo.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'MovimientoProductosConsolidado.' + self.parametrosReporteSalidaTipo.formato;
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
			descargarReporteEntradatipo () {
				if(!this.loading){
					var self = this;
					self.loading=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.post('inventario/reporte-entrada-tipo',
							{
								fechaInicio : self.parametrosReporteEntradaTipo.fechaInicial,
								fechaFinal : self.parametrosReporteEntradaTipo.fechaFinal,
								id_tipo_entrada : self.parametrosReporteEntradaTipo.tipo_entrada,
								extension : self.parametrosReporteEntradaTipo.formato,

							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.parametrosReporteEntradaTipo.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteEntradaPorTipo.' + self.parametrosReporteEntradaTipo.formato;
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
			cargarPresentaciones() {
				var self = this;
				self.loading = true;
				entradaIni.cargarPresentacionesProductos({
					id_producto: self.parametrosReporteExistenciaLote.producto.id_producto,
				}, data => {
					if(data.presentaciones !== null){
						self.form.presentaciones = data.presentaciones;
					}else{
						alertify.warning("No se encuentran presentaciones para este producto.",5);
						self.form.presentaciones = [];
					}
					self.loading = false;
				}, err => {
					if(err.id_producto){
						self.form.presentaciones = [];
						alertify.warning(err.id_producto,5);
						self.loading = false;
					}
				})
				//self.$refs.presentacionx.focus();
			},
			seleccionarFechaInicialSalidaProducto(date) {
				this.fechaInicialSalidaProducto = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalSalidaProducto(date) {
				this.fechaFinalSalidaProducto = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaInicialSalidaTraslado(date) {
				this.fechaInicialSalidaTraslado = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalSalidaTraslado(date) {
				this.fechaFinalSalidaTraslado = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaInicialDetallesProductos(date) {
				this.fechaInicialProductoDetalles = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaInicialConsolidadoProductos(date) {
				this.fechaInicialConsolidadoActivacion = moment(date).format("YYYY-MM-DD");
			},
			seleccionarBodegaReporte(e) {
				const bodega = e.target.value;
				var self = this;
				self.bodega_reporteEstadoBateria = bodega;
				self.id_bodega_reporteEstadoBateria = self.bodega_reporteEstadoBateria.id_bodega;
			},
			seleccionarBodegaReporteExistencia(e) {
				const bodega = e.target.value;
				var self = this;
				self.bodega_reporteExistencia = bodega;
				self.id_bodega_reporteExistencia = self.bodega_reporteExistencia.id_bodega;
			},
			seleccionarBodegaReporteExistenciaArticulo(e) {
				const bodega = e.target.value;
				var self = this;
				self.bodega_reporteExistenciaArticulo = bodega;
				self.id_bodega_reporteExistenciaArticulo = self.bodega_reporteExistenciaArticulo.id_bodega;
			},
			seleccionarBodegaExistenciaLote(e) {
				const bodega = e.target.value;
				var self = this;
				self.parametrosReporteExistenciaLote.bodega = bodega;

			},
			seleccionarProductoExistenciaLote(e) {
				const bodega = e.target.value;
				var self = this;
				self.parametrosReporteExistenciaLote.producto = bodega;
				self.cargarPresentaciones();

			},
			seleccionarBodegaConsolidadoActivacion(e) {
				const bodega = e.target.value;
				var self = this;
				self.bodega_reporteConsolidadoActivacion = bodega;
				self.id_bodega_reporteConsolidadActivacion = self.bodega_reporteConsolidadoActivacion.id_bodega;
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
			cambiarClientesConsignatario()
			{
				var self=this;
				if(self.todos_clientes_consignatario){
					self.form.cliente = {};
					self.form.cliente.id_cliente = 0;
				}
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
			seleccionarFechaInicialReporteSalidaTipo(date) {
			//console.log(date);
				this.parametrosReporteSalidaTipo.fechaInicial = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalReporteSalidaTipo(date) {
				//console.log(date);
				this.parametrosReporteSalidaTipo.fechaFinal = moment(date).format("YYYY-MM-DD");
			},

			seleccionarFechaInicialReporteEntradaTipo(date) {
				//console.log(date);
				this.parametrosReporteEntradaTipo.fechaInicial = moment(date).format("YYYY-MM-DD");
			},
			seleccionarFechaFinalReporteEntradaTipo(date) {
				//console.log(date);
				this.parametrosReporteEntradaTipo.fechaFinal = moment(date).format("YYYY-MM-DD");
			},
			nuevo(){
				var self = this;
				self.loading = true;
				inventario.selectCategorias({}, data => {

					if(data.lista_reportes.length>0){
						data.lista_reportes.forEach((reportex, key) => {
							self.reportes.push(reportex.id_menu);
						});
					}

					self.form.categorias = data.categorias;
					self.form.bodegasEntrada = data.bodegas;
					self.parametrosReporteSalidaTipo.tipos_salidas=data.tipos_salidas;
					self.parametrosReporteExistenciaCategoria.bodegas=data.bodegas;
					self.parametrosReporteEntradaTipo.tipos_entradas=data.tipos_entradas;
					self.form.bodegasSalida = data.bodegas;
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
		},
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

