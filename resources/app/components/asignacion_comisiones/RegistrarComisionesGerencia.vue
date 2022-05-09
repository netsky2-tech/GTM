<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Asignar Comisiones de Venta de Gerencias</div>
            <div class="box-description">Formulario para actualizar comisiones de gerencias</div>
            <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-ventas' }"> Módulo Ventas</router-link>> Actualización Comisión Gerente</div>
          </div>

          <div class="alert alert-success">
            <span><strong>Detalle de Comisiones para Gerencia de Ventas </strong></span>
          </div>

          <div class="row">

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Descripción</label>
                <input class="form-control" v-model="detalleForm.descripcion">
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Tipo de Meta</label>
                <select class="form-control" v-model.number="detalleForm.tipo_meta">
                  <option value="1">Unidades</option>
                  <option value="2">Monto</option>
                </select>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Meta Rango Inicial</label>
                <input class="form-control" type="number" min="0" v-model.number="detalleForm.meta_inicio">
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Meta Rango Final</label>
                <input class="form-control" type="number" min="0" v-model.number="detalleForm.meta_fin">
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Porcentaje Comisión</label>
                <input class="form-control" type="number" min="0" v-model.number="detalleForm.porcentaje_comision">
              </div>
            </div>


            <div class="col-sm-2">
              <div class="form-group">
                <label for>&nbsp;</label>
                <button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar detalle</button>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-sm-12">
              <ul class="error-messages">
                <li
                        :key="message"
                        v-for="message in errorMessages.comisiones_asignadas"
                        v-text="message"
                ></li>
              </ul>
              <table class="table table-bordered"  >
                <thead>
                <tr>
                  <th ></th>
                  <th >Descripción</th>
                  <th >Tipo Meta</th>
                  <th >Meta Rango Inicial</th>
                  <th >Meta Rango Final</th>
                  <th >Porcentaje Comisión</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(item, index) in form.comisiones_asignadas">
                  <tr v-if="item.activo">
                    <td style="width: 2%">
                      <button @click="eliminarLinea(item, index)">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                    <td>
                      <input class="form-control" v-model="item.descripcion">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`comisiones_asignadas.${index}.descripcion`]"
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
                                v-for="message in errorMessages[`comisiones_asignadas.${index}.tipo_meta`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>
                    <td>
                      <input  class="form-control" type="number" min="0" v-model.number="item.meta_inicio">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`comisiones_asignadas.${index}.meta_inicio`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input  class="form-control" type="number" min="0" v-model.number="item.meta_fin">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`comisiones_asignadas.${index}.meta_fin`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>


                    <td>
                      <input  class="form-control" type="number" min="0" v-model.number="item.porcentaje_comision">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`comisiones_asignadas.${index}.porcentaje_comision`]"
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
            <router-link tag="button" :to="{ name: 'pagina-principal-ventas' }">
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
  import salida from "../../api/salidas";


  export default {
    /*components: {
      Datepicker
    },*/
    data() {
      return {

        marcas: [],

        detalleForm:{
          id_comision_gerencia_politica:0,
              descripcion:'',
              porcentaje_inicial:0,
              porcentaje_final:0,
              meta_inicio:0,
              meta_fin:0,
              porcentaje_comision:0,
              activo:true,
              tipo_meta:1,
        },
        form: {
          vendedor:'',
          comisiones_asignadas: [],
        },
        btnAction: "Registrar",

        errorMessages: []
      };
    },
    methods: {

      eliminarLinea(item, index) {
        var self = this;
        if (this.form.comisiones_asignadas.length >= 1) {
          //self.form.entrada_productos[keyx].cantidad_recibida--;
          this.form.comisiones_asignadas[index].activo = false;
        }else{
          this.form.comisiones_asignadas=[];
        }
      },


      agregarDetalle() {
        let self = this;
        //if(this.detalleForm.fecha_viatico){
        let i = 0;
        let keyx = 0;
       /* if(self.form.comisiones_asignadas){
          self.form.comisiones_asignadas.forEach((fila, key) => {
            if(self.detalleForm.meta_inicio===fila.meta_inicio){
              i++;
              keyx = key;
            }
          });
        }*/
        if(i === 0){
          self.form.comisiones_asignadas.push({
            id_comision_gerencia_politica:0,
            descripcion:self.detalleForm.descripcion,
            porcentaje_inicial:0,
            porcentaje_final:0,
            meta_inicio:self.detalleForm.meta_inicio,
            meta_fin:self.detalleForm.meta_fin,
            porcentaje_comision:self.detalleForm.porcentaje_comision,
            activo:true,
            tipo_meta:self.detalleForm.tipo_meta,
          });

                  self.detalleForm.descripcion='';
                  self.detalleForm.meta_inicio=0;
                  self.detalleForm.meta_fin=0;
                  self.detalleForm.porcentaje_comision=0;
                  self.detalleForm.tipo_meta=1;

        }else{
          alertify.warning("Ya existe un registro con la fecha seleccionada",5);
        }
      },


      obtenerComisiones() {
        var self = this
        comisiones.obtenerComisionesGerencia({
        }, data => {
          if(data){
            self.form.comisiones_asignadas = data;
          }
          self.loading = false;
        });
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
            comisiones.actualizarComisionGerencia(
                    self.form,
                    data => {
                      alertify.success("Comisión asignada correctamente",5);
                      self.obtenerComisiones();
                      self.btnAction = "Registrar";
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
      this.obtenerComisiones();
    }
  };
</script>
<style>
  .btn-agregar {
    margin-top:33px;
  }
</style>
