(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salidas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharManual.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/DespacharManual.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_baterias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/baterias */ "./resources/app/api/baterias.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
          Datepicker
        },*/
  data: function data() {
    return {
      loading: true,
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_3___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      bodegas: [],
      //proveedores: [],
      tipos_salida: [],
      productos: [],
      fechax: new Date(),
      detalleForm: {
        productox: "",
        cantidad: 1,
        precio_unitario: 0,
        subtotal: 0,
        total: 0
      },
      form: {
        detalle_baterias: [],
        codigo_salida: "",
        descripcion_salida: "",
        fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
        tipo_salida: "",
        proveedor: "",
        bodega: "",
        numero_documento: '',
        detalleProductos: [],
        condicion: 1
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_despachada);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
    }
  },
  methods: {
    limpiarDatos: function limpiarDatos() {
      var self = this;
      self.form.detalleProductos = [];
      self.detalleForm.productox = '';
      self.detalleForm.cantidad = 0;
    },
    buscarBateria: function buscarBateria() {
      var self = this;
      self.loading = true;
      var estado_busqueda = 1; //disponibles(nuevas)

      /*if(self.form.tipo_salida.id_tipo_salida === 11 && self.form.bodega.id_tipo_bodega === 4){
      	estado_busqueda=3;
      }else if(self.form.tipo_salida.id_tipo_salida === 13){
      	estado_busqueda=8;
      }else if(self.form.tipo_salida.id_tipo_salida === 14){
      	estado_busqueda=6;
      }*/

      estado_busqueda = self.form.condicion; //self.$refs.precio_unitario.focus();

      _api_baterias__WEBPACK_IMPORTED_MODULE_4__["default"].buscarCodigo({
        codigo_bateria: self.detalleForm.bateria_busqueda,
        id_bodega: self.form.bodega.id_bodega,
        reservada: false,
        estado: estado_busqueda
      }, function (data) {
        if (data !== null) {
          self.detalleForm.productox = data; //self.$refs.agregar.click()

          self.agregarDetalle();
          self.detalleForm.bateria_busqueda = '';
          self.detalleForm.productox = '';
          self.$refs.bateria.focus();
        } else {
          alertify.warning("No se encuentra esta batería.", 5);
          self.detalleForm.bateria_busqueda = '';
          self.$refs.bateria.focus();
          self.detalleForm.productox = '';
        }

        self.loading = false;
      }, function (err) {
        console.log(err);

        if (err.codigo_bateria) {
          self.detalleForm.bateria_busqueda = '';
          self.$refs.bateria.focus();
          alertify.warning("No se encuentra esta batería.", 5);
          self.detalleForm.productox = '';
        }

        self.loading = false;
      });
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this;
      if (self.detalleForm.productox) self.detalleForm.cantidad = 1;
      self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
      self.$refs.cantidad.focus();
    },
    onDateSelect: function onDateSelect(date) {
      this.form.fecha_salida = moment(date).format("YYYY-MM-DD"); //
    },
    obtenerTodasBodegasProductos: function obtenerTodasBodegasProductos() {
      var self = this;
      _api_bodegas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTodasBodegasProductos(function (data) {
        self.bodegas = data.bodegas;
        self.form.bodega = self.bodegas[0];
        self.productos = [];
        self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
          self.productos.push({
            codigo_sistema: bodega_producto.producto.codigo_sistema,
            costo_promedio: Number(bodega_producto.producto.costo_promedio),
            descripcion: bodega_producto.producto.descripcion,
            id_producto: bodega_producto.producto.id_producto,
            id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
            nombre_comercial: bodega_producto.producto.nombre_comercial,
            cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
            unidad_medida: bodega_producto.producto.unidad_medida,
            nombre_full: bodega_producto.producto.descripcion + ' - ' + bodega_producto.producto.codigo_barra
          });
        });
      }, function (err) {
        console.log(err);
      });
    },
    obtenerProductosBodega: function obtenerProductosBodega() {
      var self = this;
      self.form.detalleProductos = [];
      self.productos = [];
      self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
        self.productos.push({
          codigo_sistema: bodega_producto.producto.codigo_sistema,
          costo_promedio: Number(bodega_producto.producto.costo_promedio),
          descripcion: bodega_producto.producto.descripcion,
          id_producto: bodega_producto.producto.id_producto,
          id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
          nombre_comercial: bodega_producto.producto.nombre_comercial,
          cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
          unidad_medida: bodega_producto.producto.unidad_medida,
          nombre_full: bodega_producto.producto.descripcion + ' - ' + bodega_producto.producto.codigo_barra
        });
      });
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        var existeCodigoGarantia = false;
        var existeProducto = false;
        self.form.detalle_baterias.forEach(function (bateriax, key) {
          if (self.detalleForm.productox.id_bateria === bateriax.productox.id_bateria) {
            existeCodigoGarantia = true;
          }
        });

        if (self.form.detalleProductos) {
          self.form.detalleProductos.forEach(function (productox, key) {
            if (self.detalleForm.productox.id_producto === productox.id_producto) {
              existeProducto = true;
            }
          });
        } //console.log('existe prodcuto '+existeProducto);
        //console.log('existe codigo '+existeCodigoGarantia);


        if (!existeCodigoGarantia) {
          //console.log('no existe garantia!');
          if (existeProducto) {
            //console.log('existe producto!');
            var keyx = -1;

            if (self.form.detalleProductos) {
              self.form.detalleProductos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_producto === productox.id_producto) {
                  keyx = key;
                }
              });
            } //if((self.form.detalleProductos[keyx].cantidad_despachada + 1) <= self.form.detalleProductos[keyx].cantidad_saliente){


            if (keyx >= 0) {
              self.form.detalleProductos[keyx].cantidad_despachada++;
              this.form.detalle_baterias.push({
                productox: this.detalleForm.productox
              });
              alertify.success("Batería agregada!", 5);
            }
            /*}else{
            	alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
            }*/

          } else {
            //console.log('no existe producto!');
            var _keyx = 0;
            self.form.detalleProductos.push({
              descripcion: self.detalleForm.productox.bateria_producto.descripcion,
              id_producto: self.detalleForm.productox.id_producto,
              cantidad_despachada: 1,
              precio_unitario: 0,
              subtotal: 0,
              total: 0
            }); //if((self.form.detalleProductos[keyx].cantidad_despachada + 1) <= self.form.detalleProductos[keyx].cantidad_saliente){
            //self.form.detalleProductos[keyx].cantidad_despachada++;

            this.form.detalle_baterias.push({
              productox: this.detalleForm.productox
            });
            alertify.success("Batería agregada!", 5);
            /*}else{
            	alertify.warning("Ya se registró la cantidad solicitada de esta batería",5);
            }*/
          }
        } else {
          alertify.warning("Ya existe ese código de batería en el listado", 5);
        }

        this.detalleForm.productox = {};
        self.$refs.bateria.focus();
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalle_baterias.length >= 1) {
        var self = this;
        var keyx = -1;

        if (self.form.detalleProductos) {
          self.form.detalleProductos.forEach(function (productox, key) {
            if (item.productox.id_producto === productox.id_producto) {
              keyx = key;
            }
          });
        }

        if (keyx >= 0) {
          self.form.detalleProductos[keyx].cantidad_despachada--;

          if (self.form.detalleProductos[keyx].cantidad_despachada === 0) {
            this.form.detalleProductos.splice(keyx, 1);
          }
        }

        this.form.detalle_baterias.splice(index, 1);
      } else {
        this.form.detalle_baterias = [];
        this.form.detalleProductos = [];
      }
    },
    confirmar: function confirmar() {
      var _this = this;

      this.$swal.fire({
        title: 'Esta seguro de confirmar el registro de la salida?',
        text: "Revise bien los datos",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _this.registrar();
        }
      });
    },
    registrar: function registrar() {
      var _this2 = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.loading = true;
      _api_salidas__WEBPACK_IMPORTED_MODULE_1__["default"].registrarSalidaManual(self.form, function (data) {
        self.loading = false;

        _this2.$router.push({
          name: "salidas"
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = "Registrar";
      });
    },
    nueva: function nueva() {
      var self = this;
      _api_salidas__WEBPACK_IMPORTED_MODULE_1__["default"].nueva({}, function (data) {
        self.tipos_salida = data.tipos_salida;
        self.form.tipo_salida = self.tipos_salida[0]; //self.proveedores = data.proveedores;
        //self.form.proveedor = self.proveedores[0];

        self.bodegas = data.bodegas;
        self.form.bodega = self.bodegas[0];
        self.productos = [];
        self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
          self.productos.push({
            codigo_sistema: bodega_producto.producto.codigo_sistema,
            costo_promedio: Number(bodega_producto.producto.costo_promedio),
            descripcion: bodega_producto.producto.descripcion,
            id_producto: bodega_producto.producto.id_producto,
            id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
            nombre_comercial: bodega_producto.producto.nombre_comercial,
            cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
            unidad_medida: bodega_producto.producto.unidad_medida,
            nombre_full: bodega_producto.producto.descripcion + ' - ' + bodega_producto.producto.codigo_barra
          });
        });
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.nueva(); //this.obtenerTodasBodegasProductos();
    //this.obtenerTodosProveedores();
    //this.obtenerTodosTiposSalida();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharV2.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/DespacharV2.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var _api_baterias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/baterias */ "./resources/app/api/baterias.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_blockui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-blockui */ "./node_modules/vue-blockui/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_blockui__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      msg: 'Cargando el contenido espere un momento',
      url: '',
      //It is important to import the loading image then use here
      inicio_paginacion: 0,
      limite_paginacion: 10,
      bateriasBusquedaURL: "/productos/baterias/buscar",
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default.a,
      format: "dd-MM-yyyy",
      detalleForm: {
        productox: {}
      },
      productos: [],
      detalle_baterias: [],
      form: {
        contiene_baterias: false,
        codigo_salida: "",
        fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
        salida_tipo: "",
        salida_proveedor: "",
        salida_bodega: "",
        salida_productos: [],
        no_remision: '',
        descripcion_salida: ''
      },
      btnAction: "Despachar Productos",
      btnAction2: "Guardar Cambios",
      errorMessages: []
    };
  },
  computed: {
    filteredItems: function filteredItems() {
      if (this.detalle_baterias) {
        return this.detalle_baterias.slice(this.inicio_paginacion, this.limite_paginacion);
      }
    },
    total_cantidad_saliente: function total_cantidad_saliente() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_saliente);
      }, 0);
    },
    total_cantidad_despachada: function total_cantidad_despachada() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_despachada);
      }, 0);
    },
    total_cantidad_diferencia: function total_cantidad_diferencia() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_saliente - item.cantidad_despachada);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
    }
  },
  methods: {
    calcularConversion: function calcularConversion(itemX) {
      itemX.conversionx = Number((Number(itemX.cantidad_despachada) * Number(itemX.escalar)).toFixed(2));

      if (!isNaN(itemX.conversionx)) {
        return itemX.conversionx;
      } else return 0;
    },
    cambiarPaginacion: function cambiarPaginacion(limite) {
      var self = this;

      if (self.detalle_baterias.length >= 1) {
        if (limite === 999) {
          //mostrar todos
          self.inicio_paginacion = 0;
          self.limite_paginacion = self.detalle_baterias.length;
        } else if (limite === -999) {
          self.inicio_paginacion = 0;
          self.limite_paginacion = 10;
        } else {
          self.inicio_paginacion = 0;
          self.limite_paginacion = self.limite_paginacion + limite;
        }
      }
    },
    buscarBateria: function buscarBateria() {
      var self = this;
      self.loading = true;
      var estado_busqueda = 1;
      var cod_bat = self.detalleForm.bateria_busqueda;
      self.detalleForm.bateria_busqueda = '';
      var existeCodigoGarantia = false; //console.log(self.detalleForm.codigo_garantiax.toUpperCase());

      self.detalle_baterias.forEach(function (bateriax, key) {
        if (cod_bat.toUpperCase() === bateriax.codigo_garantia.toUpperCase()) {
          existeCodigoGarantia = true;
        }
      });

      if (!existeCodigoGarantia) {
        estado_busqueda = self.form.condicion_productos; //self.$refs.precio_unitario.focus();

        _api_baterias__WEBPACK_IMPORTED_MODULE_2__["default"].buscarCodigo({
          codigo_bateria: cod_bat,
          id_bodega: self.form.salida_bodega.id_bodega,
          reservada: false,
          estado: estado_busqueda
        }, function (data) {
          if (data !== null) {
            self.detalleForm.productox = data; //self.$refs.agregar.click()

            self.agregarDetalle();
            self.detalleForm.productox = '';
            self.$refs.bateria.focus();
          } else {
            alertify.warning("No se encuentra esta batería.", 5); //self.detalleForm.bateria_busqueda = '';

            self.$refs.bateria.focus();
            self.detalleForm.productox = '';
          }

          self.loading = false;
        }, function (err) {
          if (err.codigo_bateria) {
            //self.detalleForm.bateria_busqueda = '';
            self.$refs.bateria.focus();
            alertify.warning("No se encuentra esta batería.", 5);
            self.detalleForm.productox = '';
          }

          self.loading = false;
        });
      } else {
        self.loading = false;
        self.$refs.bateria.focus(); //self.detalleForm.codigo_garantia='';

        alertify.warning("Ya existe ese código de garantía.", 5);
      }
    },

    /*seleccionarProducto(e) {
    	const productoP = e.target.value;
    	var self = this;
    	self.detalleForm.productox = productoP;
    	this.$refs.fecha_activacion.focus();
    },*/
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        var existeCodigoGarantia = false;
        var existeProducto = false;
        var estadoExistente = 0;
        self.detalle_baterias.forEach(function (bateriax, key) {
          if (self.detalleForm.productox.id_bateria === bateriax.id_bateria) {
            existeCodigoGarantia = true;
            estadoExistente = bateriax.estado;
          }
        });

        if (self.form.salida_productos) {
          self.form.salida_productos.forEach(function (productox, key) {
            if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
              existeProducto = true;
            }
          });
        }

        if (existeProducto) {
          if (!existeCodigoGarantia) {
            var keyx = 0;

            if (self.form.salida_productos) {
              self.form.salida_productos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
                  keyx = key;
                }
              });
            }

            if (self.form.salida_productos[keyx].cantidad_despachada + 1 <= self.form.salida_productos[keyx].cantidad_saliente) {
              self.form.salida_productos[keyx].cantidad_despachada++;
              this.detalle_baterias.unshift({
                estado: 1,
                id_producto: self.detalleForm.productox.id_producto,
                id_salida_producto_bateria: 0,
                productox: this.detalleForm.productox,
                id_bateria: this.detalleForm.productox.id_bateria,
                codigo_garantia: this.detalleForm.productox.codigo_garantia,
                id_salida_producto: 0,
                id_salida: this.form.id_salida,
                descripcion: this.detalleForm.productox.bateria_producto.descripcion,
                registrada: false,
                guardadoEnProgreso: false
              });
              alertify.success("Batería agregada!", 5);

              if (self.cantidad_sin_registrar() >= 5) {
                self.detalle_baterias.forEach(function (bateriax, key) {
                  if (!bateriax.registrada) {
                    self.registrarBateria(bateriax);
                  }
                });
              }

              self.cantidad_sin_registrar();
            } else {
              alertify.warning("Ya se registró la cantidad solicitada de esta batería", 5);
            }
          } else {
            if (!estadoExistente) {
              alertify.warning("Ya existe ese código de batería en el listado", 5);
            } else {}
          }
        } else {
          alertify.warning("El código de esta batería pertenece a un producto que no existe en la salida", 5);
        }

        this.detalleForm.productox = {};
        self.$refs.bateria.focus();
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    cantidad_sin_registrar: function cantidad_sin_registrar() {
      var self = this;

      if (self.detalle_baterias) {
        var i = 0;
        self.detalle_baterias.forEach(function (bateriax, key) {
          if (!bateriax.registrada && !bateriax.guardadoEnProgreso) {
            i++;
          }
        });
        self.total_pendientes = i;
        return self.total_pendientes;
      } else {
        return 0;
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.detalle_baterias.length >= 1) {
        var keyx = -1;

        if (self.form.salida_productos) {
          self.form.salida_productos.forEach(function (productox, key) {
            if (item.id_producto === productox.bodega_producto.id_producto) {
              keyx = key;
            }
          });
        }

        self.form.salida_productos[keyx].cantidad_despachada--;

        if (this.detalle_baterias[index].id_salida_producto_bateria) {
          this.detalle_baterias[index].estado = 0;
          this.detalle_baterias[index].registrada = false;
        } else {
          this.detalle_baterias.splice(index, 1);
        }
      } else {
        this.detalle_baterias = [];
      }
    },
    calcular_diferencia: function calcular_diferencia(solicitado, recibido) {
      var diff = solicitado - recibido;

      if (!isNaN(diff) && diff > 0) {
        return diff;
      } else return 0;
    },
    obtenerSalida: function obtenerSalida() {
      var _this = this;

      var self = this;
      self.loading = true;
      _api_salidas__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerSalida({
        id_salida: this.$route.params.id_salida
      }, function (data) {
        self.form = data.salida;

        if (data.productos.length) {
          self.form.contiene_baterias = true;
        } else {
          self.form.contiene_baterias = false;
        }

        self.form.salida_productos.forEach(function (salidabatex, key) {
          //console.log(salidabatex);
          if (salidabatex.bodega_producto.producto_simple.tipo_producto === 3 && salidabatex.bodega_producto.producto_simple.condicion === 1 && salidabatex.bodega_producto.producto_simple.producto_detalles_baterias.id_submarca !== 7) {
            self.form.salida_productos[key].cantidad_despachada = 0;
            salidabatex.salida_producto_baterias.forEach(function (batesx, key2) {
              self.form.salida_productos[key].cantidad_despachada = self.form.salida_productos[key].cantidad_despachada + 1; //console.log(batesx);

              _this.detalle_baterias.push({
                estado: 1,
                id_salida_producto_bateria: batesx.id_salida_producto_bateria,
                productox: {
                  id_bateria: batesx.id_bateria,
                  id_producto: salidabatex.bodega_producto.id_producto
                },
                id_bateria: batesx.id_bateria,
                codigo_garantia: batesx.bateria.codigo_garantia,
                id_salida_producto: batesx.id_salida_producto,
                id_salida: _this.form.id_salida,
                descripcion: salidabatex.descripcion_producto,
                id_producto: salidabatex.bodega_producto.id_producto,
                registrada: true,
                guardadoEnProgreso: false
              });
            });
          }
        });

        if (self.form.estado !== 1 && self.form.estado !== 99) {
          alertify.error("La salida ya no puede ser despachada", 5);

          _this.$router.push({
            name: "salidas"
          });
        }

        _this.loading = false;
      });
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_saliente)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    guardarCambios: function guardarCambios() {
      var self = this;
      self.loading = true;
      self.form.detalle_baterias = self.detalle_baterias;
      self.btnAction = "Registrando, espere....";
      self.btnAction2 = "Registrando, espere....";

      if (self.form.estado === 99 || self.form.estado === 1) {
        _api_salidas__WEBPACK_IMPORTED_MODULE_1__["default"].guardar(self.form, function (data) {
          alertify.success('Cambios guardados correctamente');
          self.btnAction = "Despachar Productos";
          self.btnAction2 = "Guardar Cambios";
          self.detalle_baterias.forEach(function (bateriax, key) {
            self.detalle_baterias[key].registrada = true;
          });
          self.loading = false;
        }, function (err) {
          self.errorMessages = err;
          self.btnAction = "Despachar Productos";
          self.btnAction2 = "Guardar Cambios";
          self.loading = false;
        });
      } else {
        alertify.error("La salida ya no puede ser despachada", 5);
        this.$router.push({
          name: "salidas"
        });
      }
    },
    despachar: function despachar() {
      var _this2 = this;

      var self = this;

      if (self.total_cantidad_despachada === self.total_cantidad_saliente) {
        self.form.detalle_baterias = self.detalle_baterias;
        self.btnAction = "Registrando, espere....";
        self.btnAction2 = "Registrando, espere....";

        if (self.form.estado === 1 || self.form.estado === 99) {
          self.$swal.fire({
            title: 'Esta seguro de confirmar el despacho de la salida?',
            text: "Esta acción no se puede deshacer",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            if (result.value) {
              _api_salidas__WEBPACK_IMPORTED_MODULE_1__["default"].despachar(self.form, function (data) {
                _this2.$swal.fire('Salida ha sido despachada exitosamente!', 'La Salida fue despachada correctamente.', 'success');

                _this2.$router.push({
                  name: "salidas"
                });
              }, function (err) {
                self.errorMessages = err;
                self.btnAction = "Despachar Productos";
                self.btnAction2 = "Guardar Cambios";
              });
            } else {
              self.btnAction = "Despachar Productos";
              self.btnAction2 = "Guardar Cambios";
            }
          });
        } else {
          alertify.error("La salida ya no puede ser despachada", 5);
          this.$router.push({
            name: "salidas"
          });
        }
      } else {
        alertify.error("Se debe despachar la misma cantidad que fue solicitada", 5);
      }
    },
    registrarBateria: function registrarBateria(bateria) {
      var self = this;

      if (!self.registrandoBateria && !bateria.registrada
      /*&& bateria.estado===1*/
      ) {
          //self.registrandoBateria = true;
          bateria.guardadoEnProgreso = true; //console.log(bateria);

          _api_salidas__WEBPACK_IMPORTED_MODULE_1__["default"].registrarBateria({
            id_salida: self.form.id_salida,
            id_bateria: bateria.id_bateria,
            id_producto: bateria.id_producto,
            id_bodega: self.form.id_bodega,
            id_salida_producto_bateria: bateria.id_salida_producto_bateria,
            estado: bateria.estado
          }, function (data) {
            //self.form = data.orden;
            bateria.registrada = true;
            bateria.id_salida_producto_bateria = data.id_salida_producto_bateria; //self.registrandoBateria = false;

            bateria.guardadoEnProgreso = false;
          }, function (err) {
            bateria.registrada = false;
            console.log(err); //self.registrandoBateria = false;

            bateria.guardadoEnProgreso = false;
          });
        }
    }
  },
  mounted: function mounted() {
    //this.loading=true;
    this.obtenerSalida();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Listado.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/Listado.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 5,
        limitOptions: [5, 10, 15, 20],
        search: {
          field: "codigo_salida",
          value: "",
          estado: 1
        }
      },
      salidas: [],
      total: 0
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    mostrarProductos: function mostrarProductos(key) {
      if (this.salidas[key].mostrar) {
        this.salidas[key].mostrar = 0;
      } else {
        this.salidas[key].mostrar = 1;
      }
    },
    obtenerSalidas: function obtenerSalidas() {
      var self = this;
      self.loading = true;
      _api_salidas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSalidas(self.filter, function (data) {
        data.rows.forEach(function (salidas, key) {
          data.rows[key].mostrar = 0;
        });
        self.salidas = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerSalidas();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerSalidas();
    },
    anular: function anular(id_salida) {
      var _this = this;

      this.$swal.fire({
        title: 'Esta seguro de anular esta salida?',
        text: "Digite la causa de la anulación de la salida",
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, anular salida'
      }).then(function (result) {
        if (result.value) {
          _api_salidas__WEBPACK_IMPORTED_MODULE_0__["default"].anular({
            id_salida: id_salida,
            causa_anulacion: result.value
          }, function (data) {
            _this.$swal.fire('Anulado', 'El registro de la salida ha sido anulado', 'success');

            _this.obtenerSalidas();
          }, function (err) {
            _this.$swal.fire('No se puede anular salida!', err, 'warning');
          });
        }
      });
    }
  },

  /*components: {
    pagination: Pagination
  },*/
  mounted: function mounted() {
    this.obtenerSalidas();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Mostrar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/Mostrar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      nombre_empresa: '',
      direccion_empresa: '',
      form: {
        codigo_salida: "",
        fecha_salida: "",
        id_tipo_salida: "",
        id_proveedor: 0,
        id_bodega: 0,
        detalleProductos: [],
        salida_proveedor: [],
        salida_bodega: [],
        salida_productos: [],
        salida_tipo: [],
        log_registro: [],
        total: 0,
        sub_total: 0
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    calcularConversion: function calcularConversion(itemX) {
      itemX.conversionx = Number((Number(itemX.cantidad_despachada) * Number(itemX.escalar)).toFixed(2));

      if (!isNaN(itemX.conversionx)) {
        return itemX.conversionx;
      } else return 0;
    },
    descargarReporteSalida: function descargarReporteSalida() {
      var _this = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        var extensionx = 'pdf';
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('salidas/reporte', {
          id_salida: self.form.id_salida,
          extension: extensionx
        }, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          extensionx === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteSalida.' + extensionx;
          link.click();
          _this.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    },
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    obtenerSalida: function obtenerSalida() {
      var self = this;
      _api_salidas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSalida({
        id_salida: this.$route.params.id_salida
      }, function (data) {
        self.form = data.salida;
        self.nombre_empresa = data.nombre_empresa;
        self.direccion_empresa = data.direccion_empresa;
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    }
  },
  computed: {
    total_cantidad_saliente: function total_cantidad_saliente() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_saliente);
      }, 0);
    },
    total_cantidad_despachada: function total_cantidad_despachada() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_despachada);
      }, 0);
    },
    total_cantidad_total: function total_cantidad_total() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.conversionx);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(Number(item.cantidad_despachada * item.precio_unitario).toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(Number(item.cantidad_despachada * item.precio_unitario).toFixed(2));
      }, 0);
    }
  },
  mounted: function mounted() {
    this.obtenerSalida();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Registrar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/Registrar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var _api_tipo_salida__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/tipo_salida */ "./resources/app/api/tipo_salida.js");
/* harmony import */ var _api_proveedores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/proveedores */ "./resources/app/api/proveedores.js");
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/entradas-inventario-inicial */ "./resources/app/api/entradas-inventario-inicial.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 //import Datepicker from "vuejs-datepicker";




/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
    Datepicker
  },*/
  data: function data() {
    return {
      loading: false,
      msg: 'Cargando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4___default.a,
      format: "dd-MM-yyyy",
      bodegas: [],
      zonas: [],
      proveedores: [],
      tipos_salida: [],
      productos: [],
      clientes: [],
      clientesBusquedaURL: "/ventas/clientes/buscar",
      fechax: new Date(),
      detalleForm: {
        productox: "",
        presentacionx: "",
        cantidad: 1,
        precio_unitario: 0,
        subtotal: 0,
        total: 0
      },
      form: {
        codigo_salida: "",
        descripcion_salida: "",
        fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
        tipo_salida: "",
        proveedor: "",
        bodega: "",
        zona: "",
        numero_documento: '',
        detalleProductos: [],
        orden_venta: '',
        no_remision: '',
        factura: ''
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0);
    },
    total_conversion: function total_conversion() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.conversionx);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
    }
  },
  methods: {
    seleccionarCliente: function seleccionarCliente(e) {
      var cliente = e.target.value;
      var self = this;
      self.form.cliente = cliente;
    },
    cargarPresentaciones: function cargarPresentaciones() {
      var self = this;
      self.loading = true;
      _api_salidas__WEBPACK_IMPORTED_MODULE_3__["default"].cargarPresentacionesProductos({
        id_producto: self.detalleForm.productox.id_producto,
        id_presentacion: self.detalleForm.productox.id_presentacion
      }, function (data) {
        if (data.presentaciones !== null) {
          self.detalleForm.presentacionx = data.presentaciones;
        } else {
          alertify.warning("No se encuentran presentaciones para este producto.", 5);
          self.form.presentaciones = [];
        }

        self.loading = false;
      }, function (err) {
        if (err.id_producto) {
          self.form.presentaciones = [];
          alertify.warning(err.id_producto, 5);
          self.loading = false;
        }
      }); //self.$refs.presentacionx.focus();
    },
    calcularConversion: function calcularConversion(itemX) {
      itemX.conversionx = Number((Number(itemX.cantidad) * Number(itemX.presentacionx.escalar)).toFixed(2));

      if (!isNaN(itemX.conversionx)) {
        return itemX.conversionx;
      } else return 0;
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this;
      if (self.detalleForm.productox) self.detalleForm.cantidad = 1;
      self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
      self.$refs.cantidad.focus();
    },
    onDateSelect: function onDateSelect(date) {
      this.form.fecha_salida = moment(date).format("YYYY-MM-DD"); //
    },
    obtenerTodosProveedores: function obtenerTodosProveedores() {
      var self = this;
      _api_proveedores__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTodosProveedores(function (data) {
        self.proveedores = data;
        self.form.proveedor = self.proveedores[0];
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodasBodegasProductos: function obtenerTodasBodegasProductos() {
      var self = this;
      _api_bodegas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTodasBodegasProductos(function (data) {
        self.bodegas = data.bodegas;
        self.form.bodega = self.bodegas[0];
        self.productos = [];
        self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
          self.productos.push({
            codigo_sistema: bodega_producto.producto.codigo_sistema,
            costo_promedio: Number(bodega_producto.producto.costo_promedio),
            descripcion: bodega_producto.producto.descripcion,
            id_producto: bodega_producto.producto.id_producto,
            id_presentacion: bodega_producto.id_presentacion,
            codigo_presentacion: bodega_producto.codigo_presentacion,
            id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
            nombre_comercial: bodega_producto.producto.nombre_comercial,
            cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
            unidad_medida: bodega_producto.producto.unidad_medida,
            text: ' ( ' + bodega_producto.no_lote + ' ) ' + bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.codigo_presentacion
          });
        });
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosTiposSalida: function obtenerTodosTiposSalida() {
      var self = this;
      _api_tipo_salida__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodosTiposSalida(function (data) {
        self.tipos_salida = data;
        self.form.tipo_salida = self.tipos_salida[0];
      }, function (err) {
        console.log(err);
      });
    },
    obtenerProductosBodega: function obtenerProductosBodega() {
      var self = this;
      self.form.detalleProductos = [];
      self.productos = [];
      self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
        self.productos.push({
          codigo_sistema: bodega_producto.producto.codigo_sistema,
          costo_promedio: Number(bodega_producto.producto.costo_promedio),
          descripcion: bodega_producto.producto.descripcion,
          id_producto: bodega_producto.producto.id_producto,
          id_presentacion: bodega_producto.id_presentacion,
          codigo_presentacion: bodega_producto.codigo_presentacion,
          id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
          nombre_comercial: bodega_producto.producto.nombre_comercial,
          cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
          unidad_medida: bodega_producto.producto.unidad_medida,
          nombre_full: bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.producto.codigo_sistema,
          text: ' ( ' + bodega_producto.no_lote + ' ) ' + bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.codigo_presentacion
        });
      });
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        if (self.detalleForm.cantidad > 0
        /*&& self.detalleForm.precio_unitario > 0*/
        ) {
            var i = 0;
            var keyx = 0;

            if (self.form.detalleProductos) {
              self.form.detalleProductos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_bodega_producto === productox.productox.id_bodega_producto) {
                  i++;
                  keyx = key;
                }
              });
            }

            if (i === 0) {
              self.form.detalleProductos.push({
                productox: self.detalleForm.productox,
                presentacionx: self.detalleForm.presentacionx,
                cantidad: self.detalleForm.cantidad,
                conversionx: 0
              });
            } else {
              var nuevo_total = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;

              if (nuevo_total <= self.form.detalleProductos[keyx].cantidad_disponible) {
                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
              } else {
                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].productox.cantidad_disponible;
              }
            }

            this.detalleForm.productox = '';
            this.detalleForm.presentacionx = '';
            this.detalleForm.cantidad = 0;
          } else {
          alertify.warning("Los valores para cantidad deben ser mayores que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleProductos.length >= 1) {
        this.form.detalleProductos.splice(index, 1);
      } else {
        this.form.detalleProductos = [];
      }
    },
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.$swal.fire({
        title: 'Esta seguro de registrar esta salida?',
        text: "Esta acción no se puede deshacer",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          self.loading = true;
          _api_salidas__WEBPACK_IMPORTED_MODULE_3__["default"].registrar(self.form, function (data) {
            self.loading = false;

            _this.$router.push({
              name: "salidas"
            });
          }, function (err) {
            self.loading = false;
            self.errorMessages = err;
            self.btnAction = "Registrar";
          });
        } else {
          self.btnAction = "Registrar";
        }
      });
    },
    nueva: function nueva() {
      var self = this;
      self.loading = true;
      _api_salidas__WEBPACK_IMPORTED_MODULE_3__["default"].nueva({}, function (data) {
        //self.clientes = data.clientes;
        self.tipos_salida = data.tipos_salida;
        self.form.tipo_salida = self.tipos_salida[0]; //self.proveedores = data.proveedores;
        //self.form.proveedor = self.proveedores[0];

        self.bodegas = data.bodegas;
        self.zonas = data.zonas;
        self.form.zona = data.zonas[0];
        self.form.bodega = self.bodegas[1];
        self.productos = [];
        self.form.bodega.productos_bodega.forEach(function (bodega_producto, key) {
          self.productos.push({
            codigo_sistema: bodega_producto.producto.codigo_sistema,
            costo_promedio: Number(bodega_producto.producto.costo_promedio),
            descripcion: bodega_producto.producto.descripcion,
            id_producto: bodega_producto.producto.id_producto,
            id_presentacion: bodega_producto.id_presentacion,
            codigo_presentacion: bodega_producto.codigo_presentacion,
            id_bodega_producto: self.form.bodega.productos_bodega[key].id_bodega_producto,
            nombre_comercial: bodega_producto.producto.nombre_comercial,
            cantidad_disponible: Number(self.form.bodega.productos_bodega[key].cantidad),
            unidad_medida: bodega_producto.producto.unidad_medida,
            nombre_full: bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.producto.codigo_sistema,
            text: ' ( ' + bodega_producto.no_lote + ' ) ' + bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.codigo_presentacion
          });
        });
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.nueva(); //this.obtenerTodasBodegasProductos();
    //this.obtenerTodosProveedores();
    //this.obtenerTodosTiposSalida();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var _api_baterias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/baterias */ "./resources/app/api/baterias.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_blockui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-blockui */ "./node_modules/vue-blockui/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_blockui__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      msg: 'Cargando el contenido espere un momento',
      url: '',
      //It is important to import the loading image then use here
      bodegas: [],
      bateriasBusquedaURL: "/productos/baterias/buscar",
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default.a,
      format: "dd-MM-yyyy",
      detalleForm: {
        productox: {}
      },
      productos: [],
      detalle_baterias: [],
      form: {
        contiene_baterias: false,
        codigo_salida: "",
        fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
        salida_tipo: "",
        salida_proveedor: "",
        salida_bodega: "",
        salida_productos: []
      },
      btnAction: "Recibir Devolución",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad_despachada: function total_cantidad_despachada() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_despachada);
      }, 0);
    },
    total_cantidad_devuelta: function total_cantidad_devuelta() {
      //console.log(this.form.salida_productos);
      return this.form.salida_productos.reduce(function (carry, item) {
        //console.log(item);
        return carry + Number(item.cantidad_devuelta);
      }, 0);
    },
    total_cantidad_diferencia: function total_cantidad_diferencia() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_despachada - item.cantidad_devuelta);
      }, 0);
    }
  },
  methods: {
    total_conversion: function total_conversion() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.conversionx.toFixed(2));
      }, 0);
    },
    calcularConversion: function calcularConversion(itemX) {
      itemX.conversionx = Number((Number(itemX.cantidad_devuelta) * Number(itemX.escalar)).toFixed(2));

      if (!isNaN(itemX.conversionx)) {
        return itemX.conversionx;
      } else return 0;
    },
    buscarBateria: function buscarBateria() {
      var self = this;
      self.loading = true; //self.$refs.precio_unitario.focus();

      _api_baterias__WEBPACK_IMPORTED_MODULE_2__["default"].buscarCodigo({
        codigo_bateria: self.detalleForm.bateria_busqueda,
        id_bodega: 0,
        reservada: false,
        estado: 7
      }, function (data) {
        if (data !== null) {
          self.detalleForm.productox = data; //self.$refs.agregar.click()

          self.agregarDetalle();
          self.detalleForm.bateria_busqueda = '';
          self.detalleForm.productox = '';
          self.$refs.bateria.focus();
        } else {
          alertify.warning("No se encuentra esta batería.", 5);
          self.detalleForm.bateria_busqueda = '';
          self.$refs.bateria.focus();
          self.detalleForm.productox = '';
        }

        self.loading = false;
      }, function (err) {
        if (err.codigo_bateria) {
          self.detalleForm.bateria_busqueda = '';
          self.$refs.bateria.focus();
          alertify.warning("No se encuentra esta batería.", 5);
          self.detalleForm.productox = '';
        }

        self.loading = false;
      });
    },

    /*seleccionarProducto(e) {
    	const productoP = e.target.value;
    	var self = this;
    	self.detalleForm.productox = productoP;
    	this.$refs.fecha_activacion.focus();
    },*/
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        var existeCodigoGarantia = false;
        var existeProducto = false;
        self.detalle_baterias.forEach(function (bateriax, key) {
          if (self.detalleForm.productox.id_bateria === bateriax.productox.id_bateria) {
            existeCodigoGarantia = true;
          }
        });

        if (self.form.salida_productos) {
          self.form.salida_productos.forEach(function (productox, key) {
            if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
              existeProducto = true;
            }
          });
        }

        if (existeProducto) {
          if (!existeCodigoGarantia) {
            var keyx = 0;

            if (self.form.salida_productos) {
              self.form.salida_productos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
                  keyx = key;
                }
              });
            }

            if (self.form.salida_productos[keyx].cantidad_devuelta + 1 <= self.form.salida_productos[keyx].cantidad_saliente) {
              self.form.salida_productos[keyx].cantidad_devuelta++;
              this.detalle_baterias.push({
                productox: this.detalleForm.productox
              });
              alertify.success("Batería agregada!", 5);
            } else {
              alertify.warning("Ya se registró la cantidad solicitada de esta batería", 5);
            }
          } else {
            alertify.warning("Ya existe ese código de batería en el listado", 5);
          }
        } else {
          alertify.warning("El código de esta batería pertenece a un producto que no existe en la salida", 5);
        }

        this.detalleForm.productox = {};
        self.$refs.bateria.focus();
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.detalle_baterias.length >= 1) {
        var keyx = 0;

        if (self.form.salida_productos) {
          self.form.salida_productos.forEach(function (productox, key) {
            if (item.productox.id_producto === productox.bodega_producto.id_producto) {
              keyx = key;
            }
          });
        }

        self.form.salida_productos[keyx].cantidad_devuelta--;
        this.detalle_baterias.splice(index, 1);
      } else {
        this.detalle_baterias = [];
      }
    },
    calcular_diferencia: function calcular_diferencia(solicitado, recibido) {
      var diff = solicitado - recibido;

      if (!isNaN(diff) && diff > 0) {
        return diff;
      } else return 0;
    },
    obtenerSalida: function obtenerSalida() {
      var _this = this;

      var self = this;
      self.loading = true;
      _api_salidas__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerSalida({
        id_salida: this.$route.params.id_salida
      }, function (data) {
        data.salida.salida_productos.forEach(function (productox, key) {
          data.salida.salida_productos[key].cantidad_devuelta = 0;
        });
        self.form = data.salida;
        self.bodegas = data.bodegas_dev;

        if (self.form.estado === 2) {
          if (data.productos.length) {
            self.form.contiene_baterias = true;
          } else {
            self.form.contiene_baterias = false;
          }

          _this.loading = false;
        } else {
          alertify.error("La salida no ha sido despachada", 5);

          _this.$router.push({
            name: "salidas"
          });
        }
      });
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_saliente)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    registrarDevolucion: function registrarDevolucion() {
      var _this2 = this;

      var self = this;

      if (self.total_cantidad_devuelta > 0) {
        self.form.detalle_baterias = self.detalle_baterias;
        self.btnAction = "Registrando, espere....";

        if (self.form.estado === 2 && (self.form.id_tipo_salida === 7 || self.form.id_tipo_salida === 1)) {
          self.$swal.fire({
            title: 'Esta seguro de confirmar la devolución de productos de esta salida?',
            text: "Revise detenidamente los datos",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            if (result.value) {
              _api_salidas__WEBPACK_IMPORTED_MODULE_1__["default"].registrarDevolucion(self.form, function (data) {
                _this2.$swal.fire('La devolución ha sido emitida exitosamente!', 'Se ha registrado la entrada de productos.', 'success');

                _this2.$router.push({
                  name: "salidas"
                });
              }, function (err) {
                self.errorMessages = err;
                self.btnAction = "Recibir Devolución";
              });
            } else {
              self.btnAction = "Recibir Devolución";
            }
          });
        } else {
          alertify.error("La salida ya no puede ser devuelta", 5);
          this.$router.push({
            name: "salidas"
          });
        }
      } else {
        alertify.error("Se debe devolver por lo menos un producto", 5);
      }
    }
  },
  mounted: function mounted() {
    //this.loading=true;
    this.obtenerSalida();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var _api_tipo_salida__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/tipo_salida */ "./resources/app/api/tipo_salida.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_proveedores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/proveedores */ "./resources/app/api/proveedores.js");
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 //import Datepicker from "vuejs-datepicker";


/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
    Datepicker
  },*/
  data: function data() {
    return {
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default.a,
      format: "dd-MM-yyyy",
      bodegas: [],
      bodegas_consigna: [],
      productos: [],
      clientes: [],
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      detalleForm: {
        productox: "",
        cantidad: 1,
        precio_unitario: 0,
        subtotal: 0,
        total: 0
      },
      form: {
        codigo_salida: "",
        descripcion_salida: "",
        fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
        tipo_salida: "",
        bodega_entrante: "",
        bodega_saliente: "",
        detalleProductos: [],
        cliente_salida: ""
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
    }
  },
  methods: {
    seleccionarCliente: function seleccionarCliente(e) {
      var self = this;
      self.loading = true;
      self.form.detalleProductos = [];
      self.form.detallePago = [];
      self.detalleForm.productox = '';
      _api_bodegas__WEBPACK_IMPORTED_MODULE_0__["default"].buscarProductosConsignacionCliente({
        id_bodega: 17,
        id_cliente: self.form.cliente_salida.id_cliente
      }, function (data) {
        if (data !== null) {
          self.productos = [];
          self.productos = data.productos;
          self.detalleForm.productox = '';
        } else {
          alertify.warning("No se encuentran productos para esta bodega.", 5);
          self.detalleForm.productox = '';
        }

        self.loading = false;
      }, function (err) {
        /*if(err.codigo_bateria){
          self.detalleForm.bateria_busqueda = '';
          self.$refs.bateria.focus();
          alertify.warning("No se encuentra esta batería.",5);
          self.detalleForm.productox = '';
        }*/
        self.loading = false;
      });
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this;
      if (self.detalleForm.productox) self.detalleForm.cantidad = 0;
      self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
      self.$refs.cantidad.focus();
    },
    onDateSelect: function onDateSelect(date) {
      this.form.fecha_salida = moment(date).format("YYYY-MM-DD"); //
    },
    obtenerBodegasConsignacion: function obtenerBodegasConsignacion() {
      var self = this;
      _api_bodegas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerBodegasConsignacion({}, function (data) {
        self.clientes = data.clientes;
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        if (self.detalleForm.cantidad > 0
        /*&& self.detalleForm.precio_unitario > 0*/
        ) {
            var i = 0;
            var keyx = 0;

            if (self.form.detalleProductos) {
              self.form.detalleProductos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_bodega_producto === productox.productox.id_bodega_producto) {
                  i++;
                  keyx = key;
                }
              });
            }

            if (i === 0) {
              self.form.detalleProductos.push({
                productox: self.detalleForm.productox,
                cantidad: self.detalleForm.cantidad,
                precio_unitario: self.detalleForm.precio_unitario,
                subtotal: 0,
                total: 0
              });
            } else {
              var nuevo_total = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;

              if (nuevo_total <= self.form.detalleProductos[keyx].cantidad_disponible) {
                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
              } else {
                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].productox.cantidad_disponible;
              }
            }

            self.detalleForm.productox = '';
            self.detalleForm.cantidad = 0;
            self.detalleForm.precio_unitario = 0;
            self.detalleForm.subtotal = 0;
            self.detalleForm.total = 0;
          } else {
          alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleProductos.length >= 1) {
        this.form.detalleProductos.splice(index, 1);
      } else {
        this.form.detalleProductos = [];
      }
    },
    registrarTraslado: function registrarTraslado() {
      var _this = this;

      var self = this; // if(self.form.bodega_entrante && self.form.bodega_saliente && self.form.bodega_entrante.id_bodega !== self.form.bodega_saliente.id_bodega){

      self.btnAction = "Registrando, espere....";
      self.$swal.fire({
        title: 'Esta seguro de guardar y emitir la entrada?',
        text: "Esta acción no se puede deshacer",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _api_salidas__WEBPACK_IMPORTED_MODULE_4__["default"].registrarDevolucionConsignacion(self.form, function (data) {
            _this.$router.push({
              name: "salidas"
            }); //alertify.success("Salida por traslado registrada exitosamente",5);
            // alertify.success("Entrada por traslado registrada y en espera de confirmación de recibido",5);


            _this.$swal.fire('Traslado por devolución registrada exitosamente!', 'El traslado fue Registrada correctamente.', 'success');
          }, function (err) {
            self.errorMessages = err;
            self.btnAction = "Registrar";
          });
        } else {
          self.btnAction = "Registrar";
        }
      });
      /*}else{
        alertify.warning("Debe seleccionar bodegas distintas",5);
      }*/
    }
  },
  mounted: function mounted() {
    this.obtenerBodegasConsignacion();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //import Datepicker from "vuejs-datepicker";


/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
    Datepicker
  },*/
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando datos...espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_3___default.a,
      format: "dd-MM-yyyy",
      bodegas: [],
      bodegas_entrantes: [],
      productos: [],
      detalleForm: {
        productox: "",
        presentacionx: "",
        cantidad: 1,
        precio_unitario: 0,
        subtotal: 0,
        total: 0
      },
      form: {
        numero_documento: '',
        codigo_salida: "",
        descripcion_salida: "",
        fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
        tipo_salida: "",
        bodega_entrante: "",
        bodega_saliente: "",
        detalleProductos: [],
        condicion: 1
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0);
    },
    total_conversion: function total_conversion() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.conversionx);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
    }
  },
  methods: {
    cambiarCondicion: function cambiarCondicion() {
      var self = this;
      self.form.detalleProductos = [];
      self.detalleForm.productox = '';
      self.detalleForm.cantidad = 0;
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    calcularConversion: function calcularConversion(itemX) {
      itemX.conversionx = Number((Number(itemX.cantidad) * Number(itemX.presentacionx.escalar)).toFixed(2));

      if (!isNaN(itemX.conversionx)) {
        return itemX.conversionx;
      } else return 0;
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this;
      if (self.detalleForm.productox) self.detalleForm.cantidad = 0;
      self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
      self.$refs.cantidad.focus();
    },
    onDateSelect: function onDateSelect(date) {
      this.form.fecha_salida = moment(date).format("YYYY-MM-DD"); //
    },
    cargarPresentaciones: function cargarPresentaciones() {
      var self = this;
      self.loading = true;
      _api_salidas__WEBPACK_IMPORTED_MODULE_2__["default"].cargarPresentacionesProductos({
        id_producto: self.detalleForm.productox.id_producto,
        id_presentacion: self.detalleForm.productox.id_presentacion
      }, function (data) {
        if (data.presentaciones !== null) {
          self.detalleForm.presentacionx = data.presentaciones;
        } else {
          alertify.warning("No se encuentran presentaciones para este producto.", 5);
          self.form.presentaciones = [];
        }

        self.loading = false;
      }, function (err) {
        if (err.id_producto) {
          self.form.presentaciones = [];
          alertify.warning(err.id_producto, 5);
          self.loading = false;
        }
      }); //self.$refs.presentacionx.focus();
    },
    obtenerTodasBodegasProductos: function obtenerTodasBodegasProductos() {
      var self = this;
      self.loading = true;
      _api_bodegas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTodasBodegasProductos(function (data) {
        self.bodegas = data.bodegas;
        self.bodegas_entrantes = data.bodegas_entrantes;
        self.form.bodega_saliente = self.bodegas[0];
        self.productos = [];
        self.form.bodega_saliente.productos_bodega.forEach(function (bodega_producto, key) {
          self.productos.push({
            codigo_sistema: bodega_producto.producto.codigo_sistema,
            costo_promedio: Number(bodega_producto.producto.costo_promedio),
            descripcion: bodega_producto.producto.descripcion,
            id_producto: bodega_producto.producto.id_producto,
            id_presentacion: bodega_producto.id_presentacion,
            id_bodega: bodega_producto.id_bodega,
            codigo_presentacion: bodega_producto.codigo_presentacion,
            id_bodega_producto: self.form.bodega_saliente.productos_bodega[key].id_bodega_producto,
            nombre_comercial: bodega_producto.producto.nombre_comercial,
            cantidad_disponible: Number(self.form.bodega_saliente.productos_bodega[key].cantidad),
            cantidad_disponible_obsoletas: Number(self.form.bodega_saliente.productos_bodega[key].cantidad_obsoletas),
            cantidad_disponible_recuperadas: Number(self.form.bodega_saliente.productos_bodega[key].cantidad_recuperadas),
            unidad_medida: bodega_producto.producto.unidad_medida,
            nombre_full: ' ( ' + bodega_producto.no_lote + ' ) ' + bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.codigo_presentacion,
            id_zona_costo: bodega_producto.id_zona_costo
          });
        });
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    },
    obtenerProductosBodega: function obtenerProductosBodega() {
      var self = this;
      self.loading = true;
      self.form.detalleProductos = [];
      self.productos = [];
      self.form.bodega_saliente.productos_bodega.forEach(function (bodega_producto, key) {
        self.productos.push({
          codigo_sistema: bodega_producto.producto.codigo_sistema,
          costo_promedio: Number(bodega_producto.producto.costo_promedio),
          descripcion: bodega_producto.producto.descripcion,
          id_producto: bodega_producto.producto.id_producto,
          id_presentacion: bodega_producto.id_presentacion,
          id_bodega_producto: self.form.bodega_saliente.productos_bodega[key].id_bodega_producto,
          id_bodega: bodega_producto.id_bodega,
          nombre_comercial: bodega_producto.producto.nombre_comercial,
          cantidad_disponible: Number(self.form.bodega_saliente.productos_bodega[key].cantidad),
          cantidad_disponible_obsoletas: Number(self.form.bodega_saliente.productos_bodega[key].cantidad_obsoletas),
          cantidad_disponible_recuperadas: Number(self.form.bodega_saliente.productos_bodega[key].cantidad_recuperadas),
          unidad_medida: bodega_producto.producto.unidad_medida,
          nombre_full: ' ( ' + bodega_producto.no_lote + ' ) ' + bodega_producto.producto.nombre_comercial + ' - ' + bodega_producto.codigo_presentacion,
          id_zona_costo: bodega_producto.id_zona_costo
        });
      });
      self.loading = false;
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        if (self.detalleForm.cantidad > 0
        /*&& self.detalleForm.precio_unitario > 0*/
        ) {
            var i = 0;
            var keyx = 0;

            if (self.form.detalleProductos) {
              self.form.detalleProductos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_bodega_producto === productox.productox.id_bodega_producto) {
                  i++;
                  keyx = key;
                }
              });
            }

            if (i === 0) {
              self.form.detalleProductos.push({
                productox: self.detalleForm.productox,
                presentacionx: self.detalleForm.presentacionx,
                cantidad: self.detalleForm.cantidad,
                condicion: self.form.condicion,
                subtotal: 0,
                total: 0
              });
            } else {
              var nuevo_total = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
              var cantidad_disponiblex = self.form.detalleProductos[keyx].cantidad_disponible;

              if (self.form.condicion === 8) {
                cantidad_disponiblex = self.form.detalleProductos[keyx].cantidad_disponible_recuperadas;
              }

              if (self.form.condicion === 6) {
                cantidad_disponiblex = self.form.detalleProductos[keyx].cantidad_disponible_obsoletas;
              }

              if (nuevo_total <= cantidad_disponiblex) {
                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
              } else {
                //  self.form.detalleProductos[keyx].cantidad =self.form.detalleProductos[keyx].productox.cantidad_disponible;
                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].productox.cantidad_disponible;

                if (self.form.condicion === 8) {
                  self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].productox.cantidad_disponible_recuperadas;
                }

                if (self.form.condicion === 6) {
                  self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].productox.cantidad_disponible_obsoletas;
                }
              }
            }

            self.detalleForm.productox = '';
            self.detalleForm.cantidad = 0;
            self.detalleForm.precio_unitario = 0;
            self.detalleForm.subtotal = 0;
            self.detalleForm.total = 0;
          } else {
          alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleProductos.length >= 1) {
        this.form.detalleProductos.splice(index, 1);
      } else {
        this.form.detalleProductos = [];
      }
    },
    registrarTraslado: function registrarTraslado() {
      var _this = this;

      var self = this; //self.loading=true;

      if (self.form.bodega_entrante && self.form.bodega_saliente && self.form.bodega_entrante.id_bodega !== self.form.bodega_saliente.id_bodega) {
        self.btnAction = "Registrando, espere....";
        self.$swal.fire({
          title: 'Esta seguro de guardar y emitir la entrada?',
          text: "Esta acción no se puede deshacer",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, confirmar',
          cancelButtonText: 'Cancelar'
        }).then(function (result) {
          if (result.value) {
            _api_salidas__WEBPACK_IMPORTED_MODULE_2__["default"].registrarTraslado(self.form, function (data) {
              _this.$router.push({
                name: "salidas"
              }); //alertify.success("Salida por traslado registrada exitosamente",5);
              // alertify.success("Entrada por traslado registrada y en espera de confirmación de recibido",5);


              self.loading = false;

              _this.$swal.fire('Salida por traslado registrada exitosamente!', 'La Salida fue Registrada correctamente.', 'success');
            }, function (err) {
              self.loading = false;
              self.errorMessages = err;
              self.btnAction = "Registrar";
            });
          } else {
            self.loading = false;
            self.btnAction = "Registrar";
          }
        });
      } else {
        self.loading = false;
        alertify.warning("Debe seleccionar bodegas distintas", 5);
      }
    }
  },
  mounted: function mounted() {
    this.obtenerTodasBodegasProductos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var _api_tipo_salida__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/tipo_salida */ "./resources/app/api/tipo_salida.js");
/* harmony import */ var _api_proveedores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/proveedores */ "./resources/app/api/proveedores.js");
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 //import Datepicker from "vuejs-datepicker";



/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
    Datepicker
  },*/
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_5___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_4___default.a,
      format: "dd-MM-yyyy",
      bodegas: [],
      bodegas_consigna: [],
      productos: [],
      clientes: [],
      detalleForm: {
        productox: "",
        cantidad: 1,
        precio_unitario: 0,
        subtotal: 0,
        total: 0
      },
      form: {
        codigo_salida: "",
        descripcion_salida: "",
        fecha_salida: moment(new Date()).format("YYYY-MM-DD"),
        tipo_salida: "",
        bodega_entrante: "",
        bodega_saliente: "",
        detalleProductos: []
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.cantidad);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.detalleProductos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
    }
  },
  methods: {
    total_monto_asignado: function total_monto_asignado() {
      var self = this;

      if (this.form.detalleProductos) {
        var total = 0;
        self.form.detalleProductos.forEach(function (productox, key) {
          total = total + Number((Number(productox.productox.precio_sugerido) * Number(productox.cantidad)).toFixed(2));
        });
        return total;
      } else {
        return 0;
      }
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this;
      if (self.detalleForm.productox) self.detalleForm.cantidad = 0;
      self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
      self.$refs.cantidad.focus();
    },
    onDateSelect: function onDateSelect(date) {
      this.form.fecha_salida = moment(date).format("YYYY-MM-DD"); //
    },
    obtenerTodasBodegasProductos: function obtenerTodasBodegasProductos() {
      var self = this;
      _api_bodegas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTodasBodegasProductos(function (data) {
        self.bodegas = data.bodegas;
        self.clientes = data.clientes;
        self.bodegas_consigna = data.bodegas_consigna;
        self.form.bodega_saliente = self.bodegas[0];
        self.form.bodega_entrante = self.bodegas_consigna[0];
        self.productos = [];
        self.form.bodega_saliente.productos_bodega.forEach(function (bodega_producto, key) {
          self.productos.push({
            codigo_sistema: bodega_producto.producto.codigo_sistema,
            costo_promedio: Number(bodega_producto.producto.costo_promedio),
            precio_sugerido: Number(bodega_producto.producto.precio_sugerido),
            descripcion: bodega_producto.producto.descripcion,
            id_producto: bodega_producto.producto.id_producto,
            id_bodega_producto: self.form.bodega_saliente.productos_bodega[key].id_bodega_producto,
            nombre_comercial: bodega_producto.producto.nombre_comercial,
            cantidad_disponible: Number(self.form.bodega_saliente.productos_bodega[key].cantidad),
            unidad_medida: bodega_producto.producto.unidad_medida,
            nombre_full: bodega_producto.producto.descripcion + ' - ' + bodega_producto.producto.codigo_barra
          });
        });
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerProductosBodega: function obtenerProductosBodega() {
      var self = this;
      self.loading = true;
      self.form.detalleProductos = [];
      self.productos = [];
      self.form.bodega_saliente.productos_bodega.forEach(function (bodega_producto, key) {
        self.productos.push({
          codigo_sistema: bodega_producto.producto.codigo_sistema,
          costo_promedio: Number(bodega_producto.producto.costo_promedio),
          precio_sugerido: Number(bodega_producto.producto.precio_sugerido),
          descripcion: bodega_producto.producto.descripcion,
          id_producto: bodega_producto.producto.id_producto,
          id_bodega_producto: self.form.bodega_saliente.productos_bodega[key].id_bodega_producto,
          nombre_comercial: bodega_producto.producto.nombre_comercial,
          cantidad_disponible: Number(self.form.bodega_saliente.productos_bodega[key].cantidad),
          unidad_medida: bodega_producto.producto.unidad_medida,
          nombre_full: bodega_producto.producto.descripcion + ' - ' + bodega_producto.producto.codigo_barra
        });
      });
      self.loading = false;
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        if (self.detalleForm.cantidad > 0
        /*&& self.detalleForm.precio_unitario > 0*/
        ) {
            var i = 0;
            var keyx = 0;

            if (self.form.detalleProductos) {
              self.form.detalleProductos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_bodega_producto === productox.productox.id_bodega_producto) {
                  i++;
                  keyx = key;
                }
              });
            }

            if (i === 0) {
              self.form.detalleProductos.push({
                productox: self.detalleForm.productox,
                cantidad: self.detalleForm.cantidad,
                precio_unitario: self.detalleForm.precio_unitario,
                subtotal: 0,
                total: 0
              });
            } else {
              var nuevo_total = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;

              if (nuevo_total <= self.form.detalleProductos[keyx].cantidad_disponible) {
                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;
              } else {
                self.form.detalleProductos[keyx].cantidad = self.form.detalleProductos[keyx].productox.cantidad_disponible;
              }
            }

            self.detalleForm.productox = '';
            self.detalleForm.cantidad = 0;
            self.detalleForm.precio_unitario = 0;
            self.detalleForm.subtotal = 0;
            self.detalleForm.total = 0;
          } else {
          alertify.warning("Los valores para cantidad y precio unitario deben ser mayores que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleProductos.length >= 1) {
        this.form.detalleProductos.splice(index, 1);
      } else {
        this.form.detalleProductos = [];
      }
    },
    registrarTraslado: function registrarTraslado() {
      var _this = this;

      var self = this;

      if (self.form.cliente_salida) {
        //console.log(self.total_monto_asignado());
        //console.log(self.form.cliente_salida.monto_consignable);
        if (self.total_monto_asignado() > 0) {
          if (Number(self.total_monto_asignado()) <= Number(self.form.cliente_salida.monto_consignable)) {
            if (self.form.bodega_entrante && self.form.bodega_saliente && self.form.bodega_entrante.id_bodega !== self.form.bodega_saliente.id_bodega) {
              //self.loading=true;
              self.btnAction = "Registrando, espere....";
              self.$swal.fire({
                title: 'Esta seguro de guardar y emitir la entrada?',
                text: "Esta acción no se puede deshacer",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, confirmar',
                cancelButtonText: 'Cancelar'
              }).then(function (result) {
                if (result.value) {
                  _api_salidas__WEBPACK_IMPORTED_MODULE_3__["default"].registrarTrasladoConsignacion(self.form, function (data) {
                    _this.$router.push({
                      name: "salidas"
                    }); //alertify.success("Salida por traslado registrada exitosamente",5);
                    // alertify.success("Entrada por traslado registrada y en espera de confirmación de recibido",5);


                    _this.$swal.fire('Salida por traslado registrada exitosamente!', 'La Salida fue Registrada correctamente.', 'success');
                  }, function (err) {
                    self.errorMessages = err;
                    self.btnAction = "Registrar";
                  });
                } else {
                  self.btnAction = "Registrar";
                }
              });
            } else {
              alertify.warning("Debe seleccionar bodegas distintas", 5);
            }
          } else {
            alertify.warning("El monto máximo a consignar al cliente es US$" + self.form.cliente_salida.monto_consignable + " , el monto de esta consignación supera este monto", 5); ///Number(self.total_monto_asignado()) <= Number()
          }
        } else {
          alertify.warning("El monto total a consignar debe ser mayor a cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un cliente", 5);
      }
    }
  },
  mounted: function mounted() {
    this.obtenerTodasBodegasProductos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweet_modal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweet-modal-vue */ "./node_modules/sweet-modal-vue/src/main.js");
/* harmony import */ var _api_clientes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/clientes */ "./resources/app/api/clientes.js");
/* harmony import */ var _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/tasas-cambio */ "./resources/app/api/tasas-cambio.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/custom-scripts/Round */ "./resources/app/assets/custom-scripts/Round.js");
/* harmony import */ var _api_baterias__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api/baterias */ "./resources/app/api/baterias.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SweetModal: sweet_modal_vue__WEBPACK_IMPORTED_MODULE_3__["SweetModal"]
  },
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6___default.a,
      bodegas: [],
      bodegas_garantia: [],
      productos: [],
      detalleForm: {
        productox: '',
        cantidad: 1,
        precio_sugerido: 0,
        precio_sugerido_me: 0,
        porcentaje_ajuste: 0,
        porcentaje_ajuste_cliente: 0,
        precio: 0,
        precio_costo: 0,
        precio_lista: 0,
        fecha_venta: moment(new Date()).format("YYYY-MM-DD"),
        codigo_garantia: '',
        fecha_activacion: ''
      },
      form: {
        bodega_garantia: "",
        bodega: "",
        estado: 8,
        detalleProductos: []
      },
      btnAction: "Registrar",
      errorMessages: []
    };
  },
  methods: {
    onDateSelect: function onDateSelect(date) {
      this.detalleForm.fecha_venta = moment(date).format("YYYY-MM-DD"); //

      this.obtenerPorcentajeAjuste();
    },
    cambiarEstadoBaterias: function cambiarEstadoBaterias() {
      var self = this;

      if (self.form.detalleProductos && self.form.estado) {
        self.form.detalleProductos.forEach(function (productox, key) {
          self.form.detalleProductos[key].estado = self.form.estado;
        });
      }
    },
    buscarBateria: function buscarBateria() {
      var self = this;

      if (self.form.bodega_garantia) {
        self.loading = true; //self.$refs.precio_unitario.focus();

        _api_baterias__WEBPACK_IMPORTED_MODULE_8__["default"].buscarCodigo({
          codigo_bateria: self.detalleForm.bateria_busqueda,
          id_bodega: self.form.bodega_garantia.id_bodega,
          reservada: false,
          estado: 3 // en garantia

        }, function (data) {
          if (data !== null) {
            var keyx = -1;

            if (self.productos) {
              self.productos.forEach(function (productox, key) {
                //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
                if (data.id_producto === productox.id_producto) {
                  keyx = key;
                }
              });
            }

            if (keyx > -1) {
              self.detalleForm.productox = self.productos[keyx];
              self.detalleForm.cantidad = 1;
              self.detalleForm.precio_sugerido = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number(self.detalleForm.productox.precio_sugerido * self.form.t_cambio), 2);
              self.detalleForm.precio_sugerido_me = Number(self.detalleForm.productox.precio_sugerido);
              self.detalleForm.costo_promedio = Number(self.detalleForm.productox.costo_promedio);
              self.detalleForm.codigo_garantia = data.codigo_garantia;
              self.detalleForm.id_bateria = data.id_bateria;
              self.detalleForm.fecha_activacion = data.fecha_activacion;
              self.detalleForm.estado_actual = data.estado;
              self.detalleForm.estado = 8;
            } else {
              self.detalleForm.bateria_busqueda = '';
              self.detalleForm.fecha_activacion = '';
              self.detalleForm.productox = '';
              self.detalleForm.cantidad = 1;
              self.detalleForm.precio_sugerido = 0;
              self.detalleForm.precio_sugerido_me = 0;
              self.detalleForm.costo_promedio = 0;
              self.detalleForm.codigo_garantia = '';
              self.detalleForm.id_bateria = '';
              self.detalleForm.fecha_activacion = '';
              self.detalleForm.estado_actual = '';
              self.detalleForm.estado = 8;
            }
          } else {
            alertify.warning("No se encuentra esta batería.", 5);
            self.detalleForm.bateria_busqueda = '';
            self.detalleForm.fecha_activacion = '';
          }

          self.loading = false;
        }, function (err) {
          console.log(err);

          if (err.codigo_bateria) {
            self.detalleForm.bateria_busqueda = '';
            alertify.warning("No se encuentra esta batería.", 5);
            self.detalleForm.productox = '';
          }

          self.loading = false;
        });
      } else {
        alertify.warning("Debe seleccionar una bodega para buscar baterías especificas.", 5);
      }
    },
    seleccionarBodega: function seleccionarBodega() {
      var self = this;
      self.loading = true;
      self.form.detalleProductos = [];
      self.form.detallePago = [];
      self.detalleForm.productox = '';
      self.detalleForm.fecha_activacion = '';
      _api_bodegas__WEBPACK_IMPORTED_MODULE_1__["default"].buscarProductosBodega({
        id_bodega: self.form.bodegas_garantia.id_bodega
      }, function (data) {
        if (data !== null) {
          self.productos = [];
          self.productos = data.productos;
          self.detalleForm.productox = '';
        } else {
          alertify.warning("No se encuentran productos para esta bodega.", 5);
          self.detalleForm.productox = '';
        }

        self.loading = false;
      }, function (err) {
        /*if(err.codigo_bateria){
          self.detalleForm.bateria_busqueda = '';
          self.$refs.bateria.focus();
          alertify.warning("No se encuentra esta batería.",5);
          self.detalleForm.productox = '';
        }*/
        self.loading = false;
      });
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      //const productoP = e.target.value;
      var self = this; //self.detalleForm.productox = productoP;

      if (self.detalleForm.productox) {
        self.detalleForm.cantidad = 1;
        self.detalleForm.precio_sugerido = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number(self.detalleForm.productox.precio_sugerido * self.form.t_cambio), 2);
        self.detalleForm.precio_sugerido_me = Number(self.detalleForm.productox.precio_sugerido);

        if (self.detalleForm.productox.tipo_producto === 2) {
          self.detalleForm.afectacionx = self.afectaciones[0];
        }

        self.$refs.cantidad.focus(); //self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
      }
    },
    calcular_montos: function calcular_montos(itemX) {
      itemX.subtotal = Number((Number(itemX.precio) * Number(itemX.cantidad)).toFixed(2));
      itemX.mt_descuento = Number((Number(itemX.p_descuento / 100) * Number((Number(itemX.precio) * Number(itemX.cantidad)).toFixed(2))).toFixed(2)); //itemX.p_ajuste= Number(itemX.afectacionx.valor);

      itemX.mt_ajuste = Number((Number(itemX.p_ajuste / 100) * Number((Number(itemX.precio) * Number(itemX.cantidad)).toFixed(2))).toFixed(2));
      itemX.p_unitario = Number((Number(itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste) / Number(itemX.cantidad)).toFixed(2));
      /*console.log(itemX.p_impuesto);
      console.log(Number(itemX.p_impuesto/100));
      console.log(itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste);
      console.log(Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste)))));
      */

      /*let xy = Number((Number(itemX.p_impuesto/100)*Number((itemX.subtotal-itemX.mt_descuento-itemX.mt_ajuste))));
      console.log(roundNumber.round(xy,2));*/

      itemX.mt_impuesto = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number((Number(itemX.p_impuesto / 100) * Number(itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste)).toFixed(2)), 2);
      itemX.total_sin_iva = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number(itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste), 2);
      itemX.total = Number((itemX.subtotal - itemX.mt_descuento - itemX.mt_ajuste + itemX.mt_impuesto).toFixed(2));

      if (!isNaN(itemX.mt_descuento)) {
        return itemX.mt_descuento;
      } else return 0;
    },
    obtenerTCParalela: function obtenerTCParalela() {
      var self = this;
      self.loading = true;
      _api_tasas_cambio__WEBPACK_IMPORTED_MODULE_5__["default"].obtenerTCParalela({
        fecha: self.form.fecha_salida,
        dias: self.form.dias_credito
      }, function (data) {
        if (data.tasa_paralela !== null) {
          self.form.t_cambio = Number(data.tasa_paralela); //self.form.tasa_oficial = Number(data.tasa);

          self.form.f_vencimiento = data.fecha;
          self.form.detalleProductos.forEach(function (productox, key) {
            productox.precio_lista = Number((productox.precio_lista_me * self.form.t_cambio).toFixed(2));
            productox.precio = Number((productox.precio_lista_me * self.form.t_cambio).toFixed(2)); // console.log(productox.precio_lista);
          });
        } else {
          alertify.warning("No se encuentra tasa de cambio para esta fecha.", 5);
          self.form.t_cambio = 0;
          self.form.f_vencimiento = self.form.fecha_salida;
          self.form.detalleProductos = [];
        }

        self.loading = false;
      }, function (err) {
        if (err.fecha[0]) {
          self.form.t_cambio = 0;
          self.form.f_vencimiento = self.form.fecha_salida;
          alertify.warning(err.fecha[0], 5);
          self.loading = false;
        }
      });
    },
    obtenerPorcentajeAjuste: function obtenerPorcentajeAjuste() {
      var self = this;
      self.loading = true;
      _api_baterias__WEBPACK_IMPORTED_MODULE_8__["default"].obtenerPorcentajeAjuste({
        fecha_venta: self.detalleForm.fecha_venta,
        id_producto: self.detalleForm.productox.id_producto,
        tipo_servicio: self.detalleForm.tipo_servicio
      }, function (data) {
        if (data !== null) {
          self.detalleForm.porcentaje_ajuste_cliente = data;
          self.detalleForm.porcentaje_ajuste = 100 - Number(self.detalleForm.porcentaje_ajuste_cliente);

          if (Number(self.detalleForm.porcentaje_ajuste) > 0) {
            self.detalleForm.afectacionx = self.afectaciones[0];
          } else {
            self.detalleForm.afectacionx = self.afectaciones[1];
          }

          self.detalleForm.precio = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number(Number(self.detalleForm.precio_sugerido) - Number(((100 - self.detalleForm.porcentaje_ajuste_cliente) / 100 * self.detalleForm.precio_sugerido).toFixed(2))), 2);
        } else {
          alertify.warning("No se encuentra esta batería.", 5);
          self.detalleForm.porcentaje_ajuste = 0;
        }

        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    },
    obtenerMunicipios: function obtenerMunicipios() {
      var self = this;
      self.form.municipio = null;
      if (self.formCliente.departamento.municipios_departamento) self.municipios = self.formCliente.departamento.municipios_departamento;
    },
    nueva: function nueva() {
      var self = this;
      _api_salidas__WEBPACK_IMPORTED_MODULE_0__["default"].nuevaSalidaRecuperados({}, function (data) {
        self.bodegas = data.bodegas;
        self.bodegas_garantia = data.bodegas_garantia;
        self.form.bodega_garantia = self.bodegas_garantia[0];
        self.form.bodega = self.bodegas[0];
        self.productos = data.productos;
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        var existeCodigoGarantia = false;
        self.form.detalleProductos.forEach(function (bateriax, key) {
          if (self.detalleForm.codigo_garantia === bateriax.codigo_garantiax) {
            existeCodigoGarantia = true;
          }
        });

        if (!existeCodigoGarantia) {
          this.form.detalleProductos.push({
            productox: this.detalleForm.productox,
            codigo_garantiax: this.detalleForm.codigo_garantia,
            fecha_activacion: this.detalleForm.fecha_activacion,
            estado_actual: this.detalleForm.estado_actual,
            estado: this.form.estado,
            id_bateria: this.detalleForm.id_bateria
          });
          alertify.success("Batería agregada!", 5);
        } else {
          alertify.warning("Ya existe ese código de batería en el listado", 5);
        }

        this.detalleForm.productox = [];
        this.detalleForm.bateria_busqueda = '';
        this.detalleForm.codigo_garantiax = '';
        this.detalleForm.fecha_activacion = '';
        this.detalleForm.estado_actual = ''; //this.form.estado=8;
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleProductos.length >= 1) {
        this.form.detalleProductos.splice(index, 1);
      } else {
        this.form.detalleProductos = [];
      }
    },
    pagoCompleto: function pagoCompleto(IdMoneda) {
      var self = this;

      if (Number(self.form.total_final_cordobas.toFixed(2)) > 0) {
        self.form.detallePago = [];
        /*
              let monto =0,monto_me=0;
              if(IdMoneda === 1){
                monto=Number(self.form.total_final_cordobas.toFixed(2));
                monto_me=Number((self.form.total_final_cordobas/self.form.t_cambio).toFixed(2));
              }else{
                monto=Number(self.form.total_final_cordobas.toFixed(2));
                monto_me=Number((self.form.total_final_cordobas/self.form.t_cambio).toFixed(2));
              }*/

        self.form.detallePago.push({
          via_pagox: self.vias_pago[1],
          moneda_x: self.monedas[Number(IdMoneda)],
          monto: Number(self.form.total_final_cordobas.toFixed(2)),
          monto_me: Number((self.form.total_final_cordobas / self.form.t_cambio).toFixed(2)),
          banco_x: null,
          numero_minuta: '',
          numero_nota_credito: '',
          numero_cheque: '',
          numero_transferencia: '',
          numero_recibo_pago: ''
        });
        self.detalleFormPago.via_pagox = null;
        self.detalleFormPago.monto = 0;
        self.detalleFormPago.monto_me = 0;
        self.detalleFormPago.moneda_x = null;
        self.detalleFormPago.banco_x = null;
        self.detalleFormPago.numero_minuta = '';
        self.detalleFormPago.numero_nota_credito = '';
        self.detalleFormPago.numero_cheque = '';
        self.detalleFormPago.numero_transferencia = '';
        self.detalleFormPago.numero_recibo_pago = '';
      }
    },
    agregarMetodoPago: function agregarMetodoPago() {
      var self = this;

      if (self.detalleFormPago.via_pagox && self.detalleFormPago.moneda_x) {
        if (self.detalleFormPago.monto > 0) {
          var i = 0;
          var keyx = 0;

          if (self.form.detallePago) {
            self.form.detallePago.forEach(function (via_pago_x, key) {
              if (self.detalleFormPago.via_pagox.id_via_pago === via_pago_x.via_pagox.id_via_pago && self.detalleFormPago.moneda_x.id_moneda === via_pago_x.moneda_x.id_moneda) {
                i++;
                keyx = key;
              }
            });
          }

          var monto_me = 0,
              monto_mn = 0;

          if (self.detalleFormPago.moneda_x.id_moneda === 1) {
            monto_mn = Number(self.detalleFormPago.monto);
            monto_me = Number((self.detalleFormPago.monto / self.form.t_cambio).toFixed(2));
          } else if (self.detalleFormPago.moneda_x.id_moneda === 3) {
            monto_me = Number(self.detalleFormPago.monto);
            monto_mn = Number((self.detalleFormPago.monto * self.form.t_cambio).toFixed(2));
          }

          if (i === 0) {
            self.form.detallePago.push({
              via_pagox: self.detalleFormPago.via_pagox,
              moneda_x: self.detalleFormPago.moneda_x,
              monto: Number(monto_mn.toFixed(2)),
              monto_me: Number(monto_me.toFixed(2)),
              banco_x: self.detalleFormPago.banco_x,
              numero_minuta: self.detalleFormPago.numero_minuta,
              numero_nota_credito: self.detalleFormPago.numero_nota_credito,
              numero_cheque: self.detalleFormPago.numero_cheque,
              numero_transferencia: self.detalleFormPago.numero_transferencia,
              numero_recibo_pago: self.detalleFormPago.numero_recibo_pago
            });
            alertify.success("Método de pago agregado!", 5);
          } else {
            if (self.detalleFormPago.moneda_x.id_moneda === 1) {
              monto_mn = Number(self.detalleFormPago.monto);
              monto_me = _assets_custom_scripts_Round__WEBPACK_IMPORTED_MODULE_7__["default"].round(Number(self.detalleFormPago.monto / self.form.t_cambio), 2);
              self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto + self.detalleFormPago.monto).toFixed(2));
              self.form.detallePago[keyx].monto_me = Number((self.form.detallePago[keyx].monto / self.form.t_cambio).toFixed(2));
            } else if (self.detalleFormPago.moneda_x.id_moneda === 3) {
              self.form.detallePago[keyx].monto_me = Number((self.form.detallePago[keyx].monto_me + self.detalleFormPago.monto).toFixed(2));
              self.form.detallePago[keyx].monto = Number((self.form.detallePago[keyx].monto_me * self.form.t_cambio).toFixed(2));
            } //let nuevo_monto_total = self.form.detallePago[keyx].monto + self.detalleFormPago.monto;


            alertify.success("Pago agregado!", 5);
          }

          self.detalleFormPago.via_pagox = null;
          self.detalleFormPago.monto = 0;
          self.detalleFormPago.monto_me = 0;
          self.detalleFormPago.moneda_x = null;
          self.detalleFormPago.banco_x = null;
          self.detalleFormPago.numero_minuta = '';
          self.detalleFormPago.numero_nota_credito = '';
          self.detalleFormPago.numero_cheque = '';
          self.detalleFormPago.numero_transferencia = '';
          self.detalleFormPago.numero_recibo_pago = '';
        } else {
          alertify.warning("El monto debe ser mayor que cero", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un método y una moneda", 5);
      }
    },
    eliminarLineaPago: function eliminarLineaPago(item, index) {
      if (this.form.detallePago.length >= 1) {
        this.form.detallePago.splice(index, 1);
      } else {
        this.form.detallePago = [];
      }
    },
    procesar_factura: function procesar_factura() {
      var _this = this;

      var self = this;
      self.$swal.fire({
        title: 'Esta seguro de completar el traslado de productos?',
        text: "Revise los detalles del traslado ",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          self.loading = true;
          _api_salidas__WEBPACK_IMPORTED_MODULE_0__["default"].registrarTrasladoRecuperado(self.form, function (data) {
            self.loading = false;

            _this.$swal.fire('Traslado Registrado!', 'El traslado de baterías en garantía fue registrado correctamente', 'success').then(function (result2) {
              if (result2.value) {
                _this.$router.push({
                  name: "salidas"
                });
              }
            });
          }, function (err) {
            self.errorMessages = err;
            alertify.warning("Por favor revise los datos faltantes", 5);
            self.btnAction = "Registrar";
            self.loading = false;
          });
        } else {
          self.btnAction = "Registrar";
        }
      });
    },
    registrar: function registrar() {
      var self = this;
      self.btnAction = "Registrando, espere....";
      self.procesar_factura();
    },
    seleccionarTipo: function seleccionarTipo() {
      var self = this;

      if (self.form.id_tipo === 1) {
        self.form.dias_credito = 0;
      } else {
        self.form.aplicaIR = false;
        self.form.aplicaIMI = false;
        self.form.mt_retencion = 0;
        self.form.mt_retencion_imi = 0;
        self.form.doc_exoneracion_ir = '';
        self.form.doc_exoneracion_imi = '';
        self.form.dias_credito = 0;
        self.form.dias_credito = self.plazo_maximo_credito;
      }

      self.obtenerTCParalela();
      /*calcular fecha*/
    }
  },
  mounted: function mounted() {
    // this.obtenerAfectacionesTodas();
    // this.obtenerTodasBodegasProductos();
    this.nueva();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-f0a0cb12] {\n  min-width: 120px;\n}\n.table a[data-v-f0a0cb12] {\n  color: #2675dc;\n}\n.table .table-number[data-v-f0a0cb12] {\n  width: 60px;\n}\n.table .action[data-v-f0a0cb12] {\n  width: 180px;\n}\n.table .detail-link[data-v-f0a0cb12] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-f0a0cb12] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-f0a0cb12]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharManual.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/DespacharManual.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top: 33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharV2.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/DespacharV2.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n    margin-top: 33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n  margin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n  margin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n  margin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n  margin-top:33px;\n}\n.form-rta91{\n  margin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharManual.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/DespacharManual.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DespacharManual.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharManual.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharV2.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/DespacharV2.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DespacharV2.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharV2.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Registrar.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTraslado.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharManual.vue?vue&type=template&id=45befa28&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/DespacharManual.vue?vue&type=template&id=45befa28& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Tipo salida")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.tipos_salida,
                        label: "descripcion"
                      },
                      model: {
                        value: _vm.form.tipo_salida,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "tipo_salida", $$v)
                        },
                        expression: "form.tipo_salida"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.tipo_salida, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) },
                          on: {
                            input: function($event) {
                              return _vm.limpiarDatos()
                            }
                          }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Condición productos:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.condicion,
                          expression: "form.condicion",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { disabled: "" },
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return _vm._n(val)
                              })
                            _vm.$set(
                              _vm.form,
                              "condicion",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                          _vm.limpiarDatos
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Nuevos")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "8" } }, [
                        _vm._v("Recuperados")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "6" } }, [
                        _vm._v("Obsoletos")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.bodegas },
                      on: {
                        input: function($event) {
                          return _vm.obtenerProductosBodega()
                        }
                      },
                      model: {
                        value: _vm.form.bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "bodega", $$v)
                        },
                        expression: "form.bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bodega, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha salida")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        language: _vm.es,
                        value: new Date(),
                        format: _vm.format
                      },
                      on: { selected: _vm.onDateSelect },
                      model: {
                        value: _vm.fechax,
                        callback: function($$v) {
                          _vm.fechax = $$v
                        },
                        expression: "fechax"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_salida, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Número documento de salida")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.numero_documento,
                        expression: "form.numero_documento"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.numero_documento },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "numero_documento",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.numero_documento, function(
                      message
                    ) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-9" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Observaciones")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.descripcion_salida,
                        expression: "form.descripcion_salida"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.descripcion_salida },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "descripcion_salida",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.descripcion_salida, function(
                      message
                    ) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            !_vm.form.bodega
              ? _c("div", [_vm._m(1), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.detalleProductos, function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.detalleProductos, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.descripcion,
                                    expression: "item.descripcion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.descripcion },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "descripcion",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".productox.id_producto"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.cantidad_despachada,
                                    expression: "item.cantidad_despachada",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number", disabled: "" },
                                domProps: { value: item.cantidad_despachada },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad_despachada",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".cantidad_despachada"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr")
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "2" } },
                        [_vm._v(" Total Unidades")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { tag: "button", to: { name: "salidas" } } },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction != "Registrar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.confirmar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n\t\t\t\t\t\t")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Código Garantía Bateria")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.bateria_busqueda,
                        expression: "detalleForm.bateria_busqueda"
                      }
                    ],
                    ref: "bateria",
                    staticClass: "form-control",
                    domProps: { value: _vm.detalleForm.bateria_busqueda },
                    on: {
                      keydown: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.buscarBateria($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "bateria_busqueda",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.bateria_busqueda, function(
                      message
                    ) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.detalle_baterias, function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.detalle_baterias, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", { staticStyle: { width: "2%" } }, [
                              _c(
                                "button",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.eliminarLinea(item, index)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-trash" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      item.productox.bateria_producto
                                        .descripcion,
                                    expression:
                                      "item.productox.bateria_producto.descripcion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value:
                                    item.productox.bateria_producto.descripcion
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.productox.bateria_producto,
                                      "descripcion",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalle_baterias." +
                                      index +
                                      ".productox.id_producto"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.productox.codigo_garantia,
                                    expression: "item.productox.codigo_garantia"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.productox.codigo_garantia
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.productox,
                                      "codigo_garantia",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalle_baterias." +
                                      index +
                                      ".codigo_garantia"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ])
                          ])
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("tfoot")
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.loading
              ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Registrar Salida")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar salida de Baterías Automotrices")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione una bodega para continuar.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "3" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de batería")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Batería")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código Garantía")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharV2.vue?vue&type=template&id=6f7a6a44&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/DespacharV2.vue?vue&type=template&id=6f7a6a44& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _c("div", { staticClass: "content-box-header" }, [
              _c("div", { staticClass: "box-title" }, [
                _vm._v("Salida por " + _vm._s(_vm.form.salida_tipo.descripcion))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "box-description" }, [
                _vm._v("Formulario para despachar salida de productos")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row" },
              [
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Tipo salida")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.salida_tipo.descripcion,
                          expression: "form.salida_tipo.descripcion"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", type: "text" },
                      domProps: { value: _vm.form.salida_tipo.descripcion },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form.salida_tipo,
                            "descripcion",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.salida_tipo, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.codigo_salida,
                          expression: "form.codigo_salida"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", type: "text" },
                      domProps: { value: _vm.form.codigo_salida },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "codigo_salida",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.codigo_salida, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.salida_bodega.descripcion,
                          expression: "form.salida_bodega.descripcion"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", type: "text" },
                      domProps: { value: _vm.form.salida_bodega.descripcion },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form.salida_bodega,
                            "descripcion",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.salida_bodega, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.form.salida_proveedor
                  ? [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Proveedor")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.form.salida_proveedor.nombre_comercial,
                                expression:
                                  "form.salida_proveedor.nombre_comercial"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { readonly: "", type: "text" },
                            domProps: {
                              value: _vm.form.salida_proveedor.nombre_comercial
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.salida_proveedor,
                                  "nombre_comercial",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.salida_proveedor, function(
                              message
                            ) {
                              return _c("li", {
                                key: message,
                                domProps: { textContent: _vm._s(message) }
                              })
                            }),
                            0
                          )
                        ])
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.salida_cliente
                  ? [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Nombre Cliente")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.salida_cliente.nombre_completo,
                                expression:
                                  "form.salida_cliente.nombre_completo"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { readonly: "", type: "text" },
                            domProps: {
                              value: _vm.form.salida_cliente.nombre_completo
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.salida_cliente,
                                  "nombre_completo",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.nombre_completo, function(
                              message
                            ) {
                              return _c("li", {
                                key: message,
                                domProps: { textContent: _vm._s(message) }
                              })
                            }),
                            0
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Razón Social")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.salida_cliente.razon_social,
                                expression: "form.salida_cliente.razon_social"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { readonly: "", type: "text" },
                            domProps: {
                              value: _vm.form.salida_cliente.razon_social
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.salida_cliente,
                                  "razon_social",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.nombre_completo, function(
                              message
                            ) {
                              return _c("li", {
                                key: message,
                                domProps: { textContent: _vm._s(message) }
                              })
                            }),
                            0
                          )
                        ])
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha salida")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.fecha_salida,
                          expression: "form.fecha_salida"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", type: "text" },
                      domProps: { value: _vm.form.fecha_salida },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "fecha_salida",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_salida, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Orden de venta")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.orden_venta,
                          expression: "form.orden_venta"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", readonly: "" },
                      domProps: { value: _vm.form.orden_venta },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "orden_venta", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.orden_venta, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Factura")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.no_factura,
                          expression: "form.no_factura"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", readonly: "" },
                      domProps: { value: _vm.form.no_factura },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "no_factura", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.no_factura, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Remisión")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.no_remision,
                          expression: "form.no_remision"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", readonly: "" },
                      domProps: { value: _vm.form.no_remision },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "no_remision", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.no_factura, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Observaciones Salida")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.descripcion_salida,
                          expression: "form.descripcion_salida"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", type: "text" },
                      domProps: { value: _vm.form.descripcion_salida },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "descripcion_salida",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.descripcion_salida, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ])
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.salida_productos, function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.salida_productos, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.text,
                                    expression: "item.text"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.text },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(item, "text", $event.target.value)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_productos." + index + ".id_producto"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.codigo_presentacion,
                                    expression: "item.codigo_presentacion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: { value: item.codigo_presentacion },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "codigo_presentacion",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_productos." +
                                      index +
                                      ".codigo_presentacion"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      item.salida_presentacion.unidad_medida,
                                    expression:
                                      "item.salida_presentacion.unidad_medida"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: {
                                  value: item.salida_presentacion.unidad_medida
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.salida_presentacion,
                                      "unidad_medida",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_presentacion." +
                                      index +
                                      ".unidad_medida"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.salida_presentacion.escalar,
                                    expression:
                                      "item.salida_presentacion.escalar"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: {
                                  value: item.salida_presentacion.escalar
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.salida_presentacion,
                                      "escalar",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_presentacion." + index + ".escalar"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.salida_presentacion.simbolo_um,
                                    expression:
                                      "item.salida_presentacion.simbolo_um"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: {
                                  value: item.salida_presentacion.simbolo_um
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.salida_presentacion,
                                      "simbolo_um",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_presentacion." +
                                      index +
                                      ".simbolo_um"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.cantidad_saliente,
                                    expression: "item.cantidad_saliente",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "number" },
                                domProps: { value: item.cantidad_saliente },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad_saliente",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_productos." +
                                      index +
                                      ".cantidad_saliente"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.cantidad_despachada,
                                    expression: "item.cantidad_despachada",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  disabled:
                                    item.bodega_producto.producto_simple
                                      .tipo_producto === 3 &&
                                    item.bodega_producto.producto_simple
                                      .condicion === 1 &&
                                    item.bodega_producto.producto_simple
                                      .producto_detalles_baterias
                                      .id_submarca !== 7,
                                  type: "number"
                                },
                                domProps: { value: item.cantidad_despachada },
                                on: {
                                  change: function($event) {
                                    item.cantidad_despachada = Math.max(
                                      Math.min(
                                        Math.round(item.cantidad_despachada),
                                        item.cantidad_saliente
                                      ),
                                      1
                                    )
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad_despachada",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_productos." +
                                      index +
                                      ".cantidad_despachada"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.calcular_diferencia(
                                      item.cantidad_saliente,
                                      item.cantidad_despachada
                                    )
                                  ) +
                                  "\n\t\t\t\t\t\t\t\t\t\t"
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.calcularConversion(item),
                                      2
                                    )
                                  )
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr")
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "5" } },
                        [_vm._v(" Total Unidades")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_saliente))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_despachada))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_diferencia))
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "salidas" }, tag: "button" } },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction2 !== "Guardar Cambios",
                      type: "button"
                    },
                    on: { click: _vm.guardarCambios }
                  },
                  [_vm._v(_vm._s(_vm.btnAction2))]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: {
                      disabled: _vm.btnAction !== "Despachar Productos",
                      type: "button"
                    },
                    on: { click: _vm.despachar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm.form.contiene_baterias
              ? [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Código Garantía Bateria")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detalleForm.bateria_busqueda,
                              expression: "detalleForm.bateria_busqueda"
                            }
                          ],
                          ref: "bateria",
                          staticClass: "form-control",
                          domProps: { value: _vm.detalleForm.bateria_busqueda },
                          on: {
                            keydown: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.buscarBateria($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detalleForm,
                                "bateria_busqueda",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.bateria_busqueda, function(
                            message
                          ) {
                            return _c("li", {
                              key: message,
                              domProps: { textContent: _vm._s(message) }
                            })
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.detalle_baterias, function(
                          message
                        ) {
                          return _c("li", {
                            key: message,
                            domProps: { textContent: _vm._s(message) }
                          })
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("table", { staticClass: "table table-bordered" }, [
                        _vm._m(4),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.filteredItems, function(item, index) {
                              return [
                                item.estado === 1
                                  ? [
                                      _c("tr", [
                                        _c(
                                          "td",
                                          { staticStyle: { width: "2%" } },
                                          [
                                            _c(
                                              "button",
                                              {
                                                on: {
                                                  click: function($event) {
                                                    return _vm.eliminarLinea(
                                                      item,
                                                      index
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "fa fa-trash"
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: item.descripcion,
                                                expression: "item.descripcion"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: { disabled: "" },
                                            domProps: {
                                              value: item.descripcion
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "descripcion",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "ul",
                                            { staticClass: "error-messages" },
                                            _vm._l(
                                              _vm.errorMessages[
                                                "detalle_baterias." +
                                                  index +
                                                  ".id_producto"
                                              ],
                                              function(message) {
                                                return _c("li", {
                                                  key: message,
                                                  domProps: {
                                                    textContent: _vm._s(message)
                                                  }
                                                })
                                              }
                                            ),
                                            0
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: item.codigo_garantia,
                                                expression:
                                                  "item.codigo_garantia"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: { disabled: "" },
                                            domProps: {
                                              value: item.codigo_garantia
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "codigo_garantia",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "ul",
                                            { staticClass: "error-messages" },
                                            _vm._l(
                                              _vm.errorMessages[
                                                "detalle_baterias." +
                                                  index +
                                                  ".codigo_garantia"
                                              ],
                                              function(message) {
                                                return _c("li", {
                                                  key: message,
                                                  domProps: {
                                                    textContent: _vm._s(message)
                                                  }
                                                })
                                              }
                                            ),
                                            0
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            item.registrada
                                              ? _c("div", [
                                                  _c(
                                                    "i",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "tooltip",
                                                          rawName: "v-tooltip",
                                                          value:
                                                            "Bateria registrada",
                                                          expression:
                                                            "'Bateria registrada'"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "fa fa-check",
                                                      style: "color:green;",
                                                      attrs: {
                                                        "aria-hidden": "true"
                                                      }
                                                    },
                                                    [_vm._v("  Guardada")]
                                                  )
                                                ])
                                              : _c("div", [
                                                  _c(
                                                    "i",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "tooltip",
                                                          rawName: "v-tooltip",
                                                          value:
                                                            "Registrar bateria manualmente",
                                                          expression:
                                                            "'Registrar bateria manualmente'"
                                                        }
                                                      ],
                                                      staticClass: "fa fa-save",
                                                      style: "color:blue;",
                                                      attrs: {
                                                        "aria-hidden": "true"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.registrarBateria(
                                                            item
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          item.guardadoEnProgreso
                                                            ? "  Guardando...."
                                                            : "  Pendiente"
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ])
                                          ]
                                        )
                                      ])
                                    ]
                                  : _vm._e()
                              ]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("tfoot")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn-agregar",
                              on: {
                                click: function($event) {
                                  return _vm.cambiarPaginacion(-999)
                                }
                              }
                            },
                            [_vm._v("Mostrar Primeros 10")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-agregar",
                              on: {
                                click: function($event) {
                                  return _vm.cambiarPaginacion(10)
                                }
                              }
                            },
                            [_vm._v("Mostrar Más")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger btn-agregar",
                              on: {
                                click: function($event) {
                                  return _vm.cambiarPaginacion(-10)
                                }
                              }
                            },
                            [_vm._v("Mostrar Menos")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn-agregar",
                              on: {
                                click: function($event) {
                                  return _vm.cambiarPaginacion(999)
                                }
                              }
                            },
                            [_vm._v("Mostrar Todos")]
                          )
                        ])
                      ])
                    ])
                  ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.loading
              ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Código salida "),
      _c("small", [_vm._v("(Automático)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Presentación")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM")]),
        _vm._v(" "),
        _c("th", [_vm._v("Escalar")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM Estandar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Saliente")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Despachada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Diferencia")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "5" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de batería")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Batería")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código Garantía")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Opciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Listado.vue?vue&type=template&id=f0a0cb12&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/Listado.vue?vue&type=template&id=f0a0cb12&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Administrar Salidas de productos")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Salidas")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "box-description" },
            [
              _c(
                "router-link",
                {
                  style: "margin-right: 10px;color: blue;",
                  attrs: { to: { name: "pagina-principal" } }
                },
                [_vm._v("Módulos")]
              ),
              _vm._v(">"),
              _c(
                "router-link",
                {
                  style: "margin-right: 10px;color: blue;",
                  attrs: { to: { name: "pagina-principal-inventario" } }
                },
                [_vm._v(" Módulo inventario")]
              ),
              _vm._v("> Salidas")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-6 sm-text-center" },
            [
              _c(
                "router-link",
                {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip",
                      value: "Registro de salida de productos",
                      expression: "'Registro de salida de productos'"
                    }
                  ],
                  staticClass: "btn btn-success",
                  attrs: { tag: "button", to: { name: "registrar-salida" } }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Salida\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: { tag: "button", to: { name: "registrar-traslado" } }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Traslado\n                ")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-md-6 sm-text-center form-inline justify-content-end",
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  _vm.filter.page = 1
                  _vm.obtenerSalidas()
                }
              }
            },
            [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.filter.search.estado,
                      expression: "filter.search.estado",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return _vm._n(val)
                        })
                      _vm.$set(
                        _vm.filter.search,
                        "estado",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "100" } }, [_vm._v("Todos")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "0" } }, [_vm._v("Anulados")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "1" } }, [_vm._v("Emitidos")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "2" } }, [
                    _vm._v("Despachados")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filter.search.field,
                      expression: "filter.search.field"
                    }
                  ],
                  staticClass: "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.filter.search,
                        "field",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "orden_venta" } }, [
                    _vm._v("Orden de venta")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "codigo_salida" } }, [
                    _vm._v("Código")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "descripcion_salida" } }, [
                    _vm._v("Descripción/Cliente")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filter.search.value,
                    expression: "filter.search.value"
                  }
                ],
                staticClass: "form-control mb-1 mr-sm-1 mb-sm-0",
                attrs: { placeholder: "Buscar", type: "text" },
                domProps: { value: _vm.filter.search.value },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.filter.search, "value", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-info",
                  on: {
                    click: function($event) {
                      _vm.filter.page = 1
                      _vm.obtenerSalidas()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-search" }),
                  _vm._v(" Buscar\n                ")
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.salidas, function(salida, key) {
                  return [
                    _c("tr", { key: salida.id_salida }, [
                      _c("td", { staticClass: "detail-link" }, [
                        _c("div", {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip",
                              value: "Mostrar productos",
                              expression: "'Mostrar productos'"
                            }
                          ],
                          staticClass: "link",
                          on: {
                            click: function($event) {
                              return _vm.mostrarProductos(key)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            salida.orden_venta ? salida.orden_venta : "N/D"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(salida.codigo_salida))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(salida.salida_tipo.descripcion))
                      ]),
                      _vm._v(" "),
                      salida.salida_cliente
                        ? _c("td", [
                            _vm._v(
                              _vm._s(
                                salida.salida_cliente.nombre_completo
                                  ? salida.salida_cliente.nombre_completo
                                  : ""
                              )
                            )
                          ])
                        : _c("td", [_vm._v(_vm._s("N/D"))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(salida.fecha_salida)))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(salida.salida_bodega.descripcion))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        salida.estado === 0
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-danger" },
                                [_vm._v("Anulada")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        salida.estado === 1
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-blue" }, [
                                _vm._v("Emitida")
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        salida.estado === 2
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Despachada")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        salida.estado === 99
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-info" }, [
                                _vm._v("Despacho en Proceso")
                              ])
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-center" },
                        [
                          [1, 99].indexOf(salida.estado) >= 0
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: "Despachar Salida",
                                        expression: "'Despachar Salida'"
                                      }
                                    ],
                                    attrs: {
                                      to: {
                                        name: "despachar-salida",
                                        params: { id_salida: salida.id_salida }
                                      },
                                      tag: "a"
                                    }
                                  },
                                  [_c("i", { staticClass: "icon-check" })]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          salida.estado === 2 &&
                          [1, 7].indexOf(salida.id_tipo_salida) >= 0
                            ? _c(
                                "router-link",
                                {
                                  directives: [
                                    {
                                      name: "tooltip",
                                      rawName: "v-tooltip",
                                      value: "Registrar devolución de Salida",
                                      expression:
                                        "'Registrar devolución de Salida'"
                                    }
                                  ],
                                  attrs: {
                                    to: {
                                      name: "registrar-devolucion-salida",
                                      params: { id_salida: salida.id_salida }
                                    },
                                    tag: "a"
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-mail-reply",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Mostrar detalles de Salida",
                                  expression: "'Mostrar detalles de Salida'"
                                }
                              ],
                              attrs: {
                                to: {
                                  name: "mostrar-salida",
                                  params: { id_salida: salida.id_salida }
                                },
                                tag: "a",
                                target: "_blank"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-eye",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          (salida.estado === 1 || salida.estado === 2) &&
                          [4, 7].indexOf(salida.id_tipo_salida) >= 0
                            ? _c(
                                "a",
                                {
                                  directives: [
                                    {
                                      name: "tooltip",
                                      rawName: "v-tooltip",
                                      value: "Anular salida",
                                      expression: "'Anular salida'"
                                    }
                                  ],
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.anular(salida.id_salida)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-remove" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          salida.estado === 1 &&
                          [15].indexOf(salida.id_tipo_salida) >= 0
                            ? _c(
                                "a",
                                {
                                  directives: [
                                    {
                                      name: "tooltip",
                                      rawName: "v-tooltip",
                                      value: "Anular salida",
                                      expression: "'Anular salida'"
                                    }
                                  ],
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.anular(salida.id_salida)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-remove" })]
                              )
                            : _vm._e()
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    salida.mostrar
                      ? _c("tr", { key: salida.id_salida }, [
                          _c("td", { attrs: { colspan: "7" } }, [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-striped table-bordered"
                              },
                              [
                                _vm._m(1, true),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(salida.salida_productos, function(
                                    productosDetalle
                                  ) {
                                    return _c(
                                      "tr",
                                      {
                                        key: productosDetalle.id_salida_producto
                                      },
                                      [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.codigo_producto
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.descripcion_producto
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.unidad_medida
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.cantidad_saliente
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.cantidad_despachada
                                            )
                                          )
                                        ])
                                      ]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c("tfoot", [
                                  _c("tr", [
                                    _c("td", {
                                      staticClass: "item-footer",
                                      attrs: { colspan: "2" }
                                    }),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Total Unidades")]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "item-footer" }, [
                                      _c("strong", [
                                        _vm._v(_vm._s(salida.tot_unidades))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "item-footer" }, [
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(
                                            salida.tot_unidades_despachadas
                                          )
                                        )
                                      ])
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td")
                        ])
                      : _vm._e()
                  ]
                }),
                _vm._v(" "),
                !_vm.salidas.length
                  ? _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "text-center",
                          attrs: { colspan: "10" }
                        },
                        [_vm._v("Sin datos")]
                      )
                    ])
                  : _vm._e()
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c("pagination", {
          attrs: {
            items: _vm.salidas,
            total: _vm.total,
            page: _vm.filter.page,
            limitOptions: _vm.filter.limitOptions,
            limit: _vm.filter.limit
          },
          on: { changePage: _vm.changePage, changeLimit: _vm.changeLimit }
        }),
        _vm._v(" "),
        _vm.loading
          ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Orden de venta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código salida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo salida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cliente")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Salida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bodega")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Estado")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center action" }, [_vm._v("Opciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("Código producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unidad de medida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Saliente")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Despachada")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Mostrar.vue?vue&type=template&id=54a29fe9&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/Mostrar.vue?vue&type=template&id=54a29fe9& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel" }, [
    _c("div", { staticClass: "panel-heading" }, [
      _c("span", { staticClass: "panel-title" }, [
        _vm._v("Salida Código: " + _vm._s(_vm.form.codigo_salida))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "btn-group" }, [
        _c(
          "a",
          {
            staticStyle: { "margin-right": "10px" },
            on: {
              click: function($event) {
                return _vm.$router.go(-1)
              }
            }
          },
          [_c("i", { staticClass: "fa fa-arrow-left" }), _vm._v(" Regresar")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel-body" },
      [
        _c("div", { staticClass: "document" }, [
          _c("div", { staticClass: "document-heading" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col col-12 text-center" }, [
                _c("div", { staticClass: "company-name" }, [
                  _vm._v(_vm._s(_vm.nombre_empresa))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "company-address" }, [
                  _vm._v(_vm._s(_vm.direccion_empresa))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "company-address" }, [
                  _c("strong", [
                    _vm._v("Salida No. : " + _vm._s(_vm.form.codigo_salida))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col col-4" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.form.orden_venta))]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.form.descripcion_salida))]),
                _vm._v(" "),
                _c("br")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col col-4" },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticStyle: { color: "#000000" },
                      attrs: {
                        to: {
                          name: "actualizar-bodega",
                          params: { id_bodega: _vm.form.id_bodega }
                        },
                        target: "_blank"
                      }
                    },
                    [
                      _c("span", [
                        _vm._v(_vm._s(_vm.form.salida_bodega.descripcion))
                      ]),
                      _vm._v(" "),
                      _c("br")
                    ]
                  ),
                  _vm._v(" "),
                  _vm.form.id_tipo_salida === 4
                    ? [
                        _vm._m(3),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticStyle: { color: "#000000" },
                            attrs: {
                              to: {
                                name: "actualizar-bodega",
                                params: {
                                  id_bodega: _vm.form.id_bodega_entrante
                                }
                              },
                              target: "_blank"
                            }
                          },
                          [
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm.form.salida_bodega_entrante.descripcion
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("br")
                          ]
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm.form.salida_tipo.descripcion))
                  ]),
                  _vm._v(" "),
                  _c("br")
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col col-4" }, [
                _c("table", { staticClass: "document-summary" }, [
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("Estado actual")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm.form.estado === 0
                          ? _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-danger",
                                  staticStyle: { "font-size": "100%" }
                                },
                                [_vm._v("Cancelada")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.form.estado === 1
                          ? _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-primary",
                                  staticStyle: { "font-size": "100%" }
                                },
                                [_vm._v("Emitida")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.form.estado === 2
                          ? _c("div", [
                              _c(
                                "span",
                                {
                                  staticClass: "badge badge-success",
                                  staticStyle: { "font-size": "100%" }
                                },
                                [_vm._v("Despachada")]
                              )
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Código salida:")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.form.codigo_salida))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Fecha Emisión:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(_vm.form.fecha_salida)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Fecha Despacho:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm.form.fecha_despacho
                              ? _vm.formatDate(_vm.form.fecha_despacho)
                              : "N/D"
                          )
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col col-12" },
                [
                  _vm.form.salida_cliente
                    ? [
                        _vm._m(5),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm.form.salida_cliente.tipo_persona === 1
                                ? _vm.form.salida_cliente.nombre_completo +
                                    " | " +
                                    _vm.form.salida_cliente.numero_cedula
                                : _vm.form.salida_cliente.razon_social +
                                    " | " +
                                    _vm.form.salida_cliente.numero_ruc
                            )
                          )
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c("br")
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "document-body" }, [
            _c("table", { staticClass: "document-table" }, [
              _vm._m(6),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.form.salida_productos, function(item) {
                    return [
                      _c("tr", { key: item.id_salida_producto }, [
                        _c("td", { staticClass: "width-2" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(item.codigo_producto) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-4" }, [
                          _c("pre", [_vm._v(_vm._s(item.descripcion_producto))])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-2" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(item.codigo_presentacion) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-1 align-center" }, [
                          _vm._v(_vm._s(item.cantidad_saliente))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-1 align-center" }, [
                          _vm._v(_vm._s(item.cantidad_despachada))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-1 align-center" }, [
                          _vm._v(
                            _vm._s(
                              _vm._f("formatMoney")(
                                _vm.calcularConversion(item),
                                2
                              )
                            )
                          )
                        ])
                      ])
                    ]
                  }),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { attrs: { colspan: "2" } }),
                    _vm._v(" "),
                    _vm._m(7),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.total_cantidad_saliente))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.total_cantidad_despachada))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [_vm._v(_vm._s(_vm.total_cantidad_total))])
                    ])
                  ])
                ],
                2
              ),
              _vm._v(" "),
              _c("tfoot")
            ])
          ])
        ]),
        _vm._v(" "),
        _vm.loading
          ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Orden de venta:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Observaciones:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Bodega Saliente:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Bodega Entrante:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Tipo de salida:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Cliente:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Código producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("OPG")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [
          _vm._v("Cantidad Saliente")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [
          _vm._v("Cantidad Despachada")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("strong", [_vm._v("Total")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Registrar.vue?vue&type=template&id=38e24c56&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/Registrar.vue?vue&type=template&id=38e24c56& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Tipo salida")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.tipos_salida,
                        label: "descripcion"
                      },
                      model: {
                        value: _vm.form.tipo_salida,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "tipo_salida", $$v)
                        },
                        expression: "form.tipo_salida"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.tipo_salida, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.bodegas },
                      on: {
                        input: function($event) {
                          return _vm.obtenerProductosBodega()
                        }
                      },
                      model: {
                        value: _vm.form.bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "bodega", $$v)
                        },
                        expression: "form.bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bodega, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Zonas de costo")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.zonas },
                      model: {
                        value: _vm.form.zona,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "zona", $$v)
                        },
                        expression: "form.zona"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bodega, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Cliente:")]),
                    _vm._v(" "),
                    _c("typeahead", {
                      staticStyle: { width: "100%" },
                      attrs: {
                        initial: _vm.form.cliente,
                        params: { es_deudor: false },
                        trim: 80,
                        url: _vm.clientesBusquedaURL
                      },
                      on: { input: _vm.seleccionarCliente }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.cliente, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha salida")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        language: _vm.es,
                        disabled: false,
                        value: new Date(),
                        format: _vm.format
                      },
                      on: { selected: _vm.onDateSelect },
                      model: {
                        value: _vm.fechax,
                        callback: function($$v) {
                          _vm.fechax = $$v
                        },
                        expression: "fechax"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_salida, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Orden de venta")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.orden_venta,
                        expression: "form.orden_venta"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.orden_venta },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "orden_venta", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.orden_venta, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Factura")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.no_factura,
                        expression: "form.no_factura"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.no_factura },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "no_factura", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.no_factura, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Remisión")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.no_remision,
                        expression: "form.no_remision"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.no_remision },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "no_remision", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.no_factura, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-9" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Observaciones salida")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.descripcion_salida,
                        expression: "form.descripcion_salida"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.descripcion_salida },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "descripcion_salida",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.descripcion_salida, function(
                      message
                    ) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            !_vm.form.bodega
              ? _c("div", [_vm._m(1), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                    _vm._v(" "),
                    _c("multiselect", {
                      ref: "producto",
                      attrs: {
                        options: _vm.productos,
                        "deselect-label": "No se puede eliminar este valor",
                        "track-by": "id_producto",
                        label: "text",
                        placeholder: "Selecciona un producto",
                        searchable: true,
                        "show-labels": false,
                        "allow-empty": false
                      },
                      on: { input: _vm.cargarPresentaciones },
                      model: {
                        value: _vm.detalleForm.productox,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "productox", $$v)
                        },
                        expression: "detalleForm.productox"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.productox, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Cantidad")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.detalleForm.cantidad,
                        expression: "detalleForm.cantidad",
                        modifiers: { number: true }
                      }
                    ],
                    ref: "cantidad",
                    staticClass: "form-control",
                    attrs: { type: "number" },
                    domProps: { value: _vm.detalleForm.cantidad },
                    on: {
                      change: function($event) {
                        _vm.detalleForm.cantidad = Math.max(
                          Math.min(
                            Math.round(_vm.detalleForm.cantidad),
                            _vm.detalleForm.productox.cantidad_disponible
                          ),
                          1
                        )
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "cantidad",
                          _vm._n($event.target.value)
                        )
                      },
                      blur: function($event) {
                        return _vm.$forceUpdate()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.cantidadx, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      ref: "agregar",
                      staticClass: "btn btn-info btn-agregar",
                      on: { click: _vm.agregarDetalle }
                    },
                    [
                      _vm._v(
                        "Agregar\n                                Producto\n                            "
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.detalleProductos, function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.detalleProductos, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", { staticStyle: { width: "2%" } }, [
                              _c(
                                "button",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.eliminarLinea(item, index)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-trash" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.productox.nombre_comercial,
                                    expression:
                                      "item.productox.nombre_comercial"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.productox.nombre_comercial
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.productox,
                                      "nombre_comercial",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "conteo_productos." +
                                      index +
                                      ".productox.id_producto"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.presentacionx.codigo,
                                    expression: "item.presentacionx.codigo"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.presentacionx.codigo },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.presentacionx,
                                      "codigo",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "conteo_productos." +
                                      index +
                                      ".presentacionx.id_presentacion"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.presentacionx.unidad_medida,
                                    expression:
                                      "item.presentacionx.unidad_medida",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.presentacionx.unidad_medida
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.presentacionx,
                                      "unidad_medida",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "conteo_productos." +
                                      index +
                                      ".presentacionx.id_presentacion"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.cantidad,
                                    expression: "item.cantidad",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "number",
                                  min: "1",
                                  readonly: ""
                                },
                                domProps: { value: item.cantidad },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "conteo_productos." + index + ".cantidad"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.presentacionx.simbolo_um,
                                    expression: "item.presentacionx.simbolo_um",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.presentacionx.simbolo_um
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.presentacionx,
                                      "simbolo_um",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "conteo_productos." +
                                      index +
                                      ".presentacionx.id_presentacion"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.presentacionx.escalar,
                                    expression: "item.presentacionx.escalar",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.presentacionx.escalar },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.presentacionx,
                                      "escalar",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "conteo_productos." +
                                      index +
                                      ".presentacionx.id_presentacion"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.calcularConversion(item),
                                      2
                                    )
                                  )
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr")
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "4" } },
                        [_vm._v(" Total Unidades")]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "3" } },
                        [_c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(
                            "K " +
                              _vm._s(
                                _vm._f("formatMoney")(_vm.total_conversion, 2)
                              )
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { tag: "button", to: { name: "salidas" } } },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction != "Registrar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.registrar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n                    ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.loading
              ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Registrar salida")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar salidas de Productos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v("Se requiere que seleccione una bodega para continuar.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de productos")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Presentación")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM Estandar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Escalar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=template&id=23767ce4&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=template&id=23767ce4& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _c("div", { staticClass: "content-box-header" }, [
              _c("div", { staticClass: "box-title" }, [
                _vm._v(
                  "Devolución de Salida tipo " +
                    _vm._s(_vm.form.salida_tipo.descripcion)
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "box-description" }, [
                _vm._v("Formulario para registrar devolución de productos")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Tipo salida")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.salida_tipo.descripcion,
                        expression: "form.salida_tipo.descripcion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.salida_tipo.descripcion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.salida_tipo,
                          "descripcion",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.salida_tipo, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.codigo_salida,
                        expression: "form.codigo_salida"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.codigo_salida },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "codigo_salida", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.codigo_salida, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Bodega Origen")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.salida_bodega.descripcion,
                        expression: "form.salida_bodega.descripcion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.salida_bodega.descripcion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.salida_bodega,
                          "descripcion",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.salida_bodega, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Bodega Destino")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.bodegas },
                      model: {
                        value: _vm.form.bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "bodega", $$v)
                        },
                        expression: "form.bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bodega, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Fecha salida")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.fecha_salida,
                        expression: "form.fecha_salida"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.fecha_salida },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "fecha_salida", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.fecha_salida, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.salida_productos, function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.salida_productos, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.text,
                                    expression: "item.text"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.text },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(item, "text", $event.target.value)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_productos." + index + ".id_producto"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.codigo_presentacion,
                                    expression: "item.codigo_presentacion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.codigo_presentacion },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "codigo_presentacion",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_productos." + index + ".id_producto"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      item.salida_presentacion.unidad_medida,
                                    expression:
                                      "item.salida_presentacion.unidad_medida"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: {
                                  value: item.salida_presentacion.unidad_medida
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.salida_presentacion,
                                      "unidad_medida",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_presentacion." +
                                      index +
                                      ".unidad_medida"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.salida_presentacion.escalar,
                                    expression:
                                      "item.salida_presentacion.escalar"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: {
                                  value: item.salida_presentacion.escalar
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.salida_presentacion,
                                      "escalar",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_presentacion." + index + ".escalar"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.salida_presentacion.simbolo_um,
                                    expression:
                                      "item.salida_presentacion.simbolo_um"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: {
                                  value: item.salida_presentacion.simbolo_um
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.salida_presentacion,
                                      "simbolo_um",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_presentacion." +
                                      index +
                                      ".simbolo_um"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.cantidad_despachada,
                                    expression: "item.cantidad_despachada",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "number" },
                                domProps: { value: item.cantidad_despachada },
                                on: {
                                  change: function($event) {
                                    item.cantidad_despachada = Math.max(
                                      Math.min(
                                        Math.round(item.cantidad_despachada),
                                        item.cantidad_saliente
                                      ),
                                      1
                                    )
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad_despachada",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_productos." +
                                      index +
                                      ".cantidad_despachada"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.cantidad_devuelta,
                                    expression: "item.cantidad_devuelta",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  disabled:
                                    item.bodega_producto.producto_simple
                                      .tipo_producto === 3 &&
                                    item.bodega_producto.producto_simple
                                      .condicion === 1 &&
                                    item.bodega_producto.producto_simple
                                      .producto_detalles_baterias
                                      .id_submarca !== 7,
                                  type: "number"
                                },
                                domProps: { value: item.cantidad_devuelta },
                                on: {
                                  change: function($event) {
                                    item.cantidad_devuelta = Math.max(
                                      Math.min(
                                        Math.round(item.cantidad_devuelta),
                                        item.cantidad_despachada
                                      ),
                                      0
                                    )
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad_devuelta",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "salida_productos." +
                                      index +
                                      ".cantidad_devuelta"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.calcular_diferencia(
                                      item.cantidad_despachada,
                                      item.cantidad_devuelta
                                    )
                                  ) +
                                  "\n\t\t\t\t\t\t\t\t\t"
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("strong", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.calcularConversion(item),
                                      2
                                    )
                                  )
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr")
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "5" } },
                        [_vm._v(" Total Unidades")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_despachada))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_devuelta))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_diferencia))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(
                            _vm._s(
                              _vm._f("formatMoney")(_vm.total_conversion(), 2)
                            )
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.form.contiene_baterias
              ? [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Código Garantía Bateria")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detalleForm.bateria_busqueda,
                              expression: "detalleForm.bateria_busqueda"
                            }
                          ],
                          ref: "bateria",
                          staticClass: "form-control",
                          domProps: { value: _vm.detalleForm.bateria_busqueda },
                          on: {
                            keydown: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.buscarBateria($event)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detalleForm,
                                "bateria_busqueda",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "error-messages" },
                          _vm._l(_vm.errorMessages.bateria_busqueda, function(
                            message
                          ) {
                            return _c("li", {
                              key: message,
                              domProps: { textContent: _vm._s(message) }
                            })
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.detalle_baterias, function(
                          message
                        ) {
                          return _c("li", {
                            key: message,
                            domProps: { textContent: _vm._s(message) }
                          })
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("table", { staticClass: "table table-bordered" }, [
                        _vm._m(4),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.detalle_baterias, function(item, index) {
                              return [
                                _c("tr", [
                                  _c("td", { staticStyle: { width: "2%" } }, [
                                    _c(
                                      "button",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.eliminarLinea(
                                              item,
                                              index
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-trash" })]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value:
                                            item.productox.bateria_producto
                                              .descripcion,
                                          expression:
                                            "item.productox.bateria_producto.descripcion"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value:
                                          item.productox.bateria_producto
                                            .descripcion
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item.productox.bateria_producto,
                                            "descripcion",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      { staticClass: "error-messages" },
                                      _vm._l(
                                        _vm.errorMessages[
                                          "detalle_baterias." +
                                            index +
                                            ".productox.id_producto"
                                        ],
                                        function(message) {
                                          return _c("li", {
                                            key: message,
                                            domProps: {
                                              textContent: _vm._s(message)
                                            }
                                          })
                                        }
                                      ),
                                      0
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.productox.codigo_garantia,
                                          expression:
                                            "item.productox.codigo_garantia"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: item.productox.codigo_garantia
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item.productox,
                                            "codigo_garantia",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      { staticClass: "error-messages" },
                                      _vm._l(
                                        _vm.errorMessages[
                                          "detalle_baterias." +
                                            index +
                                            ".codigo_garantia"
                                        ],
                                        function(message) {
                                          return _c("li", {
                                            key: message,
                                            domProps: {
                                              textContent: _vm._s(message)
                                            }
                                          })
                                        }
                                      ),
                                      0
                                    )
                                  ])
                                ])
                              ]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("tfoot")
                      ])
                    ])
                  ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "salidas" }, tag: "button" } },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction !== "Recibir Devolución",
                      type: "button"
                    },
                    on: { click: _vm.registrarDevolucion }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.loading
              ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Código salida "),
      _c("small", [_vm._v("(Automático)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Presentación")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM")]),
        _vm._v(" "),
        _c("th", [_vm._v("Escalar")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM Estandar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad despachada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad devuelta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Diferencia")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "4" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de batería")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Batería")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código Garantía")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=template&id=6a3594b6&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=template&id=6a3594b6& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("div", { staticClass: "content-box" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Cliente Consignatario:")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "nombre_comercial",
                        options: _vm.clientes
                      },
                      on: { input: _vm.seleccionarCliente },
                      model: {
                        value: _vm.form.cliente_salida,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "cliente_salida", $$v)
                        },
                        expression: "form.cliente_salida"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bodega_entrante, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha Devolución")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        language: _vm.es,
                        value: new Date(),
                        format: _vm.format
                      },
                      on: { selected: _vm.onDateSelect }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_salida, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-5" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Observaciones Traslado")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.descripcion_salida,
                        expression: "form.descripcion_salida"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.descripcion_salida },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "descripcion_salida",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.descripcion_salida, function(
                      message
                    ) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            !_vm.form.bodega
              ? _c("div", [_vm._m(1), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                    _vm._v(" "),
                    _c("multiselect", {
                      ref: "producto",
                      attrs: {
                        options: _vm.productos,
                        "deselect-label": "No se puede eliminar este valor",
                        "track-by": "id_producto",
                        label: "text",
                        placeholder: "Selecciona un producto",
                        searchable: true,
                        "show-labels": false,
                        "allow-empty": false
                      },
                      on: {
                        input: function($event) {
                          return _vm.cargar_detalles_producto()
                        }
                      },
                      model: {
                        value: _vm.detalleForm.productox,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "productox", $$v)
                        },
                        expression: "detalleForm.productox"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.productox, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Cantidad")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.detalleForm.cantidad,
                        expression: "detalleForm.cantidad",
                        modifiers: { number: true }
                      }
                    ],
                    ref: "cantidad",
                    staticClass: "form-control",
                    attrs: { type: "number" },
                    domProps: { value: _vm.detalleForm.cantidad },
                    on: {
                      change: function($event) {
                        _vm.detalleForm.cantidad = Math.max(
                          Math.min(
                            Math.round(_vm.detalleForm.cantidad),
                            _vm.detalleForm.productox.cantidad_disponible
                          ),
                          1
                        )
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "cantidad",
                          _vm._n($event.target.value)
                        )
                      },
                      blur: function($event) {
                        return _vm.$forceUpdate()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.cantidadx, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      ref: "agregar",
                      staticClass: "btn btn-info btn-agregar",
                      on: { click: _vm.agregarDetalle }
                    },
                    [_vm._v("Agregar Producto")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.detalleProductos, function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.detalleProductos, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", { staticStyle: { width: "2%" } }, [
                              _c(
                                "button",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.eliminarLinea(item, index)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-trash" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.productox.text,
                                    expression: "item.productox.text"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.productox.text },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.productox,
                                      "text",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".productox.id_producto"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.cantidad,
                                    expression: "item.cantidad",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number" },
                                domProps: { value: item.cantidad },
                                on: {
                                  change: function($event) {
                                    item.cantidad = Math.max(
                                      Math.min(
                                        Math.round(item.cantidad),
                                        item.productox.cantidad_disponible
                                      ),
                                      1
                                    )
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." + index + ".cantidad"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr")
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "2" } },
                        [_vm._v(" Total Unidades")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      tag: "button",
                      to: { name: "pagina-principal-inventario" }
                    }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction != "Registrar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.registrarTraslado }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm.loading
            ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Registrar Devolución por Consignación")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar devolución de productos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v(
          "Se requiere que seleccione una bodega saliente y una bodega entrante para continuar."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de productos")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=template&id=86991334&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=template&id=86991334& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main" },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "div",
            { staticClass: "content-box" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Bodega Origen")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: { label: "descripcion", options: _vm.bodegas },
                        on: {
                          input: function($event) {
                            return _vm.obtenerProductosBodega()
                          }
                        },
                        model: {
                          value: _vm.form.bodega_saliente,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "bodega_saliente", $$v)
                          },
                          expression: "form.bodega_saliente"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.bodega_saliente, function(
                          message
                        ) {
                          return _c("li", {
                            key: message,
                            domProps: { textContent: _vm._s(message) }
                          })
                        }),
                        0
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Bodega Destino")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "descripcion",
                          options: _vm.bodegas_entrantes
                        },
                        model: {
                          value: _vm.form.bodega_entrante,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "bodega_entrante", $$v)
                          },
                          expression: "form.bodega_entrante"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.bodega_entrante, function(
                          message
                        ) {
                          return _c("li", {
                            key: message,
                            domProps: { textContent: _vm._s(message) }
                          })
                        }),
                        0
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Fecha salida")
                      ]),
                      _vm._v(" "),
                      _c("datepicker", {
                        attrs: {
                          language: _vm.es,
                          value: new Date(),
                          format: _vm.format
                        },
                        on: { selected: _vm.onDateSelect }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.fecha_salida, function(
                          message
                        ) {
                          return _c("li", {
                            key: message,
                            domProps: { textContent: _vm._s(message) }
                          })
                        }),
                        0
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Número documento de salida")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.numero_documento,
                          expression: "form.numero_documento"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.numero_documento },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "numero_documento",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.numero_documento, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-9" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Observaciones Traslado")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.descripcion_salida,
                          expression: "form.descripcion_salida"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.descripcion_salida },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "descripcion_salida",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.descripcion_salida, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              !_vm.form.bodega_saliente
                ? _c("div", [_vm._m(1), _vm._v(" "), _c("hr")])
                : _vm._e(),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                      _vm._v(" "),
                      _c("multiselect", {
                        ref: "producto",
                        attrs: {
                          options: _vm.productos,
                          "deselect-label": "No se puede eliminar este valor",
                          "track-by": "id_producto",
                          label: "nombre_full",
                          placeholder: "Selecciona un producto",
                          searchable: true,
                          "show-labels": false,
                          "allow-empty": false
                        },
                        on: { input: _vm.cargarPresentaciones },
                        model: {
                          value: _vm.detalleForm.productox,
                          callback: function($$v) {
                            _vm.$set(_vm.detalleForm, "productox", $$v)
                          },
                          expression: "detalleForm.productox"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.productox, function(message) {
                          return _c("li", {
                            key: message,
                            domProps: { textContent: _vm._s(message) }
                          })
                        }),
                        0
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Cantidad")]),
                    _vm._v(" "),
                    _vm.form.condicion === 1
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.detalleForm.cantidad,
                              expression: "detalleForm.cantidad",
                              modifiers: { number: true }
                            }
                          ],
                          ref: "cantidad",
                          staticClass: "form-control",
                          attrs: { type: "number" },
                          domProps: { value: _vm.detalleForm.cantidad },
                          on: {
                            change: function($event) {
                              _vm.detalleForm.cantidad = Math.max(
                                Math.min(
                                  Math.round(_vm.detalleForm.cantidad),
                                  _vm.detalleForm.productox.cantidad_disponible
                                ),
                                0
                              )
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detalleForm,
                                "cantidad",
                                _vm._n($event.target.value)
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.form.condicion === 8
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.detalleForm.cantidad,
                              expression: "detalleForm.cantidad",
                              modifiers: { number: true }
                            }
                          ],
                          ref: "cantidad",
                          staticClass: "form-control",
                          attrs: { type: "number" },
                          domProps: { value: _vm.detalleForm.cantidad },
                          on: {
                            change: function($event) {
                              _vm.detalleForm.cantidad = Math.max(
                                Math.min(
                                  Math.round(_vm.detalleForm.cantidad),
                                  _vm.detalleForm.productox
                                    .cantidad_disponible_recuperadas
                                ),
                                0
                              )
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detalleForm,
                                "cantidad",
                                _vm._n($event.target.value)
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.form.condicion === 6
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.detalleForm.cantidad,
                              expression: "detalleForm.cantidad",
                              modifiers: { number: true }
                            }
                          ],
                          ref: "cantidad",
                          staticClass: "form-control",
                          attrs: { type: "number" },
                          domProps: { value: _vm.detalleForm.cantidad },
                          on: {
                            change: function($event) {
                              _vm.detalleForm.cantidad = Math.max(
                                Math.min(
                                  Math.round(_vm.detalleForm.cantidad),
                                  _vm.detalleForm.productox
                                    .cantidad_disponible_obsoletas
                                ),
                                0
                              )
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.detalleForm,
                                "cantidad",
                                _vm._n($event.target.value)
                              )
                            },
                            blur: function($event) {
                              return _vm.$forceUpdate()
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.cantidadx, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        ref: "agregar",
                        staticClass: "btn btn-info btn-agregar",
                        on: { click: _vm.agregarDetalle }
                      },
                      [_vm._v("Agregar Producto")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.detalleProductos, function(
                      message
                    ) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.form.detalleProductos, function(
                          item,
                          index
                        ) {
                          return [
                            _c("tr", [
                              _c("td", { staticStyle: { width: "2%" } }, [
                                _c(
                                  "button",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.eliminarLinea(item, index)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-trash" })]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.productox.nombre_comercial,
                                      expression:
                                        "item.productox.nombre_comercial"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value: item.productox.nombre_comercial
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item.productox,
                                        "nombre_comercial",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "error-messages" },
                                  _vm._l(
                                    _vm.errorMessages[
                                      "conteo_productos." +
                                        index +
                                        ".productox.id_producto"
                                    ],
                                    function(message) {
                                      return _c("li", {
                                        key: message,
                                        domProps: {
                                          textContent: _vm._s(message)
                                        }
                                      })
                                    }
                                  ),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.presentacionx.codigo,
                                      expression: "item.presentacionx.codigo"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value: item.presentacionx.codigo
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item.presentacionx,
                                        "codigo",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "error-messages" },
                                  _vm._l(
                                    _vm.errorMessages[
                                      "conteo_productos." +
                                        index +
                                        ".presentacionx.id_presentacion"
                                    ],
                                    function(message) {
                                      return _c("li", {
                                        key: message,
                                        domProps: {
                                          textContent: _vm._s(message)
                                        }
                                      })
                                    }
                                  ),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.presentacionx.unidad_medida,
                                      expression:
                                        "item.presentacionx.unidad_medida",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value: item.presentacionx.unidad_medida
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item.presentacionx,
                                        "unidad_medida",
                                        _vm._n($event.target.value)
                                      )
                                    },
                                    blur: function($event) {
                                      return _vm.$forceUpdate()
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "error-messages" },
                                  _vm._l(
                                    _vm.errorMessages[
                                      "conteo_productos." +
                                        index +
                                        ".presentacionx.id_presentacion"
                                    ],
                                    function(message) {
                                      return _c("li", {
                                        key: message,
                                        domProps: {
                                          textContent: _vm._s(message)
                                        }
                                      })
                                    }
                                  ),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.cantidad,
                                      expression: "item.cantidad",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    min: "1",
                                    readonly: ""
                                  },
                                  domProps: { value: item.cantidad },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "cantidad",
                                        _vm._n($event.target.value)
                                      )
                                    },
                                    blur: function($event) {
                                      return _vm.$forceUpdate()
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "error-messages" },
                                  _vm._l(
                                    _vm.errorMessages[
                                      "conteo_productos." + index + ".cantidad"
                                    ],
                                    function(message) {
                                      return _c("li", {
                                        key: message,
                                        domProps: {
                                          textContent: _vm._s(message)
                                        }
                                      })
                                    }
                                  ),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.presentacionx.simbolo_um,
                                      expression:
                                        "item.presentacionx.simbolo_um",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value: item.presentacionx.simbolo_um
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item.presentacionx,
                                        "simbolo_um",
                                        _vm._n($event.target.value)
                                      )
                                    },
                                    blur: function($event) {
                                      return _vm.$forceUpdate()
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "error-messages" },
                                  _vm._l(
                                    _vm.errorMessages[
                                      "conteo_productos." +
                                        index +
                                        ".presentacionx.id_presentacion"
                                    ],
                                    function(message) {
                                      return _c("li", {
                                        key: message,
                                        domProps: {
                                          textContent: _vm._s(message)
                                        }
                                      })
                                    }
                                  ),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.presentacionx.escalar,
                                      expression: "item.presentacionx.escalar",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  domProps: {
                                    value: item.presentacionx.escalar
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item.presentacionx,
                                        "escalar",
                                        _vm._n($event.target.value)
                                      )
                                    },
                                    blur: function($event) {
                                      return _vm.$forceUpdate()
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  { staticClass: "error-messages" },
                                  _vm._l(
                                    _vm.errorMessages[
                                      "conteo_productos." +
                                        index +
                                        ".presentacionx.id_presentacion"
                                    ],
                                    function(message) {
                                      return _c("li", {
                                        key: message,
                                        domProps: {
                                          textContent: _vm._s(message)
                                        }
                                      })
                                    }
                                  ),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.calcularConversion(item),
                                        2
                                      )
                                    )
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr")
                          ]
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("tfoot", [
                      _c("tr", [
                        _c(
                          "td",
                          {
                            staticClass: "item-footer",
                            attrs: { colspan: "4" }
                          },
                          [_vm._v(" Total Unidades")]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "item-footer",
                            attrs: { colspan: "3" }
                          },
                          [_c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "item-footer" }, [
                          _c("strong", [
                            _vm._v(
                              "K " +
                                _vm._s(
                                  _vm._f("formatMoney")(_vm.total_conversion, 2)
                                )
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.loading
                ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "content-box-footer text-right" },
                [
                  _c(
                    "router-link",
                    { attrs: { tag: "button", to: { name: "salidas" } } },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-default",
                          attrs: { type: "button" }
                        },
                        [_vm._v("Cancelar")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: {
                        disabled: _vm.btnAction != "Registrar" ? true : false,
                        type: "button"
                      },
                      on: { click: _vm.registrarTraslado }
                    },
                    [_vm._v(_vm._s(_vm.btnAction))]
                  )
                ],
                1
              )
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _vm.loading
        ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Registrar Traslado ")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar traslado de productos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v(
          "Se requiere que seleccione una bodega saliente y una bodega entrante para continuar."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de productos")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Presentación")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM Estandar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Escalar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Conversión")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=template&id=76e6fbcd&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=template&id=76e6fbcd& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "content-box" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Bodega Saliente")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.bodegas },
                      on: {
                        input: function($event) {
                          return _vm.obtenerProductosBodega()
                        }
                      },
                      model: {
                        value: _vm.form.bodega_saliente,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "bodega_saliente", $$v)
                        },
                        expression: "form.bodega_saliente"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bodega_saliente, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Bodega Entrante")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "descripcion",
                        options: _vm.bodegas_consigna
                      },
                      model: {
                        value: _vm.form.bodega_entrante,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "bodega_entrante", $$v)
                        },
                        expression: "form.bodega_entrante"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bodega_entrante, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha salida")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        language: _vm.es,
                        value: new Date(),
                        format: _vm.format
                      },
                      on: { selected: _vm.onDateSelect }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_salida, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Cliente Consignatario:")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "nombre_comercial",
                        options: _vm.clientes
                      },
                      model: {
                        value: _vm.form.cliente_salida,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "cliente_salida", $$v)
                        },
                        expression: "form.cliente_salida"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bodega_entrante, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Observaciones")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.descripcion_salida,
                        expression: "form.descripcion_salida"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.descripcion_salida },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "descripcion_salida",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.descripcion_salida, function(
                      message
                    ) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.form.cliente_salida
              ? _c("div", [
                  _c("div", { staticClass: "alert alert-success" }, [
                    _c("span", [
                      _vm._v(
                        "Actualmente el cliente tiene un monto disponible para consignación de "
                      ),
                      _c("strong", [
                        _vm._v(
                          "$ " +
                            _vm._s(
                              _vm._f("formatMoney")(
                                _vm.form.cliente_salida.monto_consignable,
                                2
                              )
                            )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.form.bodega_entrante
              ? _c("div", [_vm._m(1), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                    _vm._v(" "),
                    _c("multiselect", {
                      ref: "producto",
                      attrs: {
                        options: _vm.productos,
                        "deselect-label": "No se puede eliminar este valor",
                        "track-by": "id_producto",
                        label: "nombre_full",
                        placeholder: "Selecciona un producto",
                        searchable: true,
                        "show-labels": false,
                        "allow-empty": false
                      },
                      on: {
                        input: function($event) {
                          return _vm.cargar_detalles_producto()
                        }
                      },
                      model: {
                        value: _vm.detalleForm.productox,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "productox", $$v)
                        },
                        expression: "detalleForm.productox"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.productox, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Cantidad")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.detalleForm.cantidad,
                        expression: "detalleForm.cantidad",
                        modifiers: { number: true }
                      }
                    ],
                    ref: "cantidad",
                    staticClass: "form-control",
                    attrs: { type: "number" },
                    domProps: { value: _vm.detalleForm.cantidad },
                    on: {
                      change: function($event) {
                        _vm.detalleForm.cantidad = Math.max(
                          Math.min(
                            Math.round(_vm.detalleForm.cantidad),
                            _vm.detalleForm.productox.cantidad_disponible
                          ),
                          1
                        )
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "cantidad",
                          _vm._n($event.target.value)
                        )
                      },
                      blur: function($event) {
                        return _vm.$forceUpdate()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.cantidadx, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      ref: "agregar",
                      staticClass: "btn btn-info btn-agregar",
                      on: { click: _vm.agregarDetalle }
                    },
                    [_vm._v("Agregar Producto")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.detalleProductos, function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.detalleProductos, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", { staticStyle: { width: "2%" } }, [
                              _c(
                                "button",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.eliminarLinea(item, index)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-trash" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.productox.descripcion,
                                    expression: "item.productox.descripcion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.productox.descripcion },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.productox,
                                      "descripcion",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".productox.id_producto"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.cantidad,
                                    expression: "item.cantidad",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number" },
                                domProps: { value: item.cantidad },
                                on: {
                                  change: function($event) {
                                    item.cantidad = Math.max(
                                      Math.min(
                                        Math.round(item.cantidad),
                                        item.productox.cantidad_disponible
                                      ),
                                      1
                                    )
                                  },
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad",
                                      _vm._n($event.target.value)
                                    )
                                  },
                                  blur: function($event) {
                                    return _vm.$forceUpdate()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." + index + ".cantidad"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr")
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "2" } },
                        [_vm._v(" Total Unidades")]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [_vm._v(_vm._s(_vm.total_cantidad))])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      tag: "button",
                      to: { name: "pagina-principal-inventario" }
                    }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction != "Registrar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.registrarTraslado }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _vm.loading
          ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Registrar Traslado por Consignación")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar traslado de productos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-info" }, [
      _c("span", [
        _vm._v(
          "Se requiere que seleccione una bodega saliente y una bodega entrante para continuar."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalle de productos")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=template&id=070ab4c9&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=template&id=070ab4c9& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Bodega Garantía:")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        label: "descripcion",
                        options: _vm.bodegas_garantia
                      },
                      model: {
                        value: _vm.form.bodega_garantia,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "bodega_garantia", $$v)
                        },
                        expression: "form.bodega_garantia"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bodega_garantia, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Ingresar batería a la siguiente bodega:")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.bodegas },
                      model: {
                        value: _vm.form.bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "bodega", $$v)
                        },
                        expression: "form.bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.bodega, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Ingresar baterías con estado")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.form.estado,
                          expression: "form.estado",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      on: {
                        change: [
                          function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return _vm._n(val)
                              })
                            _vm.$set(
                              _vm.form,
                              "estado",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                          _vm.cambiarEstadoBaterias
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { value: "8" } }, [
                        _vm._v("Recuperada")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "1" } }, [_vm._v("Nueva")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.estado, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Código Garantía Bateria")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.bateria_busqueda,
                        expression: "detalleForm.bateria_busqueda"
                      }
                    ],
                    ref: "bateria",
                    staticClass: "form-control",
                    domProps: { value: _vm.detalleForm.bateria_busqueda },
                    on: {
                      keydown: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.buscarBateria($event)
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "bateria_busqueda",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.productox, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                    _vm._v(" "),
                    _c("multiselect", {
                      ref: "bateria",
                      attrs: {
                        disabled: true,
                        options: _vm.productos,
                        "deselect-label": "No se puede eliminar este valor",
                        "track-by": "id_producto",
                        label: "text",
                        placeholder: "Selecciona un producto",
                        searchable: true,
                        "show-labels": false,
                        "allow-empty": false
                      },
                      model: {
                        value: _vm.detalleForm.productox,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "productox", $$v)
                        },
                        expression: "detalleForm.productox"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Fecha Activación")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "mask",
                        rawName: "v-mask",
                        value: "##/##",
                        expression: "'##/##'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.detalleForm.fecha_activacion,
                        expression: "detalleForm.fecha_activacion"
                      }
                    ],
                    ref: "fecha_activacion",
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "MM/YY",
                      disabled: "",
                      "p.enter": "fechaActivacionEvento"
                    },
                    domProps: { value: _vm.detalleForm.fecha_activacion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "fecha_activacion",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.fecha_activacion, function(
                      message
                    ) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" ")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      ref: "agregar",
                      staticClass: "btn btn-info btn-agregar",
                      on: { click: _vm.agregarDetalle }
                    },
                    [_vm._v("Agregar Batería")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.detalleProductos, function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }),
                  0
                ),
                _vm._v(" "),
                _c("table", { staticClass: "table table-bordered" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.detalleProductos, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", { staticStyle: { width: "2%" } }, [
                              _c(
                                "button",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.eliminarLinea(item, index)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-trash" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.productox.descripcion,
                                    expression: "item.productox.descripcion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.productox.descripcion },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.productox,
                                      "descripcion",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".productox.id_producto"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.codigo_garantiax,
                                    expression: "item.codigo_garantiax"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.codigo_garantiax },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "codigo_garantiax",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".codigo_garantiax"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "mask",
                                    rawName: "v-mask",
                                    value: "##/##",
                                    expression: "'##/##'"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.fecha_activacion,
                                    expression: "item.fecha_activacion"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.fecha_activacion },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "fecha_activacion",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".fecha_activacion"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.estado_actual,
                                      expression: "item.estado_actual",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return _vm._n(val)
                                        })
                                      _vm.$set(
                                        item,
                                        "estado_actual",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "3" } }, [
                                    _vm._v("En garantía")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." +
                                      index +
                                      ".estado_actual"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model.number",
                                      value: item.estado,
                                      expression: "item.estado",
                                      modifiers: { number: true }
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { disabled: "" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return _vm._n(val)
                                        })
                                      _vm.$set(
                                        item,
                                        "estado",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "8" } }, [
                                    _vm._v("Recuperada")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v("Nueva")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages[
                                    "detalleProductos." + index + ".estado"
                                  ],
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ])
                          ])
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("tfoot")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { tag: "button", to: { name: "facturas" } } },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction !== "Registrar",
                      type: "button"
                    },
                    on: { click: _vm.registrar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.loading
              ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Registrar baterías recuperadas")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para trasladar baterías")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos de la batería original")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Batería")]),
        _vm._v(" "),
        _c("th", [_vm._v("Código Garantía")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Activación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estado Actual")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estado luego de revisión")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/api/baterias.js":
/*!***************************************!*\
  !*** ./resources/app/api/baterias.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerBaterias: function obtenerBaterias(data, cb, errorCb) {
    axios.post('productos/obtener-baterias', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarCodigo: function buscarCodigo(data, cb, errorCb) {
    axios.post('productos/obtener-bateria-codigo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarCodigoBateriaCualquiera: function buscarCodigoBateriaCualquiera(data, cb, errorCb) {
    axios.post('productos/obtener-bateria-cualquiera', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerPorcentajeAjuste: function obtenerPorcentajeAjuste(data, cb, errorCb) {
    axios.post('productos/obtener-ajuste-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBateria: function obtenerBateria(data, cb, errorCb) {
    axios.post('productos/obtener-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevaBateriaExterna: function nuevaBateriaExterna(data, cb, errorCb) {
    axios.post('productos/baterias/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCodigoBateria: function obtenerCodigoBateria(data, cb, errorCb) {
    axios.post('productos/obtener-codigo-producto', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrar: function registrar(data, cb, errorCb) {
    axios.post('productos/registrar-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBateriaExterna: function registrarBateriaExterna(data, cb, errorCb) {
    axios.post('productos/registrar-baterias-externas', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizar: function actualizar(data, cb, errorCb) {
    axios.put('productos/actualizar-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  desactivar: function desactivar(data, cb, errorCb) {
    axios.put('producto/desactivar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  activar: function activar(data, cb, errorCb) {
    axios.put('producto/activar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nueva: function nueva(data, cb, errorCb) {
    axios.post('productos/nueva-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  }
});

/***/ }),

/***/ "./resources/app/api/clientes.js":
/*!***************************************!*\
  !*** ./resources/app/api/clientes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('ventas/clientes/obtener-todos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSolicitudesConsignacion: function obtenerSolicitudesConsignacion(data, cb, errorCb) {
    axios.post('ventas/clientes/obtener-solicitudes-consignacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtener: function obtener(data, cb, errorCb) {
    axios.post('ventas/clientes/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCliente: function obtenerCliente(data, cb, errorCb) {
    axios.post('ventas/clientes/obtener-cliente', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevo: function nuevo(data, cb, errorCb) {
    axios.post('ventas/clientes/nuevo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrar: function registrar(data, cb, errorCb) {
    axios.post('ventas/clientes/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBasico: function registrarBasico(data, cb, errorCb) {
    axios.post('ventas/clientes/registrar-basico', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizar: function actualizar(data, cb, errorCb) {
    axios.put('ventas/clientes/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  desactivar: function desactivar(data, cb, errorCb) {
    axios.put('ventas/clientes/desactivar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  activar: function activar(data, cb, errorCb) {
    axios.put('ventas/clientes/activar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cambiarEstadoConsignacion: function cambiarEstadoConsignacion(data, cb, errorCb) {
    axios.put('ventas/clientes/cambiarEstadoConsignacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  }
});

/***/ }),

/***/ "./resources/app/api/entradas-inventario-inicial.js":
/*!**********************************************************!*\
  !*** ./resources/app/api/entradas-inventario-inicial.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevo: function nuevo(data, cb, errorCb) {
    axios.post('entradas/nuevo-inventario-inicial', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevoProductosVarios: function nuevoProductosVarios(data, cb, errorCb) {
    axios.post('entradas/nuevo-inventario-inicial-varios', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cargarPresentacionesProductos: function cargarPresentacionesProductos(data, cb, errorCb) {
    axios.post('entradas/obtener-presentaciones-producto', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBateria: function registrarBateria(data, cb, errorCb) {
    axios.post('entradas/registrar-bateria', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  recibir: function recibir(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/recibir', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizar: function actualizar(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/actualizar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarManual: function actualizarManual(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/actualizar-manual', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrar: function registrar(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarManual: function registrarManual(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial-manual/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerEntrada: function obtenerEntrada(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial/obtener-entrada', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  }
});

/***/ }),

/***/ "./resources/app/api/proveedores.js":
/*!******************************************!*\
  !*** ./resources/app/api/proveedores.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodosProveedores: function obtenerTodosProveedores(cb, errorCb) {
    axios.get('proveedores/obtener-proveedores-todos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTodosProveedoresBaterias: function obtenerTodosProveedoresBaterias(cb, errorCb) {
    axios.get('proveedores/obtener-proveedores-baterias').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerProveedoresProducto: function obtenerProveedoresProducto(cb, errorCb) {
    axios.post('proveedores/obtener-proveedores-producto').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtener: function obtener(data, cb, errorCb) {
    axios.post('proveedores/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerProveedor: function obtenerProveedor(data, cb, errorCb) {
    axios.post('proveedores/obtener-proveedor', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrar: function registrar(data, cb, errorCb) {
    axios.post('proveedores/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizar: function actualizar(data, cb, errorCb) {
    axios.put('proveedores/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  desactivar: function desactivar(data, cb, errorCb) {
    axios.put('proveedores/desactivar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  activar: function activar(data, cb, errorCb) {
    axios.put('proveedores/activar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  }
});

/***/ }),

/***/ "./resources/app/api/tasas-cambio.js":
/*!*******************************************!*\
  !*** ./resources/app/api/tasas-cambio.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTC: function obtenerTC(data, cb, errorCb) {
    axios.post('contabilidad/tasas-cambio/dia', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarTCParalelas: function actualizarTCParalelas(data, cb, errorCb) {
    axios.put('contabilidad/tasas-cambio/paralelas/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTCParalela: function obtenerTCParalela(data, cb, errorCb) {
    axios.post('contabilidad/tasas-cambio/dia/paralela', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTasas: function obtenerTasas(data, cb, errorCb) {
    axios.post('contabilidad/tasas-cambio/obtener-tasas', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  descargarTasas: function descargarTasas(data, cb, errorCb) {
    axios.post('contabilidad/tasas-cambio/descargar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  }
});

/***/ }),

/***/ "./resources/app/api/tipo_salida.js":
/*!******************************************!*\
  !*** ./resources/app/api/tipo_salida.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodosTiposSalida: function obtenerTodosTiposSalida(cb, errorCb) {
    axios.get('tipo-salida/obtener-tipos-salida-todos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtener: function obtener(data, cb, errorCb) {
    axios.post('tipo-salida/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTipoSalida: function obtenerTipoSalida(data, cb, errorCb) {
    axios.post('tipo-salida/obtener-tipo-salida', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrar: function registrar(data, cb, errorCb) {
    axios.post('tipo-salida/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizar: function actualizar(data, cb, errorCb) {
    axios.put('tipo-salida/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  desactivar: function desactivar(data, cb, errorCb) {
    axios.put('tipo-salida/desactivar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  activar: function activar(data, cb, errorCb) {
    axios.put('tipo-salida/activar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  }
});

/***/ }),

/***/ "./resources/app/assets/custom-scripts/Round.js":
/*!******************************************************!*\
  !*** ./resources/app/assets/custom-scripts/Round.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  round: function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  },

  /**
   * Ajuste decimal de un número.
   *
   * @param	{String}	type	El tipo de ajuste.
   * @param	{Number}	value	El número.
   * @param	{Integer}	exp		El exponente(el logaritmo en base 10 del ajuste).
   * @returns	{Number}			El valor ajustado.
   */
  decimalAdjust: function decimalAdjust(type, value, exp) {
    // Si el exp es indefinido o cero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }

    value = +value;
    exp = +exp; // Si el valor no es un número o el exp no es un entero...

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    } // Cambio


    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp))); // Volver a cambiar

    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
  }
});

/***/ }),

/***/ "./resources/app/assets/images/block50.gif":
/*!*************************************************!*\
  !*** ./resources/app/assets/images/block50.gif ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/block50.gif?4b6516f8e0b7c10cfccd51ce36336b66";

/***/ }),

/***/ "./resources/app/components/salidas/DespacharManual.vue":
/*!**************************************************************!*\
  !*** ./resources/app/components/salidas/DespacharManual.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DespacharManual_vue_vue_type_template_id_45befa28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DespacharManual.vue?vue&type=template&id=45befa28& */ "./resources/app/components/salidas/DespacharManual.vue?vue&type=template&id=45befa28&");
/* harmony import */ var _DespacharManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DespacharManual.vue?vue&type=script&lang=js& */ "./resources/app/components/salidas/DespacharManual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DespacharManual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DespacharManual.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/salidas/DespacharManual.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DespacharManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DespacharManual_vue_vue_type_template_id_45befa28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DespacharManual_vue_vue_type_template_id_45befa28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/salidas/DespacharManual.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/salidas/DespacharManual.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/app/components/salidas/DespacharManual.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DespacharManual.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharManual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/salidas/DespacharManual.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/salidas/DespacharManual.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DespacharManual.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharManual.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/salidas/DespacharManual.vue?vue&type=template&id=45befa28&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/salidas/DespacharManual.vue?vue&type=template&id=45befa28& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_template_id_45befa28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DespacharManual.vue?vue&type=template&id=45befa28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharManual.vue?vue&type=template&id=45befa28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_template_id_45befa28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharManual_vue_vue_type_template_id_45befa28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/salidas/DespacharV2.vue":
/*!**********************************************************!*\
  !*** ./resources/app/components/salidas/DespacharV2.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DespacharV2_vue_vue_type_template_id_6f7a6a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DespacharV2.vue?vue&type=template&id=6f7a6a44& */ "./resources/app/components/salidas/DespacharV2.vue?vue&type=template&id=6f7a6a44&");
/* harmony import */ var _DespacharV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DespacharV2.vue?vue&type=script&lang=js& */ "./resources/app/components/salidas/DespacharV2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DespacharV2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DespacharV2.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/salidas/DespacharV2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DespacharV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DespacharV2_vue_vue_type_template_id_6f7a6a44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DespacharV2_vue_vue_type_template_id_6f7a6a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/salidas/DespacharV2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/salidas/DespacharV2.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/app/components/salidas/DespacharV2.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DespacharV2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharV2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/salidas/DespacharV2.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/components/salidas/DespacharV2.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DespacharV2.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharV2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/salidas/DespacharV2.vue?vue&type=template&id=6f7a6a44&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/salidas/DespacharV2.vue?vue&type=template&id=6f7a6a44& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_template_id_6f7a6a44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DespacharV2.vue?vue&type=template&id=6f7a6a44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/DespacharV2.vue?vue&type=template&id=6f7a6a44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_template_id_6f7a6a44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DespacharV2_vue_vue_type_template_id_6f7a6a44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/salidas/Listado.vue":
/*!******************************************************!*\
  !*** ./resources/app/components/salidas/Listado.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_f0a0cb12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=f0a0cb12&scoped=true& */ "./resources/app/components/salidas/Listado.vue?vue&type=template&id=f0a0cb12&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/salidas/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_f0a0cb12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true& */ "./resources/app/components/salidas/Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_f0a0cb12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_f0a0cb12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f0a0cb12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/salidas/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/salidas/Listado.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/app/components/salidas/Listado.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/salidas/Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/app/components/salidas/Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_f0a0cb12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Listado.vue?vue&type=style&index=0&id=f0a0cb12&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_f0a0cb12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_f0a0cb12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_f0a0cb12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_f0a0cb12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_f0a0cb12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/salidas/Listado.vue?vue&type=template&id=f0a0cb12&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/salidas/Listado.vue?vue&type=template&id=f0a0cb12&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_f0a0cb12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=f0a0cb12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Listado.vue?vue&type=template&id=f0a0cb12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_f0a0cb12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_f0a0cb12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/salidas/Mostrar.vue":
/*!******************************************************!*\
  !*** ./resources/app/components/salidas/Mostrar.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mostrar_vue_vue_type_template_id_54a29fe9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=template&id=54a29fe9& */ "./resources/app/components/salidas/Mostrar.vue?vue&type=template&id=54a29fe9&");
/* harmony import */ var _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=script&lang=js& */ "./resources/app/components/salidas/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mostrar_vue_vue_type_template_id_54a29fe9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mostrar_vue_vue_type_template_id_54a29fe9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/salidas/Mostrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/salidas/Mostrar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/app/components/salidas/Mostrar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/salidas/Mostrar.vue?vue&type=template&id=54a29fe9&":
/*!*************************************************************************************!*\
  !*** ./resources/app/components/salidas/Mostrar.vue?vue&type=template&id=54a29fe9& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_54a29fe9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=template&id=54a29fe9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Mostrar.vue?vue&type=template&id=54a29fe9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_54a29fe9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_54a29fe9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/salidas/Registrar.vue":
/*!********************************************************!*\
  !*** ./resources/app/components/salidas/Registrar.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_38e24c56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=38e24c56& */ "./resources/app/components/salidas/Registrar.vue?vue&type=template&id=38e24c56&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/salidas/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/salidas/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_38e24c56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_38e24c56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/salidas/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/salidas/Registrar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/app/components/salidas/Registrar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/salidas/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/salidas/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/salidas/Registrar.vue?vue&type=template&id=38e24c56&":
/*!***************************************************************************************!*\
  !*** ./resources/app/components/salidas/Registrar.vue?vue&type=template&id=38e24c56& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_38e24c56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=38e24c56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/Registrar.vue?vue&type=template&id=38e24c56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_38e24c56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_38e24c56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/salidas/RegistrarDevolucion2.vue":
/*!*******************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarDevolucion2.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarDevolucion2_vue_vue_type_template_id_23767ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarDevolucion2.vue?vue&type=template&id=23767ce4& */ "./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=template&id=23767ce4&");
/* harmony import */ var _RegistrarDevolucion2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarDevolucion2.vue?vue&type=script&lang=js& */ "./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarDevolucion2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarDevolucion2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarDevolucion2_vue_vue_type_template_id_23767ce4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarDevolucion2_vue_vue_type_template_id_23767ce4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/salidas/RegistrarDevolucion2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarDevolucion2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=template&id=23767ce4&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=template&id=23767ce4& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_template_id_23767ce4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarDevolucion2.vue?vue&type=template&id=23767ce4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucion2.vue?vue&type=template&id=23767ce4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_template_id_23767ce4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion2_vue_vue_type_template_id_23767ce4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue":
/*!******************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarDevolucionConsignacion_vue_vue_type_template_id_6a3594b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarDevolucionConsignacion.vue?vue&type=template&id=6a3594b6& */ "./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=template&id=6a3594b6&");
/* harmony import */ var _RegistrarDevolucionConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarDevolucionConsignacion.vue?vue&type=script&lang=js& */ "./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarDevolucionConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarDevolucionConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarDevolucionConsignacion_vue_vue_type_template_id_6a3594b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarDevolucionConsignacion_vue_vue_type_template_id_6a3594b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/salidas/RegistrarDevolucionConsignacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarDevolucionConsignacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=template&id=6a3594b6&":
/*!*************************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=template&id=6a3594b6& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_template_id_6a3594b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarDevolucionConsignacion.vue?vue&type=template&id=6a3594b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarDevolucionConsignacion.vue?vue&type=template&id=6a3594b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_template_id_6a3594b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucionConsignacion_vue_vue_type_template_id_6a3594b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTraslado.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTraslado.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarTraslado_vue_vue_type_template_id_86991334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarTraslado.vue?vue&type=template&id=86991334& */ "./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=template&id=86991334&");
/* harmony import */ var _RegistrarTraslado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarTraslado.vue?vue&type=script&lang=js& */ "./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarTraslado.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarTraslado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarTraslado_vue_vue_type_template_id_86991334___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarTraslado_vue_vue_type_template_id_86991334___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/salidas/RegistrarTraslado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTraslado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTraslado.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=template&id=86991334&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=template&id=86991334& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_template_id_86991334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTraslado.vue?vue&type=template&id=86991334& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTraslado.vue?vue&type=template&id=86991334&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_template_id_86991334___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTraslado_vue_vue_type_template_id_86991334___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue":
/*!****************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarTrasladoConsignacion_vue_vue_type_template_id_76e6fbcd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarTrasladoConsignacion.vue?vue&type=template&id=76e6fbcd& */ "./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=template&id=76e6fbcd&");
/* harmony import */ var _RegistrarTrasladoConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarTrasladoConsignacion.vue?vue&type=script&lang=js& */ "./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarTrasladoConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarTrasladoConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarTrasladoConsignacion_vue_vue_type_template_id_76e6fbcd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarTrasladoConsignacion_vue_vue_type_template_id_76e6fbcd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/salidas/RegistrarTrasladoConsignacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTrasladoConsignacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=template&id=76e6fbcd&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=template&id=76e6fbcd& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_template_id_76e6fbcd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTrasladoConsignacion.vue?vue&type=template&id=76e6fbcd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoConsignacion.vue?vue&type=template&id=76e6fbcd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_template_id_76e6fbcd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoConsignacion_vue_vue_type_template_id_76e6fbcd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue":
/*!***************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarTrasladoRecuperados_vue_vue_type_template_id_070ab4c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarTrasladoRecuperados.vue?vue&type=template&id=070ab4c9& */ "./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=template&id=070ab4c9&");
/* harmony import */ var _RegistrarTrasladoRecuperados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarTrasladoRecuperados.vue?vue&type=script&lang=js& */ "./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistrarTrasladoRecuperados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistrarTrasladoRecuperados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarTrasladoRecuperados_vue_vue_type_template_id_070ab4c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarTrasladoRecuperados_vue_vue_type_template_id_070ab4c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/salidas/RegistrarTrasladoRecuperados.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTrasladoRecuperados.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=template&id=070ab4c9&":
/*!**********************************************************************************************************!*\
  !*** ./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=template&id=070ab4c9& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_template_id_070ab4c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarTrasladoRecuperados.vue?vue&type=template&id=070ab4c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/salidas/RegistrarTrasladoRecuperados.vue?vue&type=template&id=070ab4c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_template_id_070ab4c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarTrasladoRecuperados_vue_vue_type_template_id_070ab4c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);