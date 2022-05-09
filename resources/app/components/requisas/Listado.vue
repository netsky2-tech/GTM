<template>
    <div class="main">
        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Administrar Requisas</div>
                <div class="box-description">Listado de Requisa</div>
            </div>
            <div class="row">
                <div class="col-md-6 sm-text-center">
                    <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-requisa' }">
                        <i class="pe-7s-plus"></i> Registrar Requisa
                    </router-link>
                </div>
                <div
                        @keyup.enter="filter.page = 1;obtenerRequisas();"
                        class="col-md-6 sm-text-center form-inline justify-content-end"
                >
                    <select
                            v-model="filter.search.field"
                            class="form-control mb-1 mr-sm-1 mb-sm-0 search-field"
                    >
                        <option value="codigo_requisa">Código</option>
                    </select>
                    <input
                            v-model="filter.search.value"
                            class="form-control mb-1 mr-sm-1 mb-sm-0"
                            placeholder="Buscar"
                            type="text"
                    >
                    <button class="btn btn-info" @click="filter.page = 1;obtenerRequisas();">
                        <i class="pe-7s-search"></i> Buscar
                    </button>
                </div>
            </div>
            <div class="table-responsive mt-3">
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th></th>
                        <th>No. Requisa</th>
                        <th>Fecha</th>
                        <th>Usuario</th>
                        <th>Sucursal</th>
                        <th>Bodega</th>
                        <th>Area</th>
                        <th class="text-center table-number">Estado</th>
                        <th class="text-center action">Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="(requisa,key) in requisas">
                        <tr :key="requisa.id_requisa">
                            <td class="detail-link">
                                <div v-tooltip="'Mostrar Detalle'" @click="mostrarProductos(key)" class="link"></div>
                            </td>
                            <td>{{ requisa.codigo_requisa }}</td>
                            <td>{{ requisa.fecha_solicitud }}</td>
                            <td>{{ requisa.requisa_trabajador.id_trabajador }}</td>
                            <td>{{ requisa.requisa_sucursal? requisa.requisa_sucursal.descripcion:'N/A' }}</td>
                            <td>{{ requisa.requisa_bodega.descripcion }}</td>
                            <td>{{ requisa.requisa_area.descripcion }}</td>
                            <td class="text-center">
                                <div v-if="requisa.estado===0">
                                    <span class="badge badge-danger">Cancelada</span>
                                </div>
                                <div v-if="requisa.estado===1">
                                    <span class="badge badge-blue">Solicitada</span>
                                </div>
                                <div v-if="requisa.estado===2">
                                    <span class="badge badge-success">Autorizada</span>
                                </div>
                                <div v-if="requisa.estado===3">
                                    <span class="badge badge-success">Despachada</span>
                                </div>
                            </td>
                            <td class="text-center">
                                <!-- <template v-if="requisa.estado===99">
                                   <router-link v-tooltip="'Actualizar Requisa'" :to="{ name: 'actualizar-requisa', params: { id_requisa: requisa.id_requisa } }" tag="a"><i class="icon-pencil"></i></router-link>
                                 </template>-->
                                <template v-if="requisa.estado===1">
                                    <router-link v-tooltip="'Autorizar Requisa'"
                                                 :to="{ name: 'autorizar-requisa', params: { id_requisa: requisa.id_requisa } }"
                                                 tag="a"><i class="icon-check"></i></router-link>
                                </template>

                                <router-link
                                        v-tooltip="'Mostrar detalles de Requisa'"
                                        :to="{ name: 'mostrar-requisa', params: { id_requisa: requisa.id_requisa } }"
                                        tag="a"
                                >
                                    <i aria-hidden="true" class="fa fa-eye"></i>
                                </router-link>
                            </td>
                        </tr>
                        <tr v-if="requisa.mostrar" :key="requisa.codigo_requisa">
                            <td></td>
                            <td colspan="7">
                                <table class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th class="text-center">Código producto</th>
                                        <th>Descripción producto</th>
                                        <th>Unidad de medida</th>
                                        <th>Costo</th>
                                        <th>Cantidad Solicitada</th>
                                        <th>Cantidad Autorizada</th>
                                        <th>Cantidad Entregada</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                            v-for="productosDetalle in requisa.requisa_productos"
                                            :key="productosDetalle.id_requisa_producto">
                                        <td>{{ productosDetalle.codigo_producto }}</td>
                                        <td>{{ productosDetalle.descripcion_producto }}</td>
                                        <td>{{ productosDetalle.unidad_medida }}</td>
                                        <td>{{ productosDetalle.precio_unitario }}</td>
                                        <td>{{ productosDetalle.cantidad_solicitada }}</td>
                                        <td>{{ productosDetalle.cantidad_autorizada }}</td>
                                        <td>{{ productosDetalle.cantidad_recibida }}</td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td class="item-footer" colspan="3"></td>
                                        <td>Total Unidades</td>
                                        <td class="item-footer">
                                            <strong>{{requisa.tot_unidades_solicitadas}}</strong>
                                        </td>
                                        <td class="item-footer">
                                            <strong>{{requisa.tot_unidades_autorizadas}}</strong>
                                        </td>
                                        <td class="item-footer">
                                            <strong>{{requisa.tot_unidades_recibidas}}</strong>
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </td>
                            <td></td>
                        </tr>
                    </template>
                    <tr v-if="!requisas.length">
                        <td class="text-center" colspan="10">Sin datos</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <pagination
                    @changePage="changePage"
                    @changeLimit="changeLimit"
                    :items="requisas"
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
    import requisa from "../../api/requisas";
    //import Pagination from "../layout/Pagination";
    import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
              loading:true,
              msg: 'Cargando el contenido espere un momento',
              url : '/public'+loadingImage,   //It is important to import the loading image then use here
                filter: {
                    page: 1,
                    limit: 5,
                    limitOptions: [5, 10, 15, 20],
                    search: {
                        field: "codigo_requisa",
                        value: ""
                    }
                },
                requisas: [],
                total: 0
            };
        },
        methods: {
            mostrarProductos(key) {
                if (this.requisas[key].mostrar) {
                    this.requisas[key].mostrar = 0;
                } else {
                    this.requisas[key].mostrar = 1;
                }
            },
            obtenerRequisas() {
                var self = this;
                self.loading = true;
                requisa.obtenerRequisas(
                    self.filter,
                    data => {
                        data.rows.forEach((requisas, key) => {
                            data.rows[key].mostrar = 0;
                        });
                        self.requisas = data.rows;
                        self.total = data.total;
                        self.loading = false;
                    },
                    err => {
                      self.loading =false;
                        console.log(err);
                    }
                );
            },
            changeLimit(limit) {
                this.filter.page = 1;
                this.filter.limit = limit;
                this.obtenerRequisas();
            },
            changePage(page) {
                this.filter.page = page;
                this.obtenerRequisas();
            },
        },
        /*components: {
          pagination: Pagination
        },*/
        mounted() {
            this.obtenerRequisas();
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