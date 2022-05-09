<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Movimientos de Inventario Contable</div>
				<div class="box-description">Listado de movimientos Contable</div>
				<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> Movimientos contables</div>
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
						<typeahead
								style="width: 100%;" :initial="form.productoB" :trim="80"
								:url="productosBusquedaURL" @input="seleccionarProducto"></typeahead>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.productoB"
								v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<button class="btn btn-info btn-generar" @click="obtenerMovimientos()"><i class="pe-7s-search"></i> Buscar</button>
						<button v-tooltip="'Descargar el reporte en formato PDF'" class="btn btn-danger btn-generar" @click="downloadItem()"><i class="pe-7s-download"></i>PDF</button>

					</div>
				</div>
			</div>
<br>
			<div class="alert alert-success">
				<span><strong>Datos de Producto</strong></span>
			</div>
			<div class="row">
				<div class="col-sm-4">
					<div class="form-group">
						<label for=""> Nombre producto</label>
						<input readonly class="form-control" placeholder="Nombre producto" v-model="detalle_productox.descripcion">
					</div>
				</div>
				<div class="col-sm-2">
					<div class="form-group">
						<label for=""> Código</label>
						<input readonly class="form-control" placeholder="Código producto" v-model="detalle_productox.codigo">
					</div>
				</div>
				<div class="col-sm-2">
					<div class="form-group">
						<label for=""> Total Inventario</label>
						<input readonly class="form-control" placeholder="Unidades" v-model="total_unidadesx">
					</div>
				</div>
				<div class="col-sm-2">
					<div class="form-group">
						<label for=""> Costo C$</label>
						<input readonly class="form-control" v-model="costo_promediox_txt">
					</div>
				</div>
			</div>

			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
					<tr>
						<th colspan="3"></th>
						<th colspan="3" class="text-center">ENTRADAS</th>
						<th colspan="3" class="text-center">SALIDAS</th>
						<th colspan="3" class="text-center">SALDO</th>
					</tr>
						<tr>
							<th class="text-center table-number">Fecha</th>
							<th class="text-center table-number">Bodega</th>
							<th class="text-center table-number">Concepto</th>
							<th class="text-center table-number">Unidades</th>
							<th class="text-center table-number">Costo</th>
							<th class="text-center table-number">Total</th>
							<th class="text-center table-number">Unidades</th>
							<th class="text-center table-number">Costo</th>
							<th class="text-center table-number">Total</th>
							<th class="text-center table-number">Unidades</th>
							<th class="text-center table-number">Costo</th>
							<th class="text-center table-number">Total</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(movimiento, index) in movimientos" :key="movimiento.id_movimiento">
							<td class="text-center">{{ movimiento.fecha_movimiento }}</td>
							<td class="text-center">{{ movimiento.bodega }}</td>
							<td class="text-center">
								<template v-if="movimiento.id_tipo_mov===1">
									<router-link target="_blank" :to="{ name: 'mostrar-entrada', params: { id_entrada: movimiento.identificador_origen_movimiento } }"><i class="icon-eye"></i> {{ movimiento.descripcion_movimiento}}</router-link>
								</template>

								<template v-if="movimiento.id_tipo_mov===2">
									<router-link target="_blank" :to="{ name: 'mostrar-salida', params: { id_salida: movimiento.identificador_origen_movimiento } }" ><i class="icon-eye"></i> {{ movimiento.descripcion_movimiento}}</router-link>
								</template>
							</td>
							<td class="text-center">{{ movimiento.unidades_entrada > 0 ? movimiento.unidades_entrada : '-'}}</td>
							<td class="text-center">{{ movimiento.costo_entrada > 0 ? movimiento.costo_entrada : '-'}}</td>
							<td class="text-center">{{ movimiento.total_entrada > 0 ? movimiento.total_entrada : '-'}}</td>
							<td class="text-center">{{ movimiento.unidades_salida > 0 ? movimiento.unidades_salida : '-'}}</td>
							<td class="text-center">{{ movimiento.costo_salida > 0 ? movimiento.costo_salida : '-'}}</td>
							<td class="text-center">{{ movimiento.total_salida > 0 ? movimiento.total_salida : '-' }}</td>
							<td class="text-center"><strong>{{calcular_unidades(movimiento,index)}}</strong></td>
							<td class="text-center"><strong>C$ {{calcular_costo_promedio(movimiento,index)| formatMoney(6)}}</strong></td>
							<td class="text-center"><strong>C$ {{calcular_saldo(movimiento,index)| formatMoney(6)}}</strong></td>
						</tr>
						<tr v-if="!movimientos.length">
							<td class="text-center" colspan="12">Sin datos</td>
						</tr>
					</tbody>
					<tfoot>

					<tr>
						<td class="text-left" colspan="8"><strong>{{costo_promediox?'Inventario Final de '+total_unidadesx+' unidades Valorado a C$ '+costo_promediox_txt+' C/U':''}}</strong></td>
						<td class="text-center">Saldo Final</td>
						<td  class="text-center">
							<strong>{{total_unidadesx}}</strong>
						</td>
						<td class="text-center"> <strong>C$ {{consolidar_costo_promedio | formatMoney(6)}}</strong></td>
						<td class="text-center"> <strong>C$ {{total_saldox | formatMoney(6)}}</strong></td>
					</tr>

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
export default {
			data() {
			return {
				loading: false,
				msg: 'Cargando el contenido espere un momento',
				url: '/public' + loadingImage,
				productosBusqueda: {},
				productosBusquedaURL: "/inventario/productos/buscar",
				bodegasBusquedaURL: "/bodegas/buscar",
				todas_bodegas:true,
				detalle_productox:[],
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
				costo_promediox_txt:'0',
				errorMessages: []
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
			this.costo_promediox_txt=this.costo_promediox.toFixed(6);
			return this.costo_promediox.toFixed(6)
			}else{
				return 0;
			}
		},
	},
		methods: {
			cambiarBodega()
			{
				var self=this;
				if(self.todas_bodegas){
					self.form.bodega = {};
					self.form.bodega.id_bodega = 0;
				}
			},

			seleccionarBodega(e) {
				const bodegaS = e.target.value;
				var self = this;
				self.form.bodega = bodegaS;
			},
			downloadItem () {
				var self = this;
				if(self.form.productoB.id_producto){
					self.loading = true;
					let formato = 'pdf';
					alertify.success("Descargando datos, espere un momento.....", 5);
					axios.post('inventario/movimientos/reporte-contable',
							{
								id_bodega : self.form.bodega.id_bodega,
								id_producto : self.form.productoB.id_producto,
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
						unidadesx = unidadesx + movimiento.cantidad_movimiento;
					}
				});

				return unidadesx;
			},

			calcular_saldo(itemX,keyX) {
				let self = this;
				var saldox = 0;

				let unidadesx = 0;
				self.movimientos.forEach((movimiento, key) => {
					if(key <= keyX){
						unidadesx = unidadesx + movimiento.cantidad_movimiento;
					}
				});

				if(unidadesx>0){
				self.movimientos.forEach((movimiento, key) => {
					if(key <= keyX){
						saldox = Number((Number(saldox) + Number(movimiento.total_movimiento)));
					}
				});
				}else{
					saldox = 0;
				}
				return saldox.toFixed(6);
			},

			calcular_costo_promedio(itemX,keyX) {
				let self = this;
				var cppx = 0;
				var saldox = 0;
				var unidadesx = 0;
				self.movimientos.forEach((movimiento, key) => {
					if(key <= keyX){
						saldox = Number(saldox) + Number(movimiento.total_movimiento);
						unidadesx = Number(unidadesx) + Number(movimiento.cantidad_movimiento);
					}
				});
				if(unidadesx>0){
					cppx = Number((saldox/unidadesx));
				}else{
					cppx = 0;
				}


				return cppx.toFixed(6);
			},

			seleccionarProducto(e) {
				const producto = e.target.value;
				var self = this;
				self.form.productoB = producto;
			},

			obtenerMovimientos() {
				var self = this
				self.loading=true;
				movimientos_productos.obtenerMovimientos(self.form, data => {
					self.movimientos = data
					self.loading=false;
					self.errorMessages = []
				}, err => {
					self.loading=false;
					console.log(err)
					self.errorMessages = err
				})
				self.detalle_productox.codigo = self.form.productoB.codigo_sistema;
				self.detalle_productox.descripcion = self.form.productoB.descripcion;
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
