<template>
    <div class="panel">
        <div class="panel-heading">
            <span class="panel-title">Recibo No. : {{form.no_documento}}</span>
            <div class="btn-group">
                <a @click="$router.go(-1)" style="margin-right: 10px;"> <i class="fa fa-arrow-left"></i> Regresar</a>
                <a :disabled="descargando" @click.prevent="downloadItem('ventas/recibos/reporte/'+form.id_recibo)">  <i class="fa fa-download"></i> Descargar</a>
            </div>
        </div>

        <div class="panel-body">
            <div class="document">
                <div class="document-heading">
                    <div class="row">
                        <div class="col col-12 text-center">
                            <div class="company-name">LUBRICANTES DE NICARAGUA, S. A.</div>
                            <div class="company-address">De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua</div>
                            <div class="company-name">RECIBO OFICIAL DE CAJA</div>
                            <div class="company-address"><strong>No. {{form.no_documento}}</strong></div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col col-8">
                            <p><strong>Recibimos de:</strong></p>
                            <span>{{form.nombre_persona}}</span>
                            <br>
                            <p><strong>A cuenta de:</strong></p>
                            <template v-if="form.recibo_cliente">
                                <span>{{form.recibo_cliente.nombre_comercial + (form.recibo_cliente.tipo_persona===1? ', Numero Cédula: '+form.recibo_cliente.numero_cedula:' Numero RUC: '+form.recibo_cliente.numero_ruc)}}</span>
                                <br>
                            </template>
                            <template v-else>
                                <span>N/A</span>
                            </template>
                        </div>
                        
                        <div class="col col-4">
                            <table class="document-summary">
                                <tbody>
                                <tr>
                                    <td>Código recibo:</td>
                                    <td>{{form.no_documento}}</td>
                                </tr>
                                <tr>
                                    <td>Fecha Emisión:</td>
                                    <td>{{ formatDate(form.fecha_emision)}}</td>
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
                            <th>Descripción</th>
                            <th class="align-center">Monto C$</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="item in form.recibo_detalles" >
                            <tr :key="item.id_recibo_producto">
                                <td class="width-4">
                                    <pre>{{item.descripcion_pago}}</pre>
                                </td>
                                <td
                                        class="width-2 text-center"
                                >{{item.monto | formatMoney(2)}}</td>
                            </tr>
                        </template>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td class="align-right">
                                <strong>Total Pagado C$</strong>
                            </td>
                            <td class="text-center">
                                <strong>{{gran_total | formatMoney(2)}}</strong>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
            <template v-if="loading">
                <BlockUI :message="msg" :url="url"></BlockUI>
            </template>
        </div>

    </div>

</template>
<script type="text/ecmascript-6">
    import recibo from "../../api/recibos_oficiales";
    import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
                loading:true,
                msg: 'Cargando el contenido espere un momento',
                url : '/public'+loadingImage,   //It is important to import the loading image then use here
                format: "dd-MM-yyyy",
                descargando:false,
                form: {
                    no_recibo: "",
                    fecha_emision: "",
                    id_tipo_recibo: "",
                    id_proveedor: 0,
                    id_bodega: 0,
                    detalleProductos: [],
                    recibo_cliente: [],
                    recibo_bodega : [],
                    recibo_detalles: [],
                    recibo_tipo:[],
                    log_registro:[],
                    total: 0,
                    sub_total: 0,
                },
                btnAction: "Registrar",
                errorMessages: []
            };
        },
        methods: {
            formatDate(date) {
                return moment(date).format('YYYY-MM-DD')
            },
            obtenerRecibo() {
                var self = this;
                recibo.obtenerRecibo(
                    {
                        id_recibo: this.$route.params.id_recibo
                    },
                    data => {
                        self.form = data;
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

            gran_total() {
                return this.form.recibo_detalles.reduce((carry, item) => {
                        return(carry + Number(item.monto));
                    }
                    , 0)
            },
        },
        mounted() {
            this.obtenerRecibo();
        }
    };
</script>