<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Conciliar</div>
				<div class="box-description">Lista de movimientos</div>
				<!--<div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-administracion' }"> Módulo administración</router-link>> Reordenar menus</div>
			--></div>


			<div class="row">
				<div class="col-sm-12">
					<table class="table table-bordered table-hover"  >
						<thead>
						<tr>
							<th class="text-center" colspan="4">DATOS ESTADO CUENTA BANCARIA</th>
							<th class="text-center" colspan="3">DATOS MODULO CONTABLE</th>
							<th class="text-center" colspan="2"></th>
						</tr>
						<tr>
							<th>Tipo Movimiento</th>
							<th >Referencia/No. Cheque</th>
							<th >Descripcion</th>
							<th >Monto Movimiento</th>
							<th  style="min-width:300px">Registro Contable</th>
							<th >Descripcion</th>
							<th >Monto Movimiento</th>
							<th colspan="2">Estado</th>
						</tr>
						</thead>
						<tbody>
						<template v-for="(item, index) in form.registros_estado_cuenta">
							<tr>
								<td style="width: 10%">
									{{item.tipomovx}}
								</td>
								<td style="width: 10%">
									{{item.referencia+(item.tipomov===1?(' / '+item.numcheque):'')}}
								</td>
								<td style="width: 20%">
								{{item.descripcion}}
								</td>

								<td style="width: 10%">
									<strong>{{(item.debitos>0?("Débito: C$"+item.debitos):("Crédito: C$"+item.creditos))}}</strong>

								</td>

								<td style="width: 10%">
									<multiselect :allow-empty="true" :options="form.registros_contabilidad"
												 :searchable="true"
												 :show-labels="false"
												 deselect-label="Deseleccionar"
												 label="descripcion_corta"
												 placeholder="Selecciona un movimiento contable"
												 track-by="id_documento_cuenta"
												 v-model="item.registro_contabilidadx"
												 v-on:input="cargar_detalle_movimiento(item)"
									></multiselect>
								</td>
								<td style="width: 20%">
									<strong>{{item.registro_contabilidadx?item.registro_contabilidadx.descripcion:"N/D"}}</strong>
									<a  v-if="item.registro_contabilidadx.id_documento"  v-tooltip="'Descargar Reporte'" @click.prevent="descargarReporte(item.registro_contabilidadx.id_documento)"><i aria-hidden="true" class="fa fa-eye"></i></a>
								</td>


								<td>
									<strong>{{item.registro_contabilidadx?item.registro_contabilidadx.desc_mov:"N/D"}}</strong>
								</td>

								<td style="width: 3%" class="text-center">
									<i v-if="item.conciliado" v-tooltip="'Datos Conciliados'" aria-hidden="true" class="fa fa-check"></i>
									<i v-if="!item.conciliado" v-tooltip="'Datos NO Conciliados'" aria-hidden="true" class="fa fa-remove"></i>
								</td>
								<td style="width: 3%" class="text-center">
									<i v-if="item.conciliado" @click="deseleccionarCuenta(item)" v-tooltip="'Deseleccionar Registro contable'" aria-hidden="true" class="fa fa-undo" :style="'color:blue;'"></i>
									<i  v-if="!item.conciliado" v-tooltip="'Deseleccionar Registro contable'" aria-hidden="true" class="fa fa-undo"></i>
								</td>

							</tr>
							<tr></tr>
						</template>
						</tbody>
						<tfoot>
						</tfoot>
					</table>
				</div>
			</div>

		<br>
			<div class="row">
				<div class="col-sm-6">
					<table class="table table-bordered table-hover table-responsive"  >
						<thead>
						<tr>
							<th class="text-center" colspan="5">DATOS NO ENCONTRADOS SISTEMA CONTABLE</th>
						</tr>
						<tr>
							<th style="min-width:100px">Tipo Movimiento</th>
							<th style="min-width:100px">Referencia/No. Cheque</th>
							<th style="min-width:200px">Descripcion</th>
							<th style="min-width:200px">Monto Movimiento</th>
							<th style="min-width:200px">Causa</th>
						</tr>
						</thead>
						<tbody>
						<template v-for="(item, index) in form.registros_estado_cuenta">
							<template v-if="!item.conciliado">
							<tr>
								<td style="width: 10%">
									{{item.tipomovx}}
								</td>
								<td style="width: 10%">
									{{item.referencia+(item.tipomov===1?(' / '+item.numcheque):'')}}
								</td>
								<td style="width: 20%">
									{{item.descripcion}}
								</td>

								<td style="width: 10%">
									<strong>{{(item.debitos>0?("Débito: C$"+item.debitos):("Crédito: C$"+item.creditos))}}</strong>

								</td>
								<td>
									<select class="form-control" v-model.number="item.causa">
										<option value="2">Cheque Flotante</option>
										<option value="3">No registrado por banco</option>
									</select>
								</td>

							</tr>
							</template>
							<tr></tr>
						</template>
						</tbody>
						<tfoot>
						</tfoot>
					</table>
				</div>



			<br>

				<div class="col-sm-6">
					<table class="table table-bordered table-hover table-responsive"  >
						<thead>
						<tr>
							<th class="text-center" colspan="4">DATOS NO ENCONTRADOS EN BANCO</th>
						</tr>
						<tr>
							<th style="min-width:100px">Referencia/No. Cheque</th>
							<th style="min-width:200px">Descripcion</th>
							<th style="min-width:200px">Monto Movimiento</th>
							<th style="min-width:200px">Causa</th>
						</tr>
						</thead>
						<tbody>
						<template v-for="(item, index) in form.registros_contabilidad">
							<template v-if="!item.$isDisabled">
								<tr>
									<td style="width: 10%">
										{{item.descripcion_corta}}
									</td>
									<td style="width: 20%">
										{{item.descripcion}}
									</td>

									<td style="width: 10%">
										{{item.desc_mov}}
									</td>
									<td>
										<select class="form-control" v-model.number="item.causa">
											<option value="4">Error en contabilización</option>
											<option value="5">No registrado en modulo contable</option>
										</select>
									</td>
								</tr>
							</template>
							<tr></tr>
						</template>
						</tbody>
						<tfoot>
						</tfoot>
					</table>
				</div>
			</div>

			<div class="content-box-footer text-right">
				<router-link tag="button" :to="{ name: 'listado-cuentas-bancarias' }">
					<button type="button" class="btn btn-default">Cancelar</button>
				</router-link>
				<button type="button" class="btn btn-primary" @click="registrar" :disabled="btnAction != 'Registrar' ? true : false">{{ btnAction }}</button>
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
	import recibos from "../../api/recibos_oficiales";
	import cuenta_bancaria from "../../api/cuentas_bancarias";


	export default {
			data() {
			return {
				btnAction: 'Registrar',
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,

				form:{
					id_estado_cuenta_banco: '',
					registros_contabilidad:[],
					registros_estado_cuenta:[],
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

			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				conciliacion.registrarConciliacion(self.form, data => {
					self.loading = false;
					this.$router.push({
						name: 'listado-cuentas-bancarias'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
					self.btnAction = 'Registrar'
				})
			},

			log: function(evt) {
				window.console.log(evt);
			},
			cargar_detalle_movimiento(item){

				var self =this;
				if((Number(item.registro_contabilidadx.haber_org) === Number(item.debitos))&&(Number(item.registro_contabilidadx.debe_org) === Number(item.creditos))){

					let incluye_ref_chque=false;

					if((item.registro_contabilidadx.descripcion.includes(item.referencia))
							||(item.registro_contabilidadx.descripcion.includes(item.numcheque>0?item.numcheque:'No aplica para revi4sar'))){
						incluye_ref_chque=true;
					}

					/*validar si tipo documento coincide con tipo movimiento*/

					if(incluye_ref_chque){
						item.registro_contabilidadx.$isDisabled=true;
						item.estado=1;
						item.conciliado=true;
					}else{
						self.$swal.fire({
							title: 'Los montos coinciden pero no se encuentran similitudes en el numero de referencia/cheque, confirme si desea asignarlo?',
							text: "Revise los datos",
							type: 'warning',
							showCancelButton: true,
							confirmButtonColor: '#3085d6',
							cancelButtonColor: '#d33',
							confirmButtonText: 'Si, confirmar',
							cancelButtonText: 'Cancelar'
						}).then((result) => {
							if (result.value) {
								item.registro_contabilidadx.$isDisabled=true;
								item.conciliado=true;
							}else{
								item.registro_contabilidadx = [];
								item.conciliado = false;
							}
						})
					}




				}else{
					//item.registro_contabilidadx.$isDisabled=true;
					alertify.warning('Los montos no coinciden con el movimiento')
					item.registro_contabilidadx = [];
					item.conciliado = false;
					item.estado=3;
				}

			},
			conciliar() {
				var self = this
				/*conciliar automaticamente*/
				self.form.registros_contabilidad.forEach((fila, key) => {
					//buscar por cada registro contable el match en el estado de cuenta
					let valor_encontrado = false;
					self.form.registros_estado_cuenta.forEach((fila2, key2) => {
						if(!valor_encontrado){
							if(!fila.$isDisabled){
								/*validar si montos son iguales*/
								let incluye_ref_chque=false;
								if((Number(fila.haber_org) === Number(fila2.debitos))&&(Number(fila.debe_org) === Number(fila2.creditos))){

									/*validar si contiene no_referencia en descripcion movimiento*/
									/*validar si contiene no_cheque en descripcion movimiento*/
									if((fila.descripcion.includes(fila2.referencia))
											||(fila.descripcion.includes(fila2.numcheque>0?fila2.numcheque:'No aplica para revi4sar'))){
										incluye_ref_chque=true;
									}

									/*validar si tipo documento coincide con tipo movimiento*/

									if(incluye_ref_chque){
										self.form.registros_contabilidad[key].$isDisabled = true;
										//console.log('deshabilitado '+key);
										self.form.registros_estado_cuenta[key2].conciliado=true;
										self.form.registros_estado_cuenta[key2].registro_contabilidadx =fila;
										valor_encontrado=true;
									}

								}
							}
						}
					});
				});

			},
			deseleccionarCuenta(item) {
				item.registro_contabilidadx.$isDisabled=false;
				item.registro_contabilidadx=[];
				item.conciliado=false;

			},
			obtenerEstadoCuenta() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				conciliacion.obtenerEstadoCuenta({
					id_estado_cuenta_banco: Number(this.$route.params.id_estado_cuenta_banco),
					cargar_dependencias:false
				}, data => {
					//console.log(data.estado_cuenta);
					data.estado_cuenta.estado_cuenta_movimientos.forEach((facturas, key) => {
						data.estado_cuenta.estado_cuenta_movimientos[key].registro_contabilidadx = [];
						data.estado_cuenta.estado_cuenta_movimientos[key].conciliado = false;
						data.estado_cuenta.estado_cuenta_movimientos[key].causa=3;
					});

					data.movimientos_contables.forEach((facturas, key) => {
						data.movimientos_contables[key].$isDisabled = false;
						data.movimientos_contables[key].causa=5;
					});

					self.form.registros_estado_cuenta = data.estado_cuenta.estado_cuenta_movimientos;
					self.form.registros_contabilidad= data.movimientos_contables;
					self.form.id_estado_cuenta_banco=Number(this.$route.params.id_estado_cuenta_banco);

					self.conciliar();

					self.loading = false;
				}, err => {
					alertify.error(err.id_estado_cuenta_banco[0],5);
					this.$router.push({
						name: 'listado-estados-cuentas-bancarias'
					});
				})
			},
			descargarReporte(id_documento) {
				var self=this;
				var formato='pdf';
				if(id_documento){
					self.loading=true;
					axios.post('contabilidad/documentos-contables/reporte-nuevo',
							{
								extension:formato,
								id_documento:id_documento
							}, { responseType: 'blob' })
							.then(({ data }) => {
								let blob = new Blob([data], { type: 'application/pdf' })
								formato === 'xls' ?
										blob = new Blob([data], { type: 'application/octet-stream' }) :
										formato === 'pdf' ?
												blob = new Blob([data], { type: 'application/pdf' }):
												blob = new Blob([data], { type: 'text/html' });
								let link = document.createElement('a');
								link.setAttribute('target', '_blank');
								link.href = window.URL.createObjectURL(blob)
								link.download = 'DocumentoContable.'+formato;
								link.click()
								self.loading = false;
							}).catch(function (error) {
						console.log(error);
						alertify.error("Error Descargando archivo.....", 5);
						self.loading = false;
					});
				}else{
					alertify.warning("No ha seleccionado un documento válido.....", 5);
				}
			},
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