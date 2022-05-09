<!--mpdf v-on:input="cargarProductosBodega(form.id_bodega)" mpdf-->
<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Registrar Nueva Devolución</div>
            <div class="box-description">Formulario para registrar Devolución de salida</div>
          </div>
          <div class="row">
             <div class="col-sm-4">
              <div class="form-group">
                <label for>Código Salida</label>
               <input :disabled="btnActionBuscar !== 'Buscar Salida' ? true : false" type="text" class="form-control" v-model="form.salida_original.codigo_salida">
                <ul class="error-messages">
                  <li
                    v-for="message in errorMessages.codigo_salida_org"
                    :key="message"
                    v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

             <div class="col-sm-2">
              <div class="form-group" style="padding: 7px;">
               <br>
                <button :disabled="btnActionBuscar !== 'Buscar Salida' ? true : false" @click="obtenerSalidaPorCodigo(form.salida_original.codigo_salida)" class="btn btn-success">{{ btnActionBuscar }}</button>
                <button :disabled="btnActionBuscar !== 'Buscar Salida' ? false : true" @click="restaurarFormulario" class="btn btn-danger">X</button>
              
              </div>
            </div>
            </div>

          <div class="row">
            <div class="col-sm-12">
              <div v-if="!form.salida_original.codigo_salida">
                    <div class="alert alert-info">
                        <span>Se requiere que seleccione una salida válida, para realizar la devolución.</span>
                    </div>
                    <hr>
                </div>
                </div>
          </div>
            

          <div class="row">
         <div class="col-sm-4">
              <div class="form-group">
                <label for>Bodega</label>
                <input disabled type="text" class="form-control" v-model="form.salida_original.salida_bodega.nombre">
                <ul class="error-messages">
                  <li v-for="message in errorMessages.id_bodega" :key="message" v-text="message"></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="form-group">
                <label for>Descripción</label>
                <input disabled type="text" class="form-control"  v-model="form.salida_original.descripcion_salida">
                <ul class="error-messages">
                  <li v-for="message in errorMessages.descripcion_salida" :key="message" v-text="message"></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label for>Código salida</label>
                <input disabled type="text" class="form-control" v-model="form.salida_original.codigo_salida">
                <ul class="error-messages">
                  <li
                    v-for="message in errorMessages.codigo_salida"
                    :key="message"
                    v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Fecha salida</label>
                 <input disabled type="text" class="form-control" v-model="form.salida_original.fecha_salida">
                <ul class="error-messages">
                  <li
                    v-for="message in errorMessages.fecha_salida"
                    :key="message"
                    v-text="message"
                  ></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
                 <ul class="error-messages">
                  <li
                    v-for="message in  errorMessages[`salida_original.salida_productos`]"
                    :key="message"
                    v-text="message"
                  ></li>
                </ul>
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Unidad medida</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad Recibida</th>
                    <th>Cantidad devuelta</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(item,index) in form.salida_original.salida_productos">
                    <tr :key="item.id_producto">
                      <td style="width: 25%">
                        <input readonly type="text" class="form-control" v-model="item.descripcion_producto">
                      </td>
                       <td style="width: 20%">
                        <input readonly type="text" class="form-control" v-model="item.unidad_medida">
                      </td>
                      <td style="width: 15%">
                        <input type="number" readonly class="form-control" v-model="item.precio_unitario">
                      </td>
                      <td style="width: 10%">
                          <span
                          class="form-control align-right"
                        >{{(Number(item.cantidad - Number(item.cantidad_faltante)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))}}</span>
                      </td>
                      <td style="width: 10%">
                        <input @change="item.cantidad_dev = Math.max(Math.min(Math.round(item.cantidad_dev), item.cantidad - item.cantidad_faltante), 0)" class="form-control" type="number" v-model="item.cantidad_dev">
                      <ul class="error-messages">
                          <li
                         v-for="message in errorMessages[`salida_original.salida_productos.${index}.cantidad_dev`]"
                        :key="message"
                         v-text="message">
                         </li>
                          </ul>
                      </td>
                      
                      <td style="width: 18%">
                        <span
                          class="form-control align-right"
                        >{{(Number(item.cantidad_dev * Number(item.precio_unitario)).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))}}</span>
                      </td>
                       <td style="width: 2%">
                        <button @click="eliminarLinea(item, index)">
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr></tr>
                  </template>
                </tbody>
                <tfoot>
                  <tr>
                    <td style="width: 50%" colspan="4">
                    </td>
                    <td class="item-footer" colspan="1">Sub Total</td>
                    <td class="item-footer" colspan="1">
                      <span class="item-dark form-control">  {{subTotal | formatMoney(2)}}</span>         
                    </td>
                  </tr>
                  <tr>
                    <td class="item-empty" colspan="4"></td>
                    <td class="item-footer" colspan="1">
                      <strong>Total</strong>
                    </td>
                    <td class="item-footer" colspan="1">
                      <strong class="item-dark form-control">{{subTotal | formatMoney(2)}}</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'salidas' }">
              <button type="button" class="btn btn-default">Cancelar</button>
            </router-link>
            <button
              type="button"
              class="btn btn-primary"
              @click="crearSalidaPorDevolucion"
              :disabled="btnAction != 'Registrar' ? true : false"
            >{{ btnAction }}</button>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
import producto from "../../api/productos";
import bodega from "../../api/bodegas";
import tipo from "../../api/tipo_salida";
import proveedor from "../../api/proveedores";
import salida from "../../api/salidas";
//import Datepicker from "vuejs-datepicker";

export default {
  /*components: {
    Datepicker
  },*/
  data() {
    return {
      format: "dd-MM-yyyy",

      form: {
        salida_original:{
        salida_bodega:{
          nombre:""
        },
        salida_proveedor:{
          nombre_proveedor:""
        },
        salida_productos:[],
        codigo_salida:"",
        fecha_salida: "",
        id_tipo_salida: "",
        id_proveedor: "",
        id_bodega: ""
      },
        codigo_salida: "",
        fecha_salida: "",
        id_tipo_salida: "",
        id_proveedor: "",
        id_bodega: ""
      },
      btnAction: "Registrar",
      btnActionBuscar: "Buscar Salida",
      errorMessages: []
    };
  },
    computed: {
                subTotal() {
                return this.form.salida_original.salida_productos.reduce((carry, item) => {
                    return (carry + (Number(item.precio_unitario) * Number(item.cantidad_dev)))//.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                }, 0)
            },
    },
  methods: {
     obtenerSalidaPorCodigo(codSalida) {
      var self = this;
      self.btnActionBuscar = "Buscando, espere....";
      salida.obtenerSalidaPorCodigo(
        {
          codigo_salida: codSalida
        },
        data => {
          self.form.salida_original = data;
          self.btnActionBuscar= "Salida Encontrada";
        },
        err => {
         alertify.warning(err,4)
         self.btnActionBuscar= "Buscar Salida";
        }
      );
    },

    restaurarFormulario(){
     location.reload();
    },

    eliminarLinea(item, index) {
      if (this.form.salida_original.salida_productos.length >= 1) {
        this.form.salida_original.salida_productos.splice(index, 1);
       }else{
        this.form.salida_original.salida_productos=[];
      }
    },

    crearSalidaPorDevolucion() {
      var self = this;
      self.btnAction = "Registrando, espere....";
    
      salida.crearSalidaPorDevolucion(
        self.form,
        data => {
          this.$router.push({
            name: "salidas"
          });
        },
        err => {
          self.errorMessages = err;
          self.btnAction = "Registrar";
        }
      );
    }
  },
  mounted() {

  }
};
</script>
