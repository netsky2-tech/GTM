<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Ajustes Generales del Sistema</div>
            <div class="box-description">Actualizar Ajustes</div>
            <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-administracion' }"> Módulo administración</router-link>> Ajustes generales</div>
          </div>
          <form>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for>Nombre Aplicación</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.app_title"
                    placeholder="Digite nombre aplicación"
                  >
                  <ul class="error-messages">
                    <li v-for="message in errorMessages.app_title">{{ message }}</li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for>Sitio web empresa</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.company_website"
                    placeholder="Digite Sitio web empresa"
                  >
                  <ul class="error-messages">
                    <li v-for="message in errorMessages.company_website">{{ message }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for>Nombre empresa</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.company_name"
                    placeholder="Digite Nombre empresa"
                  >
                  <ul class="error-messages">
                    <li v-for="message in errorMessages.company_name">{{ message }}</li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for>Dirección empresa</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.company_address"
                    placeholder="Digite Dirección empresa"
                  >
                  <ul class="error-messages">
                    <li v-for="message in errorMessages.company_address">{{ message }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for>Télefono</label>
                  <input
                    type="number"
                    class="form-control"
                    v-model="form.company_telephone"
                    placeholder="Télefono"
                  >
                  <ul class="error-messages">
                    <li v-for="message in errorMessages.company_telephone">{{ message }}</li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for>Número RUC</label>
                  <input
                          type="text"
                          class="form-control"
                          v-model="form.ruc_company"
                          v-mask="'A#############'"
                          placeholder="Número RUC"
                  >
                  <ul class="error-messages">
                    <li v-for="message in errorMessages.ruc_company">{{ message }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for>Correo electrónico empresa</label>
                  <input
                          type="text"
                          class="form-control"
                          v-model="form.company_email"
                          placeholder="Digite Correo electrónico"
                  >
                  <ul class="error-messages">
                    <li v-for="message in errorMessages.company_email">{{ message }}</li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label for>Moneda</label>
                  <select class="form-control" v-model="form.currency_id">
                    <option :value="moneda.id_moneda" v-for="moneda in monedas">{{ moneda.descripcion }}</option>
                  </select>
                  <ul class="error-messages">
                    <li v-for="message in errorMessages.currency_id">{{ message }}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for>Imagen Logo</label>
                  <div class="uploader">
                    <button
                      type="button"
                      class="btn btn-primary"
                      id="uploader-button"
                    >Escoger Imagen</button>
                  </div>
                  <ul class="error-messages">
                    <li
                      v-for="message in errorMessages.uploaded_logo"
                      :key="message"
                      v-text="message"
                    ></li>
                  </ul>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for>Imagen Icono</label>
                  <div class="uploader">
                    <button
                      type="button"
                      class="btn btn-primary"
                      id="uploader-button2"
                    >Escoger Icono</button>
                  </div>
                  <ul class="error-messages">
                    <li
                      v-for="message in errorMessages.uploaded_icon"
                      :key="message"
                      v-text="message"
                    ></li>
                  </ul>
                </div>
              </div>

              <div class="col-sm-4">
                <div class="form-group">
                  <label for>Imagen Login</label>
                  <div class="uploader">
                    <button
                      type="button"
                      class="btn btn-primary"
                      id="uploader-button3"
                    >Escoger Imagen</button>
                  </div>
                  <ul class="error-messages">
                    <li
                      v-for="message in errorMessages.login_img"
                      :key="message"
                      v-text="message"
                    ></li>
                  </ul>
                </div>
              </div>

            </div>
          </form>
          <div class="content-box-footer text-right">
            <button
              type="button"
              class="btn btn-primary"
              @click="registrar"
              :disabled="btnAction !== 'Guardar'"
            >{{ btnAction }}</button>
          </div>
        </div>

        <template v-if="loading">
          <BlockUI :message="msg" :url="url"></BlockUI>
        </template>

      </div>
    </div>
  </div>
</template>

  <script type="text/ecmascript-6">
import ajustes from "../../api/ajustes";
import monedas from "../../api/monedas";
import loadingImage from '../../assets/images/block50.gif'

export default {
  data() {
    return {
      loading:true,
      msg: 'Cargando el contenido espere un momento',
      url : '/public'+loadingImage,
      monedas: [],
      form: {
        app_title: "",
        company_address: "",
        company_email: "",
        company_name: "",
        company_telephone: "",
        company_website: "",
        currency_id: "",
        uploaded_logo: "",
        uploaded_icon:"",
        login_img:"",
        ruc_company:""
      },
      btnAction: "Guardar",
      errorMessages: []
    };
  },
  methods: {
    cargar() {
      var self = this;
      ajustes.cargar(
        data => {
          //console.log(data);
          self.monedas = data.monedas;
          this.form.currency_id = data.ajustes[0].valor;
          this.form.app_title = data.ajustes[1].valor;
          this.form.company_name = data.ajustes[3].valor;
          this.form.company_address = data.ajustes[4].valor;
          this.form.company_telephone = data.ajustes[5].valor;
          this.form.company_email = data.ajustes[6].valor;
          this.form.company_website = data.ajustes[7].valor;
          this.form.uploaded_icon = data.ajustes[19].valor;
          this.form.uploaded_logo = data.ajustes[2].valor;
          this.form.login_img = data.ajustes[20].valor;
          this.form.ruc_company = data.ajustes[22].valor;
          self.uploader.set_files(data.ajustes[2].valor);
          self.uploader2.set_files(data.ajustes[19].valor);
          self.uploader3.set_files(data.ajustes[20].valor);
          self.loading =false;
        },
        err => {
          console.log(err);
        }
      );
    },
    obtenerLogo() {
      var uploaded_logo = $('input[name="uploaded_logo"]').val();
      if (JSON.parse(uploaded_logo).length) {
        return uploaded_logo;
      } else {
        return "";
      }
    },

    obtenerIcono() {
      var uploaded_icon = $('input[name="uploaded_icon"]').val();
      if (JSON.parse(uploaded_icon).length) {
        return uploaded_icon;
      } else {
        return "";
      }
    },

      obtenerLoginImg() {
      var login_img = $('input[name="login_img"]').val();
      if (JSON.parse(login_img).length) {
        return login_img;
      } else {
        return "";
      }
    },

    registrar() {
      var self = this;
      self.loading =true;
      self.btnAction = "Guardando, espere...";
      self.form.uploaded_logo = this.obtenerLogo();
      self.form.uploaded_icon = this.obtenerIcono();
      self.form.login_img = this.obtenerLoginImg();
      ajustes.registrar(
        self.form,
        data => {
          self.btnAction = "Guardar";
          alertify.success("Datos Actualizados Correctamente!", 5);
          self.loading = false;
        },
        err => {
          self.errorMessages = err;
          self.btnAction = "Guardar";
          self.loading = false;
        }
      );
    },
    obtenerMonedas() {
      var self = this;
      monedas.cargarMonedas(
        data => {
          self.monedas = data;
        },
        err => {
          console.log(err);
        }
      );
    },
    initUploader() {
      var self = this;
      this.uploader = $("#uploader-button").uploader({
        upload_url: window.location.origin + "/public/media/upload",
        file_picker_url: window.location.origin + "/public/media/get-files",
        input_name: "uploaded_logo",
        maximum_total_files: 1,
        maximum_file_size: 5000000,
        file_types_allowed: ["image/jpeg", "image/png"],
        on_before_upload: function() {
          self.btnAction = "Subiendo imágenes...";
        },
        on_success_upload: function() {
          self.btnAction = "Guardar";
        },
        on_error: function(err) {
          console.log(err);
        }
      });

    this.uploader2 = $("#uploader-button2").uploader({
        upload_url: window.location.origin + "/public/media/upload",
        file_picker_url: window.location.origin + "/public/media/get-files",
        input_name: "uploaded_icon",
        maximum_total_files: 1,
        maximum_file_size: 5000000,
        file_types_allowed: ["image/jpeg", "image/png"],
        on_before_upload: function() {
          self.btnAction = "Subiendo imágenes...";
        },
        on_success_upload: function() {
          self.btnAction = "Guardar";
        },
        on_error: function(err) {
          console.log(err);
        }
      });

       this.uploader3 = $("#uploader-button3").uploader({
        upload_url: window.location.origin + "/public/media/upload",
        file_picker_url: window.location.origin + "/public/media/get-files",
        input_name: "login_img",
        maximum_total_files: 1,
        maximum_file_size: 5000000,
        file_types_allowed: ["image/jpeg", "image/png"],
        on_before_upload: function() {
          self.btnAction = "Subiendo imágenes...";
        },
        on_success_upload: function() {
          self.btnAction = "Guardar";
        },
        on_error: function(err) {
          console.log(err);
        }
      });

    }
  },

  mounted() {
    this.initUploader();
    this.cargar();
    //this.obtenerMonedas();
  }
};
</script>
