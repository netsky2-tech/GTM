<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Control de empleados</div>
				<div class="box-description">Listado de empleados</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link class="btn btn-primary" tag="button" :to="{ name: 'registrar-empleado' }">
						<i class="pe-7s-plus"></i> Crear Nuevo Empleado
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtenerEmpleados();" class="col-md-6 sm-text-center form-inline justify-content-end">
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="nombre">Nombres</option>
						<option value="primer_apellido">Primer Apellido</option>
						<option value="segundo_apellido">Segundo Apellido</option>
						<option value="usuario">Usuario</option>
						<option value="descripcion">Rol</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button class="btn btn-primary" @click="filter.page = 1;obtenerEmpleados();"><i class="pe-7s-search"></i> Buscar</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Nombre completo</th>
							<th>Usuario</th>
							<th>Email</th>
							<th>Telefono</th>
							<th>Rol</th>
							<th class="text-center table-number">activo</th>
							<th class="text-center action">Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="empleado in empleados" :key="empleado.id_empleado">
							<td>{{ empleado.nombre + ' ' + empleado.primer_apellido + ' ' + empleado.segundo_apellido}}</td>
							<td>{{ empleado.usuario }}</td>
							<td>{{ empleado.email }}</td>
							<td>{{ empleado.telefono }}</td>
							<td>{{ empleado.descripcion }}</td>
							<td class="text-center">
							 <div v-if="empleado.activo==1">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								<router-link tag="a" :to="{ name: 'actualizar-empleado', params: { id_empleado: empleado.id_empleado } }"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>
						<tr v-if="!empleados.length">
							<td class="text-center" colspan="8">Sin registros</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="empleados" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import empleado from '../../api/empleados'
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
						field: 'nombre',
						value: ''
					}
				},
				empleados: [],
				total: 0
			}
		},
		methods: {
			obtenerEmpleados() {
				var self = this;
				self.loading = true;
				empleado.obtenerEmpleados(self.filter, data => {
					self.empleados = data.rows
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
				this.obtenerEmpleados()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerEmpleados()
            },
		},
		/*components: {
			'pagination': Pagination
		},*/
		mounted() {
			this.obtenerEmpleados()
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