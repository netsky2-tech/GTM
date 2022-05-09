<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Crear Nueva Cuenta Contable</div>
                        <div class="box-description">Formulario para registrar Nueva Cuenta Contable</div>
                    </div>
                    <form>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Nivel de cuenta</label>
                                    <v-select
                                            v-model="form.nivel_cuenta"
                                            label="descripcion"
                                            :options="niveles_cuenta">
                                        <!-- v-on:input="obtenerCuentasNivel(form.nivel_cuenta)"-->
                                    </v-select>
                                    <ul class="error-messages">
                                        <li v-for="message in errorMessages.nivel_cuenta" :key="message"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <!--<div class="col-sm-4">
              <div class="form-group">
                <label for="">Cuenta Padre</label>
                <v-select
                  v-model="form.cuenta_padre"
                  label="nombre_cuenta_completo"              
                  :options="cuentas_contables"
                                    v-on:input="obtenerAnexosPorEstadoFinanciero(form.cuenta_padre)"
                ></v-select>

                <ul class="error-messages">
                  <li v-for="message in errorMessages.cuenta_padre" :key="message" v-text="message"></li>
                </ul>
              </div>
            </div>-->


                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="">Cuenta Padre</label>
                                    <div class="form-group">
                                        <typeahead
                                                :params="{id_nivel_cuenta: Number(form.nivel_cuenta.id_nivel_cuenta)-1}"
                                                style="width: 100%;" :initial="form.cuenta_padre" :trim="80"
                                                :url="cuentasBusquedaURL" @input="seleccionarCuentaPadre"></typeahead>

                                    </div>
                                    <ul class="error-messages">
                                        <li v-for="message in errorMessages.cuenta_padre" :key="message"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>


                            <!--		<div class="col-sm-4">
                          <div class="form-group">
                            <label for="">Anexo</label>
                            <v-select
                              v-model="form.anexo"
                              label="nombre_anexo"
                              :options="anexos"
                            ></v-select>
                            <ul class="error-messages">
                              <li v-for="message in errorMessages.anexo" :key="message" v-text="message"></li>
                            </ul>
                          </div>
                        </div>-->
                        </div>

                        <div class="row">

                            <div class="col-sm-2">
                                <div class="form-group">
                                    <label for=""> Código cuenta padre</label>
                                    <input disabled class="form-control" v-model="cta_contable"
                                           placeholder="Código heredado">
                                    <ul class="error-messages">
                                        <li v-for="message in errorMessages.cta_contable" :key="message"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-2">
                                <div class="form-group">
                                    <label for="">Código nueva Cuenta</label>
                                    <input class="form-control"
                                           @change="form.codigo_cuenta = Math.max(Math.min(Math.round(form.codigo_cuenta), form.nivel_cuenta.codigo_maximo), 1)"
                                           type="number" v-model="form.codigo_cuenta" :maxlength="3"
                                           placeholder="Dígite código único de cuenta">
                                    <ul class="error-messages">
                                        <li v-for="message in errorMessages.codigo_cuenta" :key="message"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>


                            <div class="col-sm-2">
                                <div class="form-group">
                                    <label for=""> Nuevo Código</label>
                                    <input readonly class="form-control" placeholder="Código concatenado"
                                           :value="(form.nivel_cuenta.id_nivel_cuenta === 2) ? niv1+form.codigo_cuenta+niv3+niv4+'-'+niv5+'-'+niv6+niv7 :
												(form.nivel_cuenta.id_nivel_cuenta === 3)? niv1+niv2+form.codigo_cuenta+niv4+'-'+niv5+'-'+niv6+niv7  :
												(form.nivel_cuenta.id_nivel_cuenta === 4)? niv1+niv2+niv3+form.codigo_cuenta+'-'+niv5+'-'+niv6+niv7  :
												(form.nivel_cuenta.id_nivel_cuenta === 5)? niv1+niv2+niv3+niv4+'-'+(form.codigo_cuenta < 10 && form.codigo_cuenta > 0 ? '0'+form.codigo_cuenta : form.codigo_cuenta )+'-'+niv6+niv7  :
												(form.nivel_cuenta.id_nivel_cuenta === 6)? niv1+niv2+niv3+niv4+'-'+niv5+'-'+((form.codigo_cuenta < 10 && form.codigo_cuenta > 0) ? '00'+form.codigo_cuenta :(form.codigo_cuenta < 100 && form.codigo_cuenta > 10) ? '0'+form.codigo_cuenta: form.codigo_cuenta )+niv7
												 :''">
                                    <ul class="error-messages">
                                        <li v-for="message in errorMessages.cta_contable" :key="message"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <!--<div class="col-sm-2">
                    <div class="form-group">
                        <label for=""> Nuevo Código</label>
                        <input disabled class="form-control" placeholder="Código concatenado" :value="cta_contable+ (form.codigo_cuenta < 10 && form.codigo_cuenta > 0  && form.nivel_cuenta.id_nivel_cuenta > 2 ? '0'+form.codigo_cuenta : form.codigo_cuenta )">
                        <ul class="error-messages">
                            <li v-for="message in errorMessages.cta_contable" :key="message" v-text="message"></li>
                        </ul>
                    </div>
                    </div>-->

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Nombre cuenta</label>
                                    <input class="form-control" v-model="form.nombre_cuenta"
                                           placeholder="Dígite Nombre de la cuenta">
                                    <ul class="error-messages">
                                        <li v-for="message in errorMessages.nombre_cuenta" :key="message"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label class="check-label2"><input v-model="form.permite_movimiento"
                                                                      type="checkbox"> Cuenta permite
                                        movimientos</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="alert alert-info">
                                <span>Las cuentas que permiten movimientos se utilizan directamente en la creación de documentos contables, las cuentas que no permiten movimientos (cuentas tipo SUMA) son las que solamente reflejan la sumatoria de las subcuentas que posean</span>
                            </div>
                            <hr>
                        </div>

                    </form>
                    <div class="content-box-footer text-right">
                        <router-link tag="button" :to="{ name: 'cuentas-contables' }">
                            <button type="button" class="btn btn-default">Cancelar</button>
                        </router-link>
                        <button type="button" class="btn btn-primary" @click="guardarCuentaContable"
                                :disabled="btnAction !== 'Registrar'">{{ btnAction }}
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
    import cuentas_contables from '../../api/cuentas_contables'
    import nivel_cuenta from '../../api/niveles_cuentas'
    import loadingImage from '../../assets/images/block50.gif'

    export default {
        /*	components: {
        'typeahead':Typeahead
        },*/
        data() {
            return {
                loading: true,
                msg: 'Cargando el contenido espere un momento',
                url: '/public' + loadingImage,   //It is important to import the loading image then use here
                cuentasBusqueda: {},
                cuentasBusquedaURL: "/contabilidad/cuentas-contables/buscar",
                cta_contable: "",
                niv1: "",
                niv2: "",
                niv3: "",
                niv4: "",
                niv5: "",
                niv6: "",
                niv7: "",
                cuentas_contables: [],
                niveles_cuenta: [],
                tipos_cuenta: [],
                form: {
                    nombre_cuenta: "",
                    codigo_cuenta: "",
                    cta_contable: "",
                    cuenta_padre: {},
                    tipo_cuenta: "",
                    nivel_cuenta: "",
                    permite_movimiento: 0
                },
                btnAction: "Registrar",
                errorMessages: []
            }
        },
        methods: {

            seleccionarCuentaPadre(e) {
                const cuentaP = e.target.value;
                var self = this;
                self.form.cuenta_padre = cuentaP;
                //self.obtenerAnexosPorEstadoFinanciero(self.form.cuenta_padre)
                self.form.tipo_cuenta = '';
                self.cta_contable = '';
                if (self.form.cuenta_padre !== null && self.form.cuenta_padre !== undefined && self.form.cuenta_padre !== '') {
                    self.cta_contable = self.form.cuenta_padre.cta_contable;
                    self.niv1 = self.form.cuenta_padre.niv1;
                    self.niv2 = self.form.cuenta_padre.niv2;
                    self.niv3 = self.form.cuenta_padre.niv3;
                    self.niv4 = self.form.cuenta_padre.niv4;
                    self.niv5 = self.form.cuenta_padre.niv5;
                    self.niv6 = self.form.cuenta_padre.niv6;
                    self.niv7 = self.form.cuenta_padre.niv7;
                    self.form.tipo_cuenta = self.form.cuenta_padre.cuenta_tipo;
                    self.form.codigo_cuenta = self.form.cuenta_padre.codigo_siguiente;
                }
            },

            guardarCuentaContable() {
                var self = this
                self.btnAction = 'Registrando, espere....'
                self.loading = true;
                self.form.cta_contable =
                    (self.form.nivel_cuenta.id_nivel_cuenta === 2) ? self.niv1 + self.form.codigo_cuenta + self.niv3 + self.niv4 + '-' + self.niv5 + '-' + self.niv6 + self.niv7 :
                        (self.form.nivel_cuenta.id_nivel_cuenta === 3) ? self.niv1 + self.niv2 + self.form.codigo_cuenta + self.niv4 + '-' + self.niv5 + '-' + self.niv6 + self.niv7 :
                            (self.form.nivel_cuenta.id_nivel_cuenta === 4) ? self.niv1 + self.niv2 + self.niv3 + self.form.codigo_cuenta + '-' + self.niv5 + '-' + self.niv6 + self.niv7 :
                                (self.form.nivel_cuenta.id_nivel_cuenta === 5) ? self.niv1 + self.niv2 + self.niv3 + self.niv4 + '-' + (self.form.codigo_cuenta < 10 && self.form.codigo_cuenta > 0 ? '0' + self.form.codigo_cuenta : self.form.codigo_cuenta) + '-' + self.niv6 + self.niv7 :
                                    (self.form.nivel_cuenta.id_nivel_cuenta === 6) ? self.niv1 + self.niv2 + self.niv3 + self.niv4 + '-' + self.niv5 + '-' + ((self.form.codigo_cuenta < 10 && self.form.codigo_cuenta > 0) ? '00' + self.form.codigo_cuenta : (self.form.codigo_cuenta < 100 && self.form.codigo_cuenta > 10) ? '0' + self.form.codigo_cuenta : self.form.codigo_cuenta) + self.niv7
                                        : '';

                cuentas_contables.guardarCuentaContable(self.form, data => {
                    alertify.success("Cuenta contable registrada exitosamente", 5);
                    self.loading = false;
                    this.$router.push({
                        name: 'cuentas-contables'
                    })
                }, err => {
                    self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Registrar'
                })
            },

            obtenerTodosNivelesCuenta() {
                var self = this;
                nivel_cuenta.obtenerTodosNivelesCuenta(
                    data => {
                        self.niveles_cuenta = data;
                        self.loading = false;
                    },
                    err => {
                        self.loading = true;
                        console.log(err);
                    }
                );
            },

            isNumber: function (evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode === 46) {
                    evt.preventDefault();
                    ;
                } else {
                    return true;
                }
            }
        },
        mounted() {
            this.obtenerTodosNivelesCuenta();
            //this.obtenerTodosAnexos();
            //this.obtenerTodosTiposCuenta();
        }
    }
</script>

<style lang="scss" scoped>
    .check-label2 {
        margin-top: 40px;
    }
</style>
