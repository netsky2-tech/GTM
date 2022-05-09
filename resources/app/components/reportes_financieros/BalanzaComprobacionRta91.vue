<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Balanza Comprobación</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> Balanza comprobación</div>
			</div>
			<div class="row">
					<div class="col-sm-4 col-md-2">
						<div class="form-group">
							<label class="label-search">Tipos Cuentas:</label>
							<v-select
									:options="niveles_cuenta"
									label="descripcion"
									v-model="filter.nivel_cuenta">
							</v-select>
						</div>
					</div>
				<div class="col-sm-4 col-md-2">
					<div class="form-group">
						<label class="label-search">Año:</label>
						<v-select
								label="periodo"
								v-model="filter.periodo"
								:options="periodos"
								v-on:input="obtenerMeses"
						></v-select>
					</div>
				</div>
				<div class="col-sm-4 col-md-2">
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
					<div class="col-sm-4 col-md-2">
						<div class="form-group">
							<label class="label-search">Rango de fechas:</label>
							<datepicker :disabledDates="disabledDates" :format="format" :language="es" @selected="onDateSelect" placeholder="Fecha Inicial" v-model="fecha_inicialx"></datepicker>
						</div>
					</div>
					<div class="col-sm-4 col-md-2">
						<div class="form-group">
							<label class="label-search">Rango de fechas:</label>
							<datepicker :disabledDates="disabledDates" :format="format" :language="es" @selected="onDateSelect2" placeholder="Fecha Final" v-model="fecha_finalx"></datepicker>
						</div>
					</div>
					<div class="col-sm-4 col-md-2">
						<div class="form-group">
							<button @click="obtenerBalanzaComprobacion" class="btn btn-info btn-generar"><i class="pe-7s-search"></i> Generar</button>
						</div>
					</div>
			</div>


			<div class="row">
			<div class="col-sm-3">
				<div class="form-group">
					<label> Formato de los saldos:</label>
					<select @change="cuentasContables=''" class="form-control" v-model.number="tipo_reporte">
						<option value="1">Consolidados</option>
						<option value="2">Detallados</option>
					</select>
				</div>
			</div>

				<div class="col-sm-3">
					<div class="form-group">
						<label> Formato impresión:</label>
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

		<div v-if="tipo_reporte===1" class="invoice-wrapper">
			<div class="invoice-info">
				<div class="company-info">
					<div class="company-name">LUBRICANTES DE NICARAGUA, S. A.</div>
					<div class="company-address">De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua</div>
					<div class="company-phone">Balanza de Comprobación</div>
				</div>

			</div>
			<div class="invoice-body">
				<table class="table invoice-table">
					<thead>
					<!--<tr>
						<th colspan="3"></th>
						<th colspan="2" class="text-center table-number">Saldo Anterior</th>
						<th colspan="2" class="text-center table-number">Movimientos</th>
						<th colspan="2" class="text-center table-number">Saldo Final</th>
					</tr>-->
					<tr>
						<th class="text-center table-number">Código Cuenta</th>
						<th class="text-left table-number">Nombre Cuenta</th>
						<th class="text-center table-number">Saldo Anterior</th>
						<th class="text-center table-number">Debe</th>
						<th class="text-center table-number">Haber</th>
						<th class="text-center table-number">Saldo Final</th>
					</tr>
					</thead>
					<tbody>
					<template v-for="(cuentaContable,key) in cuentasContables">
						<tr :key="cuentaContable.id_cierre_mensual">
						    <td class="text-center" style="width: 15%">{{ cuentaContable.cta_contable }}</td>
							<td class="text-left" style="width: 30%" v-if="cuentaContable.id_nivel_cuenta === 1">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:2em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 2">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:4em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 3">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:6em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 4">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:8em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 5">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:10em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 6">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:12em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 7">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-center" style="width: 10%">{{ cuentaContable.saldo_anterior | formatMoney(2)}}</td>
							<td class="text-center" style="width: 15%">{{ cuentaContable.debe | formatMoney(2)}}</td>
							<td class="text-center" style="width: 15%">{{ cuentaContable.haber | formatMoney(2)}}</td>
							<td class="text-center" style="width: 10%">{{ Number(cuentaContable.saldo_anterior)+Number(cuentaContable.saldox) | formatMoney(2)}}</td>
							</tr>

					</template>
					</tbody>
					<tfoot>
					<!--<tr>
						<td class="text-right" colspan="3"><strong>Total Transacciones</strong></td>
						<td class="text-center"><strong>C$ {{total_debe | formatMoney(2)}}</strong></td>
						<td class="text-center"><strong>C$ {{total_haber | formatMoney(2)}}</strong></td>
						<td class="text-center"><strong>C$ {{total_debe | formatMoney(2)}}</strong></td>
						<td class="text-center"><strong>C$ {{total_haber | formatMoney(2)}}</strong></td>
						<td class="text-center"><strong>C$ {{total_debe | formatMoney(2)}}</strong></td>
						<td class="text-center"><strong>C$ {{total_haber | formatMoney(2)}}</strong></td>
					</tr>-->
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



		<div v-if="tipo_reporte===2" class="invoice-wrapper">
			<div class="invoice-info">
				<div class="company-info">
					<div class="company-name">LUBRICANTES DE NICARAGUA, S. A.</div>
					<div class="company-address">De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua</div>
					<div class="company-phone">Balanza de Comprobación</div>
				</div>

			</div>
			<div class="invoice-body">
				<table class="table invoice-table">
					<thead>
					<tr>
						<th colspan="3"></th>
						<th colspan="2" class="text-center table-number">Saldo Anterior</th>
						<th colspan="2" class="text-center table-number">Movimientos</th>
						<th colspan="2" class="text-center table-number">Saldo Final</th>
					</tr>
					<tr>
						<th></th>
						<th class="text-center table-number">Código Cuenta</th>
						<th class="text-left table-number">Nombre Cuenta</th>
						<th class="text-center table-number">Debe</th>
						<th class="text-center table-number">Haber</th>
						<!--<th class="text-center table-number">saldo</th>-->
						<th class="text-center table-number">Debe</th>
						<th class="text-center table-number">Haber</th>
						<th class="text-center table-number">Debe</th>
						<th class="text-center table-number">Haber</th>
						<!--<th class="text-center table-number">saldo</th>-->
					</tr>
					</thead>
					<tbody>
					<template v-for="(cuentaContable,key) in cuentasContables">
						<tr :key="cuentaContable.id_cierre_mensual">
							<td class="detail-link" style="padding-left: 12px; width: 5%">
								<div @click="mostrarCentros(key)" class="link" v-if="[4,5,6].indexOf(cuentaContable.id_tipo_cuenta) >= 0"></div>
							</td>
							<td class="text-center" style="width: 15%">{{ cuentaContable.cta_contable }}</td>
							<td class="text-left" style="width: 30%" v-if="cuentaContable.id_nivel_cuenta === 1">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:2em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 2">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:4em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 3">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:6em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 4">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:8em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 5">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:10em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 6">{{ cuentaContable.nombre_cuenta }}</td>
							<td class="text-left" style="padding-left:12em; width: 30%" v-if="cuentaContable.id_nivel_cuenta === 7">{{ cuentaContable.nombre_cuenta }}</td>

							<template v-if="[2,3,4].indexOf(cuentaContable.id_tipo_cuenta) >= 0" >
								<td class="text-center" style="width: 10%">-</td>
								<td class="text-center" style="width: 10%">{{ cuentaContable.saldo_anterior | formatMoney(2)}}</td>
							</template>
							<template v-else >
								<td class="text-center" style="width: 10%">{{ cuentaContable.saldo_anterior | formatMoney(2)}}</td>
								<td class="text-center" style="width: 10%">-</td>
							</template>

							<!--<td class="text-center" style="width: 10%">{{ cuentaContable.saldo_anterior | formatMoney(2)}}</td>-->
							<td class="text-center" style="width: 15%">{{ cuentaContable.debe | formatMoney(2)}}</td>
							<td class="text-center" style="width: 15%">{{ cuentaContable.haber | formatMoney(2)}}</td>
							<template v-if="[2,3,4].indexOf(cuentaContable.id_tipo_cuenta) >= 0" >
							<td class="text-center" style="width: 15%">-</td>
								<td class="text-center" style="width: 15%">{{ Number(cuentaContable.saldo_anterior)+Number(cuentaContable.saldox) | formatMoney(2)}}</td>
							</template>
							<template v-else >
								<td class="text-center" style="width: 15%">{{ Number(cuentaContable.saldo_anterior)+Number(cuentaContable.saldox) | formatMoney(2)}}</td>
								<td class="text-center" style="width: 15%">-</td>
							</template>
							<!--<td class="text-center" style="width: 10%">{{ Number(cuentaContable.saldo_anterior)+Number(cuentaContable.saldox) | formatMoney(2)}}</td>-->
						</tr>

						<tr :key="cuentaContable.id_cuenta_contable" v-if="cuentaContable.mostrar">
							<td colspan="10">
								<table class="table invoice-table">
									<thead>
									<tr>
										<th class="text-left table-number">Descripción Centro Costo</th>
										<th></th>
										<th class="text-center table-number">Debe</th>
										<th class="text-center table-number">Haber</th>
										<th></th>
									</tr>
									</thead>
									<tbody>
									<tr
											:key="detalle_sucursal.cta_contable"
											v-for="detalle_sucursal in cuentaContable.detalle_sucursales">
										<td class="text-left" style="width: 50%">{{ detalle_sucursal.descripcion }}</td>
										<td style="width: 10%"></td>
										<td class="text-center" style="width: 15%">{{ detalle_sucursal.debex }}</td>
										<td class="text-center" style="width: 15%">{{ detalle_sucursal.haberx }}</td>
										<td style="width: 10%"></td>
									</tr>
									</tbody>
								</table>
							</td>
						</tr>

					</template>
					</tbody>
					<tfoot>
					<!--<tr>
						<td class="text-right" colspan="3"><strong>Total Transacciones</strong></td>
						<td class="text-center"><strong>C$ {{total_debe | formatMoney(2)}}</strong></td>
						<td class="text-center"><strong>C$ {{total_haber | formatMoney(2)}}</strong></td>
						<td class="text-center"><strong>C$ {{total_debe | formatMoney(2)}}</strong></td>
						<td class="text-center"><strong>C$ {{total_haber | formatMoney(2)}}</strong></td>
						<td class="text-center"><strong>C$ {{total_debe | formatMoney(2)}}</strong></td>
						<td class="text-center"><strong>C$ {{total_haber | formatMoney(2)}}</strong></td>
					</tr>-->
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
		<template v-if="loading">
			<BlockUI :message="msg" :url="url"></BlockUI>
		</template>

	</div>
</template>

<script type="text/ecmascript-6">
	import reportes_financieros from '../../api/reportes_financieros'
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import nivel_cuenta from '../../api/niveles_cuentas'
	import loadingImage from "../../assets/images/block50.gif";
	import caja from "../../api/caja_chica";
	var fecha_actual = new Date();
	fecha_actual.setHours(23,59,59,999);
export default {
			data() {
			return {
				tipo_reporte:1,
				loading: true,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,
				niveles_cuenta: [],
				periodos: [],
				meses:[],
				mes:'',
				formato:'pdf',
				disabledDates: {
				to: '', // Disable all dates up to specific date
				from: fecha_actual, // Disable all dates after specific date
				},
				 es: es,
				  format: "d MMMM yyyy",
				  fecha_inicialx:'',//new Date(),
				  fecha_finalx:'',//new Date(),
				filter: {
					nivel_cuenta: "",
					periodo:"",
						fecha_inicial:'Invalid date',//moment(new Date()).format("YYYY-MM-DD"),
						fecha_final:'Invalid date',//moment(new Date()).format("YYYY-MM-DD"),
				},
				cuentasContables: [],

				errorMessages:[],
				total: 0,
				primer_dia_periodo:moment(new Date()).format("YYYY-MM-DD"),
				ultimo_dia_periodo:moment(new Date()).format("YYYY-MM-DD"),
			}
		},
	computed: {
		total_debe() {
			return this.cuentasContables.reduce((carry, item) => {
				return (carry + (item.id_nivel_cuenta ===2 ? Number(item.debe) : 0))
			}, 0)
		},
		total_haber() {
			return this.cuentasContables.reduce((carry, item) => {
				return (carry + (item.id_nivel_cuenta ===2 ? Number(item.haber) : 0))
			}, 0)
		},
	},
		methods: {
			obtenerMeses(){
				let self = this;
				self.mes = [];
				self.meses = self.filter.periodo.meses_periodo
				self.mes = self.meses[0]
			},
			cambiarFechas(){

				let self = this;

				self.fecha_inicialx='';
				self.fecha_finalx='';

				self.disabledDates.to = new Date(self.filter.periodo.periodo, self.mes.mes-1, 1,0,0,0);
				self.disabledDates.from = new Date(self.mes.ultimo_dia_mes+' 23:59');
				//self.disabledDates.from.setTime( self.disabledDates.from.getTime() + 86400000 );
				//self.fechax1 = new Date(self.form.anio.periodo, self.form.mes.mes-1, 1);
				self.filter.fecha_inicial = moment(self.disabledDates.to).format("YYYY-MM-DD"); //
				self.filter.fecha_final= moment(self.disabledDates.from).format("YYYY-MM-DD"); //*/

				self.fecha_inicialx = self.disabledDates.to;
				self.fecha_finalx = self.disabledDates.from;

			},
			mostrarCentros(key) {
				console.log(key);
				console.log("mostrar centro");
				if (this.cuentasContables[key].mostrar) {
					this.cuentasContables[key].mostrar = 0;
				} else {
					this.cuentasContables[key].mostrar = 1;
				}
				//console.log(this.cuentasContables[key].mostrar);
			},
          /*seleccionarUsuario(e) {
                const client = e.target.value;
				this.usuarioBusqueda = client;
            },*/

			    onDateSelect(date) {
				this.filter.fecha_inicial = moment(date).format("YYYY-MM-DD"); //
				},
				onDateSelect2(date) {
				this.filter.fecha_final = moment(date).format("YYYY-MM-DD"); //
				},
			obtenerBalanzaComprobacion() {
				var self = this

				if(self.tipo_reporte===1){
					self.loading=true;
				reportes_financieros.obtenerBalanzaComprobacionRta91(self.filter, data => {
					/*data.forEach((cuenta, key) => {
						data[key].mostrar = 0;
						//console.log(JSON.parse(data[key].detalle_sucursales));
						data[key].detalle_sucursales = JSON.parse(data[key].detalle_sucursales);
					});*/
					self.cuentasContables = data;
					self.loading=false;
				}, err => {
					//console.log(err)
					alertify.error('Rango de Fechas no válido')
				})
					}
				if(self.tipo_reporte===2) {
					self.loading=true;
					reportes_financieros.obtenerBalanzaComprobacion(self.filter, data => {
						data.forEach((cuenta, key) => {
							data[key].mostrar = 0;
							//console.log(JSON.parse(data[key].detalle_sucursales));
							data[key].detalle_sucursales = JSON.parse(data[key].detalle_sucursales);
						});
						self.cuentasContables = data;
						self.loading=false;
					}, err => {
						//console.log(err)
						alertify.error('Rango de Fechas no válido')
					})
				}
			},
			obtenerDependenciasBalanza(){
				var self = this;
				self.loading = true;
				reportes_financieros.obtenerDependenciasBalanza({}, data => {
					self.periodos = data.periodos;


					self.niveles_cuenta = data.niveles_cuenta;
					self.filter.nivel_cuenta=self.niveles_cuenta[2];
					self.filter.periodo=self.periodos[0];
					self.meses = self.filter.periodo.meses_periodo;
					self.mes = self.meses[0];
					self.cambiarFechas();
					self.loading=false;

				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			descargarReporte() {
				var self=this;
				self.loading=true;
				axios.post('contabilidad/estados-financieros/balanza-comprobacion/reporte',
						{
							id_periodox: self.filter.periodo.id_periodo_fiscal,
							id_mesx:self.mes.id_periodo_mes,
							tipo_reporte: self.tipo_reporte,
							id_nivel_cuenta:self.filter.nivel_cuenta.id_nivel_cuenta,
							extension:self.formato,
							fechaInicio : self.filter.fecha_inicial,
							fechaFinal : self.filter.fecha_final,
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
		},

	mounted() {
		this.obtenerDependenciasBalanza();
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