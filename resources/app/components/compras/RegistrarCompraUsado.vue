<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Registrar Compra de Baterías Usadas</div>
            <div class="box-description">Formulario para registrar detalles de compra de baterías usadas</div>
            <div class="box-description"><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal' }">Módulos</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'pagina-principal-compras' }"> Módulo compras</router-link>><router-link :style="'margin-right: 10px;color: blue;'" :to="{ name: 'listado-compra-usado' }"> Listado compras</router-link>> Compra de Baterías Usadas</div>

          </div>
          <div class="row">

            <div class="col-sm-2">
              <div class="form-group">
                <label class="check-label2"><input type="checkbox"
                                                   v-model="form.es_nuevo"> Proveedor Nuevo</label>
              </div>
            </div>

            <template v-if="!form.es_nuevo">
              <div class="col-sm-5">
                <div class="form-group">
                  <label> Proveedor</label>
                  <div class="form-group">
                    <multiselect :allow-empty="false" :options="proveedores"
                                 :searchable="true"
                                 :show-labels="false"
                                 deselect-label="No se puede eliminar este valor"
                                 label="nombre_comercial"
                                 placeholder="Selecciona un proveedor"
                                 track-by="id_proveedor"
                                 v-model="form.proveedor"
                                 v-on:input="cargar_detalles_proveedor()"
                    ></multiselect>
                  </div>
                  <ul class="error-messages">
                    <li :key="message" v-for="message in errorMessages.proveedor" v-text="message"></li>
                  </ul>
                  <ul class="error-messages">
                    <li :key="message" v-for="message in errorMessages.nombre_proveedor" v-text="message"></li>
                  </ul>
                </div>
              </div>
            </template>

            <template v-if="form.es_nuevo">
              <div class="col-sm-5">
                <div class="form-group">
                  <label> Proveedor</label>
                  <div class="form-group">
                    <input class="form-control" type="text" v-model="form.nombre_proveedor">
                  </div>
                  <ul class="error-messages">
                    <li :key="message" v-for="message in errorMessages.nombre_proveedor" v-text="message"></li>
                  </ul>
                </div>
              </div>
            </template>

            <div class="col-sm-5">
              <div class="form-group">
                <label >Tipo Persona</label>
                <select class="form-control" v-model.number="form.tipo_persona">
                  <option value="1">Natural</option>
                  <option value="2">Jurídico</option>
                </select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.tipo_persona" v-text="message"></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label for>RUC Proveedor</label>
                <template>
                  <input  v-mask="'A#############'" class="form-control" type="text"  v-model="form.numero_ruc">
                  <ul class="error-messages">
                    <li :key="message" v-for="message in errorMessages.numero_ruc" v-text="message"></li>
                  </ul>
                </template>
              </div>
            </div>
            <div class="col-sm-4">
            <div class="form-group">
              <label for>Número Cedula Proveedor</label>
              <template>
                <input  v-mask="'#############A'"  class="form-control" type="text"  v-model="form.numero_cedula">
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.numero_cedula" v-text="message"></li>
                </ul>
              </template>
            </div>
          </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label> Vendedor</label>
                <div class="form-group">
                  <multiselect :allow-empty="false" :options="vendedores"
                               :searchable="true"
                               :show-labels="false"
                               deselect-label="No se puede eliminar este valor"
                               label="nombre_completo"
                               placeholder="Selecciona un vendedor"
                               track-by="id_vendedor"
                               v-model="form.vendedor"
                  ></multiselect>
                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.vendedor" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Bodega</label>
                <v-select
                        label="descripcion"
                        v-model="form.bodega"
                        :options="bodegas"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
                </ul>
              </div>
            </div>
            
            
            <div class="col-sm-4">
              <div class="form-group">
                <label for>Fecha Compra</label>
                <datepicker :format="format" disabled :language="es" :value="new Date()" @selected="onDateSelect"></datepicker>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.fecha_compra"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label> Serie Recibo</label>
                <div class="form-group">
                  <input class="form-control" type="text" v-model="form.serie">
                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.serie" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label> Número Recibo</label>
                <div class="form-group">
                  <input class="form-control" type="text" v-model="form.numero_recibo">
                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.numero_recibo" v-text="message"></li>
                </ul>
              </div>
            </div>

          </div>

          <div class="alert alert-success">
            <span><strong>Detalle de productos</strong></span>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <div class="form-group">
                <label for>Producto</label>
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
                <label for>Cantidad</label>
                <input class="form-control" min="1" @change="detalleForm.cantidad = Math.max(Math.min(Math.round(detalleForm.cantidad), 300), 1)" ref="cantidad" type="number" v-model.number="detalleForm.cantidad">
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
                <label for>Peso Libras</label>
                <input class="form-control" @change="convertirPeso" ref="pesoLbs" min="0.01" type="number" v-model.number="detalleForm.pesoLbrs">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.pesox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Peso Kg</label>
                <input disabled class="form-control" @change="detalleForm.peso = Math.max(Math.min(Math.round(detalleForm.peso), 70), 1)" ref="peso" min="0.01" type="number" v-model.number="detalleForm.peso">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.pesox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>Precio</label>
                <div class="input-group">
                  <div class="input-group-addon">C$/KG
                  </div>
                  <input class="form-control" disabled type="number" v-model.number="detalleForm.precio">
                </div>

                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.preciox"
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
                  <th >Cantidad</th>
                  <th >Peso Unitario Lb</th>
                  <th >Peso Unitario Kg</th>
                  <th >Precio Unitario C$/Kg</th>
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
                      <input class="form-control" min="1" @change="item.cantidad = Math.max(Math.min(Math.round(item.cantidad), 300), 1)" type="number" v-model.number="item.cantidad">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.cantidad`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input class="form-control" @change="calcularPesoX(item)" min="0.01" type="number" v-model.number="item.pesoLb">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.peso`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input disabled class="form-control" min="0.01" type="number" v-model.number="item.peso">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.peso`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>


                    <td>
                      <input disabled class="form-control" type="number" v-model.number="item.precio">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.precio`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>
                    <td>
                      <strong>C$ {{sub_total(item)| formatMoney(2)}}</strong>
                    </td>
                  </tr>
                  <tr></tr>
                </template>
                </tbody>
                <tfoot>
                <tr>
                  <td class="item-footer" colspan="5"></td>
                  <td>Subtotal</td>
                  <td> <strong>C$ {{total_subt | formatMoney(2)}}</strong></td>
                </tr>


                <tr>
                  <td colspan="3"></td>
                  <td>No. Documento:</td>
                  <td> <input :disabled="!form.aplicaIR" class="form-control" v-model="form.doc_exoneracion_ir"></td>
                  <td><label class="check-label"><input v-model="form.aplicaIR"
                                                        type="checkbox"> Retención</label>
                    <ul class="error-messages">
                      <li
                              :key="message"
                              v-for="message in errorMessages.doc_exoneracion_ir"
                              v-text="message"
                      ></li>
                    </ul>
                  </td>
                  <td> <strong>C$ {{total_retencion | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>No. Documento:</td>
                  <td> <input :disabled="!form.aplicaIMI" class="form-control" v-model="form.doc_exoneracion_imi"></td>
                  <td><label class="check-label"><input v-model="form.aplicaIMI"
                                                        type="checkbox"> Retención IMI</label>
                    <ul class="error-messages">
                      <li
                              :key="message"
                              v-for="message in errorMessages.doc_exoneracion_imi"
                              v-text="message"
                      ></li>
                    </ul>
                  </td>
                  <td> <strong>C$ {{total_retencion_imi | formatMoney(2)}}</strong></td>
                </tr>

                <tr>
                  <td class="item-footer" colspan="3"> Total Unidades</td>
                  <td  class="item-footer">
                    <strong>{{total_cantidad}}</strong>
                  </td>
                  <td></td>
                  <td>Total</td>
                  <td> <strong>C$ {{gran_total | formatMoney(2)}}</strong></td>
                </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'listado-ordenes-compras' }">
              <button type="button" class="btn btn-default">Cancelar</button>
            </router-link>
            <button
                    :disabled="btnAction !== 'Registrar'"
                    @click="registrar()"
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
  import orden from "../../api/compras_usados";
  import es from 'vuejs-datepicker/dist/locale/translations/es'
  import loadingImage from "../../assets/images/block50.gif";


  export default {
    /*components: {
      Datepicker
    },*/
    data() {
      return {

        loading:true,
        msg: 'Cargando el contenido espere un momento',
        url : '/public'+loadingImage,   //It is important to import the loading image then use here


        productosBusqueda: {},
        productosBusquedaURL: "/inventario/productos/buscarPS",
        es: es,
        format: "dd-MM-yyyy",
        proveedores: [],
        solicitud_original:'',
        vendedores:[],
        bodegas:[],
        productos:[],
        precio_compra:0,
        detalleForm:{
          productox: '',
          cantidad: 1,
          peso: 0.45,
          pesoLbrs:1,
          precio: 0,
          subtotal: 0,
          total: 0
        },

        form: {
          aplicaIR:false,
          id_proveedor:0,
          aplicaIMI:false,
          observacion: "",
          fecha_compra: moment(new Date()).format("YYYY-MM-DD"),
          proveedor: "",
          bodega:"",
          numero_cedula: "",
          numero_ruc: "",
          nombre_proveedor: "",
          tipo_persona:1,
          vendedor: "",
          mt_retencion :0,
          mt_retencion_imi :0,
          serie:"",
          numero_recibo:"",
          total: 0,
          mt_subtotal:0,
          detalleProductos: [],
        },
        btnAction: "Registrar",
        btnActionDraft: "Guardar Borrador",
        errorMessages: []
      };
    },
    computed: {

      total_retencion() {
        if(this.form.aplicaIR && (Number(this.form.mt_subtotal) >= 1000)){
          this.form.mt_retencion = Number((this.form.mt_subtotal * 0.02).toFixed(2));
        }else{
          this.form.mt_retencion=0;
        }
        return this.form.mt_retencion;
      },

      total_retencion_imi() {
        if(this.form.aplicaIMI){
          this.form.mt_retencion_imi = Number((this.form.mt_subtotal * 0.01).toFixed(2));
        }else{
          this.form.mt_retencion_imi=0;
        }

        return this.form.mt_retencion_imi;
      },

      total_cantidad() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + Number(item.cantidad))
        }, 0)
      },
      total_subt() {
        this.form.mt_subtotal= this.form.detalleProductos.reduce((carry, item) => {
                  return(carry + Number(item.subtotal.toFixed(2)));
                }
                , 0)
        return Number(this.form.mt_subtotal);
      },
      total_descuento() {
        return this.form.detalleProductos.reduce((carry, item) => {
                  return(carry + Number(Number(item.monto_descuento).toFixed(2)));
                }
                , 0)
      },

      gran_total() {

        this.form.total =  this.form.detalleProductos.reduce((carry, item) => {
                  return (carry + Number(item.subtotal.toFixed(2)));
                }
                , 0)-Number( this.form.mt_retencion+this.form.mt_retencion_imi)

        return Number(this.form.total);
      },
    },
    methods: {
      calcularPesoX(item){
        item.pesoLb = Math.max(Math.min(Math.round(item.pesoLb), 150), 1);
        item.peso = Number(item.pesoLb / 2.205).toFixed(2);
      },
      convertirPeso(){
        let self = this;
        self.detalleForm.pesoLbrs = Math.max(Math.min(Math.round(self.detalleForm.pesoLbrs), 150), 1);
        self.detalleForm.peso = Number(self.detalleForm.pesoLbrs / 2.205).toFixed(2);
      },
      cambiarTipoPago(){
        let self = this;
        if(self.form.id_condicion_pago === 1){
          self.form.plazo_credito = 0;
        }else{
          self.form.plazo_credito = 8;
        }
      },
      seleccionarProducto() {
        var self = this
        if (self.detalleForm.productox)
          self.detalleForm.cantidad = 1;
        self.detalleForm.precio = self.precio_compra;
        self.$refs.cantidad.focus();
      },
      sub_total(itemX) {
        itemX.subtotal= Number((Number(itemX.precio)* Number(itemX.cantidad)*Number(itemX.peso)).toFixed(2));
        itemX.total =itemX.subtotal;
        if(!isNaN(itemX.total)){
          return itemX.total;
        }
        else return 0;
      },

      onDateSelect(date) {
        //console.log(date); //
        this.form.fecha_compra = moment(date).format("YYYY-MM-DD"); //
      },

      cargar_detalles_proveedor() {
        var self = this
        if(self.form.proveedor)
        self.form.nombre_proveedor = self.form.proveedor.nombre_comercial;
        self.form.numero_cedula = self.form.proveedor.numero_cedula;
        self.form.numero_ruc =self.form.proveedor.numero_ruc;
        self.form.tipo_persona = self.form.proveedor.tipo_persona;
      },
      agregarDetalle() {
        let self = this;
        if(this.detalleForm.productox){
          if(this.detalleForm.cantidad>0 && this.detalleForm.precio > 0&& this.detalleForm.peso > 0){

            let i = 0;
            let keyx = 0;
            /*if(self.form.detalleProductos){
              self.form.detalleProductos.forEach((productox, key) => {
                //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
                if(self.detalleForm.productox.id_producto===productox.productox.id_producto){
                  i++;
                  keyx = key;
                }
              });
            }*/

            if(i === 0){
              this.detalleForm.productox.descripcion = this.detalleForm.productox.text;
              this.form.detalleProductos.push({
                productox: this.detalleForm.productox,
                cantidad: this.detalleForm.cantidad,
                peso: this.detalleForm.peso,
                pesoLb: this.detalleForm.pesoLbrs,
                precio: this.detalleForm.precio,
                subtotal: 0,
                total: 0,
              });
              this.detalleForm.productox='';
              this.detalleForm.cantidad=1;
              this.detalleForm.peso=0.45;
              this.detalleForm.pesoLbrs=1;
              this.detalleForm.subtotal=0;
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
                  this.detalleForm.cantidad=0;
                  this.detalleForm.precio=0;
                  this.detalleForm.peso=0.45;
                  this.detalleForm.pesoLbrs=1;
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
        orden.nueva({
        }, data => {
            self.bodegas = data.bodegas;
          self.form.bodega= self.bodegas[0];
            self.proveedores= data.proveedores;
            self.vendedores= data.vendedores;
            self.productos= data.productos;
          self.form.vendedor= data.vendedor_actual;
          self.precio_compra = Number(data.precio_compra_usado);
          self.loading = false;

        })

      },

      registrar() {
        var self = this;
        self.btnAction = "Registrando, espere....";

        if(self.form.es_nuevo){
          self.form.id_proveedor = 0;
        }else{
          if(self.form.proveedor)
          self.form.id_proveedor = self.form.proveedor.id_proveedor;
        }

            self.$swal.fire({
              title: 'Esta seguro de guardar y emitir la compra?',
              text: "Revise bien los datos",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, confirmar',
              cancelButtonText:'Cancelar'
            }).then((result) => {
              if (result.value) {
                orden.registrar(
                        self.form,
                        data => {
                          alertify.success("Compra registrada correctamente", 5);
                          this.$router.push({
                            name: "listado-compra-usado"
                          });
                        },
                        err => {
                          self.errorMessages = err;
                          self.btnAction = "Registrar";
                        }
                );
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
  .check-label2 {
    margin-top: 30px;
  }
</style>
