<template>
	<div class="main">
		<div class="simple-welcome-text">
			<div class="text">Dashboard</div>
			<div class="info">Bienvenido {{ $auth.user().usuario }}, <i class="fa fa-map-marker"></i>{{ $auth.user().rol.descripcion }}</div>
		</div>

		<div class="row">
		<template  v-for="(item, index) in modulos">

			<div class="col-md-2" style="width: 33%;">
				<div class="module-card">
					<router-link :to="{ name: item.nombre_route }">
						<div class="last-post">{{item.nombre_menu}}</div>
						<div class="module-image">
							<img :src="item.file_thumbnail">
						</div>
					</router-link>
				</div>
			</div>

		</template>
		</div>
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
			loading:true,
			msg: 'Cargando módulos...espere un momento',
			url : '/public'+loadingImage,   //It is important to import the loading image then use here
			modulos: [],
		}
	},
	methods: {
		obtenerModulos(){
			var self = this
			//this.$auth.fetch();
			menu.obtenerModulos(data => {
				self.modulos = data.rows
				self.loading=false;
			}, err => {
				console.log(err)
			})
		}
	},
	mounted() {
		this.obtenerModulos();
	}

}
</script>

