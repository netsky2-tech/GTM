<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Administrar Inventarios Físico </div>
        <div class="box-description">Listado de levantamientos de inventario físico</div>
        <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo Inventario</router-link>> Inventarios Físicos</div>
      </div>
      <div class="row">
        <div class="col-md-6 sm-text-center">
          <router-link :to="{ name: 'registrar-conteo-fisico' }" class="btn btn-success" tag="button">
            <i class="pe-7s-plus"></i> Registrar Levantamiento
          </router-link>
        </div>
        </div>

      <div class="table-responsive mt-3">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <!--<th></th>-->
              <th>Fecha Conteo</th>
              <th>Area</th>
              <th>Sucursal</th>
              <th>Bodega</th>

              <th class="text-center table-number">Estado</th>
              <th class="text-center action">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(conteox,key) in inventario_conteos">
              <tr :key="conteox.id_inventario_fisico">
                <!--<td class="detail-link">
                  <div  v-tooltip="'Mostrar Productos'" @click="mostrarProductos(key)" class="link"></div>
                </td>-->
                <td>{{ conteox.f_inventario }}</td>
                <td>{{ conteox.conteo_bodega? conteox.conteo_bodega.descripcion : 'N/A' }}</td>
                <td>{{ conteox.conteo_sucursal? conteox.conteo_sucursal.descripcion : 'N/A' }}</td>
                <td>{{ conteox.conteo_area? conteox.conteo_area.descripcion : 'N/A' }}</td>

                <td class="text-center">
                  <div v-if="conteox.estado===0">
                    <span class="badge badge-danger">Anulado</span>
                  </div>
                  <div v-if="conteox.estado===1">
                    <span class="badge badge-blue">Completado</span>
                  </div>
                  <div v-if="conteox.estado===99">
                    <span class="badge badge-grey">Borrador</span>
                  </div>
                </td>
                <td class="text-center">
                  <router-link
                    v-tooltip="'Mostrar Detalles del levantamiento'"
                    :to="{ name: 'mostrar-conteo-fisico', params: { id_inventario_fisico: conteox.id_inventario_fisico } }"
                    tag="a"
                  >
                    <i aria-hidden="true" class="fa fa-eye"></i>
                  </router-link>
                  <template v-if="conteox.estado===99">
                    <router-link  v-tooltip="'Actualizar Levantamiento de Inventario'" :to="{ name: 'actualizar-conteo-fisico', params: { id_inventario_fisico: conteox.id_inventario_fisico } }" tag="a"><i class="icon-pencil"></i></router-link>
                  </template>
                  <template v-if="conteox.estado===1">
                  <a  v-tooltip="'Descargar Comparativo de Inventario Fisico vs Teorico'" @click.prevent="downloadItem(conteox.id_inventario_fisico)">  <i class="fa fa-download"></i> Descargar</a>
                  </template>
                </td>
              </tr>
            </template>
            <tr v-if="!inventario_conteos.length">
              <td class="text-center" colspan="11">Sin datos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        :items="inventario_conteos"
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
import conteo from "../../api/inventario_conteo";
import loadingImage from '../../assets/images/block50.gif'
//import Pagination from "../layout/Pagination";
//inventario/conteo-fisico/reporte-comparativo/
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
          field: "hora_inicio",
          value: ""
        }
      },
      inventario_conteos: [],
      total: 0
    };
  },
  methods: {
    downloadItem (id_inventario_fisicox) {
      var self = this;
      //self.loading = true;
      //if(!this.descargando) {
      if (id_inventario_fisicox) {
        let url = 'inventario/conteo-fisico/reporte-comparativo/'+id_inventario_fisicox;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get(url, {responseType: 'blob'})
                .then(({data}) => {
                  let blob = new Blob([data], {type: 'application/pdf'})
                  let link = document.createElement('a');
                  link.href = window.URL.createObjectURL(blob)
                  link.download = 'ReporteComparativo.pdf';
                  link.click()
                  self.loading = false;
                  //this.descargando = false;
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
    obtener() {
      var self = this;
      self.loading = true;
      conteo.obtener(
        self.filter,
        data => {

          self.inventario_conteos = data.rows;
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