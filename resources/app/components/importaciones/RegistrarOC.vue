<!--mpdf v-on:input="cargarProductosBodega(form.id_bodega)" mpdf-->
<template>
  <div class="main">
    <div class="row">
      <div class="col-md-12">
        <div class="content-box">
          <div class="content-box-header">
            <div class="box-title">Registrar Importacion</div>
          </div>

          <div class="alert alert-success">
            <span><strong>Datos de Importación</strong></span>
          </div>
          <div class="row">

            <div class="col-sm-2">
              <div class="form-group">
                <label for>Número Importación</label>
                <input class="form-control" type="text" v-model="form.numero_importacion">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.numero_importacion"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

         <!-- <div class="col-sm-3">
            <div class="form-group">
              <label for=""> Proveedor</label>
              <div class="form-group">
                <typeahead :initial="form.proveedor" :trim="80" :url="proveedoresBusquedaURL" @input="seleccionarProveedor" style="width: 100%;"></typeahead>
              </div>
              <ul class="error-messages">
                <li :key="message" v-for="message in errorMessages.proveedor" v-text="message"></li>
              </ul>
            </div>
          </div>-->

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Proveedor</label>
                <v-select
                        :options="proveedores"
                        label="nombre_comercial"
                        v-model="form.proveedor"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.proveedor" v-text="message"></li>
                </ul>
              </div>
            </div>



            <div class="col-sm-3">
              <div class="form-group">
                <label for>Bodega Entrada</label>
                <v-select
                        :options="bodegas"
                        label="descripcion"
                        v-model="form.bodega"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message"  v-for="message in errorMessages[`importacion_bodega.id_bodega`]" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label for=""> Orden de Compra</label>
                <div class="form-group">
                  <typeahead :initial="ordenesCompraBusqueda" :trim="80" :url="ordenesCompraBusquedaURL" @input="seleccionarOrdenCompra" style="width: 100%;"></typeahead>
                </div>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.ordenesCompraBusqueda" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="form-group">
                <label for>&nbsp;</label>
                <button @click="agregarDatosNuevaOC"  class="btn btn-info btn-agregar" ref="agregar">Agregar Orden de Compra</button>
              </div>
            </div>

            <div class="col-sm-12">
              <ul class="error-messages">
                <li
                        :key="message"
                        v-for="message in errorMessages.detallOrdenesCompras"
                        v-text="message"
                ></li>
              </ul>
              <table class="table table-bordered"  >
                <thead>
                <tr>
                  <th></th>
                  <th >Número Orden Compra</th>
                  <th >Número Factura</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="(item, index) in form.detallOrdenesCompras">
                  <tr>
                    <td style="width: 2%">
                      <button @click="eliminarLineaOrdenCompra(item, index)">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                    <td>
                      <input class="form-control" disabled v-model="item.id_orden_compra">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detallOrdenesCompras.${index}.id_orden_compra`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>
                    <td>
                      <input class="form-control" disabled v-model="item.no_factura_proveedor">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detallOrdenesCompras.${index}.no_factura_proveedor`]"
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

           <!-- <div class="col-sm-4">
              <div class="form-group">
                <label for>Número Factura Proveedor</label>
                <input class="form-control" type="text" v-model="form.no_factura_proveedor">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.no_factura_proveedor"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>-->
          </div>

          <hr>
          <div class="alert alert-success">
            <span><strong>Datos de Aduana</strong></span>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for>Número Póliza</label>
                <input class="form-control" type="text" v-model="form.numero_poliza">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.numero_poliza"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label for>Costo Flete</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" type="number"  min="0.0001" v-model.number="form.flete">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.flete"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Costo Seguro</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" type="number" min="0.0001" v-model.number="form.seguro">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.seguro"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Fecha Pago Aduana</label>
                <datepicker :format="format"  :language="es" @selected="onDateSelect" ref="fecha" v-model="fechax"></datepicker>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.fecha_pago_aduana"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Tasa de Cambio</label>

                <div class="input-group">
                  <div class="input-group-addon">C$</div>
                  <input class="form-control" min="0.0001"  readonly  step="0.0001" type="number"  v-model.number="form.tasa_cambio.tasa">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages[`tasa_cambio.tasa`]"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label for>Servicio de Seguridad Aduanera (SSA)</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" min="0.0001" type="number" v-model.number="form.ssa">
                </div>

                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.ssa"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label for>Servicio Por Transmisión Electronica (SPE)</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" min="0.0001" type="number" v-model.number="form.spe">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.spe"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label for>Tasa por Servicio a la Importación (TSI)</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" min="0.0001" type="number" v-model.number="form.tsi">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.tsi"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label for>Impuesto Selectivo al Consumo (ISC)</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" min="0.0001" readonly type="number" v-model.number="form.isc">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.isc"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Derechos Arancelarios a la Importación (DAI)</label>
                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" min="0.0001" readonly type="number" v-model.number="form.dai">
                </div>

                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.dai"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label for>Impuesto al Valor Agregado (IVA)</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" min="0.0001" type="number" v-model.number="form.iva">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.iva"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>
          </div>

          <hr>

          <div class="alert alert-success">
            <span><strong>Agencia Aduanera </strong></span>
          </div>
          <div class="row">

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Proveedor Agencia Aduanera</label>
                <v-select
                        :options="proveedores"
                        label="nombre_comercial"
                        v-model="form.proveedor_agencia"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.proveedor_agencia" v-text="message"></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>Número Factura Agencia Aduanera</label>
                <input class="form-control" type="text" v-model="form.no_factura_agencia_aduanera">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.no_factura_agencia_aduanera"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>Fecha Factura Agencia Aduanera</label>
                <datepicker :format="format"  :language="es" @selected="onDateSelectAgencia" v-model="fechax2"></datepicker>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.fecha_factura_agencia_aduanera"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Subtotal Agencia Aduanera</label>
                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" min="0.0001" type="number" v-model.number="form.subtotal_agencia_aduanera">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.subtotal_agencia_aduanera"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-4">
              <div class="form-group">
                <label for>IVA Agencia Aduanera</label>


                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" type="number" min="0.0001" v-model.number="form.iva_agencia_aduanera">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.iva_agencia_aduanera"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="form-group">
                <label for>Otros Gastos Agencia Aduanera</label>


                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" type="number"  min="0.0001" v-model.number="form.nota_credito_agencia">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.nota_credito_agencia"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>
          </div>

          <hr>

          <div class="alert alert-success">
            <span><strong>Flete Internacional </strong></span>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <div class="form-group">
                <label for>Proveedor Transporte</label>
                <v-select
                        :options="proveedores"
                        label="nombre_comercial"
                        v-model="form.proveedor_transporte"
                ></v-select>
                <ul class="error-messages">
                  <li :key="message" v-for="message in errorMessages.proveedor_transporte" v-text="message"></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Número Factura Proveedor Transporte</label>
                <input class="form-control" type="text" v-model="form.no_factura_proveedor_transporte">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.no_factura_proveedor_transporte"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>Costo Transporte</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" type="number" min="0.0001" v-model.number="form.costo_transporte">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.costo_transporte"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>

            <div class="col-sm-3">
              <div class="form-group">
                <label for>Nota Débito Transporte</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" type="number" min="0.0001" v-model.number="form.nota_debito_transporte">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.nota_debito_transporte"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>
          </div>


          <hr>


          <div class="alert alert-success">
            <span><strong>Detalle de productos</strong></span>
          </div>
          <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for>Producto:</label>
                  <multiselect v-model="detalleForm.productox" :options="productos"
                               deselect-label="No se puede eliminar este valor"
                               track-by="id_producto"
                               placeholder="Selecciona un producto"
                               :searchable="true"
                               :show-labels="false"
                               :allow-empty="false"
                               :custom-label="labelproducto"
                               ref="bateria"
                               v-on:input="cargar_detalles_producto()"
                  ></multiselect>
                </div>
              </div>




            <div class="col-sm-2">
              <div class="form-group">
                <label for>Cantidad</label>
                <input class="form-control" ref="cantidad" type="number" min="0" v-model.number="detalleForm.cantidad">
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
                <label for>Valor Unitario</label>
                <div class="input-group">
                  <div class="input-group-addon">$
                  </div>
                  <input class="form-control" type="number"  min="0" v-model.number="detalleForm.precio_unitario">
                </div>

                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.valor_unitariox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-2">
              <div class="form-group">
                <label for>Peso Unitario</label>
                <input class="form-control" type="number" min="0" v-model.number="detalleForm.peso">
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.pesox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>




            <!--<div class="col-sm-3">
              <div class="form-group">
                <label for>Porcentaje Descuento</label>
                <div class="input-group">
                  <div class="input-group-addon">%</div>
                  <input class="form-control" type="number"  min="0" v-model.number="detalleForm.porcentaje_descuento">
                </div>

                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.porcentaje_descuentox"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>Cargo Chico/Grande</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" type="number" min="0" v-model.number="detalleForm.cargo_chico_grande">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.cargo_chico_grandex"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>ISC</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" type="number" min="0" v-model.number="detalleForm.porcentaje_iscx">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.porcentaje_iscx"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>


            <div class="col-sm-3">
              <div class="form-group">
                <label for>DAI</label>

                <div class="input-group">
                  <div class="input-group-addon">$</div>
                  <input class="form-control" type="number" min="0" v-model.number="detalleForm.porcentaje_daix">
                </div>
                <ul class="error-messages">
                  <li
                          :key="message"
                          v-for="message in errorMessages.porcentaje_daix"
                          v-text="message"
                  ></li>
                </ul>
              </div>
            </div>-->



            <div class="col-sm-2">
              <div class="form-group">
                <label for>&nbsp;</label>
                <button @click="agregarDetalle"  class="btn btn-info btn-agregar" ref="agregar">Agregar Producto</button>
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
                  <th style="min-width:300px">Producto</th>
                  <th style="min-width:100px">Cantidad</th>
                  <th style="min-width:100px">Peso Unitario</th>
                  <th style="min-width:100px">Peso Total Kg</th>
                  <th style="min-width:150px">Valor Unitario</th>
                  <th style="min-width:100px">% Descuento</th>
                  <th style="min-width:100px">Cargo Chico/Grande</th>
                  <!--<th style="min-width:100px">% ISC</th>
                  <th style="min-width:100px">% DAI</th>-->
                  <th style="min-width:100px">ISC $</th>
                  <th style="min-width:100px">DAI $</th>
                  <th style="min-width:100px">Valor FOB</th>
                  <th style="min-width:100px">Total Cargo</th>
                  <th style="min-width:100px">Total FOB</th>
                  <th style="min-width:100px">Flete</th>
                  <th style="min-width:100px">Seguro</th>
                  <th style="min-width:100px">CIF Total</th>
                  <th style="min-width:200px">Descuento de Eficacia Operativa</th>
                  <th style="min-width:200px">Costo Nuevo $</th>
                  <th style="min-width:200px">Costo Nuevo C$</th>
                  <th style="min-width:150px">Flete Intern.</th>
                  <th style="min-width:100px">Nota Débito Flete Intern.</th>
                 <!-- <th style="min-width:250px">Costo Nuevo + Flete Internacional</th>-->
                  <th style="min-width:100px">SSA</th>
                  <th style="min-width:100px">SPE</th>
                  <th style="min-width:100px">TSI</th>
                  <th style="min-width:100px">ISC</th>
                  <th style="min-width:100px">DAI</th>
                  <th style="min-width:200px">Costo Agencia Aduanera</th>
                  <th style="min-width:200px">Otros Gastos Agencia Aduanera</th>
                  <th style="min-width:200px">Total C$</th>
                  <th style="min-width:200px">Valor C/U C$</th>
                  <th style="min-width:200px">Valor C/U $</th>
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
                    <input  class="form-control" type="number" disabled min="0" v-model.number="item.cantidad">
                    <ul class="error-messages">
                      <li
                              :key="message"
                              v-for="message in errorMessages[`detalleProductos.${index}.cantidad`]"
                              v-text="message">
                      </li>
                    </ul>
                  </td>



                    <td>
                      <input  class="form-control" type="number" min="0" v-model.number="item.peso_unit">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.peso`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <strong>{{valor_peso_totx(item)}} kg</strong>
                    </td>

                    <td>
                      <input  class="form-control" type="number" disabled  min="0" v-model.number="item.valor_unitario">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.valor_unitario`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input  class="form-control" type="number" disabled min="0" v-model.number="item.porcentaje_descuento">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.porcentaje_descuento`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input  class="form-control" type="number" disabled min="0" v-model.number="item.cargo_chico_grande">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.cargo_chico_grande`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                   <!-- <td>
                      <input  class="form-control" type="number"  min="0" v-model.number="item.porcentaje_isc">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.iscx`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>
                    <td>
                      <input  class="form-control" type="number"  min="0" v-model.number="item.porcentaje_dai">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.daix`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>-->

                    <td>
                      <input class="form-control" type="number" min="0.0001" v-model.number="item.iscx">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.iscx`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                    <td>
                      <input class="form-control" type="number" min="0.0001" v-model.number="item.daix">
                      <ul class="error-messages">
                        <li
                                :key="message"
                                v-for="message in errorMessages[`detalleProductos.${index}.daix`]"
                                v-text="message">
                        </li>
                      </ul>
                    </td>

                   <!-- <td>
                      <strong>$ {{daix_dol(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>$ {{iscx_dol(item)| formatMoney(2)}}</strong>
                    </td>
                    -->
                    <td>
                      <strong>$ {{valor_fobx(item) | formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>$ {{total_cargox(item) | formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>$ {{valor_total_fobx(item) | formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>$ {{fletex(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>$ {{segurox(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>$ {{cif_totalx(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>$ {{descuento_eox(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>$ {{costo_nuevo_dolx(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{costo_nuevo_cordx(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{costo_transportex(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{nota_debito_transportex(item)| formatMoney(2)}}</strong>
                    </td>

                    <!--<td>
                      <strong>C$ {{costo_nuevo_con_transportex(item)| formatMoney(2)}}</strong>
                    </td>-->

                    <td>
                      <strong>C$ {{ssax(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{spex(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{tsix(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{isc_cordx(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{ dai_cordx(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{costo_agenciax(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{otros_gastos_agenciax(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{total_cordobasx(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>C$ {{costo_unitario_cordobasx(item)| formatMoney(2)}}</strong>
                    </td>

                    <td>
                      <strong>$ {{costo_unitario_dolaresx(item)| formatMoney(2)}}</strong>
                    </td>


                  </tr>
                  <tr></tr>
                </template>
                </tbody>
                <tfoot>
                <tr>
                  <td class="item-footer" style="width: 14%">
                  </td>
                  <td class="item-footer" style="width: 14%">Totales</td>
                  <td class="item-footer" style="width: 14%">
                    <strong>{{total_cantidad}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">-
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>{{total_peso}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">-
                  </td>
                  <td class="item-footer" style="width: 14%">-
                  </td>
                   <td class="item-footer" style="width: 14%">-
                    </td>
                  <!--   <td class="item-footer" style="width: 14%">-
                   </td>
                   <td class="item-footer" style="width: 14%">-
                   </td>-->

                   <td class="item-footer" style="width: 14%">
                      <strong>$ {{total_isc | formatMoney(2)}}</strong>
                    </td>
                    <td class="item-footer" style="width: 14%">
                      <strong>$ {{total_dai | formatMoney(2)}}</strong>
                    </td>

                  <td class="item-footer" style="width: 14%">
                    <strong>$ {{total_fob | formatMoney(2)}}</strong>
                  </td>

                  <td class="item-footer" style="width: 14%">
                    <strong>$ {{total_cargo | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>$ {{total_fob_carg | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>$ {{total_fls | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>$ {{total_sg | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>$ {{total_cif | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>$ {{total_descuento | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>$ {{total_costo_dol | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_costo_cord | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_transporte | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_nd_transporte | formatMoney(2)}}</strong>
                  </td>
                 <!-- <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_transporte_costo_nuevo | formatMoney(2)}}</strong>
                  </td>-->
                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_ssa | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_spe | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_tsi | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_isc_cordx | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_dai_cordx | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_agencia_aduanera | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{total_nc_agencia | formatMoney(2)}}</strong>
                  </td>

                  <td class="item-footer" style="width: 14%">
                    <strong>C$ {{gran_total | formatMoney(2)}}</strong>
                  </td>
                  <td class="item-footer" style="width: 14%">
                    -
                  </td>
                  <td class="item-footer" style="width: 14%">
                    -
                  </td>

                </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div class="content-box-footer text-right">
            <router-link :to="{ name: 'listado-ordenes-compras' }" tag="button">
              <button class="btn btn-default" type="button">Cancelar</button>
            </router-link>
            <button
                    :disabled="btnAction != 'Registrar' ? true : false"
                    @click="registrar"
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
  import producto from "../../api/productos";
  import importacion from "../../api/importaciones";
  //import Datepicker from "vuejs-datepicker";
  import es from 'vuejs-datepicker/dist/locale/translations/es'
  import tc from '../../api/tasas-cambio'
 // import Typeahead from '../layout/Typeahead'
  export default {
    /*components: {
      //Datepicker,
    //    'typeahead':Typeahead
    },*/
    data() {
      return {
        proveedoresBusqueda: {},
        proveedoresBusquedaURL: "/proveedores/buscar",

        ordenesCompraBusqueda: {},
        ordenesCompraBusquedaURL: "/compras/ordenes/buscar",

        proveedores:[],
        bodegas:[],
        es: es,
        format: "dd-MM-yyyy",
        productos: [],
        fechax:new Date(),
        fechax2:new Date(),
        total_fobx:0,
        total_costo_dolx:0,
        total_pesox:0,
        total_transporte_costo_nuevox:0,
        total_costo_cordx:0,
        detalleForm:{
        productox: "",
        cantidad: 0,
        peso: 0,
          peso_unit:0,
        valor_unitario: 0,
        porcentaje_descuento: 2,
        cargo_chico_grande: 2,
        dai_cordx: 0,
        isc_cordx: 0,
        valor_fobx: 0,
        total_cargox: 0,
        valor_total_fobx:0,
        segurox: 0,
        fletex: 0,
        cif_totalx: 0,
        descuento_eox: 0,
        costo_nuevo_dolx: 0,
        costo_nuevo_cordx: 0,
        costo_transportex: 0,
        nota_debito_transportex: 0,
        costo_nuevo_con_transportex: 0,
        ssax: 0,
        spex : 0,
        tsix: 0,
        daix: 0,
        iscx: 0,
        costo_agenciax: 0,
        otros_gastos_agenciax: 0,
        total_cordobasx: 0,
        costo_unitario_cordobasx: 0,
        costo_unitario_dolaresx: 0,


    },
      /*
      FACTURAS JOHNSON CONTROLS N° ME440981-440982-CFDI90
      (-) DESCUENTO 2% EFICACIA OPERATIVA BATERIAS LTH
      (-) DESCUENTO 27% EFICACIA OPERATIVA BATERIAS CRONOS
      FACTURA DE TRANSPORTE VELOZ N°33076
      NOTA DE DEBITO TRANSPORTE VELOZ N°0180
      VALOR DE POLIZA C-28875
      FACTURA ARTEMAR N° 28644
      VOLOR TOTAL DE LIQUIDACION
      */


      orden_compra_original:'',
        form: {
          numero_importacion: "",
          proveedor : {},
          no_factura_proveedor: "N/D",
          numero_poliza: "N/D",
          fecha_pago_aduana: moment(new Date()).format("YYYY-MM-DD"),
          tasa_cambio:[],
          flete:0,
          seguro: 0,
          costo_transporte: 0,
          nota_debito_transporte: 0,
          ssa: 0,
          spe : 0,
          tsi: 0,
          dai: 0,
          isc: 0,
          iva: 0,
          no_factura_agencia_aduanera: 'N/D',
          no_factura_proveedor_transporte: 'N/D',
          fecha_factura_agencia_aduanera: moment(new Date()).format("YYYY-MM-DD"),
          subtotal_agencia_aduanera: 0,
          iva_agencia_aduanera: 0,
          nota_credito_agencia: 0,

          detalleProductos: [],
          detallOrdenesCompras: [],
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
      total_peso() {
        return this.form.detalleProductos.reduce((carry, item) => {
                  this.total_pesox = (carry + Number((item.peso_unit*item.cantidad).toFixed(0)));
                  return this.total_pesox
                }
                , 0)
      },

      total_dai() {
        return this.form.detalleProductos.reduce((carry, item) => {
          this.form.dai = (carry + (Number(item.daix)));
          return this.form.dai
        }, 0)
      },

      total_isc() {
        return this.form.detalleProductos.reduce((carry, item) => {
          this.form.isc = (carry + (Number(item.iscx)));
          return this.form.isc
        }, 0)
      },

      total_fob() {
         return this.form.detalleProductos.reduce((carry, item) => {
           this.total_fobx = (carry + (Number(item.valor_fobx.toFixed(2))));
           return this.total_fobx
         }, 0)
      },

      total_cargo() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + Number(item.total_cargox))
        }, 0)
      },

      total_fob_carg() {
        return this.form.detalleProductos.reduce((carry, item) => {
          this.total_fob_cargx = (carry + (Number(item.valor_total_fobx)));
          return this.total_fob_cargx
        }, 0)
      },
      total_fls() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.fletex)))
        }, 0)
      },

      total_sg() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.segurox)))
        }, 0)
      },

      total_cif() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.cif_totalx)))
        }, 0)

      },
      total_descuento() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.descuento_eox)))
        }, 0)

      },
      total_costo_dol() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.costo_nuevo_dolx)))
        }, 0)
      },
      total_costo_cord() {
        return this.form.detalleProductos.reduce((carry, item) => {
          this.total_costo_cordx =(carry + (Number(item.costo_nuevo_cordx)));
          return this.total_costo_cordx;
        }, 0)
      },

      total_transporte() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.costo_transportex)))
        }, 0)
      },

      total_nd_transporte() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.nota_debito_transportex)))
        }, 0)
      },

      total_transporte_costo_nuevo() {
        return this.form.detalleProductos.reduce((carry, item) => {
          this.total_transporte_costo_nuevox =(carry + (Number(item.costo_nuevo_con_transportex)));
          return this.total_transporte_costo_nuevox;
        }, 0)
      },

      total_ssa() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.ssax)))
        }, 0)
      },

      total_spe() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.spex)))
        }, 0)
      },

      total_tsi() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.tsix)))
        }, 0)
      },

      total_dai_cordx() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.dai_cordx)))
        }, 0)
      },

      total_isc_cordx() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.isc_cordx)))
        }, 0)
      },

      total_agencia_aduanera() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.costo_agenciax)))
        }, 0)
      },

      total_nc_agencia() {
        return this.form.detalleProductos.reduce((carry, item) => {
          return (carry + (Number(item.otros_gastos_agenciax)))
        }, 0)
      },

      gran_total() {
        return this.form.detalleProductos.reduce((carry, item) => {
                  this.gran_totalx = (carry + Number(item.total_cordobasx));//.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                  return this.gran_totalx
                }
                , 0)
      },
    },
    methods: {

      labelproducto (item) {
        let cod_barra =  item.codigo_barra == null ? 'N/A':item.codigo_barra;
        return `${item.descripcion} - ${cod_barra}`
      },
      cargar_detalles_producto() {//aqui va
        var self = this
        //console.log(self.detalleForm.productox)
        if(self.detalleForm.productox){
          self.detalleForm.precio_unitario = Number(self.detalleForm.productox.precio_compra);
          self.detalleForm.daix = Number(self.detalleForm.productox.dai);
          self.detalleForm.iscx = Number(self.detalleForm.productox.isc);
          if(self.detalleForm.productox.producto_detalles_baterias) {
            self.detalleForm.porcentaje_descuento = Number(self.detalleForm.productox.producto_detalles_baterias.descuento_eficacia);
            self.detalleForm.cargo_chico_grande = Number(self.detalleForm.productox.producto_detalles_baterias.cargo_chico_grande);
            self.detalleForm.peso = Number(self.detalleForm.productox.producto_detalles_baterias.peso_humedo);
          }else{
            self.detalleForm.porcentaje_descuento= 0;
            self.detalleForm.cargo_chico_grande= 0;
            self.detalleForm.peso = 1;
          }

          self.$refs.cantidad.focus();
        }else{
          console.log('producto no valido');
        }
      },

      valor_fobx(itemX) {
        itemX.valor_fobx=  Number((itemX.cantidad * Number(itemX.valor_unitario)).toFixed(2));
        if(!isNaN(itemX.valor_fobx)){
          return itemX.valor_fobx;
        }
        else return 0;
      },

      valor_peso_totx(itemX) {
        itemX.peso= Number((itemX.peso_unit * Number(itemX.cantidad)).toFixed(0));
        if(!isNaN(itemX.peso)){
          return itemX.peso;
        }
        else return 0;
      },

      total_cargox(itemX) {
        itemX.total_cargox=  Number(itemX.cantidad * Number(itemX.cargo_chico_grande).toFixed(2));
        if(!isNaN(itemX.total_cargox)){
          return itemX.total_cargox;
        }
        else return 0;
      },

      valor_total_fobx(itemX) {
        itemX.valor_total_fobx=  Number((Number(itemX.valor_fobx)+Number(itemX.total_cargox)).toFixed(2));
        if(!isNaN(itemX.valor_total_fobx)){
          return itemX.valor_total_fobx;
        }
        else return 0;
      },

      fletex(itemX) {
        let self = this;
        //itemX.fletex=  Number((self.form.flete/self.total_fob_cargx)*Number(itemX.valor_total_fobx));
        itemX.fletex=  Number((((Number(self.form.flete)) / Number(self.total_fob_cargx)) * Number(itemX.valor_total_fobx)).toFixed(4));
        if(!isNaN(itemX.fletex)){
          return itemX.fletex;
        }
        else return 0;
      },

      segurox(itemX) {
        let self = this;
        itemX.segurox=  Number((((Number(self.form.seguro)) / Number(self.total_fob_cargx)) * Number(itemX.valor_total_fobx)).toFixed(4));
        if(!isNaN(itemX.segurox)){
          return itemX.segurox;
        }
        else return 0;
      },

      cif_totalx(itemX) {
        itemX.cif_totalx=  Number((Number(itemX.valor_total_fobx)+Number(itemX.fletex)+Number(itemX.segurox)).toFixed(4));
        if(!isNaN(itemX.cif_totalx)){
          return itemX.cif_totalx;
        }
        else return 0;
      },

      descuento_eox(itemX) {
        itemX.descuento_eox=  Number((Number(itemX.valor_fobx*itemX.porcentaje_descuento/100).toFixed(4)));
        if(!isNaN(itemX.descuento_eox)){
          return itemX.descuento_eox;
        }
        else return 0;
      },

      costo_nuevo_dolx(itemX) {
        itemX.costo_nuevo_dolx=   Number((Number(itemX.valor_total_fobx)-Number(itemX.descuento_eox)+Number(itemX.segurox)).toFixed(4));
        if(!isNaN(itemX.costo_nuevo_dolx)){
          return itemX.costo_nuevo_dolx;
        }
        else return 0;
      },

      costo_nuevo_cordx(itemX) {
        let self = this;
        itemX.costo_nuevo_cordx=  Number((Number(itemX.costo_nuevo_dolx) * Number(self.form.tasa_cambio.tasa)).toFixed(4));
        if(!isNaN(itemX.costo_nuevo_cordx)){
          return itemX.costo_nuevo_cordx;
        }
        else return 0;
      },

      costo_transportex(itemX) {
        let self = this;
        itemX.costo_transportex=  Number((Number(self.form.tasa_cambio.tasa)*Number(self.form.costo_transporte*itemX.peso)/self.total_pesox).toFixed(4));
        if(!isNaN(itemX.costo_transportex)){
          return itemX.costo_transportex;
        }
        else return 0;
      },

      nota_debito_transportex(itemX) {
        let self = this;
        itemX.nota_debito_transportex=   Number((Number(self.form.tasa_cambio.tasa)*Number(self.form.nota_debito_transporte *itemX.peso)/self.total_pesox).toFixed(4));
        if(!isNaN(itemX.nota_debito_transportex)){
          return itemX.nota_debito_transportex;
        }
        else return 0;
      },

      /*costo_nuevo_con_transportex(itemX) {
        itemX.costo_nuevo_con_transportex=  Number((Number(itemX.costo_nuevo_cordx)+ Number(itemX.costo_transportex)+Number(itemX.nota_debito_transportex)).toFixed(4));
        if(!isNaN(itemX.costo_nuevo_con_transportex)){
          return itemX.costo_nuevo_con_transportex;
        }
        else return 0;
      },*/

      ssax(itemX) {
        let self = this;
        itemX.ssax=  Number(((Number(self.form.ssa) * Number(self.form.tasa_cambio.tasa) / Number(self.total_costo_cordx))*(Number(itemX.costo_nuevo_cordx))).toFixed(4));
        if(!isNaN(itemX.ssax)){
          return itemX.ssax;
        }
        else return 0;
      },

      spex(itemX) {
        let self = this;
        itemX.spex=  Number(((Number(self.form.spe) * Number(self.form.tasa_cambio.tasa) / Number(self.total_costo_cordx))*(Number(itemX.costo_nuevo_cordx))).toFixed(4));
        if(!isNaN(itemX.spex)){
          return itemX.spex;
        }
        else return 0;
      },

      tsix(itemX) {
        let self = this;
        itemX.tsix=  Number(((Number(self.form.tsi) * Number(self.form.tasa_cambio.tasa) / Number(self.total_costo_cordx))*(Number(itemX.costo_nuevo_cordx))).toFixed(4));
        if(!isNaN(itemX.tsix)){
          return itemX.tsix;
        }
        else return 0;
      },

      daix_dol(itemX) {
        let self = this;
        itemX.daix= Number((Number(itemX.porcentaje_dai/100)*Number(itemX.cif_totalx)).toFixed(2));
        if(!isNaN(itemX.daix)){
          return itemX.daix;
        }
        else return 0;
      },

      iscx_dol(itemX) {
        let self = this;
        itemX.iscx= Number((Number(itemX.porcentaje_isc/100)*Number(itemX.cif_totalx)).toFixed(2));
        if(!isNaN(itemX.iscx)){
          return itemX.iscx;
        }
        else return 0;
      },

      dai_cordx(itemX) {
        let self = this;
        //itemX.dai_cordx= Number((Number(itemX.porcentaje_dai/100)*Number(itemX.cif_totalx) * Number(self.form.tasa_cambio.tasa)).toFixed(4));
        itemX.dai_cordx= Number((Number(itemX.daix) * Number(self.form.tasa_cambio.tasa)).toFixed(4));
        if(!isNaN(itemX.dai_cordx)){
          return itemX.dai_cordx;
        }
        else return 0;
      },

      isc_cordx(itemX) {
        let self = this;
        //itemX.isc_cordx= Number((Number(itemX.porcentaje_isc/100)*Number(itemX.cif_totalx) * Number(self.form.tasa_cambio.tasa)).toFixed(4));
        itemX.isc_cordx= Number((Number(itemX.iscx)* Number(self.form.tasa_cambio.tasa)).toFixed(4));
        if(!isNaN(itemX.isc_cordx)){
          return itemX.isc_cordx;
        }
        else return 0;
      },

      costo_agenciax(itemX) {
        let self = this;
        itemX.costo_agenciax= Number(((Number(self.form.subtotal_agencia_aduanera) * Number(self.form.tasa_cambio.tasa) / Number(self.total_costo_cordx))*(Number(itemX.costo_nuevo_cordx))).toFixed(4));
        if(!isNaN(itemX.costo_agenciax)){
          return itemX.costo_agenciax;
        }
        else return 0;
      },

      otros_gastos_agenciax(itemX) {
        let self = this;
        itemX.otros_gastos_agenciax=  Number(((Number(self.form.nota_credito_agencia) * Number(self.form.tasa_cambio.tasa) / Number(self.total_costo_cordx))*(Number(itemX.costo_nuevo_cordx))).toFixed(4));
        if(!isNaN(itemX.otros_gastos_agenciax)){
          return itemX.otros_gastos_agenciax;
        }
        else return 0;
      },
      total_cordobasx(itemX) {
        /*console.log('Inicia');
        console.log(itemX.costo_nuevo_cordx);
        console.log(itemX.costo_transportex);
        console.log(itemX.nota_debito_transportex);
        console.log(itemX.ssax);
        console.log(itemX.spex);
        console.log(itemX.tsix);
        console.log(itemX.dai_cordx);
        console.log(itemX.isc_cordx);
        console.log(itemX.costo_agenciax);
        console.log(itemX.otros_gastos_agenciax);
        console.log('Termina');*/

        itemX.total_cordobasx=  Number((Number(itemX.costo_nuevo_cordx)+ Number(itemX.costo_transportex)+Number(itemX.nota_debito_transportex)+Number(itemX.ssax)+ Number(itemX.spex)+  Number(itemX.tsix)+  Number(itemX.dai_cordx)+  Number(itemX.isc_cordx)
                + Number(itemX.costo_agenciax)+  Number(itemX.otros_gastos_agenciax)).toFixed(4));
        if(!isNaN(itemX.total_cordobasx)){
          return itemX.total_cordobasx;
        }
        else return 0;
      },

      costo_unitario_cordobasx(itemX) {
        itemX.costo_unitario_cordobasx= Number((Number(itemX.total_cordobasx)/ Number(itemX.cantidad)).toFixed(4));
        if(!isNaN(itemX.costo_unitario_cordobasx)){
          return itemX.costo_unitario_cordobasx;
        }
        else return 0;
      },

      costo_unitario_dolaresx(itemX) {
        let self = this;
        itemX.costo_unitario_dolaresx=  Number(Number(itemX.costo_unitario_cordobasx / self.form.tasa_cambio.tasa).toFixed(4));
        if(!isNaN(itemX.costo_unitario_dolaresx)){
          return itemX.costo_unitario_dolaresx;
        }
        else return 0;
      },

      seleccionarProveedor(e) {
        const proveedor = e.target.value;
        var self = this;
        self.form.proveedor = proveedor;
      },

      seleccionarOrdenCompra(e) {
        const oc = e.target.value;
        var self = this;
        self.ordenesCompraBusqueda = oc;
      },

      moment: function () {
        return moment();
      },
      onDateSelect(date) {
        var self = this;
        this.form.fecha_pago_aduana = moment(date).format("YYYY-MM-DD"); //

        tc.obtenerTC({
          fecha: self.form.fecha_pago_aduana
        }, data => {
          if(data.tasa !== null){
            self.form.tasa_cambio = data;
          }else{
            alertify.warning("No se encuentra tasa de cambio para esta fecha.",5);
            self.form.tasa_cambio.tasa = 0;
          }
        }, err => {
          if(err.fecha[0]){
            self.form.tasa_cambio.tasa = 0;
            alertify.warning(err.fecha[0],5);
          }
        })

      },

      onDateSelectAgencia(date) {
        this.form.fecha_factura_agencia_aduanera = moment(date).format("YYYY-MM-DD");
      },


      /*obtenerProductosValidos() {
        var self = this;
        producto.obtenerProductosValidos(
                data => {
                  self.productos = data;
                },
                err => {
                  console.log(err);
                }
        );
      },*/


      agregarDetalle() {
        let self = this;
        if(this.detalleForm.productox){
          if(this.detalleForm.cantidad>0 && this.detalleForm.peso > 0 &&  this.detalleForm.precio_unitario > 0){

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
                cantidad: this.detalleForm.cantidad,
                peso_unit: this.detalleForm.peso,
                peso: 0,
                //peso: Number((Number(this.detalleForm.peso)*Number(this.detalleForm.cantidad)).toFixed(0)),
                valor_unitario: this.detalleForm.precio_unitario,
                porcentaje_descuento: this.detalleForm.porcentaje_descuento,
                cargo_chico_grande: this.detalleForm.cargo_chico_grande,
                //porcentaje_dai :this.detalleForm.porcentaje_daix,
                //porcentaje_isc : this.detalleForm.porcentaje_iscx,
                dai_cordx :0,
                isc_cordx : 0,
                valor_fobx: 0,
                total_cargox: 0,
                valor_total_fobx:0,
                fletex: 0,
                segurox: 0,
                cif_totalx: 0,
                descuento_eox: 0,
                costo_nuevo_dolx: 0,
                costo_nuevo_cordx: 0,
                costo_transportex: 0,
                nota_debito_transportex: 0,
                costo_nuevo_con_transportex: 0,
                ssax:  0,
                spex : 0,
                daix : 0 ,
                iscx :  0,
                tsix:  0,
                costo_agenciax: 0,
                otros_gastos_agenciax: 0,
                total_cordobasx: 0,
                costo_unitario_cordobasx: 0,
                costo_unitario_dolaresx: 0,
              });



              this.detalleForm.productox='';
              this.detalleForm.cantidad=0;
              this.detalleForm.peso=0;
              this.detalleForm.precio_unitario=0;
              this.detalleForm.porcentaje_descuento=2;
              this.detalleForm.cargo_chico_grande=2;

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
                  self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
                  self.form.detalleProductos[keyx].valor_unitario = self.detalleForm.precio_unitario;
                  this.detalleForm.productox='';
                  this.detalleForm.cantidad=0;
                  this.detalleForm.peso=0;
                  this.detalleForm.precio_unitario=0;
                  this.detalleForm.porcentaje_descuento=2;
                  this.detalleForm.cargo_chico_grande=2;
                }
              })
            }
          }else{
            alertify.warning("Los valores para cantidad, peso y valor unitario deben ser mayores que cero",5);
          }
        }else{
          alertify.warning("Debe seleccionar un producto",5);
        }
      },


/*      agregarDetalle() {

        if(this.detalleForm.productox){
          if(this.detalleForm.cantidad>0 && this.detalleForm.peso > 0 &&  this.detalleForm.valor_unitario > 0){
                this.form.detalleProductos.push({
                  productox: this.detalleForm.productox,
                  cantidad: this.detalleForm.cantidad,
                  peso: this.detalleForm.peso,
                  valor_unitario: this.detalleForm.valor_unitario,
                  porcentaje_descuento: this.detalleForm.porcentaje_descuento,
                  cargo_chico_grande: this.detalleForm.cargo_chico_grande,
                  porcentaje_dai :this.detalleForm.porcentaje_daix,
                  porcentaje_isc : this.detalleForm.porcentaje_iscx,
                  dai_cordx :0,
                  isc_cordx : 0,
                  valor_fobx: 0,
                  total_cargox: 0,
                  valor_total_fobx:0,
                  fletex: 0,
                  segurox: 0,
                  cif_totalx: 0,
                  descuento_eox: 0,
                  costo_nuevo_dolx: 0,
                  costo_nuevo_cordx: 0,
                  costo_transportex: 0,
                  nota_debito_transportex: 0,
                  costo_nuevo_con_transportex: 0,
                  ssax:  0,
                  spex : 0,
                  daix : 0 ,
                  iscx :  0,
                  tsix:  0,
                  costo_agenciax: 0,
                  otros_gastos_agenciax: 0,
                  total_cordobasx: 0,
                  costo_unitario_cordobasx: 0,
                  costo_unitario_dolaresx: 0,
                });
                this.detalleForm.productox='';
                this.detalleForm.cantidad=0;
                this.detalleForm.peso=0;
                this.detalleForm.valor_unitario=0;
                this.detalleForm.porcentaje_descuento=2;
                this.detalleForm.cargo_chico_grande=2;
          }else{
            alertify.warning("Los valores para cantidad, peso y valor unitario deben ser mayores que cero",5);
          }
        }else{
          alertify.warning("Debe seleccionar un producto",5);
        }
      },*/
      eliminarLinea(item, index) {
        if (this.form.detalleProductos.length >= 1) {
          this.form.detalleProductos.splice(index, 1);

        }else{
          this.form.detalleProductos=[];
        }
      },

      eliminarLineaOrdenCompra(item, index) {
        if (this.form.detallOrdenesCompras.length >= 1) {
          if(this.form.id_orden_compra !== item.id_orden_compra){
            this.form.detallOrdenesCompras.splice(index, 1);
          }else{
           alertify.warning('No puede eliminar esta orden de compra')
          }
        }else{
          this.form.detallOrdenesCompras=[];
        }
      },


      registrar() {
        var self = this;
        self.btnAction = "Registrando, espere....";

        importacion.registrar(
                self.form,
                data => {
                  this.$router.push({
                    name: "listado-importaciones"
                  });
                },
                err => {
                  self.errorMessages = err;
                  self.btnAction = "Registrar";
                }
        );
      },

    obtenerTC(){
      var self = this;
      tc.obtenerTC({
        fecha: self.form.fecha_pago_aduana
      }, data => {
        if(data.tasa !== null){
          self.form.tasa_cambio = data;
        }else{
          alertify.warning("No se encuentra tasa de cambio para esta fecha.",5);
        }
      }, err => {
        console.log(err);
        if(err.fecha.length>0){
          alertify.warning(err.fecha[0],5);
        }
      })
    },

      cargarDatosOC() {
        var self = this;
        importacion.nueva({id_orden_compra: this.$route.params.id_orden_compra
        }, data => {

          self.orden_compra_original= data.orden;
          self.productos =data.productos;
          self.bodegas = data.bodegas;
          self.form.bodega = self.orden_compra_original.orden_compra_bodega;
          self.form.proveedor = self.orden_compra_original.orden_compra_proveedor;

          this.form.detallOrdenesCompras.push({
            id_orden_compra:self.orden_compra_original.id_orden_compra,
            no_factura_proveedor:self.orden_compra_original.numero_factura,
          });

          if(self.orden_compra_original.estado !== 3 && self.orden_compra_original.estado !== 4){
            alertify.error("La orden de compra ya no puede ser procesada",5);
            this.$router.push({
              name: "listado-ordenes-compras"
            });
          }else{

            self.proveedores= data.proveedores;
            //self.form.proveedor= self.proveedores[0];
           // self.form.no_factura_proveedor = self.orden_compra_original.numero_factura;
            self.form.id_orden_compra = self.orden_compra_original.id_orden_compra;
            //self.cargar_detalles_proveedor();

            if(self.orden_compra_original.orden_compra_productos){
              self.orden_compra_original.orden_compra_productos.forEach((productox, key) => {

                let cargochg = 0,descuento_efi=0,pesox=1;
                if(productox.orden_compra_producto_bateria.producto_detalles_baterias){
                  cargochg =productox.orden_compra_producto_bateria.producto_detalles_baterias.cargo_chico_grande;
                  descuento_efi = productox.orden_compra_producto_bateria.producto_detalles_baterias.descuento_eficacia;
                  pesox = Number(productox.orden_compra_producto_bateria.producto_detalles_baterias.peso_humedo);
                }

                //let porcentaje_daix = Number(productox.orden_compra_producto_bateria.dai);
                //let porcentaje_iscx = Number(productox.orden_compra_producto_bateria.isc);

                this.form.detalleProductos.push({
                  productox: productox.orden_compra_producto_bateria,
                  cantidad: Number(productox.cantidad_facturado),
                  peso: Number((pesox*productox.cantidad_facturado).toFixed(0)),
                  peso_unit: pesox,
                  valor_unitario: Number(productox.precio_facturado),
                  porcentaje_descuento: descuento_efi,
                  cargo_chico_grande: cargochg,
                  //porcentaje_dai :porcentaje_daix,
                  //porcentaje_isc : porcentaje_iscx,
                  dai_cordx :0,
                  isc_cordx : 0,
                  valor_fobx: 0,
                  total_cargox: 0,
                  valor_total_fobx:0,
                  fletex: 0,
                  segurox: 0,
                  cif_totalx: 0,
                  descuento_eox: 0,
                  costo_nuevo_dolx: 0,
                  costo_nuevo_cordx: 0,
                  costo_transportex: 0,
                  nota_debito_transportex: 0,
                  costo_nuevo_con_transportex: 0,
                  ssax:  0,
                  spex : 0,
                  daix :  0,
                  iscx :  0,
                  tsix:  0,
                  costo_agenciax: 0,
                  otros_gastos_agenciax: 0,
                  total_cordobasx: 0,
                  costo_unitario_cordobasx: 0,
                  costo_unitario_dolaresx: 0,

                });



              });
            }
          }

        })

      },

      agregarDatosNuevaOC() {
        var self = this;
        if(self.ordenesCompraBusqueda){

          let OCExiste = false;
          self.form.detallOrdenesCompras.forEach((ocsx, key) => {
            if(ocsx.id_orden_compra === self.ordenesCompraBusqueda.id_orden_compra){
              OCExiste = true;
            }
          });

          if(!OCExiste){
          if(self.ordenesCompraBusqueda.estado !== 3){
            alertify.error("Esta orden de compra no puede ser procesada",5);
          }else{

            this.form.detallOrdenesCompras.push({
              id_orden_compra:self.ordenesCompraBusqueda.id_orden_compra,
              no_factura_proveedor:self.ordenesCompraBusqueda.text,
            });

            if(self.ordenesCompraBusqueda.orden_compra_productos){
              self.ordenesCompraBusqueda.orden_compra_productos.forEach((productox, key) => {

                if(productox){
                let cargochg = 0,descuento_efi=0,pesox=1;
                if(productox.orden_compra_producto_bateria.producto_detalles_baterias){
                  cargochg =productox.orden_compra_producto_bateria.producto_detalles_baterias.cargo_chico_grande;
                  descuento_efi = productox.orden_compra_producto_bateria.producto_detalles_baterias.descuento_eficacia;
                  pesox = Number(productox.orden_compra_producto_bateria.producto_detalles_baterias.peso_humedo);
                }

                if(pesox ===0){
                pesox=1
                }
                //let porcentaje_daix = Number(productox.orden_compra_producto_bateria.dai);
                //let porcentaje_iscx = Number(productox.orden_compra_producto_bateria.isc);


                  if(productox.cantidad_facturado>0 && pesox > 0 &&  productox.precio_facturado > 0){

                    let i = 0;
                    let keyx = 0;
                    if(self.form.detalleProductos){
                      self.form.detalleProductos.forEach((productox1, key) => {
                        //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
                        if(productox.id_producto===productox1.productox.id_producto){
                          i++;
                          keyx = key;
                        }
                      });
                    }

                    if(i === 0){
                      this.form.detalleProductos.push({
                        productox: productox.orden_compra_producto_bateria,
                        cantidad: Number(productox.cantidad_facturado),
                        peso: Number((pesox*productox.cantidad_facturado).toFixed(0)),
                        peso_unit: pesox,
                        valor_unitario: Number(productox.precio_facturado),
                        porcentaje_descuento: descuento_efi,
                        cargo_chico_grande: cargochg,
                        //porcentaje_dai :porcentaje_daix,
                        //porcentaje_isc : porcentaje_iscx,
                        dai_cordx :0,
                        isc_cordx : 0,
                        valor_fobx: 0,
                        total_cargox: 0,
                        valor_total_fobx:0,
                        fletex: 0,
                        segurox: 0,
                        cif_totalx: 0,
                        descuento_eox: 0,
                        costo_nuevo_dolx: 0,
                        costo_nuevo_cordx: 0,
                        costo_transportex: 0,
                        nota_debito_transportex: 0,
                        costo_nuevo_con_transportex: 0,
                        ssax:  0,
                        spex : 0,
                        daix :  0,
                        iscx :  0,
                        tsix:  0,
                        costo_agenciax: 0,
                        otros_gastos_agenciax: 0,
                        total_cordobasx: 0,
                        costo_unitario_cordobasx: 0,
                        costo_unitario_dolaresx: 0,
                      });
                    }else{
                          self.form.detalleProductos[keyx].cantidad = Number(self.form.detalleProductos[keyx].cantidad) + Number(productox.cantidad_facturado);
                          self.form.detalleProductos[keyx].valor_unitario = productox.precio_facturado;
                    }
                  }else{
                    alertify.warning("Los valores para cantidad, peso y valor unitario deben ser mayores que cero",5);
                  }
                }
              });
            }
          }
          }else{
            alertify.warning('Esta orden de compra ya se encuentra agregada')
          }
        }else{
          alertify.warning('Seleccione una orden de compra para continuar')
        }
      },

    },
    mounted() {
      this.cargarDatosOC();
      //this.obtenerProductosValidos();
      this.obtenerTC();

    }
  };
</script>

<style>
  .btn-agregar {
    margin-top:33px;
  }
</style>
