<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar productos</div>
				<div class="box-description">Listado de productos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo inventario</router-link>> Productos</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-producto' }">
						<i class="pe-7s-plus"></i> Crear nuevo producto
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtenerProductos();" class="col-md-6 sm-text-center form-inline justify-content-end">
					<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox">Mostrar todo</label>
					</div>
					<select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
						<option value="nombre_comercial">Nombre producto</option>
						<option value="codigo_sistema">Código</option>
					</select>
					<input v-model="filter.search.value" class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text">
					<p>
					<button class="btn btn-info" @click="filter.page = 1;obtenerProductos();"><i class="pe-7s-search"></i> Buscar</button>
					<a :disabled="descargando" @click.prevent="downloadItem('pdf')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-danger"><i aria-hidden="true" class="fa fa-file-pdf-o"></i></button></a>
					<a :disabled="descargando" @click.prevent="downloadItem('xls')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-success"><i aria-hidden="true" class="fa fa-file-excel-o"></i></button></a>
					</p>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th></th>
							<th>Código</th>
							<th>Nombre</th>
							<!--<th>Unidad de medida</th>-->
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="(producto,key) in productos">
						<tr :key="producto.id_producto">
							<td class="detail-link">
								<div v-tooltip="'Mostrar detalle de producto'" @click="mostrarDetalle(key)" class="link"></div>
							</td>
							<td>{{ producto.codigo_sistema }}</td>
							<td>{{ producto.nombre_comercial }}</td>
							<!--<td>{{ producto.unidad_medida.descripcion+' ('+producto.unidad_medida.unidad_medida+')' }}</td>-->
							<td class="text-center">
							 <div v-if="producto.activo">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								<router-link tag="a" :to="{ name: 'actualizar-producto', params: { id_producto: producto.id_producto } }"><i class="icon-pencil"></i></router-link>
							</td>
						</tr>
						<tr v-if="producto.mostrar" :key="producto.id_producto">
							<td></td>
							<td colspan="8">
								<table class="table table-striped table-bordered">
									<thead>
									<tr>
										<th>Presentaciones</th>
									</tr>
									</thead>
									<tbody>
										<tr v-for="productoDetalle in producto.presentaciones_producto" :key="productoDetalle.id_producto_presentacion">
											<td>{{productoDetalle.descripcion_presentacion}}</td>
										</tr>
									</tbody>
									<tfoot></tfoot>
								</table>
							</td>
							<td></td>
						</tr>
							</template>
						<tr v-if="!productos.length">
							<td class="text-center" colspan="8">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination @changePage="changePage" @changeLimit="changeLimit" :items="productos" :total="total" :page="filter.page" :limitOptions="filter.limitOptions" :limit="filter.limit"></pagination>


			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import producto from '../../api/productos'
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
						field: 'nombre_comercial',
						value: '',
						status:0
					}
				},
				productos: [],
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
					alertify.warning("Espere a que se complete la descarga anterior",5);
				}
			},
			mostrarDetalle(key) {
				if (this.productos[key].mostrar) {
					this.productos[key].mostrar = 0;
				} else {
					this.productos[key].mostrar = 1;
				}
			},
			obtenerProductos() {
				var self = this;
				self.loading = true;
				producto.obtenerProductos(self.filter, data => {
					data.rows.forEach((productos, key)=>{
						data.rows[key].mostrar = 0;
					});
					self.productos = data.rows;
					self.total = data.total;
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			changeLimit(limit) {
				this.filter.page = 1
				this.filter.limit = limit
				this.obtenerProductos()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerProductos()
            },
		},
		mounted() {
			this.obtenerProductos()
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