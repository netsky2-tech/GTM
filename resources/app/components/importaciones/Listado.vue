<template>
    <div class="main">
        <div class="content-box">
            <div class="content-box-header">
                <div class="box-title">Administrar Importaciones de productos</div>
                <div class="box-description">Listado de Importaciones</div>
                <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-compras' }"> Módulo compras</router-link>> Importaciones</div>
            </div>
            <div class="row">
               <!-- <div class="col-md-6 sm-text-center">
                    <router-link :to="{ name: 'registrar-importacion' }" class="btn btn-success" tag="button">
                        <i class="pe-7s-plus"></i> Registrar Nueva Importacion
                    </router-link>
                </div>-->
                <div
                        @keyup.enter="filter.page = 1;obtenerImportaciones();"
                        class="col-md-12 sm-text-center form-inline justify-content-end"
                >
                    <select
                            class="form-control mb-1 mr-sm-1 mb-sm-0 search-field"
                            v-model="filter.search.field"
                    >
                        <option value="numero_poliza">Código</option>
                    </select>
                    <input
                            class="form-control mb-1 mr-sm-1 mb-sm-0"
                            placeholder="Buscar"
                            type="text"
                            v-model="filter.search.value"
                    >
                    <button @click="filter.page = 1;obtenerImportaciones();" class="btn btn-info">
                        <i class="pe-7s-search"></i> Buscar
                    </button>
                </div>
            </div>
            <div class="table-responsive mt-3">
                <table class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Número importacion</th>
                        <th>Proveedor</th>
                        <!-- <th>Factura Proveedor</th>-->
                        <th>Usuario registra</th>
                        <th class="text-center table-number">Estado</th>
                        <th class="text-center action">Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="(importacion,key) in importaciones">
                        <tr>
                            <td class="detail-link">
                                <div @click="mostrarProductos(key)" class="link"></div>
                            </td>
                            <td>{{ importacion.numero_importacion }}</td>
                            <td>{{ importacion.descripcion_proveedor }}</td>
                            <!-- <td>{{ importacion.no_factura_proveedor }}</td>-->
                            <td>{{ importacion.u_creacion }}</td>
                            <td class="text-center">
                                <div v-if="importacion.estado===0">
                                    <span class="badge badge-danger">Cancelada</span>
                                </div>
                                <div v-if="importacion.estado===1">
                                    <span class="badge badge-blue">Borrador</span>
                                </div>
                                <div v-if="importacion.estado===2">
                                    <span class="badge badge-success">Elaborado</span>
                                </div>
                                <div v-if="importacion.estado===3">
                                    <span class="badge badge-success">Revisado</span>
                                </div>
                            </td>
                            <td class="text-center">
                                <router-link
                                        :to="{ name: 'actualizar-importacion', params: { id_importacion: importacion.id_importacion } }"
                                        tag="a"><i class="icon-pencil"></i></router-link>
                                <a :disabled="descargando"
                                   @click.prevent="downloadItem('xls',importacion.id_importacion)"><i aria-hidden="true"
                                                                                                      class="fa fa-eye"></i></a>
                            </td>
                        </tr>

                        <tr :key="importacion.id_importacion" v-if="importacion.mostrar">
                            <td></td>
                            <td colspan="5">
                                <table class="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Peso</th>
                                        <th>Valor unitario</th>
                                        <th>FOB</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                            :key="productosDetalle.id_importacion_producto"
                                            v-for="productosDetalle in importacion.importacion_productos">
                                        <td>{{ productosDetalle.descripcion_producto }}</td>
                                        <td>{{ productosDetalle.cantidad }}</td>
                                        <td>{{ productosDetalle.peso }}</td>
                                        <td>{{ productosDetalle.valor_unitario }}</td>
                                        <td>{{productosDetalle.valor_fobx}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td></td>
                        </tr>
                    </template>
                    <tr v-if="!importaciones.length">
                        <td class="text-center" colspan="11">Sin datos</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <pagination
                    :items="importaciones"
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
    import importacionx from "../../api/importaciones";
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
                    limit: 5,
                    limitOptions: [5, 10, 15, 20],
                    search: {
                        field: "numero_poliza",
                        value: ""
                    }
                },
                descargando: false,
                importaciones: [],
                total: 0
            };
        },
        methods: {
            mostrarProductos(key) {
                if (this.importaciones[key].mostrar) {
                    this.importaciones[key].mostrar = 0;
                } else {
                    this.importaciones[key].mostrar = 1;
                }
            },
            obtenerImportaciones() {
                let self = this;
                self.loading = true;
                importacionx.obtener(
                    self.filter,
                    data => {
                        data.rows.forEach((importaciones, key) => {
                            data.rows[key].mostrar = 0;
                        });
                        self.importaciones = data.rows;
                        self.total = data.total;
                        self.loading = false;
                    },
                    err => {
                      self.loading = false;
                        console.log(err);
                    }
                );
            },
            downloadItem(extension, id_importacionx) {
              var self = this;
                if (!this.descargando) {
                  self.loading = true;
                    let url = 'inventario/importaciones/reporte/' + extension + '/' + id_importacionx;
                    this.descargando = true;
                    alertify.success("Descargando datos, espere un momento.....", 5);
                    axios.get(url, {responseType: 'blob'})
                        .then(({data}) => {
                            let blob = new Blob([data], {type: 'application/pdf'})

                            extension === 'xls' ? blob = new Blob([data], {type: 'application/octet-stream'}) : blob = new Blob([data], {type: 'application/pdf'});

                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'FormatoImportacion.' + extension;
                            link.click()
                            this.descargando = false;
                            self.loading = false;
                        }).catch(function (error) {
                      alertify.error("Error Descargando archivo.....", 5);
                      self.descargando = false;
                      self.loading = false;
                    })
                } else {
                    alertify.warning("Espere a que se complete la descarga anterior", 5);
                }
            },
            changeLimit(limit) {
                this.filter.page = 1;
                this.filter.limit = limit;
                this.obtenerImportaciones();
            },
            changePage(page) {
                this.filter.page = page;
                this.obtenerImportaciones();
            },
        },
        /*components: {
           pagination: Pagination
         },*/
        mounted() {
            this.obtenerImportaciones();
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