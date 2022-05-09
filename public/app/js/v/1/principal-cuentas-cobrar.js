(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-cuentas-cobrar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    regresar: function regresar() {
      this.$router.push({
        name: "pagina-principal"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=template&id=f9079ff8&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=template&id=f9079ff8& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "simple-welcome-text" }, [
      _c("div", { staticClass: "text" }, [_vm._v("Módulo Cuentas Por Cobrar")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _c(
          "a",
          {
            staticStyle: { "margin-right": "10px" },
            on: { click: _vm.regresar }
          },
          [_vm._v(" Módulos")]
        ),
        _vm._v("> Módulo Cuentas Por Cobrar")
      ])
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "cuentas-por-cobrar" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Cuentas por Cobrar Clientes")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/cuentas-x-cobrar/cuentasxcobrar.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "recibos-oficiales" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Control de Recibos Clientes")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/cuentas-x-cobrar/receipt-approved.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "registrar-recibo-oficial" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Registrar Recibo de Cliente")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/cuentas-x-cobrar/registrar-recibo.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c("router-link", { attrs: { to: { name: "notas-credito" } } }, [
              _c("div", { staticClass: "last-post" }, [
                _vm._v("Control de Notas de Crédito")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "module-image" }, [
                _c("img", {
                  attrs: {
                    src:
                      "/public/app/images/cuentas-x-cobrar/control-nota-credito.png"
                  }
                })
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "registrar-nota-credito" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Registrar Nota de Crédito")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/cuentas-x-cobrar/registrar-nota-credito.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c("router-link", { attrs: { to: { name: "notas-debito" } } }, [
              _c("div", { staticClass: "last-post" }, [
                _vm._v("Control de Notas de Débito")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "module-image" }, [
                _c("img", {
                  attrs: {
                    src:
                      "/public/app/images/cuentas-x-cobrar/control-nota-debito.png"
                  }
                })
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "registrar-nota-debito" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Registrar Nota de Débito")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/cuentas-x-cobrar/registrar-nota-debito.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c("router-link", { attrs: { to: { name: "listado-clientes" } } }, [
              _c("div", { staticClass: "last-post" }, [
                _vm._v("Maestro de Clientes")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "module-image" }, [
                _c("img", {
                  attrs: {
                    src: "/public/app/images/cuentas-x-cobrar/clientes.png"
                  }
                })
              ])
            ])
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "cuentas-por-cobrar-trabajadores" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Cuentas por Cobrar Empleados")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/cuentas-x-cobrar/cuentasxcobrarempleado.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "cargos-abonos-trabajador" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Cargos y abonos Empleados")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/cuentas-x-cobrar/cargos-abonos-empleado.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "recibos-oficiales-trabajador" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Control de Recibos Empleados")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/cuentas-x-cobrar/recibo-empleado.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              {
                attrs: { to: { name: "registrar-recibo-oficial-trabajador" } }
              },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Registrar Recibo de Empleado")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/cuentas-x-cobrar/registrar-recibo-empleado.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "listado-trabajadores" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Maestro de Empleados")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src: "/public/app/images/modulo-nomina/empleados.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "cuentas-por-cobrar-otras" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Otras Cuentas por Cobrar")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/cuentas-x-cobrar/otras-cuentas-pagar.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c("router-link", { attrs: { to: { name: "listado-deudores" } } }, [
              _c("div", { staticClass: "last-post" }, [
                _vm._v("Maestro Deudores")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "module-image" }, [
                _c("img", {
                  attrs: {
                    src: "/public/app/images/cuentas-x-cobrar/deudores.png"
                  }
                })
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("hr")
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "cuentas-cobrar-reportes" } } },
              [
                _c("div", { staticClass: "last-post" }, [_vm._v("Reportes")]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/Modulo%20de%20Inventario/Reportes.png"
                    }
                  })
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("hr")
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card-small" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "tipos-notas-credito" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _c("i", {
                    staticClass: "fa fa-book",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" Tipos Notas Crédito")
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card-small" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "tipos-notas-debito" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _c("i", {
                    staticClass: "fa fa-book",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" Tipos Notas Débito")
                ])
              ]
            )
          ],
          1
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "alert alert-success" }, [
          _c("span", [_vm._v("Cuentas por Cobrar Clientes")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "alert alert-success" }, [
          _c("span", [_vm._v("Cuentas por Cobrar Trabajadores")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "alert alert-success" }, [
          _c("span", [_vm._v("Otras Cuentas por Cobrar")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "alert alert-success" }, [
          _c("span", [_vm._v("Reportes Cuentas por Cobrar")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "simple-welcome-text" }, [
      _c("div", { staticClass: "text" }, [_vm._v("Catálogos")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue":
/*!*********************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardCuentasPorCobrar_vue_vue_type_template_id_f9079ff8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardCuentasPorCobrar.vue?vue&type=template&id=f9079ff8& */ "./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=template&id=f9079ff8&");
/* harmony import */ var _DashboardCuentasPorCobrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardCuentasPorCobrar.vue?vue&type=script&lang=js& */ "./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardCuentasPorCobrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardCuentasPorCobrar_vue_vue_type_template_id_f9079ff8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardCuentasPorCobrar_vue_vue_type_template_id_f9079ff8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCuentasPorCobrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCuentasPorCobrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCuentasPorCobrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=template&id=f9079ff8&":
/*!****************************************************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=template&id=f9079ff8& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCuentasPorCobrar_vue_vue_type_template_id_f9079ff8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardCuentasPorCobrar.vue?vue&type=template&id=f9079ff8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardCuentasPorCobrar.vue?vue&type=template&id=f9079ff8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCuentasPorCobrar_vue_vue_type_template_id_f9079ff8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardCuentasPorCobrar_vue_vue_type_template_id_f9079ff8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);