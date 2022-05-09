(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["requisas"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Autorizar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Autorizar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_requisas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/requisas */ "./resources/app/api/requisas.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      form: {
        codigo_requisa: "",
        descripcion_requisa: "",
        fecha_solicitud: moment(new Date()).format("YYYY-MM-DD"),
        requisa_trabajador: {},
        requisa_proveedor: {},
        requisa_sucursal: {},
        requisa_area: {},
        requisa_bodega: {},
        requisa_productos: []
      },
      btnAction: "Autorizar",
      btnActionAnular: "Anular",
      errorMessages: []
    };
  },
  computed: {
    total_cantidad_solicitada: function total_cantidad_solicitada() {
      return this.form.requisa_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_solicitada);
      }, 0);
    },
    total_cantidad_autorizada: function total_cantidad_autorizada() {
      return this.form.requisa_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_autorizada);
      }, 0);
    },
    total_subt: function total_subt() {
      return this.form.requisa_productos.reduce(function (carry, item) {
        return 0; //(carry + Number(item.cantidad_solicitada.toFixed(2))*Number(item.precio_unitario.toFixed(2)));
      }, 0);
    },
    gran_total: function gran_total() {
      return this.form.requisa_productos.reduce(function (carry, item) {
        return 0; //(carry + Number(item.cantidad_solicitada.toFixed(2))*Number(item.precio_unitario.toFixed(2)));
      }, 0);
    }
  },
  methods: {
    obtenerRequisa: function obtenerRequisa() {
      var self = this;
      _api_requisas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerRequisa({
        id_requisa: this.$route.params.id_requisa
      }, function (data) {
        self.form = data.requisa;
      });
      /*if(self.form.salida_bodega.productos_bodega){
                  self.productos = [];
                  self.form.salida_bodega.productos_bodega.forEach((bodega_producto, key) => {
                      self.productos.push({
                          codigo_sistema: bodega_producto.producto.codigo_sistema,
                          costo_promedio:  Number(bodega_producto.producto.costo_promedio),
                          descripcion:  bodega_producto.producto.descripcion,
                          id_producto:  bodega_producto.producto.id_producto,
                          id_bodega_producto:  self.form.salida_bodega.productos_bodega[key].id_bodega_producto,
                          nombre_comercial:  bodega_producto.producto.nombre_comercial,
                          cantidad_disponible: Number(self.form.salida_bodega.productos_bodega[key].cantidad),
                          unidad_medida: bodega_producto.producto.unidad_medida,
                      });
                  });
                  }*/
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad_solicitada)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    onDateSelect: function onDateSelect(date) {
      //console.log(date); //
      this.form.fecha_solicitud = moment(date).format("YYYY-MM-DD"); //
    },
    seleccionarTrabajador: function seleccionarTrabajador(e) {
      var trabajadorP = e.target.value;
      var self = this;
      self.form.requisa_trabajador = trabajadorP;
    },
    seleccionarProveedor: function seleccionarProveedor(e) {
      var proveedorP = e.target.value;
      var self = this;
      self.form.requisa_proveedor = proveedorP;
    },
    seleccionarSucursal: function seleccionarSucursal(e) {
      var sucursalP = e.target.value;
      var self = this;
      self.form.requisa_sucursal = sucursalP;
    },
    seleccionarArea: function seleccionarArea(e) {
      var areaP = e.target.value;
      var self = this;
      self.form.requisa_area = areaP;
    },
    seleccionarBodega: function seleccionarBodega(e) {
      var bodegaP = e.target.value;
      var self = this;
      self.form.requisa_bodega = bodegaP;
      self.form.requisa_productos = [];
      self.detalleForm.productox = {};
    },
    cargar_detalles_producto: function cargar_detalles_producto(e) {
      var productoP = e.target.value;
      var self = this;
      self.detalleForm.productox = productoP;
      if (self.detalleForm.productox) self.detalleForm.cantidad = 0;
      self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
    },

    /*obtenerProductosBodega() {
                 var self = this;
                 self.productos = [];
                  self.form.salida_bodega.productos_bodega.forEach((bodega_producto, key) => {
                     self.productos.push({
                         codigo_sistema: bodega_producto.producto.codigo_sistema,
                         costo_promedio:  Number(bodega_producto.producto.costo_promedio),
                         descripcion:  bodega_producto.producto.descripcion,
                         id_producto:  bodega_producto.producto.id_producto,
                         id_bodega_producto:  self.form.salida_bodega.productos_bodega[key].id_bodega_producto,
                         nombre_comercial:  bodega_producto.producto.nombre_comercial,
                         cantidad_disponible: Number(self.form.salida_bodega.productos_bodega[key].cantidad),
                         unidad_medida: bodega_producto.producto.unidad_medida,
                     });
                  });
              },*/
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        if (self.detalleForm.cantidad > 0 && self.detalleForm.precio_unitario > 0) {
          var i = 0;
          var keyx = 0;

          if (self.form.requisa_productos) {
            self.form.requisa_productos.forEach(function (productox, key) {
              if (self.detalleForm.productox.id_bodega_producto === productox.productox.id_bodega_producto) {
                i++;
                keyx = key;
              }
            });
          }

          if (i === 0) {
            self.form.requisa_productos.push({
              productox: self.detalleForm.productox,
              cantidad_solicitada: self.detalleForm.cantidad,
              precio_unitario: self.detalleForm.precio_unitario,
              subtotal: 0,
              total: 0
            });
          } else {
            var nuevo_total = self.form.requisa_productos[keyx].cantidad_solicitada + self.detalleForm.cantidad;

            if (nuevo_total <= self.form.requisa_productos[keyx].cantidad_disponible) {
              self.form.requisa_productos[keyx].cantidad_solicitada = self.form.requisa_productos[keyx].cantidad + self.detalleForm.cantidad;
            } else {
              self.form.requisa_productos[keyx].cantidad_solicitada = self.form.requisa_productos[keyx].productox.cantidad_disponible;
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
      if (this.form.requisa_productos.length >= 1) {
        this.form.requisa_productos.splice(index, 1);
      } else {
        this.form.requisa_productos = [];
      }
    },
    autorizar: function autorizar() {
      var _this = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.btnActionAnular = "Registrando, espere....";
      self.$swal.fire({
        title: 'Esta seguro de autorizar esta solicitud de requisa?',
        text: "Esta acción no se puede deshacer",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _api_requisas__WEBPACK_IMPORTED_MODULE_0__["default"].autorizar(self.form, function (data) {
            _this.$swal.fire('Requisa Autorizada!', 'La Requisa fue Autorizada correctamente.', 'success');

            _this.$router.push({
              name: "requisas"
            });
          }, function (err) {
            self.errorMessages = err;
            self.btnAction = "Autorizar";
            self.btnActionAnular = "Anular";
          });
        } else {
          self.btnAction = "Autorizar";
          self.btnActionAnular = "Anular";
        }
      });
    },
    anular: function anular() {
      var _this2 = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.btnActionAnular = "Registrando, espere....";
      self.$swal.fire({
        title: 'Esta seguro de anular esta solicitud de requisa?',
        text: "Esta acción no se puede deshacer",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, anular',
        cancelButtonText: 'Regresar'
      }).then(function (result) {
        if (result.value) {
          _api_requisas__WEBPACK_IMPORTED_MODULE_0__["default"].cancelar(self.form, function (data) {
            _this2.$swal.fire('Solicitud de Requisa Anulada!', 'La Requisa fue Anulada correctamente.', 'success');

            _this2.$router.push({
              name: "requisas"
            });
          }, function (err) {
            self.errorMessages = err;
            self.btnAction = "Autorizar";
            self.btnActionAnular = "Anular";
          });
        } else {
          self.btnAction = "Autorizar";
          self.btnActionAnular = "Anular";
        }
      });
    }
  },
  mounted: function mounted() {
    this.obtenerRequisa();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Listado.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Listado.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_requisas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/requisas */ "./resources/app/api/requisas.js");
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
 //import Pagination from "../layout/Pagination";


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
          field: "codigo_requisa",
          value: ""
        }
      },
      requisas: [],
      total: 0
    };
  },
  methods: {
    mostrarProductos: function mostrarProductos(key) {
      if (this.requisas[key].mostrar) {
        this.requisas[key].mostrar = 0;
      } else {
        this.requisas[key].mostrar = 1;
      }
    },
    obtenerRequisas: function obtenerRequisas() {
      var self = this;
      self.loading = true;
      _api_requisas__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerRequisas(self.filter, function (data) {
        data.rows.forEach(function (requisas, key) {
          data.rows[key].mostrar = 0;
        });
        self.requisas = data.rows;
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
      this.obtenerRequisas();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerRequisas();
    }
  },

  /*components: {
    pagination: Pagination
  },*/
  mounted: function mounted() {
    this.obtenerRequisas();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Mostrar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Mostrar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      format: "dd-MM-yyyy",
      descargando: false,
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
    downloadItem: function downloadItem(url) {
      var _this = this;

      if (!this.descargando) {
        this.descargando = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get(url, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteFicha.pdf';
          link.click();
          _this.descargando = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          this.descargando = false;
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
      _api_salidas__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerSalida({
        id_salida: this.$route.params.id_salida
      }, function (data) {
        self.form = data.salida;
      }, function (err) {
        console.log(err);
      });
    }
  },
  computed: {
    total_cantidad_despachada: function total_cantidad_despachada() {
      return this.form.salida_productos.reduce(function (carry, item) {
        return carry + Number(item.cantidad_despachada);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Registrar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Registrar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_requisas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/requisas */ "./resources/app/api/requisas.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      //It is important to import the loading image then use here
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "dd-MM-yyyy",
      trabajadoresBusquedaURL: "/trabajadores/buscar_trabajador",
      proveedoresBusquedaURL: "/proveedores/buscar",
      sucursalesBusquedaURL: "/sucursales/buscar",
      areasBusquedaURL: "/areas/buscar",
      bodegasBusquedaURL: "/bodegas/buscar",
      productosBodegaBusquedaURL: "/productos/buscar-bodega",
      detalleForm: {
        productox: {},
        cantidad: 1,
        precio_unitario: 0,
        subtotal: 0,
        total: 0
      },
      form: {
        codigo_requisa: "",
        descripcion_requisa: "",
        fecha_solicitud: moment(new Date()).format("YYYY-MM-DD"),
        requisa_trabajador: {},
        requisa_proveedor: {},
        requisa_sucursal: {},
        requisa_area: {},
        requisa_bodega: {},
        detalleProductos: []
      },
      btnAction: "Solicitar",
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
    seleccionarTrabajador: function seleccionarTrabajador(e) {
      var trabajadorP = e.target.value;
      var self = this;
      self.form.requisa_trabajador = trabajadorP;
    },
    seleccionarProveedor: function seleccionarProveedor(e) {
      var proveedorP = e.target.value;
      var self = this;
      self.form.requisa_proveedor = proveedorP;
    },
    seleccionarSucursal: function seleccionarSucursal(e) {
      var sucursalP = e.target.value;
      var self = this;
      self.form.requisa_sucursal = sucursalP;
    },
    seleccionarArea: function seleccionarArea(e) {
      var areaP = e.target.value;
      var self = this;
      self.form.requisa_area = areaP;
    },
    seleccionarBodega: function seleccionarBodega(e) {
      var bodegaP = e.target.value;
      var self = this;
      self.form.requisa_bodega = bodegaP;
      self.form.detalleProductos = [];
      self.detalleForm.productox = {};
    },
    cargar_detalles_producto: function cargar_detalles_producto(e) {
      var productoP = e.target.value;
      var self = this;
      self.detalleForm.productox = productoP;
      if (self.detalleForm.productox) self.detalleForm.cantidad = 0;
      self.detalleForm.precio_unitario = self.detalleForm.productox.costo_promedio;
    },
    sub_total: function sub_total(itemX) {
      itemX.subtotal = Number((Number(itemX.precio_unitario) * Number(itemX.cantidad)).toFixed(2));
      itemX.total = itemX.subtotal;

      if (!isNaN(itemX.total)) {
        return itemX.total;
      } else return 0;
    },
    onDateSelect: function onDateSelect(date) {
      this.form.fecha_solicitud = moment(date).format("YYYY-MM-DD"); //
    },
    agregarDetalle: function agregarDetalle() {
      var self = this;

      if (self.detalleForm.productox) {
        if (self.detalleForm.cantidad > 0 && self.detalleForm.precio_unitario > 0) {
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
              cantidad: Number(self.detalleForm.cantidad),
              precio_unitario: self.detalleForm.precio_unitario,
              subtotal: 0,
              total: 0
            });
          } else {
            var nuevo_total = self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad;

            if (nuevo_total <= self.form.detalleProductos[keyx].cantidad_disponible) {
              self.form.detalleProductos[keyx].cantidad = Number(self.form.detalleProductos[keyx].cantidad + self.detalleForm.cantidad);
            } else {
              self.form.detalleProductos[keyx].cantidad = Number(self.form.detalleProductos[keyx].productox.cantidad_disponible);
            }
          }

          self.detalleForm.productox = {};
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
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = "Registrando, espere....";
      self.$swal.fire({
        title: 'Esta seguro de registrar esta solicitud de requisa?',
        text: "Esta acción no se puede deshacer",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _api_requisas__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
            _this.$swal.fire('Solicitud de Requisa Registrada!', 'La Requisa fue registrada correctamente.', 'success');

            _this.$router.push({
              name: "requisas"
            });
          }, function (err) {
            self.errorMessages = err;
            self.btnAction = "Solicitar";
          });
        } else {
          self.btnAction = "Solicitar";
        }
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-8bc35816] {\n  min-width: 120px;\n}\n.table a[data-v-8bc35816] {\n  color: #2675dc;\n}\n.table .table-number[data-v-8bc35816] {\n  width: 60px;\n}\n.table .action[data-v-8bc35816] {\n  width: 180px;\n}\n.table .detail-link[data-v-8bc35816] {\n  width: 60px;\n  position: relative;\n}\n.table .detail-link .link[data-v-8bc35816] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.table .detail-link .link[data-v-8bc35816]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Autorizar.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Autorizar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n\tmargin-top:33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-agregar {\n    margin-top: 33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Autorizar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Autorizar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Autorizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Autorizar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Registrar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Autorizar.vue?vue&type=template&id=1485bdac&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Autorizar.vue?vue&type=template&id=1485bdac& ***!
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
        _c("div", { staticClass: "content-box" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v(" Trabajador solicitante")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.requisa_trabajador.text,
                      expression: "form.requisa_trabajador.text"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { readonly: "" },
                  domProps: { value: _vm.form.requisa_trabajador.text },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.requisa_trabajador,
                        "text",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v(" Proveedor")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.requisa_proveedor.text,
                      expression: "form.requisa_proveedor.text"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { readonly: "" },
                  domProps: { value: _vm.form.requisa_proveedor.text },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.requisa_proveedor,
                        "text",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v(" Sucursal")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.requisa_sucursal.text,
                      expression: "form.requisa_sucursal.text"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { readonly: "" },
                  domProps: { value: _vm.form.requisa_sucursal.text },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.requisa_sucursal,
                        "text",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v(" Area")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.requisa_area.text,
                      expression: "form.requisa_area.text"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { readonly: "" },
                  domProps: { value: _vm.form.requisa_area.text },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.requisa_area,
                        "text",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v(" Bodega")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.requisa_bodega.text,
                      expression: "form.requisa_bodega.text"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { readonly: "" },
                  domProps: { value: _vm.form.requisa_bodega.text },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form.requisa_bodega,
                        "text",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Fecha Solicitud")
                  ]),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: {
                      disabled: true,
                      language: _vm.es,
                      value: new Date(),
                      format: _vm.format
                    },
                    on: { selected: _vm.onDateSelect }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [_vm._v("No. Factura")]),
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
                  attrs: { readonly: "", type: "text" },
                  domProps: { value: _vm.form.no_factura },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "no_factura", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "" } }, [
                  _vm._v("Observaciones Requisa")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.descripcion_requisa,
                      expression: "form.descripcion_requisa"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { readonly: "", type: "text" },
                  domProps: { value: _vm.form.descripcion_requisa },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "descripcion_requisa",
                        $event.target.value
                      )
                    }
                  }
                })
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
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.form.requisa_productos, function(item, index) {
                      return [
                        _c("tr", [
                          _c("td", { staticStyle: { width: "2%" } }, [
                            _c(
                              "button",
                              {
                                attrs: { disabled: "" },
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
                                    item.bodega_producto.producto_simple
                                      .descripcion,
                                  expression:
                                    "item.bodega_producto.producto_simple.descripcion"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { disabled: "" },
                              domProps: {
                                value:
                                  item.bodega_producto.producto_simple
                                    .descripcion
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    item.bodega_producto.producto_simple,
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
                                  "requisa_productos." +
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
                                  value: item.cantidad_solicitada,
                                  expression: "item.cantidad_solicitada",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { readonly: "", type: "number" },
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
                                  "requisa_productos." +
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
                                  value: item.cantidad_autorizada,
                                  expression: "item.cantidad_autorizada",
                                  modifiers: { number: true }
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "number" },
                              domProps: { value: item.cantidad_autorizada },
                              on: {
                                change: function($event) {
                                  item.cantidad_autorizada = Math.max(
                                    Math.min(
                                      Math.round(item.cantidad_autorizada),
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
                                    "cantidad_autorizada",
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
                                  "requisa_productos." +
                                    index +
                                    ".cantidad_autorizada"
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
                                  value: item.precio_unitario,
                                  expression: "item.precio_unitario",
                                  modifiers: { number: true }
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
                                  "requisa_productos." +
                                    index +
                                    ".precio_unitario"
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
                                "C$ " +
                                  _vm._s(
                                    _vm._f("formatMoney")(
                                      _vm.sub_total(item),
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
                    _c("td", { attrs: { colspan: "4" } }),
                    _vm._v(" "),
                    _c("td", [_vm._v("Subtotal")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          "C$ " +
                            _vm._s(_vm._f("formatMoney")(_vm.total_subt, 2))
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      { staticClass: "item-footer", attrs: { colspan: "2" } },
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
                        _vm._v(_vm._s(_vm.total_cantidad_autorizada))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Total")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", [
                        _vm._v(
                          "C$ " +
                            _vm._s(_vm._f("formatMoney")(_vm.gran_total, 2))
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
                "button",
                {
                  staticClass: "btn btn-danger",
                  attrs: {
                    disabled: _vm.btnActionAnular !== "Anular",
                    type: "button"
                  },
                  on: { click: _vm.anular }
                },
                [_vm._v(_vm._s(_vm.btnActionAnular))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    disabled: _vm.btnAction !== "Autorizar",
                    type: "button"
                  },
                  on: { click: _vm.autorizar }
                },
                [_vm._v(_vm._s(_vm.btnAction))]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                { attrs: { tag: "button", to: { name: "requisas" } } },
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Autorizar Requisa")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para Autorizar Requisa")
      ])
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
        _c("th", [_vm._v("Cantidad Solicitada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Autorizada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Costo Unitario")]),
        _vm._v(" "),
        _c("th", [_vm._v("SubTotal")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Listado.vue?vue&type=template&id=8bc35816&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Listado.vue?vue&type=template&id=8bc35816&scoped=true& ***!
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
        _vm._m(0),
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
                  attrs: { tag: "button", to: { name: "registrar-requisa" } }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Registrar Requisa\n                ")
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
                  _vm.obtenerRequisas()
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
                  _c("option", { attrs: { value: "codigo_requisa" } }, [
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
                      _vm.obtenerRequisas()
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
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.requisas, function(requisa, key) {
                  return [
                    _c("tr", { key: requisa.id_requisa }, [
                      _c("td", { staticClass: "detail-link" }, [
                        _c("div", {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip",
                              value: "Mostrar Detalle",
                              expression: "'Mostrar Detalle'"
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
                      _c("td", [_vm._v(_vm._s(requisa.codigo_requisa))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(requisa.fecha_solicitud))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(requisa.requisa_trabajador.id_trabajador))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            requisa.requisa_sucursal
                              ? requisa.requisa_sucursal.descripcion
                              : "N/A"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(requisa.requisa_bodega.descripcion))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(requisa.requisa_area.descripcion))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        requisa.estado === 0
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-danger" },
                                [_vm._v("Cancelada")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        requisa.estado === 1
                          ? _c("div", [
                              _c("span", { staticClass: "badge badge-blue" }, [
                                _vm._v("Solicitada")
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        requisa.estado === 2
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Autorizada")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        requisa.estado === 3
                          ? _c("div", [
                              _c(
                                "span",
                                { staticClass: "badge badge-success" },
                                [_vm._v("Despachada")]
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-center" },
                        [
                          requisa.estado === 1
                            ? [
                                _c(
                                  "router-link",
                                  {
                                    directives: [
                                      {
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: "Autorizar Requisa",
                                        expression: "'Autorizar Requisa'"
                                      }
                                    ],
                                    attrs: {
                                      to: {
                                        name: "autorizar-requisa",
                                        params: {
                                          id_requisa: requisa.id_requisa
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
                          _c(
                            "router-link",
                            {
                              directives: [
                                {
                                  name: "tooltip",
                                  rawName: "v-tooltip",
                                  value: "Mostrar detalles de Requisa",
                                  expression: "'Mostrar detalles de Requisa'"
                                }
                              ],
                              attrs: {
                                to: {
                                  name: "mostrar-requisa",
                                  params: { id_requisa: requisa.id_requisa }
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
                          )
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    requisa.mostrar
                      ? _c("tr", { key: requisa.codigo_requisa }, [
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { attrs: { colspan: "7" } }, [
                            _c(
                              "table",
                              {
                                staticClass:
                                  "table table-striped table-bordered"
                              },
                              [
                                _vm._m(2, true),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  _vm._l(requisa.requisa_productos, function(
                                    productosDetalle
                                  ) {
                                    return _c(
                                      "tr",
                                      {
                                        key:
                                          productosDetalle.id_requisa_producto
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
                                              productosDetalle.precio_unitario
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
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.cantidad_autorizada
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              productosDetalle.cantidad_recibida
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
                                      attrs: { colspan: "3" }
                                    }),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Total Unidades")]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "item-footer" }, [
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(
                                            requisa.tot_unidades_solicitadas
                                          )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "item-footer" }, [
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(
                                            requisa.tot_unidades_autorizadas
                                          )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "item-footer" }, [
                                      _c("strong", [
                                        _vm._v(
                                          _vm._s(requisa.tot_unidades_recibidas)
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
                !_vm.requisas.length
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
            items: _vm.requisas,
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
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [_vm._v("Administrar Requisas")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Listado de Requisa")
      ])
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
        _c("th", [_vm._v("No. Requisa")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Usuario")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sucursal")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bodega")]),
        _vm._v(" "),
        _c("th", [_vm._v("Area")]),
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
        _c("th", [_vm._v("Costo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Solicitada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Autorizada")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cantidad Entregada")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Mostrar.vue?vue&type=template&id=f1dd4d32&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Mostrar.vue?vue&type=template&id=f1dd4d32& ***!
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
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            attrs: { disabled: _vm.descargando },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.downloadItem(
                  "productos/baterias/ficha/" + _vm.form.id_salida
                )
              }
            }
          },
          [_c("i", { staticClass: "fa fa-download" }), _vm._v(" Descargar")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _c(
        "div",
        { staticClass: "document" },
        [
          _c("div", { staticClass: "document-heading" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col col-12 text-center" }, [
                _c("div", { staticClass: "company-name" }, [
                  _vm._v("LUBRICANTES DE NICARAGUA, S. A.")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "company-address" }, [
                  _vm._v(
                    "De la CST. 1 Cuadra arriba, 1 cuadra al sur, Managua Nicaragua"
                  )
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
              _c(
                "div",
                { staticClass: "col col-4" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.form.salida_proveedor
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
                                  _vm.form.salida_proveedor.nombre_comercial
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.form.salida_proveedor.numero_ruc)
                              )
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.form.salida_proveedor.direccion)
                              )
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("pre", [
                              _vm._v(
                                _vm._s(
                                  _vm.form.salida_proveedor.contacto_proveedor
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
                        _vm._v(_vm._s(_vm.form.salida_bodega.descripcion))
                      ]),
                      _vm._v(" "),
                      _c("br")
                    ]
                  ),
                  _vm._v(" "),
                  _vm.form.id_tipo_salida === 4
                    ? [
                        _vm._m(2),
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
                  _vm._m(3),
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
                        _vm._v(_vm._s(_vm.formatDate(_vm.form.fecha_despacho)))
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(4)
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "document-body" }, [
            _c("table", { staticClass: "document-table" }, [
              _vm._m(5),
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
                              _vm._s(item.unidad_medida) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-2 align-right" }, [
                          _vm._v(
                            _vm._s(
                              _vm._f("formatMoney")(item.precio_unitario, 2)
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-1 align-center" }, [
                          _vm._v(_vm._s(item.cantidad_despachada))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "width-2 align-right" }, [
                          _vm._v(
                            _vm._s(
                              _vm._f("formatMoney")(
                                item.cantidad_despachada * item.precio_unitario,
                                2
                              )
                            )
                          )
                        ])
                      ])
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("tfoot", [
                _c("tr", [
                  _c("td", { attrs: { colspan: "3" } }),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "2" } }, [_vm._v("Sub Total")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "align-right" }, [
                    _vm._v(
                      "C$ " + _vm._s(_vm._f("formatMoney")(_vm.total_subt, 2))
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", { attrs: { colspan: "3" } }),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("td", { staticClass: "align-right" }, [
                    _c("strong", [
                      _vm._v(
                        "C$ " + _vm._s(_vm._f("formatMoney")(_vm.gran_total, 2))
                      )
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.form.salida_productos
            ? [
                _vm._m(7),
                _vm._v(" "),
                _c("div", { staticClass: "document-body" }, [
                  _c("table", { staticClass: "document-table" }, [
                    _vm._m(8),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.form.salida_productos, function(item2) {
                          return [
                            item2.salida_producto_baterias
                              ? [
                                  _vm._l(
                                    item2.salida_producto_baterias,
                                    function(itemBateria) {
                                      return [
                                        _c(
                                          "tr",
                                          { key: itemBateria.id_bateria },
                                          [
                                            _c(
                                              "td",
                                              { staticClass: "width-4" },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      itemBateria.bateria
                                                        .codigo_garantia
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "width-4" },
                                              [
                                                _c("pre", [
                                                  _vm._v(
                                                    _vm._s(
                                                      item2.descripcion_producto
                                                    )
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              { staticClass: "width-4" },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      itemBateria.bateria
                                                        .fecha_activacion
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  )
                                ]
                              : _vm._e()
                          ]
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("tfoot")
                  ])
                ])
              ]
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
    return _c("p", [_c("strong", [_vm._v("Proveedor:")])])
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
    return _c("tr", [
      _c("td", [_vm._v("Moneda:")]),
      _vm._v(" "),
      _c("td", [_vm._v("Córdobas")])
    ])
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
        _c("th", [_vm._v("Unidad de medida")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [
          _vm._v("Costo unitario C$")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", { staticClass: "align-center" }, [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { attrs: { colspan: "2" } }, [
      _c("strong", [_vm._v("Total")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col col-4" }, [
      _c("p", [_c("strong", [_vm._v("Detalle de Baterías Despachadas:")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Código Garantía")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción Bateria")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Activación")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Registrar.vue?vue&type=template&id=eaeec358&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/requisas/Registrar.vue?vue&type=template&id=eaeec358& ***!
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Trabajador solicitante")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("typeahead", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          initial: _vm.form.requisa_trabajador,
                          trim: 80,
                          url: _vm.trabajadoresBusquedaURL
                        },
                        on: { input: _vm.seleccionarTrabajador }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.requisa_trabajador, function(
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Proveedor")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("typeahead", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          initial: _vm.form.requisa_proveedor,
                          trim: 80,
                          url: _vm.proveedoresBusquedaURL
                        },
                        on: { input: _vm.seleccionarProveedor }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.requisa_proveedor, function(
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Sucursal")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("typeahead", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          initial: _vm.form.requisa_sucursal,
                          trim: 80,
                          url: _vm.sucursalesBusquedaURL
                        },
                        on: { input: _vm.seleccionarSucursal }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.requisa_sucursal, function(
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Area")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("typeahead", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          initial: _vm.form.requisa_area,
                          trim: 80,
                          url: _vm.areasBusquedaURL
                        },
                        on: { input: _vm.seleccionarArea }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.requisa_area, function(message) {
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
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Bodega")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("typeahead", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          initial: _vm.form.requisa_bodega,
                          trim: 80,
                          url: _vm.bodegasBusquedaURL
                        },
                        on: { input: _vm.seleccionarBodega }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.requisa_bodega, function(message) {
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
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Fecha Solicitud")
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
                      _vm._l(_vm.errorMessages.fecha_solicitud, function(
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
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v("No. Factura")]),
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
              _c("div", { staticClass: "col-sm-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Observaciones Requisa")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.descripcion_requisa,
                        expression: "form.descripcion_requisa"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text" },
                    domProps: { value: _vm.form.descripcion_requisa },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "descripcion_requisa",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.descripcion_requisa, function(
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
            !_vm.form.requisa_bodega
              ? _c("div", [_vm._m(1), _vm._v(" "), _c("hr")])
              : _vm._e(),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Producto")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("typeahead", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          initial: _vm.detalleForm.productox,
                          params: {
                            id_bodega: _vm.form.requisa_bodega.id_bodega
                          },
                          trim: 80,
                          url: _vm.productosBodegaBusquedaURL
                        },
                        on: { input: _vm.cargar_detalles_producto }
                      })
                    ],
                    1
                  ),
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
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Costo Promedio")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("div", { staticClass: "input-group-addon" }, [
                      _vm._v("C$\n                                ")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.detalleForm.precio_unitario,
                          expression: "detalleForm.precio_unitario",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { readonly: "", type: "number" },
                      domProps: { value: _vm.detalleForm.precio_unitario },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.detalleForm,
                            "precio_unitario",
                            _vm._n($event.target.value)
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.precio_unitariox, function(
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
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.number",
                                    value: item.precio_unitario,
                                    expression: "item.precio_unitario",
                                    modifiers: { number: true }
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
                                      ".precio_unitario"
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
                                  "C$ " +
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        _vm.sub_total(item),
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
                      _c("td", { attrs: { colspan: "3" } }),
                      _vm._v(" "),
                      _c("td", [_vm._v("Subtotal")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            "C$ " +
                              _vm._s(_vm._f("formatMoney")(_vm.total_subt, 2))
                          )
                        ])
                      ])
                    ]),
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
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Total")]),
                      _vm._v(" "),
                      _c("td", [
                        _c("strong", [
                          _vm._v(
                            "C$ " +
                              _vm._s(_vm._f("formatMoney")(_vm.gran_total, 2))
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
                  { attrs: { tag: "button", to: { name: "requisas" } } },
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
                      disabled: _vm.btnAction !== "Solicitar",
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
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Crear Nueva Solicitud de Requisa")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar Solicitud de Requisa de productos")
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
        _c("th", [_vm._v("Cantidad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Costo Unitario")]),
        _vm._v(" "),
        _c("th", [_vm._v("SubTotal")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuejs-datepicker/dist/locale/translations/es.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return new(function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.language=e,this.months=n,this.monthsAbbr=r,this.days=o,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}var n,r,o;return n=t,(r=[{key:"language",get:function(){return this._language},set:function(e){if("string"!=typeof e)throw new TypeError("Language must be a string");this._language=e}},{key:"months",get:function(){return this._months},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 months for ".concat(this.language," language"));this._months=e}},{key:"monthsAbbr",get:function(){return this._monthsAbbr},set:function(e){if(12!==e.length)throw new RangeError("There must be 12 abbreviated months for ".concat(this.language," language"));this._monthsAbbr=e}},{key:"days",get:function(){return this._days},set:function(e){if(7!==e.length)throw new RangeError("There must be 7 days for ".concat(this.language," language"));this._days=e}}])&&e(n.prototype,r),o&&e(n,o),t}())("Spanish",["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"])});


/***/ }),

/***/ "./resources/app/api/requisas.js":
/*!***************************************!*\
  !*** ./resources/app/api/requisas.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerRequisas: function obtenerRequisas(data, cb, errorCb) {
    axios.post('inventario/requisas/obtener', data).then(function (response) {
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
    axios.post('inventario/requisas/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  autorizar: function autorizar(data, cb, errorCb) {
    axios.put('inventario/requisas/autorizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cancelar: function cancelar(data, cb, errorCb) {
    axios.put('inventario/requisas/cancelar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerRequisa: function obtenerRequisa(data, cb, errorCb) {
    axios.post('inventario/requisas/obtener-requisa', data).then(function (response) {
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

/***/ "./resources/app/components/requisas/Autorizar.vue":
/*!*********************************************************!*\
  !*** ./resources/app/components/requisas/Autorizar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Autorizar_vue_vue_type_template_id_1485bdac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autorizar.vue?vue&type=template&id=1485bdac& */ "./resources/app/components/requisas/Autorizar.vue?vue&type=template&id=1485bdac&");
/* harmony import */ var _Autorizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Autorizar.vue?vue&type=script&lang=js& */ "./resources/app/components/requisas/Autorizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Autorizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Autorizar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/requisas/Autorizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Autorizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Autorizar_vue_vue_type_template_id_1485bdac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Autorizar_vue_vue_type_template_id_1485bdac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/requisas/Autorizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/requisas/Autorizar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/app/components/requisas/Autorizar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Autorizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Autorizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/requisas/Autorizar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/requisas/Autorizar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Autorizar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Autorizar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/requisas/Autorizar.vue?vue&type=template&id=1485bdac&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/requisas/Autorizar.vue?vue&type=template&id=1485bdac& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_template_id_1485bdac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Autorizar.vue?vue&type=template&id=1485bdac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Autorizar.vue?vue&type=template&id=1485bdac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_template_id_1485bdac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Autorizar_vue_vue_type_template_id_1485bdac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/requisas/Listado.vue":
/*!*******************************************************!*\
  !*** ./resources/app/components/requisas/Listado.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_8bc35816_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=8bc35816&scoped=true& */ "./resources/app/components/requisas/Listado.vue?vue&type=template&id=8bc35816&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/requisas/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_8bc35816_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true& */ "./resources/app/components/requisas/Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_8bc35816_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_8bc35816_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8bc35816",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/requisas/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/requisas/Listado.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/app/components/requisas/Listado.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/requisas/Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/app/components/requisas/Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_8bc35816_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Listado.vue?vue&type=style&index=0&id=8bc35816&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_8bc35816_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_8bc35816_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_8bc35816_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_8bc35816_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_8bc35816_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/requisas/Listado.vue?vue&type=template&id=8bc35816&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/requisas/Listado.vue?vue&type=template&id=8bc35816&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_8bc35816_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=8bc35816&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Listado.vue?vue&type=template&id=8bc35816&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_8bc35816_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_8bc35816_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/requisas/Mostrar.vue":
/*!*******************************************************!*\
  !*** ./resources/app/components/requisas/Mostrar.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mostrar_vue_vue_type_template_id_f1dd4d32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=template&id=f1dd4d32& */ "./resources/app/components/requisas/Mostrar.vue?vue&type=template&id=f1dd4d32&");
/* harmony import */ var _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mostrar.vue?vue&type=script&lang=js& */ "./resources/app/components/requisas/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mostrar_vue_vue_type_template_id_f1dd4d32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mostrar_vue_vue_type_template_id_f1dd4d32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/requisas/Mostrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/requisas/Mostrar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/app/components/requisas/Mostrar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Mostrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/requisas/Mostrar.vue?vue&type=template&id=f1dd4d32&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/requisas/Mostrar.vue?vue&type=template&id=f1dd4d32& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_f1dd4d32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mostrar.vue?vue&type=template&id=f1dd4d32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Mostrar.vue?vue&type=template&id=f1dd4d32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_f1dd4d32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mostrar_vue_vue_type_template_id_f1dd4d32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/requisas/Registrar.vue":
/*!*********************************************************!*\
  !*** ./resources/app/components/requisas/Registrar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_eaeec358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=eaeec358& */ "./resources/app/components/requisas/Registrar.vue?vue&type=template&id=eaeec358&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/requisas/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registrar.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/requisas/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_eaeec358___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_eaeec358___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/requisas/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/requisas/Registrar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/app/components/requisas/Registrar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/requisas/Registrar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/requisas/Registrar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Registrar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/requisas/Registrar.vue?vue&type=template&id=eaeec358&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/requisas/Registrar.vue?vue&type=template&id=eaeec358& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_eaeec358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=eaeec358& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/requisas/Registrar.vue?vue&type=template&id=eaeec358&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_eaeec358___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_eaeec358___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);