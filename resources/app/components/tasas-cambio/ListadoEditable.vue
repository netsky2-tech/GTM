<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Tasas de cambio paralelas</div>
				<div class="box-description">Listado de tasas</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo caja y banco</router-link>> Tasas de cambio paralelas</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center form-inline">
					<!--<input type="file" accept="image/*" capture="camera" />-->
					<label class="label-search">Periodo:</label>
					<v-select
							label="periodo"
							v-model="filter.search.anio"
							:options="periodos"
							v-on:input="obtenerMeses"
					></v-select>

					<v-select :style="'margin-left: .5rem!important;'"
							label="descripcion"
							v-model="filter.search.mes"
							:options="meses"

					></v-select>

					<button class="btn btn-info" style = "margin-left: .5rem!important;"  @click="filter.page = 1; obtenerTasas();"><i class="pe-7s-search"></i> Buscar</button>
				</div>


				<div class="col-md-6 sm-text-center form-inline justify-content-end">
					<button
							:disabled="btnAction !== 'Actualizar TC Paralelas'"
							@click="actualizarTCParalelas"
							class="btn btn-primary"
							type="button"
					>{{ btnAction }}</button>
				</div>

			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th class="text-center table-number">Fecha</th>
							<th class="text-center table-number">Tasa de cambio Proyectada</th>
							<th class="text-center table-number">Modificada</th>
							<th class="text-center table-number">Deshacer</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(tasa, index) in tasas" :key="tasa.id_tasa_cambio">
							<td class="text-center">{{ tasa.fecha }}</td>
							<td class="text-center">
								<input  @change="tasa.tasa_paralela = Math.max(Math.min(Number(tasa.tasa_paralela), 99), 1)" class="form-control" type="number" min="1" step="0.0001" v-model.number="tasa.tasa_paralela">
								<ul class="error-messages">
									<li
											:key="message"
											v-for="message in errorMessages[`tasas_nuevas.${index}.tasa_paralela`]"
											v-text="message">
									</li>
								</ul>
							</td>
							<td class="text-center">
								<div v-if="Number(tasa.tasa_paralela)===Number(tasa.tasa_org)">
									<span class="badge badge-grey">Sin modificar</span>
								</div>
								<div v-else>
									<span class="badge badge-success">Modificada</span>
								</div>
							</td>
							<td class="text-center">
								<div v-if="Number(tasa.tasa_paralela)===Number(tasa.tasa_org)">
									<i v-tooltip="'Restaurar a tasa de cambio inicial'" aria-hidden="true" class="fa fa-undo"></i>
								</div>
								<div v-else>
									<i @click="tasa.tasa_paralela=tasa.tasa_org" v-tooltip="'Restaurar a tasa de cambio inicial'" aria-hidden="true" class="fa fa-undo" :style="'color:blue;'"></i>
								</div>
							</td>
						</tr>
						<tr v-if="!tasas.length">
							<td class="text-center" colspan="4">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="tasas" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import tasa from '../../api/tasas-cambio'
	//import Pagination from '../layout/Pagination'
	//import Typeahead from '../layout/Typeahead'
	//import Datepicker from "vuejs-datepicker";
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	//import JsonExcel from 'vue-json-excel'
	import loadingImage from '../../assets/images/block50.gif'

	var fecha_actual = new Date();
	fecha_actual.setHours(23,59,59,999);
export default {
			data() {
			return {
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				json_fields: {
				'Fecha': 'fecha',
				'Tasa de cambio oficial': 'tasa',
				},
				errorMessages:[],
				btnAction : "Actualizar TC Paralelas",
				 es: es,
				  format: "d MMMM yyyy",
				filter: {
					page: 1,
					limit: 31,
					limitOptions: [31],
					search: {
						mes:0,//moment(new Date()).format("YYYY-MM-DD"),
						anio:0,//moment(new Date()).format("YYYY-MM-DD"),
					}
				},
				periodos:[],
				meses:[],
				tasas: [],
				tasas_full:[],
				total_full: 0,
				total: 0,
				descargando : false,
			}
		},
		methods: {
			actualizarTCParalelas(estadox) {
				var self = this;
				self.loading=true;
					self.btnAction = "Actualizando, espere.....";
					tasa.actualizarTCParalelas({
								tasas_nuevas: self.tasas,
							},
							data => {
								alertify.success("Las tasas de cambio paralelas han sido actualizadas correctamente",5);
								self.obtenerTasas()
								self.btnAction = "Actualizar TC Paralelas";
								self.loading=false;
							},
							err => {
								self.errorMessages = err;
								self.btnAction = "Actualizar TC Paralelas";
								self.loading=false;
							}
					);
			},

			obtenerTasas() {
				var self = this;
				self.loading = true;
				tasa.obtenerTasas(self.filter, data => {

					data.rows.forEach((tasas, key) => {
						data.rows[key].tasa_org = data.rows[key].tasa_paralela;
					});

					self.tasas = data.rows

					self.total = data.total
					self.periodos = data.periodos
					//self.filter.search.anio = self.periodos[0]
					self.meses = self.filter.search.anio.meses_periodo
					//self.filter.search.mes = self.meses[0]
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			obtenerMeses(){
			 	let self = this;
				self.filter.search.mes = [];
			 	self.meses = self.filter.search.anio.meses_periodo
				self.filter.search.mes = self.meses[0]
			},

			changeLimit(limit) {
				this.filter.page = 1
				this.filter.limit = limit
				this.obtenerTasas()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerTasas()
            },
		},
		/*components: {
			//'pagination': Pagination,
			//'datepicker':Datepicker,
			//'downloadExcel': JsonExcel,
			//'typeahead':Typeahead
		},*/
		mounted() {
			this.obtenerTasas()
		}
    }
</script>

<style lang="scss" scoped>
    .search-field {
    	min-width: 120px;
    }
    .table {
	    a {
		    color: #2675dc;
	    }
	    .table-number {
    	    width: 60px;
        }
        .action {
    	    width: 100px;
        }
    }

	.label-search
	{
		margin-right: .5rem!important;
	}
</style>
