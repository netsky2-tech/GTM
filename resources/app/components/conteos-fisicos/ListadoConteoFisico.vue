<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Administrar Conteos Fisicos</div>
        <div class="box-description">Listado de Conteos</div>
        <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo inventario</router-link>> Conteos Fisicos</div>
      </div>
      <div class="row">
        <div class="col-md-6 sm-text-center">
          <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-conteo-fisico-1' }">
            <i class="pe-7s-plus"></i> Registrar Conteo
          </router-link>
        </div>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Fecha Conteo</th>
              <th>Trabajador Registra</th>
              <th>Bodega</th>
              <th class="text-center table-number">Estado</th>
              <th class="text-center action">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(entrada,key) in entradas">
              <tr :key="entrada.id_conteo_fisico">
                <td>{{ entrada.fecha_conteo|formatDate }}</td>
                <td>{{ entrada.trabajador_conteo? entrada.trabajador_conteo.nombre_completo:'N/A' }}</td>
                <td>{{ entrada.conteo_bodega? entrada.conteo_bodega.descripcion:'N/A' }}</td>
                <td class="text-center">
                  <div v-if="entrada.estado===0">
                    <span class="badge badge-danger">Anulada</span>
                  </div>
                  <div v-if="entrada.estado===99">
                    <span class="badge badge-grey">Borrador</span>
                  </div>
                  <div v-if="entrada.estado===1">
                    <span class="badge badge-blue">Registrada</span>
                  </div>
                  <div v-if="entrada.estado===2">
                    <span class="badge badge-success">Emitida</span>
                  </div>
                </td>
                <td  class="text-center">
                <template  v-if="([1,99].indexOf(entrada.estado) >= 0)" >
                  <router-link v-tooltip="'Editar Conteo'" tag="a" :to="{ name: 'actualizar-conteo-fisico-1', params: { id_conteo_fisico: entrada.id_conteo_fisico } }"><i class="icon-pencil"></i></router-link>
                </template>
                <router-link
                        v-tooltip="'Mostrar Detalles de Conteo'"
                        :to="{ name: 'mostrar-conteo-fisico-1', params: { id_conteo_fisico: entrada.id_conteo_fisico } }"
                        tag="a"
                >
                  <i aria-hidden="true" class="fa fa-eye"></i>
                </router-link>
                </td>
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
import entrada from "../../api/conteo-fisico";
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
          field: "id_conteo_fisico",
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
      entrada.obtener(
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