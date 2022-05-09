<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Reordenar Módulos del Sistema</div>
				<div class="box-description">Lista de módulos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-administracion' }"> Módulo administración</router-link>> Reordenar Módulos</div>
			</div>

			<div class="col-md-12">

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
					self.form.subMenus='';
					self.btnAction = 'Guardar'
					self.obtenerModulos();
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
				if (this.menuActivo == menu.id_menu) {
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
			obtenerModulos(){
				var self = this
				//this.$auth.fetch();
				menu.obtenerModulos(data => {
					self.form.subMenus = data.rows
					self.loading=false;
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
			this.obtenerModulos()
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