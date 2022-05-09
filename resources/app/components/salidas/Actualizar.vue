<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Actualizar Salida</div>
                        <div class="box-description">Formulario para actualizar salida de productos</div>
                    </div>
                    <div class="row">

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Tipo salida</label>
                                <v-select
                                        :options="tipos_salida"
                                        label="descripcion"
                                        v-model="form.salida_tipo"
                                ></v-select>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.salida_tipo"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Código salida <small>(Automático)</small></label>
                                <input class="form-control" readonly type="text" v-model="form.codigo_salida">
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.codigo_salida"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Bodega</label>
                                <v-select
                                        :options="bodegas"
                                        label="descripcion"
                                        v-model="form.salida_bodega"
                                        v-on:input="obtenerProductosBodega()"
                                ></v-select>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.salida_bodega"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Proveedor</label>
                                <v-select
                                        :options="proveedores"
                                        label="nombre_comercial"
                                        v-model="form.salida_proveedor"
                                ></v-select>
                                <ul class="error-messages">
                                    <li :key="message" v-for="message in errorMessages.salida_proveedor"
                                        v-text="message"></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for>Fecha salida</label>
                                <datepicker :format="format" :language="es" :value="new Date()"
                                            @selected="onDateSelect"></datepicker>
                                <ul class="error-messages">
                                    <li
                                            :key="message"
                                            v-for="message in errorMessages.fecha_salida"
                                            v-text="message"
                                    ></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-12">
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

                    <div v-if="!form.salida_bodega">
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
                                        label="descripcion"
                                        v-model="detalleForm.productox"
                                        v-on:input="cargar_detalles_producto()"
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
                                <label for>Precio Unitario</label>
                                <div class="input-group">
                                    <div class="input-group-addon">C$
                                    </div>
                                    <input class="form-control" type="number"
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
                                        v-for="message in errorMessages.salida_productos"
                                        v-text="message"
                                ></li>
                            </ul>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Producto</th>
                                    <th>Cantidad Saliente</th>
                                    <th>Cantidad Despachada</th>
                                    <!--<th >Precio Unitario</th>
                                    <th >SubTotal</th>-->

                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item, index) in form.salida_productos">
                                    <tr>
                                        <td style="width: 2%">
                                            <button @click="eliminarLinea(item, index)">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <input class="form-control" disabled v-model="item.descripcion_producto">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`salida_productos.${index}.id_producto`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>


                                        <td>
                                            <input @change="item.cantidad_saliente = Math.max(Math.min(Math.round(item.cantidad_saliente), item.productox.cantidad_disponible), 1)"
                                                   class="form-control" type="number"
                                                   v-model.number="item.cantidad_saliente">
                                            <ul class="error-messages">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages[`salida_productos.${index}.cantidad_saliente`]"
                                                        v-text="message">
                                                </li>
                                            </ul>
                                        </td>


                                        <!--	<td>
                                                <input  class="form-control" type="number" v-model.number="item.precio_unitario">
                                                <ul class="error-messages">
                                                    <li
                                                            :key="message"
                                                            v-for="message in errorMessages[`salida_productos.${index}.precio_unitario`]"
                                                            v-text="message">
                                                    </li>
                                                </ul>
                                            </td>

                                            <td>
                                                <strong>C$ {{sub_total(item)| formatMoney(2)}}</strong>
                                            </td>
                                            -->

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
                                        <strong>{{total_cantidad_saliente}}</strong>
                                    </td>
                                    <td class="item-footer">
                                        <strong>{{total_cantidad_despachada}}</strong>
                                    </td>
                                    <!--<td>Total</td>
                                    <td> <strong>C$ {{gran_total | formatMoney(2)}}</strong></td>-->
                                </tr>

                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div class="content-box-footer text-right">
                        <router-link :to="{ name: 'salidas' }" tag="button">
                            <button type="button" class="btn btn-default">Cancelar</button>
                        </router-link>
                        <button
                                :disabled="btnAction != 'Actualizar' ? true : false"
                                @click="actualizar"
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
    import tipo from "../../api/tipo_salida";
    import proveedor from "../../api/proveedores";
    import salida from "../../api/salidas";
    //import Datepicker from "vuejs-datepicker";
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
                bodegas: [],
                proveedores: [],
                tipos_salida: [],
                productos: [],


                detalleForm: {
                    productox: "",
                    cantidad_saliente: 1,
                    precio_unitario: 0,
                    subtotal: 0,
                    total: 0,
                },

                form: {
                    codigo_salida: "",
                    descripcion_salida: "",
                    fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
                    salida_tipo: "",
                    salida_proveedor: "",
                    salida_bodega: "",
                    salida_productos: []
                },
                btnAction: "Actualizar",
                errorMessages: []
            };
        },
        computed: {

            total_cantidad_saliente() {
                return this.form.salida_productos.reduce((carry, item) => {
                    return (carry + Number(item.cantidad_saliente))
                }, 0)
            },

            total_subt() {
                return this.form.salida_productos.reduce((carry, item) => {
                        return (carry + Number(item.subtotal.toFixed(2)));
                    }
                    , 0)
            },
            gran_total() {
                return this.form.salida_productos.reduce((carry, item) => {
                        return (carry + Number(item.total.toFixed(2)));
                    }
                    , 0)
            },
        },
        methods: {
            obtenerSalida() {
                var self = this
                salida.obtenerSalida({
                    id_salida: this.$route.params.id_salida
                }, data => {
                    self.form = data.salida;
                    self.proveedores = data.proveedores;
                    self.bodegas = data.bodegas;
                    self.tipos_salida = data.tipos_salida;
                    self.loading = false;
                });

                if (self.form.salida_bodega.productos_bodega) {
                    self.productos = [];
                    self.form.salida_bodega.productos_bodega.forEach((bodega_producto, key) => {
                        self.productos.push({
                            codigo_sistema: bodega_producto.producto.codigo_sistema,
                            costo_promedio: Number(bodega_producto.producto.costo_promedio),
                            descripcion: bodega_producto.producto.descripcion,
                            id_producto: bodega_producto.producto.id_producto,
                            id_bodega_producto: self.form.salida_bodega.productos_bodega[key].id_bodega_producto,
                            nombre_comercial: bodega_producto.producto.nombre_comercial,
                            cantidad_disponible: Number(self.form.salida_bodega.productos_bodega[key].cantidad),
                            unidad_medida: bodega_producto.producto.unidad_medida,
                        });
                    });
                }


            },
            sub_total(itemX) {
                itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_saliente)).toFixed(2));
                itemX.total = itemX.subtotal;
                if (!isNaN(itemX.total)) {
                    return itemX.total;
                } else return 0;
            },


            onDateSelect(date) {
                //console.log(date); //
                this.form.fecha_salida = moment(date).format("YYYY-MM-DD"); //
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
            cargar_detalles_producto() {
                var self = this
                if (self.detalleForm.productox)
                    self.detalleForm.cantidad = 0;
                self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
            },
            obtenerProductosBodega() {
                var self = this;
                self.productos = [];

                self.form.salida_bodega.productos_bodega.forEach((bodega_producto, key) => {
                    self.productos.push({
                        codigo_sistema: bodega_producto.producto.codigo_sistema,
                        costo_promedio: Number(bodega_producto.producto.costo_promedio),
                        descripcion: bodega_producto.producto.descripcion,
                        id_producto: bodega_producto.producto.id_producto,
                        id_bodega_producto: self.form.salida_bodega.productos_bodega[key].id_bodega_producto,
                        nombre_comercial: bodega_producto.producto.nombre_comercial,
                        cantidad_disponible: Number(self.form.salida_bodega.productos_bodega[key].cantidad),
                        unidad_medida: bodega_producto.producto.unidad_medida,
                    });

                });

            },
            obtenerTodosTiposSalida() {
                var self = this;
                tipo.obtenerTodosTiposSalida(
                    data => {
                        self.tipos_salida = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
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
                                cantidad_saliente: self.detalleForm.cantidad,
                                precio_unitario: self.detalleForm.precio_unitario,
                                subtotal: 0,
                                total: 0,
                            });

                        } else {
                            let nuevo_total = self.form.detalleProductos[keyx].cantidad_saliente + self.detalleForm.cantidad;
                            if (nuevo_total <= self.form.detalleProductos[keyx].cantidad_disponible) {
                                self.form.detalleProductos[keyx].cantidad_saliente = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
                            } else {
                                self.form.detalleProductos[keyx].cantidad_saliente = self.form.detalleProductos[keyx].productox.cantidad_disponible;
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

            /*agregarDetalle() {

                if(this.detalleForm.productox){
                    if(this.detalleForm.cantidad_saliente>0 && this.detalleForm.precio_unitario > 0){
                        this.form.salida_productos.push({
                            id_bodega_producto: 0,
                            id_producto: this.detalleForm.productox.id_producto,
                            codigo_producto: this.detalleForm.productox.codigo_sistema,
                            descripcion_producto: this.detalleForm.productox.descripcion,
                            unidad_medida: this.detalleForm.productox.unidad_medida.descripcion,
                            cantidad_saliente: this.detalleForm.cantidad_saliente,
                            precio_unitario: this.detalleForm.precio_unitario,
                            subtotal: 0,
                            total: 0,
                        });
                        this.detalleForm.productox='';
                        this.detalleForm.cantidad_saliente=0;
                        this.detalleForm.precio_unitario=0;
                        this.detalleForm.subtotal=0;
                        this.detalleForm.total=0;
                    }else{
                        alertify.warning("Los valores para cantidad_saliente y precio unitario deben ser mayores que cero",5);
                    }
                }else{
                    alertify.warning("Debe seleccionar un producto",5);
                }
            },*/
            eliminarLinea(item, index) {
                if (this.form.salida_productos.length >= 1) {
                    this.form.salida_productos.splice(index, 1);

                } else {
                    this.form.salida_productos = [];
                }
            },

            actualizar() {
                var self = this;
                self.loading = true;
                self.btnAction = "Registrando, espere....";

                salida.actualizar(
                    self.form,
                    data => {
                        this.$router.push({
                            name: "salidas"
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
            //this.obtenerTodasBodegasProductos();
            //this.obtenerTodosProveedores();
            //this.obtenerTodosTiposSalida();
            this.obtenerSalida();

        }
    };
</script>
<style>
    .btn-agregar {
        margin-top: 33px;
    }
</style>