<template>
<div id="main">
	<div class="wrapper"> 
		<div class="wrapper-box"> 
	<div class="main">
		<div class="not-found-box">
			<div class="logo">
				<img style="width: 250px;height: 100%; justify-content: center;" v-bind:src="this.form.img_cheems" alt="IMG" >
			</div>
			<br>
			<div class="not-found-footer">
			</div>
			<div class="error-code">403</div>
			<div class="error-status">Usted no tiene permisos para visitar esta Página</div>
			<div class="error-text">Oops, algo salió mal...</div>
			<div class="not-found-footer">
				<form class="form-inline justify-content-center">
					<a @click="$router.go(-1)"> <i class="fa fa-arrow-left">	Regresar a página anterior</i></a>
				</form>
			</div>
		</div>
	</div>
	</div>
	</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import ajustes from "../../api/ajustes";
	/*import cheems from '../../assets/images/unnamed.png'*/
    export default {
		  data() {
    return {
      form: {
        uploaded_logo: "",
		  img_cheems: cheems,
      },
		titulo:'Inicio de sesión',
		login_img:'images/block50.gif',
		login_static_img: 'images/capsoft-login.png',
    };
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
        },
        mounted() {
			 //this.cargar()
        }
    }
</script>