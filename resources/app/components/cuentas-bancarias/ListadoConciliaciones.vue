<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Listado de Conciliaciones Bancarias</div>
				<div class="box-description">Conciliaciones por cuenta bancaria</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo Caja y Bancos</router-link>> Listado de Conciliaciones</div>
			</div>
			<div class="row">
				<div @keyup.enter="filter.page = 1;obtener();" class="col-md-12 sm-text-center form-inline justify-content-end">
					<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
					</div>
					<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input @input="deseleccionar" class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.cuenta_especifica" type="checkbox"> Cuenta Bancaria Especifica</label>
					</div>
					<div class="col-md-5 form-group">
						<input style="width: 100%" class="form-control" disabled v-if="!filter.search.cuenta_especifica">
						<v-select style="width: 100%" v-if="filter.search.cuenta_especifica"
								:options="cuentas_bancarias"
								label="numero_cuenta"
								v-model="cuenta_bancariax"
								v-on:input="seleccionarCuenta"
						></v-select>
						<!--<typeahead v-if="filter.search.cuenta_especifica" :initial="vendedor" :trim="80" :url="vendedoresBusquedaURL" @input="seleccionarvendedor" style="width: 100%;"></typeahead>-->
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
							<th>Mes/Periodo</th>
							<th>Cuenta Bancaria</th>
							<th class="text-center">Saldo Inicial en Banco</th>
							<th class="text-center">Total Débitos</th>
							<th class="text-center">Total Créditos</th>
							<th class="text-center">Estado</th>
							<th colspan="2" class="text-center action">Opciones</th>
						</tr>
					</thead>

					<tbody>
						<tr :key="solicitud.id_estado_cuenta_banco" v-for="solicitud in conciliaciones">
							<td>{{ solicitud.conciliacion_estado_cuenta?solicitud.conciliacion_estado_cuenta.periodo_mes_estado_cuenta.descripcion:"N/D" }}</td>
							<td>{{ solicitud.cuenta_bancaria_conciliacion?solicitud.cuenta_bancaria_conciliacion.numero_cuenta:"N/D" }}</td>
							<td class="text-center">{{ solicitud.conciliacion_estado_cuenta?solicitud.conciliacion_estado_cuenta.saldo_inicial:"N/D"}}</td>
							<td class="text-center">{{(solicitud.conciliacion_estado_cuenta?solicitud.conciliacion_estado_cuenta.total_debitos:0) |formatMoney(2)}}</td>
							<td class="text-center">{{ (solicitud.conciliacion_estado_cuenta?solicitud.conciliacion_estado_cuenta.total_creditos:0) |formatMoney(2)}}</td>

							<td class="text-center">
							 <div v-if="solicitud.estado === 1">
                              <span class="badge badge-blue">Registrado</span>
                             </div>
								<div v-if="solicitud.estado === 2">
									<span class="badge badge-success">Conciliado</span>
								</div>
                                 <div v-if="solicitud.estado === 0">
                              <span class="badge badge-danger">Anulado</span>
                                 </div>
							</td>
							<td class="text-center">
								<a v-tooltip="'Descargar Reporte'" @click.prevent="descargarReporte(solicitud.id_conciliacion)"><i aria-hidden="true" class="fa fa-eye"></i></a>
							</td>
						</tr>
						<tr v-if="!conciliaciones.length">
							<td class="text-center" colspan="5">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination :items="conciliaciones" :limit="filter.limit" :limitOptions="filter.limitOptions" :page="filter.page" :total="total" @changeLimit="changeLimit" @changePage="changePage"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import solicitud from '../../api/conciliacion_bancaria';
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
						field: 'id_cuenta_bancaria',
						value: '',
						status:0,
						cuenta_especifica:false
					}
				},
				conciliaciones: [],
				total: 0,
				descargando : false,
				cuentas_bancarias:[],
				cuenta_bancariax:[],
			}
		},
		methods: {
			obtener() {
				var self = this
				self.loading = true;
				solicitud.obtenerConciliaciones(self.filter, data => {
					self.conciliaciones = data.rows
					self.total = data.total
					self.cuentas_bancarias=data.cuentas_bancarias;
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
			descargarReporte(id_conciliacion) {
				var self=this;
				var formato='xls';
				if(id_conciliacion){
					self.loading=true;
					axios.post('bancos/conciliaciones/reporte',
							{
								extension:formato,
								id_conciliacion:id_conciliacion
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
								link.download = 'ReporteConciliacion.'+formato;
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
			seleccionarCuenta() {
				var self = this;
				self.filter.search.value = self.cuenta_bancariax.id_cuenta_bancaria;
			},
			deseleccionar()
			{
				var self = this;
				self.cuenta_bancariax = '';
				this.filter.search.value=''
			},
			formatDate(date) {
				return moment(date).format('YYYY-MM-DD')
			},
			anular(id_estado_cuenta_banco){


				this.$swal.fire({
					title: 'Esta seguro de anular este estado de cuenta?',
					text: "Digite la causa de la anulación del estado de cuenta",
					input: 'text',
					inputAttributes: {
						autocapitalize: 'off'
					},
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, anular estado de cuenta'
				}).then((result) => {
					if (result.value) {
						solicitud.anular(
								{
									id_estado_cuenta_banco : id_estado_cuenta_banco,
									observaciones:result.value
								},
								data => {
									this.$swal.fire(
											'Anulado',
											'El registro del estado de cuenta ha sido anulado',
											'success'
									)
									this.obtener();
								},
								err => {
									this.$swal.fire(
											'No se puede anular estado de cuenta!',
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