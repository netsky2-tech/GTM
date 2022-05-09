<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Registro de Cargos | Abonos de Empleados</div>
                        <div class="box-description">Formulario para registrar cargos y abonos</div>
                    </div>

                    <div class="alert alert-success">
                        <span><strong>Datos del documento</strong></span>
                    </div>
                    <div class="row">

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Trabajador</label>
                                <div class="form-group">
                                    <typeahead :initial="form.cargo_abono_trabajador" :trim="80" :url="trabajadoresBusquedaURL"
                                               @input="seleccionarTrabajador" style="width: 100%;"></typeahead>
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.cargo_abono_trabajador"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label>Tipo:</label>
                                <div class="form-group">
                                    <multiselect :allow-empty="false" :options="cargos_abonos_trabajador_tipo"
                                                 :searchable="true"
                                                 :show-labels="false"
                                                 deselect-label="No se puede eliminar este valor"
                                                 label="descripcionx"
                                                 placeholder="Selecciona un tipo"
                                                 ref="tipo-nota"
                                                 track-by="id_tipo_cargo_abono_trabajador"
                                                 v-model="form.cargo_abono_trabajador_tipo"
                                                 v-on:input="limiar_campos"
                                    ></multiselect>
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.cargo_abono_trabajador_cuenta" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label > Listado de Cuentas</label>
                                <div class="form-group">
                                    <multiselect :allow-empty="false" :options="cuentasxcobrar"
                                                 :searchable="true"
                                                 :show-labels="false"
                                                 deselect-label="No se puede eliminar este valor"
                                                 label="text"
                                                 placeholder="Selecciona una cuenta para pagar"
                                                 ref="cuentaxcobr"
                                                 track-by="id_cuentaxcobrar"
                                                 v-model="form.cargo_abono_trabajador_cuenta"
                                                 :disabled="form.cargo_abono_trabajador_tipo.tipo===1"
                                                 v-on:input="cargar_detalles_cuenta()"
                                    ></multiselect>
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.cargo_abono_trabajador_cuenta" v-text="message"></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Monto Córdobas</label>
                                <input @change="revisarMonto"
                                       class="form-control" ref="monto" type="number"
                                       v-model.number="form.monto_total">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.monto_total"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <!--<div class="col-sm-2">
                            <div class="form-group">
                                <label for="">Tipo:</label>
                                <select class="form-control" v-model.number="form.clasificacion_contable">
                                    <option value="1">Cargo</option>
                                    <option value="2">Abono</option>
                                </select>
                            </div>
                        </div>-->


                        <!--<div class="col-sm-2">
                            <div class="form-group">
                                <label for>T/C</label>
                                <input class="form-control" disabled type="text" v-model="form.t_cambio">
                            </div>
                        </div>-->

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Fecha</label>
                                <datepicker :disabled="true" :format="format" :language="es"
                                            :value="new Date()"></datepicker>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.fecha_emision"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-9">
                            <div class="form-group">
                                <label for>Concepto</label>
                                <input class="form-control" type="text" v-model="form.concepto">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.concepto"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    <br>

                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'cargos-abonos-trabajador' }" tag="button">
                            <button class="btn btn-default" type="button">Cancelar</button>
                        </router-link>
                        <button
                                :disabled="btnAction !== 'Registrar'"
                                @click="registrar"
                                class="btn btn-primary"
                                type="button"
                        >{{ btnAction }}
                        </button>
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
    import cargo_abono_trabajador from "../../api/cargo_abono_trabajador";
    import cuenta from "../../api/cuentas_por_cobrar";


    import es from 'vuejs-datepicker/dist/locale/translations/es'

    //import {SweetModal} from 'sweet-modal-vue'
    import loadingImage from '../../assets/images/block50.gif'

    export default {
        /*components: {
            SweetModal
        },*/
        data() {
            return {
                loading: true,
                msg: 'Cargando el contenido espere un momento',
                url: '/public' + loadingImage,

                es: es,
                format: "dd-MM-yyyy",


                trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",

                cuentasxcobrar: [],
                cargos_abonos_trabajador_tipo:[],

                form: {
                    no_documento: "",
                    fecha_emision: moment(new Date()).format("YYYY-MM-DD"),
                    cargo_abono_trabajador: {},
                    cargo_abono_trabajador_cuenta:'',
                    concepto: "",
                    t_cambio: 0,
                    monto_total: 0,
                    detalleFacturas: [],
                    cargo_abono_trabajador_tipo: '',

                },

                btnAction: "Registrar",
                errorMessages: []
            }

        },
            methods: {
                limiar_campos(){
                    var self = this;
                    self.form.cargo_abono_trabajador_cuenta= '';
                },

                cargar_detalles_cuenta() {
                    var self = this;
                    if(self.form.cargo_abono_trabajador_cuenta)
                    self.form.monto_total = Number(Number(self.form.cargo_abono_trabajador_cuenta.saldo_actual).toFixed(2));
                },

                seleccionarTrabajador(e) {
                    const trabajadorP = e.target.value;
                    var self = this;
                    self.form.cargo_abono_trabajador = trabajadorP;

                    self.loading = true;
                    self.form.cargo_abono_trabajador_cuenta = '';

                    cuenta.obtenerCuentasTrabajador({
                        id_trabajador: self.form.cargo_abono_trabajador.id_trabajador
                    }, data => {
                        if (data !== null) {
                            self.cuentasxcobrar = data;
                            self.form.cargo_abono_trabajador_cuenta = '';
                        } else {
                            alertify.warning("No se encuentran cuentas para este empleado.", 5);
                            self.form.cargo_abono_trabajador_cuenta = '';
                        }
                        self.loading = false;
                    }, err => {
                        self.loading = false;
                    })

                },


                nueva() {
                var self = this;
                cargo_abono_trabajador.nueva({}, data => {
                        self.cuentasxcobrar = [];
                        self.cargos_abonos_trabajador_tipo = data.tipos_abonos_cargos;
                        self.form.t_cambio = Number(data.t_cambio.tasa);
                        self.loading = false;
                    },
                    err => {
                        console.log(err);
                    })
            },

                revisarMonto(){
                    if(this.form.cargo_abono_trabajador_tipo.tipo === 2){
                        this.form.monto_total = this.form.cargo_abono_trabajador_cuenta? Math.max(Math.min(Number(!isNaN(this.form.monto_total)?this.form.monto_total.toFixed(2):0), Number(Number(this.form.cargo_abono_trabajador_cuenta.saldo_actual).toFixed(2))), 1):0
                    }else{
                        this.form.monto_total = Math.max(Math.min(Number(!isNaN(this.form.monto_total)?this.form.monto_total.toFixed(2):1), 1000000), 1)
                    }

                },


            registrar() {
                var self = this;
                self.btnAction = "Registrando, espere....";
                if (self.form.monto_total <= 0) {
                    alertify.warning("El monto del "+(this.form.cargo_abono_trabajador_tipo.tipo===1?'Cargo':'Abono')+" debe ser mayor que cero", 5);
                    self.btnAction = "Registrar";
                } else {
                    self.$swal.fire({
                        title: 'Esta seguro de procesar el '+(this.form.cargo_abono_trabajador_tipo.tipo===1?'Cargo':'Abono')+'?',
                        text: "Revise los Detalles del "+(this.form.cargo_abono_trabajador_tipo.tipo===1?'Cargo':'Abono'),
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, registrar',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.value) {
                            cargo_abono_trabajador.registrar(
                                self.form,
                                data => {
                                    this.$swal.fire(
                                        (this.form.cargo_abono_trabajador_tipo.tipo===1?'Cargo':'Abono')+' Registrado!',
                                        (this.form.cargo_abono_trabajador_tipo.tipo===1?'Cargo':'Abono')+' fue registrado correctamente',
                                        'success'
                                    );
                                    this.$router.push({
                                        name: "cargos-abonos-trabajador"
                                    });
                                },
                                err => {
                                    self.errorMessages = err;
                                    alertify.warning("Por favor revise los datos faltantes", 5);
                                    self.btnAction = "Registrar";
                                }
                            );
                        } else {
                            self.btnAction = "Registrar";
                        }
                    })
                }
            },

        },
        mounted() {
            this.nueva();
        }
    };
</script>





