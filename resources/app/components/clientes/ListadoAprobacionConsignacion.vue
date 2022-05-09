<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Administrar Solicitudes de Consignación </div>
        <div class="box-description">Listado de Clientes</div>
        <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo Inventario</router-link>> Clientes Consignatarios</div>
      </div>
      <div class="row">
          <template v-if="filter.search.es_deudor">
              <div class="col-md-6 sm-text-center">
                  <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-deudor', params:{deudor:true} }">
                      <i class="pe-7s-plus"></i> Registrar Deudor
                  </router-link>
              </div>
          </template>
          <template v-else>
              <div class="col-md-4 sm-text-center">
                  <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-cliente', params:{deudor:false} }">
                      <i class="pe-7s-plus"></i> Registrar Cliente
                  </router-link>
              </div>
          </template>
        <div
          @keyup.enter="filter.page = 1;obtener();"
          class="col-md-8 sm-text-center form-inline justify-content-end">
          <div class="form-group check-label">
            <label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
          </div>
          <select
            v-model="filter.search.field"
            class="form-control mb-1 mr-sm-1 mb-sm-0 search-field"
          >
            <option value="nombre_comercial">Nombre</option>
            <option value="contacto">Contacto</option>
            <option value="numero_ruc">Número RUC</option>
            <option value="numero_cedula">Número Cedula</option>
          </select>
          <input
            v-model="filter.search.value"
            class="form-control mb-1 mr-sm-1 mb-sm-0"
            placeholder="Buscar"
            type="text"
          >
          <button @click="filter.page = 1;obtener();" class="btn btn-info">
            <i class="pe-7s-search"></i> Buscar
          </button>
          <a :disabled="descargando" @click.prevent="downloadItem('pdf')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-danger"><i aria-hidden="true" class="fa fa-file-pdf-o"></i></button></a>
          <a :disabled="descargando" @click.prevent="downloadItem('xls')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-success"><i aria-hidden="true" class="fa fa-file-excel-o"></i></button></a>
        </div>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre Completo</th>
              <th>Número RUC</th>
              <th class="text-center table-number">Estado</th>
              <th colspan="2" class="text-center action">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in clientes" :key="cliente.id_cliente">
              <td>{{ cliente.codigo }}</td>
              <td>{{ cliente.nombre_comercial }}</td>
              <td>{{ cliente.numero_ruc }}</td>
              <td class="text-center">
                <div v-if="cliente.estado">
                  <span class="badge badge-success">Activo</span>
                </div>
                <div v-else>
                  <span class="badge badge-danger">Desactivado</span>
                </div>
              </td>
              <td class="text-center">
                <template v-if="cliente.aprobacion_consignacion===1">
                  <button @click="cambiarEstadoConsignacion(0,cliente.id_cliente)" class="btn btn-danger"><i
                          class="fa fa-trash-o"> Rechazar Solicitud</i></button>
                </template>
                <template v-else>
                  <button @click="cambiarEstadoConsignacion(3,cliente.id_cliente)" class="btn btn-danger"><i
                          class="fa fa-trash-o"> Revocar Consignación</i></button>
                </template>
              </td>
              <td class="text-center">
                <template v-if="cliente.aprobacion_consignacion===1">
                  <button @click="cambiarEstadoConsignacion(2,cliente.id_cliente)" class="btn btn-success"><i
                          class="fa fa-trash-o"> Aprobar Solicitud</i></button>
                </template>
                <template v-else>
                </template>
              </td>
            </tr>
            <tr v-if="!clientes.length">
              <td class="text-center" colspan="4">Sin datos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        @changePage="changePage"
        @changeLimit="changeLimit"
        :items="clientes"
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
import cliente from "../../api/clientes";
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
        limit: 20,
        limitOptions: [25, 30, 45, 60],
        search: {
          field: "nombre_comercial",
          value: "",
          status:0,
          es_deudor:false,
        }
      },
      clientes: [],
      total: 0,
      descargando : false,
    };
  },
  methods: {
    obtener() {
      var self = this;
      self.loading = true;
      self.filter.search.es_deudor = this.$route.meta.deudores;
      cliente.obtenerSolicitudesConsignacion(
        self.filter,
        data => {
          self.clientes = data.rows;
          self.total = data.total;
          self.loading = false;
        },
        err => {
          self.loading = false;
          console.log(err);
        }
      );
    },
    cambiarEstadoConsignacion(estado,id_cliente){

      var txtAprobar = 'Está seguro de autorizar el permiso de consignación para este cliente?';
      var txtRechazar ='Está seguro de rechazar la solicitud de consignación para este cliente?';
      var txtAnular ='Está seguro de revocar el permiso de consignación para este cliente?';

      var self = this;

      self.$swal.fire({
        title: 'Confirmación de cambio del estado de consignación de cliente',
        text: estado===2?txtAprobar:estado===3?txtAnular:txtRechazar,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText:'Cancelar'
      }).then((result) => {
        self.loading=true;
        if (result.value) {
          //var self = this
          cliente.cambiarEstadoConsignacion({
            id_cliente: id_cliente,
            estado: estado
          }, data => {
            alertify.warning("El permiso de consignación ha sido cambiado correctamente", 5);
            self.obtener();
          }, err => {
            self.loading=false;
            console.log(err)
          })
        }else{
         self.loading=false;
        }
      })

    },
    downloadItem (ext) {
      var self = this;
      if(!this.descargando){
        this.descargando=true;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....",5);
        axios.get('ventas/clientes/'+ext, { responseType: 'blob' })
                .then(({ data }) => {
                  let blob = new Blob([data], { type: 'application/pdf' })
                  ext === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                  let link = document.createElement('a');
                  link.href = window.URL.createObjectURL(blob)
                  link.download = 'ListadoClientes.'+ext;
                  link.click()
                  this.descargando=false;
                  self.loading = false;
                }).catch(function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.descargando = false;
          self.loading = false;
        })
      }else{
        alertify.warning("Espere a que se complete la descarga anterior",5);
      }
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
    width: 100px;
  }
}
</style>