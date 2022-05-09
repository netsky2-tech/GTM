(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["balance-general"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_reportes_financieros__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/reportes_financieros */ "./resources/app/api/reportes_financieros.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_niveles_cuentas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/niveles_cuentas */ "./resources/app/api/niveles_cuentas.js");
/* harmony import */ var _api_periodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/periodos */ "./resources/app/api/periodos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_4___default.a,
      niveles_cuenta: [],
      periodos_fiscales: [],
      periodos_meses: [],
      formato: 'pdf',
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      format: "d MMMM yyyy",
      fecha_inicialx: '',
      fecha_finalx: '',
      filter: {
        nivel_cuenta: "",
        periodo: "",
        mes: ""
      },
      cuentasContablesActivos: [],
      cuentasContablesPasivosCapital: [],
      total: 0
    };
  },
  computed: {
    total_activos: function total_activos() {
      return this.cuentasContablesActivos.reduce(function (carry, item) {
        return carry + (item.id_nivel_cuenta === 2 ? Number(item.saldox) : 0);
      }, 0);
    },
    total_pasivos_capital: function total_pasivos_capital() {
      return this.cuentasContablesPasivosCapital.reduce(function (carry, item) {
        return carry + (item.id_nivel_cuenta === 2 ? Number(item.saldox) : 0);
      }, 0);
    }
  },
  methods: {
    descargarReporte: function descargarReporte() {
      var self = this;
      self.loading = true;
      axios.post('contabilidad/estados-financieros/balance-general/reporte', {
        id_periodox: self.filter.periodo.id_periodo_fiscal,
        mesx: self.filter.mes.mes,
        id_mesx: self.filter.mes.id_periodo_mes,
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
        link.download = 'ReporteSituacionFinanciera.' + self.formato;
        link.click();
        self.loading = false;
      })["catch"](function (error) {
        console.log(error);
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
    },
    obtenerMesesPeriodo: function obtenerMesesPeriodo() {
      var self = this;
      self.filter.mes = null;
      if (self.periodos_fiscales.meses_periodo) self.periodos_meses = self.periodos_fiscales.meses_periodo;
    },
    obtenerDiasMes: function obtenerDiasMes() {
      var self = this;
      self.fecha_finalx = moment(new Date(self.filter.periodo.periodo, self.filter.mes.mes - 1, self.daysInMonth(self.filter.mes.mes, self.filter.periodo.periodo))).format("DD/MM/YYYY");
    },
    daysInMonth: function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },

    /* onDateSelect(date) {
        this.filter.fecha_inicial = moment(date).format("YYYY-MM-DD"); //
        },
        onDateSelect2(date) {
        this.filter.fecha_final = moment(date).format("YYYY-MM-DD"); //
        },*/
    obtenerBalanceGeneral: function obtenerBalanceGeneral() {
      var self = this;
      self.loading = true;
      _api_reportes_financieros__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerBalanceGeneral(self.filter, function (data) {
        self.cuentasContablesActivos = data.activos;
        self.cuentasContablesPasivosCapital = data.pasivo_capital;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosPeriodos: function obtenerTodosPeriodos() {
      var _this = this;

      var self = this;
      _api_periodos__WEBPACK_IMPORTED_MODULE_3__["default"].obtenerTodos(function (data) {
        self.periodos_fiscales = data.periodos;
        self.filter.periodo = data.periodos[0];
        self.periodos_meses = data.periodos[0].meses_periodo;
        self.filter.mes = data.periodos[0].meses_periodo[0];
        self.fecha_finalx = moment(new Date(self.filter.periodo.periodo, self.filter.mes.mes - 1, self.daysInMonth(self.filter.mes.mes, self.filter.periodo.periodo))).format("DD/MM/YYYY");
        _this.loading = false;
      }, function (err) {
        console.log(err);
      });
    },
    obtenerTodosNivelesCuenta: function obtenerTodosNivelesCuenta() {
      var self = this;
      _api_niveles_cuentas__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerTodosNivelesCuenta(function (data) {
        self.niveles_cuenta = data;
        self.filter.nivel_cuenta = self.niveles_cuenta[1];
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.obtenerTodosNivelesCuenta();
    this.obtenerTodosPeriodos();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-generar[data-v-5af0b3d6] {\n  margin-top: 33px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=template&id=5af0b3d6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=template&id=5af0b3d6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
          _vm._v("Estado de Situación Financiera")
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
            _vm._v("> Estado de Situación Financiera")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { staticClass: "label-search" }, [
                _vm._v("Tipos Cuentas:")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  disabled: true,
                  options: _vm.niveles_cuenta,
                  label: "descripcion"
                },
                model: {
                  value: _vm.filter.nivel_cuenta,
                  callback: function($$v) {
                    _vm.$set(_vm.filter, "nivel_cuenta", $$v)
                  },
                  expression: "filter.nivel_cuenta"
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
                _vm._v("Periodo:")
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
              _c("label", { staticClass: "label-search" }, [_vm._v("Mes:")]),
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
        _c("div", { staticClass: "col-sm-3" }, [
          _c("div", { staticClass: "form-group" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-info btn-generar",
                on: { click: _vm.obtenerBalanceGeneral }
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
                _vm._v(
                  "Estado de Situación Financiera al " +
                    _vm._s(_vm.fecha_finalx)
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "invoice-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("table", { staticClass: "table invoice-table" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.cuentasContablesActivos, function(
                        cuentaContable
                      ) {
                        return _c(
                          "tr",
                          { key: cuentaContable.id_cierre_mensual },
                          [
                            cuentaContable.id_nivel_cuenta === 2
                              ? _c("td", { staticClass: "text-center" }, [
                                  _c("strong", [
                                    _vm._v(_vm._s(cuentaContable.cta_contable))
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 3
                              ? _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(cuentaContable.cta_contable))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 2
                              ? _c("td", { staticClass: "text-left" }, [
                                  _c("strong", [
                                    _vm._v(_vm._s(cuentaContable.nombre_cuenta))
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 3
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: { "padding-left": "2em" }
                                  },
                                  [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 2
                              ? _c("td", { staticClass: "text-center" }, [
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatMoney")(
                                          Number(cuentaContable.saldox),
                                          2
                                        )
                                      )
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 3
                              ? _c("td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        Number(cuentaContable.saldox),
                                        2
                                      )
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("tfoot")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("table", { staticClass: "table invoice-table" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.cuentasContablesPasivosCapital, function(
                        cuentaContable
                      ) {
                        return _c(
                          "tr",
                          { key: cuentaContable.id_cierre_mensual },
                          [
                            cuentaContable.id_nivel_cuenta === 2
                              ? _c("td", { staticClass: "text-center" }, [
                                  _c("strong", [
                                    _vm._v(_vm._s(cuentaContable.cta_contable))
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 3
                              ? _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(cuentaContable.cta_contable))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 2
                              ? _c("td", { staticClass: "text-left" }, [
                                  _c("strong", [
                                    _vm._v(_vm._s(cuentaContable.nombre_cuenta))
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 3
                              ? _c(
                                  "td",
                                  {
                                    staticClass: "text-left",
                                    staticStyle: { "padding-left": "2em" }
                                  },
                                  [_vm._v(_vm._s(cuentaContable.nombre_cuenta))]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 2
                              ? _c("td", { staticClass: "text-center" }, [
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatMoney")(
                                          Number(cuentaContable.saldox),
                                          2
                                        )
                                      )
                                    )
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            cuentaContable.id_nivel_cuenta === 3
                              ? _c("td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatMoney")(
                                        Number(cuentaContable.saldox),
                                        2
                                      )
                                    )
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _vm._m(2)
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("table", { staticClass: "table invoice-table" }, [
                    _c("thead", [
                      _c("tr", [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right table-number" }, [
                          _c("strong", [
                            _vm._v(
                              "C$ " +
                                _vm._s(
                                  _vm._f("formatMoney")(_vm.total_activos, 2)
                                )
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("table", { staticClass: "table invoice-table" }, [
                    _c("thead", [
                      _c("tr", [
                        _vm._m(4),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right table-number" }, [
                          _c("strong", [
                            _vm._v(
                              "C$ " +
                                _vm._s(
                                  _vm._f("formatMoney")(
                                    _vm.total_pasivos_capital,
                                    2
                                  )
                                )
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody")
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
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Nombre Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Saldo")])
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
          _vm._v("Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left table-number" }, [
          _vm._v("Nombre Cuenta")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Saldo")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [_c("tr")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-right table-number" }, [
      _c("strong", [_vm._v("Total Activos")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", { staticClass: "text-right table-number" }, [
      _c("strong", [_vm._v("Total Pasivos + Capital")])
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

/***/ "./resources/app/api/niveles_cuentas.js":
/*!**********************************************!*\
  !*** ./resources/app/api/niveles_cuentas.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodosNivelesCuenta: function obtenerTodosNivelesCuenta(cb, errorCb) {
    axios.get('contabilidad/niveles-cuenta/obtener-niveles-cuenta-todos').then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNivelesCuenta: function obtenerNivelesCuenta(data, cb, errorCb) {
    axios.post('contabilidad/niveles-cuenta/obtener-niveles-cuenta', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerNivelCuenta: function obtenerNivelCuenta(data, cb, errorCb) {
    axios.post('contabilidad/niveles-cuenta/obtener-nivel-cuenta', data).then(function (response) {
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
    axios.put('contabilidad/niveles-cuenta/actualizar', data).then(function (response) {
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

/***/ "./resources/app/components/reportes_financieros/BalanceGeneral.vue":
/*!**************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanceGeneral.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BalanceGeneral_vue_vue_type_template_id_5af0b3d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BalanceGeneral.vue?vue&type=template&id=5af0b3d6&scoped=true& */ "./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=template&id=5af0b3d6&scoped=true&");
/* harmony import */ var _BalanceGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BalanceGeneral.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BalanceGeneral_vue_vue_type_style_index_0_id_5af0b3d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true& */ "./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BalanceGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BalanceGeneral_vue_vue_type_template_id_5af0b3d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BalanceGeneral_vue_vue_type_template_id_5af0b3d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5af0b3d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes_financieros/BalanceGeneral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanceGeneral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_style_index_0_id_5af0b3d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=style&index=0&id=5af0b3d6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_style_index_0_id_5af0b3d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_style_index_0_id_5af0b3d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_style_index_0_id_5af0b3d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_style_index_0_id_5af0b3d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_style_index_0_id_5af0b3d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=template&id=5af0b3d6&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=template&id=5af0b3d6&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_template_id_5af0b3d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BalanceGeneral.vue?vue&type=template&id=5af0b3d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes_financieros/BalanceGeneral.vue?vue&type=template&id=5af0b3d6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_template_id_5af0b3d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BalanceGeneral_vue_vue_type_template_id_5af0b3d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);