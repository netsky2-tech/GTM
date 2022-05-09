<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Menu</div>
						<div class="box-description">Formulario para modificar menu</div>
					</div>
					<form>
					<div class="row">
						<div class="col-sm-12">
								<div class="form-group">
							<label for=""> Nombre del menu</label>
							<input class="form-control" placeholder="Digita nombre del menu" v-model="form.nombre_menu" >
							<ul class="error-messages">
								<li v-for="message in errorMessages.nombre_menu" :key="message" v-text="message"></li>
							</ul>
						</div> </div>

						<div class="col-sm-12">
								<div class="form-group">
							<label for=""> Icono</label>
									<div class="uploader">
										<button
												type="button"
												class="btn btn-primary"
												id="uploader-button"
										>Escoger Imagen</button>
									</div>
							<ul class="error-messages">
								<li v-for="message in errorMessages.icon" :key="message" v-text="message"></li>
							</ul>
						</div> </div></div>
					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'menus' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button type="button" class="btn btn-primary" @click="actualizarMenu" :disabled="btnAction != 'Guardar' ? true : false">{{ btnAction }}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import menu from '../../api/menu'
	export default {
		data() {
			return {
				menus: [],
				form: {
					icon: '',
					nombre_menu: ''
				},
				btnAction: 'Guardar',
				errorMessages: [],
				secciones:[],
				menu_padres:[]
			}
		},
		methods: {
			initUploader() {
				var self = this;
				this.uploader = $("#uploader-button").uploader({
					upload_url: window.location.origin + "/public/media/upload",
					file_picker_url: window.location.origin + "/public/media/get-icon-files",
					input_name: "uploaded_logo",
					maximum_total_files: 1,
					maximum_file_size: 5000000,
					file_types_allowed: ["image/jpeg", "image/png"],
					on_before_upload: function() {
						self.btnAction = "Subiendo imágenes...";
					},
					on_success_upload: function() {
						self.btnAction = "Guardar";
					},
					on_error: function(err) {
						console.log(err);
					}
				});

			},
			obtenerMenuEspecifico() {
				var self = this
				menu.obtenerMenuEspecifico({
					id_menu: this.$route.params.id_menu
				}, data => {
					self.form = data
					self.uploader.set_files(data.icon);
				}, err => {
					console.log(err)
				//alertify.error(err.id_menu[0],5);
          		this.$router.push({
            	name: 'menus'
          		});
				})
			},
			obtenerLogo() {
				var uploaded_logo = $('input[name="uploaded_logo"]').val();
				if (JSON.parse(uploaded_logo).length) {
					return uploaded_logo;
				} else {
					return "";
				}
			},
			actualizarMenu() {
				var self = this
				self.btnAction = 'Guardando, espere......'
				self.form.icon = this.obtenerLogo();
				menu.actualizarMenu(self.form, data => {
					alertify.success("Datos del menú actualizados",5);
					this.$router.push({
						name: 'menus'
					})
				}, err => {
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			},
		},
		mounted() {
			this.initUploader();
			this.obtenerMenuEspecifico()

		}
    }
</script>