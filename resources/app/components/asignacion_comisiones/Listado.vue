<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Asignación de Comisiones</div>
				<div class="box-description">Porcentajes de comisiones de vendedores</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-ventas' }"> Módulo Ventas</router-link>> Comisión Vendedores</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-comisiones' }">
						<i class="pe-7s-plus"></i> Asignar Comisiones a Vendedor
					</router-link>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
					<tr>
						<th></th>
						<th>Vendedor</th>
						<th class="text-center action">Acciones</th>
					</tr>
					</thead>
					<tbody>
					<template v-for="(vendedor,key) in vendedores">
						<tr :key="vendedor.id_comision_asignacion">
							<td class="detail-link">
								<div  v-tooltip="'Mostrar detalles'" @click="mostrarComisiones(key)" class="link"></div>
							</td>
							<td>{{vendedor.nombre_completo}}</td>
							<td class="text-center">
							<router-link  v-tooltip="'Actualizar Comisiones'" :to="{ name: 'actualizar-comisiones', params: { id_vendedor: vendedor.id_vendedor } }" tag="a"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>

						<tr v-if="vendedor.mostrar">
							<td></td>
							<td colspan="8">
								<table class="table table-striped table-bordered">
									<thead>
									<tr>
										<th >Marca</th>
										<th >Tipo Meta</th>
										<th >Meta</th>
										<th >Porcentaje Comisión</th>
										<th >Porcentaje Comisión Sobremeta</th>
									</tr>
									</thead>
									<tbody>
									<tr v-for="comision in vendedor.comisiones_asignadas"
											:key="comision.id_comision_asignacion">

										<td>{{ comision.comision_marca.descripcion }}</td>
										<td>{{ comision.tipo_meta===1?'Unidades':'Monto' }}</td>
										<td v-if="comision.tipo_meta===2">C$ {{  comision.meta_monto  | formatMoney(2) }}</td>
										<td v-if="comision.tipo_meta===1">{{ comision.meta_unidades }}</td>

										<td>{{ comision.porcentaje_comision}}</td>
										<td>{{ comision.porcentaje_comision_sobremeta }}</td>
									
									</tr>
									</tbody>
									<tfoot>
									</tfoot>
								</table>
							</td>
							<td></td>
						</tr>
					</template>
					<tr v-if="!vendedores.length">
						<td class="text-center" colspan="10">Sin datos</td>
					</tr>
					</tbody>
				</table>
			</div>
			<pagination
					@changePage="changePage"
					@changeLimit="changeLimit"
					:items="vendedores"
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
	import comision from "../../api/comisiones_asignaciones";
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
				vendedores: [],
				total: 0
			};
		},
		methods: {
			formatDate(date) {
				return moment(date).format('YYYY-MM-DD')
			},
			mostrarComisiones(key) {
				if (this.vendedores[key].mostrar) {
					this.vendedores[key].mostrar = 0;
				} else {
					this.vendedores[key].mostrar = 1;
				}
			},
			obtener() {
				var self = this;
				comision.obtener(
						self.filter,
						data => {
							data.rows.forEach((vendedores, key) => {
								data.rows[key].mostrar = 0;
							});
							self.vendedores = data.rows;
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
				this.obtener();
			},
			changePage(page) {
				this.filter.page = page;
				this.obtener();
			},
		},
		/*components: {
          pagination: Pagination
        },*/
		mounted() {
			this.obtener();
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