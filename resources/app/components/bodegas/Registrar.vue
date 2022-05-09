<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Nueva Bodega</div>
						<div class="box-description">Formulario para registrar nueva bodega</div>
					</div>
					<form>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Descripción</label>
									<input class="form-control" placeholder="Dígite el nombre del bodega" v-model="form.descripcion">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
									</ul>
								</div>
							</div>

							<!--<div class="col-sm-4">
								<div class="form-group">
									<label for="">Sucursal</label>
									<v-select
											:options="sucursales"
											label="descripcion"
											v-model="form.sucursal"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.sucursal" v-text="message"></li>
									</ul>
								</div>
							</div>-->

							<!--<div class="col-sm-4">
								<div class="form-group">
									<label for="">Zona de costo</label>
									<v-select
											:options="centros_costos_ingresos"
											label="descripcion"
											v-model="form.centros_costos_ingresos"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.centros_costos_ingresos" v-text="message"></li>
									</ul>
								</div>
							</div>-->

							<div class="col-sm-4">
								<div class="form-group">
									<label for="">Tipo Bodega</label>
									<v-select
											:options="tipos_bodegas"
											label="descripcion"
											v-model="form.tipo_bodega"
									></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.tipo_bodega" v-text="message"></li>
									</ul>
								</div>
							</div>

							<!--<div class="col-sm-4">
								<div class="form-group">
									<label class="check-label2"><input type="checkbox"
																	  v-model="form.permite_venta"> Bodega permite ventas</label>
								</div>
							</div>-->

						</div>
					</form>
					<div class="content-box-footer text-right">
						<router-link tag="button" :to="{ name: 'bodegas' }">
							<button type="button" class="btn btn-default">Cancelar</button>
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
	import bodega from '../../api/bodegas'
	import loadingImage from '../../assets/images/block50.gif'

	export default {
		data() {
			return {
				loading:false,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here

				centros_costos_ingresos:[],
				sucursales:[],
				tipos_bodegas:[],
				form: {
					descripcion: '',
					permite_venta: 0,
				},
				btnAction: 'Registrar',
				errorMessages: []
			}
		},
		methods: {

			nuevo() {
				var self = this;
				bodega.nuevo({}, data => {
							self.sucursales = data.sucursales;
							self.centros_costos_ingresos = data.centros_costos_ingresos;
							self.tipos_bodegas = data.tipos_bodega;

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
				bodega.registrar(self.form, data => {
					self.loading = false;
					this.$router.push({
						name: 'bodegas'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			}
		},
		mounted() {
			//this.obtenerTodasSucursales();
			//this.obtenerTodasCuentasContables();
			//this.obtenerTodosTipos();
			this.nuevo();
		}
    }
</script>
<style>
	.check-label2 {
		margin-top: 40px;
	}
</style>