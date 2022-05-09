<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Modificar Proveedor</div>
                <div class="box-description">Formulario para modificar proveedor</div>
            </div>
            <form>
                <div class="row">

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label > Código</label>
                            <input class="form-control" placeholder="Código del proveedor"  v-model="form.codigo">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.codigo" v-text="message"></li>
                            </ul>
                        </div>
                    </div>
                    <!--<div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Tipo Proveedor</label>
                            <input class="form-control" placeholder="Tipo Proveedor" readonly
                                   v-model="form.proveedor_tipo.descripcion">
                        </div>
                    </div>-->

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="">Tipo Persona</label>
                            <select class="form-control" v-model.number="form.tipo_persona">
                                <option value="1">Natural</option>
                                <option value="2">Jurídico</option>
                            </select>
                        </div>
                    </div>

                    <!--<div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Tipo Suplidor</label>
                            <select disabled class="form-control" v-model.number="form.clasificacion_contable">
                                <option value="1">Proveedor</option>
                                <option value="2">Acreedor</option>
                            </select>
                        </div>
                    </div>-->

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Número RUC</label>
                            <input class="form-control" v-mask="'A#############'" placeholder="Número RUC" v-model="form.numero_ruc">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.numero_ruc" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Número Cédula</label>
                            <input class="form-control"  v-mask="'#############A'" placeholder="Número Cédula" v-model="form.numero_cedula">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.numero_cedula" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Nombre Comercial</label>
                            <input class="form-control" placeholder="Nombre Comercial" v-model="form.nombre_comercial">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.nombre_comercial"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Razón Social</label>
                            <input class="form-control" placeholder="Razón Social" v-model="form.razon_social">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.razon_social" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Páguese a</label>
                            <input class="form-control" placeholder="Páguese a" v-model="form.paguese_a">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.paguese_a" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Teléfono</label>
                            <input class="form-control" placeholder="Teléfono proveedor" v-model="form.telefono">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.telefono" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Contacto</label>
                            <input class="form-control" placeholder="Contacto" v-model="form.contacto_proveedor">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.contacto_proveedor"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Teléfono Contacto</label>
                            <input class="form-control" placeholder="Teléfono Contacto"
                                   v-model="form.telefono_contacto">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.telefono_contacto"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Correo Contacto</label>
                            <input class="form-control" placeholder="Correo Contacto" v-model="form.correo_contacto">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.correo_contacto"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                   <!-- <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Dirección Entrega</label>
                            <input class="form-control" placeholder="Dirección Entrega" v-model="form.direccion">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.direccion" v-text="message"></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for=""> Días Crédito</label>
                            <select class="form-control" v-model.number="form.plazo_credito">
                                <option value=0>Contado</option>
                                <option value=8>Trámite de Cheque (8 días)</option>
                                <option value=15>Crédito (15 días)</option>
                                <option value=30>Crédito (30 días)</option>
                                <option value=45>Crédito (45 días)</option>
                            </select>

                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.plazo_credito" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="check-label2"><input type="checkbox"
                                                               v-model="form.es_extranjero"> Proveedor Extranjero</label>
                        </div>
                    </div>-->

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="">Departamento</label>
                            <v-select
                                    :options="departamentos"
                                    label="descripcion"
                                    v-model="form.departamento"
                                    v-on:input="obtenerMunicipios()"
                            ></v-select>
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.departamento" v-text="message"></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="">Municipio</label>
                            <v-select
                                    :options="municipios"
                                    label="descripcion"
                                    v-model="form.municipio_proveedor"
                            ></v-select>
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.municipio_proveedor"
                                    v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-12">
                        <div class="form-group">
                            <label for=""> Observaciones</label>
                            <input class="form-control" placeholder="Observaciones" v-model="form.observaciones">
                            <ul class="error-messages">
                                <li :key="message" v-for="message in errorMessages.observaciones" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </form>

            <div class="row">
                <div class="col-md-6">
                    <div class="content-box-footer text-left">
                        <template v-if="form.activo">
                            <button @click="desactivar(form.id_proveedor)" class="btn btn-danger"><i
                                    class="fa fa-trash-o"> Eliminar</i></button>
                        </template>
                        <template v-else>
                            <button @click="activar(form.id_proveedor)" class="btn btn-success"><i
                                    class="fa fa-check-square"> Habilitar</i></button>
                        </template>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'proveedores' }" tag="button">
                            <button class="btn btn-default" type="button">Cancelar</button>
                        </router-link>
                        <button :disabled="btnAction != 'Guardar' ? true : false" @click="actualizar"
                                class="btn btn-primary" type="button">{{ btnAction }}
                        </button>
                    </div>
                </div>
				<template v-if="loading">
					<BlockUI :message="msg" :url="url"></BlockUI>
				</template>
            </div>


            <div class="content-box-footer text-right">

            </div>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    import proveedor from '../../api/proveedores'
	import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
                departamentos: [],
                municipios: [],
                form: {
                    departamento: '',
                    direccion: '',
                    codigo: '',
                    contacto_proveedor: '',
                    razon_social: '',
                    numero_ruc: '',
                    proveedor_tipo: '',
                    clasificacion_contable: '',
                    es_extranjero:false,

                },
                btnAction: 'Guardar',
                errorMessages: []
            }
        },
        methods: {
            obtenerProveedor() {
                var self = this
                //self.SoloLectura = [1].includes(Number(self.$route.params.id_proveedor))
                proveedor.obtenerProveedor({
                    id_proveedor: this.$route.params.id_proveedor
                }, data => {
                    if (data !== null) {
                        self.form = data.proveedor
                        self.departamentos = data.departamentos;
						self.loading = false;
                        if (self.form.municipio_proveedor) {
                            self.departamentos.forEach((departamentox, indice) => {
                                if (departamentox.id_departamento === self.form.municipio_proveedor.id_departamento) {
                                    self.form.departamento = self.departamentos[indice];
                                    self.municipios = self.form.departamento.municipios_departamento
                                }
                            });
                        }
                        //self.form.municipio_proveedor
                    } else {
                        this.$router.push({
                            name: 'proveedores'
                        })
                        alertify.warning('Lo sentimos no hemos encontrado registros');
                    }
                }, err => {
                    console.log(err)
                    alertify.warning('Lo sentimos no hemos encontrado registros');
                    this.$router.push({
                        name: 'proveedores'
                    })
                })
            },
            actualizar() {
                var self = this
				self.loading = true;
                self.btnAction = 'Guardando, espere......'
                //if(!self.SoloLectura){
                proveedor.actualizar(self.form, data => {
                    this.$router.push({
                        name: 'proveedores'
                    })
                }, err => {
                	self.loading = false;
                    self.errorMessages = err
                    self.btnAction = 'Guardar'
                })
                /*}else{
                    this.$router.push({
                        name: 'proveedores'
                    })
                alertify.warning('Lo sentimos este valor esta protegido, si desea cambiar el nombre contacte a los desarrolladores');
                }*/
            },
            desactivar(proveedorId) {

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
                        proveedor.desactivar({
                            id_proveedor: proveedorId
                        }, data => {
                            alertify.warning("Proveedor desactivado correctamente", 5);
                            this.$router.push({
                                name: 'proveedores'
                            })
                        }, err => {
                            console.log(err)
                        })
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },
            activar(proveedorId) {

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
                        proveedor.activar({
                            id_proveedor: proveedorId
                        }, data => {
                            alertify.success("Proveedor activado correctamente", 5);
                            this.$router.push({
                                name: 'proveedores'
                            })
                        }, err => {
                            console.log(err)
                        })
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },

            obtenerMunicipios() {
                var self = this
                self.form.municipio_proveedor = null;
                if (self.form.departamento.municipios_departamento)
                    self.municipios = self.form.departamento.municipios_departamento
            },
        },
        mounted() {
            this.obtenerProveedor()
        }
    }
</script>
<style lang="scss" scoped>
    .check-label2 {
        margin-top: 40px;
    }
</style>