(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-tesoreria"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=template&id=dd439d6a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=template&id=dd439d6a& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "text" }, [_vm._v("M??dulo Tesorer??a")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _c(
          "a",
          {
            staticStyle: { "margin-right": "10px" },
            on: { click: _vm.regresar }
          },
          [_vm._v(" M??dulos")]
        ),
        _vm._v("> M??dulo Tesorer??a")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c("router-link", { attrs: { to: { name: "listado-caja" } } }, [
              _c("div", { staticClass: "last-post" }, [_vm._v("Caja chica")]),
              _vm._v(" "),
              _c("div", { staticClass: "module-image" }, [
                _c("img", {
                  attrs: {
                    src: "/public/app/images/modulo-tesoreria/caja-chica.png"
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
              { attrs: { to: { name: "listado-solicitud" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Solicitud de viaticos")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src: "/public/app/images/modulo-tesoreria/viatico.png"
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
            _c("router-link", { attrs: { to: { name: "listado-vales" } } }, [
              _c("div", { staticClass: "last-post" }, [
                _vm._v("Vale provisional")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "module-image" }, [
                _c("img", {
                  attrs: {
                    src:
                      "/public/app/images/modulo-tesoreria/vale-provisional.png"
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
              { attrs: { to: { name: "listado-comprobante" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Comprobantes")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: {
                      src:
                        "/public/app/images/modulo-tesoreria/comprobante-cajachica.png"
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
              { attrs: { to: { name: "listado-reembolso" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Solicitud de reembolsos")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/reportes.jpg" }
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
              { attrs: { to: { name: "tesoreria-reportes" } } },
              [
                _c("div", { staticClass: "last-post" }, [_vm._v("Reportes")]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/reportes.jpg" }
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
    _c("br"),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "div",
          { staticClass: "module-card-small" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "listado-normativas" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _c("i", {
                    staticClass: "fa fa-book",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" Normativas")
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "div",
          { staticClass: "module-card-small" },
          [
            _c("router-link", { attrs: { to: { name: "listado-viaticos" } } }, [
              _c("div", { staticClass: "last-post" }, [
                _c("i", {
                  staticClass: "fa fa-book",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" Viaticos")
              ])
            ])
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
    return _c("div", { staticClass: "simple-welcome-text" }, [
      _c("div", { staticClass: "text" }, [_vm._v("Cat??logos")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardTesoreria.vue":
/*!**************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardTesoreria.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardTesoreria_vue_vue_type_template_id_dd439d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardTesoreria.vue?vue&type=template&id=dd439d6a& */ "./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=template&id=dd439d6a&");
/* harmony import */ var _DashboardTesoreria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardTesoreria.vue?vue&type=script&lang=js& */ "./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardTesoreria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardTesoreria_vue_vue_type_template_id_dd439d6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardTesoreria_vue_vue_type_template_id_dd439d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/pagina-principal/DashboardTesoreria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTesoreria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardTesoreria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTesoreria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=template&id=dd439d6a&":
/*!*********************************************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=template&id=dd439d6a& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTesoreria_vue_vue_type_template_id_dd439d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardTesoreria.vue?vue&type=template&id=dd439d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardTesoreria.vue?vue&type=template&id=dd439d6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTesoreria_vue_vue_type_template_id_dd439d6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardTesoreria_vue_vue_type_template_id_dd439d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);