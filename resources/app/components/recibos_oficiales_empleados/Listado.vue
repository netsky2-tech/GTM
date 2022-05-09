<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Administrar Recibos</div>
        <div class="box-description">Listado de Recibos</div>
      </div>
      <div class="row">
        <div class="col-md-6 sm-text-center">
          <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-recibo-oficial-trabajador' }">
            <i class="pe-7s-plus"></i> Registrar Recibo
          </router-link>
        </div>
        <div
          @keyup.enter="filter.page = 1;obtenerRecibos();"
          class="col-md-6 sm-text-center form-inline justify-content-end"
        >
          <select
            v-model="filter.search.field"
            class="form-control mb-1 mr-sm-1 mb-sm-0 search-field"
          >
            <option value="nombre_persona">Nombre Persona</option>
          </select>
          <input
            v-model="filter.search.value"
            class="form-control mb-1 mr-sm-1 mb-sm-0"
            placeholder="Buscar"
            type="text"
          >
          <button class="btn btn-info" @click="filter.page = 1;obtenerRecibos();">
            <i class="pe-7s-search"></i> Buscar
          </button>
        </div>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>No. Recibo</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Monto C$</th>
              <th>Concepto</th>
              <th class="text-center action">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(recibo,key) in recibos">
              <tr :key="recibo.id_recibo">
                <td class="detail-link">
                  <div v-tooltip="'Mostrar Detalle'" @click="mostrarPagos(key)" class="link"></div>
                </td>
                <td>{{ recibo.nombre_persona }}</td>
                <td>{{ formatDate(recibo.fecha_emision)}}</td>
                <td>{{ recibo.recibo_trabajador? recibo.recibo_trabajador.primer_nombre+' '+recibo.recibo_trabajador.primer_apellido:''}}</td>
                <td>{{ Number(recibo.monto_total) | formatMoney(2) }}</td>
                <td>{{ recibo.concepto }}</td>

                <td class="text-center">
                  <router-link
                          v-tooltip="'Mostrar detalles de recibo'"
                          :to="{ name: 'mostrar-recibo-oficial-trabajador', params: { id_recibo: recibo.id_recibo } }"
                          tag="a"
                  >
                    <i aria-hidden="true" class="fa fa-eye"></i>
                  </router-link>
                </td>
              </tr>
              <tr v-if="recibo.mostrar">
                <td ></td>
                <td colspan="6">
                  <table class="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Descripción Pago</th>
                        <th>Monto C$</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="recibosDetalle in recibo.recibo_detalles"
                        :key="recibosDetalle.id_recibo_producto">
                        <td>{{ recibosDetalle.descripcion_pago }}</td>
                        <td>{{ recibosDetalle.monto  | formatMoney(2)}}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                  </table>
                </td>
                <td></td>
              </tr>
            </template>
            <tr v-if="!recibos.length">
              <td class="text-center" colspan="6">Sin datos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        @changePage="changePage"
        @changeLimit="changeLimit"
        :items="recibos"
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
import recibo from "../../api/recibos_oficiales";
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
          field: "nombre_persona",
          value: "",
          type:2,
        }
      },
      recibos: [],
      total: 0
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD')
    },
    mostrarPagos(key) {
      if (this.recibos[key].mostrar) {
        this.recibos[key].mostrar = 0;
      } else {
        this.recibos[key].mostrar = 1;
      }
    },
    obtenerRecibos() {
      var self = this;
      recibo.obtener(
        self.filter,
        data => {
          data.rows.forEach((recibos, key) => {
            data.rows[key].mostrar = 0;
          });
          self.recibos = data.rows;
          self.total = data.total;
          self.loading = false;
        },
        err => {
          console.log(err);
          self.loading = false;
        }
      );
    },
    changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerRecibos();
    },
    changePage(page) {
      this.filter.page = page;
      this.obtenerRecibos();
    },

  },
  /*components: {
    pagination: Pagination
  },*/
  mounted() {
    this.obtenerRecibos();
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