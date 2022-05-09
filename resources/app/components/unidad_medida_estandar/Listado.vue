<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Clasifiación UM</div>
				<div class="box-description">Listado de Clasifiación</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo inventario</router-link>> Clasificación UM</div>
			</div>
			<div class="row">
				<div class="col-md-4 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-unidad-medida-estandar' }">
						<i class="pe-7s-plus"></i> Crear Nueva Clasificación
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtenerUnidadesMedida();" class="col-md-8 sm-text-center form-inline justify-content-end">
					<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
					</div>
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="clasificacion_um"> Clasificación UM</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button class="btn btn-info" @click="filter.page = 1;obtenerUnidadesMedida();"><i class="pe-7s-search"></i> Buscar</button>

					<a :disabled="descargando" @click.prevent="downloadItem('pdf')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-danger"><i aria-hidden="true" class="fa fa-file-pdf-o"></i></button></a>
					<a :disabled="descargando" @click.prevent="downloadItem('xls')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-success"><i aria-hidden="true" class="fa fa-file-excel-o"></i></button></a>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Clasificación UM</th>
							<th>UM Estándar</th>
							<th>Símbolo UM</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr :key="um.id_clasificacion_unidad_medida" v-for="um in unidades_medida">
							<td>{{ um.clasificacion_um}}</td>
							<td>{{ um.um_estandar }}</td>
							<td>{{ um.simbolo_um }}</td>
							<td class="text-center">
							 <div v-if="um.estado==1">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td v-if="um.id_empresa !=null" class="text-center">
								<router-link :to="{ name: 'actualizar-unidad-medida-estandar', params: { id_clasificacion_unidad_medida: um.id_clasificacion_unidad_medida } }" tag="a"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>
						<tr v-if="!unidades_medida.length">
							<td class="text-center" colspan="5">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="unidades_medida" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import um from '../../api/unidad_medida_estandar'
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
						field: 'clasificacion_um',
						value: '',
						status:0
					}
				},
				unidades_medida: [],
				total: 0,
				descargando:false,
			}
		},
		methods: {
			obtenerUnidadesMedida() {
				var self = this;
				self.loading = true;
				um.obtener(self.filter, data => {
					self.unidades_medida = data.rows
					self.total = data.total
					self.loading = false;
					//this.changePage(1)	
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			changeLimit(limit) {
				this.filter.page = 1
				this.filter.limit = limit
				this.obtenerUnidadesMedida()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerUnidadesMedida()
            },
			downloadItem (ext) {
				var self = this;
				if(!this.descargando){
					self.loading = true;
					this.descargando=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.get('unidad-medida/reporte/'+ext, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								ext === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'Reporte_UnidadMedida.'+ext;
								link.click()
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
			this.obtenerUnidadesMedida()
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