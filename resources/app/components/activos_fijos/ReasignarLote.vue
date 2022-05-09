<template>
    <div class="main">

        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Trasladar Activos de Trabajador</div>
                <div class="box-description">Formulario para reasignar activo fijo</div>
            </div>


                <div class="alert alert-success">
                    <span><strong>Datos del trabajador Asignado</strong></span>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Área  Origen</label>
                            <v-select
                                    v-model="area_origen"
                                    label="descripcion"
                                    :options="areas"
                                    v-on:change="obtenerTrabajadoresOrigen"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.area_origen" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Trabajador Origen</label>
                            <v-select
                                    v-model="trabajador_origen"
                                    label="nombre_completo"
                                    :options="trabajadores"
                                    v-on:change="obtenerActivosTrabajador"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.trabajador_origen" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Área Destino</label>
                            <v-select
                                    v-model="area_destino"
                                    label="descripcion"
                                    :options="areas"
                                    v-on:change="obtenerTrabajadores"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.area_destino" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label >Trabajador Destino</label>
                            <v-select
                                    v-model="trabajador_destino"
                                    label="nombre_completo"
                                    :options="trabajadores_destino"
                            ></v-select>
                            <ul class="error-messages">
                                <li v-for="message in errorMessages.trabajador_destino" :key="message" v-text="message"></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="table-responsive mt-3">
                        <table class="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Código</th>
                                <th>Descripción</th>
                                <th>Tipo Activo</th>
                                <th>Grupo Activo</th>
                                <th>Tipo de traslado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(activo_fijo, index) in activos_trabajador" :key="activo_fijo.id_activo">
                                <td style="width: 2%">
                                    <button @click="eliminarLinea(activo_fijo, index)">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </td>
                                <td>{{ activo_fijo.codigo }}</td>
                                <td>{{ activo_fijo.descripcion }}</td>
                                <td>{{ activo_fijo.activo_tipo_activo?activo_fijo.activo_tipo_activo.descripcion :'N/A'}}</td>
                                <td>{{ activo_fijo.activo_grupo?activo_fijo.activo_grupo.descripcion :'N/A'}}</td>
                                <td>
                                    <select v-model.number="activo_fijo.tipo_traslado" class="form-control">
                                    <option value="1">Reasignar</option>
                                    <option value="2">Prestamo</option>
                                    <option value="3">Devolución</option>
                                </select>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages[`activos_trabajador.${index}.tipo_traslado`]" v-text="message"></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr v-if="!activos_trabajador.length">
                                <td class="text-center" colspan="5">El trabajador seleccionado no tiene activos asignados</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'listado-activos-fijos' }" tag="button">
                            <button class="btn btn-default" type="button">Cancelar</button>
                        </router-link>
                        <button :disabled="btnAction !== 'Guardar'" @click="reasignar"
                                class="btn btn-primary" type="button">{{ btnAction }}
                        </button>
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
    import activo_fijo from '../../api/activos_fijos'
    import loadingImage from '../../assets/images/block50.gif'
    import es from 'vuejs-datepicker/dist/locale/translations/es'
    import activos from "../../api/activos_fijos";
    export default {
        data() {
            return {
                loading:true,
                msg: 'Guardando los datos, espere un momento',
                url : '/public'+loadingImage,   //It is important to import the loading image then use here
                mostrar_detalles_vehiculo:false,

                areas:[],
                area_origen:[],
                area_destino:[],

                trabajadores:[],
                trabajador_origen:[],

                trabajadores_destino:[],
                trabajador_destino:[],

                activos_trabajador:[],
                tipo_traslado:'',

                es: es,
                format: "dd-MM-yyyy",

                btnAction: 'Guardar',
                errorMessages: []
            }
        },
        methods: {
            eliminarLinea(item, index) {
                var self = this;
                if (this.activos_trabajador.length >= 1) {
                    this.activos_trabajador.splice(index, 1);
                }else{
                    this.activos_trabajador=[];
                }
            },


            obtenerTrabajadores(){
                var self = this;
                self.trabajadores_destino=[];
                self.trabajador_destino=[];
                if(self.area_destino){
                    self.trabajadores_destino = self.area_destino.trabajadores_area;
                }
            },

            obtenerTrabajadoresOrigen(){
                var self = this;
                self.activos_trabajador=[];
                self.trabajadores=[];
                self.trabajador_origen=[];
                if(self.area_origen){
                    self.trabajadores = self.area_origen.trabajadores_area;
                }
            },

            obtenerActivosTrabajador() {
                var self = this
                self.loading=true;
                self.activos_trabajador=[];
                if(self.trabajador_origen){
                activo_fijo.obtenerActivosTrabajador({
                    id_trabajador: self.trabajador_origen.id_trabajador
                }, data => {
                    self.activos_trabajador = data;
					self.loading = false;
                }, err => {
                    alertify.error(err.id_trabajador[0], 5);
                    this.$router.push({
                        name: 'listado-activos-fijos'
                    });
                })
                }
            },

            reasignar() {
                var self = this
                self.btnAction = 'Guardando, espere......'
                if(self.activos_trabajador.length){
                if(self.trabajador_origen.id_trabajador !== self.trabajador_destino.id_trabajador){
                    self.$swal.fire({
                        title: 'Esta seguro de trasladar todos los activos al trabajador especificado?',
                        text: "Se registrarán los cambios",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, confirmar',
                        cancelButtonText:'Cancelar'
                    }).then((result) => {
                        if (result.value) {
                            self.loading = true;
                            activo_fijo.reasignarLote(
                                {
                                    activos: self.activos_trabajador,
                                    activo_trabajador_destino:self.trabajador_destino,
                                },
                                data => {
                                    alertify.success("Activo Fijo actualizado correctamente", 5);
                                    this.$router.push({
                                        name: 'listado-activos-fijos'
                                    })
                                }, err => {
                                    self.loading = false;
                                    self.errorMessages = err
                                    self.btnAction = 'Guardar'
                                })
                        }else{
                            self.loading = false;
                            self.btnAction = "Guardar";
                        }
                    })
                }else{
                    alertify.warning("Se deben seleccionar trabajadores distintos", 5);
                    self.loading = false;
                    self.btnAction = 'Guardar'
                }

                }else{
                    alertify.warning("El detalle de activos debe contener al menos un elemento", 5);
                    self.loading = false;
                    self.btnAction = 'Guardar'
                }
            },
            nuevo() {
                var self = this;
                activos.nuevo({}, data => {
                        self.areas = data.areas;
                        self.loading = false;
                    },
                    err => {
                        console.log(err);
                    })

            },
        },
        mounted() {
            this.nuevo()
        }
    }
</script>