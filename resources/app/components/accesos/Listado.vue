<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Registro de accesos al sistema</div>
				<div class="box-description">Listado de accesos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-administracion' }"> Módulo administración</router-link>> Accesos</div>
			</div>
			<div class="row">
				<div @keyup.enter="filter.page = 1; obtenerAccesos();" class="col-md-4 sm-text-center form-inline">
					<select v-model="filter.search.field" class="form-control mb-2 mr-sm-2 mb-sm-0 search-field">
						<option value="alias">Nombre usuario</option>
						<option value="direccion_ip">Dirección IP</option>
						<option value="dispositivo">Dispositivo</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Buscar" type="text">
				</div>

				<div @keyup.enter="filter.page = 1; obtenerAccesos();" class="col-md-8 sm-text-center form-inline">
					<label class="label-search">Rango de fechas (opcional):</label>
					<datepicker :clear-button="false" placeholder="Fecha Inicial" :language="es" v-model="fecha_inicialx" @selected="onDateSelect" :format="format" :disabledDates="disabledDates"></datepicker>
					<datepicker :clear-button="false" placeholder="Fecha Final" :language="es" v-model="fecha_finalx" @selected="onDateSelect2" :format="format" :disabledDates="disabledDates"></datepicker>
					<button class="btn btn-info" style = "margin-right: .5rem!important;"  @click="filter.page = 1; obtenerAccesos();"><i class="pe-7s-search"></i> Buscar</button>
					<!--<a :disabled="descargando" @click.prevent="downloadItem('administracion/accesos/reporte')" style="color: #ffffff;"><button :disabled="descargando" class="btn btn-success"><i aria-hidden="true" class="fa fa-file-pdf-o"></i></button></a>-->
				<!--	 <download-excel
						class = "btn btn-success" style = "margin-right: .5rem!important;" :fetch   = "obtenerAccesosReporte" :fields = "json_fields"
						worksheet = "Listado Accesos" title = "Listado Accesos" name = "ReporteAccesos" :before-generate = "startDownload" :before-finish = "finishDownload"
						type    = "xls">
						<i class="pe-7s-download"></i>
						Descargar Excel
					</download-excel>-->
 					<!--<div class="form-group">
					 <typeahead style="width: 300px;" :initial="usuarioBusqueda" :trim="80" :url="usuariosBusquedaURL" @input="seleccionarUsuario"></typeahead>
					</div>-->
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th class="text-center table-number">Usuario</th>
							<th class="text-center table-number">Dispositivo</th>
							<th class="text-center table-number">Dirección IP</th>
							<th class="text-center table-number">Fecha / Hora acceso</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="acceso in accesos" :key="acceso.id_acceso">
							<td class="text-center">{{ acceso.alias }}</td>
							<td class="text-center">{{ acceso.dispositivo }}</td>
							<td class="text-center">{{ acceso.direccion_ip }}</td>
							<td class="text-center">{{ acceso.f_acceso }}</td>
							
						</tr>
						<tr v-if="!accesos.length">
							<td class="text-center" colspan="4">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="accesos" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>
			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import acceso from '../../api/accesos'
	import loadingImage from '../../assets/images/block50.gif'
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	var fecha_actual = new Date();
	fecha_actual.setHours(23,59,59,999);
export default {
			data() {
			return {
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				json_fields: {
				'Nombre de usuario': 'alias',
				'Fecha de acceso': 'f_acceso',
				'Direccion IP': 'direccion_ip',
				},
				descargando:false,

			disabledDates: {
				to: '', // Disable all dates up to specific date
				from: fecha_actual, // Disable all dates after specific date
				},
				 es: es,
				  format: "d MMMM yyyy",
				  fecha_inicialx:'',//new Date(),
				  fecha_finalx:'',//new Date(),
				filter: {
					page: 1,
					limit: 20,
					limitOptions: [5, 10, 15, 20],
					search: {
						field: 'alias',
						value: '',
						fecha_inicial:'Invalid date',//moment(new Date()).format("YYYY-MM-DD"),
						fecha_final:'Invalid date',//moment(new Date()).format("YYYY-MM-DD"),
					}
				},
				accesos: [],
				accesos_full:[],
				total_full: 0,
				total: 0
			}
		},
		methods: {
			    onDateSelect(date) {
				this.filter.search.fecha_inicial = moment(date).format("YYYY-MM-DD"); //
				},
				onDateSelect2(date) {
				this.filter.search.fecha_final = moment(date).format("YYYY-MM-DD"); //
				},
			obtenerAccesos() {
				var self = this
				self.loading=true;
				acceso.obtenerAccesos(self.filter, data => {
					self.accesos = data.rows
					self.total = data.total
					self.loading=false;
				}, err => {
					console.log(err)
				})
			},
			downloadItem (url) {
			    	var self = this;
			    	if(!this.descargando){
						this.descargando=true;
						self.loading=true;
				alertify.success("Descargando datos, espere un momento.....",5);
				axios.get(url, { responseType: 'blob' })
						.then(({ data }) => {
							let blob = new Blob([data], { type: 'application/pdf' })
							let link = document.createElement('a');
							link.href = window.URL.createObjectURL(blob)
							link.download = 'Reporte_Accesos.pdf';
							link.click()
							this.descargando=false;
							self.loading = false;
						})
					}else{
						alertify.warning("Espere a que se complete la descarga anterior",5);
					}
			},
			changeLimit(limit) {
				this.loading=true;
				this.filter.page = 1
				this.filter.limit = limit
				this.obtenerAccesos()
			},
			changePage(page) {
				this.loading=true;
				this.filter.page = page
				this.obtenerAccesos()
            }
		},
		/*components: {
			//'pagination': Pagination,
			'datepicker':Datepicker,
		//	'downloadExcel': JsonExcel,
			//'typeahead':Typeahead
		},*/
		mounted() {
			this.obtenerAccesos()
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
</style>

<style>

.label-search
{
  margin-right: .5rem!important;
}
</style>