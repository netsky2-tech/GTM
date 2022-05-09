<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Movimientos de Inventario</div>
				<div class="box-description">Listado de movimientos</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo inventario</router-link>> Movimiento inventario</div>
			</div>

			<div class="row">

				<div class="col-sm-2">
					<div class="form-group">
						<label class="check-label2"><input type="checkbox" v-on:change="cambiarBodega"
														   v-model="todas_bodegas"> Todos las bodegas</label>
					</div>
				</div>

				<div v-if="!todas_bodegas" class="col-sm-3">
					<div class="form-group">
						<label> Bodega</label>
						<div class="form-group">
							<typeahead :initial="form.bodega" :trim="80" :url="bodegasBusquedaURL" @input="seleccionarBodega" style="width: 100%;"></typeahead>
						</div>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
						</ul>
					</div>
				</div>

				<div v-if="todas_bodegas" class="col-sm-3">
					<div class="form-group">
						<label> Bodega</label>
						<div class="form-group">
							<input type="text" class="form-control" disabled>
						</div>
					</div>
				</div>


				<div class="col-sm-3">
					<div class="form-group">
						<label for>Producto</label>
						<typeahead style="width: 100%;" :initial="form.productoB" :trim="80" :url="productosBusquedaURL" @input="seleccionarProducto" ></typeahead>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.productoB"
								v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<button class="btn btn-info btn-generar" @click="obtenerMovimientos()"><i class="pe-7s-search"></i> Buscar</button>
						<button v-tooltip="'Descargar el reporte en formato PDF'" :disabled="descargando" class="btn btn-danger btn-generar" @click="downloadItem('pdf')"><i class="pe-7s-download"></i>PDF</button>
						<button v-tooltip="'Descargar el reporte en formato EXCEL'" :disabled="descargando" class="btn btn-success btn-generar" @click="downloadItem('xls')"><i class="pe-7s-download"></i>EXCEL</button>
					</div>
				</div>
				<div class="col-sm-2">
					<div class="form-group">
						<label class="check-label2"><input type="checkbox" v-on:change="cambiarPresentacion"
														   v-model="todas_presentaciones"> Todas las presentaciones</label>
					</div>
				</div>
				<div v-if="!todas_presentaciones" class="col-sm-3">
					<div class="form-group">
						<label> Presentación</label>
						<div class="form-group">
							<v-select :options="form.presentaciones" ref="presentacionx" label="codigo" placeholder="Selecciona una presentacion" v-model="form.presentacion"></v-select>
						</div>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.presentacion" v-text="message"></li>
						</ul>
					</div>
				</div>

				<div v-if="todas_presentaciones" class="col-sm-3">
					<div class="form-group">
						<label> Presentación</label>
						<div class="form-group">
							<input type="text" class="form-control" disabled>
						</div>
					</div>
				</div>

			</div>
<br>
			<div class="alert alert-success">
				<span><strong>Datos de Producto</strong></span>
			</div>
			<div class="row">
				<div class="col-sm-2">
					<div class="form-group">
						<label for=""> Código</label>
						<input readonly class="form-control" placeholder="Código producto" v-model="detalle_productox.codigo">
					</div>
				</div>
				<div class="col-sm-4">
					<div class="form-group">
						<label for=""> Nombre producto</label>
						<input readonly class="form-control" placeholder="Nombre producto" v-model="detalle_productox.descripcion">
					</div>
				</div>
				<div v-if="!todas_presentaciones" class="col-sm-4">
					<div class="form-group">
						<label for=""> Presentacion</label>
						<input readonly class="form-control" placeholder="Código de presentacion" v-model="form.presentacion.codigo">
					</div>
				</div>
				<div class="col-sm-2">
					<div class="form-group">
						<label for=""> Total Inventario</label>
						<input readonly class="form-control" placeholder="Unidades" v-model="total_unidadesx">
					</div>
				</div>
			</div>

			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th class="text-center table-number">Fecha</th>
							<th class="text-center table-number">Bodega</th>
							<th class="text-center table-number">Presentación</th>
							<th class="text-center table-number">Concepto</th>
							<th class="text-center table-number" colspan="2">Entradas</th>
							<th class="text-center table-number" colspan="2">Salidas</th>
							<th class="text-center table-number">Saldo</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(movimiento, index) in movimientos" :key="movimiento.id_movimiento">
							<td class="text-center">{{ movimiento.fecha_movimiento }}</td>
							<td class="text-center">{{ movimiento.bodega }}</td>
							<td class="text-center">{{ movimiento.descripcion_presentacion }}</td>
							<td class="text-center">
								<template v-if="movimiento.id_tipo_mov===1">
									<router-link target="_blank" :to="{ name: 'mostrar-entrada', params: { id_entrada: movimiento.identificador_origen_movimiento } }"><i class="icon-eye"></i> {{ movimiento.descripcion_movimiento}}</router-link>
								</template>

								<template v-if="movimiento.id_tipo_mov===2">
									<router-link target="_blank" :to="{ name: 'mostrar-salida', params: { id_salida: movimiento.identificador_origen_movimiento } }" ><i class="icon-eye"></i> {{ movimiento.descripcion_movimiento}}</router-link>
								</template>
							</td>
							<td class="text-center" style="width: 10%">{{ movimiento.unidades_entrada > 0 ? movimiento.unidades_entrada : '-'}}</td>
							<td class="text-center" style="width: 10%">{{ movimiento.unidades_entrada_k > 0 ? movimiento.unidades_entrada_k : '-'}}</td>
							<td class="text-center" style="width: 10%">{{ movimiento.unidades_salida > 0 ? movimiento.unidades_salida : '-'}}</td>
							<td class="text-center" style="width: 10%">{{ movimiento.unidades_salida_k > 0 ? movimiento.unidades_salida_k : '-'}}</td>
							<td class="text-center"><strong>{{calcular_unidades(movimiento,index)}}</strong></td>
						</tr>
						<tr v-if="!movimientos.length">
							<td class="text-center" colspan="12">Sin datos</td>
						</tr>
					</tbody>
					<tfoot>

					<tr>
						<!--<td class="text-left" colspan="5"><strong>{{'Inventario Final de '+total_unidadesx + ' unidades'}}</strong></td>-->
						<td class="text-center" colspan="8">Saldo Final</td>
						<td  class="text-center">
							<strong>{{consolidar_unidades}}</strong>
                        </td>
					</tr>

					</tfoot>
				</table>
			</div>


			<pagination :items="lista_codigos" :limit="filter.limit" :limitOptions="filter.limitOptions" :page="filter.page" :total="total" @changeLimit="changeLimit" @changePage="changePage"></pagination>



			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>

	</div>
</template>

<script type="text/ecmascript-6">
	import movimientos_productos from '../../api/movimientos_productos'
	import loadingImage from "../../assets/images/block50.gif";
	import entradaIni from "../../api/entradas-inventario-inicial";
export default {
			data() {
			return {
				loading: false,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,
				bodegasBusquedaURL: "/bodegas/buscar",
				todas_bodegas:true,
				todas_presentaciones:true,
				descargando:false,
				productosBusqueda: {},
				productosBusquedaURL: "/inventario/productos/buscar",
				presentacionesBusqueda: {},
				presentacionesBusquedaURL: "/presentacion/buscar",
				detalle_productox:[],
				lista_codigos:[],
				form:{
					productoB: {},
					bodega:{
					id_bodega:0
					},
					presentacion:{
						id_presentacion:0,
						codigo:''
					},
				},
				movimientos: [],
				total: 0,
				total_unidadesx:0,
				total_saldox:0,
				costo_promediox:0,
				errorMessages: [],
				filter: {
					page: 1,
					limit: 20,
					limitOptions: [20, 40, 60, 100],
				},
			}
		},
	computed: {
		consolidar_unidades() {
			if(this.movimientos){
			this.total_unidadesx =  this.movimientos.reduce((carry, item) => {
				this.total_unidadesx = (carry + Number(item.cantidad_movimiento_k))
				return this.total_unidadesx;
			}, 0);

			return this.total_unidadesx
			}else{
				return 0;
			}

		},
	},
		methods: {
			cargarPresentaciones() {
				var self = this;
				self.loading = true;
				entradaIni.cargarPresentacionesProductos({
					id_producto: self.form.productoB.id_producto,
				}, data => {
					if(data.presentaciones !== null){
						self.form.presentaciones = data.presentaciones;
					}else{
						alertify.warning("No se encuentran presentaciones para este producto.",5);
						self.form.presentaciones = [];
					}
					self.loading = false;
				}, err => {
					if(err.id_producto){
						self.form.presentaciones = [];
						alertify.warning(err.id_producto,5);
						self.loading = false;
					}
				})
				//self.$refs.presentacionx.focus();
			},
			changeLimit(limit) {
				this.filter.page = 1
				this.filter.limit = limit
				this.obtenerListaCodigos()
			},
			changePage(page) {
				this.filter.page = page
				this.obtenerListaCodigos()
			},
			cambiarBodega()
			{
				var self=this;
				if(self.todas_bodegas){
					self.form.bodega = {};
					self.form.bodega.id_bodega = 0;
				}
			},
			cambiarPresentacion()
			{
				var self=this;
				if(self.todas_presentaciones){
					self.form.presentacion = {};
					self.form.presentacion.id_presentacion = 0;
				}
			},

			seleccionarBodega(e) {
				const bodegaS = e.target.value;
				var self = this;
				self.form.bodega = bodegaS;
			},
			seleccionarPresentacion(e) {
				const presentacion = e.target.value;
				var self = this;
				self.form.presentacion = presentacion;
			},

			downloadItem (formato) {
				var self = this;
				if(self.form.productoB.id_producto){
				self.loading = true;
					//let formato = 'pdf';
					alertify.success("Descargando datos, espere un momento.....", 5);
					axios.post('inventario/movimientos/reporte',
							{
								id_bodega : self.form.bodega.id_bodega,
								id_producto : self.form.productoB.id_producto,
								id_presentacion : self.form.presentacion.id_presentacion,
								extension : formato
							},{responseType: 'blob'})
							.then(({data}) => {
								let blob = new Blob([data], {type: 'application/pdf'})
								formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
								let link = document.createElement('a');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'ReporteMovimientos.'+ formato;
								link.click()
								self.loading = false;
							}).catch(function (error) {
						alertify.error("Error Descargando archivo.....", 5);
						self.loading = false;
					})
				}else{
                    alertify.warning("Debe seleccionar un producto",5);
                }
			},

			calcular_unidades(itemX,keyX) {
				//console.log('unidd')
				let self = this;
				let unidadesx = 0;
				self.movimientos.forEach((movimiento, key) => {
					if(key <= keyX){
						unidadesx = unidadesx + Number(movimiento.cantidad_movimiento_k);
					}
				});

				return Number(unidadesx);
			},

			calcular_saldo(itemX,keyX) {
				let self = this;
				let saldox = 0;

				let unidadesx = 0;
				self.movimientos.forEach((movimiento, key) => {
					if(key <= keyX){
						unidadesx = unidadesx +  Number(movimiento.cantidad_movimiento);
					}
				});

				if(unidadesx>0){
				self.movimientos.forEach((movimiento, key) => {
					if(key <= keyX){
						saldox = Number((Number(saldox) + Number(movimiento.total_movimiento)).toFixed(2));
					}
				});
				}else{
					saldox = 0;
				}
				return Number(saldox);
			},

			calcular_costo_promedio(itemX,keyX) {
				let self = this;
				let cppx = 0;
				let saldox = 0;
				let unidadesx = 0;
				self.movimientos.forEach((movimiento, key) => {
					if(key <= keyX){
						saldox = Number(saldox) + Number(movimiento.total_movimiento);
						unidadesx = Number(unidadesx) + Number(movimiento.cantidad_movimiento);
					}
				});
				if(unidadesx>0){
					cppx = Number((saldox/unidadesx).toFixed(2));
				}else{
					cppx = 0;
				}


				return cppx;
			},

			seleccionarProducto(e) {
				const producto = e.target.value;
				var self = this;
				self.form.productoB = producto;

				self.cargarPresentaciones();
			},
			obtenerListaCodigos(){
				var self = this;
				self.loading = true;
				movimientos_productos.obtenerListaCodigos(
						{
							productoB:self.form.productoB,
							bodega:self.form.bodega,
							limit: self.filter.limit,
							page: self.filter.page,
						}, data => {
					self.lista_codigos = data.rows
					self.total = data.total
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			obtenerMovimientos() {
				var self = this
				self.loading=true;
				this.filter.page = 1;
				movimientos_productos.obtenerMovimientos(self.form, data => {
					self.movimientos = data
					self.lista_codigos = []
					self.errorMessages = []
					self.loading=false;
				}, err => {
					console.log(err)
					self.loading=false;
					self.errorMessages = err
				})
				self.detalle_productox.codigo = self.form.productoB.codigo_sistema;
				self.detalle_productox.descripcion = self.form.productoB.nombre_comercial;
			},
			labelproducto (item) {
				/*let cod_barra =  item.codigo_barra == null ? 'N/A':item.codigo_barra;*/
				return `${item.descripcion} - ${cod_barra}`
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
