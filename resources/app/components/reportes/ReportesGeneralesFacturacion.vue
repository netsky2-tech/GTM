<template>
	<div class="main">

		<div class="simple-welcome-text">
			<div class="text">Reportes Ventas</div>
			<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-ventas' }"> Módulo Ventas</router-link>> Reportes</div>
		</div>

		<template v-if="reportes.indexOf(472) >= 0">
		<div class="row">
			<div class="col-md-9">

				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Detallado de Ventas</div>
					</div>

					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarClientes"
																   v-model="todos_clientes"> Todos los clientes</label>
							</div>
						</div>

						<div v-if="!todos_clientes" class="col-sm-9">
							<div class="form-group">
								<label> Cliente</label>
								<div class="form-group">
									<typeahead :disabled="todos_clientes" :initial="cliente_estadocuentadetallado" :params="{es_deudor: false}" :trim="80" :url="clientesBusquedaURL" @input="seleccionarClienteEstadoCuentaDetallado" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_cliente_estadocuentadetallado" v-text="message"></li>
								</ul>
							</div>
						</div>


						<div v-if="todos_clientes" class="col-sm-9">
							<div class="form-group">
								<label> Cliente</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>


						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarClientesR2"
																   v-model="todas_sucursales"> Todos las sucursales</label>
							</div>
						</div>

						<div v-if="!todas_sucursales" class="col-sm-9">
							<div class="form-group">
								<label> Sucursal</label>
								<div class="form-group">
									<typeahead :initial="cliente_estadocuentadetalladoR2" :trim="80" :url="sucursalesBusquedaURL" @input="seleccionarClienteEstadoCuentaDetalladoR2" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_cliente_estadocuentadetalladoR2" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div v-if="todas_sucursales" class="col-sm-9">
							<div class="form-group">
								<label> Sucursal</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>


						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarVendedor"
																   v-model="todos_vendedores"> Todos las vendedores</label>
							</div>
						</div>

						<div v-if="!todos_vendedores" class="col-sm-9">
							<div class="form-group">
								<label> Vendedor</label>
								<div class="form-group">
									<typeahead :initial="vendedor_estadocuentadetalladoR2" :trim="80" :url="vendedoresBusquedaURL" @input="seleccionarVendedorEstadoCuentaDetalladoR2" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_vendedor_estadocuentadetalladoR2" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div v-if="todos_vendedores" class="col-sm-9">
							<div class="form-group">
								<label> Vendedor</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Tipos Factura:</label>
								<select class="form-control" v-model.number="tipoEstadoCuentaDetallado">
									<option value="0">Todas</option>
									<option value="1">Contado</option>
									<option value="2">Crédito</option>
								</select>
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
								<label for>Fecha Final</label>
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

						<div class="col-sm-3">
							<div class="form-group">
								<label> Tipos Agrupación:</label>
								<select class="form-control" v-model="tipoAgrupacion">
									<option value="ReporteVentasPorCliente">Por Cliente</option>
									<option value="ReporteVentasPorSucursal">Por Sucursal</option>
									<option value="ReporteVentasPorVendedor">Por Vendedor</option>
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
		</div>
		</template>

		<template v-if="reportes.indexOf(473) >= 0">
			<div class="row">
				<div class="col-md-9">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Asignación Comisiones</div>
					</div>

					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarVendedorR3"
																   v-model="todos_vendedoresR3"> Todos los vendedores</label>
							</div>
						</div>

						<div v-if="!todos_vendedoresR3" class="col-sm-9">
							<div class="form-group">
								<label> Vendedor</label>
								<div class="form-group">
									<typeahead :initial="vendedor_estadocuentadetalladoR3" :trim="80" :url="vendedoresBusquedaURL" @input="seleccionarVendedorEstadoCuentaDetalladoR3" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_vendedor_estadocuentadetalladoR3" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div v-if="todos_vendedoresR3" class="col-sm-9">
							<div class="form-group">
								<label> Vendedor</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoAsignacionesComision">
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
									@click="descargarReporteComisionesAsignacion"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</div>
		</template>

		<template v-if="reportes.indexOf(474) >= 0">
			<div class="row">
				<div class="col-md-9">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte Ventas para Calcular Comisiones</div>
					</div>

					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarVendedorR4"
																   v-model="todos_vendedoresR4"> Todos los vendedores</label>
							</div>
						</div>

						<div v-if="!todos_vendedoresR4" class="col-sm-9">
							<div class="form-group">
								<label> Vendedor</label>
								<div class="form-group">
									<typeahead :initial="vendedor_estadocuentadetalladoR4" :trim="80" :url="vendedoresBusquedaURL" @input="seleccionarVendedorEstadoCuentaDetalladoR4" style="width: 100%;"></typeahead>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_vendedor_estadocuentadetalladoR4" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div v-if="todos_vendedoresR4" class="col-sm-9">
							<div class="form-group">
								<label> Vendedor</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>


						<div class="col-sm-3">
							<div class="form-group">
								<label> Tipos Reporte:</label>
								<select class="form-control" v-model="tipoAgrupacionR4">
									<option value="ReporteVentasPorVendedorComisiones">Ventas de Contado</option>
									<option value="ReporteRecibosPorVendedorComisiones">Recibos</option>
									<option value="ReporteNotasCreditoPorVendedorComisiones">Notas de Crédito</option>
									<option value="ReporteNotasDebitoPorVendedorComisiones">Notas de Débito</option>
									<option value="ReporteVendedorComisionesConsolidado">Consolidado de Comisiones</option>
								</select>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicialComisionR4" v-model="fechaInicialComisionR4X"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Final</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaCorteComisionR4" v-model="fechaCorteComisionR4X"></datepicker>
							</div>
						</div>


						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="formatoAsignacionesComisionR4">
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
									@click="descargarReporteComisiones"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
				</div>
			</div>
		</template>

		<template v-if="reportes.indexOf(475) >= 0">
			<div class="row">
				<div class="col-md-9">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de ventas por departamentos</div>
					</div>

					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarDepartamento"
																   v-model="parametros_venta_departamento.todos_departamentos"> Todos los departamentos</label>
							</div>
						</div>

						<div v-if="!parametros_venta_departamento.todos_departamentos" class="col-sm-9">
							<div class="form-group">
								<label> Departamentos</label>
								<div class="form-group">
									<v-select :options="parametros_venta_departamento.departamentos" label="descripcion" v-model="parametros_venta_departamento.departamento" ></v-select>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_vendedor_estadocuentadetalladoR3" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div v-if="parametros_venta_departamento.todos_departamentos" class="col-sm-9">
							<div class="form-group">
								<label> Departamentos</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicioVentaDepartamento" v-model="parametros_venta_departamento.fechaInicioVentaDepartamentoX"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Final</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalVentaDepartamento" v-model="parametros_venta_departamento.fechaFinalVentaDepartamentoX"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="parametros_venta_departamento.formatoVentaDepartamentoMunicipio">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
									<!--<option value="html">HTML</option>-->
								</select>
							</div>
						</div>

						<div class="col-sm-3">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteVentaPorDepartamento"
							>Imprimir
							</button>
						</div>
					</div>
				</div>
			</div>
			</div>
		</template>

		<template v-if="reportes.indexOf(476) >= 0">
			<div class="row">
				<div class="col-md-9">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Reporte de ventas por zonas</div>
					</div>

					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label class="check-label2"><input type="checkbox" v-on:change="cambiarZona"
																   v-model="parametros_venta_zona.todas_zonas"> Todas las zonas</label>
							</div>
						</div>

						<div v-if="!parametros_venta_zona.todas_zonas" class="col-sm-9">
							<div class="form-group">
								<label> Zonas</label>
								<div class="form-group">
									<v-select :options="parametros_venta_zona.zonas" label="descripcion" v-model="parametros_venta_zona.zona" ></v-select>
								</div>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.id_vendedor_estadocuentadetalladoR3" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div v-if="parametros_venta_zona.todas_zonas" class="col-sm-9">
							<div class="form-group">
								<label> Zonas</label>
								<div class="form-group">
									<input type="text" class="form-control" disabled>
								</div>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Inicial</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaInicioVentaZona" v-model="parametros_venta_zona.fechaInicioVentaZonaX"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Final</label>
								<datepicker :format="format" :language="es"
											@selected="seleccionarFechaFinalVentaZona" v-model="parametros_venta_zona.fechaFinalVentaZonaX"></datepicker>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label> Formato:</label>
								<select class="form-control" v-model="parametros_venta_zona.formatoVentaZona">
									<option value="pdf">PDF</option>
									<option value="xls">Excel</option>
									<!--<option value="html">HTML</option>-->
								</select>
							</div>
						</div>

						<div class="col-sm-3">
							<button
									type="button"
									class="btn btn-primary btn-imprimir"
									@click="descargarReporteVentaPorZona"
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
	</div>
</template>


<script type="text/ecmascript-6">
	import loadingImage from '../../assets/images/block50.gif'
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import menu from "../../api/menu";
	import cliente from '../../api/clientes'
    import comisiones_asignaciones from "../../api/comisiones_asignaciones";
	export default {
		data() {
			return {
				loading: false,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,
				es: es,
				reportes:[],
				format: "dd-MM-yyyy",
				clientesBusquedaURL: "/ventas/clientes/buscar",
				sucursalesBusquedaURL: "/sucursales/buscar",
				vendedoresBusquedaURL: "/ventas/vendedores/buscar",
				errorMessages: [],
				todos_clientes:true,
				todas_sucursales:true,
				todos_vendedores:true,

				tipoAgrupacion:'ReporteVentasPorCliente',

				//Reporte estado cuenta detallado
				fechaCorteEstadoCuentaDetallado: moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialEstadoCuentaDetallado: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteEstadoCuentaDetalladoX: new Date(),
				fechaInicialEstadoCuentaDetalladoX: new Date(),
				formatoEstadoCuentaDetallado:'pdf',
				tipoEstadoCuentaDetallado:0,
				cliente_estadocuentadetallado: {
					id_cliente:0
				},
				id_cliente_estadocuentadetallado:'',





				fechaCorteEstadoCuentaDetalladoR2: moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialEstadoCuentaDetalladoR2: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteEstadoCuentaDetalladoXR2: new Date(),
				fechaInicialEstadoCuentaDetalladoXR2: new Date(),
				formatoEstadoCuentaDetalladoR2:'pdf',
				tipoEstadoCuentaDetalladoR2:0,
				cliente_estadocuentadetalladoR2: {
					id_sucursal:0
				},
				id_cliente_estadocuentadetalladoR2:'',

				vendedor_estadocuentadetalladoR2: {
					id_vendedor:0
				},
				id_vendedor_estadocuentadetalladoR2:'',


				formatoAsignacionesComision:'pdf',


				vendedor_estadocuentadetalladoR3: {
					id_vendedor:0
				},
				id_vendedor_estadocuentadetalladoR3:'',


				todos_vendedoresR3:true,



				todos_vendedoresR4:true,

				vendedor_estadocuentadetalladoR4: {
					id_vendedor:0
				},
				id_vendedor_estadocuentadetalladoR4:'',
				tipoAgrupacionR4:'ReporteVentasPorVendedorComisiones',
				fechaCorteComisionR4: moment(new Date()).format("YYYY-MM-DD"),
				fechaInicialComisionR4: moment(new Date()).format("YYYY-MM-DD"),
				fechaCorteComisionR4X: new Date(),
				fechaInicialComisionR4X: new Date(),
				formatoAsignacionesComisionR4:'pdf',

				//Reporte Venta Departamento y municipios
				parametros_venta_departamento:
						{
							todos_departamentos:true,
							fechaInicioVentaDepartamento: moment(new Date()).format("YYYY-MM-DD"),
							fechaFinalVentaDepartamento: moment(new Date()).format("YYYY-MM-DD"),
							fechaInicioVentaDepartamentoX : new Date(),
							fechaFinalVentaDepartamentoX : new Date(),
							formatoVentaDepartamentoMunicipio:'pdf',
							departamentos:[],
							id_departamento:'',
							departamento:{id_departamento:0,descripcion:''},
						},
				parametros_venta_zona:
						{
							todas_zonas:true,
							fechaInicioVentaZona: moment(new Date()).format("YYYY-MM-DD"),
							fechaFinalVentaZona: moment(new Date()).format("YYYY-MM-DD"),
							fechaInicioVentaZonaX : new Date(),
							fechaFinalVentaZonaX : new Date(),
							formatoVentaZona:'pdf',
							zonas:[],
							id_zona:'',
							zona:{id_zona:0,descripcion:''},
						},
			}

		},
		methods: {

			cambiarClientes()
			{
				var self=this;
				if(self.todos_clientes){
					self.cliente_estadocuentadetallado = {};
					self.cliente_estadocuentadetallado.id_cliente = 0;
				}
			},

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
				//self.id_cliente_estadocuentadetallado = self.cliente_estadocuentadetallado.id_cliente;
			},
			descargarReporteEstadoCuentaDetallado() {
				var self=this;
				if(self.cliente_estadocuentadetallado.id_cliente >= 0){
				self.loading=true;
				axios.post('inventario/facturas/reporte/clientes',
						{
							fechaInicial: self.fechaInicialEstadoCuentaDetallado,
							fechaFinal: self.fechaCorteEstadoCuentaDetallado,
							extension:self.formatoEstadoCuentaDetallado,
							tipo_facturax:self.tipoEstadoCuentaDetallado,
							id_cliente:self.cliente_estadocuentadetallado.id_cliente,
							id_sucursal:self.cliente_estadocuentadetalladoR2.id_sucursal,
							id_vendedor:self.vendedor_estadocuentadetalladoR2.id_vendedor,
							agrupacion:self.tipoAgrupacion
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
							link.download = 'VentasPorCliente.'+self.formatoEstadoCuentaDetallado;
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




			cambiarClientesR2()
			{
				var self=this;
				if(self.todas_sucursales){
					self.cliente_estadocuentadetalladoR2 = {};
					self.cliente_estadocuentadetalladoR2.id_sucursal = 0;
				}
			},

			cambiarVendedor()
			{
				var self=this;
				if(self.todos_vendedores){
					self.vendedor_estadocuentadetalladoR2 = {};
					self.vendedor_estadocuentadetalladoR2.id_vendedor = 0;
				}
			},


			cambiarVendedorR3()
			{
				var self=this;
				if(self.todos_vendedoresR3){
					self.vendedor_estadocuentadetalladoR3 = {};
					self.vendedor_estadocuentadetalladoR3.id_vendedor = 0;
				}
			},


			seleccionarVendedorEstadoCuentaDetalladoR3(e) {
				const clienteP = e.target.value;
				var self = this;
				self.vendedor_estadocuentadetalladoR3 = clienteP;
			},

			descargarReporteComisionesAsignacion() {
				var self=this;
				if(self.vendedor_estadocuentadetalladoR3.id_vendedor >= 0){
					self.loading=true;
					axios.post('ventas/comisiones/reporte',
							{
								extension:self.formatoAsignacionesComision,
								id_vendedor:self.vendedor_estadocuentadetalladoR3.id_vendedor
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoAsignacionesComision === 'xls' ?
										blob = new Blob([data], { type: 'application/octet-stream' }) :
										self.formatoAsignacionesComision === 'pdf' ? blob = new Blob([data], { type: 'application/pdf' }):
												blob = new Blob([data], { type: 'text/html' });
								let link = document.createElement('a');
								link.setAttribute('target', '_blank');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteAsignacionComisiones.'+self.formatoAsignacionesComision;
								link.click()
								self.loading = false;
							}).catch(function (error) {
						console.log(error);
						alertify.error("Error Descargando archivo.....", 5);
						self.loading = false;
					});
				}else{
					alertify.warning("No ha seleccionado un vendedor válida.....", 5);
				}
			},



			seleccionarFechaCorteComisionR4(date) {
				this.fechaCorteComisionR4 = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarFechaInicialComisionR4(date) {
				this.fechaInicialComisionR4 = moment(date).format("YYYY-MM-DD"); //
			},

			cambiarVendedorR4()
			{
				var self=this;
				if(self.todos_vendedoresR4){
					self.vendedor_estadocuentadetalladoR4 = {};
					self.vendedor_estadocuentadetalladoR4.id_vendedor = 0;
				}
			},
			seleccionarFechaInicioVentaDepartamento(date) {
				this.parametros_venta_departamento.fechaInicioVentaDepartamento = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarFechaFinalVentaDepartamento(date) {
				this.parametros_venta_departamento.fechaFinalVentaDepartamento = moment(date).format("YYYY-MM-DD"); //
			},
			seleccionarFechaInicioVentaZona(date) {
				this.parametros_venta_zona.fechaInicioVentaZona = moment(date).format("YYYY-MM-DD"); //
			},

			seleccionarFechaFinalVentaZona(date) {
				this.parametros_venta_zona.fechaFinalVentaZona = moment(date).format("YYYY-MM-DD"); //
			},

			cambiarDepartamento()
			{
				var self=this;
				if(self.parametros_venta_departamento.todos_departamentos){
					self.parametros_venta_departamento.departamento={id_departamento:0,descripcion:''};
					//self.parametros_venta_departamento.departamento.id_departamento = 0;
				} else
					{
						self.parametros_venta_departamento.departamento = self.parametros_venta_departamento.departamentos[9];
					}
			},
			cambiarZona()
			{
				var self=this;
				if(self.parametros_venta_zona.todas_zonas){
					self.parametros_venta_zona.zona={id_zona:0,descripcion:''};
					//self.parametros_venta_departamento.departamento.id_departamento = 0;
				} else
				{
					self.parametros_venta_zona.zona = self.parametros_venta_zona.zonas[9];
				}
			},

			descargarReporteComisiones() {
				var self=this;
				if(self.vendedor_estadocuentadetalladoR4.id_vendedor >= 0){
					self.loading=true;
					axios.post('inventario/facturas/reporte/comisiones',
							{
								fechaInicial: self.fechaInicialComisionR4,
								fechaFinal: self.fechaCorteComisionR4,
								extension:self.formatoAsignacionesComisionR4,
								id_vendedor:self.vendedor_estadocuentadetalladoR4.id_vendedor,
								agrupacion:self.tipoAgrupacionR4
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoAsignacionesComisionR4 === 'xls' ?
										blob = new Blob([data], { type: 'application/octet-stream' }) :
										self.formatoAsignacionesComisionR4 === 'pdf' ?
												blob = new Blob([data], { type: 'application/pdf' }):
												blob = new Blob([data], { type: 'text/html' });
								let link = document.createElement('a');
								link.setAttribute('target', '_blank');
								link.href = window.URL.createObjectURL(blob)
								link.download = self.tipoAgrupacionR4+self.formatoAsignacionesComisionR4;
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
			descargarReporteVentaPorDepartamento() {
				var self=this;
					self.loading=true;
					axios.post('ventas/venta-por-departamento/reporte',
							{
								extension:self.parametros_venta_departamento.formatoVentaDepartamentoMunicipio,
								id_departamento:self.parametros_venta_departamento.departamento.id_departamento,
								fechaInicial : self.parametros_venta_departamento.fechaInicioVentaDepartamento,
								fechaFinal : self.parametros_venta_departamento.fechaFinalVentaDepartamento
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.parametros_venta_departamento.formatoVentaDepartamentoMunicipio === 'xls' ?
										blob = new Blob([data], { type: 'application/octet-stream' }) :
										self.parametros_venta_departamento.formatoVentaDepartamentoMunicipio === 'pdf' ? blob = new Blob([data], { type: 'application/pdf' }):
												blob = new Blob([data], { type: 'text/html' });
								let link = document.createElement('a');
								link.setAttribute('target', '_blank');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteVentaPorDepartamento.'+self.parametros_venta_departamento.formatoVentaDepartamentoMunicipio;
								link.click()
								self.loading = false;
							}).catch(function (error) {
						console.log(error);
						alertify.error("Error Descargando archivo.....", 5);
						self.loading = false;
					});
			},
			descargarReporteVentaPorZona() {
				var self=this;
				self.loading=true;
				axios.post('ventas/venta-por-departamento/reporte',
						{
							extension:self.parametros_venta_zona.formatoVentaZona,
							id_zona:self.parametros_venta_zona.zona.id_zona,
							fechaInicial : self.parametros_venta_zona.fechaInicioVentaZona,
							fechaFinal : self.parametros_venta_zona.fechaFinalVentaZona
						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.parametros_venta_zona.formatoVentaZona === 'xls' ?
									blob = new Blob([data], { type: 'application/octet-stream' }) :
									self.parametros_venta_zona.formatoVentaZona === 'pdf' ? blob = new Blob([data], { type: 'application/pdf' }):
											blob = new Blob([data], { type: 'text/html' });
							let link = document.createElement('a');
							link.setAttribute('target', '_blank');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'ReporteVentaPorZona.'+self.parametros_venta_zona.formatoVentaZona;
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
			},
			nuevo(){
				var self = this
				comisiones_asignaciones.nuevo({}, data => {
					self.parametros_venta_departamento.departamentos = data.departamentos;
					//self.parametros_venta_departamento.departamento = self.departamentos[9];
					self.parametros_venta_departamento.municipios = self.parametros_venta_departamento.departamento.municipios_departamento;
					//self.form.municipio= self.municipios[5]
					self.parametros_venta_zona.zonas = data.zonas;
				}, err => {
					console.log(err)
				})
			},

		},
		mounted() {
			this.cargarListaReportes();
			this.nuevo();
		}
    }
</script>
<style>
	.check-label2 {
		margin-top: 40px;
	}

	.btn-imprimir {
		margin-top: 33px;
	}
</style>

