<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Balanza Comprobación</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> Balanza comprobación</div>
			</div>
			<div class="row">
					<div class="col-sm-3">
						<div class="form-group">
							<label class="label-search">Tipos Cuentas:</label>
							<v-select
									:options="niveles_cuenta"
									label="descripcion"
									v-model="filter.nivel_cuenta">
							</v-select>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="form-group">
							<label class="label-search">Rango de fechas:</label>
							<datepicker :disabledDates="disabledDates" :format="format" :language="es" @selected="onDateSelect" placeholder="Fecha Inicial" v-model="fecha_inicialx"></datepicker>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="form-group">
							<label class="label-search">Rango de fechas:</label>
							<datepicker :disabledDates="disabledDates" :format="format" :language="es" @selected="onDateSelect2" placeholder="Fecha Final" v-model="fecha_finalx"></datepicker>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="form-group">
							<button @click="obtenerBalanzaComprobacion" class="btn btn-info btn-generar"><i class="pe-7s-search"></i> Generar</button>
						</div>
					</div>
			</div>
		</div>

		<div class="invoice-wrapper">
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
							<td class="text-center" style="width: 10%">{{ cuentaContable.debe_anterior | formatMoney(2)}}</td>
							<td class="text-center" style="width: 10%">{{ cuentaContable.haber_anterior | formatMoney(2)}}</td>
							<!--<td class="text-center" style="width: 10%">{{ cuentaContable.saldo_anterior | formatMoney(2)}}</td>-->
							<td class="text-center" style="width: 15%">{{ cuentaContable.debe | formatMoney(2)}}</td>
							<td class="text-center" style="width: 15%">{{ cuentaContable.haber | formatMoney(2)}}</td>
							<td class="text-center" style="width: 15%">{{ Number(cuentaContable.debe_anterior)+Number(cuentaContable.debe) | formatMoney(2)}}</td>
							<td class="text-center" style="width: 15%">{{ Number(cuentaContable.haber_anterior)+Number(cuentaContable.haber) | formatMoney(2)}}</td>
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
	</div>
</template>

<script type="text/ecmascript-6">
	import reportes_financieros from '../../api/reportes_financieros'
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import nivel_cuenta from '../../api/niveles_cuentas'
	var fecha_actual = new Date();
	fecha_actual.setHours(23,59,59,999);
export default {
			data() {
			return {
				descargando:false,
				niveles_cuenta: [],
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
						fecha_inicial:'Invalid date',//moment(new Date()).format("YYYY-MM-DD"),
						fecha_final:'Invalid date',//moment(new Date()).format("YYYY-MM-DD"),
				},
				cuentasContables: [],
				errorMessages:[],
				total: 0
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
				reportes_financieros.obtenerBalanzaComprobacion(self.filter, data => {
					data.forEach((cuenta, key) => {
						data[key].mostrar = 0;
						//console.log(JSON.parse(data[key].detalle_sucursales));
						data[key].detalle_sucursales = JSON.parse(data[key].detalle_sucursales);
					});
					self.cuentasContables = data;
				}, err => {
					//console.log(err)
					alertify.error('Rango de Fechas no válido')
				})
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
			/*downloadItem (url) {
			    	if(!this.descargando){
						this.descargando=true;
				alertify.success("Descargando datos, espere un momento.....",5);
				axios.get(url, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'Reporte_Accesos.pdf';
							link.click()
							this.descargando=false;
						})
					}else{
						alertify.warning("Espere a que se complete la descarga anterior",5);
					}
			},*/
		},

	mounted() {
		this.obtenerTodosNivelesCuenta();
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