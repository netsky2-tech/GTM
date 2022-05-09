<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Estado de Situación Financiera</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> Estado de Situación Financiera</div>
			</div>
			<div class="row">

				<div class="col-sm-3">
					<div class="form-group">
						<label class="label-search">Tipos Cuentas:</label>
						<v-select
								:disabled="true"
								:options="niveles_cuenta"
								label="descripcion"
								v-model="filter.nivel_cuenta">
						</v-select>
					</div>
				</div>

				<div class="col-sm-3">
					<div class="form-group">
						<label class="label-search">Periodo:</label>
						<v-select
								:options="periodos_fiscales"
								label="periodo"
								v-model="filter.periodo"
								v-on:input="obtenerMesesPeriodo()"
						></v-select>
					</div>
				</div>

				<div class="col-sm-3">
					<div class="form-group">
						<label class="label-search">Mes:</label>
						<v-select
								:options="periodos_meses"
								label="descripcion"
								v-model="filter.mes"
								v-on:input="obtenerDiasMes()"
						></v-select>
					</div>
				</div>

				<div class="col-sm-3">
					<div class="form-group">
						<button @click="obtenerBalanceGeneral" class="btn btn-info btn-generar"><i class="pe-7s-search"></i> Generar</button>
					</div>
				</div>


				<div class="col-sm-3">
					<div class="form-group">
						<label> Formato:</label>
						<select class="form-control" v-model="formato">
							<option value="pdf">PDF</option>
							<option value="xls">Excel</option>
						</select>
					</div>
				</div>


				<div class="col-sm-3">
					<button
							type="button"
							class="btn btn-primary btn-generar"
							@click="descargarReporte"
					>Imprimir
					</button>
				</div>


			</div>
		</div>

		<div class="invoice-wrapper">
			<div class="invoice-info">
				<div class="company-info">
					<div class="company-name">LUBRICANTES DE NICARAGUA, S. A.</div>
					<div class="company-address">De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua</div>
					<div class="company-address"><strong>Estado de Situación Financiera al {{fecha_finalx}}</strong></div>
				</div>

			</div>
			<div class="invoice-body">
				<div class="row">
					<div class="col-md-12">
				<div class="row">
				<div class="col-md-6">
				<table class="table invoice-table">
					<thead>
					<tr>
						<th class="text-center table-number">Cuenta</th>
						<th class="text-left table-number">Nombre Cuenta</th>
						<th class="text-center table-number">Saldo</th>
					</tr>
					</thead>
					<tbody>
					<tr :key="cuentaContable.id_cierre_mensual" v-for="cuentaContable in cuentasContablesActivos">
						<td class="text-center" v-if="cuentaContable.id_nivel_cuenta === 2" ><strong>{{ cuentaContable.cta_contable }}</strong></td>
						<td class="text-center" v-if="cuentaContable.id_nivel_cuenta === 3">{{ cuentaContable.cta_contable }}</td>
						<td class="text-left" v-if="cuentaContable.id_nivel_cuenta === 2" ><strong>{{ cuentaContable.nombre_cuenta }}</strong></td>
						<td class="text-left" style="padding-left:2em" v-if="cuentaContable.id_nivel_cuenta === 3">{{ cuentaContable.nombre_cuenta }}</td>
						<td class="text-center" v-if="cuentaContable.id_nivel_cuenta === 2" ><strong>{{ Number(cuentaContable.saldox) | formatMoney(2)}}</strong></td>
						<td class="text-center" v-if="cuentaContable.id_nivel_cuenta === 3">{{ Number(cuentaContable.saldox) | formatMoney(2)}}</td>
					</tr>
					</tbody>
					<tfoot>
					<!--<tr>
						<td>Total</td>
						<td class="text-right" colspan="2">$</td>
					</tr>-->
					</tfoot>
				</table>
				</div>

				<div class="col-md-6">
				<table class="table invoice-table">
					<thead>
					<tr>
						<th class="text-center table-number">Cuenta</th>
						<th class="text-left table-number">Nombre Cuenta</th>
						<th class="text-center table-number">Saldo</th>
					</tr>
					</thead>
					<tbody>
					<tr :key="cuentaContable.id_cierre_mensual" v-for="cuentaContable in cuentasContablesPasivosCapital">
						<td class="text-center" v-if="cuentaContable.id_nivel_cuenta === 2" ><strong>{{ cuentaContable.cta_contable }}</strong></td>
						<td class="text-center" v-if="cuentaContable.id_nivel_cuenta === 3">{{ cuentaContable.cta_contable }}</td>
						<td class="text-left" v-if="cuentaContable.id_nivel_cuenta === 2" ><strong>{{ cuentaContable.nombre_cuenta }}</strong></td>
						<td class="text-left" style="padding-left:2em" v-if="cuentaContable.id_nivel_cuenta === 3">{{ cuentaContable.nombre_cuenta }}</td>
						<td class="text-center" v-if="cuentaContable.id_nivel_cuenta === 2" ><strong>{{ Number(cuentaContable.saldox) | formatMoney(2)}}</strong></td>
						<td class="text-center" v-if="cuentaContable.id_nivel_cuenta === 3">{{ Number(cuentaContable.saldox) | formatMoney(2)}}</td>
					</tr>
					</tbody>
					<tfoot>
					<tr>
						<!--<th class="text-center table-number"></th>
						<th class="text-left table-number"><strong>Total Activos</strong></th>
						<th class="text-center table-number"><strong>C$ {{total_pasivos_capital | formatMoney(2)}}</strong></th>-->
					</tr>
					</tfoot>
				</table>
				</div>
				</div>

						<div class="row">
							<div class="col-md-6">
								<table class="table invoice-table">
									<thead>
									<tr>
										<th class="text-right table-number"><strong>Total Activos</strong></th>
										<th class="text-right table-number"><strong>C$ {{total_activos | formatMoney(2)}}</strong></th>
									</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
							<div class="col-md-6">
								<table class="table invoice-table">
									<thead>
									<tr>
										<th class="text-right table-number"><strong>Total Pasivos + Capital</strong></th>
										<th class="text-right table-number"><strong>C$ {{total_pasivos_capital | formatMoney(2)}}</strong></th>
									</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
						</div>


					</div>
				</div>
				<!--<div class="invoice-terms">
					<div class="invoice-terms-title">
						Terms and Conditions
					</div>
					<div class="invoice-terms-content">
						Should be paid as soon as received, otherwise a 20% penalty fee is applied
					</div>
				</div>-->
			</div>
			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
			<!--<div class="invoice-footer">
				<div class="row">
					<div class="col-md-6">
						<span class="company-name">nomber company</span>
					</div>
					<div class="col-md-6 text-right">
						<span class="company-email-phone">email phone</span>
					</div>
				</div>
			</div>-->
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import reportes_financieros from '../../api/reportes_financieros'
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import nivel_cuenta from '../../api/niveles_cuentas'
	import periodo from '../../api/periodos'
	import loadingImage from "../../assets/images/block50.gif";

	var fecha_actual = new Date();
	fecha_actual.setHours(23,59,59,999);
export default {
			data() {
			return {
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,
				niveles_cuenta: [],
				periodos_fiscales:[],
				periodos_meses:[],
				formato:'pdf',
				 es: es,
				  format: "d MMMM yyyy",
				  fecha_inicialx:'',
				  fecha_finalx:'',
				filter: {
					nivel_cuenta: "",
					periodo:"",
					mes:""
				},
				cuentasContablesActivos: [],
				cuentasContablesPasivosCapital: [],
				total: 0
			}
		},
	computed: {
		total_activos() {
			return this.cuentasContablesActivos.reduce((carry, item) => {
				return (carry + (item.id_nivel_cuenta ===2 ? Number(item.saldox) : 0))

			}, 0)
		},
		total_pasivos_capital() {
			return this.cuentasContablesPasivosCapital.reduce((carry, item) => {
				return (carry + (item.id_nivel_cuenta ===2 ? Number(item.saldox) : 0))
			}, 0)
		},
			},
		methods: {
			descargarReporte() {
				var self=this;
				self.loading=true;
				axios.post('contabilidad/estados-financieros/balance-general/reporte',
						{
							id_periodox: self.filter.periodo.id_periodo_fiscal,
							mesx:self.filter.mes.mes,
							id_mesx:self.filter.mes.id_periodo_mes,
							id_nivel_cuenta:3,
						    extension:self.formato

						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'ReporteSituacionFinanciera.'+self.formato;
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
				self.filter.mes = null;
				if(self.periodos_fiscales.meses_periodo)
					self.periodos_meses = self.periodos_fiscales.meses_periodo
			},
			obtenerDiasMes() {
				var self = this;
				self.fecha_finalx =  moment(new Date(self.filter.periodo.periodo,
						self.filter.mes.mes-1, self.daysInMonth(self.filter.mes.mes,
								self.filter.periodo.periodo))).format("DD/MM/YYYY");
			},

			daysInMonth (month, year) {
				return new Date(year, month, 0).getDate();
				},
	/* onDateSelect(date) {
     this.filter.fecha_inicial = moment(date).format("YYYY-MM-DD"); //
     },
     onDateSelect2(date) {
     this.filter.fecha_final = moment(date).format("YYYY-MM-DD"); //
     },*/
			obtenerBalanceGeneral() {
				var self = this
				self.loading=true;
				reportes_financieros.obtenerBalanceGeneral(self.filter, data => {
					self.cuentasContablesActivos = data.activos;
					self.cuentasContablesPasivosCapital = data.pasivo_capital;
					self.loading=false;
				}, err => {
					console.log(err)
				})
			},
			obtenerTodosPeriodos() {
				let self = this;
				periodo.obtenerTodos(
						data => {
							self.periodos_fiscales = data.periodos;
							self.filter.periodo=data.periodos[0];
							self.periodos_meses = data.periodos[0].meses_periodo;
							self.filter.mes=data.periodos[0].meses_periodo[0];
							self.fecha_finalx =moment(new Date(self.filter.periodo.periodo,
									self.filter.mes.mes-1, self.daysInMonth(self.filter.mes.mes,
											self.filter.periodo.periodo))).format("DD/MM/YYYY");
							this.loading=false;
						},
						err => {
							console.log(err);
						}
				);
			},
			obtenerTodosNivelesCuenta() {
				var self = this;
				nivel_cuenta.obtenerTodosNivelesCuenta(
						data => {
							self.niveles_cuenta = data;
							self.filter.nivel_cuenta=self.niveles_cuenta[1];
						},
						err => {
							console.log(err);
						}
				);
			},
		},

	mounted() {
		this.obtenerTodosNivelesCuenta();
		this.obtenerTodosPeriodos();

	}

    }
</script>

<style lang="scss" scoped>
	.btn-generar
	{
		margin-top: 33px;
	}
</style>