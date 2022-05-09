<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Ajustes Módulo Depreciación</div>
            <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-activos' }"> Módulo Activos Fijos</router-link>> Configuración Depreciación</div>
          </div>
          <form>
              <table class="table table-striped table-bordered">
                <thead>
                <tr>
                  <th class="text-left table-number">Descripción</th>
                  <th class="text-left table-number">Nombre Cuenta Depreciación</th>
                  <th class="text-left table-number">Nombre Cuenta Depreciado</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="cuenta in form.cuentas" :key="cuenta.id_cuenta_activo">
                  <td class="text-left"> <input class="form-control" v-model="cuenta.descripcion"></td>
                  <td class="text-left"> <v-select :options="cuentas_contables" label="nombre_cuenta_completo" v-model="cuenta.cuenta_contable"  ></v-select></td>
                  <td class="text-left"> <v-select :options="cuentas_contables" label="nombre_cuenta_completo" v-model="cuenta.cuenta_contable_depreciado"  ></v-select></td>
                </tr>
                <tr v-if="!form.cuentas.length">
                  <td class="text-center" colspan="3">Sin datos</td>
                </tr>
                </tbody>
              </table>


          </form>
          <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'pagina-principal-activos' }">
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

import cuentas_activos from '../../api/cuentas_activos'
import loadingImage from '../../assets/images/block50.gif'

export default {
  data() {
    return {
      cuentas_contables:[],
      form: {
        cuentas: [],
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
      cuentas_activos.obtener(self.filter, data => {
        self.form.cuentas = data.rows;
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
      cuentas_activos.actualizar(
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