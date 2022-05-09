<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Facturar</div>
            <div class="box-description">Formulario para facturar productos</div>
          </div>

          <div class="alert alert-success">
            <span><strong>Datos del Cliente</strong></span>
          </div>
          <div class="row">
            <div class="col-sm-5">
              <div class="form-group">
                <label > Cliente</label>
                <div class="form-group">
                  <typeahead :initial="form.factura_cliente" :params="{es_deudor: false}" :trim="80" :url="clientesBusquedaURL" @input="seleccionarCliente" style="width: 100%;"></typeahead>
                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.factura_cliente" v-text="message"></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-1">
              <div class="form-group">
                <div class="form-group">
                  <button class="btn btn-success btn-agregar" @click="abrirModal">Nuevo</button>
                </div>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label >Tipo Cliente</label>
                <select class="form-control" v-model.number="form.tipo_identificacion">
                  <option value="1">Natural</option>
                  <option value="2">Jurídico</option>
                </select>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label > Identificación</label>
                <input class="form-control" placeholder="Número Identificación" v-model="form.identificacion">
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.identificacion" v-text="message"></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="alert alert-success">
            <span><strong>Datos de Factura</strong></span>
          </div>


          <div class="row">

            <div class="col-sm-3">
              <div class="form-group">
                <label > Sucursal</label>
                <div class="form-group">
                  <typeahead :initial="form.factura_sucursal" :trim="80" :url="sucursalesBusquedaURL" @input="seleccionarSucursal" style="width: 100%;"></typeahead>

                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.factura_sucursal" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label >Serie</label>
                <input class="form-control" disabled placeholder="Serie" v-model="form.serie">
                <ul class="error-messages">
                  <li v-for="message in errorMessages.serie" :key="message" v-text="message"></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>Bodega</label>
                <v-select
                        label="descripcion"
                        v-model="form.factura_bodega"
                        :options="bodegas"
                        v-on:input="seleccionarBodega()"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.factura_bodega" v-text="message"></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-2">
              <div class="form-group">
                <label >Tipo Factura</label>
                <select @change="seleccionarTipo" class="form-control" v-model.number="form.id_tipo">
                  <option value="1">Contado</option>
                  <option :disabled="!clienteCredito" value="2">Crédito</option>
                </select>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label > Plazo Crédito</label>
                <select @change="obtenerTCParalela" :disabled="!(form.id_tipo===2)" class="form-control" v-model.number="form.dias_credito">
                  <option :disabled="(form.id_tipo===2)" value="0">N/A</option>
                  <option :disabled="!(plazo_maximo_credito>=8)"  value="8">8 días</option>
                  <option :disabled="!(plazo_maximo_credito>=15)" value="15">15 días </option>
                  <option :disabled="!(plazo_maximo_credito>=30)" value="30">30 días</option>
                  <option :disabled="!(plazo_maximo_credito>=45)" value="45">45 días</option>
                  <option :disabled="!(plazo_maximo_credito>=60)" value="60">60 días</option>
                </select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.plazo_credito" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label > Vendedor</label>
                <div class="form-group">
                  <typeahead :initial="form.factura_vendedor" :trim="80" :url="vendedoresBusquedaURL" @input="seleccionarVendedor" style="width: 100%;"></typeahead>

                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.factura_vendedor" v-text="message"></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>Fecha Emitida</label>
                <datepicker :disabled="true" :format="format" :language="es" :value="new Date()"></datepicker>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.f_factura"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>Fecha Vencimiento</label>
                <input disabled type="text" class="form-control" v-model="form.f_vencimiento">
              </div>
            </div>


            <div class="col-sm-2">
              <div class="form-group">
                <label for>T/C</label>
                <input disabled type="text" class="form-control" v-model="form.t_cambio">
              </div>
            </div>

            <div class="col-sm-12">
              <div class="form-group">
                <label for>Observaciones</label>
                <input type="text" class="form-control" v-model="form.observacion">
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

          <div v-if="!form.factura_bodega">
            <div class="alert alert-info">
              <span>Se requiere que seleccione una bodega para continuar.</span>
            </div>
            <hr>
          </div>

          <div class="alert alert-success">
            <span><strong>Detalle de productos</strong></span>
          </div>
          <div class="row">

            <div class="col-sm-4">
              <div class="form-group">
                <label > Producto</label>
                <div class="form-group">
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
                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.productox" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label for>Cantidad</label>
                <input @keydown.enter="cambiarFocoCantidad" @change="detalleForm.cantidad = Math.max(Math.min(Math.round(detalleForm.cantidad), detalleForm.productox.cantidad_disponible), 1)" class="form-control" ref="cantidad" type="number" v-model.number="detalleForm.cantidad">
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
                <label for>Precio Lista $ </label>
                <input  readonly class="form-control" v-model.number="detalleForm.precio_sugerido">
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
                  <th >Afectación</th>
                  <th >% Ajuste</th>
                  <th >Cantidad</th>
                  <!-- <th >U/M</th>-->
                  <th >P. Lista U$</th>
                  <th >Descuento %</th>
                  <th >Descuento U$</th>
                  <th >Ajuste U$</th>
                  <th >Precio Unit. U$</th>
                  <!--<th >Monto IVA U$</th>-->
                  <th >Valor U$</th>
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
                    <td style="width: 10%">
                      <input class="form-control" disabled v-model="item.productox.descripcion">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.productox.id_producto`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>
                    <td style="width: 12%">
                      <v-select
                              v-model="item.afectacionx"
                              label="descripcion"
                              :options="afectaciones"
                              v-on:input="calcularAjuste(item)"
                      ></v-select>
                      <ul class="error-messages">
                        <li
                                v-for="message in errorMessages[`detalleProductos.${index}.afectacionx.id_afectacion`]"
                                :key="message"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td style="width: 5%">
                      {{item.p_ajuste +'%'}}
                    </td>

                    <td style="width: 5%">
                      <input  @change="item.cantidad = Math.max(Math.min(Math.round(item.cantidad), item.productox.cantidad_disponible), 1)" class="form-control" type="number" v-model.number="item.cantidad">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.cantidad`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <!--<td style="width: 3%">
                         {{item.productox.unidad_medida}}
                         <ul class="error-messages">
                           <li
                                   :key="message"
                                   v-for="message in errorMessages[`detalleProductos.${index}.unidad_medida`]"
                                   v-text="message">
                           </li>
                         </ul>
                       </td>-->


                    <td style="width: 10%">
                      <input class="form-control" disabled v-model.number="item.precio">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.precio`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td style="width: 5%">
                      <input :disabled="item.p_ajuste>0" class="form-control" v-model.number="item.p_descuento" @change="item.p_descuento = Math.max(Math.min(Math.round(item.p_descuento), 20), 0)">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.p_descuento`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td style="width: 8%">
                      <strong>$ {{calcular_montos(item)| formatMoney(2)}}</strong>
                    </td>

                    <td style="width: 8%"><strong>$ {{item.mt_ajuste| formatMoney(2)}}</strong></td>


                    <td style="width: 8%">
                      <strong>$ {{item.p_unitario| formatMoney(2)}}</strong>
                    </td>

                    <td style="width: 8%">
                      <strong>$ {{item.total_sin_iva| formatMoney(2)}}</strong>
                    </td>



                  </tr>
                  <tr></tr>
                </template>
                </tbody>
                <tfoot>

                <tr>
                  <td colspan="9"></td>
                  <td>Subtotal</td>
                  <td> <strong>$ {{total_subt_sin_iva | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                  <td colspan="7"></td>
                  <td>Documento Exoneración</td>
                  <td> <input :disabled="form.aplicaIVA" class="form-control" v-model="form.doc_exoneracion"></td>
                  <td><label class="check-label"><input v-model="form.aplicaIVA"
                                                        type="checkbox"> I.V.A.</label>
                    <ul class="error-messages">
                      <li
                              :key="message"
                              v-for="message in errorMessages.doc_exoneracion"
                              v-text="message"
                      ></li>
                    </ul>
                  </td>
                  <td> <strong>$ {{total_impuesto | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                  <td colspan="7"></td>
                  <td>Documento Exoneración</td>
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
                  <td> <strong>$ {{total_retencion | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                  <td colspan="7"></td>
                  <td>Documento Exoneración</td>
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
                  <td> <strong>$ {{total_retencion_imi | formatMoney(2)}}</strong></td>
                </tr>

                <tr>
                  <td colspan="3"></td>
                  <td class="item-footer"> Total Unidades</td>
                  <td  class="item-footer">
                    <strong>{{total_cantidad}}</strong>
                  </td>
                  <td colspan="2">Total Descuento | Ajuste</td>
                  <td> <strong>$ {{total_descuento | formatMoney(2)}}</strong></td>
                  <td> <strong>$ {{total_ajuste | formatMoney(2)}}</strong></td>
                  <td>Total</td>
                  <td> <strong>$ {{gran_total | formatMoney(2)}}</strong></td>
                </tr>

                <tr>
                  <td colspan="9"></td>
                  <td>Equivalente Córdobas</td>
                  <td> <strong>C$ {{gran_total_cordobas | formatMoney(2)}}</strong></td>
                </tr>

                </tfoot>
              </table>
            </div>
          </div>

          <br>
            <div class="row">
            <div class="col-sm-8">

                <div class="row">

            <div class="col-sm-6">
              <div class="form-group">
                <label > Método Pago</label>
                <div class="form-group">
                  <multiselect v-model="detalleFormPago.via_pagox" :options="vias_pago"
                               deselect-label="No se puede eliminar este valor"
                               track-by="id_via_pago"
                               label="descripcion"
                               placeholder="Selecciona un método pago"
                               :searchable="true"
                               :show-labels="false"
                               :allow-empty="false"
                               ref="via_pago"
                  ></multiselect>
                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.via_pagox" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <label > Moneda</label>
                <div class="form-group">
                  <multiselect v-model="detalleFormPago.moneda_x" :options="monedas"
                               deselect-label="No se puede eliminar este valor"
                               track-by="id_moneda"
                               label="descripcion"
                               placeholder="Selecciona un método pago"
                               :searchable="true"
                               :show-labels="false"
                               :allow-empty="false"
                               ref="moneda"
                  ></multiselect>
                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.moneda_x" v-text="message"></li>
                </ul>
              </div>
            </div>

                    <template v-if="detalleFormPago.via_pagox">

                        <div v-if="[1,3,5,6].indexOf(detalleFormPago.via_pagox.id_via_pago) >= 0" class="col-sm-6">
                            <div class="form-group">
                                <label > Banco</label>
                                <div class="form-group">
                                    <multiselect v-model="detalleFormPago.banco_x" :options="bancos"
                                                 deselect-label="No se puede eliminar este valor"
                                                 track-by="id_banco"
                                                 label="descripcion"
                                                 placeholder="Selecciona un método pago"
                                                 :searchable="true"
                                                 :show-labels="false"
                                                 :allow-empty="false"
                                                 ref="banco"
                                    ></multiselect>
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.moneda_x" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div v-if="[1].indexOf(detalleFormPago.via_pagox.id_via_pago) >= 0" class="col-sm-6">
                            <div class="form-group">
                                <label for>Número Minuta</label>
                                <input class="form-control" v-model="detalleFormPago.numero_minuta">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.numero_minuta"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                      <div class="col-sm-6" v-if="detalleFormPago.via_pagox.id_via_pago === 3">
                        <div class="form-group">
                          <label for>Número Voucher</label>
                          <input class="form-control" v-model="detalleFormPago.numero_minuta">
                          <ul class="error-messages">
                            <li
                                    :key="message"
                                    v-for="message in errorMessages.numero_minuta"
                                    v-text="message"
                            ></li>
                          </ul>
                        </div>
                      </div>

                        <div v-if="detalleFormPago.via_pagox.id_via_pago === 4" class="col-sm-6">
                            <div class="form-group">
                                <label for>Número Nota Crédito</label>
                                <input class="form-control" v-model="detalleFormPago.numero_nota_credito">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.numero_nota_credito"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div v-if="detalleFormPago.via_pagox.id_via_pago === 5" class="col-sm-6">
                            <div class="form-group">
                                <label for>Número Cheque</label>
                                <input class="form-control" v-model="detalleFormPago.numero_cheque">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.numero_cheque"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div v-if="detalleFormPago.via_pagox.id_via_pago === 6" class="col-sm-6">
                            <div class="form-group">
                                <label for>Número Transferencia</label>
                                <input class="form-control" v-model="detalleFormPago.numero_transferencia">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.numero_transferencia"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div v-if="detalleFormPago.via_pagox.id_via_pago === 7" class="col-sm-6">
                            <div class="form-group">
                                <label for>Número Recibo Pago Anticipado</label>
                                <input class="form-control" v-model="detalleFormPago.numero_recibo_pago">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.numero_recibo_pago"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                    </template>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Monto {{detalleFormPago.moneda_x ? detalleFormPago.moneda_x.codigo : ''}}</label>
                                <input class="form-control" v-model.number="detalleFormPago.monto">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.monto"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for>&nbsp;</label>
                                <button @click="agregarMetodoPago" class="btn btn-info btn-agregar" ref="agregarpago">Agregar Método</button>
                            </div>
                        </div>


                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for>&nbsp;</label>
                      <button @click="pagoCompleto(0)" class="btn btn-info btn-agregar" ref="pagocord">Efectivo Completo Córdobas</button>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for>&nbsp;</label>
                      <button @click="pagoCompleto(1)" class="btn btn-info btn-agregar" ref="pagodolar">Efectivo Completo Dólares</button>
                    </div>
                  </div>



                        <div class="col-sm-12">
                            <table class="table table-bordered"  >
                                <thead>
                                <tr>
                                    <th></th>
                                    <th >Tipo</th>
                                    <th >Moneda</th>
                                    <th >Monto</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item, index) in form.detallePago">
                                    <tr>
                                        <td style="width: 2%">
                                            <button @click="eliminarLineaPago(item, index)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                        <td style="width: 10%">
                                            <input class="form-control" disabled v-model="item.via_pagox.descripcion">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`detallePagos.${index}.via_pagox.id_via_pago`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>

                                        <td style="width: 10%">
                                            <input class="form-control" disabled v-model="item.moneda_x.descripcion">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`detallePagos.${index}.moneda_x.id_moneda`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>


                                      <td style="width: 5%" v-if="item.moneda_x.id_moneda === 1">
                                        <input class="form-control" type="number"
                                               v-model.number="item.monto" step="0.01"
                                               @change="calcularEquivalente(item)">

                                        <ul class="error-messages">
                                          <li
                                                  :key="message"
                                                  v-for="message in errorMessages[`detalleProductos.${index}.cantidad`]"
                                                  v-text="message">
                                          </li>
                                        </ul>
                                      </td>

                                      <td style="width: 5%" v-if="item.moneda_x.id_moneda === 3">
                                        <input class="form-control" type="number" step="0.01"
                                               v-model.number="item.monto_me" @change="calcularEquivalente(item)">
                                        <ul class="error-messages">
                                          <li
                                                  :key="message"
                                                  v-for="message in errorMessages[`detalleProductos.${index}.cantidad`]"
                                                  v-text="message">
                                          </li>
                                        </ul>
                                      </td>

                                    </tr>
                                    <tr></tr>
                                </template>
                                </tbody>
                                <tfoot>
                                </tfoot>
                            </table>
                        </div>


          </div>
          </div>

            <div class="col-sm-4">
            <div class="row">

            <div class="col-sm-6">
              <div class="form-group">
                <label > Deuda</label>

                <p> <strong>C$ {{total_deuda | formatMoney(2)}}</strong></p>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.pago_cheque"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <label >Vuelto</label>
                <p><strong>C$ {{total_vuelto | formatMoney(2)}}</strong></p>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.pago_cheque"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>
            </div>

                <div class="row">
              <div class="col-sm-6">
                  <div class="form-group">
                      <label > Deuda Dólares</label>

                      <p> <strong>$ {{form.pago_pendiente | formatMoney(2)}}</strong></p>
                      <ul class="error-messages">
                          <li
                                  :key="message"
                                  v-for="message in errorMessages.pago_cheque"
                                  v-text="message"
                          ></li>
                      </ul>
                  </div>
              </div>

              <div class="col-sm-6">
                  <div class="form-group">
                      <label >Vuelto Dólares</label>
                      <p><strong>$ {{form.pago_vuelto | formatMoney(2)}}</strong></p>
                      <ul class="error-messages">
                          <li
                                  :key="message"
                                  v-for="message in errorMessages.pago_cheque"
                                  v-text="message"
                          ></li>
                      </ul>
                  </div>
              </div>
            </div>

          </div>
        </div>


          <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'facturas' }">
              <button type="button" class="btn btn-default">Cancelar</button>
            </router-link>
            <button
                    :disabled="btnAction !== 'Facturar'"
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


    <!--DIALOG -->
    <sweet-modal ref="modal" modal-theme="dark" overlay-theme="dark" title="Registrar Cliente">
      <div class="row">

        <div class="col-sm-4">
          <div class="form-group">
            <label >Tipo Persona</label>
            <select class="form-control" v-model.number="formCliente.tipo_persona">
              <option value="1">Natural</option>
              <option value="2">Jurídico</option>
            </select>
          </div>
        </div>

        <template v-if="formCliente.tipo_persona === 1">
          <div class="col-sm-4">
            <div class="form-group">
              <label > Número Cédula</label>
              <input class="form-control" placeholder="Número Cédula" v-model="formCliente.numero_cedula">
              <ul class="error-messages">
                <li :key="message" v-for="message in errorMessages.numero_cedula" v-text="message"></li>
              </ul>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="col-sm-4">
            <div class="form-group">
              <label > Número RUC</label>
              <input class="form-control" placeholder="Número RUC" v-model="formCliente.numero_ruc">
              <ul class="error-messages">
                <li :key="message" v-for="message in errorMessages.numero_ruc" v-text="message"></li>
              </ul>
            </div>
          </div>
        </template>

        <div class="col-sm-4">
          <div class="form-group">
            <label > Nombre Completo</label>
            <input class="form-control" placeholder="Nombre Completo"  v-model="formCliente.nombre_comercial">
            <ul class="error-messages">
              <li :key="message" v-for="message in errorMessages.nombre_comercial" v-text="message"></li>
            </ul>
          </div>
        </div>


        <div class="col-sm-4">
          <div class="form-group">
            <label > Contacto</label>
            <input class="form-control" placeholder="Contacto" v-model="formCliente.contacto">
            <ul class="error-messages">
              <li :key="message" v-for="message in errorMessages.contacto" v-text="message"></li>
            </ul>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="form-group">
            <label > Dirección</label>
            <input class="form-control" placeholder="Dirección" v-model="formCliente.direccion">
            <ul class="error-messages">
              <li :key="message" v-for="message in errorMessages.direccion" v-text="message"></li>
            </ul>
          </div>
        </div>


        <div class="col-sm-4">
          <div class="form-group">
            <label > Teléfono</label>
            <input class="form-control" placeholder="Teléfono" v-model="formCliente.telefono">
            <ul class="error-messages">
              <li :key="message" v-for="message in errorMessages.telefono" v-text="message"></li>
            </ul>
          </div>
        </div>


        <div class="col-sm-4">
          <div class="form-group">
            <label >Departamento</label>
            <v-select
                    :options="departamentos"
                    label="descripcion"
                    v-model="formCliente.departamento"
                    v-on:input="obtenerMunicipios()"
                    style="background: white"
            ></v-select>
            <ul class="error-messages">
              <li :key="message" v-for="message in errorMessages.departamento" v-text="message"></li>
            </ul>
          </div>
        </div>


        <div class="col-sm-4">
          <div class="form-group">
            <label >Municipio</label>
            <v-select
                    :options="municipios"
                    label="descripcion"
                    v-model="formCliente.municipio"
                    style="background: white"
            ></v-select>
            <ul class="error-messages">
              <li :key="message" v-for="message in errorMessages.municipio" v-text="message"></li>
            </ul>
          </div>
        </div>


        <div class="col-sm-4">
          <div class="form-group">
            <label >Zona</label>
            <v-select
                    :options="zonas"
                    label="descripcion"
                    v-model="formCliente.zona"
                    style="background: white"
            ></v-select>
            <ul class="error-messages">
              <li :key="message" v-for="message in errorMessages.zona" v-text="message"></li>
            </ul>
          </div>
        </div>



        <div class="col-sm-8">
          <div class="form-group">
            <label > Observaciones</label>
            <input class="form-control" placeholder="Observaciones" v-model="formCliente.observaciones">
            <ul class="error-messages">
              <li :key="message" v-for="message in errorMessages.observaciones" v-text="message"></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content-box-footer text-right">
        <button class="btn btn-default" @click="cerrarModal">Cancelar</button>
        <button  class="btn btn-primary"  @click="registrarCliente" type="button">Registrar Cliente</button>
      </div>

    </sweet-modal>

  </div>


</template>


<script type="text/ecmascript-6">
  import factura from "../../api/facturas";
  import bodega from "../../api/bodegas";

  import es from 'vuejs-datepicker/dist/locale/translations/es'

  //import { SweetModal } from 'sweet-modal-vue'
  import cliente from '../../api/clientes'
  import tc from '../../api/tasas-cambio'
  import loadingImage from '../../assets/images/block50.gif'
  import roundNumber from '../../assets/custom-scripts/Round'

  export default {
    /*components: {
      SweetModal
    },*/
    data() {
      return {
        loading:true,
        msg: 'Cargando el contenido espere un momento',
        url : '/public'+loadingImage,

        es: es,
        format: "dd-MM-yyyy",

        clientesBusquedaURL: "/ventas/clientes/buscar",
        vendedoresBusquedaURL: "/ventas/vendedores/buscar",

        sucursalesBusquedaURL: "/sucursales/buscar",
        //bodegasBusquedaURL: "/bodegas/buscar",
        //productosBodegaBusquedaURL: "/productos/buscar-bodega-venta",
        clienteCredito:false,
        plazo_maximo_credito:0,

        bodegas: [],
        productos: [],
        servicios: [],
        productosORG: [],

        departamentos:[],
        municipios:[],
        zonas:[],

        formCliente: {
          tipo_persona:1,
          nombre_comercial:'',

          numero_ruc: '',
          numero_cedula:'',
          direccion: '',
          id_tipo_cliente:1,
          telefono:'',
          correo:'',
          municipio:'',
          giro_negocio:'',
          zona :'',
          id_impuesto :1,
          tipo_contribuyente:1,
          retencion_ir:true,
          retencion_imi:true,
          clasificacion:1,
          permite_credito :false,
          plazo_credito:0,
          limite_credito:0,
          porcentaje_descuento:0,
          observaciones:'',
          permite_consignacion: false,
          tramite_cheque:15,
        },


        //afectacionesBusquedaURL: "/ventas/afectaciones/buscar",
        afectaciones:[],
        vias_pago:[],
        monedas:[],
          bancos:[],
        detalleForm: {
          productox: '',
          afectacionx: [],
          cantidad: 1,
          precio_sugerido: 0,
          descuento: 0,
          precio_costo: 0,
          precio_lista: 0,
          subtotal: 0,
          total: 0,
          total_sin_iva: 0,
        },

        detalleFormPago: {
          via_pagox: [],
          monto: 1,
          moneda_x: [],
            banco_x:[],
            numero_minuta:'',
            numero_nota_credito:'',
            numero_cheque:'',
            numero_transferencia:'',
            numero_recibo_pago:'',
        },

        form: {
          no_documento: "",
          f_factura: moment(new Date()).format("YYYY-MM-DD"),
          f_vencimiento: moment(new Date()).format("YYYY-MM-DD"),
          serie: "",
          id_tipo : 1,
          //factura_moneda: {},
          factura_sucursal: {},
          factura_bodega: "",
          tipo_identificacion: 1,
          identificacion: "",
          factura_cliente: {},
          id_tipo_cliente: 1,
          dias_credito :0,
          nombre_razon: "",
          factura_vendedor: {},
          t_cambio :0,
          tasa_paralela :0,
          doc_exoneracion: "",
          doc_exoneracion_ir: "",
          doc_exoneracion_imi: "",
          impuesto_exonerado:false,
          mt_retencion :0,
          mt_retencion_imi :0,
          mt_impuesto :0,
          mt_descuento :0,
          mt_ajuste :0,
          pago_efectivo :0,
          pago_tarjeta :0,
          pago_cheque :0,

          pago_efectivo_me :0,
          pago_tarjeta_me :0,
          pago_cheque_me :0,

          pago_vuelto:0,
          pago_pendiente:0,

          pago_vuelto_mn:0,
          pago_pendiente_mn:0,

          observacion: "",
          mt_subtotal:0,
          mt_subtotal_sin_iva:0,
          aplicaIR:false,
          aplicaIMI:false,
          aplicaIVA:true,
          total_final:0,
          total_final_cordobas:0,


          detalleProductos: [],
          detallePago: [],

        },
        btnAction: "Facturar",
        errorMessages: []
      }

    },
    computed: {
      total_subt_sin_iva() {
        this.form.mt_subtotal_sin_iva = Number((this.form.detalleProductos.reduce((carry, item) => {
                  return(carry + Number(item.total_sin_iva));
                }
                , 0)).toFixed(4));
        this.form.mt_subtotal = Number((this.form.detalleProductos.reduce((carry, item) => {
                  return(carry + Number(item.subtotal));
                }
                , 0)).toFixed(4));
        return this.form.mt_subtotal_sin_iva.toFixed(4);
      },
      total_impuesto() {
        if(this.form.aplicaIVA){
          this.form.mt_impuesto = Number((this.form.detalleProductos.reduce((carry, item) => {
            return (carry + Number(item.mt_impuesto.toFixed(4)))
          }, 0)).toFixed(4));
        }else{
          this.form.mt_impuesto=0;
        }

        return this.form.mt_impuesto;
      },

      total_retencion() {
        if(this.form.aplicaIR && (Number(this.form.mt_subtotal_sin_iva*Number(this.form.t_cambio)) >= 1000)){
          this.form.mt_retencion = Number((this.form.mt_subtotal_sin_iva * 0.02).toFixed(4));
        }else{
          this.form.mt_retencion=0;
        }
        return this.form.mt_retencion;
      },

      total_retencion_imi() {
        if(this.form.aplicaIMI){
          this.form.mt_retencion_imi = Number((this.form.mt_subtotal_sin_iva * 0.01).toFixed(4));
        }else{
          this.form.mt_retencion_imi=0;
        }

        return this.form.mt_retencion_imi;
      },

      total_ajuste() {
        this.form.mt_ajuste = this.form.detalleProductos.reduce((carry, item) => {
          return (carry + Number(item.mt_ajuste))
        }, 0)
        return this.form.mt_ajuste;
      },

      total_descuento() {
        this.form.mt_descuento = Number((this.form.detalleProductos.reduce((carry, item) => {
          return (carry + Number(item.mt_descuento.toFixed(4)))
        }, 0)).toFixed(4));
        return this.form.mt_descuento;
      },


      total_cantidad() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + Number(item.cantidad))
        }, 0)
      },

      gran_total() {
        this.form.total_final = Number((this.form.mt_subtotal_sin_iva - this.form.mt_retencion- this.form.mt_retencion_imi - this.form.mt_ajuste + this.form.mt_impuesto).toFixed(4));

        if(!isNaN(this.form.total_final)){
          return this.form.total_final;
        }
        else return 0;
      },

      gran_total_cordobas() {
        this.form.total_final_cordobas = roundNumber.decimalAdjust('ceil', Number(((this.form.mt_subtotal_sin_iva - this.form.mt_retencion- this.form.mt_retencion_imi - this.form.mt_ajuste + this.form.mt_impuesto)*this.form.t_cambio).toFixed(4)),-2);
        //roundNumber.round(Number((Number(this.form.total_final)*this.form.t_cambio).toFixed(4)),2);

        if(!isNaN(this.form.total_final_cordobas)){
          return this.form.total_final_cordobas;


        }
        else return 0;
      },


      total_deuda() {

          /*let total_pagos = this.form.detallePago.reduce((carry, item) => {
              return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto_me : Number((item.monto/this.form.t_cambio).toFixed(4))));
          }, 0);*/

        let total_pagos_cordobas = 0;

        if(this.form.detallePago.length){
        total_pagos_cordobas = this.form.detallePago.reduce((carry, item) => {
          return (carry + Number(item.moneda_x.id_moneda === 1 ? item.monto : Number((item.monto_me*this.form.t_cambio).toFixed(4))));
        }, 0);
        }

        /*console.log('Total pago C$: '+total_pagos_cordobas);
        console.log('Total factura C$: '+ this.form.total_final_cordobas);
        console.log('Dif C$: '+ this.form.total_final_cordobas- total_pagos_cordobas);*/

          if(((Number((this.form.total_final_cordobas).toFixed(4)) - Number((total_pagos_cordobas).toFixed(4))).toFixed(4))<0.0005){
              this.form.pago_pendiente = 0;
              this.form.pago_pendiente_mn = 0;
          }else{
            this.form.pago_pendiente_mn = Number((Number((this.form.total_final_cordobas).toFixed(4)) - Number((total_pagos_cordobas).toFixed(4))).toFixed(4));
            this.form.pago_pendiente = Number((this.form.pago_pendiente_mn/this.form.t_cambio).toFixed(4));
          }


        /*let total_pagos_cordobas = this.form.detallePago.reduce((carry, item) => {
          return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto : Number((item.monto_me*this.form.t_cambio).toFixed(4))));
        }, 0);*/

        if(!isNaN(this.form.pago_pendiente_mn)){
         //Number((Number((this.form.total_final*this.form.t_cambio).toFixed(4)) - total_pagos_cordobas).toFixed(4));
          return this.form.pago_pendiente_mn;
        }
        else return 0;
      },

      total_vuelto() {

         /* let total_pagos = this.form.detallePago.reduce((carry, item) => {
              return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto_me : Number(item.monto/this.form.t_cambio.toFixed(4))));
          }, 0);*/

        let total_pagos = 0;

        if(this.form.detallePago.length){
          total_pagos = this.form.detallePago.reduce((carry, item) => {
            return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto_me : Number((item.monto/this.form.t_cambio).toFixed(4))));
          }, 0);
        }


        if(((Number((this.form.total_final).toFixed(4)) - Number((total_pagos).toFixed(4))).toFixed(4))>0){///revision
              this.form.pago_vuelto = 0;
            this.form.pago_vuelto_mn= 0;
          }else{
            this.form.pago_vuelto =  roundNumber.round(Number((Number((total_pagos).toFixed(4)) - Number((this.form.total_final)).toFixed(4))),4);
            this.form.pago_vuelto_mn = roundNumber.round(Number((this.form.pago_vuelto*this.form.t_cambio).toFixed(4)),4);
          }

        //console.log('Master C$: '+((Number((this.form.total_final).toFixed(4)) - Number((total_pagos).toFixed(4))).toFixed(4)));


        /*let total_pagos_cordobas = this.form.detallePago.reduce((carry, item) => {
          return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto : Number((item.monto_me*this.form.t_cambio).toFixed(4))));
        }, 0);*/

        if(!isNaN(this.form.pago_vuelto_mn)){

          return this.form.pago_vuelto_mn;
        }
        else return 0;


      },


    },
    methods: {

      calcularEquivalente(itemX) {
        if(itemX.moneda_x.id_moneda===1 && itemX.monto > 0){
          itemX.monto_me = Number((itemX.monto/this.form.t_cambio).toFixed(4));
        }

        if(itemX.moneda_x.id_moneda===3 && itemX.monto_me > 0){
          itemX.monto = Number((itemX.monto_me*this.form.t_cambio).toFixed(4));
        }
      },

      abrirModal: function () {
        this.$refs.modal.open()
      },
      cerrarModal: function () {
        this.$refs.modal.close()
      },
      cambiarFocoCantidad() {
        var self = this;
        self.$refs.agregar.focus()
      },

      seleccionarCliente(e) {
        const trabajadorP = e.target.value;
        var self = this;
        self.form.factura_cliente = trabajadorP;
        self.form.tipo_identificacion =  self.form.factura_cliente.tipo_persona;
        self.form.id_tipo = 1;
        self.form.dias_credito = 0;
        self.plazo_maximo_credito = self.form.factura_cliente.plazo_credito;

        (self.form.factura_cliente.permite_credito && self.form.factura_cliente.plazo_credito > 0)? self.clienteCredito = true:self.clienteCredito = false;

        if(self.form.factura_cliente.tipo_persona === 1){
          self.form.identificacion = self.form.factura_cliente.numero_cedula;
        }else{
          self.form.identificacion = self.form.factura_cliente.numero_ruc;
        }
      },
      seleccionarVendedor(e) {
        const proveedorP = e.target.value;
        var self = this;
        self.form.factura_vendedor = proveedorP;
      },
      seleccionarSucursal(e) {
        const sucursalP = e.target.value;
        var self = this;
        self.bodegas = [];
        self.form.factura_bodega = [];
        self.form.factura_sucursal = sucursalP;
        self.form.serie = self.form.factura_sucursal.serie;
        if(self.form.factura_sucursal.sucursal_bodegas.length){
          self.bodegas = self.form.factura_sucursal.sucursal_bodegas;
          self.form.factura_bodega = self.bodegas[0];

          self.loading = true;
          self.form.detalleProductos = [];
          self.form.detallePago = [];
          self.detalleForm.productox ='';

          bodega.buscarProductosBodega({
            id_bodega: self.form.factura_bodega.id_bodega
          }, data => {
            if(data !== null){
              self.productosORG = data.productos;
              self.servicios = data.servicios;

              self.productosORG.forEach((producto, key) => {self.productos.push(producto)});
              self.servicios.forEach((servicio, key) => {self.productos.push(servicio)});

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

        }else{
          alertify.warning('La sucursal seleccionada no tiene bodegas disponibles.')
        }
      },
      seleccionarArea(e) {
        const areaP = e.target.value;
        var self = this;
        self.form.factura_area = areaP;
      },
      seleccionarBodega() {
        var self = this;
        self.loading = true;
        self.form.detalleProductos = [];
        self.form.detallePago = [];
        self.detalleForm.productox ='';

        bodega.buscarProductosBodega({
          id_bodega: self.form.factura_bodega.id_bodega
        }, data => {
          if(data !== null){
            self.productosORG = data.productos;
            self.servicios = data.servicios;

            self.productosORG.forEach((producto, key) => {self.productos.push(producto)});
            self.servicios.forEach((servicio, key) => {self.productos.push(servicio)});

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
        if(self.detalleForm.productox)
        self.detalleForm.cantidad=1;
        // self.detalleForm.precio_sugerido = Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio).toFixed(2));
        self.detalleForm.precio_sugerido = Number(self.detalleForm.productox.precio_sugerido);
        self.$refs.cantidad.focus();
        //self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;

      },
      calcularAjuste(itemX) {
        itemX.p_ajuste= Number(itemX.afectacionx.valor);
        if(itemX.p_ajuste>0){
          itemX.p_descuento = 0;
        }
      },

      calcular_montos(itemX){

        itemX.subtotal= Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(4));

        itemX.mt_descuento= Number((Number(itemX.p_descuento/100)* Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(4))).toFixed(4));

        itemX.p_ajuste= Number(itemX.afectacionx.valor);

        itemX.mt_ajuste= Number((Number(itemX.p_ajuste/100)* Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(4))).toFixed(4));

        itemX.p_unitario = Number(((Number(itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste)/ Number(itemX.cantidad))).toFixed(4));

        /*console.log(itemX.p_impuesto);
        console.log(Number(itemX.p_impuesto/100));
        console.log(itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste);
        console.log(Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste)))));
        */
        /*let xy = Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste))));
        console.log(roundNumber.round(xy,4));*/

        itemX.mt_impuesto= roundNumber.round(Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste)))),4);

        itemX.total_sin_iva = roundNumber.round(Number((itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste)),4);

        itemX.total = Number((itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste + itemX.mt_impuesto).toFixed(4));

        /*console.log(itemX.subtotal);
        console.log(itemX.mt_descuento);
        console.log(itemX.p_ajuste);
        console.log(itemX.mt_ajuste);
        console.log(itemX.p_unitario);
        console.log(itemX.mt_impuesto);
        console.log(itemX.total_sin_iva);
        console.log(itemX.total);*/
        if(!isNaN(itemX.mt_descuento)){
          return itemX.mt_descuento;
        }
        else return 0;
      },

      /* calcular_precio_unitario(itemX) {
           itemX.p_unitario = Number(((Number(itemX.subtotal)/ Number(itemX.cantidad))).toFixed(2));
           if(!isNaN(itemX.p_unitario)){
               return itemX.p_unitario;
           }
           else return 0;
       },
     calcular_monto_descuento(itemX) {
       itemX.mt_descuento= Number((Number(itemX.p_descuento/100)* Number(itemX.cantidad)* Number(itemX.precio)).toFixed(2));
       itemX.subtotal= Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(2));
       if(!isNaN(itemX.mt_descuento)){
         return itemX.mt_descuento;
       }
       else return 0;
     },
     calcular_monto_impuesto(itemX) {
       itemX.mt_impuesto= Number((Number(itemX.p_impuesto/100)* (itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste)*Number(itemX.cantidad)* Number(itemX.precio)).toFixed(2));

       if(!isNaN(itemX.mt_impuesto)){
         return itemX.mt_impuesto;
       }
       else return 0;
     },

     calcular_monto_ajuste(itemX) {
       itemX.mt_ajuste= Number((Number(itemX.p_ajuste/100)* Number(itemX.cantidad)* Number(itemX.precio)).toFixed(2));
       if(!isNaN(itemX.mt_ajuste)){
         return itemX.mt_ajuste;
       }
       else return 0;
     },
     sub_total(itemX) {
       itemX.subtotal= Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(2));

       //itemX.total =itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste + itemX.mt_impuesto;

       if(!isNaN(itemX.subtotal)){
         return itemX.subtotal;
       }
       else return 0;
     },

     calcularNeto(itemX) {
       //itemX.subtotal= Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(2));

       itemX.total =itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste + itemX.mt_impuesto;

       if(!isNaN(itemX.total)){
         return itemX.total;
       }
       else return 0;
     },*/


    obtenerTCParalela(){
    var self = this;
    self.loading = true;
    tc.obtenerTCParalela({
      fecha: self.form.f_factura,
      dias: self.form.dias_credito
    }, data => {
      if(data.tasa_paralela !== null){
        self.form.t_cambio = Number(data.tasa_paralela);
        //self.form.tasa_oficial = Number(data.tasa);
        self.form.f_vencimiento = data.fecha;
      }else{
        alertify.warning("No se encuentra tasa de cambio para esta fecha.",5);
        self.form.t_cambio = 0;
        self.form.f_vencimiento = self.form.f_factura;
      }
      self.loading = false;
    }, err => {
      if(err.fecha[0]){
        self.form.t_cambio = 0;
        self.form.f_vencimiento = self.form.f_factura;
        alertify.warning(err.fecha[0],5);
        self.loading = false;
      }
    })
  },

      obtenerTC(){
        var self = this;
        tc.obtenerTC({
          fecha: self.form.f_factura
        }, data => {
          if(data.tasa_paralela !== null){
            self.form.t_cambio = Number(data.tasa_paralela);
          }else{
            alertify.warning("No se encuentra tasa de cambio para esta fecha.",5);
            self.form.t_cambio = 0;
          }
          self.loading = false;
        }, err => {
          if(err.fecha[0]){
            self.form.t_cambio = 0;
            alertify.warning(err.fecha[0],5);
            self.loading = false;
          }
        })
      },


      /*obtenerAfectacionesTodas() {
         var self = this;
         afectacion.obtenerTodos(
                 data => {
                   self.afectaciones = data;
                 },
                 err => {
                   console.log(err);
                 }
         );
       },*/

      obtenerMunicipios() {
        var self = this
        self.form.municipio= null;
        if(self.formCliente.departamento.municipios_departamento)
          self.municipios = self.formCliente.departamento.municipios_departamento
      },

      nueva() {
        var self = this;
        factura.nueva({
                }, data => {
                  self.vias_pago = data.vias_pago;
                  self.afectaciones = data.afectaciones;
                  self.monedas = data.monedas;
                  self.bancos = data.bancos;
                  //self.form.factura_bodega=self.bodegas[0];
                  self.productos = [];
                  self.form.t_cambio = Number(data.t_cambio.tasa);
                  self.form.tasa_paralela = Number(data.t_cambio.tasa_paralela);
                  self.zonas = data.zonas;
                  self.formCliente.zona = data.zonas[0];
                  self.departamentos = data.departamentos
                  self.formCliente.departamento = self.departamentos[9]
                  self.municipios = self.formCliente.departamento.municipios_departamento
                  self.formCliente.municipio= self.municipios[5];
                  self.loading = false;
                  /*self.form.factura_bodega.productos_bodega.forEach((bodega_producto, key) => {
                    self.productos.push({
                      codigo_sistema: bodega_producto.producto_venta.codigo_sistema,
                      costo_promedio:  Number(bodega_producto.producto_venta.costo_promedio),
                      precio:Number(bodega_producto.producto_venta.precio_sugerido),
                      descripcion:  bodega_producto.producto_venta.descripcion,
                      id_producto:  bodega_producto.producto_venta.id_producto,
                      tasa_impuesto: Number(bodega_producto.producto_venta.tasa_impuesto),
                      id_bodega_producto:  self.form.factura_bodega.productos_bodega[key].id_bodega_producto,
                      nombre_comercial:  bodega_producto.producto_venta.nombre_comercial,
                      cantidad_disponible: Number(self.form.factura_bodega.productos_bodega[key].cantidad),
                      unidad_medida: bodega_producto.producto_venta.unidad_medida,
                      nombre_full: bodega_producto.producto_venta.descripcion+' - '+bodega_producto.producto_venta.codigo_barra,
                    });
                  });*/


                },
                err => {
                  console.log(err);
                  self.loading = false;
                })

      },

      agregarDetalle() {
        var self = this;
        if(self.detalleForm.productox){
          if(self.detalleForm.cantidad>0){
            let i = 0;
            let keyx = 0;
            if(self.form.detalleProductos){
              self.form.detalleProductos.forEach((productox, key) => {
                if(self.detalleForm.productox.id_producto===productox.productox.id_producto){
                  i++;
                  keyx = key;
                }
              });
            }
            if(i === 0){
              self.form.detalleProductos.push({
                productox: self.detalleForm.productox,
                afectacionx: self.afectaciones[0],
                cantidad: Number(self.detalleForm.cantidad),
                precio_costo:  Number(self.detalleForm.productox.costo_promedio),
                //precio_lista:  Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio).toFixed(2)),
                //precio:  Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio).toFixed(2)),
                precio_lista:  Number(self.detalleForm.productox.precio_sugerido),
                precio:  Number(self.detalleForm.productox.precio_sugerido),
                p_descuento:  0,
                mt_descuento:  0,
                p_impuesto:Number(self.detalleForm.productox.tasa_impuesto),
                mt_impuesto:  0,
                subtotal: 0,
                total: 0,
                total_sin_iva:0,
                mt_ajuste:0,
                p_ajuste:0,
              });
              alertify.success("Artículo agregado!",5);
            }else{
              let nuevo_total = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
              if(nuevo_total<=self.form.detalleProductos[keyx].productox.cantidad_disponible){
                self.form.detalleProductos[keyx].cantidad = nuevo_total;
                alertify.success("Artículo agregado!",5);
              }else{
                self.form.detalleProductos[keyx].cantidad =Number(self.form.detalleProductos[keyx].productox.cantidad_disponible);
                alertify.warning("Se ha agregado la cantidad maxima disponible de este articulo",5);
              }
            }

            self.detalleForm.productox=null;
            self.detalleForm.cantidad=0;
            self.detalleForm.precio_sugerido=0;
            self.detalleForm.subtotal=0;
            self.detalleForm.total=0;
            self.detalleForm.total_sin_iva = 0;
            this.$refs.producto.$el.focus()


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

      pagoCompleto(IdMoneda) {
        var self = this;

        if(Number(self.form.total_final_cordobas.toFixed(4))>0){
        self.form.detallePago = [];
  /*
        let monto =0,monto_me=0;
        if(IdMoneda === 1){
          monto=Number(self.form.total_final_cordobas.toFixed(4));
          monto_me=Number((self.form.total_final_cordobas/self.form.t_cambio).toFixed(4));
        }else{
          monto=Number(self.form.total_final_cordobas.toFixed(4));
          monto_me=Number((self.form.total_final_cordobas/self.form.t_cambio).toFixed(4));
        }*/

              self.form.detallePago.push({
                via_pagox: self.vias_pago[1],
                moneda_x: self.monedas[Number(IdMoneda)],
                monto: Number(self.form.total_final_cordobas.toFixed(4)),
                monto_me: Number((self.form.total_final_cordobas/self.form.t_cambio).toFixed(4)),
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
              monto_me= Number((self.detalleFormPago.monto/self.form.t_cambio).toFixed(4));

            }else if(self.detalleFormPago.moneda_x.id_moneda === 3){
              monto_me= Number(self.detalleFormPago.monto);
              monto_mn= Number((self.detalleFormPago.monto*self.form.t_cambio).toFixed(4));
            }

            if(i === 0){
              self.form.detallePago.push({
                  via_pagox: self.detalleFormPago.via_pagox,
                  moneda_x: self.detalleFormPago.moneda_x,
                  monto: Number(monto_mn.toFixed(4)),
                  monto_me: Number(monto_me.toFixed(4)),
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
                monto_me= roundNumber.round(Number((self.detalleFormPago.monto/self.form.t_cambio)),4);

                self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto + self.detalleFormPago.monto).toFixed(4));
                self.form.detallePago[keyx].monto_me = Number((self.form.detallePago[keyx].monto / self.form.t_cambio).toFixed(4));

              }else if(self.detalleFormPago.moneda_x.id_moneda === 3){
                self.form.detallePago[keyx].monto_me = Number((self.form.detallePago[keyx].monto_me + self.detalleFormPago.monto).toFixed(4));
                self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto_me * self.form.t_cambio).toFixed(4));
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



      registrar() {
        var self = this;
        self.btnAction = "Registrando, espere....";
        if(self.form.total_final > 0 && self.form.pago_pendiente > 0 && self.form.id_tipo === 1){
          alertify.warning("Las facturas de contado deben ser pagadas en su totalidad",5);
          self.errorMessages.serie = Array('Error serie');
          self.btnAction = "Facturar";
        }/*else if(self.form.total_final > 0 && self.form.pago_pendiente > 0 && self.form.id_tipo === 1){

        }*/
        else{
          self.$swal.fire({
            title: 'Esta seguro de completar la factura?',
            text: "Detalles de la factura: ",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
              factura.registrar(
                      self.form,
                      data => {
                        this.$swal.fire(
                                'Factura Registrada!',
                                'La Factura fue registrada correctamente',
                                'success'
                        )
                        this.$router.push({
                          name: "facturas"
                        });
                      },
                      err => {
                        self.errorMessages = err;
                        alertify.warning("Por favor revise los datos faltantes",5);
                        self.btnAction = "Facturar";
                      }
              );
            }else{
              self.btnAction = "Facturar";
            }
          })
        }
      },

      registrarCliente() {
        var self = this
        cliente.registrarBasico(self.formCliente, data => {
          alertify.success("Cliente registrado exitosamente", 5);
          //console.log(data);
          self.form.factura_cliente = data;
          self.form.tipo_identificacion =  self.form.factura_cliente.tipo_persona;
          if(self.form.factura_cliente.tipo_persona === 1){
            self.form.identificacion = self.form.factura_cliente.numero_cedula;
          }else{
            self.form.identificacion = self.form.factura_cliente.numero_ruc;
          }

          self.$refs.modal.close();

        }, err => {
          self.errorMessages = err
        })
      },

      seleccionarTipo(){
        var self = this;
        if(self.form.id_tipo===1){
          self.form.dias_credito=0;
        }else{
          self.form.dias_credito=0;
          self.form.dias_credito = self.plazo_maximo_credito;
          self.obtenerTCParalela();
        }
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
</style>




