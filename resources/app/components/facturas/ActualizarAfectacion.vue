<template>
	<div class="main">
	
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Modificar Tipo de Afectación</div>
						<div class="box-description">Formulario para modificar Tipo de Afectación</div>
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
							<label for=""> Porcentaje Minimo</label>
							<input class="form-control" type="number" v-model.number="form.valor">
							<ul class="error-messages">
								<li :key="message" v-for="message in errorMessages.valor" v-text="message"></li>
							</ul>
						</div>
						<div class="form-group">
							<label for=""> Porcentaje Maximo</label>
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

					<div class="row">
						<div class="col-md-6">
							<div class="content-box-footer text-left">
								<template v-if="form.activo">
									<button @click="desactivar(form.id_afectacion)" class="btn btn-danger"><i class="fa fa-trash-o">	Eliminar</i></button>
								</template>
								<template v-else>
									<button @click="activar(form.id_afectacion)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
								</template>
							</div>
						</div>

						<div class="col-md-6">
							<div class="content-box-footer text-right">
								<router-link :to="{ name: 'listado-afectaciones' }" tag="button">
									<button class="btn btn-default" type="button">Cancelar</button>
								</router-link>
								<button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar" class="btn btn-primary" type="button">{{ btnAction }}</button>
							</div>
						</div>

					</div>
				</div>
			</div>
	
</template>

<script type="text/ecmascript-6">
	import tipo_afectacion from '../../api/afectaciones'

	export default {
		data() {
			return {
				cuentas_contables:[],
				form: {
					descripcion: '',
					//tipo_afectacion:'',
					valor:0,
					valor_maximo: 0,
					id_cuenta_contable:'',
					activo:''
				},
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerAfectacion() {
				var self = this
				tipo_afectacion.obtenerAfectacion({
					id_afectacion: self.$route.params.id_afectacion
				}, data => {
					self.form = data.afectacion
					self.cuentas_contables = data.cuentas_contables
				}, err => {
					alertify.error(err.id_afectacion[0],5);
					this.$router.push({
						name: 'listado-afectaciones'
					});
				})

				
			},

			desactivar(tipoId) {
				var self = this
				tipo_afectacion.desactivar({
						id_afectacion: tipoId
					}, data => {
						alertify.warning("Tipo de afectación desactivado correctamente",5);
						this.$router.push({
							name: 'listado-afectaciones'
						})
					}, err => {
						console.log(err)
					})
			},
			activar(tipoId) {
				var self = this
				tipo_afectacion.activar({
					id_afectacion: tipoId
				}, data => {
					alertify.success("Tipo de afectación activado correctamente",5);
					this.$router.push({
						name: 'listado-afectaciones'
					})
				}, err => {
					console.log(err)
				})
			},
			
			actualizar() {
				var self = this
				self.btnAction = 'Guardando, espere......'
				tipo_afectacion.actualizar(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'listado-afectaciones'
					})
				}, err => {
					self.errorMessages = err
                   	self.btnAction = 'Guardar'
				})
			}
		},
		mounted() {
			this.obtenerAfectacion()
		}
    }
</script>