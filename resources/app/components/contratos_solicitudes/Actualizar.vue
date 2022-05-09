<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar solicitud de contrato</div>
						<div class="box-description">Formulario para modificar solicitud de contrato</div>
					</div>
					<div>
						<form>
							<div class="row">
								<div class="col-sm-5">
									<div class="form-group">
										<label for="">Contrato interno </label>
										<v-select
												:options="contrato_interno"
												label="representante_acto"
												v-model="form.solicitud_contrato_interno"
										></v-select>
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.interno" v-text="message"></li>
										</ul>
									</div>
								</div>
								<div class="col-sm-5">
									<div class="form-group">
										<label for="">Contrato merecedor</label>
										<v-select
												:options="contrato_merecedor"
												label="representante_acto"
												v-model="form.solicitud_contrato_merecedor"
										></v-select>
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.merecedor" v-text="message"></li>
										</ul>
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<label for=""> Monto</label>
										<input class="form-control" placeholder="Dígite un monto"  type="number" v-model="form.monto">
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.monto" v-text="message"></li>
										</ul>
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<label for=""> Plazo de ejecución</label>
										<input class="form-control" placeholder="Dígite el plazo de ejecución"  type="number" min="0" v-model="form.plazo_ejecucion">
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.plazo_ejecucion" v-text="message"></li>
										</ul>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="form-group">
										<label for="">Tipo contrato</label>
										<v-select
												:options="contrato_tipo"
												label="descripcion"
												v-model="form.solicitud_contrato_tipo"
										></v-select>
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.tipo" v-text="message"></li>
										</ul>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label for=""> Descripción del servicio</label>
										<input class="form-control" placeholder="Describa el servicio" v-model="form.descripcion_servicio">
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.descripcion_servicio" v-text="message"></li>
										</ul>
									</div>
								</div>
								<div class="col-sm-2">
									<div class="form-group">
										<label for="">Departamento</label>
										<v-select
												:options="departamentos"
												label="descripcion"
												v-model="form.solicitud_contrato_departamento"
										></v-select>
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.departamento" v-text="message"></li>
										</ul>
									</div>
								</div>
								<div class="col-sm-2">
									<div class="form-group">
										<label for=""> Fecha inicio</label>
										<datepicker :format="format" v-model="fechax" :language="es" :value="new Date()" @selected="onDateSelect"></datepicker>
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.fecha_inicio" v-text="message"></li>
										</ul>
									</div>
								</div>
								<div class="col-sm-2">
									<div class="form-group">
										<label for=""> Fecha fin</label>
										<datepicker :format="format" v-model="fechax2" :language="es" :value="new Date()" @selected="onDateSelect2"></datepicker>
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.fecha_fin" v-text="message"></li>
										</ul>
									</div>
								</div>

								<div class="col-md-8">
									<div class="form-group">
										<label for=""> Observacion</label>
										<input class="form-control" placeholder="Dígite una observación" v-model="form.observacion">
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.observacion" v-text="message"></li>
										</ul>
									</div>
								</div>
							</div>
					</form>

					<div class="row">


						<!--<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_zona)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_zona)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>-->

						<div class="col-md-12">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-contrato-solicitud' }" tag="button">
									<button class="btn btn-default" type="button">Cancelar</button>
								</router-link>
								<button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar" class="btn btn-primary" type="button">{{ btnAction }}</button>
							</div>
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
	import contrato from '../../api/contratos_solicitudes'
	import loadingImage from '../../assets/images/block50.gif'
	import interno from '../../api/contratos_internos'
	import departamento from '../../api/departamentos'
	import merecedor from '../../api/contratos_merecedores'
	import tipo from '../../api/contrato_tipos'
	import es from "vuejs-datepicker/dist/locale/translations/es";

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				contrato_interno:[],
				contrato_merecedor:[],
				contrato_tipo:[],
				departamentos:[],
				municipios:[],
				form: {
					interno: '',
					merecedor: '',
					tipo: '',
					monto: '',
					descripcion_servicio: '',
					plazo_ejecucion: '',
					departamento: '',
					fecha_inicio:  moment(new Date()).format("YYYY-MM-DD"),
					fecha_fin:  moment(new Date()).format("YYYY-MM-DD"),
					observacion:'',
				},
				fechax:new Date(),
				fechax2:new Date(),
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerTodosContratoInterno() {
				var self = this
				interno.obtenerTodas(data => {
					self.contrato_interno = data
				}, err => {
					console.log(err)
				})
			},
			obtenerTodosContratoMerecedor() {
				var self = this
				merecedor.obtenerTodas(data => {
					self.contrato_merecedor = data
				}, err => {
					console.log(err)
				})
			},
			obtenerTodosDepartamentos() {
				var self = this
				departamento.obtenerTodos(data => {
					self.departamentos = data
				}, err => {
					console.log(err)
				})
			},
			obtenerContratoTipo() {
				var self = this
				tipo.obtenerTodas(data => {
					self.contrato_tipo = data
				}, err => {
					console.log(err)
				})
			},
			onDateSelect(date) {
				//console.log(date); //
				this.form.fecha_inicio = moment(date).format("YYYY-MM-DD"); //
			},
			onDateSelect2(date) {
				//console.log(date); //
				this.form.fecha_fin = moment(date).format("YYYY-MM-DD"); //
			},
			obtenerContrato() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				contrato.obtenerContratoSolicitud({
					id_contrato_solicitud: this.$route.params.id_contrato_solicitud
				}, data => {
					self.form = data.contrato;
					self.contrato_interno = data.contrato_interno;
					self.contrato_merecedor = data.contrato_merecedor;
					self.departamento = data.departamento;
					self.fechax = new Date(data.contrato.f_inicio_contrato);
					self.fechax2 = new Date(data.contrato.f_fin_contrato);
					self.loading = false;
				}, err => {
					alertify.error(err.id_contrato_solicitud[0],5);
					this.$router.push({
						name: 'listado-contrato-solicitud'
					});
				})
			},
		actualizar() {
				var self = this
			self.loading = true;
				self.btnAction = 'Guardando, espere......'
					contrato.actualizar(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'listado-contrato-solicitud'
					})
				}, err => {
						self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
			desactivar(zonaId) {
				var self = this;
				self.$swal.fire({
					title: 'Esta seguro de cambiar el estado?',
					text: "",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						//var self = this
						zona.desactivar({
							id_zona: zonaId
						}, data => {
							alertify.warning("Zona desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-zonas'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(zonaId) {
				var self = this;
				self.$swal.fire({
					title: 'Esta seguro de cambiar el estado?',
					text: "",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						var self = this
						zona.activar({
							id_zona: zonaId
						}, data => {
							alertify.success("Zona activado correctamente", 5);
							this.$router.push({
								name: 'listado-zonas'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			}
		},
		mounted() {
			this.obtenerContrato();
			this.obtenerTodosContratoInterno();
			this.obtenerTodosContratoMerecedor();
			this.obtenerTodosDepartamentos();
			this.obtenerContratoTipo();
		}
    }
</script>