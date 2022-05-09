<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Conciliar</div>
				<div class="box-description">Lista de movimientos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-administracion' }"> Módulo administración</router-link>> Reordenar menus</div>
			</div>


			<div class="row">
				<br>
				<div class="col-3">
					<h3>Datos de Registrados en Sistema Contable</h3>
					<draggable class="list-group" :list="form.registros_contabilidad" group="contabilidad" @change="log">
						<div
								class="list-group-item"
								v-for="(element, index) in form.registros_contabilidad"
								:key="element.name"
						>
							{{ element.name }} {{ index }}
						</div>
					</draggable>
				</div>

				<div class="col-3">
					<h3>Sistema Contable</h3>
					<draggable  class="list-group" :list="form.conciliado_contabilidad" group="contabilidad" @change="log">
						<div
								class="list-group-item"
								v-for="(element, index) in form.conciliado_contabilidad"
								:key="element.name"
						>
							{{ element.descripcion }} {{ index }}
						</div>
					</draggable>
				</div>

				<div class="col-3">
					<h3>Estado de Cuenta</h3>
					<draggable class="list-group" :list="form.conciliado_estado_cuenta" group="estado_cuenta" @change="log">
						<div
								class="list-group-item"
								v-for="(element, index) in form.conciliado_estado_cuenta"
								:key="element.name"
						>
							{{ element.descripcion }} {{ index }}
						</div>
					</draggable>
				</div>
				<div class="col-3">
					<h3>Datos del Estado de Cuenta Bancario</h3>
					<draggable class="list-group" :list="form.registros_estado_cuenta" group="estado_cuenta" @change="log">
						<div
								class="list-group-item"
								v-for="(element, index) in form.registros_estado_cuenta"
								:key="element.name"
						>
							{{ element.descripcion }} {{ index }}
						</div>
					</draggable>
				</div>

			</div>
			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import conciliacion from '../../api/conciliacion_bancaria'
	import loadingImage from "../../assets/images/block50.gif";


	export default {
			data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,

				form:{
					registros_contabilidad:[],
					registros_estado_cuenta:[],
					conciliado_contabilidad:[],
					conciliado_estado_cuenta:[],
				},
				/*list1: [
					{ name: "John", id: 1 },
					{ name: "Joao", id: 2 },
					{ name: "Jean", id: 3 },
					{ name: "Gerard", id: 4 }
				],
				list2: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list3: [
					{ name: "rta", id: 8 },
					{ name: "rgom", id: 9 },
					{ name: "fred", id: 10 }
				],
				list4: [
					{ name: "rta2", id: 11 },
					{ name: "rgom3", id: 12 },
					{ name: "fred4", id: 13 }
				]*/
			}
		},
		methods: {
			log: function(evt) {
				window.console.log(evt);
			},

			obtenerMenus() {
				var self = this
				menu.obtenerMenusOrdenados(data => {
					self.menus = data
				}, err => {
					console.log(err)
				})
			},
			obtenerEstadoCuenta() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				conciliacion.obtenerEstadoCuenta({
					id_estado_cuenta_banco: this.$route.params.id_estado_cuenta_banco,
					cargar_dependencias:false
				}, data => {
					console.log(data.estado_cuenta);
					self.form.registros_estado_cuenta = data.estado_cuenta.estado_cuenta_movimientos;
					self.loading = false;
				}, err => {
					alertify.error(err.id_estado_cuenta_banco[0],5);
					this.$router.push({
						name: 'listado-estados-cuentas-bancarias'
					});
				})
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
			this.obtenerEstadoCuenta()
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