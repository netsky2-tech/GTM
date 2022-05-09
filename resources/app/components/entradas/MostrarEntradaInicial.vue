<template>
      <div class="panel">
      <div class="panel-heading">
        <span class="panel-title">Entrada Inicial Código: {{form?form.id_entrada_inicial:'N/D'}}</span>
         <div class="btn-group">
        <!--<a @click="$router.go(-1)" style="margin-right: 10px;"> <i class="fa fa-arrow-left"></i> Regresar</a>-->
<!--        <a @click.prevent="downloadItem('xls')" style="margin-right: 10px;">  <i class="fa fa-file-excel-o"></i> Descargar Excel</a>
        <a @click.prevent="downloadItem('pdf')" style="margin-right: 10px;">  <i class="fa fa-file-pdf-o"></i> Descargar PDF</a>-->
           </div>
       </div>

      <div class="panel-body">
        <div class="document">
          <div class="document-heading">
              <div class="row">
                  <div class="col col-12 text-center">
                      <div class="company-name">{{nombre_empresa}}</div>
                      <div class="company-address">{{direccion_empresa}}</div>
                      <div class="company-address"><strong>Entrada Inicial No. : {{form.id_entrada_inicial}}</strong></div>
                  </div>
              </div>
              <br>
            <div class="row">
              <div class="col col-4">
                <p>
                  <strong>Trabajador Registra:</strong>
                </p>
                  <template v-if="form.trabajador_entrada_inicial">
                  <span>{{form.trabajador_entrada_inicial.nombre_completo}}</span>
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
                  <span>{{form.entrada_bodega?form.entrada_bodega.descripcion:"N/D"}}</span>
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
                      <td>Código entrada:</td>
                      <td>{{form.id_entrada_inicial}}</td>
                    </tr>
                    <tr>
                      <td>Fecha Emisión:</td>
                      <td>{{ formatDate(form.fecha_entrada)}}</td>
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
            <template >
                <div class="document-body">
                    <table class="document-table">
                        <thead>
                        <tr>
                            <th>Descripción</th>
                            <th>OPG</th>
                            <!-- <th class="align-center">Precio de compra (unitario) C$</th>-->
                            <th class="align-center">Cantidad</th>
                            <th class="align-center">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <template v-for="item in form.entrada_productos" >
                            <tr>
                                <td class="width-4">

                                    <pre>{{item.nombre_producto}}</pre>

                                </td>
                                <td class="width-2">
                                    {{item.codigo_presentacion}}
                                </td>
                                <!-- <td
                                   class="width-2 align-right"
                                 >{{item.precio_unitario | formatMoney(2)}}</td>-->
                                <td class="width-1 align-center">{{item.cantidad}}</td>
                                <td class="width-1 align-center">{{calcularConversion(item)|formatMoney(2)}}</td>
                                <!-- <td
                                  class="width-2 align-right"
                                >{{(item.cantidad_recibida * item.precio_unitario) | formatMoney(2)}}</td>-->
                            </tr>
                        </template>
                        <tr>
                            <td></td>
                            <td ><strong>Total</strong></td>
                            <td><strong>{{total_cantidad}}</strong></td>
                            <td><strong>{{total_cantidad_total}}</strong></td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                           <!-- <td class="align-right" colspan="2">Total unidades</td>
                            <td class="align-center">{{total_cantidad_prods}}</td>-->
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
            </template>
                </div>
              </div>

          <template v-if="loading">
              <BlockUI :message="msg" :url="url"></BlockUI>
          </template>

            </div>

           </template>
           <script type="text/ecmascript-6">
           import entrada from "../../api/entradas-inventario-inicial";
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
                consolidado: [],
                entrada_proveedor: [],
                entrada_bodega : [],
                entrada_baterias: [],
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
                   itemX.conversionx= Number((Number(itemX.cantidad)* Number(itemX.escalar)).toFixed(2));
                   if(!isNaN(itemX.conversionx)){
                       return itemX.conversionx;
                   }
                   else return 0;
               },
               downloadItem(extension) {
                       var self=this;
                       self.loading=true;
                       axios.post('entradas/inventario-inicial/reporte',
                           {
                               id_entrada_inicial: self.form.id_entrada_inicial,
                               extension:extension,
                               tipo_productos:self.form.tipo_productos

                           }, { responseType: 'blob' })
                           .then(({ data }) => {
                               let blob = new Blob([data], { type: 'application/pdf' })
                               extension === 'xls' ? blob = new Blob([data], { type: 'application/octet-stream' }) : blob = new Blob([data], { type: 'application/pdf' });
                               let link = document.createElement('a');
                               link.href = window.URL.createObjectURL(blob)
                               link.download = 'ReporeInventarioInicial.'+extension;
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
              var self = this;
              entrada.obtenerEntrada(
                {
                  id_entrada_inicial: this.$route.params.id_entrada_inicial,
                    cargar_dependencias:false,
                },
                data => {
                  self.form = data.entrada_inicial;
                    self.nombre_empresa = data.nombre_empresa;
                    self.direccion_empresa = data.direccion_empresa;
                    self.form.consolidado=data.consolidado;
                    self.loading = false;
                },
                err => {
                  console.log(err);
                }
              );
            },
           },
            computed: {
                total_cantidad() {
                    return this.form.entrada_productos.reduce((carry, item) => {
                        return (carry + Number(item.cantidad))
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

                total_cantidad_consolidado() {
                    return this.form.consolidado.reduce((carry, item) => {
                        return (carry + Number(item.cantidad_prod))
                    }, 0)
                },
                total_cantidad_prods() {
                    return this.form.entrada_productos.reduce((carry, item) => {
                        return (carry + Number(item.cantidad))
                    }, 0)
                },

                total_cantidad_baterias() {
                    return this.form.entrada_baterias.reduce((carry, item) => {
                        return (carry + 1)
                    }, 0)
                },
            },
           mounted() {
            this.obtenerEntrada();
           }
           };
           </script>