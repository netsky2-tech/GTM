<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Listado de Arqueos</div>
				<div class="box-description">Arqueos diarios por fecha y vendedor</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo Caja y Bancos</router-link>> Listado Arqueos</div>
			</div>
			<div class="row">
				<div class="col-md-3 sm-text-center">
					<router-link :to="{ name: 'arqueo-diario' }" class="btn btn-success" tag="button">
						<i class="pe-7s-plus"></i> Registrar Arqueo
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtener();" class="col-md-9 sm-text-center form-inline justify-content-end">
					<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
					</div>
					<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input @input="deseleccionar" class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.vendedor_especifico" type="checkbox"> Vendedor Especifico</label>
					</div>
					<div class="col-md-5 form-group">
						<input style="width: 100%" class="form-control" disabled v-if="!filter.search.vendedor_especifico">
						<typeahead v-if="filter.search.vendedor_especifico" :initial="vendedor" :trim="80" :url="vendedoresBusquedaURL" @input="seleccionarvendedor" style="width: 100%;"></typeahead>
					</div>
					<button @click="filter.page = 1;obtener();" class="btn btn-info" style="margin-left: 5px" ><i class="pe-7s-search"></i> Buscar</button>
					<!--<a :disabled="descargando" @click.prevent="downloadItem('pdf')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-danger"><i aria-hidden="true" class="fa fa-file-pdf-o"></i></button></a>
					<a :disabled="descargando" @click.prevent="downloadItem('xls')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-success"><i aria-hidden="true" class="fa fa-file-excel-o"></i></button></a>-->
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Fecha Arqueo</th>
							<th>Vendedor</th>
							<th class="text-center">Monto Ingresos C$</th>
							<th class="text-center">Estado</th>
							<th colspan="2" class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr :key="solicitud.id_solicitud_viatico" v-for="solicitud in solicitudes">
							<td>{{ formatDate(solicitud.fecha_arqueo) }}</td>
							<td>{{ solicitud.vendedor_arqueo?solicitud.vendedor_arqueo.nombre_completo : 'N/D' }}</td>
							<td class="text-center">C$ {{ solicitud.monto_ingresos |formatMoney(2)}}</td>
							<td class="text-center">
							 <div v-if="solicitud.estado === 1">
                              <span class="badge badge-success">Registrado</span>
                             </div>
                                 <div v-if="solicitud.estado === 0">
                              <span class="badge badge-danger">Anulado</span>
                                 </div>
							</td>
							<td class="text-center">
								<a :disabled="descargando" v-tooltip="'Descargar Reporte'" @click.prevent="descargarReporte(solicitud.id_arqueo)"><i aria-hidden="true" class="fa fa-eye"></i></a>
							</td>
							<td class="text-center">
								<a v-if="solicitud.estado === 1"  v-tooltip="'Anular Arqueo Diario'" @click.prevent="anular(solicitud.id_arqueo)">  <i class="fa fa-remove"></i></a>
							</td>
						</tr>
						<tr v-if="!solicitudes.length">
							<td class="text-center" colspan="5">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination :items="solicitudes" :limit="filter.limit" :limitOptions="filter.limitOptions" :page="filter.page" :total="total" @changeLimit="changeLimit" @changePage="changePage"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import solicitud from '../../api/arqueos_diarios';
	import loadingImage from '../../assets/images/block50.gif'
	import cuenta from "../../api/cuentas_por_cobrar";
	import factura from "../../api/facturas";
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
						field: 'id_vendedor',
						value: '',
						status:0,
						vendedor_especifico:false
					}
				},
				solicitudes: [],
				total: 0,
				descargando : false,
				vendedoresBusquedaURL: "/ventas/vendedores/buscar",
				vendedor:{}
			}
		},
		methods: {
			obtener() {
				var self = this
				self.loading = true;
				solicitud.obtener(self.filter, data => {
					self.solicitudes = data.rows
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
			descargarReporte(id_arqueo) {
				var self=this;
				var formato='xls';
				if(id_arqueo){
					self.loading=true;
					axios.post('ventas/arqueo/reporte',
							{
								extension:formato,
								id_arqueo:id_arqueo
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								formato === 'xls' ?
										blob = new Blob([data], { type: 'application/octet-stream' }) :
										formato === 'pdf' ?
												blob = new Blob([data], { type: 'application/pdf' }):
												blob = new Blob([data], { type: 'text/html' });
								let link = document.createElement('a');
								link.setAttribute('target', '_blank');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ArqueoCaja.'+formato;
								link.click()
								self.loading = false;
							}).catch(function (error) {
						console.log(error);
						alertify.error("Error Descargando archivo.....", 5);
						self.loading = false;
					});
				}else{
					alertify.warning("No ha seleccionado un cliente válido.....", 5);
				}
			},
			seleccionarvendedor(e) {
				const vendedorP = e.target.value;
				var self = this;
				self.vendedor = vendedorP;

				self.filter.search.value = self.vendedor.id_vendedor;
			},
			deseleccionar()
			{
				this.vendedor = {};
				this.filter.search.value=''
			},
			formatDate(date) {
				return moment(date).format('YYYY-MM-DD')
			},
			anular(id_arqueo){


				this.$swal.fire({
					title: 'Esta seguro de anular este arqueo?',
					text: "Digite la causa de la anulación del arqueo",
					input: 'text',
					inputAttributes: {
						autocapitalize: 'off'
					},
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, anular arqueo diario'
				}).then((result) => {
					if (result.value) {
						solicitud.anular(
								{
									id_arqueo : id_arqueo,
									causa_anulacion:result.value
								},
								data => {
									this.$swal.fire(
											'Anulado',
											'El registro del arqueo diario ha sido anulado',
											'success'
									)
									this.obtener();
								},
								err => {
									this.$swal.fire(
											'No se puede anular arqueo!',
											err,
											'warning'
									)
								}
						);



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