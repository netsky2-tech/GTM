<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Categorías</div>
				<div class="box-description">Listado de Categorías</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo inventario</router-link>> Categorías</div>
			</div>
			<div class="row">
				<div class="col-md-4 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-categoria' }">
						<i class="pe-7s-plus"></i> Crear Nueva Categoría
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtenerCategorias();" class="col-md-8 sm-text-center form-inline justify-content-end">
					<div class="form-group check-label">
						<label class="check form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
					</div>
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="nombre_categoria">Nombre Categoría</option>
						<option value="descripcion">Descripción</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button class="btn btn-info" @click="filter.page = 1;obtenerCategorias();"><i class="pe-7s-search"></i> Buscar</button>

					<a :disabled="descargando" @click.prevent="downloadItem('pdf')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-danger"><i aria-hidden="true" class="fa fa-file-pdf-o"></i></button></a>
					<a :disabled="descargando" @click.prevent="downloadItem('xls')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-success"><i aria-hidden="true" class="fa fa-file-excel-o"></i></button></a>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Nombre Categoría</th>
							<th>Descripción</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="categoria in categorias" :key="categoria.id_categoria">
							<td>{{ categoria.nombre_categoria }}</td>
							<td>{{ categoria.descripcion }}</td>
							<td class="text-center">
							 	<div v-if="categoria.activo">
                              		<span class="badge badge-success">Activo</span>
                             	</div>

								<div v-else>
                              		<span class="badge badge-danger">Desactivado</span>
								</div>
							</td>
							<td class="text-center">
								<router-link tag="a" :to="{ name: 'actualizar-categoria', params: { id_categoria: categoria.id_categoria } }"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>
						<tr v-if="!categorias.length">
							<td class="text-center" colspan="4">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="categorias" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import categoria from '../../api/categorias'
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
						field: 'nombre_categoria',
						value: '',
						status:0
					}
				},
				categorias: [],
				total: 0,
				descargando:false,
			}
		},
		methods: {
			obtenerCategorias() {
				var self = this
				self.loading = true;
				categoria.obtener(self.filter, data => {
					self.categorias = data.rows
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
				this.obtenerCategorias()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerCategorias()
            },
			downloadItem (ext) {
				var self = this;
				if(!this.descargando){
					self.loading = true;
					this.descargando=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.get('categorias/reporte/'+ext, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								ext === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'Reporte_Categoria.'+ext;
								link.click();
								this.descargando=false;
								self.loading = false;
							}).catch(function (error) {
						alertify.error("Error Descargando archivo.....", 5);
						self.descargando = false;
						self.loading = false;
					})
				}else{
					alertify.warning("Espere a que se complete la descarga anterior",5);
				}
			},
		},
		/*components: {
			'pagination': Pagination
		},*/
		mounted() {
			this.obtenerCategorias()
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