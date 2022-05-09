<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar y Asignar Activo Fijo</div>
						<div class="box-description">Formulario para registrar de activos fijos</div>
					</div>
					<div class="row">
							<div class="col-sm-3">
								<div class="form-group">
									<label >Tipo</label>
									<v-select
											v-model="form.activo_tipo"
											label="descripcion"
											:options="tipos"
											v-on:input="cargarGrupos"
									></v-select>
									<ul class="error-messages">
										<li v-for="message in errorMessages.activo_tipo" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label >Grupo</label>
									<v-select
											v-model="form.activo_grupo"
											label="descripcion"
											:options="grupos"
									></v-select>
									<ul class="error-messages">
										<li v-for="message in errorMessages.activo_grupo" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label > Descripción</label>
								<input class="form-control" v-model="form.descripcion" placeholder="Dígite la descripción del activo">
								<ul class="error-messages">
									<li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

					</div>

					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label >Color</label>
								<v-select
										v-model="form.activo_color"
										label="descripcion"
										:options="colores"
								></v-select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.activo_color" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

					<div class="col-sm-3">
						<div class="form-group">
							<label > Marca</label>
							<input class="form-control" v-model="form.marca" placeholder="Dígite la marca del activo">
							<ul class="error-messages">
								<li v-for="message in errorMessages.marca" :key="message" v-text="message"></li>
							</ul>
						</div>
					</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label > Módelo</label>
								<input class="form-control" v-model="form.modelo" placeholder="Dígite el módelo del activo">
								<ul class="error-messages">
									<li v-for="message in errorMessages.modelo" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

					<div class="col-sm-3">
						<div class="form-group">
							<label > Serie</label>
							<input class="form-control" v-model="form.serie" placeholder="Dígite la serie del activo">
							<ul class="error-messages">
								<li v-for="message in errorMessages.serie" :key="message" v-text="message"></li>
							</ul>
						</div>
					</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label > Condición</label>
								<select class="form-control" v-model="form.condicion">
									<option value="1">Bueno</option>
									<option value="2">Regular</option>
									<option value="3">Malo</option>
								</select>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label >Centro de costo</label>
								<v-select
										v-model="form.centro_costo"
										label="descripcion"
										:options="centros_costos"
								></v-select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.centro_costo" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

					</div>

					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label for>Fecha Adquisición</label>
								<datepicker :language="es" :value="new Date()" @selected="onDateSelect" :format="format" v-model="fechax"></datepicker>

								<ul class="error-messages">
									<li
											v-for="message in errorMessages.fecha_adquisicion"
											:key="message"
											v-text="message"
									></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label > Valor adquisición C$</label>
								<input class="form-control" v-model.number="form.valor_adquisicion" type="number" placeholder="Dígite el valor del activo">
								<ul class="error-messages">
									<li v-for="message in errorMessages.valor_adquisicion" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label > Meses a depreciarse</label>
								<input class="form-control" :disabled="!aplicaCalculo" min="1" type="number" @change="form.meses_depreciarse = Math.max(Math.min(Math.round(form.meses_depreciarse), 300), 1)" v-model.number="form.meses_depreciarse" placeholder="Dígite el numero de meses a depreciarse">
								<ul class="error-messages">
									<li v-for="message in errorMessages.meses_depreciarse" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label > Depreciación mensual C$</label>
								<input disabled class="form-control" v-model="calcularDepreciacion" placeholder="Dígite la depreciación mensual">
								<ul class="error-messages">
									<li v-for="message in errorMessages.depreciacion_mensual" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>


					</div>

					<div class="row">

						<div class="col-sm-3">
							<div class="form-group">
								<label > Mes depreciado</label>
								<input :disabled="!aplicaCalculo" class="form-control" min="1" v-model.number="form.mes_depreciado" placeholder="Dígite el numero de meses a depreciarse">
								<ul class="error-messages">
									<li v-for="message in errorMessages.mes_depreciado" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label > Depreciación acumulada C$</label>
								<input class="form-control" disabled min="1"  type="number" v-model="calcularDepreciacionAcumulada" placeholder="Dígite la depreciación acumulada">
								<ul class="error-messages">
									<li v-for="message in errorMessages.depreciacion_acumulada" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label > Valor en libros C$</label>
								<input class="form-control" disabled v-model="calcularValorEnLibro" placeholder="Dígite el valor actual en libros">
								<ul class="error-messages">
									<li v-for="message in errorMessages.valor_libro" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="form-group">
							<label class="check-label2"><input v-model="form.es_capitalizable" type="checkbox"><strong> Es capitalizable </strong></label>
						</div>

						<div class="col-sm-12">
							<div class="form-group">
								<label > Observación</label>
								<input class="form-control" v-model="form.observacion" placeholder="Dígite la observacion del activo">
								<ul class="error-messages">
									<li v-for="message in errorMessages.observacion" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

					</div>

					<div class="row">
						<div class="col-md-12">
							<div class="alert alert-success">
								<span><strong>Según politica interna</strong></span>
							</div>

						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label > Vida útil</label>
								<input class="form-control" v-model.number="form.vida_util_politica" type="number" placeholder="Dígite la vida útil del activo">
								<ul class="error-messages">
									<li v-for="message in errorMessages.vida_util_politica" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label > Depreciación mensual C$</label>
								<input disabled class="form-control" v-model="calcularDepreciacionPolitica" placeholder="Dígite la depreciación mensual">
								<ul class="error-messages">
									<li v-for="message in errorMessages.depreciacion_mensual_politica" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label > Meses depreciados</label>
								<input :disabled="!aplicaCalculo" class="form-control" min="1" v-model.number="form.mes_depreciado_politica" placeholder="Dígite la cantidad de meses depreciado">
								<ul class="error-messages">
									<li v-for="message in errorMessages.mes_depreciado" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label > Depreciación acumulada C$</label>
								<input class="form-control" disabled min="1"  type="number" v-model="calcularDepreciacionAcumuladaPolitica" placeholder="Dígite la depreciación acumulada">
								<ul class="error-messages">
									<li v-for="message in errorMessages.depreciacion_acumulada_politica" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label > Valor en libros C$</label>
								<input class="form-control" disabled v-model="calcularValorEnLibroPolitica" placeholder="Dígite el valor actual en libros">
								<ul class="error-messages">
									<li v-for="message in errorMessages.valor_libro_politica" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

					</div>

<br>
					<template v-if="mostrar_detalles_vehiculo">
						<div class="alert alert-success">
							<span><strong>Detalles del vehículo</strong></span>
						</div>

						<div class="row">

							<div class="col-sm-3">
								<div class="form-group">
									<label > Placa</label>
									<input class="form-control" v-model="form.placa" placeholder="Dígite la placa del vehiculo">
									<ul class="error-messages">
										<li v-for="message in errorMessages.placa" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label > Chasis</label>
									<input class="form-control" v-model="form.chasis" placeholder="Dígite el chasis del vehiculo">
									<ul class="error-messages">
										<li v-for="message in errorMessages.chasis" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label > Número de motor</label>
									<input class="form-control" v-model="form.numero_motor" placeholder="Dígite el numero de motor del vehiculo">
									<ul class="error-messages">
										<li v-for="message in errorMessages.numero_motor" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label > Cilindro</label>
									<input class="form-control" min="1" type="number" v-model.number="form.cilindro" placeholder="Dígite el numero de cilindro">
									<ul class="error-messages">
										<li v-for="message in errorMessages.cilindro" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label > Tipo combustible:</label>
									<select class="form-control" v-model.number="form.id_tipo_combustible">
										<option value="1">Diesel</option>
										<option value="2">Gasolina</option>
									</select>
									<ul class="error-messages">
										<li
												:key="message"
												v-for="message in errorMessages.id_tipo_combustible"
												v-text="message"
										></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-3">
								<div class="form-group">
									<label > Año</label>
									<input class="form-control" min="1900" type="number" v-model.number="form.anio" placeholder="Dígite el año del vehiculo">
									<ul class="error-messages">
										<li v-for="message in errorMessages.anio" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-3">
								<div class="form-group">
									<label > Capacidad de carga</label>
									<input class="form-control" min="1" type="number"
										   @change="form.capacidad_carga = Math.max(Math.min(Number(form.capacidad_carga), 500), 1)"
										   v-model.number="form.capacidad_carga" placeholder="Dígite la capacidad de carga del vehiculo">
									<ul class="error-messages">
										<li v-for="message in errorMessages.capacidad_carga" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-3">
								<div class="form-group">
									<label > Número de pasajeros</label>
									<input class="form-control" min="1" type="number" v-model.number="form.pasajeros" placeholder="Dígite la capacidad de pasajeros del vehiculo">
									<ul class="error-messages">
										<li v-for="message in errorMessages.pasajeros" :key="message" v-text="message"></li>
									</ul>
								</div>
							</div>

						</div>
						<hr>
					</template>

					<div class="alert alert-success">
						<span><strong>Datos del Trabajador asignado</strong></span>
					</div>
					<div class="row">
						<div class="col-sm-3">
							<div class="form-group">
								<label >Área</label>
								<v-select
										v-model="form.activo_area"
										label="descripcion"
										:options="areas"
										v-on:change="obtenerTrabajadores"
								></v-select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.activo_area" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

						<div class="col-sm-3">
							<div class="form-group">
								<label >Trabajador</label>
								<v-select
										v-model="form.activo_trabajador"
										label="nombre_completo"
										:options="trabajadores"
								></v-select>
								<ul class="error-messages">
									<li v-for="message in errorMessages.activo_trabajador" :key="message" v-text="message"></li>
								</ul>
							</div>
						</div>

						<!--<div class="col-sm-3">
                            <div class="form-group">
                                <label > Código</label>
                                <input class="form-control" v-model="form.codigo" placeholder="Dígite el código del activo">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.codigo" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>-->

					</div>



					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'listado-activos-fijos' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button type="button" class="btn btn-primary" @click="registrar" :disabled="btnAction != 'Registrar' ? true : false">{{ btnAction }}</button>
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
	import activos from '../../api/activos_fijos'
	import loadingImage from '../../assets/images/block50.gif'
	import es from 'vuejs-datepicker/dist/locale/translations/es'
	import salida from "../../api/salidas";

	export default {
		data() {
			return {
				loading:true,
				aplicaCalculo:true,
				fechax: new Date(),
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				mostrar_detalles_vehiculo:false,
				centros_costos: [],
				areas:[],
				grupos:[],
				trabajadores:[],
				tipos:[],
				colores:[],
				propietarios:[],
				es: es,
				format: "dd-MM-yyyy",
				form: {
					descripcion: '',
					codigo: '',
					activo_area : '',
					activo_trabajador : '',
					activo_propietario : '',
					marca : '',
					modelo : '',
					serie: '',
					centro_costo:[],
					condicion: 1,
					observacion: '',
					fecha_adquisicion: moment(new Date()).format("YYYY-MM-DD"),
					valor_adquisicion: 0,
					depreciacion_mensual: 0,
					depreciacion_acumulada: 0,
					valor_libro: 0,
					id_fondo:1,
					es_capitalizable:false,

					placa:'',
					chasis:'',
					numero_motor:'',
					id_tipo_combustible: 1,
					cilindro: 1,
					anio: 2000,
					capacidad_carga: 0,
					pasajeros: 1,

					activo_grupo:'',
					activo_tipo :'',
					meses_depreciarse : 1,
					mes_depreciado : 0,
					anio_depreciado : 0,
					activo_color :'',

                    revaluo:0,
                    valor_revaluo:0,

					vida_util_politica:0,
					depreciacion_mensual_politica:0,
					depreciacion_acumulada_politica:0,
					valor_libro_politica:0,
					mes_depreciado_politica:0,
					porcentaje_deterioro:0,
					valor_deterioro_anual:0,
					valor_deterioro_acumulado:0,
					valor_activo_revaluado:0,
					meses_vida_revaluacion:0,
					depreciacion_mensual_revaluada:0,
					depreciacion_acumulada_revaluada:0,
					valor_libro_revaluado:0,


				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {

			cargarGrupos(){
				var self = this;
				//console.log(self.form.activo_tipo)
				if(self.form.activo_tipo.grupos_activos.length){
				self.grupos = [];
				self.form.activo_grupo = '';
				self.grupos = self.form.activo_tipo.grupos_activos;

					self.form.placa='';
					self.form.chasis='';
					self.form.numero_motor='';
					self.form.id_tipo_combustible= 1;
					self.form.cilindro= 1;
					self.form.anio= 2000;
					self.form.capacidad_carga= 0;
					self.form.pasajeros= 1;
					self.form.meses_depreciarse = 1;
					if(self.form.activo_tipo.id_tipo_activo === 1){
						self.form.meses_depreciarse = 0;
						self.form.mes_depreciado = 0;
					}
					self.aplicaCalculo = self.form.activo_tipo.id_tipo_activo !== 1;
					self.mostrar_detalles_vehiculo=self.form.activo_tipo.id_tipo_activo === 3;
				}
			},

			onDateSelect(date) {
				//console.log(date); //
				this.form.fecha_adquisicion = moment(date).format("YYYY-MM-DD"); //
			},

			obtenerTrabajadores(){
				var self = this;
				self.trabajadores=[];
				self.form.activo_trabajador=[];
				if(self.form.activo_area){
					self.trabajadores = self.form.activo_area.trabajadores_area;
				}
			},

			nuevo() {
				var self = this;
				activos.nuevo({}, data => {
							self.centros_costos = data.centros;
							self.areas = data.areas;
							self.form.activo_area = self.areas[0];
							self.trabajadores = self.form.activo_area.trabajadores_area;
							self.tipos = data.tipos;
							//self.grupos = data.grupos;
							self.colores = data.colores;
							self.propietarios = data.propietarios;
							self.loading = false;
						},
						err => {
							console.log(err);
						})

			},

			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'


				self.$swal.fire({
					title: 'Esta seguro de registrar el activo?',
					text: "Se registrarán los cambios",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						self.loading = true;
						activos.registrar(self.form, data => {
							self.loading = false;
							this.$router.push({
								name: 'listado-activos-fijos'
							})
						}, err => {
							self.loading = false;
							self.errorMessages = err
							self.btnAction = 'Registrar'
						})
					}else{
						self.loading = false;
						self.btnAction = "Registrar";
					}
				})

			}
		},computed:{
			calcularDepreciacion(){
				let self = this;
				if(self.aplicaCalculo){
				self.form.depreciacion_mensual = Number((self.form.valor_adquisicion/self.form.meses_depreciarse).toFixed(2));
				if(!isNaN(self.form.depreciacion_mensual)){
					return self.form.depreciacion_mensual;
				}else{
					return 0;
				}
				}else{
					self.form.depreciacion_mensual =0;
					return 0;
				}
			},
			calcularDepreciacionPolitica(){
				let self = this;
				if(self.aplicaCalculo){
					self.form.depreciacion_mensual_politica = Number((self.form.valor_adquisicion/self.form.vida_util_politica).toFixed(2));
					if(!isNaN(self.form.depreciacion_mensual_politica)){
						return self.form.depreciacion_mensual_politica;
					}else{
						return 0;
					}
				}else{
					self.form.depreciacion_mensual_politica =0;
					return 0;
				}
			},

			calcularDepreciacionAcumulada(){
				let self = this;
				if(self.aplicaCalculo){
				self.form.depreciacion_acumulada = Number((self.form.depreciacion_mensual*self.form.mes_depreciado).toFixed(2));
				if(!isNaN(self.form.depreciacion_acumulada)){
					return self.form.depreciacion_acumulada;
				}else{
					return 0;
				}
				}else{
					self.form.depreciacion_acumulada =0;
					return 0;
				}
			},
			calcularDepreciacionAcumuladaPolitica(){
				let self = this;
				if(self.aplicaCalculo){
					self.form.depreciacion_acumulada_politica = Number((self.form.depreciacion_mensual_politica*self.form.mes_depreciado_politica).toFixed(2));
					if(!isNaN(self.form.depreciacion_acumulada_politica)){
						return self.form.depreciacion_acumulada_politica;
					}else{
						return 0;
					}
				}else{
					self.form.depreciacion_acumulada_politica =0;
					return 0;
				}
			},

			calcularValorEnLibro(){
				let self = this;
				if(self.aplicaCalculo){
				self.form.valor_libro = Number((self.form.valor_adquisicion-self.form.depreciacion_acumulada).toFixed(2));
				if(!isNaN(self.form.valor_libro) && self.form.valor_libro >0){
					return self.form.valor_libro;
				}else{
					self.form.valor_libro=0;
					return self.form.valor_libro;
				}
				}else{
					self.form.valor_libro =self.form.valor_adquisicion;
					return self.form.valor_libro;
				}
			},
			calcularValorEnLibroPolitica(){
				let self = this;
				if(self.aplicaCalculo){
					self.form.valor_libro_politica = Number((self.form.valor_adquisicion-self.form.depreciacion_acumulada_politica).toFixed(2));
					if(!isNaN(self.form.valor_libro_politica) && self.form.valor_libro_politica >0){
						return self.form.valor_libro_politica;
					}else{
						self.form.valor_libro_politica=0;
						return self.form.valor_libro_politica;
					}
				}else{
					self.form.valor_libro_politica =self.form.valor_adquisicion;
					return self.form.valor_libro_politica;
				}
			},
			calcularRevaluacion()
			{
				let self = this;
				// self.form.valor_revaluo=202250;
				self.form.revaluo = Number((self.form.valor_revaluo-self.form.valor_libro).toFixed(2));
				if(!isNaN(self.form.revaluo) && self.form.revaluo > 0){
					return self.form.revaluo;
				}else
				{
					self.form.revaluo=0;
					return self.form.revaluo;
				}
			},


		},
		  mounted() {
    			this.nuevo();
  				}
    }
</script>
<style>
	.check-label2 {
		margin-top: 40px;
		margin-left: 40px;
	}
</style>