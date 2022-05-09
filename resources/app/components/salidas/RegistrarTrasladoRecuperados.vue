<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Registrar baterías recuperadas</div>
            <div class="box-description">Formulario para trasladar baterías</div>
          </div>

          <div class="alert alert-success">
            <span><strong>Datos de la batería original</strong></span>
          </div>
          <div class="row">

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Bodega Garantía:</label>
                <v-select
                        label="descripcion"
                        v-model="form.bodega_garantia"
                        :options="bodegas_garantia"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.bodega_garantia" v-text="message"></li>
                </ul>
              </div>
            </div>

          <div class="col-sm-3">
            <div class="form-group">
              <label for>Ingresar batería a la siguiente bodega:</label>
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

            <div class="col-sm-3">
              <div class="form-group">
                <label > Ingresar baterías con estado</label>
                <select @change="cambiarEstadoBaterias" class="form-control" v-model.number="form.estado">
                  <option value="8">Recuperada</option>
                  <option value="1">Nueva</option>
                </select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.estado" v-text="message"></li>
                </ul>
              </div>
            </div>

          </div>

          <br>

          <div class="row">
            <div class="col-sm-3">
              <div class="form-group">
                <label for>Código Garantía Bateria</label>
                <input @keydown.enter="buscarBateria" class="form-control" ref="bateria"  v-model="detalleForm.bateria_busqueda">
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
                <label for>Producto</label>
                <multiselect :disabled="true" v-model="detalleForm.productox" :options="productos"
                             deselect-label="No se puede eliminar este valor"
                             track-by="id_producto"
                             label="text"
                             placeholder="Selecciona un producto"
                             :searchable="true"
                             :show-labels="false"
                             :allow-empty="false"
                             ref="bateria"
                ></multiselect>

              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Fecha Activación</label>
                <input class="form-control" type="text" placeholder="MM/YY" disabled
                       v-mask="'##/##'"
                       ref="fecha_activacion" v-model="detalleForm.fecha_activacion" p.enter="fechaActivacionEvento">

                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.fecha_activacion"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label for>&nbsp;</label>
                <button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar Batería</button>
              </div>
            </div>


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
                  <th >Batería</th>
                  <th >Código Garantía</th>
                  <th >Fecha Activación</th>
                  <th >Estado Actual</th>
                  <th >Estado luego de revisión</th>
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
                      <input  disabled  class="form-control" v-model="item.codigo_garantiax">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.codigo_garantiax`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input disabled class="form-control"  v-mask="'##/##'" v-model="item.fecha_activacion">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.fecha_activacion`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <select disabled class="form-control" v-model.number="item.estado_actual">
                        <option value="3">En garantía</option>
                      </select>
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.estado_actual`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <select disabled class="form-control" v-model.number="item.estado">
                        <option value="8">Recuperada</option>
                        <option value="1">Nueva</option>
                      </select>
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.estado`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>




                  </tr>
                </template>
                </tbody>
                <tfoot>
                </tfoot>
              </table>
            </div>

          </div>
          <br>
           <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'facturas' }">
              <button type="button" class="btn btn-default">Cancelar</button>
            </router-link>
            <button :disabled="btnAction !== 'Registrar'"
                    @click="registrar"
                    class="btn btn-primary"
                    type="button">{{ btnAction }}</button>
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
  import salidas from "../../api/salidas";
  import bodega from "../../api/bodegas";

  import es from 'vuejs-datepicker/dist/locale/translations/es'

  import { SweetModal } from 'sweet-modal-vue'
  import cliente from '../../api/clientes'
  import tc from '../../api/tasas-cambio'
  import loadingImage from '../../assets/images/block50.gif'
  import roundNumber from '../../assets/custom-scripts/Round'
  import bateria from "../../api/baterias";

  export default {
    components: {
      SweetModal
    },
    data() {
      return {
        loading:true,
        msg: 'Cargando el contenido espere un momento',
        url : '/public'+loadingImage,


        bodegas: [],
        bodegas_garantia: [],

        productos: [],


        detalleForm: {
          productox: '',

          cantidad: 1,
          precio_sugerido: 0,
          precio_sugerido_me: 0,
          porcentaje_ajuste: 0,
          porcentaje_ajuste_cliente:0,
          precio:0,
          precio_costo: 0,
          precio_lista: 0,
          fecha_venta: moment(new Date()).format("YYYY-MM-DD"),
          codigo_garantia:'',
          fecha_activacion:'',

        },

        form: {
          bodega_garantia: "",
          bodega: "",
          estado:8,
          detalleProductos: [],
        },
        btnAction: "Registrar",

        errorMessages: []
      }

    },
    methods: {
      onDateSelect(date) {
        this.detalleForm.fecha_venta = moment(date).format("YYYY-MM-DD"); //
          this.obtenerPorcentajeAjuste();
      },

      cambiarEstadoBaterias(){
        let self = this;
        if(self.form.detalleProductos && self.form.estado){
          self.form.detalleProductos.forEach((productox, key) => {
           self.form.detalleProductos[key].estado = self.form.estado;
          });
        }
      },

      buscarBateria() {
        var self = this;
        if(self.form.bodega_garantia){
        self.loading = true;
        //self.$refs.precio_unitario.focus();
        bateria.buscarCodigo({
          codigo_bateria: self.detalleForm.bateria_busqueda,
          id_bodega: self.form.bodega_garantia.id_bodega,
          reservada:false,
          estado: 3// en garantia
        }, data => {
          if(data !== null){

            let keyx = -1;
            if(self.productos){
              self.productos.forEach((productox, key) => {
                //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
                if(data.id_producto===productox.id_producto){
                  keyx = key;
                }
              });
            }

            if(keyx > -1) {
              self.detalleForm.productox = self.productos[keyx];
              self.detalleForm.cantidad=1;
              self.detalleForm.precio_sugerido = roundNumber.round(Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio)),2);
              self.detalleForm.precio_sugerido_me = Number(self.detalleForm.productox.precio_sugerido);
              self.detalleForm.costo_promedio = Number(self.detalleForm.productox.costo_promedio);
              self.detalleForm.codigo_garantia = data.codigo_garantia;
              self.detalleForm.id_bateria = data.id_bateria;
              self.detalleForm.fecha_activacion = data.fecha_activacion;
              self.detalleForm.estado_actual = data.estado;
              self.detalleForm.estado = 8;

            }else{
              self.detalleForm.bateria_busqueda = '';
              self.detalleForm.fecha_activacion = '';
              self.detalleForm.productox = '';
              self.detalleForm.cantidad=1;
              self.detalleForm.precio_sugerido = 0;
              self.detalleForm.precio_sugerido_me = 0;
              self.detalleForm.costo_promedio = 0;
              self.detalleForm.codigo_garantia = '';
              self.detalleForm.id_bateria = '';
              self.detalleForm.fecha_activacion = '';
              self.detalleForm.estado_actual = '';
              self.detalleForm.estado = 8;
            }





          }else{
            alertify.warning("No se encuentra esta batería.",5);
            self.detalleForm.bateria_busqueda = '';
            self.detalleForm.fecha_activacion = '';
          }
          self.loading = false;
        }, err => {
          console.log(err);
          if(err.codigo_bateria){
            self.detalleForm.bateria_busqueda = '';
            alertify.warning("No se encuentra esta batería.",5);
            self.detalleForm.productox = '';
          }
          self.loading = false;
        })
        }else{
          alertify.warning("Debe seleccionar una bodega para buscar baterías especificas.",5);
        }
      },



      seleccionarBodega() {
        var self = this;
        self.loading = true;
        self.form.detalleProductos = [];
        self.form.detallePago = [];
        self.detalleForm.productox ='';
        self.detalleForm.fecha_activacion ='';

        bodega.buscarProductosBodega({
          id_bodega: self.form.bodegas_garantia.id_bodega
        }, data => {
          if(data !== null){

            self.productos = [];
            self.productos = data.productos;

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
      cargar_detalles_producto() {
        //const productoP = e.target.value;
        var self = this;
        //self.detalleForm.productox = productoP;
        if(self.detalleForm.productox){
        self.detalleForm.cantidad=1;
        self.detalleForm.precio_sugerido = roundNumber.round(Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio)),2);
        self.detalleForm.precio_sugerido_me = Number(self.detalleForm.productox.precio_sugerido);

        if(self.detalleForm.productox.tipo_producto===2){
          self.detalleForm.afectacionx = self.afectaciones[0];
        }

        self.$refs.cantidad.focus();
        //self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
        }
      },


      calcular_montos(itemX){

        itemX.subtotal= Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(2));

        itemX.mt_descuento= Number((Number(itemX.p_descuento/100)* Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(2))).toFixed(2));

        //itemX.p_ajuste= Number(itemX.afectacionx.valor);

        itemX.mt_ajuste= Number((Number(itemX.p_ajuste/100)* Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(2))).toFixed(2));

        itemX.p_unitario = Number(((Number(itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste)/ Number(itemX.cantidad))).toFixed(2));

        /*console.log(itemX.p_impuesto);
        console.log(Number(itemX.p_impuesto/100));
        console.log(itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste);
        console.log(Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste)))));
        */
        /*let xy = Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste))));
        console.log(roundNumber.round(xy,2));*/

        itemX.mt_impuesto= roundNumber.round(Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste))).toFixed(2)),2);

        itemX.total_sin_iva = roundNumber.round(Number((itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste)),2);

        itemX.total = Number((itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste + itemX.mt_impuesto).toFixed(2));

        if(!isNaN(itemX.mt_descuento)){
          return itemX.mt_descuento;
        }
        else return 0;
      },

    obtenerTCParalela(){
    var self = this;
    self.loading = true;
    tc.obtenerTCParalela({
      fecha: self.form.fecha_salida,
      dias: self.form.dias_credito
    }, data => {
      if(data.tasa_paralela !== null){
        self.form.t_cambio = Number(data.tasa_paralela);
        //self.form.tasa_oficial = Number(data.tasa);
        self.form.f_vencimiento = data.fecha;

        self.form.detalleProductos.forEach((productox, key) => {
          productox.precio_lista = Number((productox.precio_lista_me*self.form.t_cambio).toFixed(2));
          productox.precio = Number((productox.precio_lista_me*self.form.t_cambio).toFixed(2));
       // console.log(productox.precio_lista);
        });



      }else{
        alertify.warning("No se encuentra tasa de cambio para esta fecha.",5);
        self.form.t_cambio = 0;
        self.form.f_vencimiento = self.form.fecha_salida;
        self.form.detalleProductos = [];
      }
      self.loading = false;
    }, err => {
      if(err.fecha[0]){
        self.form.t_cambio = 0;
        self.form.f_vencimiento = self.form.fecha_salida;
        alertify.warning(err.fecha[0],5);
        self.loading = false;
      }
    })
  },


      obtenerPorcentajeAjuste(){
        var self = this;
        self.loading = true;
        bateria.obtenerPorcentajeAjuste({
          fecha_venta: self.detalleForm.fecha_venta,
          id_producto: self.detalleForm.productox.id_producto,
          tipo_servicio:  self.detalleForm.tipo_servicio,
        }, data => {
          if(data !== null){
              self.detalleForm.porcentaje_ajuste_cliente = data;
            self.detalleForm.porcentaje_ajuste =  100-Number(self.detalleForm.porcentaje_ajuste_cliente);


              if(Number(self.detalleForm.porcentaje_ajuste) > 0){
                self.detalleForm.afectacionx = self.afectaciones[0];
              }else{
                self.detalleForm.afectacionx = self.afectaciones[1];
              }

            self.detalleForm.precio = roundNumber.round(Number(Number(self.detalleForm.precio_sugerido) - Number((((100-self.detalleForm.porcentaje_ajuste_cliente)/100)*self.detalleForm.precio_sugerido).toFixed(2))),2);
                }else{
            alertify.warning("No se encuentra esta batería.",5);
            self.detalleForm.porcentaje_ajuste = 0;
           }
          self.loading = false;
        }, err => {
          console.log(err);
          self.loading = false;
        })
      },

      obtenerMunicipios() {
        var self = this
        self.form.municipio= null;
        if(self.formCliente.departamento.municipios_departamento)
          self.municipios = self.formCliente.departamento.municipios_departamento
      },

      nueva() {
        var self = this;
        salidas.nuevaSalidaRecuperados({
                }, data => {
                  self.bodegas= data.bodegas;
                  self.bodegas_garantia = data.bodegas_garantia;

                  self.form.bodega_garantia = self.bodegas_garantia[0];
                  self.form.bodega = self.bodegas[0];
                  self.productos = data.productos;
                  self.loading = false;

                },
                err => {
                  console.log(err);
                  self.loading = false;
                })
      },

      agregarDetalle() {
        var self = this;
        if(self.detalleForm.productox){
          let existeCodigoGarantia= false;

          self.form.detalleProductos.forEach((bateriax, key) => {
            if(self.detalleForm.codigo_garantia===bateriax.codigo_garantiax){
              existeCodigoGarantia=true;
            }
          });

          if(!existeCodigoGarantia){

            this.form.detalleProductos.push({
              productox: this.detalleForm.productox,
              codigo_garantiax: this.detalleForm.codigo_garantia,
              fecha_activacion: this.detalleForm.fecha_activacion,
              estado_actual: this.detalleForm.estado_actual,
              estado: this.form.estado,
              id_bateria: this.detalleForm.id_bateria,
            });
            alertify.success("Batería agregada!",5);
          }else{
            alertify.warning("Ya existe ese código de batería en el listado",5);
          }

          this.detalleForm.productox=[];
          this.detalleForm.bateria_busqueda='';
          this.detalleForm.codigo_garantiax='';
                  this.detalleForm.fecha_activacion='';
                  this.detalleForm.estado_actual='';
                  //this.form.estado=8;

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

      pagoCompleto(IdMoneda) {
        var self = this;

        if(Number(self.form.total_final_cordobas.toFixed(2))>0){
        self.form.detallePago = [];
  /*
        let monto =0,monto_me=0;
        if(IdMoneda === 1){
          monto=Number(self.form.total_final_cordobas.toFixed(2));
          monto_me=Number((self.form.total_final_cordobas/self.form.t_cambio).toFixed(2));
        }else{
          monto=Number(self.form.total_final_cordobas.toFixed(2));
          monto_me=Number((self.form.total_final_cordobas/self.form.t_cambio).toFixed(2));
        }*/

              self.form.detallePago.push({
                via_pagox: self.vias_pago[1],
                moneda_x: self.monedas[Number(IdMoneda)],
                monto: Number(self.form.total_final_cordobas.toFixed(2)),
                monto_me: Number((self.form.total_final_cordobas/self.form.t_cambio).toFixed(2)),
                banco_x:null,
                numero_minuta:'',
                numero_nota_credito:'',
                numero_cheque:'',
                numero_transferencia:'',
                numero_recibo_pago:'',

              });

            self.detalleFormPago.via_pagox=null;
            self.detalleFormPago.monto=0;
            self.detalleFormPago.monto_me=0;
            self.detalleFormPago.moneda_x=null;
            self.detalleFormPago.banco_x=null;
            self.detalleFormPago.numero_minuta='';
            self.detalleFormPago.numero_nota_credito='';
            self.detalleFormPago.numero_cheque='';
            self.detalleFormPago.numero_transferencia='';
            self.detalleFormPago.numero_recibo_pago='';
        }

      },


      agregarMetodoPago() {
        var self = this;
        if(self.detalleFormPago.via_pagox && self.detalleFormPago.moneda_x){
          if(self.detalleFormPago.monto>0){
            let i = 0;
            let keyx = 0;
            if(self.form.detallePago){
              self.form.detallePago.forEach((via_pago_x, key) => {
                if((self.detalleFormPago.via_pagox.id_via_pago===via_pago_x.via_pagox.id_via_pago)&&
                        self.detalleFormPago.moneda_x.id_moneda === via_pago_x.moneda_x.id_moneda){
                  i++;
                  keyx = key;
                }
              });
            }
            let monto_me = 0,monto_mn = 0;

            if(self.detalleFormPago.moneda_x.id_moneda === 1){
              monto_mn= Number(self.detalleFormPago.monto);
              monto_me= Number((self.detalleFormPago.monto/self.form.t_cambio).toFixed(2));

            }else if(self.detalleFormPago.moneda_x.id_moneda === 3){
              monto_me= Number(self.detalleFormPago.monto);
              monto_mn= Number((self.detalleFormPago.monto*self.form.t_cambio).toFixed(2));
            }

            if(i === 0){
              self.form.detallePago.push({
                  via_pagox: self.detalleFormPago.via_pagox,
                  moneda_x: self.detalleFormPago.moneda_x,
                  monto: Number(monto_mn.toFixed(2)),
                  monto_me: Number(monto_me.toFixed(2)),
                  banco_x:self.detalleFormPago.banco_x,
                  numero_minuta:self.detalleFormPago.numero_minuta,
                  numero_nota_credito:self.detalleFormPago.numero_nota_credito,
                  numero_cheque:self.detalleFormPago.numero_cheque,
                  numero_transferencia:self.detalleFormPago.numero_transferencia,
                  numero_recibo_pago:self.detalleFormPago.numero_recibo_pago,

              });
              alertify.success("Método de pago agregado!",5);
            }else{

              if(self.detalleFormPago.moneda_x.id_moneda === 1){
                monto_mn= Number(self.detalleFormPago.monto);
                monto_me= roundNumber.round(Number((self.detalleFormPago.monto/self.form.t_cambio)),2);

                self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto + self.detalleFormPago.monto).toFixed(2));
                self.form.detallePago[keyx].monto_me = Number((self.form.detallePago[keyx].monto / self.form.t_cambio).toFixed(2));

              }else if(self.detalleFormPago.moneda_x.id_moneda === 3){
                self.form.detallePago[keyx].monto_me = Number((self.form.detallePago[keyx].monto_me + self.detalleFormPago.monto).toFixed(2));
                self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto_me * self.form.t_cambio).toFixed(2));
              }

              //let nuevo_monto_total = self.form.detallePago[keyx].monto + self.detalleFormPago.monto;

                alertify.success("Pago agregado!",5);
            }

            self.detalleFormPago.via_pagox=null;
            self.detalleFormPago.monto=0;
            self.detalleFormPago.monto_me=0;
            self.detalleFormPago.moneda_x=null;
            self.detalleFormPago.banco_x=null;
            self.detalleFormPago.numero_minuta='';
            self.detalleFormPago.numero_nota_credito='';
            self.detalleFormPago.numero_cheque='';
            self.detalleFormPago.numero_transferencia='';
            self.detalleFormPago.numero_recibo_pago='';


          }else{
            alertify.warning("El monto debe ser mayor que cero",5);
          }
        }else{
          alertify.warning("Debe seleccionar un método y una moneda",5);
        }
      },

      eliminarLineaPago(item, index) {
        if (this.form.detallePago.length >= 1) {
          this.form.detallePago.splice(index, 1);

        }else{
          this.form.detallePago=[];
        }
      },

     procesar_factura(){
        var self = this;
       self.$swal.fire({
         title: 'Esta seguro de completar el traslado de productos?',
         text: "Revise los detalles del traslado ",
         type: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Si, confirmar',
         cancelButtonText: 'Cancelar'
       }).then((result) => {
         if (result.value) {
           self.loading=true;
           salidas.registrarTrasladoRecuperado(
                   self.form,
                   data => {
                     self.loading=false;
                     this.$swal.fire(
                             'Traslado Registrado!',
                             'El traslado de baterías en garantía fue registrado correctamente',
                             'success'
                     ).then((result2)=> {
                       if (result2.value) {
                         this.$router.push({
                           name: "salidas"
                         });
                       }
                     })
                   },
                   err => {
                     self.errorMessages = err;
                     alertify.warning("Por favor revise los datos faltantes",5);
                     self.btnAction = "Registrar";
                     self.loading=false;
                   }
           );
         }else{
           self.btnAction = "Registrar";

         }
       })
     },

      registrar() {
        var self = this;
        self.btnAction = "Registrando, espere....";
        self.procesar_factura();
      },


      seleccionarTipo(){
        var self = this;
        if(self.form.id_tipo===1){
          self.form.dias_credito=0;
        }else{
          self.form.aplicaIR=false;
          self.form.aplicaIMI=false;

          self.form.mt_retencion=0;
          self.form.mt_retencion_imi=0;

          self.form.doc_exoneracion_ir='';
          self.form.doc_exoneracion_imi='';

          self.form.dias_credito=0;
          self.form.dias_credito = self.plazo_maximo_credito;
        }
        self.obtenerTCParalela();
        /*calcular fecha*/
      }

    },
    mounted() {
      // this.obtenerAfectacionesTodas();
      // this.obtenerTodasBodegasProductos();
      this.nueva();
    }
  };
</script>
<style>
  .btn-agregar {
    margin-top:33px;
  }
  .form-rta91{
    margin-top:33px;
  }
</style>




