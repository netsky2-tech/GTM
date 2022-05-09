<template>
	<div class="main">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Permisos</div>
						<div class="box-description">Administrar permisos de menu por roles </div>
						<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-administracion' }"> Módulo administración</router-link>> Permisos</div>
					</div>
					<div class="row">
						<div class="col-md-4">
							<div class="table-responsive">
								<table class="table table-striped table-bordered table-groups">
									<thead>
										<tr>
											<th>Roles</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="rol in roles" :key="rol.id_rol">
											<td @click="seleccionarRol(rol)" :class="rolActivoClass(rol)">
												<div class="group-list">
													<div class="text">{{ rol.descripcion }}</div>
													<i class="pe-7s-angle-right"></i>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="col-md-8">
							<div class="privilege-wrapper">
								<div class="table-responsive">
									<table class="table table-striped table-bordered table-menus">
										<thead>
											<tr>
												<th>Permisos de Menus</th>
											</tr>
										</thead>
										<tbody>
										<template v-for="modulos in menus">
											<tr>
												<td>
													<div class="tree-menu">
														<!--@click="hideMenu(menu)"-->
														<div  class="menu-icon">
															<i class="pe-7s-folder"></i>
														</div>
														<label>
															<input type="checkbox" :value="modulos.id_menu" v-model="permisos"> {{ modulos.nombre_menu}}
														</label>
													</div>
												</td>
											</tr>

											<template v-for="seccion in modulos.menu_secciones">
												<tr >
													<td class="child-menu">
														<div class="tree-menu">
															<!--@click="hideMenu(menu)"-->
															<div  class="menu-icon">
																<i class="pe-7s-folder"></i>
															</div>
															<label>
																{{ seccion.descripcion }}
															</label>
														</div>
													</td>
												</tr>

												<template v-for="menus2 in seccion.seccion_menus">
													<tr >
														<td class="child-menu2">
															<div class="tree-menu">
																<!--@click="hideMenu(menu)"-->
																<div  class="menu-icon">
																	<i class="pe-7s-folder"></i>
																</div>
																<label>
																	<input type="checkbox" :value="menus2.id_menu" v-model="permisos"> {{ menus2.nombre_menu }}
																</label>
															</div>
														</td>
													</tr>

													<template v-for="seccion2 in menus2.menu_detalle.menu_secciones">
														<template v-for="menus3 in seccion2.seccion_menus">
														<tr >
															<td class="child-menu3">
																<div class="tree-menu">
																	<!--@click="hideMenu(menu)"-->
																	<div  class="menu-icon">
																		<i class="pe-7s-folder"></i>
																	</div>
																	<label>
																		<input type="checkbox" :value="menus3.id_menu" v-model="permisos"> {{ menus3.nombre_menu }}
																	</label>
																</div>
															</td>
														</tr>

														</template>
													</template>

												</template>

											</template>

										</template>

										</tbody>
									</table>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12 text-right">
									<button class="btn btn-primary mt-3" @click="guardarPermisos">
										<i class="pe-7s-check"></i> Guardar permisos
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

		<template v-if="loading">
			<BlockUI :message="msg" :url="url"></BlockUI>
		</template>
		
	</div>
</template>

<script type="text/ecmascript-6">
	import permiso from '../../api/permisos'
	import rol from '../../api/rol'
	import menu from '../../api/menu'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				loading: true,
				msg: 'Cargando opciones...espere un momento',
				url: '/public' + loadingImage,
				rolActivo: 0,
				permisos: [],
				hiddenMenus: [],
				roles: [],
				menus: []
			}
		},
		methods: {
			obtenerTodosRoles() {
				var self = this
				rol.obtenerTodosRoles(data => {
					self.roles = data
					self.rolActivo = self.roles[0].id_rol
					self.obtenerPermisos(self.rolActivo)
				}, err => {
					console.log(err)
				})
			},
			obtenerMenus() {
				var self = this
				menu.obtenerMenusTodos(data => {
					self.menus = data.menus
					self.roles = data.roles
					self.initSlimScroll()
					self.loading=false;
				}, err => {
					console.log(err)
				})
			},
			obtenerPermisos(rolId) {
				var self = this
				self.loading=true;
				permiso.obtenerPermisos({
					id_rol: this.rolActivo
				}, data => {
					self.permisos = data;
					self.loading=false;
				}, err => {
					console.log(err)
				})
			},
			isChild(menu) {
				if (menu.id_menu_padre != 0) {
					//console.log(menu.tipo_menu);
					if(menu.tipo_menu == 2){
					return {
						'child-menu': true
					}
					}

						if(menu.tipo_menu == 3){
					return {
						'child-menu2': true
					}
					}
					
				}
			},
			/*hideMenu(menu) {
				
				if (menu.tipo_menu == 1 || menu.tipo_menu == 2) {
					var menus = this.hiddenMenus.filter((menuId) => {
						return menuId == menu.id_menu
					})
					if (!menus.length) {
						this.hiddenMenus.push(menu.id_menu)
					} else {
						this.hiddenMenus.forEach((value, key) => {
							if (value == menu.id_menu) {
								this.hiddenMenus.splice(key, 1)
							}
						})
					}
				}
			},*/
			rolActivoClass(rol) {
				if (this.rolActivo == rol.id_rol) {
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
			seleccionarRol(rol) {
				this.rolActivo = rol.id_rol;
				this.obtenerPermisos(rol.id_rol)
			},
			initSlimScroll() {
				$('.privilege-wrapper').slimScroll({
					color: 'rgb(142, 142, 142)',
					height: 600
				})
			},
			guardarPermisos() {
				var self = this
				self.loading=true;
				permiso.guardarPermisos({
					id_rol: self.rolActivo,
					menus: self.permisos
				}, data => {
					//console.log(data);
					alertify.success("Permisos actualizados correctamente",5);
					/*this.$store.dispatch('global/obtenerMenusUsuario').catch((err) => {
						console.log(err)
					})*/
					self.loading=false;
				}, err => {
					console.log(err)
				})
			},
			treeAction(menu) {
				
				var isChecked = this.permisos.filter(menuId => menuId == menu.id_menu)
				
				if (menu.tipo_menu == 1 || menu.tipo_menu == 2) {
					var childMenus = this.menus.filter((childMenu) => {
						return childMenu.id_menu_padre == menu.id_menu
					})
					
					childMenus.forEach((childMenu, childMenuKey) => {
						this.permisos.forEach((menuId, permisoKey) => {
							
							if (childMenu.id_menu == menuId) {
								this.permisos.splice(permisoKey, 1)
							}
						})

						if(menu.tipo_menu == 1){
						var subchildMenus = this.menus.filter((subchildMenu) => {
						return subchildMenu.id_menu_padre == childMenu.id_menu
						})

						subchildMenus.forEach((subchildMenu, subchildMenuKey) => {	
						this.permisos.forEach((menuId, permisoKey) => {
							
							if (subchildMenu.id_menu == menuId) {	
								this.permisos.splice(permisoKey, 1)
							}
						})
						})
						}

					})
				
					if (!isChecked.length) {
						
						childMenus.forEach((childMenu, childMenuKey) => {
							this.permisos.push(childMenu.id_menu)

						if(menu.tipo_menu == 1){
						var subchildMenus = this.menus.filter((subchildMenu) => {
						return subchildMenu.id_menu_padre == childMenu.id_menu
						})

						subchildMenus.forEach((subchildMenu, subchildMenuKey) => {
							this.permisos.push(subchildMenu.id_menu)
						})
						}
						})
					}

				} else {
					var childMenus = this.menus.filter((childMenu) => {
						return childMenu.id_menu_padre == menu.id_menu_padre
					})

					this.$nextTick(() => {
						var checkedMenus = childMenus.filter((menu) => {
							return this.permisos.includes(menu.id_menu)
						})
						
						if (checkedMenus.length) {
							if (!this.permisos.includes(menu.id_menu_padre)) {
								this.permisos.push(menu.id_menu_padre)
								var parentMenus = this.menus.filter((parentMenu) => {
								return parentMenu.id_menu == menu.id_menu_padre
								})
								if (!this.permisos.includes(parentMenus[0].id_menu_padre)) {
									this.permisos.push(parentMenus[0].id_menu_padre)
								}
							}
						}
					})
				}
			}
		},
		mounted() {
			//this.obtenerTodosRoles()
			this.obtenerMenus()
		}
    }
</script>

<style lang="scss" scoped>
    .table-groups {
    	td {
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
    .table-menus {
    	border: 0;
    	th {
    		border-top: 0px;
    	}
	    i {
	    	font-size: 18px;
	    	margin-right: 13px;
	    }
	    .tree-menu {
	    	display: -webkit-box;
	    	display: -moz-box;
	    	display: -ms-flexbox;
	    	display: -webkit-flex;
	    	display: flex;
	    	.menu-icon {
	    		margin-top: 2px;
	    	}
	    	input[type="checkbox"] {
	    		margin-top: 6px;
	    		margin-right: 3px;
	    	}
	    }
	    .child-menu {
	        padding-left: 50px;
		}
		 .child-menu2 {
	        padding-left: 100px;
        }
		.child-menu3 {
			padding-left: 130px;
		}
    }
    .privilege-wrapper {
    	border-top: 1px solid #f7f6f6;
    	border-bottom: 1px solid #f7f6f6;
    }
</style>