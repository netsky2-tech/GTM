<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Anexos</div>
				<div class="box-description">Lista de anexos y administración de anexos</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-anexo' }">
						<i class="pe-7s-plus"></i> Crear Nuevo Anexo
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtenerAnexos();" class="col-md-6 sm-text-center form-inline justify-content-end">
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="nombre_anexo">Nombre Anexo</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button class="btn btn-info" @click="filter.page = 1;obtenerAnexos();"><i class="pe-7s-search"></i> Buscar</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Estado Financiero</th>
							<th>Descripción Anexo</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="anexo in anexos" :key="anexo.id_anexo">
							<td class="text-left">{{ (anexo.anexos_estado_financiero.nombre_estado_finaciero) }}</td>
							<td>{{ anexo.nombre_anexo }}</td>
							<td class="text-center">
							 <div v-if="anexo.estado==1">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								<router-link tag="a" :to="{ name: 'actualizar-anexo', params: { id_anexo: anexo.id_anexo } }"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>
						<tr v-if="!anexos.length">
							<td class="text-center" colspan="4">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="anexos" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import anexo from '../../api/anexos'
	//import Pagination from '../layout/Pagination'
	import loadingImage from '../../assets/images/block50.gif'

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
						field: 'nombre_anexo',
						value: ''
					}
				},
				anexos: [],
				total: 0
			}
		},
		methods: {
			obtenerAnexos() {
				var self = this;
				self.loading = true;
				anexo.obtenerAnexos(self.filter, data => {
					self.anexos = data.rows;
					self.total = data.total;
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			changeLimit(limit) {
				this.filter.page = 1
				this.filter.limit = limit
				this.obtenerAnexos()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerAnexos()
            },
		},
		/*components: {
			'pagination': Pagination
		},*/
		mounted() {
			this.obtenerAnexos()
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