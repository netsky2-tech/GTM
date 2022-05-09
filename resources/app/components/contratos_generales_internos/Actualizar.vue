<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar datos de escritura empresa</div>
						<div class="box-description">Formulario para modificar información datos de escritura empresa</div>
					</div>
					<div>
						<form>
						<div class="row">
						<div class="col-md-4">
							<div class="form-group">
								<label for=""> Nombre representante</label>
								<input class="form-control" placeholder="Dígite nombre del representante" v-model="form.nombre_representante">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-2">
							<div class="form-group">
								<label for="">Estado Civil</label>
								<select class="form-control" v-model="form.estado_civil">
									<option value="1" >Soltero/a</option>
									<option value="2" >Casado/a</option>
									<option value="3" >Viudo/a</option>
									<option value="4" >Divorciado/a</option>
								</select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.estado_civil" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-2">
							<div class="form-group">
								<label for="">Nivel Academico </label>
								<v-select
										:options="niveles_academicos"
										label="descripcion"
										v-model="form.contrato_interno_nivel_academico"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.nivel" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-2">
							<div class="form-group">
								<label for="">Nivel estudio</label>
								<v-select
										:options="niveles_estudios"
										label="descripcion"
										v-model="form.contrato_interno_nivel_estudio"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.contrato_interno_nivel_estudio" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group">
								<label for=""> No. Escritura pública</label>
								<input class="form-control" @change="monto_letras" placeholder="Dígite nombre del representante" min="0"  type="number" v-model="form.no_escritura_publica">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.no_escritura_publica" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for=""> Caracter cargo</label>
								<input class="form-control" placeholder="Dígite caracter cargo" v-model="form.caracter_cargo">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.caracter_cargo" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for=""> Caracter legal</label>
								<input class="form-control" placeholder="Dígite caracter legal" v-model="form.caracter_legal">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.caracter_legal" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for=""> Nombre notario público</label>
								<input class="form-control" placeholder="Dígite nombre del notario público" v-model="form.nombre_notario_publico">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.nombre_notario_publico" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-2">
							<div class="form-group">
								<label for=""> Fecha inscripción de escritura</label>
								<datepicker :format="format" v-model="fechax" :language="es" :value="new Date()" @selected="onDateSelect"></datepicker>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.fecha_inscripcion" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group">
								<label for=""> No. Asiento libro diario</label>
								<input class="form-control" placeholder="Dígite número asiento de libro diario" min="0" type="number" v-model="form.no_asiento_librodiario">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.no_asiento_librodiario" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group">
								<label for=""> No. Inscrito</label>
								<input class="form-control" placeholder="Dígite número inscrito" min="0" type="number" v-model="form.no_inscrito">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.no_inscrito" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group">
								<label for=""> No. tomo</label>
								<input class="form-control" placeholder="Dígite número tomo" min="0" type="number" v-model="form.no_tomo">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.no_tomo" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-2">
							<div class="form-group">
								<label for="">Departamento</label>
								<v-select
										:options="departamentos"
										label="descripcion"
										v-model="form.contrato_interno_departamento"
								></v-select>
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.departamento" v-text="message"></li>
								</ul>
							</div>
						</div>


							<div class="col-sm-2">
								<div class="form-group">
									<label for="">Domicilio</label>
									<v-select
											:options="departamentos"
											label="descripcion"
											v-model="form.contrato_interno_departamento_domicilio"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.departamento2" v-text="message"></li>
									</ul>
								</div>
							</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for=""> Denominación</label>
								<input class="form-control" placeholder="Dígite denominación" v-model="form.denominacion">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.denominacion" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for=""> Identificación</label>
								<input class="form-control" placeholder="Dígite su identificación" v-mask="'#############A'" v-model="form.no_identificacion">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.no_identificacion" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for=""> Nombre empresa</label>
								<input class="form-control" placeholder="Dígite el nombre de la empresa" v-model="form.nombre_empresa">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.nombre_empresa" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for=""> Descripción contractual</label>
								<input class="form-control" placeholder="Dígite una descripción contractual" v-model="form.descripcion_contractual">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.descripcion_contractual" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label for=""> Número RUC</label>
								<input class="form-control" placeholder="Dígite número ruc" v-mask="'A#############'" v-model="form.no_ruc">
								<ul class="error-messages">
									<li :key="message" v-for="message in errorMessages.no_ruc" v-text="message"></li>
								</ul>
							</div>
						</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label for="">Tipo acto juridico </label>
									<v-select
											:options="tipos_actos"
											label="descripcion"
											v-model="form.contrato_interno_tipo_acto_jurudico"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.contrato_interno_tipo_acto_jurudico" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label for=""> Fecha librada</label>
									<datepicker :format="format" v-model="fechax2" :language="es" :value="new Date()" @selected="onDateSelect2"></datepicker>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.fecha_librada" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-md-2">
								<div class="form-group">
									<label for=""> Inscrito paginas</label>
									<input class="form-control" placeholder="Digite paginas inscripción"  type="text" v-model="form.paginas">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.paginas" v-text="message"></li>
									</ul>
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label for="">Departamento librado</label>
									<v-select
											:options="departamentos"
											label="descripcion"
											v-model="form.contrato_interno_departamento_librado"
											v-on:input="obtenerMunicipios()"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.departamento_librado" v-text="message"></li>
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
								<router-link :to="{ name: 'listado-contrato-interno' }" tag="button">
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
	import contrato from '../../api/contratos_internos'
	import loadingImage from '../../assets/images/block50.gif'
	import academico from "../../api/niveles_academicos";
	import estudio from "../../api/niveles_estudios";
	import tipo from "../../api/tipo_acto_juridico";
	import departamento from "../../api/departamentos";
	import es from "vuejs-datepicker/dist/locale/translations/es";
	import numberasstring from "../../assets/custom-scripts/NumberAsString";

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				niveles_academicos:[],
				niveles_estudios:[],
				departamentos:[],
				municipios:[],
				tipos_actos:[],
				meses : new Array ("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"),
				dias : new Array ("primero","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez",
						"once","doce","trece","catorce","quince","diecieis","diecisiete","dieciocho","diecinueve","veinte","veintiuno",'' +
						"veintidos","veintitres","veinticuatro","veinticinco","veintiseis","veintisiete","veintiocho","veintinueve","treinta",
						"treinta y uno"),
				contrato_interno_departamento_domicilio: '',
				contrato_interno_departamento: '',
				es: es,
				format: "dd-MM-yyyy",
				form: {
					nombre_representante: '',
					estado_civil: '',
					contrato_interno_nivel_estudio: '',
					contrato_interno_nivel_academico: '',
					caracter_cargo: '',
					caracter_legal: '',
					no_escritura_publica: '',
					no_escritura_publica_letras: '',
					nombre_notario_publico: '',
					fecha_inscripcion: moment(new Date()).format("YYYY-MM-DD"),
					fecha_inscripcion_letra:'',
					fecha_librada: moment(new Date()).format("YYYY-MM-DD"),
					fecha_librada_letras:'',
					no_asiento_librodiario: '',
					no_inscrito: '',
					no_tomo: '',
					no_unico: '',
					domicilio: '',
					departamento: '',
					departamento2: '',
					departamento_librado: '',
					denominacion: '',
					no_identificacion: '',
					nombre_empresa: '',
					descripcion_contractual: '',
					no_ruc: '',
					municipios_departamento:'',
				},
				fechax:new Date(),
				fechax2:new Date(),
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerTodosNivelesAcademicos() {
				var self = this
				academico.obtenerTodas(data => {
					self.niveles_academicos = data
				}, err => {
					console.log(err)
				})
			},
			obtenerTodosNivelesEstudios() {
				var self = this
				estudio.obtenerTodas(data => {
					self.niveles_estudios = data
				}, err => {
					console.log(err)
				})
			},
			obtenerTipoActo() {
				var self = this
				tipo.obtenerTodas(data => {
					self.tipos_actos = data
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
			onDateSelect(date) {
				this.form.fecha_inscripcion = moment(date).format("YYYY-MM-DD"); //
				this.form.fecha_inscripcion_letra= (this.dias[date.getDate()-1]+ " de " + this.meses[date.getMonth()]
						+ " de " + (numberasstring.numberasstring(date.getFullYear(),'','')).toLowerCase());
			},
			onDateSelect2(date) {
				//console.log(date); //
				this.form.fecha_librada = moment(date).format("YYYY-MM-DD"); //
				this.form.fecha_librada_letras= (this.dias[date.getDate()-1]+ " de " + this.meses[date.getMonth()]
						+ " de " + (numberasstring.numberasstring(date.getFullYear(),'','')).toLowerCase());
			},
			monto_letras(){
				this.form.no_escritura_publica = Math.max(Math.min(Math.round(this.form.no_escritura_publica), 100000), 1);
				if(this.form.no_escritura_publica >0){
					this.form.no_escritura_publica_letras = numberasstring.numberasstring(this.form.no_escritura_publica,'','',true);
				}else{
					this.form.no_escritura_publica_letras ='SELECCIONE UN MONTO MAYOR QUE CERO';
				}
				return this.form.no_escritura_publica_letras;
			},
			obtenerContrato() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				contrato.obtenerContratoGeneral({
					id_contrato_dgeneral_interno: this.$route.params.id_contrato_dgeneral_interno
				}, data => {
					self.form = data.contrato;
					self.nivel_estudio = data.nivel_estudio;
					self.nivel_academico = data.nivel_academico;
					self.departamento = data.departamento;
					self.domicilio = data.domicilio;
					self.departamento_librado = data.departamento_librado;
					self.tipo_acto = data.tipo_acto;
					self.fechax = new Date(data.contrato.fecha_inscripcion);
					self.fechax2 = new Date(data.contrato.fecha_librada);

					self.loading = false;
				}, err => {
					alertify.error(err.id_contrato_dgeneral_interno[0],5);
					this.$router.push({
						name: 'listado-contrato-interno'
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
						name: 'listado-contrato-interno'
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
			this.obtenerContrato()
			this.obtenerTodosNivelesAcademicos();
			this.obtenerTodosNivelesEstudios();
			this.obtenerTodosDepartamentos();
			this.obtenerTipoActo();
		}
    }
</script>