<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Modificar Cuenta Bancaria</div>
                <div class="box-description">Formulario para modificar Nombre banco</div>
            </div>
            <form>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label >Tipo de Cuenta</label>
                            <select class="form-control" v-model="form.tipo_cuenta">
                                <option value="1">Cuenta Corriente</option>
                                <option value="2">Déposito a plazos</option>
                                <option value="3">Cuenta de Ahorro</option>
                            </select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.tipo_cuenta" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Banco</label>
                            <div class="form-group">
                                <v-select
                                        :options="bancos"
                                        label="descripcion"
                                        v-model="form.banco_cuenta_bancaria"
                                ></v-select>
                            </div>
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.banco_cuenta_bancaria" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Cuenta Bancaria</label>
                            <input class="form-control" placeholder="Dígite el Nombre de la cuenta"
                                   v-model="form.numero_cuenta">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.numero_cuenta" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label > Número Chequera</label>
                            <input class="form-control" min="0" type="number" v-model.number="form.numeracion_chequera" placeholder="Dígite la numeración actual de la chequera">
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.numeracion_chequera" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Cuenta Contable</label>
                            <v-select
                                    :options="cuentas_contables"
                                    label="nombre_cuenta_completo"
                                    v-model="form.cuenta_contable_cuenta_bancaria"
                            ></v-select>
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.cuenta_contable_cuenta_bancaria"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Moneda</label>
                            <v-select
                                    :options="monedas"
                                    label="descripcion"
                                    v-model="form.moneda_cuenta_bancaria"
                            ></v-select>
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.moneda_cuenta_bancaria"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </form>

            <div class="row">
                <div class="col-md-6">
                    <div class="content-box-footer text-left">
                        <template v-if="form.estado===1">
                            <button @click="desactivar(form.id_cuenta_bancaria)" class="btn btn-danger"><i
                                    class="fa fa-trash-o"> Eliminar</i></button>
                        </template>
                        <template v-else>
                            <button @click="activar(form.id_cuenta_bancaria)" class="btn btn-success"><i
                                    class="fa fa-check-square"> Habilitar</i></button>
                        </template>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'listado-cuentas-bancarias' }" tag="button">
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
    import cuenta_bancaria from '../../api/cuentas_bancarias'
    import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
                loading: true,
                msg: 'Cargando contenido, espere un momento',
                url: '/public' + loadingImage,   //It is important to import the loading image then use here
                cuentas_contables:[],
                bancos:[],
                monedas:[],
                form: {
                    cuenta_bancaria: '',
                    banco_cuenta_bancaria: '',
                    moneda_cuenta_bancaria: '',
                    cuenta_contable_cuenta_bancaria: ''
                },
                btnAction: 'Guardar',
                errorMessages: []
            }
        },
        methods: {
            obtenerCuentaBancaria() {
                var self = this
                cuenta_bancaria.obtenerCuentaBancaria({
                    id_cuenta_bancaria: self.$route.params.id_cuenta_bancaria
                }, data => {
                    self.form = data.cuenta_bancaria;
                    self.bancos = data.bancos;
                    self.cuentas_contables = data.cuentas_contables;
                    self.monedas = data.monedas;
					self.loading = false;
                }, err => {
                    alertify.error(err.id_cuenta_bancaria[0], 5);
                    this.$router.push({
                        name: 'listado-cuentas-bancarias'
                    });
                })


            },
            actualizar() {
                var self = this
				self.loading = true;
                self.btnAction = 'Guardando, espere......'
                cuenta_bancaria.actualizar(self.form, data => {
                    alertify.success("Cuenta bancaria actualizada correctamente", 5);
                    this.$router.push({
                        name: 'listado-cuentas-bancarias'
                    })
                }, err => {
                	self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Guardar'
                })
            },

            desactivar(cuentabancariaId) {

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
                        cuenta_bancaria.desactivar({
                            id_cuenta_bancaria: cuentabancariaId
                        }, data => {
                            alertify.warning("Cuenta Bancaria desactivada correctamente", 5);
                            this.$router.push({
                                name: 'listado-cuentas-bancarias'
                            })
                        }, err => {
                            console.log(err)
                        });
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },
            activar(cuentabancariaId) {
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
                        cuenta_bancaria.activar({
                            id_cuenta_bancaria: cuentabancariaId
                        }, data => {
                            alertify.success("Cuenta Bancaria activada correctamente", 5);
                            this.$router.push({
                                name: 'listado-cuentas-bancarias'
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
        mounted() {
            this.obtenerCuentaBancaria()
        }
    }
</script>