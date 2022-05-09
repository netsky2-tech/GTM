<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Generar Cierre de Activos</div>
                <div class="box-description">Formulario para generar cierre de activo fijo</div>
            </div>


                <div class="alert alert-success">
                    <span><strong>Datos de la sucursal</strong></span>
                </div>
                <div class="row">
                    <!--<div class="col-sm-3">
                        <div class="form-group">
                            <label >Sucursal</label>
                            <v-select
                                    v-model="sucursal"
                                    label="descripcion"
                                    :options="sucursales"
                                    v-on:change="obtenerActivosSucursal"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.sucursal" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>-->

                    <div class="col-sm-3">
                        <div class="form-group">
                    <label class="label-search">Año:</label>
                    <v-select
                            label="periodo"
                            v-model="anio"
                            :options="periodos"
                            v-on:input="obtenerMeses"
                    ></v-select>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="label-search">Mes:</label>
                    <v-select :style="'margin-left: .5rem!important;'"
                              label="descripcion"
                              v-model="mes"
                              :options="meses"
                              v-on:change="obtenerActivosSucursal"
                    ></v-select>
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="col-sm-12">
                        <table class="table table-bordered table-hover table-responsive"  >
                            <thead>
                            <tr>
                                <th style="min-width:200px">Código</th>
                                <th style="min-width:200px">Tipo Activo</th>
                                <th style="min-width:200px">Grupo Activo</th>
                                <th style="min-width:400px">Descripción</th>
                                <th style="min-width:400px">Fecha Adquisición</th>
                                <th style="min-width:200px">Valor Adquisición C$</th>
                                <th style="min-width:200px">Meses a Depreciarse</th>
                                <th style="min-width:200px">Depreciación Mensual C$</th>
                                <th style="min-width:200px">Mes Actual Depreciación</th>
                                <th style="min-width:200px">Depreciación Acumulada Actual C$</th>
                                <th style="min-width:200px">Valor en Libros Actual C$</th>
                                <th style="min-width:200px">Trabajador Asignado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(activo_fijo, index) in activos_sucursal" :key="activo_fijo.id_activo">
                                <td>{{ activo_fijo.codigo }}</td>
                                <td>{{ activo_fijo.activo_tipo_activo?activo_fijo.activo_tipo_activo.descripcion :'N/A'}}</td>
                                <td>{{ activo_fijo.activo_grupo?activo_fijo.activo_grupo.descripcion :'N/A'}}</td>
                                <td>{{ activo_fijo.descripcion }}</td>
                                <td>{{ formatDate(activo_fijo.fecha_adquisicion) }}</td>
                                <td>{{ activo_fijo.valor_adquisicion | formatMoney(2)}}</td>
                                <td>{{ activo_fijo.meses_depreciarse }}</td>
                                <td>{{ activo_fijo.depreciacion_mensual | formatMoney(2) }}</td>
                                <td>{{ Number(activo_fijo.mes_depreciado_actual)<=Number(activo_fijo.meses_depreciarse)? activo_fijo.mes_depreciado_actual:"Depreciado"}}</td>
                                <td>{{ calcularDepreciacionAcumulada(activo_fijo) | formatMoney(2) }}</td>
                                <td>{{ calcularValorLibros(activo_fijo) | formatMoney(2) }}</td>
                                <td>{{ activo_fijo.activo_trabajador?activo_fijo.activo_trabajador.nombre_completo:'N/A'}}</td>


                            </tr>
                            <tr v-if="!activos_sucursal.length">
                                <td class="text-center" colspan="11">No ha seleccionado un periodo</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'listado-cierres-activo-fijo' }" tag="button">
                            <button class="btn btn-default" type="button">Cancelar</button>
                        </router-link>
                        <button :disabled="btnAction !== 'Guardar'" @click="generarCierre"
                                class="btn btn-primary" type="button">{{ btnAction }}
                        </button>
                        <button class="btn btn-success btn-agregar" @click="abrirModal">Vista previa documento contable</button>
                    </div>
                </div>
                <template v-if="loading">
                    <BlockUI :message="msg" :url="url"></BlockUI>
                </template>
            </div>
        </div>
        <!--Inicio modal para previsualizar documento contable -->
        <sweet-modal ref="modal" modal-theme="dark" overlay-theme="dark" title="Documento contable">

            <div class="row">

                <div class="col-sm-12">
                    <table class="table table-bordered table-hover table-responsive"  >
                        <thead>
                        <tr>
                            <th style="min-width:200px">Cuenta contable</th>
                            <th style="min-width:200px">Debe</th>
                            <th style="min-width:200px">Haber</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(documento, index) in doc_contable" :key="documento.id_cuenta_contable">
                            <td>{{ documento.cuentas }}</td>
                            <td>{{ documento.debe?documento.debe :'0'}}</td>
                            <td>{{ documento.haber?documento.haber :'0'}}</td>
                        </tr>
                        <tr v-if="!doc_contable.length">
                            <td class="text-center" colspan="11">No ha seleccionado un periodo</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="content-box-footer text-right">
                <button class="btn btn-default" @click="cerrarModal">Cerrar</button>
            </div>

        </sweet-modal>
        <!--Fin modal previsualización documento contable-->


    </div>


</template>

<script type="text/ecmascript-6">
    import activo_fijo from '../../api/activos_fijos'
    import loadingImage from '../../assets/images/block50.gif'
    import es from 'vuejs-datepicker/dist/locale/translations/es'
    import activos from "../../api/activos_fijos";
    import { SweetModal } from 'sweet-modal-vue';
    export default {
        components: {
            SweetModal
        },
        data() {
            return {
                loading:true,
                msg: 'Guardando los datos, espere un momento',
                url : '/public'+loadingImage,   //It is important to import the loading image then use here
                mostrar_detalles_vehiculo:false,

                sucursales:[],
                sucursal:[],

                activos_sucursal:[],
                doc_contable:[],

                periodos:[],
                meses:[],
                mes:0,
                anio:0,
                id_sucursal:1,
                tipoDocumento:2,

                es: es,
                format: "dd-MM-yyyy",

                btnAction: 'Guardar',
                errorMessages: []
            }
        },
        methods: {
            formatDate(date) {
                return moment(date).format('YYYY-MM-DD')
            },
            calcularDepreciacionAcumulada(activo_fijo){
                activo_fijo.depreciacion_acumulada_actual =0;
                if(Number(activo_fijo.mes_depreciado_actual)<=Number(activo_fijo.meses_depreciarse)){
                    activo_fijo.depreciacion_acumulada_actual = Number((Number(activo_fijo.mes_depreciado_actual)*Number(activo_fijo.depreciacion_mensual)).toFixed(2));
                        return activo_fijo.depreciacion_acumulada_actual;
                }else{
                    return activo_fijo.depreciacion_acumulada_actual;
                }
            },
            calcularValorLibros(activo_fijo){
                activo_fijo.depreciacion_valor_libros_actual =0;
                if(Number(activo_fijo.mes_depreciado_actual)<=Number(activo_fijo.meses_depreciarse)){
                    activo_fijo.depreciacion_valor_libros_actual = Number(activo_fijo.valor_adquisicion)-Number(activo_fijo.depreciacion_acumulada_actual);
                    return activo_fijo.depreciacion_valor_libros_actual;
                }else{
                    return activo_fijo.depreciacion_valor_libros_actual;
                }
            },

            obtenerTrabajadores(){
                var self = this;
                self.trabajadores_destino=[];
                self.trabajador_destino=[];
                if(self.area_destino){
                    self.trabajadores_destino = self.area_destino.trabajadores_area;
                }
            },


            obtenerActivosSucursal() {
                var self = this
                self.loading=true;
                self.activos_sucursal=[];
                if(self.sucursal && self.mes){
                activo_fijo.obtenerActivosSucursal({
                    id_sucursal: self.id_sucursal,
                    fecha_final:self.mes.ultimo_dia_mes,
                    mes : self.mes.mes,
                    anio: self.anio.periodo
                }, data => {
                    self.activos_sucursal = data.activos;
                    self.doc_contable = data.doc_contable;
					self.loading = false;
                }, err => {
                    alertify.error(err.id_sucursal[0], 5);
                    this.$router.push({
                        name: 'listado-cierres-activo-fijo'
                    });
                })
                }else{
                    self.loading=false;
                }
            },

            obtenerMeses(){
                let self = this;
                self.mes = [];
                self.meses = self.anio.meses_periodo
                self.mes = self.meses[0]
            },

            generarCierre() {
                var self = this
                self.btnAction = 'Guardando, espere......'
                if(self.activos_sucursal.length){

                if(self.sucursal.id_sucursal && self.mes.id_periodo_mes){
                    self.$swal.fire({
                        title: 'Esta seguro de realizar el cierre de todos los activos?',
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
                            activo_fijo.generarCierre(
                                {
                                    activos: self.activos_sucursal,
                                    id_sucursal:self.sucursal.id_sucursal,
                                    id_periodo_mes:self.mes.id_periodo_mes,
                                    mes:self.mes.mes,
                                    anio:self.anio.periodo
                                },
                                data => {
                                    alertify.success("Activo Fijo actualizado correctamente", 5);
                                    this.$router.push({
                                        name: 'listado-cierres-activo-fijo'
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
                }else{
                    alertify.warning("Por favor revise si ha seleccionado una sucursal y un mes válido", 5);
                    self.loading = false;
                    self.btnAction = 'Guardar'
                }

                }else{
                    alertify.warning("El detalle de activos debe contener al menos un elemento", 5);
                    self.loading = false;
                    self.btnAction = 'Guardar'
                }
            },
            nuevo() {
                var self = this;
                activos.nuevoCierre({}, data => {
                        self.sucursales = data.sucursales;
                        self.sucursal = self.sucursales[5];
                        self.periodos = data.periodos;
                        self.anio = self.periodos[0];
                        self.meses = self.anio.meses_periodo
                        self.loading = false;
                    },
                    err => {
                        console.log(err);
                    })

            },
            abrirModal: function () {
                this.$refs.modal.open()
            },
            cerrarModal: function () {
                this.$refs.modal.close()
            },
        },
        mounted() {
            this.nuevo()
        }
    }
</script>