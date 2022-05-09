<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Facturar Baterías por ajuste</div>
            <div class="box-description">Formulario para facturar productos por ajuste</div>
          </div>

          <div class="alert alert-success">
            <span><strong>Datos del Cliente</strong></span>
          </div>
          <div class="row">
            <div class="col-sm-5">
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
            <span><strong>Datos de la batería original</strong></span>
          </div>

          <div class="row">

            <div class="col-sm-2">
              <div class="form-group">
                <label > Tipo Producto</label>
                <select @change="cambiarTipoProducto" class="form-control" v-model.number="form.tipo_producto">
                  <option  value="1">Batería Automotriz</option>
                  <option  value="2">Motobatería</option>
                </select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.tipo_producto" v-text="message"></li>
                </ul>
              </div>
            </div>

             <template v-if="form.tipo_producto===1">
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
                <multiselect :disabled="true" v-model="detalleForm.productox" :options="productos_todos"
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

            <div class="col-sm-2">
              <div class="form-group">
                <label for>Fecha Activación</label>
                <input class="form-control" type="text" placeholder="MM/YY" disabled
                       v-mask="'##/##'"
                       ref="fecha_activacion" v-model="detalleForm.fecha_activacion">

                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.fecha_activacion"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>
            </template>

            <template v-if="form.tipo_producto===2">
              <div class="col-sm-3">
                <div class="form-group">
                  <label for>Código Garantía Bateria</label>
                  <input class="form-control" ref="bateria"  v-model="detalleForm.bateria_busqueda">
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
                  <multiselect v-model="detalleForm.productox" :options="productos_motobaterias"
                               deselect-label="No se puede eliminar este valor"
                               track-by="id_producto"
                               label="text"
                               placeholder="Selecciona un producto"
                               :searchable="true"
                               :show-labels="false"
                               :allow-empty="false"
                               ref="bateria"
                               v-on:input="cargar_detalles_producto_manual()"
                  ></multiselect>
                </div>
              </div>
            </template>

            <div class="col-sm-2">
              <div class="form-group">
                <label for>Fecha Venta</label>
                <datepicker :format="format" :language="es" :value="new Date()" v-model="fechax2" @selected="onDateSelect"></datepicker>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.f_necesidad" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label for>Fecha Reclamo</label>
                <datepicker :format="format" :language="es" :value="new Date()" v-model="fechax3" @selected="onDateSelect2"></datepicker>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.fecha_reclamo" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label > Tipo Servicio</label>
                <select @change="obtenerPorcentajeAjuste" class="form-control" v-model.number="detalleForm.tipo_servicio">
                  <option  value="1">Servicio Particular</option>
                  <option  value="2">Servicio Publico</option>
                  <option  value="3">Servicio Comercial </option>
                  <option  value="4">Marina, Golf y Solar </option>
                  <option  value="5">Heavy Duty </option>
                  <option  value="6">Otros Electricos </option>
                  <option  value="7">Agricolas </option>
                  <option  value="8">Estacionarios </option>
                </select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.tipo_servicio" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label for>Precio Lista C$ </label>
                <input  readonly class="form-control" v-model.number="detalleForm.precio_sugerido_mn_org">
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
                <label for>% ajuste asumido por el cliente </label>
                <input  readonly class="form-control" v-model.number="detalleForm.porcentaje_ajuste_cliente">
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
                <label for>% ajuste asumido por Lubnica </label>
                <input  readonly class="form-control" v-model.number="detalleForm.porcentaje_ajuste">
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
                <label for>Monto Ajuste C$ </label>
                <input  readonly class="form-control" v-model.number="detalleForm.monto_ajuste_real">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.preciox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Ingresar batería a la siguiente bodega:</label>
                <v-select
                        label="descripcion"
                        v-model="form.factura_bodega_ajuste"
                        :options="bodegas_ajustes"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.factura_bodega_ajuste" v-text="message"></li>
                </ul>
              </div>
            </div>

          </div>

          <br>
          <div class="alert alert-success">
            <span><strong>Datos de la batería nueva</strong></span>
          </div>
          <div class="row">

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Producto a Facturar</label>
                <multiselect v-model="detalleForm.productox_factura" :options="productos"
                             deselect-label="No se puede eliminar este valor"
                             track-by="id_producto"
                             label="text"
                             placeholder="Selecciona un producto"
                             :searchable="true"
                             :show-labels="false"
                             :allow-empty="false"
                             ref="bateria"
                             v-on:input="cargar_detalles_producto()"
                ></multiselect>

              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label for>Precio Lista C$ </label>
                <input  readonly class="form-control" v-model.number="detalleForm.precio_sugerido_mn">
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
                <label for>Precio Unitario C$ </label>
                <input  readonly class="form-control" v-model.number="detalleForm.precio_con_ajuste">
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
                <button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar Batería</button>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group form-rta91">
                <router-link :style="'margin-right: 10px;color: blue;'" tag="a" :to="{ name: 'registrar-bateria-externa'}" target="_blank">
                  <i class="pe-7s-note"></i> No encuentra registros de la batería? Regístrela aquí</router-link>
              </div>
            </div>
          </div>
          <br>


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
                  <th >Producto</th>
                  <th >Afectación</th>
                  <th >% Ajuste</th>
                  <th >Cantidad</th>
                  <!-- <th >U/M</th>-->
                  <th >P. Lista C$</th>
                  <th >Descuento %</th>
                  <th >Descuento C$</th>
                  <th >Ajuste C$</th>
                  <th >Precio Unit. C$</th>
                  <!--<th >Monto IVA U$</th>-->
                  <th >Valor C$</th>
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
                      <input class="form-control" disabled v-model="item.afectacionx.descripcion">

                      <!--<v-select
                              :disabled="true"
                              v-model="item.afectacionx"
                              label="descripcion"
                              :options="afectaciones"
                              v-on:input="calcularAjuste(item)"
                      ></v-select>-->
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
                      <input disabled  @change="item.cantidad = Math.max(Math.min(Math.round(item.cantidad), item.productox.cantidad_disponible), 1)" class="form-control" type="number" min="1" v-model.number="item.cantidad">
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
                      <input :disabled="item.p_ajuste>0" class="form-control" v-model.number="item.p_descuento" @change="item.p_descuento = Math.max(Math.min(Math.round(item.p_descuento), 60), 0)">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.p_descuento`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td style="width: 8%">
                      <strong>C$ {{calcular_montos(item)| formatMoney(2)}}</strong>
                    </td>

                    <td style="width: 8%"><strong>C$ {{item.mt_ajuste| formatMoney(2)}}</strong></td>


                    <td style="width: 8%">
                      <strong>C$ {{item.p_unitario| formatMoney(2)}}</strong>
                    </td>

                    <td style="width: 8%">
                      <strong>C$ {{item.total_sin_iva| formatMoney(2)}}</strong>
                    </td>



                  </tr>
                  <tr></tr>
                </template>
                </tbody>
                <tfoot>

                <tr>
                  <td colspan="9">
                    <ul class="error-messages">
                      <li
                              :key="message"
                              v-for="message in errorMessages.error_general"
                              v-text="message"
                      ></li>
                    </ul>
                  </td>
                  <td>Subtotal</td>
                  <td> <strong>C$ {{total_subt_sin_iva | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                  <td colspan="7"></td>
                  <td>No Doc. Exoneración</td>
                  <td> <input :disabled="form.aplicaIVA" class="form-control" v-model="form.doc_exoneracion"></td>
                  <td><label class="check-label"><input  v-model="form.aplicaIVA"
                                                        type="checkbox"> I.V.A.</label>
                    <ul class="error-messages">
                      <li
                              :key="message"
                              v-for="message in errorMessages.doc_exoneracion"
                              v-text="message"
                      ></li>
                    </ul>
                  </td>
                  <td> <strong>C$ {{total_impuesto | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                  <td colspan="7"></td>
                  <td>No. Documento:</td>
                  <td> <input :disabled="!form.aplicaIR" class="form-control" v-model="form.doc_exoneracion_ir"></td>
                  <td><label class="check-label"><input :disabled="!(form.id_tipo===1)" v-model="form.aplicaIR"
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
                  <td colspan="7"></td>
                  <td>No. Documento:</td>
                  <td> <input :disabled="!form.aplicaIMI" class="form-control" v-model="form.doc_exoneracion_imi"></td>
                  <td><label class="check-label"><input :disabled="!(form.id_tipo===1)" v-model="form.aplicaIMI"
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
                  <td colspan="3"></td>
                  <td class="item-footer"> Total Unidades</td>
                  <td  class="item-footer">
                    <strong>{{total_cantidad}}</strong>
                  </td>
                  <td colspan="2">Total Descuento | Ajuste</td>
                  <td> <strong>C$ {{total_descuento | formatMoney(2)}}</strong></td>
                  <td> <strong>C$ {{total_ajuste | formatMoney(2)}}</strong></td>
                  <td>Total</td>
                  <td> <strong>C$ {{gran_total_cordobas | formatMoney(2)}}</strong></td>
                </tr>

                <tr>
                  <td colspan="9"></td>
                  <td>Equivalente Dólares</td>
                  <td> <strong>$ {{gran_total | formatMoney(2)}}</strong></td>
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

                <p> <strong>C$ {{total_deuda | formatMoney(2)}}</strong></p>
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
                <p><strong>C$ {{total_vuelto | formatMoney(2)}}</strong></p>
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
                      <label > Diferencia Dólares</label>

                      <p> <strong>$ {{form.pago_pendiente | formatMoney(2)}}</strong></p>
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
                      <label >Vuelto Dólares</label>
                      <p><strong>$ {{form.pago_vuelto | formatMoney(2)}}</strong></p>
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
            <router-link tag="button" :to="{ name: 'facturas' }">
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
              <input class="form-control"  v-mask="'#############A'" placeholder="Número Cédula" v-model="formCliente.numero_cedula">
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
              <input class="form-control" v-mask="'A#############'" placeholder="Número RUC" v-model="formCliente.numero_ruc">
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

        <div class="col-sm-4">
          <div class="form-group">
            <label >Vendedor</label>
            <v-select
                    :options="vendedores"
                    label="nombre_completo"
                    v-model="formCliente.vendedor"
                    style="background: white"
            ></v-select>
            <ul class="error-messages">
              <li :key="message" v-for="message in errorMessages.vendedor" v-text="message"></li>
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
        <button :disabled="btnActionCliente !== 'Registrar Cliente'"
                @click="registrarCliente"
                class="btn btn-primary"
                type="button">{{ btnActionCliente }}</button>
      </div>

    </sweet-modal>

  </div>


</template>


<script type="text/ecmascript-6">
  import factura from "../../api/facturas";
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

        es: es,
        format: "dd-MM-yyyy",
        fechax2: new Date(),
        fechax3: new Date(),
        mascaraCodigo:'X############',
        codigoAutomatico:false,

        clientesBusquedaURL: "/ventas/clientes/buscar",
        vendedoresBusquedaURL: "/ventas/vendedores/buscar",

        sucursalesBusquedaURL: "/sucursales/buscar",
        //bodegasBusquedaURL: "/bodegas/buscar",
        //productosBodegaBusquedaURL: "/productos/buscar-bodega-venta",
        clienteCredito:false,
        plazo_maximo_credito:0,

        bodegas: [],
        bodegas_ajustes: [],

        productos: [],
        productos_todos: [],
        productos_motobaterias:[],
        sucursales:[],
        departamentos:[],
        municipios:[],
        zonas:[],
        vendedores:[],

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
          productox_factura: '',
          cantidad: 1,
          precio_sugerido: 0,
          precio_sugerido_me: 0,
          porcentaje_ajuste: 0,
          porcentaje_ajuste_cliente:0,
          precio:0,
          monto_ajuste_real:0,
          porcentaje_ajuste_real:0,
          precio_costo: 0,
          precio_lista: 0,
          precio_con_ajuste:0,
          fecha_venta: moment(new Date()).format("YYYY-MM-DD"),
          fecha_reclamo: moment(new Date()).format("YYYY-MM-DD"),
          codigo_garantia:'',
          fecha_activacion:'',
          id_bateria:'',
          tipo_servicio:1,
          subtotal: 0,
          total: 0,
          total_sin_iva: 0,
          precio_sugerido_mn_org:0,
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
          tipo_producto:1,
          no_documento: "",
          proforma_especifica:false,
          f_factura: moment(new Date()).format("YYYY-MM-DD"),
          f_vencimiento: moment(new Date()).format("YYYY-MM-DD"),
          serie: "",
          id_tipo : 1,
          //factura_moneda: {},
          factura_sucursal: {},
          factura_bodega: "",
          factura_bodega_ajuste: "",

          tipo_identificacion: 1,
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

          total_unidades_sin_bonificacion:0,
          total_unidades_con_bonificacion:0,

          detalleProductos: [],
          detallePago: [],

        },
        btnAction: "Facturar",
        btnActionCliente: "Registrar Cliente",
        registrandoCliente:false,
        errorMessages: []
      }

    },
    computed: {
      total_subt_sin_iva() {
        this.form.mt_subtotal_sin_iva = Number((this.form.detalleProductos.reduce((carry, item) => {
                  return(carry + Number(item.total_sin_iva));
                }
                , 0)).toFixed(2));
        this.form.mt_subtotal = Number((this.form.detalleProductos.reduce((carry, item) => {
                  return(carry + Number(item.subtotal));
                }
                , 0)).toFixed(2));
        return this.form.mt_subtotal_sin_iva.toFixed(2);
      },
      total_impuesto() {
        if(this.form.aplicaIVA){
          this.form.mt_impuesto = Number((this.form.detalleProductos.reduce((carry, item) => {
            return (carry + Number(item.mt_impuesto.toFixed(2)))
          }, 0)).toFixed(2));
        }else{
          this.form.mt_impuesto=0;
        }

        return this.form.mt_impuesto;
      },

      total_retencion() {
        if(this.form.aplicaIR && (Number(this.form.mt_subtotal_sin_iva) >= 1000)){
          this.form.mt_retencion = Number((this.form.mt_subtotal_sin_iva * 0.02).toFixed(2));
        }else{
          this.form.mt_retencion=0;
        }
        return this.form.mt_retencion;
      },

      total_retencion_imi() {
        if(this.form.aplicaIMI){
          this.form.mt_retencion_imi = Number((this.form.mt_subtotal_sin_iva * 0.01).toFixed(2));
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
          return (carry + Number(item.mt_descuento.toFixed(2)))
        }, 0)).toFixed(2));
        return this.form.mt_descuento;
      },


      total_cantidad() {

        this.form.total_unidades_sin_bonificacion =
                Number(this.form.detalleProductos.reduce((carry, item) => {
                  return (carry + ((item.afectacionx.id_afectacion !== 2) ? (Number(item.cantidad)) :0))
                }, 0))

        this.form.total_unidades_con_bonificacion =
                Number(this.form.detalleProductos.reduce((carry, item) => {
                  return (carry + ((item.afectacionx.id_afectacion === 2) ? (Number(item.cantidad)) :0))
                }, 0))

        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + Number(item.cantidad))
        }, 0)
      },

      gran_total_cordobas() {
        this.form.total_final_cordobas = roundNumber.round(Number(((this.form.mt_subtotal_sin_iva - this.form.mt_retencion - this.form.mt_retencion_imi + this.form.mt_impuesto)).toFixed(2)),2);
        //roundNumber.round(Number((Number(this.form.total_final)*this.form.t_cambio).toFixed(2)),2);

        if(!isNaN(this.form.total_final_cordobas)){
          return this.form.total_final_cordobas;


        }
        else return 0;
      },


      gran_total() {
        this.form.total_final = roundNumber.decimalAdjust('ceil',Number(this.form.total_final_cordobas / this.form.t_cambio),-1);

        if(!isNaN(this.form.total_final)){
          return this.form.total_final;
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
            this.form.pago_pendiente_mn = Number((Number((this.form.total_final_cordobas).toFixed(2)) - Number((total_pagos_cordobas).toFixed(2))).toFixed(2));
            this.form.pago_pendiente = roundNumber.decimalAdjust('ceil',Number(this.form.pago_pendiente_mn/this.form.t_cambio),-1);
          }

        /*let total_pagos_cordobas = this.form.detallePago.reduce((carry, item) => {
          return (carry + Number(item.moneda_x.id_moneda === 3 ? item.monto : Number((item.monto_me*this.form.t_cambio).toFixed(2))));
        }, 0);*/

        if(!isNaN(this.form.pago_pendiente_mn)){
         //Number((Number((this.form.total_final*this.form.t_cambio).toFixed(2)) - total_pagos_cordobas).toFixed(2));
          return this.form.pago_pendiente_mn;
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
      cargar_detalles_producto_manual() {
        //const productoP = e.target.value;
        var self = this;
        //self.detalleForm.productox = productoP;
        if(self.detalleForm.productox){
          self.detalleForm.cantidad=1;
          self.detalleForm.id_bateria =0;
          self.detalleForm.codigo_garantia=self.detalleForm.bateria_busqueda;
          self.detalleForm.precio_sugerido_mn_org = roundNumber.round(Number((self.detalleForm.productox.precio_sugerido*self.form.tasa_paralela*0.7)),2);
          self.obtenerPorcentajeAjuste();

        }
      },
      cargar_detalles_producto() {
        //const productoP = e.target.value;
        var self = this;
        //self.detalleForm.productox = productoP;
        if(self.detalleForm.productox_factura){
          self.detalleForm.cantidad=1;
          //self.detalleForm.precio_sugerido = roundNumber.round(Number((self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio)),2);
          //self.detalleForm.precio_sugerido_me = Number(self.detalleForm.productox_factura.precio_sugerido);

          self.detalleForm.precio_sugerido_mn = roundNumber.round(Number((self.detalleForm.productox_factura.precio_sugerido*self.form.tasa_paralela*0.7)),2);
          self.detalleForm.precio_sugerido = roundNumber.round(Number((self.detalleForm.precio_sugerido_mn)),2);
          self.detalleForm.precio_sugerido_me = Number(self.detalleForm.precio_sugerido);
          self.detalleForm.costo_promedio = Number(self.detalleForm.productox_factura.costo_promedio);
          self.obtenerPorcentajeAjuste();

        }
      },
      onDateSelect(date) {
        this.detalleForm.fecha_venta = moment(date).format("YYYY-MM-DD"); //
          this.obtenerPorcentajeAjuste();
      },
      onDateSelect2(date) {
        this.detalleForm.fecha_reclamo = moment(date).format("YYYY-MM-DD"); //
        this.obtenerPorcentajeAjuste();
      },

      cambiarTipoProducto(){
        this.detalleForm.productox =[];
      },
      buscarBateria() {
        var self = this;
        if(self.form.factura_bodega){
        self.loading = true;
        //self.$refs.precio_unitario.focus();
        bateria.buscarCodigo({
          codigo_bateria: self.detalleForm.bateria_busqueda,
          id_bodega: 0,
          reservada:false,
          estado: 7// vendidas?
        }, data => {
          if(data !== null){

            let keyx = -1;
            if(self.productos_todos){
              self.productos_todos.forEach((productox, key) => {
                //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
                if(data.id_producto===productox.id_producto){
                  keyx = key;
                }
              });
            }

            let keyx2 = -1;
            if(self.productos){
              self.productos.forEach((productox, key) => {
                //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
                if(data.id_producto===productox.id_producto){
                  keyx2 = key;
                }
              });
            }
            if(keyx2 > -1){
              self.detalleForm.productox_factura = self.productos[keyx2];
              self.detalleForm.cantidad=1;
              //self.detalleForm.precio_sugerido = roundNumber.round(Number((self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio*0.7)),2);
              //self.detalleForm.precio_sugerido_me = roundNumber.round(Number((self.detalleForm.productox_factura.precio_sugerido*0.7)),2);
                      //Number(self.detalleForm.productox_factura.precio_sugerido*0.7);

              self.detalleForm.precio_sugerido_mn = roundNumber.round(Number((self.detalleForm.productox_factura.precio_sugerido*self.form.tasa_paralela*0.7)),2);
              self.detalleForm.precio_sugerido = roundNumber.round(Number((self.detalleForm.precio_sugerido_mn)),2);
              self.detalleForm.precio_sugerido_me = Number(self.detalleForm.precio_sugerido);
              self.detalleForm.costo_promedio = Number(self.detalleForm.productox_factura.costo_promedio);
              //self.obtenerPorcentajeAjuste();
            }else{
              self.detalleForm.productox_factura=[];
              alertify.warning('No existen unidades del mismo producto, por favor seleccione manualmente el producto equivalente',10);
            }

            if(keyx > -1){
              self.detalleForm.productox = self.productos_todos[keyx];
              self.detalleForm.codigo_garantia = data.codigo_garantia;
              self.detalleForm.id_bateria = data.id_bateria;
              self.detalleForm.fecha_activacion = data.fecha_activacion;
              self.detalleForm.precio_sugerido_mn_org = roundNumber.round(Number((self.detalleForm.productox.precio_sugerido*self.form.tasa_paralela*0.7)),2);
              self.obtenerPorcentajeAjuste();
            }else{
              alertify.warning("No hay existencias disponibles de este modelo en la bodega seleccionada, intente con otra.",10);
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
        //self.bodegas_ajustes = [];
        self.form.factura_bodega = [];
        self.form.serie = self.form.factura_sucursal.serie;
        if(self.form.factura_sucursal.sucursal_bodega_ventas.length){
          self.bodegas = self.form.factura_sucursal.sucursal_bodega_ventas;
          //self.bodegas_ajustes = self.form.factura_sucursal.sucursal_bodega_ajustes;
          self.form.factura_bodega = self.bodegas[0];
          //self.form.factura_bodega_ajuste = self.bodegas_ajustes[0];

          self.loading = true;
          self.form.detalleProductos = [];
          self.form.detallePago = [];
          self.detalleForm.productox ='';


          bodega.buscarProductosBodega({
            id_bodega: self.form.factura_bodega.id_bodega
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
        self.detalleForm.fecha_activacion ='';

        bodega.buscarProductosBodega({
          id_bodega: self.form.factura_bodega.id_bodega
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


      calcular_montos(itemX){

        itemX.subtotal= Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(2));

        //itemX.mt_descuento= Number((Number(itemX.p_descuento/100)* Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(2))).toFixed(2));
          // itemx.mt_descuento =
        //itemX.p_ajuste= Number(itemX.afectacionx.valor);

        //itemX.mt_ajuste= Number((Number(itemX.p_ajuste/100)* Number(((Number(itemX.precio)* Number(itemX.cantidad))).toFixed(2))).toFixed(2));

        itemX.p_unitario = Number(((Number(itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste)/ Number(itemX.cantidad))).toFixed(2));

        /*console.log(itemX.p_impuesto);
        console.log(Number(itemX.p_impuesto/100));
        console.log(itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste);
        console.log(Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste)))));
        */
        /*let xy = Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste))));
        console.log(roundNumber.round(xy,2));*/

        itemX.mt_impuesto= roundNumber.round(Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste))).toFixed(2)),2);

        itemX.total_sin_iva = roundNumber.round(Number(itemX.p_unitario*itemX.cantidad),2);//roundNumber.round(Number((itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste)),2);

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


      obtenerPorcentajeAjuste(){
        var self = this;
        self.loading = true;
        bateria.obtenerPorcentajeAjuste({
          fecha_reclamo: self.detalleForm.fecha_reclamo,
          fecha_venta: self.detalleForm.fecha_venta,
          id_producto: self.detalleForm.productox.id_producto,
          tipo_servicio:  self.detalleForm.tipo_servicio,
        }, data => {
          if(data !== null){
              self.detalleForm.porcentaje_ajuste_cliente = data;
            self.detalleForm.porcentaje_ajuste =  100-Number(self.detalleForm.porcentaje_ajuste_cliente);

            self.detalleForm.precio = roundNumber.round(Number(Number(self.detalleForm.precio_sugerido_mn_org) - Number((((100-self.detalleForm.porcentaje_ajuste_cliente)/100)*self.detalleForm.precio_sugerido_mn_org).toFixed(2))),2);

            self.detalleForm.monto_ajuste_real=Number((self.detalleForm.precio_sugerido_mn_org-self.detalleForm.precio).toFixed(2));

            if(roundNumber.round(Number(Number(self.detalleForm.precio_sugerido_mn) - self.detalleForm.monto_ajuste_real),2)>0){
           self.detalleForm.precio_con_ajuste= roundNumber.round(Number(Number(self.detalleForm.precio_sugerido_mn) - self.detalleForm.monto_ajuste_real),2);

            }else{
              self.detalleForm.precio_con_ajuste=0;
            }
            //self.detalleForm.porcentaje_ajuste_real

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
        factura.nuevaFacturaAjuste({
                }, data => {
                  self.vias_pago = data.vias_pago;
                  self.afectaciones = data.afectaciones;
                  self.sucursales = data.sucursales;
                  self.detalleForm.afectacionx = self.afectaciones[0];
                  self.bodegas_ajustes = data.bodegas_ajustes;
                  self.form.factura_bodega_ajuste = self.bodegas_ajustes[0];
                  self.monedas = data.monedas;
                  self.bancos = data.bancos;
                  //self.form.factura_bodega=self.bodegas[0];
                  self.productos = [];
                  self.form.t_cambio = Number(data.t_cambio.tasa);
                  self.form.tasa_paralela = Number(data.t_cambio.tasa_paralela);
                  self.zonas = data.zonas;
                  self.vendedores = data.vendedores;
                  self.formCliente.zona = data.zonas[0];
                  self.departamentos = data.departamentos
                  self.formCliente.departamento = self.departamentos[9]
                  self.municipios = self.formCliente.departamento.municipios_departamento
                  self.formCliente.municipio= self.municipios[5];
                  self.productos_todos = [];
                  self.productos_todos = data.productos_todos;
                  self.productos_motobaterias = [];
                  self.productos_motobaterias = data.productos_motobaterias;
                  self.form.factura_sucursal = self.sucursales[0];
                  self.seleccionarSucursal();
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
        if(this.form.detalleProductos.length === 0){
        if(self.detalleForm.productox && self.detalleForm.afectacionx){
          if(self.detalleForm.cantidad>0){
            let i = 0;
            let keyx = 0;
            if(self.form.detalleProductos){
              self.form.detalleProductos.forEach((productox, key) => {
                if((self.detalleForm.productox_factura.id_producto===productox.productox.id_producto)
                        && (self.detalleForm.afectacionx.id_afectacion===productox.afectacionx.id_afectacion)){
                  i++;
                  keyx = key;
                }
              });
            }
            if(i === 0){
              let p_ajustex = 0;
              if(self.detalleForm.productox_factura.id_producto===self.detalleForm.productox.id_producto){
                p_ajustex=self.detalleForm.porcentaje_ajuste;
              }else{
                if(self.detalleForm.precio_con_ajuste>0){
                  p_ajustex=roundNumber.round(Number((1-(self.detalleForm.precio_con_ajuste/self.detalleForm.precio_sugerido_mn))*100),2);
                }else{
                  p_ajustex=100;
                }
              }

              if(Number(p_ajustex)>0){
              let mt_ajustex = Number(self.detalleForm.monto_ajuste_real);

              let precio_sin_descuento=roundNumber.round(self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio,2)-
                      roundNumber.round((self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio)-self.detalleForm.precio_sugerido,2);

              if(mt_ajustex>precio_sin_descuento) {
                  mt_ajustex=precio_sin_descuento;
              }

              if(Number(p_ajustex) === 100){
                self.detalleForm.afectacionx = self.afectaciones[1];
              }else{
                self.detalleForm.afectacionx = self.afectaciones[0];
              }

              if(self.form.tipo_producto===2){
                self.form.detalleProductos.push({
                  productox: self.detalleForm.productox_factura,
                  afectacionx: self.detalleForm.afectacionx,
                  cantidad: 1,
                  precio_costo:  Number(self.detalleForm.productox_factura.costo_promedio),
                  //precio_lista:  Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio).toFixed(2)),
                  //precio:  Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio).toFixed(2)),
                  precio_lista:  roundNumber.round(self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio,2),//Number(self.detalleForm.productox.precio_sugerido*self.form.t_cambio),
                  precio_lista_me:  Number(self.detalleForm.productox_factura.precio_sugerido),
                  precio:  roundNumber.round(self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio,2),
                  id_bateria:0,
                  p_descuento:  30,
                  mt_descuento:  roundNumber.round((self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio)-self.detalleForm.precio_sugerido,2),//Number(self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio*0.3),
                  p_impuesto:Number(self.detalleForm.productox_factura.tasa_impuesto),
                  mt_impuesto:  Number(roundNumber.round(self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio*0.15,2)),
                  subtotal: 0,
                  total: 0,
                  total_sin_iva:0,
                  p_ajuste:p_ajustex,
                  mt_ajuste: mt_ajustex,

                });
              }else{
              self.form.detalleProductos.push({
                productox: self.detalleForm.productox_factura,
                afectacionx: self.detalleForm.afectacionx,
                cantidad: 1,
                precio_costo:  Number(self.detalleForm.productox_factura.costo_promedio),
                //precio_lista:  Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio).toFixed(2)),
                //precio:  Number((self.detalleForm.productox.precio_sugerido*self.form.t_cambio).toFixed(2)),
                precio_lista:  roundNumber.round(self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio,2),//Number(self.detalleForm.productox.precio_sugerido*self.form.t_cambio),
                precio_lista_me:  Number(self.detalleForm.productox_factura.precio_sugerido),
                precio:  roundNumber.round(self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio,2),
                id_bateria:self.detalleForm.id_bateria,
                p_descuento:  30,
                mt_descuento:  roundNumber.round((self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio)-self.detalleForm.precio_sugerido,2),//Number(self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio*0.3),
                p_impuesto:Number(self.detalleForm.productox_factura.tasa_impuesto),
                mt_impuesto:  Number(roundNumber.round(self.detalleForm.productox_factura.precio_sugerido*self.form.t_cambio*0.15,2)),
                subtotal: 0,
                total: 0,
                total_sin_iva:0,
                p_ajuste:p_ajustex,
                mt_ajuste: mt_ajustex,

              });
              }
              alertify.success("Artículo agregado!",5);
              }else{
                alertify.warning("El producto no aplica a ajuste por garantía, se debe facturar en formulario correspondiente",5);
              }
            }else{
              alertify.warning("Solo se permite facturar un batería por ajuste a la vez",5);
            }
          }else{
            alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero",5);
          }
        }else{
          alertify.warning("Debe seleccionar un producto",5);
        }
        }else{
          alertify.warning("Solo se permite agregar un batería por cada factura de ajuste",5);
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
           self.form.detalleForm = self.detalleForm;
           factura.registrarFacturaAjuste(
                   self.form,
                   data => {
                     this.$swal.fire(
                             'Factura Registrada!',
                             'La Factura por ajuste fue registrada correctamente',
                             'success'
                     ).then((result2)=> {
                       if (result2.value) {
                         this.$router.push({
                           name: "facturas"
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

          if(self.form.pago_vuelto_mn  >= 0 /*&& self.form.total_final_cordobas > 0*/ && self.form.pago_pendiente_mn === 0){
            this.procesar_factura();

          }else{
            alertify.warning("Las facturas de contado deben ser pagadas en su totalidad",5);
            //self.errorMessages.serie = Array('Error serie');
            self.btnAction = "Facturar";

          }

        }


        /*facturas de credito*/
        if(self.form.id_tipo === 2){

          if(self.form.pago_vuelto_mn  === 0 && self.form.total_final_cordobas > 0 && self.form.pago_pendiente_mn > 1){
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
        self.btnActionCliente = "Registrando, espere....";

        if(!self.registrandoCliente)
          self.registrandoCliente = true;
        cliente.registrarBasico(self.formCliente, data => {
          alertify.success("Cliente registrado exitosamente", 5);
          //console.log(data);
          self.form.factura_cliente = data;
          self.form.factura_vendedor=self.formCliente.vendedor;
          self.form.tipo_identificacion =  self.form.factura_cliente.tipo_persona;
          if(self.form.factura_cliente.tipo_persona === 1){
            self.form.identificacion = self.form.factura_cliente.numero_cedula;
          }else{
            self.form.identificacion = self.form.factura_cliente.numero_ruc;
          }
          self.btnActionCliente = "Registrar Cliente";
          //self.form.factura_vendedor
          self.registrandoCliente=false;

          self.formCliente.tipo_persona=1;
          self.formCliente.nombre_comercial='';
          self.formCliente.vendedor='';
          self.formCliente.numero_ruc= '';
          self.formCliente.numero_cedula='';
          self.formCliente.direccion= '';
          self.formCliente.id_tipo_cliente=1;
          self.formCliente.telefono='';
          self.formCliente.correo='';
          self.formCliente.municipio='';
          self.formCliente.giro_negocio='';
          self.formCliente.zona ='';
          self.formCliente.id_impuesto =1;
          self.formCliente.tipo_contribuyente=1;
          self.formCliente.retencion_ir=true;
          self.formCliente.retencion_imi=true;
          self.formCliente.clasificacion=1;
          self.formCliente.permite_credito =false;
          self.formCliente.plazo_credito=0;
          self.formCliente.limite_credito=0;
          self.formCliente.porcentaje_descuento=0;
          self.formCliente.observaciones='';
          self.formCliente.permite_consignacion= false;
          self.formCliente.tramite_cheque=15;

          self.$refs.modal.close();

        }, err => {
          self.errorMessages = err
          self.registrandoCliente=false;
          self.btnActionCliente = "Registrar Cliente";
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
  .form-rta91{
    margin-top:33px;
  }
</style>




