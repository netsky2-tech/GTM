<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Compras de Baterías Usadas</div>
        <div class="box-description">Listado de compras</div>
        <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-compras' }"> Módulo compras</router-link>> Compra de Baterías Usadas</div>
      </div>
      <div class="row">
        <div class="col-md-6 sm-text-center">
          <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-compra-usado' }">
            <i class="pe-7s-plus"></i> Registrar Compra de Usado
          </router-link>
        </div>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>No. Recibo</th>
              <th>Fecha Entrada</th>
              <th>Bodega</th>
              <th>Proveedor</th>
              <th>Vendedor</th>
              <th>Total C$</th>
              <th class="text-center table-number">Estado</th>
              <th colspan="2" class="text-center action">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(entrada,key) in entradas">
              <tr :key="entrada.id_compra_usado">
                <td>{{ entrada.codigo_compra }}</td>
                <td>{{ formatDate(entrada.fecha_entrada) }}</td>
                <td>{{ entrada.compra_usados_bodega? entrada.compra_usados_bodega.descripcion:'N/A' }}</td>
                <td>{{ entrada.compra_usados_proveedor? entrada.compra_usados_proveedor.nombre_comercial:'N/A' }}</td>
                <td>{{ entrada.compra_usados_vendedor? entrada.compra_usados_vendedor.nombre_completo:'N/A' }}</td>
                <td>C$ {{ entrada.mt_total|formatMoney(2) }}</td>
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

                <td class="text-center">
                  <a  v-tooltip="'Descargar'" @click.prevent="descargar(entrada.id_compra_usado)">  <i class="fa fa-file-pdf-o"></i></a>
                </td>

                <td class="text-center">
                  <a v-if="entrada.estado === 1"  v-tooltip="'Anular recibo'" @click.prevent="anular(entrada.id_compra_usado)">  <i class="fa fa-remove"></i></a>
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
import compra_usado from "../../api/compras_usados";
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
          field: "id_compra_usado",
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

    obtenerComprasUsados() {
      var self = this;
      compra_usado.obtener(
        self.filter,
        data => {
          self.entradas = data.rows;
          self.total = data.total;
          self.loading=false;
        },
        err => {
          console.log(err);
        }
      );
    },



    anular(id_compra_usado){


      this.$swal.fire({
        title: 'Esta seguro de anular este recibo?',
        text: "Digite la causa de la anulación del recibo",
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, anular recibo'
      }).then((result) => {
        if (result.value) {
          compra_usado.anular(
                  {
                    id_compra_usado : id_compra_usado,
                    causa_anulacion:result.value
                  },
                  data => {
                    this.$swal.fire(
                            'Anulado',
                            'El recibo de compra de baterías usadas fue anulado, asi mismo la entrada pendiente por recibir en bodega',
                            'success'
                    )
                  },
                  err => {
                    this.$swal.fire(
                            'No se puede anular recibo!',
                            err,
                            'warning'
                    )
                  }
          );



        }
      })

    },


    descargar (id_compra_usado) {
      var self = this;
      if (id_compra_usado) {
        self.loading = true;
        let formato = 'pdf';
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('compras/usados/reporte',
                {
                  id_compra_usado : id_compra_usado,
                  extension : formato
                },{responseType: 'blob'})
                .then(({data}) => {
                  let blob = new Blob([data], {type: 'application/pdf'})
                  formato === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                  let link = document.createElement('a');
                  link.href = window.URL.createObjectURL(blob)
                  link.download = 'ReporteCompraUsado.'+ formato;
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
      this.obtenerComprasUsados();
    },
    changePage(page) {
      this.filter.page = page;
      this.obtenerComprasUsados();
    },
  },
  /*components: {
    pagination: Pagination
  },*/
  mounted() {
    this.obtenerComprasUsados();
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