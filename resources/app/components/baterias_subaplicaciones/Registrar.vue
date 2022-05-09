<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar subaplicacion</div>
						<div class="box-description">Formulario para registrar subaplicacion</div>
					</div>
					<form>

							<div class="row">

								<div class="col-sm-3">
									<div class="form-group">
										<label for=""> Descripción</label>
										<input class="form-control" placeholder="Dígite el nombre de la subaplicacion" v-model="form.descripcion">
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
										</ul>
									</div>
								</div>

							<div class="col-sm-3">
              <div class="form-group">
                <label for="">Aplicación</label>
                <v-select
                  :options="aplicaciones"
                  label="descripcion"
                  v-model="form.aplicacion"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.aplicacion" v-text="message"></li>
                </ul>
              </div>
            </div>

  					</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-subaplicaciones' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Registrar' ? true : false" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
					</div>

					<template v-if="loading">
						<BlockUI :message="msg" :url="url"></BlockUI>
					</template>

				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import aplicaciones from '../../api/baterias_aplicaciones'
	import subaplicacion from '../../api/baterias_subaplicaciones'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				aplicaciones:[],
				form: {
					descripcion: '',
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
 		obtenerTodosAplicaciones() {
 			var self = this;
        	aplicaciones.obtenerTodos(
         	 data => {
           	 self.aplicaciones = data;
         	 },
         	 err => {
           	 console.log(err);
          }
        );
      
		},

			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				subaplicacion.registrar(self.form, data => {
					self.loading = false;
					this.$router.push({
						name: 'listado-subaplicaciones'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		},
		  mounted() {
    this.obtenerTodosAplicaciones();
  }
    }
</script>
