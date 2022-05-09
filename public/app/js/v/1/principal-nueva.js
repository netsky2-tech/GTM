(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-nueva"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    usuarioActivo: 'global/usuarioActivo'
  }))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=template&id=13a9992c&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=template&id=13a9992c& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "text" }, [_vm._v("Dashboard")]),
      _vm._v(" "),
      _c("div", { staticClass: "info" }, [
        _vm._v("Bienvenido " + _vm._s(_vm.$auth.user()[0].usuario) + ", "),
        _c("i", { staticClass: "fa fa-map-marker" }),
        _vm._v(_vm._s(_vm.$auth.user()[0].rol.descripcion))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "div",
          { staticClass: "module-card" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "pagina-principal-inventario" } } },
              [
                _c("div", { staticClass: "last-post" }, [_vm._v("Inventario")]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/inventario.png" }
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
              { attrs: { to: { name: "pagina-principal-compras" } } },
              [
                _c("div", { staticClass: "last-post" }, [_vm._v("Compras")]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/compras.png" }
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
              { attrs: { to: { name: "pagina-principal-caja" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Caja y Bancos")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/caja-bancos.png" }
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
              { attrs: { to: { name: "pagina-principal-contabilidad" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Contabilidad")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/contabilidad.png" }
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
              { attrs: { to: { name: "pagina-principal-cuentas-cobrar" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Cuentas por Cobrar")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/cuentascobrar.png" }
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
              { attrs: { to: { name: "pagina-principal-cuentas-pagar" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Cuentas Por Pagar")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/cuentasporpagar.png" }
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
              { attrs: { to: { name: "pagina-principal-nomina" } } },
              [
                _c("div", { staticClass: "last-post" }, [_vm._v("Nómina")]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", { attrs: { src: "/public/app/images/nomina.png" } })
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
              { attrs: { to: { name: "pagina-principal-administracion" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Administración del Sistema")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/configuracion.png" }
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
              { attrs: { to: { name: "pagina-principal-activos" } } },
              [
                _c("div", { staticClass: "last-post" }, [
                  _vm._v("Activo Fijo")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/activos.png" }
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
              { attrs: { to: { name: "pagina-principal-tesoreria" } } },
              [
                _c("div", { staticClass: "last-post" }, [_vm._v("Tesoreria")]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", {
                    attrs: { src: "/public/app/images/tesoreria.png" }
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
              { attrs: { to: { name: "pagina-principal-ventas" } } },
              [
                _c("div", { staticClass: "last-post" }, [_vm._v("Ventas")]),
                _vm._v(" "),
                _c("div", { staticClass: "module-image" }, [
                  _c("img", { attrs: { src: "/public/app/images/venta.png" } })
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardNueva.vue":
/*!**********************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardNueva.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardNueva_vue_vue_type_template_id_13a9992c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardNueva.vue?vue&type=template&id=13a9992c& */ "./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=template&id=13a9992c&");
/* harmony import */ var _DashboardNueva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardNueva.vue?vue&type=script&lang=js& */ "./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardNueva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardNueva_vue_vue_type_template_id_13a9992c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardNueva_vue_vue_type_template_id_13a9992c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/pagina-principal/DashboardNueva.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNueva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardNueva.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNueva_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=template&id=13a9992c&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=template&id=13a9992c& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNueva_vue_vue_type_template_id_13a9992c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardNueva.vue?vue&type=template&id=13a9992c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardNueva.vue?vue&type=template&id=13a9992c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNueva_vue_vue_type_template_id_13a9992c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardNueva_vue_vue_type_template_id_13a9992c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);