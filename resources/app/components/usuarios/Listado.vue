<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Control de usuarios</div>
				<div class="box-description">Listado de usuarios</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-administracion' }"> Módulo administración</router-link>> Usuarios</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link :to="{ name: 'registrar-usuario' }" class="btn btn-primary" tag="button">
						<i class="pe-7s-plus"></i> Registrar Nuevo Usuario
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtenerUsuarios();" class="col-md-6 sm-text-center form-inline justify-content-end">
					<select class="form-control mb-1 mr-sm-1 mb-sm-0 search-field" v-model="filter.search.field">
						<option value="usuario">Usuario</option>
					</select>
					<input class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text" v-model="filter.search.value">
					<button @click="filter.page = 1;obtenerUsuarios();" class="btn btn-primary"><i class="pe-7s-search"></i> Buscar</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Nombre completo</th>
							<th>Usuario</th>
							<th>Rol</th>
							<!--<th>Sucursal</th>-->
							<th class="text-center table-number">activo</th>
							<th class="text-center action">Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr :key="usuario.id_usuario" v-for="usuario in usuarios">
						<template v-if="usuario.trabajador">
							<td>{{ usuario.trabajador.primer_nombre + ' ' +(usuario.trabajador.segundo_nombre?usuario.trabajador.segundo_nombre:'') + ' ' + usuario.trabajador.primer_apellido + ' ' + (usuario.trabajador.segundo_apellido?usuario.trabajador.segundo_apellido:'')}}</td>
							<td>{{ usuario.usuario }}</td>
							<td>{{ usuario.rol.descripcion }}</td>
							<!--<template v-if="usuario.id_sucursal>0">
							<td>{{ usuario.sucursal.descripcion }}</td>
							</template>
							<template v-else>
								<td>{{ "Todas las sucursales" }}</td>
							</template>-->
							<td class="text-center">
							 <div v-if="usuario.estado===1">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								<router-link tag="a" :to="{ name: 'actualizar-usuario', params: { id_usuario: usuario.id_usuario } }"><i class="icon-pencil"></i></router-link>
							</td>
						</template>
						<tr v-if="!usuarios.length">
							<td class="text-center" colspan="8">Sin registros</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination :items="usuarios" :limit="filter.limit" :limitOptions="filter.limitOptions" :page="filter.page" :total="total" @changeLimit="changeLimit" @changePage="changePage"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import usuarios from '../../api/usuarios'
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
						field: 'usuario',
						value: ''
					}
				},
				usuarios: [],
				total: 0
			}
		},
		methods: {
			obtenerUsuarios() {
				var self = this
				self.loading = true;
				usuarios.obtenerUsuarios(self.filter, data => {
					self.usuarios = data.rows
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
				this.obtenerUsuarios()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerUsuarios()
            },
		},
		/*components: {
			'pagination': Pagination
		},*/
		mounted() {
			this.obtenerUsuarios()
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