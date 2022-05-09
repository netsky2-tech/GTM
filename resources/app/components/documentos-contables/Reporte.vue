<template>
      <div class="panel">
      <div class="panel-heading">
        <span class="panel-title">Salida Código: {{form.codigo_salida}}</span>
<div>
                 <router-link :to="{ name: 'listado-documentos' }" class="btn" title="Regresar">
                        <i class="fa fa-arrow-left"></i>
                    </router-link>
                    <div class="btn-group">
                        <router-link :to="`/public/salida/pdf/${form.id_salida}`" target="_blank" class="btn" title="Ver PDF">
                            <i class="fa fa-file-pdf-o"></i>
                       </router-link>
                         <router-link :to="`/public/salida/pdf/${form.id_salida}?mode=download`" target="_blank" class="btn" title="Descargar PDF">
                            <i class="fa fa-download"></i>
                       </router-link>
                    </div>

                   <div class="btn-group">
                  
                   <template v-if="[0,1,2].indexOf(form.estado) >= 0">
                     <button class="btn btn-info"><i class="fa fa-files-o">   Duplicar</i></button>
                   </template>
                  </div>
                  <div class="btn-group">
                   <template v-if="[1].indexOf(form.estado) >= 0">
                     <button class="btn btn-success" @click="cambiarEstado(2)"><i class="fa fa-check">   Aprobar</i></button>
                   </template>
                  </div>
                    <div class="btn-group">
                   <template v-if="[1].indexOf(form.estado) >= 0">
                     <button class="btn btn-danger" @click="cambiarEstado(0)"><i class="fa fa-trash-o">   Cancelar</i></button>
                   </template>


                   </div>
                   </div>
            </div>


      <div class="panel-body">
        <div class="document">
          <div class="document-heading">
             <div class="row">
                  <div class="col col-4">
                   <img src="/public/app/images/logo.png" style="height: auto; width: 150px;">  
                  </div>
             </div>
             <br>
            <div class="row">
               <div class="col col-4">
                <p>
                  <strong>Bodega Salida:</strong>
                </p>
                <router-link :to="`/public/bodegas/actualizar/${form.salida_bodega.id_bodega_salida}`">
                  <span>{{form.salida_bodega.nombre}}</span>
                  <br>
                </router-link>
                 <br>
                 <p>
                  <strong>Tipo de salida:</strong>
                </p>
                 <span>{{form.salida_tipo.tipo_salida}}</span>
                  <br>
              </div> 
              <div v-if="form.id_tipo_salida==1" class="col col-4">
                <p>
                  <strong>Bodega Entrada:</strong>
                </p>
                <router-link :to="`/public/bodegas/actualizar/${form.id_bodega_entrada}`">
                  <span>{{form.salida_bodega_entrada.nombre}}</span>
                  <br>
                </router-link>
                 <br>
                  <br>
              </div>
              <div v-else class="col col-4">

              </div>

              <div class="col col-4">
                <table class="document-summary">
                  <tbody>
                    <tr>
                      <td>Estado actual</td>
                      <td>
                         <div v-if="form.estado==0">
								<span class="badge badge-danger" style="font-size: 100%;">Cancelada</span>
                </div>
                        <div v-if="form.estado==1">
								<span class="badge badge-primary" style="font-size: 100%;">Emitida</span>
                </div>

                <div v-if="form.estado==2">
								<span class="badge badge-success" style="font-size: 100%;">Completada</span>
                </div>


                      </td>
                    </tr>
                    <tr>  
                      <td>Código salida:</td>
                      <td>{{form.codigo_salida}}</td>
                    </tr>
                    <tr>
                      <td>Fecha:</td>
                      <td>{{form.fecha_salida}}</td>
                    </tr>
                    <tr>
                      <td>Moneda:</td>
                      <td>Córdobas</td>
                    </tr>
                    <tr>
                      <td>Total:</td>
                      <td>{{form.total | formatMoney(2)}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          <div class="row">
              <div class="col col-12">
               <p>
                  <strong>Observaciones de la salida:</strong>
                </p>
                 <span>{{form.descripcion_salida}}</span>
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
                  <th>Unidad de medida</th>
                  <th class="align-center">Precio de compra (unitario)</th>
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
                    <td class="width-1 align-center">{{item.cantidad}}</td>
                    <td
                      class="width-2 align-right"
                    >{{(item.cantidad * item.precio_unitario) | formatMoney(2)}}</td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3"></td>
                  <td colspan="2">Sub Total</td>
                  <td class="align-right">{{form.sub_total | formatMoney(2)}}</td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td colspan="2">
                    <strong>Total</strong>
                  </td>
                  <td class="align-right">
                    <strong>{{form.total | formatMoney(2)}}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
           <div class="document-footer row">
            <div class="col col-12">
              <strong>Registro de actividades:</strong>
              <div class="document-terms">
                 <template v-for="item in form.log_registro" >
                <pre>* Fecha: {{item.fecha_log}}</pre>
                 <pre>{{item.registro}}</pre>
                  <br>
                 </template>
             </div>
            </div>
          </div>
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
      form: {
        codigo_salida: "",
        fecha_salida: "",
        id_tipo_salida: "",
        id_bodega_entrada: "",
        id_bodega_salida: "",
        detalleProductos: [],
        salida_bodega : [],
        salida_productos: [],
        salida_tipo:[],
        total: 0,
        sub_total: 0,
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    obtenerSalida() {
      var self = this;
      salida.obtenerSalida(
        {
          id_salida: this.$route.params.id_salida
        },
        data => {
          self.form = data;
        },
        err => {
          console.log(err);
        }
      );
    },
    cambiarEstado(estadox) {
            	var self = this
				salida.cambiarEstado({
          id_salida:this.$route.params.id_salida,
					estado: estadox
				}, data => {
					alertify.success("Salida cambiada correctamente",5);
					this.obtenerSalida()
				}, err => {
					console.log(err)
				})
      }
  },
  mounted() {
    this.obtenerSalida();
  }
};
</script>