<template>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<!--<template v-if="ajustesBasicos[3]">-->
					<div class="login100-pic js-tilt" data-tilt>
						<!--<img v-bind:src="JSON.parse(ajustesBasicos[3]? ajustesBasicos[3].valor:'[]')[0]?JSON.parse(ajustesBasicos[3]? ajustesBasicos[3].valor:'[]')[0].file_thumbnail:login_img" alt="IMG">-->
						<img v-bind:src="login_static_img" alt="IMG">
					</div>
				<!--</template>-->
				<!--<template v-else>
					<div class="login100-pic-loading js-tilt">
						<img v-bind:src="login_img" alt="IMG">
					</div>
				</template>-->
				<form autocomplete="off" @submit.prevent="login" method="post">
					<span class="login100-form-title">
						<!--{{ajustesBasicos[0] ? ajustesBasicos[0].valor:''}}-->
						{{titulo}}
					</span>
					<div class="wrap-input100 validate-input">
						<input class="input100" placeholder="Digite nombre de usuario" v-model="form.usuario">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					<div class="wrap-input100 validate-input" >
						<input class="input100" placeholder="Digite contraseña" type="password" v-model="form.password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
                    <template v-if="form.count < 3">
				<div class="text-center p-t-12">
					<ul class="error-messages">
							<li v-for="message in errorMessages.password" :key="message">{{ message }}</li>
					</ul>
				</div>
                    </template>
                    <template v-if="form.count >= 3 && form.timer > 0">
					<div class="text-center p-t-12">
						<ul class="error-messages">
							<li v-for="message in errorMessages.maxAttempts" :key="message">{{ message }}</li>
						</ul>
					</div>
					</template>

					<div class="container-login100-form-btn">
						 <button type="submit" class="login100-form-btn" :disabled="btnAction != 'Acceder' ? true : false">{{ btnAction }}</button>
					</div>


					<div class="text-center p-t-12">
					<label class="check-label"><input type="checkbox" v-model="form.rememberMe"> Recordarme</label>
					</div>

					<div class="text-center p-t-12">
						<router-link :style="'color: #707070;'" tag="button" :to="{ name: 'reset-password' }">
							<i aria-hidden="true" class="fa fa-long-arrow-right m-l-5"></i> Recuperar Contraseña
						</router-link>
					</div>
				</form>
			</div>


			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	//import auth from '../../api/auth'
	import loadingImage from '../../assets/images/block50.gif'
	import loginImage from '../../assets/images/capsoft-login.png'
	import settings from '../../api/setting.js'
	import { mapGetters, mapActions } from 'vuex'
	export default {
		data() {
			return {
				loading:false,
				msg: 'Espere un momento, el sistema esta validando sus datos',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
		form: {
					usuario: '',
					password: '',
					rememberMe:false,
                    count: 0,
					timer: 60,
					companies:[],
					countCompany:'',
				},

				titulo:'Inicio de sesión',
				login_img:'images/block50.gif',
				login_static_img: '/public/app/images/capsoft-login.png',

		btnAction: 'Acceder',
				errorMessages: [],
				maxAttempts: [],
			}
		},
		methods: {

			countDownTimer() {
				if(this.form.timer > 0) {
					setTimeout(() => {
						this.form.timer -= 1;
						this.countDownTimer()
					}, 1000)
				}else if (this.form.timer === 0)
				{
					this.form.count = 0;
				}
			},
			/*obtenerAjustesBasicos() {
				this.$store.dispatch('global/obtenerAjustesBasicos').catch((err) => {
					console.log(err)
				})
				this.initTilt();
			},*/

 login(){

		var app = this
	 	app.loading=true;
		app.btnAction = 'Comprobando datos...'

		 if(app.form.usuario.trim()!=='' && app.form.password.trim()!==''){
			 app.errorMessages.password = [''];
		 	 this.$auth.login({
            params: {
              usuario: app.form.usuario,
              password: app.form.password
            },
			success:
			function (response) {
           if (response.data.status === 'success') {
           	app.loading=false;
          // localStorage.setItem('usuario', JSON.stringify(response.data.result))
           this.$router.push({
			   			name:'select-company'
						//name: 'pagina-principal'
						});

					alertify.success("Inicio de sesión correcto, Bienvenido!",5);
            } else {
			      app.loading=false;
               	  app.errorMessages = response.data.result
                  app.btnAction = 'Acceder'
									app.form.password = ''
            }
        	},
					error:
					function (res) {
						app.loading=false;
						app.btnAction = 'Acceder';
						app.form.password = '';
						app.errorMessages.password = ['Los datos no coinciden con nuestros registros'];
                        app.form.count = app.form.count + 1;
                        if(app.form.count === 3)
                        {
                        	this.countDownTimer();
						}
                        app.errorMessages.maxAttempts = ['Número de intentos superado, por favor espere '+app.form.timer+' segundos'];

					},
          rememberMe: app.form.rememberMe,
          fetchUser: true,
				});

				}else{
				alertify.error("Error con los datos proporcionados!",5);
			 app.loading=false;
        app.btnAction = 'Acceder'
				app.form.password = ''
				app.errorMessages.password = ['Los campos usuario y contraseña son requeridos']
				}
      },
		initTilt() {
				$('.js-tilt').tilt({scale: 1.1})
			},
		},
		mounted() {
			this.initTilt();
			//this.obtenerAjustesBasicos();
			//this.login_img = (JSON.parse(ajustesBasicos[1].valor))[0].file_thumbnail;
		},
		/*computed: mapGetters({
			ajustesBasicos: 'global/ajustesBasicos'
		}),*/

    }
</script>
<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>
