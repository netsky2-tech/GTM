(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presentacion"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Actualizar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/presentacion/Actualizar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_presentacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/presentacion */ "./resources/app/api/presentacion.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando contenido, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      form: {
        origen: [],
        unidad_medida: [],
        clasificacion: '',
        grado: [],
        codigo: '',
        escalar: '',
        cod_grado: ''
      },
      origenes: [],
      unidades_medidas: [],
      grados: [],
      btnAction: 'Guardar',
      errorMessages: []
    };
  },
  computed: {
    /**
     * @return {string}
     */
    Concatenar: function Concatenar() {
      var self = this;

      if (!!self.form.origen && !!self.form.unidad_medida && self.form.escalar !== '' && !!self.form.clasificacion && !!self.form.grado.grado) {
        if (self.form.grado.grado === 'N/A') {
          self.form.cod_grado = '';
          self.form.codigo = self.form.origen.origen + self.form.unidad_medida.unidad_medida + self.form.escalar + self.form.clasificacion + self.form.cod_grado;
          return self.form.codigo;
        } else {
          self.form.cod_grado = self.form.grado.grado;
          self.form.codigo = self.form.origen.origen + self.form.unidad_medida.unidad_medida + self.form.escalar + self.form.clasificacion + '-' + self.form.cod_grado;
          return self.form.codigo;
        }
      } else {
        self.form.codigo = 'Construyendo codigo..';
        return self.form.codigo;
      }
    },
    obtenerClasificacionUnidadMedida: function obtenerClasificacionUnidadMedida() {
      var self = this;

      if (self.form.unidad_medida.unidad_medidad) {
        self.form.clasificacion = self.form.unidad_medida.unidad_medidad.simbolo_um;
        return self.form.clasificacion;
      } else {
        self.form.clasificacion = self.form.unidad_medida.simbolo_um;
        return self.form.clasificacion;
      }
    }
  },
  methods: {
    obtenerPresentacion: function obtenerPresentacion() {
      var _this = this;

      var self = this;
      _api_presentacion__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerPresentacion({
        id_presentacion: this.$route.params.id_presentacion
      }, function (data) {
        self.form = data.presentacion;
        self.form.clasificacion = data.presentacion.simbolo_um;
        self.form.cod_grado = data.presentacion.grado.grado;
        self.loading = false;
      }, function (err) {
        alertify.error(err.id_presentacion, 5);

        _this.$router.push({
          name: 'presentacion'
        });
      });
    },
    actualizar: function actualizar() {
      var _this2 = this;

      var self = this;
      self.loading = true;
      self.btnAction = 'Guardando, espere......';
      _api_presentacion__WEBPACK_IMPORTED_MODULE_0__["default"].actualizar(self.form, function (data) {
        _this2.$router.push({
          name: 'presentacion'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Guardar';
      });
    },
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_presentacion__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.unidades_medidas = data.unidades_medidas;
        self.origenes = data.origenes;
        self.grados = data.grados;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    desactivar: function desactivar(unidadID) {
      var _this3 = this;

      var self = this;
      self.$swal.fire({
        title: 'Esta seguro de cambiar el estado?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _api_presentacion__WEBPACK_IMPORTED_MODULE_0__["default"].desactivar({
            id_presentacion: unidadID
          }, function (data) {
            alertify.warning("Presentaci??n desactivada correctamente", 5);

            _this3.$router.push({
              name: 'presentacion'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    },

    /*			obtenerClasificacionUnidadMedida(){
    				var self = this;
    				if(self.form.unidad_medida){
    					self.form.clasificacion = self.form.unidad_medida.simbolo_um
    				}
    			},*/
    activar: function activar(unidadID) {
      var _this4 = this;

      var self = this;
      self.$swal.fire({
        title: 'Esta seguro de cambiar el estado?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function (result) {
        if (result.value) {
          _api_presentacion__WEBPACK_IMPORTED_MODULE_0__["default"].activar({
            id_presentacion: unidadID
          }, function (data) {
            alertify.success("Presentaci??n activada correctamente", 5);

            _this4.$router.push({
              name: 'presentacion'
            });
          }, function (err) {
            console.log(err);
          });
        } else {
          self.btnAction = "Guardar";
        }
      });
    }
  },
  mounted: function mounted() {
    this.obtenerPresentacion();
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Listado.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/presentacion/Listado.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_presentacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/presentacion */ "./resources/app/api/presentacion.js");
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

 //import Pagination from '../layout/Pagination'

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando el contenido espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      filter: {
        page: 1,
        limit: 5,
        limitOptions: [5, 10, 15, 20],
        search: {
          field: 'codigo',
          value: '',
          status: 0
        }
      },
      presentacion_p: [],
      total: 0,
      descargando: false
    };
  },
  methods: {
    obtenerPresentacion: function obtenerPresentacion() {
      var self = this;
      self.loading = true;
      _api_presentacion__WEBPACK_IMPORTED_MODULE_0__["default"].obtener(self.filter, function (data) {
        self.presentacion_p = data.rows;
        self.total = data.total;
        self.loading = false; //this.changePage(1)	
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    changeLimit: function changeLimit(limit) {
      this.filter.page = 1;
      this.filter.limit = limit;
      this.obtenerPresentacion();
    },
    changePage: function changePage(page) {
      this.filter.page = page;
      this.obtenerPresentacion();
    },
    downloadItem: function downloadItem(ext) {
      var _this = this;

      var self = this;

      if (!this.descargando) {
        self.loading = true;
        this.descargando = true;
        alertify.success("Descargando datos, espere un momento.....", 5);
        axios.get('presentacion/reporte/' + ext, {
          responseType: 'blob'
        }).then(function (_ref) {
          var data = _ref.data;
          var blob = new Blob([data], {
            type: 'application/pdf'
          });
          ext === 'xls' ? blob = new Blob([data], {
            type: 'application/octet-stream'
          }) : blob = new Blob([data], {
            type: 'application/pdf'
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'ReporteListadoOPG.' + ext;
          link.click();
          _this.descargando = false;
          self.loading = false;
        })["catch"](function (error) {
          alertify.error("Error Descargando archivo.....", 5);
          self.descargando = false;
          self.loading = false;
        });
      } else {
        alertify.warning("Espere a que se complete la descarga anterior", 5);
      }
    }
  },

  /*components: {
  	'pagination': Pagination
  },*/
  mounted: function mounted() {
    this.obtenerPresentacion();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Registrar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/presentacion/Registrar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_presentacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/presentacion */ "./resources/app/api/presentacion.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      msg: 'Guardando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      form: {
        origen: [],
        unidad_medida: [],
        clasificacion: '',
        grado: [],
        codigo: '',
        escalar: '',
        cod_grado: ''
      },
      origenes: [],
      unidades_medidas: [],
      grados: [],
      btnAction: 'Registrar',
      errorMessages: []
    };
  },
  computed: {
    /**
     * @return {string}
     */
    Concatenar: function Concatenar() {
      var self = this;

      if (!!self.form.origen && !!self.form.unidad_medida && self.form.escalar !== '' && !!self.form.clasificacion && !!self.form.grado.grado) {
        if (self.form.grado.grado === 'N/A') {
          self.form.cod_grado = '';
          self.form.codigo = self.form.origen.origen + self.form.unidad_medida.unidad_medida + self.form.escalar + self.form.clasificacion + self.form.cod_grado;
          return self.form.codigo;
        } else {
          self.form.cod_grado = self.form.grado.grado;
          self.form.codigo = self.form.origen.origen + self.form.unidad_medida.unidad_medida + self.form.escalar + self.form.clasificacion + '-' + self.form.cod_grado;
          return self.form.codigo;
        }
      } else {
        self.form.codigo = 'Construyendo codigo..';
        return self.form.codigo;
      }
    }
  },
  methods: {
    registrar: function registrar() {
      var _this = this;

      var self = this;
      self.btnAction = 'Registrando, espere....';
      self.loading = true;
      _api_presentacion__WEBPACK_IMPORTED_MODULE_0__["default"].registrar(self.form, function (data) {
        self.loading = false;
        alertify.success("Datos registrados correctamente", 5);

        _this.$router.push({
          name: 'presentacion'
        });
      }, function (err) {
        self.loading = false;
        self.errorMessages = err;
        self.btnAction = 'Registrar';
      });
    },
    nuevo: function nuevo() {
      var self = this;
      self.loading = true;
      _api_presentacion__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.unidades_medidas = data.unidades_medidas;
        self.origenes = data.origenes;
        self.grados = data.grados;
        self.loading = false;
      }, function (err) {
        self.loading = false;
        console.log(err);
      });
    },
    obtenerClasificacionUnidadMedida: function obtenerClasificacionUnidadMedida() {
      var self = this;

      if (self.form.unidad_medida) {
        self.form.clasificacion = self.form.unidad_medida.simbolo_um;
      }
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/presentacion/Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-field[data-v-2a98484d] {\n  min-width: 120px;\n}\n.table a[data-v-2a98484d] {\n  color: #2675dc;\n}\n.table .table-number[data-v-2a98484d] {\n  width: 60px;\n}\n.table .action[data-v-2a98484d] {\n  width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/presentacion/Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Actualizar.vue?vue&type=template&id=393e00fe&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/presentacion/Actualizar.vue?vue&type=template&id=393e00fe& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("form", [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-sm-2 form-group" },
            [
              _c("label", [_vm._v("Origen")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  disabled: false,
                  label: "origen",
                  options: _vm.origenes
                },
                model: {
                  value: _vm.form.origen,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "origen", $$v)
                  },
                  expression: "form.origen"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.origen, function(message) {
                  return _c("li", {
                    key: message,
                    domProps: { textContent: _vm._s(message) }
                  })
                }),
                0
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-2 form-group" },
            [
              _c("label", [_vm._v("UM Presentanci??n")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  disabled: false,
                  label: "um_concat",
                  options: _vm.unidades_medidas
                },
                model: {
                  value: _vm.form.unidad_medida,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "unidad_medida", $$v)
                  },
                  expression: "form.unidad_medida"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.unidad_medida, function(message) {
                  return _c("li", {
                    key: message,
                    domProps: { textContent: _vm._s(message) }
                  })
                }),
                0
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2 form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" Escalar")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.escalar,
                  expression: "form.escalar"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "D??gite la cantidad a ingresar" },
              domProps: { value: _vm.form.escalar },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "escalar", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.escalar, function(message) {
                return _c("li", {
                  key: message,
                  domProps: { textContent: _vm._s(message) }
                })
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2 form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" UM C??lculo")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.obtenerClasificacionUnidadMedida,
                  expression: "obtenerClasificacionUnidadMedida"
                }
              ],
              staticClass: "form-control",
              attrs: { readonly: "" },
              domProps: { value: _vm.obtenerClasificacionUnidadMedida },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.obtenerClasificacionUnidadMedida = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(
                _vm.errorMessages.obtenerClasificacionUnidadMedida,
                function(message) {
                  return _c("li", {
                    key: message,
                    domProps: { textContent: _vm._s(message) }
                  })
                }
              ),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-2 form-group" },
            [
              _c("label", [_vm._v("Grado")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { disabled: false, label: "grado", options: _vm.grados },
                model: {
                  value: _vm.form.grado,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "grado", $$v)
                  },
                  expression: "form.grado"
                }
              }),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "error-messages" },
                _vm._l(_vm.errorMessages.grado, function(message) {
                  return _c("li", {
                    key: message,
                    domProps: { textContent: _vm._s(message) }
                  })
                }),
                0
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v(" C??digo")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.Concatenar,
                  expression: "Concatenar"
                }
              ],
              staticClass: "form-control",
              attrs: { readonly: "" },
              domProps: { value: _vm.Concatenar },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.Concatenar = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "error-messages" },
              _vm._l(_vm.errorMessages.codigo, function(message) {
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
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("div", { staticClass: "col-md-6" }, [
            _c(
              "div",
              { staticClass: "content-box-footer text-left" },
              [
                _vm.form.estado
                  ? [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          on: {
                            click: function($event) {
                              return _vm.desactivar(_vm.form.id_presentacion)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-trash-o" }, [
                            _vm._v("\tDeshabilitar")
                          ])
                        ]
                      )
                    ]
                  : [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          on: {
                            click: function($event) {
                              return _vm.activar(_vm.form.id_presentacion)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-check-square" }, [
                            _vm._v("\tHabilitar")
                          ])
                        ]
                      )
                    ]
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "presentacion" }, tag: "button" } },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction != "Guardar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.actualizar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm.loading
            ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Modificar Configuraci??n OPG")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para modificar una configuraci??n")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Listado.vue?vue&type=template&id=2a98484d&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/presentacion/Listado.vue?vue&type=template&id=2a98484d&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Administrar Configuraci??n OPG")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "box-description" }, [
            _vm._v("Listado de Configuraci??n OPG")
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
                [_vm._v("M??dulos")]
              ),
              _vm._v(">"),
              _c(
                "router-link",
                {
                  style: "margin-right: 10px;color: blue;",
                  attrs: { to: { name: "pagina-principal-inventario" } }
                },
                [_vm._v(" M??dulo inventario")]
              ),
              _vm._v("> Configuraci??n OPG")
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-4 sm-text-center" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-success",
                  attrs: {
                    tag: "button",
                    to: { name: "registrar-presentacion" }
                  }
                },
                [
                  _c("i", { staticClass: "pe-7s-plus" }),
                  _vm._v(" Crear Nueva Configuraci??n\n\t\t\t\t\t")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "col-md-8 sm-text-center form-inline justify-content-end",
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  _vm.filter.page = 1
                  _vm.obtenerPresentacion()
                }
              }
            },
            [
              _c("div", { staticClass: "form-group check-label" }, [
                _c(
                  "label",
                  {
                    staticClass: "check-label form-control mb-1 mr-sm-1 mb-sm-0"
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.filter.search.status,
                          expression: "filter.search.status"
                        }
                      ],
                      staticClass: "form-control mb-1 mr-sm-1 mb-sm-0",
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.filter.search.status)
                          ? _vm._i(_vm.filter.search.status, null) > -1
                          : _vm.filter.search.status
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.filter.search.status,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.filter.search,
                                  "status",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.filter.search,
                                  "status",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.filter.search, "status", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" Mostrar Todos")
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filter.search.field,
                      expression: "filter.search.field"
                    }
                  ],
                  staticClass: "form-control mb-1 mr-sm-1 mb-sm-0 search-field",
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
                      _vm.$set(
                        _vm.filter.search,
                        "field",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "codigo" } }, [
                    _vm._v(" C??digo")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filter.search.value,
                    expression: "filter.search.value"
                  }
                ],
                staticClass: "form-control mb-1 mr-sm-1 mb-sm-0",
                attrs: { placeholder: "Buscar", type: "text" },
                domProps: { value: _vm.filter.search.value },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.filter.search, "value", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-info",
                  on: {
                    click: function($event) {
                      _vm.filter.page = 1
                      _vm.obtenerPresentacion()
                    }
                  }
                },
                [_c("i", { staticClass: "pe-7s-search" }), _vm._v(" Buscar")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticStyle: { color: "#ffffff", "padding-left": "2px" },
                  attrs: { disabled: _vm.descargando },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.downloadItem("pdf")
                    }
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: { disabled: _vm.descargando }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-file-pdf-o",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticStyle: { color: "#ffffff", "padding-left": "2px" },
                  attrs: { disabled: _vm.descargando },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.downloadItem("xls")
                    }
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { disabled: _vm.descargando }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-file-excel-o",
                        attrs: { "aria-hidden": "true" }
                      })
                    ]
                  )
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-3" }, [
          _c("table", { staticClass: "table table-striped table-bordered" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.presentacion_p, function(um) {
                  return _c("tr", { key: um.id_presentacion }, [
                    _c("td", [_vm._v(_vm._s(um.codigo))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(um.origen.origen))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          um.unidad_medida.unidad_medida +
                            " " +
                            "(" +
                            um.unidad_medida.descripcion +
                            ")"
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(um.escalar))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(um.unidad_medida.simbolo_um))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(um.grado.grado))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      um.estado == 1
                        ? _c("div", [
                            _c("span", { staticClass: "badge badge-success" }, [
                              _vm._v("Activo")
                            ])
                          ])
                        : _c("div", [
                            _c("span", { staticClass: "badge badge-danger" }, [
                              _vm._v("Desactivado")
                            ])
                          ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "actualizar-presentacion",
                                params: { id_presentacion: um.id_presentacion }
                              },
                              tag: "a"
                            }
                          },
                          [_c("i", { staticClass: "icon-pencil" })]
                        )
                      ],
                      1
                    )
                  ])
                }),
                _vm._v(" "),
                !_vm.presentacion_p.length
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
            )
          ])
        ]),
        _vm._v(" "),
        _c("pagination", {
          attrs: {
            items: _vm.presentacion_p,
            total: _vm.total,
            page: _vm.filter.page,
            limitOptions: _vm.filter.limitOptions,
            limit: _vm.filter.limit
          },
          on: { changePage: _vm.changePage, changeLimit: _vm.changeLimit }
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("C??digo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Origen")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM Presentaci??n")]),
        _vm._v(" "),
        _c("th", [_vm._v("Escalar")]),
        _vm._v(" "),
        _c("th", [_vm._v("UM C??lculo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Grado")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center table-number" }, [
          _vm._v("Estado")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center action" }, [_vm._v("Opciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Registrar.vue?vue&type=template&id=775246a8&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/presentacion/Registrar.vue?vue&type=template&id=775246a8& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "content-box" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("form", [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-2 form-group" },
                  [
                    _c("label", [_vm._v("Origen")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        disabled: false,
                        label: "origen",
                        options: _vm.origenes
                      },
                      model: {
                        value: _vm.form.origen,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "origen", $$v)
                        },
                        expression: "form.origen"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.origen, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-2 form-group" },
                  [
                    _c("label", [_vm._v("UM Presentanci??n")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        disabled: false,
                        label: "um_concat",
                        options: _vm.unidades_medidas
                      },
                      on: { change: _vm.obtenerClasificacionUnidadMedida },
                      model: {
                        value: _vm.form.unidad_medida,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "unidad_medida", $$v)
                        },
                        expression: "form.unidad_medida"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.unidad_medida, function(
                        message
                      ) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-2 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" Escalar")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.escalar,
                        expression: "form.escalar"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { placeholder: "D??gite la cantidad a ingresar" },
                    domProps: { value: _vm.form.escalar },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "escalar", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.escalar, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-2 form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" UM C??lculo")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.clasificacion,
                        expression: "form.clasificacion"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "" },
                    domProps: { value: _vm.form.clasificacion },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "clasificacion", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.clasificacion, function(message) {
                      return _c("li", {
                        key: message,
                        domProps: { textContent: _vm._s(message) }
                      })
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-2 form-group" },
                  [
                    _c("label", [_vm._v("Grado")]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        disabled: false,
                        label: "grado",
                        options: _vm.grados
                      },
                      model: {
                        value: _vm.form.grado,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "grado", $$v)
                        },
                        expression: "form.grado"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "error-messages" },
                      _vm._l(_vm.errorMessages.grado, function(message) {
                        return _c("li", {
                          key: message,
                          domProps: { textContent: _vm._s(message) }
                        })
                      }),
                      0
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "" } }, [_vm._v(" C??digo")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.Concatenar,
                        expression: "Concatenar"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "" },
                    domProps: { value: _vm.Concatenar },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.Concatenar = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "error-messages" },
                    _vm._l(_vm.errorMessages.codigo, function(message) {
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
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  { attrs: { tag: "button", to: { name: "presentacion" } } },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      disabled: _vm.btnAction != "Registrar" ? true : false,
                      type: "button"
                    },
                    on: { click: _vm.registrar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.loading
              ? [_c("BlockUI", { attrs: { message: _vm.msg, url: _vm.url } })]
              : _vm._e()
          ],
          2
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
    return _c("div", { staticClass: "content-box-header" }, [
      _c("div", { staticClass: "box-title" }, [
        _vm._v("Crear Configuraci??n OPG")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para registrar nueva configuraci??n")
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

/***/ "./resources/app/api/presentacion.js":
/*!*******************************************!*\
  !*** ./resources/app/api/presentacion.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerTodas: function obtenerTodas(cb, errorCb) {
    axios.get('presentacion/obtener-presentacion-todas').then(function (response) {
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
    axios.post('presentacion/nuevo', data).then(function (response) {
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
    axios.post('presentacion/obtener', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerPresentacion: function obtenerPresentacion(data, cb, errorCb) {
    axios.post('presentacion/obtener-presentacion', data).then(function (response) {
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
    axios.post('presentacion/registrar', data).then(function (response) {
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
    axios.put('presentacion/actualizar', data).then(function (response) {
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
    axios.put('presentacion/desactivar', data).then(function (response) {
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
    axios.put('presentacion/activar', data).then(function (response) {
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

/***/ "./resources/app/components/presentacion/Actualizar.vue":
/*!**************************************************************!*\
  !*** ./resources/app/components/presentacion/Actualizar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actualizar_vue_vue_type_template_id_393e00fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=template&id=393e00fe& */ "./resources/app/components/presentacion/Actualizar.vue?vue&type=template&id=393e00fe&");
/* harmony import */ var _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actualizar.vue?vue&type=script&lang=js& */ "./resources/app/components/presentacion/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Actualizar_vue_vue_type_template_id_393e00fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Actualizar_vue_vue_type_template_id_393e00fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/presentacion/Actualizar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/presentacion/Actualizar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/app/components/presentacion/Actualizar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Actualizar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/presentacion/Actualizar.vue?vue&type=template&id=393e00fe&":
/*!*********************************************************************************************!*\
  !*** ./resources/app/components/presentacion/Actualizar.vue?vue&type=template&id=393e00fe& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_393e00fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Actualizar.vue?vue&type=template&id=393e00fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Actualizar.vue?vue&type=template&id=393e00fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_393e00fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Actualizar_vue_vue_type_template_id_393e00fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/presentacion/Listado.vue":
/*!***********************************************************!*\
  !*** ./resources/app/components/presentacion/Listado.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Listado_vue_vue_type_template_id_2a98484d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listado.vue?vue&type=template&id=2a98484d&scoped=true& */ "./resources/app/components/presentacion/Listado.vue?vue&type=template&id=2a98484d&scoped=true&");
/* harmony import */ var _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listado.vue?vue&type=script&lang=js& */ "./resources/app/components/presentacion/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Listado_vue_vue_type_style_index_0_id_2a98484d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true& */ "./resources/app/components/presentacion/Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Listado_vue_vue_type_template_id_2a98484d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Listado_vue_vue_type_template_id_2a98484d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2a98484d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/presentacion/Listado.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/presentacion/Listado.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/app/components/presentacion/Listado.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Listado.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/presentacion/Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/app/components/presentacion/Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2a98484d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Listado.vue?vue&type=style&index=0&id=2a98484d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2a98484d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2a98484d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2a98484d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2a98484d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_style_index_0_id_2a98484d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/app/components/presentacion/Listado.vue?vue&type=template&id=2a98484d&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/app/components/presentacion/Listado.vue?vue&type=template&id=2a98484d&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_2a98484d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Listado.vue?vue&type=template&id=2a98484d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Listado.vue?vue&type=template&id=2a98484d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_2a98484d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listado_vue_vue_type_template_id_2a98484d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/presentacion/Registrar.vue":
/*!*************************************************************!*\
  !*** ./resources/app/components/presentacion/Registrar.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registrar_vue_vue_type_template_id_775246a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registrar.vue?vue&type=template&id=775246a8& */ "./resources/app/components/presentacion/Registrar.vue?vue&type=template&id=775246a8&");
/* harmony import */ var _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registrar.vue?vue&type=script&lang=js& */ "./resources/app/components/presentacion/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registrar_vue_vue_type_template_id_775246a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registrar_vue_vue_type_template_id_775246a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/presentacion/Registrar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/presentacion/Registrar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/app/components/presentacion/Registrar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Registrar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/presentacion/Registrar.vue?vue&type=template&id=775246a8&":
/*!********************************************************************************************!*\
  !*** ./resources/app/components/presentacion/Registrar.vue?vue&type=template&id=775246a8& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_775246a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registrar.vue?vue&type=template&id=775246a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/presentacion/Registrar.vue?vue&type=template&id=775246a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_775246a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registrar_vue_vue_type_template_id_775246a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);