<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Asignar Comisiones de Venta</div>
            <div class="box-description">Formulario para asignar comisiones por vendedor</div>
            <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-ventas' }"> Módulo Ventas</router-link>> Registrar Comisión Vendedores</div>
          </div>
          <div class="row">

            
            <div class="col-sm-4">
              <div class="form-group">
                <label for>Vendedores</label>
                <div class="form-group">
                  <multiselect :allow-empty="false" :options="vendedores"
                               :searchable="true"
                               :show-labels="false"
                               deselect-label="No se puede eliminar este valor"
                               label="nombre_completo"
                               placeholder="Selecciona una cuenta para pagar"
                               track-by="id_vendedor"
                               v-model="form.vendedor"
                               v-on:input="cargarMarcas"
                  ></multiselect>
                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.vendedor" v-text="message"></li>
                </ul>
              </div>
            </div>
          </div>

          <div v-if="!form.vendedor">
            <div class="alert alert-info">
              <span>Se requiere que seleccione un vendedor para continuar.</span>
            </div>
            <hr>
          </div>

          <br>

          <div class="alert alert-success">
            <span><strong>Detalle de Comisiones por Marca</strong></span>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <ul class="error-messages">
                <li
                        :key="message"
                        v-for="message in errorMessages.detalleComisiones"
                        v-text="message"
                ></li>
              </ul>
              <table class="table table-bordered"  >
                <thead>
                <tr>
                  <th >Marca</th>
                  <th >Tipo Meta</th>
                  <th >Meta</th>
                  <th >Porcentaje Comisión</th>
                  <th >Porcentaje Comisión Sobremeta</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(item, index) in form.detalleComisiones">
                  <tr>
                    <td>
                      <input class="form-control" disabled v-model="item.marcax.descripcion">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleComisiones.${index}.marcax.id_marca`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>

                      <select class="form-control" v-model.number="item.tipo_meta">
                        <option value="1">Unidades</option>
                        <option value="2">Monto</option>
                      </select>

                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleComisiones.${index}.tipo_meta`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>
                    <td v-if="item.tipo_meta===1">
                      <input  class="form-control" type="number" min="0" v-model.number="item.meta_unidades">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleComisiones.${index}.meta_unidades`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>
                    <td v-if="item.tipo_meta===2">
                      <input  class="form-control" type="number" min="0" v-model.number="item.meta_monto">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleComisiones.${index}.meta_monto`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input  class="form-control" type="number" min="0" v-model.number="item.porcentaje_comision">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleComisiones.${index}.porcentaje_comision`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input  class="form-control" type="number" min="0" v-model.number="item.porcentaje_comision_sobremeta">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleComisiones.${index}.porcentaje_comision_sobremeta`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                  </tr>
                  <tr></tr>
                </template>
                </tbody>
              </table>
            </div>
          </div>

          <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'listado-comisiones' }">
              <button type="button" class="btn btn-default">Cancelar</button>
            </router-link>
            <button
                    :disabled="btnAction !== 'Registrar'"
                    @click="registrar()"
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
  import comisiones from "../../api/comisiones_asignaciones";
  import es from 'vuejs-datepicker/dist/locale/translations/es'


  export default {
    /*components: {
      Datepicker
    },*/
    data() {
      return {
        vendedores: [],
        marcas: [],

        form: {
          vendedor:'',
          detalleComisiones: [],
        },
        btnAction: "Registrar",
        btnActionDraft: "Guardar Borrador",
        errorMessages: []
      };
    },
    methods: {

      cargarMarcas(){
        let self = this;
console.log('cargarMarcas')
        if(self.form.vendedor){
          self.marcas.forEach((marcax, key) => {
            self.form.detalleComisiones.push({
              marcax: marcax,
              tipo_meta: 1,
              meta_unidades:0,
              meta_monto:0,
              porcentaje_comision:0,
              porcentaje_comision_sobremeta:0,
            });
          });

        }
      },


    nueva() {
        var self = this;
      comisiones.nuevo({
        }, data => {
          self.vendedores= data.vendedores;
         self.marcas = data.marcas;
        },
                err => {
                  console.log(err);
                })

      },

      registrar() {
        var self = this;
        self.btnAction = "Registrando, espere....";

        self.$swal.fire({
          title: 'Esta seguro de guardar esta asignación de comisiones?',
          text: "Se guardará la configuración",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, confirmar',
          cancelButtonText:'Cancelar'
        }).then((result) => {
          if (result.value) {
            comisiones.registrar(
                    self.form,
                    data => {
                      alertify.success("Comisión asignada correctamente",5);
                      this.$router.push({
                        name: "listado-comisiones"
                      });
                    },
                    err => {
                      self.errorMessages = err;
                      self.btnAction = "Registrar";
                    }
            );
          }else{
            self.btnAction = "Registrar";
          }
        })


      }
    },
    mounted() {
      this.nueva();
    }
  };
</script>
<style>
  .btn-agregar {
    margin-top:33px;
  }
</style>
