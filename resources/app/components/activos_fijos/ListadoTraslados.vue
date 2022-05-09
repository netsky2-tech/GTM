<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Histórico De Traslados de Activos Fijos</div>
				<div class="box-description">Listado de Traslados de Activos Fijos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-activos' }"> Módulo Activo Fijo</router-link>> Historial Traslados Activos Fijos</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Código</th>
							<th>Descripción</th>
							<th>Fecha Traslado</th>
							<th>Área Origen</th>
							<th>Trabajador Origen</th>
							<th>Área Destino</th>
							<th>Trabajador Destino</th>
							<th>Tipo traslado</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="traslados in traslados_activos" :key="traslados.id_traslado_activo">
							<td>{{ traslados.activo_traslado.codigo }}</td>
							<td>{{ traslados.activo_traslado.descripcion }}</td>
							<td>{{ traslados.fecha_traslado }}</td>
							<td>{{ traslados.activo_area_origen?traslados.activo_area_origen.descripcion:'N/A'}}</td>
							<td>{{ traslados.activo_trabajador_origen?traslados.activo_trabajador_origen.nombre_completo:'N/A'}}</td>
							<td>{{ traslados.activo_area_destino?traslados.activo_area_destino.descripcion:'N/A'}}</td>
							<td>{{ traslados.activo_trabajador_destino?traslados.activo_trabajador_destino.nombre_completo:'N/A'}}</td>
							<td>{{ traslados.tipo_traslado == 1 ? 'Reasignación' : traslados.tipo_traslado == 2 ? 'Prestamo' : traslados.tipo_traslado == 3 ? 'Devolución' : 'N/A'}}</td>
						</tr>
						<tr v-if="!traslados_activos.length">
							<td class="text-center" colspan="7">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="traslados_activos" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import activo_fijo from '../../api/activos_fijos'
	import loadingImage from '../../assets/images/block50.gif'
	//import Pagination from '../layout/Pagination'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				filter: {
					page: 1,
					limit: 5,
					limitOptions: [5, 10, 15, 20],
					search: {
						field: 'descripcion',
						value: '',
						status:0
					}
				},
				traslados_activos: [],
				total: 0,
				descargando:false,
			}
		},
		methods: {
			obtener() {
				var self = this;
				self.loading = true;
				activo_fijo.obtenerTraslados(self.filter, data => {
					self.traslados_activos = data.rows
					self.total = data.total
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			changeLimit(limit) {
				this.filter.page = 1
				this.filter.limit = limit
				this.obtener()
			},
			changePage(page) {
				this.filter.page = page
				this.obtener()
            },

		},
		/*components: {
			'pagination': Pagination
		},*/
		mounted() {
			this.obtener()
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