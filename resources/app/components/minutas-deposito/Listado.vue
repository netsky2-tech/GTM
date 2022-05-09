<template>
    <div class="main">
        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Administrar Minutas Depósito</div>
                <div class="box-description">Listado de Minutas Depósito</div>
                <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo caja y banco</router-link>> Minutas de deposito</div>
            </div>
            <div class="row">
                <div class="col-md-6 sm-text-center">
                    <router-link :to="{ name: 'registrar-minuta' }" class="btn btn-success" tag="button">
                        <i class="pe-7s-plus"></i> Registrar Minuta de depósito
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
                        <option value="no_referencia">No. Referencia</option>
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
                        <th>Sucursal</th>
                        <th>No. Referencia</th>
                        <th>Fecha Depósito</th>
                        <th>Cuenta Bancaria</th>
                        <th>Monto Córdobas</th>
                        <th class="text-center table-number">Estado</th>
                        <th class="text-center action">Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="(minuta,key) in minutas">
                        <tr :key="minuta.id_minuta_deposito">
                            <td>{{ minuta.sucursal_minuta.descripcion }}</td>
                            <td>{{ minuta.no_referencia }}</td>
                            <td>{{ formatDate(minuta.fecha_deposito) }}</td>
                            <td>{{ minuta.cuenta_bancaria_minuta.numero_cuenta }}</td>
                            <td>{{ minuta.monto_cordobas }}</td>
                            <td class="text-center">
                                <div v-if="minuta.estado==0">
                                    <span class="badge badge-danger">Anulada</span>
                                </div>
                                <div v-if="minuta.estado==1">
                                    <span class="badge badge-default">Registrada</span>
                                </div>
                                <div v-if="minuta.estado==2">
                                    <span class="badge badge-warning">Contabilizada</span>
                                </div>
                            </td>
                            <td class="text-center">
                              <!--  <router-link
                                        :to="{ name: 'actualizar-minuta', params: { id_minuta_deposito: minuta.id_minuta_deposito } }"
                                        title="Actualizar Minuta" v-if="minuta.estado===1"><i class="icon-pencil"></i>
                                </router-link>-->

                                <a v-if="minuta.estado === 1"  v-tooltip="'Anular Minuta'" @click.prevent="anular(minuta.id_minuta_deposito)">  <i class="fa fa-remove"></i></a>

                            </td>
                        </tr>
                    </template>
                    <tr v-if="!minutas.length">
                        <td class="text-center" colspan="7">Sin datos</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <pagination
                    :items="minutas"
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
    import minuta from "../../api/minutas_deposito";
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
                        field: "no_referencia",
                        value: ""
                    }
                },
                minutas: [],

                total: 0
            };
        },
        methods: {
            formatDate(date) {
                return moment(date).format('DD-MM-YYYY')
            },
            obtener() {
                var self = this;
                self.loading = true;
                minuta.obtener(
                    self.filter,
                    data => {
                        self.minutas = data.rows;
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

            anular(id_minuta_deposito){


                this.$swal.fire({
                    title: 'Esta seguro de anular esta minuta?',
                    text: "Digite la causa de la anulación de la minuta",
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, anular minuta'
                }).then((result) => {
                    if (result.value) {
                        minuta.anular(
                            {
                                id_minuta_deposito : id_minuta_deposito,
                                causa_anulacion:result.value
                            },
                            data => {
                                this.$swal.fire(
                                    'Anulada',
                                    'El registro de la minuta ha sido anulado',
                                    'success'
                                )
                                this.obtener();
                            },
                            err => {
                                this.$swal.fire(
                                    'No se puede anular minuta!',
                                    err,
                                    'warning'
                                )
                            }
                        );



                    }
                })

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