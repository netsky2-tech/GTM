<template>
	<div class="main">
		<div class="row">
			<div class="col-md-12">
				<div class="content-box">
					<div class="content-box-header">
						<div class="box-title">Crear Nueva Cuenta Contable</div>
						<div class="box-description">Formulario para registrar Nueva Cuenta Contable</div>
					</div>
					<form>

						<div class="row">

							<div class="col-sm-4">
								<div class="form-group">
									<label for="">Cuenta Padre</label>
									<div class="form-group">
										<input class="form-control" disabled placeholder="Cuenta Padre" v-model="form.nombre_padre">
									</div>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.nombre_padre" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-2">
								<div class="form-group">
									<label for=""> Código cuenta padre</label>
									<input class="form-control" disabled placeholder="Código heredado" v-model="cta_contable">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.cta_contable" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-2">
								<div class="form-group">
									<label for="">Código nueva Cuenta</label>
									<input disabled :maxlength="3" @change="form.codigo_cuenta = Math.max(Math.min(Math.round(form.codigo_cuenta), form.nivel_cuenta.codigo_maximo), 1)" class="form-control" placeholder="Dígite código único de cuenta" type="number" v-model="form.codigo_cuenta">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.codigo_cuenta" v-text="message"></li>
									</ul>
								</div>
							</div>


							<div class="col-sm-2">
								<div class="form-group">
									<label for=""> Nuevo Código</label>
									<input :value="(form.nivel_cuenta.id_nivel_cuenta === 2) ? niv1+form.codigo_cuenta+niv3+niv4+'-'+niv5+'-'+niv6+niv7 :
												(form.nivel_cuenta.id_nivel_cuenta === 3)? niv1+niv2+form.codigo_cuenta+niv4+'-'+niv5+'-'+niv6+niv7  :
												(form.nivel_cuenta.id_nivel_cuenta === 4)? niv1+niv2+niv3+form.codigo_cuenta+'-'+niv5+'-'+niv6+niv7  :
												(form.nivel_cuenta.id_nivel_cuenta === 5)? niv1+niv2+niv3+niv4+'-'+(form.codigo_cuenta < 10 && form.codigo_cuenta > 0 ? '0'+form.codigo_cuenta : form.codigo_cuenta )+'-'+niv6+niv7  :
												(form.nivel_cuenta.id_nivel_cuenta === 6)? niv1+niv2+niv3+niv4+'-'+niv5+'-'+((form.codigo_cuenta < 10 && form.codigo_cuenta > 0) ? '00'+form.codigo_cuenta :(form.codigo_cuenta < 100 && form.codigo_cuenta > 10) ? '0'+form.codigo_cuenta: form.codigo_cuenta )+niv7
												 :''" class="form-control" placeholder="Código concatenado"
										   readonly>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.cta_contable" v-text="message"></li>
									</ul>
								</div>
							</div>

							<!--<div class="col-sm-2">
                    <div class="form-group">
                        <label for=""> Nuevo Código</label>
                        <input disabled class="form-control" placeholder="Código concatenado" :value="cta_contable+ (form.codigo_cuenta < 10 && form.codigo_cuenta > 0  && form.nivel_cuenta.id_nivel_cuenta > 2 ? '0'+form.codigo_cuenta : form.codigo_cuenta )">
                        <ul class="error-messages">
                            <li v-for="message in errorMessages.cta_contable" :key="message" v-text="message"></li>
                        </ul>
                    </div>
                    </div>-->

							<div class="col-sm-4">
								<div class="form-group">
									<label for=""> Nombre cuenta</label>
									<input class="form-control" placeholder="Dígite Nombre de la cuenta" v-model="form.nombre_cuenta">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages.nombre_cuenta" v-text="message"></li>
									</ul>
								</div>
							</div>

							<div class="col-sm-4">
								<div class="form-group">
									<label class="check-label2"><input type="checkbox"
																	  v-model="form.permite_movimiento"> Cuenta permite movimientos</label>
								</div>
							</div>
						</div>

						<div>
							<div class="alert alert-info">
								<span>Las cuentas que permiten movimientos se utilizan directamente en la creación de documentos contables, las cuentas que no permiten movimientos (cuentas tipo SUMA) son las que solamente reflejan la sumatoria de las subcuentas que posean</span>
							</div>
							<hr>
						</div>

					</form>
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'cuentas-contables' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Registrar' ? true : false" @click="guardarCuentaContable" class="btn btn-primary" type="button">{{ btnAction }}</button>
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
	import cuentas_contables from '../../api/cuentas_contables'
	import nivel_cuenta from '../../api/niveles_cuentas'
	import loadingImage from '../../assets/images/block50.gif'
	export default {

		data() {
			return {
				loading:true,
				msg: 'Guardando los datos, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				cta_contable: "",
				niv1: "",
				niv2: "",
				niv3: "",
				niv4: "",
				niv5: "",
				niv6: "",
				niv7: "",
				id_nivel_cuenta_n:"",
				form: {
					nombre_cuenta: "",
					codigo_cuenta: "",
					cta_contable: "",
					cuenta_padre: {},
					nombre_padre: "",
					tipo_cuenta: "",
					nivel_cuenta: "",
					permite_movimiento: 0
				},
				btnAction: "Registrar",
				errorMessages: []
			}
		},
		methods: {

			obtenerNivelCuenta() {
				var self = this
				nivel_cuenta.obtenerNivelCuenta({
					id_nivel_cuenta: self.id_nivel_cuenta_n
				}, data => {
					self.loading=false;
					self.form.nivel_cuenta = data
				}, err => {
					self.loading=false;
					alertify.error(err.id_nivel_cuenta[0],5);
				})
			},

			obtenerCuentaContablePadre() {
				var self = this;
				var padre = '';
					cuentas_contables.obtenerCuentaContableV(
							{
								id_cuenta_contable: this.$route.params.id_cuenta_contable_padre
							},
							data => {
								self.form.cuenta_padre = data;
								padre = data;
								self.form.nombre_padre=self.form.cuenta_padre.nombre_cuenta;
								self.cta_contable = self.form.cuenta_padre.cta_contable;
								self.niv1 = self.form.cuenta_padre.niv1;
								self.niv2 = self.form.cuenta_padre.niv2;
								self.niv3 = self.form.cuenta_padre.niv3;
								self.niv4 = self.form.cuenta_padre.niv4;
								self.niv5 = self.form.cuenta_padre.niv5;
								self.niv6 = self.form.cuenta_padre.niv6;
								self.niv7 = self.form.cuenta_padre.niv7;
								self.form.tipo_cuenta = self.form.cuenta_padre.cuenta_tipo;
								self.form.codigo_cuenta = self.form.cuenta_padre.codigo_siguiente;
								self.id_nivel_cuenta_n=Number(self.form.cuenta_padre.id_nivel_cuenta)+1;
								//Number(form.cuenta_padre.cuenta_nivel.id_nivel_cuenta)+1
								this.obtenerNivelCuenta();

							},
							err => {
								//console.log(err);
								alertify.error(err.id_cuenta_contable[0],5);
								this.$router.push({
									name: "cuentas-contables"
								});
							}
					);

			},

			guardarCuentaContable() {
				var self = this
				self.btnAction = 'Registrando, espere....'

				self.form.cta_contable =
				(self.form.nivel_cuenta.id_nivel_cuenta === 2) ? self.niv1+self.form.codigo_cuenta+self.niv3+self.niv4+'-'+self.niv5+'-'+self.niv6+self.niv7 :
						(self.form.nivel_cuenta.id_nivel_cuenta === 3)? self.niv1+self.niv2+self.form.codigo_cuenta+self.niv4+'-'+self.niv5+'-'+self.niv6+self.niv7  :
								(self.form.nivel_cuenta.id_nivel_cuenta === 4)? self.niv1+self.niv2+self.niv3+self.form.codigo_cuenta+'-'+self.niv5+'-'+self.niv6+self.niv7  :
										(self.form.nivel_cuenta.id_nivel_cuenta === 5)? self.niv1+self.niv2+self.niv3+self.niv4+'-'+(self.form.codigo_cuenta < 10 && self.form.codigo_cuenta > 0 ? '0'+self.form.codigo_cuenta : self.form.codigo_cuenta )+'-'+self.niv6+self.niv7  :
												(self.form.nivel_cuenta.id_nivel_cuenta === 6)? self.niv1+self.niv2+self.niv3+self.niv4+'-'+self.niv5+'-'+((self.form.codigo_cuenta < 10 && self.form.codigo_cuenta > 0) ? '00'+self.form.codigo_cuenta :(self.form.codigo_cuenta < 100 && self.form.codigo_cuenta > 10) ? '0'+self.form.codigo_cuenta: self.form.codigo_cuenta )+self.niv7
														:'';

				cuentas_contables.guardarCuentaContable(self.form, data => {
					alertify.success("Cuenta contable registrada exitosamente", 5);
					this.$router.push({
						name: 'cuentas-contables'
					})
				}, err => {
					self.errorMessages = err
                   	self.btnAction = 'Registrar'
				})
			},

		 isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode === 46) {
        evt.preventDefault();;
      } else {
        return true;
      }
    }
		},
		  mounted() {
    this.obtenerCuentaContablePadre();

  }
    }
</script>

<style lang="scss" scoped>
.check-label2 {
  margin-top: 40px;
}
</style>
