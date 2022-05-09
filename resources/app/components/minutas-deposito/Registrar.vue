<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Registrar minuta de depósito</div>
                        <div class="box-description">Formulario para registrar minuta de depósito</div>
                    </div>
                    <form>
                        <div class="row">

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for>Sucursal</label>
                                    <v-select
                                            :options="sucursales"
                                            label="descripcion"
                                            ref="sucursal"
                                            v-model="form.sucursal"
                                    ></v-select>
                                    <ul class="error-messages">
                                        <li
                                                :key="message"
                                                v-for="message in errorMessages.sucursal"
                                                v-text="message"
                                        ></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="">Banco</label>
                                    <v-select
                                            :options="bancos"
                                            label="descripcion"
                                            v-model="banco"
                                            v-on:input="obtenerCuentasBancarias()"
                                    ></v-select>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.banco" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="">Cuenta bancaria</label>
                                    <v-select
                                            :options="cuentas_bancarias"
                                            label="numero_cuenta"
                                            v-model="form.cuenta_bancaria"
                                            v-on:input="seleccionarMoneda()"
                                    ></v-select>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.cuenta_bancaria"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Número de referencia</label>
                                    <input class="form-control" placeholder="Dígite el Numero de referencia"
                                           v-model="form.no_referencia">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.no_referencia"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Concepto</label>
                                    <input class="form-control" placeholder="Dígite el concepto"
                                           v-model="form.concepto">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.concepto"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for>Fecha Depósito</label>
                                    <datepicker :format="format" :language="es" @selected="onDateSelect"
                                                v-model="fechax"></datepicker>
                                    <ul class="error-messages">
                                        <li
                                                :key="message"
                                                v-for="message in errorMessages.fecha_deposito"
                                                v-text="message"
                                        ></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> TC</label>
                                    <input class="form-control" placeholder="Moneda de la cuenta bancaria" readonly
                                           min="0" v-model.number="form.tasa_cambio">
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Moneda Cuenta Bancaria</label>
                                    <input class="form-control" placeholder="Moneda de la cuenta bancaria" readonly
                                           v-model="form.moneda">
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Monto</label>
                                    <input @change="calcularMontos" class="form-control"
                                           placeholder="Monto de la minuta" min="0" type="number" v-model.number="monto_minuta">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.monto_minuta"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>


                        </div>

                    </form>
                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'listado-minutas' }" tag="button">
                            <button class="btn btn-default" type="button">Cancelar</button>
                        </router-link>
                        <button :disabled="btnAction != 'Registrar' ? true : false" @click="registrar"
                                class="btn btn-primary" type="button">{{ btnAction }}
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
    import banco from '../../api/bancos'
    import es from 'vuejs-datepicker/dist/locale/translations/es'
    import minuta from '../../api/minutas_deposito'
    import tc from '../../api/tasas-cambio'
    import sucursal from '../../api/sucursales'
	import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
                bancos: [],
                fechax: new Date(),
                es: es,
                format: "d MMMM yyyy",
                cuentas_bancarias: [],
                sucursales: [],
                banco: '',
                monto_minuta: 0,
                form: {
                    tasa_cambio: 0,
                    monto_cordobas: 0,
                    monto_dolares: 0,
                    cuenta_bancaria: '',
                    no_referencia: '',
                    concepto: '',
                    fecha_deposito: moment(new Date()).format("YYYY-MM-DD"),
                },
                btnAction: 'Registrar',
                errorMessages: []
            }
        },

        methods: {
            calcularMontos() {
                let self = this;
                self.form.monto_cordobas = 0;
                self.form.monto_dolares = 0;
                if (self.form.cuenta_bancaria) {
                    if (self.form.cuenta_bancaria.id_moneda === 1) {
                        self.form.monto_cordobas = self.monto_minuta;
                        self.form.monto_dolares = Number((self.monto_minuta / self.form.tasa_cambio).toFixed(2));
                    } else if (self.form.cuenta_bancaria.id_moneda === 3) {
                        self.form.monto_dolares = self.monto_minuta;
                        self.form.monto_cordobas = Number((self.monto_minuta * self.form.tasa_cambio).toFixed(2));
                    }
                }
            },
            obtenerTodosBancos() {
                var self = this;
                banco.obtenerTodosBancos(
                    data => {
                        self.bancos = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            moment: function () {
                return moment();
            },
            onDateSelect(date) {
                let self = this;
                self.form.fecha_deposito = moment(date).format("YYYY-MM-DD");

                tc.obtenerTC({
                    fecha: self.form.fecha_deposito
                }, data => {
                    if (data.tasa !== null) {
                        self.form.tasa_cambio = Number(data.tasa);
                        self.calcularMontos();
                    } else {
                        alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
                        self.form.tasa_cambio = 0;
                    }
                }, err => {
                    self.form.tasa_cambio = 0;
                    alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
                })

            },

            obtenerCuentasBancarias() {
                var self = this
                self.form.cuenta_bancaria = null;
                self.monto_minuta = 0;
                self.form.monto_cordobas = 0;
                self.form.monto_dolares = 0;
                if (self.banco.cuentas_bancarias_banco)
                    self.cuentas_bancarias = self.banco.cuentas_bancarias_banco
            },

            seleccionarMoneda() {
                var self = this
                if (self.form.cuenta_bancaria.moneda_cuenta_bancaria)
                    self.form.moneda = self.form.cuenta_bancaria.moneda_cuenta_bancaria.descripcion
                self.monto_minuta = 0;
                self.form.monto_cordobas = 0;
                self.form.monto_dolares = 0;
            },

            registrar() {
                var self = this
                self.btnAction = 'Registrando, espere....'
				self.loading = true;
                minuta.registrar(self.form, data => {
                	self.loading = false;
                    this.$router.push({
                        name: 'listado-minutas'
                    })
                }, err => {
                	self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Registrar'
                })
            },
            obtenerTC() {
                var self = this;
                tc.obtenerTC({
                    fecha: self.form.fecha_deposito
                }, data => {
                    if (data.tasa !== null) {
                        self.form.tasa_cambio = Number(data.tasa);
                        self.calcularMontos();
                    } else {
                        alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
                    }
                }, err => {
                    self.form.tasa_cambio = 0;
                    alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
                })
            },
            obtenerSucursalesTodas() {
                var self = this;
                sucursal.obtenerTodos(
                    data => {
                        self.sucursales = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
        },
        mounted() {
            this.obtenerTodosBancos();
            this.obtenerTC();
            this.obtenerSucursalesTodas();
        }
    }
</script>