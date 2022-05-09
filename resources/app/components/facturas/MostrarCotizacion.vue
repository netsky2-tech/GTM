<template>
    <div class="panel">
        <div class="panel-heading">
            <span class="panel-title">Cotización No.: {{form.codigo_factura}}</span>
            <div class="btn-group">
                <a @click="$router.go(-1)" style="margin-right: 10px;"> <i class="fa fa-arrow-left"></i> Regresar</a>
                <a :disabled="descargando" @click.prevent="downloadItem('ventas/facturas/reporte/'+form.id_proforma)">  <i class="fa fa-download"></i> Descargar</a>
                <button  class="btn btn-info" @click="enviarCorreo"><span class="fa fa-print"></span></button>
            </div>
        </div>

        <div class="panel-body">
            <div id="facturaX" class="factura">
                <div class="document-heading">
                    <div class="row">
                        <div class="col col-12 text-center">
                            <div class="company-name">LUBRICANTES DE NICARAGUA, S. A.</div>
                            <div class="company-address">{{form.proforma_sucursal.descripcion}}</div>
                            <div class="company-address">{{form.proforma_sucursal.telefonos}}</div>
                            <div class="company-address">{{form.proforma_sucursal.direccion}}</div>
                            <div class="company-address">{{ajustes[2]?ajustes[2].valor:"N/D"}}</div>
                            <div class="company-address"><strong>PROFORMA</strong></div>
                        </div>
                    </div>
                    <br>
                    <!--<div class="row">

                        <div class="col col-4">
                            <p>
                                <strong>Proveedor:</strong>
                            </p>
                            <template v-if="form.proforma_cliente">
                            <router-link style="color: #000000;" :to="{ name: 'actualizar-proveedor', params: { id_cliente: form.id_cliente } }" target="_blank">
                                <span>{{form.proforma_cliente.nombre_comercial}}</span>
                                <br>
                                <span>{{form.proforma_cliente.numero_ruc}}</span>
                                <br>
                                <span>{{form.proforma_cliente.direccion}}</span>
                                <br>
                                <pre>{{form.proforma_cliente.contacto_proveedor}}</pre>
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
                                <span>{{form.proforma_bodega.descripcion}}</span>
                                <br>
                            </router-link>
                            <p>
                                <strong>Tipo de factura:</strong>
                            </p>
                            <span>{{form.id_tipo}}</span>
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
                                    <td>Código factura:</td>
                                    <td>{{form.codigo_factura}}</td>
                                </tr>
                                <tr>
                                    <td>Fecha Emisión:</td>
                                    <td>{{ formatDate(form.f_factura)}}</td>
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
                </div>-->
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
                         <template v-for="item in form.proforma_productos" >
                             <tr :key="item.id_proforma_producto">
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
                                 >{{item.precio | formatMoney(2)}}</td>
                                 <td class="width-1 align-center">{{item.cantidad}}</td>
                                 <td
                                         class="width-2 align-right"
                                 >{{(item.cantidad * item.precio) | formatMoney(2)}}</td>
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
            </div>
            </div>
            <template v-if="loading">
                <BlockUI :message="msg" :url="url"></BlockUI>
            </template>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    import loadingImage from '../../assets/images/block50.gif'
    import factura from "../../api/proformas";

    export default {
        data() {
            return {
                loading:true,
                msg: 'Cargando el contenido espere un momento',
                url : '/public'+loadingImage,
                format: "dd-MM-yyyy",
                descargando:false,
                ajustes:[],
                form: {
                    codigo_factura: "",
                    f_factura: "",
                    id_tipo_factura: "",
                    id_cliente: 0,
                    id_bodega: 0,
                    detalleProductos: [],
                    proforma_cliente: [],
                    proforma_bodega : [],
                    proforma_productos: [],
                    proforma_sucursal:[],
                    proforma_tipo:[],
                    log_registro:[],
                    total: 0,
                    sub_total: 0,
                },
                btnAction: "Registrar",
                errorMessages: []
            };
        },
        methods: {
            enviarCorreo(){

                var self = this;
                self.loading = true;
                self.btnAction = 'Guardando, espere......';
                factura.enviarProforma(self.form, data => {
                    self.loading = false;
                }, err => {
                    self.loading = false;
                    self.errorMessages = err;
                })

            },

            printDiv(divName) {
                var printContents = document.getElementById(divName).innerHTML;
                var originalContents = document.body.innerHTML;
                document.body.innerHTML = printContents;
                // document.body.style.marginTop="-45px";
                window.print();
                document.body.innerHTML = originalContents;
            },
            downloadItem (url) {
                if(!this.descargando){
                    this.descargando=true;
                    alertify.success("Descargando datos, espere un momento.....",5);
                    axios.get(url, { responseType: 'blob' })
                        .then(({ data }) => {
                            let blob = new Blob([data], { type: 'application/pdf' })
                            let link = document.createElement('a');
                            link.href = window.URL.createObjectURL(blob)
                            link.download = 'ReporteFactura.pdf';
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
            obtenerFactura() {
                var self = this;
                factura.obtenerProforma(
                    {
                        id_proforma: this.$route.params.id_proforma,
                        cargar_dependencias:true
                    },
                    data => {
                        self.loading =false;
                        self.form = data.factura;
                        self.ajustes = data.ajustes_basicos;
                    },
                    err => {
                        self.loading =false;
                        console.log(err);
                    }
                );
            },
        },
        computed: {

            total_cantidad() {
                return this.form.proforma_productos.reduce((carry, item) => {
                    return (carry + Number(item.cantidad))
                }, 0)
            },

            total_subt() {
                return this.form.proforma_productos.reduce((carry, item) => {
                        return(carry + Number((Number(item.cantidad * item.precio).toFixed(2))));
                    }
                    , 0)
            },
            gran_total() {
                return this.form.proforma_productos.reduce((carry, item) => {
                        return(carry + Number((Number(item.cantidad * item.precio).toFixed(2))));
                    }
                    , 0)
            },
        },
        mounted() {
            this.obtenerFactura();
        }
    };
</script>