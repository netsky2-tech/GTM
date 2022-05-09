<template>
    <div class="main">
        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Administrar Documentos Contables</div>
                <div class="box-description">Listado de Documentos Contables</div>
                <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> Documentos contables</div>
            </div>
            <div class="row">
                <div class="col-md-6 sm-text-center">
                    <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-documento' }">
                        <i class="pe-7s-plus"></i> Crear Nuevo Documento Contable
                    </router-link>
                </div>
                <div
                        @keyup.enter="filter.page = 1;obtener();"
                        class="col-md-6 sm-text-center form-inline justify-content-end"
                >
                    <select
                            v-model="filter.search.field"
                            class="form-control mb-1 mr-sm-1 mb-sm-0 search-field"
                    >
                        <option value="num_documento">Código</option>
                    </select>
                    <input
                            v-model="filter.search.value"
                            class="form-control mb-1 mr-sm-1 mb-sm-0"
                            placeholder="Buscar"
                            type="text"
                    >
                    <button class="btn btn-info" @click="filter.page = 1;obtener();">
                        <i class="pe-7s-search"></i> Buscar
                    </button>
                </div>
            </div>
            <div class="table-responsive mt-3">
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Numero documento</th>
                        <th>Tipo Documento</th>
                        <th>Fecha documento</th>
                        <th class="text-center table-number">Estado</th>
                        <th class="text-center action">Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="(documento_contable,key) in documentos_contables">
                        <tr :key="documento_contable.id_documento">
                            <td class="detail-link">
                                <div @click="mostrarMovimientos(key)" class="link"></div>
                            </td>
                            <td>{{ documento_contable.num_documento }}</td>
                            <td>{{ documento_contable.documento_tipo.descripcion}}</td>
                            <td>{{ documento_contable.fecha_emision }}</td>
                            <td class="text-center">
                                <div v-if="documento_contable.estado==0">
                                    <span class="badge badge-danger">Cancelado</span>
                                </div>
                                <div v-if="documento_contable.estado==1">
                                    <span class="badge badge-blue">Emitido</span>
                                </div>
                                <div v-if="documento_contable.estado==2">
                                    <span class="badge badge-success">Aprobado</span>
                                </div>
                            </td>
                            <td class="text-center">
                                <router-link target="_blank"
                                             v-bind:to="'documentos-contables/reporte/pdf/' + documento_contable.id_documento">
                                    <i aria-hidden="true" class="fa fa-eye"></i></router-link>

                            </td>
                        </tr>


                        <tr v-if="documento_contable.mostrar" :key="documento_contable.num_documento">
                            <td colspan="7">
                                <table class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Centro</th>
                                        <th colspan="2">Cuenta Contable</th>
                                        <th>Concepto</th>
                                        <th>Debe</th>
                                        <th>Haber</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                            v-for="movimiento in documento_contable.movimientos_cuentas"
                                            :key="movimiento.id_documento_cuenta">
                                        <td v-if="movimiento.centro_costo">{{ movimiento.centro_costo.codigo }}</td>
                                        <td v-else>{{ 'N/A' }}</td>
                                        <td colspan="2">{{ movimiento.cuenta_contable.nombre_cuenta_completo }}</td>
                                        <td>{{ movimiento.concepto }}</td>
                                        <td>{{ movimiento.debe | formatMoney(2)}}</td>
                                        <td>{{ movimiento.haber| formatMoney(2)}}</td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td class="item-footer" colspan="3">Totales</td>
                                        <td class="item-footer" colspan="1">
                                            <strong class="item-dark form-control">{{total_debex(documento_contable)| formatMoney(2)}}</strong>
                                        </td>
                                        <td class="item-footer" colspan="1">
                                            <strong class="item-dark form-control">{{total_haberx(documento_contable)| formatMoney(2)}}</strong>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </td>
                        </tr>
                    </template>
                    <tr v-if="!documentos_contables.length">
                        <td class="text-center" colspan="7">Sin datos</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <pagination
                    @changePage="changePage"
                    @changeLimit="changeLimit"
                    :items="documentos_contables"
                    :total="total"
                    :page="filter.page"
                    :limitOptions="filter.limitOptions"
                    :limit="filter.limit"
            ></pagination>

            <template v-if="loading">
                <BlockUI :message="msg" :url="url"></BlockUI>
            </template>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import documento_contable from "../../api/documentos_contables";
    import loadingImage from '../../assets/images/block50.gif'
    //import Pagination from "../layout/Pagination";
    export default {
        data() {
            return {
                loading: true,
                msg: 'Cargando el contenido espere un momento',
                url: '/public' + loadingImage,   //It is important to import the loading image then use here
                filter: {
                    page: 1,
                    limit: 20,
                    limitOptions: [20, 40, 60, 80],
                    search: {
                        field: "num_documento",
                        value: ""
                    }
                },
                documentos_contables: [],

                total: 0
            };
        },
        methods: {
            anular(id_documento){


                this.$swal.fire({
                    title: 'Esta seguro de anular este documento contable?',
                    text: "Digite la causa de la anulación del documento",
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, anular documento'
                }).then((result) => {
                    if (result.value) {
                        documento_contable.anular(
                            {
                                id_documento : id_documento,
                                causa_anulacion:result.value
                            },
                            data => {
                                this.$swal.fire(
                                    'Anulado',
                                    'Los registros del documento han sido anulados',
                                    'success'
                                )
                                this.obtenerFacturas();
                            },
                            err => {
                                this.$swal.fire(
                                    'No se puede anular este documento!',
                                    err,
                                    'warning'
                                )
                            }
                        );



                    }
                })

            },
            mostrarMovimientos(key) {
                if (this.documentos_contables[key].mostrar) {
                    this.documentos_contables[key].mostrar = 0;
                } else {
                    this.documentos_contables[key].mostrar = 1;
                }
            },
            total_debex(documentoContable) {
                return Number((documentoContable.movimientos_cuentas.reduce((carry, item) => {
                        return(carry + Number(item.debe));
                    }
                    , 0)).toFixed(4));
            },
            total_haberx(documentoContable) {
                return Number((documentoContable.movimientos_cuentas.reduce((carry, item) => {
                        return(carry + Number(item.haber));
                    }
                    , 0)).toFixed(4));
            },
            obtener() {
                var self = this;
                self.loading = true;
                documento_contable.obtener(
                    self.filter,
                    data => {
                        data.rows.forEach((documentos_contables, key) => {
                            data.rows[key].mostrar = 0;
                        });
                        self.documentos_contables = data.rows;
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
        /* components: {
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

        .detail-link {
            width: 60px;
            position: relative;

            .link {
                width: 10px;
                height: 4px;
                margin-left: auto;
                margin-right: auto;
                cursor: pointer;
                margin-top: 8px;
                background-color: #595959;
                border: 1px solid #595959;

                &:before {
                    content: "";
                    width: 4px;
                    height: 10px;
                    left: 0px;
                    right: 0px;
                    cursor: pointer;
                    margin: 0px auto;
                    margin-top: -4px;
                    position: absolute;
                    background-color: #595959;
                    border: 1px solid #595959;
                }
            }
        }
    }
</style>