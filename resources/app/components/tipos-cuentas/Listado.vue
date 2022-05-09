<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Tipos de cuenta</div>
				<div class="box-description">Lista de tipos de cuenta</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> tipos cuentas</div>
			</div>
			<div class="row">
				<div @keyup.enter="filter.page = 1;obtenerTiposCuenta();" class="col-md-6 sm-text-center form-inline">
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="descripcion">Tipo</option>
						<option value="tipo_abreviado">Tipo abreviado</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button class="btn btn-info" @click="filter.page = 1;obtenerTiposCuenta();"><i class="pe-7s-search"></i> Buscar</button>

					<a :disabled="descargando" @click.prevent="downloadItem('pdf')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-danger"><i aria-hidden="true" class="fa fa-file-pdf-o"></i></button></a>
					<a :disabled="descargando" @click.prevent="downloadItem('xls')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-success"><i aria-hidden="true" class="fa fa-file-excel-o"></i></button></a>
				</div>
				</div>
			
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<!--<th>Estado Financiero</th>-->
							<th>Descripción</th>
							<th>Tipo Abreviado</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="tipo_cuenta in tipos_cuenta" :key="tipo_cuenta.id_tipo_cuenta">
							<!--<td class="text-left">{{ tipo_cuenta.tipo_cuenta_estado_financiero.nombre_estado_finaciero }}</td>-->
							<td>{{ tipo_cuenta.descripcion }}</td>
							<td>{{ tipo_cuenta.tipo_abreviado }}</td>
							<td class="text-center">
							 <div v-if="tipo_cuenta.activo==1">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								<router-link tag="a" :to="{ name: 'actualizar-tipo-cuenta', params: { id_tipo_cuenta: tipo_cuenta.id_tipo_cuenta } }"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>
						<tr v-if="!tipos_cuenta.length">
							<td class="text-center" colspan="6">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="tipos_cuenta" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import tipo_cuenta from '../../api/tipos_cuenta'
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
				tipos_cuenta: [],
				total: 0,
				descargando:false,
			}
		},
		methods: {
			obtenerTiposCuenta() {
				var self = this;
				self.loading = true;
				tipo_cuenta.obtenerTiposCuenta(self.filter, data => {
					self.tipos_cuenta = data.rows
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
				this.obtenerTiposCuenta()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerTiposCuenta()
            },
			downloadItem (ext) {
				var self = this;
				if(!this.descargando){
					self.loadins = true;
					this.descargando=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.get('contabilidad/tipos-cuenta/reporte/'+ext, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								ext === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'Reporte_TiposCuentas.'+ext;
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
			this.obtenerTiposCuenta()
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