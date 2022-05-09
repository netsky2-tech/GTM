<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Modificar Transformación</div>
                        <div class="box-description">Formulario para modificar una transformación</div>
                    </div>
                    <form>
                        <div class="row">

                           <!-- <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Tipo:</label>
                                    <select :disabled="true" class="form-control" v-model.number="form.tipo_producto">
                                        <option value="1">Producto</option>
                                        <option value="2">Servicio</option>
                                    </select>
                                </div>
                            </div>-->

                           <!-- <div class="col-sm-6">
                                <div class="form-group">
                                    <label for=""> Rubro:</label>
                                    <v-select :disabled="true" :options="rubros" label="descripcion"
                                              v-model="form.rubro_producto"></v-select>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.id_rubro"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>-->

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label> Bodega</label>
                                        <v-select
                                            label="descripcion"
                                            v-model="form.bodega"
                                            placeholder="Seleccione un bodega"
                                            :options="bodegas"
                                            v-on:input="obtenerProductosBodega()"

                                        ></v-select>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.codigo_sistema"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <!--<div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Nombre producto</label>
                                    <input class="form-control" placeholder="Nombre" v-model="form.nombre_comercial">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.nombre_comercial"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-2">
                                <div class="form-group">
                                    <label for=""> Unidad de medida</label>
                                    <v-select :disabled="tipoProducto" :options="ums" label="unidad_medida"
                                              v-model="form.unidad_medida"></v-select>
                                    <ul class="error-messages">
                                        <li :key="message"
                                            v-for="message in errorMessages[`unidad_medida.id_unidad_medida`]"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>-->
                         <!--   <div class="col-sm-3">
                                <div class="form-group">
                                    <barcode v-bind:value="form.codigo_sistema" :height="20" :width="2"  :margin-top="40" format="CODE128">
                                        Generando Código de Barras
                                    </barcode>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Imágen</label>
                                    <div class="uploader">
                                        <button class="btn btn-primary" id="uploader-button" type="button">Escoger
                                            Imágen
                                        </button>
                                    </div>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.imagen"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>-->
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="alert alert-success">
                                    <span><strong>Producto Origen</strong></span>
                                </div>
                                <div class="row">
                                    <div class="col-sm-10">
                                        <div class="form-group">
                                            <label >Producto</label>
                                            <v-select
                                                    :options="productos"
                                                    label="text"
                                                    placeholder="Seleccione un producto"
                                                    v-model="form.productox"
                                            ></v-select>
                                            <ul class="error-messages">
                                                <li v-for="message in errorMessages.productox" :key="message" v-text="message"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!--<div class="col-sm-5">
                                        <div class="form-group">
                                            <label >Código Presentación</label>
                                            <v-select
                                                    :options="form.presentaciones"
                                                    ref="presentacionx"
                                                    label="codigo"
                                                    placeholder="Seleccione una presentación"
                                                    v-model="detalleForm.presentacionx"
                                            ></v-select>
                                            <ul class="error-messages">
                                                <li v-for="message in errorMessages.presentacionx" :key="message" v-text="message"></li>
                                            </ul>
                                        </div>
                                    </div>-->
                                    <div class="col-sm-2">
                                        <div class="form-group">
                                            <label>Cantidad</label>
                                            <input @change="detalleForm.cantidad = Math.max(Math.min(Math.round(detalleForm.cantidad), form.productox.cantidad_disponible), 1)"
                                                    class="form-control" ref="cantidad"type="number" min="1" v-model.number="detalleForm.cantidad">
                                            <ul class="error-message">
                                                <li
                                                        :key="message"
                                                        v-for="message in errorMessages.cantidad"
                                                        v-text="message"
                                                ></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div></div>
                                    <div class=	"col-sm-4">
                                        <div class="form-group">
                                            <label for> </label>
                                            <button @click="agregarDetalle" type="button" class="btn btn-info btn-agregar" > Agregar producto</button>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <ul>
                                            <li :key="message"
                                                v-for="message in errorMessages.salida_transformacion"
                                                v-text="message"
                                            ></li>
                                        </ul>
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>Producto</th>
                                                <th>Presentación</th>
                                                <th>Cantidad</th>
                                                <th>Escalar</th>
                                                <th>Conversión</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <template v-for="(item,index) in form.salida_transformacion">
                                                <tr>
                                                    <td style="width: 2%">
                                                        <button @click="eliminarLinea(item, index)">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                            <input class="form-control" disabled v-model="item.descripcion_producto_salida">
                                                        <ul class="error-message">
                                                            <li
                                                                    :key="message"
                                                                    v-for="message in errorMessages[`salida_transformacion.${index}.id_producto_salida`]"
                                                                    v-text="message"
                                                            ></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <input class="form-control" disabled v-model="item.descripcion_presentacion_salida">
                                                        <ul>
                                                            <il
                                                                    :key="message"
                                                                    v-for="message in errorMessages[`conteo_produtos.${index}.id_presentacion_salida`]"
                                                                    v-text="message"
                                                            ></il>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <input class="form-control" disabled  type="number" v-model.number="item.cantidad_salida">
                                                        <ul class="error-message">
                                                            <li
                                                                    :key="message"
                                                                    v-for="message in errorMessages[`salida_transformacion.${index}.cantidad_salida`]"
                                                                    v-text="message"
                                                            ></li>
                                                        </ul>
                                                    </td>
                                                    <!--<td>
                                                        <input class="form-control" disabled v-model.number="item.presentacionx.simbolo_um">
                                                        <ul	class="error-message">
                                                            <li
                                                                :key="message"
                                                                v-for="message in errorMessages[`conteo_productos.${index}.presentacionx.id_presentacion`]"
                                                                v-text="message"
                                                            ></li>
                                                        </ul>
                                                    </td>-->
                                                    <td>
                                                        <input class="form-control" disabled v-model.number="item.escalar_salida">
                                                        <ul class="error-message">
                                                            <li
                                                                    :key="message"
                                                                    v-for="message in errorMessages[`salida_transformacion.${index}.escalar_salida`]"
                                                            ></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <strong>{{calcularConversion(item)|formatMoney(2)}}</strong>
                                                    </td>
                                                </tr>
                                                <tr></tr>
                                            </template>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <td class="item-footer" colspan="3">Total Unidades</td>
                                                <td class="item-footer" colspan="2">
                                                    <strong>{{total_cantidad}}</strong>
                                                </td>
                                                <td class="item-footer">
                                                    <strong>k {{total_conversion|formatMoney(2)}}</strong>
                                                </td>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-6">
                                <div class="alert alert-success">
                                    <span><strong>Productos Transformados</strong></span>
                                </div>
                                <div class="row">
                                    <div class="col-sm-10">
                                        <div class="form-group">
                                            <label >Producto</label>
                                            <v-select
                                                    :options="productos"
                                                    label="text"
                                                    placeholder="Seleccione un producto"
                                                    v-model="form.producto"
                                            ></v-select>
                                            <ul class="error-messages">
                                                <li v-for="message in errorMessages.productox" :key="message" v-text="message"></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div></div>
                                    <div class=	"col-sm-4">
                                        <div class="form-group">
                                            <label for> </label>
                                            <button @click="agregarDetalleEntrada" type="button" class="btn btn-info btn-agregar" > Agregar Transformación</button>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <ul>
                                            <li :key="message"
                                                v-for="message in errorMessages.entrada_transformacion"
                                                v-text="message"
                                            ></li>
                                        </ul>
                                        <table class="table table-bordered">
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>producto</th>
                                                <th>Nueva Presentación</th>

                                                <th>Cantidad</th>
                                                <th>Conversión</th>
                                            </tr>
                                            </thead>
                                            <template v-for="(item,index) in form.entrada_transformacion">
                                                <tr>
                                                    <td style="width: 2%">
                                                        <button @click="eliminarLineaConversion(item, index)">
                                                            <i class="fa fa-trash"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <input class="form-control" disabled v-model="item.descripcion_producto_entrada">
                                                    </td>
                                                    <td>
                                                        <input class="form-control" disabled v-model="item.descripcion_presentacion_entrada">
                                                        <ul>
                                                            <il
                                                                    :key="message"
                                                                    v-for="message in errorMessages['']"
                                                            ></il>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <strong>{{calcularCantidadEntrante(item)|formatMoney(2)}}</strong>
                                                        <!--<strong>{{calcularTotalCantidadEntrada|formatMoney(2)}}</strong>-->
                                                    </td>
                                                    <td>
                                                        <strong>{{calcularConversionEntrada(item)|formatMoney(2)}}</strong>
                                                    </td>
                                                </tr>
                                            </template>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>


                    <div class="row">

                        <div class="col-md-6">
                            <!--<div class="content-box-footer text-left">
                                <template v-if="form.activo===1">
                                    <button @click="desactivar(form.id_producto)" class="btn btn-danger"><i
                                            class="fa fa-trash-o"> Desactivar</i></button>
                                </template>
                                <template v-else>
                                    <button @click="activar(form.id_producto)" class="btn btn-success"><i
                                            class="fa fa-check-square"> Activar</i></button>
                                </template>
                            </div>-->
                        </div>

                        <div class="col-md-6">
                            <div class="content-box-footer text-right">
                                <router-link tag="button" :to="{ name: 'transformaciones' }">
                                    <button type="button" class="btn btn-default">Cancelar</button>
                                </router-link>
                              <template v-if="form.estado === 2 || form.estado ===1">
                                       <button
                                                type="button"
                                                class="btn btn-primary"
                                                @click="actualizarProducto(2)"
                                                :disabled="btnAction != 'Guardar' ? true : false"
                                        >{{ btnAction }}
                                        </button>
                                        <button
                                                type="button"
                                                class="btn btn-success"
                                                @click="emitirTransformacion(3)"
                                                :disabled="btnEmitir != 'Emitir' ? true : false"
                                        >{{ btnEmitir }}
                                        </button>
                              </template>
                            </div>
                        </div>
                      <template v-if="loading">
                        <BlockUI :message="msg" :url="url"></BlockUI>
                      </template>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>


<script type="text/ecmascript-6">
    import producto from '../../api/productos'
    import rubro from '../../api/rubros'
    import impuesto from '../../api/impuestos'
    import um from '../../api/unidad_medida'
    import loadingImage from '../../assets/images/block50.gif'
    import tipo from "../../api/productopresentacion";
    import transformaciones from "../../api/transformaciones";

    export default {
        data() {
            return {
              loading:true,
              msg: 'Cargando contenido, espere un momento',
              url : '/public'+loadingImage,   //It is important to import the loading image then use here
                tipoProducto: true,
                rubros: [],
                impuestos: [],
                ums: [],
                bodegas:[],
                detalleForm: {
                  presentacionx:'',
                    cantidad:0,

                },

                form: {
                    bodega: '',
                    producto: '',
                    productox: '',
                    unidad_medida:'',
                    estado:'',
                    cantidadx: 0,
                    conversion_salida:0,
                    totalConversion:0,
                    totalCantidad:'',
                    salida_transformacion: [],
                    entrada_transformacion: [],
                    detalleProductos:'',
                    presentacion: '',
                    precio_compra: 0,
                    precio_distribuidor: 0,
                    codigo_sistema: '',
                    codigo_consecutivo: 0,
                    nombre_comercial: '',
                    descripcion: '',
                    costo_estandar: 0,
                    precio_sugerido: 0,
                    existencia_min: 1,
                    existencia_max: 1,
                    cantidad_inicial: 0,
                    tipo_producto: 0,
                    codigo_barra: '',
                    imagen: '',
                    rubro_producto: '',
                    impuesto_producto: '',
                    unidad_medida: '',
                    conversion: 0,
                    totalEscalar: 0,

                },
                uploader: [],
                productos: [],
                unidades_medidas: [],
                transformaciones: [],
                presentaciones: [],

                btnAction: "Guardar",
                btnEmitir: "Emitir",
                errorMessages: []
            };
        },
        methods: {

            obtenerProductosBodega(){
                var self = this;
                self.detalleForm.productox = [];
                self.productos = [];


                self.form.bodega.productos_bodega.forEach((bodega_producto, key) =>{
                    self.productos.push({
                        codigo_sistema: bodega_producto.producto.codigo_sistema,
                        costo_promedio: Number(bodega_producto.producto.costo_promedio),
                        descripcion: bodega_producto.producto.descripcion,
                        id_producto: bodega_producto.producto.id_producto,
                        id_bodega_producto: bodega_producto.id_bodega_producto,
                        nombre_comercial: bodega_producto.producto.nombre_comercial,
                        cantidad_disponible: bodega_producto.cantidad,
                        unidad_medida: bodega_producto.producto.unidad_medida,
                        text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial+ '-' + bodega_producto.codigo_presentacion+' ( ' + bodega_producto.no_lote + ' ) ',
                        codigo_presentacion: bodega_producto.presentacion.codigo,
                        escalar: bodega_producto.escalar,
                        id_origen: bodega_producto.presentacion.id_origen,
                        id_presentacion: bodega_producto.id_presentacion,
                    })
                });

            },

                 /*cargarPresentaciones(){
                var self = this;
                self.loading = true;
                transformaciones.cargarPresentacionesProductos({
                        id_producto: self.detalleForm.productox.id_producto,
                    },data=>{
                        if(data.presentaciones !== null){
                            self.form.presentaciones = data.presentaciones;
                        }else{
                            alertify.warning("No se encuentran presentaciones para este producto.",5);
                            self.form.presentaciones = [];
                        }
                        self.loading = false;
                    },err =>{
                        if(err.id_producto){
                            self.form.presentaciones = [];
                            alertify.warning(err.id_producto,5);
                            self.loading = false;
                        }
                    }
                )
            },*/
            agregarDetalle() {
                let self = this;
                if(this.form.productox && this.form.producto /* > 0*/){
                    if(this.detalleForm.cantidad > 0) {
                        if(this.form.producto){


                            let i = 0;
                            let keyx = 0;
                            if (self.form.salida_transformacion) {
                                self.form.salida_transformacion.forEach((presentacion_salida, key) => {

                                    if (self.form.productox.id_presentacion === presentacion.productox.id_presentacion) {
                                        i++;
                                        keyx = key;



                                    }
                                });
                            }

                            if (i === 0) {
                                this.form.salida_transformacion.push({
                                    id_presentacion_salida: this.form.productox.id_presentacion,
                                    descripcion_presentacion_salida: this.form.productox.codigo_presentacion,
                                    id_producto: this.form.productox.id_producto,
                                    descripcion_producto_salida: this.form.productox.text,
                                    id_bodega_producto: this.form.productox.id_bodega_producto,
                                    cantidad_salida: this.detalleForm.cantidad,
                                    /*relacion_um_estandar: this.detalleForm.presentacionx.relacion_um_estandar,*/
                                    escalar_salida: this.form.productox.escalar,
                                    origen: this.form.productox.id_origen,
                                    conversion_salida : this.form.totalConversion,
                                    codigo_sistema: this.form.productox.codigo_sistema
                                });
                                /*this.detalleForm.presentacionx = '',*/
                                /*this.detalleForm.productox = '',*/
                                this.detalleForm.cantidad = 0

                            } else {
                                this.$swal.fire({
                                    title: 'El producto ya agrego al detalle, ¿Desea sumar la nueva cantidad al monto existente?',
                                    text: "Revise bien la información",
                                    type: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Sí, confirmar',
                                    cancelButtonText: 'Cancelar'
                                })/*.then((result) => {
                                    if (result.value) {
                                        self.form.conteo_productos[keyx].cantidad = Number(self.form.conteo_productos[keyx].cantidad) + self.detalleForm.cantidad;
                                        this.detalleForm.productox = '';
                                        this.detalleForm.cantidad = 0;
                                    }
                                })*/
                            }
                        }else{
                            alertify.warning("Verifique que seleccionó una nueva presentación");
                        }
                    }else {
                        alertify.warning("Los valores para la cantidad deben ser mayores a cero", 5);
                    }
                }else{
                    alertify.warning("Verifique que seleccionó un producto y una configuración",5);
                }

            },

            agregarDetalleEntrada(){
                let self = this;
                if(this.form.productox && this.form.salida_transformacion!==0){
                    if(this.form.entrada_transformacion.length < 1){
                    if (this.form.producto.id_origen == this.form.productox.id_origen){

                        let i = 0;
                        let keyx = 0;
                        if(self.form.entrada_transformacion){
                            self.form.entrada_transformacion.forEach((presentacion_entrada,key)=>{
                                if(self.from.producto.id_presentacion===presentacion.producto.id_presentacion){
                                    i++;
                                    keyx = key;
                                }
                            });
                        }
                        if(this.form.producto.escalar < this.form.productox.escalar){
                            if(i===0){
                                this.form.entrada_transformacion.push({
                                    descripcion_producto_entrada: this.form.productox.text,
                                    id_producto_entrada: this.form.productox.id_producto,
                                    id_bodega_producto: this.form.productox.id_bodega_producto,
                                    id_presentacion_entrada: this.form.producto.id_presentacion,
                                    descripcion_presentacion_entrada: this.form.producto.codigo_presentacion,
                                    escalar_entrada: this.form.producto.escalar,
                                    origenx: this.form.producto.id_origen,
                                    /*relacion_um_estandar: this.form.presentacion.relacion_um_estandar,*/
                                    cantidadx: this.form.cantidadx,
                                    codigo_sistema: this.form.productox.codigo_sistema
                                    /*
                                                                    cantidadx: Number((Number(this.detalleForm.cantidad) / Number(this.form.presentacion.escalar)).toFixed(2)) ,
                                    */
                                });
                                this.form.productox = '';
                                this.form.cantidadx='';
                            }else {
                                this.$swal.fire({
                                    title: 'El producto ya se agrego al detalle, ¿Desea agregar la nueva presentación al producto existente?',
                                    text: "Revise bien la información",
                                    type: 'warning',
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Sí, confirmar',
                                    cancelButtonText: 'cancelar'
                                })
                            }
                        }else{
                            alertify.warning("Verifique que el escalar de la presentación origen sea menor al escalar de la nueva presentación");
                        }
                    }else{
                        alertify.warning("Verifique que el origen de las presentaciones coincidan");
                        }
                    }
                    else {
                        alertify.warning("La tabla de productos transformados ya contiene datos",5);
                    }
                }
                else {
                    alertify.warning("Verifique que tiene seleccionado un producto y la tabla de producto origen contenga datos",5);
                }
            },
            eliminarLinea(item, index) {
                if (this.form.salida_transformacion.length >= 1) {
                    this.form.salida_transformacion.splice(index, 1);

                }else{
                    this.form.salida_transformacion=[];
                }
            },
            eliminarLineaConversion(item, index){
                if(this.form.entrada_transformacion.length >= 1) {
                    this.form.entrada_transformacion.splice(index,1);
                }else{
                    this.form.entrada_transformacion = [];
                }
            },
            nuevo() {
                var self = this;
                transformaciones.nuevo({}, data => {
                        /*self.presentaciones = data.presentaciones;*/

                        self.bodegas = data.bodegas;
                        self.form.bodega = self.bodegas[0];
                        self.form.bodega.productos_bodega.forEach((bodega_producto, key) =>{

                            self.productos.push({
                                codigo_sistema: bodega_producto.producto.codigo_sistema,
                                costo_promedio: Number(bodega_producto.producto.costo_promedio),
                                descripcion: bodega_producto.producto.descripcion,
                                id_producto: bodega_producto.id_producto,
                                id_bodega_producto: bodega_producto.id_bodega_producto,
                                nombre_comercial: bodega_producto.producto.nombre_comercial,
                                cantidad_disponible: bodega_producto.cantidad,
                                unidad_medida: bodega_producto.producto.unidad_medida,
                                text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial+ '-' + bodega_producto.codigo_presentacion+' ( ' + bodega_producto.no_lote + ' ) ',
                                codigo_presentacion: bodega_producto.presentacion.codigo ,
                                id_origen: bodega_producto.presentacion.id_origen,
                                escalar: bodega_producto.escalar,
                                id_presentacion: bodega_producto.id_presentacion,
                            });
                        });
                        self.unidades_medidas = data.unidades_medidas;


                        self.loading = false;
                    },
                    err => {
                        console.log(err);
                    })

            },nuevo() {
                var self = this;
                transformaciones.nuevo({}, data => {
                        /*self.presentaciones = data.presentaciones;*/

                        self.bodegas = data.bodegas;
                        self.form.bodega = self.bodegas[0];
                        self.form.bodega.productos_bodega.forEach((bodega_producto, key) =>{

                            self.productos.push({
                                codigo_sistema: bodega_producto.producto.codigo_sistema,
                                costo_promedio: Number(bodega_producto.producto.costo_promedio),
                                descripcion: bodega_producto.producto.descripcion,
                                id_producto: bodega_producto.id_producto,
                                id_bodega_producto: bodega_producto.id_bodega_producto,
                                nombre_comercial: bodega_producto.producto.nombre_comercial,
                                cantidad_disponible: Number(self.form.bodega.productos_bodega[key].id_bodega_producto),
                                unidad_medida: bodega_producto.producto.unidad_medida,
                                text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial+ '-' + bodega_producto.codigo_presentacion+' ( ' + bodega_producto.no_lote + ' ) ',
                                codigo_presentacion: bodega_producto.presentacion.codigo ,
                                id_origen: bodega_producto.presentacion.id_origen,
                                escalar: bodega_producto.escalar,
                                id_presentacion: bodega_producto.id_presentacion,
                            });
                        });
                        self.unidades_medidas = data.unidades_medidas;


                        self.loading = false;
                    },
                    err => {
                        console.log(err);
                    })

            },
            /*desactivar(productoId) {

                var self = this;
                self.$swal.fire({
                    title: 'Esta seguro de cambiar el estado?',
                    text: "",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, confirmar',
                    cancelButtonText:'Cancelar'
                }).then((result) => {
                    if (result.value) {
                        producto.desactivar({
                            id_producto: productoId
                        }, data => {
                            alertify.warning("Producto desactivado correctamente", 5);
                            this.$router.push({
                                name: "productos"
                            })
                        }, err => {
                            console.log(err)
                        });
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },*/
            /*activar(productoId) {

                var self = this;
                self.$swal.fire({
                    title: 'Esta seguro de cambiar el estado?',
                    text: "",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, confirmar',
                    cancelButtonText:'Cancelar'
                }).then((result) => {
                    if (result.value) {
                        producto.activar({
                            id_producto: productoId
                        }, data => {
                            alertify.success("Producto activado correctamente", 5);
                            this.$router.push({
                                name: "productos"
                            })
                        }, err => {
                            console.log(err)
                        });
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },*/

            ObtenerProductoEspecifico() {
                var self = this;
                transformaciones.obtenerProducto(
                    {
                        id_transformacion: this.$route.params.id_transformacion
                    },
                    data => {
                        self.form = data.transformacion;
                        /*self.form.conteo_productos = data.transformacion.salida_transformacion;
                        self.form.conteo_producto = data.transformacion.entrada_transformacion;*/
                        this.form.bodega = data.transformacion.bodega_registrada[0];
                        self.form.detalleProductos = [];
                        self.productos = [];


                        self.form.bodega.productos_bodega.forEach((bodega_producto, key) =>{

                            self.productos.push({
                                codigo_sistema: bodega_producto.producto.codigo_sistema,
                                costo_promedio: Number(bodega_producto.producto.costo_promedio),
                                descripcion: bodega_producto.producto.descripcion,
                                id_producto: bodega_producto.id_producto,
                                id_bodega_producto: bodega_producto.id_bodega_producto,
                                nombre_comercial: bodega_producto.producto.nombre_comercial,
                                cantidad_disponible: bodega_producto.cantidad,
                                unidad_medida: bodega_producto.producto.unidad_medida,
                                text: ' ( ' + bodega_producto.producto.codigo_sistema + ' ) ' + bodega_producto.producto.nombre_comercial+ '-' + bodega_producto.codigo_presentacion+' ( ' + bodega_producto.no_lote + ' ) ',
                                codigo_presentacion: bodega_producto.presentacion.codigo ,
                                id_origen: bodega_producto.presentacion.id_origen,
                                escalar: bodega_producto.escalar,
                                id_presentacion: bodega_producto.id_presentacion,
                            });
                        });
                        self.unidades_medidas = data.unidades_medidas;


                        self.loading = false;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            obtenerTodosRubrosPS() {
                var self = this
                rubro.obtenerTodosRubrosPS(data => {
                    self.rubros = data
                }, err => {
                    console.log(err)
                })
            },
            obtenerTodosImpuestos() {
                var self = this
                impuesto.obtenerTodosImpuestos(data => {
                    self.impuestos = data
                }, err => {
                    console.log(err)
                })
            },
            obtenerTodosUnidadMedida() {
                var self = this
                um.obtenerTodas(data => {
                    self.ums = data
                }, err => {
                    console.log(err)
                })
            },

            seleccionaTipo() {
                var self = this;
                //console.log(self.form.tipo_producto);
                if (self.form.tipo_producto === 1) {
                    self.tipoProducto = false;
                } else {
                    self.tipoProducto = true;
                }
            },


           /* getImages() {
                var imagen = $('input[name="imagen"]').val();
                if (JSON.parse(imagen).length) {
                    return imagen;
                } else {
                    return "";
                }
            },*/
            actualizarProducto(estado) {
                var self = this;
                if(self.estado = estado){self.loading = true;
                    self.btnAction = "Guardando, espere....";

                    transformaciones.actualizarProducto(
                        self.form,
                        data => {
                            this.$router.push({
                                name: "transformaciones"
                            });
                            alertify.success("Transformación Modificada Correctamente!", 5);
                        },
                        err => {
                            self.loading = false;
                            self.errorMessages = err;
                            self.btnAction = "Guardar";
                        }
                    );
                }else{
                    self.btnAction = false;
                }
            },
            emitirTransformacion(estado){
                var self = this;
                self.btnEmitir = "Emitiendo, espere...."
                    self.$swal.fire({
                        title: 'Esta seguro de emitir la transformación ?',
                        text: "Esta acción no se puede deshacer",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, confirmar',
                        cancelButtonText:'Cancelar'

                    }).then((result) =>{
                        self.loading = true;
                        if(result.value){
                            self.form.estado = estado
                        transformaciones.emitirTransformacion(
                            self.form,
                            data =>{
                                alertify.success("La transformación se ha emitido con exito!", 5);

                                this.$router.push({
                                    name: "transformaciones"
                                });
                            },
                            err => {
                                self.loading = false;
                                self.errorMessages =err;
                                self.btnEmitir = "Emitir"
                                alertify.success("La transformación se ha emitido con exito!", 5);

                                this.$router.push({
                                    name: "transformaciones"
                                });
                            }
                        )
                        }else{
                            self.btnEmitir = "Emitir "
                        }

                        })



            },
            initUploader() {
                var self = this;
                this.uploader = $("#uploader-button").uploader({
                    upload_url: window.location.origin + "/public/media/upload",
                    file_picker_url: window.location.origin + "/public/media/get-files",
                    input_name: "imagen",
                    maximum_total_files: 1,
                    maximum_file_size: 5000000,
                    file_types_allowed: ["image/jpeg", "image/png"],
                    on_before_upload: function () {
                        self.btnAction = "Subiendo imágenes...";
                    },
                    on_success_upload: function () {
                        self.btnAction = "Guardar";
                    },
                    on_error: function (err) {
                        console.log(err);
                    }
                });
            },
            calcularConversion(itemX){
                itemX.conversion_salida = Number((Number(itemX.cantidad_salida)*Number(itemX.escalar_salida)).toFixed(2));
                if(!isNaN(itemX.conversion_salida)){
                    return itemX.conversion_salida;
                }else return 0;
            },

            calcularConversionEntrada(itemx){
                itemx.conversion = Number((Number(itemx.cantidadx)*Number(itemx.escalar_entrada)).toFixed(2));
                if(!isNaN(itemx.conversion)){
                    return itemx.conversion;
                }else return 0;
            },
            calcularCantidadEntrante(itemx){
                itemx.cantidadx = Number((Number(this.form.totalConversion)/Number(itemx.escalar_entrada)).toFixed(2));
                if(!isNaN(itemx.cantidadx)){
                    return itemx.cantidadx;
                }else return 0;
            },


        },
        computed: {
            total_cantidad(){
                /*var self = this;*/
                this.form.totalCantidad= Number(this.form.salida_transformacion.reduce((carry, item) =>{
                    return (carry + Number(item.cantidad_salida))
                }, 0))
                return this.form.totalCantidad;
            },
            total_conversion(){
                /*var self = this;*/
                this.form.totalConversion= Number(this.form.salida_transformacion.reduce((carry, item)=>{
                    return (carry + Number(item.conversion_salida));
                }, 0))
                return this.form.totalConversion;
            },
            total_escalar(){
                var self = this;
                return self.form.salida_transformacion.reduce((carry, item)=>{
                    return self.form.totalEscalar = (carry + Number(item.escalar_salida))
                },0)
            },
            /**
             * @return {number}
             */
            TcantidadNuevaPresentacion(){
                /*var self = this;*/
                /*	itemx.cantidadx = Number((Number(self.form.totalConversion) / Number(itemx.escalarx)).toFixed(2))*/
                this.form.cantidadx= Number(this.form.entrada_transformacion.reduce((carry, item)=>{
                    return (carry + Number( this.form.totalConversion/item.escalar_entrada).toFixed(2))
                },0));
                return this.form.cantidadx;

            },
/*            calcularTotalCantidadEntrada(itemX){
                var self = this;
                self.form.cantidadx = Number((Number(self.form.totalConversion)/Number(self.form.entrada_transformacion.escalar_entrada)).toFixed(2));
                if(!isNaN(self.form.cantidadx)){
                    return self.form.cantidadx;
                }else{
                    return self.form.cantidadx = 0;
                }
            },*/
        },
        mounted() {
            this.initUploader();
            this.obtenerTodosImpuestos();
            this.obtenerTodosRubrosPS();
            this.obtenerTodosUnidadMedida();
            this.ObtenerProductoEspecifico();
            this.nuevo();

        }
    };
</script>
<style>
    .check-label2{
        margin-top: 40px;
        margin-left: 40px;
    }
    .btn-agregar{
        margin-top: 33px;
    }
</style>