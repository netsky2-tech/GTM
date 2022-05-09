<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Crear Nuevo Documento</div>
                        <div class="box-description">Formulario para registrar Documento</div>
                    </div>
                    <div class="row">

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Tipo Documento</label>
                                <v-select label="descripcion"
                                          v-model="form.tipoDocumento"
                                          ref="tipo"
                                          :options="tipos_documentos"
                                          v-on:change="cambiarFoco()"
                                          v-on:input="obtenerNumeroDocumento"
                                ></v-select>

                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.tipoDocumento"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Numero Documento <small>(Automático)</small></label>
                                <input class="form-control" readonly type="text" v-model="form.num_documento">
                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.num_documento"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Fecha Emision</label>
                                <datepicker :format="format" :language="es" @keyup.enter="$refs.moneda.focus"
                                            @selected="onDateSelect" ref="fecha" v-model="fechax"></datepicker>
                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.fecha_emision"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>T/C</label>
                                <input class="form-control" disabled type="text" v-model="form.t_cambio">
                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.t_cambio"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for>Concepto</label>
                                <input @keyup.enter="conceptoEvento" class="form-control" ref="concepto" type="text"
                                       v-model="form.concepto">
                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.concepto"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div v-if="!form.tipoDocumento">
                        <div class="alert alert-info">
                            <span>Se requiere que seleccione un tipo de documento para continuar.</span>
                        </div>
                        <hr>
                    </div>

                    <br>

                    <div class="row">


                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for>Cuenta Contable</label>
                                <!--<typeahead
                                        :initial="detalleForm.cuentaContable"
                                        :trim="80" :url="cuentasBusquedaURL" @input="seleccionarCuentaContable"
                                        ref="cuenta_contable" style="width: 100%;"></typeahead>-->
                                <multiselect :allow-empty="false" :options="cuentas_contables"
                                             :searchable="true"
                                             :show-labels="false"
                                             deselect-label="No se puede eliminar este valor"
                                             label="nombre_cuenta_completo"
                                             placeholder="Selecciona una cuenta"
                                             ref="cuenta_contable"
                                             track-by="id_cuenta_contable"
                                             v-model="detalleForm.cuentaContable"
                                             v-on:input="seleccionarCuentaContable"
                                ></multiselect>
                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.cuentaContablex"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for>Centro de Costo</label>
                                <v-select
                                        :disabled="centro_costo_deshabilitado"
                                        :options="centros_costos_ingresos"
                                        label="descripcion"
                                        ref="centro_costo_ingreso"
                                        v-model="detalleForm.centro_costo_ingreso"
                                        v-on:change="centroCostoEvento()"
                                ></v-select>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.centro_costo_ingresox"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Concepto</label>
                                <input @keyup.enter="revisarConceptoMov" class="form-control" ref="concepto_mov"
                                       type="text" v-model="detalleForm.concepto">
                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.conceptox"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Moneda</label>
                                <v-select
                                        :options="monedas"
                                        label="descripcion"
                                        ref="moneda_x"
                                        v-model="detalleForm.moneda_x"
                                ></v-select>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.moneda_x"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Debe</label>
                                <input @focus="$event.target.select()" @keyup.enter="$refs.haber.focus"
                                       min="0" class="form-control" ref="debe" type="number" v-model.number="detalleForm.debe">
                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.debex"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Haber</label>
                                <input @focus="$event.target.select()" @keyup.enter="$refs.agregar.focus"
                                       class="form-control" ref="haber" type="number" min="0"
                                       v-model.number="detalleForm.haber">
                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.haberx"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-1">
                            <div class="form-group">
                                <label for>&nbsp;</label>
                                <button @click="agregarDetalle" @keyup.enter="agregarEvento" class="btn btn-info"
                                        ref="agregar">Agregar Línea
                                </button>
                            </div>
                        </div>

                    </div>


                    <div class="row">
                        <div class="col-sm-12">
                            <ul class="error-messages">
                                <li
                                        v-for="message in errorMessages.detalleMovimientos"
                                        :key="message"
                                        v-text="message"
                                ></li>
                            </ul>
                            <table class="table table-bordered table-hover table-responsive"  >
                                <thead>
                                <tr>
                                    <th style="min-width:200px">Centro C/I</th>
                                    <th style="min-width:200px">Cuenta Contable</th>
                                    <th style="min-width:200px">Concepto</th>
                                    <th style="min-width:200px">Moneda Original</th>
                                    <th style="min-width:200px">Debe Moneda Original</th>
                                    <th style="min-width:200px">Haber Moneda Original</th>
                                    <th style="min-width:200px">Debe C$</th>
                                    <th style="min-width:200px">Haber C$</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item, index) in form.detalleMovimientos">
                                    <tr>
                                        <td style="width: 20%">
                                            <v-select
                                                    v-model="item.centro_costo_ingreso"
                                                    label="descripcion"
                                                    :options="centros_costos_ingresos"
                                                    :disabled="item.centro_costo_ingreso_deshabilitada"
                                            ></v-select>
                                            <ul class="error-messages">
                                                <li
                                                        v-for="message in errorMessages[`detalleMovimientos.${index}.centro_costo_ingreso.id_centro`]"
                                                        :key="message"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>


                                        <td style="width: 25%">
                                            <input disabled type="text" class="form-control"
                                                   v-model="item.cuentaContable.nombre_cuenta_completo">
                                            <!--<v-select disabled
                                              v-model="item.cuentaContable"
                                              label="nombre_cuenta_completo"

                                              :options="cuentas_contables"
                                            ></v-select>-->
                                            <ul class="error-messages">
                                                <li
                                                        v-for="message in errorMessages[`detalleMovimientos.${index}.cuentaContable.id_cuenta_contable`]"
                                                        :key="message"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td style="width: 21%">
                                            <input type="text" class="form-control" v-model="item.concepto">
                                            <ul class="error-messages">
                                                <li
                                                        v-for="message in errorMessages[`detalleMovimientos.${index}.concepto`]"
                                                        :key="message"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>

                                        <td style="width: 20%">
                                            <v-select
                                                    v-model="item.monedaMov"
                                                    label="descripcion"
                                                    :options="monedas"
                                            ></v-select>
                                            <ul class="error-messages">
                                                <li
                                                        v-for="message in errorMessages[`detalleMovimientos.${index}.monedaMov.id_moneda`]"
                                                        :key="message"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>

                                        <td style="width: 16%">
                                            <input :disabled="!(item.tipo === 1)" min="0" type="number" class="form-control" v-model.number="item.debeORG"
                                                   @change="item.partida_valida = ((item.debeORG === 0 &&  item.haberORG > 0)||(item.haberORG === 0 &&  item.debeORG > 0))">
                                            <ul class="error-messages">
                                                <li
                                                        v-for="message in errorMessages[`detalleMovimientos.${index}.debe`]"
                                                        :key="message"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>

                                        <td style="width: 16%">
                                            <input :disabled="!(item.tipo === 2)" min="0" type="number" class="form-control" v-model.number="item.haberORG"
                                                   @change="item.partida_valida = ((item.haberORG === 0 &&  item.debeORG > 0)||(item.debeORG === 0 &&  item.haberORG > 0))">
                                            <ul class="error-messages">
                                                <li
                                                        v-for="message in errorMessages[`detalleMovimientos.${index}.haber`]"
                                                        :key="message"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>

                                        <td>
                                            <strong>{{monto_debe_cordobas(item)}}</strong>
                                        </td>

                                        <td>
                                            <strong>{{monto_haber_cordobas(item)}}</strong>
                                        </td>

                                        <td style="width: 2%">
                                            <button @click="eliminarLinea(item, index)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr></tr>
                                </template>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td style="width: 15%" colspan="2">
                                    </td>
                                    <td style="width: 30%" class="text-right" colspan="4">Totales C$</td>
                                    <td style="width: 20%" class="item-footer" colspan="1">
                                        <strong class="item-dark form-control">{{total_debe | formatMoney(2)}}</strong>
                                    </td>
                                    <td style="width: 20%" class="item-footer" colspan="1">
                                        <strong class="item-dark form-control">{{total_haber | formatMoney(2)}}</strong>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div class="content-box-footer text-right">
                        <router-link tag="button" :to="{ name: 'listado-documentos' }">
                            <button type="button" class="btn btn-default">Cancelar</button>
                        </router-link>
                        <button ref="registrar"
                                type="button"
                                class="btn btn-primary"
                                @click="registrarDocumento"
                                :disabled="btnAction != 'Registrar' ? true : false"
                        >{{ btnAction }}
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
    //import tipo_documento from "../../api/tipos_documentos";
    //import centro_costo_ingreso from '../../api/centro_costo'
    import documento_contable from "../../api/documentos_contables";
    import es from 'vuejs-datepicker/dist/locale/translations/es'
    //import monedas from "../../api/monedas";
    import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
                loading:true,
                msg: 'Cargando el contenido espere un momento',
                url : '/public'+loadingImage,
                centro_costo_deshabilitado: true,
                cuentasBusqueda: {},
                cuentasBusquedaURL: "/contabilidad/cuentas-contables/buscarf",
                contador: 0,
                es: es,
                format: "d MMMM yyyy",
                monedas: [],
                cuentas_contables: [],
                tipos_documentos: [],
                centros_costos_ingresos: [],
                fechax: new Date(),
                form: {
                    t_cambio:0,
                    num_documento: "",
                    fecha_emision: moment(new Date()).format("YYYY-MM-DD"),
                    concepto: "",
                    valor: 0,
                    codigo_documento: 1,
                    detalleMovimientos: []
                },
                detalleForm: {
                    centro_costo_ingreso: "",
                    debe: 0,
                    haber: 0,
                    debeORG: 0,
                    haberORG: 0,
                    concepto: "",
                    centro_costo_ingreso_deshabilitada: true,
                    cuentaContable: {},
                    moneda_x:""
                },
                btnAction: "Registrar",
                errorMessages: []
            };
        },
        computed: {
            total_debe() {
                return this.form.detalleMovimientos.reduce((carry, item) => {
                    return (carry + (Number(Number(item.debe).toFixed(2))))//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                }, 0)
            },
            total_haber() {
                return this.form.detalleMovimientos.reduce((carry, item) => {
                    return (carry + (Number(Number(item.haber).toFixed(2))))//.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                }, 0)
            },
        },
        methods: {

            monto_debe_cordobas(itemX) {
                let tasa_cambio = 1
                if(itemX.monedaMov.id_moneda ===3){
                    tasa_cambio = this.form.t_cambio;
                }

                itemX.debe= Number((itemX.debeORG * tasa_cambio).toFixed(4));
                if(!isNaN(itemX.debe)){
                    return itemX.debe;
                }
                else return 0;
            },

            monto_haber_cordobas(itemX) {
                let tasa_cambio = 1
                if(itemX.monedaMov.id_moneda ===3){
                    tasa_cambio = this.form.t_cambio;
                }

                itemX.haber= Number((itemX.haberORG * tasa_cambio).toFixed(4));
                if(!isNaN(itemX.haber)){
                    return itemX.haber;
                }
                else return 0;
            },

            seleccionarCuentaContable() {
                //const cuenta = e.target.value;
                var self = this;
               // self.detalleForm.cuentaContable = cuenta;
                if ([4, 5, 6].indexOf(Number(self.detalleForm.cuentaContable.id_tipo_cuenta)) < 0) {
                    self.detalleForm.centro_costo_ingreso = null;
                    self.centro_costo_deshabilitado = true;
                    self.$refs.concepto_mov.focus();
                } else {
                    self.centro_costo_deshabilitado = false;
                    self.$refs.centro_costo_ingreso.$refs.search.focus();
                }

            },

            onDateSelect(date) {
                this.form.fecha_emision = moment(date).format("YYYY-MM-DD");
                this.obtenerCodigo();
            },
            obtenerCodigo() {
                var self = this;
                self.loading = true;
                documento_contable.obtenerCodigo({
                    id_tipo_doc: self.form.tipoDocumento.id_tipo_doc,
                    fecha_doc: self.form.fecha_emision
                }, data => {
                    //console.log(data);
                    self.form.codigo_documento = data.codigo.secuencia;
                    self.form.t_cambio = Number(data.t_cambio.tasa);
                    self.obtenerNumeroDocumento();
                    self.loading = false;
                }, err => {
                    alertify.error(err, 5);
                    self.loading = false;
                })
            },
           /* obtenerMonedas() {
                var self = this;
                monedas.cargarMonedas(
                    data => {
                        self.monedas = data;
                        self.form.moneda = self.monedas[0];
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            obtenerTiposDocumentosTodos() {
                var self = this;
                tipo_documento.obtenerTodos(
                    data => {
                        self.tipos_documentos = data;
                        //console.log();
                        self.form.tipoDocumento = self.tipos_documentos[0];
                        self.obtenerCodigo()
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            obtenerSucursalesTodas() {
                var self = this;
                centro_costo_ingreso.obtenerTodos(
                    data => {
                        self.centros_costos_ingresos = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },*/

            nuevo() {
                var self = this;
                documento_contable.nuevo({}, data => {
                        self.tipos_documentos = data.tipos_documentos;
                        self.form.tipoDocumento = self.tipos_documentos[0];
                        self.monedas = data.monedas;
                        self.cuentas_contables= data.cuentas_contables;
                        self.detalleForm.moneda_x = self.monedas[0];
                        self.centros_costos_ingresos = data.centro_costos_ingresos;
                        self.form.t_cambio = Number(data.t_cambio.tasa);
                        self.obtenerCodigo()
                        self.loading = false;

                    },
                    err => {
                        console.log(err);
                    })

            },

            agregarDetalle() {

                //  if(this.detalleForm.sucursal){
                //  this.errorMessages.sucursalx = ['correcto']
                if (this.detalleForm.cuentaContable) {
                    if (Number(this.detalleForm.debe.toFixed(4)) > 0 || Number(this.detalleForm.haber.toFixed(4)) > 0) {
                        if (Number(this.detalleForm.debe.toFixed(4)) > 0 && Number(this.detalleForm.haber.toFixed(4)) > 0) {
                            alertify.warning("No se puede agregar monto en ambos campos", 5);
                        } else {
                            let tasa_cambio = 1;
                            if(this.detalleForm.moneda_x.id_moneda === 3){
                                tasa_cambio = this.form.t_cambio;
                            }else{tasa_cambio= 1;}
                            let tipox=0;//1- tipo debe 2- tipo haber
                            if(this.detalleForm.debe > this.detalleForm.haber){
                                tipox= 1;
                            }else{
                                tipox= 2;
                            }

                            this.form.detalleMovimientos.push({
                                cuentaContable: this.detalleForm.cuentaContable,
                                centro_costo_ingreso: this.detalleForm.centro_costo_ingreso,
                                centro_costo_ingreso_deshabilitada: this.centro_costo_deshabilitado,
                                monedaMov:this.detalleForm.moneda_x,
                                debe: Number((this.detalleForm.debe * tasa_cambio).toFixed(4)),
                                haber: Number((this.detalleForm.haber* tasa_cambio).toFixed(4)),
                                debeORG: Number(this.detalleForm.debe.toFixed(4)),
                                haberORG: Number(this.detalleForm.haber.toFixed(4)),
                                concepto: this.detalleForm.concepto,
                                tipo:tipox
                            });
                            this.detalleForm.cuentaContable = {};
                            // this.detalleForm.sucursal=''
                            this.detalleForm.debe = 0;
                            this.detalleForm.haber = 0;
                            this.detalleForm.debeORG = 0;
                            this.detalleForm.haberORG = 0;
                            //this.detalleForm.concepto = '';
                            this.detalleForm.centro_costo_ingreso = null;
                            this.centro_costo_deshabilitado = true;
                            this.total_debe > this.total_haber ? this.form.valor = this.total_debe : this.form.valor = this.total_haber;
                        }
                    } else {
                        alertify.warning("El monto debe ser mayor que cero", 5);
                    }

                } else {
                    alertify.warning("Debe seleccionar una cuenta contable", 5);
                }

                /*}else{
                  alertify.warning("Debe seleccionar una sucursal",5);
                }*/
            },

            eliminarLinea(item, index) {
                if (this.form.detalleMovimientos.length >= 1) {
                    this.form.detalleMovimientos.splice(index, 1);

                } else {
                    this.form.detalleMovimientos = [];
                }
            },

            obtenerNumeroDocumento() {
                var self = this;
                self.form.num_documento = self.form.tipoDocumento.prefijo + '-' + self.form.codigo_documento;
            },

            cambiarFoco() {
                var self = this;
                if (self.contador > 0) {
                    self.$refs.moneda.$refs.search.focus();
                }
                self.contador++;
            },

            revisarConceptoMov() {
                var self = this;
                if (self.detalleForm.concepto !== '') {
                    self.$refs.debe.focus();
                } else {
                    self.$refs.concepto_mov.focus();
                }
            },

            centroCostoEvento() {
                var self = this;
                if (self.contador > 0) {

                }

            },


            conceptoEvento() {
                var self = this;
                if (self.contador > 0) {
                    self.$refs.cuenta_contable.open();
                    //self.$refs.sucursal.$refs.search.focus();
                }
                //console.log(self.$refs.cuenta_contable);
            },

            agregarEvento() {
                var self = this;
                self.$refs.cuenta_contable.open();
            },

            registrarDocumento() {
                var self = this;
                self.loading = true;
                if ((self.total_debe > 0 && self.total_haber > 0) && (self.total_debe === self.total_haber)) {
                    self.btnAction = "Registrando, espere....";
                    documento_contable.registrar(
                        self.form,
                        data => {
                            alertify.success("Documento registrado correctamente", 5);
                            self.loading = false;
                            this.$router.push({
                                name: "listado-documentos"
                            });
                        },
                        err => {
                            self.errorMessages = err;
                            alertify.warning("Por favor Revisar los datos faltantes", 5);
                            self.btnAction = "Registrar";
                            self.loading = false;
                        }
                    );
                } else {
                    alertify.warning("La sumatoria de las columnas debe y haber tienen que ser iguales.", 5);
                    self.loading = false;
                }
            }
        },
        mounted() {
          /*  this.obtenerTiposDocumentosTodos();
            this.obtenerSucursalesTodas();
            this.obtenerMonedas();*/
          this.nuevo();
            this.$refs.concepto.focus();
        }
    };
</script>