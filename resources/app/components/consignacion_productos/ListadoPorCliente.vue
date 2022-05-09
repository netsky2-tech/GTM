<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Reporte de Consignación Clientes</div>
				<div class="box-description">Listado de consignación</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo Inventario</router-link>> Consignación por cliente</div>
			</div>

			<div class="row">
				<div class="col-sm-6">
					<div class="form-group">
						<label for>Cliente</label>
						<typeahead :initial="form.cliente" :trim="80" :url="clientesBusquedaURL" :params="{es_deudor: false}"
								   @input="seleccionarCliente" style="width: 100%;"></typeahead>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<button class="btn btn-info btn-generar" @click="obtenerMovimientos()"><i class="pe-7s-search"></i> Cargar info</button>
					</div>
				</div>

				<div class="col-sm-3">
					<div class="form-group">
						<button class="btn btn-info btn-generar" @click="downloadItem()"><i class="pe-7s-search"></i> Descargar Reporte</button>
					</div>
				</div>
			</div>


			<div class="row">
			<div class="col-sm-2">
				<div class="form-group">
					<label class="check-label2"><input type="checkbox" v-on:change="cambiarClientes"
													   v-model="todos_clientes"> Todos los clientes</label>
				</div>
			</div>

			<div class="col-sm-3">
				<div class="form-group">
					<label> Formato:</label>
					<select class="form-control" v-model="formatoHistorial">
						<option value="pdf">PDF</option>
						<option value="xls">Excel</option>
					</select>
				</div>
			</div>
			<div class="col-sm-3">
				<div class="form-group">
					<button class="btn btn-info btn-generar" @click="descargarHistorialCliente()"><i class="pe-7s-search"></i> Descargar Historial</button>
				</div>
			</div>
			</div>
<br>
			<div class="alert alert-success">
				<span><strong>Detalles de Producto Consignados</strong></span>
			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th class="text-center table-number">Producto</th>
							<th class="text-center table-number">Unidades</th>
							<th class="text-center table-number">Precio</th>
							<th class="text-center table-number">Total</th>
							<!--<th class="text-center table-number">Documento Salida</th>-->
						</tr>
					</thead>
					<tbody>
						<tr v-for="(movimiento, index) in movimientos">
							<td class="text-center">{{ movimiento.nombre_comercial }}</td>
							<td class="text-center">{{ movimiento.cantidad}}</td>
							<td class="text-center">{{ movimiento.precio_sugerido}}</td>
							<td class="text-center">{{ movimiento.subtotal}}</td>
							<!--<td class="text-center">
								<router-link target="_blank" :to="{ name: 'mostrar-salida', params: { id_salida: movimiento.id_salida } }" ><i class="icon-eye"></i> {{ movimiento.descripcion_movimiento}}</router-link>
							</td>-->
						</tr>
						<tr v-if="!movimientos.length">
							<td class="text-center" colspan="12">Sin datos</td>
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
				todos_clientes:true,
				productosBusqueda: {},

				formatoHistorial:'xls',

				loading: false,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,

				clientesBusquedaURL: "/ventas/clientes/buscar",

				detalle_productox:[],
				form:{
					cliente: {
						id_cliente:0
					},
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

			cambiarClientes()
			{
				var self=this;
				if(self.todos_clientes){
					self.form.cliente = {};
					self.form.cliente.id_cliente = 0;
				}
			},

			descargarHistorialCliente() {
				var self=this;
				if(self.form.cliente.id_cliente >= 0){
					self.loading=true;
					axios.post('inventario/consignacion/reporte/historial',
							{
								id_cliente:self.form.cliente.id_cliente,
								extension:self.formatoHistorial,
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								self.formatoHistorial === 'xls' ?
										blob = new Blob([data], { type: 'application/octet-stream' }) :
										self.formatoHistorial === 'pdf' ?
												blob = new Blob([data], { type: 'application/pdf' }):
												blob = new Blob([data], { type: 'text/html' });
								let link = document.createElement('a');
								link.setAttribute('target', '_blank');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'HistorialConsignacion.'+self.formatoHistorial;
								link.click()
								self.loading = false;
							}).catch(function (error) {
						console.log(error);
						alertify.error("Error Descargando archivo.....", 5);
						self.loading = false;
					});
				}else{
					alertify.warning("No ha seleccionado un cliente válido.....", 5);
				}
			},

			downloadItem () {
				var self = this;
				//self.loading = true;
				//if(!this.descargando) {
					if (self.form.cliente.id_cliente) {
						let url = 'inventario/consignacion/reporte/cliente/'+self.form.cliente.id_cliente;
						self.loading = true;
						alertify.success("Descargando datos, espere un momento.....", 5);
						axios.get(url, {responseType: 'blob'})
								.then(({data}) => {
									let blob = new Blob([data], {type: 'application/pdf'})
									let link = document.createElement('a');
									link.href = window.URL.createObjectURL(blob)
									link.download = 'ReporteConsignacionCliente.pdf';
									link.click()
									self.loading = false;
									//this.descargando = false;
								}).catch(function (error) {
							alertify.error("Error Descargando archivo.....", 5);
							self.loading = false;
						})
					}else{
						alertify.warning("Seleccione un cliente!",5);
						self.loading = false;
					}

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
				self.loading =true;
				consignacion_productos.obtenerPorCliente(self.form, data => {
					self.movimientos = data
					self.loading =false;
				}, err => {
					console.log(err)
				})
			}
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
