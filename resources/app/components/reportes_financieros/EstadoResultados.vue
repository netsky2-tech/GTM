<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Estado de Resultados</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> Estado resultado</div>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<div class="form-group">
						<label class="label-search">Periodo Actual:</label>
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
						<label class="label-search">Mes Actual:</label>
						<v-select
								:options="periodos_meses"
								label="descripcion"
								v-model="filter.mes"
								v-on:input="obtenerDiasMes()"
						></v-select>
					</div>
				</div>


				<div class="col-sm-2">
					<div class="form-group">
						<label class="label-search">Periodo Anterior:</label>
						<v-select
								:options="periodos_fiscales1"
								label="periodo"
								v-model="filter.periodo1"
								v-on:input="obtenerMesesPeriodo1()"
						></v-select>
					</div>
				</div>

				<div class="col-sm-3">
					<div class="form-group">
						<label class="label-search">Mes Anterior:</label>
						<v-select
								:options="periodos_meses1"
								label="descripcion"
								v-model="filter.mes1"
								v-on:input="obtenerDiasMes1()"
						></v-select>
					</div>
				</div>

				<div class="col-sm-2">
					<div class="form-group">
						<button @click="obtenerEstadoResultados" class="btn btn-info btn-generar"><i class="pe-7s-search"></i> Generar</button>
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
					<div class="company-address"><strong>Estado de Resultados al {{fecha_finalx}}</strong></div>
				</div>

			</div>
			<div class="invoice-body">
				<table class="table invoice-table">
					<thead>
					<tr>
						<th class="text-left table-number">Cuenta</th>
						<th class="text-left table-number">Operacion</th>
						<th class="text-center table-number">Saldo Actual</th>
					</tr>
					</thead>
					<tbody>
					<template v-for="(cuentaContable,key) in cuentasContables">
						<tr :key="cuentaContable.id_cierre_mensual">
						    <td class="text-left" style="width: 15%">{{ cuentaContable.nombre }}</td>
							<td class="text-center" v-if="cuentaContable.signo"></td>
							<td class="text-center" v-if="!cuentaContable.signo">( - )</td>
						<td class="text-center" style="width: 10%">{{ (Math.abs(Number(cuentaContable.saldox))) | formatMoney(2)}}</td>
					</tr>

					</template>
					</tbody>
					<tfoot>
					<tr>
						<td class="text-right" colspan="2"><strong>RESULTADO DESPUÉS DEL I.S.R.</strong></td>
						<td class="text-center"><strong>C$ {{total_perdida_ganancia | formatMoney(2)}}</strong></td>
					</tr>
					</tfoot>
				</table>
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
				formato:'pdf',
				periodos_fiscales:[],
				periodos_fiscales1:[],
				periodos_meses:[],
				periodos_meses1:[],
				fecha_finalx:'',
				fecha_finalx1:'',
				filter: {
					periodo:"",
					mes:"",
					periodo1:"",
					mes1:""
				},
				cuentasContables: [],
				errorMessages:[],
				total: 0
			}
		},

	computed: {
		total_perdida_ganancia() {
			return this.cuentasContables.reduce((carry, item) => {
				return (carry + Number(item.saldo_signo))
			}, 0)
		},
	},
		methods: {
			descargarReporte() {
				var self=this;
				self.loading=true;
				axios.post('contabilidad/estados-financieros/estado-resultado/reporte',
						{
							id_periodox: self.filter.periodo.id_periodo_fiscal,
							mesx:self.filter.mes.mes,
							id_mesx:self.filter.mes.id_periodo_mes,
							id_periodox1: self.filter.periodo1.id_periodo_fiscal,
							mesx1:self.filter.mes1.mes,
							id_mesx1:self.filter.mes1.id_periodo_mes,
							id_nivel_cuenta:3,
							extension:self.formato

						}, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							self.formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'EstadoResultado.'+self.formato;
							link.click()
							self.loading = false;
						}).catch(function (error) {
					console.log(error);
					alertify.error("Error Descargando archivo.....", 5);
					self.loading = false;
				});
			},
			obtenerEstadoResultados() {
				var self = this
				reportes_financieros.obtenerEstadoResultados(self.filter, data => {
					self.cuentasContables = data;
				}, err => {
					//console.log(err)
					alertify.error('Rango de Fechas no válido')
				})
			},
			obtenerMesesPeriodo() {
				var self = this;
				self.filter.mes = null;
				if(self.periodos_fiscales.meses_periodo)
					self.periodos_meses = self.periodos_fiscales.meses_periodo
			},
			obtenerMesesPeriodo1() {
				var self = this;
				self.filter.mes1 = null;
				self.periodos_meses1 = null;
				if(self.periodos_fiscales1.meses_periodo){
					self.periodos_meses1 = self.periodos_fiscales1.meses_periodo
				}
			},
			obtenerDiasMes() {
				var self = this;
				self.fecha_finalx =  moment(new Date(self.filter.periodo.periodo,
						self.filter.mes.mes-1, self.daysInMonth(self.filter.mes.mes,
								self.filter.periodo.periodo))).format("DD/MM/YYYY");
			},
			obtenerDiasMes1() {
				var self = this;
				self.fecha_finalx1 =  moment(new Date(self.filter.periodo1.periodo,
						self.filter.mes1.mes-1, self.daysInMonth(self.filter.mes1.mes,
								self.filter.periodo1.periodo))).format("DD/MM/YYYY");
			},

			daysInMonth (month, year) {
				return new Date(year, month, 0).getDate();
			},obtenerTodosPeriodos() {
				let self = this;
				periodo.obtenerTodos(
						data => {
							self.periodos_fiscales = data.periodos;
							self.filter.periodo=data.periodos[0];
							self.periodos_meses = data.periodos[0].meses_periodo;
							self.filter.mes=data.periodos[0].meses_periodo[0];

							self.periodos_fiscales1 = data.periodos;
							self.filter.periodo1=data.periodos[0];
							self.periodos_meses1 = data.periodos[0].meses_periodo;
							self.filter.mes1=data.periodos[0].meses_periodo[0];

							self.fecha_finalx =moment(new Date(self.filter.periodo.periodo,
									self.filter.mes.mes-1, self.daysInMonth(self.filter.mes.mes,
											self.filter.periodo.periodo))).format("DD/MM/YYYY");

							self.fecha_finalx1 =moment(new Date(self.filter.periodo1.periodo,
									self.filter.mes1.mes-1, self.daysInMonth(self.filter.mes1.mes,
											self.filter.periodo1.periodo))).format("DD/MM/YYYY");
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

<style lang="scss" scoped>
    .search-field {
    	min-width: 120px;
    }

		.detail-link {
			width: 60px;
			position: relative;
			.link {
				width: 10px;
				height: 4px;
				margin-left: auto;
				margin-right: auto;
				cursor: pointer;
				margin-top: 8px;
				background-color: #595959;
				border: 1px solid #595959;
				&:before {
					content: "";
					width: 4px;
					height: 10px;
					left: 0px;
					right: 0px;
					cursor: pointer;
					margin: 0px auto;
					margin-top: -4px;
					position: absolute;
					background-color: #595959;
					border: 1px solid #595959;
				}
			}
		}

	.btn-generar
	{
		margin-top: 33px;
	}
</style>