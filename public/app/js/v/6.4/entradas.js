(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entradas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Actualizar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Actualizar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/productos */ "./resources/app/api/productos.js");
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var _api_tipo_entrada__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/tipo_entrada */ "./resources/app/api/tipo_entrada.js");
/* harmony import */ var _api_proveedores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/proveedores */ "./resources/app/api/proveedores.js");
/* harmony import */ var _api_entradas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/entradas */ "./resources/app/api/entradas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/entradas-inventario-inicial */ "./resources/app/api/entradas-inventario-inicial.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_5___default.a,
      format: "dd-MM-yyyy",
      bodegas: [],
      zonas: [],
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_7___default.a,
      //It is important to import the loading image then use here
      //
      proveedores: [],
      tipos_entrada: [],
      productos: [],
      detalleForm: {
        productox: "",
        cantidad_solicitada: 1,
        precio_unitario: 0,
        subtotal: 0,
        total: 0
      },
      form: {
        es_borrador: true,
        codigo_entrada: "",
        descripcion_entrada: "",
        fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
        fecha_fabricacion: moment(new Date()).format("YYYY-MM-DD"),
        fecha_vencimiento: moment(new Date()).format("YYYY-MM-DD"),
        fecha_fabricacionx: new Date(),
        fecha_vencimientox: new Date(),
        entrada_tipo: "",
        entrada_proveedor: "",
        entrada_bodega: "",
        entrada_productos: [],
        numero_documento: ''
      },
      btnAction: "Actualizar y Emitir",
      btnActionDraft: "Guardar Borrador",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad: function total_cantidad() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_solicitada);
      }, 0);
    },
    total_conversion: function total_conversion() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.conversionx);
      }, 0);
    }
  },
  methods: {
    obtenerEntrada: function obtenerEntrada() {
      var _this = this;

      var self = this;
      _api_entradas__WEBPACK_IMPORTED_MODULE_4__["default"].obtenerEntrada({
        id_entrada: this.$route.params.id_entrada
      }, function (data) {
        self.form = data.entrada;
        self.form.fecha_fabricacionx = data.entrada.fecha_fabricacion;
        self.form.fecha_vencimientox = data.entrada.fecha_vencimiento;

        if (self.form.estado !== 99) {
          alertify.error("La entrada ya no puede ser actualizada", 5);

          _this.$router.push({
            name: "entradas"
          });
        }
      });
    },
    cargarPresentaciones: function cargarPresentaciones() {
      var self = this;
      self.loading = true;
      _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_6__["default"].cargarPresentacionesProductos({
        id_producto: self.detalleForm.productox.id_producto
      }, function (data) {
        if (data.presentaciones !== null) {
          self.form.presentaciones = data.presentaciones;
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
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_solicitada)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this; //  console.log(self.detalleForm.productox)

      if (self.detalleForm.productox) self.detalleForm.precio_unitario = self.detalleForm.productox.costo_estandar;
    },
    actualizar_listado_productos: function actualizar_listado_productos() {
      var self = this;
      self.form.entrada_productos.forEach(function (producto, key) {
        producto.id_bodega_producto = 0;
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_entrada = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelectFab: function onDateSelectFab(date) {
      //console.log(date); //
      this.form.fecha_fabricacion = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelectVen: function onDateSelectVen(date) {
      //console.log(date); //
      this.form.fecha_vencimiento = moment(date).format("YYYY-MM-DD"); //
    },
    calcularConversion: function calcularConversion(itemX) {
      itemX.conversionx = Number((Number(itemX.cantidad_solicitada) * Number(itemX.escalar)).toFixed(2));

      if (!isNaN(itemX.conversionx)) {
        return itemX.conversionx;
      } else return 0;
    },
    obtenerTodosProveedores: function obtenerTodosProveedores() {
      var self = this;
      _api_proveedores__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerTodosProveedores(function (data) {
        self.proveedores = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodasBodegas: function obtenerTodasBodegas() {
      var self = this;
      _api_bodegas__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodasBodegas(function (data) {
        self.bodegas = data.bodegas;
        self.zonas = data.zonas;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosTiposEntrada: function obtenerTodosTiposEntrada() {
      var self = this;
      _api_tipo_entrada__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTodosTiposEntrada(function (data) {
        self.tipos_entrada = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerProductosValidos: function obtenerProductosValidos() {
      var self = this;
      _api_productos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerProductosValidos(function (data) {
        self.productos = data;
      }, function (err) {
        console.log(err);
      });
    },
    agregarDetalle: function agregarDetalle() {
      var _this2 = this;

      var self = this;

      if (this.detalleForm.productox) {
        if (this.detalleForm.cantidad_solicitada > 0) {
          var i = 0;
          var keyx = 0;

          if (self.form.entrada_productos) {
            self.form.entrada_productos.forEach(function (productox, key) {
              //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
              if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
                i++;
                keyx = key;
              }
            });
          }

          if (i === 0) {
            var _this$form$entrada_pr;

            this.form.entrada_productos.push((_this$form$entrada_pr = {
              id_bodega_producto: 0,
              id_producto: this.detalleForm.productox.id_producto,
              text: this.detalleForm.productox.text,
              codigo_presentacion: this.detalleForm.presentacionx.codigo,
              entrada_presentacion: this.detalleForm.presentacionx,
              cantidad_solicitada: this.detalleForm.cantidad_solicitada,
              relacion_um_estandar: this.detalleForm.presentacionx.relacion_um_estandar,
              codigo_producto: this.detalleForm.productox.codigo_sistema,
              descripcion_producto: this.detalleForm.productox.nombre_comercial,
              unidad_medida: this.detalleForm.presentacionx.unidad_medida
            }, _defineProperty(_this$form$entrada_pr, "codigo_producto", this.detalleForm.productox.codigo_sistema), _defineProperty(_this$form$entrada_pr, "descripcion_producto", this.detalleForm.productox.nombre_comercial), _this$form$entrada_pr));
            this.detalleForm.productox = '';
            this.detalleForm.presentacionx = '';
            this.detalleForm.cantidad_solicitada = 0;
          } else {
            this.$swal.fire({
              title: 'El producto ya existe en el detalle, desea sumar la nueva cantidad al monto existente?',
              text: "También se sobreescribirá el costo unitario",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, confirmar',
              cancelButtonText: 'Cancelar'
            }).then(function (result) {
              if (result.value) {
                self.form.entrada_productos[keyx].cantidad_solicitada = self.form.entrada_productos[keyx].cantidad_solicitada + self.detalleForm.cantidad_solicitada;
                _this2.detalleForm.productox = '';
                _this2.detalleForm.presentacionx = '';
                _this2.detalleForm.cantidad_solicitada = 0;
              }
            });
          }
        } else {
          alertify.warning("Los valores para cantidad_solicitada", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.entrada_productos.length >= 1) {
        this.form.entrada_productos.splice(index, 1);
      } else {
        this.form.entrada_productos = [];
      }
    },
    actualizar: function actualizar() {
      var _this3 = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.btnActionDraft = "Guardando, espere....";

      if (self.form.es_borrador === false) {
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
            _api_entradas__WEBPACK_IMPORTED_MODULE_4__["default"].actualizar(self.form, function (data) {
              _this3.$swal.fire('Entrada Emitida!', 'La entrada fue actualizada y emitida correctamente.', 'success');

              _this3.$router.push({
                name: "entradas"
              });
            }, function (err) {
              self.errorMessages = err;
              self.btnAction = "Actualizar y Emitir";
              self.btnActionDraft = "Guardar Borrador";
            });
          } else {
            self.btnAction = "Actualizar y Emitir";
            self.btnActionDraft = "Guardar Borrador";
          }
        });
      } else {
        _api_entradas__WEBPACK_IMPORTED_MODULE_4__["default"].actualizar(self.form, function (data) {
          _this3.$swal.fire('Borrador de Entrada Registrado!', 'La Entrada fue Registrada correctamente.', 'success');

          _this3.$router.push({
            name: "entradas"
          });
        }, function (err) {
          self.errorMessages = err;
          self.btnAction = "Actualizar y Emitir";
          self.btnActionDraft = "Guardar Borrador";
        });
      }
    }
  },
  mounted: function mounted() {
    this.obtenerTodasBodegas();
    this.obtenerTodosProveedores();
    this.obtenerTodosTiposEntrada();
    this.obtenerProductosValidos();
    this.obtenerEntrada();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Listado.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Listado.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_entradas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/entradas */ "./resources/app/api/entradas.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import Pagination from "../layout/Pagination";

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '',
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 20,
        limitOptions: [20, 40, 60, 80],
        search: {
          field: "codigo_entrada",
          value: ""
        }
      },
      entradas: [],
      total: 0
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    mostrarProductos: function mostrarProductos(key) {
      if (this.entradas[key].mostrar) {
        this.entradas[key].mostrar = 0;
      } else {
        this.entradas[key].mostrar = 1;
      }
    },
    obtenerEntradas: function obtenerEntradas() {
      var self = this;
      _api_entradas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerEntradas(self.filter, function (data) {
        data.rows.forEach(function (entradas, key) {
          data.rows[key].mostrar = 0;
        });
        self.entradas = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    descargarCodigosUsados: function descargarCodigosUsados(id_entrada) {
      var self = this;

      if (id_entrada) {
        self.loading = true;
        var formato = 'pdf';
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('compras/usados/reporte-codigos', {
          id_entrada: id_entrada,
          extension: formato
        }, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          formato === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteCodigosCompraUsado.' + formato;
          link.click();
          self.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Seleccione un cliente!", 5);
        self.loading = false;
      }
      /*}else{
          alertify.warning("Espere a que se complete la descarga anterior",5);
      }*/

    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerEntradas();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerEntradas();
    }
  },

  /*components: {
    pagination: Pagination
  },*/
  mounted: function mounted() {
    this.obtenerEntradas();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Mostrar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Mostrar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_entradas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/entradas */ "./resources/app/api/entradas.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      nombre_empresa: '',
      direccion_empresa: '',
      format: "dd-MM-yyyy",
      descargando: false,
      form: {
        codigo_entrada: "",
        fecha_entrada: "",
        id_tipo_entrada: "",
        id_proveedor: 0,
        id_bodega: 0,
        detalleProductos: [],
        entrada_proveedor: [],
        entrada_bodega: [],
        entrada_productos: [],
        entrada_tipo: [],
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
      itemX.conversionx = Number((Number(itemX.cantidad_recibida) * Number(itemX.escalar)).toFixed(2));

      if (!isNaN(itemX.conversionx)) {
        return itemX.conversionx;
      } else return 0;
    },
    descargarReporteEntrada: function descargarReporteEntrada() {
      var _this = this;

      if (!this.loading) {
        var self = this;
        self.loading = true;
        var extensionx = 'pdf';
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('entradas/reporte', {
          id_entrada: self.form.id_entrada,
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
          link.download = 'ReporteEntrada.' + extensionx;
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
    obtenerEntrada: function obtenerEntrada() {
      var self = this;
      _api_entradas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerEntrada({
        id_entrada: this.$route.params.id_entrada
      }, function (data) {
        self.form = data.entrada;
        self.nombre_empresa = data.nombre_empresa;
        self.direccion_empresa = data.direccion_empresa;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  computed: {
    total_cantidad_solicitada: function total_cantidad_solicitada() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_solicitada);
      }, 0);
    },
    total_cantidad_recibida: function total_cantidad_recibida() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_recibida);
      }, 0);
    },
    total_cantidad_total: function total_cantidad_total() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.conversionx);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(Number(item.cantidad_recibida * item.precio_unitario).toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(Number(item.cantidad_recibida * item.precio_unitario).toFixed(2));
      }, 0);
    }
  },
  mounted: function mounted() {
    this.obtenerEntrada();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Recibir.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Recibir.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_entradas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/entradas */ "./resources/app/api/entradas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_baterias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/baterias */ "./resources/app/api/baterias.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);
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





vue__WEBPACK_IMPORTED_MODULE_3___default.a.use(vue_blockui__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      msg: 'Cargando el contenido espere un momento',
      url: '',
      //It is important to import the loading image then use here
      bateriasBusquedaURL: "/productos/baterias/buscar",
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      detalleForm: {
        productox: {}
      },
      detalle_baterias: [],
      form: {
        contiene_baterias: false,
        codigo_entrada: "",
        fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
        fecha_recepcion: moment(new Date()).format("YYYY-MM-DD"),
        fecha_recepcionx: new Date(),
        entrada_tipo: "",
        entrada_proveedor: "",
        entrada_bodega: "",
        entrada_zona: "",
        entrada_productos: []
      },
      zonas: [],
      btnAction: "Recibir Productos",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad_solicitada: function total_cantidad_solicitada() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_solicitada);
      }, 0);
    },
    total_cantidad_recibida: function total_cantidad_recibida() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_recibida);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
    }
  },
  methods: {
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_recepcion = moment(date).format("YYYY-MM-DD"); //
    },
    calcularConversion: function calcularConversion(itemX) {
      itemX.conversionx = Number((Number(itemX.cantidad_recibida) * Number(itemX.escalar)).toFixed(2));

      if (!isNaN(itemX.conversionx)) {
        return itemX.conversionx;
      } else return 0;
    },
    confirmar: function confirmar() {
      var _this = this;

      this.$swal.fire({
        title: 'Esta seguro de confirmar la recepción de la entrada?',
        text: "Revise bien los datos, esta acción no se puede deshacer.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _this.recibir();
        }
      });
    },
    buscarBateria: function buscarBateria() {
      var self = this;
      self.loading = true;
      var estado_busqueda = 1; //En transito

      var bodegax = 0;

      if (self.form.id_salida) {
        bodegax = self.form.entrada_salida_bodega.id_bodega;
      }
      /*if(self.form.id_tipo_entrada === 5){
      	estado_busqueda = 3; //en garantia
      }*/


      estado_busqueda = self.form.condicion_productos; //self.$refs.precio_unitario.focus();

      _api_baterias__WEBPACK_IMPORTED_MODULE_2__["default"].buscarCodigo({
        codigo_bateria: self.detalleForm.bateria_busqueda,
        id_bodega: bodegax,
        reservada: true,
        estado: estado_busqueda
      }, function (data) {
        if (data !== null) {
          self.detalleForm.productox = data;
          self.$refs.agregar.click();
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
    obtenerEntrada: function obtenerEntrada() {
      var _this2 = this;

      var self = this;
      _api_entradas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerEntrada({
        id_entrada: this.$route.params.id_entrada
      }, function (data) {
        _this2.loading = false;
        self.form = data.entrada;
        self.zonas = data.zonas; //console.log(data.traslados);

        if (data.productos.length) {
          self.form.contiene_baterias = true;
          self.detalle_baterias = data.traslados;
          data.entrada.entrada_productos.forEach(function (productox, key1) {
            //console.log(productox)
            self.detalle_baterias.forEach(function (bateriax, key2) {
              if (productox.bodega_producto.id_producto === bateriax.id_producto) {
                self.form.entrada_productos[key1].cantidad_recibida++;
              }
            });
          });
        } else {
          self.form.contiene_baterias = false;
        }
        /*data.entrada.productos.forEach((productox, key) => {
        	if(self.detalleForm.productox.id_producto===productox.bodega_producto.id_producto){
        		existeProducto=true;
        	}
        });*/
        //self.detalle_baterias = data.entrada.entrada_productos


        if (self.form.estado !== 1) {
          alertify.error("La entrada no puede ser recibida", 5);

          _this2.$router.push({
            name: "entradas"
          });
        }
      });
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_solicitada)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        var existeCodigoGarantia = false;
        var existeProducto = false;
        self.detalle_baterias.forEach(function (bateriax, key) {
          if (self.detalleForm.productox.id_bateria === bateriax.id_bateria) {
            existeCodigoGarantia = true;
          }
        });

        if (self.form.entrada_productos) {
          self.form.entrada_productos.forEach(function (productox, key) {
            if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
              existeProducto = true;
            }
          });
        }

        if (existeProducto) {
          if (!existeCodigoGarantia) {
            var keyx = 0;

            if (self.form.entrada_productos) {
              self.form.entrada_productos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
                  keyx = key;
                }
              });
            }

            if (self.form.entrada_productos[keyx].cantidad_recibida + 1 <= self.form.entrada_productos[keyx].cantidad_solicitada) {
              self.form.entrada_productos[keyx].cantidad_recibida++;
              this.detalle_baterias.push({
                //productox: this.detalleForm.productox
                codigo_barra: this.detalleForm.productox.codigo_barras,
                descripcion: this.detalleForm.productox.bateria_producto.descripcion,
                id_producto: this.detalleForm.productox.id_producto,
                id_bateria: this.detalleForm.productox.id_bateria,
                text: this.detalleForm.productox.codigo_garantia
              });
              alertify.success("Batería agregada!", 5);
            } else {
              alertify.warning("Ya se registró la cantidad solicitada de esta batería", 5);
            }
          } else {
            alertify.warning("Ya existe ese código de batería en el listado", 5);
          }
        } else {
          alertify.warning("El código de esta batería pertenece a un producto que no existe en la entrada", 5);
        }

        this.detalleForm.productox = {};
        this.$refs.bateria.focus();
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.detalle_baterias.length >= 1) {
        var keyx = 0;

        if (self.form.entrada_productos) {
          self.form.entrada_productos.forEach(function (productox, key) {
            if (item.id_producto === productox.bodega_producto.id_producto) {
              keyx = key;
            }
          });
        }

        self.form.entrada_productos[keyx].cantidad_recibida--;
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
    recibir: function recibir() {
      var _this3 = this;

      var self = this;

      if (self.total_cantidad_recibida > 0) {
        self.form.detalle_baterias = self.detalle_baterias;
        self.btnAction = "Registrando, espere....";

        if (self.form.estado === 1) {
          _api_entradas__WEBPACK_IMPORTED_MODULE_0__["default"].recibir(self.form, function (data) {
            //alertify.success("La entrada fue recibida correctamente",5);
            _this3.$swal.fire('Entrada Recibida!', 'La entrada fue Recibida correctamente.', 'success');

            _this3.$router.push({
              name: "entradas"
            });
          }, function (err) {
            alertify.error(err, 10);
            self.errorMessages = err;
            self.btnAction = "Recibir Productos";
          });
        } else {
          alertify.error("La entrada ya no puede ser recibida", 5);
          this.$router.push({
            name: "entradas"
          });
        }
      } else {
        alertify.error("Se debe recibir al menos un producto", 5);
      }
    }
  },
  mounted: function mounted() {
    this.loading = true;
    this.obtenerEntrada();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirCompra.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RecibirCompra.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_entradas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/entradas */ "./resources/app/api/entradas.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_proveedores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/proveedores */ "./resources/app/api/proveedores.js");
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var _api_tipo_entrada__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/tipo_entrada */ "./resources/app/api/tipo_entrada.js");
/* harmony import */ var _api_productos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/productos */ "./resources/app/api/productos.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import es from 'vuejs-datepicker/dist/locale/translations/es'







/* harmony default export */ __webpack_exports__["default"] = ({
  /*components: {
  	Multiselect
  },*/
  data: function data() {
    var _ref;

    return _ref = {
      //productoEntradaBusquedaURL: "/entradas/productos/buscar",
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      proveedores: [],
      tipos_entrada: [],
      productos: [],
      bodegas: [],
      zonas: [],
      mascaraCodigo: 'X############',
      codigoAutomatico: false,
      contador: 1,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy"
    }, _defineProperty(_ref, "productos", {}), _defineProperty(_ref, "detalleForm", {
      fecha_activacion: '',
      productox: {},
      codigo_garantiax: ''
    }), _defineProperty(_ref, "detalle_baterias", []), _defineProperty(_ref, "form", {
      contiene_baterias: false,
      codigo_entrada: "",
      fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
      fecha_fabricacion: moment(new Date()).format("YYYY-MM-DD"),
      fecha_vencimiento: moment(new Date()).format("YYYY-MM-DD"),
      fecha_fabricacionx: new Date(),
      fecha_vencimientox: new Date(),
      entrada_tipo: "",
      entrada_proveedor: "",
      entrada_bodega: "",
      entrada_productos: []
    }), _defineProperty(_ref, "btnAction", "Recibir Productos"), _defineProperty(_ref, "errorMessages", []), _ref;
  },
  computed: {
    total_cantidad_solicitada: function total_cantidad_solicitada() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_solicitada);
      }, 0);
    },
    total_cantidad_recibida: function total_cantidad_recibida() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_recibida);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
    }
  },
  methods: {
    confirmar: function confirmar() {
      var _this = this;

      this.$swal.fire({
        title: 'Esta seguro de confirmar la recepción de la entrada?',
        text: "Revise bien los datos, esta acción no se puede deshacer.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _this.recibir();
        }
      });
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this; //  console.log(self.detalleForm.productox)

      self.$refs.bateria.$refs.search.blur();
      self.$refs.codigo.focus();

      if (self.detalleForm.productox) {
        if (self.detalleForm.productox.id_submarca === 7) {
          ///Caso motobaterias (no tiene codigo de garantia)
          self.$refs.fecha_activacion.focus();
          self.codigoAutomatico = true;
          self.mascaraCodigo = 'XXXXXXXXXXXXXXXXXXXXXXX';
          self.detalleForm.codigo_garantiax = 'Código Automático ' + self.contador.toString();
          self.contador++;
          var old_activacion = self.detalleForm.codigo_garantiax;
          self.detalleForm.codigo_garantiax = '';
          self.detalleForm.codigo_garantiax = old_activacion;
        } else if (self.detalleForm.productox.id_submarca === 3) {
          //Caso Cronos
          self.$refs.codigo.focus();
          self.detalleForm.codigo_garantiax = '';
          self.mascaraCodigo = 'X############';
          self.codigoAutomatico = false;
        } else {
          //casos lth
          self.$refs.codigo.focus();
          self.detalleForm.codigo_garantiax = '';
          self.mascaraCodigo = 'XXXXXXXXXXXXXXXXXXXXXXX';
          self.codigoAutomatico = false;
        }
      } //self.$refs.codigo.focus();

    },
    codigoGarantiaEvento: function codigoGarantiaEvento() {
      var self = this;

      if (self.detalleForm.codigo_garantiax !== '') {
        //self.$refs.agregar.click()
        this.$refs.fecha_activacion.focus();
      } else {
        self.$refs.codigo.focus();
      }
    },
    fechaActivacionEvento: function fechaActivacionEvento() {
      var self = this;

      if (self.detalleForm.fecha_activacion !== '') {
        self.$refs.agregar.click();
      } else {
        self.$refs.fecha_activacion.focus();
      }
    },
    obtenerEntrada: function obtenerEntrada() {
      var _this2 = this;

      var self = this;
      _api_entradas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerEntrada({
        id_entrada: this.$route.params.id_entrada
      }, function (data) {
        self.form = data.entrada;
        self.form.fecha_fabricacionx = data.entrada.fecha_fabricacion;
        self.form.fecha_vencimientox = data.entrada.fecha_vencimiento;
        self.form.contiene_baterias = data.productos.length > 0;
        self.productos = data.productos;

        if (self.form.estado !== 1 && self.form.id_tipo_entrada !== 1) {
          alertify.error("La entrada no puede ser recibida", 5);

          _this2.$router.push({
            name: "entradas"
          });
        }

        self.loading = false;
      }, function (err) {
        console.log(err);
        alertify.error("Hubo un problema al cargar la información", 5);

        _this2.$router.push({
          name: "entradas"
        });
      });
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_entrada = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelectFab: function onDateSelectFab(date) {
      //console.log(date); //
      this.form.fecha_fabricacion = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelectVen: function onDateSelectVen(date) {
      //console.log(date); //
      this.form.fecha_vencimiento = moment(date).format("YYYY-MM-DD"); //
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_solicitada)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        if (self.detalleForm.codigo_garantiax !== '' && self.detalleForm.fecha_activacion !== '') {
          var existe = false;
          var validacion = true;
          self.detalle_baterias.forEach(function (bateriax, key) {
            if (self.detalleForm.codigo_garantiax === bateriax.codigo_garantiax) {
              existe = true;
            }
          });

          if (!existe) {
            var keyx = 0;

            if (self.form.entrada_productos) {
              self.form.entrada_productos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
                  keyx = key;
                }
              });
            }

            if (self.form.entrada_productos[keyx].cantidad_recibida + 1 <= self.form.entrada_productos[keyx].cantidad_solicitada) {
              self.form.entrada_productos[keyx].cantidad_recibida++;
              this.detalle_baterias.push({
                productox: this.detalleForm.productox,
                codigo_garantiax: this.detalleForm.codigo_garantiax,
                fecha_activacion: this.detalleForm.fecha_activacion
              });
            } else {
              alertify.warning("Ya se registró la cantidad solicitada de esta batería", 5);
              validacion = false;
            }
          } else {
            alertify.warning("Ya existe ese código de batería en el listado", 5);
            validacion = false;
          }

          if (validacion) {
            if (self.detalleForm.productox.id_submarca === 7) {
              //Caso Motobaterias
              //self.contador++;
              self.detalleForm.codigo_garantiax = 'Código Automático ' + self.contador.toString();
              self.detalleForm.productox = '';
              self.$refs.bateria.$el.focus();
            } else if (self.detalleForm.productox.id_submarca === 3) {
              //Caso Cronos
              self.detalleForm.codigo_garantiax = '';
              self.$refs.codigo.focus();
            } else {
              self.detalleForm.codigo_garantiax = '';
              self.detalleForm.productox = ''; ///self.$refs.bateria.$refs.search.blur()

              self.$refs.bateria.$el.focus();
            }
          } else {
            self.detalleForm.codigo_garantiax = '';
            self.detalleForm.productox = '';
            self.$refs.bateria.$el.focus();
          } //this.detalleForm.fecha_activacion='';

        } else {
          alertify.warning("Debe definir un código unico de garantía", 5);
        }
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.detalle_baterias.length >= 1) {
        var keyx = 0;

        if (self.form.entrada_productos) {
          self.form.entrada_productos.forEach(function (productox, key) {
            if (item.productox.id_producto === productox.bodega_producto.id_producto) {
              keyx = key;
            }
          });
        }

        self.form.entrada_productos[keyx].cantidad_recibida--;
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
    obtenerTodosProveedores: function obtenerTodosProveedores() {
      var self = this;
      _api_proveedores__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerTodosProveedores(function (data) {
        self.proveedores = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodasBodegas: function obtenerTodasBodegas() {
      var self = this;
      _api_bodegas__WEBPACK_IMPORTED_MODULE_4__["default"].obtenerTodasBodegas(function (data) {
        self.bodegas = data.bodegas;
        self.zonas = data.zonas;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosTiposEntrada: function obtenerTodosTiposEntrada() {
      var self = this;
      _api_tipo_entrada__WEBPACK_IMPORTED_MODULE_5__["default"].obtenerTodosTiposEntrada(function (data) {
        self.tipos_entrada = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerProductosValidos: function obtenerProductosValidos() {
      var self = this;
      _api_productos__WEBPACK_IMPORTED_MODULE_6__["default"].obtenerProductosValidos(function (data) {
        self.productos = data;
      }, function (err) {
        console.log(err);
      });
    },
    recibir: function recibir() {
      var _this3 = this;

      var self = this;

      if (self.total_cantidad_recibida > 0) {
        self.form.detalle_baterias = self.detalle_baterias;
        self.btnAction = "Registrando, espere....";

        if (self.form.estado === 1) {
          _api_entradas__WEBPACK_IMPORTED_MODULE_0__["default"].recibirCompra(self.form, function (data) {
            //alertify.success("La entrada fue recibida correctamente",5);
            _this3.$swal.fire('Entrada Recibida!', 'La Entrada fue Recibida correctamente.', 'success');

            _this3.$router.push({
              name: "entradas"
            });
          }, function (err) {
            alertify.error('Error Actualizando los datos', 10);
            self.errorMessages = err;
            self.btnAction = "Recibir Productos";
          });
        } else {
          alertify.error("La entrada ya no puede ser recibida", 5);
          this.$router.push({
            name: "entradas"
          });
        }
      } else {
        alertify.error("Se debe recibir al menos un producto", 5);
      }
    },
    leaving: function leaving() {
      alert("Leaving...");
    }
  },
  mounted: function mounted() {
    this.obtenerEntrada();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_entradas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/entradas */ "./resources/app/api/entradas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      bateriasBusquedaURL: "/productos/baterias/buscar",
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      contador: 0,
      productos: {},
      detalleForm: {
        productox: {}
      },
      detalle_baterias: [],
      form: {
        contiene_baterias: false,
        codigo_entrada: "",
        fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
        entrada_tipo: "",
        entrada_proveedor: "",
        entrada_bodega: "",
        entrada_productos: []
      },
      btnAction: "Recibir Productos",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad_solicitada: function total_cantidad_solicitada() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_solicitada);
      }, 0);
    },
    total_cantidad_recibida: function total_cantidad_recibida() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_recibida);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.subtotal.toFixed(2));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.entrada_productos.reduce(function (carry, item) {
        return carry + Number(item.total.toFixed(2));
      }, 0);
    }
  },
  methods: {
    seleccionarProducto: function seleccionarProducto(e) {
      var productoP = e.target.value;
      var self = this;
      self.detalleForm.productox = productoP;
      this.$refs.fecha_activacion.focus();
    },
    fechaActivacionEvento: function fechaActivacionEvento() {
      var self = this;
      self.detalleForm.fecha_activacion = 'Cargando';

      if (self.detalleForm.fecha_activacion !== '') {
        self.$refs.agregar.click();
      } else {
        self.$refs.fecha_activacion.focus();
      }
    },
    obtenerEntrada: function obtenerEntrada() {
      var _this = this;

      var self = this;
      _api_entradas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerEntrada({
        id_entrada: this.$route.params.id_entrada
      }, function (data) {
        if (data.productos.length) {
          self.form.contiene_baterias = true;
        } else {
          self.form.contiene_baterias = false;
        }

        self.productos = data.productos;

        if (self.form.estado !== 1 && self.form.id_tipo_entrada !== 7) {
          alertify.error("La entrada no puede ser recibida", 5);

          _this.$router.push({
            name: "entradas"
          });
        }
      });
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_solicitada)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
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

        if (self.form.entrada_productos) {
          self.form.entrada_productos.forEach(function (productox, key) {
            if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
              existeProducto = true;
            }
          });
        }

        if (existeProducto) {
          if (!existeCodigoGarantia) {
            var keyx = 0;

            if (self.form.entrada_productos) {
              self.form.entrada_productos.forEach(function (productox, key) {
                if (self.detalleForm.productox.id_producto === productox.bodega_producto.id_producto) {
                  keyx = key;
                }
              });
            }

            if (self.form.entrada_productos[keyx].cantidad_recibida + 1 <= self.form.entrada_productos[keyx].cantidad_solicitada) {
              self.form.entrada_productos[keyx].cantidad_recibida++;
              this.detalle_baterias.push({
                productox: this.detalleForm.productox
              });
            } else {
              alertify.warning("Ya se registró la cantidad solicitada de esta batería", 5);
            }
          } else {
            alertify.warning("Ya existe ese código de batería en el listado", 5);
          }
        } else {
          alertify.warning("El código de esta batería pertenece a un producto que no existe en la entrada", 5);
        }

        this.detalleForm.productox = {};
        this.$refs.bateria.open();
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      var self = this;

      if (this.detalle_baterias.length >= 1) {
        var keyx = 0;

        if (self.form.entrada_productos) {
          self.form.entrada_productos.forEach(function (productox, key) {
            if (item.productox.id_producto === productox.bodega_producto.id_producto) {
              keyx = key;
            }
          });
        }

        self.form.entrada_productos[keyx].cantidad_recibida--;
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
    recibir: function recibir() {
      var _this2 = this;

      var self = this;

      if (self.total_cantidad_recibida > 0) {
        self.form.detalle_baterias = self.detalle_baterias;
        self.btnAction = "Registrando, espere....";

        if (self.form.estado === 1 && self.form.id_tipo_entrada === 7) {
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
              _api_entradas__WEBPACK_IMPORTED_MODULE_0__["default"].recibir(self.form, function (data) {
                _this2.$swal.fire('Entrada por traslado recibida exitosamente!', 'La Entrada fue recibida correctamente.', 'success');

                _this2.$router.push({
                  name: "entradas"
                });
              }, function (err) {
                alertify.error(err, 10);
                self.errorMessages = err;
                self.btnAction = "Recibir Productos";
              });
            } else {
              self.btnAction = "Recibir Productos";
            }
          });
        } else {
          alertify.error("La entrada ya no puede ser recibida", 5);
          this.$router.push({
            name: "entradas"
          });
        }
      } else {
        alertify.error("Se debe recibir al menos un producto", 5);
      }
    }
  },
  mounted: function mounted() {
    this.obtenerEntrada();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Registrar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Registrar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/productos */ "./resources/app/api/productos.js");
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var _api_tipo_entrada__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/tipo_entrada */ "./resources/app/api/tipo_entrada.js");
/* harmony import */ var _api_proveedores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/proveedores */ "./resources/app/api/proveedores.js");
/* harmony import */ var _api_entradas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/entradas */ "./resources/app/api/entradas.js");
/* harmony import */ var _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/entradas-inventario-inicial */ "./resources/app/api/entradas-inventario-inicial.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_7__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_7___default.a,
      format: "dd-MM-yyyy",
      bodegas: [],
      zonas: [],
      proveedores: [],
      proveedoresBusquedaURL: "/proveedores/buscar",
      tipos_entrada: [],
      productos: [],
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_6___default.a,
      //It is important to import the loading image then use here
      loading: true,
      detalleForm: {
        productox: '',
        cantidad: 1,
        precio_unitario: 0,
        subtotal: 0,
        total: 0
      },
      form: {
        codigo_entrada: "",
        descripcion_entrada: "",
        fecha_entrada: moment(new Date()).format("YYYY-MM-DD"),
        fecha_entradax: new Date(),
        fecha_fabricacion: moment(new Date()).format("YYYY-MM-DD"),
        fecha_fabricacionx: new Date(),
        fecha_vencimiento: moment(new Date()).format("YYYY-MM-DD"),
        fecha_vencimientox: new Date(),
        tipo_entrada: "",
        bodega: "",
        zona: "",
        detalleProductos: [],
        es_borrador: false,
        numero_documento: '',
        no_factura: '',
        no_lote: '',
        orden_compra: '',
        conversionx: 0
      },
      btnAction: "Emitir",
      btnActionDraft: "Guardar Borrador",
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
    seleccionarProveedor: function seleccionarProveedor(e) {
      var proveedor = e.target.value;
      var self = this;
      self.form.proveedor = proveedor;
    },
    cargarPresentaciones: function cargarPresentaciones() {
      var self = this;
      self.loading = true;
      _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_5__["default"].cargarPresentacionesProductos({
        id_producto: self.detalleForm.productox.id_producto
      }, function (data) {
        if (data.presentaciones !== null) {
          self.form.presentaciones = data.presentaciones;
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
    labelproducto: function labelproducto(item) {
      var cod_barra = item.codigo_sistema == null ? 'N/A' : item.codigo_sistema;
      return "".concat(item.nombre_comercial, " - ").concat(cod_barra);
    },
    cambiarFocoCantidad: function cambiarFocoCantidad() {
      var self = this;
      self.$refs.precio_unitario.focus();
    },
    cambiarFocoPrecioUnitario: function cambiarFocoPrecioUnitario() {
      var self = this;
      self.$refs.agregar.focus();
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    cargar_detalles_producto: function cargar_detalles_producto() {
      var self = this; //console.log(self.detalleForm.productox)

      if (self.detalleForm.productox) {
        self.detalleForm.precio_unitario = Number(self.detalleForm.productox.costo_estandar);
        self.$refs.cantidad.focus();
      } else {
        console.log('producto no valido');
      }
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_entrada = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelectFab: function onDateSelectFab(date) {
      //console.log(date); //
      this.form.fecha_fabricacion = moment(date).format("YYYY-MM-DD"); //
    },
    onDateSelectVen: function onDateSelectVen(date) {
      //console.log(date); //
      this.form.fecha_vencimiento = moment(date).format("YYYY-MM-DD"); //
    },
    obtenerTodosProveedores: function obtenerTodosProveedores() {
      var _this = this;

      var self = this;
      _api_proveedores__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerTodosProveedores(function (data) {
        //self.proveedores = data;
        //self.form.proveedor = self.proveedores[0];
        _this.loading = false;
      }, function (err) {
        _this.loading = false;
        console.log(err);
      });
    },
    obtenerTodasBodegas: function obtenerTodasBodegas() {
      var _this2 = this;

      var self = this;
      _api_bodegas__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodasBodegas(function (data) {
        self.bodegas = data.bodegas;
        self.form.bodega = self.bodegas[0];
        self.zonas = data.zonas;
        _this2.loading = false;
      }, function (err) {
        _this2.loading = false;
        console.log(err);
      });
    },
    obtenerTodosTiposEntrada: function obtenerTodosTiposEntrada() {
      var _this3 = this;

      var self = this;
      _api_tipo_entrada__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTodosTiposEntrada(function (data) {
        self.tipos_entrada = data;
        self.form.tipo_entrada = self.tipos_entrada[1];
        _this3.loading = false;
      }, function (err) {
        _this3.loading = false;
        console.log(err);
      });
    },
    obtenerProductosValidos: function obtenerProductosValidos() {
      var _this4 = this;

      var self = this;
      _api_productos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerProductosValidos(function (data) {
        self.productos = data;
        _this4.loading = false; //self.detalleForm.productox=self.productos[0];
      }, function (err) {
        _this4.loading = false;
        console.log(err);
      });
    },
    agregarDetalle: function agregarDetalle() {
      var _this5 = this;

      var self = this;

      if (this.detalleForm.productox && this.detalleForm.presentacionx) {
        if (this.detalleForm.cantidad > 0) {
          var i = 0;
          var keyx = 0;
          /*if(self.form.detalleProductos){
              self.form.detalleProductos.forEach((presentacionx, key) => {
                  //console.log('ID_PRODUCTO ',self.detalleForm.productox.id_producto);
                  if(self.form.detalleProductos.presentacionx.id_presentacion===presentacionx.presentacionx.id_presentacion){
                      i++;
                      keyx = key;
                  }
              });
          }*/

          if (i === 0) {
            this.form.detalleProductos.push({
              productox: this.detalleForm.productox,
              presentacionx: this.detalleForm.presentacionx,
              cantidad: this.detalleForm.cantidad,
              escalar: this.detalleForm.presentacionx.escalar,
              conversionx: 0
            });
            this.detalleForm.productox = '';
            this.detalleForm.presentacionx = '';
            this.detalleForm.cantidad = 0;
          } else {
            this.$swal.fire({
              title: 'El producto ya existe en el detalle, desea sumar la nueva cantidad al monto existente?',
              text: "Revise bien la información",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, confirmar',
              cancelButtonText: 'Cancelar'
            }).then(function (result) {
              if (result.value) {
                self.form.detalleProductos[keyx].cantidad = Number(self.form.detalleProductos[keyx].cantidad) + self.detalleForm.cantidad;
                _this5.detalleForm.productox = '';
                _this5.detalleForm.cantidad = 0;
              }
            });
          }
        } else {
          alertify.warning("Los valores para cantidad deben ser mayores a cero", 5);
        }
      } else {
        alertify.warning("Verifique que tiene seleccionado un producto y una presentación", 5);
      }
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.detalleProductos.length >= 1) {
        this.form.detalleProductos.splice(index, 1);
      } else {
        this.form.detalleProductos = [];
      }
    },
    calcularConversion: function calcularConversion(itemX) {
      itemX.conversionx = Number((Number(itemX.cantidad) * Number(itemX.escalar)).toFixed(2));

      if (!isNaN(itemX.conversionx)) {
        return itemX.conversionx;
      } else return 0;
    },
    registrar: function registrar() {
      var _this6 = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.btnActionDraft = "Guardando, espere....";

      if (self.form.es_borrador === false) {
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
            _api_entradas__WEBPACK_IMPORTED_MODULE_4__["default"].registrar(self.form, function (data) {
              // alertify.success("Entrada registrada correctamente",5);
              _this6.$swal.fire('Entrada Registrada!', 'La Entrada fue Registrada correctamente.', 'success');

              _this6.loading = false;

              _this6.$router.push({
                name: "entradas"
              });
            }, function (err) {
              _this6.loading = false;
              self.errorMessages = err;
              self.btnAction = "Emitir";
              self.btnActionDraft = "Guardar Borrador";
            });
          } else {
            self.btnAction = "Actualizar y Emitir";
            self.btnActionDraft = "Guardar Borrador";
          }
        });
      } else {
        _api_entradas__WEBPACK_IMPORTED_MODULE_4__["default"].registrar(self.form, function (data) {
          // alertify.success("Entrada registrada correctamente",5);
          _this6.$swal.fire('Borrador de Entrada Registrado!', 'La Entrada fue Registrada correctamente.', 'success');

          _this6.$router.push({
            name: "entradas"
          });

          _this6.loading = false;
        }, function (err) {
          _this6.loading = false;
          self.errorMessages = err;
          self.btnAction = "Emitir";
          self.btnActionDraft = "Guardar Borrador";
        });
      }
    }
  },
  mounted: function mounted() {
    //this.obtenerNumeroEntrada();
    this.obtenerTodasBodegas(); //this.obtenerTodosProveedores();

    this.obtenerTodosTiposEntrada();
    this.obtenerProductosValidos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/productos */ "./resources/app/api/productos.js");
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
/* harmony import */ var _api_tipo_entrada__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/tipo_entrada */ "./resources/app/api/tipo_entrada.js");
/* harmony import */ var _api_proveedores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/proveedores */ "./resources/app/api/proveedores.js");
/* harmony import */ var _api_entradas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/entradas */ "./resources/app/api/entradas.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  /* components: {
     Datepicker
   },*/
  data: function data() {
    return {
      format: "dd-MM-yyyy",
      form: {
        entrada_original: {
          entrada_bodega: {
            nombre: ""
          },
          entrada_proveedor: {
            nombre_proveedor: ""
          },
          entradas_productos: [],
          codigo_entrada: "",
          fecha_entrada: "",
          id_tipo_entrada: "",
          id_proveedor: "",
          id_bodega: ""
        },
        codigo_entrada: "",
        fecha_entrada: "",
        id_tipo_entrada: "",
        id_proveedor: "",
        id_bodega: ""
      },
      btnAction: "Registrar",
      btnActionBuscar: "Buscar Entrada",
      errorMessages: []
    };
  },
  computed: {
    subTotal: function subTotal() {
      return this.form.entrada_original.entradas_productos.reduce(function (carry, item) {
        return carry + Number(item.precio_unitario) * Number(item.cantidad_dev); //.toFixed(2)//.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      }, 0);
    }
  },
  methods: {
    obtenerEntradaPorCodigo: function obtenerEntradaPorCodigo(codEntrada) {
      var self = this;
      self.btnActionBuscar = "Buscando, espere....";
      _api_entradas__WEBPACK_IMPORTED_MODULE_4__["default"].obtenerEntradaPorCodigo({
        codigo_entrada: codEntrada
      }, function (data) {
        self.form.entrada_original = data;
        self.btnActionBuscar = "Entrada Encontrada";
      }, function (err) {
        alertify.warning(err, 4);
        self.btnActionBuscar = "Buscar Entrada";
      });
    },
    restaurarFormulario: function restaurarFormulario() {
      location.reload();
    },
    eliminarLinea: function eliminarLinea(item, index) {
      if (this.form.entrada_original.entradas_productos.length > 1) {
        this.form.entrada_original.entradas_productos.splice(index, 1);
      } else {
        this.form.entrada_original.entradas_productos = [];
      }
    },
    crearEntradaPorDevolucion: function crearEntradaPorDevolucion() {
      var _this = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      _api_entradas__WEBPACK_IMPORTED_MODULE_4__["default"].crearEntradaPorDevolucion(self.form, function (data) {
        _this.$router.push({
          name: "entradas"
        });
      }, function (err) {
        self.errorMessages = err;
        self.btnAction = "Registrar";
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-3d31c47e] {\n  min-width: 120px;\n}\n.table a[data-v-3d31c47e] {\n  color: #2675dc;\n}\n.table .table-number[data-v-3d31c47e] {\n  width: 60px;\n}\n.table .action[data-v-3d31c47e] {\n  width: 180px;\n}\n.table .detail-link[data-v-3d31c47e] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-3d31c47e] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-3d31c47e]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n    margin-top: 33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Recibir.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Recibir.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirCompra.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RecibirCompra.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n    margin-top: 33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Actualizar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Recibir.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Recibir.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Recibir.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Recibir.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirCompra.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RecibirCompra.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecibirCompra.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirCompra.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecibirTraslado.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Registrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Actualizar.vue?vue&type=template&id=569c49b0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Actualizar.vue?vue&type=template&id=569c49b0& ***!
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
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Tipo entrada")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.tipos_entrada,
                        label: "descripcion"
                      },
                      model: {
                        value: _vm.form.entrada_tipo,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "entrada_tipo", $$v)
                        },
                        expression: "form.entrada_tipo"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.entrada_tipo, function(message) {
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
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.codigo_entrada,
                        expression: "form.codigo_entrada"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.codigo_entrada },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "codigo_entrada",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.codigo_entrada, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.bodegas, label: "descripcion" },
                      on: {
                        input: function($event) {
                          return _vm.actualizar_listado_productos()
                        }
                      },
                      model: {
                        value: _vm.form.entrada_bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "entrada_bodega", $$v)
                        },
                        expression: "form.entrada_bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.entrada_bodega, function(
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
                      _vm._v("Zonas de costo")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.zonas },
                      model: {
                        value: _vm.form.entrada_zona,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "entrada_zona", $$v)
                        },
                        expression: "form.entrada_zona"
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Proveedor")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.proveedores,
                        label: "nombre_comercial"
                      },
                      model: {
                        value: _vm.form.entrada_proveedor,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "entrada_proveedor", $$v)
                        },
                        expression: "form.entrada_proveedor"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.entrada_proveedor, function(
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
                      _vm._v("Fecha entrada")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelect }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_entrada, function(
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
                    _vm._v("Orden de compra")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.orden_compra,
                        expression: "form.orden_compra"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.orden_compra },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "orden_compra", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.orden_comra, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("No. lote")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.no_lote,
                        expression: "form.no_lote"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.no_lote },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "no_lote", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.no_lote, function(message) {
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
                      _vm._v("Fecha fabricación")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelectFab },
                      model: {
                        value: _vm.form.fecha_fabricacionx,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "fecha_fabricacionx", $$v)
                        },
                        expression: "form.fecha_fabricacionx"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_fabricacion, function(
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
                      _vm._v("Fecha vencimiento")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelectVen },
                      model: {
                        value: _vm.form.fecha_vencimientox,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "fecha_vencimientox", $$v)
                        },
                        expression: "form.fecha_vencimientox"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_vencimiento, function(
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
                    _vm._v("Observaciones entrada")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.descripcion_entrada,
                        expression: "form.descripcion_entrada"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.descripcion_entrada },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "descripcion_entrada",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.descripcion_entrada, function(
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
            !_vm.form.entrada_bodega
              ? _c("div", [_vm._m(2), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.productos, label: "text" },
                      on: { change: _vm.cargarPresentaciones },
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Presentaciones de producto")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "presentacionx",
                      attrs: {
                        options: _vm.form.presentaciones,
                        label: "codigo",
                        placeholder: "Selecciona una presentacion"
                      },
                      model: {
                        value: _vm.detalleForm.presentacionx,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "presentacionx", $$v)
                        },
                        expression: "detalleForm.presentacionx"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.presentacionx, function(
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Cantidad")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.detalleForm.cantidad_solicitada,
                        expression: "detalleForm.cantidad_solicitada",
                        modifiers: { number: true }
                      }
                    ],
                    ref: "cantidad_solicitada",
                    staticClass: "form-control",
                    attrs: { type: "number", min: "0" },
                    domProps: { value: _vm.detalleForm.cantidad_solicitada },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.detalleForm,
                          "cantidad_solicitada",
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
                    _vm._l(_vm.errorMessages.cantidad_solicitadax, function(
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
                  _vm._l(_vm.errorMessages.entrada_productos, function(
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
                      _vm._l(_vm.form.entrada_productos, function(item, index) {
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
                                    rawName: "v-model.number",
                                    value: item.codigo_presentacion,
                                    expression: "item.codigo_presentacion",
                                    modifiers: { number: true }
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
                                    value:
                                      item.entrada_presentacion.unidad_medida,
                                    expression:
                                      "item.entrada_presentacion.unidad_medida",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.entrada_presentacion.unidad_medida
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.entrada_presentacion,
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
                                    value: item.cantidad_solicitada,
                                    expression: "item.cantidad_solicitada",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number", min: "1" },
                                domProps: { value: item.cantidad_solicitada },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad_solicitada",
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
                                    value: item.entrada_presentacion.simbolo_um,
                                    expression:
                                      "item.entrada_presentacion.simbolo_um",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value: item.entrada_presentacion.simbolo_um
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.entrada_presentacion,
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
                                    value:
                                      item.entrada_presentacion
                                        .relacion_um_estandar,
                                    expression:
                                      "item.entrada_presentacion.relacion_um_estandar",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: {
                                  value:
                                    item.entrada_presentacion
                                      .relacion_um_estandar
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.entrada_presentacion,
                                      "relacion_um_estandar",
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
                  { attrs: { to: { name: "entradas" }, tag: "button" } },
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
                    staticClass: "btn btn-dark",
                    attrs: {
                      disabled: _vm.btnActionDraft !== "Guardar Borrador",
                      type: "button"
                    },
                    on: {
                      click: function($event) {
                        _vm.form.es_borrador = true
                        _vm.actualizar()
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.btnActionDraft) + "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction !== "Actualizar y Emitir",
                      type: "button"
                    },
                    on: {
                      click: function($event) {
                        _vm.form.es_borrador = false
                        _vm.actualizar()
                      }
                    }
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Actualizar Entrada")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para actualizar entrada de productos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Código entrada "),
      _c("small", [_vm._v("(Automático)")])
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
        _c("th", [_vm._v("Relación UM estandar")]),
        _vm._v(" "),
        _c("th", [_vm._v("Conversión")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Listado.vue?vue&type=template&id=3d31c47e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Listado.vue?vue&type=template&id=3d31c47e&scoped=true& ***!
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
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Administrar Entradas de productos")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Entradas")
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
              _vm._v("> Entradas")
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
                  staticClass: "btn btn-success",
                  attrs: { tag: "button", to: { name: "registrar-entrada" } }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Entrada\n        ")
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
                  _vm.obtenerEntradas()
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
                  _c("option", { attrs: { value: "codigo_entrada" } }, [
                    _vm._v("Código")
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
                      _vm.obtenerEntradas()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-search" }),
                  _vm._v(" Buscar\n        ")
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
                _vm._l(_vm.entradas, function(entrada, key) {
                  return [
                    _c("tr", { key: entrada.id_entrada }, [
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
                      _c("td", [_vm._v(_vm._s(entrada.codigo_entrada))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(entrada.entrada_tipo.descripcion))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(entrada.fecha_entrada)))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            entrada.entrada_proveedor
                              ? entrada.entrada_proveedor.nombre_comercial
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(entrada.entrada_bodega.descripcion))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        entrada.estado === 0
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-danger" },
                                [_vm._v("Cancelada")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        entrada.estado === 1
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-blue" }, [
                                _vm._v("Emitida")
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        entrada.estado === 2
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Recibida")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        entrada.estado === 99
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-grey" }, [
                                _vm._v("Borrador")
                              ])
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-center" },
                        [
                          entrada.estado === 1
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: "Recibir Entrada",
                                        expression: "'Recibir Entrada'"
                                      }
                                    ],
                                    attrs: {
                                      to: {
                                        name: "recibir-entrada",
                                        params: {
                                          id_entrada: entrada.id_entrada
                                        }
                                      },
                                      tag: "a"
                                    }
                                  },
                                  [_c("i", { staticClass: "icon-check" })]
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          entrada.estado === 99
                            ? [
                                [5, 6, 7].indexOf(
                                  Number(entrada.id_tipo_entrada)
                                ) <= 0
                                  ? [
                                      _c(
                                        "router-link",
                                        {
                                          directives: [
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value:
                                                "Actualizar Datos de Entrada",
                                              expression:
                                                "'Actualizar Datos de Entrada'"
                                            }
                                          ],
                                          attrs: {
                                            to: {
                                              name: "actualizar-entrada",
                                              params: {
                                                id_entrada: entrada.id_entrada
                                              }
                                            },
                                            tag: "a"
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "icon-pencil"
                                          })
                                        ]
                                      )
                                    ]
                                  : _vm._e()
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Mostrar Detalles de Entrada",
                                  expression: "'Mostrar Detalles de Entrada'"
                                }
                              ],
                              attrs: {
                                to: {
                                  name: "mostrar-entrada",
                                  params: { id_entrada: entrada.id_entrada }
                                },
                                tag: "a"
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
                          entrada.estado === 2
                            ? [
                                [8].indexOf(Number(entrada.id_tipo_entrada)) <=
                                  0 && entrada.productos_usados
                                  ? [
                                      _c(
                                        "a",
                                        {
                                          directives: [
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value:
                                                "Descargar Codigos de Baterías Usadas",
                                              expression:
                                                "'Descargar Codigos de Baterías Usadas'"
                                            }
                                          ],
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.descargarCodigosUsados(
                                                entrada.id_entrada
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-file-pdf-o"
                                          })
                                        ]
                                      )
                                    ]
                                  : _vm._e()
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    entrada.mostrar
                      ? _c("tr", { key: entrada.codigo_entrada }, [
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { attrs: { colspan: "8" } }, [
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
                                  _vm._l(entrada.entrada_productos, function(
                                    productosDetalle
                                  ) {
                                    return _c(
                                      "tr",
                                      {
                                        key:
                                          productosDetalle.id_entrada_producto
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
                                              productosDetalle.cantidad_solicitada
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
                                    _c(
                                      "td",
                                      {
                                        staticClass: "item-footer",
                                        attrs: { colspan: "2" }
                                      },
                                      [_vm._v(" Total Unidades")]
                                    ),
                                    _vm._v(" "),
                                    _c("td"),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "item-footer" }, [
                                      _c("strong", [
                                        _vm._v(_vm._s(entrada.tot_unidades))
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
                !_vm.entradas.length
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
            items: _vm.entradas,
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
        _c("th", [_vm._v("Código entrada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo entrada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Entrada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Proveedor")]),
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
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Código producto")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("Unidad de medida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Mostrar.vue?vue&type=template&id=0a24c9f0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Mostrar.vue?vue&type=template&id=0a24c9f0& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "panel" },
    [
      _c("div", { staticClass: "panel-heading" }, [
        _c("span", { staticClass: "panel-title" }, [
          _vm._v("Entrada Código: " + _vm._s(_vm.form.codigo_entrada))
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
      _c("div", { staticClass: "panel-body" }, [
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
                    _vm._v("Entrada No. : " + _vm._s(_vm.form.codigo_entrada))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col col-4" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.form.entrada_proveedor
                    ? [
                        _c(
                          "router-link",
                          {
                            staticStyle: { color: "#000000" },
                            attrs: {
                              to: {
                                name: "actualizar-proveedor",
                                params: { id_proveedor: _vm.form.id_proveedor }
                              },
                              target: "_blank"
                            }
                          },
                          [
                            _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm.form.entrada_proveedor.nombre_comercial
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.form.entrada_proveedor.numero_ruc)
                              )
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.form.entrada_proveedor.direccion)
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("strong", [_vm._v("Contacto Proveedor:")])
                            ]),
                            _vm._v(" "),
                            _c("pre", [
                              _vm._v(
                                _vm._s(
                                  _vm.form.entrada_proveedor.contacto_proveedor
                                )
                              )
                            ])
                          ]
                        )
                      ]
                    : [_c("span", [_vm._v("N/A")])]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col col-4" },
                [
                  _vm._m(1),
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
                        _vm._v(_vm._s(_vm.form.entrada_bodega.descripcion))
                      ]),
                      _vm._v(" "),
                      _c("br")
                    ]
                  ),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(_vm._s(_vm.form.entrada_tipo.descripcion))
                  ]),
                  _vm._v(" "),
                  _c("br")
                ],
                1
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
                                [_vm._v("Recibida")]
                              )
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Código entrada:")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.form.codigo_entrada))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Fecha Emisión:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.formatDate(_vm.form.fecha_entrada)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Fecha Recepción:")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm.form.fecha_recepcion
                              ? _vm.formatDate(_vm.form.fecha_recepcion)
                              : "N/D"
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
          _c("div", { staticClass: "document-body" }, [
            _c("table", { staticClass: "document-table" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.form.entrada_productos, function(item) {
                    return [
                      _c("tr", [
                        _c("td", { staticClass: "width-2" }, [
                          _vm._v(
                            "\n                       " +
                              _vm._s(item.codigo_producto) +
                              "\n                     "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-4" }, [
                          _c("pre", [_vm._v(_vm._s(item.descripcion_producto))])
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-2" }, [
                          _vm._v(
                            "\n                       " +
                              _vm._s(item.codigo_presentacion) +
                              "\n                     "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-1 align-center" }, [
                          _vm._v(_vm._s(item.cantidad_solicitada))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-1 align-center" }, [
                          _vm._v(_vm._s(item.cantidad_recibida))
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
                    _vm._m(4),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.total_cantidad_solicitada))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.total_cantidad_recibida))
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
              _vm._m(5)
            ])
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Proveedor:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Bodega:")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Tipo de entrada:")])])
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
          _vm._v("Cantidad Solicitada")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [
          _vm._v("Cantidad Recibida")
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [
      _c("tr", [_c("td", { attrs: { colspan: "3" } })]),
      _vm._v(" "),
      _c("tr", [_c("td", { attrs: { colspan: "3" } })])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Recibir.vue?vue&type=template&id=6c0d0fc2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Recibir.vue?vue&type=template&id=6c0d0fc2& ***!
  \********************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              { staticClass: "row" },
              [
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Tipo entrada")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.entrada_tipo.descripcion,
                          expression: "form.entrada_tipo.descripcion"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", type: "text" },
                      domProps: { value: _vm.form.entrada_tipo.descripcion },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form.entrada_tipo,
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
                      _vm._l(_vm.errorMessages.entrada_tipo, function(message) {
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
                    _vm._m(1),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.codigo_entrada,
                          expression: "form.codigo_entrada"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", type: "text" },
                      domProps: { value: _vm.form.codigo_entrada },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "codigo_entrada",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.codigo_entrada, function(
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
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.entrada_bodega.descripcion,
                          expression: "form.entrada_bodega.descripcion"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", type: "text" },
                      domProps: { value: _vm.form.entrada_bodega.descripcion },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form.entrada_bodega,
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
                      _vm._l(_vm.errorMessages.entrada_bodega, function(
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
                _c(
                  "div",
                  { staticClass: "col-sm-3 form-group" },
                  [
                    _c("label", [_vm._v("Zona de costo")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        disabled: false,
                        label: "descripcion",
                        options: _vm.zonas
                      },
                      model: {
                        value: _vm.form.entrada_zona,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "entrada_zona", $$v)
                        },
                        expression: "form.entrada_zona"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.origen, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.form.entrada_proveedor
                  ? [
                      _c("div", { staticClass: "col-sm-3" }, [
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
                                  _vm.form.entrada_proveedor.nombre_comercial,
                                expression:
                                  "form.entrada_proveedor.nombre_comercial"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { readonly: "", type: "text" },
                            domProps: {
                              value: _vm.form.entrada_proveedor.nombre_comercial
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.entrada_proveedor,
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
                              _vm.errorMessages.entrada_proveedor,
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
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha entrada")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.fecha_entrada,
                          expression: "form.fecha_entrada"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", type: "text" },
                      domProps: { value: _vm.form.fecha_entrada },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "fecha_entrada",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_entrada, function(
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
                _c("div", { staticClass: "col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "" } }, [
                        _vm._v("Fecha recepción")
                      ]),
                      _vm._v(" "),
                      _c("datepicker", {
                        attrs: {
                          format: _vm.format,
                          language: _vm.es,
                          value: new Date()
                        },
                        on: { selected: _vm.onDateSelect },
                        model: {
                          value: _vm.form.fecha_recepcionx,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "fecha_recepcionx", $$v)
                          },
                          expression: "form.fecha_recepcionx"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "ul",
                        { staticClass: "error-messages" },
                        _vm._l(_vm.errorMessages.fecha_recepcion, function(
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
                      _vm._v("Orden de compra")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.orden_compra,
                          expression: "form.orden_compra"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.orden_compra },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "orden_compra",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.orden_comra, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("No. lote")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.no_lote,
                          expression: "form.no_lote"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.no_lote },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "no_lote", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.no_lote, function(message) {
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
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Observaciones entrada")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.descripcion_entrada,
                          expression: "form.descripcion_entrada"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.descripcion_entrada },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "descripcion_entrada",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.descripcion_entrada, function(
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
                  _vm._l(_vm.errorMessages.entrada_productos, function(
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
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.entrada_productos, function(item, index) {
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
                                    "entrada_productos." + index + ".text"
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
                                    "entrada_productos." +
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
                                      item.entrada_presentacion.unidad_medida,
                                    expression:
                                      "item.entrada_presentacion.unidad_medida"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: {
                                  value: item.entrada_presentacion.unidad_medida
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.entrada_presentacion,
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
                                    "entrada_presentacion." +
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
                                    value: item.entrada_presentacion.escalar,
                                    expression:
                                      "item.entrada_presentacion.escalar"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: {
                                  value: item.entrada_presentacion.escalar
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.entrada_presentacion,
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
                                    "entrada_presentacion." + index + ".escalar"
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
                                    value: item.entrada_presentacion.simbolo_um,
                                    expression:
                                      "item.entrada_presentacion.simbolo_um"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: {
                                  value: item.entrada_presentacion.simbolo_um
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.entrada_presentacion,
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
                                    "entrada_presentacion." + index + ".escalar"
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
                                    value: item.cantidad_solicitada,
                                    expression: "item.cantidad_solicitada",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "number" },
                                domProps: { value: item.cantidad_solicitada },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad_solicitada",
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
                                    "entrada_productos." +
                                      index +
                                      ".cantidad_solicitada"
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
                                    value: item.cantidad_recibida,
                                    expression: "item.cantidad_recibida",
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
                                domProps: { value: item.cantidad_recibida },
                                on: {
                                  change: function($event) {
                                    item.cantidad_recibida = Math.max(
                                      Math.min(
                                        Math.round(item.cantidad_recibida),
                                        item.cantidad_solicitada
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
                                      "cantidad_recibida",
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
                                    "entrada_productos." +
                                      index +
                                      ".cantidad_recibida"
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
                                      item.cantidad_solicitada,
                                      item.cantidad_recibida
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
                    _vm._m(3),
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
                          _vm._v(_vm._s(_vm.total_cantidad_solicitada))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_recibida))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td")
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
                  { attrs: { to: { name: "entradas" }, tag: "button" } },
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
                      disabled: _vm.btnAction !== "Recibir Productos",
                      type: "button"
                    },
                    on: { click: _vm.confirmar }
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Recibir Entrada")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para recibir entrada de productos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Código entrada "),
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
        _c("th", [_vm._v("Cantidad Solicitada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Recibida")]),
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirCompra.vue?vue&type=template&id=6591aa40&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RecibirCompra.vue?vue&type=template&id=6591aa40& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                      _vm._v("Tipo entrada")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.tipos_entrada,
                        label: "descripcion"
                      },
                      model: {
                        value: _vm.form.entrada_tipo,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "entrada_tipo", $$v)
                        },
                        expression: "form.entrada_tipo"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.entrada_tipo, function(message) {
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
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.codigo_entrada,
                        expression: "form.codigo_entrada"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.codigo_entrada },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "codigo_entrada",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.codigo_entrada, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.bodegas, label: "descripcion" },
                      on: {
                        input: function($event) {
                          return _vm.actualizar_listado_productos()
                        }
                      },
                      model: {
                        value: _vm.form.entrada_bodega,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "entrada_bodega", $$v)
                        },
                        expression: "form.entrada_bodega"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.entrada_bodega, function(
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
                      _vm._v("Zonas de costo")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { label: "descripcion", options: _vm.zonas },
                      model: {
                        value: _vm.form.entrada_zona,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "entrada_zona", $$v)
                        },
                        expression: "form.entrada_zona"
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Proveedor")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.proveedores,
                        label: "nombre_comercial"
                      },
                      model: {
                        value: _vm.form.entrada_proveedor,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "entrada_proveedor", $$v)
                        },
                        expression: "form.entrada_proveedor"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.entrada_proveedor, function(
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
                      _vm._v("Fecha entrada")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelect }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_entrada, function(
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
                    _vm._v("Orden de compra")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.orden_compra,
                        expression: "form.orden_compra"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.orden_compra },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "orden_compra", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.orden_comra, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("No. lote")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.no_lote,
                        expression: "form.no_lote"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.no_lote },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "no_lote", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.no_lote, function(message) {
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
                      _vm._v("Fecha fabricación")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelectFab },
                      model: {
                        value: _vm.form.fecha_fabricacionx,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "fecha_fabricacionx", $$v)
                        },
                        expression: "form.fecha_fabricacionx"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_fabricacion, function(
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
                      _vm._v("Fecha vencimiento")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelectVen },
                      model: {
                        value: _vm.form.fecha_vencimientox,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "fecha_vencimientox", $$v)
                        },
                        expression: "form.fecha_vencimientox"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_vencimiento, function(
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
                    _vm._v("Observaciones entrada")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.descripcion_entrada,
                        expression: "form.descripcion_entrada"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.descripcion_entrada },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "descripcion_entrada",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.descripcion_entrada, function(
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
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.entrada_productos, function(
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
                      _vm._l(_vm.form.entrada_productos, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.descripcion_producto,
                                    expression: "item.descripcion_producto"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.descripcion_producto },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "descripcion_producto",
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
                                    "entrada_productos." +
                                      index +
                                      ".id_producto"
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
                                    value:
                                      item.entrada_presentacion.unidad_medida,
                                    expression:
                                      "item.entrada_presentacion.unidad_medida",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "text" },
                                domProps: {
                                  value: item.entrada_presentacion.unidad_medida
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item.entrada_presentacion,
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
                                    "entrada_productos." +
                                      index +
                                      ".cantidad_solicitada"
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
                                    value: item.cantidad_solicitada,
                                    expression: "item.cantidad_solicitada",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "number" },
                                domProps: { value: item.cantidad_solicitada },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad_solicitada",
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
                                    "entrada_productos." +
                                      index +
                                      ".cantidad_solicitada"
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
                                    value: item.cantidad_recibida,
                                    expression: "item.cantidad_recibida",
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
                                domProps: { value: item.cantidad_recibida },
                                on: {
                                  change: function($event) {
                                    item.cantidad_recibida = Math.max(
                                      Math.min(
                                        Math.round(item.cantidad_recibida),
                                        item.cantidad_solicitada
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
                                      "cantidad_recibida",
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
                                    "entrada_productos." +
                                      index +
                                      ".cantidad_recibida"
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
                                      item.cantidad_solicitada,
                                      item.cantidad_recibida
                                    )
                                  ) +
                                  "\n\t\t\t\t\t\t\t\t\t\t"
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
                    _vm._m(4),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "item-footer" }, [
                        _vm._v(" Total Unidades")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_solicitada))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_recibida))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td")
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
                  { attrs: { to: { name: "entradas" }, tag: "button" } },
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
                      disabled: _vm.btnAction !== "Recibir Productos",
                      type: "button"
                    },
                    on: { click: _vm.confirmar }
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Recibir Entrada")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para recibir entrada de productos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Código entrada "),
      _c("small", [_vm._v("(Automático)")])
    ])
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
        _c("th", [_vm._v("Producto")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM Presentación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Solicitada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Recibida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Diferencia")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("td", { attrs: { colspan: "4" } })])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=template&id=596be45c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=template&id=596be45c& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("Tipo entrada")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.entrada_tipo.descripcion,
                        expression: "form.entrada_tipo.descripcion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.entrada_tipo.descripcion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.entrada_tipo,
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
                    _vm._l(_vm.errorMessages.entrada_tipo, function(message) {
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
                  _vm._m(1),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.codigo_entrada,
                        expression: "form.codigo_entrada"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.codigo_entrada },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "codigo_entrada",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.codigo_entrada, function(message) {
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
                        value: _vm.form.entrada_bodega.descripcion,
                        expression: "form.entrada_bodega.descripcion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.entrada_bodega.descripcion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.entrada_bodega,
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
                    _vm._l(_vm.errorMessages.entrada_bodega, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("Proveedor")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.entrada_proveedor.nombre_comercial,
                        expression: "form.entrada_proveedor.nombre_comercial"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: {
                      value: _vm.form.entrada_proveedor.nombre_comercial
                    },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.entrada_proveedor,
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
                    _vm._l(_vm.errorMessages.entrada_proveedor, function(
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
                    _vm._v("Fecha entrada")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.fecha_entrada,
                        expression: "form.fecha_entrada"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.fecha_entrada },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "fecha_entrada", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.fecha_entrada, function(message) {
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
                  _vm._l(_vm.errorMessages.entrada_productos, function(
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
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.entrada_productos, function(item, index) {
                        return [
                          _c("tr", [
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.descripcion_producto,
                                    expression: "item.descripcion_producto"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "" },
                                domProps: { value: item.descripcion_producto },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "descripcion_producto",
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
                                    "entrada_productos." +
                                      index +
                                      ".id_producto"
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
                                    value: item.cantidad_solicitada,
                                    expression: "item.cantidad_solicitada",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { disabled: "", type: "number" },
                                domProps: { value: item.cantidad_solicitada },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      item,
                                      "cantidad_solicitada",
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
                                    "entrada_productos." +
                                      index +
                                      ".cantidad_solicitada"
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
                                    value: item.cantidad_recibida,
                                    expression: "item.cantidad_recibida",
                                    modifiers: { number: true }
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  disabled:
                                    item.bodega_producto.producto_simple
                                      .tipo_producto === 3,
                                  type: "number"
                                },
                                domProps: { value: item.cantidad_recibida },
                                on: {
                                  change: function($event) {
                                    item.cantidad_recibida = Math.max(
                                      Math.min(
                                        Math.round(item.cantidad_recibida),
                                        item.cantidad_solicitada
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
                                      "cantidad_recibida",
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
                                    "entrada_productos." +
                                      index +
                                      ".cantidad_recibida"
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
                                      item.cantidad_solicitada,
                                      item.cantidad_recibida
                                    )
                                  ) +
                                  "\n\t\t\t\t\t\t\t\t\t"
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
                      _c("td", { staticClass: "item-footer" }, [
                        _vm._v(" Total Unidades")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_solicitada))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "item-footer" }, [
                        _c("strong", [
                          _vm._v(_vm._s(_vm.total_cantidad_recibida))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _vm.form.contiene_baterias
              ? [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-3" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Código Garantía Bateria")
                          ]),
                          _vm._v(" "),
                          _c("typeahead", {
                            ref: "bateria",
                            staticStyle: { width: "100%" },
                            attrs: {
                              initial: _vm.detalleForm.productox,
                              trim: 80,
                              url: _vm.bateriasBusquedaURL
                            },
                            on: { input: _vm.seleccionarProducto }
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "error-messages" },
                            _vm._l(_vm.errorMessages.productox, function(
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
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "" } }, [_vm._v("Estado")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.detalleForm.fecha_activacion,
                              expression: "detalleForm.fecha_activacion"
                            }
                          ],
                          ref: "fecha_activacion",
                          staticClass: "form-control",
                          attrs: { readonly: "" },
                          domProps: { value: _vm.detalleForm.fecha_activacion },
                          on: {
                            keyup: function($event) {
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
                              return _vm.fechaActivacionEvento($event)
                            },
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
                          [_vm._v("Agregar Batería")]
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
                        _vm._m(5),
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
                                          value: item.productox.descripcion,
                                          expression:
                                            "item.productox.descripcion"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { disabled: "" },
                                      domProps: {
                                        value: item.productox.descripcion
                                      },
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
                                          "detalle_baterias." + index + ".text"
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
                  { attrs: { to: { name: "entradas" }, tag: "button" } },
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
                      disabled: _vm.btnAction !== "Recibir Productos",
                      type: "button"
                    },
                    on: { click: _vm.recibir }
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
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Recibir Entrada")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para recibir entrada de productos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "" } }, [
      _vm._v("Código entrada "),
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
        _c("th", [_vm._v("Cantidad Solicitada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Recibida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Diferencia")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Registrar.vue?vue&type=template&id=d2fbdec6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/Registrar.vue?vue&type=template&id=d2fbdec6& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
                      _vm._v("Tipo entrada")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.tipos_entrada,
                        label: "descripcion"
                      },
                      model: {
                        value: _vm.form.tipo_entrada,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "tipo_entrada", $$v)
                        },
                        expression: "form.tipo_entrada"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.tipo_entrada, function(message) {
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
                      _vm._l(_vm.errorMessages.zona, function(message) {
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
                    _c("label", { attrs: { for: "" } }, [_vm._v("Proveedor")]),
                    _vm._v(" "),
                    _c("typeahead", {
                      staticStyle: { width: "100%" },
                      attrs: {
                        initial: _vm.form.proveedor,
                        trim: 80,
                        url: _vm.proveedoresBusquedaURL
                      },
                      on: { input: _vm.seleccionarProveedor }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.proveedor, function(message) {
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
                      _vm._v("Fecha entrada")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelect },
                      model: {
                        value: _vm.form.fecha_entradax,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "fecha_entradax", $$v)
                        },
                        expression: "form.fecha_entradax"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_entrada, function(
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
                    _vm._v("Orden de compra")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.orden_compra,
                        expression: "form.orden_compra"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.orden_compra },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "orden_compra", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.orden_comra, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v("No. lote")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.no_lote,
                        expression: "form.no_lote"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.no_lote },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "no_lote", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.no_lote, function(message) {
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
                      _vm._v("Fecha fabricación")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelectFab },
                      model: {
                        value: _vm.form.fecha_fabricacionx,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "fecha_fabricacionx", $$v)
                        },
                        expression: "form.fecha_fabricacionx"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_fabricacion, function(
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
                      _vm._v("Fecha vencimiento")
                    ]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        language: _vm.es,
                        value: new Date()
                      },
                      on: { selected: _vm.onDateSelectVen },
                      model: {
                        value: _vm.form.fecha_vencimientox,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "fecha_vencimientox", $$v)
                        },
                        expression: "form.fecha_vencimientox"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.fecha_vencimiento, function(
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
                    _vm._v("Observaciones entrada")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.descripcion_entrada,
                        expression: "form.descripcion_entrada"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.descripcion_entrada },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "descripcion_entrada",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.descripcion_entrada, function(
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
                    _c("v-select", {
                      attrs: {
                        options: _vm.productos,
                        label: "text",
                        placeholder: "Selecciona un producto"
                      },
                      on: { change: _vm.cargarPresentaciones },
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Presentaciones de producto")
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "presentacionx",
                      attrs: {
                        options: _vm.form.presentaciones,
                        label: "codigo",
                        placeholder: "Selecciona una presentacion"
                      },
                      model: {
                        value: _vm.detalleForm.presentacionx,
                        callback: function($$v) {
                          _vm.$set(_vm.detalleForm, "presentacionx", $$v)
                        },
                        expression: "detalleForm.presentacionx"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.presentacionx, function(
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
                    attrs: { type: "number", min: "0" },
                    domProps: { value: _vm.detalleForm.cantidad },
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
                        return _vm.cambiarFocoCantidad($event)
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
                                    rawName: "v-model.number",
                                    value: item.presentacionx.codigo,
                                    expression: "item.presentacionx.codigo",
                                    modifiers: { number: true }
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
                                attrs: { type: "number", min: "1" },
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
                          _vm._v("K " + _vm._s(_vm.total_conversion))
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
                  { attrs: { tag: "button", to: { name: "entradas" } } },
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
                    staticClass: "btn btn-dark",
                    attrs: {
                      disabled: _vm.btnActionDraft !== "Guardar Borrador",
                      type: "button"
                    },
                    on: {
                      click: function($event) {
                        _vm.form.es_borrador = true
                        _vm.registrar()
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.btnActionDraft) + "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction !== "Emitir",
                      type: "button"
                    },
                    on: {
                      click: function($event) {
                        _vm.form.es_borrador = false
                        _vm.registrar()
                      }
                    }
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Crear Nueva Entrada")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar entrada de productos")
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
        _c("th", [_vm._v("Conversión")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=template&id=56c00bc5&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=template&id=56c00bc5& ***!
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
        _c("div", { staticClass: "content-box" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Código Entrada")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.entrada_original.codigo_entrada,
                      expression: "form.entrada_original.codigo_entrada"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled:
                      _vm.btnActionBuscar != "Buscar Entrada" ? true : false,
                    type: "text"
                  },
                  domProps: { value: _vm.form.entrada_original.codigo_entrada },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.entrada_original,
                        "codigo_entrada",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.codigo_entrada_org, function(
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
              _c(
                "div",
                { staticClass: "form-group", staticStyle: { padding: "7px" } },
                [
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: {
                        disabled:
                          _vm.btnActionBuscar != "Buscar Entrada" ? true : false
                      },
                      on: {
                        click: function($event) {
                          return _vm.obtenerEntradaPorCodigo(
                            _vm.form.entrada_original.codigo_entrada
                          )
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.btnActionBuscar))]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: {
                        disabled:
                          _vm.btnActionBuscar != "Buscar Entrada" ? false : true
                      },
                      on: { click: _vm.restaurarFormulario }
                    },
                    [_vm._v("X")]
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              !_vm.form.entrada_original.codigo_entrada
                ? _c("div", [_vm._m(1), _vm._v(" "), _c("hr")])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("Bodega")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.entrada_original.entrada_bodega.nombre,
                      expression: "form.entrada_original.entrada_bodega.nombre"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: {
                    value: _vm.form.entrada_original.entrada_bodega.nombre
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.entrada_original.entrada_bodega,
                        "nombre",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.id_bodega, function(message) {
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Proveedor")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value:
                        _vm.form.entrada_original.entrada_proveedor
                          .nombre_proveedor,
                      expression:
                        "form.entrada_original.entrada_proveedor.nombre_proveedor"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: {
                    value:
                      _vm.form.entrada_original.entrada_proveedor
                        .nombre_proveedor
                  },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.entrada_original.entrada_proveedor,
                        "nombre_proveedor",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.id_proveedor, function(message) {
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Código entrada")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.entrada_original.codigo_entrada,
                      expression: "form.entrada_original.codigo_entrada"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.entrada_original.codigo_entrada },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.entrada_original,
                        "codigo_entrada",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.codigo_entrada, function(message) {
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
                _c("label", { attrs: { for: "" } }, [_vm._v("Fecha entrada")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.entrada_original.fecha_entrada,
                      expression: "form.entrada_original.fecha_entrada"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { disabled: "", type: "text" },
                  domProps: { value: _vm.form.entrada_original.fecha_entrada },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.entrada_original,
                        "fecha_entrada",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.fecha_entrada, function(message) {
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
                _vm._l(
                  _vm.errorMessages["entrada_original.entradas_productos"],
                  function(message) {
                    return _c("li", {
                      key: message,
                      domProps: { textContent: _vm._s(message) }
                    })
                  }
                ),
                0
              ),
              _vm._v(" "),
              _c(
                "table",
                { staticClass: "table table-striped table-bordered" },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(
                        _vm.form.entrada_original.entradas_productos,
                        function(item, index) {
                          return [
                            _c("tr", { key: item.id_producto }, [
                              _c("td", { staticStyle: { width: "25%" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.descripcion_producto,
                                      expression: "item.descripcion_producto"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { readonly: "", type: "text" },
                                  domProps: {
                                    value: item.descripcion_producto
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "descripcion_producto",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { width: "20%" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.unidad_medida,
                                      expression: "item.unidad_medida"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { readonly: "", type: "text" },
                                  domProps: { value: item.unidad_medida },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "unidad_medida",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { width: "15%" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.precio_unitario,
                                      expression: "item.precio_unitario"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { readonly: "", type: "number" },
                                  domProps: { value: item.precio_unitario },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "precio_unitario",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { width: "10%" } }, [
                                _c(
                                  "span",
                                  { staticClass: "form-control align-right" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        Number(
                                          item.cantidad -
                                            Number(item.cantidad_faltante)
                                        )
                                          .toFixed(2)
                                          .replace(
                                            /(\d)(?=(\d{3})+(?!\d))/g,
                                            "$1,"
                                          )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticStyle: { width: "10%" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.cantidad_dev,
                                      expression: "item.cantidad_dev"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number" },
                                  domProps: { value: item.cantidad_dev },
                                  on: {
                                    change: function($event) {
                                      item.cantidad_dev = Math.max(
                                        Math.min(
                                          Math.round(item.cantidad_dev),
                                          item.cantidad - item.cantidad_faltante
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
                                        "cantidad_dev",
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
                                      "entrada_original.entradas_productos." +
                                        index +
                                        ".cantidad_dev"
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
                              _c("td", { staticStyle: { width: "18%" } }, [
                                _c(
                                  "span",
                                  { staticClass: "form-control align-right" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        Number(
                                          item.cantidad_dev *
                                            Number(item.precio_unitario)
                                        )
                                          .toFixed(2)
                                          .replace(
                                            /(\d)(?=(\d{3})+(?!\d))/g,
                                            "$1,"
                                          )
                                      )
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
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
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr")
                          ]
                        }
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c("td", {
                        staticStyle: { width: "50%" },
                        attrs: { colspan: "4" }
                      }),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "1" } },
                        [_vm._v("Sub Total")]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "1" } },
                        [
                          _c(
                            "span",
                            { staticClass: "item-dark form-control" },
                            [
                              _vm._v(
                                "  " +
                                  _vm._s(_vm._f("formatMoney")(_vm.subTotal, 2))
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", {
                        staticClass: "item-empty",
                        attrs: { colspan: "4" }
                      }),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "item-footer", attrs: { colspan: "1" } },
                        [
                          _c(
                            "strong",
                            { staticClass: "item-dark form-control" },
                            [
                              _vm._v(
                                _vm._s(_vm._f("formatMoney")(_vm.subTotal, 2))
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "content-box-footer text-right" },
            [
              _c(
                "router-link",
                { attrs: { tag: "button", to: { name: "entradas" } } },
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
                    type: "button",
                    disabled: _vm.btnAction != "Registrar" ? true : false
                  },
                  on: { click: _vm.crearEntradaPorDevolucion }
                },
                [_vm._v(_vm._s(_vm.btnAction))]
              )
            ],
            1
          )
        ])
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
        _vm._v("Registrar Nueva Devolución")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar Devolución de compra")
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
          "Se requiere que seleccione una entrada válida, para realizar la devolución."
        )
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
        _c("th", [_vm._v("Unidad medida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Precio Unitario")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Recibida")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad devuelta")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "item-footer", attrs: { colspan: "1" } }, [
      _c("strong", [_vm._v("Total")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/dist/locale/translations/es.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return new(function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.language=e,this.months=n,this.monthsAbbr=r,this.days=o,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}var n,r,o;return n=t,(r=[{key:"language",get:function(){return this._language},set:function(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e}},{key:"months",get:function(){return this._months},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 months for ".concat(this.language," language"));this._months=e}},{key:"monthsAbbr",get:function(){return this._monthsAbbr},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 abbreviated months for ".concat(this.language," language"));this._monthsAbbr=e}},{key:"days",get:function(){return this._days},set:function(e){if(7!==e.length)throw new RangeError("There must be 7 days for ".concat(this.language," language"));this._days=e}}])&&e(n.prototype,r),o&&e(n,o),t}())("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"])});


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

/***/ "./resources/app/api/bodegas.js":
/*!**************************************!*\
  !*** ./resources/app/api/bodegas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodasBodegas: function obtenerTodasBodegas(cb, errorCb) {
    axios.get('bodegas/obtener-bodegas-todas').then(function (response) {
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
    axios.post('bodegas/nuevo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBodegasConsignacion: function obtenerBodegasConsignacion(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-consignacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTodasBodegasProductos: function obtenerTodasBodegasProductos(cb, errorCb) {
    axios.get('bodegas/obtener-bodegas-productos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarProductosGarantia: function buscarProductosGarantia(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-productos-garantia', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarProductosBodega: function buscarProductosBodega(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-productos-venta', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarProductosBodegaObsoletos: function buscarProductosBodegaObsoletos(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-productos-obsoletos', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarProductosBodegaRecuperados: function buscarProductosBodegaRecuperados(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-productos-recuperados', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarProductosConsignacionCliente: function buscarProductosConsignacionCliente(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodegas-productos-consignacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTodasBodegasProductosVenta: function obtenerTodasBodegasProductosVenta(cb, errorCb) {
    axios.get('bodegas/obtener-bodegas-productos-venta').then(function (response) {
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
    axios.post('bodegas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBodega: function obtenerBodega(data, cb, errorCb) {
    axios.post('bodegas/obtener-bodega', data).then(function (response) {
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
    axios.post('bodegas/registrar', data).then(function (response) {
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
    axios.put('bodegas/actualizar', data).then(function (response) {
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
    axios.put('bodegas/desactivar', data).then(function (response) {
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
    axios.put('bodegas/activar', data).then(function (response) {
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

/***/ "./resources/app/api/entradas.js":
/*!***************************************!*\
  !*** ./resources/app/api/entradas.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerEntradas: function obtenerEntradas(data, cb, errorCb) {
    axios.post('entradas/obtener', data).then(function (response) {
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
    axios.post('entradas/registrar', data).then(function (response) {
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
    axios.put('entradas/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  recibir: function recibir(data, cb, errorCb) {
    axios.put('entradas/recibir', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  recibirCompra: function recibirCompra(data, cb, errorCb) {
    axios.put('entradas/recibir-compra', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  recibirTraslado: function recibirTraslado(data, cb, errorCb) {
    axios.put('entradas/recibir-traslado', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  crearEntradaPorDevolucion: function crearEntradaPorDevolucion(data, cb, errorCb) {
    axios.post('entradas/crear-entrada-devolucion', data).then(function (response) {
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
    axios.post('entradas/obtener-entrada', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNumeroEntrada: function obtenerNumeroEntrada(cb, errorCb) {
    axios.get('entradas/obtener-numero-entrada').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerEntradaPorCodigo: function obtenerEntradaPorCodigo(data, cb, errorCb) {
    axios.get('entradas/obtener-entrada-por-codigo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cambiarEstado: function cambiarEstado(data, cb, errorCb) {
    axios.put('entradas/cambiar-estado', data).then(function (response) {
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

/***/ "./resources/app/api/productos.js":
/*!****************************************!*\
  !*** ./resources/app/api/productos.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  buscarProductoVenta: function buscarProductoVenta(data, cb, errorCb) {
    axios.post('productos/buscar-bodega-venta', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerProductos: function obtenerProductos(data, cb, errorCb) {
    axios.post('productos/obtener-productos', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerProductosBodega: function obtenerProductosBodega(data, cb, errorCb) {
    axios.post('productos/obtener-productos-bodega', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerProductosValidos: function obtenerProductosValidos(cb, errorCb) {
    axios.get('productos/obtener-productos-validos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerProducto: function obtenerProducto(data, cb, errorCb) {
    axios.post('productos/obtener-producto', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCodigoProducto: function obtenerCodigoProducto(data, cb, errorCb) {
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
  registrarProducto: function registrarProducto(data, cb, errorCb) {
    axios.post('productos/registrarPS', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarProducto: function actualizarProducto(data, cb, errorCb) {
    axios.put('productos/actualizarPS', data).then(function (response) {
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
  nuevo: function nuevo(data, cb, errorCb) {
    axios.post('productos/nuevo-producto-servicio', data).then(function (response) {
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

/***/ "./resources/app/api/tipo_entrada.js":
/*!*******************************************!*\
  !*** ./resources/app/api/tipo_entrada.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodosTiposEntrada: function obtenerTodosTiposEntrada(cb, errorCb) {
    axios.get('tipo-entrada/obtener-tipos-entrada-todos').then(function (response) {
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
    axios.post('tipo-entrada/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTipoEntrada: function obtenerTipoEntrada(data, cb, errorCb) {
    axios.post('tipo-entrada/obtener-tipo-entrada', data).then(function (response) {
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
    axios.post('tipo-entrada/registrar', data).then(function (response) {
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
    axios.put('tipo-entrada/actualizar', data).then(function (response) {
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
    axios.put('tipo-entrada/desactivar', data).then(function (response) {
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
    axios.put('tipo-entrada/activar', data).then(function (response) {
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

/***/ "./resources/app/assets/images/block50.gif":
/*!*************************************************!*\
  !*** ./resources/app/assets/images/block50.gif ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/block50.gif?a75e3729ca58e29435a37b05f314fe5c";

/***/ }),

/***/ "./resources/app/components/entradas/Actualizar.vue":
/*!**********************************************************!*\
  !*** ./resources/app/components/entradas/Actualizar.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_569c49b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=569c49b0& */ "./resources/app/components/entradas/Actualizar.vue?vue&type=template&id=569c49b0&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/entradas/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/entradas/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_569c49b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_569c49b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/entradas/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/entradas/Actualizar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/app/components/entradas/Actualizar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/entradas/Actualizar.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/app/components/entradas/Actualizar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Actualizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/entradas/Actualizar.vue?vue&type=template&id=569c49b0&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/entradas/Actualizar.vue?vue&type=template&id=569c49b0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_569c49b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=569c49b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Actualizar.vue?vue&type=template&id=569c49b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_569c49b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_569c49b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/entradas/Listado.vue":
/*!*******************************************************!*\
  !*** ./resources/app/components/entradas/Listado.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_3d31c47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=3d31c47e&scoped=true& */ "./resources/app/components/entradas/Listado.vue?vue&type=template&id=3d31c47e&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/entradas/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_3d31c47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true& */ "./resources/app/components/entradas/Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_3d31c47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_3d31c47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d31c47e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/entradas/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/entradas/Listado.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/app/components/entradas/Listado.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/entradas/Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/app/components/entradas/Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d31c47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Listado.vue?vue&type=style&index=0&id=3d31c47e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d31c47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d31c47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d31c47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d31c47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_3d31c47e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/entradas/Listado.vue?vue&type=template&id=3d31c47e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/entradas/Listado.vue?vue&type=template&id=3d31c47e&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_3d31c47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=3d31c47e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Listado.vue?vue&type=template&id=3d31c47e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_3d31c47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_3d31c47e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/entradas/Mostrar.vue":
/*!*******************************************************!*\
  !*** ./resources/app/components/entradas/Mostrar.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mostrar_vue_vue_type_template_id_0a24c9f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=template&id=0a24c9f0& */ "./resources/app/components/entradas/Mostrar.vue?vue&type=template&id=0a24c9f0&");
/* harmony import */ var _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=script&lang=js& */ "./resources/app/components/entradas/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mostrar_vue_vue_type_template_id_0a24c9f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mostrar_vue_vue_type_template_id_0a24c9f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/entradas/Mostrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/entradas/Mostrar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/app/components/entradas/Mostrar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/entradas/Mostrar.vue?vue&type=template&id=0a24c9f0&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/entradas/Mostrar.vue?vue&type=template&id=0a24c9f0& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_0a24c9f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=template&id=0a24c9f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Mostrar.vue?vue&type=template&id=0a24c9f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_0a24c9f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_0a24c9f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/entradas/Recibir.vue":
/*!*******************************************************!*\
  !*** ./resources/app/components/entradas/Recibir.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Recibir_vue_vue_type_template_id_6c0d0fc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Recibir.vue?vue&type=template&id=6c0d0fc2& */ "./resources/app/components/entradas/Recibir.vue?vue&type=template&id=6c0d0fc2&");
/* harmony import */ var _Recibir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recibir.vue?vue&type=script&lang=js& */ "./resources/app/components/entradas/Recibir.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Recibir_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Recibir.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/entradas/Recibir.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Recibir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Recibir_vue_vue_type_template_id_6c0d0fc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Recibir_vue_vue_type_template_id_6c0d0fc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/entradas/Recibir.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/entradas/Recibir.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/app/components/entradas/Recibir.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Recibir.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Recibir.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/entradas/Recibir.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/entradas/Recibir.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Recibir.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Recibir.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/entradas/Recibir.vue?vue&type=template&id=6c0d0fc2&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/entradas/Recibir.vue?vue&type=template&id=6c0d0fc2& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_template_id_6c0d0fc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Recibir.vue?vue&type=template&id=6c0d0fc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Recibir.vue?vue&type=template&id=6c0d0fc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_template_id_6c0d0fc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recibir_vue_vue_type_template_id_6c0d0fc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/entradas/RecibirCompra.vue":
/*!*************************************************************!*\
  !*** ./resources/app/components/entradas/RecibirCompra.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecibirCompra_vue_vue_type_template_id_6591aa40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecibirCompra.vue?vue&type=template&id=6591aa40& */ "./resources/app/components/entradas/RecibirCompra.vue?vue&type=template&id=6591aa40&");
/* harmony import */ var _RecibirCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecibirCompra.vue?vue&type=script&lang=js& */ "./resources/app/components/entradas/RecibirCompra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RecibirCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecibirCompra.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/entradas/RecibirCompra.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecibirCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecibirCompra_vue_vue_type_template_id_6591aa40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecibirCompra_vue_vue_type_template_id_6591aa40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/entradas/RecibirCompra.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/entradas/RecibirCompra.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/entradas/RecibirCompra.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecibirCompra.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirCompra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/entradas/RecibirCompra.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/entradas/RecibirCompra.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecibirCompra.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirCompra.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/entradas/RecibirCompra.vue?vue&type=template&id=6591aa40&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/entradas/RecibirCompra.vue?vue&type=template&id=6591aa40& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_template_id_6591aa40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecibirCompra.vue?vue&type=template&id=6591aa40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirCompra.vue?vue&type=template&id=6591aa40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_template_id_6591aa40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirCompra_vue_vue_type_template_id_6591aa40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/entradas/RecibirTraslado.vue":
/*!***************************************************************!*\
  !*** ./resources/app/components/entradas/RecibirTraslado.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecibirTraslado_vue_vue_type_template_id_596be45c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecibirTraslado.vue?vue&type=template&id=596be45c& */ "./resources/app/components/entradas/RecibirTraslado.vue?vue&type=template&id=596be45c&");
/* harmony import */ var _RecibirTraslado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecibirTraslado.vue?vue&type=script&lang=js& */ "./resources/app/components/entradas/RecibirTraslado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RecibirTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecibirTraslado.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/entradas/RecibirTraslado.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecibirTraslado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecibirTraslado_vue_vue_type_template_id_596be45c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecibirTraslado_vue_vue_type_template_id_596be45c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/entradas/RecibirTraslado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/entradas/RecibirTraslado.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/entradas/RecibirTraslado.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecibirTraslado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/entradas/RecibirTraslado.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/entradas/RecibirTraslado.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecibirTraslado.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/entradas/RecibirTraslado.vue?vue&type=template&id=596be45c&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/entradas/RecibirTraslado.vue?vue&type=template&id=596be45c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_template_id_596be45c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecibirTraslado.vue?vue&type=template&id=596be45c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RecibirTraslado.vue?vue&type=template&id=596be45c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_template_id_596be45c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecibirTraslado_vue_vue_type_template_id_596be45c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/entradas/Registrar.vue":
/*!*********************************************************!*\
  !*** ./resources/app/components/entradas/Registrar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_d2fbdec6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=d2fbdec6& */ "./resources/app/components/entradas/Registrar.vue?vue&type=template&id=d2fbdec6&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/entradas/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/entradas/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_d2fbdec6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_d2fbdec6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/entradas/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/entradas/Registrar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/app/components/entradas/Registrar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/entradas/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/entradas/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/entradas/Registrar.vue?vue&type=template&id=d2fbdec6&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/entradas/Registrar.vue?vue&type=template&id=d2fbdec6& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_d2fbdec6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=d2fbdec6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/Registrar.vue?vue&type=template&id=d2fbdec6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_d2fbdec6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_d2fbdec6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/entradas/RegistrarDevolucion.vue":
/*!*******************************************************************!*\
  !*** ./resources/app/components/entradas/RegistrarDevolucion.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrarDevolucion_vue_vue_type_template_id_56c00bc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrarDevolucion.vue?vue&type=template&id=56c00bc5& */ "./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=template&id=56c00bc5&");
/* harmony import */ var _RegistrarDevolucion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrarDevolucion.vue?vue&type=script&lang=js& */ "./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegistrarDevolucion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrarDevolucion_vue_vue_type_template_id_56c00bc5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrarDevolucion_vue_vue_type_template_id_56c00bc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/entradas/RegistrarDevolucion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarDevolucion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=template&id=56c00bc5&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=template&id=56c00bc5& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion_vue_vue_type_template_id_56c00bc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrarDevolucion.vue?vue&type=template&id=56c00bc5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/entradas/RegistrarDevolucion.vue?vue&type=template&id=56c00bc5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion_vue_vue_type_template_id_56c00bc5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrarDevolucion_vue_vue_type_template_id_56c00bc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);