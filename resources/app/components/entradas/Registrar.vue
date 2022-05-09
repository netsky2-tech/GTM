<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Crear Nueva Entrada</div>
                        <div class="box-description">Formulario para registrar entrada de productos</div>
                    </div>
                    <div class="row">

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Tipo entrada</label>
                                <v-select
                                        :options="tipos_entrada"
                                        label="descripcion"
                                        v-model="form.tipo_entrada"
                                ></v-select>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.tipo_entrada"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <!--  <div class="col-sm-4">
                            <div class="form-group">
                              <label for>Código entrada <small>(Automático)</small></label>
                              <input class="form-control" type="text" v-model="form.codigo_entrada">
                              <ul class="error-messages">
                                <li
                                        :key="message"
                                        v-for="message in errorMessages.codigo_entrada"
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
                                ></v-select>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Zonas de costo</label>
                                <v-select label="descripcion" v-model="form.zona" :options="zonas"></v-select>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.zona" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Proveedor</label>
                                <!--<v-select label="nombre_comercial" v-model="form.proveedor" :options="proveedores"></v-select>-->
                                <typeahead :initial="form.proveedor" :trim="80" :url="proveedoresBusquedaURL" @input="seleccionarProveedor"  style="width: 100%;"></typeahead>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.proveedor" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Fecha entrada</label>
                                <datepicker :format="format" :language="es" :value="new Date()" v-model="form.fecha_entradax" @selected="onDateSelect"></datepicker>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.fecha_entrada"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>
                        <!--<div class="col-sm-3">
                            <div class="form-group">
                                <label for>Número documento de entrada</label>
                                <input type="text" class="form-control" v-model="form.numero_documento">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.numero_documento"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>-->
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Orden de compra</label>
                                <input type="text" class="form-control" v-model="form.orden_compra">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.orden_comra"
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
                                <label for>No. lote</label>
                                <input type="text" class="form-control" v-model="form.no_lote">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.no_lote"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Fecha fabricación</label>
                                <datepicker :format="format" :language="es" :value="new Date()" v-model="form.fecha_fabricacionx"  @selected="onDateSelectFab"></datepicker>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.fecha_fabricacion"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Fecha vencimiento</label>
                                <datepicker :format="format" :language="es" :value="new Date()" v-model="form.fecha_vencimientox" @selected="onDateSelectVen"></datepicker>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.fecha_vencimiento"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for>Observaciones entrada</label>
                                <input class="form-control" type="text" v-model="form.descripcion_entrada">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.descripcion_entrada"
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

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Producto</label>

                                <!--<typeahead style="width: 100%;" :initial="detalleForm.productox" :trim="80" :url="productosBusquedaURL" @input="seleccionarProducto"></typeahead>-->

                                <v-select :options="productos" label="text" placeholder="Selecciona un producto" v-model="detalleForm.productox" @change="cargarPresentaciones"></v-select>

                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.productox"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Presentaciones de producto</label>

                                <!--<typeahead style="width: 100%;" :initial="detalleForm.productox" :trim="80" :url="productosBusquedaURL" @input="seleccionarProducto"></typeahead>-->

                                <v-select :options="form.presentaciones" ref="presentacionx" label="codigo" placeholder="Selecciona una presentacion" v-model="detalleForm.presentacionx"></v-select>

                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.presentacionx"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-2">
                            <div class="form-group">
                                <label for>Cantidad</label>
                                <input class="form-control" ref="cantidad" @keydown.enter="cambiarFocoCantidad"
                                       type="number" min="0" v-model.number="detalleForm.cantidad">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.cantidadx"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>


                        <!--<div class="col-sm-3">
                            <div class="form-group">
                                <label for>Precio Unitario</label>
                                <div class="input-group">
                                    <div class="input-group-addon">C$
                                    </div>
                                    <input class="form-control" type="number" ref="precio_unitario"
                                           @keydown.enter="cambiarFocoPrecioUnitario" min="0"
                                           v-model.number="detalleForm.precio_unitario">
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
                                    <th >Conversión</th>

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
                                                        v-for="message in errorMessages[`conteo_productos.${index}.productox.id_producto`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>


                                        <td>
                                            <input  class="form-control" disabled v-model.number="item.presentacionx.codigo">
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
                                        <strong>K {{total_conversion}}</strong>
                                    </td>
                                </tr>

                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div class="content-box-footer text-right">
                        <router-link tag="button" :to="{ name: 'entradas' }">
                            <button type="button" class="btn btn-default">Cancelar</button>
                        </router-link>
                        <button
                                :disabled="btnActionDraft !== 'Guardar Borrador'"
                                @click="form.es_borrador=true;registrar()"
                                class="btn btn-dark"
                                type="button"
                        >{{ btnActionDraft }}
                        </button>
                        <button
                                :disabled="btnAction !== 'Emitir'"
                                @click="form.es_borrador=false;registrar()"
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
    import producto from "../../api/productos";
    import bodega from "../../api/bodegas";
    import tipo from "../../api/tipo_entrada";

    import proveedor from "../../api/proveedores";
    import entrada from "../../api/entradas";
    import entradaIni from "../../api/entradas-inventario-inicial";
    //import Datepicker from "vuejs-datepicker";
    import loadingImage from '../../assets/images/block50.gif'
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
                zonas: [],
                proveedores: [],
                proveedoresBusquedaURL: "/proveedores/buscar",
                tipos_entrada: [],
                productos: [],
                msg: 'Cargando el contenido espere un momento',
                url : '/public'+loadingImage,   //It is important to import the loading image then use here
                loading:true,


                detalleForm: {
                    productox: '',
                    cantidad: 1,
                    precio_unitario: 0,
                    subtotal: 0,
                    total: 0,
                },

                form: {
                    codigo_entrada: "",
                    descripcion_entrada: "",
                    fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
                    fecha_entradax: new Date(),
                    fecha_fabricacion: moment(new Date()).format("YYYY-MM-DD"),
                    fecha_fabricacionx: new Date(),
                    fecha_vencimiento: moment(new Date()).format("YYYY-MM-DD"),
                    fecha_vencimientox: new Date(),
                    tipo_entrada: "",
                    bodega: "",
                    zona: "",
                    proveedor: {},
                    detalleProductos: [],
                    es_borrador: false,
                    numero_documento:'',
                    no_factura:'',
                    no_lote:'',
                    orden_compra:'',
                    conversionx:0,
                },
                btnAction: "Emitir",
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
            seleccionarProveedor(e) {
                const proveedor = e.target.value;
                var self = this;
                self.form.proveedor = proveedor;
            },
            cargarPresentaciones() {
                var self = this;
                self.loading = true;
                entradaIni.cargarPresentacionesProductos({
                    id_producto: self.detalleForm.productox.id_producto,
                }, data => {
                    if(data.presentaciones !== null){
                        self.form.presentaciones = data.presentaciones;
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

            labelproducto(item) {
                let cod_barra = item.codigo_sistema == null ? 'N/A' : item.codigo_sistema;
                return `${item.nombre_comercial} - ${cod_barra}`
            },

            cambiarFocoCantidad() {
                var self = this;
                self.$refs.precio_unitario.focus();
            },
            cambiarFocoPrecioUnitario() {
                var self = this;
                self.$refs.agregar.focus()
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
                //console.log(self.detalleForm.productox)
                if (self.detalleForm.productox) {
                    self.detalleForm.precio_unitario = Number(self.detalleForm.productox.costo_estandar);
                    self.$refs.cantidad.focus();
                } else {
                    console.log('producto no valido');
                }
            },
            onDateSelect(date) {
                //console.log(date); //
                this.form.fecha_entrada = moment(date).format("YYYY-MM-DD"); //
            },
            onDateSelectFab(date) {
                //console.log(date); //
                this.form.fecha_fabricacion = moment(date).format("YYYY-MM-DD"); //
            },
            onDateSelectVen(date) {
                //console.log(date); //
                this.form.fecha_vencimiento = moment(date).format("YYYY-MM-DD"); //
            },
            obtenerTodosProveedores() {
                var self = this;
                proveedor.obtenerTodosProveedores(
                    data => {
                        //self.proveedores = data;
                        //self.form.proveedor = self.proveedores[0];
                        this.loading = false;
                    },
                    err => {
                        this.loading = false;
                        console.log(err);
                    }
                );
            },
            obtenerTodasBodegas() {
                var self = this;
                bodega.obtenerTodasBodegas(
                    data => {
                        self.bodegas = data.bodegas;
                        self.form.bodega = self.bodegas[0];
                        self.zonas = data.zonas;
                        this.loading = false;
                    },
                    err => {
                        this.loading = false;
                        console.log(err);
                    }
                );
            },
            obtenerTodosTiposEntrada() {
                var self = this;
                tipo.obtenerTodosTiposEntrada(
                    data => {
                        self.tipos_entrada = data;
                        self.form.tipo_entrada = self.tipos_entrada[1];
                        this.loading = false;
                    },
                    err => {
                        this.loading = false;
                        console.log(err);
                    }
                );
            },
            obtenerProductosValidos() {
                var self = this;
                producto.obtenerProductosValidos(
                    data => {
                        self.productos = data;
                        this.loading = false;
                        //self.detalleForm.productox=self.productos[0];
                    },
                    err => {
                        this.loading = false;
                        console.log(err);
                    }
                );
            },
            agregarDetalle() {
                let self = this;
                if(this.detalleForm.productox && this.detalleForm.presentacionx){
                    if(this.detalleForm.cantidad>0){
                        let i = 0;
                        let keyx = 0;
                        /*if(self.form.detalleProductos){
                            self.form.detalleProductos.forEach((presentacionx, key) => {
                                //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
                                if(self.form.detalleProductos.presentacionx.id_presentacion===presentacionx.presentacionx.id_presentacion){
                                    i++;
                                    keyx = key;
                                }
                            });
                        }*/

                        if(i === 0){
                            this.form.detalleProductos.push({
                                productox: this.detalleForm.productox,
                                presentacionx: this.detalleForm.presentacionx,
                                cantidad: this.detalleForm.cantidad,
                                escalar: this.detalleForm.presentacionx.escalar,
                                conversionx:0
                            });
                            this.detalleForm.productox='';
                            this.detalleForm.presentacionx='';
                            this.detalleForm.cantidad = 0;

                        }else{
                            this.$swal.fire({
                                title: 'El producto ya existe en el detalle, desea sumar la nueva cantidad al monto existente?',
                                text: "Revise bien la información",
                                type: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Si, confirmar',
                                cancelButtonText:'Cancelar'
                            }).then((result) => {
                                if (result.value) {
                                    self.form.detalleProductos[keyx].cantidad = Number(self.form.detalleProductos[keyx].cantidad) + self.detalleForm.cantidad;
                                    this.detalleForm.productox='';
                                    this.detalleForm.cantidad=0;
                                }
                            })
                        }

                    }else{
                        alertify.warning("Los valores para cantidad deben ser mayores a cero",5);
                    }
                }else{
                    alertify.warning("Verifique que tiene seleccionado un producto y una presentación",5);
                }
            },
            eliminarLinea(item, index) {
                if (this.form.detalleProductos.length >= 1) {
                    this.form.detalleProductos.splice(index, 1);

                } else {
                    this.form.detalleProductos = [];
                }
            },
            calcularConversion(itemX) {
                itemX.conversionx= Number((Number(itemX.cantidad)* Number(itemX.escalar)).toFixed(2));
                if(!isNaN(itemX.conversionx)){
                    return itemX.conversionx;
                }
                else return 0;
            },

            registrar() {
                var self = this;
                self.btnAction = "Registrando, espere....";
                self.btnActionDraft = "Guardando, espere....";

                if (self.form.es_borrador === false) {
                    self.$swal.fire({
                        title: 'Esta seguro de guardar y emitir la entrada?',
                        text: "Esta acción no se puede deshacer",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, confirmar',
                        cancelButtonText: 'Cancelar'
                    }).then((result) => {
                        if (result.value) {
                            entrada.registrar(
                                self.form,
                                data => {
                                    // alertify.success("Entrada registrada correctamente",5);
                                    this.$swal.fire(
                                        'Entrada Registrada!',
                                        'La Entrada fue Registrada correctamente.',
                                        'success'
                                    )
                                    this.loading = false;
                                    this.$router.push({
                                        name: "entradas"
                                    });
                                },
                                err => {
                                    this.loading = false;
                                    self.errorMessages = err;
                                    self.btnAction = "Emitir";
                                    self.btnActionDraft = "Guardar Borrador";
                                }
                            );
                        } else {
                            self.btnAction = "Actualizar y Emitir";
                            self.btnActionDraft = "Guardar Borrador";
                        }
                    })
                } else {

                    entrada.registrar(
                        self.form,
                        data => {
                            // alertify.success("Entrada registrada correctamente",5);
                            this.$swal.fire(
                                'Borrador de Entrada Registrado!',
                                'La Entrada fue Registrada correctamente.',
                                'success'
                            )
                            this.$router.push({
                                name: "entradas"
                            });
                            this.loading = false;
                        },
                        err => {
                            this.loading = false;
                            self.errorMessages = err;
                            self.btnAction = "Emitir";
                            self.btnActionDraft = "Guardar Borrador";
                        }
                    );
                }
            },
        },
        mounted() {
            //this.obtenerNumeroEntrada();
            this.obtenerTodasBodegas();
            //this.obtenerTodosProveedores();
            this.obtenerTodosTiposEntrada();
            this.obtenerProductosValidos();
        }
    };
</script>
<style>
    .btn-agregar {
        margin-top: 33px;
    }
</style>
