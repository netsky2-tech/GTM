<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Actualizar Cuenta Contable</div>
                        <div class="box-description">Formulario para actualizar Cuenta Contable</div>
                    </div>
                    <form>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for>Nivel de cuenta</label>
                                    <input disabled class="form-control" v-model="form.cuenta_nivel.descripcion"
                                           placeholder="Nivel de cuenta">
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label for>Cuenta Padre</label>
                                    <input disabled class="form-control"
                                           :value="form.cuenta_padre.nombre_cuenta + '('+form.cuenta_padre.cta_contable+')'"
                                           placeholder="Nombre cuenta padre">
                                </div>
                            </div>

                            <!--<div class="col-sm-4">
                  <div class="form-group">
                    <label for="">Anexo</label>
                   <v-select
                      v-model="form.cuenta_anexo"
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
                                    <input disabled class="form-control" v-model="form.cuenta_padre.cta_contable"
                                           placeholder="Código heredado">
                                </div>
                            </div>

                            <div class="col-sm-2">
                                <div class="form-group">
                                    <label for="">Código nueva Cuenta</label>
                                    <input disabled :maxlength="2"
                                           @change="form.codigo_cuenta = Math.max(Math.min(Math.round(form.codigo_cuenta), form.cuenta_nivel.codigo_maximo), 1)"
                                           class="form-control" placeholder="Dígite código único de cuenta"
                                           type="number" v-model="form.codigo_cuenta">
                                    <ul class="error-messages">
                                        <li v-for="message in errorMessages.codigo_cuenta" :key="message"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-2">
                                <div class="form-group">
                                    <label for=""> Nuevo Código</label>
                                    <input :value="(form.cuenta_nivel.id_nivel_cuenta === 2) ? niv1+form.codigo_cuenta+niv3+niv4+'-'+niv5+'-'+niv6+niv7 :
												(form.cuenta_nivel.id_nivel_cuenta === 3)? niv1+niv2+form.codigo_cuenta+niv4+'-'+niv5+'-'+niv6+niv7  :
												(form.cuenta_nivel.id_nivel_cuenta === 4)? niv1+niv2+niv3+form.codigo_cuenta+'-'+niv5+'-'+niv6+niv7  :
												(form.cuenta_nivel.id_nivel_cuenta === 5)? niv1+niv2+niv3+niv4+'-'+(form.codigo_cuenta < 10 && form.codigo_cuenta > 0 ? '0'+form.codigo_cuenta : form.codigo_cuenta )+'-'+niv6+niv7  :
												(form.cuenta_nivel.id_nivel_cuenta === 6)? niv1+niv2+niv3+niv4+'-'+niv5+'-'+((form.codigo_cuenta < 10 && form.codigo_cuenta > 0) ? '00'+form.codigo_cuenta :(form.codigo_cuenta < 100 && form.codigo_cuenta > 10) ? '0'+form.codigo_cuenta: form.codigo_cuenta )+niv7
												 :''" class="form-control" disabled placeholder="Código concatenado">
                                </div>
                            </div>

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

                    <div class="row">


                        <div class="col-md-6">
                            <div class="content-box-footer text-left">
                                <template v-if="form.estado==1">
                                    <button class="btn btn-danger"
                                            @click="desactivarCuentaContable(form.id_cuenta_contable)"><i
                                            class="fa fa-trash-o"> Eliminar</i></button>
                                </template>
                                <template v-else>
                                    <button class="btn btn-success"
                                            @click="activarCuentaContable(form.id_cuenta_contable)"><i
                                            class="fa fa-check-square"> Habilitar</i></button>
                                </template>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="content-box-footer text-right">
                                <router-link tag="button" :to="{ name: 'cuentas-contables' }">
                                    <button type="button" class="btn btn-default">Cancelar</button>
                                </router-link>
                                <button type="button" class="btn btn-primary" @click="actualizarCuentaContable"
                                        :disabled="btnAction != 'Actualizar' ? true : false">{{ btnAction }}
                                </button>
                            </div>
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
    import cuentas_contables from '../../api/cuentas_contables'
    import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
                loading: true,
                msg: 'Cargando el contenido espere un momento',
                url: '/public' + loadingImage,   //It is important to import the loading image then use here
                cta_contable: '',
                niv1: "",
                niv2: "",
                niv3: "",
                niv4: "",
                niv5: "",
                niv6: "",
                niv7: "",
                cuentas_contables: [],
                //	anexos:[],
                tipos_cuenta: [],
                form: {
                    nombre_cuenta: '',
                    codigo_cuenta: '',

                    cuenta_padre: '',
                    cuenta_nivel: '',
                    cta_contable: "",
                    permite_movimiento: 0,
                },
                btnAction: 'Actualizar',
                errorMessages: []
            };
        },
        methods: {
            obtenerCuentaContable() {
                var self = this;
                if ([1, 2, 3, 4, 5, 225].indexOf(Number(this.$route.params.id_cuenta_contable)) < 0) {
                    cuentas_contables.obtenerCuentaContable(
                        {
                            id_cuenta_contable: this.$route.params.id_cuenta_contable
                        },
                        data => {
                            self.form = data;
                            //  self.obtenerAnexosPorEstadoFinanciero(self.form.cuenta_tipo);
                            self.niv1 = self.form.cuenta_padre.niv1;
                            self.niv2 = self.form.cuenta_padre.niv2;
                            self.niv3 = self.form.cuenta_padre.niv3;
                            self.niv4 = self.form.cuenta_padre.niv4;
                            self.niv5 = self.form.cuenta_padre.niv5;
                            self.niv6 = self.form.cuenta_padre.niv6;
                            self.niv7 = self.form.cuenta_padre.niv7;
                            self.loading = false;
                        },
                        err => {
                            self.loading = false;
                            //console.log(err);
                            alertify.error(err.id_cuenta_contable[0], 5);
                            this.$router.push({
                                name: "cuentas-contables"
                            });
                        }
                    );
                } else {
                    alertify.warning("Este dato se encuentra protegido, contacte a los desarrolladores para realizar este cambio", 5);
                    this.$router.push({
                        name: "cuentas-contables"
                    });
                }
            },
            desactivarCuentaContable(cuentaId) {
                var self = this
                if ([1, 2, 3, 4, 5, 225].indexOf(cuentaId) < 0) {
                    cuentas_contables.desactivarCuentaContable(
                        {
                            id_cuenta_contable: cuentaId
                        },
                        data => {
                            alertify.warning("Cuenta contable desactivada", 5);
                            this.$router.push({
                                name: "cuentas-contables"
                            });
                        },
                        err => {
                            console.log(err);
                        }
                    )
                } else {
                    alertify.warning("Este dato se encuentra protegido, contacte a los desarrolladores para realizar este cambio", 5);
                    this.$router.push({
                        name: "cuentas-contables"
                    });
                }
            },
            activarCuentaContable(cuentaId) {
                var self = this;
                var self = this
                if ([1, 2, 3, 4, 5, 225].indexOf(cuentaId) < 0) {
                    cuentas_contables.activarCuentaContable(
                        {
                            id_cuenta_contable: cuentaId
                        },
                        data => {
                            alertify.success("Cuenta contable activada correctamente", 5);
                            this.$router.push({
                                name: "cuentas-contables"
                            });
                        },
                        err => {
                            console.log(err);
                        }
                    )
                } else {
                    alertify.warning("Este dato se encuentra protegido, contacte a los desarrolladores para realizar este cambio", 5);
                    this.$router.push({
                        name: "cuentas-contables"
                    });
                }
            },
            /*obtenerAnexosPorEstadoFinanciero(cuentatipo) {
                    var self = this;
                        if (cuentatipo !== null && cuentatipo !== undefined && cuentatipo !== '') {
              anexo.obtenerAnexosPorEstadoFinanciero(
                         {
                    id_estado_financiero: cuentatipo.tipo_cuenta_estado_financiero.id_estado_financiero
                  },
                data => {
                  self.anexos = data;
                },
                err => {
                  console.log(err);
                }
                    );
                         }
                },*/

            actualizarCuentaContable() {
                var self = this;
                self.btnAction = "Guardando, espere....";


                self.form.cta_contable =
                    (self.form.cuenta_nivel.id_nivel_cuenta === 2) ? self.niv1 + self.form.codigo_cuenta + self.niv3 + self.niv4 + '-' + self.niv5 + '-' + self.niv6 + self.niv7 :
                        (self.form.cuenta_nivel.id_nivel_cuenta === 3) ? self.niv1 + self.niv2 + self.form.codigo_cuenta + self.niv4 + '-' + self.niv5 + '-' + self.niv6 + self.niv7 :
                            (self.form.cuenta_nivel.id_nivel_cuenta === 4) ? self.niv1 + self.niv2 + self.niv3 + self.form.codigo_cuenta + '-' + self.niv5 + '-' + self.niv6 + self.niv7 :
                                (self.form.cuenta_nivel.id_nivel_cuenta === 5) ? self.niv1 + self.niv2 + self.niv3 + self.niv4 + '-' + (self.form.codigo_cuenta < 10 && self.form.codigo_cuenta > 0 ? '0' + self.form.codigo_cuenta : self.form.codigo_cuenta) + '-' + self.niv6 + self.niv7 :
                                    (self.form.cuenta_nivel.id_nivel_cuenta === 6) ? self.niv1 + self.niv2 + self.niv3 + self.niv4 + '-' + self.niv5 + '-' + ((self.form.codigo_cuenta < 10 && self.form.codigo_cuenta > 0) ? '00' + self.form.codigo_cuenta : (self.form.codigo_cuenta < 100 && self.form.codigo_cuenta > 10) ? '0' + self.form.codigo_cuenta : self.form.codigo_cuenta) + self.niv7
                                        : '';
                cuentas_contables.actualizarCuentaContable(
                    self.form,
                    data => {
                        alertify.success("Cuenta Contable Actualizada Correctamente!", 5);
                        this.$router.push({
                            name: "cuentas-contables"
                        });
                    },
                    err => {
                        self.errorMessages = err;
                        self.btnAction = "Actualizar";
                    }
                );
            },
        },
        mounted() {
            this.obtenerCuentaContable();
        }
    };
</script>
<style lang="scss" scoped>
    .check-label2 {
        margin-top: 40px;
    }
</style>