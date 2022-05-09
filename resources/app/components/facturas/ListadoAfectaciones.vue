<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Tipos de Afectaciones</div>
				<div class="box-description">Listado de tipos de Afectaciones</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo caja y banco</router-link>> Afectaciones</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-afectacion' }">
						<i class="pe-7s-plus"></i> Registrar
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtener();" class="col-md-6 sm-text-center form-inline justify-content-end">
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="descripcion">Tipo Afectación</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button @click="filter.page = 1;obtener();" class="btn btn-info"><i class="pe-7s-search"></i> Buscar</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Descripción</th>
							<th class="text-center table-number">Porcentaje Minimo</th>
							<th class="text-center table-number">Porcentaje Maximo</th>
                            <th>Cuenta Contable</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="afectacion in afectaciones" :key="afectacion.id_afectacion">
							<td>{{ afectacion.descripcion }}</td>
							<td>{{ afectacion.valor }}</td>
							<td>{{ afectacion.valor_maximo }}</td>
                            <td>{{afectacion.afectacion_cuenta_contable?afectacion.afectacion_cuenta_contable.nombre_cuenta_completo:'N/D'}}</td>
							<td class="text-center">
							 <div v-if="afectacion.activo">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								<!--<template v-if="[1,2,3,4].indexOf(tipo.id_tipo_entrada) < 0">-->
								<router-link tag="a" :to="{ name: 'actualizar-afectacion', params: { id_afectacion: afectacion.id_afectacion } }"><i class="icon-pencil"></i></router-link>
								<!--</template>-->
							</td>
						</tr>
						<tr v-if="!afectaciones.length">
							<td class="text-center" colspan="5">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="afectaciones" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import afetaciones from '../../api/afectaciones'
	//import Pagination from '../layout/Pagination'

	export default {
		data() {
			return {
				filter: {
					page: 1,
					limit: 5,
					limitOptions: [5, 10, 15, 20],
					search: {
						field: 'descripcion',
						value: ''
					}
				},
				afectaciones: [],
				total: 0
			}
		},
		methods: {
			obtener() {
				var self = this
				afetaciones.obtener(self.filter, data => {
					self.afectaciones = data.rows
					self.total = data.total
				}, err => {
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
</style>