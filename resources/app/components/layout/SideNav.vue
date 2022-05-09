<template>
	<div class="side-nav">
		<div class="side-nav-box">
			<template v-for="(menuSection, key) in menuSections">
				<div class="title"><strong>{{ key }}</strong></div>
				<div class="main-menu">
					<ul>
						<li v-if="menu.id_menu_padre == 0" v-for="menu in menuSection">
							<router-link  :to="routeTo(menu)" v-if="menu.cantidad_hijos ==0">
								<i :class="menu.icon"></i> 
								<span>{{ menu.nombre_menu }}</span>
								<!--<div class="count" v-if="menu.cantidad_hijos >0">{{ menu.cantidad_hijos }}</div>-->
							</router-link>

							<a  v-if="menu.cantidad_hijos > 0">
								<i :class="menu.icon"></i>
								<span>{{ menu.nombre_menu }}</span>
								<!--<div class="count" v-if="menu.cantidad_hijos >0">{{ menu.cantidad_hijos }}</div>-->
							</a>

							<ul v-if="menu.cantidad_hijos > 0">
								<li v-if="childMenu.id_menu_padre == menu.id_menu" v-for="childMenu in menuSection">
									<router-link :to="routeTo(childMenu)" exact>{{ childMenu.nombre_menu }}</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</template>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import { mapGetters, mapActions } from 'vuex'

	export default {
		computed: mapGetters({
            menuSections: 'global/menuSections'
        }),
        watch: {
        	menuSections() {
        		this.$nextTick(() => {
					this.initNav()
				})
        	}
		},
		methods: {
			randNumber(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min
			},
			routeTo(menu) {
				var route = {
					name: menu.nombre_route
				};

				return route
			},
			initNav() {
				$('.side-nav').find('.main-menu').find('a').each(function() {
					if ($(this).parent().find('ul').length > 0) {
						$(this).attr('href', 'javascript:;')
					}

					$(this).off()
					$(this).on('click', function() {
						var li = $(this).parent()
						if ($(li).parent().parent().hasClass('main-menu')) {
							if (!$(li).hasClass('active')) {
								$('.side-nav').find('.main-menu > ul > li').removeClass('active')
								$(li).addClass('active')
							} else {
								$(li).removeClass('active')
								//$(li).removeClass('active2')
							}
						}
					})
				})
			},
			obtenerMenusUsuario() {
				this.$store.dispatch('global/obtenerMenusUsuario').catch((err) => {
                    console.log(err)
                })
			}
		},
		mounted() {
			this.obtenerMenusUsuario()
		}
    }
</script>
<style lang="scss" scoped>
	.selected{
		background-color: #ca3232;
	}
</style>