<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Reporte de Consignación General</div>
				<div class="box-description">Listado de consignación</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo Inventario</router-link>> Consignación General</div>
			</div>
			<div class="alert alert-success">
				<span><strong>Detalles de Producto Consignados</strong></span>
			</div>

			<div class="row">
				<div class="col-sm-3">
					<div class="form-group">
						<button :disabled="descargando" class="btn btn-info btn-generar" @click="downloadItem()"><i class="pe-7s-search"></i> Descargar Reporte</button>
					</div>
				</div>
			</div>

			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
					<tr>
						<th class="text-center table-number">Cliente</th>
						<th class="text-center table-number">Producto</th>
						<th class="text-center table-number">Unidades</th>
						<th class="text-center table-number">Precio</th>
						<th class="text-center table-number">Total</th>
						<!--<th class="text-center table-number">Documento Salida</th>-->
					</tr>
					</thead>
					<tbody>
					<tr v-for="(movimiento, index) in movimientos">
						<td class="text-center">{{ movimiento.nombre_cliente }}</td>
						<td class="text-center">{{ movimiento.nombre_comercial }}</td>
						<td class="text-center">{{ movimiento.cantidad}}</td>
						<td class="text-center">{{ movimiento.precio_sugerido}}</td>
						<td class="text-center">{{ movimiento.subtotal}}</td>
						<!--<td class="text-center">
							<router-link target="_blank" :to="{ name: 'mostrar-salida', params: { id_salida: movimiento.id_salida } }" ><i class="icon-eye"></i> {{ movimiento.descripcion_movimiento}}</router-link>
						</td>-->
					</tr>
					<tr v-if="!movimientos.length">
						<td class="text-center" colspan="5">Sin datos</td>
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
	import consignacion_productos from '../../api/consignacion_productos'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				descargando:false,

				productosBusqueda: {},

				loading: true,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,

				clientesBusquedaURL: "/ventas/clientes/buscar",

				detalle_productox:[],
				form:{
					cliente: {},
				},
				movimientos: [],
				total: 0,
				total_unidadesx:0,
				total_saldox:0,
				costo_promediox:0,
			}
		},
		computed: {

			consolidar_costo_promedio() {
				if(this.movimientos){
					this.total_saldox = this.movimientos.reduce((carry, item) => {
						this.total_saldox = (carry + Number(item.total_movimiento));
						return this.total_saldox;
					}, 0);


					this.total_unidadesx =  this.movimientos.reduce((carry, item) => {
						this.total_unidadesx = (carry + Number(item.cantidad_movimiento))
						return this.total_unidadesx;
					}, 0);

					this.costo_promediox = Number((Number(this.total_saldox)/Number(this.total_unidadesx)).toFixed(6));
					if(isNaN(this.costo_promediox)){
						this.costo_promediox = 0;
					}
					return this.costo_promediox
				}else{
					return 0;
				}
			},
		},
		methods: {
				downloadItem () {
					var self = this;
					//self.loading = true;
					//if(!this.descargando) {
						let url = 'inventario/consignacion/reporte/general';
						self.loading = true;
						alertify.success("Descargando datos, espere un momento.....", 5);
						axios.get(url, {responseType: 'blob'})
								.then(({data}) => {
									let blob = new Blob([data], {type: 'application/pdf'})
									let link = document.createElement('a');
									link.href = window.URL.createObjectURL(blob)
									link.download = 'ReporteConsignacion.pdf';
									link.click()
									self.loading = false;
									//this.descargando = false;
								}).catch(function (error) {
							alertify.error("Error Descargando archivo.....", 5);
							self.loading = false;
						})

					/*}else{
                        alertify.warning("Espere a que se complete la descarga anterior",5);
                    }*/
				},
			calcular_unidades(itemX,keyX) {
				//console.log('unidd')
				let self = this;
				let unidadesx = 0;
				self.movimientos.forEach((movimiento, key) => {
					if(key <= keyX){
						unidadesx = unidadesx + movimiento.cantidad_movimiento;
					}
				});

				return unidadesx;
			},

			calcular_saldo(itemX,keyX) {
				let self = this;
				let saldox = 0;

				let unidadesx = 0;
				self.movimientos.forEach((movimiento, key) => {
					if(key <= keyX){
						unidadesx = unidadesx + movimiento.cantidad_movimiento;
					}
				});

				if(unidadesx>0){
					self.movimientos.forEach((movimiento, key) => {
						if(key <= keyX){
							saldox = Number((Number(saldox) + Number(movimiento.total_movimiento)).toFixed(6));
						}
					});
				}else{
					saldox = 0;
				}
				return saldox;
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
					cppx = Number((saldox/unidadesx).toFixed(6));
				}else{
					cppx = 0;
				}


				return cppx;
			},

			seleccionarCliente(e) {
				const cliente = e.target.value;
				var self = this;
				self.form.cliente = cliente;
			},



			obtenerMovimientos() {
				var self = this
				consignacion_productos.obtenerTodos(null, data => {
					self.movimientos = data
					self.loading =false;
				}, err => {
					console.log(err)
					self.loading =false;
				})
			}
		},
		mounted() {
			this.obtenerMovimientos();
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
			width: 100px;
		}
	}

	.btn-generar
	{
		margin-top: 33px;
	}
</style>
