<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Administrar Proveedores </div>
        <div class="box-description">Listado de Proveedores</div>
        <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-inventario' }"> Módulo Inventario</router-link>> Proveedores</div>
      </div>
      <div class="row">
        <div class="col-md-3 sm-text-center">
          <router-link class="btn btn-success" tag="button" :to="{ name: 'registrar-proveedor' }">
            <i class="pe-7s-plus"></i> Registrar Proveedor
          </router-link>
        </div>
        <div @keyup.enter="filter.page = 1;obtener();" class="col-md-9 sm-text-center form-inline justify-content-end">
          <div class="form-group check-label">
            <label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
          </div>
          <select v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
            <option value="nombre_comercial">Nombre</option>
            <option value="contacto_proveedor">Contacto</option>
            <option value="numero_ruc">Número RUC</option>
            <!--<option value="id_tipo_proveedor">Tipo Proveedor</option>-->
          </select>

          <template v-if="filter.search.field!=='id_tipo_proveedor'">
          <input
            v-model="filter.search.value"
            class="form-control mb-1 mr-sm-1 mb-sm-0"
            placeholder="Buscar"
            type="text"
          >
          </template>
          <template v-else>
            <v-select
                    class="mb-1 mr-sm-1 mb-sm-0"
                    :options="tipos_proveedores"
                    label="descripcion"
                    v-model="tipo_proveedorx"
            ></v-select>
          </template>


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
              <th>Número RUC</th>
              <th>Nombre Comercial</th>
              <th>Correo</th>
              <th class="text-center table-number">Estado</th>
              <th class="text-center action">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="proveedor in proveedores" :key="proveedor.id_proveedor">
              <td>{{ proveedor.codigo }}</td>
              <td>{{ proveedor.numero_ruc }}</td>
              <td>{{ proveedor.nombre_comercial }}</td>
              <td>{{ proveedor.correo_contacto }}</td>
              <td class="text-center">
                <div v-if="proveedor.activo">
                  <span class="badge badge-success">Activo</span>
                </div>
                <div v-else>
                  <span class="badge badge-danger">Desactivado</span>
                </div>
              </td>
              <td class="text-center">
                <!--<template v-if="[1].indexOf(proveedor.id_proveedor) < 0">-->
                 <router-link
                   tag="a"
                   :to="{ name: 'actualizar-proveedor', params: { id_proveedor: proveedor.id_proveedor } }"
                 >
                   <i class="icon-pencil"></i>
                 </router-link>
               <!--</template>-->
              </td>
            </tr>
            <tr v-if="!proveedores.length">
              <td class="text-center" colspan="4">Sin datos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        @changePage="changePage"
        @changeLimit="changeLimit"
        :items="proveedores"
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
import proveedor from "../../api/proveedores";
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
          field: "nombre_comercial",
          value: "",
          status:0
        }
      },
      proveedores: [],
      tipos_proveedores: [],
      tipo_proveedorx: [],
      total: 0,
      descargando:false,
    };
  },
  methods: {
    obtener() {
      var self = this;
      self.loading = true;
      if(self.filter.search.field==='id_tipo_proveedor' && self.tipo_proveedorx){
        self.filter.search.value = self.tipo_proveedorx.id_tipo_proveedor;
      }
      proveedor.obtener(
        self.filter,
        data => {
          self.tipos_proveedores = data.tipos_proveedor;
          self.proveedores = data.rows;
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
    downloadItem (ext) {
      var self = this;
      if(!this.descargando){
        self.loading = true;
        this.descargando=true;
        alertify.success("Descargando datos, espere un momento.....",5);
        axios.get('proveedores/reporte/'+ext, { responseType: 'blob' })
                .then(({ data }) => {
                  let blob = new Blob([data], { type: 'application/pdf' })
                    ext === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                  let link = document.createElement('a');
                  link.href = window.URL.createObjectURL(blob)
                  link.download = 'Reporte_proveedor.'+ext;
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