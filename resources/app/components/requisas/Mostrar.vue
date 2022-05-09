<template>
    <div class="panel">
        <div class="panel-heading">
            <span class="panel-title">Salida Código: {{form.codigo_salida}}</span>
            <div class="btn-group">
                <a @click="$router.go(-1)" style="margin-right: 10px;"> <i class="fa fa-arrow-left"></i> Regresar</a>
                <a :disabled="descargando" @click.prevent="downloadItem('productos/baterias/ficha/'+form.id_salida)">  <i class="fa fa-download"></i> Descargar</a>
            </div>
        </div>

        <div class="panel-body">
            <div class="document">
                <div class="document-heading">
                    <div class="row">
                        <div class="col col-12 text-center">
                            <div class="company-name">LUBRICANTES DE NICARAGUA, S. A.</div>
                            <div class="company-address">De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua</div>
                            <div class="company-address"><strong>Salida No. : {{form.codigo_salida}}</strong></div>
                        </div>
                    </div>
                    <br>
                    <div class="row">

                        <div class="col col-4">
                            <p>
                                <strong>Proveedor:</strong>
                            </p>
                            <template v-if="form.salida_proveedor">
                            <router-link style="color: #000000;" :to="{ name: 'actualizar-proveedor', params: { id_proveedor: form.id_proveedor } }" target="_blank">

                                <span>{{form.salida_proveedor.nombre_comercial}}</span>
                                <br>
                                <span>{{form.salida_proveedor.numero_ruc}}</span>
                                <br>
                                <span>{{form.salida_proveedor.direccion}}</span>
                                <br>
                                <pre>{{form.salida_proveedor.contacto_proveedor}}</pre>
                            </router-link>
                            </template>
                            <template v-else>
                                <span>N/A</span>
                            </template>
                        </div>

                        <div class="col col-4">
                            <p>
                                <strong>Bodega Saliente:</strong>
                            </p>
                            <router-link style="color: #000000;" :to="{ name: 'actualizar-bodega', params: { id_bodega: form.id_bodega } }"  target="_blank">
                                <span>{{form.salida_bodega.descripcion}}</span>
                                <br>
                            </router-link>
                            <template v-if="form.id_tipo_salida === 4">
                                <p>
                                    <strong>Bodega Entrante:</strong>
                                </p>
                                <router-link style="color: #000000;" :to="{ name: 'actualizar-bodega', params: { id_bodega: form.id_bodega_entrante } }"  target="_blank">
                                    <span>{{form.salida_bodega_entrante.descripcion}}</span>
                                    <br>
                                </router-link>
                            </template>
                            <p>
                                <strong>Tipo de salida:</strong>
                            </p>
                            <span>{{form.salida_tipo.descripcion}}</span>
                            <br>
                        </div>
                        <div class="col col-4">
                            <table class="document-summary">
                                <tbody>
                                <tr>
                                    <td>Estado actual</td>
                                    <td>
                                        <div v-if="form.estado===0">
                                            <span class="badge badge-danger" style="font-size: 100%;">Cancelada</span>
                                        </div>

                                        <div v-if="form.estado===1">
                                            <span class="badge badge-primary" style="font-size: 100%;">Emitida</span>
                                        </div>

                                        <div v-if="form.estado===2">
                                            <span class="badge badge-success" style="font-size: 100%;">Despachada</span>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td>Código salida:</td>
                                    <td>{{form.codigo_salida}}</td>
                                </tr>
                                <tr>
                                    <td>Fecha Emisión:</td>
                                    <td>{{ formatDate(form.fecha_salida)}}</td>
                                </tr>
                                <tr>
                                    <td>Fecha Despacho:</td>
                                    <td>{{ formatDate(form.fecha_despacho)}}</td>
                                </tr>
                                <tr>
                                    <td>Moneda:</td>
                                    <td>Córdobas</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="document-body">
                    <table class="document-table">
                        <thead>
                        <tr>
                            <th>Código producto</th>
                            <th>Descripción</th>
                            <th>Unidad de medida</th>
                            <th class="align-center">Costo unitario C$</th>
                            <th class="align-center">Cantidad</th>
                            <th class="align-center">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="item in form.salida_productos" >
                            <tr :key="item.id_salida_producto">
                                <td class="width-2">
                                    {{item.codigo_producto}}
                                </td>
                                <td class="width-4">

                                    <pre>{{item.descripcion_producto}}</pre>

                                </td>
                                <td class="width-2">
                                    {{item.unidad_medida}}
                                </td>
                                <td
                                        class="width-2 align-right"
                                >{{item.precio_unitario | formatMoney(2)}}</td>
                                <td class="width-1 align-center">{{item.cantidad_despachada}}</td>
                                <td
                                        class="width-2 align-right"
                                >{{(item.cantidad_despachada * item.precio_unitario) | formatMoney(2)}}</td>
                            </tr>
                        </template>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="3"></td>
                            <td colspan="2">Sub Total</td>
                            <td class="align-right">C$ {{total_subt | formatMoney(2)}}</td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td colspan="2">
                                <strong>Total</strong>
                            </td>
                            <td class="align-right">
                                <strong>C$ {{gran_total | formatMoney(2)}}</strong>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>


                <template v-if="form.salida_productos">
                    <div class="col col-4">
                        <p>
                            <strong>Detalle de Baterías Despachadas:</strong>
                        </p>
                    </div>
                    <div class="document-body">
                        <table class="document-table">
                            <thead>
                            <tr>
                                <th>Código Garantía</th>
                                <th>Descripción Bateria</th>
                                <th>Fecha Activación</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="item2 in form.salida_productos" >
                                <template v-if="item2.salida_producto_baterias">
                                    <template v-for="itemBateria in item2.salida_producto_baterias" >
                                        <tr :key="itemBateria.id_bateria">
                                            <td class="width-4">
                                                {{itemBateria.bateria.codigo_garantia}}
                                            </td>
                                            <td class="width-4">
                                                <pre>{{item2.descripcion_producto}}</pre>
                                            </td>
                                            <td class="width-4">
                                                {{itemBateria.bateria.fecha_activacion}}
                                            </td>
                                        </tr>
                                    </template>
                                </template>
                            </template>
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </table>
                    </div>
                </template>
            </div>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    import { mapGetters } from 'vuex'
    import salida from "../../api/salidas";

    export default {
        data() {
            return {
                format: "dd-MM-yyyy",
                descargando:false,
                form: {
                    codigo_salida: "",
                    fecha_salida: "",
                    id_tipo_salida: "",
                    id_proveedor: 0,
                    id_bodega: 0,
                    detalleProductos: [],
                    salida_proveedor: [],
                    salida_bodega : [],
                    salida_productos: [],
                    salida_tipo:[],
                    log_registro:[],
                    total: 0,
                    sub_total: 0,
                },
                btnAction: "Registrar",
                errorMessages: []
            };
        },
        methods: {
            downloadItem (url) {
                if(!this.descargando){
                    this.descargando=true;
                    alertify.success("Descargando datos, espere un momento.....",5);
                    axios.get(url, { responseType: 'blob' })
                        .then(({ data }) => {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteFicha.pdf';
                            link.click()
                            this.descargando=false;
                        }) .catch(function (error) {
                        alertify.error("Error Descargando archivo.....",5);
                        this.descargando=false;
                    })
                }else{
                    alertify.warning("Espere a que se complete la descarga anterior",5);
                }
            },
            formatDate(date) {
                return moment(date).format('YYYY-MM-DD')
            },
            obtenerSalida() {
                var self = this;
                salida.obtenerSalida(
                    {
                        id_salida: this.$route.params.id_salida
                    },
                    data => {
                        self.form = data.salida;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
        },
        computed: {

            total_cantidad_despachada() {
                return this.form.salida_productos.reduce((carry, item) => {
                    return (carry + Number(item.cantidad_despachada))
                }, 0)
            },

            total_subt() {
                return this.form.salida_productos.reduce((carry, item) => {
                        return(carry + Number((Number(item.cantidad_despachada * item.precio_unitario).toFixed(2))));
                    }
                    , 0)
            },
            gran_total() {
                return this.form.salida_productos.reduce((carry, item) => {
                        return(carry + Number((Number(item.cantidad_despachada * item.precio_unitario).toFixed(2))));
                    }
                    , 0)
            },
        },
        mounted() {
            this.obtenerSalida();
        }
    };
</script>