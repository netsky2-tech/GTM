(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajustes-importacion"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/AjustesFactura.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/ajustes/AjustesFactura.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_facturas_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/facturas-config */ "./resources/app/api/facturas-config.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cuentas_contables: [],
      form: {
        ajustes: []
      },
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 500,
        limitOptions: [5, 10, 15, 20]
      },
      btnAction: "Guardar",
      errorMessages: []
    };
  },
  methods: {
    cargar: function cargar() {
      var self = this;
      self.loading = true;
      _api_facturas_config__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.form.ajustes = data.rows;
        self.total = data.total;
        self.cuentas_contables = data.cuentas_contables;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    registrar: function registrar() {
      var self = this;
      self.loading = true;
      self.btnAction = "Guardando, espere...";
      _api_facturas_config__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        self.btnAction = "Guardar";
        alertify.success("Datos Actualizados Correctamente!", 5);
        self.loading = false;
      }, function (err) {
        self.errorMessages = err;
        self.btnAction = "Guardar";
        self.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.cargar();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_importaciones_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/importaciones-config */ "./resources/app/api/importaciones-config.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cuentas_contables: [],
      form: {
        ajustes: []
      },
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 500,
        limitOptions: [5, 10, 15, 20]
      },
      btnAction: "Guardar",
      errorMessages: []
    };
  },
  methods: {
    cargar: function cargar() {
      var self = this;
      self.loading = true;
      _api_importaciones_config__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.form.ajustes = data.rows;
        self.total = data.total;
        self.cuentas_contables = data.cuentas_contables;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    registrar: function registrar() {
      var self = this;
      self.loading = true;
      self.btnAction = "Guardando, espere...";
      _api_importaciones_config__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        self.btnAction = "Guardar";
        alertify.success("Datos Actualizados Correctamente!", 5);
        self.loading = false;
      }, function (err) {
        self.errorMessages = err;
        self.btnAction = "Guardar";
        self.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.cargar();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/AjustesFactura.vue?vue&type=template&id=f0a84158&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/ajustes/AjustesFactura.vue?vue&type=template&id=f0a84158& ***!
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
            _c("div", { staticClass: "content-box-header" }, [
              _c("div", { staticClass: "box-title" }, [
                _vm._v("Ajustes Comprobante Facturación")
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
                      attrs: { to: { name: "pagina-principal-ventas" } }
                    },
                    [_vm._v(" Módulo Facturación")]
                  ),
                  _vm._v("> Configuración Comprobante Factura")
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("form", [
              _c(
                "table",
                { staticClass: "table table-striped table-bordered" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.ajustes, function(configuracion) {
                        return _c(
                          "tr",
                          { key: configuracion.id_configuracion_factura },
                          [
                            _c(
                              "td",
                              { staticClass: "text-left" },
                              [
                                _c("v-select", {
                                  attrs: {
                                    options: _vm.cuentas_contables,
                                    label: "nombre_cuenta_completo"
                                  },
                                  model: {
                                    value:
                                      configuracion.configuracion_facturacuenta_contable,
                                    callback: function($$v) {
                                      _vm.$set(
                                        configuracion,
                                        "configuracion_facturacuenta_contable",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "configuracion.configuracion_facturacuenta_contable"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-left" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: configuracion.nombre_seccion,
                                    expression: "configuracion.nombre_seccion"
                                  }
                                ],
                                staticClass: "form-control",
                                domProps: {
                                  value: configuracion.nombre_seccion
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      configuracion,
                                      "nombre_seccion",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            configuracion.debe_haber === 1
                              ? [
                                  _vm._m(1, true),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" })
                                ]
                              : [
                                  _c("td", { staticClass: "text-center" }),
                                  _vm._v(" "),
                                  _vm._m(2, true)
                                ]
                          ],
                          2
                        )
                      }),
                      _vm._v(" "),
                      !_vm.form.ajustes.length
                        ? _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                attrs: { colspan: "4" }
                              },
                              [_vm._v("Sin datos")]
                            )
                          ])
                        : _vm._e()
                    ],
                    2
                  )
                ]
              )
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
                      to: { name: "pagina-principal-compras" }
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
                      disabled: _vm.btnAction != "Guardar" ? true : false,
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
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Nombre Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Descripción Movimiento")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Haber")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center" }, [
      _c("div", { staticClass: "status-pill-green" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center" }, [
      _c("div", { staticClass: "status-pill-green" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=template&id=dcd53506&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=template&id=dcd53506& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Ajustes Módulo Importación")
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
                      attrs: { to: { name: "pagina-principal-compras" } }
                    },
                    [_vm._v(" Módulo Compras")]
                  ),
                  _vm._v("> Configuración Importaciones")
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("form", [
              _c(
                "table",
                { staticClass: "table table-striped table-bordered" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.form.ajustes, function(configuracion) {
                        return _c(
                          "tr",
                          { key: configuracion.id_configuracion_importacion },
                          [
                            _c(
                              "td",
                              { staticClass: "text-left" },
                              [
                                _c("v-select", {
                                  attrs: {
                                    options: _vm.cuentas_contables,
                                    label: "nombre_cuenta_completo"
                                  },
                                  model: {
                                    value:
                                      configuracion.configuracion_importacioncuenta_contable,
                                    callback: function($$v) {
                                      _vm.$set(
                                        configuracion,
                                        "configuracion_importacioncuenta_contable",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "configuracion.configuracion_importacioncuenta_contable"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-left" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: configuracion.descripcion_movimiento,
                                    expression:
                                      "configuracion.descripcion_movimiento"
                                  }
                                ],
                                staticClass: "form-control",
                                domProps: {
                                  value: configuracion.descripcion_movimiento
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      configuracion,
                                      "descripcion_movimiento",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            configuracion.debe_haber === 1
                              ? [
                                  _vm._m(1, true),
                                  _vm._v(" "),
                                  _c("td", { staticClass: "text-center" })
                                ]
                              : [
                                  _c("td", { staticClass: "text-center" }),
                                  _vm._v(" "),
                                  _vm._m(2, true)
                                ]
                          ],
                          2
                        )
                      }),
                      _vm._v(" "),
                      !_vm.form.ajustes.length
                        ? _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                attrs: { colspan: "4" }
                              },
                              [_vm._v("Sin datos")]
                            )
                          ])
                        : _vm._e()
                    ],
                    2
                  )
                ]
              )
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
                      to: { name: "pagina-principal-compras" }
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
                      disabled: _vm.btnAction != "Guardar" ? true : false,
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
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Nombre Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Descripción Movimiento")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Debe")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Haber")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center" }, [
      _c("div", { staticClass: "status-pill-green" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center" }, [
      _c("div", { staticClass: "status-pill-green" })
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

/***/ "./resources/app/api/facturas-config.js":
/*!**********************************************!*\
  !*** ./resources/app/api/facturas-config.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('inventario/facturas/obtener-configuracion', data).then(function (response) {
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
    axios.put('inventario/facturas/actualizar-configuracion', data).then(function (response) {
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

/***/ "./resources/app/api/importaciones-config.js":
/*!***************************************************!*\
  !*** ./resources/app/api/importaciones-config.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('inventario/importaciones/obtener-configuracion', data).then(function (response) {
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
    axios.put('inventario/importaciones/actualizar-configuracion', data).then(function (response) {
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

/***/ "./resources/app/components/ajustes/AjustesFactura.vue":
/*!*************************************************************!*\
  !*** ./resources/app/components/ajustes/AjustesFactura.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AjustesFactura_vue_vue_type_template_id_f0a84158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AjustesFactura.vue?vue&type=template&id=f0a84158& */ "./resources/app/components/ajustes/AjustesFactura.vue?vue&type=template&id=f0a84158&");
/* harmony import */ var _AjustesFactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AjustesFactura.vue?vue&type=script&lang=js& */ "./resources/app/components/ajustes/AjustesFactura.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AjustesFactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AjustesFactura_vue_vue_type_template_id_f0a84158___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AjustesFactura_vue_vue_type_template_id_f0a84158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/ajustes/AjustesFactura.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/ajustes/AjustesFactura.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/ajustes/AjustesFactura.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjustesFactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AjustesFactura.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/AjustesFactura.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjustesFactura_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/ajustes/AjustesFactura.vue?vue&type=template&id=f0a84158&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/ajustes/AjustesFactura.vue?vue&type=template&id=f0a84158& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AjustesFactura_vue_vue_type_template_id_f0a84158___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AjustesFactura.vue?vue&type=template&id=f0a84158& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/AjustesFactura.vue?vue&type=template&id=f0a84158&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AjustesFactura_vue_vue_type_template_id_f0a84158___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AjustesFactura_vue_vue_type_template_id_f0a84158___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/ajustes/AjustesImportacion.vue":
/*!*****************************************************************!*\
  !*** ./resources/app/components/ajustes/AjustesImportacion.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AjustesImportacion_vue_vue_type_template_id_dcd53506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AjustesImportacion.vue?vue&type=template&id=dcd53506& */ "./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=template&id=dcd53506&");
/* harmony import */ var _AjustesImportacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AjustesImportacion.vue?vue&type=script&lang=js& */ "./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AjustesImportacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AjustesImportacion_vue_vue_type_template_id_dcd53506___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AjustesImportacion_vue_vue_type_template_id_dcd53506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/ajustes/AjustesImportacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjustesImportacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AjustesImportacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AjustesImportacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=template&id=dcd53506&":
/*!************************************************************************************************!*\
  !*** ./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=template&id=dcd53506& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AjustesImportacion_vue_vue_type_template_id_dcd53506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AjustesImportacion.vue?vue&type=template&id=dcd53506& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/ajustes/AjustesImportacion.vue?vue&type=template&id=dcd53506&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AjustesImportacion_vue_vue_type_template_id_dcd53506___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AjustesImportacion_vue_vue_type_template_id_dcd53506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);