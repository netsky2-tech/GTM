<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Actualizar Entrada</div>
                        <div class="box-description">Formulario para actualizar entrada de productos</div>
                    </div>
                    <div class="row">

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Tipo entrada</label>
                                <v-select
                                        :options="tipos_entrada"
                                        label="descripcion"
                                        v-model="form.entrada_tipo"
                                ></v-select>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.entrada_tipo"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Código entrada <small>(Automático)</small></label>
                                <input class="form-control" readonly type="text" v-model="form.codigo_entrada">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.codigo_entrada"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Bodega</label>
                                <v-select
                                        :options="bodegas"
                                        label="descripcion"
                                        v-model="form.entrada_bodega"
                                        v-on:input="actualizar_listado_productos()"
                                ></v-select>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.entrada_bodega"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Zonas de costo</label>
                                <v-select
                                        label="descripcion"
                                        v-model="form.entrada_zona"
                                        :options="zonas"
                                ></v-select>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.bodega" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Proveedor</label>
                                <v-select
                                        :options="proveedores"
                                        label="nombre_comercial"
                                        v-model="form.entrada_proveedor"
                                ></v-select>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.entrada_proveedor"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Fecha entrada</label>
                                <datepicker :format="format" :language="es" :value="new Date()"
                                            @selected="onDateSelect"></datepicker>
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
                                <datepicker :format="format" :language="es" :value="new Date()" v-model="form.fecha_fabricacionx"
                                            @selected="onDateSelectFab"></datepicker>
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
                                <datepicker :format="format" :language="es" :value="new Date()" v-model="form.fecha_vencimientox"
                                            @selected="onDateSelectVen"></datepicker>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.fecha_vencimiento"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-3">
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

                    <div v-if="!form.entrada_bodega">
                        <div class="alert alert-info">
                            <span>Se requiere que seleccione una bodega para continuar.</span>
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
                                <v-select
                                        :options="productos"
                                        label="text"
                                        v-model="detalleForm.productox"
                                        @change="cargarPresentaciones"
                                ></v-select>
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

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Cantidad</label>
                                <input class="form-control" ref="cantidad_solicitada" type="number"
                                     min="0"  v-model.number="detalleForm.cantidad_solicitada">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.cantidad_solicitadax"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

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
                                        v-for="message in errorMessages.entrada_productos"
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
                                    <th >Relación UM estandar</th>
                                    <th >Conversión</th>

                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item, index) in form.entrada_productos">
                                    <tr>
                                        <td style="width: 2%">
                                            <button @click="eliminarLinea(item, index)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <input class="form-control" disabled v-model="item.text">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.productox.id_producto`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>


                                        <td>
                                            <input  class="form-control" disabled v-model.number="item.codigo_presentacion">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" disabled v-model.number="item.entrada_presentacion.unidad_medida">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" type="number" min="1" v-model.number="item.cantidad_solicitada">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.cantidad`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" disabled v-model.number="item.entrada_presentacion.simbolo_um">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <input  class="form-control" disabled v-model.number="item.entrada_presentacion.relacion_um_estandar">
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
                        <router-link :to="{ name: 'entradas' }" tag="button">
                            <button type="button" class="btn btn-default">Cancelar</button>
                        </router-link>
                        <button
                                :disabled="btnActionDraft !== 'Guardar Borrador'"
                                @click="form.es_borrador=true;actualizar()"
                                class="btn btn-dark"
                                type="button"
                        >{{ btnActionDraft }}
                        </button>
                        <button
                                :disabled="btnAction !== 'Actualizar y Emitir'"
                                @click="form.es_borrador=false;actualizar()"
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
    //import Datepicker from "vuejs-datepicker";
    import es from 'vuejs-datepicker/dist/locale/translations/es'
    import entradaIni from "../../api/entradas-inventario-inicial";
    import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
                es: es,
                format: "dd-MM-yyyy",
                bodegas: [],
                zonas: [],
                loading:true,
                msg: 'Cargando el contenido espere un momento',
                url : '/public'+loadingImage,   //It is important to import the loading image then use here
             //
                   proveedores: [],
                tipos_entrada: [],
                productos: [],


                detalleForm: {
                    productox: "",
                    cantidad_solicitada: 1,
                    precio_unitario: 0,
                    subtotal: 0,
                    total: 0,
                },

                form: {
                    es_borrador: true,
                    codigo_entrada: "",
                    descripcion_entrada: "",
                    fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
                    fecha_fabricacion: moment(new Date()).format("YYYY-MM-DD"),
                    fecha_vencimiento: moment(new Date()).format("YYYY-MM-DD"),
                    fecha_fabricacionx: new Date(),
                    fecha_vencimientox: new Date(),
                    entrada_tipo: "",
                    entrada_proveedor: "",
                    entrada_bodega: "",
                    entrada_productos: [],
                    numero_documento:'',
                },
                btnAction: "Actualizar y Emitir",
                btnActionDraft: "Guardar Borrador",
                errorMessages: []
            };
        },
        computed: {

            total_cantidad() {
                return this.form.entrada_productos.reduce((carry, item) => {
                    return (carry + Number(item.cantidad_solicitada))
                }, 0)
            },
            total_conversion() {
                return this.form.entrada_productos.reduce((carry, item) => {
                    return (carry + Number(item.conversionx))
                }, 0)
            },
            /*total_subt() {
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
            },*/
        },
        methods: {
            obtenerEntrada() {
                var self = this
                entrada.obtenerEntrada({
                    id_entrada: this.$route.params.id_entrada
                }, data => {
                    self.form = data.entrada
                    self.form.fecha_fabricacionx = data.entrada.fecha_fabricacion;
                    self.form.fecha_vencimientox = data.entrada.fecha_vencimiento;
                    if (self.form.estado !== 99) {
                        alertify.error("La entrada ya no puede ser actualizada", 5);
                        this.$router.push({
                            name: "entradas"
                        });
                    }
                })
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
            sub_total(itemX) {
                itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_solicitada)).toFixed(2));
                itemX.total = itemX.subtotal;
                if (!isNaN(itemX.total)) {
                    return itemX.total;
                } else return 0;
            },
            cargar_detalles_producto() {
                var self = this
                //  console.log(self.detalleForm.productox)
                if (self.detalleForm.productox)
                    self.detalleForm.precio_unitario = self.detalleForm.productox.costo_estandar;
            },
            actualizar_listado_productos() {
                var self = this;
                self.form.entrada_productos.forEach((producto, key) => {
                    producto.id_bodega_producto = 0;
                });
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
            calcularConversion(itemX) {
                itemX.conversionx= Number((Number(itemX.cantidad_solicitada)* Number(itemX.escalar)).toFixed(2));
                if(!isNaN(itemX.conversionx)){
                    return itemX.conversionx;
                }
                else return 0;
            },
            obtenerTodosProveedores() {
                var self = this;
                proveedor.obtenerTodosProveedores(
                    data => {
                        self.proveedores = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            obtenerTodasBodegas() {
                var self = this;
                bodega.obtenerTodasBodegas(
                    data => {
                        self.bodegas = data.bodegas;
                        self.zonas = data.zonas;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            obtenerTodosTiposEntrada() {
                var self = this;
                tipo.obtenerTodosTiposEntrada(
                    data => {
                        self.tipos_entrada = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            obtenerProductosValidos() {
                var self = this;
                producto.obtenerProductosValidos(
                    data => {
                        self.productos = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            agregarDetalle() {
                let self = this;
                if (this.detalleForm.productox) {
                    if (this.detalleForm.cantidad_solicitada > 0) {

                        let i = 0;
                        let keyx = 0;
                        if (self.form.entrada_productos) {
                            self.form.entrada_productos.forEach((productox, key) => {
                                //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
                                if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
                                    i++;
                                    keyx = key;
                                }
                            });
                        }

                        if (i === 0) {
                            this.form.entrada_productos.push({
                                id_bodega_producto: 0,
                                id_producto: this.detalleForm.productox.id_producto,
                                text: this.detalleForm.productox.text,
                                codigo_presentacion: this.detalleForm.presentacionx.codigo,
                                entrada_presentacion: this.detalleForm.presentacionx,
                                cantidad_solicitada: this.detalleForm.cantidad_solicitada,
                                relacion_um_estandar: this.detalleForm.presentacionx.relacion_um_estandar,
                                codigo_producto: this.detalleForm.productox.codigo_sistema,
                                descripcion_producto: this.detalleForm.productox.nombre_comercial,
                                unidad_medida: this.detalleForm.presentacionx.unidad_medida,
                                codigo_producto: this.detalleForm.productox.codigo_sistema,
                                descripcion_producto: this.detalleForm.productox.nombre_comercial,
                            });

                            this.detalleForm.productox = '';
                            this.detalleForm.presentacionx = '';
                            this.detalleForm.cantidad_solicitada = 0;

                        } else {
                            this.$swal.fire({
                                title: 'El producto ya existe en el detalle, desea sumar la nueva cantidad al monto existente?',
                                text: "También se sobreescribirá el costo unitario",
                                type: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Si, confirmar',
                                cancelButtonText: 'Cancelar'
                            }).then((result) => {
                                if (result.value) {
                                    self.form.entrada_productos[keyx].cantidad_solicitada = self.form.entrada_productos[keyx].cantidad_solicitada + self.detalleForm.cantidad_solicitada;
                                    this.detalleForm.productox = '';
                                    this.detalleForm.presentacionx = '';
                                    this.detalleForm.cantidad_solicitada = 0;

                                }
                            })
                        }


                    } else {
                        alertify.warning("Los valores para cantidad_solicitada", 5);
                    }
                } else {
                    alertify.warning("Debe seleccionar un producto", 5);
                }
            },
            eliminarLinea(item, index) {
                if (this.form.entrada_productos.length >= 1) {
                    this.form.entrada_productos.splice(index, 1);

                } else {
                    this.form.entrada_productos = [];
                }
            },

            actualizar() {
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
                            entrada.actualizar(
                                self.form,
                                data => {
                                    this.$swal.fire(
                                        'Entrada Emitida!',
                                        'La entrada fue actualizada y emitida correctamente.',
                                        'success'
                                    )

                                    this.$router.push({
                                        name: "entradas"
                                    });
                                },
                                err => {
                                    self.errorMessages = err;
                                    self.btnAction = "Actualizar y Emitir";
                                    self.btnActionDraft = "Guardar Borrador";
                                }
                            );
                        } else {
                            self.btnAction = "Actualizar y Emitir";
                            self.btnActionDraft = "Guardar Borrador";
                        }
                    })
                } else {

                    entrada.actualizar(
                        self.form,
                        data => {
                            this.$swal.fire(
                                'Borrador de Entrada Registrado!',
                                'La Entrada fue Registrada correctamente.',
                                'success'
                            )
                            this.$router.push({
                                name: "entradas"
                            });
                        },
                        err => {
                            self.errorMessages = err;
                            self.btnAction = "Actualizar y Emitir";
                            self.btnActionDraft = "Guardar Borrador";
                        }
                    );
                }
            },
        },
        mounted() {
            this.obtenerTodasBodegas();
            this.obtenerTodosProveedores();
            this.obtenerTodosTiposEntrada();
            this.obtenerProductosValidos();
            this.obtenerEntrada();
        }
    };
</script>
<style>
    .btn-agregar {
        margin-top: 33px;
    }
</style>