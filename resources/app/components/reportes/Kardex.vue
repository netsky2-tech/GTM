<template>
	<div class="main">
		<div class="content-box">
			<div class="content-box-header">
				<div class="box-title">Reporte Kardex</div>
				<div class="box-description">Listado detallado de movimientos de productos</div>
			</div>
			<div class="row">
			 <div class="col-sm-3">
              <div class="form-group">
                <label for>Bodegas:</label>
                <v-select
                  v-model="bodegax"
                  label="nombre"              
                  :options="bodegas"
                   v-on:input="cargarProductosBodega(bodegax)"
                ></v-select>
                <ul class="error-messages">
                  <li v-for="message in errorMessages.bodegax" :key="message" v-text="message"></li>
                </ul>
              </div>
            </div>

 <div class="col-sm-3">
   <div class="form-group">
                <label for>Producto</label>
              <v-select
                          v-model="productox"
                          label="nombre_producto"
                          :options="productos"
                        ></v-select>
                <ul class="error-messages">
                  <li v-for="message in errorMessages.producto_bodega" :key="message" v-text="message"></li>
                </ul>
              </div>
                </div>

                <div class="col-md-6 sm-text-center">
					 <button @click="obtenerReporte(productox)" class="btn btn-success">Buscar datos</button>  
				</div>

			</div>
			<div class="table-responsive mt-3">
				<table class="table table-striped table-bordered">
					<thead>
						<tr>
							<th>Fecha</th>
							<th>Descripción</th>
              <th>Bodega</th>
              <th class="text-center table-number">Entradas</th>
							<th class="text-center table-number">Salidas</th>
							<th class="text-center table-number">Saldo</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="movimiento in datos_movimientos">	
							<td>{{ movimiento.fecha }}</td>
              <td>{{ movimiento.nombre }}</td>
						  <td>{{ movimiento.descripcion_comprobante }}</td>
              	<td class="text-center">{{ movimiento.entrada }}</td>
              	<td class="text-center">{{ movimiento.salida }}</td>
                <td class="text-center">{{ movimiento.saldo }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import salida from "../../api/salidas";
import reporte from "../../api/reportes_inventario";
import producto from "../../api/productos";
import bodega from "../../api/bodegas";
export default {
  data() {
    return {
      format: "dd-MM-yyyy",
      datos_movimientos:[],
      productos: [],
      productox: "",
      bodegas: [],
      bodegax: "",
      errorMessages: [],
		descargando : false,
    };
  },
  methods: {
    obtenerReporte(Prodx) {
      var self = this;
      reporte.reporteKardex(
        {
          id_bodega_producto: Prodx.id_bodega_producto
        },
        data => {
          self.datos_movimientos = data;
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    },
        cargarProductosBodega(bodId) {
      //var bodega = JSON.parse(bodId);

        var self = this;
        self.productos=[];
        self.productox="";
        //console.log('bodega seleccionada'+bodId.id_bodega);
        producto.obtenerProductosBodega(
          {
            id_bodega: bodId.id_bodega
          },
          data => {
            self.productos = data;
          },
          err => {
            console.log(err);
          }
        );
      
    },
        obtenerTodasBodegas() {
      var self = this;
      bodega.obtenerTodasBodegas(
        data => {
          self.bodegas = data;
        },
        err => {
          console.log(err);
        }
      );
    },
  },
  mounted() {
   this.obtenerTodasBodegas();
  }
};
</script>