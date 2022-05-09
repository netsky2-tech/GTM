<template>
    <div class="main">
        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Administrar Solicitudes de Pago</div>
                <div class="box-description">Listado de Solicitudes de Pago</div>
                <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo caja y banco</router-link>> Solicitudes de pago</div>
            </div>
            <div class="row">
                <div class="col-md-6 sm-text-center">
                    <router-link :to="{ name: 'registrar-solicitud-pago' }" class="btn btn-success" tag="button">
                        <i class="pe-7s-plus"></i> Registrar Solicitud de Pago
                    </router-link>
                </div>
                <div
                        @keyup.enter="filter.page = 1;obtener();"
                        class="col-md-6 sm-text-center form-inline justify-content-end"
                >
                    <select
                            class="form-control mb-1 mr-sm-1 mb-sm-0 search-field"
                            v-model="filter.search.field"
                    >
                        <option value="beneficiario">Beneficiario</option>
                    </select>
                    <input
                            class="form-control mb-1 mr-sm-1 mb-sm-0"
                            placeholder="Buscar"
                            type="text"
                            v-model="filter.search.value"
                    >
                    <button @click="filter.page = 1;obtener();" class="btn btn-info">
                        <i class="pe-7s-search"></i> Buscar
                    </button>
                </div>
            </div>
            <div class="table-responsive mt-3">
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Tipo Solicitud</th>
                        <th>Beneficiario</th>
                        <th>Concepto</th>
                        <th>Fecha Solicitud</th>
                        <th>Moneda Solicitada</th>
                        <th>Monto Solicitado</th>

                        <th class="text-center table-number">Estado</th>
                        <th class="text-center action">Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="(solicitud,key) in solicitudes">
                        <tr :key="solicitud.id_solicitud_pago">
                            <td>{{ solicitud.tipo_solicitud?solicitud.tipo_solicitud.descripcion:"N/D" }}</td>
                            <td>{{ solicitud.beneficiario }}</td>
                            <td>{{ solicitud.concepto}}</td>
                            <td>{{ formatDate(solicitud.fecha_solicitud)}}</td>
                            <td>{{ solicitud.moneda_solicitud.descripcion }}</td>
                            <td>{{ solicitud.monto | formatMoney(2)}}</td>


                            <td class="text-center">
                                <div v-if="solicitud.estado===0">
                                    <span class="badge badge-danger">Anulado</span>
                                </div>
                                <div v-if="solicitud.estado===1">
                                    <span class="badge badge-default">Registrado</span>
                                </div>
                                <div v-if="solicitud.estado===2">
                                    <span class="badge badge-warning">Autorizado</span>
                                </div>
                                <div v-if="solicitud.estado===3">
                                    <span class="badge badge-info">Contabilizado</span>
                                </div>
                                <div v-if="solicitud.estado===4">
                                    <span class="badge badge-success">Revisado</span>
                                </div>
                                <div v-if="solicitud.estado===5">
                                    <span class="badge badge-success">Firmado</span>
                                </div>
                                <div v-if="solicitud.estado===6">
                                    <span class="badge badge-success">Retenido</span>
                                </div>
                                <div v-if="solicitud.estado===7">
                                    <span class="badge badge-success">Disponible</span>
                                </div>
                                <div v-if="solicitud.estado===8">
                                    <span class="badge badge-success">Pagado</span>
                                </div>
                                <div v-if="solicitud.estado===9">
                                    <span class="badge badge-success">Archivado</span>
                                </div>
                            </td>
                            <td class="text-center">
                                <router-link
                                        :to="{ name: 'contabilizar-solicitud-pago', params: { id_solicitud_pago: solicitud.id_solicitud_pago } }"
                                        title="Contabilizar Solicitud de pago" v-if="solicitud.estado===2"><i class="icon-check"></i>
                                </router-link>
                                <router-link
                                        :to="{ name: 'emitir-solicitud-pago', params: { id_solicitud_pago: solicitud.id_solicitud_pago } }"
                                        title="Emitir Solicitud de pago" v-if="solicitud.estado===3"><i
                                        class="icon-share-alt"></i>
                                </router-link>
                                <router-link
                                        :to="{ name: 'cambiar-solicitud-pago', params: { id_solicitud_pago: solicitud.id_solicitud_pago } }"
                                        title="Cambiar estado de comprobante de pago" v-if="[4,5,6,7,8].indexOf(solicitud.estado) >= 0"><i
                                        class="icon-share-alt"></i>
                                </router-link>
                                <router-link
                                        v-tooltip="'Mostrar Detalles de Solicitud de pago'"
                                        :to="{ name: 'mostrar-solicitud-pago', params: { id_solicitud_pago: solicitud.id_solicitud_pago } }"
                                        tag="a"
                                >
                                    <i aria-hidden="true" class="fa fa-eye"></i>
                                </router-link>

                                <!--<a  v-tooltip="'Descargar Reporte'" @click.prevent="descargarReporteSolicitud(solicitud.id_solicitud_pago)"><i aria-hidden="true" class="fa fa-eye"></i></a>
                                    -->

                                <!--<router-link
                                        :to="{ name: 'aprobar-solicitud-pago', params: { id_solicitud_pago: solicitud.id_solicitud_pago } }"
                                        title="Aprobar solicitud" v-if="solicitud.estado===2"><i
                                        class="icon-share-alt"></i></router-link>
                                <router-link
                                        :to="{ name: 'revisar-solicitud-pago', params: { id_solicitud_pago: solicitud.id_solicitud_pago } }"
                                        title="Emitir cheque" v-if="solicitud.estado===3"><i class="icon-pencil"></i>
                                </router-link>
                                <router-link
                                        :to="{ name: 'revisar-solicitud-pago', params: { id_solicitud_pago: solicitud.id_solicitud_pago } }"
                                        title="Anular solicitud" v-if="[1].indexOf(solicitud.estado) >= 0"><i
                                        class="icon-close"></i></router-link>-->
                            </td>
                        </tr>
                    </template>
                    <tr v-if="!solicitudes.length">
                        <td class="text-center" colspan="7">Sin datos</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <pagination
                    :items="solicitudes"
                    :limit="filter.limit"
                    :limitOptions="filter.limitOptions"
                    :page="filter.page"
                    :total="total"
                    @changeLimit="changeLimit"
                    @changePage="changePage"
            ></pagination>

          <template v-if="loading">
            <BlockUI :message="msg" :url="url"></BlockUI>
          </template>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import solicitud from "../../api/solicitudes_pago";
    import loadingImage from '../../assets/images/block50.gif'
    //import Pagination from "../layout/Pagination";
    export default {
        data() {
            return {
              loading:true,
              msg: 'Cargando el contenido espere un momento',
              url : '/public'+loadingImage,   //It is important to import the loading image then use here
                filter: {
                    page: 1,
                    limit: 20,
                    limitOptions: [20, 40, 60, 80],
                    search: {
                        field: "beneficiario",
                        value: ""
                    }
                },
                solicitudes: [],

                total: 0
            };
        },
        methods: {
            descargarReporteSolicitud (id_solicitud_pagox) {
                if(!this.loading){
                    var self=this;
                    self.loading=true;
                    var extensionx = 'pdf';
                    alertify.success("Descargando datos, espere un momento.....",5);
                    axios.post('bancos/solicitud-pago/reporte',
                        {
                            id_solicitud_pago : id_solicitud_pagox,
                            extension : extensionx
                        }, { responseType: 'blob' })
                        .then(({ data }) => {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            extensionx === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteSolicitudPago.'+ extensionx;
                            link.click()
                            this.loading=false;
                        }) .catch(function (error) {
                        alertify.error("Error Descargando archivo.....",5);
                        self.loading=false;
                    })
                }else{
                    alertify.warning("Espere a que se complete la descarga anterior",5);
                }
            },
            formatDate(date) {  return moment(date).format('YYYY-MM-DD')},
            obtener() {
                var self = this;
                self.loading = true;
                solicitud.obtener(
                    self.filter,
                    data => {
                        self.solicitudes = data.rows;
                        self.total = data.total;
                        self.loading = false;
                    },
                    err => {
                      self.loading = false;
                        console.log(err);
                    }
                );
            },
            changeLimit(limit) {
                this.filter.page = 1;
                this.filter.limit = limit;
                this.obtener();
            },
            changePage(page) {
                this.filter.page = page;
                this.obtener();
            },
        },
        /*components: {
          pagination: Pagination
        },*/
        mounted() {
            this.obtener();
        }
    };
</script>
<style lang="scss" scoped>
    .search-field {
        min-width: 120px;
    }

    .table {
        a {
            color: #2675dc;
        }

        .table-number {
            width: 60px;
        }

        .action {
            width: 180px;
        }
    }
</style>