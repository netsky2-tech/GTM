<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Autorización de Solicitudes de Pago</div>
                <div class="box-description">Listado de Solicitudes de Pago</div>
                <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo caja y banco</router-link>> Solicitudes de pago</div>
            </div>
            <div class="row">
                <div
                        @keyup.enter="filter.page = 1;obtener();"
                        class="col-md-12 sm-text-center form-inline justify-content-end"
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
                    <br>
            <div class="row">
                <div class="col-sm-12">
                    <table class="table table-striped table-bordered table-responsive"  >
                    <thead>
                    <tr>
                        <th>Beneficiario</th>
                        <th>Concepto</th>
                        <th>Fecha Solicitud</th>
                        <th>Moneda Solicitada</th>
                        <th>Monto Solicitado</th>
                        <th style="min-width:300px">Cuenta Bancaria</th>
                        <th colspan="2" class="text-center action">Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="(solicitud,key) in solicitudes">
                        <tr :key="solicitud.id_solicitud_pago">
                            <td>{{ solicitud.beneficiario }}</td>
                            <td>{{ solicitud.concepto}}</td>
                            <td>{{ solicitud.fecha_solicitud | formatDate}}</td>
                            <td>{{ solicitud.moneda_solicitud.descripcion }}</td>
                            <td>{{ solicitud.monto }}</td>
                            <td style="width: 30%">
                                <select :disabled="solicitud.estado!==1" class="form-control" v-model="solicitud.id_cuenta_bancaria">
                                    <option :key="0" :value="null">{{ 'Ninguna'}} </option>
                                    <option :key="cuenta.id_cuenta_bancaria" :value="cuenta.id_cuenta_bancaria" v-for="cuenta in cuentas_bancarias">{{ cuenta.numero_cuenta}}
                                    </option>
                                </select>
                            </td>
                            <td class="text-center">
                                <template v-if="solicitud.estado===1">
                                    <button @click="cambiarEstadoSolicitudPago(0,solicitud.id_solicitud_pago,solicitud.id_cuenta_bancaria)" class="btn btn-danger"><i
                                            class="fa fa-trash-o"> Rechazar Solicitud</i></button>
                                </template>
                                <template v-else>
                                    <button @click="cambiarEstadoSolicitudPago(0,solicitud.id_solicitud_pago,solicitud.id_cuenta_bancaria)" class="btn btn-danger"><i
                                            class="fa fa-trash-o"> Anular Solicitud</i></button>
                                </template>
                            </td>
                            <td class="text-center">
                                <template v-if="solicitud.estado===1">
                                    <button @click="cambiarEstadoSolicitudPago(2,solicitud.id_solicitud_pago,solicitud.id_cuenta_bancaria)" class="btn btn-success"><i
                                            class="fa fa-trash-o"> Autorizar Solicitud</i></button>
                                </template>
                                <template v-else>
                                </template>
                            </td>
                        </tr>
                    </template>
                    <tr v-if="!solicitudes.length">
                        <td class="text-center" colspan="7">Sin datos</td>
                    </tr>
                    </tbody>
                        <tfoot>
                        <tr>
                            <td class="text-center" colspan="7"></td>
                        </tr>
                        </tfoot>
                </table>
            </div>
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
                    },
                    status:1,
                },
                solicitudes: [],
                cuentas_bancarias: [],

                total: 0
            };
        },
        methods: {
            obtener() {
                var self = this;
                self.loading = true;
                solicitud.obtenerSolicitudesAprobacion(
                    self.filter,
                    data => {
                        self.solicitudes = data.rows;
                        self.cuentas_bancarias = data.cuentas_bancarias;
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
            cambiarEstadoSolicitudPago(estado,id_solicitud_pago,id_cuenta_bancaria){

                var txtAprobar = 'Está seguro de autorizar esta solicitud de pago?';
                var txtRechazar ='Está seguro de rechazar la solicitud de pago?';
                //var txtAnular ='Está seguro de revocar el permiso de consignación para este cliente?';

                var self = this;
                let validacion = true;
                let id_cuenta_bancariax = id_cuenta_bancaria;

                if(estado === 2 && id_cuenta_bancaria ===null){
                    validacion=false;
                    id_cuenta_bancariax=0;
                }

                if(validacion){
                self.$swal.fire({
                    title: 'Confirmación de cambio del estado de solicitud de pago',
                    text: estado===2?txtAprobar:estado===0?txtRechazar:txtRechazar,
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, confirmar',
                    cancelButtonText:'Cancelar'
                }).then((result) => {
                    self.loading=true;
                    if (result.value) {
                        //var self = this
                        solicitud.cambiarEstadoSolicitudPago({
                            id_solicitud_pago: id_solicitud_pago,
                            id_cuenta_bancaria:id_cuenta_bancariax,
                            estado: estado
                        }, data => {
                            alertify.warning("El estado de la solicitud de pago ha cambiado correctamente", 5);
                            self.obtener();
                        }, err => {
                            self.loading=false;
                            console.log(err)
                        })
                    }else{
                        self.loading=false;
                    }
                })
                }else{
                    alertify.warning("Debe seleccionar una cuenta bancaria para aprobar la solicitud de pago", 10);
                }
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