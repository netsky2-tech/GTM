(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajustes-depreciacion"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_cuentas_activos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/cuentas_activos */ "./resources/app/api/cuentas_activos.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cuentas_contables: [],
      form: {
        cuentas: []
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
      _api_cuentas_activos__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.form.cuentas = data.rows;
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
      _api_cuentas_activos__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=template&id=1343e37a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=template&id=1343e37a& ***!
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
                _vm._v("Ajustes Módulo Depreciación")
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
                      attrs: { to: { name: "pagina-principal-activos" } }
                    },
                    [_vm._v(" Módulo Activos Fijos")]
                  ),
                  _vm._v("> Configuración Depreciación")
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
                      _vm._l(_vm.form.cuentas, function(cuenta) {
                        return _c("tr", { key: cuenta.id_cuenta_activo }, [
                          _c("td", { staticClass: "text-left" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: cuenta.descripcion,
                                  expression: "cuenta.descripcion"
                                }
                              ],
                              staticClass: "form-control",
                              domProps: { value: cuenta.descripcion },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    cuenta,
                                    "descripcion",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
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
                                  value: cuenta.cuenta_contable,
                                  callback: function($$v) {
                                    _vm.$set(cuenta, "cuenta_contable", $$v)
                                  },
                                  expression: "cuenta.cuenta_contable"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
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
                                  value: cuenta.cuenta_contable_depreciado,
                                  callback: function($$v) {
                                    _vm.$set(
                                      cuenta,
                                      "cuenta_contable_depreciado",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "cuenta.cuenta_contable_depreciado"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      }),
                      _vm._v(" "),
                      !_vm.form.cuentas.length
                        ? _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "text-center",
                                attrs: { colspan: "3" }
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
                      to: { name: "pagina-principal-activos" }
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
          _vm._v("Descripción")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Nombre Cuenta Depreciación")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Nombre Cuenta Depreciado")
        ])
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

/***/ "./resources/app/api/cuentas_activos.js":
/*!**********************************************!*\
  !*** ./resources/app/api/cuentas_activos.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-cuentas-activos', data).then(function (response) {
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
    axios.put('activosfijos/activos/actualizar-cuentas-activos', data).then(function (response) {
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

/***/ "./resources/app/components/activos-tipos/ListadoCuentas.vue":
/*!*******************************************************************!*\
  !*** ./resources/app/components/activos-tipos/ListadoCuentas.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoCuentas_vue_vue_type_template_id_1343e37a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoCuentas.vue?vue&type=template&id=1343e37a& */ "./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=template&id=1343e37a&");
/* harmony import */ var _ListadoCuentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoCuentas.vue?vue&type=script&lang=js& */ "./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListadoCuentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoCuentas_vue_vue_type_template_id_1343e37a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoCuentas_vue_vue_type_template_id_1343e37a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/activos-tipos/ListadoCuentas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCuentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCuentas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCuentas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=template&id=1343e37a&":
/*!**************************************************************************************************!*\
  !*** ./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=template&id=1343e37a& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCuentas_vue_vue_type_template_id_1343e37a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoCuentas.vue?vue&type=template&id=1343e37a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/activos-tipos/ListadoCuentas.vue?vue&type=template&id=1343e37a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCuentas_vue_vue_type_template_id_1343e37a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoCuentas_vue_vue_type_template_id_1343e37a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);