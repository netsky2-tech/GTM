<template>
      <div class="panel">
      <div class="panel-heading">
        <span class="panel-title">Entrada Código: {{form.codigo_entrada}}</span>
         <div class="btn-group">
        <a @click="$router.go(-1)" style="margin-right: 10px;"> <i class="fa fa-arrow-left"></i> Regresar</a>
             <!--<a @click.prevent="descargarReporteEntrada()">  <i class="fa fa-download"></i> Descargar</a>-->
            </div>
       </div>

      <div class="panel-body">
        <div class="document">
          <div class="document-heading">
             <div class="row">
                  <div class="col col-12 text-center">
                      <div class="company-name">{{nombre_empresa}}</div>
                      <div class="company-address">{{direccion_empresa}}</div>
                      <div class="company-address"><strong>Entrada No. : {{form.codigo_entrada}}</strong></div>
                  </div>
             </div>
             <br>
            <div class="row">

              <div class="col col-4">
                <p>
                  <strong>Proveedor:</strong>
                </p>
                  <template v-if="form.entrada_proveedor">
                <router-link style="color: #000000;" :to="{ name: 'actualizar-proveedor', params: { id_proveedor: form.id_proveedor } }" target="_blank">

                  <span>{{form.entrada_proveedor.nombre_comercial}}</span>
                  <br>
                  <span>{{form.entrada_proveedor.numero_ruc}}</span>
                  <br>
                  <span>{{form.entrada_proveedor.direccion}}</span>
                    <p>
                        <strong>Contacto Proveedor:</strong>
                    </p>
                  <pre>{{form.entrada_proveedor.contacto_proveedor}}</pre>
                </router-link>
                </template>
                  <template v-else>
                      <span>N/A</span>
                  </template>

              </div>

              <div class="col col-4">
                <p>
                  <strong>Bodega:</strong>
                </p>
                <router-link style="color: #000000;" :to="{ name: 'actualizar-bodega', params: { id_bodega: form.id_bodega } }"  target="_blank">
                  <span>{{form.entrada_bodega.descripcion}}</span>
                  <br>
                </router-link>
                 <br>
                 <p>
                  <strong>Tipo de entrada:</strong>
                </p>
                 <span>{{form.entrada_tipo.descripcion}}</span>
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
								<span class="badge badge-success" style="font-size: 100%;">Recibida</span>
                </div>

                      </td>
                    </tr>
                    <tr>  
                      <td>Código entrada:</td>
                      <td>{{form.codigo_entrada}}</td>
                    </tr>
                    <tr>
                      <td>Fecha Emisión:</td>
                      <td>{{ formatDate(form.fecha_entrada)}}</td>
                    </tr>
                    <tr>
                        <td>Fecha Recepción:</td>
                        <td>{{ form.fecha_recepcion ? formatDate(form.fecha_recepcion):'N/D'}}</td>
                    </tr>
                    <!--<tr>
                      <td>Moneda:</td>
                      <td>Córdobas</td>
                    </tr>-->
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
                  <th>OPG</th>
                 <!-- <th class="align-center">Precio de compra (unitario) C$</th>-->
                  <th class="align-center">Cantidad Solicitada</th>
                    <th class="align-center">Cantidad Recibida</th>
                    <th class="align-center">Total</th>
                 </tr>
               </thead>
               <tbody>
                 <template v-for="item in form.entrada_productos" >
              <tr>
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
                    <td class="width-1 align-center">{{item.cantidad_solicitada}}</td>
                  <td class="width-1 align-center">{{item.cantidad_recibida}}</td>
                  <td class="width-1 align-center">{{calcularConversion(item)|formatMoney(2)}}</td>
                 <!-- <td
                   class="width-2 align-right"
                 >{{(item.cantidad_recibida * item.precio_unitario) | formatMoney(2)}}</td>-->
               </tr>
             </template>
                 <tr>
                     <td colspan="2"></td>
                     <td ><strong>Total</strong></td>
                     <td><strong>{{total_cantidad_solicitada}}</strong></td>
                     <td><strong>{{total_cantidad_recibida}}</strong></td>
                     <td><strong>{{total_cantidad_total}}</strong></td>
                 </tr>
           </tbody>
           <tfoot>
             <tr>
               <td colspan="3"></td>
                 <!--      <td colspan="2">Sub Total</td>
                       <td class="align-right">C$ {{total_subt | formatMoney(2)}}</td>-->
                     </tr>
                     <tr>
                       <td colspan="3"></td>
                         <!--  <td colspan="2">
                            <strong>Total</strong>
                          </td>
                            <td class="align-right">
                               <strong>C$ {{gran_total | formatMoney(2)}}</strong>
                             </td>-->
                        </tr>
                      </tfoot>
                    </table>
                  </div>


                    <!--<template v-if="form.entrada_productos">
                        <div class="col col-4">
                            <p>
                                <strong>Detalle de Baterías Recibidas:</strong>
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
                                <template v-for="item2 in form.entrada_productos" >
                                    <template v-if="item2.entrada_producto_baterias">
                                <template v-for="itemBateria in item2.entrada_producto_baterias" >
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
              </div>

          <template v-if="loading">
              <BlockUI :message="msg" :url="url"></BlockUI>
          </template>

            </div>

           </template>
           <script type="text/ecmascript-6">
           import entrada from "../../api/entradas";
           import loadingImage from "../../assets/images/block50.gif";

           export default {
           data() {
            return {
                loading:true,
                msg: 'Cargando el contenido espere un momento',
                url : '/public'+loadingImage,
                nombre_empresa:'',
                direccion_empresa:'',
              format: "dd-MM-yyyy",
                descargando:false,
              form: {
                codigo_entrada: "",
                fecha_entrada: "",
                id_tipo_entrada: "",
                id_proveedor: 0,
                id_bodega: 0,
                detalleProductos: [],
                entrada_proveedor: [],
                entrada_bodega : [],
                entrada_productos: [],
                entrada_tipo:[],
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
                   itemX.conversionx= Number((Number(itemX.cantidad_recibida)* Number(itemX.escalar)).toFixed(2));
                   if(!isNaN(itemX.conversionx)){
                       return itemX.conversionx;
                   }
                   else return 0;
               },
               descargarReporteEntrada() {
                   if(!this.loading){
                       var self=this;
                       self.loading=true;
                       var extensionx = 'pdf';
                       alertify.success("Descargando datos, espere un momento.....",5);
                       axios.post('entradas/reporte',
                           {
                               id_entrada : self.form.id_entrada,
                               extension : extensionx
                           }, { responseType: 'blob' })
                           .then(({ data }) => {
                               let blob = new Blob([data], { type: 'application/pdf' })
                               extensionx === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                               let link = document.createElement('a');
                               link.href = window.URL.createObjectURL(blob)
                               link.download = 'ReporteEntrada.'+ extensionx;
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
            obtenerEntrada() {
              var self = this;
              entrada.obtenerEntrada(
                {
                  id_entrada: this.$route.params.id_entrada
                },
                data => {
                  self.form = data.entrada;
                    self.nombre_empresa = data.nombre_empresa;
                    self.direccion_empresa = data.direccion_empresa;
                    self.loading = false;
                },
                err => {
                  console.log(err);
                }
              );
            },
           },
            computed: {

                total_cantidad_solicitada() {
                    return this.form.entrada_productos.reduce((carry, item) => {
                        return (carry + Number(item.cantidad_solicitada))
                    }, 0)
                },
                total_cantidad_recibida() {
                    return this.form.entrada_productos.reduce((carry, item) => {
                        return (carry + Number(item.cantidad_recibida))
                    }, 0)
                },
                total_cantidad_total() {
                    return this.form.entrada_productos.reduce((carry, item) => {
                        return (carry + Number(item.conversionx))
                    }, 0)
                },

                total_subt() {
                    return this.form.entrada_productos.reduce((carry, item) => {
                            return(carry + Number((Number(item.cantidad_recibida * item.precio_unitario).toFixed(2))));
                        }
                        , 0)
                },
                gran_total() {
                    return this.form.entrada_productos.reduce((carry, item) => {
                            return(carry + Number((Number(item.cantidad_recibida * item.precio_unitario).toFixed(2))));
                        }
                        , 0)
                },
            },
           mounted() {
            this.obtenerEntrada();
           }
           };
           </script>