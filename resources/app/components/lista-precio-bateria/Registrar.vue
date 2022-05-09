<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear nueva lista de precio</div>
						<div class="box-description">Formulario para registrar lista de precio</div>
					</div>

					<div class="row">
							<div class="col-sm-3">
								<div class="form-group">
									<label for> Catálogo de listas</label>
									<v-select label="descripcion" v-model="form.catalogo" :options="catalogos"></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.catalogo" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-3">
								<div class="form-group">
									<label for> Agrupación de lista</label>
									<v-select label="descripcion" v-model="form.grupo" :options="grupos"></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.grupo" v-text="message"></li>
									</ul>
								</div>
							</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for>	Bateria</label>
								<v-select label="nombre_comercial" v-model="form.bateria"  :options="baterias"></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bateria" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> BCI</label>
								<input class="form-control" placeholder="" :disabled="true" v-model="form.bateria.bci">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.bci" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> CCA</label>
								<input class="form-control" :disabled="true" placeholder="Dígite el nombre del comercio" v-model="form.bateria.cca">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.cca" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> AMPH</label>
								<input class="form-control" placeholder="Dígite amph" type="number" min="0" v-model="form.amph">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.amph" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Placas</label>
								<input class="form-control" placeholder="Dígite placas" type="number" min="0" v-model="form.placas">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.placas" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Largo</label>
								<input class="form-control" :disabled="true" placeholder="" v-model="form.bateria.largo">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.largo" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Ancho</label>
								<input class="form-control" :disabled="true" placeholder="" v-model="form.bateria.ancho">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.ancho" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Alto</label>
								<input class="form-control" :disabled="true" placeholder="" v-model="form.bateria.alto">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.alto" v-text="message"></li>
								</ul>
							</div>
						</div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for=""> Costo estandar</label>
                                <input class="form-control" :disabled="true" placeholder="" v-model="form.bateria.costo_estandar">
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.costo_estandar" v-text="message"></li>
                                </ul>
                            </div>
                        </div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Precio público</label>
								<input class="form-control" placeholder="Dígite un precio público" type="number" min="0" v-model="form.precio_publico">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.precio_publico" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for=""> Precio distribuidor</label>
								<input class="form-control" placeholder="Dígite un precio distribuidor" type="number" min="0" v-model="form.precio_distribuidor">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.precio_distribuidor" v-text="message"></li>
								</ul>
							</div>
						</div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>&nbsp;</label>
                                <button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar detalle</button>
                            </div>
                        </div>
					</div>



                        <template v-if="loading">
                            <BlockUI :message="msg" :url="url"></BlockUI>
                        </template>



					<div class="row">
						<div class="col-sm-12">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.detalleSolicitud" v-text="message"></li>
							</ul>

							<table class="table table-bordered table-responsive">
								<thead>
								<tr>
									<th></th>
								<!--	<th style="min-width:300px" >Catalogo de lista</th>-->
									<th style="min-width:200px">Agrupación de lista</th>
									<th style="min-width:200px">Bateria</th>
									<th style="min-width:150px">BCI</th>
									<th style="min-width:150px">CCA</th>
									<th style="min-width:150px">AMPH</th>
									<th style="min-width:150px">Placas</th>
									<th style="min-width:150px">Largo</th>
									<th style="min-width:150px">Ancho</th>
									<th style="min-width:150px">Alto</th>
									<th style="min-width:150px">Costo estandar</th>
									<th style="min-width:150px">Precio público</th>
									<th style="min-width:150px">Precio distribuidor</th>
									<th ></th>
								</tr>
								</thead>
								<tbody>
								<template  v-for="(item, index) in form.detalleLista">
									<tr>
										<td style="width: 2%">
											<button @click="eliminarLinea(item, index)">
												<i class="fa fa-trash"></i>
											</button>
										</td>
										<!--<td>
                                            <v-select label="descripcion" :disabled="true" v-model="item.catalogo" :options="catalogos"></v-select>
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleLista.${index}.catalogo`]" v-text="message"></li>
											</ul>
										</td>-->
										<td>
                                            <v-select label="descripcion" :disabled="true" v-model="item.grupo" :options="grupos"></v-select>
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleLista.${index}.grupo`]" v-text="message"></li>
											</ul>
										</td>
										<td>
                                            <v-select label="nombre_comercial" :disabled="true" v-model="item.bateria"  :options="baterias"></v-select>
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleLista.${index}.bateria`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" :disabled="true" type="text" min="0" v-model="item.bateria.bci">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleLista.${index}.bci`]" v-text="message"></li>
											</ul>
										</td>
                                        <td>
                                            <input  class="form-control" :disabled="true" type="number" min="0" v-model="item.bateria.cca">
                                            <ul class="error-messages">
                                                <li :key="message" v-for="message in errorMessages[`detalleLista.${index}.cca`]" v-text="message"></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" :disabled="true" type="number" min="0" v-model="item.amph">
                                            <ul class="error-messages">
                                                <li :key="message" v-for="message in errorMessages[`detalleLista.${index}.amph`]" v-text="message"></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" :disabled="true" type="number" min="0" v-model="item.placas">
                                            <ul class="error-messages">
                                                <li :key="message" v-for="message in errorMessages[`detalleLista.${index}.placas`]" v-text="message"></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" :disabled="true" type="number" min="0" v-model="item.bateria.largo">
                                            <ul class="error-messages">
                                                <li :key="message" v-for="message in errorMessages[`detalleLista.${index}.largo`]" v-text="message"></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" :disabled="true" type="number" min="0" v-model="item.bateria.ancho">
                                            <ul class="error-messages">
                                                <li :key="message" v-for="message in errorMessages[`detalleLista.${index}.ancho`]" v-text="message"></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" :disabled="true" type="number" min="0" v-model="item.bateria.alto">
                                            <ul class="error-messages">
                                                <li :key="message" v-for="message in errorMessages[`detalleLista.${index}.alto`]" v-text="message"></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" :disabled="true" type="number" min="0" v-model="item.bateria.costo_estandar">
                                            <ul class="error-messages">
                                                <li :key="message" v-for="message in errorMessages[`detalleLista.${index}.costo_estandar`]" v-text="message"></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" :disabled="true" type="number" min="0" v-model="item.precio_publico">
                                            <ul class="error-messages">
                                                <li :key="message" v-for="message in errorMessages[`detalleLista.${index}.precio_publico`]" v-text="message"></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" :disabled="true" type="number" min="0" v-model="item.precio_distribuidor">
                                            <ul class="error-messages">
                                                <li :key="message" v-for="message in errorMessages[`detalleLista.${index}.precio_distribuidor`]" v-text="message"></li>
                                            </ul>
                                        </td>
										<!--<td>
										<strong> {{sub_total(item) | formatMoney(2)}}</strong>
										</td>-->

									</tr>
									<tr></tr>
								</template>
								</tbody>
								<tfoot>
								<!--<tr>
									<td colspan="4"></td>
									<td>Total</td>
									<td> <strong> {{calcular_total | formatMoney(2)}}</strong></td>
								</tr>-->
								</tfoot>
							</table>
						</div>
					</div>


					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-lista-bateria' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Registrar' ? true : false" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
					</div>
				</div>
					<template v-if="loading">
						<BlockUI :message="msg" :url="url"></BlockUI>
					</template>
				</div>
			</div>
		</div>
</template>

<script type="text/ecmascript-6">
	import lista from '../../api/lista-precio-baterias'
	import normativa from '../../api/normativas'
	import loadingImage from '../../assets/images/block50.gif'
	import sucursal from "../../api/sucursales";
	import cliente from "../../api/clientes";
	import es from "vuejs-datepicker/dist/locale/translations/es";
	import numberasstring from "../../assets/custom-scripts/NumberAsString";

	export default {
		data() {
			return {
				loading:false,
				msg: 'Cargando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
                detalleForm:{
				    bateria:'',
                    catalogo:'',
                    grupo:'',
                    bci:'',
                    cca:'',
                    amph:'',
                    placas:'',
                    largo:'',
                    ancho:'',
                    alto:'',
                    costo_estandar:'',
                    precio_publico:'',
                    precio_distribuidor:'',
                },
				form: {
					amph:0,
					placas:0,
					bateria:'',
					catalogo:'',
					grupo:'',
					precio_publico:0,
					precio_distribuidor:0,
                    detalleLista:[],
				},
				grupos:[],
				catalogos:[],
				baterias:[],
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			nuevo(){
				var self = this
				self.loading = true;
				lista.nueva({}, data => {
					self.grupos = data.grupos;
					self.catalogos = data.catalogos;
					self.baterias = data.baterias;
					self.loading = false;
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			registrar() {
				var self = this;
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				lista.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente", 5);
					this.$router.push({
						name: 'listado-lista-bateria'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
					self.btnAction = 'Registrar'
				})
			},

			onDateSelect(date) {
				//console.log(date); //
				this.form.fecha = moment(date).format("YYYY-MM-DD"); //
			},
			agregarDetalle() {
				let self = this;
				if(this.form.bateria){
						let i = 0;
						let keyx = 0;
						if(self.form.detalleLista){
							self.form.detalleLista.forEach((fila, key) => {
								if(self.form.bateria===fila.bateria){
									i++;
									keyx = key;
								}
							});
						}
						if(i === 0) {
                            this.form.detalleLista.push({
                                /*catalogo: this.form.catalogo,*/
                                grupo: this.form.grupo,
                                bateria: this.form.bateria,
                                bci: this.form.bci,
                                cca: this.form.cca,
                                amph: this.form.amph,
                                placas: this.form.placas,
                                largo: this.form.largo,
                                ancho: this.form.ancho,
                                alto: this.form.alto,
                                costo_estandar: this.form.costo_estandar,
                                precio_publico: this.form.precio_publico,
                                precio_distribuidor: this.form.precio_distribuidor,
                            });
                                //this.form.catalogo='';
                                this.form.grupo ='';
                                this.form.bateria='';
                                this.form.bci='';
                                this.form.cca='';
                                this.form.amph='';
                                this.form.placas='';
                                this.form.largo='';
                                this.form.ancho='';
                                this.form.alto='';
                                this.form.costo_estandar='';
                                this.form.precio_publico='';
                                this.form.precio_distribuidor='';

						}else{
							alertify.warning("Ya existe un registro con la fecha seleccionada",5);
						}

				}else{
					alertify.warning("Los campos no pueden estar vacíos",5);
				}
			},
			eliminarLinea(item, index) {
				if (this.form.detalleLista.length >= 1) {
					this.form.detalleLista.splice(index, 1);

				}else{
					this.form.detalleLista=[];
				}
			},
			/*sub_total(itemX) {
				itemX.subtotal= Number(itemX.monto) * Number(itemX.cantidad);

				if(!isNaN(itemX.subtotal)){
					return itemX.subtotal;
				}
				else return 0;
			},*/
		},
		mounted() {
			this.nuevo();
		}
	}
</script>

<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>