<template>
    <div class="main">
        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Ubicación de activo</div>
                <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-activos' }"> Módulo Activo Fijo</router-link>> Localizar activos</div>
            </div>
            <div class="row">

                <div class="col-sm-3">
                    <div class="form-group">
                        <label for>Código del activo</label>
                        <input @focus="$event.target.select()" @keydown.enter="buscarActivo" class="form-control" ref="activo"  v-model="activo_busqueda">
                        <ul class="error-messages">
                            <li
                                    :key="message"
                                    v-for="message in errorMessages.activo_busqueda"
                                    v-text="message"
                            ></li>
                        </ul>
                    </div>
                </div>

            </div>
            <br>
            <div class="alert alert-success">
                <span><strong>Datos del activo</strong></span>
            </div>
            <div class="table-responsive mt-3">
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descripción del activo</th>
                        <th>Marca</th>
                        <th>Serie</th>
                        <th>Área actual</th>
                        <th>Trabajador asignado</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{{codigo}}</td>
                        <td>{{descripcion_activo}}</td>
                        <td>{{marca_activo}}</td>
                        <td>{{serie_activo}}</td>
                        <td>{{area_activo}}</td>
                        <td>{{responsable_activo}}</td>
                        <td>
                            <div v-if="estado===1">
                                <span class="badge badge-success">Activo</span>
                            </div>
                            <div v-if="estado===2">
                                <span class="badge badge-primary">Depreciado</span>
                            </div>
                            <div v-if="estado === 0">
                                <span class="badge badge-danger">Baja</span>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>

            <template v-if="loading">
                <BlockUI :message="msg" :url="url"></BlockUI>
            </template>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import activo from "../../api/activos_fijos";
    import loadingImage from "../../assets/images/block50.gif";

    export default {
        data(){
            return{
                loading: false,
                msg: 'Cargando el contenido espere un momento',
                url: '/public' + loadingImage,
                activo_busqueda: "",
                codigo: "",
                descripcion_activo: "",
                marca_activo: "",
                serie_activo: "",
                area_activo: "",
                estado: "",
                responsable_activo: "",
                errorMessages: []
            }
        },
        methods: {

            buscarActivo() {
                var self = this;
                self.loading = true;
                //self.$refs.precio_unitario.focus();
                activo.buscarUbicacionActivo({
                    codigo_activo: self.activo_busqueda,
                }, data => {
                    if(data !== null){
                        self.$refs.activo.focus();
                        self.activo_busqueda='';
                        //self.movimientos = data;

                        self.codigo = data.codigo;
                        self.descripcion_activo = data.descripcion;
                        self.marca_activo = data.marca;
                        self.serie_activo = data.serie;
                        self.area_activo = data.activo_area.descripcion;
                        self.responsable_activo = data.activo_trabajador.nombre_completo;
                        self.estado = data.estado;
                    }else{
                        alertify.warning("No se encuentra este activo.",5);
                        self.$refs.activo.focus();
                        self.activo_busqueda='';
                        self.codigo = '';
                        self.descripcion_activo = '';
                        self.marca_activo = '';
                        self.serie_activo = '';
                        self.area_activo = '';
                        self.responsable_activo = '';
                        self.estado = '';
                    }
                    self.errorMessages=[];
                    self.loading = false;
                }, err => {
                    console.log(err);
                    self.errorMessages=err;
                    self.activo_busqueda='';
                    self.codigo = '';
                    self.descripcion_activo = '';
                    self.marca_activo = '';
                    self.serie_activo = '';
                    self.area_activo = '';
                    self.responsable_activo = '';
                    self.estado = '';
                    if(err.codigo_activo){
                        self.$refs.activo.focus();
                        self.activo_busqueda='';
                        alertify.warning("No se encuentra este activo.",5);
                    }
                    self.loading = false;
                })

            },
        },
    }
</script>

<style scoped>

</style>