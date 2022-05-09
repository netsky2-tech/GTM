<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Facturar productos para exportación</div>
            <div class="box-description">Formulario para facturar productos usados</div>
          </div>

          <div class="alert alert-success">
            <span><strong>Datos del Cliente</strong></span>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label> Cliente</label>
                <div class="form-group">
                  <typeahead :initial="form.factura_cliente" :params="{es_deudor: false}" :trim="80" :url="clientesBusquedaURL" @input="seleccionarCliente" style="width: 100%;"></typeahead>
                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.factura_cliente" v-text="message"></li>
                </ul>
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

            <div class="col-sm-3">
              <div class="form-group">
                <label > Identificación</label>
                <input class="form-control" placeholder="Número Identificación" v-model="form.identificacion">
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.identificacion" v-text="message"></li>
                </ul>
              </div>
            </div>

              <div class="col-sm-3">
                  <div class="form-group">
                      <label > Número Contrato / O.C.</label>
                      <input class="form-control" placeholder="Número contrato / O.C." v-model="form.contrato_oc">
                      <ul class="error-messages">
                          <li :key="message" v-for="message in errorMessages.contrato_oc" v-text="message"></li>
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

                  <multiselect :allow-empty="false" :options="sucursales"
                                 :searchable="true"
                                 :show-labels="false"
                                 deselect-label="No se puede eliminar este valor"
                                 label="descripcion"
                                 placeholder="Selecciona una sucursal"
                                 track-by="id_sucursal"
                                 v-model="form.factura_sucursal"
                                 v-on:input="seleccionarSucursal"
                    ></multiselect>


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
                        v-on:input="seleccionarBodega"
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

            <div class="col-sm-4">
              <div class="form-group">
                <label > Vendedor</label>
               <!-- <div class="form-group">
                  <typeahead :initial="form.factura_vendedor" :trim="80" :url="vendedoresBusquedaURL" @input="seleccionarVendedor" style="width: 100%;"></typeahead>

                </div>-->
                <v-select
                        label="nombre_completo"
                        v-model="form.factura_vendedor"
                        :options="vendedores"
                        :disabled="true"
                ></v-select>
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
                <input @keydown.enter="cambiarFocoCantidad" @change="detalleForm.cantidad = Math.max(Math.min(Math.round(detalleForm.cantidad), (!isNaN(detalleForm.productox.cantidad_disponible))?detalleForm.productox.cantidad_disponible:0 ), 1)" class="form-control" ref="cantidad" type="number" min="0" v-model.number="detalleForm.cantidad">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.cantidadx"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label for>Peso Unitario KG </label>
                <input  class="form-control" v-model.number="detalleForm.peso_unitario" @change="detalleForm.peso_unitario =Math.max(Math.min(Number((detalleForm.peso_unitario).toFixed(2)),100), 1)" type="number" min="0.01">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.peso_unitario"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label for>Precio Lista KG $ </label>
                <input  readonly class="form-control" v-model.number="form.precio_venta_usado">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.preciox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-2">
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
              <table class="table table-bordered table-hover table-responsive"  >
                <thead>
                <tr>
                  <th></th>
                  <th >CODIGO</th>
                  <th >DESCRIPCION</th>
                  <th >CANTIDAD</th>
                  <th >PESO UNIT. KG </th>
                  <th >PESO TOTAL KG</th>
                  <th >IMPORTE US$</th>
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
                      <input class="form-control" disabled v-model="item.productox.codigo_sistema">
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
                    <td style="width: 5%">
                      <input  @change="item.cantidad = Math.max(Math.min(Math.round(item.cantidad), item.productox.cantidad_disponible), 1)" class="form-control" type="number" min="1" v-model.number="item.cantidad">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.cantidad`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>
                    <td style="width: 10%">
                      <input class="form-control"  @change="item.peso_unitario =Math.max(Math.min(Number((item.peso_unitario).toFixed(2)),100), 1)" type="number" min="0.01" v-model.number="item.peso_unitario">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.peso_unitario`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td style="width: 8%">
                      <strong>{{calcular_montos(item)| formatMoney(2)}}</strong>
                    </td>


                    <td style="width: 8%">
                      <strong>$ {{item.total| formatMoney(2)}}</strong>
                    </td>



                  </tr>
                  <tr></tr>
                </template>
                </tbody>
                <tfoot>
                <tr>
                  <td colspan="2"></td>
                  <td class="item-footer"> Total Unidades</td>
                  <td  class="item-footer">
                    <strong>{{total_cantidad}}</strong>
                  </td>
                  <td> <strong></strong></td>
                  <td>Total</td>
                  <td> <strong>$ {{gran_total_cordobas | formatMoney(2)}}</strong></td>
                </tr>

                <tr>
                  <td colspan="5"></td>
                  <td>Equivalente Córdobas</td>
                  <td> <strong>C$ {{gran_total | formatMoney(2)}}</strong></td>
                </tr>

                </tfoot>
              </table>
            </div>
          </div>

            <br>
            <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for>Cantidad Polines</label>
                            <input class="form-control" type="number" min="0" v-model.number="form.cantidad_tarimas">
                            <ul class="error-messages">
                                <li
                                        :key="message"
                                        v-for="message in errorMessages.cantidad_tarimas"
                                        v-text="message"
                                ></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for>Peso Bruto</label>
                            <input class="form-control" type="number" min="0" v-model.number="form.peso_bruto_total">
                            <ul class="error-messages">
                                <li
                                        :key="message"
                                        v-for="message in errorMessages.peso_bruto_total"
                                        v-text="message"
                                ></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for>Peso Neto</label>
                            <input disabled class="form-control" type="number" min="0" v-model.number="form.peso_neto_total">
                            <ul class="error-messages">
                                <li
                                        :key="message"
                                        v-for="message in errorMessages.peso_neto_total"
                                        v-text="message"
                                ></li>
                            </ul>
                        </div>
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


                <!--  <div class="col-sm-6">
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
                  </div>-->



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
                                                  v-for="message in errorMessages[`detalleProductos.${index}.monto`]"
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
                                                  v-for="message in errorMessages[`detalleProductos.${index}.monto`]"
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

                <p> <strong>$ {{total_deuda | formatMoney(2)}}</strong></p>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.mt_deuda"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <label >Diferencia</label>
                <p><strong>$ {{total_vuelto | formatMoney(2)}}</strong></p>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.pago_vuelto"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>
            </div>

                <div class="row">
              <div class="col-sm-6">
                  <div class="form-group">
                      <label > Diferencia Córdobas</label>

                      <p> <strong>C$ {{form.pago_pendiente_mn | formatMoney(2)}}</strong></p>
                      <ul class="error-messages">
                          <li
                                  :key="message"
                                  v-for="message in errorMessages.pago_pendiente"
                                  v-text="message"
                          ></li>
                      </ul>
                  </div>
              </div>

              <div class="col-sm-6">
                  <div class="form-group">
                      <label >Vuelto Córdobas</label>
                      <p><strong>C$ {{form.pago_vuelto_mn | formatMoney(2)}}</strong></p>
                      <ul class="error-messages">
                          <li
                                  :key="message"
                                  v-for="message in errorMessages.pago_vuelto"
                                  v-text="message"
                          ></li>
                      </ul>
                  </div>
              </div>
            </div>

          </div>
        </div>

           <div class="content-box-footer text-right">
            <router-link tag="button" :to="{ name: 'listado-factura-exportacion' }">
              <button type="button" class="btn btn-default">Cancelar</button>
            </router-link>
            <button :disabled="btnAction !== 'Facturar'"
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
  import factura from "../../api/facturas_exportacion";
  import bodega from "../../api/bodegas";

  import es from 'vuejs-datepicker/dist/locale/translations/es'

  import { SweetModal } from 'sweet-modal-vue'
  import cliente from '../../api/clientes'
  import tc from '../../api/tasas-cambio'
  import loadingImage from '../../assets/images/block50.gif'
  import roundNumber from '../../assets/custom-scripts/Round'
  import numberasstring from "../../assets/custom-scripts/NumberAsString";

  export default {
    components: {
      SweetModal
    },
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
        sucursales: [],
        productosORG: [],

        departamentos:[],
        municipios:[],
        zonas:[],
        vendedores:[],


        vias_pago:[],
        precio_venta_usado:0,
        monedas:[],
          bancos:[],
        detalleForm: {
          productox: '',
         peso_unitario:1,
          cantidad: 1,
          precio_sugerido: 0,
          precio_sugerido_me: 0,
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
            contrato_oc: "",
          identificacion: "",
          factura_cliente: {},
          id_tipo_cliente: 1,
          dias_credito :0,
          nombre_razon: "",
          factura_vendedor: "",
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

            monto_letras_cordobas:'',
            monto_letras_dolares:'',
          pago_vuelto:0,
          pago_pendiente:0,

          pago_vuelto_mn:0,
          pago_pendiente_mn:0,
          cantidad_tarimas:0,
          peso_neto_total:0,
          peso_bruto_total:0,
          observacion: "",
          mt_subtotal:0,
          mt_subtotal_sin_iva:0,
          aplicaIR:false,
          aplicaIMI:false,
          aplicaIVA:true,
          total_final_cordobas:0,
          total_final:0,

          total_unidades_sin_bonificacion:0,
          total_unidades_con_bonificacion:0,

          detalleProductos: [],
          detallePago: [],

        },
        btnAction: "Facturar",

        errorMessages: []
      }

    },
    computed: {

        total_cantidad() {

            return this.form.detalleProductos.reduce((carry, item) => {
                return (carry + Number(item.cantidad))
            }, 0)
        },


        gran_total_cordobas() {
            this.form.total_final = this.form.detalleProductos.reduce((carry, item) => {
                return (carry + Number(roundNumber.round(Number(((item.total)).toFixed(2)),2)))
            }, 0)

            this.form.peso_neto_total =  this.form.detalleProductos.reduce((carry, item) => {
                return (carry + Number(item.peso_total))
            }, 0)

            if(!isNaN(this.form.total_final)){
                return this.form.total_final;
            }
            else return 0;
        },

        gran_total() {
            this.form.total_final_cordobas = roundNumber.decimalAdjust('ceil',Number(this.form.total_final * this.form.t_cambio),-1);

            if(!isNaN(this.form.total_final_cordobas)){
                return this.form.total_final_cordobas;
            }
            else return 0;
        },


        total_deuda() {

            /*let total_pagos = this.form.detallePago.reduce((carry, item) => {
                return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto_me : Number((item.monto/this.form.t_cambio).toFixed(2))));
            }, 0);*/

            let total_pagos_cordobas = 0;

            if(this.form.detallePago.length){
                total_pagos_cordobas = this.form.detallePago.reduce((carry, item) => {
                    return (carry + Number(item.moneda_x.id_moneda === 1 ? item.monto : Number((item.monto_me*this.form.t_cambio).toFixed(2))));
                }, 0);
            }

            /*console.log('Total pago C$: '+total_pagos_cordobas);
            console.log('Total factura C$: '+ this.form.total_final_cordobas);
            console.log('Dif C$: '+ this.form.total_final_cordobas- total_pagos_cordobas);*/

            if(((Number((this.form.total_final_cordobas).toFixed(2)) - Number((total_pagos_cordobas).toFixed(2))).toFixed(2))<0.005){
                this.form.pago_pendiente = 0;
                this.form.pago_pendiente_mn = 0;
            }else{
                this.form.pago_pendiente = roundNumber.decimalAdjust('ceil',Number(this.form.total_final)-Number(total_pagos_cordobas/this.form.t_cambio).toFixed(2),-1);
                this.form.pago_pendiente_mn = roundNumber.decimalAdjust('ceil',Number(this.form.pago_pendiente*this.form.t_cambio),-1);

                //this.form.pago_pendiente_mn = Number((Number((this.form.total_final_cordobas).toFixed(2)) - Number((total_pagos_cordobas).toFixed(2))).toFixed(2));
                //this.form.pago_pendiente = roundNumber.decimalAdjust('ceil',Number(this.form.pago_pendiente_mn/this.form.t_cambio),-1);
            }
            //
            /*let total_pagos_cordobas = this.form.detallePago.reduce((carry, item) => {
              return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto : Number((item.monto_me*this.form.t_cambio).toFixed(2))));
            }, 0);*/

            if(!isNaN(this.form.pago_pendiente)){
                //Number((Number((this.form.total_final*this.form.t_cambio).toFixed(2)) - total_pagos_cordobas).toFixed(2));
                return this.form.pago_pendiente;
            }
            else return 0;
        },

        total_vuelto() {

            /* let total_pagos = this.form.detallePago.reduce((carry, item) => {
                 return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto_me : Number(item.monto/this.form.t_cambio.toFixed(2))));
             }, 0);*/

            let total_pagos = 0;

            if(this.form.detallePago.length){
                total_pagos = this.form.detallePago.reduce((carry, item) => {
                    return (carry + Number(item.moneda_x.id_moneda === 1 ? item.monto : Number((item.monto_me*this.form.t_cambio).toFixed(2))));
                }, 0);
            }


            if(((Number((this.form.total_final_cordobas).toFixed(2)) - Number((total_pagos).toFixed(2))).toFixed(2))>0){///revision
                this.form.pago_vuelto = 0;
                this.form.pago_vuelto_mn= 0;
            }else{
                this.form.pago_vuelto_mn =  roundNumber.round(Number((Number((total_pagos).toFixed(2)) - Number((this.form.total_final_cordobas)).toFixed(2))),2);
                this.form.pago_vuelto = roundNumber.round(Number((this.form.pago_vuelto_mn/this.form.t_cambio).toFixed(2)),2);
            }

            //console.log('Master C$: '+((Number((this.form.total_final).toFixed(2)) - Number((total_pagos).toFixed(2))).toFixed(2)));


            /*let total_pagos_cordobas = this.form.detallePago.reduce((carry, item) => {
              return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto : Number((item.monto_me*this.form.t_cambio).toFixed(2))));
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
          itemX.monto_me = Number((itemX.monto/this.form.t_cambio).toFixed(2));
        }

        if(itemX.moneda_x.id_moneda===3 && itemX.monto_me > 0){
          itemX.monto = Number((itemX.monto_me*this.form.t_cambio).toFixed(2));
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
        self.form.factura_vendedor= trabajadorP.vendedor_cliente;
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
      seleccionarSucursal() {

        var self = this;
        self.bodegas = [];
        self.form.factura_bodega = [];

        self.form.serie = self.form.factura_sucursal.serie;
        if(self.form.factura_sucursal.sucursal_bodega_usado.length){
          self.bodegas = self.form.factura_sucursal.sucursal_bodega_usado;
          self.form.factura_bodega = self.bodegas[0];

          self.loading = true;
          self.form.detalleProductos = [];
          self.form.detallePago = [];
          self.detalleForm.productox ='';


          bodega.buscarProductosBodega({
            id_bodega: self.form.factura_bodega.id_bodega
          }, data => {
            if(data !== null){
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
        self.detalleForm.precio_sugerido = roundNumber.round(Number((self.detalleForm.productox.precio_sugerido*self.form.tasa_paralela)),2);
        self.detalleForm.precio_sugerido_me = Number(self.detalleForm.productox.precio_sugerido);

        if(self.detalleForm.productox.tipo_producto===2){
          self.detalleForm.afectacionx = self.afectaciones[0];
        }

        self.$refs.cantidad.focus();
        //self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
        }
      },
      calcularAjuste(itemX) {
        itemX.p_ajuste= Number(itemX.afectacionx.valor);
        if(itemX.p_ajuste>0){
          itemX.p_descuento = 0;
        }
      },

      calcular_montos(itemX){

        itemX.peso_total= Number(((Number(itemX.cantidad)* Number(itemX.peso_unitario))).toFixed(2));

        itemX.total= Number(((Number(this.form.precio_venta_usado)* Number(itemX.cantidad)* Number(itemX.peso_unitario))).toFixed(2));

        if(!isNaN(itemX.peso_total)){
          return itemX.peso_total;
        }
        else return 0;
      },

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

        self.form.detalleProductos.forEach((productox, key) => {
          productox.precio_lista = Number((productox.precio_lista_me*self.form.tasa_paralela).toFixed(2));
          productox.precio = Number((productox.precio_lista_me*self.form.tasa_paralela).toFixed(2));
       // console.log(productox.precio_lista);
        });



      }else{
        alertify.warning("No se encuentra tasa de cambio para esta fecha.",5);
        self.form.t_cambio = 0;
        self.form.f_vencimiento = self.form.f_factura;
        self.form.detalleProductos = [];
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

      /*obtenerTC(){
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
      },*/


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
                  self.monedas = data.monedas;
                  self.sucursales = data.sucursales;


                  //self.form.factura_bodega=self.bodegas[0];
                  self.productos = [];
                    self.form.t_cambio = Number(data.t_cambio.tasa);
                    self.form.tasa_paralela = Number(data.t_cambio.tasa_paralela);
                      self.vendedores = data.vendedores;

                  self.form.precio_venta_usado = Number(data.precio_venta_usado);
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
                if((self.detalleForm.productox.id_producto===productox.productox.id_producto)){
                  i++;
                  keyx = key;
                }
              });
            }
            if(i === 0){
              self.form.detalleProductos.push({
                productox: self.detalleForm.productox,
                cantidad: Number(self.detalleForm.cantidad),
                precio_costo:  Number(self.detalleForm.productox.costo_promedio),
                precio_lista:  Number(self.form.precio_venta_usado),
                precio_lista_me:  Number(self.precio_venta_usado),
                precio:  Number(self.precio_venta_usado),
                peso_unitario:  Number(self.detalleForm.peso_unitario),
                p_descuento:  0,
                mt_descuento:  0,
                p_impuesto:0,
                mt_impuesto:  0,
                subtotal: 0,
                total: 0,
                total_sin_iva:0,
                peso_total:0,
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
            self.detalleForm.peso_unitario=0;
            self.detalleForm.subtotal=0;
            self.detalleForm.total=0;
            self.detalleForm.total_sin_iva = 0;
            //this.$refs.producto.$el.focus()

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

        if(Number(self.form.total_final.toFixed(2))>0){
        self.form.detallePago = [];
  /*
        let monto =0,monto_me=0;
        if(IdMoneda === 1){
          monto=Number(self.form.total_final.toFixed(2));
          monto_me=Number((self.form.total_final/self.form.t_cambio).toFixed(2));
        }else{
          monto=Number(self.form.total_final.toFixed(2));
          monto_me=Number((self.form.total_final/self.form.t_cambio).toFixed(2));
        }*/

              self.form.detallePago.push({
                via_pagox: self.vias_pago[1],
                moneda_x: self.monedas[Number(IdMoneda)],
                monto: Number(self.form.total_final.toFixed(2)),
                monto_me: Number((self.form.total_final/self.form.t_cambio).toFixed(2)),
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

        monto_letras(montox,plural, singular){
          let monto_letras = '';
            if(montox >0){
                monto_letras = numberasstring.numberasstring(montox,singular,plural,true);
            }else{
                monto_letras ='SELECCIONE UN MONTO MAYOR QUE CERO';
            }
            return monto_letras;
        },

     procesar_factura(){
        var self = this;
        self.form.monto_letras_cordobas = '';
        self.form.monto_letras_dolares = '';

         self.form.monto_letras_cordobas = self.monto_letras(self.form.total_final_cordobas,'CORDOBA','CORDOBAS');
         self.form.monto_letras_dolares  = self.monto_letras(self.form.total_final,'DOLAR','DOLARES');

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
                     ).then((result2)=> {
                       if (result2.value) {
                         this.$router.push({
                           name: "listado-factura-exportacion"
                         });
                       }
                     })
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
     },

      registrar() {
        var self = this;
        self.btnAction = "Registrando, espere....";

        /*facturas de contado*/
        if(self.form.id_tipo === 1){

          if(self.form.pago_vuelto_mn  >= 0 /*&& self.form.total_final > 0*/ && self.form.pago_pendiente_mn === 0){
            this.procesar_factura();

          }else{
            alertify.warning("Las facturas de contado deben ser pagadas en su totalidad",5);
            //self.errorMessages.serie = Array('Error serie');
            self.btnAction = "Facturar";

          }

        }


        /*facturas de credito*/
        if(self.form.id_tipo === 2){

          if(self.form.pago_vuelto_mn  === 0 && self.form.total_final > 0 && self.form.pago_pendiente_mn > 1){
          if(self.form.factura_cliente){
            if(self.form.pago_pendiente_mn <= Number(self.form.factura_cliente.monto_credito_disponible)){
              self.procesar_factura();
            }else{
              alertify.warning("El monto máximo actual de crédito de este cliente es C$ "+Number(self.form.factura_cliente.monto_credito_disponible).toFixed(2)
                      +" , el monto de ésta factura supera ese monto",5);
              self.btnAction = "Facturar";
            }
          }else{
            alertify.warning("Debe seleccionar un cliente",5);
            self.btnAction = "Facturar";
          }
          }else{
            alertify.warning("Las facturas de crédito deben tener saldo a pagar",5);
            //self.errorMessages.serie = Array('Error serie');
            self.btnAction = "Facturar";

          }

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
</style>




