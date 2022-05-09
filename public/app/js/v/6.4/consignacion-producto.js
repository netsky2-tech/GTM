(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consignacion-producto"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/Listado.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/consignacion_productos/Listado.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_consignacion_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/consignacion_productos */ "./resources/app/api/consignacion_productos.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      descargando: false,
      productosBusqueda: {},
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      clientesBusquedaURL: "/ventas/clientes/buscar",
      detalle_productox: [],
      form: {
        cliente: {}
      },
      movimientos: [],
      total: 0,
      total_unidadesx: 0,
      total_saldox: 0,
      costo_promediox: 0
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

        return this.costo_promediox;
      } else {
        return 0;
      }
    }
  },
  methods: {
    downloadItem: function downloadItem() {
      var self = this; //self.loading = true;
      //if(!this.descargando) {

      var url = 'inventario/consignacion/reporte/general';
      self.loading = true;
      alertify.success("Descargando datos, espere un momento.....", 5);
      axios.get(url, {
        responseType: 'blob'
      }).then(function (_ref) {
        var data = _ref.data;
        var blob = new Blob([data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'ReporteConsignacion.pdf';
        link.click();
        self.loading = false; //this.descargando = false;
      })["catch"](function (error) {
        alertify.error("Error Descargando archivo.....", 5);
        self.loading = false;
      });
      /*}else{
                         alertify.warning("Espere a que se complete la descarga anterior",5);
                     }*/
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
            saldox = Number((Number(saldox) + Number(movimiento.total_movimiento)).toFixed(6));
          }
        });
      } else {
        saldox = 0;
      }

      return saldox;
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
        cppx = Number((saldox / unidadesx).toFixed(6));
      } else {
        cppx = 0;
      }

      return cppx;
    },
    seleccionarCliente: function seleccionarCliente(e) {
      var cliente = e.target.value;
      var self = this;
      self.form.cliente = cliente;
    },
    obtenerMovimientos: function obtenerMovimientos() {
      var self = this;
      _api_consignacion_productos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerTodos(null, function (data) {
        self.movimientos = data;
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.obtenerMovimientos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_consignacion_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/consignacion_productos */ "./resources/app/api/consignacion_productos.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      descargando: false,
      todos_clientes: true,
      productosBusqueda: {},
      formatoHistorial: 'xls',
      loading: false,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      clientesBusquedaURL: "/ventas/clientes/buscar",
      detalle_productox: [],
      form: {
        cliente: {
          id_cliente: 0
        }
      },
      movimientos: [],
      total: 0,
      total_unidadesx: 0,
      total_saldox: 0,
      costo_promediox: 0
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

        return this.costo_promediox;
      } else {
        return 0;
      }
    }
  },
  methods: {
    cambiarClientes: function cambiarClientes() {
      var self = this;

      if (self.todos_clientes) {
        self.form.cliente = {};
        self.form.cliente.id_cliente = 0;
      }
    },
    descargarHistorialCliente: function descargarHistorialCliente() {
      var self = this;

      if (self.form.cliente.id_cliente >= 0) {
        self.loading = true;
        axios.post('inventario/consignacion/reporte/historial', {
          id_cliente: self.form.cliente.id_cliente,
          extension: self.formatoHistorial
        }, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          self.formatoHistorial === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : self.formatoHistorial === 'pdf' ? blob = new Blob([data], {
            type: 'application/pdf'
          }) : blob = new Blob([data], {
            type: 'text/html'
          });
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'HistorialConsignacion.' + self.formatoHistorial;
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
    downloadItem: function downloadItem() {
      var self = this; //self.loading = true;
      //if(!this.descargando) {

      if (self.form.cliente.id_cliente) {
        var url = 'inventario/consignacion/reporte/cliente/' + self.form.cliente.id_cliente;
        self.loading = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get(url, {
          responseType: 'blob'
        }).then(function (_ref2) {
          var data = _ref2.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteConsignacionCliente.pdf';
          link.click();
          self.loading = false; //this.descargando = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.loading = false;
        });
      } else {
        alertify.warning("Seleccione un cliente!", 5);
        self.loading = false;
      }
      /*}else{
      	alertify.warning("Espere a que se complete la descarga anterior",5);
      }*/

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
            saldox = Number((Number(saldox) + Number(movimiento.total_movimiento)).toFixed(6));
          }
        });
      } else {
        saldox = 0;
      }

      return saldox;
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
        cppx = Number((saldox / unidadesx).toFixed(6));
      } else {
        cppx = 0;
      }

      return cppx;
    },
    seleccionarCliente: function seleccionarCliente(e) {
      var cliente = e.target.value;
      var self = this;
      self.form.cliente = cliente;
    },
    obtenerMovimientos: function obtenerMovimientos() {
      var self = this;
      self.loading = true;
      _api_consignacion_productos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerPorCliente(self.form, function (data) {
        self.movimientos = data;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/consignacion_productos/Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-a3b35746] {\n  min-width: 120px;\n}\n.table a[data-v-a3b35746] {\n  color: #2675dc;\n}\n.table .table-number[data-v-a3b35746] {\n  width: 60px;\n}\n.table .action[data-v-a3b35746] {\n  width: 100px;\n}\n.btn-generar[data-v-a3b35746] {\n  margin-top: 33px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-53928a38] {\n  min-width: 120px;\n}\n.table a[data-v-53928a38] {\n  color: #2675dc;\n}\n.table .table-number[data-v-53928a38] {\n  width: 60px;\n}\n.table .action[data-v-53928a38] {\n  width: 100px;\n}\n.btn-generar[data-v-53928a38] {\n  margin-top: 33px;\n}\n.check-label2[data-v-53928a38] {\n  margin-top: 40px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/consignacion_productos/Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/Listado.vue?vue&type=template&id=a3b35746&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/consignacion_productos/Listado.vue?vue&type=template&id=a3b35746&scoped=true& ***!
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
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Reporte de Consignación General")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de consignación")
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
                  attrs: { to: { name: "pagina-principal-inventario" } }
                },
                [_vm._v(" Módulo Inventario")]
              ),
              _vm._v("> Consignación General")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-info btn-generar",
                  attrs: { disabled: _vm.descargando },
                  on: {
                    click: function($event) {
                      return _vm.downloadItem()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-search" }),
                  _vm._v(" Descargar Reporte")
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.movimientos, function(movimiento, index) {
                  return _c("tr", [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.nombre_cliente))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.nombre_comercial))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.cantidad))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.precio_sugerido))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.subtotal))
                    ])
                  ])
                }),
                _vm._v(" "),
                !_vm.movimientos.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "5" } },
                        [_vm._v("Sin datos")]
                      )
                    ])
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("tfoot")
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
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalles de Producto Consignados")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Cliente")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Producto")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Unidades")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Precio")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Total")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=template&id=53928a38&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=template&id=53928a38&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Reporte de Consignación Clientes")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de consignación")
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
                  attrs: { to: { name: "pagina-principal-inventario" } }
                },
                [_vm._v(" Módulo Inventario")]
              ),
              _vm._v("> Consignación por cliente")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c(
              "div",
              { staticClass: "form-group" },
              [
                _c("label", { attrs: { for: "" } }, [_vm._v("Cliente")]),
                _vm._v(" "),
                _c("typeahead", {
                  staticStyle: { width: "100%" },
                  attrs: {
                    initial: _vm.form.cliente,
                    trim: 80,
                    url: _vm.clientesBusquedaURL,
                    params: { es_deudor: false }
                  },
                  on: { input: _vm.seleccionarCliente }
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
                  on: {
                    click: function($event) {
                      return _vm.obtenerMovimientos()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-search" }),
                  _vm._v(" Cargar info")
                ]
              )
            ])
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
                      return _vm.downloadItem()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-search" }),
                  _vm._v(" Descargar Reporte")
                ]
              )
            ])
          ])
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
                            $$i < 0 && (_vm.todos_clientes = $$a.concat([$$v]))
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
                      value: _vm.formatoHistorial,
                      expression: "formatoHistorial"
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
                      _vm.formatoHistorial = $event.target.multiple
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
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-info btn-generar",
                  on: {
                    click: function($event) {
                      return _vm.descargarHistorialCliente()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-search" }),
                  _vm._v(" Descargar Historial")
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.movimientos, function(movimiento, index) {
                  return _c("tr", [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.nombre_comercial))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.cantidad))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.precio_sugerido))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.subtotal))
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
            _c("tfoot")
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
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Detalles de Producto Consignados")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Producto")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Unidades")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Precio")
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

/***/ "./resources/app/api/consignacion_productos.js":
/*!*****************************************************!*\
  !*** ./resources/app/api/consignacion_productos.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerPorCliente: function obtenerPorCliente(data, cb, errorCb) {
    axios.post('inventario/consignacion/obtener-por-cliente', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTodos: function obtenerTodos(data, cb, errorCb) {
    axios.post('inventario/consignacion/obtener', data).then(function (response) {
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

/***/ "./resources/app/components/consignacion_productos/Listado.vue":
/*!*********************************************************************!*\
  !*** ./resources/app/components/consignacion_productos/Listado.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_a3b35746_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=a3b35746&scoped=true& */ "./resources/app/components/consignacion_productos/Listado.vue?vue&type=template&id=a3b35746&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/consignacion_productos/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_a3b35746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true& */ "./resources/app/components/consignacion_productos/Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_a3b35746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_a3b35746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a3b35746",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/consignacion_productos/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/consignacion_productos/Listado.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/consignacion_productos/Listado.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/consignacion_productos/Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/app/components/consignacion_productos/Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_a3b35746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/Listado.vue?vue&type=style&index=0&id=a3b35746&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_a3b35746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_a3b35746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_a3b35746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_a3b35746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_a3b35746_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/consignacion_productos/Listado.vue?vue&type=template&id=a3b35746&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/app/components/consignacion_productos/Listado.vue?vue&type=template&id=a3b35746&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_a3b35746_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=a3b35746&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/Listado.vue?vue&type=template&id=a3b35746&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_a3b35746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_a3b35746_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/consignacion_productos/ListadoPorCliente.vue":
/*!*******************************************************************************!*\
  !*** ./resources/app/components/consignacion_productos/ListadoPorCliente.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListadoPorCliente_vue_vue_type_template_id_53928a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListadoPorCliente.vue?vue&type=template&id=53928a38&scoped=true& */ "./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=template&id=53928a38&scoped=true&");
/* harmony import */ var _ListadoPorCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListadoPorCliente.vue?vue&type=script&lang=js& */ "./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListadoPorCliente_vue_vue_type_style_index_0_id_53928a38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true& */ "./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListadoPorCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListadoPorCliente_vue_vue_type_template_id_53928a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListadoPorCliente_vue_vue_type_template_id_53928a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53928a38",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/consignacion_productos/ListadoPorCliente.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPorCliente.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_style_index_0_id_53928a38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=style&index=0&id=53928a38&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_style_index_0_id_53928a38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_style_index_0_id_53928a38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_style_index_0_id_53928a38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_style_index_0_id_53928a38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_style_index_0_id_53928a38_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=template&id=53928a38&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=template&id=53928a38&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_template_id_53928a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListadoPorCliente.vue?vue&type=template&id=53928a38&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/consignacion_productos/ListadoPorCliente.vue?vue&type=template&id=53928a38&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_template_id_53928a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListadoPorCliente_vue_vue_type_template_id_53928a38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);