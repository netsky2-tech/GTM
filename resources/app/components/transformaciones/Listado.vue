<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar transformaciones</div>
				<div class="box-description">Listado de transformaciones</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo inventario</router-link>> transformaciones</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-transformaciones' }">
						<i class="pe-7s-plus"></i> Crear nueva transformación
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtenerTransformacion();" class="col-md-6 sm-text-center form-inline justify-content-end">
					<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox">Mostrar todo</label>
					</div>
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="codigo">Código</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<p>
						<button class="btn btn-info" @click="filter.page = 1;obtenerTransformacion();"><i class="pe-7s-search"></i> Buscar</button>
					</p>
				</div>
			</div>
			<div class="table-responsive mt-4">
				<table class="table table-striped table-bordered">
					<thead>
					<tr>
						<th></th>
						<th>Código</th>
						<th>Bodega</th>
						<th>total</th>
						<!--<th>Unidad de medida</th>-->
						<th class="text-center table-number">Estado</th>
						<th class="text-center action">Opciones</th>
					</tr>
					</thead>
					<tbody>
					<template v-for="(transformacion,key) in transformaciones">
						<tr :key="transformacion.id_transformacion">
							<td class="detail-link">
								<div v-tooltip="'Mostrar detalle de la transformación'" @click="mostrarDetalle(key)" class="link"></div>
							</td>
							<td>{{ transformacion.codigo }}</td>
							<td>{{ transformacion.descripcion }}</td>
							<td>{{ transformacion.total_conversiones +' KG' }}</td>
							<!--<td>{{ producto.unidad_medida.descripcion+' ('+producto.unidad_medida.unidad_medida+')' }}</td>-->
							<td class="text-center">
								<div v-if="transformacion.estado === 1">
									<span class="badge badge-success">Registrada</span>
								</div>
								<div v-if="transformacion.estado === 2">
									<span class="badge badge-grey">Borrador</span>
								</div>
								<div v-if="transformacion.estado === 3">
									<span class="badge-blue">Emitida</span>
								</div>
							</td>
							<td class="text-center">
								<router-link tag="a" :to="{ name: 'actualizar-transformaciones', params: { id_transformacion: transformacion.id_transformacion } }"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>
						<tr v-if="transformacion.mostrar" :key="transformacion.id_transformacion">
							<td></td>
							<td colspan="8">
								<div class="row">
									<div class="col-sm-6">
										<table class="table table-striped table-bordered">
											<thead>
											<tr>
												<th>Código salida</th>
												<th>Producto salida</th>
												<th>Presentación salida</th>
												<th>Cantidad Salida</th>
											</tr>
											</thead>
											<tbody>
											<tr v-for="transformacion_detalle_salida in transformacion.salida_transformacion" :key="transformacion_detalle_salida.id_detalle_transformacion">
												<td>{{transformacion_detalle_salida.codigo}}</td>
												<td>{{transformacion_detalle_salida.descripcion_producto_salida}}</td>
												<td>{{transformacion_detalle_salida.descripcion_presentacion_salida}}</td>
												<td>{{transformacion_detalle_salida.cantidad_salida}}</td>
											</tr>
											</tbody>
											<tfoot></tfoot>
										</table>
									</div>
									<div class="col-sm-6">
								<table class="table table-striped table-bordered">
									<thead>
									<tr>
										<th>Código entrada</th>
										<th>Producto entrada</th>
										<th>Presentación entrada</th>
										<th>Cantidad entrada</th>
									</tr>
									</thead>
									<tbody>
									<tr v-for="transformacion_detalle in transformacion.entrada_transformacion" :key="transformacion_detalle.id_detalle_transformacion_entrada">
										<td>{{transformacion_detalle.codigo}}</td>
										<td>{{transformacion_detalle.descripcion_producto_entrada}}</td>
										<td>{{transformacion_detalle.descripcion_presentacion_entrada}}</td>
										<td>{{transformacion_detalle.cantidad_entrada}}</td>
									</tr>
									</tbody>
									<tfoot></tfoot>
								</table>
									</div>
								</div>
							</td>
							<td></td>
						</tr>
					</template>
					<tr v-if="!transformaciones.length">
						<td class="text-center" colspan="8">Sin datos</td>
					</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="transformaciones" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>


			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import transformacion from '../../api/transformaciones'
	import loadingImage from '../../assets/images/block50.gif'

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
						field: 'codigo',
						value: '',
						status:0
					}
				},

				transformaciones_entradas: [],
				transformaciones_salidas: [],
				transformaciones: [],
				total: 0,
				descargando:false,
			}
		},
		methods: {
			downloadItem (extension) {

				var self = this;
				console.log(self.descargando);
				if(!self.descargando) {
					let url = 'productos/ps/reporte/'+extension;
					self.descargando = true;
					self.loading = true;
					alertify.success("Descargando datos, espere un momento.....", 5);
					axios.get(url, {responseType: 'blob'})
							.then(({data}) => {
								let blob = new Blob([data], {type: 'application/pdf'});

								extension === 'xls' ? blob =  new Blob([data], {type: 'application/octet-stream'}) : blob = new Blob([data], {type: 'application/pdf'});

								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteProductosServicios.'+extension;
								link.click()
								this.descargando = false;
								self.loading = false;
							}).catch(function (error) {
						alertify.error("Error Descargando archivo.....", 5);
						self.descargando = false;
						self.loading = false;
					})


				}else{
					alertify.warnng("Espere a que se complete la descarga anterior",5);
				}
			},
			obtenerTransformacionesEntradas() {
				var self = this;
				self.loading = true;
				transformacion.obtenerTransformacionesEntradas(self.filter, data => {
					self.transformaciones_entradas = data.rows
					self.total = data.total
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},obtenerTransformacion() {
				var self = this;
				self.loading = true;
				transformacion.obtenerTransformacion(self.filter, data => {
					data.rows.forEach((transformaciones,key)=>{
						data.rows[key].mostrar = 0;
					});
					self.transformaciones = data.rows
					self.total = data.total
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			mostrarDetalle(key){
				if(this.transformaciones[key].mostrar){
					this.transformaciones[key].mostrar = 0;
				}else{
					this.transformaciones[key].mostrar = 1;
				}
			},
			obtenerTransformacionesSalidas() {
				var self = this;
				self.loading = true;
				transformacion.obtenerTransformacionesSalidas(self.filter, data => {
					self.transformaciones_salidas = data.rows
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
				this.obtenerTransformacion()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerTransformacion()
            },
		},
		mounted() {
			this.obtenerTransformacionesEntradas()
			this.obtenerTransformacionesSalidas()
			this.obtenerTransformacion()
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
    	    width: 180px;
        }
        .detail-link {
        	width: 60px;
        	position: relative;
        	.link {
        		width: 10px;
        		height: 4px;
        		margin-left: auto;
        		margin-right: auto;
        		cursor: pointer;
        		margin-top: 8px;
        		background-color: #595959;
        		border: 1px solid #595959;
        		&:before {
        			content: "";
        				width: 4px;
        				height: 10px;
        				left: 0px;
        				right: 0px;
        				cursor: pointer;
        				margin: 0px auto;
        				margin-top: -4px;
        				position: absolute;
        				background-color: #595959;
        				border: 1px solid #595959;
        			}
        		}
        }
    }
</style>