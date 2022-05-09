<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Cuentas por Pagar</div>
				<div class="box-description">Listado de Cuentas por Pagar</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-cuentas-pagar' }"> Módulo cuentas por Pagar</router-link>> Cuentas por Pagar</div>
			</div>
			<div class="row">
				<div @keyup.enter="filter.page = 1;obtener();" class="col-md-12 sm-text-center form-inline justify-content-end">
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="descripcion_movimiento">Descripción</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button @click="filter.page = 1;obtener();" class="btn btn-info"><i class="pe-7s-search"></i> Buscar</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Tipo Documento</th>
							<th>Fecha Emisión</th>
							<th>Descripción</th>
							<th>Proveedor</th>
							<th>Cargos</th>
							<th>Abonos</th>
							<th>Fecha Vencimiento</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="cuentaxpagar in cuentas_por_pagar" :key="cuentaxpagar.id_cuentaxpagar">
							<td>{{ cuentaxpagar.id_tipo_documento === 1? 'Factura de Compra':cuentaxpagar.id_tipo_documento === 2?'Factura de Compra Internacional':cuentaxpagar.id_tipo_documento === 3?'Pago':cuentaxpagar.id_tipo_documento === 4?'Nota de Débito':'Otro' }}</td>
							<td>{{ formatDate(cuentaxpagar.fecha_movimiento) }}</td>
							<td>{{ cuentaxpagar.cuenta_proveedor? cuentaxpagar.cuenta_proveedor.nombre_comercial:''}}</td>
							<td>{{ cuentaxpagar.descripcion_movimiento }}</td>
							<template v-if="cuentaxpagar.monto_movimiento < 0">
								<td class="text-center">{{cuentaxpagar.id_moneda===1?'C$':'$'}} {{ cuentaxpagar.monto_movimiento_org < 0?cuentaxpagar.monto_movimiento_org*-1:'-' | formatMoney(2) }}</td>
								<td class="text-center"> - </td>
							</template>

							<template v-if="cuentaxpagar.monto_movimiento > 0">
								<td class="text-center"> - </td>
								<td class="text-center">{{cuentaxpagar.id_moneda===1?'C$':'$'}} {{ cuentaxpagar.monto_movimiento_org > 0?cuentaxpagar.monto_movimiento_org:'-' | formatMoney(2) }}</td>

							</template>
							<td>{{ (cuentaxpagar.id_tipo_documento === 1 || cuentaxpagar.id_tipo_documento === 2) ? formatDate(cuentaxpagar.fecha_vencimiento) :'N/A' }}</td>
							<td class="text-center">
							 <div v-if="cuentaxpagar.estado === 1">
                              <span class="badge badge-success">Abierto</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Cerrado</span>
                                 </div>
							</td>
							<td class="text-center">
								<!--<template v-if="[1,2,3,4].indexOf(tipo.id_tipo_entrada) < 0">-->
								<!--<router-link tag="a" :to="{ name: 'actualizar-tipo-entrada', params: { id_tipo_entrada: tipo.id_tipo_entrada } }"><i class="icon-pencil"></i></router-link>-->
								<!--</template>-->
							</td>
						</tr>
						<tr v-if="!cuentas_por_pagar.length">
							<td class="text-center" colspan="5">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="cuentas_por_pagar" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>
			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import cuentas_pagar from '../../api/cuentas_por_pagar'
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
					type:'cliente',
					limitOptions: [5, 10, 15, 20],
					search: {
						field: 'descripcion_movimiento',
						value: ''
					}
				},
				cuentas_por_pagar: [],
				total: 0
			}
		},
		methods: {
			formatDate(date) {
				return moment(date).format('YYYY-MM-DD')
			},
			obtener() {
				var self = this;
				self.loading = true;
				cuentas_pagar.obtener(self.filter, data => {
					self.cuentas_por_pagar = data.rows
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