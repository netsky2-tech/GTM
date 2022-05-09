<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Registrar Sucursal</div>
						<div class="box-description">Formulario para registrar Sucursal</div>
					</div>
					<form>
						<div class="form-group">
							<label for=""> Nombre sucursal</label>
							<input class="form-control" placeholder="Dígite el nombre del sucursal" v-model="form.descripcion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Serie para facturación</label>
							<input class="form-control" placeholder="Dígite la seria para facturación" v-model="form.serie">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.serie" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Numeración actual facturación</label>
							<input class="form-control" placeholder="Dígite la seria para facturación" v-model.number="form.numeracion_facturacion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.numeracion_facturacion" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Télefonos</label>
							<input class="form-control" placeholder="Dígite los télefonos de la sucursal" v-model="form.telefonos">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.telefonos" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Dirección</label>
							<input class="form-control" placeholder="Dígite la dirección de la sucursal" v-model="form.direccion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.direccion" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> No. Autorización</label>
							<input class="form-control" placeholder="Dígite el número de autorización" v-model="form.numero_autorizacion">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.numero_autorizacion" v-text="message"></li>
							</ul>
						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-sucursales' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction !== 'Registrar'" @click="registrar" class="btn btn-primary" type="button">{{ btnAction }}</button>
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
	import sucursal from '../../api/sucursales'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				form: {
					descripcion: '',
					serie:'',
					telefonos:'',
					direcciones:'',
                    numero_autorizacion:'',
					numeracion_facturacion:0
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {
			registrar() {
				var self = this
				self.btnAction = 'Registrando, espere....'
				self.loading = true;
				sucursal.registrar(self.form, data => {
					self.loading = false;
					alertify.success("Sucursal registrada exitosamente", 5);
					this.$router.push({
						name: 'listado-sucursales'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
					self.btnAction = 'Registrar'
				})
			}
		}
	}
</script>
