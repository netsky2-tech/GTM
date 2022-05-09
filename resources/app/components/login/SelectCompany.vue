<template>
	<div class="main">
		<div class="row">
			<template v-if="form.countCompany >= 2">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Seleccionar compañía</div>
						<div class="box-description">Formulario para iniciar sesión con empresa seleccionada</div>
					</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label for=""> Usuario</label>
									<input class="form-control" :disabled="true" type="text" v-model="form.name">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<label class="label-search">Empresas:</label>
									<v-select label="nombre" v-model="form.company" :options="companies"></v-select>
								</div>
							</div>
						</div>

					<div class="content-box-footer text-right">
						<button :disabled="btnAction != 'Acceder' ? true : false" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
					</div>
				</div>
			</div>
			</template>
			<template v-if="loading">
				<BlockUI :message="msg" :url="url"></BlockUI>
			</template>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import settings from '../../api/setting.js'
	import loadingImage from '../../assets/images/block50.gif'
	export default {
		data() {
			return {

				loading:true,
				msg: 'Verificando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					company: [],
					id_company:'',
					countCompany:'',
					usuario: [],
					name:'',
					descripcion: '',
				},
				companies:[],
				btnAction: 'Acceder',
				errorMessages: []
			}
		},
		methods: {
			nuevo(){
				var self = this;
				self.loading = true;
				settings.nueva({}, data => {
					self.form.countCompany = data.countCompany;
					if(self.form.countCompany === 1){
					self.form.company = data.companies[0];
                    }else{
					    self.companies = data.companies
					}
					self.form.usuario = data.usuario;
					self.form.name = data.usuario.text;
					if(self.form.countCompany === 1){
					    this.registrar();
					//self.loading = false;
                    }else{
					    self.loading = false;
                    }
				}, err => {
					self.loading = false;
					console.log(err)
				})
			},
			registrar() {
				var self = this;
				self.btnAction = 'Accediendo, espere....';
				self.loading = true;
				if(self.form.usuario.two_factor_email_available === true) {
                    settings.saveCompany(self.form, data => {
                        alertify.success("Datos cargados correctamente", 5);
                        //this.$router.push({name: 'pagina-principal'});
                        this.$router.push({name: 'two-factor-verify'});
                        self.loading = false;

                    }, err => {
                        self.loading = false;
                        self.errorMessages = err;
                        self.btnAction = 'Acceder'
                    })
                }else {
                    settings.saveCompany(self.form, data => {
                        alertify.success("Datos cargados correctamente", 5);
                        this.$router.push({name: 'pagina-principal'});
                        //this.$router.push({name: 'two-factor-verify'});
                        self.loading = false;

                    }, err => {
                        self.loading = false;
                        self.errorMessages = err;
                        self.btnAction = 'Acceder'
                    })
                }
			},
		},
		mounted() {
			this.nuevo();
		}
	}
</script>
<style>

</style>
