<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Crear Nueva Solicitud de Requisa</div>
                        <div class="box-description">Formulario para registrar Solicitud de Requisa de productos</div>
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
                                            <input @change="item.cantidad = Math.max(Math.min(Math.round(item.cantidad), item.productox.cantidad_disponible), 1)"
                                                   class="form-control" type="number" v-model.number="item.cantidad">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`detalleProductos.${index}.cantidad`]"
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
                                                        v-for="message in errorMessages[`detalleProductos.${index}.precio_unitario`]"
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
                                        <strong>{{total_cantidad}}</strong>
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
                                :disabled="btnAction !== 'Solicitar'"
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
    import requisa from "../../api/requisas";
    import es from 'vuejs-datepicker/dist/locale/translations/es'
    import loadingImage from '../../assets/images/block50.gif'


    export default {
        /*components: {
          Datepicker
        },*/
        data() {
            return {
              loading:false,
              msg: 'Guardando los datos, espere un momento',
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
                    cantidad: 1,
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
                    detalleProductos: []
                },
                btnAction: "Solicitar",
                errorMessages: []
            }

        },
        computed: {

            total_cantidad() {
                return this.form.detalleProductos.reduce((carry, item) => {
                    return (carry + Number(item.cantidad))
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
                self.form.detalleProductos = [];
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
            sub_total(itemX) {
                itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad)).toFixed(2));
                itemX.total = itemX.subtotal;
                if (!isNaN(itemX.total)) {
                    return itemX.total;
                } else return 0;
            },

            onDateSelect(date) {
                this.form.fecha_solicitud = moment(date).format("YYYY-MM-DD"); //
            },

            agregarDetalle() {
                var self = this;
                if (self.detalleForm.productox) {
                    if (self.detalleForm.cantidad > 0 && self.detalleForm.precio_unitario > 0) {
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
                                cantidad: Number(self.detalleForm.cantidad),
                                precio_unitario: self.detalleForm.precio_unitario,
                                subtotal: 0,
                                total: 0,
                            });

                        } else {
                            let nuevo_total = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
                            if (nuevo_total <= self.form.detalleProductos[keyx].cantidad_disponible) {
                                self.form.detalleProductos[keyx].cantidad = Number(self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad);
                            } else {
                                self.form.detalleProductos[keyx].cantidad = Number(self.form.detalleProductos[keyx].productox.cantidad_disponible);
                            }
                        }

                        self.detalleForm.productox = {};
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
                    title: 'Esta seguro de registrar esta solicitud de requisa?',
                    text: "Esta acción no se puede deshacer",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, confirmar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.value) {
                        requisa.registrar(
                            self.form,
                            data => {
                                this.$swal.fire(
                                    'Solicitud de Requisa Registrada!',
                                    'La Requisa fue registrada correctamente.',
                                    'success'
                                )
                                this.$router.push({
                                    name: "requisas"
                                });
                            },
                            err => {
                                self.errorMessages = err;
                                self.btnAction = "Solicitar";
                            }
                        );
                    } else {
                        self.btnAction = "Solicitar";
                    }
                })
            },
        },
        mounted() {
        }
    };
</script>
<style>
    .btn-agregar {
        margin-top: 33px;
    }
</style>
