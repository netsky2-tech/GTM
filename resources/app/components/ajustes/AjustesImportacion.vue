<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Ajustes Módulo Importación</div>
            <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-compras' }"> Módulo Compras</router-link>> Configuración Importaciones</div>
          </div>
          <form>
              <table class="table table-striped table-bordered">
                <thead>
                <tr>
                  <th class="text-left table-number">Nombre Cuenta</th>
                  <th class="text-left table-number">Descripción Movimiento</th>
                  <th class="text-center table-number">Debe</th>
                  <th class="text-center table-number">Haber</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="configuracion in form.ajustes" :key="configuracion.id_configuracion_importacion">

                  <td class="text-left"> <v-select :options="cuentas_contables" label="nombre_cuenta_completo" v-model="configuracion.configuracion_importacioncuenta_contable"  ></v-select></td>

                  <td class="text-left"> <input class="form-control" v-model="configuracion.descripcion_movimiento"></td>
                  <template v-if="configuracion.debe_haber === 1">
                    <td class="text-center">
                      <div class="status-pill-green"></div>
                    </td>
                    <td class="text-center">

                    </td>
                  </template>
                  <template v-else>
                    <td class="text-center">

                    </td>
                    <td class="text-center">
                      <div class="status-pill-green"></div>
                    </td>
                  </template>

                </tr>
                <tr v-if="!form.ajustes.length">
                  <td class="text-center" colspan="4">Sin datos</td>
                </tr>
                </tbody>
              </table>


          </form>
          <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'pagina-principal-compras' }">
              <button type="button" class="btn btn-default">Cancelar</button>
            </router-link>
            <button
              :disabled="btnAction != 'Guardar' ? true : false"
              @click="registrar"
              class="btn btn-primary"
              type="button"
            >{{ btnAction }}</button>
          </div>

          <template v-if="loading">
            <BlockUI :message="msg" :url="url"></BlockUI>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

  <script type="text/ecmascript-6">

import importacionConf from '../../api/importaciones-config'
import loadingImage from '../../assets/images/block50.gif'

export default {
  data() {
    return {
      cuentas_contables:[],
      form: {
        ajustes: [],
      },
      loading:true,
      msg: 'Cargando el contenido espere un momento',
      url : '/public'+loadingImage,   //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 500,
        limitOptions: [5, 10, 15, 20],
      },
      btnAction: "Guardar",
      errorMessages: []
    };
  },
  methods: {

    cargar() {
      var self = this
      self.loading=true;
      importacionConf.obtener(self.filter, data => {
        self.form.ajustes = data.rows;
        self.total = data.total;
        self.cuentas_contables = data.cuentas_contables;
        self.loading=false;
      }, err => {
        console.log(err)
      })
    },


    registrar() {
      var self = this;
      self.loading=true;
      self.btnAction = "Guardando, espere...";
      importacionConf.actualizar(
        self.form,
        data => {
          self.btnAction = "Guardar";
          alertify.success("Datos Actualizados Correctamente!", 5);
          self.loading=false;
        },
        err => {
          self.errorMessages = err;
          self.btnAction = "Guardar";
          self.loading=false;
        }
      );
    },

  },

  mounted() {
    this.cargar();

  }
};
</script>