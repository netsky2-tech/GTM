<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Nuevo Tipo de Afectacion</div>
						<div class="box-description">Formulario para registrar nuevo tipo de Afectacion</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Tipo de Afectación</label>
							<input class="form-control" placeholder="Dígite Tipo de Afectación" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Porcentaje Mínimo</label>
							<input class="form-control" type="number" v-model.number="form.valor">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.valor" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Porcentaje Máximo</label>
							<input class="form-control" type="number" v-model.number="form.valor_maximo">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.valor_maximo" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Cuenta Contable</label>
							<v-select :options="cuentas_contables" label="nombre_cuenta_completo" v-model="form.afectacion_cuenta_contable"  ></v-select>
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.afectacion_cuenta_contable" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'listado-afectaciones' }">
							<button type="button" class="btn btn-default">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Registrar' ? true : false" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import tipo from '../../api/afectaciones'

	export default {
		data() {
			return {
				cuentas_contables:[],
				form: {
					descripcion: '',
					//tipo_afectacion:'',
					valor:0,
					valor_maximo:0,
					afectacion_cuenta_contable:[],
					activo:true
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			nueva() {
				var self = this;
				tipo.nueva({
						}, data => {
							self.cuentas_contables = data.cuentas_contables;
							self.loading= false;
						},
						err => {
					self.loading= false;
							console.log(err);
						})

			},
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'

				tipo.registrar(self.form, data => {
					this.$router.push({
						name: 'listado-afectaciones'
					})
				}, err => {
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