(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-administracion"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/menu */ "./resources/app/api/menu.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando opciones...espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      submodulos: []
    };
  },
  methods: {
    regresar: function regresar() {
      this.$router.push({
        name: "pagina-principal"
      });
    },
    obtenerSubModulos: function obtenerSubModulos() {
      var self = this;
      console.log(self.$route.meta.IdMenu);
      _api_menu__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerSubModulos({
        id_menu: self.$route.meta.IdMenu
      }, function (data) {
        self.submodulos = data.rows;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.obtenerSubModulos();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=template&id=97d0c6c4&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=template&id=97d0c6c4& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "simple-welcome-text" }, [
        _c("div", { staticClass: "text" }, [_vm._v("Módulo Administración")]),
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
          _vm._v("> Módulo Administración")
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.submodulos, function(item, index) {
        return [
          item.tipo_seccion === 1
            ? [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "alert alert-success" }, [
                      _c("span", [
                        _c("strong", [_vm._v(_vm._s(item.descripcion))])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _vm._l(item.seccion_menus, function(item2, index2) {
                      return [
                        item2.seccion_menu
                          ? [
                              _c("div", { staticClass: "col-md-2" }, [
                                _c(
                                  "div",
                                  { staticClass: "module-card" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            name:
                                              item2.seccion_menu.nombre_route
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "last-post" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                item2.seccion_menu.nombre_menu
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "module-image" },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src:
                                                  item2.seccion_menu
                                                    .file_thumbnail
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          item.tipo_seccion === 2
            ? [
                _c("div", { staticClass: "simple-welcome-text" }, [
                  _c("div", { staticClass: "text" }, [
                    _vm._v(_vm._s(item.descripcion))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _vm._l(item.seccion_menus, function(item2, index2) {
                      return [
                        item2.seccion_menu
                          ? [
                              _c("div", { staticClass: "col-md-3" }, [
                                _c(
                                  "div",
                                  { staticClass: "module-card-small" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            name:
                                              item2.seccion_menu.nombre_route
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "last-post" },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-book",
                                              attrs: { "aria-hidden": "true" }
                                            }),
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  item2.seccion_menu.nombre_menu
                                                )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                )
              ]
            : _vm._e()
        ]
      }),
      _vm._v(" "),
      _vm.loading
        ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/app/assets/images/block50.gif":
/*!*************************************************!*\
  !*** ./resources/app/assets/images/block50.gif ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/block50.gif?a75e3729ca58e29435a37b05f314fe5c";

/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardAdministracion.vue":
/*!*******************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardAdministracion.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardAdministracion_vue_vue_type_template_id_97d0c6c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardAdministracion.vue?vue&type=template&id=97d0c6c4& */ "./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=template&id=97d0c6c4&");
/* harmony import */ var _DashboardAdministracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardAdministracion.vue?vue&type=script&lang=js& */ "./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardAdministracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardAdministracion_vue_vue_type_template_id_97d0c6c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardAdministracion_vue_vue_type_template_id_97d0c6c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/pagina-principal/DashboardAdministracion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAdministracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAdministracion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAdministracion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=template&id=97d0c6c4&":
/*!**************************************************************************************************************!*\
  !*** ./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=template&id=97d0c6c4& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAdministracion_vue_vue_type_template_id_97d0c6c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardAdministracion.vue?vue&type=template&id=97d0c6c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/pagina-principal/DashboardAdministracion.vue?vue&type=template&id=97d0c6c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAdministracion_vue_vue_type_template_id_97d0c6c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardAdministracion_vue_vue_type_template_id_97d0c6c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);