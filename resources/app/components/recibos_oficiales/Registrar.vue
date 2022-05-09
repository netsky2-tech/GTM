<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Recibos</div>
                        <div class="box-description">Formulario para registrar recibos oficiales de caja</div>
                    </div>

                    <div class="alert alert-success">
                        <span><strong>Datos del Recibo</strong></span>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label > Cliente</label>
                                <div class="form-group">
                                    <typeahead :initial="form.recibo_cliente" :trim="80" :params="{es_deudor: false}" :url="clientesBusquedaURL"
                                               @input="seleccionarCliente" style="width: 100%;"></typeahead>
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.recibo_cliente"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-12">
                            <div class="form-group">
                                <label > Recibo de:</label>
                                <input class="form-control" placeholder="Nombre persona" v-model="form.nombre_persona">
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.nombre_persona"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for>Fecha</label>
                                <datepicker :disabled="true" :format="format" :language="es"
                                            :value="new Date()"></datepicker>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.fecha_emision"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for>T/C</label>
                                <input class="form-control" disabled type="text" v-model="form.t_cambio">
                            </div>
                        </div>
                    </div>

                    <div v-if="!form.recibo_cliente">
                        <div class="alert alert-info">
                            <span>Se requiere que seleccione un cliente para continuar.</span>
                        </div>
                        <hr>
                    </div>

                    <br>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label > Listado de Documentos pendientes</label>
                                <div class="form-group">
                                    <multiselect :allow-empty="false" :options="cuentas"
                                                 :searchable="true"
                                                 :show-labels="false"
                                                 deselect-label="No se puede eliminar este valor"
                                                 label="text"
                                                 placeholder="Selecciona una cuenta para pagar"
                                                 ref="cuenta"
                                                 track-by="id_cuentaxcobrar"
                                                 v-model="detalleForm.cuentax"
                                                 v-on:input="cargar_detalles_cuenta()"
                                    ></multiselect>
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.cuentax" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for>Saldo Pendiente C$</label>
                                <label class="form-control" > {{detalleForm.cuentax?detalleForm.cuentax.saldo_actual:0 | formatMoney(2)}}</label>

                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for>Monto Abono C$</label>
                                <input @change="detalleForm.monto = detalleForm.cuentax? Math.max(Math.min(Number(!isNaN(detalleForm.monto)?detalleForm.monto.toFixed(2):0), Number(Number(detalleForm.cuentax.saldo_actual).toFixed(2))), 1):0"
                                       class="form-control" ref="abono" type="number" min="0"
                                       v-model.number="detalleForm.monto">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.monto"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <!--<div class="col-sm-2">
                            <div class="form-group">
                                <label class="check-label2"><input type="checkbox"
                                                                  v-model="detalleForm.aplicaIR"> Aplica Retención IR</label>
                            </div>
                        </div>

                        <div class="col-sm-2">
                            <div class="form-group">
                                <label for>No. Documento Exoneración IR</label>
                                <input :disabled="!detalleForm.aplicaIR" class="form-control" type="text"
                                       v-model="detalleForm.doc_exoneracion_ir">
                            </div>
                        </div>

                        <div class="col-sm-2">
                            <div class="form-group">
                                <label class="check-label2"><input type="checkbox"
                                                                  v-model="detalleForm.aplicaIMI">Aplica Retención IMI</label>
                            </div>
                        </div>

                        <div class="col-sm-2">
                            <div class="form-group">
                                <label for>No. Documento Exoneración IMI</label>
                                <input :disabled="!detalleForm.aplicaIMI" class="form-control" type="text"
                                       v-model="detalleForm.doc_exoneracion_imi">
                            </div>
                        </div>-->


                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>&nbsp;</label>
                                <button @click="agregarDetalle" class="btn btn-info" ref="agregar">Agregar Abono
                                </button>
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <ul class="error-messages">
                                <li
                                        :key="message"
                                        v-for="message in errorMessages.detalleCuentasxCobrar"
                                        v-text="message"
                                ></li>
                            </ul>
                            <table class="table table-bordered table-hover table-responsive"  >
                                <thead>
                                <tr>
                                    <th></th>
                                    <th style="min-width:50px">Documento Origen</th>
                                    <th style="min-width:300px">Concepto</th>
                                    <!--<th style="min-width:100px">Subtotal C$</th>
                                  <th style="min-width:100px">Retención IR C$</th>
                                   <th style="min-width:100px">Retención IMI C$</th>-->
                                    <th style="min-width:150px">Monto Abono C$</th>
                                    <th style="min-width:300px" colspan="2">Saldo Pendiente C$</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item, index) in form.detalleCuentasxCobrar">
                                    <tr>
                                        <td>
                                            <button @click="eliminarLinea(item, index)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                        <td style="min-width:150px">
                                            <input class="form-control" disabled v-model="item.cuentax.no_documento_origen">
                                        </td>

                                        <td>
                                            {{item.descripcion_pago}}
                                        </td>

                                        <!--<td class="text-center" style="width: 12%">
                                           <input disabled class="form-control" min="0" v-model.number="item.monto_subtotal">
                                       </td>
                                      <td class="text-center" style="width: 12%">
                                           <input disabled v-tooltip="'No. Documento Exoneración:'+item.doc_exoneracion_ir" class="form-control" v-model.number="item.monto_retencion_ir">
                                       </td>
                                       <td class="text-center" style="width: 12%">
                                           <input disabled v-tooltip="'No. Documento Exoneración:'+item.doc_exoneracion_imi" class="form-control" v-model.number="item.monto_retencion_imi">
                                       </td>-->
                                        <td class="text-center" >
                                            <input @change="establecerConcepto(item)"
                                                   min="0" class="form-control" v-model.number="item.monto">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`detalleCuentasxCobrar.${index}.monto`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td colspan="2" class="text-center" >
                                            <strong>C$ {{calcularSaldoX(item)| formatMoney(2)}}</strong>
                                        </td>

                                    </tr>
                                    <tr></tr>
                                </template>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colspan="2"></td>
                                    <td class="text-right"> <strong> Total a pagar C$</strong></td>
                                    <td  class="text-center">
                                        <strong>{{total_a_pagar| formatMoney(2)}}</strong>
                                    </td>
                                    <td class="text-right"> <strong> Total saldo pendiente C$</strong></td>
                                    <td  class="text-center">
                                        <strong>{{form.saldo_total| formatMoney(2)}}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"></td>
                                    <td class="text-right"> <strong> Total a pagar $</strong></td>
                                    <td  class="text-center">
                                        <strong>{{form.monto_total_me| formatMoney(2)}}</strong>
                                    </td>
                                    <td class="text-right"> <strong> Total saldo pendiente $</strong></td>
                                    <td  class="text-center">
                                        <strong>{{form.saldo_total_me| formatMoney(2)}}</strong>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <br>
                    <div class="alert alert-success">
                        <span><strong>Datos de pago y Resumen</strong></span>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-12">

                            <div class="row">

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label > Método Pago</label>
                                        <div class="form-group">
                                            <multiselect :allow-empty="false" :options="vias_pago"
                                                         :searchable="true"
                                                         :show-labels="false"
                                                         deselect-label="No se puede eliminar este valor"
                                                         label="descripcion"
                                                         placeholder="Selecciona un método pago"
                                                         ref="via_pago"
                                                         track-by="id_via_pago"
                                                         v-model="detalleFormPago.via_pagox"
                                            ></multiselect>
                                        </div>
                                        <ul class="error-messages">
                                            <li :key="message" v-for="message in errorMessages.via_pagox"
                                                v-text="message"></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label > Moneda</label>
                                        <div class="form-group">
                                            <multiselect :allow-empty="false" :options="monedas"
                                                         :searchable="true"
                                                         :show-labels="false"
                                                         deselect-label="No se puede eliminar este valor"
                                                         label="descripcion"
                                                         placeholder="Selecciona una moneda"
                                                         ref="moneda"
                                                         track-by="id_moneda"
                                                         v-model="detalleFormPago.moneda_x"
                                            ></multiselect>
                                        </div>
                                        <ul class="error-messages">
                                            <li :key="message" v-for="message in errorMessages.moneda_x"
                                                v-text="message"></li>
                                        </ul>
                                    </div>
                                </div>

                                <template v-if="detalleFormPago.via_pagox">

                                    <div class="col-sm-6"
                                         v-if="[1,3,5,6].indexOf(detalleFormPago.via_pagox.id_via_pago) >= 0">
                                        <div class="form-group">
                                            <label > Banco</label>
                                            <div class="form-group">
                                                <multiselect :allow-empty="false" :options="bancos"
                                                             :searchable="true"
                                                             :show-labels="false"
                                                             deselect-label="No se puede eliminar este valor"
                                                             label="descripcion"
                                                             placeholder="Selecciona un método pago"
                                                             ref="banco"
                                                             track-by="id_banco"
                                                             v-model="detalleFormPago.banco_x"
                                                ></multiselect>
                                            </div>
                                            <ul class="error-messages">
                                                <li :key="message" v-for="message in errorMessages.moneda_x"
                                                    v-text="message"></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-sm-6" v-if="[1].indexOf(detalleFormPago.via_pagox.id_via_pago) >= 0">
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

                                    <div class="col-sm-6" v-if="detalleFormPago.via_pagox.id_via_pago === 4">
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

                                    <div class="col-sm-6" v-if="detalleFormPago.via_pagox.id_via_pago === 5">
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

                                    <div class="col-sm-6" v-if="detalleFormPago.via_pagox.id_via_pago === 6">
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

                                    <div class="col-sm-6" v-if="detalleFormPago.via_pagox.id_via_pago === 7">
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
                                        <label for>Monto {{detalleFormPago.moneda_x ? detalleFormPago.moneda_x.codigo :''}}</label>
                                        <input class="form-control" min="0" v-model.number="detalleFormPago.monto">
                                        <ul class="error-messages">
                                            <li
                                                    :key="message"
                                                    v-for="message in errorMessages.monto"
                                                    v-text="message"
                                            ></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <div class="form-group">
                                        <label for>&nbsp;</label>
                                        <button @click="agregarMetodoPago" class="btn btn-info"
                                                ref="agregarpago">Agregar Pago
                                        </button>
                                    </div>
                                </div>


                                <div class="col-sm-12">
                                    <table class="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Tipo</th>
                                            <th>Moneda</th>
                                            <th>Monto</th>
                                            <th>No Referencia</th>
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
                                                <td style="width: 5%">
                                                    <input class="form-control" disabled
                                                           v-model="item.via_pagox.descripcion">
                                                    <ul class="error-messages">
                                                        <li
                                                                :key="message"
                                                                v-for="message in errorMessages[`detallePagos.${index}.via_pagox.id_via_pago`]"
                                                                v-text="message">
                                                        </li>
                                                    </ul>
                                                </td>

                                                <td style="width: 5%">
                                                    <input class="form-control" disabled
                                                           v-model="item.moneda_x.descripcion">
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
                                                           v-model.number="item.monto" min="0"
                                                           @change="calcularEquivalente(item)">

                                                    <ul class="error-messages">
                                                        <li
                                                                :key="message"
                                                                v-for="message in errorMessages[`detallePagos.${index}.monto`]"
                                                                v-text="message">
                                                        </li>
                                                    </ul>
                                                </td>

                                                <td style="width: 5%" v-if="item.moneda_x.id_moneda === 3">
                                                    <input class="form-control" type="number" min="0"
                                                           v-model.number="item.monto_me" @change="calcularEquivalente(item)">
                                                    <ul class="error-messages">
                                                        <li
                                                                :key="message"
                                                                v-for="message in errorMessages[`detallePagos.${index}.monto`]"
                                                                v-text="message">
                                                        </li>
                                                    </ul>
                                                </td>

                                                <td style="width: 5%">
                                                    <template v-if="[1,3].indexOf(item.via_pagox.id_via_pago) >= 0">
                                                        <input class="form-control"
                                                               v-model="item.numero_minuta">
                                                        <ul class="error-messages">
                                                            <li
                                                                    :key="message"
                                                                    v-for="message in errorMessages[`detalleCuentasxCobrar.${index}.numero_minuta`]"
                                                                    v-text="message">
                                                            </li>
                                                        </ul>
                                                    </template>

                                                    <template v-if="item.via_pagox.id_via_pago === 4">
                                                        <input class="form-control"
                                                               v-model="item.numero_nota_credito">
                                                        <ul class="error-messages">
                                                            <li
                                                                    :key="message"
                                                                    v-for="message in errorMessages[`detalleCuentasxCobrar.${index}.numero_nota_credito`]"
                                                                    v-text="message">
                                                            </li>
                                                        </ul>
                                                    </template>

                                                    <template v-if="item.via_pagox.id_via_pago === 5">
                                                        <input class="form-control"
                                                               v-model="item.numero_cheque">
                                                        <ul class="error-messages">
                                                            <li
                                                                    :key="message"
                                                                    v-for="message in errorMessages[`detalleCuentasxCobrar.${index}.numero_cheque`]"
                                                                    v-text="message">
                                                            </li>
                                                        </ul>
                                                    </template>

                                                    <template v-if="item.via_pagox.id_via_pago === 6">
                                                        <input class="form-control"
                                                               v-model="item.numero_transferencia">
                                                        <ul class="error-messages">
                                                            <li
                                                                    :key="message"
                                                                    v-for="message in errorMessages[`detalleCuentasxCobrar.${index}.numero_transferencia`]"
                                                                    v-text="message">
                                                            </li>
                                                        </ul>
                                                    </template>

                                                    <template v-if="item.via_pagox.id_via_pago === 7">
                                                        <input class="form-control"
                                                               v-model="item.numero_recibo_pago">
                                                        <ul class="error-messages">
                                                            <li
                                                                    :key="message"
                                                                    v-for="message in errorMessages[`detalleCuentasxCobrar.${index}.numero_recibo_pago`]"
                                                                    v-text="message">
                                                            </li>
                                                        </ul>
                                                    </template>

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

                        <br>
                        <br>

                        <div class="col-sm-12">

                            <div class="col-sm-12">
                                <table class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th colspan="2">Resumen</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td style="width: 50%">
                                            <label > Total a Abonar en Córdobas</label>
                                        </td>
                                        <td style="width: 50%">
                                            <p><strong>C$ {{form.monto_total | formatMoney(2)}}</strong></p>
                                        </td>
                                    </tr>

                                    <template v-for="(item, index) in form.detallePago">

                                        <tr>
                                            <td style="width: 50%">
                                                {{'(-) Pagado con '  +item.via_pagox.descripcion+ ' (Equivalente en Córdobas)'}}
                                            </td>
                                            <td style="width: 50%">
                                                <p><strong>C$ {{item.monto | formatMoney(2)}}</strong></p>
                                            </td>
                                        </tr>

                                    </template>
                                    <tr>
                                        <td style="width: 50%">
                                            <label > Monto Pendiente Córdobas</label>
                                        </td>
                                        <td style="width: 50%">
                                            <p><strong>C$ {{total_deuda | formatMoney(2)}}</strong></p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style="width: 50%">
                                            <label > Monto Pendiente (Equivalente en Dólares)</label>
                                        </td>
                                        <td style="width: 50%">
                                            <p><strong>$ {{form.pago_pendiente | formatMoney(2)}}</strong></p>
                                        </td>
                                    </tr>


                                    <tr>
                                        <td style="width: 50%">
                                            <label > Monto Vuelto</label>
                                        </td>
                                        <td style="width: 50%">
                                            <p><strong>C$ {{form.pago_vuelto_mn | formatMoney(2)}}</strong></p>
                                        </td>
                                    </tr>


                                    </tbody>
                                    <tfoot>
                                    </tfoot>
                                </table>
                            </div>

                        </div>
                    </div>


                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'recibos-oficiales' }" tag="button">
                            <button class="btn btn-default" type="button">Cancelar</button>
                        </router-link>
                        <button
                                :disabled="btnAction !== 'Registrar Recibo'"
                                @click="registrar"
                                class="btn btn-primary"
                                type="button"
                        >{{ btnAction }}
                        </button>
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
    import recibos from "../../api/recibos_oficiales";
    import cuenta from "../../api/cuentas_por_cobrar";


    import es from 'vuejs-datepicker/dist/locale/translations/es'

    //import {SweetModal} from 'sweet-modal-vue'
    import cliente from '../../api/clientes'
    import loadingImage from '../../assets/images/block50.gif'
    import roundNumber from '../../assets/custom-scripts/Round'

    export default {
        /*components: {
            SweetModal
        },*/
        data() {
            return {
                loading: true,
                msg: 'Cargando el contenido espere un momento',
                url: '/public' + loadingImage,

                es: es,
                format: "dd-MM-yyyy",

                clientesBusquedaURL: "/ventas/clientes/buscar",

                cuentas: [],
                vias_pago: [],
                monedas: [],
                bancos: [],
                detalleForm: {
                    cuentax: '',
                    fecha_pago: '',
                    descripcion_pago: '',
                    monto: 0,
                    monto_me: 0,
                    moneda_x:[],
                    doc_exoneracion_ir:'',
                    doc_exoneracion_imi:'',
                    aplicaIR:false,
                    aplicaIMI:false,
                },

                detalleFormPago: {
                    via_pagox:null,
                    monto:0,
                    monto_me:0,
                    moneda_x:null,
                    banco_x:null,
                    numero_minuta:'',
                    numero_nota_credito:'',
                    numero_cheque:'',
                    numero_transferencia:'',
                    numero_recibo_pago:''
                },

                form: {
                    no_documento: "",
                    fecha_emision: moment(new Date()).format("YYYY-MM-DD"),
                    recibo_cliente: {},
                    nombre_persona: "",
                    concepto: "",

                    t_cambio: 0,
                    monto_total_me: 0,
                    monto_total: 0,
                    saldo_total_me: 0,
                    saldo_total: 0,

                    detalleCuentasxCobrar: [],
                    detallePago: [],

                    pago_vuelto:0,
                    pago_pendiente:0,

                    pago_vuelto_mn:0,
                    pago_pendiente_mn:0,

                    tipo_recibo:1,

                },
                btnAction: "Registrar Recibo",
                errorMessages: []
            }

        },
        computed: {


            total_a_pagar() {
                let self = this;

                self.form.monto_total = Number(this.form.detalleCuentasxCobrar.reduce((carry, item) => {
                    return (carry + Number(item.monto))
                }, 0).toFixed(2));

                self.form.saldo_total = Number(this.form.detalleCuentasxCobrar.reduce((carry, item) => {
                    return (carry + Number(roundNumber.round(Number(item.cuentax.saldo_actual), 2)) - item.monto)
                }, 0).toFixed(2));

                if (!isNaN(this.form.monto_total)) {
                    this.form.monto_total_me = roundNumber.decimalAdjust('ceil', Number((this.form.monto_total / this.form.t_cambio).toFixed(4)), -2);
                    this.form.saldo_total_me = roundNumber.decimalAdjust('ceil', Number((this.form.saldo_total / this.form.t_cambio).toFixed(4)), -2);

                    return this.form.monto_total;
                } else return 0;
            },


            total_deuda() {

                let total_pagos = this.form.detallePago.reduce((carry, item) => {
                    return (carry + Number(item.moneda_x.id_moneda === 1 ? item.monto : Number(Number(item.monto_me * this.form.t_cambio).toFixed(2))));
                }, 0);

                /*let total_pagos_cuentas = this.form.detalleCuentasxCobrar.reduce((carry, item) => {
                    return (carry + Number(item.monto));
                }, 0);*/
                let total_pagos_cuentas = this.form.monto_total;

                if (((total_pagos_cuentas - total_pagos).toFixed(2)) < 0) {
                    this.form.pago_pendiente = 0;
                    this.form.pago_pendiente_mn = 0;

                    this.form.pago_vuelto_mn =  roundNumber.round(Number((Number((total_pagos).toFixed(2)) - Number((this.form.monto_total)).toFixed(2))),2);
                    this.form.pago_vuelto = roundNumber.round(Number((this.form.pago_vuelto_mn/this.form.t_cambio).toFixed(2)),2);

                } else {
                    this.form.pago_pendiente_mn = Number((total_pagos_cuentas - total_pagos).toFixed(2));
                    this.form.pago_pendiente = roundNumber.decimalAdjust('ceil', Number((this.form.pago_pendiente_mn / this.form.t_cambio).toFixed(4)), -2);

                    this.form.pago_vuelto = 0;
                    this.form.pago_vuelto_mn= 0;
                }

                if (!isNaN(this.form.pago_pendiente_mn)) {
                    //this.form.pago_pendiente = roundNumber.round(Number((this.form.pago_pendiente_mn / this.form.t_cambio)),2);
                    return this.form.pago_pendiente_mn;
                } else return 0;
            },

        },
        methods: {

            calcularSaldoX(item){

              return Number((roundNumber.round(Number(item.cuentax.saldo_actual),2))-Number(item.monto).toFixed(2));

            },

            cargar_detalles_cuenta() {
                var self = this;
                if(self.detalleForm.cuentax)
                //self.detalleForm.moneda_x = self.monedas[1];
                self.detalleForm.monto_me = 0;
                self.detalleForm.monto = Number(Number(self.detalleForm.cuentax.saldo_actual).toFixed(2));
            },

            establecerConcepto(itemX) {
                itemX.monto = Math.max(Math.min(Number(!isNaN(itemX.monto)?itemX.monto.toFixed(2):0), Number(Number(itemX.cuentax.saldo_actual).toFixed(2))), 1);
                if(itemX.monto === Number(Number(itemX.cuentax.saldo_actual).toFixed(2))){
                    itemX.descripcion_pago = 'Cancela factura No.'+itemX.cuentax.no_documento_origen+'.';
                }else{
                    itemX.descripcion_pago = 'Abona factura No.'+itemX.cuentax.no_documento_origen+'. Saldo C$'+(Number(itemX.cuentax.saldo_actual)-itemX.monto).toFixed(2)+'.';
                }

                let monto_retencion_ir = 0, monto_retencion_imi = 0, iva = 1.15;

                if(itemX.cuentax.cuenta_factura.impuesto_exonerado){
                    iva = 1;
                }

                if(itemX.aplicaIR){
                    monto_retencion_ir = roundNumber.round(Number(itemX.monto/iva)*0.02,2);
                }else{
                    monto_retencion_ir=0;
                }

                if(itemX.aplicaIMI){
                    monto_retencion_imi = roundNumber.round(Number(itemX.monto/iva)*0.01,2);
                }else{
                    monto_retencion_imi=0;
                }

                itemX.monto_retencion_ir=monto_retencion_ir;
                itemX.monto_retencion_imi=monto_retencion_imi;

            },

            calcularEquivalente(itemX) {
                if(itemX.moneda_x.id_moneda===1 && itemX.monto > 0){
                    itemX.monto_me = Number((itemX.monto/this.form.t_cambio).toFixed(2));
                }

                if(itemX.moneda_x.id_moneda===3 && itemX.monto_me > 0){
                    itemX.monto = roundNumber.round(Number((itemX.monto_me * this.form.t_cambio)),2);
                }
            },

            seleccionarCliente(e) {
                const clienteP = e.target.value;
                var self = this;
                self.form.recibo_cliente = clienteP;
                self.form.nombre_persona = self.form.recibo_cliente.nombre_comercial;

                self.loading = true;
                self.form.detalleCuentasxCobrar = [];
                self.form.detallePago = [];
                self.detalleForm.cuentax = '';

                cuenta.obtenerCuentasCliente({
                    id_cliente: self.form.recibo_cliente.id_cliente
                }, data => {
                    if (data !== null) {
                        self.cuentas = data;
                        self.detalleForm.cuentax = '';
                    } else {
                        alertify.warning("No se encuentran cuentas para este cliente.", 5);
                        self.detalleForm.cuentax = '';
                    }
                    self.loading = false;
                }, err => {
                    /*if(err.codigo_bateria){
                      self.detalleForm.bateria_busqueda = '';
                      self.$refs.bateria.focus();
                      alertify.warning("No se encuentra esta batería.",5);
                      self.detalleForm.cuentax = '';
                    }*/
                    self.loading = false;
                })

            },


            nuevo() {
                var self = this;
                recibos.nuevo({}, data => {
                        self.vias_pago = data.vias_pago;
                        self.monedas = data.monedas;
                        self.bancos = data.bancos;
                        self.cuentas = [];
                        self.form.t_cambio = Number(data.t_cambio.tasa_paralela);
                        self.loading = false;

                    },
                    err => {
                        console.log(err);
                    })

            },

            agregarDetalle() {
                var self = this;
                if (self.detalleForm.cuentax) {
                    if (self.detalleForm.monto > 0) {
                        let validacion = 0;
                        if(self.detalleForm.aplicaIR && self.detalleForm.doc_exoneracion_ir ===''){
                            validacion++;
                            alertify.warning("Si el pago retiene IR se debe definir un No. documento Exoneración", 5);
                        }
                        if(self.detalleForm.aplicaIMI && self.detalleForm.doc_exoneracion_imi ===''){
                            validacion++;
                            alertify.warning("Si el pago retiene IMI se debe definir un No. documento Exoneración", 5);
                        }
                        if(validacion===0){
                        let i = 0;
                        let keyx = 0;

                        if (self.form.detalleCuentasxCobrar) {
                            self.form.detalleCuentasxCobrar.forEach((cuentax, key) => {
                                if (self.detalleForm.cuentax.id_cuentaxcobrar === cuentax.cuentax.id_cuentaxcobrar) {
                                    i++;
                                    keyx = key;
                                }
                            });
                        }
                        if (i === 0) {

                            if(Number(Number(self.detalleForm.monto).toFixed(2)) === Number(Number(self.detalleForm.cuentax.saldo_actual).toFixed(2))){
                                self.detalleForm.descripcion_pago = 'Cancela factura No.'+self.detalleForm.cuentax.no_documento_origen+'.';
                            }else{
                                self.detalleForm.descripcion_pago = 'Abona factura No.'+self.detalleForm.cuentax.no_documento_origen+'. Saldo C$'+(Number(self.detalleForm.cuentax.saldo_actual)-self.detalleForm.monto).toFixed(2)+'.';
                            }

                            let monto_retencion_ir = 0, monto_retencion_imi = 0 , iva = 1.15;
                            if(!self.detalleForm.cuentax.es_registro_importado){
                            if(self.detalleForm.cuentax.cuenta_factura.impuesto_exonerado){
                                iva = 1;
                            }
                            }

                            if(self.detalleForm.aplicaIR){
                                monto_retencion_ir = roundNumber.round(Number(self.detalleForm.monto/iva)*0.02,2);
                            }else{
                                monto_retencion_ir=0;
                            }

                            if(self.detalleForm.aplicaIMI){
                                monto_retencion_imi = roundNumber.round(Number(self.detalleForm.monto/iva)*0.01,2);
                            }else{
                                monto_retencion_imi=0;
                            }

                            self.form.detalleCuentasxCobrar.push({
                                cuentax: self.detalleForm.cuentax,
                                monto: Number(self.detalleForm.monto),
                                monto_me:  Number((self.detalleForm.monto/self.form.t_cambio).toFixed(2)),
                                monto_subtotal:roundNumber.round(Number(self.detalleForm.monto - monto_retencion_imi - monto_retencion_ir),2),
                                monto_retencion_ir:monto_retencion_ir,
                                monto_retencion_imi:monto_retencion_imi,
                                aplicaIR:self.detalleForm.aplicaIR,
                                aplicaIMI:self.detalleForm.aplicaIMI,
                                doc_exoneracion_ir:self.detalleForm.doc_exoneracion_ir,
                                doc_exoneracion_imi:self.detalleForm.doc_exoneracion_imi,
                                descripcion_pago: self.detalleForm.descripcion_pago,

                            });
                            alertify.success("Artículo agregado!", 5);
                        } else {
                            let nuevo_total = self.form.detalleCuentasxCobrar[keyx].monto + self.detalleForm.monto;
                            if (nuevo_total <= Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual)) {

                                //self.form.detalleCuentasxCobrar[keyx].monto_subtotal = nuevo_total;
                                self.form.detalleCuentasxCobrar[keyx].monto = nuevo_total;
                                self.form.detalleCuentasxCobrar[keyx].monto_me = Number((self.detalleForm.monto/self.form.t_cambio).toFixed(2));
                                alertify.success("Cuenta agregada!", 5);

                                if(nuevo_total === Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual)){
                                    self.form.detalleCuentasxCobrar[keyx].descripcion_pago = 'Cancela factura No.'+self.form.detalleCuentasxCobrar[keyx].cuentax.no_documento_origen+'.';
                                }else{
                                    self.form.detalleCuentasxCobrar[keyx].descripcion_pago = 'Abona factura No.'+self.detalleCuentasxCobrar[keyx].cuentax.no_documento_origen+'. Saldo C$'+(Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual)-nuevo_total).toFixed(2)+'.';
                                }

                            } else {
                                self.form.detalleCuentasxCobrar[keyx].monto = Number(self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual);
                                self.form.detalleCuentasxCobrar[keyx].monto_me = Number((self.form.detalleCuentasxCobrar[keyx].cuentax.saldo_actual/self.form.t_cambio).toFixed(2));
                                self.form.detalleCuentasxCobrar[keyx].descripcion_pago = 'Cancela factura No.'+self.form.detalleCuentasxCobrar[keyx].cuentax.no_documento_origen+'.';
                                alertify.warning("Se ha agregado el monto maximo disponible para cancelar esta cuenta", 5);
                            }
                        }

                        self.detalleForm.cuentax = null;
                        self.detalleForm.monto_me = 0;
                        self.detalleForm.monto = 0;
                        self.detalleForm.descripcion_pago = '';
                        this.$refs.cuenta.$el.focus()

                        }
                    } else {
                        alertify.warning("El monto del abono debe ser mayor que cero", 5);
                    }
                } else {
                    alertify.warning("Debe seleccionar una cuenta para realizar el abono", 5);
                }
            },
            eliminarLinea(item, index) {
                if (this.form.detalleCuentasxCobrar.length >= 1) {
                    this.form.detalleCuentasxCobrar.splice(index, 1);

                } else {
                    this.form.detalleCuentasxCobrar = [];
                }
            },


            agregarMetodoPago() {
                var self = this;
                if (self.detalleFormPago.via_pagox && self.detalleFormPago.moneda_x) {
                    if (self.detalleFormPago.monto > 0) {
                        let i = 0;
                        let keyx = 0;
                        if (self.form.detallePago) {
                            self.form.detallePago.forEach((via_pago_x, key) => {
                                if ((self.detalleFormPago.via_pagox.id_via_pago === via_pago_x.via_pagox.id_via_pago) &&
                                    self.detalleFormPago.moneda_x.id_moneda === via_pago_x.moneda_x.id_moneda) {
                                    i++;
                                    keyx = key;
                                }
                            });
                        }
                        let monto_me = 0, monto_mn = 0;

                        if (self.detalleFormPago.moneda_x.id_moneda === 1) {
                            monto_mn = Number(self.detalleFormPago.monto);
                            monto_me = Number((self.detalleFormPago.monto / self.form.t_cambio));

                        } else if (self.detalleFormPago.moneda_x.id_moneda === 3) {
                            monto_me = Number(self.detalleFormPago.monto);
                            //monto_mn = Number((self.detalleFormPago.monto * self.form.t_cambio));
                            monto_mn= roundNumber.round(Number((monto_me * this.form.t_cambio)),2);
                        }

                        if (i === 0) {
                            self.form.detallePago.push({
                                via_pagox: self.detalleFormPago.via_pagox,
                                moneda_x: self.detalleFormPago.moneda_x,
                                monto: Number(monto_mn.toFixed(2)),
                                monto_me: Number(monto_me.toFixed(2)),
                                banco_x: self.detalleFormPago.banco_x,
                                numero_minuta: self.detalleFormPago.numero_minuta,
                                numero_nota_credito: self.detalleFormPago.numero_nota_credito,
                                numero_cheque: self.detalleFormPago.numero_cheque,
                                numero_transferencia: self.detalleFormPago.numero_transferencia,
                                numero_recibo_pago: self.detalleFormPago.numero_recibo_pago,

                            });
                            alertify.success("Método de pago agregado!", 5);
                        } else {
                            //let nuevo_monto_total = self.form.detallePago[keyx].monto + self.detalleFormPago.monto;
                            self.form.detallePago[keyx].monto_me = Number(self.form.detallePago[keyx].monto_me + self.detalleFormPago.monto);
                            self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto_me * self.form.t_cambio).toFixed(2));
                            alertify.success("Pago agregado!", 5);
                        }

                        self.detalleFormPago.via_pagox = null;
                        self.detalleFormPago.monto = 0;
                        self.detalleFormPago.monto_me = 0;
                        self.detalleFormPago.moneda_x = null;
                        self.detalleFormPago.banco_x = null;
                        self.detalleFormPago.numero_minuta = '';
                        self.detalleFormPago.numero_nota_credito = '';
                        self.detalleFormPago.numero_cheque = '';
                        self.detalleFormPago.numero_transferencia = '';
                        self.detalleFormPago.numero_recibo_pago = '';


                    } else {
                        alertify.warning("El monto debe ser mayor que cero", 5);
                    }
                } else {
                    alertify.warning("Debe seleccionar un método y una moneda", 5);
                }
            },

            eliminarLineaPago(item, index) {
                if (this.form.detallePago.length >= 1) {
                    this.form.detallePago.splice(index, 1);

                } else {
                    this.form.detallePago = [];
                }
            },


            registrar() {
                var self = this;
                self.btnAction = "Registrando, espere....";
                if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {
                    alertify.warning("El monto del recibo deber ser pagado en su totalidad", 5);
                    //self.errorMessages.serie = Array('Error serie');
                    self.btnAction = "Registrar Recibo";
                } else if (self.form.monto_total > 0 && self.form.pago_pendiente > 0) {

                } else {
                    self.$swal.fire({
                        title: 'Esta seguro de procesar el recibo?',
                        text: "Detalles del recibo: ",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, registrar',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.value) {
                            recibos.registrar(
                                self.form,
                                data => {
                                    this.$swal.fire(
                                        'Recibo Registrado!',
                                        'El recibo fue registrado correctamente',
                                        'success'
                                    );
                                    this.$router.push({
                                        name: "recibos-oficiales"
                                    });
                                },
                                err => {
                                    self.errorMessages = err;
                                    alertify.warning("Por favor revise los datos faltantes", 5);
                                    self.btnAction = "Registrar Recibo";
                                }
                            );
                        } else {
                            self.btnAction = "Registrar Recibo";
                        }
                    })
                }
            },

            registrarCliente() {
                var self = this;
                cliente.registrarBasico(self.formCliente, data => {
                    alertify.success("Cliente registrado exitosamente", 5);
                    //console.log(data);
                    self.form.recibo_cliente = data;
                    self.form.tipo_identificacion = self.form.recibo_cliente.tipo_persona;
                    if (self.form.recibo_cliente.tipo_persona === 1) {
                        self.form.identificacion = self.form.recibo_cliente.numero_cedula;
                    } else {
                        self.form.identificacion = self.form.recibo_cliente.numero_ruc;
                    }

                    self.$refs.modal.close();

                }, err => {
                    self.errorMessages = err
                })
            },

            seleccionarTipo() {
                var self = this;
                if (self.form.id_tipo === 1) {
                    self.form.dias_credito = 0;
                } else {
                    self.form.dias_credito = 0;
                    self.form.dias_credito = self.plazo_maximo_credito;
                }
                /*calcular fecha*/
            }

        },
        mounted() {
            // this.obtenerAfectacionesTodas();
            // this.obtenerTodasBodegasProductos();
            this.nuevo();
        }
    };
</script>
<style>
    .btn-agregar {
        margin-top: 33px;
    }
    .check-label2 {
     margin-top: 40px;
    }
</style>




