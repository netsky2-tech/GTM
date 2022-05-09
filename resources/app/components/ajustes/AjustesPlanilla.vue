<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Ajustes CD planilla</div>
            <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-nomina' }"> Módulo nómina</router-link>> Configuración CD Planilla</div>
          </div>
            <div class="table-responsive mt-3">
              <table class="table table-striped table-bordered">
                <thead>
                <tr>
                  <th class="text-left table-number">Cuenta administrativa</th>
                  <th class="text-left table-number">Cuenta comercial</th>
                  <th class="text-left table-number">Descripción Movimiento</th>
                  <!--<th class="text-center table-number">Debe</th>
                  <th class="text-center table-number">Haber</th>-->
                </tr>
                </thead>
                <tbody>
                <tr v-for="configuracion in form.ajustes" :key="configuracion.id_configuracion_cd_planilla">

                  <td class="text-left table-number"> <v-select :options="cuentas_contables" label="nombre_cuenta_completo" v-model="configuracion.configuracion_planilla_contable_admin"  ></v-select></td>
                  <td class="text-left table-number"> <v-select :options="cuentas_contables" label="nombre_cuenta_completo" v-model="configuracion.configuracion_planilla_contable_comercial"  ></v-select></td>

                  <td class="text-left table-number"> <input class="form-control" v-model="configuracion.concepto"></td>
                  <!--<template v-if="configuracion.debe_haber === 1">
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
                  </template>-->

                </tr>
                <tr v-if="!form.ajustes.length">
                  <td class="text-center" colspan="4">Sin datos</td>
                </tr>
                </tbody>
              </table>
            </div>

          <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'pagina-principal-nomina' }">
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

import planillaConfig from '../../api/planilla_cd_config'
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
      planillaConfig.obtener(self.filter, data => {
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
      planillaConfig.actualizar(
        self.form,
        data => {
          self.btnAction = "Guardar";
          alertify.success("Datos Actualizados Correctamente!", 5);
          self.loading=false;
          this.$router.push({
            name: 'pagina-principal-nomina'
          })
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
<style lang="scss" scoped>
  .search-field {
    min-width: 120px;
  }
  .table {
    a {
      color: #2675dc;
    }
    .table-number {
      width: 33%;
    }
    .action {
      width: 100px;
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
          margin: -4px auto 0px;
          position: absolute;
          background-color: #595959;
          border: 1px solid #595959;
        }
      }
    }
  }
</style>