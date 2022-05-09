<template>
    <div id="main">
        <div class="wrapper">
            <div class="wrapper-box">
                <div class="main">
                    <div class="container">
                        <div class="row justify-content-center">
                        <div class="logo">
                            <img style="width: 100px;height: 100px; justify-content: center;" v-bind:src="this.form.login_static_img" >
                        </div>
                        </div>
                        <br>
                        <div class="row justify-content-center">
                            <div class="col-6">
                                <div class="card card-default">
                                    <div class="card-header">Solicitar reinicio de contraseña</div>
                                    <div class="card-body">
                                        <form @submit.prevent="requestResetPassword" autocomplete="off" method="post">
                                            <div class="form-group">
                                                <label for="email" style="padding-left: 10px;">Correo Electrónico</label>
                                                <input class="form-control" id="email" placeholder="correo@gtm.com" required type="email" v-model="email">
                                            </div>
                                            <button class="btn btn-primary" type="submit">Enviar enlace de reinicio</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import ajustes from "../../api/ajustes";
    export default {
        data() {
            return {
                email: null,
                has_error: false,
                form: {
                    login_img:'images/block50.gif',
                    login_static_img: '/public/app/images/capsoft-login.png',
                },
            };
        },
        methods: {
            cargar() {
                var self = this;
                ajustes.cargar_imagenes(
                    data => {
                        var logo_json = JSON.parse(data[0].valor)
                        self.form.uploaded_logo = logo_json[0].file_thumbnail;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            requestResetPassword() {
                this.$http.post("auth/store-two-factor-code", {email: this.email}).then(result => {
                    //this.response = result.data;
                    if(result.data.message ==='Email could not be sent to this email address.'){
                        alertify.warning('No se ha encontrado esta dirección de correo electrónico en nuestros registros.',5);
                        this.$router.push({name: 'login'})
                    }else if(result.data.message ==='Password reset email sent.'){
                        alertify.success('Hemos enviado al correo '+this.email+' las instrucciones para reestablecer su contrasena. ',10);
                        this.$router.push({name: 'login'})
                    }else{
                        alertify.error(result.data.message,10);
                        this.$router.push({name: 'login'})
                    }
                }, error => {
                    console.log(error);
                    this.$router.push({name: 'login'})
                });
            }
        },
        mounted() {
            this.cargar()
        }
    }
</script>
