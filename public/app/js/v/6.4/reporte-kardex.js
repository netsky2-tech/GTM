(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporte-kardex"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/Kardex.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/Kardex.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_salidas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/salidas */ "./resources/app/api/salidas.js");
/* harmony import */ var _api_reportes_inventario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/reportes_inventario */ "./resources/app/api/reportes_inventario.js");
/* harmony import */ var _api_productos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/productos */ "./resources/app/api/productos.js");
/* harmony import */ var _api_bodegas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/bodegas */ "./resources/app/api/bodegas.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      datos_movimientos: [],
      productos: [],
      productox: "",
      bodegas: [],
      bodegax: "",
      errorMessages: [],
      descargando: false
    };
  },
  methods: {
    obtenerReporte: function obtenerReporte(Prodx) {
      var self = this;
      _api_reportes_inventario__WEBPACK_IMPORTED_MODULE_2__["default"].reporteKardex({
        id_bodega_producto: Prodx.id_bodega_producto
      }, function (data) {
        self.datos_movimientos = data;
        console.log(data);
      }, function (err) {
        console.log(err);
      });
    },
    cargarProductosBodega: function cargarProductosBodega(bodId) {
      //var bodega = JSON.parse(bodId);
      var self = this;
      self.productos = [];
      self.productox = ""; //console.log('bodega seleccionada'+bodId.id_bodega);

      _api_productos__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerProductosBodega({
        id_bodega: bodId.id_bodega
      }, function (data) {
        self.productos = data;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodasBodegas: function obtenerTodasBodegas() {
      var self = this;
      _api_bodegas__WEBPACK_IMPORTED_MODULE_4__["default"].obtenerTodasBodegas(function (data) {
        self.bodegas = data;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.obtenerTodasBodegas();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/Kardex.vue?vue&type=template&id=28a90cd6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/Kardex.vue?vue&type=template&id=28a90cd6& ***!
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
  return _c("div", { staticClass: "main" }, [
    _c("div", { staticClass: "content-box" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "" } }, [_vm._v("Bodegas:")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "nombre", options: _vm.bodegas },
                on: {
                  input: function($event) {
                    return _vm.cargarProductosBodega(_vm.bodegax)
                  }
                },
                model: {
                  value: _vm.bodegax,
                  callback: function($$v) {
                    _vm.bodegax = $$v
                  },
                  expression: "bodegax"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.bodegax, function(message) {
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
              _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "nombre_producto", options: _vm.productos },
                model: {
                  value: _vm.productox,
                  callback: function($$v) {
                    _vm.productox = $$v
                  },
                  expression: "productox"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.producto_bodega, function(message) {
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
        _c("div", { staticClass: "col-md-6 sm-text-center" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-success",
              on: {
                click: function($event) {
                  return _vm.obtenerReporte(_vm.productox)
                }
              }
            },
            [_vm._v("Buscar datos")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive mt-3" }, [
        _c("table", { staticClass: "table table-striped table-bordered" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.datos_movimientos, function(movimiento) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(movimiento.fecha))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(movimiento.nombre))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(movimiento.descripcion_comprobante))]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(movimiento.entrada))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(movimiento.salida))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(movimiento.saldo))
                ])
              ])
            }),
            0
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Reporte Kardex")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Listado detallado de movimientos de productos")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descripción")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bodega")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Entradas")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Salidas")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Saldo")])
      ])
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

/***/ "./resources/app/api/reportes_inventario.js":
/*!**************************************************!*\
  !*** ./resources/app/api/reportes_inventario.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  reporteKardex: function reporteKardex(data, cb, errorCb) {
    axios.post('inventario/reporte-kardex', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  selectCategorias: function selectCategorias(data, cb, errorCb) {
    axios.get('inventario/select-categorias', data).then(function (response) {
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

/***/ "./resources/app/api/salidas.js":
/*!**************************************!*\
  !*** ./resources/app/api/salidas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerSalidas: function obtenerSalidas(data, cb, errorCb) {
    axios.post('salidas/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBateria: function registrarBateria(data, cb, errorCb) {
    axios.post('salidas/registrar-bateria', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  anular: function anular(data, cb, errorCb) {
    axios.put('salidas/anular', data).then(function (response) {
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
    axios.post('salidas/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  guardar: function guardar(data, cb, errorCb) {
    axios.post('salidas/guardar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarSalidaManual: function registrarSalidaManual(data, cb, errorCb) {
    axios.post('salidas/registrar-manual', data).then(function (response) {
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
    axios.post('salidas/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cargarPresentacionesProductos: function cargarPresentacionesProductos(data, cb, errorCb) {
    axios.post('salidas/obtener-presentaciones-producto', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarTraslado: function registrarTraslado(data, cb, errorCb) {
    axios.post('salidas/registrar-traslado', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarTrasladoConsignacion: function registrarTrasladoConsignacion(data, cb, errorCb) {
    axios.post('salidas/registrar-traslado-consignacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarDevolucionConsignacion: function registrarDevolucionConsignacion(data, cb, errorCb) {
    axios.post('salidas/registrar-devolucion-consignacion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarDevolucion: function registrarDevolucion(data, cb, errorCb) {
    axios.post('salidas/registrar-devolucion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  despachar: function despachar(data, cb, errorCb) {
    axios.put('salidas/despachar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  crearSalidaPorDevolucion: function crearSalidaPorDevolucion(data, cb, errorCb) {
    axios.post('salidas/crear-salida-devolucion', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSalida: function obtenerSalida(data, cb, errorCb) {
    axios.post('salidas/obtener-salida', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSalidaPorCodigo: function obtenerSalidaPorCodigo(data, cb, errorCb) {
    axios.post('salidas/obtener-salida-por-codigo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevaSalidaRecuperados: function nuevaSalidaRecuperados(data, cb, errorCb) {
    axios.post('salidas/nuevasalida-recuperado', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarTrasladoRecuperado: function registrarTrasladoRecuperado(data, cb, errorCb) {
    axios.post('salidas/registrar-traslado-recuperado', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNumeroSalida: function obtenerNumeroSalida(cb, errorCb) {
    axios.get('salidas/obtener-numero-salida').then(function (response) {
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
    axios.put('salidas/cambiar-estado', data).then(function (response) {
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

/***/ "./resources/app/components/reportes/Kardex.vue":
/*!******************************************************!*\
  !*** ./resources/app/components/reportes/Kardex.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Kardex_vue_vue_type_template_id_28a90cd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kardex.vue?vue&type=template&id=28a90cd6& */ "./resources/app/components/reportes/Kardex.vue?vue&type=template&id=28a90cd6&");
/* harmony import */ var _Kardex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kardex.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes/Kardex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Kardex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Kardex_vue_vue_type_template_id_28a90cd6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Kardex_vue_vue_type_template_id_28a90cd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes/Kardex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes/Kardex.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/app/components/reportes/Kardex.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kardex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Kardex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/Kardex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kardex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes/Kardex.vue?vue&type=template&id=28a90cd6&":
/*!*************************************************************************************!*\
  !*** ./resources/app/components/reportes/Kardex.vue?vue&type=template&id=28a90cd6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Kardex_vue_vue_type_template_id_28a90cd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Kardex.vue?vue&type=template&id=28a90cd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/Kardex.vue?vue&type=template&id=28a90cd6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Kardex_vue_vue_type_template_id_28a90cd6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Kardex_vue_vue_type_template_id_28a90cd6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);