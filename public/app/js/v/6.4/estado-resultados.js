(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["estado-resultados"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_reportes_financieros__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/reportes_financieros */ "./resources/app/api/reportes_financieros.js");
/* harmony import */ var _api_periodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/periodos */ "./resources/app/api/periodos.js");
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



var fecha_actual = new Date();
fecha_actual.setHours(23, 59, 59, 999);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_2___default.a,
      formato: 'pdf',
      periodos_fiscales: [],
      periodos_fiscales1: [],
      periodos_meses: [],
      periodos_meses1: [],
      fecha_finalx: '',
      fecha_finalx1: '',
      filter: {
        periodo: "",
        mes: "",
        periodo1: "",
        mes1: ""
      },
      cuentasContables: [],
      errorMessages: [],
      total: 0
    };
  },
  computed: {
    total_perdida_ganancia: function total_perdida_ganancia() {
      return this.cuentasContables.reduce(function (carry, item) {
        return carry + Number(item.saldo_signo);
      }, 0);
    }
  },
  methods: {
    descargarReporte: function descargarReporte() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/estado-resultado/reporte', {
        id_periodox: self.filter.periodo.id_periodo_fiscal,
        mesx: self.filter.mes.mes,
        id_mesx: self.filter.mes.id_periodo_mes,
        id_periodox1: self.filter.periodo1.id_periodo_fiscal,
        mesx1: self.filter.mes1.mes,
        id_mesx1: self.filter.mes1.id_periodo_mes,
        id_nivel_cuenta: 3,
        extension: self.formato
      }, {
        responseType: 'blob'
      }).then(function (_ref) {
        var data = _ref.data;
        var blob = new Blob([data], {
          type: 'application/pdf'
        });
        self.formato === 'xls' ? blob = new Blob([data], {
          type: 'application/octet-stream'
        }) : blob = new Blob([data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'EstadoResultado.' + self.formato;
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    obtenerEstadoResultados: function obtenerEstadoResultados() {
      var self = this;
      _api_reportes_financieros__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerEstadoResultados(self.filter, function (data) {
        self.cuentasContables = data;
      }, function (err) {
        //console.log(err)
        alertify.error('Rango de Fechas no válido');
      });
    },
    obtenerMesesPeriodo: function obtenerMesesPeriodo() {
      var self = this;
      self.filter.mes = null;
      if (self.periodos_fiscales.meses_periodo) self.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerMesesPeriodo1: function obtenerMesesPeriodo1() {
      var self = this;
      self.filter.mes1 = null;
      self.periodos_meses1 = null;

      if (self.periodos_fiscales1.meses_periodo) {
        self.periodos_meses1 = self.periodos_fiscales1.meses_periodo;
      }
    },
    obtenerDiasMes: function obtenerDiasMes() {
      var self = this;
      self.fecha_finalx = moment(new Date(self.filter.periodo.periodo, self.filter.mes.mes - 1, self.daysInMonth(self.filter.mes.mes, self.filter.periodo.periodo))).format("DD/MM/YYYY");
    },
    obtenerDiasMes1: function obtenerDiasMes1() {
      var self = this;
      self.fecha_finalx1 = moment(new Date(self.filter.periodo1.periodo, self.filter.mes1.mes - 1, self.daysInMonth(self.filter.mes1.mes, self.filter.periodo1.periodo))).format("DD/MM/YYYY");
    },
    daysInMonth: function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },
    obtenerTodosPeriodos: function obtenerTodosPeriodos() {
      var self = this;
      _api_periodos__WEBPACK_IMPORTED_MODULE_1__["default"].obtenerTodos(function (data) {
        self.periodos_fiscales = data.periodos;
        self.filter.periodo = data.periodos[0];
        self.periodos_meses = data.periodos[0].meses_periodo;
        self.filter.mes = data.periodos[0].meses_periodo[0];
        self.periodos_fiscales1 = data.periodos;
        self.filter.periodo1 = data.periodos[0];
        self.periodos_meses1 = data.periodos[0].meses_periodo;
        self.filter.mes1 = data.periodos[0].meses_periodo[0];
        self.fecha_finalx = moment(new Date(self.filter.periodo.periodo, self.filter.mes.mes - 1, self.daysInMonth(self.filter.mes.mes, self.filter.periodo.periodo))).format("DD/MM/YYYY");
        self.fecha_finalx1 = moment(new Date(self.filter.periodo1.periodo, self.filter.mes1.mes - 1, self.daysInMonth(self.filter.mes1.mes, self.filter.periodo1.periodo))).format("DD/MM/YYYY");
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.obtenerTodosPeriodos();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-656f72d4] {\n  min-width: 120px;\n}\n.detail-link[data-v-656f72d4] {\n  width: 60px;\n  position: relative;\n}\n.detail-link .link[data-v-656f72d4] {\n  width: 10px;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  margin-top: 8px;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.detail-link .link[data-v-656f72d4]:before {\n  content: \"\";\n  width: 4px;\n  height: 10px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  margin: 0px auto;\n  margin-top: -4px;\n  position: absolute;\n  background-color: #595959;\n  border: 1px solid #595959;\n}\n.btn-generar[data-v-656f72d4] {\n  margin-top: 33px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=template&id=656f72d4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=template&id=656f72d4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "content-box-header" }, [
        _c("div", { staticClass: "box-title" }, [
          _vm._v("Estado de Resultados")
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
                attrs: { to: { name: "pagina-principal-contabilidad" } }
              },
              [_vm._v(" Módulo contabilidad")]
            ),
            _vm._v("> Estado resultado")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-2" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { staticClass: "label-search" }, [
                _vm._v("Periodo Actual:")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { options: _vm.periodos_fiscales, label: "periodo" },
                on: {
                  input: function($event) {
                    return _vm.obtenerMesesPeriodo()
                  }
                },
                model: {
                  value: _vm.filter.periodo,
                  callback: function($$v) {
                    _vm.$set(_vm.filter, "periodo", $$v)
                  },
                  expression: "filter.periodo"
                }
              })
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
              _c("label", { staticClass: "label-search" }, [
                _vm._v("Mes Actual:")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { options: _vm.periodos_meses, label: "descripcion" },
                on: {
                  input: function($event) {
                    return _vm.obtenerDiasMes()
                  }
                },
                model: {
                  value: _vm.filter.mes,
                  callback: function($$v) {
                    _vm.$set(_vm.filter, "mes", $$v)
                  },
                  expression: "filter.mes"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { staticClass: "label-search" }, [
                _vm._v("Periodo Anterior:")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { options: _vm.periodos_fiscales1, label: "periodo" },
                on: {
                  input: function($event) {
                    return _vm.obtenerMesesPeriodo1()
                  }
                },
                model: {
                  value: _vm.filter.periodo1,
                  callback: function($$v) {
                    _vm.$set(_vm.filter, "periodo1", $$v)
                  },
                  expression: "filter.periodo1"
                }
              })
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
              _c("label", { staticClass: "label-search" }, [
                _vm._v("Mes Anterior:")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { options: _vm.periodos_meses1, label: "descripcion" },
                on: {
                  input: function($event) {
                    return _vm.obtenerDiasMes1()
                  }
                },
                model: {
                  value: _vm.filter.mes1,
                  callback: function($$v) {
                    _vm.$set(_vm.filter, "mes1", $$v)
                  },
                  expression: "filter.mes1"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _c("div", { staticClass: "form-group" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-info btn-generar",
                on: { click: _vm.obtenerEstadoResultados }
              },
              [_c("i", { staticClass: "pe-7s-search" }), _vm._v(" Generar")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v(" Formato:")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.formato,
                    expression: "formato"
                  }
                ],
                staticClass: "form-control",
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
                    _vm.formato = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "pdf" } }, [_vm._v("PDF")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "xls" } }, [_vm._v("Excel")])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-generar",
              attrs: { type: "button" },
              on: { click: _vm.descargarReporte }
            },
            [_vm._v("Imprimir\n\t\t\t\t")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "invoice-wrapper" },
      [
        _c("div", { staticClass: "invoice-info" }, [
          _c("div", { staticClass: "company-info" }, [
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
                _vm._v("Estado de Resultados al " + _vm._s(_vm.fecha_finalx))
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "invoice-body" }, [
          _c("table", { staticClass: "table invoice-table" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.cuentasContables, function(cuentaContable, key) {
                  return [
                    _c("tr", { key: cuentaContable.id_cierre_mensual }, [
                      _c(
                        "td",
                        {
                          staticClass: "text-left",
                          staticStyle: { width: "15%" }
                        },
                        [_vm._v(_vm._s(cuentaContable.nombre))]
                      ),
                      _vm._v(" "),
                      cuentaContable.signo
                        ? _c("td", { staticClass: "text-center" })
                        : _vm._e(),
                      _vm._v(" "),
                      !cuentaContable.signo
                        ? _c("td", { staticClass: "text-center" }, [
                            _vm._v("( - )")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "text-center",
                          staticStyle: { width: "10%" }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm._f("formatMoney")(
                                Math.abs(Number(cuentaContable.saldox)),
                                2
                              )
                            )
                          )
                        ]
                      )
                    ])
                  ]
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("tfoot", [
              _c("tr", [
                _vm._m(1),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("strong", [
                    _vm._v(
                      "C$ " +
                        _vm._s(
                          _vm._f("formatMoney")(_vm.total_perdida_ganancia, 2)
                        )
                    )
                  ])
                ])
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
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-left table-number" }, [_vm._v("Cuenta")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Operacion")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Saldo Actual")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right", attrs: { colspan: "2" } }, [
      _c("strong", [_vm._v("RESULTADO DESPUÉS DEL I.S.R.")])
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

/***/ "./resources/app/api/periodos.js":
/*!***************************************!*\
  !*** ./resources/app/api/periodos.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodos: function obtenerTodos(cb, errorCb) {
    axios.get('contabilidad/periodos/obtener-todos').then(function (response) {
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
    axios.post('contabilidad/periodos/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerPeriodo: function obtenerPeriodo(data, cb, errorCb) {
    axios.post('contabilidad/periodos/obtener-periodo', data).then(function (response) {
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
    axios.post('contabilidad/periodos/registrar', data).then(function (response) {
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
    axios.put('contabilidad/periodos/actualizar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cerrar: function cerrar(data, cb, errorCb) {
    axios.put('contabilidad/periodos/cerrar-mes', data).then(function (response) {
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

/***/ "./resources/app/api/reportes_financieros.js":
/*!***************************************************!*\
  !*** ./resources/app/api/reportes_financieros.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerBalanzaComprobacion: function obtenerBalanzaComprobacion(data, cb, errorCb) {
    axios.post('contabilidad/estados-financieros/balanza', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBalanzaComprobacionRta91: function obtenerBalanzaComprobacionRta91(data, cb, errorCb) {
    axios.post('contabilidad/estados-financieros/balanza-nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerDependenciasBalanza: function obtenerDependenciasBalanza(data, cb, errorCb) {
    axios.post('contabilidad/estados-financieros/balanza/dependencias', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBalanceGeneral: function obtenerBalanceGeneral(data, cb, errorCb) {
    axios.post('contabilidad/estados-financieros/balance-general', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerEstadoResultados: function obtenerEstadoResultados(data, cb, errorCb) {
    axios.post('contabilidad/estados-financieros/estado-resultados', data).then(function (response) {
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

/***/ "./resources/app/components/reportes_financieros/EstadoResultados.vue":
/*!****************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/EstadoResultados.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EstadoResultados_vue_vue_type_template_id_656f72d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EstadoResultados.vue?vue&type=template&id=656f72d4&scoped=true& */ "./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=template&id=656f72d4&scoped=true&");
/* harmony import */ var _EstadoResultados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EstadoResultados.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EstadoResultados_vue_vue_type_style_index_0_id_656f72d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true& */ "./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EstadoResultados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EstadoResultados_vue_vue_type_template_id_656f72d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EstadoResultados_vue_vue_type_template_id_656f72d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "656f72d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes_financieros/EstadoResultados.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstadoResultados.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_style_index_0_id_656f72d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=style&index=0&id=656f72d4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_style_index_0_id_656f72d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_style_index_0_id_656f72d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_style_index_0_id_656f72d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_style_index_0_id_656f72d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_style_index_0_id_656f72d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=template&id=656f72d4&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=template&id=656f72d4&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_template_id_656f72d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EstadoResultados.vue?vue&type=template&id=656f72d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/EstadoResultados.vue?vue&type=template&id=656f72d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_template_id_656f72d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EstadoResultados_vue_vue_type_template_id_656f72d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);