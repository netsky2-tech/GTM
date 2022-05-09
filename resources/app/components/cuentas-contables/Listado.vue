<template>
  <div class="main">
    <div class="content-box">
      <div class="content-box-header">
        <div class="box-title">Administrar Cuentas Contables</div>
        <div class="box-description">Listado de Cuentas Contables</div>
        <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-contabilidad' }"> Módulo contabilidad</router-link>> Cuentas contables</div>
      </div>
      <div class="row">
        <div class="col-md-4 sm-text-center">
          <router-link
            class="btn btn-success"
            tag="button"
            :to="{ name: 'registrar-cuenta-contable' }"
          >
            <i class="pe-7s-plus"></i> Crear Nueva Cuenta Contable
          </router-link>
        </div>
        <div
          @keyup.enter="filter.page = 1;obtenerCuentasContables();"
          class="col-md-8 sm-text-center form-inline justify-content-end">
          <div class="form-group check-label">
            <label class="check-label form-control mb-1 mr-sm-1 mb-sm-0"><input class="form-control mb-1 mr-sm-1 mb-sm-0" v-model="filter.search.status" type="checkbox"> Mostrar Todos</label>
          </div>
          <select
            v-model="filter.search.field" class="form-control mb-1 mr-sm-1 mb-sm-0 search-field">
            <option value="nombre_cuenta_completo">Nombre / Código</option>
          </select>
          <input
            v-model="filter.search.value"
            class="form-control mb-1 mr-sm-1 mb-sm-0"
            placeholder="Buscar"
            type="text"
          >

          <p>
          <button class="btn btn-info" @click="filter.page = 1;obtenerCuentasContables();">
            <i class="pe-7s-search"></i> Buscar
          </button>

            <a :disabled="descargando" @click.prevent="downloadItem('pdf')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-danger"><i aria-hidden="true" class="fa fa-file-pdf-o"></i></button></a>
            <a :disabled="descargando" @click.prevent="downloadItem('xls')" style="color: #ffffff;padding-left: 2px"><button :disabled="descargando" class="btn btn-success"><i aria-hidden="true" class="fa fa-file-excel-o"></i></button></a>
          </p>

        </div>
      </div>
      <div class="table-responsive mt-3">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
			  <th>Nivel</th>
			  <th>Tipo</th>
              <th>Código</th>
              <th>Nombre</th>
              <!--<th>Naturaleza</th>-->
              <th>Permite Movimientos</th>
              <th class="text-center table-number">Estado</th>
              <th class="text-center action">Editar</th>
              <th class="text-center action">Agrega SubCuenta</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="cuenta_contable in cuentas_contables"
              :key="cuenta_contable.id_cuenta_contable"
            >
			  <td>{{ cuenta_contable.cuenta_nivel.descripcion }}</td>
			  <td>{{ cuenta_contable.cuenta_tipo.descripcion }}</td>
              <td>{{ cuenta_contable.cta_contable }}</td>
              <td>{{ cuenta_contable.nombre_cuenta }}</td>
             <!-- <td>{{ cuenta_contable.cuenta_tipo.naturaleza }}</td>-->
               <template v-if="cuenta_contable.permite_movimiento">
                <td class="text-center">
								<div class="status-pill-green"></div>
							</td>
                  </template>
                <template v-else>
                    <td class="text-center">
								<div class="status-pill-red"></div>
							</td>
               </template>
             
              <td class="text-center">
                <div v-if="cuenta_contable.estado==1">
                  <span class="badge badge-success">Activo</span>
                </div>
                <div v-else>
                  <span class="badge badge-danger">Desactivado</span>
                </div>
              </td>
              <td class="text-center">
                <template v-if="[1].indexOf(cuenta_contable.id_nivel_cuenta) < 0">
                  <router-link
                    tag="a"
                    :to="{ name: 'actualizar-cuenta-contable', params: { id_cuenta_contable: cuenta_contable.id_cuenta_contable } }"
                  >
                    <i class="icon-pencil"></i>
                  </router-link>
                </template>
              </td>

              <td class="text-center">
                <template v-if="[6,7].indexOf(cuenta_contable.id_nivel_cuenta) < 0">
                  <router-link
                          :to="{ name: 'registrar-sub-cuenta-contable', params: { id_cuenta_contable_padre: cuenta_contable.id_cuenta_contable } }"
                          tag="a"
                  >
                    <i class="icon-plus"></i>
                  </router-link>
                </template>
              </td>


            </tr>
            <tr v-if="!cuentas_contables.length">
              <td class="text-center" colspan="8">Sin datos</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination
        @changePage="changePage"
        @changeLimit="changeLimit"
        :items="cuentas_contables"
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
import cuenta_contable from "../../api/cuentas_contables";
import loadingImage from '../../assets/images/block50.gif'

export default {
  data() {
    return {
      loading:true,
      msg: 'Cargando el contenido espere un momento',
      url : '/public'+loadingImage,   //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 20,
        limitOptions: [5, 10, 15, 20],
        search: {
          field: "nombre_cuenta_completo",
          value: "",
          status:0
        }
      },
      cuentas_contables: [],
      descargando:false,
      total: 0
    };
  },
  methods: {

    downloadItem (extension) {

      var self = this;
      console.log(self.descargando);
      if(!self.descargando) {
          let url = 'contabilidad/cuentas-contables/reporte/'+extension;
        self.descargando = true;
        self.loading = true;
          alertify.success("Descargando datos, espere un momento.....", 5);
          axios.get(url, {responseType: 'blob'})
                  .then(({data}) => {
                    let blob = new Blob([data], {type: 'application/pdf'});

                    extension === 'xls' ? blob =  new Blob([data], {type: 'application/octet-stream'}) : blob = new Blob([data], {type: 'application/pdf'});

                    let link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob)
                    link.download = 'ReporteCuentasContables.'+extension;
                    link.click()
                    this.descargando = false;
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

    obtenerCuentasContables() {
      var self = this;
      self.loading = true;
      cuenta_contable.obtenerCuentasContables(
        self.filter,
        data => {
          self.cuentas_contables = data.rows;
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
      this.obtenerCuentasContables();
    },
    changePage(page) {
      this.filter.page = page;
      this.obtenerCuentasContables();
    },

  },
  /*components: {
    pagination: Pagination
  },*/
  mounted() {
    this.obtenerCuentasContables();
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