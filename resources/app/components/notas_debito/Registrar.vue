<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Notas de Débito</div>
                        <div class="box-description">Formulario para registrar notas de Débito</div>
                    </div>

                    <div class="alert alert-success">
                        <span><strong>Datos de la nota</strong></span>
                    </div>
                    <div class="row">

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for=""> Cliente</label>
                                <div class="form-group">
                                    <typeahead :initial="form.nota_debito_cliente" :trim="80" :url="clientesBusquedaURL" :params="{es_deudor: false}"
                                               @input="seleccionarCliente" style="width: 100%;"></typeahead>
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.nota_debito_cliente"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-2">
                            <div class="form-group">
                                <label for>T/C</label>
                                <input class="form-control" disabled type="text" v-model="form.t_cambio">
                            </div>
                        </div>

                        <div class="col-sm-2">
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

                        <div class="col-sm-5">
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
                    <div v-if="!form.nota_debito_cliente">
                        <div class="alert alert-info">
                            <span>Se requiere que seleccione un cliente para continuar.</span>
                        </div>
                        <hr>
                    </div>


                    <div class="alert alert-success">
                        <span><strong>Detalles de la nota</strong></span>
                    </div>
                    <div class="row">

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for=""> Listado de Facturas</label>
                                <div class="form-group">
                                    <multiselect :allow-empty="false" :options="facturas"
                                                 :searchable="true"
                                                 :show-labels="false"
                                                 deselect-label="No se puede eliminar este valor"
                                                 label="text"
                                                 placeholder="Selecciona una cuenta para pagar"
                                                 ref="factura"
                                                 track-by="id_factura"
                                                 v-model="detalleForm.nota_debito_factura"
                                    ></multiselect>
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.nota_debito_factura" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for=""> Tipo de Nota</label>
                                <div class="form-group">
                                    <multiselect :allow-empty="false" :options="tipos_notas"
                                                 :searchable="true"
                                                 :show-labels="false"
                                                 deselect-label="No se puede eliminar este valor"
                                                 label="descripcion"
                                                 placeholder="Selecciona un tipo de nota"
                                                 ref="tipo-nota"
                                                 track-by="id_tipo_nota_debito"
                                                 v-model="detalleForm.nota_debito_tipo"
                                    ></multiselect>
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.nota_debito_factura" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for>Monto Córdobas</label>
                            <input @change="detalleForm.monto = detalleForm.nota_debito_factura? Math.max(Math.min(Number(!isNaN(detalleForm.monto)?detalleForm.monto.toFixed(2):0), Number(Number(detalleForm.nota_debito_factura.mt_total).toFixed(2))), 1):0"
                                   class="form-control" ref="monto" type="number"
                                   v-model.number="detalleForm.monto">
                            <ul class="error-messages">
                                <li
                                        :key="message"
                                        v-for="message in errorMessages.monto"
                                        v-text="message"
                                ></li>
                            </ul>
                        </div>
                    </div>

                        <div class="col-sm-2">
                            <div class="form-group">
                                <label class="check-label2"><input type="checkbox"
                                                                  v-model="detalleForm.aplicaIVA">Aplica IVA</label>
                            </div>
                        </div>


                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>&nbsp;</label>
                                <button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar Cargo
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <ul class="error-messages">
                                <li
                                        :key="message"
                                        v-for="message in errorMessages.detalleFacturas"
                                        v-text="message"
                                ></li>
                            </ul>
                            <table class="table table-bordered"  >
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>No Factura</th>
                                    <th>Tipo N/C</th>
                                    <th>Descripción</th>
                                    <th>Monto C$</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item, index) in form.detalleFacturas">
                                    <tr>
                                        <td style="width: 5%">
                                            <button @click="eliminarLinea(item, index)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                        <td style="width: 10%">
                                            <input class="form-control" disabled v-model="item.nota_debito_factura.no_documento">
                                        </td>

                                        <td style="width: 10%">
                                            <input disabled class="form-control" v-model="item.nota_debito_tipo.descripcion">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`detalleFacturas.${index}.descripcion`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>

                                        <td style="width: 20%">
                                            <input class="form-control" v-model="item.descripcion">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`detalleFacturas.${index}.descripcion`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>

                                        <td class="text-center" style="width: 12%">
                                            <input readonly class="form-control" v-model.number="item.monto">
                                        </td>

                                    </tr>
                                    <tr></tr>
                                </template>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="text-right"> <strong> SubTotal</strong></td>
                                    <td  class="text-center">
                                        <strong>C$ {{total_cargo|formatMoney(2)}}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="text-right"> <strong> IVA</strong></td>
                                    <td  class="text-center">
                                        <strong>C$ {{form.monto_total_iva|formatMoney(2)}}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td class="text-right"> <strong> SubTotal</strong></td>
                                    <td  class="text-center">
                                        <strong>C$ {{form.monto_total|formatMoney(2)}}</strong>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <br>

                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'notas-debito' }" tag="button">
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
    import notas_debito from "../../api/notas_debito";
    import factura from "../../api/facturas";


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

                clientesBusquedaURL: "/ventas/clientes/buscar",

                facturas: [],
                tipos_notas:[],

                form: {
                    no_documento: "",
                    fecha_emision: moment(new Date()).format("YYYY-MM-DD"),
                    nota_debito_cliente: {},
                    nota_debito_factura:'',
                    concepto: "",
                    t_cambio: 0,
                    monto_total_me: 0,
                    monto_total: 0,
                    detalleFacturas: [],

                },

                detalleForm: {
                    nota_debito_factura: '',
                    nota_debito_tipo: '',
                    monto: 0,
                    descripcion: '',
                    aplicaIVA:true,
                },

                btnAction: "Registrar",
                errorMessages: []
            }

        },
        computed: {
            total_cargo() {
                let self = this;
                self.form.monto_total = Number(this.form.detalleFacturas.reduce((carry, item) => {
                    return (carry + Number(item.monto))
                }, 0).toFixed(2));

                self.form.monto_total_iva = Number(this.form.detalleFacturas.reduce((carry, item) => {
                    return (carry + Number(item.monto_iva))
                }, 0).toFixed(2));

                self.form.subtotal = Number(this.form.detalleFacturas.reduce((carry, item) => {
                    return (carry + Number(item.subtotal))
                }, 0).toFixed(2));

                return this.form.subtotal;
            },
        },
            methods: {

                eliminarLinea(item, index) {
                    if (this.form.detalleFacturas.length >= 1) {
                        this.form.detalleFacturas.splice(index, 1);

                    }else{
                        this.form.detalleFacturas=[];
                    }
                },
            agregarDetalle() {
                var self = this;
                if (self.detalleForm.nota_debito_factura && self.detalleForm.nota_debito_tipo) {
                    if (self.detalleForm.monto > 0) {
                        let validacion = 0;

                        if(validacion===0){
                            let i = 0;
                            let keyx = 0;

                            if (self.form.detalleFacturas) {
                                self.form.detalleFacturas.forEach((cuentax, key) => {
                                    if (self.detalleForm.nota_debito_factura.id_factura === cuentax.nota_debito_factura.id_factura) {
                                        i++;
                                        keyx = key;
                                    }
                                });
                            }
                            if (i === 0) {

                                let descripcionx = '';
                                if(self.detalleForm.monto === Number(self.detalleForm.nota_debito_factura.mt_total)){
                                    descripcionx = 'Hemos debitado a la cuenta del cliente el monto total de la factura No.'+self.detalleForm.nota_debito_factura.no_documento+', en concepto de: '+self.detalleForm.nota_debito_tipo.descripcion;
                                }else{
                                    descripcionx = 'Hemos debitado a la cuenta del cliente el monto parcial de la factura No.'+self.detalleForm.nota_debito_factura.no_documento+', en concepto de: '+self.detalleForm.nota_debito_tipo.descripcion;
                                }

                                let monto_iva = 0,subtotal = 0;
                                if(self.detalleForm.aplicaIVA){
                                    monto_iva = Number((self.detalleForm.monto-Number(self.detalleForm.monto)/1.15).toFixed(2));
                                    subtotal = Number(self.detalleForm.monto - monto_iva);
                                }else{
                                    monto_iva = 0;
                                    subtotal = Number(self.detalleForm.monto);
                                }

                                self.form.detalleFacturas.push({
                                    nota_debito_factura: self.detalleForm.nota_debito_factura,
                                    nota_debito_tipo: self.detalleForm.nota_debito_tipo,
                                    monto: Number(self.detalleForm.monto),
                                    subtotal:subtotal,
                                    monto_iva: monto_iva,
                                    descripcion:descripcionx,
                                });
                                alertify.success("Factura agregada!", 5);
                            } else {
                                let nuevo_total = self.form.detalleFacturas[keyx].monto + self.detalleForm.monto;
                                if (nuevo_total <= Number(self.form.detalleFacturas[keyx].nota_debito_factura.mt_total)) {
                                    self.form.detalleFacturas[keyx].monto = nuevo_total;
                                    //self.form.detalleFacturas[keyx].monto_me = Number((self.detalleForm.monto/self.form.t_cambio).toFixed(2));
                                    alertify.success("Factura agregada!", 5);

                                    if(nuevo_total === Number(self.form.detalleFacturas[keyx].nota_debito_factura.mt_total)){
                                        self.form.detalleFacturas[keyx].descripcion = 'Se acredita al cliente el monto total de la factura No.'+self.form.detalleFacturas[keyx].nota_debito_factura.no_documento+', por concepto de: '+self.form.detalleFacturas[keyx].nota_debito_tipo.descripcion;
                                    }else{
                                        self.form.detalleFacturas[keyx].descripcion = 'Se acredita al cliente el monto parcial de la factura No.'+self.form.detalleFacturas[keyx].nota_debito_factura.no_documento+', por concepto de: '+self.form.detalleFacturas[keyx].nota_debito_tipo.descripcion;
                                    }

                                } else {
                                    self.form.detalleFacturas[keyx].monto = Number(self.form.detalleFacturas[keyx].nota_debito_factura.mt_total);

                                    alertify.warning("Se ha agregado el monto maximo disponible para cancelar esta cuenta", 5);
                                }
                            }

                            self.detalleForm.nota_debito_factura = null;
                            self.detalleForm.nota_debito_tipo = null;
                            //self.detalleForm.monto_me = 0;
                            self.detalleForm.monto = 0;
                            self.detalleForm.descripcion = '';
                            //this.$refs.cuenta.$el.focus();

                        }
                    } else {
                        alertify.warning("El monto del abono debe ser mayor que cero", 5);
                    }
                } else {
                    alertify.warning("Debe seleccionar una cuenta para realizar el abono", 5);
                }
            },

            seleccionarCliente(e) {
                const clienteP = e.target.value;
                var self = this;
                self.form.nota_debito_cliente = clienteP;
                self.form.nombre_persona = self.form.nota_debito_cliente.nombre_comercial;

                self.loading = true;
                self.form.nota_debito_factura = '';

                factura.obtenerFacturasCliente({
                    id_cliente: self.form.nota_debito_cliente.id_cliente
                }, data => {
                    if (data !== null) {
                        self.facturas = data;
                        self.form.nota_debito_factura = '';
                    } else {
                        alertify.warning("No se encuentran facturas para este cliente.", 5);
                        self.form.nota_debito_factura = '';
                    }
                    self.loading = false;
                }, err => {
                    /*if(err.codigo_bateria){
                      self.detalleForm.bateria_busqueda = '';
                      self.$refs.bateria.focus();
                      alertify.warning("No se encuentra esta batería.",5);
                      self.form.nota_debito_factura = '';
                    }*/
                    self.loading = false;
                })

            },

            nueva() {
                var self = this;
                notas_debito.nueva({}, data => {
                        self.facturas = [];
                        self.tipos_notas = data.tipos_notas;
                        self.form.t_cambio = Number(data.t_cambio.tasa);
                        self.loading = false;
                    },
                    err => {
                        console.log(err);
                    })
            },


            registrar() {
                var self = this;
                self.btnAction = "Registrando, espere....";
                if (self.form.monto_total <= 0) {
                    alertify.warning("El monto de la nota debe ser mayor que cero", 5);
                    self.btnAction = "Registrar";
                } else {
                    self.$swal.fire({
                        title: 'Esta seguro de procesar la nota de débito?',
                        text: "Revise los Detalles de la nota de débito: ",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, registrar',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.value) {
                            notas_debito.registrar(
                                self.form,
                                data => {
                                    this.$swal.fire(
                                        'Nota de Débito Registrada!',
                                        'La nota de débito fue registrada correctamente',
                                        'success'
                                    );
                                    this.$router.push({
                                        name: "notas-debito"
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
<style>
    .btn-agregar {
        margin-top: 33px;
    }
    .check-label2 {
        margin-top: 40px;
    }
</style>





