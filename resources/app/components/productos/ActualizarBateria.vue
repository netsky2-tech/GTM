<template>
    <div class="main">
        <div class="row">
            <div class="col-md-12">
                <div class="content-box">
                    <div class="content-box-header">
                        <div class="box-title">Actualizar Batería</div>
                        <div class="box-description">Formulario para modificar Batería</div>
                    </div>
                    <form>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Rubro:</label>
                                    <input class="form-control" placeholder="Rubro" readonly
                                           v-model="form.rubro_producto.descripcion">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.id_rubro"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>


                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Código</label>
                                    <input class="form-control" placeholder="Código Sistema" readonly
                                           v-model="form.codigo_sistema">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.codigo_sistema"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Modelo Batería</label>
                                    <input class="form-control" placeholder="Nombre Batería"
                                           v-model="form.nombre_comercial">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.nombre_comercial"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Descripción</label>
                                    <input class="form-control" placeholder="Descripción batería"
                                           v-model="form.descripcion">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.descripcion"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Unidad de medida</label>
                                    <v-select :options="ums" label="unidad_medida"
                                              v-model="form.unidad_medida"></v-select>
                                    <ul class="error-messages">
                                        <li :key="message"
                                            v-for="message in errorMessages[`unidad_medida.id_unidad_medida`]"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Código Barras</label>
                                    <input class="form-control" placeholder="Código Barras" v-model="form.codigo_barra">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.codigo_barra"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Impuesto</label>
                                    <v-select :options="impuestos" label="descripcion"
                                              v-model="form.impuesto_producto"></v-select>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.id_impuesto"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Porcentaje DAI</label>
                                    <input class="form-control" placeholder="DAI" type="number" min="0"
                                           v-model.number="form.dai">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.dai" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Porcentaje ISC</label>
                                    <input class="form-control" placeholder="ISC" type="number" min="0"
                                           v-model.number="form.isc">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.isc" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Costo Estándar C$</label>
                                    <input class="form-control" placeholder="Costo Estándar C$" type="number" min="1"
                                           v-model.number="form.costo_estandar">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.costo_estandar"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Precio de compra $</label>
                                    <input class="form-control" placeholder="Costo de compra" min="0" type="number" v-model.number="form.precio_compra">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.precio_compra" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Precio de venta $</label>
                                    <input class="form-control" placeholder="Precio de venta" min="1" type="number" v-model.number="form.precio_sugerido">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.precio_sugerido" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Precio de venta a Distribuidor $</label>
                                    <input class="form-control" placeholder="Precio de venta distribuidor" min="1" type="number" v-model.number="form.precio_distribuidor">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.precio_distribuidor" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Existencia Mínima</label>
                                    <input class="form-control" placeholder="Existencia Mínima" type="number" min="0"
                                           v-model.number="form.existencia_min">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.existencia_min"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Existencia Máxima</label>
                                    <input class="form-control" placeholder="Existencia Máxima" type="number" min="0"
                                           v-model.number="form.existencia_max">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.existencia_max"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> Inventario Inicial</label>
                                    <input class="form-control" placeholder="Inventario Inicial" readonly type="number" min="0"
                                           v-model.number="form.cantidad_inicial">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.cantidad_inicial"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>


                            <div class="col-sm-4">
                                <div class="form-group">
                                    <label for=""> BCI</label>
                                    <input class="form-control" placeholder="BCI"
                                           v-model="form.producto_detalles_baterias.bci">
                                    <ul class="error-messages">
                                        <li :key="message"
                                            v-for="message in errorMessages[`producto_detalles_baterias.bci`]"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Largo</label>
                                    <input class="form-control" placeholder="Largo" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.largo">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.largo" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Ancho</label>
                                    <input class="form-control" placeholder="Ancho" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.ancho">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.ancho" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Alto</label>
                                    <input class="form-control" placeholder="Alto" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.alto">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.alto" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Peso Humedo</label>
                                    <input class="form-control" placeholder="Peso Humedo" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.peso_humedo">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.peso_humedo"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Voltaje Nominal</label>
                                    <input class="form-control" placeholder="Peso Humedo" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.voltaje_nominal">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages[`producto_detalles_baterias.voltaje_nominal`]"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Capacidad Arranque Frio</label>
                                    <input class="form-control" placeholder="Capacidad Arranque Frio" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.cca">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.cca" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Capacidad de arranque</label>
                                    <input class="form-control" placeholder="Capacidad de arranque" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.ca">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.ca" v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Capacidad de reserva</label>
                                    <input class="form-control" placeholder="Capacidad de reserva" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.capacidad_reserva">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.capacidad_reserva"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Meses de garantía</label>
                                    <input class="form-control" placeholder=" Meses de garantía" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.garantia">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.garantia"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Reemplazo sin Costo</label>
                                    <input class="form-control" placeholder="Reemplazo sin Costo" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.rmplzo_sincosto">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.rmplzo_sincosto"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="">Material</label>
                                    <v-select
                                            :options="materiales"
                                            label="descripcion"
                                            v-model="form.producto_detalles_baterias.bateria_material"
                                    ></v-select>
                                    <ul class="error-messages">
                                        <li :key="message"
                                            v-for="message in errorMessages[`producto_detalles_baterias.bateria_material`]"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="">Tipo Batería</label>
                                    <v-select
                                            :options="lineas"
                                            label="descripcion"
                                            v-model="form.producto_detalles_baterias.bateria_linea_producto"
                                    ></v-select>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.linea_bateria"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="">Marca</label>
                                    <v-select
                                            :disabled="true"
                                            :options="marcas"
                                            label="descripcion"
                                            v-model="marca_bateria"
                                            v-on:input="obtenerSubMarcas()"
                                    ></v-select>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.marca_bateria"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="">Sub Marcas</label>
                                    <v-select
                                            :disabled="true"
                                            :options="sub_marcas"
                                            label="descripcion"
                                            v-model="form.producto_detalles_baterias.bateria_sub_marca"
                                    ></v-select>
                                    <ul class="error-messages">
                                        <li :key="message"
                                            v-for="message in errorMessages[`producto_detalles_baterias.bateria_sub_marca`]"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="">Aplicación</label>
                                    <v-select
                                            :disabled="true"
                                            :options="aplicaciones"
                                            label="descripcion"
                                            v-model="aplicacion_bateria"
                                            v-on:input="obtenerSubAplicaciones()"
                                    ></v-select>
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.aplicacion_bateria"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="">Sub Aplicación</label>
                                    <v-select
                                            :disabled="true"
                                            :options="sub_aplicaciones"
                                            label="descripcion"
                                            v-model="form.producto_detalles_baterias.bateria_sub_aplicacion"
                                    ></v-select>
                                    <ul class="error-messages">
                                        <li :key="message"
                                            v-for="message in errorMessages[`producto_detalles_baterias.bateria_sub_aplicacion`]"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> % Descuento Eficacia Operativa</label>
                                    <input class="form-control" placeholder="Descuento Eficacia Operativa" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.descuento_eficacia">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.descuento_eficacia"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Cargo Chico/Grande $</label>
                                    <input class="form-control" placeholder="Cargo Chico/Grande" type="number" min="0"
                                           v-model.number="form.producto_detalles_baterias.cargo_chico_grande">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.cargo_chico_grande"
                                            v-text="message"></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for=""> Número Parte</label>
                                    <input class="form-control" placeholder="Número Parte" v-model="form.numero_parte">
                                    <ul class="error-messages">
                                        <li :key="message" v-for="message in errorMessages.numero_parte"
                                            v-text="message"></li>
                                    </ul>
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

                    </form>


                    <div class="row">


                        <div class="col-md-6">
                            <div class="content-box-footer text-left">
                                <template v-if="form.activo===1">
                                    <button @click="desactivar(form.id_producto)" class="btn btn-danger"><i
                                            class="fa fa-trash-o"> Eliminar</i></button>
                                </template>
                                <template v-else>
                                    <button @click="activar(form.id_producto)" class="btn btn-success"><i
                                            class="fa fa-check-square"> Habilitar</i></button>
                                </template>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="content-box-footer text-right">
                                <router-link :to="{ name: 'listado-baterias' }" tag="button">
                                    <button class="btn btn-default" type="button">Cancelar</button>
                                </router-link>
                                <button
                                        :disabled="btnAction != 'Guardar' ? true : false"
                                        @click="actualizar"
                                        class="btn btn-primary"
                                        type="button"
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
    import bateria from '../../api/baterias'
    import impuesto from '../../api/impuestos'
    import um from '../../api/unidad_medida'
    import aplicacion from '../../api/baterias_aplicaciones'
    import material from '../../api/baterias_materiales'
    import marca from '../../api/baterias_marcas'
    import linea from '../../api/baterias_lineas'
    import loadingImage from '../../assets/images/block50.gif'

    export default {
        data() {
            return {
              loading:true,
              msg: 'Cargando contenido, espere un momento',
              url : '/public'+loadingImage,   //It is important to import the loading image then use here
                rubros: [],
                impuestos: [],
                ums: [],
                aplicaciones: [],
                sub_aplicaciones: [],
                materiales: [],
                marcas: [],
                sub_marcas: [],
                lineas: [],

                marca_bateria: [],
                aplicacion_bateria: [],
                form: {
                    numero_parte: '',
                    codigo_sistema: '',
                    codigo_consecutivo: 0,
                    nombre_comercial: '',
                    descripcion: '',
                    costo_estandar: 0,
                    precio_sugerido: 0,
                    existencia_min: 1,
                    cantidad_inicial: 0,
                    codigo_barra: '',
                    imagen: '',
                    rubro_producto: '',
                    impuesto_producto: '',
                    unidad_medida: '',

                    producto_detalles_baterias: []

                },
                uploader: [],
                btnAction: "Guardar",
                errorMessages: []
            };
        },
        methods: {
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
                        bateria.desactivar({
                            id_producto: productoId
                        }, data => {
                            alertify.warning("Batería desactivada correctamente", 5);
                            this.$router.push({
                                name: "listado-baterias"
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
                        bateria.activar({
                            id_producto: productoId
                        }, data => {
                            alertify.success("Batería activada correctamente", 5);
                            this.$router.push({
                                name: "listado-baterias"
                            });
                        }, err => {
                            console.log(err)
                        })
                    }else{
                        self.btnAction = "Guardar";
                    }
                })
            },
            obtenerBateria() {
                var self = this;

                bateria.obtenerBateria(
                    {
                        id_producto: this.$route.params.id_producto
                    },
                    data => {
                        self.form = data.bateria;
                        self.rubros = data.rubros;
                        self.ums = data.unidades_medida;
                        self.impuestos = data.impuestos;
                        self.aplicaciones = data.aplicaciones;
                        //self.sub_aplicaciones = data.lineas;
                        self.materiales = data.materiales;

                        self.marcas = data.marcas;
                        //self.sub_marcas = data.materiales;
                        self.lineas = data.lineas;

                        self.loading = false;
                        try{
                            self.uploader.set_files(data.bateria.imagen);
                        }catch(Exception ){
                            console.log('error asignando imagen');
                        }

                        if (self.form.producto_detalles_baterias.bateria_sub_marca) {
                            self.marcas.forEach((marcax, indice) => {
                                //console.log('marcax.id_marca');
                                //console.log(marcax.id_marca);
                                //console.log('self.form.producto_detalles_baterias.bateria_sub_marca.id_marca');
                                //console.log(self.form.producto_detalles_baterias.bateria_sub_marca.id_marca);

                                if (marcax.id_marca === self.form.producto_detalles_baterias.bateria_sub_marca.id_marca) {
                                    self.marca_bateria = self.marcas[indice];
                                    self.sub_marcas = self.marca_bateria.marca_sub_marcas
                                }
                            });
                        }

                        if (self.form.producto_detalles_baterias.bateria_sub_aplicacion) {
                            self.aplicaciones.forEach((aplicacionx, indice) => {
                                if (aplicacionx.id_aplicacion === self.form.producto_detalles_baterias.bateria_sub_aplicacion.id_aplicacion) {
                                    self.aplicacion_bateria = self.aplicaciones[indice];
                                    self.sub_aplicaciones = self.aplicacion_bateria.aplicacion_sub_aplicaciones
                                }
                            });
                        }

                    },
                    err => {
                        console.log(err);
                    }
                )
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

            obtenerTodosAplicaciones() {
                var self = this;
                aplicacion.obtenerTodos(
                    data => {
                        self.aplicaciones = data;
                    },
                    err => {
                        console.log(err);
                    }
                );

            },
            obtenerSubAplicaciones() {
                var self = this
                self.form.producto_detalles_baterias.bateria_sub_aplicacion = null;
                if (self.aplicacion_bateria.aplicacion_sub_aplicaciones)
                    self.sub_aplicaciones = self.aplicacion_bateria.aplicacion_sub_aplicaciones
            },

            obtenerTodasMarcas() {
                var self = this;
                marca.obtenerTodos(
                    data => {
                        self.marcas = data;
                    },
                    err => {
                        console.log(err);
                    }
                );

            },
            obtenerSubMarcas() {
                var self = this
                self.form.producto_detalles_baterias.bateria_sub_marca = null;
                if (self.marca_bateria.marca_sub_marcas)
                    self.sub_marcas = self.marca_bateria.marca_sub_marcas
            },
            obtenerTodasLineas() {
                var self = this;
                linea.obtenerTodas(
                    data => {
                        self.lineas = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },
            obtenerTodosMateriales() {
                var self = this;
                material.obtenerTodos(
                    data => {
                        self.materiales = data;
                    },
                    err => {
                        console.log(err);
                    }
                );
            },


            getImages() {
                var imagen = $('input[name="imagen"]').val();
                if (JSON.parse(imagen).length) {
                    return imagen;
                } else {
                    return "";
                }
            },
            actualizar() {
                var self = this;
                self.loading = true;
                self.btnAction = "Guardando, espere....";
                self.form.imagen = this.getImages();

                bateria.actualizar(
                    self.form,
                    data => {
                        this.$router.push({
                            name: "listado-baterias"
                        });
                        alertify.success("Batería Actualizado Correctamente!", 5);
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
        },
        created() {
            this.initUploader();
            /*this.obtenerTodosImpuestos();
            this.obtenerTodosUnidadMedida()
            this.obtenerTodosAplicaciones()
            this.obtenerTodasLineas()
            this.obtenerTodosMateriales()
            this.obtenerTodasMarcas()*/
            this.obtenerBateria();
        }
    };
</script>