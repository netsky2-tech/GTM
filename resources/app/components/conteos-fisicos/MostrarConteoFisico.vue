<template>
      <div class="panel">
      <div class="panel-heading">
        <span class="panel-title">Conteo de Baterías No.: {{form?form.id_conteo_fisico:'N/D'}}</span>
         <div class="btn-group">
        <a @click="$router.go(-1)" style="margin-right: 10px;"> <i class="fa fa-arrow-left"></i> Regresar</a>
        <a @click.prevent="downloadItem('xls')" style="margin-right: 10px;">  <i class="fa fa-file-excel-o"></i> Descargar Excel</a>
        <a @click.prevent="downloadItem('pdf')" style="margin-right: 10px;">  <i class="fa fa-file-pdf-o"></i> Descargar PDF</a>
           </div>
       </div>

      <div class="panel-body">
        <div class="document">
          <div class="document-heading">
              <div class="row">
                  <div class="col col-12 text-center">
                      <div class="company-name">{{nombre_empresa}}</div>
                      <div class="company-address">{{direccion_empresa}}</div>
                      <div class="company-address"><strong>Conteo de Baterías No. : {{form.id_conteo_fisico}}</strong></div>
                  </div>
              </div>
              <br>
            <div class="row">
              <div class="col col-4">
                <p>
                  <strong>Trabajador Registra:</strong>
                </p>
                  <template v-if="form.trabajador_conteo">
                  <span>{{form.trabajador_conteo.nombre_completo}}</span>
                  <br>
                </template>
                  <template v-else>
                      <span>N/A</span>
                  </template>

              </div>

              <div class="col col-4">
                <p>
                  <strong>Bodega:</strong>
                </p>
                  <span>{{form.conteo_bodega?form.conteo_bodega.descripcion:"N/D"}}</span>
                  <br>

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
                          <div v-if="form.estado===99">
                              <span class="badge badge-default" style="font-size: 100%;">Borrador</span>
                          </div>

                <div v-if="form.estado===1">
								<span class="badge badge-primary" style="font-size: 100%;">Registrada</span>
                </div>

                <div v-if="form.estado===2">
								<span class="badge badge-success" style="font-size: 100%;">Emitida</span>
                </div>

                      </td>
                    </tr>
                    <tr>  
                      <td>Código conteo:</td>
                      <td>{{form.id_conteo_fisico}}</td>
                    </tr>
                    <tr>
                      <td>Fecha Emisión:</td>
                      <td>{{ formatDate(form.fecha_conteo)}}</td>
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
                 <!-- <th class="align-center">Precio de compra (unitario) C$</th>-->
                  <th class="align-center">Cantidad</th>
                 </tr>
               </thead>
               <tbody>
                 <template v-for="item in form.consolidado" >
              <tr>
                     <td class="width-2">
                       {{item.producto_simple.codigo_barra?item.producto_simple.codigo_barra:'N/D'}}
                     </td>
                     <td class="width-4">

                         <pre> {{item.producto_simple.descripcion}}</pre>

                     </td>

                    <!-- <td
                       class="width-2 align-right"
                     >{{item.precio_unitario | formatMoney(2)}}</td>-->
                    <td class="width-1 align-center">{{item.cantidad_prod}}</td>
                 <!-- <td
                   class="width-2 align-right"
                 >{{(item.cantidad_recibida * item.precio_unitario) | formatMoney(2)}}</td>-->
               </tr>
             </template>
           </tbody>
           <tfoot>
             <tr>
                     <td class="align-right" colspan="2">Total unidades</td>
                     <td class="align-center">{{total_cantidad_consolidado}}</td>
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
                                </tr>
                                </thead>
                                <tbody>

                                    <template v-if="form.conteo_baterias">
                                <template v-for="itemBateria in form.conteo_baterias" >
                                    <tr :key="itemBateria.id_bateria">
                                        <td class="width-4">
                                            {{itemBateria.codigo_garantia}}
                                        </td>
                                        <td class="width-4">
                                            <pre>{{itemBateria.producto_simple?itemBateria.producto_simple.text:"N/D"}}</pre>
                                        </td>
                                    </tr>
                                </template>
                                </template>
                                </tbody>
                                <tfoot>
                                <td class="align-right">Total unidades</td>
                                <td class="align-center">{{total_cantidad_baterias}}</td>
                                </tfoot>
                            </table>
                        </div>

                </div>
              </div>

          <template v-if="loading">
              <BlockUI :message="msg" :url="url"></BlockUI>
          </template>

            </div>

           </template>
           <script type="text/ecmascript-6">
           import entrada from "../../api/conteo-fisico";
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
                fecha_conteo: "",
                id_tipo_entrada: "",
                id_proveedor: 0,
                id_bodega: 0,
                consolidado: [],
                entrada_proveedor: [],
                conteo_bodega : [],
                conteo_baterias: [],
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
               downloadItem(extension) {
                       var self=this;
                       self.loading=true;
                       axios.post('inventario/conteo-fisico-1/reporte',
                           {
                               id_conteo_fisico: self.form.id_conteo_fisico,
                               extension:extension,

                           }, { responseType: 'blob' })
                           .then(({ data }) => {
                               let blob = new Blob([data], { type: 'application/pdf' })
                               extension === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                               let link = document.createElement('a');
                               link.href = window.URL.createObjectURL(blob)
                               link.download = 'ReporteConteoFisico.'+extension;
                               link.click()
                               self.loading = false;
                           }).catch(function (error) {
                           console.log(error);
                           alertify.error("Error Descargando archivo.....", 5);
                           self.loading = false;
                       });
               },
              formatDate(date) {
                  return moment(date).format('YYYY-MM-DD')
              },
               obtenerEntrada() {
                   var self = this
                   entrada.obtenerConteoFisico({
                           id_conteo_fisico: this.$route.params.id_conteo_fisico,
                           cargar_dependencias:false,
                       }, data => {
                           self.form = data.conteo_fisico;
                           self.nombre_empresa = data.nombre_empresa;
                           self.direccion_empresa = data.direccion_empresa;
                           self.form.consolidado=data.consolidado;
                           self.loading=false;
                           /*if (self.form.estado !== 99) {
                               alertify.error("La entrada ya no puede ser actualizada", 5);
                               this.$router.push({
                                   name: "entradas"
                               });
                           }*/
                       }
                       , err => {
                           self.loading = false;
                           console.log(err);
                       })
               },
           },
            computed: {

                total_cantidad_consolidado() {
                    return this.form.consolidado.reduce((carry, item) => {
                        return (carry + Number(item.cantidad_prod))
                    }, 0)
                },

                total_cantidad_baterias() {
                    return this.form.conteo_baterias.reduce((carry, item) => {
                        return (carry + 1)
                    }, 0)
                },
            },
           mounted() {
            this.obtenerEntrada();
           }
           };
           </script>