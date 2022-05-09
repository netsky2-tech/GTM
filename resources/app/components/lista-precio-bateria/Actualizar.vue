<template>
	<div class="main">

		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Modificar catalogo de lista de precio</div>
				<div class="box-description">Formulario para modificar lista de precio</div>
			</div>

			<div class="row">
				<div class="col-sm-3">
					<div class="form-group">
						<label for> Catálogo de listas</label>
						<v-select label="descripcion" v-model="form.descripcion" :disabled="true" :options="catalogos"></v-select>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.descripcion" v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for> Agrupación de lista</label>
						<v-select label="descripcion" v-model="form.grupo" :options="grupos"></v-select>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.grupo" v-text="message"></li>
						</ul>
					</div>
				</div>

				<div class="col-sm-3">
					<div class="form-group">
						<label for>	Bateria</label>
						<v-select label="nombre_comercial" v-model="form.bateria"  :options="baterias"></v-select>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.bateria" v-text="message"></li>
						</ul>
					</div>
				</div>

				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> BCI</label>
						<v-select label="bci" v-model="form.bateria" :disabled="true" :options="baterias"></v-select>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.bci" v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> CCA</label>
						<v-select label="cca" v-model="form.bateria" :disabled="true" :options="baterias"></v-select>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.cca" v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> AMPH</label>
						<input class="form-control" placeholder="Dígite amph" type="number" min="0" v-model="form.amph">
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.amph" v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Placas</label>
						<input class="form-control" placeholder="Dígite placas" type="number" min="0" v-model="form.placas">
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.placas" v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Largo</label>
						<v-select label="largo" v-model="form.bateria" :disabled="true" :options="baterias"></v-select>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.largo" v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Ancho</label>
						<v-select label="ancho" v-model="form.bateria" :disabled="true" :options="baterias"></v-select>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.ancho" v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Alto</label>
						<v-select label="alto" v-model="form.bateria" :disabled="true" :options="baterias"></v-select>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.alto" v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Costo estandar</label>
						<v-select label="costo_estandar" v-model="form.bateria" :disabled="true" :options="baterias"></v-select>
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.costo_estandar" v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Precio público</label>
						<input class="form-control" placeholder="Dígite un precio público" type="number" min="0" v-model="form.precio_publico">
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.precio_publico" v-text="message"></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-3">
					<div class="form-group">
						<label for=""> Precio distribuidor</label>
						<input class="form-control" placeholder="Dígite un precio distribuidor" type="number" min="0" v-model="form.precio_distribuidor">
						<ul class="error-messages">
							<li :key="message" v-for="message in errorMessages.precio_distribuidor" v-text="message"></li>
						</ul>
					</div>
				</div>

				<div class="col-sm-3">
					<div class="form-group">
						<label for>&nbsp;</label>
						<button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar detalle</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<ul class="error-messages">
						<li :key="message" v-for="message in errorMessages.detalleSolicitud" v-text="message"></li>
					</ul>

					<table class="table table-bordered table-responsive">
						<thead>
						<tr>
							<th></th>
							<!--<th style="min-width:300px" >Catalogo de lista</th>-->
							<th style="min-width:200px">Agrupación de lista</th>
							<th style="min-width:200px">Bateria</th>
							<th style="min-width:150px">BCI</th>
							<th style="min-width:150px">CCA</th>
							<th style="min-width:150px">AMPH</th>
							<th style="min-width:150px">Placas</th>
							<th style="min-width:150px">Largo</th>
							<th style="min-width:150px">Ancho</th>
							<th style="min-width:150px">Alto</th>
							<th style="min-width:150px">Costo estandar</th>
							<th style="min-width:150px">Precio público</th>
							<th style="min-width:150px">Precio distribuidor</th>
							<th ></th>
						</tr>
						</thead>
						<tbody>
						<template  v-for="(item, index) in form.lista_producto">
							<tr>
								<td style="width: 2%">
									<button @click="eliminarLinea(item, index)">
										<i class="fa fa-trash"></i>
									</button>
								</td>
								<td>
									<v-select label="descripcion" :disabled="true" v-model="item.lista_grupo" :options="grupos"></v-select>
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.grupo`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									 <input  class="form-control" :disabled="true" type="text" v-model="item.nombre_comercial">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.bateria`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									<input  class="form-control" :disabled="true" type="text" min="0" v-model="item.bci">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.bci`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									<input  class="form-control" :disabled="true" type="number" min="0" v-model="item.cca">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.cca`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									<input  class="form-control" :disabled="true" type="number" min="0" v-model="item.amph">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.amph`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									<input  class="form-control" :disabled="true" type="number" min="0" v-model="item.placas">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.placas`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									<input  class="form-control" :disabled="true" type="number" min="0" v-model="item.largo">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.largo`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									<input  class="form-control" :disabled="true" type="number" min="0" v-model="item.ancho">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.ancho`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									<input  class="form-control" :disabled="true" type="number" min="0" v-model="item.alto">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.alto`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									<input  class="form-control" :disabled="true" type="number" min="0" v-model="item.costo_estandar">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.costo_estandar`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									<input  class="form-control" :disabled="true" type="number" min="0" v-model="item.precio_publico">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.precio_publico`]" v-text="message"></li>
									</ul>
								</td>
								<td>
									<input  class="form-control" :disabled="true" type="number" min="0" v-model="item.precio_distribuidor">
									<ul class="error-messages">
										<li :key="message" v-for="message in errorMessages[`lista_producto.${index}.precio_distribuidor`]" v-text="message"></li>
									</ul>
								</td>
								<!--<td>
                                <strong> {{sub_total(item) | formatMoney(2)}}</strong>
                                </td>-->

							</tr>
							<tr></tr>
						</template>
						</tbody>
						<tfoot>
						<!--<tr>
                            <td colspan="4"></td>
                            <td>Total</td>
                            <td> <strong> {{calcular_total | formatMoney(2)}}</strong></td>
                        </tr>-->
						</tfoot>
					</table>
				</div>
			</div>

			<div class="row">


				<div class="col-md-6">
					<div class="content-box-footer text-left">
						<template v-if="form.estado">
							<button @click="desactivar(form.id_precio_lista_catalogo)" class="btn btn-danger"><i class="fa fa-trash-o">	Desactivar</i></button>
						</template>
						<template v-else>
							<button @click="activar(form.id_precio_lista_catalogo)" class="btn btn-success"><i class="fa fa-check-square">	Habilitar</i></button>
						</template>
					</div>
				</div>

				<div class="col-md-6">
					<div class="content-box-footer text-right">
						<router-link :to="{ name: 'listado-lista-bateria' }" tag="button">
							<button class="btn btn-default" type="button">Cancelar</button>
						</router-link>
						<button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar" class="btn btn-primary" type="button">{{ btnAction }}</button>
					</div>
				</div>
				<template v-if="loading">
					<BlockUI :message="msg" :url="url"></BlockUI>
				</template>
			</div>
		</div>
	</div>

</template>

<script type="text/ecmascript-6">
	import listas from '../../api/lista-precio-baterias'
	import loadingImage from '../../assets/images/block50.gif'
	import es from "vuejs-datepicker/dist/locale/translations/es";

	export default {
		data() {
			return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
				es: es,
				format: "dd-MM-yyyy",
				form: {
					lista:[],
					lista_grupos:[],
					lista_catalogos:[],
					lista_baterias:[],
					amph:0,
					placas:0,
					bateria:'',
					catalogo:'',
					grupo:'',
					bci:'',
					precio_publico:0,
					precio_distribuidor:0,
					detalleLista:[],
				},
				grupos:[],
				catalogos:[],
				baterias:[],
				listas:[],
				btnAction: 'Guardar',
				errorMessages: []
			}
		},
		methods: {
			obtenerZona() {
				var self = this
				//Array(1,2,3).includes(Number(self.$route.params.id_zona)) ? self.SoloLectura = true : self.SoloLectura = false
				listas.obtenerListaBateria({
					id_precio_lista_catalogo: this.$route.params.id_precio_lista_catalogo
				}, data => {
					self.baterias = data.bateria;
					self.grupos = data.grupo;
					self.form = data.catalogo;
					self.loading = false;
				}, err => {
					alertify.error(err.id_precio_lista_catalogo[0],5);
					this.$router.push({
						name: 'listado-lista-bateria'
					});
				})
			},
			actualizar() {
				var self = this
				self.loading = true;
				self.btnAction = 'Guardando, espere......'
				listas.actualizar(self.form, data => {
					alertify.success("Datos actualizados correctamente",5);
					this.$router.push({
						name: 'listado-lista-bateria'
					})
				}, err => {
					self.loading = false;
					self.errorMessages = err
					self.btnAction = 'Guardar'
				})
			},
			agregarDetalle() {
				let self = this;
				if(this.form.bateria){
					let i = 0;
					let keyx = 0;
					if(self.form.lista_producto){
						self.form.lista_producto.forEach((fila, key) => {
							if(self.form.bateria===fila.bateria){
								i++;
								keyx = key;
							}
						});
					}
					if(i === 0) {
						this.form.lista_producto.push({
							catalogo: this.form.catalogo,
							lista_grupo: this.form.grupo,
							id_bateria_detalle : this.form.bateria.id_bateria_detalle,
							id_producto : this.form.bateria.id_producto,
							nombre_comercial: this.form.bateria.nombre_comercial,
							bci: this.form.bateria.bci,
							cca: this.form.bateria.cca,
							amph: this.form.amph,
							placas: this.form.placas,
							largo: this.form.bateria.largo,
							ancho: this.form.bateria.ancho,
							alto: this.form.bateria.alto,
							costo_estandar: this.form.bateria.costo_estandar,
							precio_publico: this.form.precio_publico,
							precio_distribuidor: this.form.precio_distribuidor,
						});
						this.form.catalogo='';
						this.form.grupo ='';
						this.form.bateria='';
						this.form.bci='';
						this.form.cca='';
						this.form.amph='';
						this.form.placas='';
						this.form.largo='';
						this.form.ancho='';
						this.form.alto='';
						this.form.costo_estandar='';
						this.form.precio_publico='';
						this.form.precio_distribuidor='';

					}else{
						alertify.warning("Ya existe un registro con la fecha seleccionada",5);
					}

				}else{
					alertify.warning("Los campos no pueden estar vacíos",5);
				}
			},
			eliminarLinea(item, index) {
				if (this.form.lista_producto.length >= 1) {
					this.form.lista_producto.splice(index, 1);

				}else{
					this.form.lista_producto=[];
				}
			},
			desactivar(zonaId) {
				var self = this;
				self.$swal.fire({
					title: 'Esta seguro de cambiar el estado?',
					text: "",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						//var self = this
						listas.desactivar({
							id_precio_lista_bateria: zonaId
						}, data => {
							alertify.warning("Lista desactivado correctamente", 5);
							this.$router.push({
								name: 'listado-lista-bateria'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			},
			activar(zonaId) {
				var self = this;
				self.$swal.fire({
					title: 'Esta seguro de cambiar el estado?',
					text: "",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Si, confirmar',
					cancelButtonText:'Cancelar'
				}).then((result) => {
					if (result.value) {
						var self = this
						listas.activar({
							id_precio_lista_bateria: zonaId
						}, data => {
							alertify.success("Lista activado correctamente", 5);
							this.$router.push({
								name: 'listado-lista-bateria'
							})
						}, err => {
							console.log(err)
						})
					}else{
						self.btnAction = "Guardar";
					}
				})
			}
		},
		mounted() {
			this.obtenerZona();
		}
	}
</script>

<style>
	.btn-agregar {
		margin-top:33px;
	}
</style>