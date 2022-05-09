<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Autorización de baja de activos</div>
				<div class="box-description">Listado de Activos Fijos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-activos' }"> Módulo Activo Fijo</router-link>> Autorización de bajas</div>
			</div>
			<div class="row">
				<!--<div class="col-md-3 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-activo-fijo' }">
						<i class="pe-7s-plus"></i> Registrar Activo Fijo
					</router-link>
				</div>-->
				<div @keyup.enter="filter.page = 1;obtener();" class="col-md-12 sm-text-center form-inline justify-content-end">
					<!--<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
					</div>-->
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="descripcion">Descripción</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button class="btn btn-info" @click="filter.page = 1;obtener();"><i class="pe-7s-search"></i> Buscar</button>

					<!--<a :disabled="descargando" @click.prevent="downloadItem('pdf')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-danger"><i aria-hidden="true" class="fa fa-file-pdf-o"></i></button></a>
					<a :disabled="descargando" @click.prevent="downloadItem('xls')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-success"><i aria-hidden="true" class="fa fa-file-excel-o"></i></button></a>-->
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Sucursal</th>
							<th>Código</th>
							<th>Descripción</th>
							<th>Tipo Activo</th>
							<th>Asignado a</th>
							<th>Justificación de baja</th>
							<!--<th class="text-center table-number">Estado</th>-->
							<th colspan="2" class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="activo_fijo in activos_fijos" :key="activo_fijo.id_activo">
							<td>{{ activo_fijo.activo_sucursal?activo_fijo.activo_sucursal.descripcion :'N/A'}}</td>
							<td>{{ activo_fijo.codigo }}</td>
							<td>{{ activo_fijo.descripcion }}</td>
							<td>{{ activo_fijo.activo_tipo_activo?activo_fijo.activo_tipo_activo.descripcion :'N/A'}}</td>
							<td>{{ activo_fijo.activo_trabajador?activo_fijo.activo_trabajador.nombre_completo:'N/A'}}</td>
							<td>{{ activo_fijo.justificacion }}</td>
							<!--<td class="text-center">
							 <div v-if="activo_fijo.estado===1">
                              <span class="badge badge-success">Activo</span>
                             </div>
								<div v-if="activo_fijo.estado===2">
									<span class="badge badge-primary">Depreciado</span>
								</div>
                                 <div v-if="activo_fijo.estado === 0">
                              		<span class="badge badge-danger">Baja</span>
                                 </div>
							</td>-->
							<td class="text-center">
								<template v-if="activo_fijo.estado===99">
									<button @click="cambiarEstadoSolicitudBaja(1,activo_fijo.id_activo)" class="btn btn-danger"><i
											class="fa fa-trash-o"> Rechazar Solicitud</i></button>
								</template>
								<template v-if="activo_fijo.estado === 0">
									<button @click="cambiarEstadoSolicitudBaja(1,activo_fijo.id_activo)" class="btn btn-danger"><i
											class="fa fa-trash-o"> Anular Solicitud</i></button>
								</template>
							</td>
							<td class="text-center">
								<template v-if="activo_fijo.estado===99">
									<button @click="cambiarEstadoSolicitudBaja(0,activo_fijo.id_activo)" class="btn btn-success"><i
											class="fa fa-trash-o"> Autorizar Solicitud</i></button>
								</template>
								<template v-else>
								</template>
							</td>
						</tr>
						<tr v-if="!activos_fijos.length">
							<td class="text-center" colspan="6">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="activos_fijos" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import activo_fijo from '../../api/activos_fijos'
	import loadingImage from '../../assets/images/block50.gif'
	import solicitud from "../../api/solicitudes_pago";
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
						value: '',
						status:0
					}
				},
				activos_fijos: [],
				total: 0,
				descargando:false,
			}
		},
		methods: {
			obtener() {
				var self = this;
				self.loading = true;
				activo_fijo.obtenerSolicitudAutorizacion(self.filter, data => {
					self.activos_fijos = data.rows
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
			cambiarEstadoSolicitudBaja(estado,id_activo){

				var txtAprobar = 'Está seguro de autorizar la baja de este activo?';
				var txtRechazar ='Está seguro de rechazar la baja de este activo?';
				//var txtAnular ='Está seguro de revocar el permiso de consignación para este cliente?';

				var self = this;

				self.$swal.fire({
					title: 'Confirmación de cambio del estado de la solicitud de baja',
					text: estado===0?txtAprobar:estado===1?txtRechazar:txtRechazar,
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					self.loading=true;
					if (result.value) {
						//var self = this
						activo_fijo.cambiarEstadoSolicitudBaja({
							id_activo: id_activo,
							estado: estado
						}, data => {
							alertify.warning("El estado de la solicitud de baja ha cambiado correctamente", 5);
							self.obtener();
						}, err => {
							self.loading=false;
							console.log(err)
						})
					}else{
						self.loading=false;
					}
				})

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