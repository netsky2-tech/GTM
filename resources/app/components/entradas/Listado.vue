<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Administrar Entradas de productos</div>
        <div class="box-description">Listado de Entradas</div>
        <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo inventario</router-link>> Entradas</div>
      </div>
      <div class="row">
        <div class="col-md-6 sm-text-center">
          <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-entrada' }">
            <i class="pe-7s-plus"></i> Registrar Entrada
          </router-link>
        </div>
        <div
          @keyup.enter="filter.page = 1;obtenerEntradas();"
          class="col-md-6 sm-text-center form-inline justify-content-end"
        >
          <select
            v-model="filter.search.field"
            class="form-control mb-1 mr-sm-1 mb-sm-0 search-field"
          >
            <option value="codigo_entrada">Código</option>
          </select>
          <input
            v-model="filter.search.value"
            class="form-control mb-1 mr-sm-1 mb-sm-0"
            placeholder="Buscar"
            type="text"
          >
          <button class="btn btn-info" @click="filter.page = 1;obtenerEntradas();">
            <i class="pe-7s-search"></i> Buscar
          </button>
        </div>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Código entrada</th>
              <th>Tipo entrada</th>
              <th>Fecha Entrada</th>
              <th>Proveedor</th>
              <th>Bodega</th>
              <th class="text-center table-number">Estado</th>
              <th class="text-center action">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(entrada,key) in entradas">
              <tr :key="entrada.id_entrada">
                <td class="detail-link">
                  <div  v-tooltip="'Mostrar productos'" @click="mostrarProductos(key)" class="link"></div>
                </td>
                <td>{{ entrada.codigo_entrada }}</td>
                <td>{{ entrada.entrada_tipo.descripcion }}</td>
                <td>{{ formatDate(entrada.fecha_entrada) }}</td>
                <td>{{ entrada.entrada_proveedor? entrada.entrada_proveedor.nombre_comercial:'N/A' }}</td>
                <td>{{ entrada.entrada_bodega.descripcion }}</td>
                <td class="text-center">
                  <div v-if="entrada.estado===0">
                    <span class="badge badge-danger">Cancelada</span>
                  </div>
                  <div v-if="entrada.estado===1">
                    <span class="badge badge-blue">Emitida</span>
                  </div>
                  <div v-if="entrada.estado===2">
                    <span class="badge badge-success">Recibida</span>
                  </div>
                  <div v-if="entrada.estado===99">
                    <span class="badge badge-grey">Borrador</span>
                  </div>
                </td>
                <td class="text-center">
                  <template v-if="entrada.estado===1">
                    <router-link  v-tooltip="'Recibir Entrada'" :to="{ name: 'recibir-entrada', params: { id_entrada: entrada.id_entrada } }" tag="a"><i class="icon-check"></i></router-link>
                    <!--<template v-if="[1].indexOf(Number(entrada.id_tipo_entrada)) < 0">
                      <router-link  v-tooltip="'Recibir Entrada'" :to="{ name: 'recibir-entrada', params: { id_entrada: entrada.id_entrada } }" tag="a"><i class="icon-check"></i></router-link>
                    </template>
                    <template v-else>
                      <router-link  v-tooltip="'Recibir Compra'" :to="{ name: 'recibir-entrada-compra', params: { id_entrada: entrada.id_entrada } }" tag="a"><i class="icon-check"></i></router-link>
                    </template>-->
                  </template>
                  <template v-if="entrada.estado===99">
                    <template v-if="[5,6,7].indexOf(Number(entrada.id_tipo_entrada)) <= 0">
                      <router-link v-tooltip="'Actualizar Datos de Entrada'" :to="{ name: 'actualizar-entrada', params: { id_entrada: entrada.id_entrada } }" tag="a"><i class="icon-pencil"></i></router-link>
                    </template>
                  </template>

                  <router-link
                          v-tooltip="'Mostrar Detalles de Entrada'"
                          :to="{ name: 'mostrar-entrada', params: { id_entrada: entrada.id_entrada } }"
                          tag="a"
                  >
                    <i aria-hidden="true" class="fa fa-eye"></i>
                  </router-link>

                  <template v-if="entrada.estado===2">
                    <template v-if="[8].indexOf(Number(entrada.id_tipo_entrada)) <= 0 && entrada.productos_usados">
                      <a  v-tooltip="'Descargar Codigos de Baterías Usadas'" @click.prevent="descargarCodigosUsados(entrada.id_entrada)">  <i class="fa fa-file-pdf-o"></i></a>
                    </template>
                  </template>

               </td>
              </tr>

              <tr v-if="entrada.mostrar" :key="entrada.codigo_entrada">
                <td></td>
                <td colspan="8">
                  <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th class="text-center table-number">Código producto</th>
                        <th>Descripción producto</th>
                        <th>Unidad de medida</th>
                        <th>Cantidad</th>
                        <!--<th>Precio de compra</th>
                        <th>Subtotal</th>-->
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="productosDetalle in entrada.entrada_productos"
                        :key="productosDetalle.id_entrada_producto">
                        <td>{{ productosDetalle.codigo_producto }}</td>
                        <td>{{ productosDetalle.descripcion_producto }}</td>
                        <td>{{ productosDetalle.unidad_medida }}</td>
                        <td>{{ productosDetalle.cantidad_solicitada }}</td>
                        <!--<td>{{ productosDetalle.precio_unitario }}</td>
                        <td>{{(Number(productosDetalle.cantidad_solicitada * Number(productosDetalle.precio_unitario)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))}}</td>-->
                      </tr>
                    </tbody>
                    <tfoot>

                    <!--<tr>
                      <td colspan="4"></td>
                      <td>Subtotal</td>
                      <td> <strong>C$ {{entrada.subtotal | formatMoney(2)}}</strong></td>
                    </tr>-->

                    <tr>
                      <td class="item-footer" colspan="2"> Total Unidades</td>
                      <td></td>
                      <td  class="item-footer">
                        <strong>{{entrada.tot_unidades}}</strong>
                      </td>
                    </tr>

                    </tfoot>
                  </table>
                </td>
                <td></td>
              </tr>
            </template>
            <tr v-if="!entradas.length">
              <td class="text-center" colspan="10">Sin datos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        @changePage="changePage"
        @changeLimit="changeLimit"
        :items="entradas"
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
import entrada from "../../api/entradas";
//import Pagination from "../layout/Pagination";

export default {
  data() {
    return {
      loading:true,
      msg: 'Cargando el contenido espere un momento',
      url : '',   //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 20,
        limitOptions: [20, 40, 60, 80],
        search: {
          field: "codigo_entrada",
          value: ""
        }
      },
      entradas: [],
      total: 0
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD')
    },
    mostrarProductos(key) {
      if (this.entradas[key].mostrar) {
        this.entradas[key].mostrar = 0;
      } else {
        this.entradas[key].mostrar = 1;
      }
    },
    obtenerEntradas() {
      var self = this;
      entrada.obtenerEntradas(
        self.filter,
        data => {
          data.rows.forEach((entradas, key) => {
            data.rows[key].mostrar = 0;
          });
          self.entradas = data.rows;
          self.total = data.total;
          self.loading=false;
        },
        err => {
          console.log(err);
        }
      );
    },

    descargarCodigosUsados (id_entrada) {
      var self = this;
      if (id_entrada) {
        self.loading = true;
        let formato = 'pdf';
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('compras/usados/reporte-codigos',
                {
                  id_entrada : id_entrada,
                  extension : formato
                },{responseType: 'blob'})
                .then(({data}) => {
                  let blob = new Blob([data], {type: 'application/pdf'})
                  formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                  let link = document.createElement('a');
                  link.href = window.URL.createObjectURL(blob)
                  link.download = 'ReporteCodigosCompraUsado.'+ formato;
                  link.click()
                  self.loading = false;
                }).catch(function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        })
      }else{
        alertify.warning("Seleccione un cliente!",5);
        self.loading = false;
      }

      /*}else{
          alertify.warning("Espere a que se complete la descarga anterior",5);
      }*/
    },


    changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerEntradas();
    },
    changePage(page) {
      this.filter.page = page;
      this.obtenerEntradas();
    },
  },
  /*components: {
    pagination: Pagination
  },*/
  mounted() {
    this.obtenerEntradas();
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