<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Registrar salida</div>
                        <div class="box-description">Formulario para registrar salidas de Productos</div>
                    </div>
                    <div class="row">

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Tipo salida</label>
                                <v-select
                                        :options="tipos_salida"
                                        label="descripcion"
                                        v-model="form.tipo_salida"
                                ></v-select>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.tipo_salida"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <!--  <div class="col-sm-4">
                            <div class="form-group">
                              <label for>Código salida <small>(Automático)</small></label>
                              <input class="form-control" type="text" v-model="form.codigo_salida">
                              <ul class="error-messages">
                                <li
                                        :key="message"
                                        v-for="message in errorMessages.codigo_salida"
                                        v-text="message"
                                ></li>
                              </ul>
                            </div>
                          </div>-->

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Bodega</label>
                                <v-select
                                        label="descripcion"
                                        v-model="form.bodega"
                                        :options="bodegas"
                                        v-on:input="obtenerProductosBodega()"
                                ></v-select>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Zonas de costo</label>
                                <v-select
                                        label="descripcion"
                                        v-model="form.zona"
                                        :options="zonas"
                                ></v-select>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Cliente:</label>
                                <typeahead :initial="form.cliente" :params="{es_deudor: false}" :trim="80" :url="clientesBusquedaURL" @input="seleccionarCliente" style="width: 100%;"></typeahead>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.cliente"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <!--<div class="col-sm-4">
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
                        </div>-->

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Fecha salida</label>
                                <datepicker :language="es" :disabled="false" :value="new Date()" v-model="fechax" @selected="onDateSelect"
                                            :format="format"></datepicker>
                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.fecha_salida"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Orden de venta</label>
                                <input type="text" class="form-control" v-model="form.orden_venta">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.orden_venta"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Factura</label>
                                <input type="text" class="form-control" v-model="form.no_factura">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.no_factura"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Remisión</label>
                                <input type="text" class="form-control" v-model="form.no_remision">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.no_factura"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-9">
                            <div class="form-group">
                                <label for>Observaciones salida</label>
                                <input class="form-control" type="text" v-model="form.descripcion_salida">
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
                            <span>Se requiere que seleccione una bodega para continuar.</span>
                        </div>
                        <hr>
                    </div>

                    <div class="alert alert-success">
                        <span><strong>Detalle de productos</strong></span>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
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
                                             v-on:input="cargarPresentaciones"
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
                        <!--<div class="col-sm-4">
                            <div class="form-group">
                                <label for>Presentaciones de producto</label>

                                &lt;!&ndash;<typeahead style="width: 100%;" :initial="detalleForm.productox" :trim="80" :url="productosBusquedaURL" @input="seleccionarProducto"></typeahead>&ndash;&gt;

                                <v-select :options="form.presentaciones" ref="presentacionx" label="codigo" placeholder="Selecciona una presentacion" v-model="detalleForm.presentacionx"></v-select>

                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.presentacionx"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>-->

                        <div class="col-sm-2">
                            <div class="form-group">
                                <label for>Cantidad</label>
                                <input @change="detalleForm.cantidad = Math.max(Math.min(Math.round(detalleForm.cantidad), detalleForm.productox.cantidad_disponible), 1)"
                                       class="form-control" ref="cantidad" type="number"
                                       v-model.number="detalleForm.cantidad">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.cantidadx"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>



                        <!--<div class="col-sm-2">
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
                                <button @click="agregarDetalle" class="btn btn-info btn-agregar" ref="agregar">Agregar
                                    Producto
                                </button>
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
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th >Producto</th>
                                    <th >Presentación</th>
                                    <th >UM</th>
                                    <th >Cantidad</th>
                                    <th >UM Estandar</th>
                                    <th >Escalar</th>
                                    <th >Total</th>
                                    <!--  <th >Costo Unitario</th>

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
                                            <input class="form-control" disabled v-model="item.productox.nombre_comercial">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.productox.id_producto`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>


                                        <td>
                                            <input  class="form-control" disabled v-model="item.presentacionx.codigo">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" disabled v-model.number="item.presentacionx.unidad_medida">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" type="number" min="1" readonly v-model.number="item.cantidad">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.cantidad`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" disabled v-model.number="item.presentacionx.simbolo_um">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" disabled v-model.number="item.presentacionx.escalar">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <strong>{{calcularConversion(item)|formatMoney(2)}}</strong>
                                        </td>



                                    </tr>
                                    <tr></tr>
                                </template>
                                </tbody>
                                <tfoot>

                                <tr>
                                    <td class="item-footer" colspan="4"> Total Unidades</td>
                                    <td  class="item-footer" colspan="3">
                                        <strong>{{total_cantidad}}</strong>
                                    </td>
                                    <td  class="item-footer">
                                        <strong>K {{total_conversion|formatMoney(2)}}</strong>
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
                                :disabled="btnAction != 'Registrar' ? true : false"
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
    import bodega from "../../api/bodegas";
    import tipo from "../../api/tipo_salida";

    import proveedor from "../../api/proveedores";
    import salida from "../../api/salidas";
    //import Datepicker from "vuejs-datepicker";
    import es from 'vuejs-datepicker/dist/locale/translations/es'
    import loadingImage from '../../assets/images/block50.gif'
    import entradaIni from "../../api/entradas-inventario-inicial";

    export default {
        /*components: {
          Datepicker
        },*/
        data() {
            return {
              loading:false,
              msg: 'Cargando los datos, espere un momento',
              url : '/public'+loadingImage,   //It is important to import the loading image then use here
                es: es,
                format: "dd-MM-yyyy",
                bodegas: [],
                zonas: [],
                proveedores: [],
                tipos_salida: [],
                productos: [],
                clientes: [],
                clientesBusquedaURL: "/ventas/clientes/buscar",
                fechax: new Date(),

                detalleForm: {
                    productox: "",
                    presentacionx: "",
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
                    proveedor: "",
                    bodega: "",
                    zona: "",
                    numero_documento:'',
                    detalleProductos: [],
                    orden_venta:'',
                    no_remision:'',
                    factura:''
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
            total_conversion() {
                return this.form.detalleProductos.reduce((carry, item) => {
                    return (carry + Number(item.conversionx))
                }, 0)
            },
            total_subt() {
                return this.form.detalleProductos.reduce((carry, item) => {
                        return (carry + Number(item.subtotal.toFixed(2)));
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
                const cliente = e.target.value;
                var self = this;
                self.form.cliente = cliente;
            },
            cargarPresentaciones() {
                var self = this;
                self.loading = true;
                salida.cargarPresentacionesProductos({
                    id_producto: self.detalleForm.productox.id_producto,
                    id_presentacion: self.detalleForm.productox.id_presentacion
                }, data => {
                    if(data.presentaciones !== null){
                        self.detalleForm.presentacionx = data.presentaciones;
                    }else{
                        alertify.warning("No se encuentran presentaciones para este producto.",5);
                        self.form.presentaciones = [];
                    }
                    self.loading = false;
                }, err => {
                    if(err.id_producto){
                        self.form.presentaciones = [];
                        alertify.warning(err.id_producto,5);
                        self.loading = false;
                    }
                })
                //self.$refs.presentacionx.focus();
            },
            calcularConversion(itemX) {
                itemX.conversionx= Number((Number(itemX.cantidad)* Number(itemX.presentacionx.escalar)).toFixed(2));
                if(!isNaN(itemX.conversionx)){
                    return itemX.conversionx;
                }
                else return 0;
            },
            sub_total(itemX) {
                itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad)).toFixed(2));
                itemX.total = itemX.subtotal;
                if (!isNaN(itemX.total)) {
                    return itemX.total;
                } else return 0;
            },
            cargar_detalles_producto() {
                var self = this
                if (self.detalleForm.productox)
                    self.detalleForm.cantidad = 1;
                self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
                self.$refs.cantidad.focus();
            },
            onDateSelect(date) {
                this.form.fecha_salida = moment(date).format("YYYY-MM-DD"); //
            },
            obtenerTodosProveedores() {
                var self = this;
                proveedor.obtenerTodosProveedores(
                    data => {
                        self.proveedores = data;
                        self.form.proveedor = self.proveedores[0];
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            obtenerTodasBodegasProductos() {
                var self = this;
                bodega.obtenerTodasBodegasProductos(
                    data => {
                        self.bodegas = data.bodegas;
                        self.form.bodega = self.bodegas[0];

                        self.productos = [];
                        self.form.bodega.productos_bodega.forEach((bodega_producto, key) => {
                            self.productos.push({
                                codigo_sistema: bodega_producto.producto.codigo_sistema,
                                costo_promedio: Number(bodega_producto.producto.costo_promedio),
                                descripcion: bodega_producto.producto.descripcion,
                                id_producto: bodega_producto.producto.id_producto,
                                id_presentacion: bodega_producto.id_presentacion,
                                codigo_presentacion: bodega_producto.codigo_presentacion,
                                id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
                                nombre_comercial: bodega_producto.producto.nombre_comercial,
                                cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
                                unidad_medida: bodega_producto.producto.unidad_medida,
                                text: ' ( ' + bodega_producto.no_lote + ' ) ' + bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.codigo_presentacion,
                            });
                        });

                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            obtenerTodosTiposSalida() {
                var self = this;
                tipo.obtenerTodosTiposSalida(
                    data => {
                        self.tipos_salida = data;
                        self.form.tipo_salida = self.tipos_salida[0];
                    },
                    err => {
                        console.log(err);
                    }
                );
            },

            obtenerProductosBodega() {
                var self = this;
                self.form.detalleProductos = [];
                self.productos = [];

                self.form.bodega.productos_bodega.forEach((bodega_producto, key) => {

                    self.productos.push({
                        codigo_sistema: bodega_producto.producto.codigo_sistema,
                        costo_promedio: Number(bodega_producto.producto.costo_promedio),
                        descripcion: bodega_producto.producto.descripcion,
                        id_producto: bodega_producto.producto.id_producto,
                        id_presentacion: bodega_producto.id_presentacion,
                        codigo_presentacion: bodega_producto.codigo_presentacion,
                        id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
                        nombre_comercial: bodega_producto.producto.nombre_comercial,
                        cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
                        unidad_medida: bodega_producto.producto.unidad_medida,
                        nombre_full: bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.producto.codigo_sistema,
                        text: ' ( ' + bodega_producto.no_lote + ' ) ' + bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.codigo_presentacion,
                    });

                });

            },
            agregarDetalle() {
                var self = this;
                if (self.detalleForm.productox) {
                    if (self.detalleForm.cantidad > 0 /*&& self.detalleForm.precio_unitario > 0*/) {
                        let i = 0;
                        let keyx = 0;
                        if (self.form.detalleProductos) {
                            self.form.detalleProductos.forEach((productox, key) => {
                                if (self.detalleForm.productox.id_bodega_producto === productox.productox.id_bodega_producto) {
                                    i++;
                                    keyx = key;
                                }
                            });
                        }
                        if (i === 0) {
                            self.form.detalleProductos.push({
                                productox: self.detalleForm.productox,
                                presentacionx: self.detalleForm.presentacionx,
                                cantidad: self.detalleForm.cantidad,
                                conversionx:0,
                            });

                        } else {
                            let nuevo_total = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
                            if (nuevo_total <= self.form.detalleProductos[keyx].cantidad_disponible) {
                                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
                            } else {
                                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].productox.cantidad_disponible;
                            }
                        }

                        this.detalleForm.productox='';
                        this.detalleForm.presentacionx='';
                        this.detalleForm.cantidad = 0;

                    } else {
                        alertify.warning("Los valores para cantidad deben ser mayores que cero", 5);
                    }
                } else {
                    alertify.warning("Debe seleccionar un producto", 5);
                }
            },
            eliminarLinea(item, index) {
                if (this.form.detalleProductos.length >= 1) {
                    this.form.detalleProductos.splice(index, 1);

                } else {
                    this.form.detalleProductos = [];
                }
            },

            registrar() {
                var self = this;
                self.btnAction = "Registrando, espere....";
                self.$swal.fire({
                    title: 'Esta seguro de registrar esta salida?',
                    text: "Esta acción no se puede deshacer",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, confirmar',
                    cancelButtonText:'Cancelar'
                }).then((result) => {
                    if (result.value) {
                        self.loading = true;
                        salida.registrar(
                            self.form,
                            data => {
                                self.loading = false;
                                this.$router.push({
                                    name: "salidas"
                                });
                            },
                            err => {
                                self.loading = false;
                                self.errorMessages = err;
                                self.btnAction = "Registrar";
                            }
                        );
                    }else{
                        self.btnAction = "Registrar";
                    }
                })
            },

            nueva() {
                var self = this;
                self.loading=true;
                salida.nueva({}, data => {
                        //self.clientes = data.clientes;
                        self.tipos_salida = data.tipos_salida;
                        self.form.tipo_salida = self.tipos_salida[0];
                        //self.proveedores = data.proveedores;
                        //self.form.proveedor = self.proveedores[0];

                        self.bodegas = data.bodegas;
                        self.zonas = data.zonas;
                        self.form.zona = data.zonas[0];
                        self.form.bodega = self.bodegas[1];

                        self.productos = [];
                        self.form.bodega.productos_bodega.forEach((bodega_producto, key) => {
                            self.productos.push({
                                codigo_sistema: bodega_producto.producto.codigo_sistema,
                                costo_promedio: Number(bodega_producto.producto.costo_promedio),
                                descripcion: bodega_producto.producto.descripcion,
                                id_producto: bodega_producto.producto.id_producto,
                                id_presentacion: bodega_producto.id_presentacion,
                                codigo_presentacion: bodega_producto.codigo_presentacion,
                                id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
                                nombre_comercial: bodega_producto.producto.nombre_comercial,
                                cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
                                unidad_medida: bodega_producto.producto.unidad_medida,
                                nombre_full: bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.producto.codigo_sistema,
                                text: ' ( ' + bodega_producto.no_lote + ' ) ' + bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.codigo_presentacion,
                            });
                        });

                        self.loading = false;

                    },
                    err => {
                        console.log(err);
                    })

            },


        },
        mounted() {
            this.nueva()

            //this.obtenerTodasBodegasProductos();
            //this.obtenerTodosProveedores();
            //this.obtenerTodosTiposSalida();
        }
    };
</script>
<style>
    .btn-agregar {
        margin-top: 33px;
    }
</style>
