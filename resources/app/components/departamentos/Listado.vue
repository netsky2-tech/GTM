<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Departamentos</div>
				<div class="box-description">Listado de Departamentos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-administracion' }"> Módulo administración</router-link>> Departamentos</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link :disabled="true" :to="{ name: 'registrar-departamento' }" class="btn btn-success" tag="button">
						<i class="pe-7s-plus"></i> Registrar Departamento
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtenerDepartamentos();" class="col-md-6 sm-text-center form-inline justify-content-end">
					<select class="form-control mb-1 mr-sm-1 mb-sm-0 search-field" v-model="filter.search.field">
						<option value="descripcion">Nombre Departamento</option>
					</select>
					<input class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text" v-model="filter.search.value">
					<button @click="filter.page = 1;obtenerDepartamentos();" class="btn btn-info"><i class="pe-7s-search"></i> Buscar</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Descripción</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr :key="departamento.id_departamento" v-for="departamento in departamentos">
							<td>{{ departamento.descripcion }}</td>
							<td class="text-center">
								<router-link :to="{ name: 'actualizar-departamento', params: { id_departamento: departamento.id_departamento } }" tag="a"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>
						<tr v-if="!departamentos.length">
							<td class="text-center" colspan="2">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination :items="departamentos" :limit="filter.limit" :limitOptions="filter.limitOptions" :page="filter.page" :total="total" @changeLimit="changeLimit" @changePage="changePage"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import departamento from '../../api/departamentos'
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
				departamentos: [],
				total: 0
			}
		},
		methods: {
			obtenerDepartamentos() {
				var self = this
				self.loading = true;
				departamento.obtener(self.filter, data => {
					self.departamentos = data.rows
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
				this.obtenerDepartamentos()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerDepartamentos()
            },

		},
		/*components: {
			'pagination': Pagination
		},*/
		mounted() {
			this.obtenerDepartamentos()
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