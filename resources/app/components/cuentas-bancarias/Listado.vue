<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Cuentas Bancarias</div>
				<div class="box-description">Listado de Cuentas Bancarias</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo caja y banco</router-link>> Cuentas bancarias</div>
			</div>
			<div class="row">
				<div class="col-md-3 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-cuenta-bancaria' }">
						<i class="pe-7s-plus"></i> Registrar Cuenta Bancaria
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtenerCuentasBancarias();" class="col-md-9 sm-text-center form-inline justify-content-end">
					<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
					</div>
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="numero_cuenta">Numero cuenta</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button class="btn btn-info" @click="filter.page = 1;obtenerCuentasBancarias();"><i class="pe-7s-search"></i> Buscar</button>

					<a :disabled="descargando" @click.prevent="downloadItem('pdf')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-danger"><i aria-hidden="true" class="fa fa-file-pdf-o"></i></button></a>
					<a :disabled="descargando" @click.prevent="downloadItem('xls')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-success"><i aria-hidden="true" class="fa fa-file-excel-o"></i></button></a>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Cuenta Contable</th>
							<th>Numero de cuenta</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="cuenta_bancaria in cuentas_bancarias" :key="cuenta_bancaria.id_cuenta_bancaria">
							<td>{{ cuenta_bancaria.cuenta_contable_cuenta_bancaria.cta_contable }}</td>
							<td>{{ cuenta_bancaria.banco_cuenta_bancaria.descripcion + ' ' + cuenta_bancaria.moneda_cuenta_bancaria.descripcion + '('+cuenta_bancaria.moneda_cuenta_bancaria.codigo + ') ' +  cuenta_bancaria.numero_cuenta }}</td>
							<td class="text-center">
							 <div v-if="cuenta_bancaria.estado===1">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								
								<router-link tag="a" :to="{ name: 'actualizar-cuenta-bancaria', params: { id_cuenta_bancaria: cuenta_bancaria.id_cuenta_bancaria } }"><i class="icon-pencil"></i></router-link>
							
								<!--<template v-if="cuenta_bancaria.estado==1">
								<a @click="desactivar(cuenta_bancaria.id_cuenta_bancaria)" href="javascript:;"><i class="fa fa-trash-o"></i></a>
                                </template>
                                <template v-else>
								<a @click="activar(cuenta_bancaria.id_cuenta_bancaria)" href="javascript:;"><i class="fa fa-check-square"></i></a>
                                </template>-->
							</td>
						</tr>
						<tr v-if="!cuentas_bancarias.length">
							<td class="text-center" colspan="6">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="cuentas_bancarias" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import cuenta_bancaria from '../../api/cuentas_bancarias'
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
						field: 'numero_cuenta',
						value: '',
						status:0
					}
				},
				cuentas_bancarias: [],
				total: 0,
				descargando:false,
			}
		},
		methods: {
			obtenerCuentasBancarias() {
				var self = this;
				self.loading = true;
				cuenta_bancaria.obtenerCuentasBancarias(self.filter, data => {
					self.cuentas_bancarias = data.rows
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
				this.obtenerCuentasBancarias()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerCuentasBancarias()
            },

			downloadItem (ext) {
				var self = this;
				if(!this.descargando){
					this.descargando=true;
					self.loading = true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.get('contabilidad/cuentas-bancarias/reporte/'+ext, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								ext === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'Reporte_CuentasBancarias.'+ext;
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
			this.obtenerCuentasBancarias()
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