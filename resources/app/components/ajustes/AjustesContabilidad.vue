<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Ajustes Módulo Contabilidad</div>
            <div class="box-description">Actualizar Ajustes</div>
          </div>
          <form>
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for>Cuenta de Pérdidas o Ganancias</label>
                  <v-select
                          :options="cuentas_contables"
                          label="nombre_cuenta_completo"
                          v-model="form.cuenta_perdida_ganancia"
                  ></v-select>
                  <ul class="error-messages">
                    <li :key="message" v-for="message in errorMessages.cuenta_perdida_ganancia" v-text="message"></li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
          <div class="content-box-footer text-right">
            <button
              :disabled="btnAction != 'Guardar' ? true : false"
              @click="registrar"
              class="btn btn-primary"
              type="button"
            >{{ btnAction }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script type="text/ecmascript-6">
import Vue from "vue";
import ajustes from "../../api/ajustes";
import cuentas_contables from '../../api/cuentas_contables'

export default {
  data() {
    return {
      cuentas_contables:[],
      form: {
        cuenta_perdida_ganancia: "",
      },
      btnAction: "Guardar",
      errorMessages: []
    };
  },
  methods: {

    cargar() {
      ajustes.cargar_contabilidad(
        data => {
          console.log(data[0]);
         // this.form.cuenta_perdida_ganancia = data[0].valor;
        },
        err => {
          console.log(err);
        }
      );
    },
    obtenerTodasCuentasContables() {
      var self = this;
      cuentas_contables.obtenerTodasCuentasContables(
              data => {
                self.cuentas_contables = data;
              },
              err => {
                console.log(err);
              }
      );

    },

    registrar() {
      var self = this;
      self.btnAction = "Guardando, espere...";
      ajustes.registrar(
        self.form,
        data => {
          self.btnAction = "Guardar";
          alertify.success("Datos Actualizados Correctamente!", 5);
        },
        err => {
          self.errorMessages = err;
          self.btnAction = "Guardar";
        }
      );
    },
  },

  mounted() {
    this.obtenerTodasCuentasContables();
    this.cargar();

  }
};
</script>