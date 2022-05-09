<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Grupos Activos</div>
				<div class="box-description">Listado de Grupos Activos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-activos' }"> Módulo activos</router-link>> Grupos</div>
			</div>
			<div class="row">
				<div class="col-md-3 sm-text-center">
					<router-link :to="{ name: 'registrar-grupo-activo' }" class="btn btn-success" tag="button">
						<i class="pe-7s-plus"></i> Registrar Grupo
					</router-link>
				</div>

				<div @keyup.enter="filter.page = 1;obtener();" class="col-md-9 sm-text-center form-inline justify-content-end">
					<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
					</div>
					<select class="form-control mb-1 mr-sm-1 mb-sm-0 search-field" v-model="filter.search.field">
						<option value="descripcion">Nombre Grupo</option>
					</select>
					<input class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text" v-model="filter.search.value">
					<button @click="filter.page = 1;obtener();" class="btn btn-info"><i class="pe-7s-search"></i> Buscar</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Código</th>
							<th>Descripción</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr :key="grupo.id_grupo_activo" v-for="grupo in grupos">
							<td>{{ grupo.codigo }}</td>
							<td>{{ grupo.descripcion }}</td>
							<td class="text-center">
							 <div v-if="grupo.activo==1">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								
								<router-link :to="{ name: 'actualizar-grupo-activo', params: { id_grupo_activo: grupo.id_grupo_activo } }" tag="a"><i class="icon-pencil"></i></router-link>

							</td>
						</tr>
						<tr v-if="!grupos.length">
							<td class="text-center" colspan="4">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination :items="grupos" :limit="filter.limit" :limitOptions="filter.limitOptions" :page="filter.page" :total="total" @changeLimit="changeLimit" @changePage="changePage"></pagination>


			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import grupo from '../../api/activos_grupos'
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
						field: 'descripcion',
						value: '',
						status:0
					}
				},
				grupos: [],
				total: 0
			}
		},
		methods: {
			obtener() {
				var self = this
				self.loading=true;
				grupo.obtener(self.filter, data => {
					self.grupos = data.rows
					self.total = data.total
					self.loading=false;
				}, err => {
					self.loading= false;
					console.log(err)
				})
			},
			changeLimit(limit) {
				this.loading=true;
				this.filter.page = 1
				this.filter.limit = limit
				this.obtener()
			},
			changePage(page) {
				this.loading=true;
				this.filter.page = page
				this.obtener()
            },

		},
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