<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Anexos a EEFF</div>
				<div class="box-description">Lista EEFF y sus anexos</div>
			</div>

		<div class="row">
			<div class="col-md-6">
			<div class="table-responsive">

				 <div class="alert alert-info">
                        <span>Seleccione un estado financiero para obtener sus correspondientes anexos.</span>
                    </div>
                    <hr>

				<table class="table table-bordered table-groups">
					<thead>
						<tr>
							<th  class="text-center">Estados financiero</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="ef in eeff" :key="ef.id_estado_financiero" @click="seleccionarEF(ef)" :class="eeffActivoClass(ef)">
							<td  class="text-center" >{{ ef.nombre_estado_finaciero}}</td>
						</tr>
						<tr v-if="!eeff.length">
							<td class="text-center" colspan="1">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			</div>

			<div class="col-md-6">

                    <div class="alert alert-info">
                        <span>Arrastre los anexos para reorganizar el orden de visualización.</span>
                    </div>
                    <hr>

				<draggable class="list-group" tag="ul" v-model="form.anexos" v-bind="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
					<transition-group type="transition" :name="'flip-list'">
					<li class="list-group-item" v-for="anexo in form.anexos" :key="anexo.id_anexo">
					
							<span>{{ anexo.nombre_anexo }}</span>
					</li>
					</transition-group>
				</draggable>

				<div class="content-box-footer text-right">
						<button type="button" class="btn btn-primary" @click="actualizarOrdenAnexos" :disabled="btnAction != 'Guardar' ? true : false">{{ btnAction }}</button>
					</div>

			</div>
			</div>
		
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import eeff from '../../api/estados_financieros'
	import anexo from '../../api/anexos'
	//import Pagination from '../layout/Pagination'
 	//import draggable from 'vuedraggable'

	export default {
			data() {
			return {
				eeff: [],
				total: 0,
				editable: true,
				isDragging: false,
				delayedDragging: false,
				eeffActivo: 0,
				form: {
						 	anexos: [],
							},
			  btnAction: 'Guardar',
			}
		},
		methods: {
			actualizarOrdenAnexos() {
				var self = this
				self.btnAction = 'Guardando, espere......'
				if(self.form.anexos!=''){
				anexo.actualizarOrdenAnexos(self.form, data => {
					alertify.success("Datos actualizados",5);
					self.eeffActivo=0;
					self.btnAction = 'Guardar'
					self.form.anexos=[];
					self.obtenerEstadosFinancieros();
				}, err => {
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
				}else{
					alertify.warning("Debe seleccionar un estado financiero",5);
					self.btnAction = 'Guardar'
				}
			},
			eeffActivoClass(estado_financiero) {
				if (this.eeffActivo == estado_financiero.id_estado_financiero) {
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
			seleccionarEF(estado_financiero) {
				this.eeffActivo = estado_financiero.id_estado_financiero
				this.form.anexos = estado_financiero.listado_anexos;
			},

			obtenerEstadosFinancieros() {
				var self = this
				eeff.obtenerEstadosFinacierosLista(data => {
					self.eeff = data
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
			this.obtenerEstadosFinancieros()
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