<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar cuenta bancaria</div>
						<div class="box-description">Formulario para registrar cuenta bancaria</div>
					</div>
					<form>
							<div class="row">
								<div class="col-sm-4">
								<div class="form-group">
									<label >Tipo de Cuenta</label>
									<select class="form-control" v-model="form.tipo_cuenta">
										<option value="1">Cuenta Corriente</option>
										<option value="2">Déposito a plazos</option>
										<option value="3">Cuenta de Ahorro</option>
									</select>
									<ul class="error-messages">
										<li v-for="message in errorMessages.tipo_cuenta" :key="message" v-text="message"></li>
									</ul>
								</div>
								</div>

								<div class="col-sm-4">
									<div class="form-group">
										<label >Banco</label>
										<v-select
												v-model="form.banco"
												label="descripcion"
												:options="bancos"
										></v-select>
										<ul class="error-messages">
											<li v-for="message in errorMessages.banco" :key="message" v-text="message"></li>
										</ul>
									</div>
								</div>

								<div class="col-sm-4">
									<div class="form-group">
										<label >Moneda</label>
										<select class="form-control" v-model="form.id_moneda">
											<option :key="moneda.id_moneda" :value="moneda.id_moneda" v-for="moneda in monedas">{{ moneda.descripcion }}</option>
										</select>
										<ul class="error-messages">
											<li v-for="message in errorMessages.id_moneda" :key="message" v-text="message"></li>
										</ul>
									</div>
								</div>
						
						
							<div class="col-sm-4">
						<div class="form-group">
							<label > Numero cuenta</label>
							<input class="form-control" v-model="form.numero_cuenta" placeholder="Dígite el Numero de cuenta">
							<ul class="error-messages">
								<li v-for="message in errorMessages.numero_cuenta" :key="message" v-text="message"></li>
							</ul>
						</div>
						</div>

								<div class="col-sm-4">
									<div class="form-group">
										<label > Número Chequera</label>
										<input class="form-control" min="0" type="number" v-model.number="form.numeracion_chequera" placeholder="Dígite la numeración actual de la chequera">
										<ul class="error-messages">
											<li v-for="message in errorMessages.numeracion_chequera" :key="message" v-text="message"></li>
										</ul>
									</div>
								</div>


						<div class="col-sm-4">
              <div class="form-group">
                <label >Cuenta Contable</label>
                <v-select
                  v-model="form.cuenta_contable"
                  label="nombre_cuenta_completo"              
                  :options="cuentas_contables"
                ></v-select>
                <ul class="error-messages">
                  <li v-for="message in errorMessages.cuenta_contable" :key="message" v-text="message"></li>
                </ul>
              </div>
            </div>


  					</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'listado-cuentas-bancarias' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button type="button" class="btn btn-primary" @click="registrar" :disabled="btnAction != 'Registrar' ? true : false">{{ btnAction }}</button>
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
	import cuenta_bancaria from '../../api/cuentas_bancarias'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:true,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				monedas: [],
				cuentas_contables:[],
				bancos:[],
				form: {
					numeracion_chequera: 1,
					numero_cuenta:'',
					nombre_cuenta_bancaria: '',
					tipo_cuenta:1,
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {

			nueva() {
				var self = this;
				cuenta_bancaria.nueva({
						}, data => {

							self.monedas = data.monedas;
							self.cuentas_contables = data.cuentas_contables;
							self.bancos = data.bancos;
							self.loading = false;
						},
						err => {
							console.log(err);
						})

			},

			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				cuenta_bancaria.registrar(self.form, data => {
					self.loading = false;
					this.$router.push({
						name: 'listado-cuentas-bancarias'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		},
		  mounted() {
			this.nueva();
  }
    }
</script>