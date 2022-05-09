<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Reordenar Menús</div>
				<div class="box-description">Lista de menus</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-administracion' }"> Módulo administración</router-link>> Reordenar menus</div>
			</div>

		<div class="row">
			<div class="col-md-6">
			<div class="table-responsive">

				 <div class="alert alert-info">
                        <span>Seleccione un menú para obtener sus correspondientes submenus.</span>
                    </div>
                    <hr>

				<table class="table table-bordered table-groups">
					<thead>
					</thead>
					<tbody>
					<template v-for="menu in menus">
						<tr>
							<th><i :class="menu.icon" aria-hidden="true"></i><strong>Módulo: {{ menu.nombre_menu}}</strong></th>
						</tr>
						<template v-for="seccion in menu.menu_secciones">
							<tr @click="seleccionarMenu(seccion)" :class="menuActivoClass(seccion)" :key="seccion.id_seccion">
								<td  class="text-center" >	<i aria-hidden="true"></i>{{ seccion.descripcion}}</td>
							</tr>
						</template>
						<tr v-if="!menus.length">
							<td class="text-center" colspan="1">Sin datos</td>
						</tr>
					</template>

					</tbody>
				</table>
			</div>
			</div>

			<div class="col-md-6">

                    <div class="alert alert-info">
                        <span>Arrastre los menus para reorganizar el orden de visualización.</span>
                    </div>
                    <hr>

				<draggable class="list-group" tag="ul" v-model="form.subMenus" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
					<transition-group type="transition" :name="'flip-list'">
					<li class="list-group-item" v-for="subMenu in form.subMenus" :key="subMenu.id_menu">
					
							<span>{{ subMenu.nombre_menu }}</span>
					</li>
					</transition-group>
				</draggable>

				<div class="content-box-footer text-right">
						<button type="button" class="btn btn-primary" @click="actualizarOrdenMenus" :disabled="btnAction != 'Guardar' ? true : false">{{ btnAction }}</button>
					</div>

			</div>
			</div>
		
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import menu from '../../api/menu'
	//import Pagination from '../layout/Pagination'
 	//import draggable from 'vuedraggable'

	export default {
			data() {
			return {
				menus: [],
				total: 0,
      editable: true,
      isDragging: false,
	  delayedDragging: false,
		  menuActivo: 0,
		 form: {
				subMenus: [],
				},
			  
			  btnAction: 'Guardar',
			}
		},
		methods: {
			actualizarOrdenMenus() {
				var self = this
				self.btnAction = 'Guardando, espere......'
				if(self.form.subMenus!==''){
				menu.actualizarOrdenMenus(self.form, data => {
					alertify.success("Datos actualizados",5);
					self.menuActivo=0;
					self.form.subMenus=[];
					self.btnAction = 'Guardar'
					self.obtenerMenus();
				}, err => {
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
				}else{
					alertify.warning("Debe seleccionar un menú",5);
					self.btnAction = 'Guardar'
				}
			},
			menuActivoClass(menu) {
				if (this.menuActivo === menu.id_seccion) {
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
			seleccionarMenu(menu) {
				this.menuActivo = menu.id_seccion
				this.form.subMenus=[];
				menu.seccion_menus.forEach((subMenus, key) => {
					this.form.subMenus.push({
						id_menu: subMenus.id_menu,
						id_seccion: subMenus.id_seccion,
						id_seccion_menu: subMenus.id_seccion_menu,
						secuencia:subMenus.menu_detalle.secuencia,
					nombre_menu: subMenus.nombre_menu
					});
				});
				//this.obtenerPermisos(menu.id_menu)
				    /* menu.sub_menus.forEach((subMenus, key) => {
						menu.sub_menus[key].secuenciaPadre = menu.secuencia;
					});*/
				//this.form.subMenus = menu.seccion_menus;
			},

			obtenerMenus() {
				var self = this
				menu.obtenerMenusTodos(data => {
					self.menus = data.menus
				}, err => {
					console.log(err)
				})
			},
		  onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    }
		},
		/*components: {
			draggable
		},*/

		  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost"
      };
    },
    listString() {
      return JSON.stringify(this.menus, null, 2);
    },
  
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  },

		mounted() {
			this.obtenerMenus()
		}
    }
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}

</style>


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