(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movimientos-producto-contable"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_movimientos_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/movimientos_productos */ "./resources/app/api/movimientos_productos.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      productosBusqueda: {},
      productosBusquedaURL: "/inventario/productos/buscar",
      bodegasBusquedaURL: "/bodegas/buscar",
      todas_bodegas: true,
      detalle_productox: [],
      form: {
        productoB: {},
        bodega: {
          id_bodega: 0
        }
      },
      movimientos: [],
      total: 0,
      total_unidadesx: 0,
      total_saldox: 0,
      costo_promediox: 0,
      costo_promediox_txt: '0',
      errorMessages: []
    };
  },
  computed: {
    consolidar_costo_promedio: function consolidar_costo_promedio() {
      var _this = this;

      if (this.movimientos) {
        this.total_saldox = this.movimientos.reduce(function (carry, item) {
          _this.total_saldox = carry + Number(item.total_movimiento);
          return _this.total_saldox;
        }, 0);
        this.total_unidadesx = this.movimientos.reduce(function (carry, item) {
          _this.total_unidadesx = carry + Number(item.cantidad_movimiento);
          return _this.total_unidadesx;
        }, 0);
        this.costo_promediox = Number((Number(this.total_saldox) / Number(this.total_unidadesx)).toFixed(6));

        if (isNaN(this.costo_promediox)) {
          this.costo_promediox = 0;
        }

        this.costo_promediox_txt = this.costo_promediox.toFixed(6);
        return this.costo_promediox.toFixed(6);
      } else {
        return 0;
      }
    }
  },
  methods: {
    cambiarBodega: function cambiarBodega() {
      var self = this;

      if (self.todas_bodegas) {
        self.form.bodega = {};
        self.form.bodega.id_bodega = 0;
      }
    },
    seleccionarBodega: function seleccionarBodega(e) {
      var bodegaS = e.target.value;
      var self = this;
      self.form.bodega = bodegaS;
    },
    downloadItem: function downloadItem() {
      var self = this;

      if (self.form.productoB.id_producto) {
        self.loading = true;
        var formato = 'pdf';
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('inventario/movimientos/reporte-contable', {
          id_bodega: self.form.bodega.id_bodega,
          id_producto: self.form.productoB.id_producto,
          extension: formato
        }, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          formato === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteMovimientos.' + formato;
          link.click();
          self.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Debe seleccionar un producto", 5);
      }
    },
    calcular_unidades: function calcular_unidades(itemX, keyX) {
      //console.log('unidd')
      var self = this;
      var unidadesx = 0;
      self.movimientos.forEach(function (movimiento, key) {
        if (key <= keyX) {
          unidadesx = unidadesx + movimiento.cantidad_movimiento;
        }
      });
      return unidadesx;
    },
    calcular_saldo: function calcular_saldo(itemX, keyX) {
      var self = this;
      var saldox = 0;
      var unidadesx = 0;
      self.movimientos.forEach(function (movimiento, key) {
        if (key <= keyX) {
          unidadesx = unidadesx + movimiento.cantidad_movimiento;
        }
      });

      if (unidadesx > 0) {
        self.movimientos.forEach(function (movimiento, key) {
          if (key <= keyX) {
            saldox = Number(Number(saldox) + Number(movimiento.total_movimiento));
          }
        });
      } else {
        saldox = 0;
      }

      return saldox.toFixed(6);
    },
    calcular_costo_promedio: function calcular_costo_promedio(itemX, keyX) {
      var self = this;
      var cppx = 0;
      var saldox = 0;
      var unidadesx = 0;
      self.movimientos.forEach(function (movimiento, key) {
        if (key <= keyX) {
          saldox = Number(saldox) + Number(movimiento.total_movimiento);
          unidadesx = Number(unidadesx) + Number(movimiento.cantidad_movimiento);
        }
      });

      if (unidadesx > 0) {
        cppx = Number(saldox / unidadesx);
      } else {
        cppx = 0;
      }

      return cppx.toFixed(6);
    },
    seleccionarProducto: function seleccionarProducto(e) {
      var producto = e.target.value;
      var self = this;
      self.form.productoB = producto;
    },
    obtenerMovimientos: function obtenerMovimientos() {
      var self = this;
      self.loading = true;
      _api_movimientos_productos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerMovimientos(self.form, function (data) {
        self.movimientos = data;
        self.loading = false;
        self.errorMessages = [];
      }, function (err) {
        self.loading = false;
        console.log(err);
        self.errorMessages = err;
      });
      self.detalle_productox.codigo = self.form.productoB.codigo_sistema;
      self.detalle_productox.descripcion = self.form.productoB.descripcion;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-89c5e3ec] {\n  min-width: 120px;\n}\n.table a[data-v-89c5e3ec] {\n  color: #2675dc;\n}\n.table .table-number[data-v-89c5e3ec] {\n  width: 60px;\n}\n.table .action[data-v-89c5e3ec] {\n  width: 100px;\n}\n.btn-generar[data-v-89c5e3ec] {\n  margin-top: 33px;\n}\n.check-label2[data-v-89c5e3ec] {\n  margin-top: 40px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=template&id=89c5e3ec&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=template&id=89c5e3ec&scoped=true& ***!
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
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Movimientos de Inventario Contable")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de movimientos Contable")
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
              _vm._v("> Movimientos contables")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-2" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "check-label2" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.todas_bodegas,
                      expression: "todas_bodegas"
                    }
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(_vm.todas_bodegas)
                      ? _vm._i(_vm.todas_bodegas, null) > -1
                      : _vm.todas_bodegas
                  },
                  on: {
                    change: [
                      function($event) {
                        var $$a = _vm.todas_bodegas,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.todas_bodegas = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.todas_bodegas = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.todas_bodegas = $$c
                        }
                      },
                      _vm.cambiarBodega
                    ]
                  }
                }),
                _vm._v(" Todos las bodegas")
              ])
            ])
          ]),
          _vm._v(" "),
          !_vm.todas_bodegas
            ? _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Bodega")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("typeahead", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          initial: _vm.form.bodega,
                          trim: 80,
                          url: _vm.bodegasBusquedaURL
                        },
                        on: { input: _vm.seleccionarBodega }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.bodega, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.todas_bodegas
            ? _c("div", { staticClass: "col-sm-3" }, [_vm._m(0)])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { attrs: { for: "" } }, [_vm._v("Producto")]),
                _vm._v(" "),
                _c("typeahead", {
                  staticStyle: { width: "100%" },
                  attrs: {
                    initial: _vm.form.productoB,
                    trim: 80,
                    url: _vm.productosBusquedaURL
                  },
                  on: { input: _vm.seleccionarProducto }
                }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "error-messages" },
                  _vm._l(_vm.errorMessages.productoB, function(message) {
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
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-info btn-generar",
                  on: {
                    click: function($event) {
                      return _vm.obtenerMovimientos()
                    }
                  }
                },
                [_c("i", { staticClass: "pe-7s-search" }), _vm._v(" Buscar")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip",
                      value: "Descargar el reporte en formato PDF",
                      expression: "'Descargar el reporte en formato PDF'"
                    }
                  ],
                  staticClass: "btn btn-danger btn-generar",
                  on: {
                    click: function($event) {
                      return _vm.downloadItem()
                    }
                  }
                },
                [_c("i", { staticClass: "pe-7s-download" }), _vm._v("PDF")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v(" Nombre producto")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.detalle_productox.descripcion,
                    expression: "detalle_productox.descripcion"
                  }
                ],
                staticClass: "form-control",
                attrs: { readonly: "", placeholder: "Nombre producto" },
                domProps: { value: _vm.detalle_productox.descripcion },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.detalle_productox,
                      "descripcion",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v(" Código")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.detalle_productox.codigo,
                    expression: "detalle_productox.codigo"
                  }
                ],
                staticClass: "form-control",
                attrs: { readonly: "", placeholder: "Código producto" },
                domProps: { value: _vm.detalle_productox.codigo },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.detalle_productox,
                      "codigo",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [
                _vm._v(" Total Inventario")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.total_unidadesx,
                    expression: "total_unidadesx"
                  }
                ],
                staticClass: "form-control",
                attrs: { readonly: "", placeholder: "Unidades" },
                domProps: { value: _vm.total_unidadesx },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.total_unidadesx = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v(" Costo C$")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.costo_promediox_txt,
                    expression: "costo_promediox_txt"
                  }
                ],
                staticClass: "form-control",
                attrs: { readonly: "" },
                domProps: { value: _vm.costo_promediox_txt },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.costo_promediox_txt = $event.target.value
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.movimientos, function(movimiento, index) {
                  return _c("tr", { key: movimiento.id_movimiento }, [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.fecha_movimiento))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.bodega))
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        movimiento.id_tipo_mov === 1
                          ? [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    target: "_blank",
                                    to: {
                                      name: "mostrar-entrada",
                                      params: {
                                        id_entrada:
                                          movimiento.identificador_origen_movimiento
                                      }
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "icon-eye" }),
                                  _vm._v(
                                    " " +
                                      _vm._s(movimiento.descripcion_movimiento)
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        movimiento.id_tipo_mov === 2
                          ? [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    target: "_blank",
                                    to: {
                                      name: "mostrar-salida",
                                      params: {
                                        id_salida:
                                          movimiento.identificador_origen_movimiento
                                      }
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "icon-eye" }),
                                  _vm._v(
                                    " " +
                                      _vm._s(movimiento.descripcion_movimiento)
                                  )
                                ]
                              )
                            ]
                          : _vm._e()
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        _vm._s(
                          movimiento.unidades_entrada > 0
                            ? movimiento.unidades_entrada
                            : "-"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        _vm._s(
                          movimiento.costo_entrada > 0
                            ? movimiento.costo_entrada
                            : "-"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        _vm._s(
                          movimiento.total_entrada > 0
                            ? movimiento.total_entrada
                            : "-"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        _vm._s(
                          movimiento.unidades_salida > 0
                            ? movimiento.unidades_salida
                            : "-"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        _vm._s(
                          movimiento.costo_salida > 0
                            ? movimiento.costo_salida
                            : "-"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(
                        _vm._s(
                          movimiento.total_salida > 0
                            ? movimiento.total_salida
                            : "-"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.calcular_unidades(movimiento, index)))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _c("strong", [
                        _vm._v(
                          "C$ " +
                            _vm._s(
                              _vm._f("formatMoney")(
                                _vm.calcular_costo_promedio(movimiento, index),
                                6
                              )
                            )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _c("strong", [
                        _vm._v(
                          "C$ " +
                            _vm._s(
                              _vm._f("formatMoney")(
                                _vm.calcular_saldo(movimiento, index),
                                6
                              )
                            )
                        )
                      ])
                    ])
                  ])
                }),
                _vm._v(" "),
                !_vm.movimientos.length
                  ? _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "text-center",
                          attrs: { colspan: "12" }
                        },
                        [_vm._v("Sin datos")]
                      )
                    ])
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("tfoot", [
              _c("tr", [
                _c(
                  "td",
                  { staticClass: "text-left", attrs: { colspan: "8" } },
                  [
                    _c("strong", [
                      _vm._v(
                        _vm._s(
                          _vm.costo_promediox
                            ? "Inventario Final de " +
                                _vm.total_unidadesx +
                                " unidades Valorado a C$ " +
                                _vm.costo_promediox_txt +
                                " C/U"
                            : ""
                        )
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _vm._v("Saldo Final")
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("strong", [_vm._v(_vm._s(_vm.total_unidadesx))])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("strong", [
                    _vm._v(
                      "C$ " +
                        _vm._s(
                          _vm._f("formatMoney")(
                            _vm.consolidar_costo_promedio,
                            6
                          )
                        )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("strong", [
                    _vm._v(
                      "C$ " + _vm._s(_vm._f("formatMoney")(_vm.total_saldox, 6))
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
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v(" Bodega")]),
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
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos de Producto")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { colspan: "3" } }),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { colspan: "3" } }, [
          _vm._v("ENTRADAS")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { colspan: "3" } }, [
          _vm._v("SALIDAS")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { colspan: "3" } }, [
          _vm._v("SALDO")
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Fecha")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Bodega")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Concepto")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Unidades")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Costo")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Total")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Unidades")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Costo")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Total")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Unidades")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Costo")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Total")])
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

/***/ "./resources/app/api/movimientos_productos.js":
/*!****************************************************!*\
  !*** ./resources/app/api/movimientos_productos.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerMovimientos: function obtenerMovimientos(data, cb, errorCb) {
    axios.post('inventario/movimientos/obtener-por-producto', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscar: function buscar(data, cb, errorCb) {
    axios.post('presentacion/buscar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerListaCodigos: function obtenerListaCodigos(data, cb, errorCb) {
    axios.post('inventario/movimientos/obtener-lista-codigos', data).then(function (response) {
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

/***/ "./resources/app/components/movimientos_productos/ListadoContable.vue":
/*!****************************************************************************!*\
  !*** ./resources/app/components/movimientos_productos/ListadoContable.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoContable_vue_vue_type_template_id_89c5e3ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoContable.vue?vue&type=template&id=89c5e3ec&scoped=true& */ "./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=template&id=89c5e3ec&scoped=true&");
/* harmony import */ var _ListadoContable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoContable.vue?vue&type=script&lang=js& */ "./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoContable_vue_vue_type_style_index_0_id_89c5e3ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true& */ "./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoContable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoContable_vue_vue_type_template_id_89c5e3ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoContable_vue_vue_type_template_id_89c5e3ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "89c5e3ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/movimientos_productos/ListadoContable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoContable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_style_index_0_id_89c5e3ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=style&index=0&id=89c5e3ec&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_style_index_0_id_89c5e3ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_style_index_0_id_89c5e3ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_style_index_0_id_89c5e3ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_style_index_0_id_89c5e3ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_style_index_0_id_89c5e3ec_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=template&id=89c5e3ec&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=template&id=89c5e3ec&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_template_id_89c5e3ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoContable.vue?vue&type=template&id=89c5e3ec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/ListadoContable.vue?vue&type=template&id=89c5e3ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_template_id_89c5e3ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoContable_vue_vue_type_template_id_89c5e3ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);