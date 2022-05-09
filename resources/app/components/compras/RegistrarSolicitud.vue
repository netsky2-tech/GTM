<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Crear Solicitud</div>
            <div class="box-description">Formulario para registrar Solicitud de compra</div>
          </div>
          <div class="row">

           <!--< <div class="col-sm-4">
              <div class="form-group">
                <label for>Tipo Compra</label>
                <select class="form-control" v-model.number="form.id_tipo_compra">
                  <option value="1">Local</option>
                  <option value="2">Internacional</option>
                </select>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.id_tipo_compra"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>-->

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Usuario Solicitante</label>
                <v-select
                        label="nombre_completo"
                        v-model="form.trabajador"
                        :options="trabajadores"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.area" v-text="message"></li>
                </ul>
              </div>
            </div>





            <div class="col-sm-3">
              <div class="form-group">
                <label for>Area Solicitante</label>
                <v-select
                        label="descripcion"
                        v-model="form.area"
                        :options="areas"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.area" v-text="message"></li>
                </ul>
              </div>
            </div>

            <!--<div class="col-sm-4">
            <div class="form-group">
              <label for>Sucursal</label>
              <v-select
                      label="descripcion"
                      v-model="form.sucursal"
                      :options="sucursales"
              ></v-select>
              <ul class="error-messages">
                <li :key="message" v-for="message in errorMessages.sucursal" v-text="message"></li>
              </ul>
            </div>
          </div>-->

         <div class="col-sm-3">
           <div class="form-group">
             <label for>Bodega</label>
             <v-select
                     label="descripcion"
                     v-model="form.solicitud_bodega"
                     :options="bodegas"
             ></v-select>
             <ul class="error-messages">
               <li :key="message" v-for="message in errorMessages.solicitud_bodega" v-text="message"></li>
             </ul>
           </div>
         </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Moneda</label>
                <v-select
                        label="descripcion"
                        v-model="form.solicitud_moneda"
                        :options="monedas"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.solicitud_moneda" v-text="message"></li>
                </ul>
              </div>
            </div>



            <div class="col-sm-3">
              <div class="form-group">
                <label for>Fecha Necesidad</label>
                <datepicker :format="format" :language="es" :value="new Date()" @selected="onDateSelect"></datepicker>
                <ul class="error-messages">
                  <li
                    :key="message"
                    v-for="message in errorMessages.f_necesidad"
                    v-text="message"
                  ></li>
                </ul>
              </div>
            </div>



            <div class="col-sm-9">
              <div class="form-group">
                <label for>Observaciones solicitud</label>
                <input class="form-control" type="text" v-model="form.observacion">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.observacion"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

          </div>

          <div v-if="!form.area">
                    <div class="alert alert-info">
                        <span>Se requiere que seleccione una area para continuar.</span>
                    </div>
                    <hr>
                </div>

          <div class="alert alert-success">
            <span><strong>Detalle de productos</strong></span>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <div class="form-group">
                <label for>Producto</label>

                <!--<typeahead style="width: 100%;" :initial="detalleForm.productox" :trim="80" :url="productosBusquedaURL" @input="seleccionarProducto"></typeahead>-->

                <multiselect :allow-empty="false" :options="productos"
                             :searchable="true"
                             :show-labels="false"
                             deselect-label="No se puede eliminar este valor"
                             label="text"
                             placeholder="Selecciona un producto"
                             ref="producto"
                             track-by="id_producto"
                             v-model="detalleForm.productox"
                             v-on:input="seleccionarProducto"
                ></multiselect>

                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.productox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Proveedor</label>
                <v-select
                        label="nombre_comercial"
                        v-model="detalleForm.proveedorx"
                        :options="proveedores"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.proveedorx" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Cantidad</label>
                <input class="form-control" ref="cantidad" type="number" v-model.number="detalleForm.cantidad">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.cantidadx"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>



            <div class="col-sm-3">
              <div class="form-group">
                <label for>Precio Unitatio</label>
                <div class="input-group">
                  <div class="input-group-addon">{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}}
                  </div>
                  <input class="form-control" type="number" v-model.number="detalleForm.precio_info">
                </div>

                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.precio_infox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>Fecha Necesidad</label>
                <datepicker :format="format" :language="es" :value="new Date()" @selected="onDateSelect2"></datepicker>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.f_necesidad_productox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>



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
                  <th >Fecha Necesidad</th>
                  <th >Proveedor</th>
                  <th >Cantidad</th>
                  <th >Precio Unitario</th>
                  <th >Descuento</th>
                  <th >SubTotal</th>


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
                      <input class="form-control" disabled v-model="item.productox.descripcion">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.productox.id_producto`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input  v-mask="'####-##-##'" class="form-control"  v-model="item.f_necesidad_producto" >
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.f_necesidad_producto`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input class="form-control" disabled v-model="item.proveedorx.nombre_comercial">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.proveedorx.id_proveedor`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input  class="form-control" type="number" v-model.number="item.cantidad">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.cantidad`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>


                    <td>
                      <input  class="form-control" type="number" v-model.number="item.precio_info">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.precio_info`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>


                    <td>
                      <input  class="form-control" type="number" v-model.number="item.descuento">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.descuento`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{sub_total(item)| formatMoney(2)}}</strong>
                    </td>
                  </tr>
                  <tr></tr>
                </template>
                </tbody>
                <tfoot>

                <tr>
                  <td colspan="6"></td>
                  <td>Subtotal</td>
                  <td> <strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{total_subt | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                  <td colspan="6"></td>
                  <td>Descuento</td>
                  <td> <strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{total_descuento | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                  <td>I.V.A.</td>
                  <td><input class="form-control" min="0" max="99" v-model.number="form.porcentaje_iva"></td>
                  <td> <strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{total_impuesto | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td class="item-footer" colspan="2"> Total Unidades</td>
                  <td  class="item-footer">
                    <strong>{{total_cantidad}}</strong>
                  </td>
                  <td></td>
                  <td>Total</td>
                  <td> <strong>{{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} {{gran_total | formatMoney(2)}}</strong></td>
                </tr>

                </tfoot>
              </table>
            </div>
          </div>

          <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'listado-solicitudes-compras' }">
              <button type="button" class="btn btn-default">Cancelar</button>
            </router-link>
            <button
                    :disabled="btnActionDraft !== 'Guardar Borrador'"
                    @click="form.es_borrador=true;registrar()"
                    class="btn btn-dark"
                    type="button"
            >{{ btnActionDraft }}</button>
            <button
                    :disabled="btnAction !== 'Solicitar'"
                    @click="form.es_borrador=false;registrar()"
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
import solicitud from "../../api/solicitudes_compras";
import es from 'vuejs-datepicker/dist/locale/translations/es'
import loadingImage from '../../assets/images/block50.gif'

export default {
  /*components: {
    Datepicker
  },*/
  data() {
    return {
      loading:true,
      registrandoBateria:false,
      msg: 'Cargando el contenido espere un momento',
      url : '/public'+loadingImage,
      productosBusqueda: {},
      productosBusquedaURL: "/inventario/productos/buscarPS",
      es: es,
      format: "dd-MM-yyyy",
      areas: [],
      proveedores: [],
      productos: [],
      trabajadores: [],
      //sucursales:[],
      monedas:[],
      bodegas:[],

      detalleForm:{
        productox: '',
        proveedorx: "",
        cantidad: 1,
        monto_descuento:0,
        precio_info: 0,
        subtotal: 0,
        total: 0,
        f_necesidad_producto: moment(new Date()).format("YYYY-MM-DD"),
      },

      form: {
        observacion: "",
        f_necesidad: moment(new Date()).format("YYYY-MM-DD"),
        trabajador: "",
        //sucursal: "",
        solicitud_bodega:"",
        solicitud_moneda:"",
        area: "",
        total: 0,
        iva:0,
        porcentaje_iva:15,
        detalleProductos: [],
        es_borrador:false
      },
      btnAction: "Solicitar",
      btnActionDraft: "Guardar Borrador",
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
    total_descuento() {
      return this.form.detalleProductos.reduce((carry, item) => {
                return(carry + Number(Number(item.monto_descuento).toFixed(2)));
              }
              , 0)
    },

    total_impuesto() {
      this.form.iva= Number(this.form.detalleProductos.reduce((carry, item) => {
                return(carry + Number(Number(item.subtotal*(this.form.porcentaje_iva/100)).toFixed(2)));
              }
              , 0).toFixed(2))

      return this.form.iva;
    },

    gran_total() {

      this.form.total =  this.form.detalleProductos.reduce((carry, item) => {
                return (carry + Number(item.total.toFixed(2)));
              }
              , 0)

      return this.form.total + this.form.iva;
    },
  },
  methods: {

    seleccionarProducto() {
      var self = this
      if (self.detalleForm.productox)
        self.detalleForm.cantidad = 1;
      self.detalleForm.precio_info = self.detalleForm.productox.precio_compra;
      self.$refs.cantidad.focus();
    },

    sub_total(itemX) {
      itemX.subtotal= Number((Number(itemX.precio_info)* Number(itemX.cantidad)).toFixed(2));
      itemX.monto_descuento= Number(Number(itemX.subtotal* Number(itemX.descuento/100)).toFixed(2));
      itemX.total =itemX.subtotal - itemX.monto_descuento;
      if(!isNaN(itemX.total)){
        return itemX.total;
      }
      else return 0;
    },

    onDateSelect(date) {
      //console.log(date); //
      this.form.f_necesidad = moment(date).format("YYYY-MM-DD"); //
    },

    onDateSelect2(date) {
      this.detalleForm.f_necesidad_producto = moment(date).format("YYYY-MM-DD"); //
      console.log( this.detalleForm.f_necesidad_producto);
    },


    agregarDetalle() {
      let self = this;
      if(this.detalleForm.productox){
        if(this.detalleForm.cantidad>0 && this.detalleForm.precio_info > 0){


          let i = 0;
          let keyx = 0;
          if(self.form.detalleProductos){
            self.form.detalleProductos.forEach((productox, key) => {
              //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
              if(self.detalleForm.productox.id_producto===productox.productox.id_producto){
                i++;
                keyx = key;
              }
            });
          }

          if(i === 0){
            this.form.detalleProductos.push({
              productox: this.detalleForm.productox,
              proveedorx: this.detalleForm.proveedorx,
              cantidad: this.detalleForm.cantidad,
              precio_info: this.detalleForm.precio_info,
              f_necesidad_producto: this.detalleForm.f_necesidad_producto,
              descuento: 0,
              monto_descuento:Number(0),
              subtotal: 0,
              total: 0,
            });
            this.detalleForm.productox='';
            //this.detalleForm.proveedorx='';
            this.detalleForm.cantidad=0;
            this.detalleForm.precio_info=0;
            this.detalleForm.subtotal=0;
            this.detalleForm.monto_descuento=0;
            this.detalleForm.descuento=0;
            this.detalleForm.total=0;

          }else{
            this.$swal.fire({
              title: 'El producto ya existe en el detalle, desea sumar la nueva cantidad al monto existente?',
              text: "También se sobreescribirá el costo unitario",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, confirmar',
              cancelButtonText:'Cancelar'
            }).then((result) => {
              if (result.value) {
                self.form.detalleProductos[keyx].cantidad = Number(self.form.detalleProductos[keyx].cantidad) + self.detalleForm.cantidad;
                self.form.detalleProductos[keyx].precio = self.detalleForm.precio;
                this.detalleForm.productox={};
                this.detalleForm.proveedorx='';
                this.detalleForm.cantidad=0;
                this.detalleForm.precio_info=0;
                this.detalleForm.subtotal=0;
                this.detalleForm.monto_descuento=0;
                this.detalleForm.descuento=0;
                this.detalleForm.total=0;
              }
            })
          }

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

    nueva() {
      var self = this;
      solicitud.nueva(
              data => {
               //self.sucursales = data.sucursales;
                self.monedas = data.monedas;
                self.bodegas = data.bodegas;
                self.form.solicitud_bodega = self.bodegas[0];
               //self.form.sucursal = self.sucursales[0];
                self.form.solicitud_moneda = self.monedas[1];
                self.areas= data.areas;
                self.form.area= self.areas[0];
                self.trabajadores= data.trabajadores;
                self.form.trabajador = self.trabajadores[0];
                self.productos = data.productos;
                self.proveedores= data.proveedores;
                self.detalleForm.proveedorx= self.proveedores[0];
                self.loading=false;
              },
              err => {
                console.log(err);
              }
      );
    },

    registrar() {
      var self = this;
      self.loading=true;
      self.btnAction = "Registrando, espere....";
      self.btnActionDraft = "Guardando, espere....";
      solicitud.registrar(
        self.form,
        data => {
          alertify.success("Solicitud de Compra emitida correctamente",5);
          this.$router.push({
            name: "listado-solicitudes-compras"
          });
          self.loading=false;
        },
        err => {
          self.loading=false;
          self.errorMessages = err;
          self.btnAction = "Solicitar";
          self.btnActionDraft = "Guardar Borrador";
        }
      );
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
