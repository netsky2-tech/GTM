(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movimientos-producto"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/Listado.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/movimientos_productos/Listado.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_movimientos_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/movimientos_productos */ "./resources/app/api/movimientos_productos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/entradas-inventario-inicial */ "./resources/app/api/entradas-inventario-inicial.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      bodegasBusquedaURL: "/bodegas/buscar",
      todas_bodegas: true,
      todas_presentaciones: true,
      descargando: false,
      productosBusqueda: {},
      productosBusquedaURL: "/inventario/productos/buscar",
      presentacionesBusqueda: {},
      presentacionesBusquedaURL: "/presentacion/buscar",
      detalle_productox: [],
      lista_codigos: [],
      form: {
        productoB: {},
        bodega: {
          id_bodega: 0
        },
        presentacion: {
          id_presentacion: 0,
          codigo: ''
        }
      },
      movimientos: [],
      total: 0,
      total_unidadesx: 0,
      total_saldox: 0,
      costo_promediox: 0,
      errorMessages: [],
      filter: {
        page: 1,
        limit: 20,
        limitOptions: [20, 40, 60, 100]
      }
    };
  },
  computed: {
    consolidar_unidades: function consolidar_unidades() {
      var _this = this;

      if (this.movimientos) {
        this.total_unidadesx = this.movimientos.reduce(function (carry, item) {
          _this.total_unidadesx = carry + Number(item.cantidad_movimiento_k);
          return _this.total_unidadesx;
        }, 0);
        return this.total_unidadesx;
      } else {
        return 0;
      }
    }
  },
  methods: {
    cargarPresentaciones: function cargarPresentaciones() {
      var self = this;
      self.loading = true;
      _api_entradas_inventario_inicial__WEBPACK_IMPORTED_MODULE_2__["default"].cargarPresentacionesProductos({
        id_producto: self.form.productoB.id_producto
      }, function (data) {
        if (data.presentaciones !== null) {
          self.form.presentaciones = data.presentaciones;
        } else {
          alertify.warning("No se encuentran presentaciones para este producto.", 5);
          self.form.presentaciones = [];
        }

        self.loading = false;
      }, function (err) {
        if (err.id_producto) {
          self.form.presentaciones = [];
          alertify.warning(err.id_producto, 5);
          self.loading = false;
        }
      }); //self.$refs.presentacionx.focus();
    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerListaCodigos();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerListaCodigos();
    },
    cambiarBodega: function cambiarBodega() {
      var self = this;

      if (self.todas_bodegas) {
        self.form.bodega = {};
        self.form.bodega.id_bodega = 0;
      }
    },
    cambiarPresentacion: function cambiarPresentacion() {
      var self = this;

      if (self.todas_presentaciones) {
        self.form.presentacion = {};
        self.form.presentacion.id_presentacion = 0;
      }
    },
    seleccionarBodega: function seleccionarBodega(e) {
      var bodegaS = e.target.value;
      var self = this;
      self.form.bodega = bodegaS;
    },
    seleccionarPresentacion: function seleccionarPresentacion(e) {
      var presentacion = e.target.value;
      var self = this;
      self.form.presentacion = presentacion;
    },
    downloadItem: function downloadItem(formato) {
      var self = this;

      if (self.form.productoB.id_producto) {
        self.loading = true; //let formato = 'pdf';

        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.post('inventario/movimientos/reporte', {
          id_bodega: self.form.bodega.id_bodega,
          id_producto: self.form.productoB.id_producto,
          id_presentacion: self.form.presentacion.id_presentacion,
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
          unidadesx = unidadesx + Number(movimiento.cantidad_movimiento_k);
        }
      });
      return Number(unidadesx);
    },
    calcular_saldo: function calcular_saldo(itemX, keyX) {
      var self = this;
      var saldox = 0;
      var unidadesx = 0;
      self.movimientos.forEach(function (movimiento, key) {
        if (key <= keyX) {
          unidadesx = unidadesx + Number(movimiento.cantidad_movimiento);
        }
      });

      if (unidadesx > 0) {
        self.movimientos.forEach(function (movimiento, key) {
          if (key <= keyX) {
            saldox = Number((Number(saldox) + Number(movimiento.total_movimiento)).toFixed(2));
          }
        });
      } else {
        saldox = 0;
      }

      return Number(saldox);
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
        cppx = Number((saldox / unidadesx).toFixed(2));
      } else {
        cppx = 0;
      }

      return cppx;
    },
    seleccionarProducto: function seleccionarProducto(e) {
      var producto = e.target.value;
      var self = this;
      self.form.productoB = producto;
      self.cargarPresentaciones();
    },
    obtenerListaCodigos: function obtenerListaCodigos() {
      var self = this;
      self.loading = true;
      _api_movimientos_productos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerListaCodigos({
        productoB: self.form.productoB,
        bodega: self.form.bodega,
        limit: self.filter.limit,
        page: self.filter.page
      }, function (data) {
        self.lista_codigos = data.rows;
        self.total = data.total;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    obtenerMovimientos: function obtenerMovimientos() {
      var self = this;
      self.loading = true;
      this.filter.page = 1;
      _api_movimientos_productos__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerMovimientos(self.form, function (data) {
        self.movimientos = data;
        self.lista_codigos = [];
        self.errorMessages = [];
        self.loading = false;
      }, function (err) {
        console.log(err);
        self.loading = false;
        self.errorMessages = err;
      });
      self.detalle_productox.codigo = self.form.productoB.codigo_sistema;
      self.detalle_productox.descripcion = self.form.productoB.nombre_comercial;
    },
    labelproducto: function labelproducto(item) {
      /*let cod_barra =  item.codigo_barra == null ? 'N/A':item.codigo_barra;*/
      return "".concat(item.descripcion, " - ").concat(cod_barra);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/MovimientosBateria.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/MovimientosBateria.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_movimientos_productos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/movimientos_productos */ "./resources/app/api/movimientos_productos.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_baterias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/baterias */ "./resources/app/api/baterias.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      bateria_busqueda: "",
      codigo_garantia: "",
      reservada: "",
      estado_bateria: "",
      descripcion_producto: "",
      nombre_comercial: "",
      fecha_activacion: "",
      fecha_ingreso: "",
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
      errorMessages: []
    };
  },
  methods: {
    buscarBateria: function buscarBateria() {
      var self = this;
      self.loading = true; //self.$refs.precio_unitario.focus();

      _api_baterias__WEBPACK_IMPORTED_MODULE_2__["default"].buscarCodigoBateriaCualquiera({
        codigo_bateria: self.bateria_busqueda
      }, function (data) {
        if (data !== null) {
          self.$refs.bateria.focus();
          self.bateria_busqueda = '';
          self.movimientos = data.movimientos_bateria;
          self.codigo_garantia = data.bateria.codigo_garantia;
          self.reservada = data.bateria.reservada;
          self.estado_bateria = data.bateria.estado_bateria;
          self.descripcion_producto = data.bateria.descripcion_producto;
          self.nombre_comercial = data.bateria.nombre_comercial;
          self.fecha_activacion = data.bateria.fecha_activacion;
          self.fecha_ingreso = data.bateria.fecha_ingreso;
        } else {
          alertify.warning("No se encuentra esta batería.", 5);
          self.$refs.bateria.focus();
          self.bateria_busqueda = '';
          self.codigo_garantia = '';
          self.reservada = '';
          self.estado_bateria = '';
          self.descripcion_producto = '';
          self.nombre_comercial = '';
          self.fecha_activacion = '';
          self.fecha_ingreso = '';
        }

        self.errorMessages = [];
        self.loading = false;
      }, function (err) {
        //console.log(err);
        self.errorMessages = err;
        self.bateria_busqueda = '';
        self.codigo_garantia = '';
        self.reservada = '';
        self.estado_bateria = '';
        self.descripcion_producto = '';
        self.nombre_comercial = '';
        self.fecha_activacion = '';
        self.fecha_ingreso = '';

        if (err.codigo_bateria) {
          self.$refs.bateria.focus();
          self.bateria_busqueda = '';
          alertify.warning("No se encuentra esta batería.", 5);
        }

        self.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/movimientos_productos/Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-120e2a5e] {\n  min-width: 120px;\n}\n.table a[data-v-120e2a5e] {\n  color: #2675dc;\n}\n.table .table-number[data-v-120e2a5e] {\n  width: 60px;\n}\n.table .action[data-v-120e2a5e] {\n  width: 100px;\n}\n.btn-generar[data-v-120e2a5e] {\n  margin-top: 33px;\n}\n.check-label2[data-v-120e2a5e] {\n  margin-top: 40px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-14552cbb] {\n  min-width: 120px;\n}\n.table a[data-v-14552cbb] {\n  color: #2675dc;\n}\n.table .table-number[data-v-14552cbb] {\n  width: 60px;\n}\n.table .action[data-v-14552cbb] {\n  width: 100px;\n}\n.btn-generar[data-v-14552cbb] {\n  margin-top: 33px;\n}\n.check-label2[data-v-14552cbb] {\n  margin-top: 40px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/movimientos_productos/Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/Listado.vue?vue&type=template&id=120e2a5e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/movimientos_productos/Listado.vue?vue&type=template&id=120e2a5e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Movimientos de Inventario")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de movimientos")
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
                [_vm._v(" Módulo inventario")]
              ),
              _vm._v("> Movimiento inventario")
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
                  attrs: { disabled: _vm.descargando },
                  on: {
                    click: function($event) {
                      return _vm.downloadItem("pdf")
                    }
                  }
                },
                [_c("i", { staticClass: "pe-7s-download" }), _vm._v("PDF")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip",
                      value: "Descargar el reporte en formato EXCEL",
                      expression: "'Descargar el reporte en formato EXCEL'"
                    }
                  ],
                  staticClass: "btn btn-success btn-generar",
                  attrs: { disabled: _vm.descargando },
                  on: {
                    click: function($event) {
                      return _vm.downloadItem("xls")
                    }
                  }
                },
                [_c("i", { staticClass: "pe-7s-download" }), _vm._v("EXCEL")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "check-label2" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.todas_presentaciones,
                      expression: "todas_presentaciones"
                    }
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(_vm.todas_presentaciones)
                      ? _vm._i(_vm.todas_presentaciones, null) > -1
                      : _vm.todas_presentaciones
                  },
                  on: {
                    change: [
                      function($event) {
                        var $$a = _vm.todas_presentaciones,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.todas_presentaciones = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.todas_presentaciones = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.todas_presentaciones = $$c
                        }
                      },
                      _vm.cambiarPresentacion
                    ]
                  }
                }),
                _vm._v(" Todas las presentaciones")
              ])
            ])
          ]),
          _vm._v(" "),
          !_vm.todas_presentaciones
            ? _c("div", { staticClass: "col-sm-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v(" Presentación")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("v-select", {
                        ref: "presentacionx",
                        attrs: {
                          options: _vm.form.presentaciones,
                          label: "codigo",
                          placeholder: "Selecciona una presentacion"
                        },
                        model: {
                          value: _vm.form.presentacion,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "presentacion", $$v)
                          },
                          expression: "form.presentacion"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.presentacion, function(message) {
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
          _vm.todas_presentaciones
            ? _c("div", { staticClass: "col-sm-3" }, [_vm._m(1)])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
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
          !_vm.todas_presentaciones
            ? _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v(" Presentacion")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.presentacion.codigo,
                        expression: "form.presentacion.codigo"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      readonly: "",
                      placeholder: "Código de presentacion"
                    },
                    domProps: { value: _vm.form.presentacion.codigo },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form.presentacion,
                          "codigo",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ])
            : _vm._e(),
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
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(3),
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
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.descripcion_presentacion))
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
                    _c(
                      "td",
                      {
                        staticClass: "text-center",
                        staticStyle: { width: "10%" }
                      },
                      [
                        _vm._v(
                          _vm._s(
                            movimiento.unidades_entrada > 0
                              ? movimiento.unidades_entrada
                              : "-"
                          )
                        )
                      ]
                    ),
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
                            movimiento.unidades_entrada_k > 0
                              ? movimiento.unidades_entrada_k
                              : "-"
                          )
                        )
                      ]
                    ),
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
                            movimiento.unidades_salida > 0
                              ? movimiento.unidades_salida
                              : "-"
                          )
                        )
                      ]
                    ),
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
                            movimiento.unidades_salida_k > 0
                              ? movimiento.unidades_salida_k
                              : "-"
                          )
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _c("strong", [
                        _vm._v(_vm._s(_vm.calcular_unidades(movimiento, index)))
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
                  { staticClass: "text-center", attrs: { colspan: "8" } },
                  [_vm._v("Saldo Final")]
                ),
                _vm._v(" "),
                _c("td", { staticClass: "text-center" }, [
                  _c("strong", [_vm._v(_vm._s(_vm.consolidar_unidades))])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("pagination", {
          attrs: {
            items: _vm.lista_codigos,
            limit: _vm.filter.limit,
            limitOptions: _vm.filter.limitOptions,
            page: _vm.filter.page,
            total: _vm.total
          },
          on: { changeLimit: _vm.changeLimit, changePage: _vm.changePage }
        }),
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
    return _c("div", { staticClass: "form-group" }, [
      _c("label", [_vm._v(" Presentación")]),
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
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Fecha")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Bodega")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Presentación")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Concepto")
        ]),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center table-number", attrs: { colspan: "2" } },
          [_vm._v("Entradas")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center table-number", attrs: { colspan: "2" } },
          [_vm._v("Salidas")]
        ),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [_vm._v("Saldo")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/MovimientosBateria.vue?vue&type=template&id=14552cbb&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/productos/MovimientosBateria.vue?vue&type=template&id=14552cbb&scoped=true& ***!
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
  return _c("div", { staticClass: "main" }, [
    _c(
      "div",
      { staticClass: "content-box" },
      [
        _c("div", { staticClass: "content-box-header" }, [
          _c("div", { staticClass: "box-title" }, [
            _vm._v("Movimientos de Batería específica")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de movimientos")
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
                [_vm._v(" Módulo inventario")]
              ),
              _vm._v("> Movimiento batería")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [
                _vm._v("Código Garantía Bateria")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.bateria_busqueda,
                    expression: "bateria_busqueda"
                  }
                ],
                ref: "bateria",
                staticClass: "form-control",
                domProps: { value: _vm.bateria_busqueda },
                on: {
                  focus: function($event) {
                    return $event.target.select()
                  },
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.buscarBateria($event)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.bateria_busqueda = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.codigo_bateria, function(message) {
                  return _c("li", {
                    key: message,
                    domProps: { textContent: _vm._s(message) }
                  })
                }),
                0
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v(" Nombre producto")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.descripcion_producto,
                    expression: "descripcion_producto"
                  }
                ],
                staticClass: "form-control",
                attrs: { readonly: "", placeholder: "Nombre producto" },
                domProps: { value: _vm.descripcion_producto },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.descripcion_producto = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [
                _vm._v(" Código Identificador")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.codigo_garantia,
                    expression: "codigo_garantia"
                  }
                ],
                staticClass: "form-control",
                attrs: { readonly: "", placeholder: "Código identificador" },
                domProps: { value: _vm.codigo_garantia },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.codigo_garantia = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [
                _vm._v(" Fecha Activación")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fecha_activacion,
                    expression: "fecha_activacion"
                  }
                ],
                staticClass: "form-control",
                attrs: { readonly: "", placeholder: "Fecha Activación" },
                domProps: { value: _vm.fecha_activacion },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.fecha_activacion = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v(" Estado Actual")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.estado_bateria,
                    expression: "estado_bateria"
                  }
                ],
                staticClass: "form-control",
                attrs: { readonly: "", placeholder: "Estado Actual" },
                domProps: { value: _vm.estado_bateria },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.estado_bateria = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }, [_vm._v(" Fecha Ingreso")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fecha_ingreso,
                    expression: "fecha_ingreso"
                  }
                ],
                staticClass: "form-control",
                attrs: { readonly: "", placeholder: "Código producto" },
                domProps: { value: _vm.fecha_ingreso },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.fecha_ingreso = $event.target.value
                  }
                }
              })
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
                  return _c("tr", { key: movimiento.identificador }, [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(movimiento.fecha_mov))
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
                        movimiento.tipo_mov === "Entrada"
                          ? [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    target: "_blank",
                                    to: {
                                      name: "mostrar-entrada",
                                      params: { id_entrada: movimiento.id_mov }
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "icon-eye" }),
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        movimiento.tipo_movimiento_especifico +
                                          " No.(" +
                                          movimiento.numero_documento +
                                          ")"
                                      )
                                  )
                                ]
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        movimiento.tipo_mov === "Salida"
                          ? [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    target: "_blank",
                                    to: {
                                      name: "mostrar-salida",
                                      params: { id_salida: movimiento.id_mov }
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "icon-eye" }),
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        movimiento.tipo_movimiento_especifico +
                                          " No.(" +
                                          movimiento.numero_documento +
                                          ")"
                                      )
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
                      _vm._v(_vm._s(movimiento.usuario_accion))
                    ])
                  ])
                }),
                _vm._v(" "),
                !_vm.movimientos.length
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-center", attrs: { colspan: "4" } },
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
      _c("span", [_c("strong", [_vm._v("Datos de Producto")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
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
          _vm._v("Tipo Movimiento")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Usuario")
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

/***/ "./resources/app/api/baterias.js":
/*!***************************************!*\
  !*** ./resources/app/api/baterias.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerBaterias: function obtenerBaterias(data, cb, errorCb) {
    axios.post('productos/obtener-baterias', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarCodigo: function buscarCodigo(data, cb, errorCb) {
    axios.post('productos/obtener-bateria-codigo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarCodigoBateriaCualquiera: function buscarCodigoBateriaCualquiera(data, cb, errorCb) {
    axios.post('productos/obtener-bateria-cualquiera', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerPorcentajeAjuste: function obtenerPorcentajeAjuste(data, cb, errorCb) {
    axios.post('productos/obtener-ajuste-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerBateria: function obtenerBateria(data, cb, errorCb) {
    axios.post('productos/obtener-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevaBateriaExterna: function nuevaBateriaExterna(data, cb, errorCb) {
    axios.post('productos/baterias/nueva', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCodigoBateria: function obtenerCodigoBateria(data, cb, errorCb) {
    axios.post('productos/obtener-codigo-producto', data).then(function (response) {
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
    axios.post('productos/registrar-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBateriaExterna: function registrarBateriaExterna(data, cb, errorCb) {
    axios.post('productos/registrar-baterias-externas', data).then(function (response) {
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
    axios.put('productos/actualizar-bateria', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  desactivar: function desactivar(data, cb, errorCb) {
    axios.put('producto/desactivar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  activar: function activar(data, cb, errorCb) {
    axios.put('producto/activar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nueva: function nueva(data, cb, errorCb) {
    axios.post('productos/nueva-bateria', data).then(function (response) {
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

/***/ "./resources/app/api/entradas-inventario-inicial.js":
/*!**********************************************************!*\
  !*** ./resources/app/api/entradas-inventario-inicial.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtener: function obtener(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevo: function nuevo(data, cb, errorCb) {
    axios.post('entradas/nuevo-inventario-inicial', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevoProductosVarios: function nuevoProductosVarios(data, cb, errorCb) {
    axios.post('entradas/nuevo-inventario-inicial-varios', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cargarPresentacionesProductos: function cargarPresentacionesProductos(data, cb, errorCb) {
    axios.post('entradas/obtener-presentaciones-producto', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarBateria: function registrarBateria(data, cb, errorCb) {
    axios.post('entradas/registrar-bateria', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  recibir: function recibir(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/recibir', data).then(function (response) {
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
    axios.put('entradas/inventario-inicial/actualizar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizarManual: function actualizarManual(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/actualizar-manual', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrar: function registrar(data, cb, errorCb) {
    axios.put('entradas/inventario-inicial/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  registrarManual: function registrarManual(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial-manual/registrar', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerEntrada: function obtenerEntrada(data, cb, errorCb) {
    axios.post('entradas/inventario-inicial/obtener-entrada', data).then(function (response) {
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

module.exports = "/images/block50.gif?4b6516f8e0b7c10cfccd51ce36336b66";

/***/ }),

/***/ "./resources/app/components/movimientos_productos/Listado.vue":
/*!********************************************************************!*\
  !*** ./resources/app/components/movimientos_productos/Listado.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_120e2a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=120e2a5e&scoped=true& */ "./resources/app/components/movimientos_productos/Listado.vue?vue&type=template&id=120e2a5e&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/movimientos_productos/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_120e2a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true& */ "./resources/app/components/movimientos_productos/Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_120e2a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_120e2a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "120e2a5e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/movimientos_productos/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/movimientos_productos/Listado.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/movimientos_productos/Listado.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/movimientos_productos/Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/app/components/movimientos_productos/Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_120e2a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/Listado.vue?vue&type=style&index=0&id=120e2a5e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_120e2a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_120e2a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_120e2a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_120e2a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_120e2a5e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/movimientos_productos/Listado.vue?vue&type=template&id=120e2a5e&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/app/components/movimientos_productos/Listado.vue?vue&type=template&id=120e2a5e&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_120e2a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=120e2a5e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/movimientos_productos/Listado.vue?vue&type=template&id=120e2a5e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_120e2a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_120e2a5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/productos/MovimientosBateria.vue":
/*!*******************************************************************!*\
  !*** ./resources/app/components/productos/MovimientosBateria.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MovimientosBateria_vue_vue_type_template_id_14552cbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovimientosBateria.vue?vue&type=template&id=14552cbb&scoped=true& */ "./resources/app/components/productos/MovimientosBateria.vue?vue&type=template&id=14552cbb&scoped=true&");
/* harmony import */ var _MovimientosBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovimientosBateria.vue?vue&type=script&lang=js& */ "./resources/app/components/productos/MovimientosBateria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MovimientosBateria_vue_vue_type_style_index_0_id_14552cbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true& */ "./resources/app/components/productos/MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MovimientosBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MovimientosBateria_vue_vue_type_template_id_14552cbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MovimientosBateria_vue_vue_type_template_id_14552cbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14552cbb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/productos/MovimientosBateria.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/productos/MovimientosBateria.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/productos/MovimientosBateria.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MovimientosBateria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/MovimientosBateria.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/productos/MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/app/components/productos/MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_style_index_0_id_14552cbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/MovimientosBateria.vue?vue&type=style&index=0&id=14552cbb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_style_index_0_id_14552cbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_style_index_0_id_14552cbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_style_index_0_id_14552cbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_style_index_0_id_14552cbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_style_index_0_id_14552cbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/productos/MovimientosBateria.vue?vue&type=template&id=14552cbb&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/app/components/productos/MovimientosBateria.vue?vue&type=template&id=14552cbb&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_template_id_14552cbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MovimientosBateria.vue?vue&type=template&id=14552cbb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/productos/MovimientosBateria.vue?vue&type=template&id=14552cbb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_template_id_14552cbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MovimientosBateria_vue_vue_type_template_id_14552cbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);