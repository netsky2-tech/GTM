<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Revaluación de activo</div>
                <div class="box-description">Formulario para revaluar activo</div>
            </div>
            <form>

                <div class="alert alert-success">
                    <span><strong>Datos del Activo Fijo</strong></span>
                </div>
                <div class="row">


                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Centro de costo</label>
                            <v-select
                                    v-model="form.activo_centro"
                                    label="descripcion"
                                    :options="centros_costos"
                                    :disabled="true"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.centro_costo" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Propietario</label>
                            <v-select
                                    :disabled="true"
                                    v-model="form.activo_propietario"
                                    label="descripcion"
                                    :options="propietarios"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.activo_propietario" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Tipo</label>
                            <v-select
                                    :disabled="true"
                                    v-model="form.activo_tipo_activo"
                                    label="descripcion"
                                    :options="tipos"
                                    v-on:input="cargarGrupos"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.activo_tipo_activo" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Grupo</label>
                            <v-select
                                    :disabled="true"
                                    v-model="form.activo_grupo"
                                    label="descripcion"
                                    :options="grupos"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.activo_grupo" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >  Descripción</label>
                            <input disabled class="form-control" v-model="form.descripcion" placeholder="Dígite la descripción del activo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Color</label>
                            <v-select :disabled="true"
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
                            <input disabled class="form-control" v-model="form.marca" placeholder="Dígite la marca del activo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.marca" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Serie</label>
                            <input disabled class="form-control" v-model="form.serie" placeholder="Dígite la serie del activo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.serie" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for>Fecha Adquisición</label>
                            <datepicker :disabled="true"  :language="es" :value="new Date()" @selected="onDateSelect"
                                        :format="format"></datepicker>
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
                            <input disabled class="form-control"  min="1"  v-model.number="form.valor_adquisicion" placeholder="Dígite el valor del activo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.valor_adquisicion" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Meses a depreciarse</label>
                            <input disabled class="form-control" min="1" type="number"  v-model.number="form.meses_depreciarse" placeholder="Dígite el numero de meses a depreciarse">
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


                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Depreciación acumulada C$</label>
                            <input disabled class="form-control" v-model.number="form.depreciacion_acumulada" placeholder="Dígite la depreciación acumulada">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.depreciacion_acumulada" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Valor en libros C$</label>
                            <input disabled class="form-control" v-model.number="form.valor_libro" placeholder="Dígite el valor actual en libros">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.valor_libro" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Mes depreciado</label>
                            <input disabled class="form-control" v-model.number="form.mes_depreciado" placeholder="Dígite el numero de meses a depreciarse">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.mes_depreciado" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="check-label2"><input v-model="form.es_capitalizable" type="checkbox"><strong> Es capitalizable </strong></label>
                    </div>

                        <div class="col-md-12">
                            <div class="alert alert-success">
                                <span><strong>Según politica interna</strong></span>
                            </div>

                      <div class="row">

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Vida útil</label>
                                <input disabled class="form-control" v-model.number="form.vida_util_politica" type="number" placeholder="Dígite la vida útil del activo">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.vida_util_politica" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Depreciación mensual C$</label>
                                <input disabled class="form-control" v-model="form.depreciacion_mensual_politica" placeholder="Dígite la depreciación mensual">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.depreciacion_mensual_politica" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Meses depreciados</label>
                                <input disabled class="form-control" min="1" v-model.number="form.mes_depreciado_politica" placeholder="Dígite la cantidad de meses depreciado">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.mes_depreciado" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Depreciación acumulada C$</label>
                                <input disabled class="form-control" disabled min="1"  type="number" v-model="form.depreciacion_acumulada_politica" placeholder="Dígite la depreciación acumulada">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.depreciacion_acumulada_politica" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Valor en libros C$</label>
                                <input disabled class="form-control" disabled v-model="form.valor_libro_politica" placeholder="Dígite el valor actual en libros">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.valor_libro_politica" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>
                      </div>

                    </div>
                    <div class="col-md-12">
                        <div class="alert alert-success">
                            <span><strong>Revaluación del activo</strong></span>
                        </div>

                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Valor revaluo</label>
                            <input  class="form-control" v-model.number="form.valor_revaluo" placeholder="Dígite el nuevo valor del activo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.valor_revaluo" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Vida útil adicional</label>
                            <input class="form-control" v-model.number="form.vida_util" min="0" type="number" placeholder="Dígite la vida útil adicional del activo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.vida_util" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Meses a depreciarse</label>
                            <input disabled class="form-control" v-model="calcularVidaUtil" type="number" placeholder="Dígite la vida útil adicional del activo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.vida_util" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Depreciación mensual C$</label>
                            <input disabled class="form-control" v-model="calcularDepreciacionRevaluada" placeholder="Dígite la depreciación mensual">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.depreciacion_mensual_politica" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Meses depreciados</label>
                            <input  class="form-control" min="1" v-model.number="form.mes_depreciado_revaluada" placeholder="Dígite la cantidad de meses depreciado">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.mes_depreciado_revaluada" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Depreciación acumulada C$</label>
                            <input disabled class="form-control" disabled min="1"  type="number" v-model="calcularDepreciacionAcumuladaRevaluada" placeholder="Dígite la depreciación acumulada">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.depreciacion_acumulada_revaluada" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Valor en libros C$</label>
                            <input disabled class="form-control" disabled v-model="calcularValorEnLibroRevaluada" placeholder="Dígite el valor actual en libros">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.valor_libro_revaluada" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                        <div class="col-md-12">
                            <div class="alert alert-success">
                                <span><strong>Detalles de revaluo</strong></span>
                            </div>

                        </div>

                    <div class="col-sm-12">
                        <table class="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th class="text-left table-number">Descripción</th>
                                <th class="text-left table-number">Monto</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Valor en libros</td>
                                <td >{{form.valor_libro}}</td>
                            </tr>
                            <tr>
                                <td>Valor revaluo</td>
                                <td>{{form.valor_revaluo}}</td>
                            </tr>
                           <tr>
                               <td>( - )</td>
                               <td>{{calcularRevaluacion}}</td>
                           </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="alert alert-success">
                    <span><strong>Datos del trabajador Asignado</strong></span>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Área</label>
                            <v-select
                                    :disabled="true"
                                    v-model="form.activo_area"
                                    label="descripcion"
                                    :options="areas"
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
                                    :disabled="true"
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

            </form>

            <div class="row">
                <div class="col-md-12">
                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'listado-activos-fijos' }" tag="button">
                            <button class="btn btn-default" type="button">Cancelar</button>
                        </router-link>
                        <button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar"
                                class="btn btn-primary" type="button">{{ btnAction }}
                        </button>
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
    import activo_fijo from '../../api/activos_fijos'
    import loadingImage from '../../assets/images/block50.gif'
    import es from 'vuejs-datepicker/dist/locale/translations/es'
    export default {
        data() {
            return {
                loading:true,
                msg: 'Guardando los datos, espere un momento',
                url : '/public'+loadingImage,   //It is important to import the loading image then use here
                mostrar_detalles_vehiculo:false,
                sucursales: [],
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
                    activo_sucursal : '',
                    marca : '',
                    serie: '',
                    fecha_adquisicion: moment(new Date()).format("YYYY-MM-DD"),
                    valor_adquisicion: 0,
                    depreciacion_mensual: 0,
                    depreciacion_acumulada: 0,
                    valor_libro: 0,
                    id_fondo:1,
                    es_capitalizable: false,

                    placa:'',
                    chasis:'',
                    numero_motor:'',
                    id_tipo_combustible: 1,
                    cilindro: 1,
                    anio: 2000,
                    capacidad_carga: 0,
                    pasajeros: 1,

                    activo_grupo:'',
                    activo_tipo_activo :'',
                    meses_depreciarse : 0,
                    mes_depreciado : 0,
                    anio_depreciado : 0,
                    activo_color :'',

                    revaluo:0,
                    valor_revaluo:0,

                    vida_util:0,
                    vida_util_adicional:0,
                    depreciacion_mensual_politica:0,
                    depreciacion_acumulada_politica:0,
                    valor_libro_politica:0,
                    mes_depreciado_politica:0,
                    mes_depreciado_revaluada:0,
                    porcentaje_deterioro:0,
                    valor_deterioro_anual:0,
                    valor_deterioro_acumulado:0,
                    valor_activo_revaluado:0,
                    meses_vida_revaluacion:0,
                    depreciacion_mensual_revaluada:0,
                    depreciacion_acumulada_revaluada:0,
                    valor_libro_revaluado:0,

                },
                btnAction: 'Guardar',
                errorMessages: []
            }
        },
        methods: {
            cargarGrupos(){
                var self = this;
                //console.log(self.form.activo_tipo_activo)
                if(self.form.activo_tipo_activo.grupos_activos.length){
                    self.grupos = [];
                    self.form.activo_grupo = '';
                    self.grupos = self.form.activo_tipo_activo.grupos_activos;
                }
            },
            obtenerActivoFijo() {
                var self = this
                activo_fijo.obtenerActivoFijo({
                    id_activo: self.$route.params.id_activo
                }, data => {
                    self.form = data.activo;
                    self.sucursales = data.sucursales;
                    self.areas = data.areas;
                    self.trabajadores = data.trabajadores;
                    self.tipos = data.tipos;
                    self.mostrar_detalles_vehiculo = self.form.activo_detalle_vehiculo;
                    //self.grupos = data.grupos;
                    self.colores = data.colores;
                    self.propietarios = data.propietarios;
					self.loading = false;
                }, err => {
                    alertify.error(err.id_activo[0], 5);
                    this.$router.push({
                        name: 'listado-activos-fijos'
                    });
                })


            },

            onDateSelect(date) {
                //console.log(date); //
                this.form.fecha_adquisicion = moment(date).format("YYYY-MM-DD"); //
            },
            actualizar() {
                var self = this

                self.btnAction = 'Guardando, espere......'
                self.$swal.fire({
                    title: 'Esta seguro de revaluar este activo?',
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
                        activo_fijo.revaluar(self.form, data => {
                            alertify.success("Activo Fijo revaluado correctamente", 5);
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



            },

            desactivar(activoID) {

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
                        activo_fijo.desactivar({
                            id_activo: activoID
                        }, data => {
                            alertify.warning("Activo Fijo desactivada correctamente", 5);
                            this.$router.push({
                                name: 'listado-activos-fijos'
                            })
                        }, err => {
                            console.log(err)
                        });
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },
            activar(activoID) {
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
                        activo_fijo.activar({
                            id_activo: activoID
                        }, data => {
                            alertify.success("Activo Fijo activada correctamente", 5);
                            this.$router.push({
                                name: 'listado-activos-fijos'
                            })
                        }, err => {
                            console.log(err)
                        });
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            }
        },
        computed:{
            calcularVidaUtil()
            {
                let self = this;
                self.form.vida_util_adicional = Number((self.form.vida_util+self.form.vida_util_politica).toFixed(2));
                if(!isNaN(self.form.vida_util_adicional) && self.form.vida_util_adicional > 0){
                    return self.form.vida_util_adicional;
                }else
                {
                    self.form.vida_util_adicional = self.form.vida_util_politica;
                    return self.form.vida_util_adicional;
                }
            },
            calcularDepreciacion(){
                let self = this;
                self.form.depreciacion_mensual = Number((self.form.valor_adquisicion/self.form.meses_depreciarse).toFixed(2));
                if(!isNaN(self.form.depreciacion_mensual)){
                    return self.form.depreciacion_mensual;
                }else{
                    return 0;
                }
            },
            calcularDepreciacionPolitica(){
                let self = this;
                    self.form.depreciacion_mensual_politica = Number((self.form.valor_adquisicion/self.form.vida_util_politica).toFixed(2));
                    if(!isNaN(self.form.depreciacion_mensual_politica)){
                        return self.form.depreciacion_mensual_politica;
                    }else{
                        return 0;
                    }

            },
            calcularDepreciacionRevaluada(){
                let self = this;
                self.form.depreciacion_mensual_revaluada = Number((self.form.valor_revaluo/self.form.vida_util_adicional).toFixed(2));
                if(!isNaN(self.form.depreciacion_mensual_revaluada)){
                    return self.form.depreciacion_mensual_revaluada;
                }else{
                    return 0;
                }

            },

            calcularDepreciacionAcumulada(){
                let self = this;
                self.form.depreciacion_acumulada = Number((self.form.depreciacion_mensual*self.form.mes_depreciado).toFixed(2));
                if(!isNaN(self.form.depreciacion_acumulada)){
                    return self.form.depreciacion_acumulada;
                }else{
                    return 0;
                }
            },
            calcularDepreciacionAcumuladaPolitica(){
                let self = this;

                    self.form.depreciacion_acumulada_politica = Number((self.form.depreciacion_mensual_politica*self.form.mes_depreciado_politica).toFixed(2));
                    if(!isNaN(self.form.depreciacion_acumulada_politica)){
                        return self.form.depreciacion_acumulada_politica;
                    }else{
                        return 0;
                    }

            },
            calcularDepreciacionAcumuladaRevaluada(){
                let self = this;

                self.form.depreciacion_acumulada_revaluada = Number((self.form.depreciacion_mensual_revaluada*self.form.mes_depreciado_revaluada).toFixed(2));
                if(!isNaN(self.form.depreciacion_acumulada_revaluada)){
                    return self.form.depreciacion_acumulada_revaluada;
                }else{
                    return 0;
                }

            },

            calcularValorEnLibro(){
                let self = this;
                self.form.valor_libro = Number((self.form.valor_adquisicion-self.form.depreciacion_acumulada).toFixed(2));
                if(!isNaN(self.form.valor_libro) && self.form.valor_libro >0){
                    return self.form.valor_libro;
                }else{
                    self.form.valor_libro=0;
                    return self.form.valor_libro;
                }
            },
            calcularValorEnLibroPolitica(){
                let self = this;

                    self.form.valor_libro_politica = Number((self.form.valor_adquisicion-self.form.depreciacion_acumulada_politica).toFixed(2));
                    if(!isNaN(self.form.valor_libro_politica) && self.form.valor_libro_politica >0){
                        return self.form.valor_libro_politica;
                    }else{
                        self.form.valor_libro_politica=0;
                        return self.form.valor_libro_politica;
                    }

            },
            calcularValorEnLibroRevaluada(){
                let self = this;

                self.form.depreciacion_acumulada_revaluada = Number((self.form.depreciacion_mensual_revaluada*self.form.mes_depreciado_revaluada).toFixed(2));
                self.form.valor_libro_revaluado = Number((self.form.valor_revaluo-self.form.depreciacion_acumulada_revaluada).toFixed(2));
                if(!isNaN(self.form.valor_libro_revaluado) && self.form.valor_libro_revaluado >0){
                    return self.form.valor_libro_revaluado;
                }else{
                    self.form.valor_libro_revaluado=0;
                    return self.form.valor_libro_revaluado;
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
            this.obtenerActivoFijo()
        }
    }
</script>
<style>
    .check-label2 {
        margin-top: 40px;
        margin-left: 40px;
    }
</style>