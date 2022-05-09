<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Actualizar Salida</div>
                        <div class="box-description">Formulario para actualizar Requisa de productos</div>
                    </div>
                    <div class="row">

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for=""> Trabajador solicitante</label>
                                <div class="form-group">
                                    <typeahead :initial="form.requisa_trabajador" :trim="80"
                                               :url="trabajadoresBusquedaURL" @input="seleccionarTrabajador"
                                               style="width: 100%;"></typeahead>

                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.requisa_trabajador"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for=""> Proveedor</label>
                                <div class="form-group">
                                    <typeahead :initial="form.requisa_proveedor" :trim="80"
                                               :url="proveedoresBusquedaURL" @input="seleccionarProveedor"
                                               style="width: 100%;"></typeahead>

                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.requisa_proveedor"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for=""> Sucursal</label>
                                <div class="form-group">
                                    <typeahead :initial="form.requisa_sucursal" :trim="80" :url="sucursalesBusquedaURL"
                                               @input="seleccionarSucursal" style="width: 100%;"></typeahead>

                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.requisa_sucursal"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for=""> Area</label>
                                <div class="form-group">
                                    <typeahead :initial="form.requisa_area" :trim="80" :url="areasBusquedaURL"
                                               @input="seleccionarArea" style="width: 100%;"></typeahead>

                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.requisa_area"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>


                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for=""> Bodega</label>
                                <div class="form-group">
                                    <typeahead :initial="form.requisa_bodega" :trim="80" :url="bodegasBusquedaURL"
                                               @input="seleccionarBodega" style="width: 100%;"></typeahead>

                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.requisa_bodega"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Fecha Solicitud</label>
                                <datepicker :language="es" :value="new Date()" @selected="onDateSelect"
                                            :format="format"></datepicker>
                                <ul class="error-messages">
                                    <li
                                            v-for="message in errorMessages.fecha_solicitud"
                                            :key="message"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>No. Factura</label>
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

                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for>Observaciones Requisa</label>
                                <input type="text" class="form-control" v-model="form.descripcion_requisa">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.descripcion_requisa"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div v-if="!form.requisa_bodega">
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
                                <label for=""> Producto</label>
                                <div class="form-group">
                                    <typeahead :initial="detalleForm.productox"
                                               :params="{id_bodega: form.requisa_bodega.id_bodega}" :trim="80"
                                               :url="productosBodegaBusquedaURL" @input="cargar_detalles_producto"
                                               style="width: 100%;"></typeahead>
                                </div>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.productox" v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-3">
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

                        <div class="col-sm-3">
                            <div class="form-group">
                                <label for>Costo Promedio</label>
                                <div class="input-group">
                                    <div class="input-group-addon">C$
                                    </div>
                                    <input class="form-control" readonly type="number"
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
                                        v-for="message in errorMessages.detalleProductos"
                                        v-text="message"
                                ></li>
                            </ul>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Costo Unitario</th>

                                    <th>SubTotal</th>

                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item, index) in form.requisa_productos">
                                    <tr>
                                        <td style="width: 2%">
                                            <button @click="eliminarLinea(item, index)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <input class="form-control" disabled
                                                   v-model="item.bodega_producto.producto_simple.descripcion">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`requisa_productos.${index}.productox.id_producto`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>


                                        <td>
                                            <input @change="item.cantidad_solicitada = Math.max(Math.min(Math.round(item.cantidad_solicitada), item.productox.cantidad_disponible), 1)"
                                                   class="form-control" type="number"
                                                   v-model.number="item.cantidad_solicitada">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`requisa_productos.${index}.cantidad_solicitada`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>


                                        <td>
                                            <input class="form-control" readonly type="number"
                                                   v-model.number="item.precio_unitario">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`requisa_productos.${index}.precio_unitario`]"
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
                                    <td colspan="3"></td>
                                    <td>Subtotal</td>
                                    <td><strong>C$ {{total_subt | formatMoney(2)}}</strong></td>
                                </tr>
                                <tr>
                                    <td class="item-footer" colspan="2"> Total Unidades</td>
                                    <td class="item-footer">
                                        <strong>{{total_cantidad_solicitada}}</strong>
                                    </td>
                                    <td>Total</td>
                                    <td><strong>C$ {{gran_total | formatMoney(2)}}</strong></td>
                                </tr>

                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div class="content-box-footer text-right">
                        <router-link tag="button" :to="{ name: 'requisas' }">
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
                                :disabled="btnAction !== 'Registrar'"
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
    import requisa from "../../api/requisas";
    import es from 'vuejs-datepicker/dist/locale/translations/es'
	import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
				loading:true,
				msg: 'Cargando contenido, espere un momento',
				url : '/public'+loadingImage,   //It is important to import the loading image then use here
                es: es,
                format: "dd-MM-yyyy",
                trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
                proveedoresBusquedaURL: "/proveedores/buscar",
                sucursalesBusquedaURL: "/sucursales/buscar",
                areasBusquedaURL: "/areas/buscar",
                bodegasBusquedaURL: "/bodegas/buscar",
                productosBodegaBusquedaURL: "/productos/buscar-bodega",


                detalleForm: {
                    productox: {},
                    cantidad_solicitada: 1,
                    precio_unitario: 0,
                    subtotal: 0,
                    total: 0,
                },

                form: {
                    codigo_requisa: "",
                    descripcion_requisa: "",
                    fecha_solicitud: moment(new Date()).format("YYYY-MM-DD"),
                    requisa_trabajador: {},
                    requisa_proveedor: {},
                    requisa_sucursal: {},
                    requisa_area: {},
                    requisa_bodega: {},
                    requisa_productos: []
                },
                btnAction: "Emitir",
                btnActionDraft: "Guardar Borrador",
                errorMessages: []
            };
        },
        computed: {

            total_cantidad_solicitada() {
                return this.form.requisa_productos.reduce((carry, item) => {
                    return (carry + Number(item.cantidad_solicitada))
                }, 0)
            },

            total_subt() {
                return this.form.requisa_productos.reduce((carry, item) => {
                        return 0;//(carry + Number(item.cantidad_solicitada.toFixed(2))*Number(item.precio_unitario.toFixed(2)));
                    }
                    , 0)
            },
            gran_total() {
                return this.form.requisa_productos.reduce((carry, item) => {
                        return 0 //(carry + Number(item.cantidad_solicitada.toFixed(2))*Number(item.precio_unitario.toFixed(2)));
                    }
                    , 0)
            },
        },
        methods: {
            obtenerRequisa() {
                var self = this
                requisa.obtenerRequisa({
                    id_requisa: this.$route.params.id_requisa
                }, data => {
                    self.form = data.requisa;
                    self.loading = false;
                });

                /*if(self.form.salida_bodega.productos_bodega){
                self.productos = [];
                self.form.salida_bodega.productos_bodega.forEach((bodega_producto, key) => {
                    self.productos.push({
                        codigo_sistema: bodega_producto.producto.codigo_sistema,
                        costo_promedio:  Number(bodega_producto.producto.costo_promedio),
                        descripcion:  bodega_producto.producto.descripcion,
                        id_producto:  bodega_producto.producto.id_producto,
                        id_bodega_producto:  self.form.salida_bodega.productos_bodega[key].id_bodega_producto,
                        nombre_comercial:  bodega_producto.producto.nombre_comercial,
                        cantidad_disponible: Number(self.form.salida_bodega.productos_bodega[key].cantidad),
                        unidad_medida: bodega_producto.producto.unidad_medida,
                    });
                });
                }*/
            },
            sub_total(itemX) {
                itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_solicitada)).toFixed(2));
                itemX.total = itemX.subtotal;
                if (!isNaN(itemX.total)) {
                    return itemX.total;
                } else return 0;
            },


            onDateSelect(date) {
                //console.log(date); //
                this.form.fecha_solicitud = moment(date).format("YYYY-MM-DD"); //
            },
            seleccionarTrabajador(e) {
                const trabajadorP = e.target.value;
                var self = this;
                self.form.requisa_trabajador = trabajadorP;
            },
            seleccionarProveedor(e) {
                const proveedorP = e.target.value;
                var self = this;
                self.form.requisa_proveedor = proveedorP;
            },
            seleccionarSucursal(e) {
                const sucursalP = e.target.value;
                var self = this;
                self.form.requisa_sucursal = sucursalP;

            },
            seleccionarArea(e) {
                const areaP = e.target.value;
                var self = this;
                self.form.requisa_area = areaP;
            },
            seleccionarBodega(e) {
                const bodegaP = e.target.value;
                var self = this;
                self.form.requisa_bodega = bodegaP;
                self.form.requisa_productos = [];
                self.detalleForm.productox = {};
            },
            cargar_detalles_producto(e) {

                const productoP = e.target.value;
                var self = this;
                self.detalleForm.productox = productoP;

                if (self.detalleForm.productox)
                    self.detalleForm.cantidad = 0;
                self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;

            },
            /*obtenerProductosBodega() {
                var self = this;
                self.productos = [];

                self.form.salida_bodega.productos_bodega.forEach((bodega_producto, key) => {
                    self.productos.push({
                        codigo_sistema: bodega_producto.producto.codigo_sistema,
                        costo_promedio:  Number(bodega_producto.producto.costo_promedio),
                        descripcion:  bodega_producto.producto.descripcion,
                        id_producto:  bodega_producto.producto.id_producto,
                        id_bodega_producto:  self.form.salida_bodega.productos_bodega[key].id_bodega_producto,
                        nombre_comercial:  bodega_producto.producto.nombre_comercial,
                        cantidad_disponible: Number(self.form.salida_bodega.productos_bodega[key].cantidad),
                        unidad_medida: bodega_producto.producto.unidad_medida,
                    });

                });

            },*/
            agregarDetalle() {
                var self = this;
                if (self.detalleForm.productox) {
                    if (self.detalleForm.cantidad > 0 && self.detalleForm.precio_unitario > 0) {
                        let i = 0;
                        let keyx = 0;
                        if (self.form.requisa_productos) {
                            self.form.requisa_productos.forEach((productox, key) => {
                                if (self.detalleForm.productox.id_bodega_producto === productox.productox.id_bodega_producto) {
                                    i++;
                                    keyx = key;
                                }
                            });
                        }
                        if (i === 0) {
                            self.form.requisa_productos.push({
                                productox: self.detalleForm.productox,
                                cantidad_solicitada: self.detalleForm.cantidad,
                                precio_unitario: self.detalleForm.precio_unitario,
                                subtotal: 0,
                                total: 0,
                            });

                        } else {
                            let nuevo_total = self.form.requisa_productos[keyx].cantidad_solicitada + self.detalleForm.cantidad;
                            if (nuevo_total <= self.form.requisa_productos[keyx].cantidad_disponible) {
                                self.form.requisa_productos[keyx].cantidad_solicitada = self.form.requisa_productos[keyx].cantidad + self.detalleForm.cantidad;
                            } else {
                                self.form.requisa_productos[keyx].cantidad_solicitada = self.form.requisa_productos[keyx].productox.cantidad_disponible;
                            }
                        }

                        self.detalleForm.productox = '';
                        self.detalleForm.cantidad = 0;
                        self.detalleForm.precio_unitario = 0;
                        self.detalleForm.subtotal = 0;
                        self.detalleForm.total = 0;

                    } else {
                        alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero", 5);
                    }
                } else {
                    alertify.warning("Debe seleccionar un producto", 5);
                }
            },
            eliminarLinea(item, index) {
                if (this.form.requisa_productos.length >= 1) {
                    this.form.requisa_productos.splice(index, 1);

                } else {
                    this.form.requisa_productos = [];
                }
            },

            actualizar() {
                var self = this;
                self.loading = true;
                self.btnAction = "Registrando, espere....";

                requisa.actualizar(
                    self.form,
                    data => {
                        this.$router.push({
                            name: "requisas"
                        });
                    },
                    err => {
                    	self.loading = false;
                        self.errorMessages = err;
                        self.btnAction = "Actualizar";
                    }
                );
            }
        },
        mounted() {
            this.obtenerRequisa();

        }
    };
</script>
<style>
    .btn-agregar {
        margin-top: 33px;
    }
</style>