<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar municipio</div>
						<div class="box-description">Formulario para registrar municipio</div>
					</div>
					<form>

							<div class="row">
							<div class="col-sm-3">
						<div class="form-group">
							<label for=""> Código</label>
							<input class="form-control" placeholder="Dígite el codigo de municipio" v-model="form.codigo">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.codigo" v-text="message"></li>
							</ul>
						</div>
						</div>

								<div class="col-sm-3">
									<div class="form-group">
										<label for=""> Descripción</label>
										<input class="form-control" placeholder="Dígite el nombre del municipio" v-model="form.descripcion">
										<ul class="error-messages">
											<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
										</ul>
									</div>
								</div>

							<div class="col-sm-3">
              <div class="form-group">
                <label for="">Departamento</label>
                <v-select
                  :options="departamentos"
                  label="descripcion"
                  v-model="form.departamento"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.departamento" v-text="message"></li>
                </ul>
              </div>
            </div>

  					</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-municipios' }" tag="button">
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
	import departamentos from '../../api/departamentos'
	import municipio from '../../api/municipios'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				departamentos:[],
				form: {
					descripcion: '',
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
 		obtenerTodosDepartamentos() {
				var self = this;
        departamentos.obtenerTodos(
          data => {
            self.departamentos = data;
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
				municipio.registrar(self.form, data => {
					self.loading = false;
					this.$router.push({
						name: 'listado-municipios'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		},
		  mounted() {
    this.obtenerTodosDepartamentos();
  }
    }
</script>