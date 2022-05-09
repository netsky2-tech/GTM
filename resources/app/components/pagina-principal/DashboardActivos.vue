<template>
	<div class="main">
		<div class="simple-welcome-text">
			<div class="text">Módulo Activos Fijos</div>
			<div class="box-description"><a @click="regresar" style="margin-right: 10px;"> Módulos</a>> Módulo Activos Fijos</div>
		</div>

		<template  v-for="(item, index) in submodulos">

			<template  v-if="item.tipo_seccion===1">
				<div class="row">
					<div class="col-md-12">
						<div class="alert alert-success">
							<span><strong>{{item.descripcion}}</strong></span>
						</div>
					</div>
				</div>
				<div class="row">

					<template  v-for="(item2, index2) in item.seccion_menus">
						<template v-if="item2.seccion_menu">
							<div class="col-md-2" style="width: 33%;">
								<div class="module-card">
									<router-link :to="{ name: item2.seccion_menu.nombre_route }">
										<div class="last-post">{{item2.seccion_menu.nombre_menu}}</div>
										<div class="module-image">
											<img :src="item2.seccion_menu.file_thumbnail">
										</div>
									</router-link>
								</div>
							</div>
						</template>
					</template>
				</div>
			</template>

			<br>
			<template  v-if="item.tipo_seccion===2">
				<div class="simple-welcome-text">
					<div class="text">{{item.descripcion}}</div>
				</div>
				<div class="row">
					<template  v-for="(item2, index2) in item.seccion_menus">
						<template v-if="item2.seccion_menu">
							<div class="col-md-3">
								<div class="module-card-small">
									<router-link :to="{ name: item2.seccion_menu.nombre_route }">
										<div class="last-post"><i class="fa fa-book" aria-hidden="true"></i> {{item2.seccion_menu.nombre_menu}}</div>
									</router-link>
								</div>
							</div>
						</template>
					</template>
				</div>
			</template>

		</template>


		<template v-if="loading">
			<BlockUI :message="msg" :url="url"></BlockUI>
		</template>

	</div>
</template>

<script type="text/ecmascript-6">
	import menu from '../../api/menu'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {
				loading: true,
				msg: 'Cargando opciones...espere un momento',
				url: '/public' + loadingImage,   //It is important to import the loading image then use here
				submodulos: [],
			}
		},
		methods: {
			regresar() {
				this.$router.push({
					name: "pagina-principal"
				});
			}
			, obtenerSubModulos() {
				var self = this
				//this.$auth.fetch();
				//console.log(self.$route.meta.IdMenu);
				menu.obtenerSubModulos({id_menu: self.$route.meta.IdMenu}, data => {
					self.submodulos = data.rows
					self.loading = false;
				}, err => {
					console.log(err)
				})
			},
		},

		mounted() {
			this.obtenerSubModulos();
		}
	}
</script>

