<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Datos de seguimiento de cotizacion</div>
						<div class="box-description">Formulario para seguimiento</div>
					</div>

						<div class="row">
							<div class="col-sm-2">
								<div class="form-group">
									<label for=""> No. Proforma</label>
									<input class="form-control" :disabled="true" placeholder="" v-model="form.no_documento">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.proforma" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-6">
                                <div class="form-group">
                                    <label for>Ejecutivo de venta</label>
                                    <v-select label="nombre_completo" v-model="form.proforma_vendedor" :options="vendedores"></v-select>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.vendedor" v-text="message"></li>
                                    </ul>
                                </div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Nombre de persona contactada</label>
									<input class="form-control" placeholder="Dígite un nombre" v-model="form.nombre_contacto">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Cargo de persona contactada</label>
									<input class="form-control" placeholder="Dígite un cargo" v-model="form.cargo_contacto">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.cargo_contacto" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label for="">Medio de contacto</label>
									<select class="form-control" v-model="form.medio_contacto">
										<option value="1" >Llamada</option>
										<option value="2" >Correo</option>
										<option value="3" >App Mensajería</option>
										<option value="4" >Visita personal</option>
									</select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.medio_contacto" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Correo</label>
									<input class="form-control" placeholder="Dígite un correo electronico" v-model="form.correo">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.correo" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label for=""> Telefono</label>
									<input class="form-control" type="number" min="0" placeholder="Dígite un número telefonico" v-model="form.telefono">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.telefono" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Observación</label>
									<input class="form-control" placeholder="Dígite una observación" v-model="form.nota_seguimiento">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.nota_seguimiento" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label for>Proximo contacto de seguimiento</label>
									<datepicker :format="format" :language="es" :value="new Date()" v-model="fechax" @selected="onDateSelect2"></datepicker>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.viatico" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label for>&nbsp;</label>
									<button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar detalle</button>
								</div>
							</div>
						</div>

					<div class="row">
						<div class="col-sm-12">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.proforma" v-text="message"></li>
							</ul>

							<table class="table table-bordered table-hover table-responsive">
								<thead>
								<tr>
									<th></th>
									<th style="min-width:330px">Ejecutivo de ventas</th>
									<th style="min-width:300px">Nombre persona contactada</th>
									<th style="min-width:200px">Cargo persona contactada</th>
									<th style="min-width:150px">Medio de contacto</th>
									<th style="min-width:200px">Correo</th>
									<th style="min-width:200px">Telefono</th>
									<th style="min-width:350px">Observaciones</th>
									<th style="min-width:120px">Próximo contacto</th>
								</tr>
								</thead>
								<tbody>
								<template  v-for="(item, index) in form.proforma">
									<tr>
										<td style="width: 2%">
											<button @click="eliminarLinea(item, index)">
												<i class="fa fa-trash"></i>
											</button>
										</td>
										<td>
                                            <!--<v-select  label="text" :disabled="true" v-model="item.proforma_vendedor" :options="vendedores"></v-select>-->
											 {{item.proforma_vendedor.text}}
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`proforma.${index}.vendedor`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control"  type="text" :disabled="true" v-model.text="item.nombre_contacto">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSeguimiento.${index}.nombre_contacto`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="text" :disabled="true" v-model.text="item.cargo_contacto">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSeguimiento.${index}.cargo_contacto`]" v-text="message"></li>
											</ul>
										</td>
										<td>
                                            <select class="form-control" :disabled="true" v-model.text="item.medio_contacto">
                                                <option value="1" >Llamada</option>
                                                <option value="2" >Correo</option>
                                                <option value="3" >App Mensajería</option>
                                                <option value="4" >Visita personal</option>
                                            </select>
											<!--<input  class="form-control" type="text" :disabled="true" v-model.text="item.medio_contacto">-->
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSeguimiento.${index}.medio_contacto`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="text" :disabled="true" v-model.text="item.correo">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSeguimiento.${index}.correo`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="text" :disabled="true" v-model.text="item.telefono">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSeguimiento.${index}.telefono`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" type="text" :disabled="true" v-model.text="item.nota_seguimiento">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSeguimiento.${index}.nota_seguimiento`]" v-text="message"></li>
											</ul>
										</td>
										<td>
											<input  class="form-control" :disabled="true" v-model="item.proximo_contacto">
											<ul class="error-messages">
												<li :key="message" v-for="message in errorMessages[`detalleSeguimiento.${index}.proximo_contacto`]" v-text="message"></li>
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
								<tr>
									<!--<td colspan="4"></td>
									<td>Total</td>
									<td> <strong> {{calcular_total | formatMoney(2)}}</strong></td>-->
								</tr>
								</tfoot>
							</table>
						</div>
					</div>

					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-cotizaciones' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Registrar' ? true : false" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
					</div>
					<template v-if="loading">
						<BlockUI :message="msg" :url="url"></BlockUI>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import proforma from '../../api/proformas-seguimiento'
	import loadingImage from '../../assets/images/block50.gif'
	import es from "vuejs-datepicker/dist/locale/translations/es";
	import estudio from "../../api/niveles_estudios";
	import cargo from "../../api/cargos";
	import comisiones from "../../api/comisiones_asignaciones";
	import asignacion from "../../api/marcadas";
	import comprobante from "../../api/caja-chica-comprobante";

	export default {
		data() {
			return {
				loading:false,
				msg: 'Cargando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
				form: {
                    proforma:[],
				    id_proforma:'',
                    no_documento:'',
					proforma_vendedor:[],
					nombre_contacto: '',
					cargo_contacto: '',
					medio_contacto: 1,
					correo: '',
					telefono: '',
					nota_seguimiento: '',
					proximo_contacto:  moment(new Date()).format("YYYY-MM-DD"),
				},
				fechax: new Date(),
				fechax2: new Date(),
				trabajador:{},
				vendedores:[],
				id_trabajador_seguimiento:'',
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			nueva() {
				var self = this;
                self.loading = true;
				proforma.nueva({id_proforma: this.$route.params.id_proforma}, data => {
							self.form.proforma= data.seguimientos;
							self.form.no_documento = data.no_documento;
							self.form.id_proforma = data.id_proforma;
                            self.fechax2 = new Date(data.seguimientos.proximo_contacto);
                            self.vendedores = data.vendedores;
                            self.loading = false;
						},
						err => {
                            self.loading = false;
							console.log(err);
						})

			},
			obtenerSeguimiento() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				proforma.obtenerProforma({
					id_proforma: this.$route.params.id_proforma
				}, data => {
					self.vendedores = data.vendedores;
					self.form = data.seguimiento;
					self.fechax2 = new Date(data.seguimiento.proforma_seguimiento.proximo_contacto);
					self.loading = false;
				}, err => {
					alertify.error(err.id_proforma[0],5);
					this.$router.push({
						name: 'listado-cotizaciones'
					});
				})
			},
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				proforma.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Datos registrados correctamente",5);
					this.$router.push({
						name: 'listado-cotizaciones'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			},
			agregarDetalle() {
				let self = this;
				if(this.form.proximo_contacto){
					let i = 0;
					let keyx = 0;
					if(self.form.proforma){
						self.form.proforma.forEach((fila, key) => {
							if(self.form.proximo_contacto===fila.proximo_contacto){
								i++;
								keyx = key;
							}
						});
					}
					if(i === 0){
						//this.detalleForm.parentescos.descripcion = this.detalleForm.parentescos.text;
						this.form.proforma.push({
							proforma_vendedor: this.form.proforma_vendedor,
							nombre_contacto: this.form.nombre_contacto,
							cargo_contacto: this.form.cargo_contacto,
							medio_contacto: this.form.medio_contacto,
							correo: this.form.correo,
							telefono: this.form.telefono,
							nota_seguimiento: this.form.nota_seguimiento,
							proximo_contacto: this.form.proximo_contacto,
						});
						//this.detalleForm.fecha_viatico='';
						this.form.trabajador='';
						this.form.nombre_contacto='';
						this.form.cargo_contacto='';
						this.form.medio_contacto='';
						this.form.correo='';
						this.form.telefono='';
						this.form.nota_seguimiento='';
						this.form.proximo_contacto='';

					}else{
						alertify.warning("Ya existe un registro con los datos seleccionados",5);
					}

				}else{
					alertify.warning("Los campos no pueden estar vacíos",5);
				}
			},
			eliminarLinea(item, index) {
				if (this.form.proforma.length >= 1) {
					this.form.proforma.splice(index, 1);

				}else{
					this.form.proforma=[];
				}
			},
			onDateSelect2(date) {
				//console.log(date); //
				this.form.proximo_contacto = moment(date).format("YYYY-MM-DD"); //
			},
			seleccionarEmpleado(e) {
				const empleadoP = e.target.value;
				var self = this;
				self.trabajador = empleadoP;
				self.id_trabajador = self.trabajador.id_trabajador;
			},
		},
		mounted() {
			this.nueva();
			//this.obtenerSeguimiento();
		}
    }
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>