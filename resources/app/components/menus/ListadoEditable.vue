<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Menus del sistema</div>
				<div class="box-description">Lista de menus y administración de menus</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-administracion' }"> Módulo administración</router-link>> Menus</div>
			</div>
			<div class="row">
				<div @keyup.enter="filter.page = 1;obtenerMenus();" class="col-md-6 sm-text-center form-inline">
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="nombre_menu">Nombre menu</option>
						<option value="menu_seccion">Nombre sección</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<button class="btn btn-info" @click="filter.page = 1;obtenerMenus();"><i class="pe-7s-search"></i> Buscar</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Nombre Menu</th>
							<th class="text-center table-number">activo</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="menu in menus" :key="menu.id_menu">
							<td>{{ menu.nombre_menu }}</td>
							<td class="text-center">
							 <div v-if="menu.activo==1">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								<router-link tag="a" :to="{ name: 'actualizar-menu', params: { id_menu: menu.id_menu } }"><i class="icon-pencil"></i></router-link>
								<!--<template v-if="menu.activo==1">
								<a @click="desactivarMenu(menu.id_menu)" href="javascript:;"><i class="fa fa-trash-o"></i></a>
                                </template>
                                <template v-else>
								<a @click="activarMenu(menu.id_menu)" href="javascript:;"><i class="fa fa-check-square"></i></a>
                                </template>-->
							</td>
						</tr>
						<tr v-if="!menus.length">
							<td class="text-center" colspan="3">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="menus" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import menu from '../../api/menu'
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
						field: 'nombre_menu',
						value: ''
					}
				},
				menus: [],
				total: 0
			}
		},
		methods: {
			obtenerMenus() {
				var self = this;
				self.loading = true;
				menu.obtenerMenus(self.filter, data => {
					self.menus = data.rows
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
				this.obtenerMenus()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerMenus()
            },
            desactivarMenu(menuId) {
            	var self = this
				menu.desactivarMenu({
					id_menu: menuId
				}, data => {
					this.obtenerMenus()
				}, err => {
					console.log(err)
				})
			},
			activarMenu(menuId) {
            	var self = this
				menu.activarMenu({
					id_menu: menuId
				}, data => {
					this.obtenerMenus()
				}, err => {
					console.log(err)
				})
			}
		},
		/*components: {
			//'pagination': Pagination
		},*/
		mounted() {
			this.obtenerMenus()
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