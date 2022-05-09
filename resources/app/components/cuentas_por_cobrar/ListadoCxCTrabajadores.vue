<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Cuentas por Cobrar Trabajadores</div>
				<div class="box-description">Listado de Cuentas por Cobrar Trabajadores</div>

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
							<th>No. Documento</th>
							<th>Fecha Emisión</th>
							<th>Trabajador</th>
							<th>Descripción</th>
							<th>Débito</th>
							<th>Crédito</th>
							<th>Fecha Vencimiento</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="cuentaxcobrar in cuentas_por_cobrar" :key="cuentaxcobrar.id_cuentaxcobrar">
							<td>{{ cuentaxcobrar.no_documento_origen }}</td>
							<!--<td>{{ cuentaxcobrar.id_tipo_documento === 5? 'Factura Empleado':cuentaxcobrar.id_tipo_documento === 6?'Recibo Empleados':cuentaxcobrar.id_tipo_documento === 7?'Cargos':cuentaxcobrar.id_tipo_documento === 8?'Abonos':'Otro' }}</td>
							--><td>{{ formatDate(cuentaxcobrar.fecha_movimiento) }}</td>

							<td>{{ cuentaxcobrar.cuenta_empleado? cuentaxcobrar.cuenta_empleado.primer_nombre+' '+cuentaxcobrar.cuenta_empleado.primer_apellido:''}}</td>
							<td>{{ cuentaxcobrar.descripcion_movimiento }}</td>

							<template v-if="cuentaxcobrar.monto_movimiento < 0">
								<td class="text-center">C$ {{ cuentaxcobrar.monto_movimiento < 0?cuentaxcobrar.monto_movimiento*-1:'-' | formatMoney(2) }}</td>
								<td class="text-center"> - </td>
							</template>

							<template v-if="cuentaxcobrar.monto_movimiento > 0">
								<td class="text-center"> - </td>
								<td class="text-center">C$ {{ cuentaxcobrar.monto_movimiento > 0?cuentaxcobrar.monto_movimiento:'-' | formatMoney(2) }}</td>

							</template>
							<td>{{ cuentaxcobrar.id_tipo_documento === 1? formatDate(cuentaxcobrar.fecha_vencimiento) :'N/A' }}</td>
							<td class="text-center">
							 <div v-if="cuentaxcobrar.estado === 1">
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
						<tr v-if="!cuentas_por_cobrar.length">
							<td class="text-center" colspan="5">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="cuentas_por_cobrar" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import cuentas_cobrar from '../../api/cuentas_por_cobrar'
	//import Pagination from '../layout/Pagination'

	export default {
		data() {
			return {
				filter: {
					page: 1,
					limit: 5,
					limitOptions: [5, 10, 15, 20],
					type:'trabajador',
					search: {
						field: 'descripcion_movimiento',
						value: ''
					}
				},
				cuentas_por_cobrar: [],
				total: 0
			}
		},
		methods: {
			formatDate(date) {
				return moment(date).format('YYYY-MM-DD')
			},
			obtener() {
				var self = this
				cuentas_cobrar.obtener(self.filter, data => {
					self.cuentas_por_cobrar = data.rows
					self.total = data.total
				}, err => {
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