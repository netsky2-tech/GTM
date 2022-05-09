<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Listado de Cierres de Activos Fijos</div>
				<div class="box-description">Cierres Activos Fijos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-activos' }"> Módulo Activos Fijos</router-link>> Cierres Activos</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'cierre-activo-fijo' }">
						<i class="pe-7s-plus"></i> Registrar Cierre
					</router-link>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
					<tr>
						<th></th>
						<th>Sucursal</th>
						<th>Año</th>
						<th>Mes</th>
						<th>Fecha Cierre</th>
					</tr>
					</thead>
					<tbody>
					<template v-for="(cierre,key) in cierres">
						<tr :key="cierre.id_cierre_activo">
							<td class="detail-link">
								<div  v-tooltip="'Mostrar detalles'" @click="mostrarDepreciaciones(key)" class="link"></div>
							</td>
							<td>{{cierre.cierre_sucursal.descripcion }}</td>
							<td>{{ cierre.anio }}</td>
							<td>{{ cierre.mes }}</td>
							<td>{{ formatDate(cierre.f_grabacion) }}</td>
						</tr>

						<tr v-if="cierre.mostrar" :key="cierre.id_cierre_activo">
							<td></td>
							<td colspan="8">
								<table class="table table-striped table-bordered">
									<thead>
									<tr>
										<th>Descripción</th>
										<th>Fecha Adquisición</th>
										<th>Valor Adquisición</th>
										<th>Meses a depreciarse</th>
										<th>Depreciacion Mensual</th>
										<th>Meses</th>
										<th>Depreciacion Acumulada</th>
										<th>Valor en libros</th>
									</tr>
									</thead>
									<tbody>
									<tr
											v-for="productosDetalle in cierre.detalles_depreciacion"
											:key="productosDetalle.id_detalle_depreciacion">
										<td>{{ productosDetalle.detalle_activo.descripcion }}</td>
										<td>{{ formatDate(productosDetalle.fecha_adquisicion) }}</td>
										<td>{{ productosDetalle.valor_adquisicion }}</td>
										<td>{{ productosDetalle.detalle_activo.meses_depreciarse }}</td>
										<td>{{ productosDetalle.depreciacion_mensual }}</td>
										<td>{{ productosDetalle.meses }}</td>
										<td>{{ productosDetalle.depreciacion_acumulada }}</td>
										<td>{{ productosDetalle.valor_libro }}</td>
											</tr>
									</tbody>
									<tfoot>
									</tfoot>
								</table>
							</td>
							<td></td>
						</tr>
					</template>
					<tr v-if="!cierres.length">
						<td class="text-center" colspan="10">Sin datos</td>
					</tr>
					</tbody>
				</table>
			</div>
			<pagination
					@changePage="changePage"
					@changeLimit="changeLimit"
					:items="cierres"
					:total="total"
					:page="filter.page"
					:limitOptions="filter.limitOptions"
					:limit="filter.limit"
			></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import activos from "../../api/activos_fijos";
	//import Pagination from "../layout/Pagination";

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '',   //It is important to import the loading image then use here
				filter: {
					page: 1,
					limit: 20,
					limitOptions: [20, 40, 60, 80],
					search: {
						field: "codigo_entrada",
						value: ""
					}
				},
				cierres: [],
				total: 0
			};
		},
		methods: {
				formatDate(date) {
					return moment(date).format('YYYY-MM-DD')
				},
			mostrarDepreciaciones(key) {
				if (this.cierres[key].mostrar) {
					this.cierres[key].mostrar = 0;
				} else {
					this.cierres[key].mostrar = 1;
				}
			},
			obtenerCierres() {
				var self = this;
				activos.obtenerCierres(
						self.filter,
						data => {
							data.rows.forEach((cierres, key) => {
								data.rows[key].mostrar = 0;
							});
							self.cierres = data.rows;
							self.total = data.total;
							self.loading=false;
						},
						err => {
							console.log(err);
						}
				);
			},
			changeLimit(limit) {
				this.filter.page = 1;
				this.filter.limit = limit;
				this.obtenerCierres();
			},
			changePage(page) {
				this.filter.page = page;
				this.obtenerCierres();
			},
		},
		/*components: {
          pagination: Pagination
        },*/
		mounted() {
			this.obtenerCierres();
		}
	};
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
			width: 180px;
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
	}
</style>