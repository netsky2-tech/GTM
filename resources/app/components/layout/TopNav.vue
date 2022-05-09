<template>
	<div class="top-nav">
		<div class="top-nav-box">
			<!--<div class="side-nav-mobile">
				<i class="pe-7s-menu"></i>
			</div>-->
			<div class="logo">
				<router-link :to="{ name: 'pagina-principal' }" tag="button" v-tooltip="'Ir a página principal' ">
					<!--<template v-if="ajustesBasicos[1]">-->
					<template> <!--Se cambió la forma en que se carga los iconos, ya que en las pantallas inicales no se cuenta con el id_empresa-->
							<!--<img v-bind:src="JSON.parse(ajustesBasicos[1]? ajustesBasicos[1].valor:'[]')[0]?JSON.parse(ajustesBasicos[1]? ajustesBasicos[1].valor:'[]')[0].file_thumbnail:login_img" alt="IMG">-->
						<img v-bind:src="logo_left" alt="img">
					</template>

				</router-link>
				<router-link :to="{ name: 'pagina-principal' }" tag="button" v-tooltip="'Ir a página principal'"><!--Se cambió la forma en que se carga el titulo, ya que en las pantallas inicales no se cuenta con el id_empresa-->
					<div class="titulo_sistema"><strong>{{company_name.valor}}</strong></div>
				</router-link>
			</div>
			<!--<div class="messages">
				<div class="icon">
					<i class="pe-7s-chat"></i>
					<div class="count">4</div>
				</div>-->
				<!--<div class="messages-box">
					<div class="header">&Uacute;ltimos mensajes</div>
					<div class="content">
						<a href="" class="message-list">
							<div class="user-image">
								<img src="/public/app/images/logo-lubnica.jpg">
							</div>
							<div class="right-content">
								<div class="name">Carlos Cantarero</div>
								<div class="text">Ha realizado traslado de bodega</div>
							</div>
						</a>
						<a href="" class="message-list">
							<div class="user-image">
								<img src="/public/app/images/logo-lubnica.jpg">
							</div>
							<div class="right-content">
								<div class="name">Ra&uacute;l Ordóñez</div>
								<div class="text">Ha consolidado saldos de contabilidad</div>
							</div>
						</a>
						<a href="" class="message-list">
							<div class="user-image">
								<img src="/public/app/images/logo-lubnica.jpg">
							</div>
							<div class="right-content">
								<div class="name">Ra&uacute;l Ordóñez</div>
								<div class="text">Ha creado solicitud de cheque No. 34534</div>
							</div>
						</a>
						<a href="" class="message-list">
							<div class="user-image">
								<img src="/public/app/images/logo-lubnica.jpg">
							</div>
							<div class="right-content">
								<div class="name">Carlos Cantarero</div>
								<div class="text">Ha aprobado solicitud de reembolso de factura.</div>
							</div>
						</a>
					</div>
					<div class="footer">
						<a href="">Ver todos los mensajes</a>
					</div>
				</div>-->
			<!--</div>-->
			<!--
			<div class="notification">
				<div class="notification-box">
					<div class="icon">
						<i class="pe-7s-news-paper"></i>
					</div>
					<div class="notification-content">
						<div class="header">
							<div class="title">10 Notification</div>
							<div class="action">Notification Settings</div>
						</div>
						<div class="content">
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
						</div>
					</div>
				</div>
				<div class="notification-box">
					<div class="icon">
						<i class="pe-7s-drawer"></i>
						<div class="count">2</div>
					</div>
					<div class="notification-content">
						<div class="header">
							<div class="title">2 Notification</div>
							<div class="action">Notification Settings</div>
						</div>
						<div class="content">
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
						</div>
					</div>
				</div>
				<div class="notification-box">
					<div class="icon">
						<i class="pe-7s-comment"></i>
					</div>
					<div class="notification-content">
						<div class="header">
							<div class="title">3 Notification</div>
							<div class="action">Notification Settings</div>
						</div>
						<div class="content">
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
							<a href="" class="notification-list">
								<div class="name">Transactions Report</div>
								<div class="text">This month transaction report has been generated</div>
								<div class="date">29 January 2018 15:24</div>
							</a>
						</div>
					</div>
				</div>
			</div>sa
			-->
			<div class="user-profile">
				<div class="user-image">
					<div class="image">
						<!--<img src="/public/app/images/csicono.png">-->
						<img v-bind:src="logo_right" alt="IMG">
					</div>
				</div>
				<div class="dropdown">
					<div class="info">
						<template v-if="$auth.user()">
						<div class="user-name">{{ $auth.user().trabajador.primer_nombre + ' ' + $auth.user().trabajador.primer_apellido + ' ' +($auth.user().trabajador.segundo_apellido?$auth.user().trabajador.segundo_apellido:'') }}</div>
						<div class="user-group">{{ $auth.user().rol.descripcion }}</div>
						<!--<div class="user-group">{{ $auth.user().usuario_empresa.nombre }}</div>-->
						</template>
					</div>
					<div class="dropdown-list">
						
					</div>
					<div v-if="$auth.check()" class="dropdown-list">
						<a href="javascript:" @click="logout">Cerrar sesión</a>
					</div>
				</div>
			</div>
			<div class="profile-nav-mobile">
				<i class="pe-7s-config"></i>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
    import { mapGetters, mapActions } from 'vuex';
	import ajustes from "../../api/ajustes";
    export default {
		  data() {
    return {
    	company_name:[],
    	logo_left:'',
    	logo_right:'',
    	logo_login:[],
		login_img:'images/block50.gif',
      form: {
        uploaded_logo: "",
        titulo: "",
		  login_static_img: '/public/app/images/csicono.png',
		  tituloStatic: 'GTM',
      },
		menu_abierto:true,
    };
  },
		computed: {
			/*...mapGetters({
				ajustesBasicos: 'global/ajustesBasicos'
			}),*/
		},
        methods: {
			   cargar() {
      var self = this;
      ajustes.cargar_imagenes(
        data => {
		 var logo_json = JSON.parse(data[0].valor)
         this.form.uploaded_logo = logo_json[0].file_thumbnail;
        },
        err => {
          console.log(err);
        }
      );
    },
			obtenerAjustesBasicosV2()
			{
				ajustes.cargar_basico(data => {
					var self = this;
					self.company_name = data.company_name;
					var logo_json_left = JSON.parse(data.logo_left.valor);
					self.logo_left = logo_json_left[0].file_thumbnail;
					var logo_json_right = JSON.parse(data.logo_right.valor);
					self.logo_right = logo_json_right[0].file_thumbnail;
					self.logo_login = data.logo_login;
/*
					if(!Object.keys(data).length === 0){
					self.form.uploaded_logo = JSON.parse(data[1].valor);
					} else {
						self.form.uploaded_logo = self.form.login_static_img;
					}

					if(!Object.keys(data).length === 0){
						self.form.titulo = JSON.parse(data[0].valor);
					} else {
						self.form.titulo = self.form.tituloStatic;
					}*/

				}, err => {
							console.log(err);
						});
			},
			/*obtenerAjustesBasicos() {
				this.$store.dispatch('global/obtenerAjustesBasicos').catch((err) => {
					console.log(err)
				})},*/
        	hideAllNotifications() {
        		//$('body').removeClass('mask')
        		$('.quick-link').find('ul').hide()
        		$('.user-profile').find('.dropdown').hide()
        		$('.messages').find('.messages-box').hide()
        		$('.notification').find('.notification-box').find('.notification-content').hide()
        	},
        	initNotification() {
        		var self = this
        		$('.notification').find('.notification-box').each(function() {
        			$(this).on('click', function() {
        				if ($(this).find('.notification-content').is(':visible')) {
        				//	$('body').removeClass('mask')
        					$(this).find('.notification-content').hide()
        				} else {
        					self.hideAllNotifications()
        					//$('body').addClass('mask')
        					$(this).find('.notification-content').show()
        				}
        			})
        		})

        		$('.notification').find('.notification-box').each(function() {
        			$(this).find('.content').slimScroll({
        				color: 'rgb(142, 142, 142)',
        				height: 270
        			})
        		})
        	},
        	initMessages() {
        		var self = this
        		$('.messages').on('click', function() {
        			if ($(this).find('.messages-box').is(':visible')) {
        				//$('body').removeClass('mask')
        				$(this).find('.messages-box').hide()
        			} else {
        				self.hideAllNotifications()
        				//$('body').addClass('mask')
        				$(this).find('.messages-box').show()
        			}
        		})

        		$('.messages').find('.content').slimScroll({
        			color: 'rgb(142, 142, 142)',
        			height: 250
        		})
        	},
        	initQuickLink() {
        		var self = this
        		$('.quick-link').on('click', function() {
        			if ($(this).find('ul').is(':visible')) {
        				//$('body').removeClass('mask')
        				$(this).find('ul').hide()
        			} else {
        				self.hideAllNotifications()
        				//$('body').addClass('mask')
        				$(this).find('ul').show()
        			}
        		})
        	},
        	hideAllMenu() {
        		//$('body').removeClass('mask')
        		$('.user-profile').hide()
        		$('.side-nav').hide()
        	},
        	initProfileNav() {
        		var self = this
        		$('.user-profile').on('click', function() {
        			if ($(window).width() > 400) {
        				if ($(this).find('.dropdown').is(':visible')) {
        					//$('body').removeClass('mask')
        					$(this).find('.dropdown').hide()
        				} else {
        					self.hideAllNotifications()
        					//$('body').addClass('mask')
        					$(this).find('.dropdown').show()
        				}
        			}
        		})
        	},
        	initMobileProfileNav() {
        		var self = this
        		$('.profile-nav-mobile').on('click', function() {
        			if ($('.user-profile').is(':visible')) {
        				//$('body').removeClass('mask')
        				$('.user-profile').hide()
        			} else {
        				self.hideAllMenu()
        				//$('body').addClass('mask')
        				$('.user-profile').show()
        			}
        		})
        	},
        	initMobileNav() {
						var self = this
						//console.log("cambioooo a menos de 1500");
        		$('.side-nav-mobile').on('click', function() {

        			if(self.menu_abierto){
						self.$store.dispatch('global/setNavStyle', 'compact-nav');
						self.menu_abierto=false;
					}else{
						self.$store.dispatch('global/setNavStyle', 'default');
						self.menu_abierto=true;
					}

        			/*if ($('.side-nav').is(':visible')) {
        				//$('body').removeClass('mask')
						//this.$store.dispatch('global/setNavStyle', 'fixed-nav')

						//this.$store.dispatch('global/setNavStyle', 'default')
        				$('.side-nav').hide()
        			} else {
        				//self.hideAllMenu();

        				//$('body').addClass('mask')
        				$('.side-nav').show()
        			}*/
        		})
        	},
        	initResponsiveSideNav() {
        		if ($(window).width() <= 400) {
							
        			$('.side-nav').find('.side-nav-box').slimScroll({
        				color: 'rgb(142, 142, 142)',
        				height: $(window).height() - 60
        			})
        		}
        	},
			logout() {
					this.$auth.logout();
					this.$router.push({
						name: 'login'
					});
					}
        },
        mounted() {
        	this.initResponsiveSideNav()
        	//this.initMobileNav()
        	this.initProfileNav()
        	this.initMobileProfileNav()
        	this.initQuickLink()
        	this.initMessages()
			this.initNotification()
			this.obtenerAjustesBasicosV2()
        },

    }
</script>