<template>
	<div :class="getNavStyle">
		<top-nav></top-nav>
		<div class="wrapper-box">
			<!--<side-nav></side-nav>-->
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import TopNav from './TopNav'
	import SideNav from './SideNav'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		computed: {

			...mapGetters({
				navStyle: 'global/navStyle',
				ajustesBasicos: 'global/ajustesBasicos'
			}),
			getNavStyle() {
					return {
						'wrapper': true,
						'fixed-nav': true,
						'compact-nav': true
					}
			}
		},
		components: {
			'top-nav': TopNav,
			'side-nav': SideNav
		},
		methods: {
			/* obtenerUsuarioActivo() {
                  var user =   JSON.parse(localStorage.getItem('usuario'))
                  if (user !== null) {
                      this.$store.dispatch('global/establecerUsuarioActivo', user)
                  } else {
                      this.$store.dispatch('global/establecerUsuarioActivo', false)
                  }
              },*/
			obtenerAjustesBasicos() {
				this.$store.dispatch('global/obtenerAjustesBasicos').catch((err) => {
					console.log(err)
				})
			},
			setNav() {
				//this.$store.dispatch('global/setNavStyle', 'compact-nav')
				if (this.$route.params.navStyle == 'fixed-menu') {
					this.$store.dispatch('global/setNavStyle', 'fixed-nav')
				} else if (this.$route.params.navStyle == 'compact-menu') {
					this.$store.dispatch('global/setNavStyle', 'compact-nav')
				} else {
					this.$store.dispatch('global/setNavStyle', 'default')
				}
			}
		},
		watch: {
			'$route' (to, from) {
				//  this.setNav()
			}
		},
		/* created() {
             this.obtenerUsuarioActivo()
         },*/
		mounted() {
			this.setNav();
			this.obtenerAjustesBasicos();
		}
	}
</script>
