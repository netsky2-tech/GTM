(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facturacion-reportes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/menu */ "./resources/app/api/menu.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_0___default.a,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_1___default.a,
      reportes: [],
      format: "dd-MM-yyyy",
      clientesBusquedaURL: "/ventas/clientes/buscar",
      sucursalesBusquedaURL: "/sucursales/buscar",
      vendedoresBusquedaURL: "/ventas/vendedores/buscar",
      errorMessages: [],
      todos_clientes: true,
      todas_sucursales: true,
      todos_vendedores: true,
      tipoAgrupacion: 'ReporteVentasPorCliente',
      //Reporte estado cuenta detallado
      fechaCorteEstadoCuentaDetallado: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialEstadoCuentaDetallado: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteEstadoCuentaDetalladoX: new Date(),
      fechaInicialEstadoCuentaDetalladoX: new Date(),
      formatoEstadoCuentaDetallado: 'pdf',
      tipoEstadoCuentaDetallado: 0,
      cliente_estadocuentadetallado: {
        id_cliente: 0
      },
      id_cliente_estadocuentadetallado: '',
      fechaCorteEstadoCuentaDetalladoR2: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialEstadoCuentaDetalladoR2: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteEstadoCuentaDetalladoXR2: new Date(),
      fechaInicialEstadoCuentaDetalladoXR2: new Date(),
      formatoEstadoCuentaDetalladoR2: 'pdf',
      tipoEstadoCuentaDetalladoR2: 0,
      cliente_estadocuentadetalladoR2: {
        id_sucursal: 0
      },
      id_cliente_estadocuentadetalladoR2: '',
      vendedor_estadocuentadetalladoR2: {
        id_vendedor: 0
      },
      id_vendedor_estadocuentadetalladoR2: '',
      formatoAsignacionesComision: 'pdf',
      vendedor_estadocuentadetalladoR3: {
        id_vendedor: 0
      },
      id_vendedor_estadocuentadetalladoR3: '',
      todos_vendedoresR3: true,
      todos_vendedoresR4: true,
      vendedor_estadocuentadetalladoR4: {
        id_vendedor: 0
      },
      id_vendedor_estadocuentadetalladoR4: '',
      tipoAgrupacionR4: 'ReporteVentasPorVendedorComisiones',
      fechaCorteComisionR4: moment(new Date()).format("YYYY-MM-DD"),
      fechaInicialComisionR4: moment(new Date()).format("YYYY-MM-DD"),
      fechaCorteComisionR4X: new Date(),
      fechaInicialComisionR4X: new Date(),
      formatoAsignacionesComisionR4: 'pdf'
    };
  },
  methods: {
    cambiarClientes: function cambiarClientes() {
      var self = this;

      if (self.todos_clientes) {
        self.cliente_estadocuentadetallado = {};
        self.cliente_estadocuentadetallado.id_cliente = 0;
      }
    },
    seleccionarFechaCorteEstadoCuentaDetallado: function seleccionarFechaCorteEstadoCuentaDetallado(date) {
      this.fechaCorteEstadoCuentaDetallado = moment(date).format("YYYY-MM-DD"); //
    },
    seleccionarFechaInicialEstadoCuentaDetallado: function seleccionarFechaInicialEstadoCuentaDetallado(date) {
      this.fechaInicialEstadoCuentaDetallado = moment(date).format("YYYY-MM-DD"); //
    },
    seleccionarClienteEstadoCuentaDetallado: function seleccionarClienteEstadoCuentaDetallado(e) {
      var clienteP = e.target.value;
      var self = this;
      self.cliente_estadocuentadetallado = clienteP; //self.id_cliente_estadocuentadetallado = self.cliente_estadocuentadetallado.id_cliente;
    },
    descargarReporteEstadoCuentaDetallado: function descargarReporteEstadoCuentaDetallado() {
      var self = this;

      if (self.cliente_estadocuentadetallado.id_cliente >= 0) {
        self.loading = true;
        axios.post('inventario/facturas/reporte/clientes', {
          fechaInicial: self.fechaInicialEstadoCuentaDetallado,
          fechaFinal: self.fechaCorteEstadoCuentaDetallado,
          extension: self.formatoEstadoCuentaDetallado,
          tipo_facturax: self.tipoEstadoCuentaDetallado,
          id_cliente: self.cliente_estadocuentadetallado.id_cliente,
          id_sucursal: self.cliente_estadocuentadetalladoR2.id_sucursal,
          id_vendedor: self.vendedor_estadocuentadetalladoR2.id_vendedor,
          agrupacion: self.tipoAgrupacion
        }, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoEstadoCuentaDetallado === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : self.formatoEstadoCuentaDetallado === 'pdf' ? blob = new Blob([data], {
            type: 'application/pdf'
          }) : blob = new Blob([data], {
            type: 'text/html'
          });
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'VentasPorCliente.' + self.formatoEstadoCuentaDetallado;
          link.click();
          self.loading = false;
        })["catch"](function (error) {
          console.log(error);
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("No ha seleccionado un cliente válido.....", 5);
      }
    },
    cambiarClientesR2: function cambiarClientesR2() {
      var self = this;

      if (self.todas_sucursales) {
        self.cliente_estadocuentadetalladoR2 = {};
        self.cliente_estadocuentadetalladoR2.id_sucursal = 0;
      }
    },
    cambiarVendedor: function cambiarVendedor() {
      var self = this;

      if (self.todos_vendedores) {
        self.vendedor_estadocuentadetalladoR2 = {};
        self.vendedor_estadocuentadetalladoR2.id_vendedor = 0;
      }
    },
    cambiarVendedorR3: function cambiarVendedorR3() {
      var self = this;

      if (self.todos_vendedoresR3) {
        self.vendedor_estadocuentadetalladoR3 = {};
        self.vendedor_estadocuentadetalladoR3.id_vendedor = 0;
      }
    },
    seleccionarVendedorEstadoCuentaDetalladoR3: function seleccionarVendedorEstadoCuentaDetalladoR3(e) {
      var clienteP = e.target.value;
      var self = this;
      self.vendedor_estadocuentadetalladoR3 = clienteP;
    },
    descargarReporteComisionesAsignacion: function descargarReporteComisionesAsignacion() {
      var self = this;

      if (self.vendedor_estadocuentadetalladoR3.id_vendedor >= 0) {
        self.loading = true;
        axios.post('ventas/comisiones/reporte', {
          extension: self.formatoAsignacionesComision,
          id_vendedor: self.vendedor_estadocuentadetalladoR3.id_vendedor
        }, {
          responseType: 'blob'
        }).then(function (_ref2) {
          var data = _ref2.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoAsignacionesComision === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : self.formatoAsignacionesComision === 'pdf' ? blob = new Blob([data], {
            type: 'application/pdf'
          }) : blob = new Blob([data], {
            type: 'text/html'
          });
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteAsignacionComisiones.' + self.formatoAsignacionesComision;
          link.click();
          self.loading = false;
        })["catch"](function (error) {
          console.log(error);
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("No ha seleccionado un vendedor válida.....", 5);
      }
    },
    seleccionarFechaCorteComisionR4: function seleccionarFechaCorteComisionR4(date) {
      this.fechaCorteComisionR4 = moment(date).format("YYYY-MM-DD"); //
    },
    seleccionarFechaInicialComisionR4: function seleccionarFechaInicialComisionR4(date) {
      this.fechaInicialComisionR4 = moment(date).format("YYYY-MM-DD"); //
    },
    cambiarVendedorR4: function cambiarVendedorR4() {
      var self = this;

      if (self.todos_vendedoresR4) {
        self.vendedor_estadocuentadetalladoR4 = {};
        self.vendedor_estadocuentadetalladoR4.id_vendedor = 0;
      }
    },
    descargarReporteComisiones: function descargarReporteComisiones() {
      var self = this;

      if (self.vendedor_estadocuentadetalladoR4.id_vendedor >= 0) {
        self.loading = true;
        axios.post('inventario/facturas/reporte/comisiones', {
          fechaInicial: self.fechaInicialComisionR4,
          fechaFinal: self.fechaCorteComisionR4,
          extension: self.formatoAsignacionesComisionR4,
          id_vendedor: self.vendedor_estadocuentadetalladoR4.id_vendedor,
          agrupacion: self.tipoAgrupacionR4
        }, {
          responseType: 'blob'
        }).then(function (_ref3) {
          var data = _ref3.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoAsignacionesComisionR4 === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : self.formatoAsignacionesComisionR4 === 'pdf' ? blob = new Blob([data], {
            type: 'application/pdf'
          }) : blob = new Blob([data], {
            type: 'text/html'
          });
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.href = window.URL.createObjectURL(blob);
          link.download = self.tipoAgrupacionR4 + self.formatoAsignacionesComisionR4;
          link.click();
          self.loading = false;
        })["catch"](function (error) {
          console.log(error);
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("No ha seleccionado un cliente válido.....", 5);
      }
    },
    cargarListaReportes: function cargarListaReportes() {
      var self = this;
      _api_menu__WEBPACK_IMPORTED_MODULE_2__["default"].obtenerListaReportes(function (data) {
        if (data.rows.length > 0) {
          data.rows.forEach(function (reportex, key) {
            self.reportes.push(reportex.id_menu);
          });
        }

        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.cargarListaReportes();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.check-label2 {\n\tmargin-top: 40px;\n}\n.btn-imprimir {\n\tmargin-top: 33px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=template&id=543171ba&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=template&id=543171ba& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "text" }, [_vm._v("Reportes Ventas")]),
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
              [_vm._v(" Módulo Ventas")]
            ),
            _vm._v("> Reportes")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.reportes.indexOf(430) >= 0
        ? [
            _c(
              "div",
              { staticClass: "row" },
              [
                _c("div", { staticClass: "col-md-9" }, [
                  _c("div", { staticClass: "content-box" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "check-label2" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.todos_clientes,
                                  expression: "todos_clientes"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(_vm.todos_clientes)
                                  ? _vm._i(_vm.todos_clientes, null) > -1
                                  : _vm.todos_clientes
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a = _vm.todos_clientes,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.todos_clientes = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.todos_clientes = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.todos_clientes = $$c
                                    }
                                  },
                                  _vm.cambiarClientes
                                ]
                              }
                            }),
                            _vm._v(" Todos los clientes")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.todos_clientes
                        ? _c("div", { staticClass: "col-sm-9" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v(" Cliente")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("typeahead", {
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      disabled: _vm.todos_clientes,
                                      initial:
                                        _vm.cliente_estadocuentadetallado,
                                      params: { es_deudor: false },
                                      trim: 80,
                                      url: _vm.clientesBusquedaURL
                                    },
                                    on: {
                                      input:
                                        _vm.seleccionarClienteEstadoCuentaDetallado
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages
                                    .id_cliente_estadocuentadetallado,
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.todos_clientes
                        ? _c("div", { staticClass: "col-sm-9" }, [_vm._m(1)])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "check-label2" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.todas_sucursales,
                                  expression: "todas_sucursales"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(_vm.todas_sucursales)
                                  ? _vm._i(_vm.todas_sucursales, null) > -1
                                  : _vm.todas_sucursales
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a = _vm.todas_sucursales,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.todas_sucursales = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.todas_sucursales = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.todas_sucursales = $$c
                                    }
                                  },
                                  _vm.cambiarClientesR2
                                ]
                              }
                            }),
                            _vm._v(" Todos las sucursales")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.todas_sucursales
                        ? _c("div", { staticClass: "col-sm-9" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v(" Sucursal")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("typeahead", {
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      initial:
                                        _vm.cliente_estadocuentadetalladoR2,
                                      trim: 80,
                                      url: _vm.sucursalesBusquedaURL
                                    },
                                    on: {
                                      input:
                                        _vm.seleccionarClienteEstadoCuentaDetalladoR2
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages
                                    .id_cliente_estadocuentadetalladoR2,
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.todas_sucursales
                        ? _c("div", { staticClass: "col-sm-9" }, [_vm._m(2)])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "check-label2" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.todos_vendedores,
                                  expression: "todos_vendedores"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(_vm.todos_vendedores)
                                  ? _vm._i(_vm.todos_vendedores, null) > -1
                                  : _vm.todos_vendedores
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a = _vm.todos_vendedores,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.todos_vendedores = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.todos_vendedores = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.todos_vendedores = $$c
                                    }
                                  },
                                  _vm.cambiarVendedor
                                ]
                              }
                            }),
                            _vm._v(" Todos las vendedores")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.todos_vendedores
                        ? _c("div", { staticClass: "col-sm-9" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v(" Vendedor")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("typeahead", {
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      initial:
                                        _vm.vendedor_estadocuentadetalladoR2,
                                      trim: 80,
                                      url: _vm.vendedoresBusquedaURL
                                    },
                                    on: {
                                      input:
                                        _vm.seleccionarVendedorEstadoCuentaDetalladoR2
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages
                                    .id_vendedor_estadocuentadetalladoR2,
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.todos_vendedores
                        ? _c("div", { staticClass: "col-sm-9" }, [_vm._m(3)])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Tipos Factura:")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.number",
                                  value: _vm.tipoEstadoCuentaDetallado,
                                  expression: "tipoEstadoCuentaDetallado",
                                  modifiers: { number: true }
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return _vm._n(val)
                                    })
                                  _vm.tipoEstadoCuentaDetallado = $event.target
                                    .multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "0" } }, [
                                _vm._v("Todas")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v("Contado")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Crédito")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Fecha Inicial")
                            ]),
                            _vm._v(" "),
                            _c("datepicker", {
                              attrs: { format: _vm.format, language: _vm.es },
                              on: {
                                selected:
                                  _vm.seleccionarFechaInicialEstadoCuentaDetallado
                              },
                              model: {
                                value: _vm.fechaInicialEstadoCuentaDetalladoX,
                                callback: function($$v) {
                                  _vm.fechaInicialEstadoCuentaDetalladoX = $$v
                                },
                                expression: "fechaInicialEstadoCuentaDetalladoX"
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
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Fecha Final")
                            ]),
                            _vm._v(" "),
                            _c("datepicker", {
                              attrs: { format: _vm.format, language: _vm.es },
                              on: {
                                selected:
                                  _vm.seleccionarFechaCorteEstadoCuentaDetallado
                              },
                              model: {
                                value: _vm.fechaCorteEstadoCuentaDetalladoX,
                                callback: function($$v) {
                                  _vm.fechaCorteEstadoCuentaDetalladoX = $$v
                                },
                                expression: "fechaCorteEstadoCuentaDetalladoX"
                              }
                            })
                          ],
                          1
                        )
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
                                  value: _vm.formatoEstadoCuentaDetallado,
                                  expression: "formatoEstadoCuentaDetallado"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.formatoEstadoCuentaDetallado = $event
                                    .target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "pdf" } }, [
                                _vm._v("PDF")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "xls" } }, [
                                _vm._v("Excel")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "html" } }, [
                                _vm._v("HTML")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Tipos Agrupación:")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.tipoAgrupacion,
                                  expression: "tipoAgrupacion"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.tipoAgrupacion = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { value: "ReporteVentasPorCliente" } },
                                [_vm._v("Por Cliente")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  attrs: { value: "ReporteVentasPorSucursal" }
                                },
                                [_vm._v("Por Sucursal")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  attrs: { value: "ReporteVentasPorVendedor" }
                                },
                                [_vm._v("Por Vendedor")]
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-imprimir",
                            attrs: { type: "button" },
                            on: {
                              click: _vm.descargarReporteEstadoCuentaDetallado
                            }
                          },
                          [_vm._v("Imprimir\n\t\t\t\t\t\t")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "content-box" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "check-label2" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.todos_vendedoresR3,
                                  expression: "todos_vendedoresR3"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(_vm.todos_vendedoresR3)
                                  ? _vm._i(_vm.todos_vendedoresR3, null) > -1
                                  : _vm.todos_vendedoresR3
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a = _vm.todos_vendedoresR3,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.todos_vendedoresR3 = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.todos_vendedoresR3 = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.todos_vendedoresR3 = $$c
                                    }
                                  },
                                  _vm.cambiarVendedorR3
                                ]
                              }
                            }),
                            _vm._v(" Todos los vendedores")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.todos_vendedoresR3
                        ? _c("div", { staticClass: "col-sm-9" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v(" Vendedor")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("typeahead", {
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      initial:
                                        _vm.vendedor_estadocuentadetalladoR3,
                                      trim: 80,
                                      url: _vm.vendedoresBusquedaURL
                                    },
                                    on: {
                                      input:
                                        _vm.seleccionarVendedorEstadoCuentaDetalladoR3
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages
                                    .id_vendedor_estadocuentadetalladoR3,
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.todos_vendedoresR3
                        ? _c("div", { staticClass: "col-sm-9" }, [_vm._m(5)])
                        : _vm._e(),
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
                                  value: _vm.formatoAsignacionesComision,
                                  expression: "formatoAsignacionesComision"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.formatoAsignacionesComision = $event
                                    .target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "pdf" } }, [
                                _vm._v("PDF")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "xls" } }, [
                                _vm._v("Excel")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "html" } }, [
                                _vm._v("HTML")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-imprimir",
                            attrs: { type: "button" },
                            on: {
                              click: _vm.descargarReporteComisionesAsignacion
                            }
                          },
                          [_vm._v("Imprimir\n\t\t\t\t\t\t")]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "content-box" }, [
                    _vm._m(6),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "check-label2" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.todos_vendedoresR4,
                                  expression: "todos_vendedoresR4"
                                }
                              ],
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked: Array.isArray(_vm.todos_vendedoresR4)
                                  ? _vm._i(_vm.todos_vendedoresR4, null) > -1
                                  : _vm.todos_vendedoresR4
                              },
                              on: {
                                change: [
                                  function($event) {
                                    var $$a = _vm.todos_vendedoresR4,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.todos_vendedoresR4 = $$a.concat([
                                            $$v
                                          ]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.todos_vendedoresR4 = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.todos_vendedoresR4 = $$c
                                    }
                                  },
                                  _vm.cambiarVendedorR4
                                ]
                              }
                            }),
                            _vm._v(" Todos los vendedores")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.todos_vendedoresR4
                        ? _c("div", { staticClass: "col-sm-9" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v(" Vendedor")]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("typeahead", {
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      initial:
                                        _vm.vendedor_estadocuentadetalladoR4,
                                      trim: 80,
                                      url: _vm.vendedoresBusquedaURL
                                    },
                                    on: {
                                      input:
                                        _vm.seleccionarVendedorEstadoCuentaDetalladoR4
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "ul",
                                { staticClass: "error-messages" },
                                _vm._l(
                                  _vm.errorMessages
                                    .id_vendedor_estadocuentadetalladoR4,
                                  function(message) {
                                    return _c("li", {
                                      key: message,
                                      domProps: { textContent: _vm._s(message) }
                                    })
                                  }
                                ),
                                0
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.todos_vendedoresR4
                        ? _c("div", { staticClass: "col-sm-9" }, [_vm._m(7)])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v(" Tipos Reporte:")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.tipoAgrupacionR4,
                                  expression: "tipoAgrupacionR4"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.tipoAgrupacionR4 = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value: "ReporteVentasPorVendedorComisiones"
                                  }
                                },
                                [_vm._v("Ventas de Contado")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value: "ReporteRecibosPorVendedorComisiones"
                                  }
                                },
                                [_vm._v("Recibos")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value:
                                      "ReporteNotasCreditoPorVendedorComisiones"
                                  }
                                },
                                [_vm._v("Notas de Crédito")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value:
                                      "ReporteNotasDebitoPorVendedorComisiones"
                                  }
                                },
                                [_vm._v("Notas de Débito")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value:
                                      "ReporteVendedorComisionesConsolidado"
                                  }
                                },
                                [_vm._v("Consolidado de Comisiones")]
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Fecha Inicial")
                            ]),
                            _vm._v(" "),
                            _c("datepicker", {
                              attrs: { format: _vm.format, language: _vm.es },
                              on: {
                                selected: _vm.seleccionarFechaInicialComisionR4
                              },
                              model: {
                                value: _vm.fechaInicialComisionR4X,
                                callback: function($$v) {
                                  _vm.fechaInicialComisionR4X = $$v
                                },
                                expression: "fechaInicialComisionR4X"
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
                            _c("label", { attrs: { for: "" } }, [
                              _vm._v("Fecha Final")
                            ]),
                            _vm._v(" "),
                            _c("datepicker", {
                              attrs: { format: _vm.format, language: _vm.es },
                              on: {
                                selected: _vm.seleccionarFechaCorteComisionR4
                              },
                              model: {
                                value: _vm.fechaCorteComisionR4X,
                                callback: function($$v) {
                                  _vm.fechaCorteComisionR4X = $$v
                                },
                                expression: "fechaCorteComisionR4X"
                              }
                            })
                          ],
                          1
                        )
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
                                  value: _vm.formatoAsignacionesComisionR4,
                                  expression: "formatoAsignacionesComisionR4"
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
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.formatoAsignacionesComisionR4 = $event
                                    .target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "pdf" } }, [
                                _vm._v("PDF")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "xls" } }, [
                                _vm._v("Excel")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "html" } }, [
                                _vm._v("HTML")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-imprimir",
                            attrs: { type: "button" },
                            on: { click: _vm.descargarReporteComisiones }
                          },
                          [_vm._v("Imprimir\n\t\t\t\t\t\t")]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm.loading
                  ? [
                      _c("BlockUI", {
                        attrs: { message: _vm.msg, url: _vm.url }
                      })
                    ]
                  : _vm._e()
              ],
              2
            )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte Detallado de Ventas")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v(" Cliente")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", disabled: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v(" Sucursal")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", disabled: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v(" Vendedor")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", disabled: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte Asignación Comisiones")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v(" Vendedor")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", disabled: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Reporte Ventas para Calcular Comisiones")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v(" Vendedor")]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", disabled: "" }
        })
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

/***/ "./resources/app/assets/images/block50.gif":
/*!*************************************************!*\
  !*** ./resources/app/assets/images/block50.gif ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/block50.gif?a75e3729ca58e29435a37b05f314fe5c";

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesFacturacion.vue":
/*!****************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesFacturacion.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportesGeneralesFacturacion_vue_vue_type_template_id_543171ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportesGeneralesFacturacion.vue?vue&type=template&id=543171ba& */ "./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=template&id=543171ba&");
/* harmony import */ var _ReportesGeneralesFacturacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportesGeneralesFacturacion.vue?vue&type=script&lang=js& */ "./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportesGeneralesFacturacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css& */ "./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportesGeneralesFacturacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportesGeneralesFacturacion_vue_vue_type_template_id_543171ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportesGeneralesFacturacion_vue_vue_type_template_id_543171ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/reportes/ReportesGeneralesFacturacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesFacturacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=template&id=543171ba&":
/*!***********************************************************************************************************!*\
  !*** ./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=template&id=543171ba& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_template_id_543171ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportesGeneralesFacturacion.vue?vue&type=template&id=543171ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/reportes/ReportesGeneralesFacturacion.vue?vue&type=template&id=543171ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_template_id_543171ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportesGeneralesFacturacion_vue_vue_type_template_id_543171ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);