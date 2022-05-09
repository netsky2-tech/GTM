<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Periodos Contables</div>
				<div class="box-description">Listado de Periodos Contables</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> Periodos contables</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-periodo' }">
						<i class="pe-7s-plus"></i> Registrar Periodo
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtener();" class="col-md-6 sm-text-center form-inline justify-content-end">
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="descripcion">Descripción periodo</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button class="btn btn-info" @click="filter.page = 1;obtener();"><i class="pe-7s-search"></i> Buscar</button>
				</div>
			</div>
			<br>
		<div class="row">
			<div class="col-md-6">
			<div class="table-responsive">
				<table class="table table-bordered table-groups">
					<thead>
						<tr>
							<th>Periodo</th>
							<th>Descripcion Periodo</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr :class="periodoActivoClass(periodo)" :key="periodo.id_periodo_fiscal" @click="seleccionarPeriodo(periodo)" v-for="periodo in periodos">
							<td>{{ periodo.periodo }}</td>
							<td>{{ periodo.descripcion}}</td>
							<td class="text-center">
							 <div v-if="periodo.estado==0">
                              <span class="badge badge-success">En progreso</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-warning">Completado</span>
                                 </div>
							</td>
							<td class="text-center" style="background: white;">	
								<router-link :to="{ name: 'actualizar-periodo', params: { id_periodo_fiscal: periodo.id_periodo_fiscal } }" tag="a"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>
						<tr v-if="!periodos.length">
							<td class="text-center" colspan="4">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			</div>

			<div class="col-md-6">
			<div class="table-responsive">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th class="text-center" colspan="3"><b>Meses del periodo</b></th>
						</tr>
					</thead>
					<thead>
						<tr>
							<th class="text-center">Mes</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center"> Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr :key="mes.id_periodo_fiscal_mes" v-for="mes in meses">
							<td>{{ mes.descripcion}}</td>
							<td class="text-center">
							 <div v-if="mes.estado===1">
                              <span class="badge badge-success">Abierto</span>
                             </div>
								<div v-if="mes.estado===2">
                              <span class="badge badge-warning">Cerrado</span>
                                 </div>
							</td>
							<td class="text-center">
								<a v-if="mes.estado === 1"  v-tooltip="'Cerrar Mes'" @click.prevent="cerrar_periodo(mes.id_periodo_fiscal,mes.id_periodo_mes)">  <i class="fa fa-check"> Cerrar Mes</i></a>
							</td>
						</tr>
						<tr v-if="!meses.length">
							<td class="text-center" colspan="2">Seleccione un periodo</td>
						</tr>
					</tbody>
				</table>
			</div>
			</div>

			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="periodos" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import periodo from '../../api/periodos'
	//import Pagination from '../layout/Pagination'
	import loadingImage from '../../assets/images/block50.gif'
	import factura from "../../api/facturas";

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
				periodos: [],
				total: 0,

				periodoActivo: 0,
				meses: []
			}
		},
		methods: {
			cerrar_periodo(id_periodo,id_mes){


				this.$swal.fire({
					title: 'Esta seguro de cerrar este mes?',
					text: "Se procederá a consolidar los movimientos contables para este mes",
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, consolidar'
				}).then((result) => {
					if (result.value) {
						periodo.cerrar(
								{
									id_periodo : id_periodo,
									id_mes:id_mes
								},
								data => {
									this.$swal.fire(
											'Cierre del mes completado',
											'Se ha completado el cierre del mes',
											'success'
									)
									this.obtener();
								},
								err => {
									this.$swal.fire(
											'Hubo un error al cerrar el mes!',
											err,
											'warning'
									)
								}
						);



					}
				})

			},
			periodoActivoClass(periodo) {
				if (this.periodoActivo === periodo.id_periodo_fiscal) {
					return {
						'text-right': true,
						'active': true
					}
				} else {
					return {
						'text-right': true
					}
				}
			},
			seleccionarPeriodo(periodo) {
				this.periodoActivo = periodo.id_periodo_fiscal
				//this.obtenerPermisos(periodo.id_periodo_fiscal)
				this.meses = periodo.meses_periodo;
			},

			obtener() {
				var self = this;
				self.loading = true;
				self.periodoActivo= 0
				self.meses = ''
				periodo.obtener(self.filter, data => {
					self.periodos = data.rows
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
	
	 .table-groups {
    	tr {
    		&.active {
    			color: #fff;
	    		background: #0275d8;
	    	}
	    	.group-list {
	    		display: -webkit-box;
	    		display: -moz-box;
	    		display: -ms-flexbox;
	    		display: -webkit-flex;
	    		display: flex;
	    		i {
	    			margin-top: auto;
	    			margin-bottom: auto;
	    			margin-left: auto;
	    		}
	    	}
    	}
    }
</style>
