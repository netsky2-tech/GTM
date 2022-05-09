<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Movimientos de Batería específica</div>
				<div class="box-description">Listado de movimientos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo inventario</router-link>> Movimiento batería</div>
			</div>

			<div class="row">

				<div class="col-sm-3">
					<div class="form-group">
						<label for>Código Garantía Bateria</label>
						<input @focus="$event.target.select()" @keydown.enter="buscarBateria" class="form-control" ref="bateria"  v-model="bateria_busqueda">
						<ul class="error-messages">
							<li
									:key="message"
									v-for="message in errorMessages.codigo_bateria"
									v-text="message"
							></li>
						</ul>
					</div>
				</div>
			</div>
			<br>
			<div class="alert alert-success">
				<span><strong>Datos de Producto</strong></span>
			</div>
			<div class="row">
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Nombre producto</label>
						<input readonly class="form-control" placeholder="Nombre producto" v-model="descripcion_producto">
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Código Identificador</label>
						<input readonly class="form-control" placeholder="Código identificador" v-model="codigo_garantia">
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Fecha Activación</label>
						<input readonly class="form-control" placeholder="Fecha Activación" v-model="fecha_activacion">
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Estado Actual</label>
						<input readonly class="form-control" placeholder="Estado Actual" v-model="estado_bateria">
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Fecha Ingreso</label>
						<input readonly class="form-control" placeholder="Código producto" v-model="fecha_ingreso">
					</div>
				</div>

				<!--
				reservada : "",
				estado_bateria : "",
				descripcion_producto: "",
				nombre_comercial: "",
				fecha_activacion : "",
				fecha_ingreso : ""
				-->

			</div>

			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th class="text-center table-number">Fecha</th>
							<th class="text-center table-number">Bodega</th>
							<th class="text-center table-number">Tipo Movimiento</th>
							<th class="text-center table-number">Usuario</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(movimiento, index) in movimientos" :key="movimiento.identificador">
							<td class="text-center">{{ movimiento.fecha_mov }}</td>
							<td class="text-center">{{ movimiento.bodega }}</td>
							<td class="text-center">
								<template v-if="movimiento.tipo_mov==='Entrada'">
									<router-link target="_blank" :to="{ name: 'mostrar-entrada', params: { id_entrada: movimiento.id_mov } }"><i class="icon-eye"></i> {{movimiento.tipo_movimiento_especifico+' No.('+movimiento.numero_documento+')'}}</router-link>
								</template>

								<template v-if="movimiento.tipo_mov==='Salida'">
									<router-link target="_blank" :to="{ name: 'mostrar-salida', params: { id_salida: movimiento.id_mov } }" ><i class="icon-eye"></i> {{movimiento.tipo_movimiento_especifico+' No.('+movimiento.numero_documento+')'}}</router-link>
								</template>
							</td>
							<td class="text-center">{{movimiento.usuario_accion}}</td>
						</tr>
						<tr v-if="!movimientos.length">
							<td class="text-center" colspan="4">Sin datos</td>
						</tr>
					</tbody>
					<tfoot>

					</tfoot>
				</table>
			</div>
			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	import movimientos_productos from '../../api/movimientos_productos'
	import loadingImage from "../../assets/images/block50.gif";
	import bateria from "../../api/baterias";
export default {
			data() {
			return {
				loading: false,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,
				bateria_busqueda: "",
				codigo_garantia : "",
				reservada : "",
				estado_bateria : "",
				descripcion_producto: "",
				nombre_comercial: "",
				fecha_activacion : "",
				fecha_ingreso : "",
				form:{
					productoB: {},
					bodega:{
					id_bodega:0
					},
				},
				movimientos: [],
				total: 0,
				total_unidadesx:0,
				total_saldox:0,
				costo_promediox:0,
				errorMessages: []
			}
		},
		methods: {
			buscarBateria() {
				var self = this;
				self.loading = true;
				//self.$refs.precio_unitario.focus();
				bateria.buscarCodigoBateriaCualquiera({
					codigo_bateria: self.bateria_busqueda,
				}, data => {
					if(data !== null){
						self.$refs.bateria.focus();
						self.bateria_busqueda='';
						self.movimientos = data.movimientos_bateria;

						self.codigo_garantia = data.bateria.codigo_garantia;
						self.reservada = data.bateria.reservada;
						self.estado_bateria = data.bateria.estado_bateria;
						self.descripcion_producto = data.bateria.descripcion_producto;
						self.nombre_comercial = data.bateria.nombre_comercial;
						self.fecha_activacion = data.bateria.fecha_activacion;
						self.fecha_ingreso = data.bateria.fecha_ingreso;

					}else{
						alertify.warning("No se encuentra esta batería.",5);
						self.$refs.bateria.focus();
						self.bateria_busqueda='';
						self.codigo_garantia = '';
						self.reservada = '';
						self.estado_bateria = '';
						self.descripcion_producto = '';
						self.nombre_comercial = '';
						self.fecha_activacion = '';
						self.fecha_ingreso = '';
					}
					self.errorMessages=[];
					self.loading = false;
				}, err => {
					//console.log(err);
					self.errorMessages=err;
					self.bateria_busqueda='';
					self.codigo_garantia = '';
					self.reservada = '';
					self.estado_bateria = '';
					self.descripcion_producto = '';
					self.nombre_comercial = '';
					self.fecha_activacion = '';
					self.fecha_ingreso = '';
					if(err.codigo_bateria){
						self.$refs.bateria.focus();
						self.bateria_busqueda='';
						alertify.warning("No se encuentra esta batería.",5);
					}
					self.loading = false;
				})

			},

		},
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

	.btn-generar
	{
		margin-top: 33px;
	}

	.check-label2 {
		margin-top: 40px;
	}
</style>
