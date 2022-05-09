<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Trasladar Activo Fijo</div>
                <div class="box-description">Formulario para Trasladar activo fijo</div>
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
                            <label > Descripción</label>
                            <input :disabled="true"  class="form-control" v-model="form.descripcion" placeholder="Dígite la descripción del activo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.descripcion" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Color</label>
                            <v-select
                                    :disabled="true"
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
                            <input :disabled="true"  class="form-control" v-model="form.marca" placeholder="Dígite la marca del activo">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.marca" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label > Serie</label>
                            <input :disabled="true"  class="form-control" v-model="form.serie" placeholder="Dígite la serie del activo">
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


                    <!--<div class="col-sm-3">
                        <div class="form-group">
                            <label > Año depreciado</label>
                            <input disabled class="form-control" v-model.number="form.anio_depreciado" placeholder="Dígite el numero de meses a depreciarse">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.anio_depreciado" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>-->
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
                                <input class="form-control" :disabled="true" v-model="form.activo_detalle_vehiculo.placa" placeholder="Dígite la placa del vehiculo">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.placa" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Chasis</label>
                                <input class="form-control" :disabled="true" v-model="form.activo_detalle_vehiculo.chasis" placeholder="Dígite el chasis del vehiculo">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.chasis" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Número de motor</label>
                                <input class="form-control" :disabled="true" v-model="form.activo_detalle_vehiculo.numero_motor" placeholder="Dígite el numero de motor del vehiculo">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.numero_motor" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Cilindro</label>
                                <input class="form-control" :disabled="true" min="1" type="number" v-model.number="form.activo_detalle_vehiculo.cilindro" placeholder="Dígite el numero de cilindro">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.cilindro" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Tipo combustible:</label>
                                <select class="form-control" :disabled="true" v-model.number="form.activo_detalle_vehiculo.id_tipo_combustible">
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
                                <input class="form-control" :disabled="true" min="1900" type="number" v-model.number="form.activo_detalle_vehiculo.anio" placeholder="Dígite el año del vehiculo">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.anio" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Capacidad de carga</label>
                                <input class="form-control" min="1" type="number" :disabled="true"
                                       @change="form.activo_detalle_vehiculo.capacidad_carga = Math.max(Math.min(Number(form.activo_detalle_vehiculo.capacidad_carga), 500), 1)"
                                       v-model.number="form.activo_detalle_vehiculo.capacidad_carga" placeholder="Dígite la capacidad de carga del vehiculo">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.capacidad_carga" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Número de pasajeros</label>
                                <input class="form-control" min="1" type="number" :disabled="true"  v-model.number="form.activo_detalle_vehiculo.pasajeros" placeholder="Dígite la capacidad de pasajeros del vehiculo">
                                <ul class="error-messages">
                                    <li v-for="message in errorMessages.pasajeros" :key="message" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <hr>
                </template>

                <div class="alert alert-success">
                    <span><strong>Datos del trabajador Asignado</strong></span>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Área Origen</label>
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
                            <label >Trabajador Origen</label>
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

                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Área Destino</label>
                            <v-select
                                    v-model="form.activo_area_destino"
                                    label="descripcion"
                                    :options="areas"
                                    v-on:change="obtenerTrabajadores"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.activo_area_destino" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Trabajador Destino</label>
                            <v-select
                                    v-model="form.activo_trabajador_destino"
                                    label="nombre_completo"
                                    :options="trabajadores_destino"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.activo_trabajador_destino" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </form>

            <div class="row">
                <div class="col-md-12">
                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'listado-activos-fijos' }" tag="button">
                            <button class="btn btn-default" type="button">Cancelar</button>
                        </router-link>
                        <button :disabled="btnAction !== 'Guardar'" @click="reasignar"
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
    import activos from "../../api/activos_fijos";
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
                trabajadores_destino:[],
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

                    activo_area_destino : '',
                    activo_trabajador_destino : '',

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

            obtenerTrabajadores(){
                var self = this;
                self.trabajadores_destino=[];
                self.form.activo_trabajador_destino=[];
                if(self.form.activo_area_destino){
                    self.trabajadores_destino = self.form.activo_area_destino.trabajadores_area;
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

                    self.form.activo_area_destino = self.areas[0];
                    self.trabajadores_destino = self.form.activo_area_destino.trabajadores_area;

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
            reasignar() {
                var self = this

                self.btnAction = 'Guardando, espere......'

                self.$swal.fire({
                    title: 'Esta seguro de registrar el traslado del activo?',
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
                        activo_fijo.reasignar(self.form, data => {
                            alertify.success("Activo Fijo actualizado correctamente", 5);
                            this.$router.push({
                                name: 'listado-activos-fijos'
                            })
                        }, err => {
                            self.loading = false;
                            self.errorMessages = err
                            self.btnAction = 'Guardar'
                        })
                    }else{
                        self.loading = false;
                        self.btnAction = "Guardar";
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
            calcularDepreciacion(){
                let self = this;
                self.form.depreciacion_mensual = Number((self.form.valor_adquisicion/self.form.meses_depreciarse).toFixed(2));
                if(!isNaN(self.form.depreciacion_mensual)){
                    return self.form.depreciacion_mensual;
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