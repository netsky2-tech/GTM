<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Niveles de Cuenta Contables</div>
				<div class="box-description">Lista de Niveles</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> Niveles cuentas</div>
			</div>
			<div class="row">
				<div @keyup.enter="filter.page = 1;obtenerNivelesCuenta();" class="col-md-6 sm-text-center form-inline">
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="descripcion">Nombre nivel</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button class="btn btn-info" @click="filter.page = 1;obtenerNivelesCuenta();"><i class="pe-7s-search"></i> Buscar</button>
				</div>
				</div>
			
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Nombre nivel</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="nivel_cuenta in niveles_cuentas" :key="nivel_cuenta.id_nivel_cuenta">
							<td>{{ nivel_cuenta.descripcion }}</td>
							<td class="text-center">
							 <div v-if="nivel_cuenta.activo==1">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								<router-link tag="a" :to="{ name: 'actualizar-nivel-cuenta', params: { id_nivel_cuenta: nivel_cuenta.id_nivel_cuenta } }"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>
						<tr v-if="!niveles_cuentas.length">
							<td class="text-center" colspan="3">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="niveles_cuentas" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import nivel_cuenta from '../../api/niveles_cuentas'
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
						value: ''
					}
				},
				niveles_cuentas: [],
				total: 0
			}
		},
		methods: {
			obtenerNivelesCuenta() {
				var self = this;
				self.loading = true;
				nivel_cuenta.obtenerNivelesCuenta(self.filter, data => {
					self.niveles_cuentas = data.rows
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
				this.obtenerNivelesCuenta()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerNivelesCuenta()
            },
		},
		/*components: {
			//'pagination': Pagination
		},*/
		mounted() {
			this.obtenerNivelesCuenta()
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