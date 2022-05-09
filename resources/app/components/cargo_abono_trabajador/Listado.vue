<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Administrar Cargos y Abonos Empleados</div>
        <div class="box-description">Listado Cargos y Abonos Empleados</div>
      </div>
      <div class="row">
        <div class="col-md-6 sm-text-center">
          <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-cargo-abono-trabajador' }">
            <i class="pe-7s-plus"></i> Registrar Cargo/Abono
          </router-link>
        </div>
        <div
          @keyup.enter="filter.page = 1;obtenerCargoAbonoTrabajador();"
          class="col-md-6 sm-text-center form-inline justify-content-end"
        >
          <select
            v-model="filter.search.field"
            class="form-control mb-1 mr-sm-1 mb-sm-0 search-field"
          >
            <option value="no_documento">No Documento</option>
          </select>
          <input
            v-model="filter.search.value"
            class="form-control mb-1 mr-sm-1 mb-sm-0"
            placeholder="Buscar"
            type="text"
          >
          <button class="btn btn-info" @click="filter.page = 1;obtenerCargoAbonoTrabajador();">
            <i class="pe-7s-search"></i> Buscar
          </button>
        </div>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>No. Recibo</th>
              <th>Fecha</th>
              <th>Empleado</th>
              <th>Monto</th>
              <th>Concepto</th>
              <th class="text-center action">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(cargo_abono_trabajador,key) in cargos_abonos_trabajador">
              <tr :key="cargo_abono_trabajador.cargo_abono_trabajador.id_cargo_abono_trabajador">
                <td>{{ cargo_abono_trabajador.no_documento }}</td>
                <td>{{ formatDate(cargo_abono_trabajador.fecha_emision)}}</td>
                <td>{{ cargo_abono_trabajador.cargo_abono_trabajador? cargo_abono_trabajador.cargo_abono_trabajador.primer_nombre+' '+cargo_abono_trabajador.cargo_abono_trabajador.primer_apellido:''}}</td>
                <td>C$ {{ Number(cargo_abono_trabajador.monto_total) | formatMoney(2) }}</td>
                <td>{{ cargo_abono_trabajador.concepto }}</td>

                <td class="text-center">
                  <!--<router-link
                          v-tooltip="'Mostrar detalles de recibo'"
                          :to="{ name: 'mostrar-cargo-abono-trabajador', params: { id_cargo_abono_trabajador: cargo_abono_trabajador.id_cargo_abono_trabajador } }"
                          tag="a"
                  >
                    <i aria-hidden="true" class="fa fa-eye"></i>
                  </router-link>
                  -->
                </td>
              </tr>
            </template>
            <tr v-if="!cargos_abonos_trabajador.length">
              <td class="text-center" colspan="6">Sin datos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        @changePage="changePage"
        @changeLimit="changeLimit"
        :items="cargos_abonos_trabajador"
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
import cargo_abono_trabajador from "../../api/cargo_abono_trabajador";
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
          field: "no_documento",
          value: ""
        }
      },
      cargos_abonos_trabajador: [],
      total: 0
    };
  },
  methods: {
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD')
    },
    mostrarPagos(key) {
      if (this.cargos_abonos_trabajador[key].mostrar) {
        this.cargos_abonos_trabajador[key].mostrar = 0;
      } else {
        this.cargos_abonos_trabajador[key].mostrar = 1;
      }
    },
    obtenerCargoAbonoTrabajador() {
      var self = this;
      cargo_abono_trabajador.obtener(
        self.filter,
        data => {
          data.rows.forEach((cargos_abonos_trabajador, key) => {
            data.rows[key].mostrar = 0;
          });
          self.cargos_abonos_trabajador = data.rows;
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
      this.obtenerCargoAbonoTrabajador();
    },
    changePage(page) {
      this.filter.page = page;
      this.obtenerCargoAbonoTrabajador();
    },

  },
  /*components: {
    pagination: Pagination
  },*/
  mounted() {
    this.obtenerCargoAbonoTrabajador();
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