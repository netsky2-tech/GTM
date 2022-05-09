<template>
    <div class="main">
      <div class="panel">
      <div class="panel-heading">
        <span class="panel-title">Levantamiento de Inventario Físico No. {{formatDate(form.f_inventario)}}</span>
         <div class="btn-group">
             <a @click="regresar" style="margin-right: 10px;"> <i class="fa fa-arrow-left"></i> Regresar</a>
       <!-- <a :disabled="descargando" @click.prevent="downloadItem('compras/solicitudes/reporte/'+form.id_inventario_fisico)">  <i class="fa fa-download"></i> Descargar</a>
        -->   </div>
       </div>
          
      <div class="panel-body">
        <div class="document">
          <div class="document-heading">
             <div class="row">
                  <div class="col col-12 text-center">
                      <div class="company-name">LUBRICANTES DE NICARAGUA, S. A.</div>
                      <div class="company-address">De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua</div>
                      <div class="company-address"><strong>Levantamiento de Inventario. {{formatDate(form.f_inventario)}}</strong></div>
                  </div>
             </div>
             <br>
            <div class="row">

                <div class="col col-6">
                    <table class="document-summary-left">
                        <tbody>
                        <tr>
                            <td>Sucursal:</td>
                            <template v-if="form.conteo_sucursal">
                                <td>{{form.conteo_sucursal.descripcion}}</td>
                            </template>
                            <template v-else>
                                <span>N/A</span>
                            </template>
                        </tr>
                        <tr>
                            <td>Bodega:</td>
                            <template v-if="form.conteo_bodega">
                                <td>{{form.conteo_bodega.descripcion}}</td>
                            </template>
                            <template v-else>
                                <span>N/A</span>
                            </template>
                        </tr>
                        <tr>
                            <td>Area:</td>
                            <template v-if="form.conteo_area">
                                <td>{{form.conteo_area.descripcion}}</td>
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
								<span class="badge badge-danger" style="font-size: 100%;">Anulado</span>
                </div>

                <div v-if="form.estado===1">
								<span class="badge badge-primary" style="font-size: 100%;">Emitida</span>
                </div>
                          <div v-if="form.estado===99">
                              <span class="badge badge-grey" style="font-size: 100%;">Borrrador</span>
                          </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Fecha Emisión:</td>
                      <td>{{ formatDate(form.f_inventario)}}</td>
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
                  <th>Código Barras</th>
                  <th>Descripción</th>
                  <th>UM</th>
                  <th class="align-center">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="item in form.conteo_productos" >
             <tr :key="item.id_inventario_fisico_producto">
                    <td class="width-2">
                      {{item.codigo_barra}}
                    </td>
                    <td class="width-2">
                        <pre>{{item.descripcion}}</pre>
                    </td>
                     <td class="width-2">
                      {{item.u_medida}}
                    </td>
                     <td class="width-1 align-center">{{item.cantidad}}</td>
                 
                  </tr>
                </template>
              </tbody>
              <tfoot>
              <tr>
                  <td class="text-right" colspan="3">Total Unidades</td>
                  <td class="text-center"><strong>{{total_cantidad}}</strong></td>
              </tr>
              </tfoot>
            </table>
          </div>


        </div>
      </div>
    </div>
    </div>
</template>
<script type="text/ecmascript-6">
import conteox from "../../api/inventario_conteo";

export default {
  data() {
    return {
      format: "dd-MM-yyyy",
        descargando:false,
      form: {
        conteo_productos:[],
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
      regresar(){
          this.$router.push({
              name: "listado-conteo-fisico"
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
                      link.download = 'ReporteInventarioFisico-'+this.form.id_inventario_fisico+'.pdf';
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
    obtenerConteo() {
      var self = this;
        conteox.obtenerConteo(
        {
            id_inventario_fisico: this.$route.params.id_inventario_fisico,
            cargar_dependencias:false
        },
        data => {
          self.form = data.conteo;
        },
        err => {
          console.log(err);
        }
      );
    },
  },
    computed: {
        total_cantidad() {
            return this.form.conteo_productos.reduce((carry, item) => {
                    return (carry + Number(item.cantidad))
            }, 0)
        },
    },
  mounted() {
    this.obtenerConteo();
  }
};
</script>