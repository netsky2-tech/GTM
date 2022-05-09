<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Actualizar Producto</div>
                        <div class="box-description">Formulario para modificar un producto</div>
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
                                    <label for=""> Código</label>
                                    <input class="form-control" placeholder="Código Sistema"
                                           v-model="form.codigo_sistema">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.codigo_sistema"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Nombre producto</label>
                                    <input class="form-control" placeholder="Nombre" v-model="form.nombre_comercial">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.nombre_comercial"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <!--<div class="col-sm-2">
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
                            <div class="col-sm-3">
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
                            </div>
                        </div>
                            <div class="alert alert-success">
                                <span><strong>Detalle Presentación de Producto</strong></span>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <label >Código Presentación</label>
                                        <multiselect
                                                :allow-empty="false" :options="presentaciones"
                                                :searchable="true"
                                                :showlabel="true"
                                                select-label="Presione enter para seleccionar el valor"
                                                deselect-label="No se puede eliminar este valor."
                                                label="codigo"
                                                placeholder="Seleciona una Presentación"
                                                ref="presentacion"
                                                track-by="id_presentacion"
                                                v-model="detalleForm.presentacionx"

                                        ></multiselect>
                                        <ul class="error-messages">
                                            <li v-for="message in errorMessages.presentacionx" :key="message" v-text="message"></li>
                                        </ul>
                                    </div>
                                </div>

                                <div></div>
                                <div class=	"col-sm-4">
                                    <div class="form-group">
                                        <label for> </label>
                                        <button @click="agregarDetalle" type="button" class="btn btn-info btn-agregar" > Agregar Presentación</button>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-12">
                                    <ul>
                                        <li :key="message"
                                            v-for="message in errorMessages.conteo_productos"
                                            v-text="message"
                                        ></li>
                                    </ul>
                                    <table class="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Presentación</th>
                                        </tr>
                                        </thead>
                                        <template v-for="(item,index) in form.presentaciones_producto">
                                            <tr>
                                                <td style="width: 2%">
                                                    <button type="button" @click="eliminarLinea(item, index)">
                                                        <i class="fa fa-trash"></i>
                                                    </button>
                                                </td>
                                                <td>
                                                    <input class="form-control" disabled v-model="item.descripcion_presentacion">
                                                    <ul>
                                                        <il
                                                                :key="message"
                                                                v-for="message in errorMessages['']"
                                                        ></il>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </template>
                                    </table>
                                </div>


                        </div>
                    </form>

                    <div class="row">

                        <div class="col-md-6">
                            <div class="content-box-footer text-left">
                                <template v-if="form.activo===1">
                                    <button @click="desactivar(form.id_producto)" class="btn btn-danger"><i
                                            class="fa fa-trash-o"> Desactivar</i></button>
                                </template>
                                <template v-else>
                                    <button @click="activar(form.id_producto)" class="btn btn-success"><i
                                            class="fa fa-check-square"> Activar</i></button>
                                </template>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="content-box-footer text-right">
                                <router-link tag="button" :to="{ name: 'productos' }">
                                    <button type="button" class="btn btn-default">Cancelar</button>
                                </router-link>
                                <button
                                        type="button"
                                        class="btn btn-primary"
                                        @click="actualizarProducto"
                                        :disabled="btnAction != 'Guardar' ? true : false"
                                >{{ btnAction }}
                                </button>
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
                detalleForm: {
                  presentacionx:''
                },
                presentaciones: [],
                form: {
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

                },
                uploader: [],
                conteo_productos: [],

                btnAction: "Guardar",
                errorMessages: []
            };
        },
        methods: {

            agregarDetalle() {
                let self = this;
                if(this.form.presentaciones_producto /*&& this.detalleForm.precio_info > 0*/){
                    let i = 0;
                    let keyx = 0;
                    if(self.form.presentaciones_producto){
                        self.form.presentaciones_producto.forEach((presentacionx, key) => {

                            if(self.detalleForm.presentacionx.id_presentacion===presentacionx.id_presentacion){
                                i++;
                                keyx = key;
                            }
                        });
                    }

                    if(i === 0){
                        this.form.presentaciones_producto.push({
                            id_presentacion: this.detalleForm.presentacionx.id_presentacion,
                            descripcion_presentacion: this.detalleForm.presentacionx.codigo
                        });
                        this.detalleForm.presentacionx=''

                    }

                }else{
                    alertify.warning("Debe seleccionar una presentación",5);
                }

            },
            eliminarLinea(item, index) {
                if (this.form.presentaciones_producto.length >= 1) {
                    this.form.presentaciones_producto.splice(index, 1);

                }else{
                    this.form.presentaciones_producto=[];
                }
            },
            nuevo() {
                var self = this;
                tipo.nuevo({}, data => {
                        self.productos = data.productos;
                        self.presentaciones = data.presentaciones;

                        self.loading = false;
                    },
                    err => {
                        console.log(err);
                    })

            },
            desactivar(productoId) {

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
            },
            activar(productoId) {

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
            },

            ObtenerProductoEspecifico() {
                var self = this;
                producto.obtenerProducto(
                    {
                        id_producto: this.$route.params.id_producto
                    },
                    data => {
                        self.form = data;
                        self.loading = false;
                        //self.uploader.set_files(data.imagen);

                        try{
                            self.uploader.set_files(data.imagen);
                        }catch(Exception ){
                            console.log('error asignando imagen');
                        }

                        self.seleccionaTipo();
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


            getImages() {
                var imagen = $('input[name="imagen"]').val();
                if (JSON.parse(imagen).length) {
                    return imagen;
                } else {
                    return "";
                }
            },
            actualizarProducto() {
                var self = this;
                self.loading = true;
                self.btnAction = "Guardando, espere....";
                self.form.imagen = this.getImages();

                producto.actualizarProducto(
                    self.form,
                    data => {
                        this.$router.push({
                            name: "productos"
                        });
                        alertify.success("Producto Actualizado Correctamente!", 5);
                    },
                    err => {
                      self.loading = false;
                        self.errorMessages = err;
                        self.btnAction = "Guardar";
                    }
                );
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
            }
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