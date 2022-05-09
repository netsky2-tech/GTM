<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar submarca</div>
						<div class="box-description">Formulario para registrar submarca</div>
					</div>
					<form>

							<div class="row">
						<div class="col-sm-3">
									<div class="form-group">
										<label for=""> Descripción</label>
										<input class="form-control" placeholder="Dígite el nombre del submarca" v-model="form.descripcion">
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
										</ul>
									</div>
								</div>

							<div class="col-sm-3">
              <div class="form-group">
                <label for="">Marca</label>
                <v-select
                  :options="marcas"
                  label="descripcion"
                  v-model="form.marca"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.marca" v-text="message"></li>
                </ul>
              </div>
            </div>

								<div class="col-sm-3">
									<div class="form-group">
										<label class="check-label2"><input type="checkbox"
																		   v-model="form.genera_comision"> Genera Comisión</label>
									</div>
								</div>

  					</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-submarcas' }" tag="button">
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
	import marcas from '../../api/baterias_marcas'
	import submarca from '../../api/baterias_submarcas'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				marcas:[],
				form: {
					descripcion: '',
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
 		obtenerTodosMarcas() {
				var self = this;
        marcas.obtenerTodos(
          data => {
            self.marcas = data;
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
				submarca.registrar(self.form, data => {
					self.loading = false;
					this.$router.push({
						name: 'listado-submarcas'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		},
		  mounted() {
    this.obtenerTodosMarcas();
  }
    }
</script>
<style>

	.check-label2 {
		margin-top: 40px;
	}

</style>