<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Administrar Baterías</div>
				<div class="box-description">Listado de Baterías</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo inventario</router-link>> Baterías</div>
			</div>
			<div class="row">
				<div class="col-md-6 sm-text-center">
					<router-link :to="{ name: 'registrar-bateria' }" class="btn btn-success" tag="button">
						<i class="pe-7s-plus"></i> Registrar Batería
					</router-link>
				</div>
				<div @keyup.enter="filter.page = 1;obtenerBaterias();" class="col-md-6 sm-text-center form-inline justify-content-end">
					<div class="form-group check-label">
						<label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
					</div>
					<select class="form-control mb-1 mr-sm-1 mb-sm-0 search-field" v-model="filter.search.field">
						<option value="nombre_comercial">Modelo</option>
						<option value="descripcion">Descripcion</option>
						<option value="codigo_barra">Código Barras</option>
						<option value="codigo_sistema">Código Sistema</option>
					</select>
					<input class="form-control mb-1 mr-sm-1 mb-sm-0" placeholder="Buscar" type="text" v-model="filter.search.value">
					<button @click="filter.page = 1;obtenerBaterias();" class="btn btn-info"><i class="pe-7s-search"></i> Buscar</button>
				</div>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th></th>
							<th>Código Sistema</th>
							<th>Modelo</th>
							<th>Descripción</th>
							<th>Unidad de medida</th>
							<th>Material</th>
							<th>Sub Aplicación</th>
							<th>Meses Garantía</th>
							<th class="text-center table-number">Estado</th>
							<th class="text-center action">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="(bateria,key) in baterias">
						<tr>
							<td class="detail-link">
									<div @click="mostrarDetalles(key)" class="link"></div>
							</td>

							<td>{{ bateria.codigo_sistema }}</td>
							<td>{{ bateria.nombre_comercial }}</td>
							<td>{{ bateria.descripcion }}</td>
							<td>{{ bateria.unidad_medida.descripcion+' ('+bateria.unidad_medida.unidad_medida+')' }}</td>
							<td>{{ bateria.producto_detalles_baterias.bateria_material? bateria.producto_detalles_baterias.bateria_material.descripcion:'N/D' }}</td>
							<td>{{ bateria.producto_detalles_baterias.bateria_sub_aplicacion? bateria.producto_detalles_baterias.bateria_sub_aplicacion.descripcion:'N/D' }}</td>
							<td>{{ bateria.producto_detalles_baterias.garantia }}</td>
							<td class="text-center">
							 <div v-if="bateria.activo">
                              <span class="badge badge-success">Activo</span>
                             </div>
                                 <div v-else>
                              <span class="badge badge-danger">Desactivado</span>
                                 </div>
							</td>
							<td class="text-center">
								<router-link :to="{ name: 'actualizar-bateria', params: { id_producto: bateria.id_producto } }" tag="a"><i class="icon-pencil"></i></router-link>
								<a @click.prevent="downloadItem('productos/baterias/ficha/'+bateria.id_producto)"><i class="icon-arrow-down-circle"></i></a>
							</td>
						</tr>

						<tr v-if="bateria.mostrar">
								<td colspan="10">

									<table class="table table-striped table-bordered">
											<tr>
												<th class="text-center" colspan="4">Ficha Tecnica</th>
											</tr>
											<tr>
												<td colspan="4"></td>
											</tr>
											<tr class="text-center">
												<td> <strong>Número Parte </strong></td>
												<td> <strong>BCI </strong></td>
												<td></td>
												<td > <strong>Nombre </strong></td>
											</tr>
										<tr class="text-center">
											    <td>{{ bateria.numero_parte}}</td>
												<td>{{ bateria.producto_detalles_baterias? bateria.producto_detalles_baterias.bci:'N/D' }}</td>
												<td></td>
												<td>{{ bateria.producto_detalles_baterias? bateria.producto_detalles_baterias.nombre_comercial:'N/D' }}</td>
											</tr>
											<tr>
												<td colspan="4"></td>
											</tr>
											<tr class="text-center">
												<td colspan="2"> <strong>Dimensiones&nbsp;&nbsp; </strong></td>
												<td></td>
												<td rowspan="10"><img alt="bateria_lth" height="400px" v-bind:src="bateria.imagen_x" width="400px" ></td>
											</tr>
											<tr class="text-center">
												<td>Largo</td>
												<td>{{ bateria.producto_detalles_baterias? bateria.producto_detalles_baterias.largo+ ' mm':'N/D' }}</td>
												<td></td>
											</tr>
											<tr class="text-center">
												<td>Ancho</td>
												<td>{{ bateria.producto_detalles_baterias? bateria.producto_detalles_baterias.ancho+ ' mm':'N/D' }}</td>
												<td></td>
											</tr>
											<tr class="text-center">
												<td>Alto</td>
												<td>{{ bateria.producto_detalles_baterias? bateria.producto_detalles_baterias.alto+ ' mm':'N/D' }}</td>
												<td></td>
											</tr>
										<tr class="text-center">
												<td>Peso Humedo</td>
												<td>{{ bateria.producto_detalles_baterias? bateria.producto_detalles_baterias.peso_humedo + ' kg':'N/D' }}</td>
												<td></td>
											</tr>
											<tr>
												<td colspan="2"></td>
												<td></td>
											</tr>
										<tr class="text-center">
												<td colspan="2"> <strong>Voltaje nominal </strong></td>
												<td></td>
											</tr>
										<tr class="text-center">
												<td colspan="2">{{ bateria.producto_detalles_baterias? bateria.producto_detalles_baterias.voltaje_nominal + ' V':'N/D' }}</td>
												<td></td>
											</tr>
										<tr class="text-center">
												<td colspan="2"> <strong>Capacidad de reserva </strong></td>
												<td></td>
											</tr>
										<tr class="text-center">
												<td colspan="2">{{ bateria.producto_detalles_baterias? bateria.producto_detalles_baterias.capacidad_reserva + ' Min':'N/D' }}</td>
												<td></td>
											</tr>
										<tr class="text-center">
											<td colspan="4">AMP A = 18°C (CCA) Capacidad de arranque en frío <strong>{{ bateria.producto_detalles_baterias? bateria.producto_detalles_baterias.cca + ' AMP':'N/D' }}</strong></td>
										</tr>
										<tr class="text-center">
											<td colspan="4">AMP A = 0°C (CA) Capacidad de arranque <strong>{{ bateria.producto_detalles_baterias? bateria.producto_detalles_baterias.ca + ' AMP':'N/D' }}</strong></td>
										</tr>
										</table>
								</td>
							</tr>
							</template>
						<tr v-if="!baterias.length">
							<td class="text-center" colspan="11">Sin datos</td>
						</tr>
					</tbody>
				</table>
			</div>
			<pagination :items="baterias" :limit="filter.limit" :limitOptions="filter.limitOptions" :page="filter.page" :total="total" @changeLimit="changeLimit" @changePage="changePage"></pagination>

			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>

		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import bateria from '../../api/baterias'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando el contenido espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				imagen_x: "",
				//descargando:false,
				filter: {
					page: 1,
					limit: 10,
					limitOptions: [5, 10, 15, 20],
					search: {
						field: 'nombre_comercial',
						value: '',
						status:0
					}
				},
				baterias: [],
				total: 0
			}
		},
		methods: {

			downloadItem (url) {
				var self = this;
				//if(!this.descargando){
					self.loading = true;
					//this.descargando=true;
					alertify.success("Descargando datos, espere un momento.....",5);
					axios.get(url, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteFicha.pdf';
								link.click()
								//this.descargando=false;
								self.loading = false;
							}) .catch(function (error) {
						alertify.error("Error Descargando archivo.....",5);
						self.loading = false;
						//this.descargando=false;
					})
				/*}else{
					alertify.warning("Espere a que se complete la descarga anterior",5);
				}*/
			},

			mostrarDetalles(key) {
				var img_json = JSON.parse(this.baterias[key].imagen);
				if(img_json[0]){
					this.baterias[key].imagen_x = img_json[0].file_thumbnail;
				}else{
					this.baterias[key].imagen_x = "";
				}
				if (this.baterias[key].mostrar) {
					this.baterias[key].mostrar = 0
				} else {
					this.baterias[key].mostrar = 1
				}



			},
			obtenerBaterias() {
				var self = this;
				self.loading = true;
				bateria.obtenerBaterias(self.filter, data => {
					data.rows.forEach((baterias, key) => {
						data.rows[key].mostrar = 0
						data.rows[key].imagen_x = ''
					});
					self.baterias = data.rows
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
				this.obtenerBaterias()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerBaterias()
            },

		},
		/*components: {
			'pagination': Pagination
		},*/
		mounted() {
			this.obtenerBaterias()
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