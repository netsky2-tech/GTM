<template>
    <div class="main">
        <div class="content-box">
            <div class="row ">
                <div class="card">
                    <div class="col-md-12">
                        <div class="card-body ">
                            <h1 class="card-header" style="text-align: center"><strong>Autenticación de dos factores (2FA)</strong></h1>
                            <br>
                            <p class="card-text" style="text-align: center">La autenticación de dos factores (2FA) refuerza la seguridad del acceso al requerir dos métodos (también denominados factores) para verificar su identidad. La autenticación de dos factores protege contra ataques de phishing, ingeniería social y de fuerza bruta de contraseñas y protege sus inicios de sesión de atacantes que explotan credenciales débiles o robadas.</p>
                            <br>

                                <div class="center"><strong>Se ha enviado un código de verificación a su correo electronico, favor ingresarlo para iniciar sesión.</strong></div>
                            <br>
                            <form method="post" @submit.prevent="requestResetPassword" autocomplete="off">
                            <div class="row center">
                                <div class="col-md-6">
                                     <div class="form-group">
                                         <!--<label for="" class="center"> Código de autenticación</label>-->
                                         <input v-tooltip="'Presionar enter para acceder'" class="form-control" placeholder="Digite su código de doble autenticación" v-model="form.two_factor_code">
                                            <ul class="error-messages">
                                                 <li :key="message" v-for="message in errorMessages.two_factor_code" v-text="message"></li>
                                            </ul>
                                     </div>
                                </div>
                            </div>
                            </form>

                     <!--       <div class="content-box-footer text-center">
                                <button :disabled="btnAction != 'Verificar' ? true : false" @submit.prevent="storeTwoFactorCode" class="btn btn-primary" type="button">{{ btnAction }}</button>
                            </div>-->
                            <template v-if="loading">
                                <BlockUI :message="msg" :url="url"></BlockUI>
                            </template>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import usuario from '../../api/usuarios';
    import twoFactor from '../../api/two-factor-auth';
    import loadingImage from '../../assets/images/block50.gif'
    import configuracion from "../../api/configuracion-ir";
    //import Pagination from '../layout/Pagination'

    export default {
        props: {
            enabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                twoFactorEnabled: this.enabled,
                qrCode: '',
                loading:true,
                msg: 'Cargando el contenido espere un momento',
                url : '/public'+loadingImage,   //It is important to import the loading image then use here
                filter: {
                    page: 1,
                    limit: 20,
                    limitOptions: [5, 10, 15, 20],
                    search: {
                        field: 'codigo',
                        value: '',
                        status:0
                    }
                },
                form:{
                    two_factor_code:'',
                    google2fa_enable:null,
                    data:[],
                    qr_code:''
                },
                btnAction: 'Verificar',
                areas: [],
                errorMessages: [],
                total: 0
            }
        },
        methods: {
            obtenerUsuario() {
                var self = this
                usuario.obtenerUserLogin({
                }, data => {
                    self.form = data;
                    self.loading = false;
                }, err => {
                    //console.log(err)
                    alertify.error(err.id_usuario, 5);
                    this.$router.push({
                        name: 'login'
                    });
                })
            },
            storeTwoFactorCode() {
                var self = this
                self.btnAction = 'Verificando codigo, espere....'
                self.loading = true;
                if(self.form.usuario.two_factor_code === self.form.two_factor_code){
                twoFactor.storeTwoFactorCode(self.form, data => {
                    self.loading = false;
                    alertify.success("Datos registrados correctamente",5);
                    this.$router.push({
                        name: 'pagina-principal'
                    })

                }, err => {
                    self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Verificar'
                })
                }else{
                    alertify.warning("El código digitado no coincide con el enviado por correo, favor verificar",5);
                    self.btnAction = 'Verificar'
                }
            },

            showQrCode () {
                return axios.get('auth/show-qr')
                    .then(response => {
                        this.qrCode = response.data.svg
                    })
            },
            requestResetPassword() { //mismo metodo que storeTwoFactorCode
                var self = this;
                self.btnAction = 'Verificando codigo, espere....'
                self.loading = true;
                this.$http.get("auth/store-two-factor-code", {two_factor_code:self.form.two_factor_code}).then(result => {
                    //this.response = result.data;
                    if(self.form.usuario.two_factor_code === self.form.two_factor_code){
                        self.loading = false;
                        alertify.success('Datos cargados correctamente ', 10);
                        this.$router.push({name: 'pagina-principal'})
                    }else {
                        self.loading = false;
                        alertify.warning('El código digitado no coincide con el que ha sido enviado al correo, favor verificar', 10);
                        self.btnAction = 'Verificar'
                    }
                }, error => {
                    console.log(error);
                    self.loading = false;
                    self.btnAction = 'Verificar'
                    //this.$router.push({name: 'login'})
                });
            },
            changeLimit(limit) {
                this.filter.page = 1
                this.filter.limit = limit
                this.obtenerAreas()
            },
            changePage(page) {
                this.filter.page = page
                this.obtenerAreas()
            },

        },
        /*components: {
            'pagination': Pagination
        },*/
        mounted() {
            this.obtenerUsuario();
            /*           this.showQrCode();*/
        }
    }
</script>

<style lang="scss" scoped>
    .search-field {
        min-width: 120px;
    }
    .table {
        a {
            color: #2675dc;
        }
        .table-number {
            width: 60px;
        }
        .action {
            width: 100px;
        }
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
