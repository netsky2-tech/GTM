<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Administrar Facturas</div>
        <div class="box-description">Listado de Facturas</div>
        <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-caja' }"> Módulo Caja y Banco</router-link>> Facturación</div>
      </div>
      <div class="row">

        <div class="col-sm-2 sm-text-center form-inline justify-content-start">
          <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-factura' }">
            <i class="pe-7s-plus"></i> Facturar
          </router-link>
        </div>

        <div
          @keyup.enter="filter.page = 1;obtenerFacturas();"
          class="col-sm-10 sm-text-center form-inline justify-content-end"
        >
          <select
            v-model="filter.search.field"
            class="form-control mb-1 mr-sm-1 mb-sm-0 search-field"
          >
            <option value="no_documento">No. Documento</option>
          </select>
          <input
            v-model="filter.search.value"
            class="form-control mb-1 mr-sm-1 mb-sm-0"
            placeholder="Buscar"
            type="text"
          >
          <button class="btn btn-info" @click="filter.page = 1;obtenerFacturas();">
            <i class="pe-7s-search"></i> Buscar
          </button>
        </div>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>No. Factura</th>
              <th>Fecha</th>
              <th>Vendedor</th>
              <th>Sucursal</th>
              <th>Bodega</th>
              <th>Cliente</th>
              <th class="text-center table-number">Estado</th>
              <th colspan="2" class="text-center action">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(factura,key) in facturas">
              <tr :key="factura.id_factura">
                <td class="detail-link">
                  <div v-tooltip="'Mostrar Detalle'" @click="mostrarProductos(key)" class="link"></div>
                </td>
                <td>{{ factura.no_documento }}</td>
                <td>{{ factura.f_factura }}</td>
                <td>{{ factura.factura_vendedor.nombre_completo }}</td>
                <td>{{ factura.factura_sucursal? factura.factura_sucursal.descripcion:'N/A' }}</td>
                <td>{{ factura.factura_bodega.descripcion }}</td>
                <td>{{ factura.factura_cliente.nombre_comercial }}</td>
                <td class="text-center">
                  <div v-if="factura.estado===0">
                    <span class="badge badge-danger">Anulada</span>
                  </div>
                  <div v-if="factura.estado===1">
                    <span class="badge badge-blue">Facturada</span>
                  </div>
                  <div v-if="factura.estado===2">
                    <span class="badge badge-success">Despachada</span>
                  </div>
                </td>
                <td class="text-center">
                  <a :disabled="descargando"
                     @click.prevent="downloadItem('pdf',factura.id_factura)"><i aria-hidden="true"
                                                                                        class="fa fa-eye"></i></a>

                  <!--<router-link
                          v-tooltip="'Mostrar Detalles de Factura'"
                          :to="{ name: 'mostrar-factura', params: { id_factura: factura.id_factura } }"
                          tag="a"
                  >
                    <i aria-hidden="true" class="fa fa-eye"></i>
                  </router-link>-->

                </td>
                <td class="text-center">
                  <a v-if="factura.estado === 1"  v-tooltip="'Anular Factura'" @click.prevent="anular(factura.id_factura)">  <i class="fa fa-remove"></i></a>
                </td>
              </tr>
              <tr v-if="factura.mostrar" :key="factura.codigo_factura">
                <td ></td>
                <td colspan="7">
                  <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th class="text-center">Código producto</th>
                        <th>Descripción producto</th>
                        <th>Unidad de medida</th>
                        <th>Precio</th>
                        <th>Cantidad Solicitada</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="productosDetalle in factura.factura_productos"
                        :key="productosDetalle.id_factura_producto">
                        <td>{{ productosDetalle.codigo_producto }}</td>
                        <td>{{ productosDetalle.descripcion_producto }}</td>
                        <td>{{ productosDetalle.unidad_medida }}</td>
                        <td>{{ productosDetalle.precio}}</td>
                        <td>{{ productosDetalle.cantidad }}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                      <td class="item-footer" colspan="3"> </td>
                      <td>Total Unidades</td>
                      <td  class="item-footer">
                        <strong>{{factura.tot_unidades}}</strong>
                      </td>
                    </tr>
                    </tfoot>
                  </table>
                </td>
                <td></td>
              </tr>
            </template>
            <tr v-if="!facturas.length">
              <td class="text-center" colspan="10">Sin datos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        @changePage="changePage"
        @changeLimit="changeLimit"
        :items="facturas"
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
import factura from "../../api/facturas";
import loadingImage from '../../assets/images/block50.gif'
import compra_usado from "../../api/compras_usados";


export default {
  data() {
    return {
      descargando:false,
      loading:true,
      msg: 'Cargando el contenido espere un momento',
      url : '/public'+loadingImage,   //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 5,
        limitOptions: [5, 10, 15, 20],
        search: {
          field: "no_documento",
          value: ""
        }
      },
      facturas: [],
      total: 0
    };
  },
  methods: {

    anular(id_factura){


      this.$swal.fire({
        title: 'Esta seguro de anular esta factura?',
        text: "Digite la causa de la anulación de la factura",
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, anular factura'
      }).then((result) => {
        if (result.value) {
          factura.cancelar(
                  {
                    id_factura : id_factura,
                    causa_anulacion:result.value
                  },
                  data => {
                    this.$swal.fire(
                            'Anulada',
                            'Los documentos vinculados con esta factura han sido anulados',
                            'success'
                    )
                    this.obtenerFacturas();
                  },
                  err => {
                    this.$swal.fire(
                            'No se puede anular factura!',
                            err,
                            'warning'
                    )
                  }
          );



        }
      })

    },

    mostrarProductos(key) {
      if (this.facturas[key].mostrar) {
        this.facturas[key].mostrar = 0;
      } else {
        this.facturas[key].mostrar = 1;
      }
    },
    obtenerFacturas() {
      var self = this;
      self.loading = true;
      factura.obtenerFacturas(
        self.filter,
        data => {
          data.rows.forEach((facturas, key) => {
            data.rows[key].mostrar = 0;
          });
          self.facturas = data.rows;
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
      this.obtenerFacturas();
    },
    changePage(page) {
      this.filter.page = page;
      this.obtenerFacturas();
    },
    downloadItem(extension, id_importacionx) {
      var self = this;
      if (!this.descargando) {
        self.loading = true;
        let url = 'inventario/facturas/reporte/' + extension + '/' + id_importacionx;
        this.descargando = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get(url, {responseType: 'blob'})
                .then(({data}) => {
                  let blob = new Blob([data], {type: 'application/pdf'})

                  extension === 'xls' ? blob = new Blob([data], {type: 'application/octet-stream'}) : blob = new Blob([data], {type: 'application/pdf'});

                  let link = document.createElement('a');
                  link.href = window.URL.createObjectURL(blob)
                  link.download = 'FormatoFactura.' + extension;
                  link.click()
                  //this.descargando = false;
                  self.loading = false;
                  self.descargando = false;
                }).catch(function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.descargando = false;
          self.loading = false;
        })
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },


  },
  /*components: {
    pagination: Pagination
  },*/
  mounted() {
    this.obtenerFacturas();
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