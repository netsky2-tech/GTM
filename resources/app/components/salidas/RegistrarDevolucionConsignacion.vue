<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Registrar Devolución por Consignación</div>
            <div class="box-description">Formulario para registrar devolución de productos</div>
          </div>
          <div class="row">

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Cliente Consignatario:</label>
                <v-select
                        label="nombre_comercial"
                        v-model="form.cliente_salida"
                        :options="clientes"
                        v-on:input="seleccionarCliente"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.bodega_entrante" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Fecha Devolución</label>
                <datepicker :language="es" :value="new Date()" @selected="onDateSelect" :format="format"></datepicker>
                <ul class="error-messages">
                  <li
                          v-for="message in errorMessages.fecha_salida"
                          :key="message"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>



            <div class="col-sm-5">
              <div class="form-group">
                <label for>Observaciones Traslado</label>
                <input type="text" class="form-control" v-model="form.descripcion_salida">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.descripcion_salida"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

          </div>

          <div v-if="!form.bodega">
            <div class="alert alert-info">
              <span>Se requiere que seleccione una bodega saliente y una bodega entrante para continuar.</span>
            </div>
            <hr>
          </div>

          <div class="alert alert-success">
            <span><strong>Detalle de productos</strong></span>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for>Producto</label>
                <multiselect v-model="detalleForm.productox" :options="productos"
                             deselect-label="No se puede eliminar este valor"
                             track-by="id_producto"
                             label="text"
                             placeholder="Selecciona un producto"
                             :searchable="true"
                             :show-labels="false"
                             :allow-empty="false"
                             ref="producto"
                             v-on:input="cargar_detalles_producto()"
                ></multiselect>
                <!---->
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.productox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label for>Cantidad</label>
                <input @change="detalleForm.cantidad = Math.max(Math.min(Math.round(detalleForm.cantidad), detalleForm.productox.cantidad_disponible), 1)" class="form-control" ref="cantidad" type="number" v-model.number="detalleForm.cantidad">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.cantidadx"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <!--  <div class="col-sm-3">
                <div class="form-group">
                  <label for>Costo Promedio</label>
                  <div class="input-group">
                    <div class="input-group-addon">C$
                    </div>
                    <input class="form-control" readonly type="number" v-model.number="detalleForm.precio_unitario">
                  </div>

                  <ul class="error-messages">
                    <li
                            :key="message"
                            v-for="message in errorMessages.precio_unitariox"
                            v-text="message"
                    ></li>
                  </ul>
                </div>
              </div>-->

            <div class="col-sm-3">
              <div class="form-group">
                <label for>&nbsp;</label>
                <button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar Producto</button>
              </div>
            </div>

          </div>

          <div class="row">
            <div class="col-sm-12">
              <ul class="error-messages">
                <li
                        :key="message"
                        v-for="message in errorMessages.detalleProductos"
                        v-text="message"
                ></li>
              </ul>
              <table class="table table-bordered"  >
                <thead>
                <tr>
                  <th></th>
                  <th >Producto</th>
                  <th >Cantidad</th>
                  <!--<th >Costo Unitario</th>

                  <th >SubTotal</th>-->

                </tr>
                </thead>
                <tbody>
                <template v-for="(item, index) in form.detalleProductos">
                  <tr>
                    <td style="width: 2%">
                      <button @click="eliminarLinea(item, index)">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                    <td>
                      <input class="form-control" disabled v-model="item.productox.text">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.productox.id_producto`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>


                    <td>
                      <input  @change="item.cantidad = Math.max(Math.min(Math.round(item.cantidad), item.productox.cantidad_disponible), 1)" class="form-control" type="number" v-model.number="item.cantidad">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.cantidad`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>


                    <!-- <td>
                       <input class="form-control" readonly type="number" v-model.number="item.precio_unitario">
                       <ul class="error-messages">
                         <li
                                 :key="message"
                                 v-for="message in errorMessages[`detalleProductos.${index}.precio_unitario`]"
                                 v-text="message">
                         </li>
                       </ul>
                     </td>

                     <td>
                       <strong>C$ {{sub_total(item)| formatMoney(2)}}</strong>
                     </td>
 -->

                  </tr>
                  <tr></tr>
                </template>
                </tbody>
                <tfoot>

                <!--  <tr>
                   <td colspan="3"></td>
                  <td>Subtotal</td>
                   <td> <strong>C$ {{total_subt | formatMoney(2)}}</strong></td>
                 </tr>-->
                <tr>
                  <td class="item-footer" colspan="2"> Total Unidades</td>
                  <td  class="item-footer">
                    <strong>{{total_cantidad}}</strong>
                  </td>
                  <!--  <td>Total</td>
                    <td> <strong>C$ {{gran_total | formatMoney(2)}}</strong></td>-->
                </tr>

                </tfoot>
              </table>
            </div>
          </div>

          <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'pagina-principal-inventario' }">
              <button type="button" class="btn btn-default">Cancelar</button>
            </router-link>
            <button
                    :disabled="btnAction != 'Registrar' ? true : false"
                    @click="registrarTraslado"
                    class="btn btn-primary"
                    type="button"
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
  import bodega from "../../api/bodegas";
  import tipo from "../../api/tipo_salida";
  import loadingImage from '../../assets/images/block50.gif'
  import proveedor from "../../api/proveedores";
  import salida from "../../api/salidas";
  //import Datepicker from "vuejs-datepicker";
  import es from 'vuejs-datepicker/dist/locale/translations/es'


  export default {
    /*components: {
      Datepicker
    },*/
    data() {
      return {
        es: es,
        format: "dd-MM-yyyy",
        bodegas: [],
        bodegas_consigna: [],
        productos: [],
        clientes:[],
        loading:true,
        msg: 'Cargando el contenido espere un momento',
        url : '/public'+loadingImage,
        detalleForm:{
          productox: "",
          cantidad: 1,
          precio_unitario: 0,
          subtotal: 0,
          total: 0,
        },

        form: {
          codigo_salida: "",
          descripcion_salida: "",
          fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
          tipo_salida: "",
          bodega_entrante: "",
          bodega_saliente: "",
          detalleProductos: [],
          cliente_salida:""
        },
        btnAction: "Registrar",
        errorMessages: []
      };
    },
    computed: {

      total_cantidad() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + Number(item.cantidad))
        }, 0)
      },
      total_subt() {
        return this.form.detalleProductos.reduce((carry, item) => {
                  return(carry + Number(item.subtotal.toFixed(2)));
                }
                , 0)
      },
      gran_total() {
        return this.form.detalleProductos.reduce((carry, item) => {
                  return (carry + Number(item.total.toFixed(2)));
                }
                , 0)
      },
    },
    methods: {

      seleccionarCliente(e) {
        var self = this;
        self.loading = true;

        self.form.detalleProductos = [];
        self.form.detallePago = [];
        self.detalleForm.productox ='';

        bodega.buscarProductosConsignacionCliente({
          id_bodega: 17,
          id_cliente: self.form.cliente_salida.id_cliente
        }, data => {
          if(data !== null){

            self.productos = [];

            self.productos= data.productos;

            self.detalleForm.productox = '';
          }else{
            alertify.warning("No se encuentran productos para esta bodega.",5);
            self.detalleForm.productox = '';
          }
          self.loading = false;
        }, err => {
          /*if(err.codigo_bateria){
            self.detalleForm.bateria_busqueda = '';
            self.$refs.bateria.focus();
            alertify.warning("No se encuentra esta batería.",5);
            self.detalleForm.productox = '';
          }*/
          self.loading = false;
        })



      },

      sub_total(itemX) {
        itemX.subtotal= Number((Number(itemX.precio_unitario)* Number(itemX.cantidad)).toFixed(2));
        itemX.total =itemX.subtotal;
        if(!isNaN(itemX.total)){
          return itemX.total;
        }
        else return 0;
      },
      cargar_detalles_producto() {
        var self = this
        if(self.detalleForm.productox)
          self.detalleForm.cantidad=0;
        self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
        self.$refs.cantidad.focus();
      },
      onDateSelect(date) {
        this.form.fecha_salida = moment(date).format("YYYY-MM-DD"); //
      },

      obtenerBodegasConsignacion() {
        var self = this;
        bodega.obtenerBodegasConsignacion({},
                data => {
                  self.clientes = data.clientes;
                  self.loading = false;
                },
                err => {
                  console.log(err);
                  self.loading = false;
                }
        );
      },

      agregarDetalle() {
        var self = this;
        if(self.detalleForm.productox){
          if(self.detalleForm.cantidad>0 /*&& self.detalleForm.precio_unitario > 0*/){
            let i = 0;
            let keyx = 0;
            if(self.form.detalleProductos){
              self.form.detalleProductos.forEach((productox, key) => {
                if(self.detalleForm.productox.id_bodega_producto===productox.productox.id_bodega_producto){
                  i++;
                  keyx = key;
                }
              });
            }
            if(i === 0){
              self.form.detalleProductos.push({
                productox: self.detalleForm.productox,
                cantidad: self.detalleForm.cantidad,
                precio_unitario: self.detalleForm.precio_unitario,
                subtotal: 0,
                total: 0,
              });

            }else{
              let nuevo_total = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
              if(nuevo_total<=self.form.detalleProductos[keyx].cantidad_disponible){
                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
              }else{
                self.form.detalleProductos[keyx].cantidad =self.form.detalleProductos[keyx].productox.cantidad_disponible;
              }
            }

            self.detalleForm.productox='';
            self.detalleForm.cantidad=0;
            self.detalleForm.precio_unitario=0;
            self.detalleForm.subtotal=0;
            self.detalleForm.total=0;

          }else{
            alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero",5);
          }
        }else{
          alertify.warning("Debe seleccionar un producto",5);
        }
      },
      eliminarLinea(item, index) {
        if (this.form.detalleProductos.length >= 1) {
          this.form.detalleProductos.splice(index, 1);

        }else{
          this.form.detalleProductos=[];
        }
      },

      registrarTraslado() {
        var self = this;
       // if(self.form.bodega_entrante && self.form.bodega_saliente && self.form.bodega_entrante.id_bodega !== self.form.bodega_saliente.id_bodega){
          self.btnAction = "Registrando, espere....";

          self.$swal.fire({
            title: 'Esta seguro de guardar y emitir la entrada?',
            text: "Esta acción no se puede deshacer",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar',
            cancelButtonText:'Cancelar'
          }).then((result) => {
            if (result.value) {
              salida.registrarDevolucionConsignacion(
                      self.form,
                      data => {
                        this.$router.push({
                          name: "salidas"
                        });
                        //alertify.success("Salida por traslado registrada exitosamente",5);
                        // alertify.success("Entrada por traslado registrada y en espera de confirmación de recibido",5);
                        this.$swal.fire(
                                'Traslado por devolución registrada exitosamente!',
                                'El traslado fue Registrada correctamente.',
                                'success'
                        )
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
        /*}else{
          alertify.warning("Debe seleccionar bodegas distintas",5);
        }*/
      }
    },
    mounted() {
     this.obtenerBodegasConsignacion();
    }
  };
</script>
<style>
  .btn-agregar {
    margin-top:33px;
  }
</style>
