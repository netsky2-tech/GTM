<template>
    <div class="main">
      <div class="panel">
      <div class="panel-heading">
        <span class="panel-title">Solicitud de Compra No. {{form.id_solicitud_compra}}</span>
         <div class="btn-group">
             <a @click="regresar" style="margin-right: 10px;"> <i class="fa fa-arrow-left"></i> Regresar</a>
        <a :disabled="descargando" @click.prevent="downloadItem('compras/solicitudes/reporte/'+form.id_solicitud_compra)">  <i class="fa fa-download"></i> Descargar</a>
           </div>
       </div>

          <div class="form-wizard-nav">

              <template v-if="form.estado===0">
                  <div class="step complete">Rechazado</div>
                  <div class="step">Borrador</div>
                  <div class="step">Solicitado</div>
                  <div class="step">Cotizado</div>
                  <div class="step">Autorizado</div>
                  <div class="step">Orden Compra</div>
              </template>

              <template v-if="form.estado===99">
                  <div class="step complete">Borrador</div>
                  <div class="step">Solicitado</div>
                  <div class="step">Cotizado</div>
                  <div class="step">Autorizado</div>
                  <div class="step">Orden Compra</div>
              </template>

              <template v-if="form.estado===1">
                  <div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Solicitado</div>
                  <div class="step">Cotizado</div>
                  <div class="step">Autorizado</div>
                  <div class="step">Orden Compra</div>
              </template>

              <template v-if="form.estado===2">
                  <div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Solicitado</div>
                  <div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Cotizado</div>
                  <div class="step">Autorizado</div>
                  <div class="step">Orden Compra</div>
              </template>

              <template v-if="form.estado===3">
                  <div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Solicitado</div>
                  <div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Cotizado</div>
                  <div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Autorizado</div>
                  <div class="step">Orden Compra</div>
              </template>

              <template v-if="form.estado===4">
                  <div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Solicitado</div>
                  <div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Cotizado</div>
                  <div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Autorizado</div>
                  <div class="step complete"><i aria-hidden="true" class="fa fa-check-circle"></i>    Orden Compra</div>
              </template>

          </div>

      <div class="panel-body">
        <div class="document">
          <div class="document-heading">
             <div class="row">
                  <div class="col col-12 text-center">
                      <div class="company-name">LUBRICANTES DE NICARAGUA, S. A.</div>
                      <div class="company-address">De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua</div>
                      <div class="company-address"><strong>Solicitud de Compra No. {{form.id_solicitud_compra}}</strong></div>
                  </div>
             </div>
             <br>
            <div class="row">

                <div class="col col-6">
                    <table class="document-summary-left">
                        <tbody>
                        <tr>
                            <td><strong>Solicitante:</strong></td>
                            <template v-if="form.solicitud_trabajador">
                                <td>{{form.solicitud_trabajador.primer_nombre + ' '+form.solicitud_trabajador.primer_apellido}}</td>
                            </template>
                            <template v-else>
                                <td>N/A</td>
                            </template>
                        </tr>
                        <tr>
                            <td>Bodega:</td>
                            <template v-if="form.solicitud_bodega">
                                <td>{{form.solicitud_bodega.descripcion}}</td>
                            </template>
                            <template v-else>
                                <span>N/A</span>
                            </template>
                        </tr>
                        <tr>
                            <td>Area:</td>
                            <template v-if="form.solicitud_area">
                                <td>{{form.solicitud_area.descripcion}}</td>
                            </template>
                            <template v-else>
                                <span>N/A</span>
                            </template>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col col-6">
                <table class="document-summary">
                  <tbody>
                    <tr>
                      <td>Estado actual</td>
                      <td>
                <div v-if="form.estado===0">
								<span class="badge badge-danger" style="font-size: 100%;">Rechazada</span>
                </div>

                <div v-if="form.estado===1">
								<span class="badge badge-primary" style="font-size: 100%;">Solicitada</span>
                </div>

                <div v-if="form.estado===2">
								<span class="badge badge-success" style="font-size: 100%;">Cotizada</span>
                </div>

                          <div v-if="form.estado===3">
                              <span class="badge badge-success" style="font-size: 100%;">Autorizada</span>
                          </div>
                          <div v-if="form.estado===4">
                              <span class="badge badge-success" style="font-size: 100%;">Orden de Compra</span>
                          </div>
                          <div v-if="form.estado===99">
                              <span class="badge badge-grey" style="font-size: 100%;">Borrrador</span>
                          </div>

                      </td>
                    </tr>
                    <tr>  
                      <td>No. Solicitud</td>
                      <td>{{form.id_solicitud_compra}}</td>
                    </tr>
                    <tr>
                      <td>Fecha Emisión:</td>
                      <td>{{ formatDate(form.f_necesidad)}}</td>
                    </tr>
                    <tr>
                      <td>Moneda:</td>
                      <td>{{form.solicitud_moneda.descripcion}}</td>
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
                  <th>UM</th>
                  <th>Proveedor</th>
                  <th class="align-center">Cantidad</th>
                  <th class="align-center">Precio unitario {{form.solicitud_moneda.codigo}}</th>
                  <th class="align-center">Descuento %</th>
                  <th class="align-center">Total {{form.solicitud_moneda.codigo}}</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="item in form.solicitud_productos" >
             <tr :key="item.id_solicitud_compra_producto">
                    <td class="width-2">
                      {{item.solicitud_producto.codigo_sistema}}
                    </td>
                    <td class="width-2">
                        <pre>{{item.solicitud_producto.descripcion}}</pre>
                    </td>
                     <td class="width-2">
                      {{item.solicitud_producto.unidad_medida.unidad_medida}}
                    </td>
                 <td class="width-2">
                     <pre>{{item.solicitud_proveedor.nombre_comercial}}</pre>
                 </td>

                 <template v-if="form.estado !== 1">
                     <td class="width-1 align-center">{{item.cantidad_cotizado}}</td>
                     <td
                             class="width-2 align-right"
                     >{{item.precio_cotizado | formatMoney(2)}}</td>

                     <td
                             class="width-2 align-right"
                     >{{item.descuento | formatMoney(2)}}</td>
                 </template>
                 <template v-else>
                     <td class="width-1 align-center">{{item.cantidad}}</td>
                     <td
                             class="width-2 align-right"
                     >{{item.precio_info | formatMoney(2)}}</td>

                     <td
                             class="width-2 align-right"
                     >{{item.descuento | formatMoney(2)}}</td>

                 </template>

                 <td
                         class="width-2 align-right"
                 >{{sub_total(item)| formatMoney(2)}}</td>


                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4"></td>
                  <td colspan="3">Total Antes de descuento {{form.solicitud_moneda.codigo}}</td>
                  <td class="align-right"><strong>{{total_subt | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                    <td colspan="4"></td>
                    <td colspan="3">Descuento {{form.solicitud_moneda.codigo}}</td>
                    <td> <strong>{{total_descuento | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                    <td colspan="4"></td>
                    <td colspan="3">Impuesto {{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}}</td>
                    <td> <strong>{{form.iva | formatMoney(2)}}</strong></td>
                </tr>
                <tr>
                    <td colspan="4"></td>
                    <td colspan="3">
                        <strong>Total {{form.solicitud_moneda ? form.solicitud_moneda.codigo : ''}} </strong>
                    </td>
                    <td class="align-right">
                        <strong>{{Number(form.total)+Number(form.iva) | formatMoney(2)}}</strong>
                    </td>
                </tr>
              </tfoot>
            </table>
          </div>


            <div class="document-footer row">
                <div class="col col-12">
                    <strong>Observaciones:</strong>
                    <div class="document-terms">
                            <pre>{{form.observacion}}</pre>
                    </div>
                </div>
            </div>


        </div>
      </div>
    </div>
    </div>
</template>
<script type="text/ecmascript-6">
import solicitud from "../../api/solicitudes_compras";

export default {
  data() {
    return {
      format: "dd-MM-yyyy",
        descargando:false,
      form: {
        solicitud_productos:[],
        solicitud_moneda:"",
        total: 0,
        sub_total: 0,
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {

      sub_total(itemX) {

          if(this.form.estado !==1){
              itemX.subtotal= Number((Number(itemX.precio_cotizado)* Number(itemX.cantidad_cotizado)).toFixed(2));
          }
          else{
              itemX.subtotal= Number((Number(itemX.precio_info)* Number(itemX.cantidad)).toFixed(2));
          }


          itemX.monto_descuento= Number(Number(itemX.subtotal* Number(itemX.descuento/100)).toFixed(2));
          itemX.total =itemX.subtotal - itemX.monto_descuento;
          if(!isNaN(itemX.total)){
              return itemX.total;
          }
          else return 0;
      },

      regresar(){
          this.$router.push({
              name: "listado-solicitudes-compras"
          });
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
                      link.download = 'ReporteSolicitudCompra-'+this.form.id_solicitud_compra+'.pdf';
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
    obtenerSolicitud() {
      var self = this;
        solicitud.obtenerSolicitud(
        {
          id_solicitud_compra: this.$route.params.id_solicitud_compra,
            cargar_dependencias:false
        },
        data => {
          self.form = data.solicitud;
        },
        err => {
          console.log(err);
        }
      );
    },
  },
    computed: {

        total_cantidad() {
            return this.form.solicitud_productos.reduce((carry, item) => {

                if(this.form.estado !==1){
                    return (carry + Number(item.cantidad_cotizado))
                }
                else{
                    return (carry + Number(item.cantidad))
                }


            }, 0)
        },
        total_subt() {
            return this.form.solicitud_productos.reduce((carry, item) => {
                    if(this.form.estado !==1){
                        return(carry + Number((Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2))));
                    }
                    else{
                        return(carry + Number((Number(item.cantidad * item.precio_info).toFixed(2))));
                    }

                }
                , 0)
        },
        total_descuento() {
            return this.form.solicitud_productos.reduce((carry, item) => {

                    if(this.form.estado !==1){
                        return(carry + Number( (Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2))* Number(item.descuento/100).toFixed(2)));
                    }
                    else{

                        return(carry + Number( (Number(item.cantidad * item.precio_info).toFixed(2))* Number(item.descuento/100).toFixed(2)));
                    }

                    }
                , 0)
        },
        gran_total() {
            this.form.total =  this.form.solicitud_productos.reduce((carry, item) => {

                    if(this.form.estado !==1){
                        return(carry + Number( (Number(item.cantidad_cotizado * item.precio_cotizado).toFixed(2))* Number( 1- (item.descuento/100)).toFixed(2)));
                    }
                    else{
                        return(carry + Number( (Number(item.cantidad * item.precio_info).toFixed(2))* Number( 1- (item.descuento/100)).toFixed(2)));
                    }

                }
                , 0)

            return this.form.total;
        },
    },
  mounted() {
    this.obtenerSolicitud();
  }
};
</script>