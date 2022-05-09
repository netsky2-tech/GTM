<template>
    <div id="main">
        <div class="wrapper">
            <div class="wrapper-box">
                <div class="main">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="logo">
                                <img style="width: 100px;height: 100px; justify-content: center;" v-bind:src="this.uploaded_logo" >
                            </div>
                        </div>
                        <br>
                        <div class="row justify-content-center">
                            <div class="col-6">
                                <div class="card card-default">
                                    <div class="card-header">Definir Nueva Contraseña</div>
                                    <div class="card-body">
                                         <form @submit.prevent="resetPassword" autocomplete="off" method="post">
                                            <div class="form-group">
                                                <label for="email" style="padding-left: 10px;">Correo Electrónico</label>
                                                <input class="form-control" id="email" placeholder="correo@lubnica.com" required type="email" v-model="email">
                                            </div>
                                            <div class="form-group">
                                                <label for="email" style="padding-left: 10px;">Nueva Contraseña</label>
                                                <input class="form-control" id="password" placeholder="" required type="password" v-model="password">
                                            </div>
                                            <div class="form-group">
                                                <label for="email" style="padding-left: 10px;">Confirmar Contraseña</label>
                                                <input class="form-control" id="password_confirmation" placeholder="" required type="password" v-model="password_confirmation">
                                            </div>
                                            <button class="btn btn-primary" type="submit">Cambiar Contraseña</button>
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
<script>
    import ajustes from "../../api/ajustes";
    export default {
        data() {
            return {
                uploaded_logo: "",
                token: null,
                email: null,
                password: null,
                password_confirmation: null,
                has_error: false
            }
        },
        methods: {
            cargar() {
                var self = this;
                ajustes.cargar_imagenes(
                    data => {
                        var logo_json = JSON.parse(data[0].valor)
                        self.uploaded_logo = logo_json[0].file_thumbnail;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            resetPassword() {
                this.$http.post("auth/reset/password", {
                    token: this.$route.params.token,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                    .then(result => {

                        if(result.data.message ==='Password reset successfully.'){
                            alertify.success('Se ha realizado el cambio de contrasena correctamente.',5);
                            this.$router.push({name: 'login'})
                        }else if(result.data.message ==='Failed, Invalid Token.'){
                            alertify.error('El correo no es valido o la solicitud de cambio de contraseña ha expirado',5);
                            this.$router.push({name: 'login'})
                        }else{
                        alertify.warning(result.data.message,5);
                        this.$router.push({name: 'login'})
                        }

                    }, error => {
                        console.error(error);
                        alertify.warning(error.message,5);
                    });
            }
        },
        mounted() {
            this.cargar()
        }
    }
</script>