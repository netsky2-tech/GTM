<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Administrar Solicitudes de Compra</div>
        <div class="box-description">Listado de Solicitudes</div>
        <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-compras' }"> Módulo compras</router-link>> Solicitudes de compra</div>
      </div>
      <div class="row">
        <div class="col-md-6 sm-text-center">
          <router-link :to="{ name: 'registrar-solicitud-compra' }" class="btn btn-success" tag="button">
            <i class="pe-7s-plus"></i> Registrar Solicitud
          </router-link>
        </div>
        <div
          @keyup.enter="filter.page = 1;obtenerSolicitudesCompra();"
          class="col-md-6 sm-text-center form-inline justify-content-end"
        >
          <select
            class="form-control mb-1 mr-sm-1 mb-sm-0 search-field"
            v-model="filter.search.field"
          >
            <option value="observacion">observacion</option>
          </select>
          <input
            class="form-control mb-1 mr-sm-1 mb-sm-0"
            placeholder="Buscar"
            type="text"
            v-model="filter.search.value"
          >
          <button @click="filter.page = 1;obtenerSolicitudesCompra();" class="btn btn-info">
            <i class="pe-7s-search"></i> Buscar
          </button>
        </div>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <!--<th></th>-->
              <th>ID</th>
              <th>Moneda</th>
              <th>Area</th>
              <th>Trabajador</th>
              <th>Fecha Necesidad</th>
              <th class="text-center table-number">Estado</th>
              <th class="text-center action">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(solicitud,key) in solicitudes_compras">
              <tr :key="solicitud.id_solicitud_compra">
                <!--<td class="detail-link">
                  <div  v-tooltip="'Mostrar Productos'" @click="mostrarProductos(key)" class="link"></div>
                </td>-->
                <td>{{ solicitud.id_solicitud_compra }}</td>
                <td>{{ solicitud.solicitud_moneda? solicitud.solicitud_moneda.descripcion : 'N/A' }}</td>
                <td>{{ solicitud.solicitud_area? solicitud.solicitud_area.descripcion : 'N/A' }}</td>
                <td>{{ solicitud.solicitud_trabajador? solicitud.solicitud_trabajador.primer_nombre + ' ' + solicitud.solicitud_trabajador.primer_apellido  : 'N/A' }}</td>
                <td>{{ solicitud.f_necesidad }}</td>
                <td class="text-center">
                  <div v-if="solicitud.estado===0">
                    <span class="badge badge-danger">Rechazado</span>
                  </div>
                  <div v-if="solicitud.estado===1">
                    <span class="badge badge-blue">Solicitado</span>
                  </div>
                  <div v-if="solicitud.estado===2">
                    <span class="badge badge-success">Cotizado</span>
                  </div>
                  <div v-if="solicitud.estado===3">
                    <span class="badge badge-success">Autorizado</span>
                  </div>
                  <div v-if="solicitud.estado===4">
                    <span class="badge badge-success">Orden Compra</span>
                  </div>
                  <div v-if="solicitud.estado===99">
                    <span class="badge badge-grey">Borrador</span>
                  </div>
                </td>
                <td class="text-center">
                  <router-link
                    v-tooltip="'Mostrar Detalles de Solicitud de Compra'"
                    :to="{ name: 'mostrar-solicitud-compra', params: { id_solicitud_compra: solicitud.id_solicitud_compra } }"
                    tag="a"
                  >
                    <i aria-hidden="true" class="fa fa-eye"></i>
                  </router-link>
                  <template v-if="solicitud.estado===99">
                    <router-link  v-tooltip="'Actualizar de Solicitud de Compra'" :to="{ name: 'actualizar-solicitud-compra', params: { id_solicitud_compra: solicitud.id_solicitud_compra } }" tag="a"><i class="icon-pencil"></i></router-link>
                  </template>
                  <template v-if="[1,2,3].indexOf(Number(solicitud.estado)) >= 0">
                    <router-link  v-tooltip="solicitud.estado===1?'Confirmar Cotización de Solicitud': solicitud.estado===2?'Autorizar Solicitud de Compra':'Revisar Estado de Solicitud de Compra'" :to="{ name: 'revisar-solicitud-compra', params: { id_solicitud_compra: solicitud.id_solicitud_compra } }" tag="a"> <i aria-hidden="true" class="fa fa-check-circle"></i></router-link>
                  </template>
                </td>
              </tr>

              <tr v-if="solicitud.mostrar">
                <td></td>
                <td colspan="9">
                  <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th class="text-center table-number">Código producto</th>
                        <th>Descripción producto</th>
                        <th>Unidad de medida</th>
                        <th>Cantidad</th>
                        <th>Precio de compra</th>
                        <th>Descuento %</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        :key="productosDetalle.id_solicitud_compra_producto"
                        v-for="productosDetalle in solicitud.solicitud_productos">
                        <td>{{ productosDetalle.solicitud_producto.codigo_sistema }}</td>
                        <td>{{ productosDetalle.solicitud_producto.descripcion }}</td>
                        <td>{{ productosDetalle.solicitud_producto.unidad_medida.unidad_medida }}</td>
                        <td>{{ productosDetalle.cantidad }}</td>
                        <td>{{ productosDetalle.precio_info }}</td>
                        <td>{{ productosDetalle.descuento }}</td>
                        <td>{{productosDetalle.subtotal}}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                      <td colspan="5"></td>
                      <td>Subtotal</td>
                      <td> <strong>{{solicitud.solicitud_moneda ? solicitud.solicitud_moneda.codigo : ''}} {{solicitud.subtotal | formatMoney(2)}}</strong></td>
                    </tr>
                    <tr>
                      <td colspan="5"></td>
                      <td >Descuento</td>
                      <td> <strong>{{solicitud.solicitud_moneda ? solicitud.solicitud_moneda.codigo : ''}} {{solicitud.total_descuento | formatMoney(2)}}</strong></td>
                    </tr>
                    <tr>
                      <td class="item-footer" colspan="2"> Total Unidades</td>
                      <td></td>
                      <td  class="item-footer">
                        <strong>{{solicitud.tot_unidades}}</strong>
                      </td>
                      <td></td>
                      <td>Total</td>
                      <td> <strong>{{solicitud.solicitud_moneda ? solicitud.solicitud_moneda.codigo : ''}} {{solicitud.total | formatMoney(2)}}</strong></td>
                    </tr>
                    </tfoot>
                  </table>
                </td>
                <td></td>
              </tr>
            </template>
            <tr v-if="!solicitudes_compras.length">
              <td class="text-center" colspan="11">Sin datos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        :items="solicitudes_compras"
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
import solicitud from "../../api/solicitudes_compras";
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
          field: "observacion",
          value: ""
        }
      },
      solicitudes_compras: [],
      total: 0
    };
  },
  methods: {
    mostrarProductos(key) {
      if (this.solicitudes_compras[key].mostrar) {
        this.solicitudes_compras[key].mostrar = 0;
      } else {
        this.solicitudes_compras[key].mostrar = 1;
      }
    },
    obtenerSolicitudesCompra() {
      var self = this;
      self.loading = true;
      solicitud.obtenerSolicitudesCompra(
        self.filter,
        data => {
          data.rows.forEach((solicitudes_compras, key) => {
            data.rows[key].mostrar = 0;
          });
          self.solicitudes_compras = data.rows;
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
      this.obtenerSolicitudesCompra();
    },
    changePage(page) {
      this.filter.page = page;
      this.obtenerSolicitudesCompra();
    },
  },
  /*components: {
    pagination: Pagination
  },*/
  mounted() {
    this.obtenerSolicitudesCompra();
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