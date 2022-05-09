<template>
    <div class="panel">
        <div class="panel-heading">
            <span class="panel-title">Salida Código: {{form.codigo_salida}}</span>
            <div class="btn-group">
                <a @click="$router.go(-1)" style="margin-right: 10px;"> <i class="fa fa-arrow-left"></i> Regresar</a>
                <!--<a @click.prevent="descargarReporteSalida()">  <i class="fa fa-download"></i> Descargar</a>-->
            </div>
        </div>

        <div class="panel-body">
            <div class="document">
                <div class="document-heading">
                    <div class="row">
                        <div class="col col-12 text-center">
                            <div class="company-name">{{nombre_empresa}}</div>
                            <div class="company-address">{{direccion_empresa}}</div>
                            <div class="company-address"><strong>Salida No. : {{form.codigo_salida}}</strong></div>
                        </div>
                    </div>
                    <br>
                    <div class="row">

                        <div class="col col-4">
                            <p>
                                <strong>Orden de venta:</strong>
                            </p>
                            <span>{{form.orden_venta}}</span>
                            <br>
                            <p>
                                <strong>Observaciones:</strong>
                            </p>
                                <span>{{form.descripcion_salida}}</span>
                            <br>
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
                                    <td>{{ form.fecha_despacho? formatDate(form.fecha_despacho):'N/D'}}</td>
                                </tr>
                                <!--<tr>
                                    <td>Moneda:</td>
                                    <td>Córdobas</td>
                                </tr>-->
                                </tbody>
                            </table>
                        </div>
                        <div class="col col-12">
                            <template v-if="form.salida_cliente">
                                <p>
                                    <strong>Cliente:</strong>
                                </p>
                                <span>{{form.salida_cliente.tipo_persona === 1? (form.salida_cliente.nombre_completo + ' | '+form.salida_cliente.numero_cedula):(form.salida_cliente.razon_social + ' | ' + form.salida_cliente.numero_ruc)}}</span>
                            </template>
                            <br>
                        </div>
                    </div>

                </div>
                <div class="document-body">
                    <table class="document-table">
                        <thead>
                        <tr>
                            <th>Código producto</th>
                            <th>Descripción</th>
                            <th>OPG</th>
                            <!--<th class="align-center">Costo unitario C$</th>-->
                            <th class="align-center">Cantidad Saliente</th>
                            <th class="align-center">Cantidad Despachada</th>
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
                                    {{item.codigo_presentacion}}
                                </td>
                               <!-- <td
                                        class="width-2 align-right"
                                >{{item.precio_unitario | formatMoney(2)}}</td>-->
                                <td class="width-1 align-center">{{item.cantidad_saliente}}</td>
                                <td class="width-1 align-center">{{item.cantidad_despachada}}</td>
                                <td class="width-1 align-center">{{calcularConversion(item)|formatMoney(2)}}</td>
                               <!-- <td
                                        class="width-2 align-right"
                                >{{(item.cantidad_despachada * item.precio_unitario) | formatMoney(2)}}</td>-->
                            </tr>
                        </template>
                        <tr>
                            <td colspan="2"></td>
                            <td ><strong>Total</strong></td>
                            <td><strong>{{total_cantidad_saliente}}</strong></td>
                            <td><strong>{{total_cantidad_despachada}}</strong></td>
                            <td><strong>{{total_cantidad_total}}</strong></td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <!-- <tr>
                             <td colspan="3"></td>
                             <td colspan="2">
                                 <strong>Total</strong>
                             </td>
                             <td class="align-right">
                                 <strong>C$ {{gran_total | formatMoney(2)}}</strong>
                             </td
                         </tr>>-->
                        </tfoot>
                    </table>
                </div>


               <!-- <template v-if="form.salida_productos">
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
                </template>-->
            </div>
            <template v-if="loading">
                <BlockUI :message="msg" :url="url"></BlockUI>
            </template>
        </div>

    </div>

</template>
<script type="text/ecmascript-6">
    import salida from "../../api/salidas";
    import loadingImage from '../../assets/images/block50.gif'
    export default {
        data() {
            return {
                loading:true,
                msg: 'Cargando los datos, espere un momento',
                url : '/public'+loadingImage,
                format: "dd-MM-yyyy",
                nombre_empresa:'',
                direccion_empresa:'',
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
            calcularConversion(itemX) {
                itemX.conversionx= Number((Number(itemX.cantidad_despachada)* Number(itemX.escalar)).toFixed(2));
                if(!isNaN(itemX.conversionx)){
                    return itemX.conversionx;
                }
                else return 0;
            },
            descargarReporteSalida () {
                if(!this.loading){
                    var self=this;
                    self.loading=true;
                    var extensionx = 'pdf';
                    alertify.success("Descargando datos, espere un momento.....",5);
                    axios.post('salidas/reporte',
                        {
                            id_salida : self.form.id_salida,
                            extension : extensionx
                        }, { responseType: 'blob' })
                        .then(({ data }) => {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            extensionx === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteSalida.'+ extensionx;
                            link.click()
                            this.loading=false;
                        }) .catch(function (error) {
                        alertify.error("Error Descargando archivo.....",5);
                        self.loading=false;
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
                        self.nombre_empresa = data.nombre_empresa;
                        self.direccion_empresa = data.direccion_empresa;
                        self.loading = false;
                    },
                    err => {
                        console.log(err);
                        self.loading = false;
                    }
                );
            },
        },
        computed: {

            total_cantidad_saliente() {
                return this.form.salida_productos.reduce((carry, item) => {
                    return (carry + Number(item.cantidad_saliente))
                }, 0)
            },

            total_cantidad_despachada() {
                return this.form.salida_productos.reduce((carry, item) => {
                    return (carry + Number(item.cantidad_despachada))
                }, 0)
            },
            total_cantidad_total() {
                return this.form.salida_productos.reduce((carry, item) => {
                    return (carry + Number(item.conversionx))
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