(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generar-planilla"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/generar_planilla/Generar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/generar_planilla/Generar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_generar_planilla_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/generar_planilla.js */ "./resources/app/api/generar_planilla.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweet_modal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweet-modal-vue */ "./node_modules/sweet-modal-vue/src/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SweetModal: sweet_modal_vue__WEBPACK_IMPORTED_MODULE_3__["SweetModal"]
  },
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      planillas_controles: [],
      id_nomina: 1,
      planilla_control: [],
      planilla: [],
      estadox: 0,
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      btnAction: 'Generar',
      errorMessages: []
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    obtenerplanilla: function obtenerplanilla() {
      var _this = this;

      var self = this;
      self.loading = true;
      self.planilla = [];

      if (self.planillas_controles) {
        /* && self.id_nomina parametro para obtener planilla según el tipo*/
        _api_generar_planilla_js__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerPlanilla({
          id_planilla_control: self.planilla_control.id_planilla_control //id_nomina:self.id_nomina,

        }, function (data) {
          self.planilla = data.planilla;
          self.loading = false;
        }, function (err) {
          alertify.error(err.id_planilla_control[0], 5);

          _this.$router.push({
            name: 'pagina-principal-nomina'
          });
        });
      } else {
        self.loading = false;
      }
    },
    registrar: function registrar() {
      var _this2 = this;

      var self = this;
      var txtGenerar = '¿Está seguro de generar esta planilla?';
      var txtReGenerar = '¿Está seguro de sobreescribir esta planilla?';
      var txtAnular = '¿Está seguro cancelar la operación?';
      self.btnAction = 'Guardando, espere......';

      if (self.planilla.length) {
        if (self.planilla_control.id_planilla_control) {
          self.$swal.fire({
            title: 'Confirmación de generación de planilla',
            text: self.planilla_control.estado === 1 ? txtGenerar : self.planilla_control.estado === 2 ? txtReGenerar : txtAnular,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            if (result.value) {
              self.loading = true;
              _api_generar_planilla_js__WEBPACK_IMPORTED_MODULE_0__["default"].registrar({
                planilla: self.planilla,
                id_planilla_control: self.planilla_control.id_planilla_control
              }, function (data) {
                alertify.success("Planilla generada correctamente", 5);

                _this2.$router.push({
                  name: 'pagina-principal-nomina'
                });
              }, function (err) {
                self.loading = false;
                self.errorMessages = err;
                self.btnAction = 'Generar';
              });
            } else {
              self.loading = false;
              self.btnAction = "Generar";
            }
          });
        } else {
          alertify.warning("Por favor revise si ha seleccionado una planilla valida", 5);
          self.loading = false;
          self.btnAction = 'Generar';
        }
      } else {
        alertify.warning("El detalle de activos debe contener al menos un elemento", 5);
        self.loading = false;
        self.btnAction = 'Generar';
      }
    },
    nuevo: function nuevo() {
      var self = this;
      _api_generar_planilla_js__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.planillas_controles = data.planillas_controles;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.nuevo();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/generar_planilla/Procesar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/generar_planilla/Procesar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_generar_planilla_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/generar_planilla.js */ "./resources/app/api/generar_planilla.js");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/block50.gif */ "./resources/app/assets/images/block50.gif");
/* harmony import */ var _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker/dist/locale/translations/es */ "./node_modules/vuejs-datepicker/dist/locale/translations/es.js");
/* harmony import */ var vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweet_modal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweet-modal-vue */ "./node_modules/sweet-modal-vue/src/main.js");
/* harmony import */ var _api_activos_fijos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/activos_fijos */ "./resources/app/api/activos_fijos.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SweetModal: sweet_modal_vue__WEBPACK_IMPORTED_MODULE_3__["SweetModal"]
  },
  data: function data() {
    return {
      loading: true,
      msg: 'Cargando los datos, espere un momento',
      url: '/public' + _assets_images_block50_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
      //It is important to import the loading image then use here
      planillas_controles: [],
      control_planilla: [],
      planilla: [],
      es: vuejs_datepicker_dist_locale_translations_es__WEBPACK_IMPORTED_MODULE_2___default.a,
      format: "dd-MM-yyyy",
      btnAction: 'Procesar',
      errorMessages: []
    };
  },
  methods: {
    formatDate: function formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    obtenerplanilla: function obtenerplanilla() {
      var _this = this;

      var self = this;
      _api_generar_planilla_js__WEBPACK_IMPORTED_MODULE_0__["default"].obtenerPlanillaProcesar({
        id_planilla_control: self.$route.params.id_planilla_control
      }, function (data) {
        self.planilla = data.planilla;
        self.control_planilla = data.control_planilla;
        self.loading = false;
      }, function (err) {
        alertify.error(err.id_planilla_control[0], 5);

        _this.$router.push({
          name: 'pagina-principal-nomina'
        });
      });
    },
    registrar: function registrar() {
      var _this2 = this;

      var self = this;
      self.btnAction = 'Guardando, espere......';

      if (self.planilla.length) {
        if (self.control_planilla.id_planilla_control) {
          self.$swal.fire({
            title: '¿Está seguro de procesar esta planilla?',
            text: "Se registrarán los cambios",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar',
            cancelButtonText: 'Cancelar'
          }).then(function (result) {
            if (result.value) {
              self.loading = true;
              _api_generar_planilla_js__WEBPACK_IMPORTED_MODULE_0__["default"].procesar({
                planilla: self.planilla,
                id_planilla_control: self.control_planilla.id_planilla_control
              }, function (data) {
                alertify.success("Planilla procesada correctamente", 5);

                _this2.$router.push({
                  name: 'pagina-principal-nomina'
                });
              }, function (err) {
                self.loading = false;
                self.errorMessages = err;
                self.btnAction = 'Procesar';
              });
            } else {
              self.loading = false;
              self.btnAction = "Procesar";
            }
          });
        } else {
          alertify.warning("Por favor revise si ha seleccionado una planilla valida", 5);
          self.loading = false;
          self.btnAction = 'Procesar';
        }
      } else {
        alertify.warning("El detalle de activos debe contener al menos un elemento", 5);
        self.loading = false;
        self.btnAction = 'Procesar';
      }
    },
    nuevo: function nuevo() {
      var self = this;
      _api_generar_planilla_js__WEBPACK_IMPORTED_MODULE_0__["default"].nuevo({}, function (data) {
        self.planillas_controles = data.planillas_controles;
        self.loading = false;
      }, function (err) {
        console.log(err);
      });
    }
  },
  mounted: function mounted() {
    this.nuevo();
    this.obtenerplanilla();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/generar_planilla/Generar.vue?vue&type=template&id=c479bc58&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/generar_planilla/Generar.vue?vue&type=template&id=c479bc58& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { staticClass: "label-search" }, [
                _vm._v("Planilla:")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  label: "descripcion",
                  options: _vm.planillas_controles
                },
                on: { change: _vm.obtenerplanilla },
                model: {
                  value: _vm.planilla_control,
                  callback: function($$v) {
                    _vm.planilla_control = $$v
                  },
                  expression: "planilla_control"
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "pagina-principal-nomina" },
                      tag: "button"
                    }
                  },
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
                      disabled: _vm.btnAction !== "Generar",
                      type: "button"
                    },
                    on: { click: _vm.registrar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n                    ")]
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Generar planilla")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para generar planilla")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos de la planilla")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/generar_planilla/Procesar.vue?vue&type=template&id=13999a3f&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/app/components/generar_planilla/Procesar.vue?vue&type=template&id=13999a3f& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { staticClass: "label-search" }, [_vm._v("Código:")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "codigo_planilla", disabled: true },
                model: {
                  value: _vm.control_planilla,
                  callback: function($$v) {
                    _vm.control_planilla = $$v
                  },
                  expression: "control_planilla"
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
                _vm._v("Planilla:")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "descripcion", disabled: true },
                model: {
                  value: _vm.control_planilla,
                  callback: function($$v) {
                    _vm.control_planilla = $$v
                  },
                  expression: "control_planilla"
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
              _c("label", { staticClass: "label-search" }, [_vm._v("Año:")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { label: "anio_proceso", disabled: true },
                model: {
                  value: _vm.control_planilla,
                  callback: function($$v) {
                    _vm.control_planilla = $$v
                  },
                  expression: "control_planilla"
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
                attrs: { label: "mes_proceso", disabled: true },
                model: {
                  value: _vm.control_planilla,
                  callback: function($$v) {
                    _vm.control_planilla = $$v
                  },
                  expression: "control_planilla"
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              { staticClass: "content-box-footer text-right" },
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "pagina-principal-nomina" },
                      tag: "button"
                    }
                  },
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
                      disabled: _vm.btnAction !== "Procesar",
                      type: "button"
                    },
                    on: { click: _vm.registrar }
                  },
                  [_vm._v(_vm._s(_vm.btnAction) + "\n                    ")]
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
      _c("div", { staticClass: "box-title" }, [_vm._v("Procesar planilla")]),
      _vm._v(" "),
      _c("div", { staticClass: "box-description" }, [
        _vm._v("Formulario para procesar planilla")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-success" }, [
      _c("span", [_c("strong", [_vm._v("Datos de la planilla")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/app/api/activos_fijos.js":
/*!********************************************!*\
  !*** ./resources/app/api/activos_fijos.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  nuevo: function nuevo(data, cb, errorCb) {
    axios.post('activosfijos/activos/nuevo', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  buscarUbicacionActivo: function buscarUbicacionActivo(data, cb, errorCb) {
    axios.post('activosfijos/obtener-ubicacion-activo', data).then(function (response) {
      if (response.data.status == 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevoCierre: function nuevoCierre(data, cb, errorCb) {
    axios.post('activosfijos/activos/nuevo-cierre', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtener: function obtener(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerSolicitudAutorizacion: function obtenerSolicitudAutorizacion(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-solicitud-autorizacion', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerCierres: function obtenerCierres(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-cierres', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerActivosTrabajador: function obtenerActivosTrabajador(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-por-trabajador', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerActivosSucursal: function obtenerActivosSucursal(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-por-sucursal', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerActivoFijo: function obtenerActivoFijo(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-activo-fijo', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerTraslados: function obtenerTraslados(data, cb, errorCb) {
    axios.post('activosfijos/activos/obtener-traslados', data).then(function (response) {
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
    axios.post('activosfijos/activos/registrar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  actualizar: function actualizar(data, cb, errorCb) {
    axios.put('activosfijos/activos/actualizar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  reasignar: function reasignar(data, cb, errorCb) {
    axios.put('activosfijos/activos/reasignar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  revaluar: function revaluar(data, cb, errorCb) {
    axios.put('activosfijos/activos/revaluar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  generarCierre: function generarCierre(data, cb, errorCb) {
    axios.put('activosfijos/activos/generar-cierre', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  reasignarLote: function reasignarLote(data, cb, errorCb) {
    axios.put('activosfijos/activos/reasignar-lote', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  desactivar: function desactivar(data, cb, errorCb) {
    axios.put('activosfijos/activos/desactivar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  activar: function activar(data, cb, errorCb) {
    axios.put('activosfijos/activos/activar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  cambiarEstadoSolicitudBaja: function cambiarEstadoSolicitudBaja(data, cb, errorCb) {
    axios.put('activosfijos/activos/cambiar-estado', data).then(function (response) {
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

/***/ "./resources/app/api/generar_planilla.js":
/*!***********************************************!*\
  !*** ./resources/app/api/generar_planilla.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  obtenerPlanilla: function obtenerPlanilla(data, cb, errorCb) {
    axios.post('modulo-nomina/planillas/obtener', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  obtenerPlanillaProcesar: function obtenerPlanillaProcesar(data, cb, errorCb) {
    axios.put('modulo-nomina/planillas/obtener-planilla-procesar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  nuevo: function nuevo(data, cb, errorCb) {
    axios.post('modulo-nomina/planillas/nuevo', data).then(function (response) {
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
    axios.post('modulo-nomina/planillas/registrar', data).then(function (response) {
      if (response.data.status === 'success') {
        cb(response.data.result);
      } else {
        errorCb(response.data.result);
      }
    })["catch"](function (error) {
      errorCb(error);
    });
  },
  procesar: function procesar(data, cb, errorCb) {
    axios.post('modulo-nomina/planillas/procesar', data).then(function (response) {
      if (response.data.status === 'success') {
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

/***/ "./resources/app/components/generar_planilla/Generar.vue":
/*!***************************************************************!*\
  !*** ./resources/app/components/generar_planilla/Generar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Generar_vue_vue_type_template_id_c479bc58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Generar.vue?vue&type=template&id=c479bc58& */ "./resources/app/components/generar_planilla/Generar.vue?vue&type=template&id=c479bc58&");
/* harmony import */ var _Generar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Generar.vue?vue&type=script&lang=js& */ "./resources/app/components/generar_planilla/Generar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Generar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Generar_vue_vue_type_template_id_c479bc58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Generar_vue_vue_type_template_id_c479bc58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/generar_planilla/Generar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/generar_planilla/Generar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/app/components/generar_planilla/Generar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Generar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Generar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/generar_planilla/Generar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Generar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/generar_planilla/Generar.vue?vue&type=template&id=c479bc58&":
/*!**********************************************************************************************!*\
  !*** ./resources/app/components/generar_planilla/Generar.vue?vue&type=template&id=c479bc58& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generar_vue_vue_type_template_id_c479bc58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Generar.vue?vue&type=template&id=c479bc58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/generar_planilla/Generar.vue?vue&type=template&id=c479bc58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generar_vue_vue_type_template_id_c479bc58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generar_vue_vue_type_template_id_c479bc58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/app/components/generar_planilla/Procesar.vue":
/*!****************************************************************!*\
  !*** ./resources/app/components/generar_planilla/Procesar.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Procesar_vue_vue_type_template_id_13999a3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Procesar.vue?vue&type=template&id=13999a3f& */ "./resources/app/components/generar_planilla/Procesar.vue?vue&type=template&id=13999a3f&");
/* harmony import */ var _Procesar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Procesar.vue?vue&type=script&lang=js& */ "./resources/app/components/generar_planilla/Procesar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Procesar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Procesar_vue_vue_type_template_id_13999a3f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Procesar_vue_vue_type_template_id_13999a3f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/app/components/generar_planilla/Procesar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/app/components/generar_planilla/Procesar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/app/components/generar_planilla/Procesar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Procesar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Procesar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/generar_planilla/Procesar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Procesar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/app/components/generar_planilla/Procesar.vue?vue&type=template&id=13999a3f&":
/*!***********************************************************************************************!*\
  !*** ./resources/app/components/generar_planilla/Procesar.vue?vue&type=template&id=13999a3f& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Procesar_vue_vue_type_template_id_13999a3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Procesar.vue?vue&type=template&id=13999a3f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/app/components/generar_planilla/Procesar.vue?vue&type=template&id=13999a3f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Procesar_vue_vue_type_template_id_13999a3f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Procesar_vue_vue_type_template_id_13999a3f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);