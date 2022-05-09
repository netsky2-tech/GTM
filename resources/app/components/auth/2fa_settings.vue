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
                        <template v-if="form.two_factor_secret">
                            <strong>Tienes habilitado 2FA.</strong>

                            <div class="w-1/2 flex justify-center">
                                <img src="$auth()->user()->twoFactorQrCodeSvg()">
                            </div>

                        </template>
                        <template v-else>
                            <h1 style="text-align: center"><strong>No tienes habilitado 2FA.</strong></h1>
                        </template>
                        <br>
                        <div v-if="qrCode" v-html="qrCode" />

                        <div class="content-box-footer text-center">
                            <template v-if="!twoFactorEnabled">

                                    <button type="button" class="btn btn-primary" @click="enableTwoFactorAuthentication">Habilitar 2FA</button>

                            </template>
                            <template v-else>
                                <button type="button" class="btn btn-primary" @click="disableTwoFactorAuthentication">Deshabilitar 2FA</button>
                            </template>
                        </div>
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
                    login_security:null,
                    google2fa_enable:null,
                    data:[],
                    qr_code:''
                },
                areas: [],
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
            enableTwoFactorAuthentication () {
                axios.post('auth/enable-2fa')
                    .then(() => {
                        return Promise.all([
                            this.showQrCode()
                        ])
                    }).then(() => {
                    this.twoFactorEnabled = true
                })
            },

            showQrCode () {
                return axios.get('auth/show-qr')
                    .then(response => {
                        this.qrCode = response.data.svg
                    })
            },
            disableTwoFactorAuthentication () {
                axios.delete('auth/disabled-2fa')
                    .then(() => {
                        this.twoFactorEnabled = false
                        this.qrCode = ''
                    })
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
